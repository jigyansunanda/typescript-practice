// classic function syntax
function add(a: number, b: number): number {
    return a + b;
}

// arrow function
const addNumbers = (a: number, b: number): number => {
    return a + b;
};

// with default values of input if not provided
const addNumbersAgain = (a: number, b: number = 10): number => {
    return a + b;
};

// with multiple return type
const checkNumber = (a: number): number | string => {
    if (a < 10) return 10;
    else return "greater than 10";
};

// with no return type
function printSomething(a: number): void {
    console.log(`number is ${a}`);
}

// some functions never return a value
function throwSomeError(msg: string): never {
    throw new Error(msg);
}

console.log(
    add(10, 10),
    addNumbers(10, 10),
    addNumbersAgain(10),
    addNumbersAgain(10, 10)
);

console.log(checkNumber(10), checkNumber(9), checkNumber(11));

console.log(printSomething(69));

throwSomeError("intentional error");

export {};
