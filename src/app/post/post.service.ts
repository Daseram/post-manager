import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  loadPosts(): Observable<any> {
    const url = this.url + '/posts';
    return this.http.get(url);
  }

  getPost( id: string): Observable<any> {
    const url = this.url + `/posts/${id}`;
    return this.http.get(url);
  }

  createPost(post: Post) {
    const url = this.url + '/posts';
    return this.http.post(url, post);
  }

  addPictureToPost(picture: FormData, id: string) {
    const url = this.url + `/posts/${id}/picture`;
    return this.http.put(url, picture);
  }
}
