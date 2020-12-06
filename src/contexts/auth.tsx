/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';

interface AuthCOntextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthCOntextData>({} as AuthCOntextData);

export const AuthProvidier: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn('Saulo', 'Monteiro');
    setUser(response.user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
