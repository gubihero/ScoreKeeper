import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  fetchPlayers(): Observable<Player[]> {
    const defaultPlayers: Player[] = [
      { firstName: 'Joe', lastName: 'Somebody' },
      { firstName: 'Frank', lastName: 'Frankington' },
      { firstName: 'Tim', lastName: 'The Enchanter' },
    ];
    return of(defaultPlayers);
  }
}
