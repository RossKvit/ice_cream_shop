import employess from '../employees'
import C from '../../constants'

describe("Fetching employess", () => {
    describe("Request start", () => {
        it("should set the loading property to true", () => {
            const result = employess(undefined, {
                type: C.FETCH_EMPLOYESS_REQUEST
            })
            expect(result.loading).toEqual(true)
        })
    })

    describe("Successfull fetch", () => {
        it("should set the loadingproperty tofalse", () => {
            const result = employess({loading: true}, {
                type: C.FETCH_EMPLOYESS_SUCCESS
            })
            expect(result.loading).toEqual(false)
        })
        it('should store the employee data', function() {
            const fakeData = [1, 2, 3];
            const result = employess(undefined, {
                type: C.FETCH_EMPLOYESS_SUCCESS,
                payload: fakeData
            })

            expect(result.data).toEqual(fakeData)
        })
    })

    describe("Failed fetch", () => {
        it("should set the loadingproperty to false", () => {
            const result = employess({loading: true}, {
                type: C.FETCH_EMPLOYESS_FAILURE
            })
            expect(result.loading).toEqual(false)
        })
        it('should store the error', function() {
            const fakeError = '404 Notfound';
            const result = employess(undefined, {
                type: C.FETCH_EMPLOYESS_FAILURE,
                payload: fakeError
            })

            expect(result.error).toEqual(fakeError)
        })
    })
})