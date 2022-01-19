export interface InvalidNameParam{
    name: string 
}

// error is in built in lib 
export class InvalidName extends Error {
    constructor(extra?: InvalidNameParam) {
        super(
            `Invalid Name ${
                extra ? JSON.stringify(extra) : ''
            }`
        )
    }
}