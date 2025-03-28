import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Post } from '../../services/api.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnChanges {
  @Input() userId: number = 1;
  @Output() postSelected = new EventEmitter<number>();

  posts: Post[] = [];
  selectedPostId: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId']) {
      this.loadPosts(this.userId);
    }
  }

  loadPosts(userId: number): void {
    this.apiService.getPosts(userId).subscribe({
      next: (data) => {
        this.posts = data;

        // Select the first post by default
        if (this.posts.length > 0) {
          this.selectPost(this.posts[0].id);
        } else {
          this.selectPost(null);
        }
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      },
    });
  }

  selectPost(postId: number | null): void {
    this.selectedPostId = postId;
    this.postSelected.emit(postId || undefined);
  }
}
