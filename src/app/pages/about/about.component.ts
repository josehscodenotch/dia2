import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Autor } from '../../models/autor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit 
{
  public miAutor: Autor;
  public miClaseCSS: string;
  public isHidden: boolean;
  public miColor: string;
  
  constructor() 
  {
      this.miAutor    = new Autor("Maria", "Rodriguez", 44)
      this.miClaseCSS = "clase2";
      this.isHidden   = false;
      this.miColor    = "yellow";
  }        

  public nombreCompleto():string
  {
    return this.miAutor.nombreCompleto();
  }

  enviar(nuevoNombre: HTMLInputElement)
  {
    console.log(this.miAutor.nombre);
    this.miAutor.nombre = nuevoNombre.value;
    console.log(this.miAutor.nombre);
  }

  enviar2(nuevoNombre: string)
  {
    console.log(this.miAutor.nombre);
    this.miAutor.nombre = nuevoNombre;
    console.log(this.miAutor.nombre);
  }

  ngOnInit(): void {
  }

}
