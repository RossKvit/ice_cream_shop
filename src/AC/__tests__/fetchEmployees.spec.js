import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import C from '../../constants'
import {fetchEmployees} from "../index";

describe("Fetch employees", () => {
    it('should dispatch the REQUEST action when the action is dispatched', () => {
        const spy = jest.fn();
        const thunk = fetchEmployees();
        thunk(spy);

        expect(spy.mock.calls[0][0]).toEqual({
            type: C.FETCH_EMPLOYEES_REQUEST
        })
    });

    it('should dispatch the SUCCESS action when the data is fetched successfully', () => {
        const fakeData = [1,2,3];
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/data/employees.json')
            .reply(200, fakeData);

        const spy = jest.fn();
        const thunk = fetchEmployees();
        thunk(spy).then(function(){
            expect(spy.mock.calls[1][0]).toEqual({
                type: C.FETCH_EMPLOYEES_SUCCESS,
                payload: fakeData
            })
        })
    });

    it('should dispatch the FAILURE action when the data is not available', () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/data/employees.json')
            .reply(404);

        const spy = jest.fn();
        const thunk = fetchEmployees();
        thunk(spy).then(function(){
            expect(spy.mock.calls[1][0]).toEqual({
                type: C.FETCH_EMPLOYEES_FAILURE,
                payload: 'Request failed with status code 404'
            })
        })
    });


});