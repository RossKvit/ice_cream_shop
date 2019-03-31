import axios from 'axios'
import C from '../constants'
import freezer from "../reducer/freezer";
import employees from "../reducer/employees";

export function updateTemperature(temperature){
    return {
        type: C.UPDATE_TEMPERATURE,
        payload: temperature
    }
}

export function addProductToFreezer(name, amount){
    return {
        type: C.ADD_PRODUCT_TO_FREEZER,
        payload: {
            name, amount
        }
    }
}

export function placeOrder({customerName, createAt = Date.now(), cone = true, scoopes}){
    return {
        type: C.PLACE_ORDER,
        payload: {customerName, createAt, cone, scoopes},
        generateId: true
    }
}

export function fullFillOrder(id){
    return {
        type: C.FULLFILL_ORDER,
        payload: id
    }
}

export function payForOrder(id){
    return {
        type: C.PAY_FOR_ORDER,
        payload: id
    }
}


export function cancelOrder(id){
    return {
        type: C.CANCEL_ORDER,
        payload: id
    }
}

export function doSomething() {
    return function(dispatch, getState){
       dispatch({
           type: 'FOO',
           payload: getState().freezer.temperature
       })
    }
}


export function fetchEmployees(){
    return function(dispatch, getState) {
        dispatch({
            type: C.FETCH_EMPLOYEES_REQUEST
        });

        return axios.get('/data/employees.json')
        .then(function(response){
            dispatch({
                type: C.FETCH_EMPLOYEES_SUCCESS,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: C.FETCH_EMPLOYEES_FAILURE,
            payload: err.message
        }))
    }
}

export function removeScoop(flavorName) {
    return {
        type: C.REMOVE_SCOOP,
        payload: flavorName
    }
}