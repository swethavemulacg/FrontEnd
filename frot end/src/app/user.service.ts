import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myURL = 'http://localhost:8080/api';

  constructor(private http : HttpClient, private router : Router) { }
  
  postRegister(user){
    return this.http.post<any>(`${this.myURL}/register`, user);
  }

  postLogin(user){
    return this.http.post<any>(`${this.myURL}/login`, user);
  }

  updateData(email, password, user){
    return this.http.put<any>(`${this.myURL}/resetPassword/${email}/${password}`, user);
  }

  isUser() : boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.data.role === 'ROLE_USER'){
      return true;
    } else {
      return false;
    }
  }

  isAdmin() : boolean{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.data.role === 'ROLE_ADMIN'){
      return true;
    } else {
      return false;
    }
  }

    isLogged() : boolean{
      const userData = JSON.parse(localStorage.getItem('userData'));
      if(userData){
        return true;
      } else {
        return false;
      }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login-form');
  }



}
