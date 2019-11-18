function it (message, fn) {
    console.log(message)
    fn()
}

function should (condition) {
if (condition) {
console.log('✔')
}
else {
    console.log('✗')
}
}

function hope (predicate) {
return {
    toBe: (x) => {
        should(predicate === x);
    }
}
}