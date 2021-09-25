import { css } from '@emotion/react';

import ViceCitySans_font from "../fonts/ViceCitySans.woff2";
import ResolveRegular_font from "../fonts/Resolve-Regular.woff2";
import ResolveBold_font from "../fonts/Resolve-Bold.woff2";
import ResolveItalic_font from "../fonts/Resolve-RegularIta.woff2";
import ResolveBoldItalic_font from "../fonts/Resolve-BoldIta.woff2";

export const ViceCitySans = css`
  @font-face {
    font-family: "ViceCitySans";
    src: url("${ViceCitySans_font}") format("woff2");
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
