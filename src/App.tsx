import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { GeneratedPostsDisplay } from './components/GeneratedPostsDisplay';
import { generateSocialMediaPosts, isApiKeyConfigured } from './services/geminiService';
import { FormState, GeneratedPosts } from './types';
import { Modal } from './components/Modal';

const ApiKeyErrorDisplay: React.FC = () => (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex items-center justify-center p-4">
        <div className="bg-red-900/50 border border-red-700 text-red-300 px-6 py-8 rounded-lg text-center max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
            <p className="text-lg mb-2">The Google Gemini API Key is missing.</p>
            <p className="text-slate-300">
                To get the application running, you need to set your API key as an environment variable in your hosting provider's settings.
            </p>
            {/* Fix: Updated environment variable name to API_KEY as per guidelines. */}
            <p className="mt-4 text-sm bg-slate-800 p-3 rounded font-mono">
                Example: <code>API_KEY=YOUR_API_KEY_HERE</code>
            </p>
            <p className="mt-4 text-slate-400">
                Please refer to the <code>README.md</code> file and your hosting provider's documentation for more details on setting up environment variables. After setting the key, you may need to redeploy your application.
            </p>
        </div>
    </div>
);


const App: React.FC = () => {
  const [generatedPosts, setGeneratedPosts] = useState<GeneratedPosts | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState<boolean>(false);
  
  if (!isApiKeyConfigured()) {
    return <ApiKeyErrorDisplay />;
  }

  const handleGenerate = useCallback(async (formState: FormState) => {
    setIsLoading(true);
    setError(null);
    setGeneratedPosts(null);
    try {
      const result = await generateSocialMediaPosts(formState);
      setGeneratedPosts(result);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header onDeployClick={() => setIsDeployModalOpen(true)} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <InputForm onGenerate={handleGenerate} isLoading={isLoading} />
          <GeneratedPostsDisplay
            posts={generatedPosts}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Powered by Google Gemini</p>
      </footer>

      <Modal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
        title="Deploy Your Application"
      >
        <div className="space-y-4 text-slate-300">
            <p>
                This application is ready to be shared with the world!
            </p>
            <p>
                To make it publicly accessible, you can deploy it to a static hosting service. These platforms often offer generous free tiers and are perfect for frontend applications like this one.
            </p>
            <div>
                <h3 className="font-semibold text-slate-200 mb-2">Popular Hosting Options:</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Vercel</a></li>
                    <li><a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Netlify</a></li>
                    <li><a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">GitHub Pages</a></li>
                    <li><a href="https://firebase.google.com/docs/hosting" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Firebase Hosting</a></li>
                </ul>
            </div>
             <p className="pt-4 text-sm text-slate-400">
                Typically, you would connect your code repository (like GitHub) to one of these services for continuous deployment.
            </p>
        </div>
      </Modal>
    </div>
  );
};

export default App;