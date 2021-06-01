import { handleEmail } from './validators'

describe('Validators', () => {
    describe('handleEmail', () => {
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

        ].forEach((email) => {
            it(`should be false for ${email}`, () => {
               
                    expect(handleEmail(email)).toBe(false);
    
            })
        })
        

        it('should be true', () => {
            expect(handleEmail("meine.email.adresse@blah.de")).toBe(true);
        })
        it('should be true with .com', () => {
            expect(handleEmail("meine-email-adresse@blah.com")).toBe(true);
        })
        it('should be true with .com without any signs', () => {
            expect(handleEmail("meineemailadresse@blah.com")).toBe(true);
        })
        it('should be true with - after @ ', () => {
            expect(handleEmail("meineemailadresse@blah-blah.com")).toBe(true);
        })
    })
})