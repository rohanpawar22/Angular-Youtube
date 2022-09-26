import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuButtonsComponent } from './menu-buttons/menu-buttons.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ShortsComponent } from './shorts/shorts.component';
import { OriginalsComponent } from './originals/originals.component';
import { MoviesComponent } from './movies/movies.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonsComponent,
    CardsComponent,
    HomeComponent,
    ExploreComponent,
    ShortsComponent,
    OriginalsComponent,
    MoviesComponent,
    SubscriptionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
