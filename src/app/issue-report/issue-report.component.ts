import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IssuesService} from "../issues.service";

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.scss']
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;
  @Output() formClose = new EventEmitter();
  constructor(private formBuilder: FormBuilder,
              private issueService: IssuesService) {
  }

  private createForm() {
    this.issueForm = this.formBuilder.group({
      title: [''],
      description: [''],
      priority: [''],
      type: ['']
    })
  }

  ngOnInit(): void {
    this.createForm();
  }
  addIssue():void {
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
