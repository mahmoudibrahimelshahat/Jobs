import { Injectable } from '@angular/core';
import { job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobs: job[];
  constructor() { 
    this.jobs =[
      {
        id:1,
        img:'assets/1.svg',
        title:"Software Engineer",
      },
      {
        id:2,
        img:'assets/2.svg',
        title:"Digital Marketer",
      },
      {
        id:3,
        img:'assets/3.svg',
        title:"Wordpress Developer",
      },
      {
        id:4,
        img:'assets/4.svg',
        title:"Visual Designer",
      },
      {
        id:5,
        img:'assets/5.svg',
        title:"Software Engineer",
      },
      {
        id:6,
        img:'assets/6.svg',
        title:"Creative Designer",
      }
    ]
  }
  getJobs() {
    return this.jobs;
  }
}
