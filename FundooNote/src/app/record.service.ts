import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http : HttpClient) {
    
   }
  getData()
  {
    return this.http.get('http://localhost:1234/file.php').subscribe(data=>
    {
      console.log("we got ",data)
      //this.records=data.toString
    })

  }
}
