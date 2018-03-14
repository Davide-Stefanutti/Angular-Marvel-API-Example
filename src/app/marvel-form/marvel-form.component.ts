import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-marvel-form',
  templateUrl: './marvel-form.component.html',
  styleUrls: ['./marvel-form.component.css']
})
export class MarvelFormComponent implements OnInit {

  @Output()
  formOutput: EventEmitter<string> = new EventEmitter<string>();

  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  goHome(){
    this.formOutput.emit("home");
  }

  send(input: NgForm){
    if(input.valid) {
      this.storage.setSearch(input.value.search);
      this.formOutput.emit("search");
    }
  }

}
