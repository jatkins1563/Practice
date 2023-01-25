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
        var existingData = JSON.parse(localStorage.getItem('reservations') || "");

        existingData.push({
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

    SaveChanges(reservations: Reservation[]): void {
        localStorage.setItem('reservations', JSON.stringify(reservations));
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