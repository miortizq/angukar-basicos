import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Capitan América','Thor'];
  heroeBorrado: string = '';    //solucion profe
  //heroeBorrado2?: string = '';  //solucion mio

  borrarHeroe(){
    
    this.heroeBorrado = this.heroes.shift() || '';
    //this.heroeBorrado2 = this.heroes.shift();    

  }
}
