import { Component, OnInit } from '@angular/core';
import {StateService} from './../state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private _values : string[][]=[];
    
  constructor(stSrv:StateService) { 
    this._values = stSrv.state.values;
  }

  ngOnInit() {
  }

}
