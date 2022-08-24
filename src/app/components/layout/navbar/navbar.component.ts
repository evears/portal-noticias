import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'breaking-news';
  paisSeleccionado = 'us';

  categorias: any[] = [
    { value: 'breaking-news', nombre: 'Último Momento' },
    { value: 'world', nombre: 'Internacionales' },
    { value: 'nation', nombre: 'Nacionales' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ]

  paises: any[] = [
    { value: 'us', nombre: 'Estados Unidos' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'de', nombre: 'Alemania' },
    { value: 'cn', nombre: 'China' },
    { value: 'pe', nombre: 'Perú' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
