import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal.component';

@NgModule({
  declarations: [ConfirmationModalComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [ConfirmationModalComponent],
  exports: [ConfirmationModalComponent]
})
export class ConfirmationModalModule { }
