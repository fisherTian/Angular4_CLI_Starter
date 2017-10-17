import { Component, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {

  admin={};

  constructor(private el: ElementRef,private router:Router) { }

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
  }

  loginOut = function (){
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
