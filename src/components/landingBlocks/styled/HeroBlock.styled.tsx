import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const HeroBlockContainer = styled.section`
  display: flex;
  position: relative;
  width: 100%;
`;

export const HeroBlockContentSection = styled.section`
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 42px 0px 0px;
  width: 100%;
  min-width: min-content;
  max-width: 50%;
  ${media.brp1792} {
    padding: 40px 0px 0px;
  }
  ${media.brp1280} {
    padding: 32px 0px 0px;
  }
  ${media.brp1024} {
    padding: 16px 0px 0px;
  }
  ${media.brp768} {
    padding: 16px 0px 0px;
  }
`;

export const HeroBlockTitle = styled.h1`
  font-weight: 400;
  font-size: 100px;
  line-height: 120%;
  background: ${appTheme.light.colors.titleBg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.titleBg};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  ${media.brp1792} {
    font-size: 83px;
    line-height: 115%;
  }
  ${media.brp1440} {
    font-size: 69px;
    line-height: 125%;
  }
  ${media.brp1024} {
    font-size: 58px;
  }
  ${media.brp768} {
    width: 249px;
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
  ${media.brp1792} {
    font-size: 33px;
  }
  ${media.brp1440} {
    font-size: 28px;
    letter-spacing: 0.03em;
  }
  ${media.brp1024} {
    font-size: 23px;
    margin-top: 8px;
  }
  ${media.brp768} {
    white-space: initial;
    width: 179px;
    font-size: 16px;
  }
`;

export const HeroBlockPictureSection = styled.section`
  position: absolute;
  width: 100%;
`;

export const HeroBlockPictureWrapper = styled.section`
  --pictureWidth: 2370px;
  --picHeight: 1922px
  --k: 1;
  --widthPercent: calc( var(--pictureWidth) / 100);
  --heightPercent: calc( var(--picHeight) / 100);
  position: absolute;
  right: -14%;
  top: 0;
  margin-top: calc(var(--k)* -420px);
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
  ${media.brp1440} {
    --k: 0.9;
  }
  ${media.brp1280} {
    --k: 0.8;
  }
  ${media.brp1024} {
    --k: 0.6;
    right: -100px
  }


  ${media.brp768} {
    display: none;
  }
`;

export const HeroBlockMobilePictureWrapper = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  margin-top: -208px;
  margin-right: -255px;
  & .light {
    display: block;
  }
  & .dark {
    display: none;
    margin-right: -20px;
  }

  ${tmSelectors.dark} {
    & .light {
      display: none;
    }
    & .dark {
      display: block;
    }
  }
  ${media.brp768} {
    display: block;
  }
`;

export const CTAWrapper = styled.div`
  margin-top: 40px;
  ${media.brp1024} {
    margin-top: 16px;
  }
`;
