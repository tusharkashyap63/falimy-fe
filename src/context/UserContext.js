import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
const serverUrl = process.env.REACT_APP_SERVER_URL;

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    setUserLoading(true);
    getAccessTokenSilently().then(token => {
      axios
        .get(`${serverUrl}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => {
          setUser(res.data);
          setUserLoading(false);
        })
        .catch(err => console.error(err));
    });
  }, [getAccessTokenSilently]);

  const value = { user, userLoading };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
