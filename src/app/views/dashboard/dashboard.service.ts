import { Injectable }    from '@angular/core';
import { InterceptorService  } from 'ng2-interceptors';
import { environment } from 'environments/environment';
@Injectable()
export class DashBoardService {

  constructor(private http: InterceptorService) { }

  public getAccount() {
    return this.http.get(environment.API_URL+'/funds/account')
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }

  public getChart(type) {
    return this.http.get(environment.API_URL+'/funds/chart?type='+type)
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }
}
