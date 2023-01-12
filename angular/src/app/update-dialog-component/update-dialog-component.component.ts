import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-dialog-component',
  templateUrl: './update-dialog-component.component.html',
  styleUrls: ['./update-dialog-component.component.css']
})
export class UpdateDialogComponentComponent {
  Nota:any
  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  onCancel(): void {
    this.data.Nota = this.Nota
    console.log(this.data.Nota);
    
    this.dialogRef.close(this.Nota);
  }
}
