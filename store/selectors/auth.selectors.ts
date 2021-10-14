import { AppStoreState } from "../app.types";
import { useSelector } from "react-redux";

export const useSelectAuth = (): AppStoreState["auth"] =>
  useSelector((state: AppStoreState) => state.auth);
