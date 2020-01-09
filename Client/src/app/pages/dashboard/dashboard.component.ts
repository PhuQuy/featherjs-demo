import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';

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
            gender: 'Male',
            hourly: '$25'
        },
        {
            name: 'Johnny Teo',
            dob: '1990/04/08',
            email: 'john.teo@gmail.com',
            gender: 'Female',
            hourly: '$30'
        }
    ]
    constructor(private modalService: NgbModal) { }

    ngOnInit() {

    }

    openNewUser() {
        const modalRef = this.modalService.open(UserEditComponent, { centered: true });
        modalRef.componentInstance.title = 'Create User';
    }
}
