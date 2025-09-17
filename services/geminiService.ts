
import { GoogleGenAI, Type } from "@google/genai";
import { FormState, GeneratedPosts, Platform } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function buildPrompt(formState: FormState): string {
  const enabledPlatforms = Object.entries(formState.platforms)
    .filter(([, config]) => config.enabled)
    .map(([platform, config]) => `- **${platform.charAt(0).toUpperCase() + platform.slice(1)}:** ${config.format}`)
    .join('\n');

  if (!enabledPlatforms) {
    throw new Error("Please select at least one platform.");
  }

  return `
You are an expert social media content strategist. Your task is to generate compelling social media posts based on the following specifications. Adhere strictly to the requested format for each platform.

**Main Topic:**
${formState.topic}

**Target Audience:**
${formState.audience}

**Tone:**
${formState.tone}

**Platform-Specific Content Requirements:**
${enabledPlatforms}

Please provide the output as a single, valid JSON object. The keys of the object should be the platform names (e.g., "facebook", "twitter") in lowercase, and the values should be the generated string content for each platform. Do not include any platforms that were not requested.
  `;
}

function buildSchema(formState: FormState): { [key: string]: any } {
    const enabledPlatforms = Object.keys(formState.platforms)
        .filter(p => formState.platforms[p as Platform].enabled) as Platform[];

    const properties = enabledPlatforms.reduce((acc, platform) => {
        acc[platform] = {
            type: Type.STRING,
            description: `Generated content for ${platform}`
        };
        return acc;
    }, {} as { [key: string]: { type: Type, description: string } });

    return {
        type: Type.OBJECT,
        properties,
    };
}


export const generateSocialMediaPosts = async (formState: FormState): Promise<GeneratedPosts> => {
  const prompt = buildPrompt(formState);
  const schema = buildSchema(formState);

  const result = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
        responseMimeType: "application/json",
        responseSchema: schema,
    }
  });

  try {
    const jsonString = result.text.trim();
    const parsedJson = JSON.parse(jsonString);
    return parsedJson as GeneratedPosts;
  } catch (e) {
    console.error("Failed to parse Gemini response as JSON:", result.text);
    throw new Error("The AI returned an invalid response. Please try again.");
  }
};
