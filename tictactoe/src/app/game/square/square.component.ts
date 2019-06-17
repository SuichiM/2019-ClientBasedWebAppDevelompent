import { Component, OnInit, Input } from '@angular/core';

import {StateService} from './../state.service';


@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() row: number;
  @Input() column: number;

  private _stSrv : StateService;

  constructor(stSrv:StateService) { 
    this._stSrv = stSrv;
  }

  ngOnInit() {
  }

  _handleSquareClick(){
    console.log(`click the square ${this.row} and ${this.column}`);
    this._stSrv.updateValue(this.row, this.column);
  }

}
