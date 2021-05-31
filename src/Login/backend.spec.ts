import { aquireToken } from "./backend"
import nock from 'nock'

describe("aquireToken", () => {
    //  nock('http://localhost:3000')
    //     .post('/login', { email: 'test@email.com', password: "Passwort" })
    //     .reply(200, { token: "1111111" })

   


    it("should return accessToken", async () => {
        const scope = nock('http://localhost:3001') 
        .get('/products')
        .reply(200, { products: [{ id: 1, name: 'nocked data' }] }, 
        { 
          'Access-Control-Allow-Origin': '*', 
          'Content-type': 'application/json' 
        });

      const result =  await aquireToken("test@email.de", "test")
      console.log(result + "************************")
    
    })
})