# 🤖 Social Media Content Automator

> An AI-powered tool that generates tailored social media posts for various platforms based on user-defined topics, tones, and audiences. Powered by the Google Gemini API.

This application provides a simple and intuitive interface to generate high-quality social media content, helping marketers, creators, and businesses streamline their content creation workflow.

![App Screenshot](https://storage.googleapis.com/aistudio-ux-team-public/sdk-pro-samples/social-media-automator-screenshot.png)

---

## 🚀 How to Deploy (and Fix the Blank Page!)

The most common issue is deploying the source code instead of the **built application**. Browsers can't read `.tsx` files directly. You must build the project first. Follow these steps exactly.

### Step 1: Set Up Your API Key

1.  Create a file named `.env` in the **root of your project**.
2.  Add your Google Gemini API key to this file. **Important:** The name must be `API_KEY`.

    ```
    # .env
    API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```

3.  **Crucial Security Step:** Create or open the `.gitignore` file in your project root and add `.env` to it on a new line. This prevents you from accidentally publishing your secret API key.

### Step 2: Configure for GitHub Pages

1.  Open your `package.json` file.
2.  Add a `homepage` key, setting the value to your GitHub Pages URL.
    ```json
    "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
    ```
    For you, this should be: `"homepage": "https://chetanyadavvds.github.io/Social-post",`

3.  Add the `predeploy` and `deploy` scripts inside the `scripts` object:
    ```json
    "scripts": {
      // ... your other scripts like "dev" ...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    },
    ```

### Step 3: Install `gh-pages`

This helper package makes deployment easy. Run this in your terminal:
```bash
npm install gh-pages --save-dev
```

### Step 4: Deploy the App

Run the deploy command from your terminal:
```bash
npm run deploy
```

This command automatically does two things:
1.  `npm run build`: Compiles and bundles all your code into a final, optimized `dist` folder.
2.  `gh-pages -d dist`: Pushes the contents of that `dist` folder to a special `gh-pages` branch on your GitHub repository.

### Step 5: Set GitHub Pages Source Branch

1.  On your GitHub repository page, go to **Settings** > **Pages**.
2.  Under "Build and deployment", set the **Source** to **Deploy from a branch**.
3.  Change the branch to `gh-pages` and the folder to `/(root)`.
4.  Click **Save**.

Wait a few minutes, and your site will be live and working at your `homepage` URL!

## 🛠️ Tech Stack & Project Structure

-   **Project Structure**: All application code now resides in the `/src` directory for better organization.
-   **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI**: [Google Gemini API](https://ai.google.dev/) (`@google/genai`)

## 💻 Local Development

1.  **Clone the repository and `cd` into it.**
2.  **Install dependencies:** `npm install`
3.  **Set up your `.env` file** as described in Step 1 above.
4.  **Run the development server:** `npm run dev`
