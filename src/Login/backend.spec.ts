import { aquireToken, getList, getContent, deleteList, addList, addContent, deleteContent, editCount, editMark } from "./backend"
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

describe("deleteList", () => {
  it("should delete a List (status 200)", async () => {
      const scope = nock('http://localhost:3000')
      .options("/overview/0")
      .reply(200, () => null, {
        "Access-Control-Allow-Origin": "*",
        'access-control-allow-headers': 'x-shared-shopper-secret, authorization',
        "Content-Type": "application:json"
      })
      .delete('/overview/0')
      .reply(200,()=>null,
      { 
        'Access-Control-Allow-Origin': '*',
      });

    await deleteList(0).then((res)=>expect(res.status).toBe(200))
  })
})

describe("addList", () => {
  it("should add a new List (status 200)", async () => {
      const scope = nock('http://localhost:3000')
      .options("/overview/add")
      .reply(200, () => null, {
        "Access-Control-Allow-Origin": "*",
        'access-control-allow-headers': 'x-shared-shopper-secret, authorization',
        "Content-Type": "application:json"
      })
      .post('/overview/add', {name: "NewList"})
      .reply(200, ()=>null, 
      { 
        'Access-Control-Allow-Origin': '*',
      });

      await addList("NewList").then((res)=>expect(res.status).toBe(200))
  })
})

describe("addContent", () => {
  it("should add new Content to a certain list (status 200)", async () => {
      const scope = nock('http://localhost:3000')
      .options("/shoppinglist/0/add")
      .reply(200, () => null, {
        "Access-Control-Allow-Origin": "*",
        'access-control-allow-headers': 'x-shared-shopper-secret, authorization',
        "Content-Type": "application:json"
      })
      .post('/shoppinglist/0/add')
      .reply(200, ()=>null, 
      { 
        'Access-Control-Allow-Origin': '*',
      });

      await addContent("Testaepfel", 2, "0").then((res)=>expect(res.status).toBe(200))
  })
})

describe("deleteContent", () => {
  it("should delete an item in a certain list (status 200)", async () => {
      const scope = nock('http://localhost:3000')
      .options("/shoppinglist/0/0")
      .reply(200, () => null, {
        "Access-Control-Allow-Origin": "*",
        'access-control-allow-headers': 'x-shared-shopper-secret, authorization',
        "Content-Type": "application:json"
      })
      .delete('/shoppinglist/0/0')
      .reply(200,()=>null,
      { 
        'Access-Control-Allow-Origin': '*',
      });

    await deleteContent('0',0).then((res)=>expect(res.status).toBe(200))
  })
})

describe("editCount", () => {
  it("should take a number and write in existing item (status 200)", async () => {
      const scope = nock('http://localhost:3000')
      .options("/shoppinglist/0/0/count")
      .reply(200, () => null, {
        "Access-Control-Allow-Origin": "*",
        'access-control-allow-headers': 'x-shared-shopper-secret, authorization',
        "Content-Type": "application:json"
      })
      .put('/shoppinglist/0/0/count')
      .reply(200, ()=>null, 
      { 
        'Access-Control-Allow-Origin': '*',
      });

      await editCount("2", "0", 0).then((res)=>expect(res.status).toBe(200))
  })
})

describe("editMark", () => {
  it("should set mark of an item from false to true (status 200)", async () => {
      const scope = nock('http://localhost:3000')
      .options("/shoppinglist/0/0/mark")
      .reply(200, () => null, {
        "Access-Control-Allow-Origin": "*",
        'access-control-allow-headers': 'x-shared-shopper-secret, authorization',
        "Content-Type": "application:json"
      })
      .put('/shoppinglist/0/0/mark')
      .reply(200, ()=>null, 
      { 
        'Access-Control-Allow-Origin': '*',
      });

      await editMark("0", 0).then((res)=>expect(res.status).toBe(200))
  })
})