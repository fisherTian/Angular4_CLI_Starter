import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import {Observable} from 'rxjs/Observable';
import { codemirrorModal } from "./ngx-codemirror-modal.interface";

@Injectable()
export class NgxCodemirrorModalService {
  private codemirrorSubject: Subject<codemirrorModal> = new Subject<codemirrorModal>();
  public $confirm: Observable<codemirrorModal> = this.codemirrorSubject.asObservable();

  confirm(confirmValue: codemirrorModal) {
    this.codemirrorSubject.next(confirmValue);
  }
}
