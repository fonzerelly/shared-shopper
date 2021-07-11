import { useState } from 'react';

export function secretCheck(queryString: string) {
    const urlParams = new URLSearchParams(queryString)
    const secret = urlParams.get('secret')
    return secret === null ? "" : secret
}

export function urlCheck() {
    const search = window.location.search
    const secret = secretCheck(search)
    return secret

}

export function useSecret() {
    const getSecret = () => {
      const userSecret: string | null = localStorage.getItem('secret');
      return userSecret
    }
    const [secret, setSecret] = useState(getSecret());
  
    const saveSecret = (userSecret: any) => {
      sessionStorage.setItem('secret', userSecret )
      setSecret(userSecret.secret)
    }
  
    return {
      setSecret: saveSecret,
      secret
    }
  }