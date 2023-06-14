import Link from 'next/link';
import React from 'react';
import NomicFoundationCube from '../../assets/nomic-foundation-logo-cube';
import NomicFoundationCubeDark from '../../assets/nomic-foundation-logo-cube_dark';
import Socials from '../Socials';
import {
  CopyrightWrapper,
  Divider,
  LandingFooterContent,
  LogoWrapper,
  SocialsWrapper,
  StyledLandingFooter,
} from './styled/LandingFooter.styled';

type Props = {
  content: {
    copyright: string;
    privacy: {
      text: string;
      href: string;
    };
  };
};

const LandingFooter = ({ content }: Props) => {
  const target = content.privacy.href.startsWith("http") ? "_blank" : undefined;
  return (
    <StyledLandingFooter>
      <SocialsWrapper>
        <Socials />
      </SocialsWrapper>
      <LandingFooterContent>
        <CopyrightWrapper>
          <LogoWrapper>
            <NomicFoundationCube className='light' />
            <NomicFoundationCubeDark className='dark' />
          </LogoWrapper>
          <span>{content.copyright}</span>
        </CopyrightWrapper>
        <Divider>|</Divider>
        <Link href={content.privacy.href} target={target}>{content.privacy.text}</Link>
      </LandingFooterContent>
    </StyledLandingFooter>
  );
};

export default LandingFooter;
