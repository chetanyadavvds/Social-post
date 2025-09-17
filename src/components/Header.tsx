import React from 'react';
import { DeployIcon } from './icons/DeployIcon';

interface HeaderProps {
    onDeployClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDeployClick }) => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-5 flex justify-center items-center relative">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
            Social Media Content Automator
          </h1>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
            Fill in the details below, and let AI craft engaging social media posts tailored to your needs.
          </p>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={onDeployClick}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-slate-200 font-semibold py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500"
          >
            <DeployIcon className="w-5 h-5" />
            <span>Deploy</span>
          </button>
        </div>
      </div>
    </header>
  );
};