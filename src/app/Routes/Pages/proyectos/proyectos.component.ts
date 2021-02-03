import { JsonService } from './../../Services/json.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyectos = [];
  constructor(private jsonService: JsonService) { }


  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos(): any {
    this.jsonService.getJson('assets/json/proyectos.json')
    .subscribe((res: any) => {
      this.listaProyectos = res;
      console.log(res);
    });
  }

}
