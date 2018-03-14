import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharacterDataWrapper, CharacterDataContainer, Character, Image} from '../models/Marvel';
import {StorageService} from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  PUBLIC_API_KEY:string = "API_KEY";
  RequestURL:string = "https://gateway.marvel.com:443/v1/public/characters?";
  list: Character[];

  constructor(private storage: StorageService, private http:HttpClient){
     this.getData();
  }


  getData(){
      this.list = [];
      let url = this.RequestURL + "&offset=" + this.storage.getOffset()  + "&apikey=" + this.PUBLIC_API_KEY;

      if( this.storage.getSearch() != "")
        url += "&nameStartsWith=" + this.storage.getSearch();

          this.http.get<CharacterDataWrapper>(url)
        .subscribe(data => {
            this.storage.setMaxData(data.data.total);
            this.list = data.data.results;
          },
          error => {
            alert("Error!");
          });

  }

  formOutput(text: string){
    if(text == "home"){
      this.storage.setOffset(0);
      this.storage.setSearch("");
      this.getData();
    }
    else if(text == "search"){
      this.storage.setOffset(0);
      this.getData();
    }
  }


}
