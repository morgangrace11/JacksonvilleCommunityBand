import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatGridListModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleComponent } from './people/people.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'events', component: EventsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'people', component: PeopleComponent }
    ]),
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutUsComponent,
    ContactComponent,
    EventsComponent,
    FooterComponent,
    PeopleComponent,
    GalleryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


