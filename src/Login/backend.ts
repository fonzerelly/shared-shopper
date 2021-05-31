import { urlCheck } from "../secret/secret"

export function aquireToken(email: string, password: string) {
    const secret = urlCheck();
    const token = fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-shared-shopper-secret": `${secret}`
        },
        body: JSON.stringify({
            "email": `${email}`,
            "password": `${password}`
        })
    })
        .then((response) => response.json())
        .then((data) => data.accessToken)

        return token
}