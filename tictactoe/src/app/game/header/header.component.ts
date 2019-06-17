import { Component, OnInit } from '@angular/core';
import {StateService} from './../state.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _stSrv : StateService;
  
  constructor(stSrv:StateService) { 
    this._stSrv = stSrv;
  }

  ngOnInit() {
  }

}
