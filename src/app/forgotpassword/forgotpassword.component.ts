import { HttpClient } from '@angular/common/http'; import { CommonService } from '../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';;

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  password = ''; confirm = ''; vepa1: any = false; vepa2: any = false;
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    if (sessionStorage.getItem('mail') === null) {
      this.router.navigate(['/login'])
    }
  }
  ngOnInit(): void {
  }

  onsubmit(f: NgForm) {
    this.commonservice.postrequest('http://localhost:4000/changepassword', { organisation_id: sessionStorage.getItem("organisation_id"), 'mail': sessionStorage.getItem('mail')?.toLocaleLowerCase(), 'password': f.value.password }).subscribe(
      (res: any) => { if (res.message == 'success') { this.router.navigate(['/login']) } },
      (err: any) => console.log(err)
    )
  }
}
