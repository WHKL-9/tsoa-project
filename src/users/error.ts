export interface InvalidNameParam{
    name: string 
}

export class InvalidName extends Error {
    constructor(extra?: InvalidNameParam) {
        super(
            `Invalid Name ${
                extra ? JSON.stringify(extra) : ''
            }`
        )
    }
}