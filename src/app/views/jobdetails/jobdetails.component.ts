import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/_auth/_api/myservice.service';
import { Service } from 'src/app/_auth/models/service.model';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/_auth/_api/client.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  Services:Service[];
  typeInput: string = 'password';
  isSendData: boolean = false;
  isErrorData: boolean = false;

  constructor(private route: ActivatedRoute,
    private myService: MyserviceService , 
    private ClientService: ClientService , 
    private router:Router,
    private title:Title) { 
      this.title.setTitle("Jobs - Job Details");
    }

  ngOnInit(): void {
    const id = this.route.params.subscribe(result =>{
      this.Services = this.myService.getServices(result.id);
      console.log(this.Services)
    })
    // this.Services = this.myService.getCourses();
    // this.myService.id = id;
    // console.log(id);
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(form.value)
      this.ClientService.createUser(form.value).subscribe(result => {
        // console.log(result);
        form.reset();
        this.isSendData = true;
        this.isErrorData = false;
      }, error => {
        console.log(error)
        this.isErrorData = true;
        this.isSendData = false;
      })
    }
  }
}
