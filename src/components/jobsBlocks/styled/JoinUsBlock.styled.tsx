import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const JoinUsBlockSection = styled.section`
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

export const JoinUsBlockPictureWrapperLeft = styled.div`
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

export const JoinUsBlockPictureWrapperRight = styled.div`
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

export const JoinUsBlockRows = styled.div``;

export const JoinUsBlockWrapper = styled.div`
  padding-top: 25px;
  margin-bottom: 58px;
  &:last-child {
    margin-bottom: 0 !important;
  }
  ${media.brp1440} {
    padding-top: 41px;
    margin-bottom: 38px;
  }
  ${media.brp768} {
    padding-top: 15px;
  }
  ${media.brp768} {
    margin-bottom: 70px;
  }
`;
export const JoinUsBlockWrapperTitlte = styled.div`
  font-size: 23px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp768} {
    font-size: 19px;
  }
`;
export const Filter = styled.div`
  margin: 24px 0;
`;
export const FilterTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  padding: 8px 0;
  letter-spacing: 0.07em;
  color: ${appTheme.light.colors.font50};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font50};
  }
  ${media.brp768} {
    font-size: 14px;
    padding: 10px 0;
  }
`;
export const FilterItems = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  ${media.brp768} {
    flex-direction: column;
    gap: 16px;
  }
`;
export const FilterItem = styled.div`
  flex: none;
  width: 100%;
  max-width: 245px;
  ${media.brp1024} {
    flex: auto;
  }
  ${media.brp768} {
    max-width: none;
    width: 100%;
  }
`;
export const Select = styled.select`
  height: 48px;
  width: 100%;
  cursor: pointer;
  padding: 0 40px 0 18px;
  line-height: 46px;
  font-family: 'EncodeSans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  letter-spacing: 0.03em;
  background: transparent;
  color: ${appTheme.light.colors.font400};
  border: 1px solid ${appTheme.light.colors.border300};
  background-image: url('/img/select-arrow.svg');
  background-repeat: no-repeat;
  background-position: center right 17px;
  -webkit-appearance: none;
  -moz-appearance: none;
  ${tmSelectors.dark} {
    background-image: url('/img/select-arrow-dark.svg');
    border-color: ${appTheme.dark.colors.border300};
    color: ${appTheme.dark.colors.font400};
  }
  ${media.brp768} {
    height: 45px;
    line-height: 43px;
    font-size: 14px;
  }
`;
export const SelectOption = styled.option`
  color: ${appTheme.light.colors.font400};
  cursor: pointer;
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font300};
  }
`;

export const JoinUsBlockContent = styled.div``;
export const JoinUsBlockContentTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.081em;
  padding: 24px 0 16px;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp768} {
    font-size: 16px;
    letter-spacing: 0.05em;
  }
`;
export const JoinUsBlockContentList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const JoinUsBlockContentListItem = styled.div`
  width: 100%;
  padding: 16px 0;
  ${media.brp1440} {
    padding: 17px 0;
  }
`;
export const JoinUsBlockContentListItemTitle = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font150};
  &:hover {
    text-decoration: underline;
  }
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp768} {
    font-size: 14px;
  }
`;
export const JoinUsBlockContentListItemDescription = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.02em;
  margin-top: 10px;
  color: ${appTheme.light.colors.font50};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font50};
  }
  ${media.brp768} {
    font-size: 14px;
  }
`;

export const HiringProcess = styled.div`
  margin-top: 40px;
  ${media.brp768} {
    overflow: hidden;
    overflow-x: auto;
    margin-top: 45px;
    margin-right: calc(((100vw - 452px) / 2) * -1);
    padding-right: calc(((100vw - 452px) / 2));
    margin-left: calc(((100vw - 452px) / 2) * -1);
    padding-left: calc(((100vw - 452px) / 2) + 8px);
  }
  ${media.brp500} {
    margin-right: calc(((100vw - 380px) / 2) * -1);
    padding-right: calc(((100vw - 380px) / 2));
    margin-left: calc(((100vw - 380px) / 2) * -1);
    padding-left: calc(((100vw - 380px) / 2) + 8px);
  }
  ${media.brp500} {
    margin-right: calc(((100vw - 312px) / 2) * -1);
    padding-right: calc(((100vw - 312px) / 2));
    margin-left: calc(((100vw - 312px) / 2) * -1);
    padding-left: calc(((100vw - 312px) / 2) + 8px);
  }
`;
export const HiringProcessLines = styled.div`
  display: flex;
  padding-left: 12px;
  padding-right: 127px;

  ${media.brp1440} {
    padding-right: 2px;
  }
  ${media.brp1280} {
    padding-right: 49px;
    padding-left: 8px;
  }
  ${media.brp1024} {
    padding-right: 70px;
    padding-left: 0;
  }
  ${media.brp768} {
    width: 660px;
  }
`;
export const HiringProcessLinesItem = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  background: ${appTheme.light.colors.border100};
  padding: 0 32px;
  position: relative;
  z-index: 1;
  clip-path: polygon(calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 0 0);
  flex: 1;
  ${tmSelectors.dark} {
    background: ${appTheme.dark.colors.border300};
  }
  &:before {
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    left: 1px;
    bottom: 1px;
    z-index: -1;
    clip-path: polygon(calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 0 0);
    background: ${appTheme.light.colors.linesBg};
    ${tmSelectors.dark} {
      background: ${appTheme.dark.colors.linesBg};
    }
  }
  &:nth-child(2) {
    flex: none 
    width: 428px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 16px 50%);
    &:before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 16px 50%);
      left: 2px;
      background: ${appTheme.light.colors.linesSecondBg};
      ${tmSelectors.dark} {
        background: ${appTheme.dark.colors.linesSecondBg};
      }
    }
    ${media.brp1440} {
      width: 426px;
    }
    ${media.brp1280} {
      width: 305px;
    }
    ${media.brp768} {
      width: 296px;
    }
  }

  ${media.brp1280} {
    height: 24px;
    padding: 0 22px;
   
  }
  ${media.brp768} {
    width: 290px;
    flex: none;
  }
`;
export const HiringProcessLinesTitle = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.082em;
  color: ${appTheme.light.colors.font300};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font50};
  }
  ${media.brp1280} {
    font-size: 8px;
  }
`;
export const HiringProcessItems = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  justify-content: space-between;
  position: relative;

  ${media.brp1440} {
    margin-right: -125px;
  }
  ${media.brp1280} {
    margin-right: -43px;
  }
  ${media.brp1024} {
    gap: 20px;
    margin-right: 0;
    margin-left: -8px;
  }
`;
export const HiringProcessItem = styled.div`
  padding-top: 20px;
  width: 140px;
  flex: none;
  position: relative;

  & .light {
    display: block;
    max-width: 100%;
  }
  & .dark {
    display: none;
    max-width: 100%;
  }

  svg {
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 12px;
    height: 64px
    width: 1px;
    background: ${appTheme.light.colors.border150};
    ${tmSelectors.dark} {
      background: ${appTheme.dark.colors.border150};
    }
  }
  &:not(:last-child):after {
    content: '';
    width: calc(100% + 90px);
    height: 1px;
    position: absolute;
    top: 32px;
    left: 0;
    background: ${appTheme.light.colors.border150};
    ${tmSelectors.dark} {
      background: ${appTheme.dark.colors.border150};
    }
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
     &:before {
      height: 62px;
    }
    &:not(:last-child):after {
      top: 24px;
      width: calc(100% + 50px);
    }
  }
  ${media.brp1280} {
    padding-top: 12px;
    width: 112px; 
    svg {
      width: 17px;
      margin-bottom: 8px;
    }
    &:before {
      left: 8px;
      height: 46px;
    }
  }
  ${media.brp1024} {
    &:last-child {
      width: 79px;
    }
  }
  ${media.brp768} {
    width: 126px;
    svg {
      margin-bottom: 5px;
    }
    &:before {
      height: 44px;
    }
    &:last-child {
      width: 100px;
    }
    &:not(:last-child):after {
      
      width: calc(100% + 35px);
    }
  }

`;
export const HiringProcessList = styled.ul`
  list-style-type: none;
  margin: 0;
`;
export const HiringProcessListItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding-bottom: 10px;
  position: relative;
  padding-left: 18px;
  color: ${appTheme.light.colors.font400};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font50};
  }
  &:before {
    content: '';
    position: absolute;
    top: 9px;
    left: 11px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #cacad2;

    z-index: 2;
  }

  &:after {
    content: '';
    position: absolute;
    top: 16px;
    bottom: -4px;
    left: 12px;
    width: 1px;
    background: ${appTheme.light.colors.border150};
    ${tmSelectors.dark} {
      background: ${appTheme.dark.colors.border150};
    }
  }

  &:last-child {
    padding-bottom: 0;
    &:after {
      display: none;
    }
  }
  ${media.brp1440} {
    font-size: 12px;
    &:before {
      top: 7px;
    }
    &:after {
      top: 14px;
    }
  }
  ${media.brp1280} {
    padding-left: 14px;
    letter-spacing: 0.09em;
    &:before {
      left: 7px;
    }
    &:after {
      left: 8px;
    }
  }
  ${media.brp768} {
    letter-spacing: 0.02em;
    padding-bottom: 5px;
  }
`;
