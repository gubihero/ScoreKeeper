import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  players: Player[] = [
    { firstName: 'Joe', lastName: 'Somebody' },
    { firstName: 'Frank', lastName: 'Frankington' },
    { firstName: 'Tim', lastName: 'The Enchanter' },
  ];

  fetchPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  fetchPlayer(playerId: number): Observable<Player> {
    const player = this.players.find(p => p.id);
    if(player) {
      return of(player);
    } else {
      const error: HttpErrorResponse = {}
      return throwError(() => error)
    }
  }
}
