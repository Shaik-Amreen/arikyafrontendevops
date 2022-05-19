import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../../services/common.service';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-companyaddeditcode',
  templateUrl: './companyaddeditcode.component.html',
  styleUrls: ['./companyaddeditcode.component.css']
})
export class CompanyaddeditcodeComponent implements OnInit {

  inputvalue = false;
  practice: FormArray; ques: FormGroup; final: FormGroup; data: any; popup: any = 'SUCCESSFULLY SAVED'; temptestcase: FormGroup
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {

    this.practice = new FormArray([])
    this.ques = new FormGroup({
      'questionis': new FormControl('', Validators.required),
      'image': new FormControl(''),
      // 'inputone': new FormControl('', Validators.required),
      // 'inputtwo': new FormControl('', Validators.required),
      // 'inputthr': new FormControl('', Validators.required),
      // 'outputone': new FormControl('', Validators.required),
      // 'outputtwo': new FormControl('', Validators.required),
      // 'outputthr': new FormControl('', Validators.required),
      'testcasesmarks': new FormArray([]),
      'testcases': new FormArray([]),
      'tempcode': new FormArray([]),
      'attemptedmails': new FormArray([])
    })
    if (sessionStorage.getItem('editcodequiz') != 'yes') {

      this.practice.push(this.ques);
    }


    this.final = new FormGroup({
      'topic': new FormControl('', Validators.required),
      'questions': this.practice,
      'totaltime': new FormControl('', Validators.required),
      'totalmarks': new FormControl(''),
      'type': new FormControl('code'),
      'organisation_id': new FormControl(sessionStorage.getItem("organisation_id")),
      'startson': new FormControl('', Validators.required),
      'endson': new FormControl('', Validators.required)
    })
    if (sessionStorage.getItem('editcodequiz') == 'yes') {
      this.commonservice.postrequest('http://localhost:4000/Practice/getquestions', { organisation_id: sessionStorage.getItem("organisation_id"), topic: sessionStorage.getItem('topic'), type: "code" }).subscribe(
        (res: any) => {
          this.data = res; console.log(res, "kkkkkkkkkkkkkkkkkkkkkkkkkkkk"); this.final.patchValue(this.data);
          this.data.questions.forEach((e: any, i: any) => {

            (<FormArray>this.final.get('questions')).push(new FormGroup({
              'questionis': new FormControl(e[0].questionis, Validators.required),
              'image': new FormControl(e[0].image),
              'testcases': new FormArray([]),
              'tempcode': new FormControl(e[0].tempcode),
              'attemptedmails': new FormControl(e[0].attemptedmails),
              'testcasesmarks': new FormControl(e[0].testcasesmarks),
            }));
            // console.log((<FormArray>this.final.get('questions')).value, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
            (<FormArray>this.final.get('questions')).value[i]['tempcode'] = e[0].tempcode
            // console.log("appendquestionsssssssssssssssssssssssssssssssssssssssssssss", this.final.value)
            e[0].testcases.forEach((et: any, it: any) => {
              this.getestcases(i).push(new FormGroup({
                input: new FormArray([]),
                output: new FormControl(et.output)
              }))

              et.input.forEach((ep: any) => {
                this.getparameter(i, it).push(new FormGroup({
                  invalue: new FormControl(ep.invalue)
                }))
              });
            });
          });
          // console.log(this.final, "hdgciyevci")
        })
    }
    else {
      this.addtestcase(0);
    }
    // console.log(this.final, "finalllll")
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

  get controls() {
    return (<FormArray>this.final.get('questions')).controls;
  }



  addquestion() {

    let index = ((<FormArray>this.final.get('questions')).length);
    (<FormArray>this.final.get('questions')).push(new FormGroup({

      'questionis': new FormControl('', Validators.required),
      'image': new FormControl(''),
      // 'inputone': new FormControl('', Validators.required),
      // 'inputtwo': new FormControl('', Validators.required),
      // 'inputthr': new FormControl('', Validators.required),
      // 'outputone': new FormControl('', Validators.required),
      // 'outputtwo': new FormControl('', Validators.required),
      // 'outputthr': new FormControl('', Validators.required),
      'testcases': new FormArray([]),
      'testcasesmarks': new FormArray([]),
      'tempcode': new FormArray([]),
      'attemptedmails': new FormArray([])
    }))
    this.addtestcase(index);
  }

  getestcases(index: any): any {
    // console.log(index, "get test case", (<FormArray>this.final.get('questions')).at(index))
    // console.log(index, (<FormArray>this.final.get('questions')).at(index).get('testcases'));
    return (<FormArray>this.final.get('questions')).at(index).get('testcases')
  }

  getparameter(mainindex: any, index: any): any {

    return this.getestcases(mainindex).at(index).get('input')

  }

  addtestcase(index: any) {
    this.getestcases(index).push(new FormGroup({
      input: new FormArray([]),
      output: new FormControl('')
    }))
    // console.log('test caeses addddddd', this.final, this.getestcases(index).length, this.getestcases(index));
    // console.log(this.getestcases(index).value[0].input.length, "innnnnndeeeeexxxx")
    if (this.getestcases(index).value[0].input.length == 0) {
      this.addparameter(index, this.getestcases(index).length - 1, 'test')
    }

    else {
      this.getestcases(index).value[0].input.forEach((gts: any, ind: any) => {
        this.addparameter(index, this.getestcases(index).length - 1, 'test')
      })
    }
    // else {
    //   this.getestcases(index).value.forEach((gts: any, ind: any) => {
    //     if (ind != 0) {
    //       this.addparameter(index, this.getestcases(index).length - 1)
    //     }
    //   });
    // }

  }

  addparameter(mainindex: any, index: any, type: string) {

    // console.log(this.getestcases(mainindex), "[arammmmmmmmmmmmmmmmmmmmmm", mainindex, index)
    if (type == "test") {
      this.getparameter(mainindex, index).push(new FormGroup({
        invalue: new FormControl('')
      }))
    }
    else {
      this.getestcases(mainindex).value.forEach((e: any, i: any) => {
        this.getparameter(mainindex, i).push(new FormGroup({
          invalue: new FormControl('')
        }))
      })
    }
    // this.getestcases(mainindex).value.forEach((e: any, i: any) => {
    //   console.log('hyyyy', i, e, 'main', mainindex)
    //   if (e.input.length == 0) {
    //     this.getparameter(mainindex, i).push(new FormGroup({
    //       invalue: new FormControl('')
    //     }))
    //   }
    //   if (i != 0 || e.input.length != 0) {
    //     this.getparameter(mainindex, i).push(new FormGroup({
    //       invalue: new FormControl('')
    //     }))
    //   }
    // })
  }

  removetestcase(mainindex: any, index: any) {
    this.getestcases(mainindex).removeAt(index)
  }

  removeparmeter(verymain: any, mainindex: any, index: any) {
    // console.log("maindez", mainindex, "qyes", verymain, "param", index)
    // console.log(this.getestcases(verymain).value[0].input, "remove param ettr")
    this.getestcases(verymain).value.forEach((gts: any, gtsi: number) => {
      // console.log(gtsi, "gtssiiiiiiiiiiiiiiiii")
      this.getparameter(verymain, gtsi).removeAt(index)
    })
  }

  deletequestion(id: number) {
    (<FormArray>this.final.get('questions')).removeAt(id)
  }

  ngOnInit(): void {
  }

  display = false
  onSubmit() {
    // console.log(this.final.value)

    this.inputvalue = true;
    // console.log("hgsfvhksdvcjjg", this.inputvalue)
    this.final.value.totalmarks = this.final.value.questions.length * 10;
    this.final.value.questions.forEach((e: any) => {
      e.testcases.forEach((t: any) => {
        t.output = t.output.trim()
        let tempoutput = t.output.split('\n')
        tempoutput.forEach((to: any, i: any) => {
          tempoutput[i] = tempoutput[i].trim()
        });
        t.output = tempoutput.join('\n')
        // console.log(t.output)
        t.input.forEach((it: any) => {
          it.invalue = it.invalue.trim()
        });
      });

    });

    this.final.value.organisation_id = sessionStorage.getItem("organisation_id")
    let url = 'http://localhost:4000/'

    if (sessionStorage.getItem('editcodequiz') == 'yes') { url = 'http://localhost:4000/Practice/editcodequiz' }
    else { url = 'http://localhost:4000/Practice/uploadpractice' }

    if (this.final.status == 'VALID') {

      this.commonservice.postrequest(url, this.final.value).subscribe(
        (res: any) => {
          if (res.message == "success") {
            this.display = true; setTimeout(() => { this.display = false }, 4000)
            this.practice.reset(); this.ques.reset();
            this.final.reset();
            this.image = "../../../../assets/user.png";

            this.router.navigate(['/admin/code/topics'])
            // this.final.setValue({
            //   'type':'code',
            //  'organisation_id':sessionStorage.getItem("organisation_id")
            // })
            // this.router.navigate(['arikya/uploadtests']);
            // this.final.setValue({topic:''})
            // this.final.value.totalmarks=''
            // this.final.value.totaltime=''
            // this.final.value.questions=''
          }
          else if (res.message == "test topic name already exists") {
            this.popup = "Test topic name already exists, Please rename topic";
            this.display = true;
            setTimeout(() => { this.display = false }, 4000)
          }
        },
        (err: any) => { console.log(err) }
      );
    }
  }
  config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: 'auto',
    placeholder: 'ENTER QUESTION',
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
}
