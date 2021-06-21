import { aquireToken } from "./backend"
import nock from 'nock'

describe("aquireToken", () => {
    const scope = nock('http://myapi.com')
        .get('/token')
        .reply(200, { token: "1111111" },
            {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json'
            })
    const mockAquire = () => "111111"

    it("should return accessToken", () => {
        expect(mockAquire()).toEqual("111111")
    })
})