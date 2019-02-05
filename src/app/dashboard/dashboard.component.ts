import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: object;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(data => this.users = data);
  }
}
