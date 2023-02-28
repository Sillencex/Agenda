import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compromisso } from '../models/Compromisso';

@Injectable({
    providedIn: 'root'
})
export class CompromissoService {

    apiUrl = 'https://localhost:7081/Compromissos';

    constructor(private http: HttpClient) { }

    getCompromissos(data: string): Observable<Compromisso[]> {
        const url = `${this.apiUrl}?data=${data}`;
        return this.http.get<Compromisso[]>(url);
    }
}