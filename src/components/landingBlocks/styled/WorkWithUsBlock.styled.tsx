import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const WorkWithUsContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 360px;
  position: relative;
  ${media.brp1024} {
    margin-top: 180px;
  }
  ${media.brp768} {
    margin-top: 144px;
    padding: 0 24px;
  }
`;

export const WorkWithUsTitle = styled.h2`
  font-weight: 500;
  line-height: 125%;
  font-size: 83px;
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
    font-size: 69px;
  }
  ${media.brp1280} {
    font-size: 58px;
  }
  ${media.brp1024} {
    font-size: 40px;
    letter-spacing: 0.05em;
  }
  ${media.brp768} {
    font-size: 28px;
    letter-spacing: 0.03em;
  }
`;

export const WorkWithUsText = styled.p`
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font150};
  max-width: 870px;
  margin-top: 32px;
  ${media.brp1440} {
    font-size: 33px;
  }
  ${media.brp1280} {
    max-width: 714px;
    font-size: 28px;
  }
  ${media.brp1024} {
    margin-top: 16px;
    max-width: 544px;
    font-size: 23px;
  }
  ${media.brp768} {
    font-size: 19px;
  }

  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
`;

export const CTAWrapper = styled.div`
  z-index: 1;
  margin-top: 32px;
  ${media.brp768} {
    margin-top: 16px;
  }
`;

export const WorkWithUsPicture = styled.section`
  position: absolute;
  bottom: 0;
  left: -20%;
  width: 140%;
  min-height: 400px;
`;

export const WorkWithUsPictureWrapper = styled.section`
  position: absolute;
  left: 0%;
  right: 0%;
  bottom: -320px;
  z-index: 1;
  margin-top: -20%;
  & svg {
    width: 100%;
  }
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
      margin-top: -14%;
    }
  }
  ${media.brp1024} {
    bottom: -420px;
    width: 200%;
    left: -50%;
  }
`;
