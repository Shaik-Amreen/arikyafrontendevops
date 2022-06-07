import { HttpClient } from '@angular/common/http'
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router'; import { CommonService } from '../../../services/common.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-attemptcoding',
  templateUrl: './attemptcoding.component.html',
  styleUrls: ['./attemptcoding.component.css']
})
export class AttemptcodingComponent implements OnInit {
  endson: any;

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  @HostListener('document:webkitvisibilitychange', ['$event'])
  @HostListener('document:mozvisibilitychange', ['$event'])
  @HostListener('document:MSvisibilitychange', ['$event'])
  @HostListener('document:visibilitychange', ['$event'])

  fullscreenmode() {
    // if (this.toggleClass == 'ft-minimize') {
    //   this.toggleClass = 'ft-maximize';
    //   this.router.navigate(['/exit'])
    // } else {
    //   this.toggleClass = 'ft-minimize';
    // }
    // console.log(this.toggleClass)
    // console.log("outif", this.toggleClass)
    if (this.toggleClass == 'ft-minimize' && this.msg != "TEST TIME OUT") {
      this.askfullscreen = true;
      if (document.fullscreenElement) {
        this.closeFullscreen();
      }
      this.reload = "block";
      this.msg = "TEST INTERRUPT";
      this.toggleClass = 'ft-maximize';
      // console.log("if", this.toggleClass)
      this.fullscreen = `   You switched the tab for ${this.swaps} times ,
      Remember rating is based on the tab switch .
      Test will end if you try to switch tab more than ${5 - this.swaps + 1} times .
      
      Click Enter To Continue The Test.`
      if (this.swaps > 5) {
        // console.log("endtest")
        this.Endtest();
      }
    }
    else {
      // console.log("inelse", this.toggleClass)
      this.toggleClass = 'ft-minimize';
    }

  }
  language: any = 'py'; loadtestcases: any = false;
  ques: any = {}; question: any = [{ question: 'PLEASE SELECT A QUESTION' }]; ans: any = []; result: any = [[]];
  videoRef: any; startTime: any; showtest: any = false

  clock: any; tempcode: any; minutes: any; seconds: any; previousview: any = false; nextview = false; questionno: any = 1
  editorOptions = {

    theme: 'vs-dark',

    language: (this.language == 'py') ? 'python' : this.language,
    autoIndent: 'full',
    lineNumbers: 'on',
    acceptSuggestionOnEnter: "on"
  };

  code: string
  elem: any;
  swaps: any = 0

  mail: any = sessionStorage.getItem('mail')

  codeModel = {
    language: this.language,
    uri: `a.${this.language}`,
    value: {}
  };




  // ngOnDestroy() {

  //   this.videoRef.pause();
  // }


  msg: any;
  reload: string;
  fullscreen: string;
  noreload: number;
  t: number;
  starttime: any;




  onCodeChanged(value: any) {
    this.result[this.questionno - 1] = []
    this.ans[this.questionno - 1] = value
  }

  toggleClass = '';

  askfullscreen: any = false;


  paramconditions: any = []; paramvalues: any = []
  get: any = false; timeout: any = false; view: any = true


  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService, @Inject(DOCUMENT) private document: any) {
    this.allowloading = false
    this.loadtestcases = false
    this.showtest = false
    this.elem = document.documentElement;
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      this.elem.msRequestFullscreen();
    }
    // console.log("hello")
    this.commonservice.postrequest('http://localhost:4000/Practice/getcodetestquestions', { organisation_id: sessionStorage.getItem("organisation_id"), topic: sessionStorage.getItem('topic'), type: 'code', mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {
        // console.log("hello")
        this.get = true;
        // console.log("resssssssssssssssssssss", res);
        (res.message == 'error') ? (sessionStorage.setItem("codesubmit", "codesubmit"), this.router.navigate(['/student/code'])) : null;
        if (res.message == "TEST TIME OUT") {
          this.askfullscreen = false
          this.timeout = true;
          this.get = false
          this.msg = res.message;
          this.closeFullscreen()
          this.view = false
          // this.swaps = res.swaps;
          this.display = "block";
          return
        }
        else {
          if (!res) { this.router.navigate(['/student/studenthome']) }
          // console.log("this.swaps", res.swaps)
          this.swaps = res.swaps
          if (sessionStorage.getItem('reload') == 'true' || res.swaps > 1) {
            this.closeFullscreen()
            if (sessionStorage.getItem('reload') != 'true' && this.swaps > 1) {
              // this.swaps = res.swaps
              // if(this.swap==2)
              // this.swaps--
              this.updateswaps()
              // console.log("this.swaps---------->", this.swaps)
            }
            if (sessionStorage.getItem('reload') == 'true') {
              // this.swaps 
              this.swaps--
              // console.log("this.swaps", this.swaps)
            }
            if (this.swaps > 5) {
              // console.log("st-Out ")
              this.fullscreen = `   You switched the tab for ${this.swaps} times ,
            Remember rating is based on the tab switch .
            Test will end if you try to switch tab more than ${5 - this.swaps + 1} times .
            
            Click Enter To Continue The Test.`
              this.Endtest();
              this.t = 1
            }
            // this.router.navigate(['/exit'])
            this.askfullscreen = true;
            // this.swaps = res.swaps
            this.reload = "block";
            this.msg = "TEST INTERRUPT";
            this.fullscreen = `   You switched the tab for ${this.swaps} times ,
            Remember rating is based on the tab switch .
            Test will end if you try to switch tab more than ${5 - this.swaps + 1} times .
            
            Click Enter To Continue The Test.` }
          this.starttime = res.starttime
          // console.log("this.starttime", this.starttime)
          this.ques = res.docs; this.minutes = parseInt(res.totaltime) - 1; this.ques.questions.length > 1 ? this.nextview = true : null;
          this.totalques = this.ques.questions.length
          if (!this.ques.quesvisit) {
            this.quesvisit = { visit: { 1: true }, visited: 1, notvisited: this.totalques - 1, answer: {}, answered: 0, notanswered: this.totalques }
            // console.log(this.quesvisit)
          }
          else {
            this.quesvisit = this.ques.quesvisit
          }
          this.ques.questions.forEach((e: any, i: number) => {
            // console.log(e[0].testcases, e)
            let temptest: any = [], tempcondtest: any = []
            e[0].testcases.forEach((t: any, itt: any) => {
              let temparamval: any = []; let tempparamconditions: any = []
              if (itt == 0) { tempparamconditions.push('import sys') }
              t.input.forEach((p: any, ip: any) => {
                temparamval.push(p.invalue)
                // console.log(itt)
                if (itt == 0) { tempparamconditions.push(`param${ip + 1}=sys.argv[${ip + 1}]`) }
                // console.log(tempparamconditions)
              })
              if (tempparamconditions.length != 0) { this.paramconditions.push(tempparamconditions.join('\n')); }
              temptest.push(temparamval)
            })
            this.paramvalues.push(temptest)
            let tempans = e[0].tempcode.filter((f: any) => f.mail == this.mail)
            if (tempans.length == 0) { this.ans[i] = ""; }
            else {
              this.ans[i] = tempans[0][this.mail];
              //  console.log(i)
            }
            this.result[i] = [];
          });
          this.code = this.ans[0]
          this.question = this.ques.questions[0];


          // this.commonservice.postrequest('http://localhost:4000/Practice/getime', { mail: this.mail, organisation_id: sessionStorage.getItem("organisation_id"), topic: this.ques.topic, date: new Date() }).subscribe(
          //   (resp: any) => {

          //     this.startTime = resp.data

          //   }, (errp: any) => { })
          sessionStorage.setItem('reload', 'true')
          this.timer()
          this.clock = setInterval(() => {
            // if (this.minutes == 0 && this.seconds == 1) { clearInterval(this.clock); this.Endtest(); }
            // else if (this.seconds == 1) { this.seconds = 61; this.minutes-- }
            // this.seconds--;
            this.timer()
          }, 1000);

          this.commonservice.postrequest('http://localhost:4000/Practice/savecode',
            { compare: this.ques, quesvisit: this.quesvisit, ans: this.ans, mail: this.mail, starttime: this.starttime, endtime: new Date(), swaps: this.swaps, timeremained: `${this.minutes}.${this.seconds}`, topic: sessionStorage.getItem('topic'), organisation_id: sessionStorage.getItem('organisation_id'), firstime: 'no' }).subscribe(
              (resp: any) => {
              }, (errp: any) => { })

          // this.savecode()
          this.tempcode = setInterval(() => {
            this.savecode()
          }, 60000);
          // if (this.swaps > 5 && this.t != 1) {
          //   this.swaps--;
          //   console.log("1234567890987654321")
          //   this.fullscreen = `Test-Out Count :${this.swaps}. After Total 5 Test-Out Count, Test Will End. Enter Full Screen Mode To Continue Test.`
          //   this.Endtest()
          //   this.noreload = 1
          // }
        }
      },
      (err: any) => { console.log(err) }
    );
  }

  savecode() {
    this.commonservice.postrequest('http://localhost:4000/Practice/savecode',
      { compare: this.ques, quesvisit: this.quesvisit, ans: this.ans, mail: this.mail, starttime: this.starttime, endtime: new Date(), swaps: this.swaps, timeremained: `${this.minutes}.${this.seconds}`, topic: sessionStorage.getItem('topic'), organisation_id: sessionStorage.getItem('organisation_id'), firstime: 'no' }).subscribe(
        (resp: any) => {
          this.ques.endson = resp.endson
          if ((resp.endtime && resp.endtime != "") || new Date(this.ques.endson) <= new Date()) {
            this.askfullscreen = false
            this.timeout = true;
            this.get = false;
            this.msg = "TEST TIME OUT";
            this.view = false;
            // this.swaps = res.swaps;
            this.display = "block";
            this.closeFullscreen()
            clearInterval(this.clock);
            clearInterval(this.tempcode);
          }
        }, (errp: any) => { })
  }

  q(index: any) {
    this.showtest = false
    this.questionno = index + 1;
    this.question = this.ques.questions[index];
    if (this.questionno == 1) { this.previousview = false; this.nextview = true }
    else { this.nextview = true }
    if (this.questionno == this.ques.questions.length) { this.nextview = false; }
    if (this.questionno >= 2) { this.previousview = true }
    this.quesvisit.visit[this.questionno] = true
    this.quesvisit.visited = Object.keys(this.quesvisit.visit).length
    this.quesvisit.notvisited = this.totalques - this.quesvisit.visited
    // console.log("q", this.quesvisit.visited, this.quesvisit.notvisited, this.totalques)
  }

  updateswaps() {
    this.commonservice.postrequest('http://localhost:4000/Practice/updateswaps',
      { mail: this.mail, starttime: this.starttime, endtime: new Date(), swaps: this.swaps, timeremained: `${this.minutes}.${this.seconds}`, topic: sessionStorage.getItem('topic'), organisation_id: sessionStorage.getItem('organisation_id'), type: 'code', quesvisit: this.quesvisit }).subscribe(
        (resp: any) => {
          // mail: this.mail, starttime: this.starttime, endtime: new Date(), swaps: this.swaps, timeremained: `${this.minutes}.${this.seconds}`, topic: sessionStorage.getItem('topic'), organisation_id: sessionStorage.getItem('organisation_id')
          this.swaps = resp.swaps
          // console.log(this.swaps, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;swapssss")
          if (resp.endtime && resp.endtime != "") {
            this.askfullscreen = false
            this.timeout = true;
            this.msg = "TEST TIME OUT";
            this.closeFullscreen()
            this.view = true
            this.get = false;
            // this.swaps = res.swaps;
            this.display = "block";
            clearInterval(this.clock);
            clearInterval(this.tempcode);
          }
        }, (errp: any) => {
        })
  }

  testtimeout() {
    this.closeFullscreen()
    sessionStorage.setItem("codesubmit", "codesubmit")
    this.router.navigate(['/student/code'])
    sessionStorage.removeItem('reload')
  }


  timer() {
    let a: any, b: any, ms, min: any, sec: any
    if (this.minutes <= 0 && this.seconds == 1) { this.Endtest(); }
    this.minutes = parseInt(this.ques.totaltime) - 1;
    a = new Date()
    b = new Date(this.starttime)
    Math.floor((a - b) / 60000) > parseInt(this.ques.totaltime) ? this.Endtest() : null;
    ms = a - b
    min = Math.floor((ms / 60000));
    sec = ((ms % 60000) / 1000).toFixed(0);
    ((this.minutes - min) < 0) ? this.Endtest() : null;
    this.minutes = this.minutes - min;
    // console.log(sec);
    (sec == 0) ? sec = 1 : null;
    this.seconds = 60 - sec
    // console.log(this.minutes, this.seconds)
  }
  saveTestStatus: any = "Submit code"
  allowloading: any = false
  count: any = 0
  getvl(no: any) {
    this.quesvisit.answer[no] = true
    this.quesvisit.answered = Object.keys(this.quesvisit.answer).length
    this.quesvisit.notanswered = this.totalques - this.quesvisit.answered
    // console.log("getvl", this.quesvisit.answered, this.quesvisit.notanswered, this.totalques)
    this.saveTestStatus = "Submitting code please wait ..."
    this.loadtestcases = false
    this.allowloading = true
    let myDiv = document.getElementById("testcases");
    // console.log(myDiv, "divvvvvvvvvvvvvvvvvvvv")
    // console.log(this.codeModel, this.editorOptions)
    // console.log('helllll', this.ans[this.questionno - 1], this.mail, this.question, sessionStorage.getItem('topic'))
    this.commonservice.postrequest('http://localhost:4000/Practice/savecode',
      { compare: this.ques, ans: this.ans, mail: this.mail, organisation_id: sessionStorage.getItem("organisation_id"), firstime: 'no', starttime: this.starttime, endtime: new Date(), swaps: this.swaps, timeremained: `${this.minutes}.${this.seconds}`, topic: sessionStorage.getItem('topic'), type: 'code', quesvisit: this.quesvisit }).subscribe(
        (resp: any) => {
          if (myDiv) {
            myDiv!.scrollTop = myDiv!.scrollHeight;
          }
          // console.log("resp", resp, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", new Date().toString())
          // console.log(this.language)
          // console.log(this.codeModel)
          // console.log(this.editorOptions)
          this.commonservice.postrequest('http://localhost:4000/Practice/testanswer', { organisation_id: sessionStorage.getItem("organisation_id"), ans: this.ans[this.questionno - 1], mail: this.mail, question: this.question[0], paramvalues: this.paramvalues[this.questionno - 1], paramconditions: this.paramconditions[this.questionno - 1], topic: sessionStorage.getItem('topic'), language: this.language }).subscribe(
            (res: any) => {
              // console.log(res,"res")
              this.showtest = true

              this.result[this.questionno - 1] = res.data;
              this.loadtestcases = true
              this.saveTestStatus = "Submit code"
              this.count = res.count
              // console.log(new Date().toString(), "endddddddddddddddddddddd")
            },
            (err: any) => { console.log(err) }
          );
        }, (errp: any) => { })
  }




  modo() {
    this.editorOptions.language = this.language
    this.codeModel.language = this.language
    this.codeModel.uri = `a.${this.language}`
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

  closeFullscreen() {
    // console.log("closefullscreen")
    // this.elem = document.documentElement;
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  display = "none";
  ngOnInit() {
    //   console.log(this.editorOptions)
    //   this.videoRef = document.getElementById('video')
    //   this.setUpCamera()
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

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }

  quesvisit: any;
  totalques: any;


  previous() {
    this.showtest = false
    this.questionno--;
    this.question = this.ques.questions[this.questionno - 1];
    if (this.questionno == 1) { this.previousview = false; this.nextview = true }
    else { this.nextview = true }
    this.quesvisit.visit[this.questionno] = true
    this.quesvisit.visited = Object.keys(this.quesvisit.visit).length
    this.quesvisit.notvisited = this.totalques - this.quesvisit.visited
    // console.log("previous", this.quesvisit.visited, this.quesvisit.notvisited, this.totalques)
  }

  next() {
    this.showtest = false
    this.questionno++; this.question = this.ques.questions[this.questionno - 1];
    if (this.questionno == this.ques.questions.length) { this.nextview = false; }
    if (this.questionno >= 2) { this.previousview = true }
    this.quesvisit.visit[this.questionno] = true
    this.quesvisit.visited = Object.keys(this.quesvisit.visit).length
    this.quesvisit.notvisited = this.totalques - this.quesvisit.visited
    // console.log("next", this.quesvisit.visited, this.quesvisit.notvisited, this.totalques)
  }

  Endtest() {
    // sessionStorage.setItem('reloadcodeopt', 'yes')
    // alert('Congratulations ! you have succesfully completed the test')
    // this.view = false;
    // this.quiz['questions'].forEach((element:any) => {
    //  (element.answeredoption==element.correct)?this.result++:null
    // });
    // this.quiz.result = this.result;
    // console.log("hello world")
    clearInterval(this.clock);
    clearInterval(this.tempcode)
    let rating = { mail: this.mail, starttime: this.starttime, endtime: new Date(), swaps: this.swaps, timeremained: `${this.minutes}.${this.seconds}`, topic: sessionStorage.getItem('topic'), organisation_id: sessionStorage.getItem('organisation_id'), quesvisit: this.quesvisit }
    this.commonservice.postrequest('http://localhost:4000/Practice/ratingstudent', rating).subscribe(
      (res: any) => {
        // console.log("helloooooo")
        this.testtimeout()
      })

    // this.resultview = true;
    // console.log(this.quiz)
    //topiname,list of question and result updated to respective studentdata and result tables by rollno
    //  this.commonservice.postrequest('http://localhost:4000/student/results',{topicname :this.topicname,questions : this.quiz['questions'],result : this.result,endtime : this.quiz['endtime']}).subscribe(
    //     res=>{
    //       console.log(res.msg);
    //     })
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