interface TakePhotos {
    cameraMode: string;
    filter: string;
    burstMode: number;
}

class Instagram implements TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}

class SnapChat implements TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
        public gridView: boolean
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.gridView = gridView;
    }
}
