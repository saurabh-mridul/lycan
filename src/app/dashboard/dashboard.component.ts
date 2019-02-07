import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { User, Post } from '../models/entities';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedUserId: string;
  selectedUser: User;
  selectedPost: Post;
  posts: Post[];
  constructor(private route: ActivatedRoute, private service: DataService) { }

  private InitializeDashboard() {
    if (this.selectedUserId) {
      this.service.getUser(this.selectedUserId)
        .subscribe(user => this.selectedUser = user);

      this.service.getPosts(this.selectedUserId)
        .subscribe(data => this.posts = data);
    }
  }

  private changePostHandler(post: Post) {
    this.selectedPost = post;
    post.isSelected = true;
    this.posts.forEach(p => p.isSelected = false);
    console.log(JSON.stringify(post));
  }

  ngOnInit() {
    console.log(`%cdashboard loaded`, "color:orange;font-weight:bold");

    this.route.params
      .subscribe(prms => {
        this.selectedUserId = prms.name;
        this.InitializeDashboard();
        console.log(this.selectedUserId);
      });
  }
}
