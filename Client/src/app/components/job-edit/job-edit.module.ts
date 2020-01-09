import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobEditComponent } from './job-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [JobEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [JobEditComponent],
  exports: [JobEditComponent]
})
export class JobEditModule { }
