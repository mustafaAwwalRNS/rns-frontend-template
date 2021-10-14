import "styled-components";

interface Colors {
  /**
   * Main theme color
   */
  main: string;
  /**
   * Secondary theme color
   */
  secondary: string;
  /**
   * Color to show success
   */
  success: string;
  /**
   * Color to show warning
   */
  warn: string;
  /**
   * Color to show danger
   */
  danger: string;
  /**
   * Border color of the theme
   */
  border: string;
  /**
   * The color used as background for content.
   */
  surface: string;
  /**
   * Application background. It must have some contrast with the surface to
   * highlight the surface.
   */
  background: string;
  /**
   * Typography colors
   */
  text: {
    /**
     * Main text color
     */
    main: string;
    /**
     * Secondary text color
     */
    secondary: string;
  };
  /**
   * Colors in contrast with the corresponding color of the theme. Use them
   * in parallel for background and foreground and keep them in high contrast ratio.
   */
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
    /**
     * Name of the theme
     */
    name: string;
    /**
     * Colors of the theme
     */
    colors: Colors;
    /**
     * Spacing function used to do spacing
     */
    spacing: (multiple?: number) => string;
    /**
     * Border radius function used to calculate border radius
     */
    borderRadius: (multiple?: number) => string;
    /**
     * Use this function to add shadow
     */
    shadow: (number?: number) => string;
    /**
     * Sidebar properties. This is common because it is some
     * time required by multiple components
     */
    sidebar: {
      width: string;
      zIndex: number;
    };
    /**
     * Common header properties.
     */
    header: {
      height: string;
      zIndex: number;
    };
    /**
     * Default container width.
     */
    containerWidth: string;
  }
}
