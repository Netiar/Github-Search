import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: '',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private profileService:ProfileService) { 
    this.profileService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
  });

  //this.ngOnInit()  {
    ""
  //}

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  

}