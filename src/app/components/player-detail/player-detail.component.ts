import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player.interface';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.scss'
})
export class PlayerDetailComponent implements OnInit{
  player: Player | null = null;
  playerId: number = 0;

  @Input() 
    set id(playerId: number) {
      console.log(playerId);
      this.playerId = playerId;
    }

  constructor(private playerService: PlayersService) {
    
  }

  ngOnInit() {
    this.playerService.fetchPlayer(this.playerId).subscribe({
      next: player => {
        this.player = player;
      },
      error: err => { 
        console.log(err.message);
      } 
    });
  }
}
