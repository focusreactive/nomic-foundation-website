import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const BenefitsBlockSection = styled.section`
  width: 100%;
  margin-bottom: 64px;
  margin-top: 64px;
  position: relative;
  padding-bottom: 72px;
  padding-top: 232px;
  z-index: 1;
  ${media.brp1440} {
    margin-top: 56px;
    margin-bottom: 56px;
    padding-top: 74px;
  }
  ${media.brp1280} {
    padding-top: 160px;
  }
  ${media.brp1024} {
    padding-top: 127px;
  }
  ${media.brp768} {
    padding-bottom: 40px;
  }
`;

export const BenefitsBlockPictureWrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, 0);
  & .light {
    display: block;
  }
  & .dark {
    display: none;
  }
  svg {
    width: 1920px;
    height: auto;
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
    svg {
      width: 1800px;
    }
  }
  ${media.brp1440} {
    top: -60px;
    svg {
      width: 1440px;
    }
  }
  ${media.brp1280} {
    top: -17px;
    svg {
      width: 1340px;
    }
  }
  ${media.brp1024} {
    top: -37px;
    svg {
      width: 1280px;
    }
  }
  ${media.brp1024} {
    svg {
      width: 1020px;
    }
  }
`;

export const BenefitsBlockItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  ${media.brp1440} {
    padding-top: 10px;
    gap: 1px 16px;
  }
  ${media.brp500} {
    flex-direction: column;
  }
`;

export const BenefitsBlockItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: calc(33.33% - (32px / 2));
  ${media.brp1280} {
    width: calc(33.33% - (22px / 2));
  }
  ${media.brp768} {
    width: calc(50% - (22px / 2));
  }
  ${media.brp500} {
    width: 100%;
  }
`;

export const BenefitsBlockItemPicture = styled.div`
  width: 72px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
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

export const BenefitsBlockItemTitlte = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  max-width: 190px;
  letter-spacing: 0.03em;
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
  ${media.brp1280} {
    font-size: 12px;
  }
  ${media.brp768} {
    max-width: 150px;
  }
`;
