import { Injectable } from '@angular/core';
import { NoteModel } from './models/note.model';
import { HttpHeaders ,HttpClient} from '@angular/common/http';



const httpOptions = {

  headers: new HttpHeaders({'Content-Type': 'application/json' ,
  'token':localStorage.getItem('jwtToken')}
  )};

  
@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  constructor(private http: HttpClient) { }
ngOnInit()
{
  httpOptions.headers.set('token',localStorage.getItem('jwtToken'));

}
  private userUrl = 'http://localhost:8080/fundoo/';

  public createNote(note: NoteModel) :any {
    console.log(this.userUrl+'addNote');
    console.log("local ",localStorage.getItem('jwtToken'))
    console.log("header ",httpOptions.headers.get('token'));

    httpOptions.headers.set('token',localStorage.getItem('jwtToken'));
    console.log("after ",httpOptions.headers.get('token'));

    return this.http.post<NoteModel>(this.userUrl+'addNote',note,httpOptions);
   
  }
 
}




