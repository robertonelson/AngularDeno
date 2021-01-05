import {Component} from '@angular/core';

@Component({
  selector : 'app-libros',
  templateUrl : './libros.component.html'
})

export class LibrosComponent{
  libros = ['La Biblia','El Quijote de la Mancha','Cien Años de Soledad'];
}
