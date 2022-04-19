import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: '',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService) { 
    this.profileService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
  }

  ngOnInit(): void {
  }

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  function ngOnInit(): any {
    throw new Error('Function not implemented.');
  }

