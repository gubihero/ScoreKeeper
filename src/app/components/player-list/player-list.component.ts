import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player.interface';
import { Subscription } from 'rxjs';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent implements OnInit, OnDestroy {

  players: Player[] | null = null;
  playerSubscription: Subscription | null = null;

  constructor (private playerService: PlayersService) {

  }

  ngOnInit() {
    this.playerSubscription = this.playerService.fetchPlayers().subscribe({
      next: (players: Player[]) => {
        this.players = players;
      },
      error: (err) => {
        console.log('err: ', err.message);
      },
      complete: () => {
        console.log('players fetched');
      }
    });
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
  }
}
