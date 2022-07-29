import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-tets-ui';

  constructor(private httpService: HttpService ) {}

  onClick() {
    let observable = this.httpService.getIp() // mailbox, letter
    observable.subscribe(
      (data) => {
        // netflix password
      },
      () => {
        // yell
      }
    )
  }
}
