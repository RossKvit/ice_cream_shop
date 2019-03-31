import C from '../../constants'
import {placeOrder} from "../index";

describe("Place order", () => {
     it("should the right action type", () => {
            const action = placeOrder({});
            expect(action.type).toEqual(C.PLACE_ORDER)
     });
    it('should contains the custumer name in placeholder', () =>  {
        const customerName = "Bill";
        const action = placeOrder({
            customerName
        })
        expect(action.payload.customerName).toEqual(customerName)
    });

    it('should contains the date of creation the order', () =>  {
        const action = placeOrder({})
        expect(typeof action.payload.createAt).toEqual('number')
    });

    it('should default to a cone if no cone option given', () =>  {
        const action = placeOrder({})
        expect(action.payload.cone).toBeTruthy()
    });
})