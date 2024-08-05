import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentosComponent } from './componentes/pensamentos/excluir-pensamentos/excluir-pensamentos.component';
import { EditarPensamentosComponent } from './componentes/pensamentos/editar-pensamentos/editar-pensamentos.component';

const routes: Routes = [
  { path: "",
    redirectTo: "listarPensamento",
    pathMatch:"full"

  },
  {
    path:"criarPensamento",
    component: CriarPensamentosComponent
  },
  {
    path:"listarPensamento",
    component: ListarPensamentoComponent
  },
  {
    path: "pensamentos/editarPensamento/:id",
    component: EditarPensamentosComponent
  },
  {
    path:"pensamentos/deletarPensamento/:id",
    component: ExcluirPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
