import { Injectable,OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { NoteserviceService } from './noteservice.service';

@Injectable({
  providedIn: 'root'
})
export class CardUpdateServiceService implements OnInit{

  private allNotes=new BehaviorSubject([]);
  
  currentnotes=this.allNotes.asObservable();

  

  // showIcon : boolean ;
  constructor(private notecrud:NoteserviceService) {
    
    console.log("card constructor")
    this.notecrud.getAllNotes().subscribe(
      response =>{
        console.log('response')
        console.log(response.length);
        // if(response.length!=0)
            
        // if(response==null)
        //       console.log(this.allNotes)
        this.allNotes.next(response)

      },
      

      error=>
      {
        console.log(error);
      }
    );
  
   }

   ngOnInit():void {
    
   }
   
  changemessage()
  {
    console.log("change message");
    
    this.notecrud.getAllNotes().subscribe(
      response=>{
  
        this.allNotes.next(response);
      },
      error =>{  
       console.log(error);
      }
    )          
  }
}