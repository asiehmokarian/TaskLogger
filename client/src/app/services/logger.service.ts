import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: string[] = [];
  constructor() { }

  add(log: string) {
    this.logs.push(log);
    console.log(log);
  }

  remove(log: string) {
    var index = this.logs.indexOf(log);
    if (index > -1) {
      this.logs.splice(index, 1);
    }
  }

  clear() {
    this.logs = [];
  }
}
