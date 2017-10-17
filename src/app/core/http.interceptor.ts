import { Injectable } from '@angular/core';
import { Interceptor, InterceptedRequest, InterceptedResponse }
  from 'ng2-interceptors';
import { Router} from '@angular/router';

@Injectable()
export class ServerURLInterceptor implements Interceptor {

  constructor(private router:Router){}

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    request.options.headers.append('access-token',sessionStorage.getItem('token'));
    request.options.headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    return request;
  }
  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    if(response.response.status == 403){
      this.router.navigate(['/login']);
    };
    return response;
  }

}
