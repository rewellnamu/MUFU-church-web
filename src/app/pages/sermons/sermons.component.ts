import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-sermons',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent implements OnInit {
  sermons: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSermons().subscribe((data) => {
      this.sermons = data;
    });
  }
  
}