import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { OrignalsComponent } from './orignals/orignals.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Home',
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Explore',
    component: ExploreComponent,
  },
  {
    path: 'Shorts',
    component: ShortsComponent,
  },
  {
    path: 'Orignals',
    component: OrignalsComponent,
  },
  {
    path: 'Movies',
    component: MoviesComponent,
  },
  {
    path: 'Subscriptions',
    component: SubscriptionsComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
