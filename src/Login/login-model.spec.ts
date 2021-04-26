import {initLoginModel, setEmail} from './login-model'

describe('loginModel', () => {
    describe('initLoginModel', () => {
        it('should return an object', () => {
            expect(initLoginModel()).toEqual({});
        })

    })

    describe('setEmail', () => {
        it('should save new email', () => {
            const model = initLoginModel();

            expect(setEmail(model, "ich@gmx.de")).toEqual(expect.objectContaining({email: "ich@gmx.de"}))
        })
    })

    describe('createLoginModel', () => {
        it('', () => {
            
        })
    })


    


})