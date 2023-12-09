import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';

  num1: number = 0;
  num2: number = 0;
  operacion: string ="";
  pantalla: string ="";
  operandos: string[] | null = null;
  resultado_mostrado: boolean = false;

  addChar(char: string){
    if(this.resultado_mostrado){
      this.pantalla="";
      this.resultado_mostrado = false;
    }
    this.pantalla+=char;
  }

  addOperacion(operacion: string){
    this.pantalla+=operacion;
    this.operacion = operacion;
    this.resultado_mostrado = false;
  }

  calcular(){
    this.operandos = this.pantalla.split(this.operacion);
    this.num1 = parseFloat(this.operandos[0]);
    this.num2 = parseFloat(this.operandos[1]);
    this.pantalla = this.resultado();
    this.resultado_mostrado = true;
  }

  resultado(){
    let result: string;
    switch(this.operacion){
      case "+":
        result = (this.num1 + this.num2).toString();
        break;
      case "-":
        result = (this.num1 - this.num2).toString();
        break;
      case "*":
        result = (this.num1 * this.num2).toString();
        break;
      case "/":
        result = (this.num1 / this.num2).toString();
        break;
      default:
        result = "";
    }
    return result;
  }

  eliminar(){
    this.pantalla ="";
    this.num1 = this.num2 = 0;
  }

}
