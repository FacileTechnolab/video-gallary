import { Injectable } from '@angular/core';
import { NgProgressService } from "ng2-progressbar";

@Injectable()
export class LoaderService {

  constructor(private ngProgressService: NgProgressService) { }

  startLoading() {
    this.ngProgressService.start();
  }

  completeLoading() {
    this.ngProgressService.done();
  }
}
