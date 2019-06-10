import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutUsComponent,
    ContactComponent,
    EventsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
