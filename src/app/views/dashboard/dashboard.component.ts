import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './testService';
@Component({
  templateUrl: 'dashboard.component.html',


})
export class DashboardComponent{

  constructor(private heroService:HeroService) { }

  hero = this.heroService.getHeroes("aa");

  changeURL() {
    var text = window.location.href;
    text.toString();
    var url = text.replace(/#/, "index.html#");
    window.history.pushState({}, "0", url);
  }

  ngOnInit() { console.log(this.hero);this.changeURL(); }
}
