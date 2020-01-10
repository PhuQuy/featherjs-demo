import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {
  title = '';
  buttonText = '';
  jobForm;
  job;
  constructor(public fb: FormBuilder, private modal: NgbActiveModal, private jobservice: JobService) { }

  ngOnInit() {
    this.createForm();
    if (this.job) {
      this.jobForm.patchValue(this.job);
    }
  }

  createForm() {
    this.jobForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  get formCtrl() { return this.jobForm.controls; }

  submitForm() {
      this.jobservice.create(this.jobForm.value).then(() => {
          this.modal.close(this.jobForm.value);
      })
  }
}
