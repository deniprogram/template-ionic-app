import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {

  constructor() {}

  getDDD(phone) {
    return phone.substr(1,2);
  }

  clearPhone(phone) {
    return phone.replace('(','').replace(')','').replace('-','').replace(' ','').substr(2,9);
  }
}
