import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {
  pensamento : Pensamento= {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
      this.service.criar(this.pensamento).subscribe((pensamento) =>{
        this.router.navigate(["/listarPensamento"])
      })
  }

  cancelarPensamento(){
    this.router.navigate(["/listarPensamento"])
  }

}
