import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public canvas: any;
    public ctx;
    public datasets: any;
    public data: any;
    public myChartData;
    public clicked: boolean = true;
    public clicked1: boolean = false;
    public clicked2: boolean = false;

    users = [
        {
            name: 'Nguyen Phu Quy',
            dob: '1991/05/07',
            email: 'phuquy@gocodee.com',
            gender: 1,
            rate: 25
        },
        {
            name: 'Johnny Teo',
            dob: '1990/04/08',
            email: 'john.teo@gmail.com',
            gender: 2,
            rate: 30
        }
    ]
    constructor(private modalService: NgbModal) { }

    ngOnInit() {

    }

    openNewUser() {
        const modalRef = this.modalService.open(UserEditComponent, { centered: true });
        modalRef.componentInstance.title = 'Create User';
        modalRef.componentInstance.buttonText = 'Create';
        modalRef.result.then(user => {
            this.users.push(user);
            // Call create user api
            this.openNotifyModal('Create successfully !!!!', true);
        })
    }

    openEditUser(user) {
        const modalRef = this.modalService.open(UserEditComponent, { centered: true });
        modalRef.componentInstance.title = 'Edit User';
        modalRef.componentInstance.buttonText = 'Edit';
        modalRef.componentInstance.user = user;
        modalRef.result.then(() => {
            // Call edit user api
            this.openNotifyModal('Edit successfully !!!!', true);
        })
    }

    deleteUser(id) {
        const modalRef = this.modalService.open(ConfirmationModalComponent, { centered: true });
        modalRef.componentInstance.message = 'Do you want to delete this user?';
        modalRef.result.then(action => {
            if (action === 'Y') {
                this.users.splice(id, 1);
                this.openNotifyModal('Delete successfully !!!!', true);
            }
        })
    }

    openNotifyModal(msg, notify) {
        const modalRef = this.modalService.open(ConfirmationModalComponent, { centered: true });
        modalRef.componentInstance.message = msg;
        modalRef.componentInstance.isNotify = notify;
    }
}
