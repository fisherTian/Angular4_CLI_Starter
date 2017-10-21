import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import {Observable} from 'rxjs/Observable';
import { codemirrorModal } from "./ngx-codemirror-modal.interface";

@Injectable()
export class NgxCodemirrorModalService {
  private codemirrorSubject: Subject<codemirrorModal> = new Subject<codemirrorModal>();
  public $codemirror: Observable<codemirrorModal> = this.codemirrorSubject.asObservable();

  codemirror(codemirrorValue: codemirrorModal) {
    this.codemirrorSubject.next(codemirrorValue);
  }
}
