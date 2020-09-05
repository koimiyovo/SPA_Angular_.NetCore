import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  public titre: string;
  public sousTitre: string;
  public categorie: string;
  public id: number;

  constructor(public blogService: BlogService
            , public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute
        .params
        .subscribe(data => {
          this.blogService
              .getBlog(data.id)
              .subscribe(blog => {
                this.titre = blog.titre;
                this.sousTitre = blog.sousTitre;
                this.categorie = blog.categorie;
                this.id = blog.id;
              });
        });
  }

  submitBlog() {
    if (this.id !== undefined) {
      this.blogService.editBlog({
        id: this.id,
        titre: this.titre,
        sousTitre: this.sousTitre,
        categorie: this.categorie
      });
    } else {
      this.blogService.addBlog({
        titre: this.titre,
        sousTitre: this.sousTitre,
        categorie: this.categorie
      });
    }
  }
}
