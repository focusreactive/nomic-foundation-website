import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const HeroBlockSection = styled.section`
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0 50px;
  padding: 0 0 5px;
  width: 100%;
  margin-bottom: 64px;
  ${media.brp1440} {
    gap: 0 40px;
    margin-bottom: 56px;
    padding-bottom: 0;
  }
  ${media.brp1280} {
    align-items: flex-start;
    padding-top: 55px;
    padding-bottom: 110px;
  }
  ${media.brp1024} {
    flex-direction: column;
    padding-bottom: 54px;
  }
`;

export const HeroBlockContent = styled.div`
  flex: 1 1 auto;
  max-width: 545px;
  ${media.brp1280} {
    padding-top: 10px;
  }
  ${media.brp1024} {
    flex: none;
    max-width: 600px;
  }
`;

export const HeroBlockTitle = styled.h1`
  font-weight: 400;
  font-size: 48px;
  line-height: 130%;
  letter-spacing: 0.03em;
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

  ${media.brp1440} {
    font-size: 40px;
    text-wrap: balance;
    max-width: 360px;
  }
  ${media.brp1024} {
    max-width: none;
  }
  ${media.brp768} {
    font-size: 33px;
  }
`;

export const HeroBlockSubtitle = styled.h3`
  font-weight: 500;
  font-size: 19px;
  line-height: 140%;
  margin-bottom: 16px;
  letter-spacing: 0.07em;
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
  ${media.brp768} {
    font-size: 16px;
    letter-spacing: 0.03em;
    margin-bottom: 12px;
  }
`;

export const HeroBlockText = styled.p`
  font-weight: 300;
  font-size: 19px;
  line-height: 150%;
  margin-top: 16px;
  letter-spacing: 0.03em;

  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1440} {
    font-size: 16px;
  }
  ${media.brp768} {
    font-size: 14px;
  }
`;

export const HeroBlockPictures = styled.div`
  margin-left: auto;
  margin-right: 64px;
  padding-top: 80px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  gap: 24px 16px;
  width: 637px;
  flex: none;
  --shadowSize: 15px;
  --stepsShadowColor: ${appTheme.light.colors.imageStepsShadow};
  --shadowColor: ${appTheme.light.colors.imageShadow};
  ${tmSelectors.dark} {
    --stepsShadowColor: ${appTheme.dark.colors.imageStepsShadow};
  }

  ${media.brp1792} {
    margin-right: -34px;
  }
  ${media.brp1440} {
    margin-right: -24px;
    padding-top: 63px;
    width: 480px;
    gap: 15px 12px;
    --shadowSize: 11px;
  }
  ${media.brp1280} {
    margin-right: 0;
    width: 450px;
    padding-top: 0;
    gap: 18px 12px;
  }
  ${media.brp1024} {
    width: auto;
    padding-left: 30px;
    margin-right: -15px;
    margin-top: -13px;
    gap: 12px 12px;
    grid-template-columns: 1fr 198px;
    grid-template-rows: auto 36px auto 8px;
  }
  ${media.brp768} {
    margin-top: 53px;
    margin-right: 0;
    padding: 0 10px;
    gap: 8px;
    grid-template-columns: 51% 1fr;
    grid-template-rows: 25px auto auto 1fr;
    --shadowSize: 9px;
  }
`;

export const HeroBlockPictureLarge = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
  position: relative;
  z-index: 3;
  filter: drop-shadow(4.344px 4.344px 8.688px var(--shadowColor));
  ${tmSelectors.dark} {
    filter: none;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
    box-shadow: var(--shadowSize) calc(var(--shadowSize) * -1) 0 var(--stepsShadowColor),
      calc(var(--shadowSize) * 2) calc(var(--shadowSize) * -2) 0 var(--stepsShadowColor),
      calc(var(--shadowSize) * 3) calc(var(--shadowSize) * -3) 0 var(--stepsShadowColor),
      calc(var(--shadowSize) * 4) calc(var(--shadowSize) * -4) 0 var(--stepsShadowColor);
  }
  img {
    max-width: 100%;
    height: auto;
    position: relative;
    display: block;
  }

  ${media.brp1024} {
    grid-column: 1/2;
    grid-row: 2/5;
    filter: drop-shadow(3.041px 3.041px 6.082px var(--shadowColor));
    &:before {
      width: 56%;
      height: 60%;
      box-shadow: 0 0 0 calc(var(--shadowSize) * 1) var(--stepsShadowColor),
        0 0 0 calc(var(--shadowSize) * 2) var(--stepsShadowColor),
        0 0 0 calc(var(--shadowSize) * 3) var(--stepsShadowColor),
        0 0 0 calc(var(--shadowSize) * 4) var(--stepsShadowColor);
    }
  }
  ${media.brp768} {
    grid-column: 2/3;
    grid-row: 2/3;
    filter: drop-shadow(2.085px 2.085px 4.17px var(--shadowColor));
    &:before {
      width: 110%;
      left: auto;
      right: 0;
      height: 100%;
      box-shadow: calc(var(--shadowSize) * 1) calc(var(--shadowSize) * 1) 0 var(--stepsShadowColor),
        calc(var(--shadowSize) * 2) calc(var(--shadowSize) * -2) 0 var(--stepsShadowColor),
        calc(var(--shadowSize) * 3) calc(var(--shadowSize) * -3) 0 var(--stepsShadowColor),
        calc(var(--shadowSize) * 4) calc(var(--shadowSize) * -4) 0 var(--stepsShadowColor);
    }
  }
`;

export const HeroBlockPictureHorizontal = styled.div`
  margin-left: 30px;
  width: 283px;
  grid-row: 2/3;
  position: relative;
  z-index: 1;
  filter: drop-shadow(4.344px 4.344px 8.688px var(--shadowColor));
  ${tmSelectors.dark} {
    filter: none;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% + 86px);
    height: calc(100% + 120px);
    background: rgba(0, 0, 0, 0.05);
    box-shadow: calc(var(--shadowSize) * -1) 0 0 var(--stepsShadowColor),
      calc(var(--shadowSize) * -2) var(--shadowSize) 0 var(--stepsShadowColor),
      calc(var(--shadowSize) * -3) calc(var(--shadowSize) * 2) 0 var(--stepsShadowColor);
  }
  img {
    max-width: 100%;
    height: auto;
    position: relative;
    display: block;
  }
  ${media.brp1440} {
    width: 212px;
    margin-left: 25px;

    &:before {
      width: calc(100% + 82px);
    }
  }
  ${media.brp1280} {
    width: 198px;
    margin-left: 20px;
  }
  ${media.brp1024} {
    grid-column: 2/3;
    grid-row: 1/3;
    margin-left: 0;
    filter: drop-shadow(3.041px 3.041px 6.082px var(--shadowColor));
    &:before {
      width: 65%;
      height: 40%;
      top: 0;
      bottom: auto;
      box-shadow: 0 0 0 calc(var(--shadowSize) * 1) var(--stepsShadowColor),
        0 0 0 calc(var(--shadowSize) * 2) var(--stepsShadowColor),
        0 0 0 calc(var(--shadowSize) * 3) var(--stepsShadowColor);
    }
  }
  ${media.brp768} {
    grid-column: 2/3;
    grid-row: 3/5;
    width: auto;
    filter: drop-shadow(2.085px 2.085px 4.17px var(--shadowColor));
    &:before {
      width: 120%;
      left: auto;
      right: 0
      height: 100%;
      box-shadow: calc(var(--shadowSize) * 1) calc(var(--shadowSize) * 1) 0 var(--stepsShadowColor),
        calc(var(--shadowSize) * 2) calc(var(--shadowSize) * 2) 0 var(--stepsShadowColor),
        calc(var(--shadowSize) * 3) calc(var(--shadowSize) * 3) 0 var(--stepsShadowColor);
    }
  }
`;

export const HeroBlockPictureVertical = styled.div`
  width: 221px;
  grid-row: 2/4;
  position: relative;
  z-index: 1;
  filter: drop-shadow(4.344px 4.344px 8.688px var(--shadowColor));
  ${tmSelectors.dark} {
    filter: none;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 65px;
    left: 70px;
    width: calc(100% - 70px);
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
    box-shadow: var(--shadowSize) calc(var(--shadowSize) * -1) 0 var(--stepsShadowColor),
      calc(var(--shadowSize) * 2) calc(var(--shadowSize) * -2) 0 var(--stepsShadowColor),
      calc(var(--shadowSize) * 3) calc(var(--shadowSize) * -3) 0 var(--stepsShadowColor),
      calc(var(--shadowSize) * 4) calc(var(--shadowSize) * -4) 0 var(--stepsShadowColor);
  }
  img {
    max-width: 100%;
    position: relative;
    height: auto;
    display: block;
  }
  ${media.brp1440} {
    width: 166px;
  }
  ${media.brp1280} {
    width: 155px;
  }
  ${media.brp1024} {
    grid-column: 2/3;
    grid-row: 3/4;
    filter: drop-shadow(3.041px 3.041px 6.082px var(--shadowColor));
    &:before {
      bottom: 0;
      left: -20px;
      width: calc(100% + 20px);
      height: 50%;
      box-shadow: 0 0 0 calc(var(--shadowSize) * 1) var(--stepsShadowColor),
        0 0 0 calc(var(--shadowSize) * 2) var(--stepsShadowColor),
        0 0 0 calc(var(--shadowSize) * 3) var(--stepsShadowColor),
        0 0 0 calc(var(--shadowSize) * 4) var(--stepsShadowColor);
    }
  }
  ${media.brp768} {
    grid-column: 1/2;
    grid-row: 1/4;
    width: auto;
    filter: drop-shadow(1px 1px 3px var(--shadowColor));
    &:before {
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: calc(var(--shadowSize) * -1) calc(var(--shadowSize) * -1) 0 var(--stepsShadowColor),
        calc(var(--shadowSize) * -2) calc(var(--shadowSize) * -2) 0 var(--stepsShadowColor),
        calc(var(--shadowSize) * -3) calc(var(--shadowSize) * -3) 0 var(--stepsShadowColor),
        calc(var(--shadowSize) * -4) calc(var(--shadowSize) * -4) 0 var(--stepsShadowColor);
    }
  }
`;

export const CTAWrapper = styled.div`
  margin-top: 60px;
  ${media.brp1440} {
    margin-top: 40px;
  }
`;
