import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MAT_TABS_CONFIG, MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationDisplayComponent } from './reservation-display/reservation-display.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { LocalStorageService } from './shared/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationDisplayComponent,
    CreateReservationComponent,
    DeleteReservationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LocalStorageService,
     { provide: MAT_TABS_CONFIG, useValue: { animationDuration: '0ms'} }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
