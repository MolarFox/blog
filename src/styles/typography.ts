import { css } from '@emotion/react';

import MonoFur_font from '../fonts/MonoFur.woff2';
import MonoFurItalic_font from '../fonts/MonoFur-Ita.woff2';

import ResolveRegular_font from '../fonts/Resolve-Regular.woff2';
import ResolveBold_font from '../fonts/Resolve-Bold.woff2';
import ResolveItalic_font from '../fonts/Resolve-RegularIta.woff2';
import ResolveBoldItalic_font from '../fonts/Resolve-BoldIta.woff2';

import ResolveLight_font from '../fonts/Resolve-Light.woff2';
import ResolveLightItalic_font from '../fonts/Resolve-LightIta.woff2';

export const MonoFur = css`
  @font-face {
    font-family: "MonoFur";
    src: url("${MonoFur_font}") format("woff2");
  }

  @font-face {
    font-family: "MonoFur";
    src: url("${MonoFurItalic_font}") format("woff2");
    font-weight: italic;
  }
`;

export const Resolve = css`
  @font-face {
    font-family: "Resolve";
    src: url("${ResolveRegular_font}") format("woff2");
  }

  @font-face {
    font-family: "Resolve";
    src: url("${ResolveBold_font}") format("woff2");
    font-weight: bold;
  }

  @font-face {
    font-family: "Resolve";
    src: url("${ResolveItalic_font}") format("woff2");
    font-style: italic;
  }

  @font-face {
    font-family: "Resolve";
    src: url("${ResolveBoldItalic_font}") format("woff2");
    font-weight: bold;
    font-style: italic;
  }
`;

export const ResolveLight = css`
  @font-face {
    font-family: "ResolveLight";
    src: url("${ResolveLight_font}") format("woff2");
  }

  @font-face {
    font-family: "ResolveLight";
    src: url("${ResolveRegular_font}") format("woff2");
    font-weight: bold;
  }

  @font-face {
    font-family: "ResolveLight";
    src: url("${ResolveLightItalic_font}") format("woff2");
    font-style: italic;
  }

  @font-face {
    font-family: "ResolveLight";
    src: url("${ResolveItalic_font}") format("woff2");
    font-weight: bold;
    font-style: italic;
  }
`;
