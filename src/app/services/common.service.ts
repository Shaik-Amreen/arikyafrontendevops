import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient ) { }


    postrequest(url:any,data:any){
      return this.http.post(url,data)
    }

}
