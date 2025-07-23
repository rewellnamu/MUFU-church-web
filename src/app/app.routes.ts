import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SermonsComponent } from './pages/sermons/sermons.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ServiceComponent } from './pages/service/service.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sermons', component: SermonsComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent },
  { path: '**', redirectTo: '' }
];
