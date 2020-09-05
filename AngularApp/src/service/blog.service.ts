import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from 'src/models/blog.model';
import { Article } from 'src/models/article.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly GET_BLOGS = environment.apiUrl + '/blog';
  private readonly POST_BLOG = environment.apiUrl + '/blog';
  private readonly PUT_BLOG = environment.apiUrl + '/blog';
  private readonly POST_ARTICLE = (blogId: number) => environment.apiUrl + '/blog/' + blogId + '/article';
  private readonly GET_BLOG = (blogId: number) => environment.apiUrl + '/blog/' + blogId;

  constructor(private http: HttpClient) { }

  addBlog(blog: Blog) {
    this.http
        .post(this.POST_BLOG, blog)
        .subscribe();
  }

  addArticle(article: Article) {
    this.http
        .post(this.POST_ARTICLE(article.blog.id), article)
        .subscribe();
  }

  getAllBlogs(): Observable<Blog[]> {
    return this.http
                .get<Blog[]>(this.GET_BLOGS);
  }

  getBlog(id: number) {
    return this.http
        .get<Blog>(this.GET_BLOG(id));
  }

  editBlog(blog: Blog) {
    this.http
        .put(this.PUT_BLOG, blog)
        .subscribe();
  }
}
