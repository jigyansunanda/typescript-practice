let x = {a: 1, b: 2, c: 3};

// using type parameters in generic constraints
function getProperty<T, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(getProperty(x, "a"));

// console.log(getProperty(x, "k"));
// the above code will throw error because
// Argument of type '"k"' is not assignable
// to parameter of type '"a" | "b" | "c" | "d"'

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T): void {
        this.cart.push(product);
    }
}
