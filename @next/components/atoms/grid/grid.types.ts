import React from "react";

export type GridProps = {
  children: React.ReactNode;
  spacing?: number;
  className?: string;
} & Partial<
  Pick<
    React.CSSProperties,
    "flexDirection" | "justifyContent" | "alignItems" | "flexWrap"
  >
>;
