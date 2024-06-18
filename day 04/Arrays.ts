// Defining a string array
const arr1: string[] = ["abc", "def"];
arr1.push("xyz");
console.log(arr1);

// Another way of defining arry
const arr2: Array<number> = [10, 20, 30, 253546354654];
arr2.pop();
console.log(arr2);

// Defining an array of a type
type User = {
    name: string;
    email: string;
    isPaid?: boolean;
};

let user1: User = {
    name: "abc",
    email: "abc@gmail.com",
};

let user2: User = {
    name: "abcd",
    email: "abcd@gmail.com",
    isPaid: true,
};

const users: Array<User> = [user1, user2];
console.log(users);

// Defining a 2D Array
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
];
console.log(matrix);

export {};
