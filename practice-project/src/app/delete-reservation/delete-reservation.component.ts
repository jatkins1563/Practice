import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.scss']
})
export class DeleteReservationComponent {

  constructor(private dialogRef: MatDialogRef<DeleteReservationComponent>,
  ) { }

  confirmDelete(): void {
    this.dialogRef.close("delete");
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
