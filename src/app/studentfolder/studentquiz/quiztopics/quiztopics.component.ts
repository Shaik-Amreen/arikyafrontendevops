import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit, Inject } from '@angular/core'; import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-quiztopics',
  templateUrl: './quiztopics.component.html',
  styleUrls: ['./quiztopics.component.css']
})
export class QuiztopicsComponent implements OnInit {
  topics: any = [0]; viewRating: any = []; date: any = new Date().toISOString(); currentValuecharts: any = []
  currentValue: any = []; quizsubmit = false
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService, @Inject(DOCUMENT) private document: any) {

    sessionStorage.removeItem('topic');
    this.commonservice.postrequest('http://localhost:4000/Practice/gettopics', { organisation_id: sessionStorage.getItem("organisation_id"), type: 'quiz' }).subscribe(
      (res: any) => {
        if (sessionStorage.getItem("quizsubmit")) {
          // this.elem = document.documentElement;
          this.closeFullscreen()
          this.display = true
          this.quizsubmit = true
          this.popup = "CONGRATULATIONS ! YOU HAVE SUCCESSFULLY COMPLETED TEST"
          setTimeout(() => {
            this.quizsubmit = false;
            this.display = false;
            sessionStorage.removeItem("quizsubmit")
          }, 4000)
        }
        this.topics = res;
        this.topics = this.topics.filter((to: any) => new Date() >= new Date(to.startson))
        // console.log("res", res)
        this.topics.forEach((data: any) => {
          let s;
          // console.log(data,"dataquiz")

          if (data.ratings) { s = data.ratings.filter((r: any) => r.mail == sessionStorage.getItem('mail')); }
          if (s && s.length > 0 && s[0].starttime != "-") {
            this.viewRating.push(true);
            this.currentValue.push(parseFloat(s[0].main).toFixed(2))
            this.currentValuecharts.push(parseFloat(s[0].main).toFixed(2))
          }
          else {
            if (new Date() >= new Date(data.startson) && new Date() <= new Date(data.endson)) {
              this.viewRating.push(false)
            }
            else {
              this.viewRating.push('notattempted')
            }
            this.currentValue.push(0)
          }
        });
        this.setOptions()
      },
      (err: any) => { console.log(err) }
    );
    this.date = new Date().toISOString();
  }
  ngOnInit(): void {
  }

  closeFullscreen() {
    if (this.document) {
      if (this.document.exitFullscreen) {
        // console.log(this.document.exitFullscreen,"this.document.exitFullscreen")
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    }
  }

  display = false; popup: any;
  attendquiz(a: any) {
    if (new Date() > new Date(a.startson) && new Date() < new Date(a.endson)) {
      sessionStorage.setItem('topic', a.topic);
      sessionStorage.setItem('typeoftest', 'quiz')
      this.router.navigate(['/exit'])
    }
    else {
      // console.log(new Date(), new Date(a.startson), new Date(), new Date(a.endson))
      this.display = true; this.popup = "Test no longer exist, you can view the Test";
      setTimeout(() => { this.display = false }, 5000);
    }
  }

  viewquiz(a: any) {
    // console.log("a", a)
    // console.log("new Date().toISOString()", new Date().toISOString(), "a.endson", a.endson)
    if (new Date() > new Date(a.endson)) {
      sessionStorage.setItem('topic', a.topic);
      sessionStorage.setItem('typeoftest', 'quiz')
      this.router.navigate(['student/quiz/viewquiz'])
    }
    else { this.display = true; this.popup = "Wait for test end date to view the test"; setTimeout(() => { this.display = false }, 5000) }
  }

  topicname: any;
  attemptedquizzes: any;


  // quiz() {
  //   this.router.navigate(['student']);
  //   window.location.reload;
  // }

  searchtopic: any = ''

  quizoption: any = {}
  setOptions() {
    this.quizoption = {

      xAxis: {
        type: 'category',
        data: this.currentValuecharts
      },
      yAxis: {
        type: 'value'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: true },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          data: this.currentValuecharts,
          type: 'line'
        }
      ]
    };

  }

  viewresults() {
    // sessionStorage.clear();
    sessionStorage.removeItem('topic');

  }


}
