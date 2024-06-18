type User = {
    readonly _id: string; // readonly
    name: string;
    email: string;
    isPaidUser: boolean;
    isActive?: boolean; // optional
};

function createUser(user: User) {
    //
}

let user1: User = {
    _id: "001",
    name: "abc",
    email: "abc@gmail.com",
    isPaidUser: true,
};

console.log(user1);
user1.email = "abcd@gmail.com";
user1.isPaidUser = false;
console.log(user1);

export {};
