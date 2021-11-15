type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  isSingIn: boolean;
  singIn(): Promise<void>;
  singOut: () => void;
};

type AuthResponse = {
  token: string;
  user: User;
};

// lembra do backend...
type AuthorizationResponse = {
  type: string;
  params: {
    code?: string;
  };
};

export { User, AuthContextData, AuthResponse, AuthorizationResponse };
