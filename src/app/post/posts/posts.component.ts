import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private router: Router, private navService: NavbarService) { }

  ngOnInit() {
    this.navService.setCurrentRoute('/');
    this.getPosts();
  }

  getPosts() {
    this.postService.loadPosts()
    .subscribe(
      data => {
        this.posts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  goToPost(id: string) {
    this.router.navigate(['/post', id]);
  }

  getPhoto(photo: string) {
    if (photo) {
      return `http://localhost:3000/${photo}`;
    } else {
      return '../../assets/images/default-landscape.png';
    }
  }

}
