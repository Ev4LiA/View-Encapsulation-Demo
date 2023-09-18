import {Component, Input, TemplateRef, ViewEncapsulation} from '@angular/core';
import {MonthModel} from "../model/monthModel";

@Component({
  selector: 'month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
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
