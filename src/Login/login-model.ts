export interface LoginModel {
    email?: string;
    passwort?: string;
    passwortCheck?: string;
}

export function initLoginModel(): LoginModel {
    return {}
}

export function setEmail (model: LoginModel, email: string) {
    return {...model, email}
}

