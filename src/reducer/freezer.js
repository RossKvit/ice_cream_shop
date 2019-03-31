import C from '../constants'
import F from '../flavors'

const defaultState = {
    temperature: null,
    flavors: {
        [F.CHOCOLATE]: 20,
        [F.VANILLA]: 50
    }
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch(type) {
        case C.UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: payload
            }
        case C.ADD_PRODUCT_TO_FREEZER:
            const amount = (state.flavors[payload.name] || 0) + payload.amount;
            return {
                ...state,
                flavors: {
                    ...state.flavors,
                    [payload.name]: Math.min(amount, 60)
                }
            }
        case C.REMOVE_SCOOP:
            const decreaseamount = (state.flavors[payload] || 0) - 1;
            return {
                ...state,
                flavors: {
                    ...state.flavors,
                    [payload]: Math.max(decreaseamount, 0)
                }
            }
        default:
            return state;
    }
}