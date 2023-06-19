import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const StyledLandingFooter = styled.footer`
  z-index: 100;
  width: 100%;
  background: ${appTheme.light.colors.footerBg};
  padding: 32px 176px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 240px;
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.footerBg};
  }
  ${media.brp1792} {
    padding: 32px 120px;
  }
  ${media.brp1280} {
    padding: 32px 56px;
  }
  ${media.brp1024} {
    padding: 32px 48px;
    margin-top: 100px;
  }
  ${media.brp768} {
    padding: 32px 24px;
    flex-direction: column-reverse;
  }
`;

export const LandingFooterContent = styled.section`
  display: flex;
  align-items: center;
  color: ${appTheme.light.colors.font250};
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.1em;

  ${media.brp768} {
    flex-direction: column;
    font-size: 12px;
    line-height: 100%;
    margin-bottom: 16px;
  }

  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font50};
  }
`;

export const SocialsWrapper = styled.div`
  & svg {
    fill: ${appTheme.light.colors.font50};
  }
  ${tmSelectors.dark} {
    & svg {
      fill: ${appTheme.dark.colors.font100};
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const LogoWrapper = styled.span`
  width: 36px;
  height: 32px;
  margin-right: 16px;

  & svg {
    width: 100%;
    height: 100%;
  }
  & .light {
    display: block;
  }
  & .dark {
    display: none;
  }

  ${media.brp768} {
    margin-right: 10px;
    width: 30px;
    height: 26px;
    /* & svg {
      height: 30px;
    } */
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

export const CopyrightWrapper = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${appTheme.light.colors.font150};

  ${tmSelectors.dark} {
    color: #fff;
  }

  ${media.brp768} {
    margin-bottom: 22spx;
  }
`;

export const Divider = styled.span`
  margin: 0 8px;
  ${media.brp768} {
    display: none;
  }
`;
