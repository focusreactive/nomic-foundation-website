import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const FaqBlockSection = styled.section`
  width: 100%;
  padding-top: 150px;
  margin-top: 64px;
  position: relative;
  z-index: 1;
  ${media.brp1440} {
    margin-top: 56px;
    padding-top: 98px;
  }
  ${media.brp1280} {
    padding-top: 70px;
  }
  ${media.brp1024} {
    padding-top: 30px;
  }
  ${media.brp768} {
    padding-top: 74px;
  }
`;

export const FaqBlockPictureWrapperLeft = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  transform: translate(0, -50%);
  right: calc(100% + 24px);
  margin-top: 12px;
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
    right: calc(100% + 40px);

    svg {
      width: 300px;
      height: auto;
    }
  }
  ${media.brp1280} {
    right: calc(100% + 60px);
    svg {
      width: 270px;
    }
  }
  ${media.brp1280} {
    right: calc(100% - 25px);
  }
  ${media.brp768} {
    display: none;
  }
`;
export const FaqBlockPictureWrapperRight = styled.div`
  position: absolute;
  top: 0;
  left: calc(100% + 24px);
  z-index: -1;
  transform: translate(0, -50%);
  margin-top: 12px;
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
    left: calc(100% + 40px);
    svg {
      width: 300px;
      height: auto;
    }
  }
  ${media.brp1280} {
    left: calc(100% + 60px);
    svg {
      width: 270px;
    }
  }
  ${media.brp1280} {
    left: calc(100% - 25px);
  }
  ${media.brp768} {
    transform: rotate(90deg) translate(-50%, 0);
    top: -255px;
    left: calc(50% - 95px);
    svg {
      width: 190px;
    }
  }
`;

export const FaqBlockItems = styled.div`
  margin-top: -16px;
  ${media.brp1440} {
    margin-top: 0;
  }
`;
