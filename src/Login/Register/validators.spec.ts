import { handleEmail } from './register'

describe('Validators', () => {
    describe('handleEmail', () => {
        it('should be false', () => {
            [
                "email",
                "meineEmailAdresseAtBlahDe",
                "meine.email.adresse@blahde",
                "meine.email.adresse@x.de",
                "meine&email@blah.de",
                "meine%email@blah.de",
                "meine!email@blah.de",
                `meine"email@blah.de`,
                "meine§email@blah.de",
                "meine$email@blah.de",
                "meine/email@blah.de",
                "meine(email@blah.de",
                "meine)email@blah.de",
                "meine?email@blah.de",
                `meine'email@blah.de`,
                "meine=email@blah.de",
                "meine`email@blah.de"

            ].forEach(e => {
                expect(handleEmail(e)).toBe(false);
            })
        })

        it('should be true', () => {
            expect(handleEmail("meine.email.adresse@blah.de")).toBe(true);
        })
        it('should be true with .com', () => {
            expect(handleEmail("meine.em&ail.adresse@blah.com")).toBe(true);
        })
    })
})