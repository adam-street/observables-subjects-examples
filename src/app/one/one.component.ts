import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {first, Subscription} from "rxjs";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, OnDestroy {

  localIp: string = 'test value';
  subscription: Subscription;

  constructor(private dataService: DataService) {
    this.localIp = this.dataService.getIp();
    this.subscription = this.dataService.ip$.subscribe(
      (newIp) => {
        this.localIp = newIp;
      }
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
