import { Component ,OnInit} from '@angular/core';
import { InterceptorService  } from 'ng2-interceptors';
import { environment } from 'environments/environment';
@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit{

  constructor(private http: InterceptorService) { }

  ngOnInit() {

    this.http.get(environment.API_URL+"/account/listAll?currentPage="+1).toPromise()
      .then(response => {
        console.log(response.json());
      } )

  }
}
