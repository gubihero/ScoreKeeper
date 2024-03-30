import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player.interface';
import { PlayersService } from '../../services/players.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.scss'
})
export class PlayerDetailComponent implements OnInit, OnDestroy{
  player: Player | null = null;
  player$: Observable<Player> | null = null;
  playerSub$: Subscription | undefined = undefined;

  @Input() 
    set id(playerId: number) {
      this.player$ = this.playerService.fetchPlayer(playerId);
    }

  constructor(private playerService: PlayersService) {
    
  }

  ngOnInit(): void {
    this.playerSub$ = this.player$?.subscribe({
      next: player => {
        this.player = player;
      },
      error: err => { 
        console.log(err.message);
      } 
    });
  }

  ngOnDestroy(): void {
    this.playerSub$?.unsubscribe();
  }
}
