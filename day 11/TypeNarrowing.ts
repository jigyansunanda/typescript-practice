interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function checkAdmin(account: User | Admin): boolean {
    // in operator can be used for type narrowing
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    } else {
        console.log(x.toUpperCase());
    }
}
