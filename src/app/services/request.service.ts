import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }



  public auth(username:string,password:string) {

    return new Promise<any>(resolve=> {

      let url = "http://127.0.0.1:3000/api/login";

      
      let auth = {
        username,
        password
      };

      console.log(auth);
    this.http.post(url,auth, {
      responseType:"text"
    }).subscribe(data=> {
      
      resolve(data);
    });
    });
  }


}
