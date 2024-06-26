// the order must be followed
let myTuple: [string, number, boolean] = ["abc", 100, true];
console.log(myTuple);

// type tuple
type user = [string, boolean];
let user1: user = ["abc", false];
console.log(user1);

// tuple values can be accessed
// using index like an array
console.log(user1[0]);

/* --------------------- TUPLES IN TYPESCRIPT ARE DISGUSTING --------------------- */
