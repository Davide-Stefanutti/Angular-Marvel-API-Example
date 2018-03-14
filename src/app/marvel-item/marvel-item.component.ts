import {Component, Input, OnInit} from '@angular/core';
import {Character, Image} from '../../models/Marvel';


@Component({
  selector: 'app-marvel-item',
  templateUrl: './marvel-item.component.html',
  styleUrls: ['./marvel-item.component.css']
})
export class MarvelItemComponent implements OnInit {

  @Input()
  hero: Character;

  constructor() { }

  ngOnInit() {
  }

}
