import C from '../constants'

export default (state = [], action) => {
    const {type, payload, randomId} = action;
    switch(type) {
        case C.PLACE_ORDER:
            return [...state, {...payload, id: randomId, status: 'pending'}]

        case C.FULLFILL_ORDER:
            return state.map((order) => {
                return order.id === payload ?
                    {...order, status: 'fullfilled'} : order
            })
        case C.PAY_FOR_ORDER:
            return state.map((order) => {
                return order.id  === payload ?
                    {...order, status: 'paid'} : order
            })

        case C.CANCEL_ORDER:
            return state.filter((order) => order.id !== payload)
        default:
            return state;
    }

}