import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MarvelListComponent } from './marvel-list/marvel-list.component';
import { MarvelItemComponent } from './marvel-item/marvel-item.component';
import { HttpClientModule } from '@angular/common/http';
import {StorageService} from './storage.service';
import { MarvelFormComponent } from './marvel-form/marvel-form.component';
import {FormsModule, NgForm} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MarvelListComponent,
    MarvelItemComponent,
    MarvelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
