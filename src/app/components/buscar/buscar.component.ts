import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HeroesService} from '../../services/heroes.service'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {
  heroes:any[]=[]
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroeServicio: HeroesService) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.termino =params['termino']
      this.heroes = this._heroeServicio.buscarHeros(params['termino'])
    })
  }
}
