import { AppStoreState } from "../app.types";
import { useSelector } from "react-redux";
/**
 *
 * @file Contains all the auth selectors
 */

/**
 *
 * useAuthSelect
 *
 * Features:
 * - Selects the auth state.
 */
export const useSelectAuth = (): AppStoreState["auth"] =>
  useSelector((state: AppStoreState) => state.auth);
