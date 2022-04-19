import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid ='92d8f153f6e9e9462e5f';
  private clientsecret ='315dfe7a4f8d448bece6db41504cf137bc27a582';


  constructor(private http:HttpClient) {
     console.log("service is now ready!");
     this.username = "Netiar";
   }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    
  }


}