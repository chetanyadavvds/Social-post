
import React, { useState } from 'react';
import { FormState, Platform, PlatformConfigs } from '../types';
import { AUDIENCE_OPTIONS, TONE_OPTIONS, INITIAL_PLATFORM_CONFIGS } from '../constants';
import { PlatformConfigurator } from './PlatformConfigurator';
import { LoadingSpinner } from './icons/LoadingSpinner';

interface InputFormProps {
  onGenerate: (formState: FormState) => void;
  isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ onGenerate, isLoading }) => {
  const [topic, setTopic] = useState<string>('The Importance of Upskilling in the Digital Age');
  const [audience, setAudience] = useState<string>(AUDIENCE_OPTIONS[2]);
  const [tone, setTone] = useState<string>(TONE_OPTIONS[3]);
  const [platforms, setPlatforms] = useState<PlatformConfigs>(INITIAL_PLATFORM_CONFIGS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ topic, audience, tone, platforms });
  };

  const handlePlatformChange = (platform: Platform, config: { enabled?: boolean; format?: string }) => {
    setPlatforms(prev => ({
      ...prev,
      [platform]: { ...prev[platform], ...config },
    }));
  };

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
      <h2 className="text-2xl font-semibold mb-6 text-sky-400">1. Define Your Content</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-slate-300 mb-2">Main Topic</label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="e.g., The future of AI in healthcare"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="audience" className="block text-sm font-medium text-slate-300 mb-2">Target Audience</label>
            <select
              id="audience"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {AUDIENCE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-slate-300 mb-2">Tone</label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {TONE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>

        <div>
            <h3 className="text-xl font-semibold mb-4 text-sky-400 mt-8">2. Select Platforms & Formats</h3>
            <div className="space-y-4">
                {(Object.keys(platforms) as Platform[]).map(p => (
                    <PlatformConfigurator 
                        key={p} 
                        platform={p} 
                        config={platforms[p]} 
                        onChange={handlePlatformChange} 
                    />
                ))}
            </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-800 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500"
        >
          {isLoading ? <><LoadingSpinner /> Generating...</> : 'Generate Posts'}
        </button>
      </form>
    </div>
  );
};
