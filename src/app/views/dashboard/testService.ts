import { Injectable } from '@angular/core';


@Injectable()
export class HeroService {
  constructor() { }
  getHeroes(aa:string){return aa}
}
let silentLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  getHeroes: (aa:string) => {return aa}
};
export {silentLogger};


