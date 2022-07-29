import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  localIp: string = 'test value';
  constructor(private dataService: DataService) {
    this.localIp = this.dataService.getIp();
    this.dataService.ip$.subscribe(
      (newIp) => {
        this.localIp = newIp;
      }
    )
  }

  ngOnInit(): void {}
}
