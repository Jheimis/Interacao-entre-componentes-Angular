import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  @ViewChild(FilhoComponent, {static: false})

  private filhoComponent: FilhoComponent;    
  
  nome: string;

  ngAfterContentInit(){
   
    setTimeout(() => this.nome = this.filhoComponent.nome, 0);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
