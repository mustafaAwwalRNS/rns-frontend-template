import React from "react";

type GridColumnValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridItemProps {
  col?: GridColumnValues;
  xs?: GridColumnValues;
  sm?: GridColumnValues;
  md?: GridColumnValues;
  lg?: GridColumnValues;
  xl?: GridColumnValues;
  className?: string;
  children: React.ReactNode;
}
