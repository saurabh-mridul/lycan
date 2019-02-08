import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/entities';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  comments: Comment[];
  constructor(private service: DataService) { }

  private _currentPost: Post;
  @Input()
  set CurrentPost(value: Post) {
    this._currentPost = value;
    this.clearArray(this.comments);
    if(value) {
      this.getComments(this._currentPost.id.toString());

    }
  }

  get CurrentPost() {
    return this._currentPost;
  }

  private getComments(postId: string) {
    this.service.getComments(postId)
      .subscribe(data => this.comments = data);
  }

  private clearArray<T>(collection: Array<T>) {
    if (collection) {
      while (collection.length > 0) {
        collection.pop();
      }
    }
  }

  ngOnInit() {
  }

}
