import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  backgrounds: string[] = [
    'images/home/mufu1.jpg',
    'images/home/ack2.jpg',
    'images/home/ack3.jpg',
    'images/home/ack4.jpg',
    'images/home/ack6.jpg',
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
    }, 5000); // change every 5 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get currentBackground(): string {
    return `url('${this.backgrounds[this.currentIndex]}')`;
  }
}
