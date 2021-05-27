export function secretCheck(){
    const queryString = window.location.search 
    const urlParams = new URLSearchParams(queryString)
    const secret = urlParams.get('secret')

    return secret
}