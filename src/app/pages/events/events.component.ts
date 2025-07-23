import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
