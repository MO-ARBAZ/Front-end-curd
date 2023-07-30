import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginSuccessful, setLoginSuccessful] = useState(true);

  return (
    <AuthContext.Provider value={{ loginSuccessful, setLoginSuccessful }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
