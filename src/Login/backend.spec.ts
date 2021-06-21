import { aquireToken, getList, getContent } from "./backend"
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

describe("getList", () => {
  it("should return Shoppinglists", async () => {
      const scope = nock('http://localhost:3000')
      .options("/overview")
      .reply(200, () => null, {
        "Access-Control-Allow-Origin": "*",
        'access-control-allow-headers': 'x-shared-shopper-secret, authorization',
        "Content-Type": "application:json"
      })
      .get('/overview')
      .reply(200, { shoppingLists: 'Test' }, 
      { 
        'Access-Control-Allow-Origin': '*',
      });

    const result =  await getList()
    expect(result).toEqual('Test')
  })
})

describe("getContent", () => {
  it("should return Content of a certrain Shoppinglist", async () => {
      const scope = nock('http://localhost:3000')
      .options("/shoppinglist/0")
      .reply(200, () => null, {
        "Access-Control-Allow-Origin": "*",
        'access-control-allow-headers': 'x-shared-shopper-secret, authorization',
        "Content-Type": "application:json"
      })
      .get('/shoppinglist/0')
      .reply(200, { id: '0', name: 'Test'}, 
      { 
        'Access-Control-Allow-Origin': '*',
      });

    const result =  await getContent("0")
    expect(result).toEqual({id: '0', name: 'Test'})
  })
})