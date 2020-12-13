/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

interface User {
  userName: string;
  password: string;
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

    if (userLocal) {
      setUser(JSON.parse(userLocal));
    }
  }, []);

  async function signIn(userName: string, password: string) {
    const users = JSON.parse(localStorage.getItem('@PhyTest:users') || '[]');
    const usr = { userName, password };

    const found = users.find(
      (element: { userName: string; password: string }) =>
        element.userName === userName && element.password === password,
    );
    if (found) {
      setUser(usr);
      localStorage.setItem(
        '@PhyTest:user',
        JSON.stringify({ userName, password }),
      );
    } else {
      const erroMessage = 'Invalid Credentials';
      throw erroMessage;
    }
  }

  async function signUp(userName: string, password: string) {
    const usuario = { userName, password };

    const users = JSON.parse(localStorage.getItem('@PhyTest:users') || '[]');
    const found = users.find(
      (element: { userName: string; password: string }) =>
        element.userName === userName,
    );
    if (found) {
      const erroMessage = 'Invalid Credentials';
      throw erroMessage;
    } else {
      users.push(usuario);
      localStorage.setItem('@PhyTest:users', JSON.stringify(users));
      signIn(userName, password);
    }
  }

  function signOut() {
    localStorage.removeItem('@PhyTest:user');
    setUser(null);
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
