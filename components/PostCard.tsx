
import React, { useState } from 'react';
import { Platform } from '../types';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from './icons/SocialIcons';
import { CopyIcon } from './icons/CopyIcon';

interface PostCardProps {
  platform: Platform;
  content: string;
}

const platformMeta: { [key in Platform]: { name: string; icon: React.FC<any>; color: string } } = {
  [Platform.Facebook]: { name: 'Facebook', icon: FacebookIcon, color: 'text-blue-500' },
  [Platform.Twitter]: { name: 'Twitter', icon: TwitterIcon, color: 'text-sky-400' },
  [Platform.Instagram]: { name: 'Instagram', icon: InstagramIcon, color: 'text-pink-500' },
  [Platform.LinkedIn]: { name: 'LinkedIn', icon: LinkedInIcon, color: 'text-blue-600' },
};

export const PostCard: React.FC<PostCardProps> = ({ platform, content }) => {
  const [copied, setCopied] = useState(false);
  const { name, icon: Icon, color } = platformMeta[platform];

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-700/50 border border-slate-600 rounded-lg shadow-lg overflow-hidden">
      <div className={`flex items-center justify-between p-4 bg-slate-700 border-b border-slate-600`}>
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${color}`} />
          <h3 className="font-bold text-lg text-white">{name}</h3>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm bg-slate-600 hover:bg-slate-500 text-slate-200 font-semibold py-1 px-3 rounded-md transition-colors"
        >
          <CopyIcon className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4">
        <p className="text-slate-300 whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
};
