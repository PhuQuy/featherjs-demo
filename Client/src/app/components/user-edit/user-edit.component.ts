import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbInputDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  title = '';
  buttonText = '';
  userForm;
  user;
  date = '';
  @ViewChild('datePicker', { static: false }) datePicker: NgbInputDatepicker;

  constructor(public fb: FormBuilder, private modal: NgbActiveModal) { }

  ngOnInit() {
    this.createForm();
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  createForm() {
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
    });
  }
  get formCtrl() { return this.userForm.controls; }

  submitForm() {
    this.modal.close(this.userForm.value);
  }

  public toggleDatePicker() {
    this.datePicker.toggle();
  }

  updateInput(e: NgbDateStruct) {
    this.date = this.transformStringDate(e);
    this.userForm.patchValue({
        dob: `${this.date}`
    });
  }

  transformStringDate(ngd: NgbDateStruct): string {
    return ngd ? `${ngd.year}-${ngd.month > 9 ? ngd.month : '0' + ngd.month}-${ngd.day > 9 ? ngd.day : '0' + ngd.day}` : '';
  }
}
