import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  postrequest(url: any, data: any) {
    // console.log(data, "dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    return this.http.post(url, data)
    // console.log(response, "response")
    // return { message: "success" }
    // return response.data
  }

}
