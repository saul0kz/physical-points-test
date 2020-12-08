/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';
import { User } from '../services/auth';
import api from '../services/api';

interface AuthCOntextData {
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
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

  async function signIn() {
    api
      .post(`/user/login`, {
        userName: 'saul0kz',
        password: '12345678',
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    const response = await auth.signIn('Saulo', 'Monteiro');
    if (response) {
      localStorage.setItem('@PhyTest:token', response.token);
      localStorage.setItem('@PhyTest:user', JSON.stringify(response.user));
      setUser(response.user);
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@PhyTest:user');
    localStorage.removeItem('@PhyTest:token');
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
