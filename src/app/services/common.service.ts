import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  postrequest(url: any, data: any) {

    if (url == 'http://localhost:4000/verify') {
      return this.http.post(url, data)
    }
    else {
      return this.postText(url, data)
    }
  }

  postText(url: string, data: any): Observable<any> {

    const body = window.btoa(JSON.stringify(data));

    return this.handleResponse(
      this.http.post(url, { data: body }).pipe(map((res: any) => {
        let response: any = window.atob(res.data);
        response = JSON.parse(response);
        return response;
      }))
    )
  }

  handleResponse(res: any) {
    console.log(res)
    return res
  }

}
