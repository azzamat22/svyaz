import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Курбоншоев Азамат",
      profilePic:
        "https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-127195.jpg?w=1380&t=st=1684257850~exp=1684258450~hmac=147b37da803d88c31802ce2bd0ad6410f9f64be7e0fd0f45e2827c8bff16b925",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
