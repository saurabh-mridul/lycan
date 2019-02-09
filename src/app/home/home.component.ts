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
  availableAlbums: Array<Album>;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(data => {
        this.availableUsers = data;
        console.log(this.availableUsers);
      });

      this.service.getAlbums()
        .subscribe(data => {
          this.availableAlbums = data;
          console.log(this.availableAlbums);
        })
    console.log(`%chome initialized.`, "color:#4D007A;font-weight:bold");
  }
}
