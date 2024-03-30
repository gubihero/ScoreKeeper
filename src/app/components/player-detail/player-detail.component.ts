import { Component } from '@angular/core';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.scss'
})
export class PlayerDetailComponent {
  player: Player | null = null

  @Input() 
    set id(playerId: number) {
      this
    }
}
