import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor() {
       
     }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        // const account = this.accountService.accountValue;
        // const isLoggedIn = account?.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${"token"}` }
            });
        }

        return next.handle(request);
    }
}