import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { UserComponent } from '../../pages/user/user.component';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserEditModule } from 'src/app/components/user-edit/user-edit.module';
import { JobEditModule } from 'src/app/components/job-edit/job-edit.module';
import { ConfirmationModalModule } from 'src/app/components/confirmation-modal/confirmation-modal.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    UserEditModule,
    JobEditModule,
    ConfirmationModalModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    IconsComponent,
    MapComponent,
  ]
})
export class AdminLayoutModule {}
