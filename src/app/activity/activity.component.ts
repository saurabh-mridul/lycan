import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/entities';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() CurrentUser: User;
  activities: object;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getToDos(this.CurrentUser.id.toString())
      .subscribe(data => {
        this.activities = data;
      });
  }
}
