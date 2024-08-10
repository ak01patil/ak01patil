import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { common } from "./common";
import { Observable } from "rxjs";
import { User } from "../_models/user";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  loginsucess: boolean | undefined;
  private url: String = common.s1;
  private customersUrl = this.url;
  constructor(private httpClient: HttpClient) {
  }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
    })
  }

  get isLoggedIn() {
    if (localStorage.getItem('currentUserSUCCESS')) {
      return true;
    } else {
      return false; 
    }
  }
  login(model: User) {
    const url = this.url + 'api/auth/signin';
    return this.httpClient.post<User>(url, JSON.stringify(model), this.httpHeader);
  }

  logout(): string {
    this.loginsucess = false;
    localStorage.removeItem('profile');
    localStorage.removeItem('menu');
    localStorage.removeItem('username');
    localStorage.removeItem('userid');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('Token');
    localStorage.removeItem('dbName');
    localStorage.removeItem('isUserLoggedIn');
    localStorage.clear();
    return 'Success';
  }

  logisLoginValueset() {
    this.loginsucess = true;
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}