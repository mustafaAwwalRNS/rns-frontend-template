import { useContext } from "react";
import { spacingContext } from "@contexts";

export const useSpacing = (): number => useContext(spacingContext);
