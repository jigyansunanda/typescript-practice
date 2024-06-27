const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

// take any type and return any type
// e.g.: take number and return string
function identityTwo(val: any): any {
    return val;
}

// can return only type of what's taken as input
// e.g.: take number and can only return number
function identityThree<Type>(val: Type): Type {
    return val;
}

// same as above just with less writing
function identityFour<T>(val: T): T {
    return val;
}
