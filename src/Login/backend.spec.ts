import { aquireToken } from "./backend"
import nock from 'nock'

describe("aquireToken", () => {
    //  nock('http://localhost:3000')
    //     .post('/login', { email: 'test@email.com', password: "Passwort" })
    //     .reply(200, { token: "1111111" })

   const secret = "fake-secret"


    it("should return accessToken", async () => {
        const scope = nock('http://localhost:3000', {
          reqheaders: {
            "Content-Type": "application/json",
          },
        }) 
        .post('/login',  'email=test@mail.de')
        .reply(200, { token: [{ token: '1111111' }] }, 
        { 
          'Access-Control-Allow-Origin': '*', 
        });

      const result =  await aquireToken("test@email.de", "test")
      console.log(result + "************************")
    
    })
})