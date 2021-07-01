import { searchExistingListName } from "./List"


describe('searchExistingListName', () => {
    it('should return listName_1', () => {
        expect(searchExistingListName('List', [{name: 'List'}])).toEqual('List_1')
    })
    it('should return listName_2', () => {
        expect(searchExistingListName('List', [{name: 'List'},{name: 'List_1'}])).toEqual('List_2')
    })
    it('should return listName_3 when user is writing List_2', () => {
        expect(searchExistingListName('List_2', [{name: 'List'},{name: 'List_1'},{name: 'List_2'}])).toEqual('List_2_1')
    })
    it('should return List_Test when user is writing List_Test', () => {
        expect(searchExistingListName('List_Test', [])).toEqual('List_Test')
    })
    it('should return List_Test_1 when user is writing List_Test', () => {
        expect(searchExistingListName('List_Test', [{name: 'List_Test'}])).toEqual('List_Test_1')
    })
    it('should return List_Test_2 when user is writing List_Test_1 and List_Test_1 ist existing', () => {
        expect(searchExistingListName('List_Test', [{name: 'List_Test'}, {name: 'List_Test_1'}])).toEqual('List_Test_2')
    })
    it('should return List_Test_2 when user is writing List_Test_1 and List_Test_1 ist existing', () => {
        expect(searchExistingListName('List_Test_2', [{name: 'List_Test'}, {name: 'List_Test_1'}, {name: 'List_Test_2'}, {name: 'List'}])).toEqual('List_Test_2_1')
    })
    it('should return _ when user is writing _ and _ ist existing', () => {
        expect(searchExistingListName('_', [{name: '_'}, {name: 'List_Test_1'}, {name: 'List_Test_2'}, {name: 'List'}])).toEqual('_')
    })
    it('should return List__2 when user is writing List_ and List__1 ist existing', () => {
        expect(searchExistingListName('List__2', [{name: 'List_'}, {name: 'List__1'}])).toEqual('List__2')
    })

    it('should return List_2 when user is writing List_ and List__1 ist existing', () => {
        expect(searchExistingListName('List__2', [{name: 'List_'}, {name: 'List__1'}])).toEqual('List__2')
    })
})