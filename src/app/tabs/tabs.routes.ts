import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'profil',
        loadComponent: () =>
          import('../profil/profil.page').then((m) => m.ProfilPage),
      },
      {
        path: 'historique',
        loadComponent: () =>
          import('../historique/historique.page').then((m) => m.HistoriquePage),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
