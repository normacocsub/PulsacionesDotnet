import { Component, OnInit } from '@angular/core';
import { PersonaService } from './../../services/persona.service';
import { Persona } from './../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
persona: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona;
  }

  CalcularPulsacion(){
    this.persona.CalcularPulsacion();
  }
  add() {
    if(this.persona.pulsacion === undefined){
      window.alert("Debe Calcular la pulsacion ");
    }
    else{
      this.persona.CalcularPulsacion();
    alert('Se agrego una nueva persona' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
    }
  }

}
