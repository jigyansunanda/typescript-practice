const arr: Array<number> = [10, 20, 30];
console.log(arr);
for (let index = 0; index < 3; index++) {
    const element = arr[index] / 10;
    arr.push(element);
}
arr.pop();
console.log(arr);

// ReadonlyArray is a special type that
// describes arrays that should not be changed
const brr: ReadonlyArray<number> = [10, 20, 30, 40];
console.log(brr);
// the following lines will not compile
// brr.push(10);
// brr.pop();
