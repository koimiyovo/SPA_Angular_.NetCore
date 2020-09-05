import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokeneInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (localStorage.getItem('access_token') != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
        }
        return next.handle(request);
    }
}
