import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private user: any;
  private username: string;
  private API_Url = 'https://api.github.com/users';

  constructor(private http: HttpClient) {this.username = 'Netiar';}

  ngOnInit() {
     this.getUserInfo();
     this.http.get<any>('https://api.github.com/users').subscribe((data) => {
       this.username = data.total;
       //console.log(this.username);
     });
  }
  
  getUserInfo() {
    return this.http.get('https://api.github.com/users/' + this.username); }
  
  getUserRepos() {
    return this.http.get(
      'https://api.github.com/users/' + this.username + '/repos'
    );  }

  getProfiles() {
    return this.http.get<any[]>(this.API_Url);  }

  getProfileInfo(){  
    return this.http.get('https://api.github.com/users/'+this.username+'?access_token='+environment.apiKey);    }   
  
  getRepos(user: any){
    let userrepo = 
    this.http.get('https://api.github.com/users/'+this.username+'/repos?access_token='+environment.apiKey); 
    console.log(userrepo)
    return userrepo    
  }
  updateProfile(username:string){
    this.username = username;
  };
  
}     