import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {SignupService} from '../../_auth/_api/signup.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  typeInput: string = 'password';

  registerationForm: FormGroup; 
  id: string;
  isEdit: boolean = false;

  constructor(private route: ActivatedRoute, private signupService: SignupService,private title:Title) {
    this.title.setTitle("Jobs - Sign Up");
    this.route.paramMap.subscribe(data => {
      // console.log(data)
      this.id = data.get('id')
      if (this.id) {
        this.isEdit = true;
        this.signupService.getUserById(this.id).subscribe(result => {
          console.log(result);
          this.registerationForm.setValue({
            name: result.name,
            email: result.email.toLowerCase(),
            password: '',
            gender: '1',
            address: {
              street: result.address.street,
              zip: result.address.zipcode
            }
          })

          // this.registerationForm.controls['password'].clearValidators();
          this.registerationForm.controls['password'].setValidators([]);
          this.registerationForm.controls['password'].updateValueAndValidity()
          this.registerationForm.updateValueAndValidity();
        }, error => {
          console.log(error)
        })
      }
    })
  }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      password: new FormControl(null, [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
      gender: new FormControl('', Validators.required),
        street: new FormControl(null, Validators.required),
        zip: new FormControl(null, Validators.required)
    })
  }

  get email() {
    return this.registerationForm.get('email');
  }

}
