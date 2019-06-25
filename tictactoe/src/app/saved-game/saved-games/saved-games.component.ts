import { Component, OnInit } from '@angular/core';
import {ClientHttpService, Game} from './../../client-http.service';

@Component({
  selector: 'app-saved-games',
  templateUrl: './saved-games.component.html',
  styleUrls: ['./saved-games.component.css']
})
export class SavedGamesComponent implements OnInit {
  private  _httpClient;

  _listGames : Array<Game>;

  constructor(httpClient:ClientHttpService) { 
      this._httpClient = httpClient;
      this._httpClient.getGamesList().subscribe((gamesList:Array<Game>)=>{
          this._listGames = gamesList;
      })
  }

  ngOnInit() {
  }
  
  _handleContinueButton(game, url){
      alert(`Continue the game ${game} from : ${url}`);
  }

  _handleDeleteButton(game, url){
    alert(`Delete the game ${game} from : ${url}`);
  }
}
