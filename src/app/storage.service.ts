import { Injectable } from '@angular/core';
import {CharacterDataWrapper, CharacterDataContainer, Character, Image} from '../models/Marvel';
import {HttpClient} from '@angular/common/http';



@Injectable()
export class StorageService {

  private offset = 0;
  private maxData:number;
  private search: string = "";


  constructor(){ }


  public setOffset(off: number){
    this.offset = off;
  }

  public getOffset(): number{
    return this.offset;
  }

  public setMaxData(max: number){
    this.maxData = max;
  }

  public getMaxData(): number{
    return this.maxData;
  }

  public setSearch(text: string){
    this.search = text;
  }

  public  getSearch():string{
    return this.search;
  }



}
