import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const SupportersBlockContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 520px;
  width: 100%;
  ${media.xlg} {
    margin-top: 344px;
  }
  ${media.smd} {
    margin-top: 280px;
  }
  ${media.sm} {
    margin-top: 144px;
    padding: 0 24px;
  }
`;

export const SupportersBlockTitle = styled.h2`
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
  ${media.xlg} {
    font-size: 69px;
  }
  ${media.md} {
    font-size: 58px;
  }
  ${media.smd} {
    font-size: 40px;
    letter-spacing: 0.05em;
  }
  ${media.sm} {
    font-size: 28px;
    letter-spacing: 0.03em;
  }
`;

export const SupportersPictureWrapper = styled.section`
  position: absolute;
  top: -4%;
  left: -10%;
  right: -10%;
  z-index: 1;
  width: 120%;
  margin-top: -4%;

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
      margin-top: -4%;

      ${media.xlg} {
        margin-top: -2%;
      }
      margin-top: -3%;
    }
  }

  ${media.xlg} {
    margin-top: -2%;
  }
  ${media.smd} {
    display: none;
  }
`;

export const SupportersBlockLogosContainer = styled.section`
  z-index: 5;
  margin-top: 4%;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: center;
  align-items: center;
  ${media.md} {
    margin-top: 4vw;
    width: 65%;
  }
  ${media.smd} {
    width: 90%;
  }
  ${media.sm} {
    width: 100%;
  }
`;

export const LogoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  height: 4%;
  height: 132px;
  & svg {
    height: 100%;
  }
  ${media.xlg} {
    height: 100px;
  }
  ${media.lg} {
    height: 70px;
  }
  ${media.sm} {
    margin-left: unset;
    margin: 0 12px;
    & svg {
      height: 24px;
      max-width: 60px;
    }
    height: 24px;
  }
`;
