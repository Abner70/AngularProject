import { Component, DoBootstrap, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Curso } from 'src/app/Curso';
import { API_PATH } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

curso?: Curso;  

cursos: Curso[]= [];


@Input() userData! : {email: string, role:string}
@Input() disciplina: string='';
@Input() dt: string='';


constructor(private cardService: CardService, private route:ActivatedRoute) {
  this.getCursos()
  this.getCurso(); /// acessa o service para pegar o dado

}
ngOnInit(): void {
  console.log("this.getCursos():");
}

  getCurso(){ /// acessa o service para pegar o dado
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.cardService.getItem(id).subscribe((curso)=> (this.curso = curso) );
  }   
  

getCursos(): void{  
  this.cardService.getAll().subscribe((cursos) => (this.cursos = cursos));
}


getData(id: number){
  const cardId = this.obterCursos()
  const account = this.getData(id)
  console.log("Card ID", cardId);
  console.log("Account", account);
  
}

obterCursos(): void{
  this.cardService.obterTodosCursos()
  .then(cursos => console.log(cursos))
  .catch(error => console.error(error));
}

obterPorId(){
  this.cardService.getById(16507966)
  .then(cursos => console.log(cursos?.nome))
  .catch(error => console.error(error));
}

}










  








  









//   {"id": 1, "nome": "Empreendedorismo", "capa": "https://demo.discent.com.br/dirVirtualLMS/arquivos/arquivosPorRange/0000821622/imagem/382703579ee7de086ff8f8be63eea64c.jpg", "dataMatricula": "2021-07-29", "terminoContrato": "2023-06-18", "progresso":5,"statusAcademico": "Expirado", "statusFinanceiro": "Quitado"},
//   {"id": 2, "nome": "Inglês","capa": "https://demo.discent.com.br/dirVirtualLMS/arquivos/arquivosPorRange/0000821622/imagem/382703579ee7de086ff8f8be63eea64c.jpg", "dataMatricula": "2021-07-29", "terminoContrato": "2023-06-18", "progresso":5,"statusAcademico": "Expirado", "statusFinanceiro": "Quitado"},
//   {"id": 3, "nome": "Ética","capa": "https://demo.discent.com.br/dirVirtualLMS/arquivos/arquivosPorRange/0000821622/imagem/382703579ee7de086ff8f8be63eea64c.jpg", "dataMatricula": "2021-07-29", "terminoContrato": "2023-06-18", "progresso":5,"statusAcademico": "Cancelado", "statusFinanceiro": "Quitado"},
//   {"id": 4, "nome": "Português","capa": "https://demo.discent.com.br/dirVirtualLMS/arquivos/arquivosPorRange/0000821622/imagem/382703579ee7de086ff8f8be63eea64c.jpg", "dataMatricula": "2021-07-29", "terminoContrato": "2023-06-18", "progresso":5,"statusAcademico": "Cancelado", "statusFinanceiro": "Quitado"}
// ];

// {
//   id: 1,
//   nome: "Empreendedorismo",
//   capa: "capa 1",
//   dataMatricula: '26/06',
//   terminoContrato: '26/06',
//   progresso: 10,
//   statusAcademico: 'expirado',
//   statusFinanceiro: 'quitado'
// }