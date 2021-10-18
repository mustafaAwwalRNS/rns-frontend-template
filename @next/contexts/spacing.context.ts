import { createContext } from "react";

/**
 * spacingContext
 *
 * Feature:
 * - Provides a numeric value to the children which is decided by the parent.
 * That value is then used by children to adjust there spacing.
 *
 *
 * Note:
 * If you want to see it being used see the grid component.
 */
export const spacingContext = createContext(0);
