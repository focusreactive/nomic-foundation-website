import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const CultureBlockSection = styled.section`
  width: 100%;
  margin-bottom: 64px;
  margin-top: 64px;
  padding-top: 160px;
  position: relative;
  z-index: 1;
  ${media.brp1440} {
    padding-top: 105px;
    margin-top: 56px;
    margin-bottom: 56px;
  }
  ${media.brp1280} {
    padding-top: 95px;
  }
  ${media.brp1024} {
    padding-top: 54px;
  }
  ${media.brp768} {
    padding-top: 70px;
  }
`;

export const CultureBlockPictureWrapperLeft = styled.section`
  position: absolute;
  top: -187px;
  left: -170px;
  z-index: -1;
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
  ${media.brp1440} {
    left: -70px;
    top: -144px;
    svg {
      width: 112px;
      height: auto;
    }
  }
  ${media.brp1280} {
    left: -136px;
  }
  ${media.brp1024} {
    left: 5px;
    top: -110px;
    svg {
      width: 70px;
    }
  }
  ${media.brp768} {
    left: -5px;
    opacity: 0.8;
    svg {
      width: 45px;
    }
  }
`;

export const CultureBlockPictureWrapperRight = styled.section`
  position: absolute;
  top: -351px;
  right: -342px;
  z-index: -1;
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
  ${media.brp1440} {
    right: -191px;
    top: -270px;
    svg {
      width: 416px;
      height: auto;
    }
  }
  ${media.brp1280} {
    right: -250px;
  }
  ${media.brp1024} {
    right: -75px;
    top: -194px;
    svg {
      width: 270px;
    }
  }
  ${media.brp768} {
    right: -60px;
    top: -150px;
    opacity: 0.7;
    svg {
      width: 170px;
    }
  }
`;

export const CultureBlockSuptitle = styled.h3`
  font-weight: 300;
  font-size: 19px;
  line-height: 130%;
  letter-spacing: 0.05em;
  margin-bottom: 50px;
  color: ${appTheme.light.colors.font150};
  max-width: 580px;
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1440} {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    margin-bottom: 32px;
  }
  ${media.brp1024} {
    margin-bottom: 48px;
  }
`;

export const Reviews = styled.div`
  .swiper-slide {
    height: auto;
  }
  .swiper-pagination {
    position: static;
    text-align: left;
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }
  .swiper-pagination-lock {
    display: none;
  }
  .swiper-pagination-bullet {
    margin: 0 !important;
    background: #888890;
  }
`;

export const ReviewsItem = styled.a`
  position: relative;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  &:before {
    content: '“';
    align-self: flex-start;
    display: inline-block;
    font-size: 69px;
    line-height: 100%;
    font-weight: 500;
    height: 40px;
    overflow: hidden;
    background: ${appTheme.light.colors.bgTexture100};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    ${tmSelectors.dark} {
      background: ${appTheme.dark.colors.bgTexture100};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  ${media.brp1280} {
    padding-right: 0;
  }
`;

export const ReviewsItemText = styled.div`
  font-weight: 300px;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.02em;
  margin-bottom: 14px;
  color: ${appTheme.light.colors.font50};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font50};
  }
  ${media.brp1440} {
    font-size: 12px;
    margin-bottom: 23px;
  }
`;

export const ReviewsItemFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin-top: auto;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
`;

export const ReviewsItemName = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  ${media.brp1440} {
    font-size: 12px;
  }
`;

export const ReviewsItemProfession = styled.span`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.02em;
  ${media.brp1440} {
    font-size: 12px;
  }
`;

export const CultureContents = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  ${media.brp1440} {
    margin-top: 16px;
    gap: 20px;
  }
  ${media.brp1280} {
    gap: 38px;
    margin-top: 32px;
  }
  ${media.brp1024} {
    margin-top: 42px;
    gap: 24px;
  }
  ${media.brp768} {
    margin-top: 72px;
    gap: 52px;
  }
`;
export const CultureContentsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  width: 100%;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  ${media.brp1280} {
    gap: 54px;
  }
  ${media.brp768} {
    flex-direction: column !important;
    gap: 10px;
  }
`;
export const CultureContentsItemInfo = styled.div`
  flex: 1 1 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  ${media.brp1024} {
    padding-bottom: 0;
  }
`;
export const CultureContentsItemTitlte = styled.div`
  font-weight: 500;
  font-size: 19px;
  line-height: 130%;
  letter-spacing: 0.03em;
  margin-bottom: 8px;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1440} {
    font-size: 16px;
  }
`;
export const CultureContentsItemText = styled.div`
  font-size: 16px;
  font-weight: 300;

  line-height: 150%;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1440} {
    font-size: 14px;
  }
`;
export const CultureContentsItemPicture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 334px;
  flex: none;
  gap: 16px;
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

  ${media.brp1440} {
    & .light {
      max-height: 180px;
      max-width: 180px;
    }
    & .dark {
      max-height: 180px;
      max-width: 180px;
    }
  }
  ${media.brp1280} {
    width: 282px;
  }
  ${media.brp1024} {
    height: 236px;
  }
  ${media.brp768} {
    height: 250px;
    width: 100%;
    & .light {
      max-height: 170px;
      max-width: 170px;
    }
    & .dark {
      max-height: 170px;
      max-width: 170px;
    }
  }
`;
export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px 24px;
  ${media.brp1280} {
    gap: 5px 18px;
  }
`;
export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  & > svg {
    fill: ${appTheme.light.colors.font300};
    width: 5px;
    height: 12px;
    ${tmSelectors.dark} {
      fill: ${appTheme.dark.colors.font300};
    }
  }
`;
export const StatItemTitle = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.1em;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1440} {
    font-size: 10px;
  }
`;
