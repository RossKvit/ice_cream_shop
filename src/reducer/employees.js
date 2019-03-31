import C from '../constants'

const defaultState = {
    loading: false,
    data: [],
    error: null
}

export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch(type) {
        case C.FETCH_EMPLOYEES_REQUEST:
            return {...state,loading: true}

        case C.FETCH_EMPLOYEES_SUCCESS:
            return {...state,  data: payload, loading: false}

        case C.FETCH_EMPLOYEES_FAILURE:
            return {...state, error: payload, loading: false}

        default:
            return state;
    }
}