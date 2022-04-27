import { Injectable } from '@angular/core';
import { client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  USER_API: string = 'https://jsonplaceholder.typicode.com/users';
    constructor(private http: HttpClient) { }
  
    createUser(value: client) {
      return this.http.post(this.USER_API, value);
    }
}

