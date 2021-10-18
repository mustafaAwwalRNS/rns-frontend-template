import React from "react";

export type GridProps = {
  children: React.ReactNode;
  /**
   * Added negative margin to the container and padding to all the <GridItem /> children.
   */
  spacing?: number;
  className?: string;
} & Partial<
  Pick<
    React.CSSProperties,
    "flexDirection" | "justifyContent" | "alignItems" | "flexWrap"
  >
>;
