import { styled } from 'linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const HeroBlockContainer = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 830px;
`;

export const HeroBlockContentSection = styled.section`
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 42px 176px 0px;
  width: 100%;
  min-width: min-content;
  max-width: 50%;
  ${media.xlg} {
    padding: 40px 120px 0px;
  }
  ${media.lg} {
    padding: 40px 120px 0px;
  }
  ${media.md} {
    padding: 32px 56px 0px;
  }
  ${media.smd} {
    padding: 16px 48px 0px;
  }
  ${media.sm} {
    padding: 16px 24px 0px;
  }
`;

export const HeroBlockTitle = styled.h1`
  font-weight: 400;
  font-size: 100px;
  line-height: 120%;
  background: ${appTheme.light.colors.bgHero};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.bgHero};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  ${media.xlg} {
    font-size: 83px;
    line-height: 115%;
  }
  ${media.lg} {
    font-size: 69px;
    line-height: 125%;
  }
  ${media.smd} {
    font-size: 58px;
  }
  ${media.sm} {
    font-size: 33px;
    line-height: 130%;
  }
`;

export const HeroBlockSubtitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  margin-top: 24px;
  letter-spacing: 0.05em;
  white-space: nowrap;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.xlg} {
    font-size: 33px;
  }
  ${media.lg} {
    font-size: 28px;
    letter-spacing: 0.03em;
  }
  ${media.smd} {
    font-size: 23px;
    margin-top: 8px;
  }
  ${media.sm} {
    font-size: 16px;
  }
`;

export const HeroBlockPictureSection = styled.section`
  position: absolute;
  width: 100%;
  min-height: 830px;
`;

export const HeroBlockPictureWrapper = styled.section`
  --pictureWidth: 2370px;
  --picHeight: 1922px
  --k: 1;
  --widthPercent: calc( var(--pictureWidth) / 100);
  --heightPercent: calc( var(--picHeight) / 100);
  position: absolute;
  right: 0;
  top: 0;
  margin-top: calc(var(--k)* -400px);
  margin-right: calc(var(--k)* -875px);
  & .light {
    display: block;
  }
  & .dark {
    display: none;
  }

  ${tmSelectors.dark} {
    & .light {
      display: none;
    }
    & .dark {
      display: block;
    }
  }
  transform-origin: top right;
  transform: scale(var(--k));
  ${media.md} {
    --k: 0.9;
  }
  ${media.smd} {
    --k: 0.8;
  }
  ${media.sm} {
    --k: 0.6;
  }
  ${media.xs} {
    display: none;
  }
`;

export const HeroBlockMobilePictureWrapper = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  margin-top: -208px;
  margin-right: -230px;
  & .light {
    display: block;
  }
  & .dark {
    display: none;
  }

  ${tmSelectors.dark} {
    & .light {
      display: none;
    }
    & .dark {
      display: block;
    }
  }
  ${media.xs} {
    display: block;
  }
`;

export const CTAWrapper = styled.div`
  margin-top: 40px;
  ${media.smd} {
    margin-top: 16px;
  }
`;
