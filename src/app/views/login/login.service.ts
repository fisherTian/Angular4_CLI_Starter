import { Injectable }    from '@angular/core';
import { InterceptorService  } from 'ng2-interceptors';
import { GoodUtils } from './../../core/utils';
import { environment } from 'environments/environment';
@Injectable()
export class LoginService {

  constructor(private http: InterceptorService) { }

  public login(user) {
    return this.http.post(environment.API_URL+'/admin/login',GoodUtils.parseParams(user))
      .toPromise()
      .then(response => response.json())
      .catch((error:any) => Promise.reject(error.message || error));
  }
}
