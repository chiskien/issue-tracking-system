import { Component, OnInit } from '@angular/core';
import {IssuesService} from "../issues.service";
import {Issue} from "../issue";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  public issues: Issue[] = [];
  constructor(private issueService: IssuesService) { }

  ngOnInit(): void {
    this.getIssues();
  }
  private getIssues():void {
    this.issues = this.issueService.getPendingIssues();
  }
}
