import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEC News';

  listNoticias: any[] = [];

  constructor(private noticiaService: NoticiaService) {
  }

  ngOnInit(): void {
    const defecto = {
      categoria: "breaking-news",
      pais: "us",
    }
    this.buscarNoticias(defecto)
  }

  buscarNoticias(parametros: any) {
    this.listNoticias = [];
    this.noticiaService.getNoticias(parametros).subscribe(data => {
      this.listNoticias = data.articles;
      console.log(this.listNoticias)
    }, error => {
      console.log(error);
    })
  }

}
