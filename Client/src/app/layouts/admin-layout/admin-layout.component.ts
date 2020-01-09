import { Component, OnInit } from "@angular/core";
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss'],
    
})
export class AdminLayoutComponent implements OnInit {
    public sidebarColor: string = 'red';

    constructor(private sharedService: SharedService) { }
    changeSidebarColor(color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];

        this.sidebarColor = color;

        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    }
    changeDashboardColor(color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
            this.sharedService.toggleMode(false);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
            this.sharedService.toggleMode(true);
        }
    }
    ngOnInit() { }
}
