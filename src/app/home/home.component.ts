import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/entities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projectName: string = 'lycan';
  userName: string = "Unknown";
  availableUsers: Array<User>;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(data => {
        this.availableUsers = data;
        console.log(this.availableUsers);
      });
    console.log(`%chome initialized.`, "color:#4D007A;font-weight:bold");
  }
}
