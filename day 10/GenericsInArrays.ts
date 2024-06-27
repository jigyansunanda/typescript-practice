function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    let myProductIndex: number = 1;
    return products[myProductIndex];
}

// with const declaration of functions
const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    let myProductIndex: number = 2;
    return products[myProductIndex];
};
