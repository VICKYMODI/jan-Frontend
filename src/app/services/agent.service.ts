import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../app.constant';
var config = {headers: {'IF-Match': 'your-data'}};
@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class AgentService {

  
  Username : any
  Password : any
  Name : any
  ID : any;

  API_URL : string = "127.0.0.1:5000";
  constructor(private http: HttpClient) { }
  


  get(path, params: HttpParams = new HttpParams()) {
    return this.http.get(`${API_URL}/${path}`, { params });  
  }
  patch(path, params) {
    return this.http.patch(`${API_URL}/${path}`, params);
  }


  post(path, params) {
    return this.http.post(`${API_URL}/${path}`, params);
  }

  postdistance(path,params){
    return this.http.post(`${path}`,params)
  }

}
