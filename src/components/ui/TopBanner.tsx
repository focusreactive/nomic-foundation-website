import React from 'react';
import { BannerContainer, BannerDecorator, BannerText } from './styled/TopBanner.styled';
import { BannerProps } from './types';

const TopBanner = ({ content, className }: BannerProps) => {
  return (
    <BannerContainer target='_blank' rel='noreferrer' href={content.href} className={className}>
      <BannerDecorator className='optional'>◱</BannerDecorator>
      <BannerDecorator className='optional'>◰</BannerDecorator>
      <BannerDecorator>◲</BannerDecorator>
      <BannerDecorator>◳</BannerDecorator>
      <BannerText>{content.text}</BannerText>
      <BannerDecorator>◰</BannerDecorator>
      <BannerDecorator>◱</BannerDecorator>
      <BannerDecorator className='optional'>◳</BannerDecorator>
      <BannerDecorator className='optional'>◲</BannerDecorator>
    </BannerContainer>
  );
};

export default TopBanner;
