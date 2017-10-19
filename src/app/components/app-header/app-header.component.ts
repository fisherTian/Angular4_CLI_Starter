import { Component, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { InterceptorService  } from 'ng2-interceptors';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {

  admin={name:''};
  totalCount:number=0;

  constructor(private el: ElementRef,private router:Router,private http:InterceptorService) { }

  //wait for the component to render completely
  ngOnInit(): void {
    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);

    this.admin = JSON.parse(sessionStorage.getItem("user"));

    let timer = Observable.timer(new Date(), 3000);
    timer.subscribe(() => {
      this.http.get(environment.API_URL+'/against/againstUnDealCount')
        .toPromise()
        .then(res => {
          this.totalCount = res.json().data;
        })
        .catch((error:any) => Promise.reject(error.message || error));
    });

  }

  loginOut = function (){
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }



}
