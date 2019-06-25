import { Component, OnInit } from '@angular/core';
import {StateService} from './../state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  private _stSrv : StateService;

  constructor(stSrv:StateService) { 
    this._stSrv = stSrv;
  }

  ngOnInit() {
  }

  _resetGameClick(){
    this._stSrv.reset();
  }

  _saveGameClick(){
    alert('cambiando a guardando');
    this._stSrv.state.status = 'saving';
  }

}
