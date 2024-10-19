export type Expect<T extends true> = T

export type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false

export interface Challenge {
    description: string;
    initialCode: string;
    validateSolution: (code: string) => boolean;
}


export type IsAny<T> = 0 extends (1 & T) ? true : false
export type NotAny<T> = true extends IsAny<T> ? false : true


export const types = `export type Expect<T extends true> = T

export type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false

export interface Challenge {
    description: string;
    initialCode: string;
    validateSolution: (code: string) => boolean;
}


export type IsAny<T> = 0 extends (1 & T) ? true : false
export type NotAny<T> = true extends IsAny<T> ? false : true
`