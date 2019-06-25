import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


export interface State {
  turn:string,
  values: string[][],
  movements: number,
  finalResult :string,
  player_name: string,
  game_name: string,
  status :string
  // player0:string
}

@Injectable({
  providedIn: 'root'
})
 
export class StateService {

    private _state$: BehaviorSubject<State>;

    private _initialState;

    private _checkStatus(_row, _col){

      
    }


    constructor() { 
  
      this._initialState = {
        turn: 'playerX',
        values: [
          ['-','-','-'],
          ['-','-','-'],
          ['-','-','-']
        ],
        movements: 0,
        finalResult : null,
        player_name: null,
        game_name: 'No Saved Game',
        status : 'new'
       // player0: 'Trump'
      };
  
      this._state$ = new BehaviorSubject(this._initialState);
  
    }
  
    get state$ (): BehaviorSubject<State> {
      return this._state$; 
    }
  
    get state (): State {
      return this._state$.getValue();
    }
  
    set state (state: State) {
      this._state$.next(state);
    }
    
    updateValue(row, col) {

      if(this.state.values[row][col] === '-') {
        let newValue = this.state.turn === 'playerX' ? 'X' : '0';
        let newTurn = this.state.turn === 'playerX' ? 'player0' : 'playerX';
        this.state.values[row][col] = newValue;
        this.state.turn = newTurn;
        this.state.movements++;
        this._state$.next(this.state);
      }

      this._checkStatus(row, col);

    }
    
    reset() {
      this.state = this._initialState;
    }
    
  }
