import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })
export class SearchService {
    
    token:any;
      
constructor(private http:HttpClient) { }

search(queryString: string): Observable<any> {
    this.fetchToken();
    const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
      })
    };
    return this.http.get("http://localhost:5550/userlist/userlist",httpOptions);
    
  }

  fetchToken(){
    const token = localStorage.getItem("token");
    this.token = token;

  }
}