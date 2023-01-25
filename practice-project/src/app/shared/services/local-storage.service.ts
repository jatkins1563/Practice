import { Injectable } from "@angular/core";
import { Reservation } from "../models/reservation";

@Injectable()
export class LocalStorageService {
    constructor(

    ) { }

    reservations: Reservation[];
    fulfilledReservations: Reservation[];
    deletedReservations: Reservation[];
    activeReservations: Reservation[];

    InitializeStorage(): void {
        if (localStorage.getItem('reservations') == null) {
            localStorage.setItem('reservations', '[]');
        }
    }

    PopulateData(): void {
        this.reservations = JSON.parse(localStorage.getItem('reservations') || "");
    }

    StoreReservation(newReservation: Reservation): void {
        console.log("lenghth of array", this.reservations.length);
        var existingData = JSON.parse(localStorage.getItem('reservations') || "");

        existingData.push({
            id: newReservation.id,
            name: newReservation.name,
            size: newReservation.size,
            date: newReservation.date,
            time: newReservation.time,
            comments: newReservation.comments,
            isFulfilled: false,
            isDeleted: false
        });

        this.SaveChanges(existingData);
    }

    DeleteReservation(resId: number): void {
        this.reservations[resId].isDeleted = true;
        this.SaveChanges(this.reservations);
    }

    FulfillReservation(resId: number): void {
        this.reservations[resId].isFulfilled = true;
        this.SaveChanges(this.reservations);
    }

    SaveChanges(reservations: Reservation[]): void {
        localStorage.setItem('reservations', JSON.stringify(reservations));
        this.PopulateData();
        this.SortData();
    }

    SortData(): void {
        this.RefreshActive();
        this.RefreshFulfilled();
        this.RefreshDeleted();
    }

    RefreshActive(): void {
        this.activeReservations = this.reservations.filter(res => res.isDeleted == false && res.isFulfilled == false);
    }

    RefreshFulfilled(): void {
        this.fulfilledReservations = this.reservations.filter(res => res.isFulfilled == true);
    }

    RefreshDeleted(): void {
        this.deletedReservations = this.reservations.filter(res => res.isDeleted == true);
    }
}