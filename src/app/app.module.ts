import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DayService, MonthService, RecurrenceEditorModule, ScheduleModule, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptor } from './token.interceptor';
// import { Moment } from 'moment';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { CommonService } from './services/common.service';
import { LoginComponent } from './login/login.component';
import { AdminNavbarComponent } from './adminfolders/admin-navbar/admin-navbar.component';
import { FacultyNavbarComponent } from './facultyfolders/faculty-navbar/faculty-navbar.component';
import { StudentNavbarComponent } from './studentfolder/student-navbar/student-navbar.component';
import { CompanyadminNavbarComponent } from './companyadminfolders/companyadmin-navbar/companyadmin-navbar.component';
import { CompanyempNavbarComponent } from './companyempfolders/companyemp-navbar/companyemp-navbar.component';
import { CompanyempHomeComponent } from './companyempfolders/companyemp-home/companyemp-home.component';
import { AdminHomeComponent } from './adminfolders/admin-home/admin-home.component';
import { FacultyHomeComponent } from './facultyfolders/faculty-home/faculty-home.component';
import { StudentHomeComponent } from './studentfolder/student-home/student-home.component';
import { CompanyadminHomeComponent } from './companyadminfolders/companyadmin-home/companyadmin-home.component';
import { SignupComponent } from './signup/signup.component';
import { PasscodeComponent } from './signup/passcode/passcode.component';
import { SignpasscodeComponent } from './signup/signpasscode/signpasscode.component';
import { InputformsComponent } from './inputforms/inputforms.component';
import { DashboardComponent } from './adminfolders/dashboard/dashboard.component';
import { PlacementsdComponent } from './adminfolders/dashboard/placements/placements.component';
import { TrainingComponent } from './adminfolders/dashboard/training/training.component';
import { UsersComponent } from './adminfolders/users/users.component';
import { UsersdataComponent } from './adminfolders/users/usersdata/usersdata.component';
import { AddusersComponent } from './adminfolders/users/addusers/addusers.component';
import { CalendarComponent } from './adminfolders/calendar/calendar.component';
// import { CodequizComponent } from './adminfolders/codequiz/codequiz.component';
import { AddeditcodeComponent } from './adminfolders/admincode/addeditcode/addeditcode.component';
import { AddeditquizComponent } from './adminfolders/adminquiz/addeditquiz/addeditquiz.component';
// import { ViewcodequizComponent } from './adminfolders/codequiz/viewcodequiz/viewcodequiz.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { StudentshomeComponent } from './adminfolders/studentshome/studentshome.component';
import { SearchstudentComponent } from './adminfolders/studentshome/searchstudent/searchstudent.component';
import { UploadstudentComponent } from './adminfolders/studentshome/uploadstudent/uploadstudent.component';
import { StudentbacklogComponent } from './adminfolders/studentshome/studentbacklog/studentbacklog.component';
import { StudentresultComponent } from './adminfolders/studentshome/studentresult/studentresult.component';
import { PromotestudentComponent } from './adminfolders/studentshome/promotestudent/promotestudent.component';
import { DemotestudentComponent } from './adminfolders/studentshome/demotestudent/demotestudent.component';
import { PlacedstudentComponent } from './adminfolders/studentshome/placedstudent/placedstudent.component';
import { AddeditplacementsComponent } from './adminfolders/placements/addeditplacements/addeditplacements.component';
import { AddeditcompanyComponent } from './adminfolders/placements/addeditcompany/addeditcompany.component';
import { PlacementsComponent } from './adminfolders/placements/placements.component';
import { PlacementshomeComponent } from './adminfolders/placements/placementshome/placementshome.component';
import { PlacementsdetailsComponent } from './adminfolders/placements/placementsdetails/placementsdetails.component';
import { CompanydetailsComponent } from './adminfolders/placements/companydetails/companydetails.component';
// import { CodequizdetailsComponent } from './adminfolders/codequiz/codequizdetails/codequizdetails.component';

import { AllcompaniesComponent } from './adminfolders/allcompanies/allcompanies.component';
import { AllcompanieshomeComponent } from './adminfolders/allcompanies/allcompanieshome/allcompanieshome.component';
import { AllcompaniesdataComponent } from './adminfolders/allcompanies/allcompaniesdata/allcompaniesdata.component'
import { StudentformComponent } from './studentfolder/studentform/studentform.component';
import { StudentdocumentsComponent } from './studentfolder/studentdocuments/studentdocuments.component';
import { StudentoffersComponent } from './studentfolder/studentoffers/studentoffers.component';
import { StudentquizComponent } from './studentfolder/studentquiz/studentquiz.component';
import { StudentcodeComponent } from './studentfolder/studentcode/studentcode.component';
import { QuiztopicsComponent } from './studentfolder/studentquiz/quiztopics/quiztopics.component';
import { ViewcompletedquizzesComponent } from './studentfolder/studentquiz/viewcompletedquizzes/viewcompletedquizzes.component';
import { AttemptquizComponent } from './studentfolder/studentquiz/attemptquiz/attemptquiz.component';
import { CodingtopicsComponent } from './studentfolder/studentcode/codingtopics/codingtopics.component';
import { AttemptcodingComponent } from './studentfolder/studentcode/attemptcoding/attemptcoding.component';
import { ExitbetweenComponent } from './studentfolder/exitbetween/exitbetween.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { StudentcompanyComponent } from './studentfolder/student-home/studentcompany/studentcompany.component';
import { StudentfolderComponent } from './studentfolder/studentfolder.component';
import { StudentprofileComponent } from './studentfolder/studentprofile/studentprofile.component';
import { AdminstudentprofileComponent } from './adminfolders/studentshome/adminstudentprofile/adminstudentprofile.component';

import { ChangepasswordComponent } from './adminfolders/changepassword/changepassword.component';
import { AdminprofileComponent } from './adminfolders/adminprofile/adminprofile.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ViewcodingtestComponent } from './studentfolder/studentcode/viewcodingtest/viewcodingtest.component';
import { StudenteditComponent } from './studentfolder/studentedit/studentedit.component';

import { AddcollegeComponent } from './superadmin/addcollege/addcollege.component';
import { CollegesdataComponent } from './superadmin/collegesdata/collegesdata.component';
import { RegisterhomeComponent } from './registration/registerhome/registerhome.component';
import { RegisterloginComponent } from './registration/registerlogin/registerlogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReportsComponent } from './adminfolders/reports/reports.component';
import { OverallcodequizComponent } from './adminfolders/reports/trainingreports/overallcodequiz/overallcodequiz.component';
import { CodereportComponent } from './adminfolders/reports/trainingreports/codereport/codereport.component';
import { QuizreportComponent } from './adminfolders/reports/trainingreports/quizreport/quizreport.component';
import { ExportExcelService } from './services/export-excel.service';
import { CodetopicsComponent } from './adminfolders/admincode/codetopics/codetopics.component';
import { QuizadmintopicsComponent } from './adminfolders/adminquiz/quizadmintopics/quizadmintopics.component';
import { AdmincodeComponent } from './adminfolders/admincode/admincode.component';
import { AdminquizComponent } from './adminfolders/adminquiz/adminquiz.component';
import { QuiztopicdetailsComponent } from './adminfolders/adminquiz/quizadmintopics/quiztopicdetails/quiztopicdetails.component';
import { CodetopicdetailsComponent } from './adminfolders/admincode/codetopicdetails/codetopicdetails.component';
import { CodetopicslistComponent } from './adminfolders/admincode/codetopics/codetopicslist/codetopicslist.component';
import { QuiztopicslistComponent } from './adminfolders/adminquiz/quizadmintopics/quiztopicslist/quiztopicslist.component';
import { PlacementsreportsComponent } from './adminfolders/reports/placementsreports/placementsreports.component';
import { TrainingreportsComponent } from './adminfolders/reports/trainingreports/trainingreports.component';
import { CampusplacementreportsComponent } from './adminfolders/reports/placementsreports/campusplacementreports/campusplacementreports.component';
import { CampuscompanyreportsComponent } from './adminfolders/reports/placementsreports/campuscompanyreports/campuscompanyreports.component';
import { FacultyAdmincodeComponent } from './facultyfolders/faculty-admincode/faculty-admincode.component';
import { FacultyAdminprofileComponent } from './facultyfolders/faculty-adminprofile/faculty-adminprofile.component';
import { FacultyAdminquizComponent } from './facultyfolders/faculty-adminquiz/faculty-adminquiz.component';
import { FacultyAllcompaniesComponent } from './facultyfolders/faculty-allcompanies/faculty-allcompanies.component';
import { FacultyCalendarComponent } from './facultyfolders/faculty-calendar/faculty-calendar.component';
// import { FacultyCodequizComponent } from './facultyfolders/faculty-codequiz/faculty-codequiz.component';
import { FacultyDashboardComponent } from './facultyfolders/faculty-dashboard/faculty-dashboard.component';
import { FacultyPlacementsComponent } from './facultyfolders/faculty-placements/faculty-placements.component';
import { FacultyReportsComponent } from './facultyfolders/faculty-reports/faculty-reports.component';
import { FacultyStudentshomeComponent } from './facultyfolders/faculty-studentshome/faculty-studentshome.component';
import { FacultyCodetopicdetailsComponent } from './facultyfolders/faculty-admincode/faculty-codetopicdetails/faculty-codetopicdetails.component';
import { FacultyCodetopicsComponent } from './facultyfolders/faculty-admincode/faculty-codetopics/faculty-codetopics.component';
import { FacultyCodetopicslistComponent } from './facultyfolders/faculty-admincode/faculty-codetopics/faculty-codetopicslist/faculty-codetopicslist.component';
import { FacultyAddeditquizComponent } from './facultyfolders/faculty-adminquiz/faculty-addeditquiz/faculty-addeditquiz.component';
import { FacultyQuizadmintopicsComponent } from './facultyfolders/faculty-adminquiz/faculty-quizadmintopics/faculty-quizadmintopics.component';
import { FacultyQuiztopicdetailsComponent } from './facultyfolders/faculty-adminquiz/faculty-quizadmintopics/faculty-quiztopicdetails/faculty-quiztopicdetails.component';
import { FacultyAllcompaniesdataComponent } from './facultyfolders/faculty-allcompanies/faculty-allcompaniesdata/faculty-allcompaniesdata.component';
// import { FacultyCodequizdetailsComponent } from './facultyfolders/faculty-codequiz/faculty-codequizdetails/faculty-codequizdetails.component';
// import { FacultyViewcodequizComponent } from './facultyfolders/faculty-codequiz/faculty-viewcodequiz/faculty-viewcodequiz.component';
import { FacultyTrainingComponent } from './facultyfolders/faculty-dashboard/faculty-training/faculty-training.component';
import { FacultyCompanydetailsComponent } from './facultyfolders/faculty-placements/faculty-companydetails/faculty-companydetails.component';
import { FacultyPlacementsdetailsComponent } from './facultyfolders/faculty-placements/faculty-placementsdetails/faculty-placementsdetails.component';
import { FacultyPlacementshomeComponent } from './facultyfolders/faculty-placements/faculty-placementshome/faculty-placementshome.component';
import { FacultyPlacementsreportsComponent } from './facultyfolders/faculty-reports/faculty-placementsreports/faculty-placementsreports.component';
import { FacultyTrainingreportsComponent } from './facultyfolders/faculty-reports/faculty-trainingreports/faculty-trainingreports.component';
import { FacultyCampusplacementesreportsComponent } from './facultyfolders/faculty-reports/faculty-placementsreports/faculty-campusplacementesreports/faculty-campusplacementesreports.component';
import { FacultyCodereportComponent } from './facultyfolders/faculty-reports/faculty-trainingreports/faculty-codereport/faculty-codereport.component';
import { FacultyOverallcodequizComponent } from './facultyfolders/faculty-reports/faculty-trainingreports/faculty-overallcodequiz/faculty-overallcodequiz.component';
import { FacultyQuizreportComponent } from './facultyfolders/faculty-reports/faculty-trainingreports/faculty-quizreport/faculty-quizreport.component';
import { FacultyAdminstudentprofileComponent } from './facultyfolders/faculty-studentshome/faculty-adminstudentprofile/faculty-adminstudentprofile.component';
import { FacultySearchstudentComponent } from './facultyfolders/faculty-studentshome/faculty-searchstudent/faculty-searchstudent.component';
import { FacultyAddeditcodeComponent } from './facultyfolders/faculty-admincode/faculty-addeditcode/faculty-addeditcode.component';
import { FacultyAllcompanieshomeComponent } from './facultyfolders/faculty-allcompanies/faculty-allcompanieshome/faculty-allcompanieshome.component';
import { FacultyQuiztopicslistComponent } from './facultyfolders/faculty-adminquiz/faculty-quizadmintopics/faculty-quiztopicslist/faculty-quiztopicslist.component';
import { ArikyahomepageComponent } from './arikyahomepage/arikyahomepage.component';
import { CompanyadmindashboardComponent } from './companyadminfolders/companyadmindashboard/companyadmindashboard.component';
import { CompanyadminreportsComponent } from './companyadminfolders/companyadminreports/companyadminreports.component';
import { PlacementcyclesComponent } from './companyadminfolders/placementcycles/placementcycles.component';
import { JobprofilesComponent } from './companyadminfolders/jobprofiles/jobprofiles.component';
import { CompanyadmincalendarComponent } from './companyadminfolders/companyadmincalendar/companyadmincalendar.component';
import { CompanyadminusersComponent } from './companyadminfolders/companyadminusers/companyadminusers.component';
import { CompanycodingComponent } from './companyadminfolders/companycoding/companycoding.component';
import { CompanyquizComponent } from './companyadminfolders/companyquiz/companyquiz.component';
import { PlacementsdashboardComponent } from './companyadminfolders/companyadmindashboard/placementsdashboard/placementsdashboard.component';
import { TrainingdashboardComponent } from './companyadminfolders/companyadmindashboard/trainingdashboard/trainingdashboard.component';
import { CompanyaddusersComponent } from './companyadminfolders/companyadminusers/companyaddusers/companyaddusers.component';
import { CompanyusersdataComponent } from './companyadminfolders/companyadminusers/companyusersdata/companyusersdata.component';
import { CompanyquiztopicsComponent } from './companyadminfolders/companyquiz/companyquiztopics/companyquiztopics.component';
import { CompanyaddeditquizComponent } from './companyadminfolders/companyquiz/companyaddeditquiz/companyaddeditquiz.component';
import { CompanyquiztopiclistComponent } from './companyadminfolders/companyquiz/companyquiztopics/companyquiztopiclist/companyquiztopiclist.component';
import { CompanyquiztopicdetailsComponent } from './companyadminfolders/companyquiz/companyquiztopics/companyquiztopicdetails/companyquiztopicdetails.component';
import { CompanyaddeditcodeComponent } from './companyadminfolders/companycoding/companyaddeditcode/companyaddeditcode.component';
import { CompanycodetopicdetailsComponent } from './companyadminfolders/companycoding/companycodetopicdetails/companycodetopicdetails.component';
import { CompanycodetopicsComponent } from './companyadminfolders/companycoding/companycodetopics/companycodetopics.component';
import { CompanycodetopicslistComponent } from './companyadminfolders/companycoding/companycodetopics/companycodetopicslist/companycodetopicslist.component';
import { CompanyjobprofiledataComponent } from './companyadminfolders/jobprofiles/companyjobprofiledata/companyjobprofiledata.component';
import { CompanyjobprofilehomeComponent } from './companyadminfolders/jobprofiles/companyjobprofilehome/companyjobprofilehome.component';
import { AddcompanyComponent } from './companyadminfolders/placementcycles/addcompany/addcompany.component';
import { AddplacementsComponent } from './companyadminfolders/placementcycles/addplacements/addplacements.component';
import { CompanyalldetailsComponent } from './companyadminfolders/placementcycles/companyalldetails/companyalldetails.component';
import { PlacementsalldetailsComponent } from './companyadminfolders/placementcycles/placementsalldetails/placementsalldetails.component';

import { CompanyplacementshomeComponent } from './companyadminfolders/placementcycles/companyplacementshome/companyplacementshome.component';
import { CompanyplacementsreportsComponent } from './companyadminfolders/companyadminreports/companyplacementsreports/companyplacementsreports.component';
import { CompanytrainingreportsComponent } from './companyadminfolders/companyadminreports/companytrainingreports/companytrainingreports.component';
import { CompanycampusplacementsreportsComponent } from './companyadminfolders/companyadminreports/companyplacementsreports/companycampusplacementsreports/companycampusplacementsreports.component';
import { CompanycodereportsComponent } from './companyadminfolders/companyadminreports/companytrainingreports/companycodereports/companycodereports.component';
import { CompanyoverallcodequizreportsComponent } from './companyadminfolders/companyadminreports/companytrainingreports/companyoverallcodequizreports/companyoverallcodequizreports.component';
import { CompanyquizreportsComponent } from './companyadminfolders/companyadminreports/companytrainingreports/companyquizreports/companyquizreports.component';
import { PythonComponent } from './studentfolder/python/python.component';
import { AptitudeComponent } from './studentfolder/aptitude/aptitude.component';
import { CprogrammingComponent } from './studentfolder/cprogramming/cprogramming.component';
import { DbmsComponent } from './studentfolder/dbms/dbms.component';
import { JavaComponent } from './studentfolder/java/java.component';
import { RichTextEditorComponent } from './adminfolders/rich-text-editor/rich-text-editor.component';
import { ContactComponent } from './contact/contact.component';
import { NopageComponent } from './nopage/nopage.component';
import { OfferstatusComponent } from './adminfolders/offerstatus/offerstatus.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
  declarations: [

    AllcompaniesComponent,
    StudentcompanyComponent,
    AppComponent,
    LoginComponent,
    AdminNavbarComponent,
    FacultyNavbarComponent,
    StudentNavbarComponent,
    CompanyadminNavbarComponent,
    CompanyempNavbarComponent,
    CompanyempHomeComponent,
    AdminHomeComponent,
    FacultyHomeComponent,
    StudentHomeComponent,
    CompanyadminHomeComponent,
    SignupComponent,
    PasscodeComponent,
    SignpasscodeComponent,
    InputformsComponent,
    DashboardComponent,
    PlacementsdComponent,
    TrainingComponent,
    UsersComponent,
    UsersdataComponent,
    AddusersComponent,
    CalendarComponent,
    // CodequizComponent,
    AddeditcodeComponent,
    AddeditquizComponent,
    // ViewcodequizComponent,
    StudentshomeComponent,
    SearchstudentComponent,
    UploadstudentComponent,
    StudentbacklogComponent,
    StudentresultComponent,
    PromotestudentComponent,
    DemotestudentComponent,

    PlacedstudentComponent,
    AddeditplacementsComponent,
    AddeditcompanyComponent,
    PlacementsComponent,
    PlacementshomeComponent,
    PlacementsdetailsComponent,
    CompanydetailsComponent,
    // CodequizdetailsComponent,
    StudentformComponent,
    StudentdocumentsComponent,
    StudentoffersComponent,
    StudentquizComponent,
    StudentcodeComponent,
    QuiztopicsComponent,
    ViewcompletedquizzesComponent,
    AttemptquizComponent,
    CodingtopicsComponent,
    AttemptcodingComponent,
    ExitbetweenComponent,
    ForgotpasswordComponent,
    AllcompanieshomeComponent,
    AllcompaniesdataComponent,
    StudentfolderComponent,
    StudentprofileComponent,
    AdminstudentprofileComponent,
    ChangepasswordComponent,
    AdminprofileComponent,
    SuperadminComponent,
    ViewcodingtestComponent,
    StudenteditComponent,

    AddcollegeComponent,
    CollegesdataComponent,


    RegisterhomeComponent,
    RegisterloginComponent,
    RegistrationComponent,
    ReportsComponent,
    OverallcodequizComponent,
    CodereportComponent,
    QuizreportComponent,
    CodetopicsComponent,
    QuizadmintopicsComponent,
    AdmincodeComponent,
    AdminquizComponent,
    QuiztopicdetailsComponent,
    CodetopicdetailsComponent,
    CodetopicslistComponent,
    QuiztopicslistComponent,
    PlacementsreportsComponent,
    TrainingreportsComponent,
    CampusplacementreportsComponent,
    CampuscompanyreportsComponent,
    FacultyAdmincodeComponent,
    FacultyAdminprofileComponent,
    FacultyAdminquizComponent,
    FacultyAllcompaniesComponent,
    FacultyCalendarComponent,
    // FacultyCodequizComponent,
    FacultyDashboardComponent,
    FacultyPlacementsComponent,
    FacultyReportsComponent,
    FacultyStudentshomeComponent,
    FacultyCodetopicdetailsComponent,
    FacultyCodetopicsComponent,
    FacultyCodetopicslistComponent,
    FacultyAddeditquizComponent,
    FacultyQuizadmintopicsComponent,
    FacultyQuiztopicdetailsComponent,
    FacultyAllcompaniesdataComponent,
    // FacultyCodequizdetailsComponent,
    // FacultyViewcodequizComponent,
    FacultyTrainingComponent,
    FacultyCompanydetailsComponent,
    FacultyPlacementsdetailsComponent,
    FacultyPlacementshomeComponent,
    FacultyPlacementsreportsComponent,
    FacultyTrainingreportsComponent,
    FacultyCampusplacementesreportsComponent,
    FacultyCodereportComponent,
    FacultyOverallcodequizComponent,
    FacultyQuizreportComponent,
    FacultyAdminstudentprofileComponent,
    FacultySearchstudentComponent,
    FacultyAddeditcodeComponent,
    FacultyAllcompanieshomeComponent,
    FacultyQuiztopicslistComponent,
    ArikyahomepageComponent,
    CompanyadmindashboardComponent,
    CompanyadminreportsComponent,
    PlacementcyclesComponent,
    JobprofilesComponent,
    CompanyadmincalendarComponent,
    CompanyadminusersComponent,
    CompanycodingComponent,
    CompanyquizComponent,
    PlacementsdashboardComponent,
    TrainingdashboardComponent,
    CompanyaddusersComponent,
    CompanyusersdataComponent,
    CompanyaddeditquizComponent,

    CompanyquiztopicdetailsComponent,

    CompanyquiztopicsComponent,
    CompanyquiztopiclistComponent,
    CompanyaddeditcodeComponent,
    CompanycodetopicdetailsComponent,
    CompanycodetopicsComponent,
    CompanycodetopicslistComponent,
    CompanyjobprofiledataComponent,
    CompanyjobprofilehomeComponent,
    AddcompanyComponent,
    AddplacementsComponent,
    CompanyalldetailsComponent,
    PlacementsalldetailsComponent,

    CompanyplacementshomeComponent,
    CompanyplacementsreportsComponent,
    CompanytrainingreportsComponent,
    CompanycampusplacementsreportsComponent,
    CompanycodereportsComponent,
    CompanyoverallcodequizreportsComponent,
    CompanyquizreportsComponent,
    PythonComponent,
    AptitudeComponent,
    CprogrammingComponent,
    DbmsComponent,
    JavaComponent,
    RichTextEditorComponent,
    ContactComponent,
    NopageComponent,
    OfferstatusComponent,


  ]
  ,
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScheduleModule,
    RecurrenceEditorModule,
    FlexLayoutModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    MonacoEditorModule.forRoot(),
    FullCalendarModule,
    AngularEditorModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DayService, WeekService, CommonService
    , WorkWeekService, MonthService, AuthService, ExportExcelService, AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
