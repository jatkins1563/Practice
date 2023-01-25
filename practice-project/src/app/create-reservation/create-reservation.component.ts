import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../shared/models/reservation';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from '../shared/services/local-storage.service';


@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {

  form: FormGroup<{
    name: FormControl<string | null>;
    size: FormControl<number | null>;
    date: FormControl<string | null>;
    time: FormControl<string | null>;
    comments: FormControl<string | null>;
  }>;

  timeSlots: string[] = [
    "4:00PM",
    "4:15PM",
    "4:30PM",
    "4:45PM",
    "5:00PM",
    "5:15PM",
    "5:30PM",
    "5:45PM",
    "6:00PM",
    "6:15PM",
    "6:30PM",
    "6:45PM",
    "7:00PM",
    "7:15PM",
    "7:30PM",
    "7:45PM",
    "8:00PM",
    "8:15PM",
    "8:30PM",
    "8:45PM",
    "9:00PM",
    "9:15PM",
    "9:30PM",
    "9:45PM",
    "10:00PM"
];

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateReservationComponent>,
    public localStorageService: LocalStorageService,
    ) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      name: this.formBuilder.control<string | null>(null, Validators.required),
      size: this.formBuilder.control<number | null>(null, Validators.required),
      date: this.formBuilder.control<string | null>(null, Validators.required),
      time: this.formBuilder.control<string | null>(null, Validators.required),
      comments: ('')
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      var reservation = this.createReservation();
      this.dialogRef.close(reservation);
    }
  }

  createReservation(): Reservation {
    let resInfo = this.form.controls;

    let newReservation: Reservation = {
      id: this.localStorageService.reservations.length,
      name: resInfo.name.value || "",
      size: resInfo.size.value ?? 0,
      date: resInfo.date.value || "",
      time: resInfo.time.value || "",
      comments: resInfo.comments?.value ?? "",
      isFulfilled: false,
      isDeleted: false,
    }

    return newReservation;
  }
}
