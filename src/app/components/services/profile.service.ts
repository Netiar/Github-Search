import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid ='92d8f153f6e9e9462e5f';
  private clientsecret ='315dfe7a4f8d448bece6db41504cf137bc27a582';


  constructor(private http:Http) {

   }
}
