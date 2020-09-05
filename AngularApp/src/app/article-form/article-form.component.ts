import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/models/blog.model';
import { BlogService } from 'src/service/blog.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  public allBlogs: Blog[] = [];
  public selectedBlog: Blog;
  public titre: string;
  public auteur: string;
  public texte: string;

  constructor(public blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogService
        .getAllBlogs()
        .subscribe(blogs => {
          this.allBlogs = blogs;
        });
  }

  submitArticle() {
    this.blogService.addArticle({
      titre: this.titre,
      auteur: this.auteur,
      texte: this.texte,
      blog: this.selectedBlog
    });
  }

}
