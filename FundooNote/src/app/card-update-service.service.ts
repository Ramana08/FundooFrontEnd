import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteModel } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class CardUpdateServiceService {

  constructor(private http: HttpClient) { }
  private userUrl = 'http://localhost:8080/fundoo/';

public updateNote(note : NoteModel) : any 
{
  var httpOptions = {

    headers: new HttpHeaders({'Content-Type': 'application/json' ,
    'token':localStorage.getItem('jwtToken')}
    )};
 
  return this.http.post<NoteModel>(this.userUrl+'updateArchiveNote',note,httpOptions);

} 


}
