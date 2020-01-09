import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UserEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    FormsModule
  ],
  entryComponents: [UserEditComponent],
  exports: [UserEditComponent]
})
export class UserEditModule { }
