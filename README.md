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
-   **Build Tool**: [Vite](https://vitejs.dev/)
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
    # .env
    VITE_API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```
    *The application code has been configured to use Vite's standard `VITE_` prefix for environment variables.*

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

## 🌐 Deploying to GitHub Pages

You cannot deploy the source code (`.tsx` files) directly. You must **build** the project first. Follow these steps carefully to deploy your app to GitHub Pages.

### Step 1: Configure Vite for GitHub Pages
A `vite.config.ts` file has been added to this project. It sets the `base` path to `/Social-post/`, which is essential for your deployed site to load correctly. You shouldn't need to change this.

### Step 2: Update `package.json`
You need to tell your project where it will be hosted and add scripts for easy deployment. Open your `package.json` file and add the following two lines:

1. Add the `homepage` key to the top level:
```json
"homepage": "https://chetanyadavvds.github.io/Social-post",
```

2. Add `predeploy` and `deploy` scripts inside the existing `scripts` object:
```json
"scripts": {
  // ... other scripts like "dev", "build" ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
```

### Step 3: Install `gh-pages`
This is a small helper package that makes pushing your built code to GitHub Pages easy.
```bash
npm install gh-pages --save-dev
```

### Step 4: Deploy!
Now, just run the deploy command from your terminal:
```bash
npm run deploy
```
This command will first run `predeploy` (which builds your application into a `dist` folder) and then run `deploy` (which pushes the contents of the `dist` folder to a special `gh-pages` branch in your repository).

### Step 5: Configure GitHub Pages Source
1.  Go to your repository on GitHub.
2.  Click on **Settings** > **Pages**.
3.  Under "Build and deployment", change the **Source** from "Deploy from a branch" to **GitHub Actions**. If that option is unavailable or you prefer the manual branch method, select **"Deploy from a branch"** and choose `gh-pages` as the branch and `/ (root)` as the folder.
4.  Click **Save**.

Your site should be live at the `homepage` URL you specified in a few minutes!

> **⚠️ SECURITY WARNING:** The `npm run deploy` method will make your `VITE_API_KEY` from the `.env` file **publicly visible** in your site's JavaScript files. For personal projects or demos this might be okay, but for a production application, you should use [GitHub Repository Secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions) and a GitHub Actions workflow to build and deploy your site securely.

## 🔍 Troubleshooting

### Help! I deployed my app, but all I see is a blank page.

If you followed the deployment steps above, this is unlikely. But if it happens:

1.  **Check the API Key**: The most common cause for the app *showing an error* (not a blank page) is a missing API key. When deploying, you must set the `VITE_API_KEY` as an environment variable in your hosting provider's settings (or in GitHub Secrets if using Actions).

2.  **Check the Browser Console**: Your browser's developer tools are your best friend.
    -   Right-click on the blank page and select "Inspect".
    -   Go to the "Console" tab.
    -   Look for any errors in red. An error like `404 Not Found` for a JavaScript or CSS file usually means the `base` path in `vite.config.ts` or the `homepage` in `package.json` is incorrect.
