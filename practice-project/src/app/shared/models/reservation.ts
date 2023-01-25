export class Reservation {
    id: number;
    name: string;
    size: number;
    date: string;
    time: string;
    comments: string;
    isFulfilled: boolean = false;
    isDeleted: boolean = false;
}
