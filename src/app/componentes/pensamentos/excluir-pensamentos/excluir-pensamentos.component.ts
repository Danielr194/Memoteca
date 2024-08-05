import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css']
})
export class ExcluirPensamentosComponent implements OnInit {

  pensamento: Pensamento={
    id : 0,
    conteudo: "",
    modelo: "",
    autoria: ""
  }

  constructor(private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  //ngOnInit: metodo chamado apenas uma vez, após o componente ter sido inicializado, mas antes que ele seja exibido na tela.
  ngOnInit(): void {
    //const id é usada para recuperar um parâmetro de rota da URL
    const id = this.route.snapshot.paramMap.get("id")
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>{
        this.pensamento = pensamento
    })
  }

  excluirPensamentos(){
    if(this.pensamento.id){
      this.service.deletar(this.pensamento.id).subscribe(() =>{
        this.router.navigate(["/listarPensamento"])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
