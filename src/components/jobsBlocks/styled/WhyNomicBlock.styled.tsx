import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const WhyNomicBlockSection = styled.section`
  padding: 0 0 64px;
  width: 100%;
  margin-bottom: 64px;
  margin-top: 64px;
  position: relative;
  z-index: 1;
  ${media.brp1440} {
    margin-bottom: 56px;
    margin-top: 56px;
    padding-bottom: 77px;
  }
  ${media.brp1280} {
    padding-bottom: 40px;
  }
  ${media.brp1024} {
    padding-bottom: 36px;
  }
  ${media.brp768} {
    padding-bottom: 63px;
  }
`;

export const WhyNomicBlockItems = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px 56px;
  ${media.brp1280} {
    gap: 7px 48px;
  }
  ${media.brp1024} {
    gap: 17px 48px;
  }
  ${media.brp768} {
    padding-top: 20px;
    flex-direction: column;
    gap: 7px 0;
  }
`;
export const WhyNomicBlockItem = styled.div`
  padding: 16px 0 24px;
  width: calc(50% - 28px);
  ${media.brp1440} {
    padding-bottom: 1px;
  }
  ${media.brp1280} {
    width: calc(50% - 24px);
    padding-bottom: 18px;
  }
  ${media.brp768} {
    width: 100%;
  }
`;

export const WhyNomicBlockItemTitlte = styled.h3`
  position: relative;
  padding-left: 26px;
  font-weight: 500;
  font-size: 19px;
  line-height: 140%;
  margin-bottom: 8px;
  letter-spacing: 0.03em;
  background: ${appTheme.light.colors.font150};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  & svg {
    fill: ${appTheme.light.colors.font300};
    position: absolute;
    top: 3px;
    left: 7px;
  }

  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.font100};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    & svg {
      fill: ${appTheme.dark.colors.font300};
    }
  }

  ${media.brp1440} {
    font-size: 16px;
    padding-left: 21px;
    svg {
      width: 7px;
      height: 16px;
      left: 5px;
    }
  }
`;

export const WhyNomicBlockItemText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: 0.032em;

  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1440} {
    font-size: 14px;
  }
`;

export const WhyNomicBlockPictureWrapper = styled.div`
  position: absolute;
  width: 95%;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 39%);
  z-index: -1;
  & .light {
    display: block;
    max-width: 100%;
  }
  & .dark {
    display: none;
    max-width: 100%;
  }

  ${tmSelectors.dark} {
    & .light {
      display: none;
    }
    & .dark {
      display: block;
    }
  }
  ${media.brp1440} {
    max-width: 85%;
    bottom: -15px;
  }
  ${media.brp1280} {
    bottom: 5px;
  }
  ${media.brp1024} {
    bottom: -55px;
  }
  ${media.brp768} {
    max-width: none;
    width: 550px;
    bottom: 10px;
  }
`;
