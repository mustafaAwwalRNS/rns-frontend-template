import { DefaultTheme as DefaultThemInterface } from "styled-components";

export const defaultTheme: DefaultThemInterface = {
  name: "default",
  colors: {
    main: "purple",
    secondary: "grey",
    warn: "yellow",
    danger: "red",
    success: "green",
    border: "#ccc",
    surface: "white",
    background: "#eee",

    contrast: {
      main: "white",
      secondary: "white",
      warn: "white",
      danger: "white",
      success: "white",
    },
    text: {
      main: "black",
      secondary: "#666",
    },
  },
  shadow: (multiple = 1) =>
    `0 ${1 * multiple}px ${3 * multiple}px rgba(0,0,0,0.12), 0 ${
      1 * multiple
    }px ${2 * multiple}px rgba(0,0,0,0.24);`,
  spacing: (multiple = 1) => `${multiple * 0.5}rem`,
  borderRadius: (multiple = 1) => `${multiple * 0.5}rem`,
  sidebar: {
    width: "240px",
    zIndex: 9,
  },
  header: {
    height: "100px",
    zIndex: 10,
  },
  containerWidth: "1320px",
};

export const darkTheme: DefaultThemInterface = {
  ...defaultTheme,
  name: "dark",
  colors: {
    ...defaultTheme.colors,
    border: "white",
    surface: "#222",
    background: "black",
    text: {
      ...defaultTheme.colors.text,
      main: "white",
    },
  },
};
