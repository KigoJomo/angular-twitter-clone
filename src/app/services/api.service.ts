import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: any;
  phone?: string;
  website?: string;
  company?: any;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getPosts(userId?: number): Observable<Post[]> {
    const url = userId
      ? `${this.baseUrl}/posts?userId=${userId}`
      : `${this.baseUrl}/posts`;
    return this.http.get<Post[]>(url);
  }

  getComments(postId?: number): Observable<Comment[]> {
    const url = postId
      ? `${this.baseUrl}/comments?postId=${postId}`
      : `${this.baseUrl}/comments`;
    return this.http.get<Comment[]>(url);
  }
}
