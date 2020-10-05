import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {


  @Input() pais : string; /*@Input pais recebe o nome dos países; */

  @Output() votado = new EventEmitter<string>();  /*EventEmitter é criado e associado à variável decorada votado. Já o decorator @Output 
  permite que os dados dessa variável sejam passados para o componente pai.*/

  vota(pais: string){  /* Através do método vota o nome do país é passado para componente pai através do this.votado.emit(pais).*/ 

    this.votado.emit(pais);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
