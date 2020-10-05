import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  paises = ['Brasil', 'Estados Unidos', 'Japão', 'Israel'];

  @Input() votado: string = "";

  onVoted(votado: string) {
    this.votado = votado;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
