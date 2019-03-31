import C from '../../constants'
import F from '../../flavors'
import {addProductToFreezer, doSmth} from '../index'

describe("Add product to freezer", () => {
    it("should containt the right action type", () => {
        const action = addProductToFreezer();
        expect(action.type).toEqual(C.ADD_PRODUCT_TO_FREEZER)
    })

    it("should have a name and amount in payload", () => {
        const action = addProductToFreezer(F.CHOCOLATE, 5);
        expect(action.payload.name).toEqual(F.CHOCOLATE);
        expect(action.payload.amount).toEqual(5);
    }) 
})

describe("Do smth", () => {
    const getState = () => ({
        freezer: {
            temperature: 10
        }
    })

    it ("shoulddispatch the 'test' action", () => {
        const dispatch = jest.fn();
        const action = doSmth()
        action(dispatch, getState)
        expect(dispatch.mock.calls.length).toEqual(1)
        expect(dispatch.mock.calls[0][0].type).toEqual('test')
    })
})