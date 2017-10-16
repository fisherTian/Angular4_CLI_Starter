import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private  router:Router){}

  changeURL() {
    var text = window.location.href;
    text.toString();
    var url = text.replace(/#/, "index.html#");
    window.history.pushState({}, "0", url);
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.changeURL();
        }
      });
  }

}
