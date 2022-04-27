import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

  USER_API: string = 'https://jobs-nodejs.herokuapp.com/api/users/signin/';
  constructor(private http: HttpClient) { }

  createUser(value: User) {
    return this.http.post(this.USER_API, value);
  }

  getUserById(id) {
    return this.http.get<any>(this.USER_API + '/' + id);
  }
}
