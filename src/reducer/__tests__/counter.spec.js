import {increase, reducer, store} from '../counter'

describe("Counter", () => {
    it('should return the state', () => {
        const state = store.getState();
        expect(state.count).toEqual(0);
    })

    it('should dispatch action and update tha state', () => {
        const action = increase(3)
        store.dispatch(action)
        const state = store.getState()
        expect(state.count).toEqual(3)
    })

    it('should call subscribe when data store change', () => {
        const listener = jest.fn();
        store.subscribe(listener);
        const action = increase(3);
        store.dispatch(action);
        expect(listener).toHaveBeenCalled();
    })

    
    it('should not call subscribe when unsubscribed', () => {
        const listener = jest.fn();
        const unsubscribed = store.subscribe(listener);
        const action = increase(3);
        unsubscribed();
        store.dispatch(action);
        expect(listener).not.toHaveBeenCalled();
    })
})