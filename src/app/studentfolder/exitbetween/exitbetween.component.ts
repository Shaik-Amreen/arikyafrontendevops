import { Component, OnInit, HostListener } from '@angular/core'; import { Router } from '@angular/router'; import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-exitbetween',
  templateUrl: './exitbetween.component.html',
  styleUrls: ['./exitbetween.component.css']
})
export class ExitbetweenComponent implements OnInit {

  constructor(private router: Router) {
  }


  ngOnInit() {
  }


  readmsg: any = false

  cancel() {

    if (sessionStorage.getItem('typeoftest') == 'code') {
      this.router.navigate(['student/code'])
    }
    if (sessionStorage.getItem('typeoftest') == 'quiz') {
      this.router.navigate(['student/quiz'])
    }
    document.exitFullscreen();
  }
  start() {

    if (sessionStorage.getItem('typeoftest') == 'quiz') {
      // console.log("quiz")
      this.router.navigate(['/student/quiz/quizattempt'])
      // sessionStorage.removeItem('reloadcode')
    }
    else {
      this.router.navigate(['/student/code/codingattempt'])
    }
  }



}

