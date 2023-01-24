import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.scss']
})
export class DeleteReservationComponent {

  @Input() reservationId: number;
  @Output() deleteConfirmed: EventEmitter<number> = new EventEmitter();

  constructor(private dialogRef: MatDialogRef<DeleteReservationComponent>
  ) { }

  confirmDelete(): void {
    this.deleteConfirmed.emit(this.reservationId);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
