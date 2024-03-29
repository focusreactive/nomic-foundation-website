import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const JobBoard = styled.div`
  margin: 0 -10px;
`;
export const AshbySection = styled.section`
  width: 100%;
  margin-bottom: 64px;
  margin-top: 64px;
  position: relative;
  padding-top: 72px;
  z-index: 2;
  ${media.brp1440} {
    margin-top: 56px;
    margin-bottom: 56px;
    padding-top: 15px;
  }
  ${media.brp1280} {
    padding-top: 0px;
  }

  ${media.brp1024} {
    padding-top: 22px;
  }
`;

export const AshbyBlockPictureWrapperLeft = styled.div`
  position: absolute;
  z-index: -1;
  top: -145px
  left: -162px;
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
    left: -60px;
    top: -104px;
    svg {
      width: 82px;
      height: auto;
    }
  }
  ${media.brp1280} {
   left: -110px; 
   top: -92px;
  }
  ${media.brp1024} {
    left: -44px;
    top: -105px;
    svg {
      width: 60px;
    }
  }
  ${media.brp768} {
    display: none;
   
  }
`;

export const AshbyBlockPictureWrapperRight = styled.div`
  position: absolute;
  z-index: -1;
  top: -122px
  right: -160px;
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
    right: -56px;
    top: -89px;
    svg {
      width: 230px;
      height: auto;
    }
  }
  ${media.brp1280} {
    right: -145px;
    top: -80px;
  }
  ${media.brp1024} {
    right: -65px;
    top: -90px;
    svg {
      width: 185px;
    }
  }
  ${media.brp768} {
   right: -35px;
   top: -85px;
  }
`;
