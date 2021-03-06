import { Injectable }    from '@angular/core';
import { InterceptorService  } from 'ng2-interceptors';
import { GoodUtils } from './../../core/utils';
import { environment } from 'environments/environment';
@Injectable()
export class AdEditService {

  constructor(private http: InterceptorService) { }

  public addAd(params) {
    return this.http.post(environment.API_URL+'/advertising/addAd?',GoodUtils.parseParams(params))
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }

  public getAdById(id) {
    return this.http.get(environment.API_URL+'/advertising/getAdById?id='+id)
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }

  public updateAd(params) {
    return this.http.post(environment.API_URL+'/advertising/updateAd?',GoodUtils.parseParams(params))
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }
}
