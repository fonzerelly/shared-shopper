import { findListId } from "./session";
describe("findListId", () => {
    it("should return the id after =", () => {
        window = Object.create(window);
        const url = "?id=1";
        Object.defineProperty(window, 'location', {
            value: {
                search: url
            },
            writable: true
        });
        expect(window.location.search).toEqual(url);
        expect(findListId()).toEqual("1");
    })

    it("should return an empty string if no id is given", () => {
        window = Object.create(window);
        const url = "?id=";
        Object.defineProperty(window, 'location', {
            value: {
                search: url
            },
            writable: true
        });
        expect(window.location.search).toEqual(url);
        expect(findListId()).toEqual("");
    })

})