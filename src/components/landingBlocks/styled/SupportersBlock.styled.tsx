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
    margin-top: 260px;
  }
  ${media.brp768} {
    margin-top: 280px;
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
  top: -17%;
  left: -14.5%;
  z-index: 1;
  width: 129%;

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
    }
  }
  ${media.brp1792} {
    top: -17%;
  }
  ${media.brp1440} {
    top: -13%;
  }
  ${media.brp1280} {
    top: -49px;
    left: -56px;
    width: calc(100% + 56px * 2);
  }
  ${media.brp1024} {
    display: none;
  }
`;

export const SupportersBlockLogosContainer = styled.section`
  z-index: 5;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${media.brp1792} {
    margin-top: 72px;
  }

  ${media.brp1280} {
    margin-top: 46px;
    max-width: 800px;
  }

  ${media.brp1024} {
    margin-top: 32px;
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
  flex: 1;
  padding: 4px 0px;
  &:last-child {
    border-bottom: 1px solid var(--border-color);
  }
  ${tmSelectors.dark} {
    --border-color: ${appTheme.dark.colors.border100};
    ${media.brp1024} {
      --border-color: transparent;
    }
  }

  ${media.brp1792} {
    padding: 15px 0px;
  }
  ${media.brp1440} {
    padding: 16.5px 0px;
  }

  ${media.brp1280} {
    padding: 13px 0px;
  }

  ${media.brp1024} {
    --border-color: transparent;
    justify-content: center;
    padding: 10px 0px;
  }

  ${media.brp768} {
    justify-content: center;
  }
`;

export const LogoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 124px;
  padding: 0 10px;
  & svg {
    height: 100%;
    width: 80%;
  }
  ${media.brp1792} {
    height: 96px;
  }
  ${media.brp1440} {
    height: 74px;
    & svg {
      width: 100%;
    }
  }
  ${media.brp1280} {
    height: 56px;
  }
  ${media.brp1024} {
    padding: 0 25px;
  }
  ${media.brp768} {
    height: 40px;

    & svg {
      max-width: 90px;
      height: 100%;
      width: 120%;
    }
  }
`;
