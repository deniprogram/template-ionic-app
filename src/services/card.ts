import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Constants } from '../constants';

@Injectable()
export class CardService {

  public expression_visa = /^4/;
  public expression_mastercard = /^5/;
  public expression_amex = /^3[47]/;
  public expression_elo = /^401178|^401179|^431274|^438935|^451416|^457393|^457631|^457632|^504175|^627780|^636297|^636369|^(506699|5067[0-6]\d|50677[0-8])|^(50900\d|5090[1-9]\d|509[1-9]\d{2})|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])/;
  public expression_diners = /^3(?:0[0-5]|[68][0-9])/;
  public expression_discover = /^6(?:011|5[0-9]{2})/;
  public expression_JCB = /^(?:2131|1800|35\d{3})/;
  public expression_aura = /^50/;

  constructor(public constants: Constants) {}

  brandClass(number?: string) {
    let card;

    if (this.expression_elo.test(number)) {
      card = 'Elo';
    } else if (this.expression_visa.test(number)) {
      card = 'Visa';
    } else if (this.expression_aura.test(number)) {
      card = 'Aura';
    } else if (this.expression_mastercard.test(number)) {
      card = 'Master';
    } else if (this.expression_amex.test(number)) {
      card = 'Amex';
    } else if (this.expression_diners.test(number)) {
      card = 'Diners';
    } else if (this.expression_discover.test(number)) {
      card = 'Discover';
    } else if (this.expression_JCB.test(number)) {
      card = 'JCB';
    }

    return card;
  }
}
