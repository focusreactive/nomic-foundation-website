import { styled } from '@linaria/react';
import { appTheme, media, tmSelectors } from '../../../themes';

export const SpollerItem = styled.div`
  position: relative;
  padding: 22px 0 21px;
  cursor: pointer;
  border-bottom: 1px solid ${appTheme.light.colors.border200};
  ${tmSelectors.dark} {
    border-color: ${appTheme.dark.colors.border200};
  }
  &.is-active {
    .spoller-caret {
      background: ${appTheme.light.colors.bgTexture300};
      ${tmSelectors.dark} {
        background: ${appTheme.dark.colors.bgTexture300};
      }
      .minus {
        display: block;
      }
      .plus {
        display: none;
      }
    }
    .spoller-body {
      display: block;
    }
  }
  &:hover {
    .spoller-caret {
      background: ${appTheme.light.colors.bgTexture300};
      ${tmSelectors.dark} {
        background: ${appTheme.dark.colors.bgTexture300};
      }
    }
  }
  ${media.brp768} {
    padding: 16px 0 16px;
  }
`;

export const SpollerItemTitle = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  font-family: 'EncodeSans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: left;
  letter-spacing: 0.03em;
  cursor: pointer;
  color: ${appTheme.light.colors.font150};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font100};
  }
  ${media.brp768} {
    font-size: 14px;
  }
`;

export const SpollerItemCaret = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid ${appTheme.light.colors.bgTexture200};
  background: ${appTheme.light.colors.bgTexture250};
  box-shadow: 0px 0.714px 1.429px 0px rgba(16, 24, 40, 0.05);
  ${tmSelectors.dark} {
    border-color: ${appTheme.dark.colors.border300};
    background: ${appTheme.dark.colors.bgTexture250};
  }
  svg {
    stroke: ${appTheme.light.colors.font400};
    ${tmSelectors.dark} {
      stroke: ${appTheme.dark.colors.font400};
    }
  }
  .minus {
    display: none;
  }
  ${media.brp768} {
    width: 20px;
    height: 20px;
    svg {
      width: 8px;
      height: 8px;
    }
  }
`;

export const SpollerItemBody = styled.div`
  padding: 4px 40px 2px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.03em;
  display: none;

  color: ${appTheme.light.colors.font400};
  ${tmSelectors.dark} {
    color: ${appTheme.dark.colors.font50};
  }
  p:not(:last-child) {
    margin-bottom: 15px;
  }
  a {
    text-decoration: underline;
    color: ${appTheme.light.colors.font150};
    ${tmSelectors.dark} {
      color: ${appTheme.dark.colors.font250};
    }
    &:hover {
      text-decoration: none;
    }
  }

  &.is-active {
    display: block;
  }
  ${media.brp768} {
    font-size: 14px;
  }
`;
