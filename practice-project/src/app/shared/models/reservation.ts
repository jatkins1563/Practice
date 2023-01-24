export class Reservation {
    name: string;
    size: number;
    date: Date;
    time: string;
    comments: string;
    isFulfilled: boolean = false;
    isDeleted: boolean = false;
}
