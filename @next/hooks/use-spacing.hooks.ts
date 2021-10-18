import { useContext } from "react";
import { spacingContext } from "@contexts";

/**
 *
 * useSpacing
 *
 * Feature:
 * - Get the spacing value from the spacingContext.
 */
export const useSpacing = (): number => useContext(spacingContext);
