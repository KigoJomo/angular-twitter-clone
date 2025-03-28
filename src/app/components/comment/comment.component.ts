import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Comment } from '../../services/api.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent implements OnChanges {
  @Input() postId: number | undefined;

  comments: Comment[] = [];

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['postId'] && this.postId) {
      this.loadComments(this.postId);
    }
  }

  loadComments(postId: number): void {
    this.apiService.getComments(postId).subscribe({
      next: (data) => {
        this.comments = data;
      },
      error: (error) => {
        console.error('Error fetching comments:', error);
      },
    });
  }
}
