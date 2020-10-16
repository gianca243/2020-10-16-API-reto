import { Component, OnInit } from '@angular/core';
import { ScriptManagerService } from '../script-manager.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.scriptManager.cargarScript(['getData'])
    const API = "https://rickandmortyapi.com/api/character";
    this.obtenerInfo(API)
  }
  //URL de la API
  items=[]
  anterior=false
  siguiente=false
// Obtener resultado de API

obtenerInfo  (api)  {
  const json: Object = {}
  return fetch(api)
    .then((response) => response.json())
    .then( json =>{
        this.items = json.results
        this.anterior = json.info.prev
        this.siguiente = json.info.next
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};

//EjecutargetData
// getData(API);
}
