import { Component } from '@angular/core';
import {HttpService} from "./http.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-tets-ui';
  num: any = 0;
  constructor(private httpService: HttpService, private dataService: DataService) {
    this.dataService.ip$.subscribe((num) => {
      this.num = num;
    })
  }

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
