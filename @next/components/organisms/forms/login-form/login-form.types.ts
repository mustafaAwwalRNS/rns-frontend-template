import type { LoginCredentials } from "@queries";
export interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  loading: boolean;
  success: boolean;
  error: string;
}
