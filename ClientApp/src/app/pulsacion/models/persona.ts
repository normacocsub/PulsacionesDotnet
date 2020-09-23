import { ThrowStmt } from "@angular/compiler";

export class Persona {​

    identificacion: string;​

    nombre: string;​

    sexo: string;​

    edad: number;​

    pulsacion: number;​

    CalcularPulsacion(){
        if(this.sexo === "Femenino"){
            this.pulsacion = ( 210 - this.edad ) / 10;
        }
        else{
            this.pulsacion = ( 220 - this.edad ) / 10;
        }
        
    }
}
