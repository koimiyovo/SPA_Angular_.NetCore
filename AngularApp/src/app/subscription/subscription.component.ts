import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  public nom: string;
  public prenom: string;
  public email: string;
  public motDePasse: string;

  private readonly POST_SUBSCRIBE = environment.apiUrl + '/user/subscribe';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http
        .post(
          this.POST_SUBSCRIBE,
          {
            User : new User(
              this.nom,
              this.prenom,
              this.email
            ),
            Password: this.motDePasse
          }
        )
        .subscribe();
  }
}
