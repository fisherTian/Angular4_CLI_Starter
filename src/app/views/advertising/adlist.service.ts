import { Injectable }    from '@angular/core';
import { InterceptorService  } from 'ng2-interceptors';
import { GoodUtils } from './../../core/utils';
import { environment } from 'environments/environment';
@Injectable()
export class AdListService {

  constructor(private http: InterceptorService) { }

  public get(params) {
    return this.http.get(environment.API_URL+'/advertising/listAll?'+GoodUtils.parseParams(params))
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }

  public updateStatus(params) {
    return this.http.post(environment.API_URL+'/advertising/updateAd',GoodUtils.parseParams(params))
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }

  public deleteAd(params) {
    return this.http.post(environment.API_URL+'/advertising/deleteAd',GoodUtils.parseParams(params))
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }

}
