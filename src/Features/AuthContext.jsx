import { createContext, useEffect, useState } from 'react';
import { getMe } from '../api/auth.api';

export const authContext = createContext();

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await getMe();
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, []);
  return (
    <authContext.Provider
      value={{ user, setUser, isLoading }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthContext;
