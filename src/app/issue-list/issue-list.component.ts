import {Component, OnInit} from '@angular/core';
import {IssuesService} from "../issues.service";
import {Issue} from "../issue";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  public issues: Issue[] = [];
  showReportIssue = false;

  constructor(private issueService: IssuesService) {
  }

  ngOnInit(): void {
    this.getIssues();
  }

  onCloseReport(): void {
    this.showReportIssue = false;
    this.getIssues();
  }

  private getIssues(): void {
    this.issues = this.issueService.getPendingIssues();
  }

  openForm() {
    console.log(this.showReportIssue);
    this.showReportIssue = true;
  }
}
