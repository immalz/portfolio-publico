import { DarkmodeService } from './../../Services/darkmode.service';
import { ScriptsService } from './../../Services/scripts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private script: ScriptsService, private darkService: DarkmodeService) {
    script.Carga(['navbar']);
  }
  ngOnInit(): void {
  }

}
