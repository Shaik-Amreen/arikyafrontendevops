import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { HttpClient } from '@angular/common/http';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-attemptquiz',
  templateUrl: './attemptquiz.component.html',
  styleUrls: ['./attemptquiz.component.css']
})
export class AttemptquizComponent implements OnInit {
  topic: any = sessionStorage.getItem('topic'); tabcount: any = 0
  starttime: any; timeout: any = false; msg: any; askfullscreen: any = false; reload: any
  toggleClass = ''; update: any;
  videoRef: any;

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  @HostListener('document:webkitvisibilitychange', ['$event'])
  @HostListener('document:mozvisibilitychange', ['$event'])
  @HostListener('document:MSvisibilitychange', ['$event'])
  @HostListener('document:visibilitychange', ['$event'])

  fullScreen() {
    // console.log("outif", this.toggleClass)
    if (this.toggleClass == 'ft-minimize') {
      this.askfullscreen = true;
      if (document.fullscreenElement) {
        this.closeFullscreen();
      }
      // this.closeFullscreen();
      this.reload = "block";
      this.msg = "TEST INTERRUPT";
      this.toggleClass = 'ft-maximize';
      // console.log("if", this.toggleClass)
      this.fullscreen = `   You switched the tab for ${this.tabcount} times ,
      Remember rating is based on the tab switch .
      Test will end if you try to switch tab more than ${5 - this.tabcount + 1} times .
      
      Click Enter To Continue The Test.
      `

      if (this.tabcount > 5) {
        // console.log("endtest")
        this.Endtest();
      }
    }
    else {
      // console.log("inelse", this.toggleClass)
      this.toggleClass = 'ft-minimize';
    }
  }

  // if (this.tabcount >= 5) {
  //       console.log("endtest")
  //       this.Endtest();
  //     }

  tab: any = false; fullscreen: any; t: any
  // visibility(){
  //     if (document.hidden) {
  //       this.msg="Test Interrupted Due To Tab Switching";
  //       console.log("Hidden");
  //     }
  //     else {
  //       //do whatever you want
  //       console.log("SHOWN");
  //     }
  // }
  get: any = false; noreload: any;

  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService, @Inject(DOCUMENT) private document: any) {
    this.elem = document.documentElement;
    if (this.elem) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        this.elem.msRequestFullscreen();
      }
    }

    this.commonservice.postrequest('http://localhost:4000/Practice/getquiztestquestions', { organisation_id: sessionStorage.getItem("organisation_id"), topic: sessionStorage.getItem('topic'), type: "quiz", mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {
        // console.log("res----------->", res)
        this.get = true;
        (res.message == 'error') ? (sessionStorage.setItem("quizsubmit", "quizsubmit"), this.router.navigate(['/student/quiz'])) : null;
        if (res.message == "TEST TIME OUT") {
          // console.log("helooooooooooooooooooo")
          this.askfullscreen = false
          this.timeout = true;
          this.get = false
          this.closeFullscreen()
          this.msg = res.message;
          // this.tabcount = res.tabcount;
          this.display = "block";
          return
        }
        else {
          if (!res) { this.router.navigate(['/mitstudent/studenthome']) }
          this.tabcount = res.tabcount
          this.starttime = res.starttime
          this.quiz = res.docs;
          this.totalques = this.quiz.questions.length;
          this.quiz.tempratings.forEach((a: any) => {
            if (a.mail == this.mail) {
              this.quesvisit = a.quesvisit
            }
          });
          // console.log("this.quiz", this.quiz)
          // console.log("this.quiz.tempratings.quesvisit", this.quesvisit)
          if (!this.quesvisit) {
            this.quesvisit = { visit: { 1: true }, visited: 1, notvisited: this.totalques - 1, answer: {}, answered: 0, notanswered: this.totalques }
          }
          else {
            let keys = Object.keys(this.quesvisit.answer)
            keys.forEach((a: any) => {
              this.quiz['questions'][a - 1][0]['answeredoption'] = this.quesvisit.answer[a]
            })
            // console.log("this.quiz['questions']", this.quiz['questions'])
          }
          this.view = true;
          this.test = false;
          this.minutes = parseInt(res.docs.totaltime) - 1;
          this.quiz.questions.length > 1 ? this.nextview = true : null;
          this.quiz['questions'].forEach((element: any) => {
            element.answeredoption = '';
          });
          if (sessionStorage.getItem('reload') == 'true' || this.tabcount > 1) {
            this.closeFullscreen()
            // if (sessionStorage.getItem('reload') != 'true' && this.tabcount >1) {
            //   console.log(" this.tabcount", this.tabcount)
            //   this.quizupdate()
            // }
            if (sessionStorage.getItem('reload') == 'true') {
              this.tabcount--;
              // console.log("this.tabcount", this.tabcount)
            }
            if (this.tabcount > 5) {
              // console.log("st-Out ")
              // this.fullscreen = `

              // You switched the tab for ${this.tabcount} times ,
              // Remember rating is based on the tab switch 
              // Test will end if you try to switch tab more than ${5 - this.tabcount}

              // Test-Out Count :${this.tabcount}. After Total 5 Test-Out Count, Test Will End. Enter Full Screen Mode To Continue Test.`
              this.Endtest();
              // this.t = 1
            }
            // this.router.navigate(['/exit'])
            this.askfullscreen = true;
            // this.tabcount = res.tabcount
            this.reload = "block";
            this.msg = "TEST INTERRUPT";
            this.fullscreen = `   You switched the tab for ${this.tabcount} times ,
            Remember rating is based on the tab switch .
            Test will end if you try to switch tab more than ${5 - this.tabcount + 1} times .
            
            Click Enter To Continue The Test.`
          }
          sessionStorage.setItem('reload', 'true')
          this.timer();
          this.clock = setInterval(() => {
            this.timer()
          }, 1000);
          this.quizupdate()
          this.update = setInterval(() => {
            this.quizupdate()
          }, 60000)
          // if (this.tabcount > 5 && this.t != 1) {
          //   this.tabcount--;
          //   console.log("1234567890987654321")
          //   this.fullscreen = `Test-Out Count :${this.tabcount}. After Total 5 Test-Out Count, Test Will End. Enter Full Screen Mode To Continue Test.`
          //   this.Endtest()
          //   this.noreload = 1
          // }
        }
      }
    )
  }

  ngOnInit() {
    // this.videoRef = document.getElementById('video')
    // this.setUpCamera()
  }



  // setUpCamera() {
  //   navigator.mediaDevices.getUserMedia({
  //     video: { width: 300, height: 250 },
  //     audio: false
  //   }).then(stream => {
  //     this.videoRef.srcObject = stream;
  //     // console.log(stream)
  //   }).catch(err => {

  //     // console.log(err)
  //   })
  // }



  // ngOnDestroy() {

  //   this.videoRef.pause();
  // }


  quizupdate() {
    this.result = 0
    this.quiz['questions'].forEach((element: any) => {
      (element[0].answeredoption == element[0].correct) ? this.result = this.result + 1 : null
    });
    // let count = 0
    // console.log(this.quesvisit)
    let rating = { quesvisit: this.quesvisit, mail: this.mail, tabcount: this.tabcount, starttime: this.starttime, timeremained: `${this.minutes}:${this.seconds}`, topic: sessionStorage.getItem('topic'), marks: this.result, attemptedquiz: this.quiz.questions, organisation_id: sessionStorage.getItem("organisation_id") }
    // console.log("ratings:", rating)
    this.commonservice.postrequest('http://localhost:4000/Practice/quizratingstudentupdate', rating).subscribe(
      (res: any) => {
        // console.log("updated quiz", res, count++);
        this.quiz.endson = res.endson
        if ((res.endtime && res.endtime != "") || new Date(this.quiz.endson) <= new Date()) {
          this.askfullscreen = false
          this.timeout = true;
          // console.log("welocmeeeeeeeeeeeeeeeeeeeeeeeeee")
          this.msg = "TEST TIME OUT";
          this.view = true
          this.get = false;
          // this.tabcount = res.tabcount;
          this.display = "block";
          clearInterval(this.clock);
          clearInterval(this.update);
        }
      })
  }

  timer() {
    let a: any, b: any, ms, min: any, sec: any
    if (this.minutes <= 0 && this.seconds == 1) { this.Endtest(); }
    this.minutes = parseInt(this.quiz.totaltime) - 1;
    a = new Date()
    b = new Date(this.starttime)
    Math.floor((a - b) / 60000) > parseInt(this.quiz.totaltime) ? this.Endtest() : null;
    ms = a - b
    min = Math.floor((ms / 60000));
    sec = ((ms % 60000) / 1000).toFixed(0);
    ((this.minutes - min) < 0) ? this.Endtest() : null;
    this.minutes = this.minutes - min;
    // console.log(sec);
    (sec == 0) ? sec = 1 : null;
    this.seconds = 60 - sec
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

  updateswaps() {
    this.tabcount++;
    this.quizupdate()
  }

  openFullscreen() {
    this.updateswaps()
    this.askfullscreen = false;
    this.reload = ""
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      this.elem.msRequestFullscreen();
    }
  }

  display = "none"; elem: any;

  openModal() {
    this.msg = "END TEST !"
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  mail: any = sessionStorage.getItem('mail')
  quizlist: any;
  clock: any;
  previousview = false;
  nextview = false;
  minutes: any; seconds = 59;
  topicname = "";
  quiz: any;
  questionno = 1;
  answeredoption = "";
  view = false;
  result = 0;
  resultview = false;
  test = true;
  // taketest(){
  //   console.log(this.topicname)
  //    this.commonservice.postrequest('http://localhost:4000/Practice/getquestions',{topic :this.topicname}).subscribe(
  //       res=>{
  //         console.log(res.data);
  //         this.quiz = res.data;
  //         this.view = true ;
  //         this.test = false;

  //         this.minutes = this.quiz['quiztime']-1;
  //         this.quiz['questions'].forEach((element:any) => {
  //           element.answeredoption='';
  //         });
  //         this.quiz.result = 0;
  //         if(this.quiz['questions'].length>1)this.nextview=true;
  //         }
  //     )
  //    this.clock = setInterval(()=>{
  //     if(this.minutes==0 && this.seconds==1){clearInterval(this.clock);this.Endtest();}
  //       else if (this.seconds==1){this.seconds=61;this.minutes--}
  //       this.seconds--;
  //     },1000);
  //     console.log(this.quiz)
  // }

  // taketest(){
  //   console.log(this.topicname)
  //    this.commonservice.postrequest('http://localhost:4000/Practice/getquestions',{topic :this.topicname}).subscribe(
  //       res=>{
  //         console.log(res);
  //         this.quiz = res;
  //         this.view = true ;
  //         this.test = false;

  //         this.minutes = parseInt(this.quiz.totaltime)-1;
  //         this.quiz['questions'].forEach((element:any) => {
  //           element.answeredoption='';
  //         });
  //         this.quiz.result = 0;
  //         if(this.quiz['questions'].length>1)this.nextview=true;
  //         }
  //     )
  //    this.clock = setInterval(()=>{
  //     if(this.minutes==0 && this.seconds==1){clearInterval(this.clock);this.Endtest();}
  //       else if (this.seconds==1){this.seconds=61;this.minutes--}
  //       this.seconds--;
  //     },1000);
  //     console.log(this.quiz)
  // }

  q(index: any) {
    this.questionno = index + 1;
    if (this.questionno == 1) { this.previousview = false; this.nextview = true }
    else { this.nextview = true }
    if (this.questionno == this.quiz['questions'].length) { this.nextview = false; }
    if (this.questionno >= 2) { this.previousview = true }
    this.quesvisit.visit[this.questionno] = true
    this.quesvisit.visited = Object.keys(this.quesvisit.visit).length
    this.quesvisit.notvisited = this.totalques - this.quesvisit.visited
    // console.log("previous", this.quesvisit.visited, this.quesvisit.notvisited, this.totalques)
  }

  quesvisit: any;
  totalques: any;

  answer(no: any, option: any) {
    this.quesvisit.answer[no] = option
    this.quesvisit.answered = Object.keys(this.quesvisit.answer).length
    this.quesvisit.notanswered = this.totalques - this.quesvisit.answered
    // console.log("previous", this.quesvisit.visited, this.quesvisit.notvisited, this.totalques)
    this.quizupdate()
  }

  previous() {
    this.questionno--;
    if (this.questionno == 0) { this.previousview = false; this.nextview = true }
    else { this.nextview = true }
    this.quesvisit.visit[this.questionno] = true
    this.quesvisit.visited = Object.keys(this.quesvisit.visit).length
    this.quesvisit.notvisited = this.totalques - this.quesvisit.visited
    // console.log("previous", this.quesvisit.visited, this.quesvisit.notvisited, this.totalques)
    this.quizupdate()
  }

  next() {
    this.questionno++;
    if (this.questionno == this.quiz['questions'].length) { this.nextview = false; }
    if (this.questionno >= 1) { this.previousview = true }
    this.quesvisit.visit[this.questionno] = true
    this.quesvisit.visited = Object.keys(this.quesvisit.visit).length
    this.quesvisit.notvisited = this.totalques - this.quesvisit.visited
    // console.log("previous", this.quesvisit.visited, this.quesvisit.notvisited, this.totalques)
    this.quizupdate()
    // console.log(this.quiz);
  }

  Endtest() {
    this.result = 0
    // console.log("endit")
    this.view = false;
    // console.log("this.result", this.result)
    this.quiz['questions'].forEach((element: any) => {
      (element[0].answeredoption == element[0].correct) ? this.result = this.result + 1 : null
    });
    clearInterval(this.clock);
    clearInterval(this.update);
    this.resultview = true;
    // console.log(this.quiz)
    //topiname,list of question and result updated to respective studentdata and result tables by rollno
    // let a = 0
    let rating = { mail: this.mail, quesvisit: this.quesvisit, organisation_id: sessionStorage.getItem("organisation_id"), tabcount: this.tabcount, starttime: this.starttime, endtime: new Date(), timeremained: `${this.minutes}.${this.seconds}`, topic: sessionStorage.getItem('topic'), marks: this.result, attemptedquiz: this.quiz.questions }
    // console.log("kuykugvkyhtvyv")
    this.commonservice.postrequest('http://localhost:4000/Practice/quizratingstudent', rating).subscribe(
      (res: any) => {
        // console.log("ressssssssssss", res)
        this.testtimeout()
      }, (err: any) => { console.log(err, "hhhhhhhhhhhhhhhhhhhhh") });
    // (a==1)? alert('Congratulations ! you have successfully compeleted the quiz'):null;
  }

  testtimeout() {
    (sessionStorage.getItem('reload') != 'true') ? this.closeFullscreen() : null;
    sessionStorage.setItem("quizsubmit", "quizsubmit")
    this.router.navigate(['/student/quiz'])
    sessionStorage.removeItem('reload')
  }

  data: any;
  downloadPdf(i: number) {
    const source = `data:application/pdf;base64,${this.data[i].material}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${this.data[i].unit}.pdf`
    link.click();
  }

  outofquiz() {
    sessionStorage.setItem("quizsubmit", "quizsubmit")
    this.router.navigate(['/student/quiz'])
  }

  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: false,
    showToolbar: false,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => {  },
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  };
}




