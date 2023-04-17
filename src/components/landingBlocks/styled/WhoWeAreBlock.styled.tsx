import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const WhoWeAreContainer = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const WhoWeAreContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  z-index: 1;
  ${media.brp768} {
    align-items: flex-start;
  }
`;

export const WhoWeAreText = styled.p`
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${appTheme.light.colors.font150};
  max-width: 1080px;
  margin-top: 400px;
  ${media.brp1440} {
    max-width: 870px;
    font-size: 33px;
  }
  ${media.brp1280} {
    max-width: 714px;
    font-size: 28px;
    margin-top: 350px;
  }
  ${media.brp1024} {
    max-width: 544px;
    font-size: 23px;
  }
  ${media.brp768} {
    font-size: 19px;
    margin-top: 312px;
    text-align: start;
  }

  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
`;

export const WhoWeArePicture = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const WhoWeArePictureWrapper = styled.section`
  --pictureWidth: 1921px;
  --picHeight: 1286px
  --k: 1;
  --widthPercent: calc( var(--pictureWidth) / 100);
  --heightPercent: calc( var(--picHeight) / 100);
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scale(var(--k));
  margin-top: 90px;

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
  transform-origin: center center;
  ${media.brp1440} {
    --k: 0.9;
  margin-top: -100px;

  }
  ${media.brp1280} {
    --k: 0.8;
  }
  ${media.brp1024} {
    --k: 0.6;
  }

  ${media.brp768} {
    display: none;
  }
`;

export const WhoWeAreMobilePictureWrapper = styled.section`
  position: absolute;
  left: 50%;
  top: 480px;
  display: none;
  transform: translateX(-50%);
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
  ${media.brp768} {
    display: block;
  }
`;

export const CTAWrapper = styled.div`
  margin-top: 40px;
  ${media.brp768} {
    margin-top: 24px;
  }
`;
