import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'MUFU-church-web';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    try {
      if (isPlatformBrowser(this.platformId)) {
        import('aos').then(AOS => {
          AOS.default.init({
            duration: 1000,
            once: true
          });
        }).catch(err => console.error('AOS failed to load:', err));
      }
    } catch (error) {
      console.error('Error in app component init:', error);
    }
  }
}