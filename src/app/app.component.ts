import {Component, OnInit} from '@angular/core';
import {MONTHS} from "../assets/month-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'view_capsulation';
  months = MONTHS;
  ngOnInit() {
    console.log(this.months);
  }
}
