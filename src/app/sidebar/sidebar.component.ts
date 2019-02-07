import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/entities';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  users: Array<User>;
  constructor(private service: DataService) { }

  ngOnInit() {
    console.log('sidebar initialized.')
    this.service.getUsers()
      .subscribe(data => this.users = data);
  }

  ngOnDestroy() {
    console.log('sidebar destroyed.')
  }
}
