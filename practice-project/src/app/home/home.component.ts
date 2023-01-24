import { Component, ViewChild } from '@angular/core';
import { TabOptions } from '../shared/models/tab-options';
import { ReservationDisplayComponent } from '../reservation-display/reservation-display.component';
import { MatTabGroup } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { CreateReservationComponent } from '../create-reservation/create-reservation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) { }

  public tabOptions: TabOptions;

  @ViewChild('tabGroup') tabGroup: MatTabGroup;
  @ViewChild('todayDisplay') todayDisplay: ReservationDisplayComponent;
  @ViewChild('futureDisplay') futureDisplay: ReservationDisplayComponent;
  @ViewChild('pastDisplay') pastDisplay: ReservationDisplayComponent;

  createReservation(): void {
    var createDialog = this.dialog.open(CreateReservationComponent, {});
  }
}
