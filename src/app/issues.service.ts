import {Injectable} from '@angular/core';
import {Issue} from "./issue";
import {mockIssue} from "./mock-issue";

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  get issues(): Issue[] {
    this._issues = mockIssue;
    return this._issues;
  }

  private _issues: Issue[] = [];

  constructor() {
  }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue): void {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }
}
