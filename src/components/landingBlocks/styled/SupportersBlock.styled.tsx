import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const SupportersBlockContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 520px;
  width: 100%;
  ${media.brp1792} {
    margin-top: 344px;
  }
  ${media.brp1024} {
    margin-top: 280px;
  }
  ${media.brp768} {
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
    }
  }

  ${media.brp1792} {
    margin-top: -2%;
  }
  ${media.brp1024} {
    display: none;
  }
`;

export const SupportersBlockLogosContainer = styled.section`
  z-index: 5;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.brp1280} {
    margin-top: 4vw;
    width: 80%;
  }
  ${media.brp1024} {
    width: 90%;
  }
  ${media.brp768} {
    width: 100%;
  }
`;

export const LogosRow = styled.div`
  --border-color: ${appTheme.light.colors.border100};
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: nowrap;
  border: 1px solid var(--border-color);
  border-bottom: unset;
  padding: 0 32px;
  flex: 1;
  &:last-child {
    border-bottom: 1px solid var(--border-color);
  }
  ${tmSelectors.dark} {
    --border-color: ${appTheme.dark.colors.border100};
    ${media.brp1024} {
      --border-color: transparent;
      justify-content: space-evenly;
    }
  }

  ${media.brp1024} {
    --border-color: transparent;
  }

  ${media.brp768} {
    justify-content: center;
  }
`;

export const LogoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4%;
  height: 132px;
  padding: 0 10px;
  & svg {
    height: 100%;
  }
  ${media.brp1792} {
    height: 100px;
  }
  ${media.brp1440} {
    height: 70px;
  }
  ${media.brp768} {
    & svg {
      height: 40px;
      max-width: 60px;
    }
    height: 40px;
  }
`;
