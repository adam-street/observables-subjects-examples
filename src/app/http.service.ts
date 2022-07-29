import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  getIp() {
    return this.httpClient.get("http://ip.jsontest.com/") // FETCH
  }
}
