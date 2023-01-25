import { Component, OnInit, ViewChild } from '@angular/core';
import { TabOptions } from '../shared/models/tab-options';
import { ReservationDisplayComponent } from '../reservation-display/reservation-display.component';
import { MatTabGroup } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { CreateReservationComponent } from '../create-reservation/create-reservation.component';
import { TimeSlots } from '../shared/models/time-slots';
import { Reservation } from '../shared/models/reservation';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public localStorageService: LocalStorageService,
  ) { }

  public tabOptions: TabOptions;
  public timeSlots: TimeSlots = new TimeSlots();

  public reservations: Reservation[];

  @ViewChild('tabGroup') tabGroup: MatTabGroup;
  @ViewChild('activeDisplay') activeDisplay: ReservationDisplayComponent;
  @ViewChild('fulfilledDisplay') fulfilledDisplay: ReservationDisplayComponent;
  @ViewChild('deletedDisplay') deletedDisplay: ReservationDisplayComponent;

  ngOnInit(): void {
    this.localStorageService.InitializeStorage();
    this.localStorageService.PopulateData();
    this.localStorageService.SortData();
  }

  openCreateDialog(): void {
    var createDialog = this.dialog.open(CreateReservationComponent, {});

    createDialog.afterClosed().subscribe(result => {
      if (result != null) {
        this.localStorageService.StoreReservation(result);
      }
    });
  }
}
