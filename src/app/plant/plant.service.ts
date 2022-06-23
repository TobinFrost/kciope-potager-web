import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Plant } from './plant.model';
@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private apiURL = "http://localhost:9292/api/v1";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
 }

  getAll(type?: string): Observable<any> {
    const url = type ? `${this.apiURL}/plant?type=${type}` : `${this.apiURL}/plant/`;
    return this.httpClient.get(url)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(plant:Plant): Observable <any>{

    return this.httpClient.post(this.apiURL + '/plant/', JSON.stringify(plant), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/plant/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(plant:Plant): Observable<any> {

    return this.httpClient.put(this.apiURL + '/plant/', JSON.stringify(plant), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:string){
    return this.httpClient.delete(this.apiURL + '/plant/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
}
