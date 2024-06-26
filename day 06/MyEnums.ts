enum SeatChoice {
    AISLE,
    WINDOW,
    MIDDLE,
}

const seat = SeatChoice.AISLE;
console.log(seat); // outputs 0

enum NewSeatChoice {
    AISLE = 69,
    WINDOW,
    MIDDLE,
}

const seat2 = NewSeatChoice.WINDOW;
console.log(seat2); // outputs 70
