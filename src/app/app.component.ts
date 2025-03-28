import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, PostComponent, CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUserId: number = 1;
  selectedPostId: number | undefined;

  onUserChanged(userId: number): void {
    this.selectedUserId = userId;
  }

  onPostSelected(postId: number): void {
    this.selectedPostId = postId;
  }
}
