import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    setUsuario({
      name: "Jason E.",
      registered: "03/10/2024",
    });
  }, []);

  return (
    <UserContext.Provider value={usuario}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
