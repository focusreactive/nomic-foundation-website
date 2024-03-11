import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const OurValuesBlockSection = styled.section`
  padding: 84px 0 0;
  width: 100%;
  margin-bottom: 64px;
  margin-top: 64px;
  position: relative;
  z-index: 2;
  ${media.brp1440} {
    padding-top: 46px;
    margin-top: 56px;
    margin-bottom: 56px;
  }
  ${media.brp1024} {
    padding-top: 0;
  }
`;

export const OurValuesBlockItems = styled.div`
  columns: 2;
  column-gap: 56px;
  ${media.brp768} {
    columns: auto;
  }
`;
export const OurValuesBlockItem = styled.div`
  padding: 16px 0 24px;
  width: 100%;
  overflow: hidden;
  break-inside: avoid-column;
  -webkit-column-break-inside: avoid;
`;

export const OurValuesBlockItemTitlte = styled.h3`
  font-weight: 500;
  font-size: 19px;
  line-height: 140%;
  margin-bottom: 8px;
  letter-spacing: 0.03em;
  color: ${appTheme.light.colors.font150};

  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1440} {
    font-size: 16px;
  }
`;

export const OurValuesBlockItemText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: 0.031em;

  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp1440} {
    font-size: 14px;
  }
`;
