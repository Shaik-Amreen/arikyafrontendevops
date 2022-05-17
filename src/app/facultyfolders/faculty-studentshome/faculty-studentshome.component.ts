import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-studentshome',
  templateUrl: './faculty-studentshome.component.html',
  styleUrls: ['./faculty-studentshome.component.css']
})
export class FacultyStudentshomeComponent implements OnInit {



  navdata: any = [{ label: 'search', rlink: '/faculty/student/search' }, { label: 'Add students', rlink: '/faculty/student/upload' },
  { label: 'Results', rlink: '/faculty/student/results' }, { label: 'Promote', rlink: '/faculty/student/promote' },
  { label: 'Demote', rlink: '/faculty/student/demote' }, { label: 'Backlogs', rlink: '/faculty/student/backlogs' },
  { label: 'Placed', rlink: '/faculty/student/placed' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
