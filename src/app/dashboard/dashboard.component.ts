import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: object;
  selectedStack: string;
  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(`%cdashboard loaded`, "color:orange;font-weight:bold");
    this.route.params
      .subscribe(prms => {
        this.selectedStack = prms.name;
        console.log(this.selectedStack);
      });

    this.service.getUsers()
      .subscribe(data => this.users = data);
  }
}
