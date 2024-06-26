interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;

    startTrial: () => String;

    endTrial(): String;

    getCoupon(couponName: string, value: number): string;
}

// can be redefined again
interface User {
    githubToken: string;
}

const user1: User = {
    email: "abc@gmail.com",
    userId: 8751,
    dbId: 123,

    githubToken: "dsg32564t324#%413c",

    startTrial() {
        return "Trial started";
    },

    endTrial: () => {
        return "Trial ended";
    },

    getCoupon: (name: string, discount: number) => {
        return name + "/" + discount;
    },
};

console.log(user1);
console.log(user1.startTrial());
console.log(user1.endTrial());
console.log(user1.getCoupon("jig", 20));

// interfaces can extend on other interfaces
interface Admin extends User {
    role: string;
}

// can extend multiple interface
// interface A extends B, C {
//     foo: bar;
// }
