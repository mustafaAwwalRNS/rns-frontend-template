export interface AuthSliceState {
  loggedIn: boolean;
  user: {
    username: string;
    profileImage: string;
  };
}
