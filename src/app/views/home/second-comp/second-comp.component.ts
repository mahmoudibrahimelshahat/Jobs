import { Component, OnInit } from '@angular/core';
import { job } from 'src/app/_auth/models/job.model';
import { JobService } from 'src/app/_auth/_api/job.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  jobs:job[];
  constructor(private dataService: JobService) { }

  ngOnInit(): void {
    this.jobs = this.dataService.getJobs();
  }

}
