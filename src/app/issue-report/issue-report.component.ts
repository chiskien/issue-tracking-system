import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.scss']
})
export class IssueReportComponent implements OnInit {
  formGroup: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      title: [''],
      description: [''],
      priority: [''],
      type: ['']
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

}
