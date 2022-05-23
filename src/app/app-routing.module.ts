import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './adminfolders/admin-home/admin-home.component';
import { AdminNavbarComponent } from './adminfolders/admin-navbar/admin-navbar.component';
import { CalendarComponent } from './adminfolders/calendar/calendar.component';
import { AddeditcodeComponent } from './adminfolders/admincode/addeditcode/addeditcode.component';
import { AddeditquizComponent } from './adminfolders/adminquiz/addeditquiz/addeditquiz.component';
// import { CodequizComponent } from './adminfolders/codequiz/codequiz.component';
// import { ViewcodequizComponent } from './adminfolders/codequiz/viewcodequiz/viewcodequiz.component';
import { DashboardComponent } from './adminfolders/dashboard/dashboard.component';
import { PlacementsdComponent } from './adminfolders/dashboard/placements/placements.component';
import { TrainingComponent } from './adminfolders/dashboard/training/training.component';
import { DemotestudentComponent } from './adminfolders/studentshome/demotestudent/demotestudent.component';
import { PlacedstudentComponent } from './adminfolders/studentshome/placedstudent/placedstudent.component';
import { PromotestudentComponent } from './adminfolders/studentshome/promotestudent/promotestudent.component';
import { SearchstudentComponent } from './adminfolders/studentshome/searchstudent/searchstudent.component';
import { StudentbacklogComponent } from './adminfolders/studentshome/studentbacklog/studentbacklog.component';
import { StudentresultComponent } from './adminfolders/studentshome/studentresult/studentresult.component';
import { StudentshomeComponent } from './adminfolders/studentshome/studentshome.component';
import { UploadstudentComponent } from './adminfolders/studentshome/uploadstudent/uploadstudent.component';
import { AddusersComponent } from './adminfolders/users/addusers/addusers.component';
import { UsersComponent } from './adminfolders/users/users.component';
import { UsersdataComponent } from './adminfolders/users/usersdata/usersdata.component';
import { AddeditcompanyComponent } from './adminfolders/placements/addeditcompany/addeditcompany.component';
import { AddeditplacementsComponent } from './adminfolders/placements/addeditplacements/addeditplacements.component';
import { CompanydetailsComponent } from './adminfolders/placements/companydetails/companydetails.component';
import { PlacementsComponent } from './adminfolders/placements/placements.component';
import { PlacementsdetailsComponent } from './adminfolders/placements/placementsdetails/placementsdetails.component';
import { PlacementshomeComponent } from './adminfolders/placements/placementshome/placementshome.component';
import { AuthGuard } from './auth.guard';
import { FacultyHomeComponent } from './facultyfolders/faculty-home/faculty-home.component';
import { FacultyNavbarComponent } from './facultyfolders/faculty-navbar/faculty-navbar.component';
import { LoginComponent } from './login/login.component';
import { PasscodeComponent } from './signup/passcode/passcode.component';
import { SignpasscodeComponent } from './signup/signpasscode/signpasscode.component';
import { SignupComponent } from './signup/signup.component';
import { StudentHomeComponent } from './studentfolder/student-home/student-home.component';
import { StudentNavbarComponent } from './studentfolder/student-navbar/student-navbar.component';
// import { CodequizdetailsComponent } from './adminfolders/codequiz/codequizdetails/codequizdetails.component';
import { StudentformComponent } from './studentfolder/studentform/studentform.component';
import { StudentdocumentsComponent } from './studentfolder/studentdocuments/studentdocuments.component';
import { StudentoffersComponent } from './studentfolder/studentoffers/studentoffers.component';
import { StudentquizComponent } from './studentfolder/studentquiz/studentquiz.component';
import { StudentcodeComponent } from './studentfolder/studentcode/studentcode.component';
import { ExitbetweenComponent } from './studentfolder/exitbetween/exitbetween.component';
import { QuiztopicsComponent } from './studentfolder/studentquiz/quiztopics/quiztopics.component';
import { AttemptquizComponent } from './studentfolder/studentquiz/attemptquiz/attemptquiz.component';
import { ViewcompletedquizzesComponent } from './studentfolder/studentquiz/viewcompletedquizzes/viewcompletedquizzes.component';
import { CodingtopicsComponent } from './studentfolder/studentcode/codingtopics/codingtopics.component';
import { AttemptcodingComponent } from './studentfolder/studentcode/attemptcoding/attemptcoding.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { StudentcompanyComponent } from './studentfolder/student-home/studentcompany/studentcompany.component';
import { AllcompaniesComponent } from './adminfolders/allcompanies/allcompanies.component';
import { AllcompanieshomeComponent } from './adminfolders/allcompanies/allcompanieshome/allcompanieshome.component';
import { StudentprofileComponent } from './studentfolder/studentprofile/studentprofile.component';
import { AdminstudentprofileComponent } from './adminfolders/studentshome/adminstudentprofile/adminstudentprofile.component';

import { CollegesdataComponent } from './superadmin/collegesdata/collegesdata.component';
import { AddcollegeComponent } from './superadmin/addcollege/addcollege.component';

import { ChangepasswordComponent } from './adminfolders/changepassword/changepassword.component';
import { AdminprofileComponent } from './adminfolders/adminprofile/adminprofile.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ViewcodingtestComponent } from './studentfolder/studentcode/viewcodingtest/viewcodingtest.component';
import { StudenteditComponent } from './studentfolder/studentedit/studentedit.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterloginComponent } from './registration/registerlogin/registerlogin.component';
import { RegisterhomeComponent } from './registration/registerhome/registerhome.component';
import { ReportsComponent } from './adminfolders/reports/reports.component';
import { OverallcodequizComponent } from './adminfolders/reports/trainingreports/overallcodequiz/overallcodequiz.component';
import { CodereportComponent } from './adminfolders/reports/trainingreports/codereport/codereport.component';
import { QuizreportComponent } from './adminfolders/reports/trainingreports/quizreport/quizreport.component';
import { AdmincodeComponent } from './adminfolders/admincode/admincode.component';
import { CodetopicsComponent } from './adminfolders/admincode/codetopics/codetopics.component';
import { QuizadmintopicsComponent } from './adminfolders/adminquiz/quizadmintopics/quizadmintopics.component';
import { CodetopicdetailsComponent } from './adminfolders/admincode/codetopicdetails/codetopicdetails.component';
import { QuiztopicdetailsComponent } from './adminfolders/adminquiz/quizadmintopics/quiztopicdetails/quiztopicdetails.component';
import { CodetopicslistComponent } from './adminfolders/admincode/codetopics/codetopicslist/codetopicslist.component';
import { QuiztopicslistComponent } from './adminfolders/adminquiz/quizadmintopics/quiztopicslist/quiztopicslist.component';
import { PlacementsreportsComponent } from './adminfolders/reports/placementsreports/placementsreports.component';
import { TrainingreportsComponent } from './adminfolders/reports/trainingreports/trainingreports.component';
import { CampusplacementreportsComponent } from './adminfolders/reports/placementsreports/campusplacementreports/campusplacementreports.component';
import { CampuscompanyreportsComponent } from './adminfolders/reports/placementsreports/campuscompanyreports/campuscompanyreports.component';
import { FacultyDashboardComponent } from './facultyfolders/faculty-dashboard/faculty-dashboard.component';
import { FacultyPlacementsdetailsComponent } from './facultyfolders/faculty-placements/faculty-placementsdetails/faculty-placementsdetails.component';
import { FacultyTrainingComponent } from './facultyfolders/faculty-dashboard/faculty-training/faculty-training.component';
import { FacultyReportsComponent } from './facultyfolders/faculty-reports/faculty-reports.component';
import { FacultyTrainingreportsComponent } from './facultyfolders/faculty-reports/faculty-trainingreports/faculty-trainingreports.component';
import { FacultyOverallcodequizComponent } from './facultyfolders/faculty-reports/faculty-trainingreports/faculty-overallcodequiz/faculty-overallcodequiz.component';
import { FacultyCodereportComponent } from './facultyfolders/faculty-reports/faculty-trainingreports/faculty-codereport/faculty-codereport.component';
import { FacultyQuizreportComponent } from './facultyfolders/faculty-reports/faculty-trainingreports/faculty-quizreport/faculty-quizreport.component';
import { FacultyPlacementsreportsComponent } from './facultyfolders/faculty-reports/faculty-placementsreports/faculty-placementsreports.component';
import { FacultyCampusplacementesreportsComponent } from './facultyfolders/faculty-reports/faculty-placementsreports/faculty-campusplacementesreports/faculty-campusplacementesreports.component';
import { FacultyAdmincodeComponent } from './facultyfolders/faculty-admincode/faculty-admincode.component';
import { FacultyCodetopicsComponent } from './facultyfolders/faculty-admincode/faculty-codetopics/faculty-codetopics.component';
import { FacultyCodetopicslistComponent } from './facultyfolders/faculty-admincode/faculty-codetopics/faculty-codetopicslist/faculty-codetopicslist.component';
import { FacultyCodetopicdetailsComponent } from './facultyfolders/faculty-admincode/faculty-codetopicdetails/faculty-codetopicdetails.component';

import { FacultyAddeditquizComponent } from './facultyfolders/faculty-adminquiz/faculty-addeditquiz/faculty-addeditquiz.component';
import { FacultyAddeditcodeComponent } from './facultyfolders/faculty-admincode/faculty-addeditcode/faculty-addeditcode.component';
import { FacultyAdminquizComponent } from './facultyfolders/faculty-adminquiz/faculty-adminquiz.component';
import { FacultyQuizadmintopicsComponent } from './facultyfolders/faculty-adminquiz/faculty-quizadmintopics/faculty-quizadmintopics.component';
import { FacultyQuiztopicdetailsComponent } from './facultyfolders/faculty-adminquiz/faculty-quizadmintopics/faculty-quiztopicdetails/faculty-quiztopicdetails.component';
// import { FacultyCodequizComponent } from './facultyfolders/faculty-codequiz/faculty-codequiz.component';
// import { FacultyCodequizdetailsComponent } from './facultyfolders/faculty-codequiz/faculty-codequizdetails/faculty-codequizdetails.component';
// import { FacultyViewcodequizComponent } from './facultyfolders/faculty-codequiz/faculty-viewcodequiz/faculty-viewcodequiz.component';
import { FacultyCalendarComponent } from './facultyfolders/faculty-calendar/faculty-calendar.component';
import { FacultyStudentshomeComponent } from './facultyfolders/faculty-studentshome/faculty-studentshome.component';
import { FacultySearchstudentComponent } from './facultyfolders/faculty-studentshome/faculty-searchstudent/faculty-searchstudent.component';
import { FacultyAdminstudentprofileComponent } from './facultyfolders/faculty-studentshome/faculty-adminstudentprofile/faculty-adminstudentprofile.component';
import { FacultyPlacementsComponent } from './facultyfolders/faculty-placements/faculty-placements.component';
import { FacultyPlacementshomeComponent } from './facultyfolders/faculty-placements/faculty-placementshome/faculty-placementshome.component';
import { FacultyCompanydetailsComponent } from './facultyfolders/faculty-placements/faculty-companydetails/faculty-companydetails.component';
import { FacultyAllcompaniesComponent } from './facultyfolders/faculty-allcompanies/faculty-allcompanies.component';
import { FacultyAllcompanieshomeComponent } from './facultyfolders/faculty-allcompanies/faculty-allcompanieshome/faculty-allcompanieshome.component';
import { FacultyQuiztopicslistComponent } from './facultyfolders/faculty-adminquiz/faculty-quizadmintopics/faculty-quiztopicslist/faculty-quiztopicslist.component';

import { ArikyahomepageComponent } from './arikyahomepage/arikyahomepage.component';
import { CompanyadminHomeComponent } from './companyadminfolders/companyadmin-home/companyadmin-home.component';
import { CompanyadminNavbarComponent } from './companyadminfolders/companyadmin-navbar/companyadmin-navbar.component';
import { CompanyadmincalendarComponent } from './companyadminfolders/companyadmincalendar/companyadmincalendar.component';
import { CompanyadmindashboardComponent } from './companyadminfolders/companyadmindashboard/companyadmindashboard.component';
import { CompanyadminreportsComponent } from './companyadminfolders/companyadminreports/companyadminreports.component';
import { CompanyadminusersComponent } from './companyadminfolders/companyadminusers/companyadminusers.component';
import { JobprofilesComponent } from './companyadminfolders/jobprofiles/jobprofiles.component';
import { PlacementcyclesComponent } from './companyadminfolders/placementcycles/placementcycles.component';
import { CompanycodingComponent } from './companyadminfolders/companycoding/companycoding.component';
import { CompanyquizComponent } from './companyadminfolders/companyquiz/companyquiz.component';
import { PlacementsdashboardComponent } from './companyadminfolders/companyadmindashboard/placementsdashboard/placementsdashboard.component';
import { TrainingdashboardComponent } from './companyadminfolders/companyadmindashboard/trainingdashboard/trainingdashboard.component';
import { CompanyusersdataComponent } from './companyadminfolders/companyadminusers/companyusersdata/companyusersdata.component';
import { CompanyaddusersComponent } from './companyadminfolders/companyadminusers/companyaddusers/companyaddusers.component';
import { CompanyaddeditquizComponent } from './companyadminfolders/companyquiz/companyaddeditquiz/companyaddeditquiz.component';
import { CompanyquiztopicsComponent } from './companyadminfolders/companyquiz/companyquiztopics/companyquiztopics.component';
import { CompanyquiztopiclistComponent } from './companyadminfolders/companyquiz/companyquiztopics/companyquiztopiclist/companyquiztopiclist.component';
import { CompanyquiztopicdetailsComponent } from './companyadminfolders/companyquiz/companyquiztopics/companyquiztopicdetails/companyquiztopicdetails.component';
import { CompanycodetopicsComponent } from './companyadminfolders/companycoding/companycodetopics/companycodetopics.component';
import { CompanycodetopicslistComponent } from './companyadminfolders/companycoding/companycodetopics/companycodetopicslist/companycodetopicslist.component';
import { CompanycodetopicdetailsComponent } from './companyadminfolders/companycoding/companycodetopicdetails/companycodetopicdetails.component';
import { CompanyaddeditcodeComponent } from './companyadminfolders/companycoding/companyaddeditcode/companyaddeditcode.component';
import { CompanyjobprofilehomeComponent } from './companyadminfolders/jobprofiles/companyjobprofilehome/companyjobprofilehome.component';
import { CompanyplacementshomeComponent } from './companyadminfolders/placementcycles/companyplacementshome/companyplacementshome.component';
import { AddcompanyComponent } from './companyadminfolders/placementcycles/addcompany/addcompany.component';
import { AddplacementsComponent } from './companyadminfolders/placementcycles/addplacements/addplacements.component';
import { CompanyalldetailsComponent } from './companyadminfolders/placementcycles/companyalldetails/companyalldetails.component';
import { PlacementsalldetailsComponent } from './companyadminfolders/placementcycles/placementsalldetails/placementsalldetails.component';
import { CompanytrainingreportsComponent } from './companyadminfolders/companyadminreports/companytrainingreports/companytrainingreports.component';
import { CompanyoverallcodequizreportsComponent } from './companyadminfolders/companyadminreports/companytrainingreports/companyoverallcodequizreports/companyoverallcodequizreports.component';
import { CompanycodereportsComponent } from './companyadminfolders/companyadminreports/companytrainingreports/companycodereports/companycodereports.component';
import { CompanyquizreportsComponent } from './companyadminfolders/companyadminreports/companytrainingreports/companyquizreports/companyquizreports.component';
import { CompanyplacementsreportsComponent } from './companyadminfolders/companyadminreports/companyplacementsreports/companyplacementsreports.component';
import { CompanycampusplacementsreportsComponent } from './companyadminfolders/companyadminreports/companyplacementsreports/companycampusplacementsreports/companycampusplacementsreports.component';
import { PythonComponent } from './studentfolder/python/python.component';
import { AptitudeComponent } from './studentfolder/aptitude/aptitude.component';
import { CprogrammingComponent } from './studentfolder/cprogramming/cprogramming.component';
import { DbmsComponent } from './studentfolder/dbms/dbms.component';
import { JavaComponent } from './studentfolder/java/java.component';
import { NopageComponent } from './nopage/nopage.component';
import { ContactComponent } from './contact/contact.component';
import { OfferstatusComponent } from './adminfolders/offerstatus/offerstatus.component';
// import { v4 as uuidv4} from 'uuid';

const routes: Routes = [
  { path: '', redirectTo: '/arikya', pathMatch: 'full' },
  {
    path: 'superadmin', component: SuperadminComponent, children: [
      { path: '', redirectTo: '/superadmin/addcollege', pathMatch: 'full', },
      { path: 'addcollege', component: AddcollegeComponent, canActivate: [AuthGuard] },
      { path: 'collegesdata', component: CollegesdataComponent }
    ]
    , canActivate: [AuthGuard]
  },
  { path: 'arikya', component: ArikyahomepageComponent, pathMatch: "full" },

  { path: 'login', component: LoginComponent },
  {
    path: 'signup', component: SignupComponent, children: [
      { path: '', component: PasscodeComponent },
      { path: 'verifiedsignup', component: SignpasscodeComponent }
    ]

  },
  { path: 'forgotpassword', component: ForgotpasswordComponent },

  { path: '404', component: NopageComponent },
  { path: "contact", component: ContactComponent },

  {
    path: 'admin', component: AdminNavbarComponent,
    children:
      [
        { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
        { path: 'home', component: AdminHomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },

        {
          path: 'dashboard', component: DashboardComponent,
          children: [
            { path: '', redirectTo: '/admin/dashboard/training', pathMatch: 'full' },
            { path: 'placements', component: PlacementsdComponent, canActivate: [AuthGuard] },
            { path: "training", component: TrainingComponent, canActivate: [AuthGuard] },
          ]
          , canActivate: [AuthGuard]
        },

        {
          path: 'users', component: UsersComponent, children:
            [
              { path: '', component: UsersdataComponent, pathMatch: 'full', canActivate: [AuthGuard] },
              { path: 'addusers', component: AddusersComponent }
            ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'reports', component: ReportsComponent,
          children: [
            {
              path: "training", component: TrainingreportsComponent,
              children: [
                { path: '', redirectTo: '/admin/reports/training/overallreport', pathMatch: 'full' },
                { path: 'overallreport', component: OverallcodequizComponent, canActivate: [AuthGuard] },
                { path: 'codingreport', component: CodereportComponent, canActivate: [AuthGuard] },
                { path: 'quizreport', component: QuizreportComponent }
              ]

              , canActivate: [AuthGuard]
            },
            { path: '', redirectTo: '/admin/reports/training/overallreport', pathMatch: 'full' },
            {
              path: 'placements', component: PlacementsreportsComponent,
              children: [
                { path: '', component: CampusplacementreportsComponent, pathMatch: "full", canActivate: [AuthGuard] },
                { path: 'campuscompanies', component: CampuscompanyreportsComponent, canActivate: [AuthGuard] },
              ]
              , canActivate: [AuthGuard]
            },

          ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'code', component: AdmincodeComponent, children:
            [
              { path: '', redirectTo: '/admin/code/topics', pathMatch: 'full' },
              {
                path: 'topics', component: CodetopicsComponent,
                children: [
                  { path: '', component: CodetopicslistComponent, pathMatch: 'full', canActivate: [AuthGuard] },
                  { path: 'details', component: CodetopicdetailsComponent, canActivate: [AuthGuard] },
                ]
                , canActivate: [AuthGuard]
              },
              { path: "add", component: AddeditcodeComponent, canActivate: [AuthGuard] },
            ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'quiz', component: AdmincodeComponent, children:
            [
              { path: '', redirectTo: '/admin/quiz/topics', pathMatch: 'full' },
              {
                path: 'topics', component: QuizadmintopicsComponent,
                children: [
                  { path: '', component: QuiztopicslistComponent, pathMatch: 'full', canActivate: [AuthGuard] },
                  { path: 'details', component: QuiztopicdetailsComponent, canActivate: [AuthGuard] },
                ]
                , canActivate: [AuthGuard]
              },
              { path: "add", component: AddeditquizComponent, canActivate: [AuthGuard] },
            ]
          , canActivate: [AuthGuard]
        },

        { path: 'adminprofile', component: AdminprofileComponent, canActivate: [AuthGuard] },
        { path: 'admineditprofile', component: AdminprofileComponent, canActivate: [AuthGuard] },
        { path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard] },

        { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
        {
          path: 'student', component: StudentshomeComponent, children: [
            { path: '', redirectTo: '/admin/student/search', pathMatch: 'full' },
            { path: 'search', component: SearchstudentComponent, canActivate: [AuthGuard] },
            { path: 'upload', component: UploadstudentComponent, canActivate: [AuthGuard] },
            { path: 'placed', component: PlacedstudentComponent, canActivate: [AuthGuard] },
            { path: 'backlogs', component: StudentbacklogComponent, canActivate: [AuthGuard] },
            { path: 'results', component: StudentresultComponent, canActivate: [AuthGuard] },
            { path: 'promote', component: PromotestudentComponent, canActivate: [AuthGuard] },
            { path: 'demote', component: DemotestudentComponent, canActivate: [AuthGuard] },
            { path: 'profile', component: AdminstudentprofileComponent, canActivate: [AuthGuard] },
          ]
          , canActivate: [AuthGuard]
        },
        { path: 'studentprofile', component: AdminstudentprofileComponent, canActivate: [AuthGuard] },
        { path: '', component: AdminHomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
        {
          path: 'placements', component: PlacementsComponent,
          children:
            [
              { path: '', component: PlacementshomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
              { path: 'addeditcompany', component: AddeditcompanyComponent, canActivate: [AuthGuard] },
              { path: 'addeditplacements', component: AddeditplacementsComponent, canActivate: [AuthGuard] },
              { path: 'companydetails', component: CompanydetailsComponent, canActivate: [AuthGuard] },
              { path: 'placementsdetails', component: PlacementsdetailsComponent }
            ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'companies', component: AllcompaniesComponent, children: [
            { path: '', component: AllcompanieshomeComponent, pathMatch: 'full' }
          ]
        },
        { path: 'offerstatus', component: OfferstatusComponent, canActivate: [AuthGuard] }
      ]
    , canActivate: [AuthGuard]
  },



  {
    path: 'faculty', component: FacultyNavbarComponent,
    children:
      [
        { path: '', redirectTo: '/faculty/home', pathMatch: 'full' },
        { path: 'home', component: FacultyHomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
        {
          path: 'dashboard', component: FacultyDashboardComponent,
          children: [
            { path: '', redirectTo: '/faculty/dashboard/placements', pathMatch: 'full' },
            { path: 'placements', component: FacultyPlacementsdetailsComponent, canActivate: [AuthGuard] },
            { path: "codequiz", component: FacultyTrainingComponent, canActivate: [AuthGuard] },
          ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'students', component: FacultyStudentshomeComponent,
          children: [
            { path: '', redirectTo: 'faculty/student/search', pathMatch: 'full' },
            { path: 'search', component: FacultySearchstudentComponent, canActivate: [AuthGuard] },
            { path: 'studentprofile', component: FacultyAdminstudentprofileComponent }
          ]
          , canActivate: [AuthGuard]
        },

        {
          path: 'reports', component: FacultyReportsComponent,
          children: [
            {
              path: "training", component: FacultyTrainingreportsComponent,
              children: [
                { path: '', redirectTo: '/faculty/reports/training/overallreport', pathMatch: 'full' },
                { path: 'overallreport', component: FacultyOverallcodequizComponent, canActivate: [AuthGuard] },
                { path: 'codingreport', component: FacultyCodereportComponent, canActivate: [AuthGuard] },
                { path: 'quizreport', component: FacultyQuizreportComponent }
              ]
              , canActivate: [AuthGuard]
            },
            { path: '', redirectTo: '/faculty/reports/placements', pathMatch: 'full' },
            {
              path: 'placements', component: FacultyPlacementsreportsComponent,
              children: [
                { path: '', component: FacultyCampusplacementesreportsComponent, pathMatch: "full", canActivate: [AuthGuard] },

              ]
              , canActivate: [AuthGuard]
            },
          ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'dashboard', component: FacultyDashboardComponent,
          children: [
            { path: '', redirectTo: 'faculty/dashboard/facultyplacements', pathMatch: 'full' },
            { path: 'facultyplacements', component: FacultyPlacementsComponent, canActivate: [AuthGuard] },
            { path: 'facultytraining', component: FacultyTrainingComponent, canActivate: [AuthGuard] },
          ]
          , canActivate: [AuthGuard]
        },

        {
          path: 'code', component: FacultyAdmincodeComponent, children:
            [
              { path: '', redirectTo: '/faculty/code/topics', pathMatch: 'full' },
              {
                path: 'topics', component: FacultyCodetopicsComponent,
                children: [
                  { path: '', component: FacultyCodetopicslistComponent, pathMatch: 'full', canActivate: [AuthGuard] },
                  { path: 'details', component: FacultyCodetopicdetailsComponent, canActivate: [AuthGuard] },
                ]
                , canActivate: [AuthGuard]
              },
              { path: "add", component: FacultyAddeditcodeComponent, canActivate: [AuthGuard] },
            ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'quiz', component: FacultyAdminquizComponent, children:
            [
              { path: '', redirectTo: '/faculty/quiz/topics', pathMatch: 'full' },
              {
                path: 'topics', component: FacultyQuizadmintopicsComponent,
                children: [
                  { path: '', component: FacultyQuiztopicslistComponent, pathMatch: 'full', canActivate: [AuthGuard] },
                  { path: 'details', component: FacultyQuiztopicdetailsComponent, canActivate: [AuthGuard] },
                ]
                , canActivate: [AuthGuard]
              },
              { path: "add", component: FacultyAddeditquizComponent, canActivate: [AuthGuard] },
            ]
          , canActivate: [AuthGuard]
        },
        { path: 'adminprofile', component: AdminprofileComponent, canActivate: [AuthGuard] },
        { path: 'admineditprofile', component: AdminprofileComponent, canActivate: [AuthGuard] },
        { path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard] },

        { path: 'calendar', component: FacultyCalendarComponent, canActivate: [AuthGuard] },
        {
          path: 'student', component: FacultyStudentshomeComponent, children: [
            { path: '', redirectTo: '/faculty/student/search', pathMatch: 'full' },
            { path: 'search', component: FacultySearchstudentComponent, canActivate: [AuthGuard] },
          ]
          , canActivate: [AuthGuard]
        },
        { path: 'studentprofile', component: FacultyAdminstudentprofileComponent, canActivate: [AuthGuard] },
        { path: '', component: FacultyHomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
        {
          path: 'placements', component: FacultyPlacementsComponent,
          children:
            [
              { path: '', component: FacultyPlacementshomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
              { path: 'companydetails', component: FacultyCompanydetailsComponent, canActivate: [AuthGuard] },
              { path: 'placementsdetails', component: FacultyPlacementsdetailsComponent }
            ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'companies', component: FacultyAllcompaniesComponent, children: [
            { path: '', component: FacultyAllcompanieshomeComponent, pathMatch: 'full' }
          ]
        }
      ]
    , canActivate: [AuthGuard]
  },



  {

    path: 'registration/:id/:placementcyclename/:companyname/:organisation_id', component: RegistrationComponent,
    children: [
      { path: '', component: RegisterloginComponent },
      { path: 'registrationhome', component: RegisterhomeComponent, canActivate: [AuthGuard] }
    ]
  }
  ,
  { path: 'studentform', component: StudentformComponent, canActivate: [AuthGuard] },


  {
    path: 'companyadmin', component: CompanyadminNavbarComponent,
    children: [
      { path: '', redirectTo: '/companyadmin/companyadminhome', pathMatch: 'full' },
      { path: 'companyadminhome', component: CompanyadminHomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },


      {
        path: 'companyadmindashboard', component: CompanyadmindashboardComponent,
        children: [
          { path: '', redirectTo: '/companyadmin/companyadmindashboard/placementsdashboard', pathMatch: 'full' },
          { path: 'placementsdashboard', component: PlacementsdashboardComponent, canActivate: [AuthGuard] },
          { path: "codequizdashboard", component: TrainingdashboardComponent, canActivate: [AuthGuard] },
        ]
        , canActivate: [AuthGuard]
      },

      {
        path: 'companyadminreports', component: CompanyadminreportsComponent,
        children: [
          {
            path: "companytraining", component: CompanytrainingreportsComponent,
            children: [
              { path: '', redirectTo: '/companyadmin/companyadminreports/companytraining/overallcodequizreport', pathMatch: 'full' },
              { path: 'overallcodequizreport', component: CompanyoverallcodequizreportsComponent, canActivate: [AuthGuard] },
              { path: 'companycodereport', component: CompanycodereportsComponent, canActivate: [AuthGuard] },
              { path: 'companyquizreport', component: CompanyquizreportsComponent }
            ]

            , canActivate: [AuthGuard]
          },
          { path: '', redirectTo: '/companyadmin/companyadminreports/placementreports', pathMatch: 'full' },
          {
            path: 'placementreports', component: CompanyplacementsreportsComponent,
            children: [
              { path: '', component: CompanycampusplacementsreportsComponent, pathMatch: "full", canActivate: [AuthGuard] },

            ]
            , canActivate: [AuthGuard]
          },

        ]
        , canActivate: [AuthGuard]
      },

      {
        path: 'companyadminusers', component: CompanyadminusersComponent,
        children: [
          { path: '', component: CompanyusersdataComponent, pathMatch: 'full', canActivate: [AuthGuard] },
          { path: 'companyaddusers', component: CompanyaddusersComponent }
        ]
        , canActivate: [AuthGuard]
      },


      { path: 'companyadmincalendar', component: CompanyadmincalendarComponent, pathMatch: 'full', canActivate: [AuthGuard] },


      {
        path: 'companyjobprofiles', component: JobprofilesComponent, children: [
          { path: '', component: CompanyjobprofilehomeComponent, pathMatch: 'full' }
        ]
        , canActivate: [AuthGuard]
      },
      {
        path: 'companyplacementcycles', component: PlacementcyclesComponent,
        children: [
          { path: '', component: CompanyplacementshomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
          { path: 'addcompany', component: AddcompanyComponent, canActivate: [AuthGuard] },
          { path: 'addplacements', component: AddplacementsComponent, canActivate: [AuthGuard] },
          { path: 'companyalldetails', component: CompanyalldetailsComponent, canActivate: [AuthGuard] },
          { path: 'placementalldetails', component: PlacementsalldetailsComponent }
        ]
        , canActivate: [AuthGuard]
      },

      {
        path: 'companycoding', component: CompanycodingComponent,
        children: [
          { path: '', redirectTo: '/companyadmin/companycoding/codetopics', pathMatch: 'full' },
          {
            path: 'codetopics', component: CompanycodetopicsComponent,
            children: [
              { path: '', component: CompanycodetopicslistComponent, pathMatch: 'full', canActivate: [AuthGuard] },
              { path: 'codedetails', component: CompanycodetopicdetailsComponent, canActivate: [AuthGuard] },
            ]
            , canActivate: [AuthGuard]
          },
          { path: 'addcode', component: CompanyaddeditcodeComponent, canActivate: [AuthGuard] },
        ]
        , canActivate: [AuthGuard]
      },

      {
        path: 'companyquiz', component: CompanyquizComponent,
        children: [
          { path: '', redirectTo: '/companyadmin/companyquiz/quiztopics', pathMatch: 'full' },
          {
            path: 'quiztopics', component: CompanyquiztopicsComponent,
            children: [
              { path: '', component: CompanyquiztopiclistComponent, pathMatch: 'full', canActivate: [AuthGuard] },
              { path: 'quizdetails', component: CompanyquiztopicdetailsComponent, canActivate: [AuthGuard] },
            ]
            , canActivate: [AuthGuard]
          },
          { path: 'addquiz', component: CompanyaddeditquizComponent, canActivate: [AuthGuard] },
        ]
      }

    ]
    , canActivate: [AuthGuard]
  },
  {
    path: 'student', component: StudentNavbarComponent, canActivate: [AuthGuard],
    children:
      [
        { path: '', redirectTo: '/student/studenthome', pathMatch: 'full' },
        { path: 'editprofile', component: StudenteditComponent, canActivate: [AuthGuard] },
        { path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard] },
        { path: 'profile', component: StudentprofileComponent, canActivate: [AuthGuard] },
        {
          path: 'studenthome', component: StudentHomeComponent
          // children: [
          //   { path: '', redirectTo: '/student/studenthome', pathMatch: 'full',canActivate:[AuthGuard] },
          //   { path: 'studentcompany', component: StudentcompanyComponent }
          // ]
          , canActivate: [AuthGuard]
        },
        { path: 'studenthome/studentcompany', component: StudentcompanyComponent, canActivate: [AuthGuard] },
        { path: 'documents', component: StudentdocumentsComponent, canActivate: [AuthGuard] },
        { path: 'offers', component: StudentoffersComponent, canActivate: [AuthGuard] },
        { path: 'python', component: PythonComponent, canActivate: [AuthGuard] },
        { path: 'aptitude', component: AptitudeComponent, canActivate: [AuthGuard] },
        { path: 'cprogramming', component: CprogrammingComponent, canActivate: [AuthGuard] },
        { path: 'dbms', component: DbmsComponent, canActivate: [AuthGuard] },
        { path: 'java', component: JavaComponent, canActivate: [AuthGuard] },
        {
          path: 'quiz', component: StudentquizComponent,
          children: [
            { path: '', component: QuiztopicsComponent, canActivate: [AuthGuard] },

            { path: 'viewquiz', component: ViewcompletedquizzesComponent }
          ]
          , canActivate: [AuthGuard]
        },
        {
          path: 'code', component: StudentcodeComponent,
          children: [
            { path: '', component: CodingtopicsComponent, canActivate: [AuthGuard] },
            { path: "codeview", component: ViewcodingtestComponent }
          ]
        }
      ]
  },
  { path: 'student/code/codingattempt', component: AttemptcodingComponent, canActivate: [AuthGuard] },
  { path: 'student/quiz/quizattempt', component: AttemptquizComponent, canActivate: [AuthGuard] },
  { path: 'exit', component: ExitbetweenComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
