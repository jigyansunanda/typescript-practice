class User {
    name: string;
    email: string;
    private readonly id: number;
    private _courseCount: number = 1; // private property
    protected isPaidUser: boolean = true; // protected property

    constructor(name: string, email: string, id: number) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    // getter
    get getCourseCount(): number {
        return this._courseCount;
    }

    // setter
    set setCourseCount(courseCount: number) {
        this._courseCount = courseCount;
    }

    // getter
    get getPaidStatus(): boolean {
        return this.isPaidUser;
    }

    // setter
    set setPaidStatus(paidStatus: boolean) {
        this.isPaidUser = paidStatus;
    }

    // private method
    private deleteToken() {
        console.log("token deleted");
    }

    // Example of using private method internally
    // inside a public method
    logoutUser() {
        this.deleteToken();
        console.log("User logged out");
    }
}

let user1 = new User("Abc", "abc@gmail.com", 123);

// Correct usage: accessing getter like a property
console.log(user1.getPaidStatus); // Outputs: false
// Incorrect usage: calling getter as a function
// console.log(user1.getPaidStatus()); // This would cause a TypeScript error
// TypeScript will produce an error because it expects you
// to access it as a property, not as a function call.

// Accessing public methods
user1.logoutUser(); // Outputs: "Token deleted" and "User logged out"

// Trying to access private method directly will cause an error
// user1.deleteToken(); // This will cause a TypeScript error

class SubUser extends User {
    isFamily: boolean = true;

    changePaidStatus(): void {
        this.isPaidUser = false;
    }
}

let user2 = new SubUser("Xyz", "xyz@gmail.com", 3251423);
console.log(user1.getPaidStatus);
console.log(user2.getPaidStatus);
user2.changePaidStatus();
console.log(user1.getPaidStatus);
console.log(user2.getPaidStatus);
