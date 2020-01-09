import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  title = '';
  userForm;

  constructor(public fb: FormBuilder, private modal: NgbActiveModal) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required),
      hourlyrate: new FormControl('', Validators.required),
    });
  }

  get formCtrl() { return this.userForm.controls; }

}
