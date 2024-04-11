import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class WebRequestService {
    readonly ROOT_URL !: string;
    constructor(private httpClient: HttpClient) {
        this.ROOT_URL = 'https://fakestoreapi.com/'
    }

    get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(`${this.ROOT_URL}${url}`);
    }

    post<T>(url: string, paylaod: Object): Observable<T> {
        return this.httpClient.post<T>(`${this.ROOT_URL}/${url}`, paylaod);
    }
}