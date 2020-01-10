import { Component, OnInit } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { JobEditComponent } from 'src/app/components/job-edit/job-edit.component';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { JobService } from 'src/app/services/job.service';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';

@Component({
    selector: "app-icons",
    templateUrl: "icons.component.html",
    styleUrls: ["./icons.component.scss"]

})
export class IconsComponent implements OnInit {
    jobs;
    jobs$;
    constructor(private modalService: NgbModal, private jobService: JobService) { }

    ngOnInit() {
        this.jobs$ = this.jobService.jobs$().pipe(
            map((u: Paginated<any>) => u.data)
          );
    }

    openNewJob() {
        const modalRef = this.modalService.open(JobEditComponent, { centered: true });
        modalRef.componentInstance.title = 'Create Job';
        modalRef.componentInstance.buttonText = 'Create';
        modalRef.result.then(job => {
            //   this.jobs.push(job);

            // Call create job api
            this.openNotifyModal('Create successfully !!!!', true);
        })
    }

    openEditJob(job) {
        const modalRef = this.modalService.open(JobEditComponent, { centered: true });
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
