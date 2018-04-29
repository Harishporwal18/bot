import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  data:any;
  constructor() {
    this.data = [
      {day: 'Sales', id:10001, details : 'Eat Banana,Eat Banana,Eat Banana'},
      {day: 'Sales Service', id:10002, details : 'Eat Orange,Eat Orange,Eat Orange'},
      {day: 'Demand Generation', id:10004, details : 'Eat Apple,Eat Apple,Eat Apple'},
      {day: 'Sugesstion', id:10005, details : 'Eat Pineapple,Eat Pineapple,Eat Pineapple'},
      {day: 'Market', id:10006, details : 'Eat Watermelon,Eat Watermelon,Eat Watermelon'}
    ];
  }
  loadAll(){
    return this.data;
}
  getByID(id)
  {
    for(var i=0;i < (this.data).length;i++){
		
      if(this.data[i].id == id)
      {
          return this.data[i];
      }
    }
  }

}
