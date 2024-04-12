import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../themes';

export const Container = styled.div`
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  ${media.brp1440} {
    max-width: 864px;
  }
  ${media.brp1280} {
    max-width: 666px;
  }
  ${media.brp1024} {
    max-width: none;
  }
`;

export const ContainerTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 32px;
  line-height: 130%;
  letter-spacing: 0.03em;
  ${media.brp1440} {
    font-size: 33px;
    margin-bottom: 17px;
  }
  ${media.brp768} {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

export const ContainerTitleGradient = styled.span`
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
`;
