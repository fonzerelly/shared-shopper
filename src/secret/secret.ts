export function secretCheck(queryString: string){
    const urlParams = new URLSearchParams(queryString)
    const secret = urlParams.get('secret')
    return secret
}