import { useEffect, useState } from "react";
import { AuthService } from "../services/auth.service";

export const useAuth = () => {
  const [isAuth, setAuth] = useState(false);
  const [username, setName] = useState("user");

  useEffect(() => {
    login();
  }, []);

  const login = () => {
    const auth = AuthService.get();
    if (auth) {
      setAuth(true);
      setName(auth.name);
    }
  };

  const logout = () => {
    setAuth(false);
    AuthService.del();
    setName("user");
  };

  return {
    isAuth,
    logout,
    login,
    username,
  };
};
