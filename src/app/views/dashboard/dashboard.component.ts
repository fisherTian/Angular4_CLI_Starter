import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit{

  constructor() { }

  ngOnInit() { console.log(environment.API_URL);}
}
