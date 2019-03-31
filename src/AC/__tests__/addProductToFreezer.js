import C from '../../constants'
import F from '../../flavors'
import {addProductToFreezer, updateTemperature, doSomething} from '../index'
import freezer from "../../reducer/freezer";

describe("Add product to freezer", () => {
     it("should contain the right action type", () => {
            const action = addProductToFreezer();
            expect(action.type).toEqual(C.ADD_PRODUCT_TO_FREEZER)
     });

    it("should have a name and amount in payload", () => {
        const action = addProductToFreezer(F.MOCHA, 5);
        expect(action.payload.name).toEqual(F.MOCHA);
        expect(action.payload.amount).toEqual(5);
    });
})

describe("doSomething()", () => {
    const getState = ()  => ({
        freezer:  {
            temperature: 10
        }
    });

     it("should dispatch the 'FOO' action", () => {
            const dispatch = jest.fn();
            const action = doSomething();
            action(dispatch, getState);
            expect(dispatch.mock.calls.length).toEqual(1)
            expect(dispatch.mock.calls[0][0].type).toEqual('FOO')
     })

    it("should use the temperature in payload", () => {
        const dispatch = jest.fn();
        const action = doSomething();
        action(dispatch, getState);
        expect(dispatch.mock.calls.length).toEqual(1)
        expect(dispatch.mock.calls[0][0].payload).toEqual(10)
    })
})