import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/landing/landing.component')
            .then(m => m.LandingComponent),
        title: 'Home'
    },
    {
        path: 'players',
        loadComponent: () => import('./components/player-list/player-list.component')
            .then(m => m.PlayerListComponent),
        title: 'Players'
    },
    {
        path: 'players/:id',
        loadComponent: () => import('./components/player-detail/player-detail.component')
            .then(m => m.PlayerDetailComponent)
    },
    {
        path: 'games',
        loadComponent: () => import('./components/game-list/game-list.component')
            .then(m => m.GameListComponent),
        title: 'Games'
    }
];
