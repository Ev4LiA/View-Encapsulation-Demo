import {Component, Input, TemplateRef} from '@angular/core';
import {MonthModel} from "../model/monthModel";

@Component({
  selector: 'month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.scss']
})
export class MonthCardComponent {

  @Input()
  month: MonthModel;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Input()
  cardIndex: number;


  constructor() {}
}
