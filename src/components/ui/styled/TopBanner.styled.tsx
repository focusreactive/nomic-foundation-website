import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const BannerText = styled.span`
  color: ${appTheme.light.colors.font100};
  font-size: 16px;
  line-height: 140%;
  font-weight: 500;
  margin: 0 14px;

  ${media.brp1024} {
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 1.8px;
    margin: 0 4px;
  }
`;

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
  white-space: nowrap;
  position: relative;
  cursor: pointer;

  ${media.brp1024} {
    height: 46px;
  }

  ${tmSelectors.dark} {
    background-color: ${appTheme.dark.colors.bg100};
    color: ${appTheme.dark.colors.font100};
  }
`;

export const BannerDecorator = styled.span`
  color: ${appTheme.light.colors.font50};
  font-size: 19px;
  margin: 0 4px;

  ${tmSelectors.dark} {
    color: ${appTheme.light.colors.font50};
  }

  ${media.brp1024} {
    font-size: 12px;
    margin: 0 2px;

    &.optional {
      display: none;
    }
  }
`;
