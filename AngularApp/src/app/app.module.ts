import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { BlogService } from 'src/service/blog.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';
import { TokeneInterceptor } from './core/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BlogFormComponent,
    ArticleFormComponent,
    SubscriptionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BlogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeneInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
