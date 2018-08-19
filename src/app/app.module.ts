import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MaterialModule} from './extramodules/material/material.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { FavoritesComponent } from './home/favorites/favorites.component';
import { UtcPipe } from './pipes/utc.pipe';
import { CommonDialogComponent } from './common-dialog/common-dialog.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {ErrorService} from './services/error.service';
import { MenuComponent } from './menu/menu.component';
import { TutorialComponent } from './tutorial/tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    UtcPipe,
    CommonDialogComponent,
    MenuComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  entryComponents:[CommonDialogComponent],
  providers: [AuthService, AuthGuard, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
