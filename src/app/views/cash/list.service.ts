import { Injectable }    from '@angular/core';
import { InterceptorService  } from 'ng2-interceptors';
import { GoodUtils } from './../../core/utils';
import { environment } from 'environments/environment';
@Injectable()
export class ListService {

  constructor(private http: InterceptorService) { }

  public get(params) {
    return this.http.get(environment.API_URL+'/cashRecord/listAll?'+GoodUtils.parseParams(params))
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }

  public getCashInfo(cashId) {
    return this.http.get(environment.API_URL+'/cashInfo/getCashInfo?cashId='+cashId)
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }
}
