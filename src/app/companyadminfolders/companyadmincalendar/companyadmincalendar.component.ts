import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule'
@Component({
  selector: 'app-companyadmincalendar',
  templateUrl: './companyadmincalendar.component.html',
  styleUrls: ['./companyadmincalendar.component.css']
})
export class CompanyadmincalendarComponent implements OnInit {
  eventData: any[] = [0]; a: any = { Subject: '', StartTime: new Date(), EndTime: new Date() }
  constructor(private http: HttpClient, private commonservice: CommonService, private router: Router) {
    this.commonservice.postrequest('http://localhost:4000/company/findcalcompany', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        this.eventData = res;
      },
      (err: any) => console.log(err)
    );
  }
  public setView: View = "Month"
  public setDate: Date = new Date()
  public eventObject: EventSettingsModel = {
    allowAdding: false,
    allowEditing: false,
    allowDeleting: false,
  }
  ngOnInit() {
    setTimeout(() => {
      this.eventObject = {
        dataSource: this.eventData
      };
    }, 1000);
  }
}

