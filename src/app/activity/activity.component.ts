import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/entities';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() currentUser: User;
  activities: object;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getToDos(this.currentUser.id.toString())
      .subscribe(data => {
        this.activities = data;
      });
  }
}
