import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private SERVER_URL: String = environment.SERVER_URL
  constructor(
    private httpClient : HttpClient
  ) { } 
  
  userRegister(
    firstName: string,
    name: string,
    email: String,
    password: String,
    role: String
  ) {
      const API_URL = this.SERVER_URL + '/users/register';
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
      });
      return this.httpClient.post(
          API_URL,
          {
            firstName: firstName,
            name: name,
            email: email,
            password: password,
            role: role
          }
          // { headers: headers }
      );
  }

  userLogin(email: string, password: string) {
      const API_URL = this.SERVER_URL + '/auth/login';
      return this.httpClient.post(API_URL, {
          email: email,
          password: password,
      });
  }

  // updateUser(
  //     nom: string,
  //     prenom: string,
  //     ville: string,
  //     biographie : string,
  //     tel: string
  //   ) {
  //     const token = this.localStorage.get('x-access-token');
  //     const API_URL = this.SERVER_URL + '/auth/update';
  //     const headers = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'x-access-token': `${token}`,
  //     });
  //     const dataUser = {
  //       nom: nom,
  //       prenom: prenom,
  //       ville: ville,
  //       biographie: biographie,
  //       numero: tel,
  //     };
  //     return this.httpClient.put(API_URL, dataUser, { headers: headers });
  //   }

  getUser() {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/users';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getById(id: string) {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/users/' + id;
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

}
