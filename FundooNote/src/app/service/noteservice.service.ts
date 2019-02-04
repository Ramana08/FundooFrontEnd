import { Injectable } from '@angular/core';
import { NoteModel } from '../models/note.model';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';




  
@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {


   
note : NoteModel=new NoteModel();
  constructor(private http: HttpClient) { }
ngOnInit()
{
  console.log("Note Service")
 

}
  private userUrl = 'http://localhost:8080/fundoo/';

  public createNote(note: NoteModel) :any {
    console.log("local ",localStorage.getItem('jwtToken'))

   var httpOptions = {

      headers: new HttpHeaders({'Content-Type': 'application/json' ,
      'token':localStorage.getItem('jwtToken')}
      )};
   
    console.log(this.userUrl+'addNote');
    console.log("header ",httpOptions.headers.get('token'));

    httpOptions.headers.set('token',localStorage.getItem('jwtToken'));
    console.log("after ",httpOptions.headers.get('token'));

    return this.http.post<NoteModel>(this.userUrl+'addNote',note,httpOptions);
   
  }
 

  public getAllNotes() : Observable<NoteModel[]> | any
  {
    console.log("local ",localStorage.getItem('jwtToken'))
    var httpOptions2 = {
      headers : new HttpHeaders({'token' : localStorage.getItem('jwtToken')
    
      })
    };
    console.log(this.userUrl+'getAllNote');
   
   // console.log("header ",httpOptions2.headers.get('token'));
     console.log('get url',this.userUrl+'getAllNote');

      return this.http.get<NoteModel[]>(this.userUrl+"getAllNote",httpOptions2);   
        
     }

     

     public archiveNote(note : NoteModel) : any{
      var httpOptions = {

        headers: new HttpHeaders({'Content-Type': 'application/json' ,
        'token':localStorage.getItem('jwtToken')}
        )};
      console.log(this.userUrl+"archiveNote")
       return this.http.post(this.userUrl+"archiveNote",note,httpOptions)
     }
     


     public getArchiveNotes() : Observable<NoteModel[]> | any
     {
       console.log("local ",localStorage.getItem('jwtToken'))
       var httpOptions2 = {
         headers : new HttpHeaders({'token' : localStorage.getItem('jwtToken')
       
         })
       };
       console.log(this.userUrl+'getArchiveNote');
      
       console.log("header ",httpOptions2.headers.get('token'));
        console.log('get url',this.userUrl+'getArchiveNote');
   
         return this.http.get<NoteModel[]>(this.userUrl+"getArchiveNote",httpOptions2);     
        }


        public deleteNote(note : NoteModel) : any{
          var httpOptions = {

            headers: new HttpHeaders({'Content-Type': 'application/json' ,
            'token':localStorage.getItem('jwtToken')}
            )};
            
           return this.http.post<NoteModel>(this.userUrl+"trashNote",note,httpOptions)
        }


        public updateNote(Note : NoteModel) : any 
        {
          var httpOptions = {

            headers: new HttpHeaders({'Content-Type': 'application/json' ,
           'token':localStorage.getItem('jwtToken')}
          )};

           return this.http.post<NoteModel>(this.userUrl+'updateNote',Note,httpOptions);
        }

        public updateArchiveNote(note : NoteModel) : any 
         {
            var httpOptions = {

               headers: new HttpHeaders({'Content-Type': 'application/json' ,
              'token':localStorage.getItem('jwtToken')}
             )};
 
              return this.http.post<NoteModel>(this.userUrl+'updateArchiveNote',note,httpOptions);

          }  
          
          public updateTrashNote(note : NoteModel) : any{
            var httpOptions = {

              headers: new HttpHeaders({'Content-Type': 'application/json' ,
             'token':localStorage.getItem('jwtToken')}
            )};
            return this.http.post<NoteModel>(this.userUrl+'updateTrashNote',note,httpOptions);

          }
          public updateColorNote(note : NoteModel) : any{
            var httpOptions = {

              headers: new HttpHeaders({'Content-Type': 'application/json' ,
             'token':localStorage.getItem('jwtToken')}
            )};
            return this.http.post<NoteModel>(this.userUrl+'updateColorNote',note,httpOptions);

          }




          public getTrashNotes() : Observable<NoteModel> | any{
            console.log("local ",localStorage.getItem('jwtToken'))
            var httpOptions2 = {
              headers : new HttpHeaders({'token' : localStorage.getItem('jwtToken')
            
              })
            };
            console.log(this.userUrl+'getTrashNote');
           
            console.log("header ",httpOptions2.headers.get('token'));
             console.log('get url',this.userUrl+'getTrashNote');
        
              return this.http.get<NoteModel[]>(this.userUrl+"getTrashNote",httpOptions2);     
          }  
}




