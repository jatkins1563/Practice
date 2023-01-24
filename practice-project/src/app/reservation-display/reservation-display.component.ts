import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../shared/models/reservation';
import { TabOptions } from '../shared/models/tab-options';
import { MatDialog } from '@angular/material/dialog';
import { DeleteReservationComponent } from '../delete-reservation/delete-reservation.component';

@Component({
  selector: 'app-reservation-display',
  templateUrl: './reservation-display.component.html',
  styleUrls: ['./reservation-display.component.scss']
})
export class ReservationDisplayComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  @Input() tabIndex: number;

  displayedColumns: string[] = ['isFulfilled', 'partyName', 'partySize', 'reservationTime', 'comments'];
  tabOptions: TabOptions;
  reservations: Reservation[];

  ngOnInit(): void {
    this.populateData();
  }

  populateData(): void {
    
  }

  deleteReservation(reservationId: number): void {
    var confirmationDialog = this.dialog.open(DeleteReservationComponent, {
      width: '300px'
    });

    confirmationDialog.componentInstance.deleteConfirmed.subscribe(() => {
      this.delete(reservationId);
    })
  }

  delete(id: number): void {
    //set isDeleted value of inputted reservation to 'true'
  }
}
