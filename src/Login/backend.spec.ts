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
        .post('/login', {email: `test@email.de`, password: 'test'})
        .reply(200, { accessToken: '1111111' }, 
        { 
          'Access-Control-Allow-Origin': '*',
          "x-shared-shopper-secret": `${secret}`
        });

      const result =  await aquireToken("test@email.de", "test")
      expect(result).toEqual('1111111')
    
    })
})