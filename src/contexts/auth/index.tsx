import React, { createContext, useEffect, useState } from "react";
import {
  AuthContextData,
  User,
  AuthorizationResponse,
  AuthResponse,
} from "../../Interface";
import * as AuthSessions from "expo-auth-session";
import { authApi, endPoints } from "../../services";
import {
  getToken,
  getUser,
  removeToken,
  removeUser,
  setToken,
} from "../../utils";

export const AuthContext = createContext({} as AuthContextData);

type Props = {
  children: React.ReactNode;
};

function AuthProvider({ children }: Props) {
  const [isSingIn, setIsSingIn] = useState(true); //Loading
  const [user, setUser] = useState<User | null>(null);

  const resetDataApp = () => {
    removeToken();
    removeUser();
    setUser(null);
  };

  const authUrl = endPoints.githubLoginOAuth;

  async function singIn() {
    setIsSingIn(true);

    try {
      const authSessionResponse = (await AuthSessions.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (authSessionResponse.type !== "success") {
        removeToken();
        throw new Error("Error in singIn");
      }

      if (authSessionResponse.params === "access_denied") {
        removeToken();
        throw new Error("Error access_denied");
      }

      if (!authSessionResponse.params.code) {
        removeToken();
        throw new Error("No code found");
      }

      const { code } = authSessionResponse.params;

      const authResponse = await authApi.post("", {
        code,
      });

      //authapi.defaults.headers.common["Authorization"] = `Bearer ${authResponse.data.token}`;

      const { token, user } = authResponse.data as AuthResponse;

      setToken(token);
      setUser(user);
    } catch (error: any) {
      console.log(`singIn error`, error);
      console.log(`singIn error`, error.message);
    } finally {
      setIsSingIn(false);
    }
  }

  async function singOut() {
    try {
      setIsSingIn(true);
      resetDataApp();
    } catch (error: any) {
      console.log(`singOut error`, error);
      console.log(`singOut error`, error.message);
    } finally {
      setIsSingIn(false);
    }
  }

  const loadingUserStorage = async () => {
    const userStorage = await getUser();
    if (!userStorage) {
      return null;
    }

    const userFind = JSON.parse(userStorage);

    setUser(userFind);
  };

  const loadingTokenStorage = async () => {
    const tokenStorage = await getToken();
    if (!tokenStorage) {
      return null;
    }

    // const tokenFind = JSON.parse(tokenStorage);
    setToken(tokenStorage);
  };

  useEffect(() => {
    loadingUserStorage();
    loadingTokenStorage();
    setIsSingIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ singIn, isSingIn, singOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
