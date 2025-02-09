import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmissionServiceService {

  constructor( private Http:HttpClient) { }


  public RegisterAdmission(admission: any,id:number){
    console.log(admission);
    return this.Http.post(`https://backenduniv.herokuapp.com/api/admission/create/${id}`,admission,{responseType:'text' as 'json'});
  
            }

            public FetchAdmission(id: any){
    
              return this.Http.get(`https://backenduniv.herokuapp.com/api/admission/cand/${id}`,{responseType:'text' as 'json'});
            
                      }


                  public Paiement(id: any){
    
                        return this.Http.get(`https://backenduniv.herokuapp.com/api/admission/preuve/${id}`,{responseType:'text' as 'json'});
                      
                                }
          
                                
                  public secretaire(){
    
                    return this.Http.get(`https://backenduniv.herokuapp.com/api/admission/secretaire`,{responseType:'text' as 'json'});
                  
                            }
              
}

