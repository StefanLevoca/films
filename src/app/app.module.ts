import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MaterialModule } from "./material.module";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExtendedUsersComponent } from './extended-users/extended-users.component';
import { GroupsToStringPipe } from '../pipes/groups-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavBarComponent,
    ExtendedUsersComponent,
    GroupsToStringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
