interface DefaultBannerContent {
  text: string;
  href: string;
}

export interface BannerProps {
  content: DefaultBannerContent;
  className?: string;
}
