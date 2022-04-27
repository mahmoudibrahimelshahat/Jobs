import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_auth/_api/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private title:Title
  ) {
    this.title.setTitle("Jobs - Home");

    // if (this.userService.isLoggedIn()) {
    //   this.router.navigate(['/browsejob']);
    // }
  }
  ngOnInit(): void {
  }

}
