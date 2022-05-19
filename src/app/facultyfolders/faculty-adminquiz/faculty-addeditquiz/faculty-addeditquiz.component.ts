
import { FormArray, FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from "rxjs";
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-faculty-addeditquiz',
  templateUrl: './faculty-addeditquiz.component.html',
  styleUrls: ['./faculty-addeditquiz.component.css']
})
export class FacultyAddeditquizComponent implements OnInit {
  inputvalue = false;
  practice: FormArray; ques: FormGroup; final: FormGroup; popup: any = 'SUCCESSFULLY SAVED'
  data: any
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {

    this.practice = new FormArray([])
    this.ques = new FormGroup({
      "questionis": new FormControl('', Validators.required),
      "image": new FormControl(''),
      "option1": new FormControl('', Validators.required),
      "option2": new FormControl('', Validators.required),
      "option3": new FormControl('', Validators.required),
      "option4": new FormControl('', Validators.required),
      "correct": new FormControl('', Validators.required),
      "explanation": new FormControl('', Validators.required)
    })
    if (sessionStorage.getItem('editquiz') != 'yes') { this.practice.push(this.ques); }
    this.final = new FormGroup({
      'topic': new FormControl('', Validators.required),
      "totaltime": new FormControl('', Validators.required),
      "totalmarks": new FormControl(''),
      'questions': this.practice,
      'type': new FormControl('quiz'),
      'organisation_id': new FormControl(sessionStorage.getItem("organisation_id")),
      'startson': new FormControl('', Validators.required),
      'endson': new FormControl('', Validators.required)
    })
    if (sessionStorage.getItem('editquiz') == 'yes') {
      this.commonservice.postrequest('http://localhost:4000/Practice/getquestions', { organisation_id: sessionStorage.getItem("organisation_id"), topic: sessionStorage.getItem('topic'), type: "quiz" }).subscribe(
        (res: any) => {
          this.data = res;
          //  console.log(res); 
          this.final.patchValue(this.data);
          this.data.questions.forEach((e: any) => {
            (<FormArray>this.final.get('questions')).push(new FormGroup({
              "questionis": new FormControl(e[0].questionis, Validators.required),
              "image": new FormControl(e[0].image),
              "option1": new FormControl(e[0].option1, Validators.required),
              "option2": new FormControl(e[0].option2, Validators.required),
              "option3": new FormControl(e[0].option3, Validators.required),
              "option4": new FormControl(e[0].option4, Validators.required),
              "correct": new FormControl(e[0].correct, Validators.required),
              "explanation": new FormControl(e[0].explanation, Validators.required)
            }))
          });
        })
    }
  }

  get controls() {
    return (<FormArray>this.final.get('questions')).controls;
  }

  base64Output: string = '';
  savedata = false
  onFileSelected(event: any) {
    this.convertFile(event.target.files[0]).subscribe((base64: any) => {
      this.base64Output = base64;
      this.final.controls["material"].setValue(this.base64Output)
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  image = "../../../../assets/user.png";
  handleFileSelect(evt: any) {
    var reader = new FileReader;
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.image = event.target.result;
      this.ques.controls.image.setValue(this.image);
    }
    evt.target.value = "";
  }

  addquestion() {
    (<FormArray>this.final.get('questions')).push(new FormGroup({
      "questionis": new FormControl('', Validators.required),
      "image": new FormControl(''),
      "option1": new FormControl('', Validators.required),
      "option2": new FormControl('', Validators.required),
      "option3": new FormControl('', Validators.required),
      "option4": new FormControl('', Validators.required),
      "correct": new FormControl('', Validators.required),
      "explanation": new FormControl('', Validators.required)
    }))
  }


  deletequestion(id: number) {
    (<FormArray>this.final.get('questions')).removeAt(id)
  }

  ngOnInit(): void {
  }

  display = false;
  onSubmit() {
    this.inputvalue = true;
    this.final.value.totalmarks = this.final.value.questions.length;
    this.final.value.type = 'quiz';
    this.final.value.organisation_id = sessionStorage.getItem("organisation_id")
    let url = 'http://localhost:4000/'
    if (sessionStorage.getItem('editquiz') == 'yes') { url = 'http://localhost:4000/Practice/editcodequiz' }
    else { url = 'http://localhost:4000/Practice/uploadpractice' }
    this.commonservice.postrequest(url, this.final.value).subscribe(
      (res: any) => {
        if (res.message == "success") {
          this.display = true;
          setTimeout(() => { this.display = false }, 4000)
          this.practice.reset(); this.ques.reset();
          this.final.reset();
          this.image = "../../../../assets/user.png";
          this.router.navigate(['/faculty/codequiz'])
          // this.final.value.topic = '';
          // this.final.value.totalmarks = ''
          // this.final.value.totaltime = ''
          // this.final.value.questions = []
        }
        else if (res.message == "error")
          alert("quiz already exist with this topicname");
        else if (res.message == "test topic name already exists") {
          // console.log("test topic name already exists")
          this.popup = "Test topic name already exists, Please rename topic";
          this.display = true;
          setTimeout(() => { this.display = false }, 4000)
        }

      }
    )
  }



  // sendmail(){
  //    this.commonservice.postrequest('http://localhost:4000/technicalhead/quizupload',{mail:'19691A0559@Mits.ac.in'}).subscribe(
  //       res=>{
  //         this.success=true;
  //         console.log(res.message);
  //         }
  //     )
  // }

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: true,
    // toolbarPosition: 'top',
    outline: false,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
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
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: 'auto',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: true,
    outline: true,
    enableToolbar: true,
    showToolbar: true,
    toolbarPosition: 'bottom',
    defaultFontName: '',
    defaultFontSize: '',
    defaultParagraphSeparator: '',
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
    ]
  };

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'no',
    enableToolbar: false,
    showToolbar: false,
    placeholder: 'Enter question here',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Comic-Sans-MS',
    defaultFontSize: '5',
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
    uploadWithCredentials: false,
    sanitize: true,
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

