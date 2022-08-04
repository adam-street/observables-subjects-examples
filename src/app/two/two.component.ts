import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  localIp: string = 'some value';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onUpdateIp(){
    this.dataService.setIp(Math.random());
  }

}
