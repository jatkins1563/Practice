import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../shared/models/reservation';
import { TabOptions } from '../shared/models/tab-options';
import { MatDialog } from '@angular/material/dialog';
import { DeleteReservationComponent } from '../delete-reservation/delete-reservation.component';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reservation-display',
  templateUrl: './reservation-display.component.html',
  styleUrls: ['./reservation-display.component.scss']
})
export class ReservationDisplayComponent implements OnInit {
  constructor(public dialog: MatDialog,
    public localStorageService: LocalStorageService,
    ) { }

    @Input() dataSource: Reservation[];
    @Input() tabIndex: number;
    @Input() showDeleteAction: boolean = true;
    @Input() showFulfillAction: boolean = true;

    reservations: MatTableDataSource<Reservation> = new MatTableDataSource<Reservation>([]);

  displayedColumns: string[];
  tabOptions: TabOptions;

  ngOnInit(): void {
    if (this.tabIndex == 0) {
      this.reservations.data = this.localStorageService.activeReservations;
      this.displayedColumns = ['isFulfilled', 'name', 'size', 'date', 'time', 'comments', 'isDeleted'];
    }
    else if (this.tabIndex == 1) {
      this.reservations.data = this.localStorageService.fulfilledReservations;
      this.displayedColumns = ['name', 'size', 'date', 'time', 'comments'];

    }
    else if (this.tabIndex == 2) {
      this.reservations.data = this.localStorageService.deletedReservations;
      this.displayedColumns = ['name', 'size', 'date', 'time', 'comments'];

    }
  }

  fulfillReservation(resId: number): void {
    this.localStorageService.FulfillReservation(resId);
    console.log("fulfilling: ", resId);
  }

  deleteReservation(resId: number): void {
    var confirmationDialog = this.dialog.open(DeleteReservationComponent, {
    });

    confirmationDialog.afterClosed().subscribe(result => {
      if (result === "delete") {
        this.localStorageService.DeleteReservation(resId);
        console.log("deleting: ", resId);
      }
    });
  }
}
