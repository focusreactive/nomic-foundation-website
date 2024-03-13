export type SEOType = {
  title: string;
  description: string;
};

export enum SocialsEnum {
  TWITTER = 'TWITTER',
  LINKEDIN = 'LINKEDIN',
}

export type MenuItemType = {
  label: string;
  href: string;
  icon?: React.FC<any>;
  iconDark?: React.FC<any>;
};

export type CTAContent = {
  href: string;
  label: string;
  color?: string;
  className?: string;
};
