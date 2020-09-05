import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { AuthGuard } from './core/auth.guard';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'blog/:id',
    component: BlogFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'subscribe',
    component: SubscriptionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
