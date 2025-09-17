import { Platform, PlatformConfigs } from './types';

export const AUDIENCE_OPTIONS: string[] = [
  'General Public',
  'CEOs & Executives',
  'HR Professionals',
  'Students & Freshers',
  'Technical Professionals',
  'Marketers',
  'Entrepreneurs',
  'Small Business Owners',
];

export const TONE_OPTIONS: string[] = [
  'Informative',
  'Inspiring',
  'Humorous',
  'Authoritative',
  'Engaging',
  'Casual',
  'Formal',
  'Data-driven',
  'Empowering',
];

export const PLATFORM_FORMATS: { [key in Platform]: string[] } = {
  [Platform.Facebook]: [
    'Short text post with engaging question',
    'Text with image suggestion',
    'Longer article excerpt',
  ],
  [Platform.Twitter]: [
    'Short, punchy tweet with hashtags',
    'Tweet thread with key points',
    'Text with image suggestion',
  ],
  [Platform.Instagram]: [
    'Short caption with emojis & hashtags + image suggestion',
    'Carousel post idea (3-5 slides) + image suggestions',
    'Reel script idea for a short video',
  ],
  [Platform.LinkedIn]: [
    'Professional short post with a question/call to action',
    'Text with image suggestion for professional appeal',
    'Mini-article/Long-form post with professional insights',
    'Carousel post idea with key takeaways',
  ],
};

export const INITIAL_PLATFORM_CONFIGS: PlatformConfigs = {
  [Platform.Facebook]: { enabled: true, format: PLATFORM_FORMATS.facebook[0] },
  [Platform.Twitter]: { enabled: true, format: PLATFORM_FORMATS.twitter[0] },
  [Platform.Instagram]: { enabled: false, format: PLATFORM_FORMATS.instagram[0] },
  [Platform.LinkedIn]: { enabled: true, format: PLATFORM_FORMATS.linkedin[0] },
};