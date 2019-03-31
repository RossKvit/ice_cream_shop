import C from '../../constants'
import {fullFillOrder, payForOrder, cancelOrder} from "../index";

describe("Fullfill order", () => {
     it("should the right action type", () => {
            const action = fullFillOrder();
            expect(action.type).toEqual(C.FULLFILL_ORDER)
     });
    it("should the right action type for order", () => {
        const action = payForOrder();
        expect(action.type).toEqual(C.PAY_FOR_ORDER)
    });

    it("should the right action type for canceled order", () => {
        const action = cancelOrder();
        expect(action.type).toEqual(C.CANCEL_ORDER)
    });

    it("should have the Id in the payload", () => {
        const action = fullFillOrder(5);
        expect(action.payload).toEqual(5)
    });
    it("should have the Id in the payload for payForOrder", () => {
        const action = payForOrder(5);
        expect(action.payload).toEqual(5)
    });
    it("should have the Id in the payload for cancelOrder", () => {
        const action = cancelOrder(5);
        expect(action.payload).toEqual(5)
    });
})