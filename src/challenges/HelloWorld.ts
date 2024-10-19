// // expected to be string
// type HelloWorld = any


const HelloWorld = {
    init: 'type HelloWorld = any;',
    tests: [
        `Expect<NotAny<HelloWorld>>`,
        `Expect<Equal<HelloWorld, string>>`
    ],
    description: 'Update Hello World type to string.'
}

export default HelloWorld;