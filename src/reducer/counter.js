import {createStore} from 'redux'

export const increase = val => ({
    type: "INCREASE",
    payload: val
})

const defaultState = { 
    count: 0
}

export function reducer(state = defaultState, action = {}) {
    switch(action.type) {
        case "INCREASE":
            return {
                ...state, 
                count: state.count + action.payload
            }
        default: 
            return state;
    }
}

export const store = createStore(reducer);
