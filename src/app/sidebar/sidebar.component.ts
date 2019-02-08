import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { User } from '../models/entities';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  @Input() Users: Array<User>;
  constructor() { }

  ngOnInit() {
    console.log('sidebar initialized.')
  }

  ngOnDestroy() {
    console.log('sidebar destroyed.')
  }
}
