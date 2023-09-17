import {Component, Input} from '@angular/core';

@Component({
  selector: 'month-image',
  templateUrl: './month-image.component.html',
  styleUrls: ['./month-image.component.scss']
})
export class MonthImageComponent {
  @Input('src')
  imageUrl: string;


  constructor() {
  }

  ngOnInit() {
    console.log(this.imageUrl);
  }
}
