import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowsejobComponent } from './browsejob.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
    {
      path: '',
      component: BrowsejobComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatSelectModule
    ],
    declarations: [BrowsejobComponent],
    exports: [BrowsejobComponent]
})
export class BrowsejobModule { }