import { useState } from 'react';

export function useToken() {
  const getToken = () => {
    const tokenString: string | null = localStorage.getItem('token');
    const userToken: string | null = tokenString;
    return userToken
  }
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    localStorage.setItem('token', JSON.parse(userToken))
    setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token
  }
}