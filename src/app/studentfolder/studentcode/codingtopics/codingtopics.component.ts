import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit, Inject } from '@angular/core'; import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-codingtopics',
  templateUrl: './codingtopics.component.html',
  styleUrls: ['./codingtopics.component.css']
})

export class CodingtopicsComponent implements OnInit {

  topics: any = [0]; viewRating: any = []; currentValuecharts: any = [];
  searchtopic: any = ''
  currentValue: any = []; codesubmit: any = false
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService, @Inject(DOCUMENT) private document: any) {
    sessionStorage.removeItem('topic');
    this.commonservice.postrequest('http://localhost:4000/Practice/gettopics', { organisation_id: sessionStorage.getItem("organisation_id"), type: 'code', mail: sessionStorage.getItem("mail") }).subscribe(
      (res: any) => {
        if (sessionStorage.getItem("codesubmit")) {
          this.closeFullscreen()
          this.codesubmit = true
          this.displaypopup = true
          this.popup = "CONGRATULATIONS ! YOU HAVE SUCCESSFULLY COMPLETED TEST"
          setTimeout(() => {
            this.codesubmit = false
            this.displaypopup = false;
            sessionStorage.removeItem("codesubmit")
          }, 5000)
        }
        this.topics = res;
        // console.log(res)
        this.topics = this.topics.filter((to: any) => new Date() >= new Date(to.startson))

        this.topics.forEach((data: any) => {
          let s;
          console.log(data, "data")
          if (data.ratings) { s = data.ratings.filter((r: any) => r.mail == sessionStorage.getItem('mail')); }
          if (s && s.length > 0 && s[0].starttime != "-") {
            this.viewRating.push(true);
            this.currentValue.push(parseFloat(s[0].main).toFixed(2))
            this.currentValuecharts.push(parseFloat(s[0].main).toFixed(2))
          }
          else {
            if (new Date() >= new Date(data.startson)) {
              if (new Date() >= new Date(data.startson) && new Date() <= new Date(data.endson)) {
                this.viewRating.push(false)
              }
              else {
                this.viewRating.push('notattempted')
              }
              this.currentValue.push(0)
            }
          }
          // else {
          //   let temprate = element.tempratings.filter((r: any) => r.mail == sessionStorage.getItem('mail'));
          //   console.log(temprate, "---------------------------", element)
          //   if (temprate.length > 0) {
          //     let a: any = new Date()
          //     let b: any = new Date(temprate[0].startime)
          //     console.log(new Date(element.endson), new Date(), Math.floor((a - b) / 60000), parseInt(element.totaltime))
          //     // Math.floor((new Date() - new Date(y.starttime)) / 60000) >= a.totaltime
          //     if (new Date(element.endson) < new Date() || Math.floor((a - b) / 60000) > parseInt(element.totaltime)) {
          //       let rating = { mail: sessionStorage.getItem("mail"), timeremained: `0.0`, topic: element.topic, organisation_id: sessionStorage.getItem('organisation_id') }
          //       // console.log(rating, "ooooooooooooooooooo", new Date(element.endson) > new Date())
          //       this.commonservice.postrequest('http://localhost:4000/Practice/ratingstudent', rating).subscribe(

          //         (resp: any) => {
          //           console.log(resp, "outputttttttttttttttttt coidng tip[ocss")
          //           this.viewRating.push(true);
          //           this.currentValue.push(parseFloat(res.rating).toFixed(2))
          //         })
          //     }
          //     else {
          //       this.viewRating.push(false)
          //       this.currentValue.push(0)
          //     }
          //   }
          //   else {
          //     this.viewRating.push(false)
          //     this.currentValue.push(0)
          //   }

          // }

        });

        this.setOptions()
      },
      (err: any) => { console.log(err) }
    );
  }

  displaypopup = false; popup: any
  top(a: any) {
    if (new Date() > new Date(a.startson) && new Date() < new Date(a.endson)) {
      sessionStorage.setItem('topic', a.topic);
      sessionStorage.setItem('typeoftest', 'code')
      this.router.navigate(['/exit'])
    }
    else { this.displaypopup = true; this.popup = "Test no longer exist"; setTimeout(() => { this.displaypopup = false }, 4000) }
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

  viewcoding(a: any) {
    // console.log("a", a)
    // console.log("new Date().toISOString()", new Date().toISOString(), "a.endson", a.endson)
    if (new Date() > new Date(a.endson)) {
      sessionStorage.setItem('topic', a.topic);
      sessionStorage.setItem('type', 'code')
      this.router.navigate(['student/code/codeview'])
    }
    else { this.displaypopup = true; this.popup = "Wait for test end date to view the test"; setTimeout(() => { this.displaypopup = false }, 4000) }
  }

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

  display = "none";
  ngOnInit() {
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}
