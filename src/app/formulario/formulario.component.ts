import { Formu } from './Formu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  vare = '';
  lista = [
    { id: 1, name:'pipe'},
    { id: 2, name:'jose'}
  ];

  constructor() { }

  formu: Formu;

  ngOnInit() {
  }

  log(log) {
    console.log(log);
  }

  submit(formulario) {
    this.formu = formulario.value.algo;
    console.log(formulario.value.algo);
    console.log(this.vare);
    this.log(this.formu);
    
  }

}
