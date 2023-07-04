import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit  {

  name: string = "Abner";
    disciplina= {
    nome:"Empreendedorismmo", 
    tipo: "Lógica"  
  }
  constructor() {}
  ngOnInit(): void {
      
  }
}
