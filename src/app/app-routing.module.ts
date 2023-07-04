import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'cursos', component: CardComponent},
  {path: 'cursos/:id', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
