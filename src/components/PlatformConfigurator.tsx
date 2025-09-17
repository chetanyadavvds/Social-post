import React from 'react';
import { Platform, PlatformConfig } from '../types';
import { PLATFORM_FORMATS } from '../constants';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from './icons/SocialIcons';

interface PlatformConfiguratorProps {
  platform: Platform;
  config: PlatformConfig;
  onChange: (platform: Platform, newConfig: Partial<PlatformConfig>) => void;
}

const platformMeta: { [key in Platform]: { name: string; icon: React.FC<any> } } = {
  [Platform.Facebook]: { name: 'Facebook', icon: FacebookIcon },
  [Platform.Twitter]: { name: 'Twitter', icon: TwitterIcon },
  [Platform.Instagram]: { name: 'Instagram', icon: InstagramIcon },
  [Platform.LinkedIn]: { name: 'LinkedIn', icon: LinkedInIcon },
};

export const PlatformConfigurator: React.FC<PlatformConfiguratorProps> = ({ platform, config, onChange }) => {
  const Icon = platformMeta[platform].icon;

  return (
    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6" />
          <span className="font-semibold text-lg">{platformMeta[platform].name}</span>
        </div>
        <label htmlFor={`toggle-${platform}`} className="flex items-center cursor-pointer">
            <div className="relative">
                <input 
                    type="checkbox" 
                    id={`toggle-${platform}`} 
                    className="sr-only" 
                    checked={config.enabled}
                    onChange={(e) => onChange(platform, { enabled: e.target.checked })}
                />
                <div className="block bg-slate-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out"></div>
            </div>
            <style>{`
                input:checked ~ .dot {
                    transform: translateX(100%);
                    background-color: #0ea5e9;
                }
            `}</style>
        </label>
      </div>
      {config.enabled && (
        <div className="mt-4">
          <label htmlFor={`format-${platform}`} className="sr-only">Format for {platformMeta[platform].name}</label>
          <select
            id={`format-${platform}`}
            value={config.format}
            onChange={(e) => onChange(platform, { format: e.target.value })}
            className="w-full bg-slate-600 border border-slate-500 rounded-md shadow-sm py-2 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
          >
            {PLATFORM_FORMATS[platform].map(format => (
              <option key={format} value={format}>{format}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};