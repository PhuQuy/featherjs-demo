import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';

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

    users$;
    constructor(private modalService: NgbModal, private userService: UserService) { }

    ngOnInit() {
        this.users$ = this.userService.user$().pipe(
            map((u: Paginated<any>) => u.data)
          );
    }

    openNewUser() {
        const modalRef = this.modalService.open(UserEditComponent, { centered: true });
        modalRef.componentInstance.title = 'Create User';
        modalRef.componentInstance.buttonText = 'Create';
        modalRef.result.then(user => {
            // this.users.push(user);
            // Call create user api
            this.userService.create(user);
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
                // this.users.splice(id, 1);
                this.userService.remove(action, {});
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
