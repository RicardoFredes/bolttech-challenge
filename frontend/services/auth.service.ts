const AUTH_SERVICE_ID = "private-access-token";

interface AuthService {
  name: string;
  token: string;
}

const setLocalAuth = ({ name, token }: AuthService): AuthService | null => {
  if (typeof name !== "string" || typeof token !== "string") {
    return null;
  }
  const value = JSON.stringify({ name, token });
  localStorage.setItem(AUTH_SERVICE_ID, value);
  return { name, token };
};

const getLocalAuth = (): AuthService | null => {
  try {
    const value = localStorage.getItem(AUTH_SERVICE_ID);
    if (!value) return null;
    const { name, token } = JSON.parse(value);
    if (typeof name !== "string" || typeof token !== "string") {
      return null;
    }
    return { name, token };
  } catch (error) {
    return null;
  }
};

const hasLocalAuth = () => {
  return !!getLocalAuth();
};

const delLocalAuth = () => {
  localStorage.removeItem(AUTH_SERVICE_ID);
};

export const AuthService = {
  set: setLocalAuth,
  get: getLocalAuth,
  del: delLocalAuth,
  has: hasLocalAuth,
};
