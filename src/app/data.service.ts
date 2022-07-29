import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ip: string = '0.0.0.0';
  public ip$: Subject<string> = new Subject<string>();

  constructor() { }

  setIp(newValue: string) {
    this.ip = newValue;
    this.ip$.next(this.ip);
  }

  getIp() {
    return this.ip;
  }
}
