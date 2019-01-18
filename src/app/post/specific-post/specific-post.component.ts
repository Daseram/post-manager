import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-specific-post',
  templateUrl: './specific-post.component.html',
  styleUrls: ['./specific-post.component.scss']
})
export class SpecificPostComponent implements OnInit {

  post: Post;

  constructor( private route: ActivatedRoute, private postService: PostService) {
    this.route.params.subscribe( params => { this.getPost(params.id); } );
  }

  ngOnInit() {
  }

  getPost( id: string) {
    this.postService.getPost(id)
    .subscribe(
      data => { this.post = data; },
      error => { console.log(error); }
    );
  }

  getPhoto(photo: string) {
    if (photo) {
      return `http://localhost:3000/${photo}`;
    } else {
      return '../../assets/images/default-landscape.png';
    }
  }

}
