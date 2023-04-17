import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 360px;
  z-index: 2;
  ${media.brp1440} {
    margin-top: 372px;
  }
  ${media.brp1024} {
    margin-top: 372px;
  }
  ${media.brp1280} {
    margin-top: 240px;
  }
  ${media.brp768} {
    margin-top: 300px;
    align-items: flex-start;
    padding: 0 24px;
  }
`;

export const ProjectsTitle = styled.h2`
  font-weight: 500;
  line-height: 125%;
  font-size: 83px;
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
  ${media.brp1792} {
    font-size: 69px;
  }
  ${media.brp1280} {
    font-size: 58px;
  }
  ${media.brp1024} {
    font-size: 40px;
    letter-spacing: 0.05em;
  }
  ${media.brp768} {
    font-size: 28px;
    letter-spacing: 0.03em;
  }
`;

export const ProjectsSubtitle = styled.h3`
  font-weight: 300;
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.05em;
  max-width: 842px;
  margin-top: 32px;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1792} {
    font-size: 33px;
    max-width: 720px;
  }
  ${media.brp1280} {
    font-size: 28px;
    max-width: 680px;
  }
  ${media.brp1024} {
    font-size: 23px;
    letter-spacing: 0.03em;
    max-width: 520px;
    margin-top: 16px;
  }
  ${media.brp768} {
    font-size: 16px;
    max-width: 200px;
    text-align: start;
  }
`;

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 176px;
  margin-top: 112px;
  width: 100%;
  ${media.brp1792} {
    margin-top: 88px;
    padding: 0 120px;
  }
  ${media.brp1440} {
    margin-top: 80px;
  }
  ${media.brp1280} {
    padding: 0 66px;
  }
  ${media.brp1024} {
    margin-top: 16px;
    padding: 0 48px;
  }
  ${media.brp768} {
    padding: 0;
  }
`;

export const ProjectItemContainer = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  margin-bottom: 400px;
  ${media.brp1792} {
    margin-bottom: 320px;
  }
  ${media.brp1440} {
    margin-bottom: 220px;
  }
  ${media.brp1024} {
    margin-bottom: 100px;
  }
  ${media.brp768} {
    margin-bottom: 42px;
  }
  &:last-child {
    margin-bottom: unset;
  }
`;

export const ProjectItemTopDecoration = styled.div<{ color: string }>`
  width: 100%;
  height: 64px;
  border: 1px solid ${({ color }) => color};
  border-bottom: unset;
  display: flex;
  justify-content: space-between;

  ${media.brp1024} {
    visibility: hidden;
  }
`;

export const ProjectItemDecoration = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-bottom: 1px solid ${({ color }) => color};
  &.left {
    border-right: 1px solid ${({ color }) => color};
  }
  &.right {
    border-left: 1px solid ${({ color }) => color};
  }
`;

export const ProjectItemInnerSection = styled.div<{ color: string }>`
  width: 100%;
  min-height: 100px;
  display: flex;
  border-right: 1px solid ${({ color }) => color};
  .reversed & {
    flex-direction: row-reverse;
    border-left: 1px solid ${({ color }) => color};
    border-right: unset;
  }
  ${media.brp1024} {
    border-right: unset;
    .reversed & {
      border-left: unset;
    }
  }
  ${media.brp768} {
    flex-direction: column;
    .reversed & {
      flex-direction: column;
    }
  } ;
`;

export const ProjectItemPictureSection = styled.section<{ color: string }>`
  position: relative;
  width: 40%;
  min-height: 200px;
  & svg {
    width: 90%;
  }
  ${media.brp1024} {
    width: 100%;
    & svg {
      width: 100%;
    }
  }
`;

export const ProjectItemPictureLeftDecoration = styled.div<{ color: string }>`
  position: absolute;
  left: 0;
  top: 0;
  margin-top: -11%;
  margin-left: -10%;
  width: 4vw;
  height: 13vw;
  transform: skewY(30deg);
  transform-origin: bottom right;
  border-left: 1px solid ${({ color }) => color};
  border-bottom: 1px solid ${({ color }) => color};
  .reversed & {
    width: 5.3vw;
    height: 10vw;
    border-left: unset;
    border-right: 1px solid ${({ color }) => color};
    margin-left: unset;
    left: unset;
    right: 0;
    margin-top: -14%;

    margin-right: -4%;
    transform: skewY(-30deg);
  }
  ${media.brp1024} {
    display: none;
  }
`;

export const ProjectItemPicWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 10%;
  display: block;
  width: 100%;
  height: 100%;

  .reversed & {
    left: unset;
    right: 4%;
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
  ${media.brp1024} {
    display: none;
  }
`;

export const ProjectItemMobilePicWrapper = styled.div`
  position: absolute;
  top: 14%;
  left: 11%;
  width: 100%;
  height: 100%;
  max-width: 500px;
  transform: translateY(-40%);
  display: none;

  .reversed & {
    left: unset;
    right: 11%;
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
  ${media.brp1024} {
    display: block;
  }
  ${media.brp768} {
    top: -15%;
    transform: scale(1.2);
    .reversed & {
      right: unset;
      left: 11%;
    }
  }
`;

export const ProjectItemContentSection = styled.section<{ color: string }>`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ color }) => color};
  padding: 20px 16px 94px 64px;
  position: relative;
  margin-left: 100px;

  .reversed & {
    margin-right: 100px;
    margin-left: unset;
    padding: 20px 64px 94px;
  }

  ${media.brp1024} {
    margin-left: unset;
    border-bottom: unset;
    padding-bottom: 48px;
    .reversed & {
      margin-right: unset;
    }
  }
  ${media.brp768} {
    padding: 0 0 48px 0;
    .reversed & {
      padding: 0 0 48px 0;
    }
  }
`;

export const ProjectItemSectionsDivider = styled.section<{ color: string }>`
  width: 1px;
  height: 100%;
  background: ${({ color }) =>
    `linear-gradient(357.78deg, ${color} 0.2%, rgba(237, 207, 0, 0) 109.27%)`};
  position: absolute;
  opacity: 0.8;
  top: 0;
  left: 0;
  .reversed & {
    right: 0;
    left: unset;
  }
  ${media.brp1024} {
    display: none;
  }
`;

export const ProjectItemContentSectionTitle = styled.h4`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 20px;
    width: 112px;
  }
  font-size: 48px;
  line-height: 150%;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: ${appTheme.light.colors.font0};

  ${media.brp1792} {
    font-size: 40px;
    & svg {
      width: 76px;
    }
  }
  ${media.brp1280} {
    font-size: 23px;
    letter-spacing: 0.03em;
    & svg {
      margin-right: 14px;
      width: 54px;
    }
  }

  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font0};
  }
`;

export const ProjectItemContentSectionText = styled.p`
  font-weight: 400;
  font-size: 23px;
  line-height: 150%;
  letter-spacing: 0.03em;
  max-width: 660px;
  margin-top: 24px;
  color: ${appTheme.light.colors.font150};

  ${media.brp1280} {
    font-size: 19px;
  }
  ${media.brp1024} {
    font-size: 16px;
  }
  ${media.brp768} {
    max-width: 400px;
  }
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  .reversed & {
    align-self: flex-end;
  }
  ${media.brp1024} {
    .reversed & {
      align-self: flex-start;
    }
  }
`;
