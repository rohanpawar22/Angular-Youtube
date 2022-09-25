import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { OriginalsComponent } from './originals/originals.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
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
    path: 'Originals',
    component: OriginalsComponent,
  },
  {
    path: 'Movies',
    component: MoviesComponent,
  },
  {
    path: 'Subscriptions',
    component: SubscriptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
