import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
   baseurl:any="http://localhost:4000";

  constructor(private http: HttpClient) { }
 
  postrequest(url: any, data: any) {

    // console.log(url,"urrrllll")

    if (url == '/verify') {
      return this.http.post(this.baseurl+url, data)
    }
    else {
      return this.postText(this.baseurl+url, data)
    }
  }

  postText(url: string, data: any): Observable<any> {
      // var b64 = window.btoa(unescape(encodeURIComponent(str)))
      // var str2 = decodeURIComponent(escape(window.atob(b64)));
    // const body = window.btoa((JSON.stringify(data)));
    const body = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    return this.handleResponse(
      this.http.post(url, { data: body }).pipe(map((res: any) => {
        let response: any = window.atob(res.data);
        response = JSON.parse(response);
        // console.log(response,"responseeeeeeeeeeeeeee","urlllllllllll",url,body,"data")
        return response;
      }))
    )
  }

  handleResponse(res: any) {
    // console.log(res)
    return res
  }

}
