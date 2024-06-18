// x can be either number or string
let x: number | string = "abc";
console.log(`x is now ${x}`);
x = 100;
console.log(`x is now ${x}`);

// functions can take multiple type params
function fun(input: number | boolean) {
    console.log(`input is now ${input} and of type ${typeof input}`);
}
fun(100);
fun(true);

/* arrays of multiple types */

// This syntax means a is
// either a "number" or a "boolean []"
let a: number | boolean[] = [true];
console.log(a);
a = 12;
console.log(a);
// the below line won't compile
// a = [12];

// This syntax means b is an array
// that can have both boolean and numbers
let b: (number | boolean)[] = [true, 12];
console.log(b);

// This syntax means c is an array
// that can be either only boolean[] or number[]
let c: number[] | boolean[] = [10, 20];
console.log(c);
c = [true, false, true];
console.log(c);

// fixed value type
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
console.log(seatAllotment);
// this below line won't compile
// seatAllotment = "crew";
