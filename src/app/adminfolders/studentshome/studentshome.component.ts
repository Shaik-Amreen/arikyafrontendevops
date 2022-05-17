import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentshome',
  templateUrl: './studentshome.component.html',
  styleUrls: ['./studentshome.component.css']
})
export class StudentshomeComponent implements OnInit {



  navdata: any = [{ label: 'search', rlink: '/admin/student/search' }, { label: 'Add students', rlink: '/admin/student/upload' },
  { label: 'Results', rlink: '/admin/student/results' }, { label: 'Promote', rlink: '/admin/student/promote' },
  { label: 'Demote', rlink: '/admin/student/demote' }, { label: 'Backlogs', rlink: '/admin/student/backlogs' },
  { label: 'Placed', rlink: '/admin/student/placed' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
