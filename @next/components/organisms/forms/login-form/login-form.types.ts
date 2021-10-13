export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (loginCredentials: LoginCredentials) => void;
}
