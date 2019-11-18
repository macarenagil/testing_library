it('Should be true', () => {
should( 1 === 1)
})

it('Should be false', () => {
    should( 1 !== 1)
    })

it('test 3', () => {
    hope(3).toBe(3); //yes
    hope(3).toBe(2); //no
})