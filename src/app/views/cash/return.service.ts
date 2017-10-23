import { Injectable }    from '@angular/core';
import { InterceptorService  } from 'ng2-interceptors';
import { GoodUtils } from './../../core/utils';
import { environment } from 'environments/environment';
@Injectable()
export class ReturnListService {

  constructor(private http: InterceptorService) { }

  public get(params) {
    return this.http.get(environment.API_URL+'/returnRecord/listAll?'+GoodUtils.parseParams(params))
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }
}
