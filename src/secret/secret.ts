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

