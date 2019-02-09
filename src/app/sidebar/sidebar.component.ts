import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { User, Album } from '../models/entities';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  @Input() Users: Array<User>;
  @Input() Albums: Array<Album>;
  constructor() { }

  ngOnInit() {
    console.log('sidebar initialized.')
  }

  ngOnDestroy() {
    console.log('sidebar destroyed.')
  }
}
