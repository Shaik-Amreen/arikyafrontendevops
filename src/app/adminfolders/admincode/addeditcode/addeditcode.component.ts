import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-addeditcode',
  templateUrl: './addeditcode.component.html',
  styleUrls: ['./addeditcode.component.css']
})
export class AddeditcodeComponent implements OnInit {

  inputvalue = false;
  practice: FormArray; ques: FormGroup; final: FormGroup; data: any; popup: any; temptestcase: FormGroup
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
    if (sessionStorage.getItem('editcode') != 'yes') {
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
    if (sessionStorage.getItem('editcode') == 'yes') {

      this.commonservice.postrequest('http://localhost:4000/Practice/getquestions', { organisation_id: sessionStorage.getItem("organisation_id"), topic: sessionStorage.getItem('topic'), type: "code" }).subscribe(
        (res: any) => {
          this.data = res;
          // console.log("adfffffffffffffffffffffffffffffb", this.data.startson, "2222222222", new Date(this.data.startson), "3333333333333", new Date(this.data.startson).toISOString().slice(0, 16));
          this.final.patchValue(this.data);
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

  datekill: any = new Date().toISOString().slice(0, 16)

  remove() {
    sessionStorage.removeItem("editcode")
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
      output: new FormControl('', Validators.required)
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

  timerror: any = ''

  errors: any = {}


  checkerrors(e: any, condition: any) {
    if (e) {
      this.errors[condition] = true
    }
    return true
  }

  addparameter(mainindex: any, index: any, type: string) {

    // console.log(this.getestcases(mainindex), "[arammmmmmmmmmmmmmmmmmmmmm", mainindex, index)
    if (type == "test") {
      this.getparameter(mainindex, index).push(new FormGroup({
        invalue: new FormControl('', Validators.required)
      }))
    }
    else {
      this.getestcases(mainindex).value.forEach((e: any, i: any) => {
        this.getparameter(mainindex, i).push(new FormGroup({
          invalue: new FormControl('', Validators.required)
        }))
      })
    }
    // this.getestcases(mainindex).value.forEach((e: any, i: any) => {
    //   console.log('hyyyy', i, e, 'main', mainindex)
    //   if (e.input.length == 0) {
    //     this.getparameter(mainindex, i).push(new FormGroup({
    //       invalue: new FormControl('',Validators.required)
    //     }))
    //   }
    //   if (i != 0 || e.input.length != 0) {
    //     this.getparameter(mainindex, i).push(new FormGroup({
    //       invalue: new FormControl('',Validators.required)
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

  close() {
    sessionStorage.removeItem('topic')
    sessionStorage.removeItem('editcode')
  }

  display = false

  onSubmit() {
    this.timerror = ''
    // console.log("this.final.value.startson", this.final.value.startson, typeof (this.final.value.startson))
    let startson: any = new Date(this.final.value.startson)
    let endson: any = new Date(this.final.value.endson)
    this.inputvalue = true;
    let diffInMs = Math.abs(endson - startson);
    diffInMs = diffInMs / (1000 * 60);
    if (diffInMs < this.final.value.totaltime) {
      this.timerror = 'Please extend the last date'
    }
    this.final.value.organisation_id = sessionStorage.getItem("organisation_id")
    let url = 'http://localhost:4000/'
    if (sessionStorage.getItem('editcode') == 'yes') { url = 'http://localhost:4000/Practice/editcodequiz' }
    else { url = 'http://localhost:4000/Practice/uploadpractice' }
    let comparedate = new Date(this.datekill)
    if (comparedate > startson) { document.getElementById("startson")?.scrollIntoView({ behavior: "smooth", block: 'center' }); }
    else if (endson <= startson) { document.getElementById("endson")?.scrollIntoView({ behavior: "smooth", block: 'center' }); }
    else if (this.timerror != '') { document.getElementById("totaltime")?.scrollIntoView({ behavior: "smooth", block: 'center' }); }
    else if (this.final.status == 'VALID') {
      // console.log("this.final.status,this.ques.status----------->", this.final.value.startson)
      // this.final.value.startson = startson.toISOString()
      // this.final.value.endson = endson.toISOString()
      // console.log("this.final.status,this.ques.status----------->",this.final.value.startson)
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
          })
        });
      })

      // this.final.value.startson =this.final.value.startson.toISOString()
      // this.final.value.endson =this.final.value.endson.toISOString()
      // this.datekill=this.datekill.toISOString()
      // console.log("this.final.value.startson,this.final.value.endson,this.datekill",(this.final.value.startson),(this.final.value.endson),(this.datekill))

      // console.log("this.final.value.startson",this.final.value.startson,"     ",startson)
      this.final.value.createdby = sessionStorage.getItem("mail")
      // console.log("this.final.value", this.final.value)
      this.commonservice.postrequest(url, this.final.value).subscribe(
        (res: any) => {
          // console.log(res)
          if (res.message == "success") {
            // this.display = true; setTimeout(() => { this.display = false }, 4000)
            this.practice.reset(); this.ques.reset();
            this.final.reset();
            this.image = "../../../../assets/user.png";
            sessionStorage.removeItem('topic')
            sessionStorage.removeItem('editcode')
            this.router.navigate(['/admin/code/topics'])
            sessionStorage.setItem("successpopup", 'success')

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
          else if (res.message == "Test topic name already exists") {
            this.popup = "Test topic name already exists, Please Rename Topic";
            this.display = true;
            setTimeout(() => { this.display = false }, 4000)
          }
        },
        (err: any) => { console.log(err) }
      );
    }
    else {
      const firstElementWithError = document.querySelector('.ng-invalid');
      if (firstElementWithError) {
        firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      let a = ''
      Object.keys(this.final.value).forEach(control => {
        const controlErrors = this.final.controls[control].errors;
        if (controlErrors != null && a == '') {
          a = control
          // console.log("control", a)
          document.getElementById(control)?.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
      });

      Object.keys(this.ques.value).forEach(control => {
        const controlErrors = this.ques.controls[control].errors;
        if (controlErrors != null && a == '') {
          a = control
          // console.log("control", a)
          document.getElementById(control)?.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
      });
      // console.log("A", a, this.ques.errors)

      this.display = true
      this.popup = "INVALID INPUT DATA"
      setTimeout(() => { this.display = false }, 4000)
    }
    // console.log(this.final, this.errors, this.timerror)
    // if (sessionStorage.getItem('editcode') == 'yes') { url = 'http://localhost:4000/Practice/editcodequiz' }
    // else { url = 'http://localhost:4000/Practice/uploadpractice' }
    // console.log(this.final)
    // if (this.final.status == 'VALID') {
    //   this.commonservice.postrequest(url, this.final.value).subscribe(
    //     (res: any) => {
    //       console.log(res)
    //       if (res.message == "success") {
    //         this.display = true; setTimeout(() => { this.display = false }, 4000)
    //         this.practice.reset(); this.ques.reset();
    //         this.final.reset();
    //         this.image = "../../../../assets/user.png";
    //         sessionStorage.removeItem('topic')
    //         sessionStorage.removeItem('editcode')
    //         this.router.navigate(['/admin/code/topics'])
    //         sessionStorage.setItem("successpopup", 'success')

    //         // this.final.setValue({
    //         //   'type':'code',
    //         //  'organisation_id':sessionStorage.getItem("organisation_id")
    //         // })
    //         // this.router.navigate(['arikya/uploadtests']);
    //         // this.final.setValue({topic:''})
    //         // this.final.value.totalmarks=''
    //         // this.final.value.totaltime=''
    //         // this.final.value.questions=''
    //       }
    //       else if (res.message == "Test topic name already exists") {
    //         this.popup = "Test topic name already exists, Please Rename Topic";
    //         this.display = true;
    //         setTimeout(() => { this.display = false }, 4000)
    //       }
    //     },
    //     (err: any) => { console.log(err) }
    //   );
    // }
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
  };
}
