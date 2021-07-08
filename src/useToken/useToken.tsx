import { useState } from 'react';

export function useToken() {
  const getToken = () => {
    const userToken: string | null = sessionStorage.getItem('token');
    return userToken
  }
  const [token, setToken] = useState(getToken());

  const saveToken = async (userToken: any) => {
    await sessionStorage.setItem('token', userToken)
    setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token
  }
}