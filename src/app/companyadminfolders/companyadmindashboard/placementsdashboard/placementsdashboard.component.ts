
import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'; import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { EChartsOption } from 'echarts';
import { ExportExcelService } from 'src/app/services/export-excel.service';
@Component({
  selector: 'app-placementsdashboard',
  templateUrl: './placementsdashboard.component.html',
  styleUrls: ['./placementsdashboard.component.css']
})
export class PlacementsdashboardComponent implements OnInit {
  type: any = ''; status: any = 'ongoing'; placementcycles: any = []; data: any = false; truedata: any = []
  departments: any = ['cse', 'ece', 'eee', 'mech', 'civil', 'cst', 'mba', 'mca']
  category: any = ['eligible', 'addedstudents', 'interested', 'notinterested', 'notaddedstudents', 'placed', 'offered', 'comregister', 'comnotregister']
  companycategory = ["comnotregistercompany", "offeredcompany", "placedcompany", "comregistercompany"]
  campusplacementdata: any = []; campusplacementdatadeptwise: any = {}; companyplacementdata: any = []; companyplacements: any = []
  constructor(private commonservice: CommonService, public ete: ExportExcelService) {
    this.commonservice.postrequest('http://localhost:4000/Studentdata/dashboardcampusreports', { organisation_id: sessionStorage.getItem('organisation_id') }).subscribe(
      (ress: any) => {

        // console.log(ress, "resssssssssssssssss")
        this.placementcycles = ress.placementcycles
        ress = ress.response
        this.truedata = ress
        ress.forEach((camp: any) => {
          // console.log(camp, ";;;;;")
          this.campusplacementdatadeptwise = {}
          this.departments.forEach((depart: any) => {
            let temp: any = {}
            this.category.forEach((cat: any) => {
              temp[cat] = camp[cat].filter((el: any) => el.department == depart)
            })
            this.campusplacementdatadeptwise[depart] = temp
          });

          this.companyplacements = []
          camp.companies.forEach((c: any, i: any) => {
            let comdeptdata: any = {}
            this.departments.forEach((depart: any, id: any) => {
              let tempcom: any = {}
              this.companycategory.forEach((com: any, index: any) => {
                // console.log(c[com], ";;;;;;;;;;;;;;;;;;;;;;", com)
                tempcom[com] = c[com].filter((el: any) => el.department == depart)
                // console.log(tempcom[com], com, tempcom)

                // console.log(tempcom, "tempppppppppppppppppppppppppppp")
                if (index == this.companycategory.length - 1) {
                  comdeptdata[depart] = tempcom
                  // console.log(comdeptdata)
                  // this.companyplacementdata.push(tempcom)
                  if (this.departments.length - 1 == id) {
                    // console.log(comdeptdata, "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
                    comdeptdata.company = c.companyname
                  }
                  // console.log(comdata, "]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]")
                }
                // console.log(tempcom, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
              })

              // console.log(this.companyplacementdata, "placement placement dataaaa")
            });
            // console.log(comdeptdata, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..")
            this.companyplacements = [...this.companyplacements, comdeptdata]
          });
          this.campusplacementdatadeptwise.placementcyclename = camp.placementcyclename
          this.campusplacementdatadeptwise.fromdate = camp.fromdate
          this.campusplacementdatadeptwise.todate = camp.todate
          this.campusplacementdatadeptwise.companyplacements = this.companyplacements
          this.campusplacementdata.push(this.campusplacementdatadeptwise)
          this.data = true
          // console.log(this.campusplacementdata, "/////////////////////////////////////////////////////////")

        });

        this.tempdatafunc()

        // console.log(this.campusplacementdatadeptwise, "department wise")
        // this.campusplacementdatadeptwise
        // console.log(this.campusplacementdata, "campus placementdata ")
      })

  }

  ngOnInit(): void {
    this.commonservice.postrequest('http://localhost:4000/Studentdata/getAllCompanyNames', { organisation_id: sessionStorage.getItem('organisation_id') }).subscribe(
      (res: any) => {
        // console.log(res, "helloooooooooooooooooooooooooooooooooooooooooooo") 
      })
  }

  te: any
  optionsdata: any = []
  tempdatafunc() {

    this.optionsdata = []
    if (this.status == 'ongoing') {
      this.te = this.campusplacementdata.filter((e: any) => (new Date(e.todate) > new Date()));
    }
    else {
      if (this.status != 'all') {
        this.te = this.campusplacementdata.filter((e: any) => (e.placementcyclename == this.status));
      }
      else { this.te = this.campusplacementdata }
    }
    this.te.forEach((final: any) => {
      let suboptions: any = []
      final.companyplacements.map((pc: any) => (suboptions.push(
        {
          title: {
            text: pc.company.toUpperCase()
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
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['product', 'CSE', 'ECE', 'EEE', 'MECHANICAL', 'CIVIL', 'CST', 'MBA', 'MCA'],
              ['Eligible',

                (final.cse.interested.length > 0) ? (((pc.cse.comregistercompany.length + pc.cse.comnotregistercompany.length) / (final.cse.interested.length) * 100)).toFixed(2) : 0,
                (final.ece.interested.length > 0) ? (((pc.ece.comregistercompany.length + pc.ece.comnotregistercompany.length) / final.ece.interested.length) * 100).toFixed(2) : 0,
                (final.eee.interested.length > 0) ? (((pc.eee.comregistercompany.length + pc.eee.comnotregistercompany.length) / final.eee.interested.length) * 100).toFixed(2) : 0,
                (final.mech.interested.length > 0) ? (((pc.mech.comregistercompany.length + pc.mech.comnotregistercompany.length) / final.mech.interested.length) * 100).toFixed(2) : 0,
                (final.civil.interested.length > 0) ? (((pc.civil.comregistercompany.length + pc.civil.comnotregistercompany.length) / final.civil.interested.length) * 100).toFixed(2) : 0,
                (final.cst.interested.length > 0) ? (((pc.cst.comregistercompany.length + pc.cst.comnotregistercompany.length) / final.cst.interested.length) * 100).toFixed(2) : 0,
                (final.mba.interested.length > 0) ? (((pc.mba.comregistercompany.length + pc.mba.comnotregistercompany.length) / final.mba.interested.length) * 100).toFixed(2) : 0,
                (final.mca.interested.length > 0) ? (((pc.mca.comregistercompany.length + pc.mca.comnotregistercompany.length) / final.mca.interested.length) * 100).toFixed(2) : 0
              ],
              ['Registered',
                (final.cse.interested.length > 0) ? ((pc.cse.comregistercompany.length / (final.cse.interested.length) * 100)).toFixed(2) : 0,
                (final.ece.interested.length > 0) ? ((pc.ece.comregistercompany.length / (final.ece.interested.length) * 100)).toFixed(2) : 0,
                (final.eee.interested.length > 0) ? ((pc.eee.comregistercompany.length / (final.eee.interested.length) * 100)).toFixed(2) : 0,
                (final.mech.interested.length > 0) ? ((pc.mech.comregistercompany.length / (final.mech.interested.length) * 100)).toFixed(2) : 0,
                (final.civil.interested.length > 0) ? ((pc.civil.comregistercompany.length / (final.civil.interested.length) * 100)).toFixed(2) : 0,
                (final.cst.interested.length > 0) ? ((pc.cst.comregistercompany.length / (final.cst.interested.length) * 100)).toFixed(2) : 0,
                (final.mba.interested.length > 0) ? ((pc.mba.comregistercompany.length / (final.mba.interested.length) * 100)).toFixed(2) : 0,
                (final.mca.interested.length > 0) ? ((pc.mca.comregistercompany.length / (final.mca.interested.length) * 100)).toFixed(2) : 0],
              ['Offered',
                (final.cse.interested.length > 0) ? ((pc.cse.offeredcompany.length / (final.cse.interested.length) * 100)).toFixed(2) : 0,
                (final.ece.interested.length > 0) ? ((pc.ece.offeredcompany.length / final.ece.interested.length) * 100).toFixed(2) : 0,
                (final.eee.interested.length > 0) ? ((pc.eee.offeredcompany.length / final.eee.interested.length) * 100).toFixed(2) : 0,
                (final.mech.interested.length > 0) ? ((pc.mech.offeredcompany.length / final.mech.interested.length) * 100).toFixed(2) : 0,
                (final.civil.interested.length > 0) ? ((pc.civil.offeredcompany.length / final.civil.interested.length) * 100).toFixed(2) : 0,
                (final.cst.interested.length > 0) ? ((pc.cst.offeredcompany.length / final.cst.interested.length) * 100).toFixed(2) : 0,
                (final.mba.interested.length > 0) ? ((pc.mba.offeredcompany.length / final.mba.interested.length) * 100).toFixed(2) : 0,
                (final.mca.interested.length > 0) ? ((pc.mca.offeredcompany.length / final.mca.interested.length) * 100).toFixed(2) : 0
              ],
              ['Placed',
                (final.cse.interested.length > 0) ? ((pc.cse.placedcompany.length / (final.cse.interested.length) * 100)).toFixed(2) : 0,
                (final.ece.interested.length > 0) ? ((pc.ece.placedcompany.length / final.ece.interested.length) * 100).toFixed(2) : 0,
                (final.eee.interested.length > 0) ? ((pc.eee.placedcompany.length / final.eee.interested.length) * 100).toFixed(2) : 0,
                (final.mech.interested.length > 0) ? ((pc.mech.placedcompany.length / final.mech.interested.length) * 100).toFixed(2) : 0,
                (final.civil.interested.length > 0) ? ((pc.civil.placedcompany.length / final.civil.interested.length) * 100).toFixed(2) : 0,
                (final.cst.interested.length > 0) ? ((pc.cst.placedcompany.length / final.cst.interested.length) * 100).toFixed(2) : 0,
                (final.mba.interested.length > 0) ? ((pc.mba.placedcompany.length / final.mba.interested.length) * 100).toFixed(2) : 0,
                (final.mca.interested.length > 0) ? ((pc.mca.placedcompany.length / final.mca.interested.length) * 100).toFixed(2) : 0
              ],
            ]
          },
          xAxis: { type: 'category' },
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },
          { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

        },

      )))
      this.optionsdata.push(
        [
          [
            {
              legend: {},
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
              tooltip: {},
              dataset: {
                source: [
                  ['product', 'CSE', 'ECE', 'EEE', 'MECHANICAL', 'CIVIL', 'CST', 'MBA', 'MCA'],
                  ['Eligible', 100, 100, 100, 100, 100, 100, 100, 100],
                  ['Added',
                    (final.cse.eligible.length > 0) ? ((final.cse.addedstudents.length / final.cse.eligible.length) * 100).toFixed(2) : 0,
                    (final.ece.eligible.length > 0) ? ((final.ece.addedstudents.length / final.ece.eligible.length) * 100).toFixed(2) : 0,
                    (final.eee.eligible.length > 0) ? ((final.eee.addedstudents.length / final.eee.eligible.length) * 100).toFixed(2) : 0,
                    (final.mech.eligible.length > 0) ? ((final.mech.addedstudents.length / final.mech.eligible.length) * 100).toFixed(2) : 0,
                    (final.civil.eligible.length > 0) ? ((final.civil.addedstudents.length / final.civil.eligible.length) * 100).toFixed(2) : 0,
                    (final.cst.eligible.length > 0) ? ((final.cst.addedstudents.length / final.cst.eligible.length) * 100).toFixed(2) : 0,
                    (final.mba.eligible.length > 0) ? ((final.mba.addedstudents.length / final.mba.eligible.length) * 100).toFixed(2) : 0,
                    (final.mca.eligible.length > 0) ? ((final.mca.addedstudents.length / final.mca.eligible.length) * 100).toFixed(2) : 0],
                  ['Interested',
                    (final.cse.eligible.length > 0) ? ((final.cse.interested.length / final.cse.eligible.length) * 100).toFixed(2) : 0,
                    (final.ece.eligible.length > 0) ? ((final.ece.interested.length / final.ece.eligible.length) * 100).toFixed(2) : 0,
                    (final.eee.eligible.length > 0) ? ((final.eee.interested.length / final.eee.eligible.length) * 100).toFixed(2) : 0,
                    (final.mech.eligible.length > 0) ? ((final.mech.interested.length / final.mech.eligible.length) * 100).toFixed(2) : 0,
                    (final.civil.eligible.length > 0) ? ((final.civil.interested.length / final.civil.eligible.length) * 100).toFixed(2) : 0,
                    (final.cst.eligible.length > 0) ? ((final.cst.interested.length / final.cst.eligible.length) * 100).toFixed(2) : 0,
                    (final.mba.eligible.length > 0) ? ((final.mba.interested.length / final.mba.eligible.length) * 100).toFixed(2) : 0,
                    (final.mca.eligible.length > 0) ? ((final.mca.interested.length / final.mca.eligible.length) * 100).toFixed(2) : 0
                  ],
                  ['Registered',
                    (final.cse.eligible.length > 0) ? ((final.cse.comregister.length / final.cse.eligible.length) * 100).toFixed(2) : 0,
                    (final.ece.eligible.length > 0) ? ((final.ece.comregister.length / final.ece.eligible.length) * 100).toFixed(2) : 0,
                    (final.eee.eligible.length > 0) ? ((final.eee.comregister.length / final.eee.eligible.length) * 100).toFixed(2) : 0,
                    (final.mech.eligible.length > 0) ? ((final.mech.comregister.length / final.mech.eligible.length) * 100).toFixed(2) : 0,
                    (final.civil.eligible.length > 0) ? ((final.civil.comregister.length / final.civil.eligible.length) * 100).toFixed(2) : 0,
                    (final.cst.eligible.length > 0) ? ((final.cst.comregister.length / final.cst.eligible.length) * 100).toFixed(2) : 0,
                    (final.mba.eligible.length > 0) ? ((final.mba.comregister.length / final.mba.eligible.length) * 100).toFixed(2) : 0,
                    (final.mca.eligible.length > 0) ? ((final.mca.comregister.length / final.mca.eligible.length) * 100).toFixed(2) : 0
                  ],
                  ['Offered',
                    (final.cse.eligible.length > 0) ? ((final.cse.offered.length / final.cse.eligible.length) * 100).toFixed(2) : 0,
                    (final.ece.eligible.length > 0) ? ((final.ece.offered.length / final.ece.eligible.length) * 100).toFixed(2) : 0,
                    (final.eee.eligible.length > 0) ? ((final.eee.offered.length / final.eee.eligible.length) * 100).toFixed(2) : 0,
                    (final.mech.eligible.length > 0) ? ((final.mech.offered.length / final.mech.eligible.length) * 100).toFixed(2) : 0,
                    (final.civil.eligible.length > 0) ? ((final.civil.offered.length / final.civil.eligible.length) * 100).toFixed(2) : 0,
                    (final.cst.eligible.length > 0) ? ((final.cst.offered.length / final.cst.eligible.length) * 100).toFixed(2) : 0,
                    (final.mba.eligible.length > 0) ? ((final.mba.offered.length / final.mba.eligible.length) * 100).toFixed(2) : 0,
                    (final.mca.eligible.length > 0) ? ((final.mca.offered.length / final.mca.eligible.length) * 100).toFixed(2) : 0],
                  ['Placed',
                    (final.cse.eligible.length > 0) ? ((final.cse.placed.length / final.cse.eligible.length) * 100).toFixed(2) : 0,
                    (final.ece.eligible.length > 0) ? ((final.ece.placed.length / final.ece.eligible.length) * 100).toFixed(2) : 0,
                    (final.eee.eligible.length > 0) ? ((final.eee.placed.length / final.eee.eligible.length) * 100).toFixed(2) : 0,
                    (final.mech.eligible.length > 0) ? ((final.mech.placed.length / final.mech.eligible.length) * 100).toFixed(2) : 0,
                    (final.civil.eligible.length > 0) ? ((final.civil.placed.length / final.civil.eligible.length) * 100).toFixed(2) : 0,
                    (final.cst.eligible.length > 0) ? ((final.cst.placed.length / final.cst.eligible.length) * 100).toFixed(2) : 0,
                    (final.mba.eligible.length > 0) ? ((final.mba.placed.length / final.mba.eligible.length) * 100).toFixed(2) : 0,
                    (final.mca.eligible.length > 0) ? ((final.mca.placed.length / final.mca.eligible.length) * 100).toFixed(2) : 0],
                ]
              },
              xAxis: { type: 'category' },
              yAxis: {},
              // Declare several bar series, each will be mapped
              // to a column of dataset.source by default.
              series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },
              { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

            },
            {
              title:
                final.placementcyclename.toUpperCase()
            }
          ]


          ,
          suboptions









        ]

        // {
        //   legend: {},
        //   tooltip: {
        //   },
        //   dataset: {
        //     source: [
        //       ['PLACEMENTS', 'Placed', 'Registered', 'Eligible'],
        //       [final.placementcyclename.toUpperCase(), final.placed, final.registered, final.eligible],
        //     ]
        //   },
        //   xAxis: { type: 'category' },
        //   yAxis: {},
        //   // Declare several bar series, each will be mapped
        //   // to a column of dataset.source by default.
        //   series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
        // }
      )


      // this.optionsdata.push({
      //   title: {
      //     text: 'PLACEMENTS',
      //   },
      //   legend: {
      //     data: ['amreen kousar']
      //   },
      //   tooltip: {
      //   },
      //   xAxis: {

      //     data: ['Placed', 'Registered', 'Eligible']
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [{
      //     placementcyclename: final.placementcyclename,
      //     type: 'bar',
      //     data: [final.placed, final.registered, final.eligible]
      //   }
      //   ]
      // })

    });
    // console.log(this.optionsdata, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
    return this.optionsdata
  }

  tc: any
  tempcompanyfunc(tempcompany: any) {
    this.tc = tempcompany;
    if (this.type != '') {
      this.tc = tempcompany.filter((c: any) => c.company.includes(this.type))
    }
    return this.tc
  }
}
