describe("My first test", () => {
    it("should check for equals values use deep equlity", () => {
        expect({first: 22}).toEqual({first: 22})
    })

    it('should check that array containt a value', () => {
        expect([1,22,33,5154]).toContain(22)
    })

    it('Should check that array contain an obj', () => {
        expect([{first: 1}, {two: 2}]).toContainEqual({two: 2})
    })

    it('should suppoer read', function() {
        const read = jest.fn();
        read()
        expect(read).toHaveBeenCalled()
    })
})