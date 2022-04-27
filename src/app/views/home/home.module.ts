import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { ForthCompComponent } from './forth-comp/forth-comp.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatChipsModule,
        CarouselModule
    ],
    declarations: [HomeComponent, FirstCompComponent, SecondCompComponent, ThirdCompComponent, ForthCompComponent],
    exports: [HomeComponent]
})
export class HomeModule { }