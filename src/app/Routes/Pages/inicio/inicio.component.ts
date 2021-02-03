import { ScriptsService } from './../../Services/scripts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private scriptsService: ScriptsService) { }

  ngOnInit(): void {
    this.scriptsService.Carga(['particles']);
  }

}
