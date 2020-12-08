/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';
import { User } from '../services/auth';

interface AuthCOntextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthCOntextData>({} as AuthCOntextData);

export const AuthProvidier: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // se logado anteriormente, recupera as credenciais
  useEffect(() => {
    const userLocal = localStorage.getItem('@PhyTest:user');
    const tokenLocal = localStorage.getItem('@PhyTest:token');

    if (userLocal && tokenLocal) {
      setUser(JSON.parse(userLocal));
    }
  }, []);

  async function signIn() {
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
