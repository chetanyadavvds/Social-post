import React from 'react';
import { GeneratedPosts, Platform } from '../types';
import { PostCard } from './PostCard';
import { LoadingSpinner } from './icons/LoadingSpinner';

interface GeneratedPostsDisplayProps {
  posts: GeneratedPosts | null;
  isLoading: boolean;
  error: string | null;
}

export const GeneratedPostsDisplay: React.FC<GeneratedPostsDisplayProps> = ({ posts, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-slate-400">
          <LoadingSpinner className="w-12 h-12 mb-4" />
          <p className="text-lg">Generating content...</p>
          <p className="text-sm">This may take a moment.</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
            <strong className="font-bold">An error occurred:</strong>
            <p className="block sm:inline ml-2">{error}</p>
          </div>
        </div>
      );
    }
    
    if (posts && Object.keys(posts).length > 0) {
      return (
        <div className="space-y-6">
          {(Object.keys(posts) as Platform[]).map(platform => (
              posts[platform] && <PostCard key={platform} platform={platform} content={posts[platform]!} />
          ))}
        </div>
      );
    }
    
    return (
      <div className="flex items-center justify-center h-full text-center text-slate-500">
        <div>
          <h3 className="text-xl font-semibold">Your generated posts will appear here.</h3>
          <p>Fill out the form and click "Generate Posts" to get started.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 min-h-[500px] lg:min-h-full">
      <h2 className="text-2xl font-semibold mb-6 text-sky-400">3. AI-Generated Content</h2>
      <div className="relative h-[calc(100%-48px)]">
        {renderContent()}
      </div>
    </div>
  );
};