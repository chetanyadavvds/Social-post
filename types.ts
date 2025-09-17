
export enum Platform {
  Facebook = 'facebook',
  Twitter = 'twitter',
  Instagram = 'instagram',
  LinkedIn = 'linkedin',
}

export interface PlatformConfig {
  enabled: boolean;
  format: string;
}

export type PlatformConfigs = {
  [key in Platform]: PlatformConfig;
};

export interface FormState {
  topic: string;
  audience: string;
  tone: string;
  platforms: PlatformConfigs;
}

export type GeneratedPosts = {
  [key in Platform]?: string;
};
