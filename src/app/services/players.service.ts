import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  players: Player[] = [
    { id: 1, firstName: 'Joe', lastName: 'Somebody' },
    { id: 2, firstName: 'Frank', lastName: 'Frankington' },
    { id: 3, firstName: 'Tim', lastName: 'The Enchanter' },
  ];

  fetchPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  fetchPlayer(playerId: number): Observable<Player> {
    const player = this.players.find(p => {
      return p.id == playerId}
    );
    
    if(player) {
      return of(player);
    } else {
      const error = {
        error: "Error",
        message: "Player Not Found",
        status: 404
      }
      return throwError(() => error)
    }
  }
}
