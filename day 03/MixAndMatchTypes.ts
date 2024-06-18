type CardNumber = {
    cardNumber: string;
};

type CardExpiryDate = {
    cardExpiryDate: string;
};

type CardDetails = CardNumber &
    CardExpiryDate & {
        cvv: number;
    };

let card: CardDetails = {
    cardNumber: "09788493534",
    cardExpiryDate: "96786",
    cvv: 122,
};

console.log(card);

export {};
