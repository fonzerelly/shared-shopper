import { secretCheck } from "../secret/secret"

export function aquireToken() {
    const search = window.location.search
    const secret = secretCheck(search);
        return fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-shared-shopper-secret":`${ secret }`
            },
            body: JSON.stringify({
                "email": "test123@gmx.de",
                "password": "12231"
            })
        })
            .then((response) => response.json())
            .then((data) => data.accessToken)
}