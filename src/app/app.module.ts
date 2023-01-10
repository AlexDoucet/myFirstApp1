import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { ROUTES } from './app.routes';

import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    MenuComponent,
    UserProfileComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
