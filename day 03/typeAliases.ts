type User = {
    name: string;
    email: string;
    isPaid: boolean;
};

const user1: User = {
    name: "abc",
    email: "abc@gmail.com",
    isPaid: false,
};

function createUser(user: User): User {
    return user;
}

console.log(createUser(user1));

export {};
