import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import {Observable} from 'rxjs/Observable';
import { Confirm } from "./confirm.interface";

@Injectable()
export class NgxConfirmService {
  private confirmSubject: Subject<Confirm> = new Subject<Confirm>();
  public $confirm: Observable<Confirm> = this.confirmSubject.asObservable();

  confirm(confirmValue: Confirm) {
    this.confirmSubject.next(confirmValue);
  }
}
