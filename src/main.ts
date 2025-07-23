import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,  // Animation duration
  once: true       // Only animate once
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
