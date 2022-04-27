import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_auth/_api/user.service';
import { job } from 'src/app/_auth/models/job.model';
import { JobService } from 'src/app/_auth/_api/job.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-browsejob',
  templateUrl: './browsejob.component.html',
  styleUrls: ['./browsejob.component.css']
})
export class BrowsejobComponent implements OnInit {
  jobs:job[];

  constructor(private userService: UserService,private dataService: JobService,private title:Title) {
    this.title.setTitle("Jobs - Browse Job");
   }

  ngOnInit(): void {
    this.jobs = this.dataService.getJobs();
  }

}
