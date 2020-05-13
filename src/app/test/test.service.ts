import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()

export class TestService{
    private apiURL: string;

    constructor(
        private http: Http
    ) {
        this.apiURL = environment.apiURL;
    }

    getClothes(): Promise<Array<Object>> {
        return this.http.get(`${this.apiURL}clothing`)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
      }





}


