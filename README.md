# 🤖 Social Media Content Automator

> An AI-powered tool that generates tailored social media posts for various platforms based on user-defined topics, tones, and audiences. Powered by the Google Gemini API.

This application provides a simple and intuitive interface to generate high-quality social media content, helping marketers, creators, and businesses streamline their content creation workflow.

![App Screenshot](https://storage.googleapis.com/aistudio-ux-team-public/sdk-pro-samples/social-media-automator-screenshot.png)

---

## ✨ Features

-   **AI-Powered Generation**: Leverages Google's `gemini-2.5-flash` model for fast, context-aware, and high-quality content.
-   **Multi-Platform Support**: Generates posts specifically optimized for Facebook, Twitter, Instagram, and LinkedIn.
-   **Deep Customization**: Tailor content by specifying the main topic, target audience, and desired tone.
-   **Format Control**: Choose specific content formats for each platform, such as a tweet thread, an Instagram caption with image suggestions, or a professional LinkedIn article.
-   **Sleek, Responsive UI**: A clean, modern, and dark-themed interface built with React and Tailwind CSS that works beautifully on all screen sizes.
-   **One-Click Copy**: Easily copy the generated content for any platform to your clipboard.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI**: [Google Gemini API](https://ai.google.dev/) (`@google/genai`)

## 🚀 Getting Started

To run this project locally, you'll need to have Node.js and a package manager like npm installed.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/social-media-automator.git
    cd social-media-automator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of your project and add your Google Gemini API key:
    ```
    # If using Vite
    VITE_API_KEY=YOUR_GEMINI_API_KEY_HERE

    # If using Create React App
    REACT_APP_API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```
    *The application code expects `process.env.API_KEY`. Build tools like Vite and Create React App expose environment variables with specific prefixes (`VITE_` or `REACT_APP_`) to the frontend code.*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running on your local machine, typically at `http://localhost:5173`.

## 💻 Usage

1.  Navigate to the application in your browser.
2.  Fill in the **Main Topic** for your content.
3.  Select the desired **Target Audience** and **Tone** from the dropdown menus.
4.  Under **Select Platforms & Formats**, enable the social media platforms you want to generate content for using the toggle switches.
5.  For each enabled platform, choose a specific content format from its dropdown list.
6.  Click the **"Generate Posts"** button.
7.  The AI-generated content will appear on the right-hand side, organized into cards for each platform.
8.  Use the **"Copy"** button on any card to copy the text to your clipboard.

## 🌐 Deployment

This is a static React application, making it easy to deploy. You can host it on any static site hosting service.

Popular choices include:
-   [Vercel](https://vercel.com)
-   [Netlify](https://netlify.com)
-   [GitHub Pages](https://pages.github.com)
-   [Firebase Hosting](https://firebase.google.com/docs/hosting)

Simply connect your GitHub repository to one of these services and configure it to build and deploy your application. Remember to set up your `API_KEY` as an environment variable in your hosting provider's settings.
