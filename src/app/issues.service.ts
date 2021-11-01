import {Injectable} from '@angular/core';
import {Issue} from "./issue";

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  get issues(): Issue[] {
    return this._issues;
  }

  private _issues: Issue[] = [];

  constructor() {
  }

  getPendingIssues(): Issue[] {
    return this._issues.filter(issue => !issue.completed);
  }
}
