import "styled-components";

interface Colors {
  main: string;
  secondary: string;
  success: string;
  warn: string;
  danger: string;
  border: string;
  surface: string;
  background: string;
  text: {
    main: string;
    secondary: string;
  };
  contrast: {
    main: string;
    secondary: string;
    success: string;
    warn: string;
    danger: string;
  };
}
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: Colors;
    spacing: (multiple?: number) => string;
    borderRadius: (multiple?: number) => string;
    shadow: (number?: number) => string;
    sidebar: {
      width: string;
      zIndex: number;
    };
    header: {
      height: string;
      zIndex: number;
    };
    containerWidth: string;
  }
}
