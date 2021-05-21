import { useEffect, useState } from "react"

export function LoginToken() {
    const [token, setToken] = useState(0)
    useEffect(() => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-shared-shopper-secret": "fake-secret"
            },
            body: JSON.stringify({
                "email": "test123@gmx.de",
                "password": "12231"
            })
        })
            .then((response) => response.json())
            .then((data) => setToken(data.accessToken))

        return () => {
            
        }
    }, [])
    console.log(token)
}