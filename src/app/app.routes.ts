import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'players',
        loadComponent: () => import('./components/player-list/player-list.component')
            .then(m => m.PlayerListComponent)
    }
];
