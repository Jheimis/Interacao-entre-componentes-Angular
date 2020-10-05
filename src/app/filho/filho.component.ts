import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  private _nome = '';

  @Input()
  set nome(nome:string){
    this._nome = (nome && nome.trim()) || '<Nome em branco>';
  }

  get nome(): string {return this._nome;}

  constructor() { }

  ngOnInit(): void {
  }

}
