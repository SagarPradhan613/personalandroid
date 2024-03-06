import React, { createContext, useState } from 'react';

const VerifyContext = createContext();

const VerifyProvider = ({ children }) => {
  const [verify, setVerify] = useState(false);

  return (
    <VerifyContext.Provider value={{ verify, setVerify }}>
      {children}
    </VerifyContext.Provider>
  );
};

export { VerifyContext, VerifyProvider };
