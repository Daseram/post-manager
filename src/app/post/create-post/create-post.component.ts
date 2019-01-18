import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postForm: FormGroup;
  addedTags = [];
  tag: string;
  imageUrl = '../../assets/images/default-landscape.png';
  imageToUpload: File;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router,
              private navService: NavbarService) { }

  ngOnInit() {
    this.navService.setCurrentRoute('create-post');
    this.postForm = this.fb.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  submitForm(post: any) {
    const postToUpload = {
      title: post.title,
      description: post.description,
      tags: this.addedTags
    };
    if (this.imageUrl !== '../../assets/images/default-landscape.png') {
      this.postService.createPost(postToUpload)
      .subscribe(
        (data: any) => {
          this.uploadPicture(data.id);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert('Add an Image to upload the post.');
    }
  }

  addTag(tag: string) {
    if (tag) {
      this.addedTags.push(tag);
      this.tag = '';
    }
  }

  removeTags(index: number) {
    this.addedTags.splice(index, 1);
  }

  onFileSelected(file: FileList) {
    this.imageToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.imageToUpload);
  }

  uploadPicture(id: string) {
    const formData = new FormData();
    formData.append('image', this.imageToUpload, this.imageToUpload.name);
    this.postService.addPictureToPost(formData, id)
    .subscribe(
      data => {
        alert('Success uploading Post');
        this.router.navigate(['/post', id]);
      },
      error => {
        console.log(error);
      }
    );
  }

}
