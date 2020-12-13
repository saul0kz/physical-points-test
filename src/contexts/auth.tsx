/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';

interface User {
  user_id: number;
  user_name: string;
  user_email: string;
  user_password: string;
  user_full_name: string;
}

interface AuthCOntextData {
  signed: boolean;
  user: User | null;
  signIn(userName: string, password: string): Promise<void>;
  signUp(userName: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthCOntextData>({} as AuthCOntextData);

export const AuthProvidier: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // se logado anteriormente, recupera as credenciais
  useEffect(() => {
    const userLocal = localStorage.getItem('@PhyTest:user');
    const token = localStorage.getItem('@PhyTest:token');

    if (userLocal && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(JSON.parse(userLocal));
    }
  }, []);

  async function signIn(userName: string, password: string) {
    const response = await api.post(`/user/login`, {
      userName,
      password,
    });

    const token = response.headers['x-access-token'];
    const usr = response.data;
    if (token) {
      localStorage.setItem('@PhyTest:token', token);
      localStorage.setItem('@PhyTest:user', JSON.stringify(usr));
      setUser(usr);
    }
  }

  async function signUp(userName: string, password: string) {
    const response = await api.post(`/user/login`, {
      userName,
      password,
    });

    const token = response.headers['x-access-token'];
    const usr = response.data;
    if (token) {
      localStorage.setItem('@PhyTest:token', token);
      localStorage.setItem('@PhyTest:user', JSON.stringify(usr));
      setUser(usr);
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@PhyTest:user');
    localStorage.removeItem('@PhyTest:token');
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
