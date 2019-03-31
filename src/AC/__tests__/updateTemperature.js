import C from '../../constants'
import {updateTemperature} from '../index'

describe("Update temperature", () => {
     it("should contain the right action type", () => {
            const action = updateTemperature();
            expect(action.type).toEqual(C.UPDATE_TEMPERATURE)
     });
    it('should contain the temperature in the payload', () =>  {
        const action = updateTemperature(-5);
        expect(action.payload).toEqual(-5);
    });
})