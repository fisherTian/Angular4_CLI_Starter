import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InterceptorService  } from 'ng2-interceptors';

@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit{

  constructor(private http: InterceptorService) { }

  ngOnInit() {

    this.http.get("/account/listAll?currentPage="+1).subscribe(
      (res) => console.log(res),
      (err) => console.error(err),
      () => console.log("Yay"));

  }
}
