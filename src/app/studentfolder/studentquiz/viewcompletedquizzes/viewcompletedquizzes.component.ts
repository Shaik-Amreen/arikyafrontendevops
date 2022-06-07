import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-viewcompletedquizzes',
  templateUrl: './viewcompletedquizzes.component.html',
  styleUrls: ['./viewcompletedquizzes.component.css']
})
export class ViewcompletedquizzesComponent {

  quizdata: any = []; score: any = 0; topic: any = sessionStorage.getItem('topic');
  quizdetails: any; starttime: any; startdate: any; endtime: any; enddate: any
  constructor(private http: HttpClient, private commonservice: CommonService) {
    this.commonservice.postrequest('http://localhost:4000/Practice/viewattemptedquiz', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail'), topic: sessionStorage.getItem('topic') }).subscribe(
      (res: any) => {
        this.score = res.data
        // console.log(res, "ressssssssssssssss")
        this.quizdata = res.data.attemptedquiz;
        // console.log(this.quizdata, ";;;;;;;;;;;;;;;;;;;")
        this.quizdetails = res.details
        // console.log(this.score.endtime, this.score.starttime)
        if (this.score.starttime = "-") {
          this.starttime = ""
          this.startdate = "Not Attempted"
          this.endtime = ""
          this.enddate = "Not Attempted"
          this.score.rank = "-"
        }
        else {
          this.starttime = new Date(this.score.starttime).toLocaleTimeString()
          this.startdate = new Date(this.score.starttime).toLocaleDateString()
          this.endtime = new Date(this.score.endtime).toLocaleTimeString()
          this.enddate = new Date(this.score.endtime).toLocaleDateString()
        }
        // console.log("this.quizdetails", this.quizdetails);
        // console.log("this.quizdata", this.quizdata);
      })
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
        'toggleEditorMode',
      ]
    ]
  };
}


// attempt(){
//    this.commonservice.postrequest('http://localhost:4000/Practice/viewattemptedquiz',{ organisation_id: sessionStorage.getItem("organisation_id"),rollno: "19691A0559", topicname: this.quiztopic }).subscribe(
//      (res:any)=> {
//         this.quizdata = res.data;
//         console.log(this.quizdata);
//       })
//     }
// }