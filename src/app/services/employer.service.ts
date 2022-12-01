import { Injectable } from '@angular/core';

// import HttpCLient to make HTTP calls to server API
import { HttpClient, HttpHeaders } from '@angular/common/http';

// ref to environment to read the server API URL
import { environment } from 'src/environments/environment';

// HttpsHeaders needed for POST and PUT requests
let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  // set server URL as class level var re-used in all http requests
  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // get all employers
  getEmployers() {
    return this.http.get(`${this.serverUrl}/api/employers`);
  }

  // add employer
  addEmployer(employer: any) {
    return this.http.post(`${this.serverUrl}/api/employers`, employer, { headers: headers });
  }
}
