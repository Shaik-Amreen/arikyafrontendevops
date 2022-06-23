
import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
@Component({
  selector: 'app-companyplacementshome',
  templateUrl: './companyplacementshome.component.html',
  styleUrls: ['./companyplacementshome.component.css']
})
export class CompanyplacementshomeComponent implements OnInit {

  data: any = []; exists = false; previousdata: any = []
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    sessionStorage.removeItem('editplacements')
    sessionStorage.removeItem('editcompany')
    if (sessionStorage.getItem("placementcyclename") != null) { sessionStorage.removeItem("placementcyclename"); }
    this.exists = false;
    this.commonservice.postrequest('/Placement/findPlacement', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        // console.log(res)
        this.data = res.filter((e: any) => new Date(e.todate) > new Date())
        this.previousdata = res.filter((e: any) => new Date(e.todate) <= new Date())
        this.data.reverse(); this.previousdata.reverse()




        this.exists = true
      },
      (err: any) => console.log(err)
    );

  }

  placementdetails(data: any) {
    sessionStorage.setItem("placementcyclename", data.placementcyclename)
    this.router.navigate(['/admin/placements/placementsdetails'])
  }


  ngOnInit(): void {
  }

}

