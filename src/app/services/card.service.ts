import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../Curso';
import { API_PATH, API_PATH_Local } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${API_PATH}cursos`);
  }

  getItem(id: number): Observable<Curso>{
    const item = this.http.get<Curso>(`${API_PATH}cursos/${id}`);
    return item;
  }  
  
  obterTodosCursos(){
    const todosCursos = this.http.get<Curso[]>(`${API_PATH}cursos`).toPromise();
    return todosCursos
  }
  
  getById(id: number){
    const cursoID = this.http.get<Curso>(`${API_PATH}cursos/${id}`).toPromise(); 
    return cursoID
  }
  
}
  


  
  
  
  

  
  
  // getCurses(): Observable<Curso[]>{
  //   return this.http.get<Curso[]>
  // }

  // private apiUrl = 'http://localhost:3000/cursos' /////chamada local

  // constructor(private http: HttpClient) {}

  // getAll(): Observable<Curso[]> {
  //   return this.http.get<Curso[]>(this.apiUrl)
  // }


  // showCursos(curso: Curso){
  //   console.log("clicando");    
  // }

