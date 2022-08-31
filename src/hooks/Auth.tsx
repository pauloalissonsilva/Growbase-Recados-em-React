import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface AuthContextProps {
  children: ReactNode;
}

interface AuthState {
  token: string,
  user: Object;
}

interface SignInCredentials {
  email: string;
  password: string
}

interface Response {
  data: {
    userId: string
    userName: string
    token: string
  }
}


interface AuthContextData {
  user: Object;
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }: AuthContextProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@:token');
    const user = localStorage.getItem('@:user');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState;

  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/user/login', {
      name: email,
      pass: password
    });

    const { token, userName } = response.data.data;

    console.log(token, userName)

    localStorage.setItem('@:token', token);
    localStorage.setItem('@:user', JSON.stringify(userName));

    setData({ token, user: userName })

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@:token');
    localStorage.removeItem('@:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an provider ')
  }

  return context;

}
