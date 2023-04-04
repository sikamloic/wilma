import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'connexion',
    loadComponent: () => import('./components/connexion/connexion.page').then( m => m.ConnexionPage)
  },
  {
    path: 'inscription',
    loadComponent: () => import('./components/inscription/inscription.page').then( m => m.InscriptionPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'historique',
    loadComponent: () => import('./historique/historique.page').then( m => m.HistoriquePage)
  },
  {
    path: 'detail',
    loadComponent: () => import('./detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./wishlist/wishlist.page').then( m => m.WishlistPage)
  },
];
