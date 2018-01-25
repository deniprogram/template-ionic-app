import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilsService {

  constructor() {}

  lastNumberCard(card_number) {
    const countNumberCard = card_number.length;
    return card_number.substring(countNumberCard-4, countNumberCard);
  }

  formatAmount(value) {
    return value ? (value).toFixed(2).replace('.',',') : 0;
  }

}
