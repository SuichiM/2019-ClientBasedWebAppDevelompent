import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {StateService, State} from './../state.service'

import {ClientHttpService} from './../../client-http.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private _status:string = 'fetching';

  private _player_name : string = '';

  private _stateService : StateService;

  constructor(route:ActivatedRoute, stateService:StateService, clientHttp: ClientHttpService) { 
    this._stateService = stateService;
    
    if(route.snapshot.data.continue){
      clientHttp.getSavedGame().subscribe((state:State)=>{
          stateService.state=state;
          this._status = 'success';
        }, error =>{
        this._status = error.statusText;
      });

    } else{
        stateService.reset();
        this._status = 'success';
    }

  }

  _handleSubmitClick(){
    this._stateService.state.player_name = this._player_name;
  }

  ngOnInit() {
  }

}
