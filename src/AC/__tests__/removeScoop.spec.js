import C from '../../constants'
import {removeScoop} from '../index'

describe("Remove scoop", () => {
    it("should containt the right action type", () => {
        const action = removeScoop('');
        expect(action.type).toEqual(C.REMOVE_SCOOP)
    })

    it("should have a flavor in payload", () => {
        const flavor = 'chocolate'
        const action = removeScoop(flavor);
        expect(action.payload).toEqual(flavor);
    }) 
})
