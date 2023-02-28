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
  width: 50%;
`;

export const HeroBlockPictureSection = styled.section`
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
  margin-top: calc(var(--k)* -280px);
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
`;
