import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  nodata: any = []
  // data: any = {}; sgpa: any []; offers: any = 0; applications: any = 0; display = true
  data: any = ''; sgpa: any = []; offers: any = 0; applications: any = 0; display = false; imagemodal = "none"
  codetopics: any = []; coderate: any = []; quiztopics: any = []; quizrate: any = []
  course: any = ''
  profile: FormGroup; overdata: any;
  imageUrl: any;
  stdallcodedata: any;
  stdallquizdata: any;
  stdallratedata: any;
  stdeachcoderate: any;
  stdeachquizrate: any;
  constructor(private http: HttpClient, private commonservice: CommonService, private route: Router) {

    this.sgpa = []
    this.profile = new FormGroup({
      profilepic: new FormControl(""),
    });

    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail'), query2: "placementstatusmail", query3: "stdprofilerating" }).subscribe(
      (res: any) => {
        console.log("all data", res)
        this.course = res.data.course
        this.getdata = true
        this.data = res.data;
        this.nodata[0] = true
        // console.log("res", res, "//////////////", this.data.sgpa)
        if (this.data.sgpa) {
          res.data.sgpa.forEach((e: any) => {
            // console.log(e, "hgfuyfiyfiyfiyfiygfiy")
            this.sgpa.push(...Object.values(e[0]))
            // console.log(this.sgpa)
          });
        }

        // console.log("this.sgpa", this.sgpa)
        this.data.yearofjoining = parseInt(res.data.yearofjoining);
        this.data.profilepic == '' ? this.data.profilepic = "../../../../assets/user.png" : null;
        this.image = this.data.profilepic;
        // console.log("this.images:", this.image)

        //query2 response for student placementsstatus checkmails 
        this.overdata = res.data2;
        this.applications = 0; this.offers = 0;
        this.nodata[1] = true
        this.overdata.forEach((a: any) => {
          if (a.offerstatus == 'yes') { this.offers++ }
          if (a.registered == 'yes') { this.applications++ }
        });

        //student profile ratings
        // this.nodata[2] = true
      }
    )

    // this.commonservice.postrequest('http://localhost:4000/placementstatus/checkmailnumber', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
    //   (res: any) => {
    //     console.log("this.overdata-data2", res); 
    //     this.overdata = res;
    //     this.applications = 0; this.offers = 0;
    //     this.nodata[1] = true
    //     this.overdata.forEach((a: any) => {
    //       if (a.offerstatus == 'yes') { this.offers++ }
    //       if (a.registered == 'yes') { this.applications++ }
    //     });
    //   },
    //   (err: any) => console.log(err)
    // );

    this.commonservice.postrequest('http://localhost:4000/Dashboard/stdprofilerating', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem("mail") }).subscribe(
      (res: any) => {
        console.log("res.data-data3", res)
        this.nodata[2] = true
        this.stdallcodedata = res.stdallcodedata
        this.stdallquizdata = res.stdallquizdata
        this.stdallratedata = res.stdallratedata
        this.stdeachcoderate = res.stdeachcoderate
        this.stdeachquizrate = res.stdeachquizrate
        this.stdeachcoderate.forEach((s: any) => {
          this.codetopics.push(s.topic)
          // console.log(this.codetopics, "ppppppppppppppppppppppppp")
          this.coderate.push(s.main)
        })
        this.stdeachquizrate.forEach((s: any) => {
          this.quiztopics.push(s.topic)
          this.quizrate.push(s.main)
        })
        // console.log(this.codetopics, "ppppppppppppppppppppppppp")
        this.setOptions()
      })
  }
  base64textString: any = ''
  ngOnInit(): void {
  }


  image = "../../../../assets/user.png";
  tempimg = "../../../../assets/user.png";
  handleFileSelect(evt: any) {
    var reader = new FileReader;
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.tempimg = event.target.result;
      // this.tempimg = this.image
      // console.log(this.data.profilepic)
    }
    evt.target.value = "";
  }

  saveimg: any = "save"; popup: any = ""
  remove() {
    this.tempimg = "../../../../assets/user.png"
  }

  save() {
    this.image = this.tempimg
    this.data.profilepic = this.image;
    this.saveimg = "saving..."
    this.data.organisation_id = sessionStorage.getItem("organisation_id")
    this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentdatac', this.data).subscribe(
      (res: any) => {
        this.imagemodal = "none"
        this.saveimg = "save"
        this.display = true
        this.popup = "SUCCESSFULLY SAVED"
        setTimeout(() => {
          this.display = false;
          sessionStorage.removeItem("successpopup")
        }, 5000)
      })
  }

  getdata: any = false
  switchedit() {

    this.route.navigate(["/student/editprofile"])
  }


  callcontructor() {
    this.sgpa = []
    this.profile = new FormGroup({
      profilepic: new FormControl(""),
    });

    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {
        this.course = res.data.course
        this.getdata = true
        this.data = res.data;
        this.nodata = true
        // console.log("res", res, "//////////////", this.data.sgpa)
        if (this.data.sgpa) {
          res.data.sgpa.forEach((e: any) => {
            // console.log(e, "hgfuyfiyfiyfiyfiygfiy")
            this.sgpa.push(...Object.values(e[0]))
            // console.log(this.sgpa)
          });
        }

        // console.log("this.sgpa", this.sgpa)
        this.data.yearofjoining = parseInt(res.data.yearofjoining);
        this.data.profilepic == '' ? this.data.profilepic = "../../../../assets/user.png" : null;
        this.image = this.data.profilepic;
        // console.log("this.images:", this.image)
      }
    )

    this.commonservice.postrequest('http://localhost:4000/placementstatus/checkmailnumber', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {
        // console.log("this.overdata", res); this.overdata = res;
        this.applications = 0; this.offers = 0;
        this.overdata.forEach((a: any) => {
          if (a.offerstatus == 'yes') { this.offers++ }
          if (a.registered == 'yes') { this.applications++ }
        });
      },
      (err: any) => console.log(err)
    );

    this.commonservice.postrequest('http://localhost:4000/Dashboard/stdprofilerating', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem("mail") }).subscribe(
      (res: any) => {
        // console.log("res.data", res)

        this.stdallcodedata = res.stdallcodedata
        this.stdallquizdata = res.stdallquizdata
        this.stdallratedata = res.stdallratedata
        this.stdeachcoderate = res.stdeachcoderate
        this.stdeachquizrate = res.stdeachquizrate
        this.stdeachcoderate.forEach((s: any) => {
          this.codetopics.push(s.topic)
          // console.log(this.codetopics, "ppppppppppppppppppppppppp")
          this.coderate.push(s.main)
        })
        this.stdeachquizrate.forEach((s: any) => {
          this.quiztopics.push(s.topic)
          this.quizrate.push(s.main)
        })
        // console.log(this.codetopics, "ppppppppppppppppppppppppp")
        this.setOptions()
      })
  }


  option: any = {}
  codeoption: any = {}
  quizoption: any = {}

  downloadofferPdf(a: any, b: any) {
    const source = `data:application/pdf;base64,${a}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${sessionStorage.getItem('mail')}${b}.pdf`
    link.click();
  }
  setOptions() {

    this.codeoption = {
      title: {
        text: 'CODING TESTS'
      },
      xAxis: {
        type: 'category',
        data: this.codetopics
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
          data: this.coderate,
          type: 'line'
        }
      ]
    };

    this.quizoption = {
      title: {
        text: 'QUIZ TESTS'
      },
      xAxis: {
        type: 'category',
        data: this.quiztopics
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
          data: this.quizrate,
          type: 'line'
        }
      ]
    };





    if (this.course == 'btech') {
      this.option = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', "8"]
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
            data: this.sgpa,
            type: 'line'
          }
        ]
      };
    }
    else {
      this.option = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4']
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
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.sgpa,
            type: 'line'
          }
        ]
      };
    }
  }

}
