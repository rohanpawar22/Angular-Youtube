import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuButtonsComponent } from './menu-buttons/menu-buttons.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ShortsComponent } from './shorts/shorts.component';
import { MoviesComponent } from './movies/movies.component';
import { OrignalsComponent } from './orignals/orignals.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AppRoutingModule } from './app.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonsComponent,
    CardsComponent,
    HomeComponent,
    ExploreComponent,
    ShortsComponent,
    MoviesComponent,
    OrignalsComponent,
    SubscriptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
