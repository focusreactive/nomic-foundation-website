import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const StyledLandingFooter = styled.footer`
  margin-top: 60vh;
  z-index: 100;
  width: 100%;
  background: ${appTheme.light.colors.footerBg};
  padding: 36px 176px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.footerBg};
  }
  ${media.xlg} {
    padding: 36px 120px;
  }
  ${media.md} {
    padding: 36px 56px;
  }
  ${media.smd} {
    padding: 36px 48px;
  }
  ${media.sm} {
    padding: 36px 24px;
    flex-direction: column-reverse;
  }
`;

export const LandingFooterContent = styled.section`
  display: flex;
  align-items: center;
  color: ${appTheme.light.colors.font150};
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.1em;

  ${media.sm} {
    flex-direction: column;
    font-size: 12px;
    line-height: 100%;
    margin-bottom: 16px;
  }

  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font0};
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
  margin-right: 8px;
  white-space: nowrap;

  ${media.sm} {
    margin-bottom: 22spx;
  }
`;

export const Divider = styled.span`
  margin: 0 8px;
  ${media.sm} {
    display: none;
  }
`;
