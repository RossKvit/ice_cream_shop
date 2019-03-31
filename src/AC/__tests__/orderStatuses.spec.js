import C from '../../constants'
import {fullFillOrder, payForOrder, cancelOrder} from '../index'

describe("Order statuses", () => {
    it("should containt the right action type fullfill order", () => {
        const action = fullFillOrder();
        expect(action.type).toEqual(C.FULLFILL_ORDER)
    })

    it("should containt the right action type pay order", () => {
        const action = payForOrder();
        expect(action.type).toEqual(C.PAY_FOR_ORDER)
    })

    it("should containt the right action type cancelled order", () => {
        const action = cancelOrder();
        expect(action.type).toEqual(C.CANCEL_ORDER)
    })

    it("should have an Idin payload fullfill order", () => {
        const action = fullFillOrder(3);
        expect(action.payload).toEqual(3);
    }) 

    it("should have an Idin payload pay order", () => {
        const action = payForOrder(3);
        expect(action.payload).toEqual(3);
    }) 

    it("should have an Idin payload cancelled order", () => {
        const action = cancelOrder(3);
        expect(action.payload).toEqual(3);
    }) 
})