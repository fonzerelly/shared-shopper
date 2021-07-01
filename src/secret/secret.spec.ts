import { secretCheck, urlCheck } from './secret'

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

describe("urlCheck", () => {
    it("should find fake-secret in fake url", () => {
        window = Object.create(window);
        const url = "?secret=fake-secret";
        Object.defineProperty(window, 'location', {
            value: {
                search: url
            },
            writable: true
        });
        expect(window.location.search).toEqual(url);
        expect(urlCheck()).toEqual("fake-secret");
    })

    it("should return an empty string if no secret is given", () => {
        window = Object.create(window);
        const url = "";
        Object.defineProperty(window, 'location', {
            value: {
                search: url
            },
            writable: true
        });
        expect(window.location.search).toEqual(url);
        expect(urlCheck()).toEqual("");
    })
})
