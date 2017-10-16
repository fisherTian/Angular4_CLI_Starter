import { Interceptor, InterceptedRequest, InterceptedResponse }
  from 'ng2-interceptors';
import { RequestOptionsArgs,Headers } from '@angular/http';
import { environment } from 'environments/environment';
export class ServerURLInterceptor implements Interceptor {
  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    request.url = environment.API_URL+request.url;
    request.options.headers.append('token','123456');
    console.log("intercept url:"+request.url);
    return request;
  }
  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    console.log(response);
    return response;
  }

}
