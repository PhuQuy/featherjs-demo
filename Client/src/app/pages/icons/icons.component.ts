import { Component, OnInit } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { JobEditComponent } from 'src/app/components/job-edit/job-edit.component';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html",
  styleUrls: ["./icons.component.scss"]

})
export class IconsComponent implements OnInit {
  jobs = [
    {
      title: 'Full-stack developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Software Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  openNewJob() {
    const modalRef = this.modalService.open(JobEditComponent, { centered: true });
    modalRef.componentInstance.title = 'Create Job';
    modalRef.componentInstance.buttonText = 'Create';
    modalRef.result.then(() => {
      // Call create job api
      this.openNotifyModal('Create successfully !!!!', true);
  })
  }

  openEditJob(job) {
    const modalRef = this.modalService.open(UserEditComponent, { centered: true });
    modalRef.componentInstance.title = 'Edit User';
    modalRef.componentInstance.buttonText = 'Edit';
    modalRef.componentInstance.job = job;
    modalRef.result.then(() => {
      // Call create job api
      this.openNotifyModal('Edit successfully !!!!', true);
  })
  }

  deleteJob(id) {
    const modalRef = this.modalService.open(ConfirmationModalComponent, { centered: true });
    modalRef.componentInstance.message = 'Do you want to delete this job?';
    modalRef.result.then(action => {
      if (action === 'Y') {
        this.jobs.splice(id, 1);
        this.openNotifyModal('Delete job successfully!!', true);
      }
    })
  }

  openNotifyModal(msg, notify) {
    const modalRef = this.modalService.open(ConfirmationModalComponent, { centered: true });
    modalRef.componentInstance.message = 'Delete job successfully!!';
    modalRef.componentInstance.isNotify = true;
  }
}
