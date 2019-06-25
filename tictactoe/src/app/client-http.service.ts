import { Injectable } from '@angular/core';

import {State} from './game/state.service'

import {HttpClient} from '@angular/common/http';

export interface Game {
  name:string,
  url:string
}

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {

  constructor(private httpClient: HttpClient) { }

  getSavedGame(){
    return new Promise ((resolve, reject)=>{
      this.getGamesList().subscribe((gamesList:Array<Game>)=>{
        
        let lastGame = gamesList.pop();

        if(lastGame.url)
          this.httpClient.get(lastGame.url).subscribe((state:State)=>{
              resolve(state);
          });
      });
    })


  }

  getGamesList(){
    return this.httpClient.get('https://api.myjson.com/bins/p20ul'); 
  }

}
