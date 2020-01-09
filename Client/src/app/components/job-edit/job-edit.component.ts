import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {
  title = '';
  jobForm;

  constructor(public fb: FormBuilder, private modal: NgbActiveModal) { }

  ngOnInit() {
    this.jobForm = this.fb.group({
      job: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  get formCtrl() { return this.jobForm.controls; }

}
