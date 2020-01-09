import { Component, OnInit } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { JobEditComponent } from 'src/app/components/job-edit/job-edit.component';

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
  }

  openEditJob(job) {
    const modalRef = this.modalService.open(UserEditComponent, { centered: true });
    modalRef.componentInstance.title = 'Edit User';
    modalRef.componentInstance.buttonText = 'Edit';
    modalRef.componentInstance.job = job;

  }

}
