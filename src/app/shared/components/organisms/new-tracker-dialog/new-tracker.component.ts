import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
// components
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { radixCross2 } from '@ng-icons/radix-icons';
import { MatIconModule } from '@angular/material/icon';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-new-tracker-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './new-tracker.component.html',
})
export class NewTrackerComponent {
  @Input({ required: true }) openDialogTitle!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTrackerDialog, {
      data: { title: this.title, description: this.description },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

type DialogProps = {
  onSubmit: (f: NgForm) => void;
  title: string;
  description: string;
};

@Component({
  selector: 'app-dialog',
  templateUrl: './new-tracker-dialog.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    NgIconComponent,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  viewProviders: [provideIcons({ radixCross2 })],
})
export class NewTrackerDialog {
  constructor(
    public dialogRef: MatDialogRef<NewTrackerDialog>,
    @Inject(MAT_DIALOG_DATA) public props: DialogProps,
  ) {
    console.log('DialogProps ', props);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
