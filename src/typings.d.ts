// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="@emotion/react/types/css-prop" />

type CSSModule = Record<string, string>;

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.ico' {
  const ico: any;
  export = ico;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.jpeg' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const value: string;
  export = value;
}

declare module '*.gif' {
  const value: string;
  export = value;
}

declare module '*.webp' {
  const value: string;
  export = value;
}

declare module '*.mp4' {
  const value: string;
  export = value;
}

declare module '*.webm' {
  const value: string;
  export = value;
}

declare module 'rehype-react' {
  type RehypeOptions = {
    createElement: any;
    components: any;
  };
  class RehypeReact {
    Compiler: any;
    constructor(options: RehypeOptions);
  }
  export default RehypeReact;
}
