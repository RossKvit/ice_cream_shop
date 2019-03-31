import C from '../../constants'
import F from '../../flavors'
import order from '../order'
import {placeOrder, fullFillOrder, payForOrder, cancelOrder} from "../../AC";

describe("Order reducer", () => {
     it("should store the order in the state", () => {
            const newState = order(undefined, placeOrder({
                customerName: 'Bill',
                cone: false,
                scoopes: {
                    [F.VANILLA]: 1
                }
           }));
            expect(newState.length).toEqual(1);
            expect(newState[0].customerName).toEqual('Bill');
            expect(newState[0].cone).toEqual(false);
            expect(typeof newState[0].createAt).toEqual('number');
            expect(newState[0].scoopes).toEqual({
                [F.VANILLA]: 1
            });

     });

    it('should mark a given order as  fullfilled', ()  => {
        const existingState = [{
            customerName: 'Bill',
            status: 'pending',
            id: 0
        }]
        const newState = order(existingState, fullFillOrder(0))
        expect(newState[0].status).toEqual('fullfilled');
    });

    it('should mark a given order as paid', ()  => {
        const existingState = [{
            customerName: 'Bill',
            status: 'fullfilled',
            id: 0
        }]
        const newState = order(existingState, payForOrder(0))
        expect(newState[0].status).toEqual('paid');
    });

    it('should remove the order from the store', ()  => {
        const existingState = [{
            customerName: 'Bill',
            status: 'paid',
            id: 0
        }]
        const newState = order(existingState, cancelOrder(0))
        expect(newState).toEqual([]);
    });

})