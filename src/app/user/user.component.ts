import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { User, Post, AlertNotification } from '../models/entities';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  selectedUserId: string;
  selectedUser: User;
  selectedPost: Post;
  posts: Array<Post>;
  subscriptions: Array<Subscription>;
  responseNotification: AlertNotification;
  timer: NodeJS.Timer;

  constructor(private route: ActivatedRoute, private service: DataService) {
    this.responseNotification = { alertType: 'info', isOpen: false, isClosable: false, content: '', recievedTime: '' } as AlertNotification;
  }

  private InitializeDashboard() {
    if (this.selectedUserId) {
      this.clearArray(this.posts);

      this.service.getUser(this.selectedUserId)
        .subscribe(user => {
          this.selectedUser = user;
          this.showNotification(user);
        });

      this.service.getPosts(this.selectedUserId)
        .subscribe(data => this.posts = data);
    }
  }

  private showNotification(res: User) {
    this.responseNotification.isOpen = true;
    this.responseNotification.alertType = 'success';
    this.responseNotification.recievedTime = new Date().toLocaleString();
    this.responseNotification.content = `${res.name} | ${res.username} | ${res.email} | ${res.phone} | ${res.website}`;
    this.closeNotification();
  }

  private closeNotification() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.responseNotification.isOpen = false;
    }, 5000);
  }

  private changePostHandler(post: Post) {
    this.selectedPost = post;
    post.isSelected = true;
    this.posts.forEach(p => p.isSelected = false);
    console.log(JSON.stringify(post));
  }

  private clearArray<T>(collection: Array<T>) {
    if(collection){
      while(collection.length > 0) {
        collection.pop();
      }
    }
  }

  ngOnInit() {
    console.log(`%cuser component initialized`, "color:orange;font-weight:bold");

    this.route.params
      .subscribe(prms => {
        this.selectedUserId = prms.id;
        this.selectedPost = null;
        this.InitializeDashboard();
        console.log(`selected user id: ${this.selectedUserId}`);
      });
  }
}

