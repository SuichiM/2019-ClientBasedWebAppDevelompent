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

  constructor(route:ActivatedRoute, stateService:StateService, clientHttp: ClientHttpService) { 
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

  ngOnInit() {
  }

}
