// // expected to be string
// type HelloWorld = any

export const init = 'type HelloWorld = any;';

export const validate = `
type cases = [
    Expect<NotAny<HelloWorld>>,
    Expect<Equal<HelloWorld, string>>,
]`