import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character, Image} from '../../models/Marvel';
import {StorageService} from '../storage.service';


@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.css']
})
export class MarvelListComponent implements OnInit {

  @Input()
  heroes: Character[];

  @Output()
  updateData: EventEmitter<any> = new EventEmitter<any>();



  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  prev(){
    let off = this.storage.getOffset();
      off -= 20;
      this.storage.setOffset(off);

    this.updateData.emit(true);
  }

  next(){
    let off = this.storage.getOffset() + 20;
    this.storage.setOffset(off);
    this.updateData.emit();
  }

  canNext():boolean{
    if((this.storage.getOffset() + 20) < this.storage.getMaxData()){
      return true;
    }
    return false;
  }

  canPrev(): boolean{
    if(this.storage.getOffset() > 0){
      return true;
    }
    return false;
  }

}
