import { CUSTOM_ELEMENTS_SCHEMA, NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { RouterLink } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GithubAppComponent } from './components/github-app/github-app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GithubAppComponent,
    
   
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
