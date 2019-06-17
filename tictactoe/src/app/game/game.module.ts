import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';

@NgModule({
  exports:[
    GameComponent
  ],
  declarations: [GameComponent],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
