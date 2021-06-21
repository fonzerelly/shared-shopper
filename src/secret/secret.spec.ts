import { secretCheck } from './secret'

describe("secretCheck", () => {
    it("should find fake-secret", () => {
        const urlMock = "?secret=fake-secret"
        expect(secretCheck(urlMock)).toEqual("fake-secret")
    })

    it("should not be Equal", () => {
        const urlMock = "?secret=No-Secret"
        expect(secretCheck(urlMock)).not.toEqual("fake-secret")
    })

    it("should return empty string", () => {
        const urlMock = ""
        expect(secretCheck(urlMock)).toEqual("")
    })
})