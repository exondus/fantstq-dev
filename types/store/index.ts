export interface AuthSliceProps {
  isLoggedIn: boolean;
  isSuspended: boolean;
  isVerified: boolean;
}

export type AuthStateProps = {
  auth: {
    isLoggedIn: boolean;
    isSuspended: boolean;
    isVerified: boolean;
  };
};
