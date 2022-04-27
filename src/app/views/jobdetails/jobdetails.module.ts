import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JobdetailsComponent } from './jobdetails.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
      path: '',
      component: JobdetailsComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatSelectModule,
        FormsModule
    ],
    declarations: [JobdetailsComponent],
    exports: [JobdetailsComponent]
})
export class JobdetailsModule { }