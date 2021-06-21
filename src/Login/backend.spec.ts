import { aquireToken } from "./backend"
import nock from 'nock'

describe("aquireToken", () => {
    it("should return accessToken", async () => {
        const scope = nock('http://localhost:3000')
        .options("/login")
        .reply(200, () => null, {
          "Access-Control-Allow-Origin": "*",
          'access-control-allow-headers': 'x-shared-shopper-secret',
          "Content-Type": "application:json"
        })
        .post('/login', {email: `test@email.de`, password: 'test'})
        .reply(200, { accessToken: '1111111' }, 
        { 
          'Access-Control-Allow-Origin': '*',
        });

      const result =  await aquireToken("test@email.de", "test")
      expect(result).toEqual('1111111')
    })
})