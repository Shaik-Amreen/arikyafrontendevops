
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faculty-quiztopicdetails',
  templateUrl: './faculty-quiztopicdetails.component.html',
  styleUrls: ['./faculty-quiztopicdetails.component.css']
})
export class FacultyQuiztopicdetailsComponent implements OnInit {


  nodata: any = false; endson: any = ""; endedit: any = false
  ngOnInit(): void {
  }
  editcode: any = true; totalcount: any = 0
  quizdata: any = []; marks: any = 0; topic: any = sessionStorage.getItem('topic'); data: any; type = "quiz"
  constructor(private commonservice: CommonService, private router: Router) {
    this.commonservice.postrequest('http://localhost:4000/Practice/getquestions', { organisation_id: sessionStorage.getItem("organisation_id"), topic: sessionStorage.getItem('topic'), type: "quiz" }).subscribe(
      (res: any) => {
        this.endson = res.endson
        this.data = res;
        //  console.log("res------>", res);
        if (res.tempratings.length > 0) { this.totalcount = res.ratings.length; this.editcode = false }
        else if (new Date(res.endson) <= new Date()) { this.editcode = false }
        this.data.endson = new Date(this.data.endson)

        this.nodata = true
      })
    sessionStorage.removeItem('editquiz')
  }

  date: any = new Date()




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


  switchedit() {
    sessionStorage.setItem('editquiz', 'yes')

    this.router.navigate(['/faculty/codequiz/quiz'])
  }

  updatendate() {
    this.data.endson = new Date(this.endson)
    this.commonservice.postrequest('http://localhost:4000/Practice/editcodequiz', this.data).subscribe((res: any) => {

      this.endedit = false
    }, (err: any) => { console.log(err) })


  }


}
