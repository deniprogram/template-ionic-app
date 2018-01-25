import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../../constants';
import { RestProvider } from '../../services/rest';

@Injectable()
export class UserProvider {
  path = 'v1/users';

  constructor(public http: Http, public constants: Constants, public rest: RestProvider) {}

  create(data) {
    return this.rest.post(this.path, data);
  }

  login(data) {
    return this.rest.post(`${this.path}/login`, data);
  }

  shering_code(data) {
    return this.rest.post(`${this.path}/shering_code`, data);
  }

  valueOrbits() {
    return this.rest.post(`${this.path}/value/orbits`, {});
  }

  valueOrbitsDetail() {
    return this.rest.post(`${this.path}/value/orbits/detail`, {});
  }

  get(id) {
    return this.rest.get(`${this.path}/${id}`);
  }

  plan(id) {
    return this.rest.get(`${this.path}/plan/${id}`);
  }

  wallet(id) {
    return this.rest.get(`${this.path}/wallet/${id}`, false);
  }

  valueEarnings(id) {
    return this.rest.get(`${this.path}/earnings/${id}`, false);
  }

  update(data) {
    return this.rest.put(this.path, data);
  }

  support(data) {
    return this.rest.post(`${this.path}/support`, data);
  }

  getExpirationDate() {
    return this.rest.post(`${this.path}/expiration/plan`, {});
  }

  extract(data) {
    return this.rest.post(`${this.path}/extract`, data);
  }

  consolidatedExtract(data) {
    return this.rest.post(`${this.path}/consolidated-value-extract`, data);
  }

  forgot_password(data) {
    return this.rest.post(`${this.path}/forgot/password`, data);
  }

}
