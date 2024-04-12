import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next.handle(request).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
                }
            })
        )
    }
}