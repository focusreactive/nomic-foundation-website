import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const BannerContainer = styled.a`
  user-select: none;
  z-index: 100;
  width: 100%;
  height: 55px;
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: baseline;
  background-color: ${appTheme.light.colors.bg100};
  mix-blend-mode: normal;
  color: ${appTheme.light.colors.font100};
  font-size: 19px;
  line-height: 140%;
  letter-spacing: 0.02em;
  white-space: nowrap;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  & .banner-text {
    margin: 0 18px;
  }

  cursor: pointer;

  ${media.sm} {
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.15em;
    height: 46px;
    & .banner-text {
      margin: 0 6px;
    }
  }
  ${tmSelectors.dark} {
    background-color: ${appTheme.dark.colors.bg100};
    color: ${appTheme.dark.colors.font100};
  }
`;

export const BannerDecorator = styled.span`
  color: ${appTheme.light.colors.font50};
  font-size: 22px;
  margin: 0px 3px;

  ${tmSelectors.dark} {
    color: ${appTheme.light.colors.font50};
  }
  ${media.sm} {
    font-size: 15px;
    &.optional {
      display: none;
    }
  }
`;
