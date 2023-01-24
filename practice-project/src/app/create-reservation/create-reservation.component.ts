import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../shared/models/reservation';
import { TimeSlots } from '../shared/models/time-slots';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit{
  
  public timeslots = Object.values(TimeSlots).sort();
  
  form: FormGroup<{
    name: FormControl<string | null>;
    size: FormControl<number | null>;
    date: FormControl<Date | null>;
    time: FormControl<string | null>;
    comments: FormControl<string | null>;
  }>;

  constructor(private formBuilder: FormBuilder) {}

 ngOnInit(): void {
   
   this.form = this.formBuilder.group({
    name: this.formBuilder.control<string | null>(null, Validators.required),
    size: this.formBuilder.control<number | null>(null, Validators.required),
    date: this.formBuilder.control<Date | null>(null, Validators.required),
    time: this.formBuilder.control<string | null>(null, Validators.required),
    comments: ('')
  });
}

  onSubmit(): void {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.createReservation();
    }
  }

  createReservation(): Reservation {
    let resInfo = this.form.controls;
    let resDateTime = new Date(
      resInfo.date.value!.getFullYear(),
      resInfo.date.value!.getMonth(),
      resInfo.date.value!.getDate()
    );

    let newReservation: Reservation = {
      name: resInfo.name.value!,
      size: resInfo.size.value!,
      date: resDateTime,
      time: resInfo.time.value!,
      comments: resInfo.comments?.value ?? "",
      isFulfilled: false,
      isDeleted: false,
    }

    return newReservation;
  }
}
