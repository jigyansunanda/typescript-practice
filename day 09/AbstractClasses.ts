abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    // abstract method whose implementation will be
    // provided by the class who extends this class
    abstract getSepia(): void;

    // the difference between abstract class and
    // interfaces is abstract classes can
    // implement their own methods too
    getReelTimeInSeconds(): number {
        return 30;
    }
}
// we can't create object of abstract class

class Gram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ) {
        super(cameraMode, filter);
        this.burstMode = burstMode;
    }

    // provide the implementation of abstract method
    // from the class that we extend from
    getSepia(): void {
        console.log("sepia filter applied");
    }
}

let gram = new Gram("raw", "vintage", 10);
gram.getSepia();
console.log(gram.getReelTimeInSeconds());
