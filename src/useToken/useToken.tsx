import { useState } from 'react';
import {session} from '../Login/session'

export function useToken() {
  const getToken = () => {
    const userToken: string | null = sessionStorage.getItem('token');
    session.token = userToken
    return userToken
  }
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem('token', JSON.parse(userToken))
    setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token
  }
}