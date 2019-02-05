import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  posts: object;
  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(data => this.posts = data);
  }

}
