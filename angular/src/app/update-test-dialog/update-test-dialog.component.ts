import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-test-dialog',
  templateUrl: './update-test-dialog.component.html',
  styleUrls: ['./update-test-dialog.component.css']
})
export class UpdateTestDialogComponent {
  name:string=""
  periudha:number=0
  constructor(
    public dialogRef: MatDialogRef<UpdateTestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onCancel(): void {
      this.dialogRef.close({name: this.name, periudha:this.periudha})
    }
}
