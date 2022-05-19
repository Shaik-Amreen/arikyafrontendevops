import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
//

@Component({
  selector: 'app-placementshome',
  templateUrl: './placementshome.component.html',
  styleUrls: ['./placementshome.component.css']
})

export class PlacementshomeComponent implements OnInit {
  data: any = []; exists = false; previousdata: any = []; display: any = false;
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    if (sessionStorage.getItem("successpopup")) {
      this.display = true
      setTimeout(() => {
        this.display = false;
        sessionStorage.removeItem("successpopup")
      }, 5000)
    }
    sessionStorage.removeItem('editplacements')
    sessionStorage.removeItem('editcompany')
    if (sessionStorage.getItem("placementcyclename") != null) { sessionStorage.removeItem("placementcyclename"); }
    this.exists = false;
    this.commonservice.postrequest('http://localhost:4000/Placement/findPlacement', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
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

