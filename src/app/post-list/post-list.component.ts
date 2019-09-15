import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() listPosts: Array<Post>;
    
  constructor() { }
 
  ngOnInit() {
  }

}
