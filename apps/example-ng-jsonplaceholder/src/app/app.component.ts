import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '@example-ng-jsonplaceholder/api-interfaces';

@Component({
  selector: 'example-ng-jsonplaceholder-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts$ = this.http.get<Post[]>('/api/posts');
  constructor(private http: HttpClient) {}
}
