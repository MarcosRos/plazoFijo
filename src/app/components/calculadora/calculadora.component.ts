import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  tna: number = 97
  meses!: number
  sueldo!: number
  dineroAcumulado:number = 0
  totalGanancias:number = 0
  gananciasPorMes:number = 0
  mostrarResultado: boolean = false

  dineroAcumuladoString!:string
  totalGananciasString!:string
  gananciasPorMesString!:string
  constructor(){}

  calcular(){
    this.dineroAcumulado = 0;
    this.totalGanancias = 0;
    this.gananciasPorMes = 0;

    var tna = this.tna/12
    tna = tna/100    
    this.dineroAcumulado = 0
    for(var i = 1; i<=this.meses; i++){
      this.gananciasPorMes = (this.dineroAcumulado+this.sueldo)*tna
      this.dineroAcumulado = this.dineroAcumulado+ this.sueldo + this.gananciasPorMes
      this.totalGanancias = this.totalGanancias + this.gananciasPorMes
    }
    this.totalGanancias = Number(parseFloat(this.totalGanancias.toString()).toFixed(2))
    this.dineroAcumulado = Number(parseFloat(this.dineroAcumulado.toString()).toFixed(2))
    this.gananciasPorMes = Number(parseFloat(this.gananciasPorMes.toString()).toFixed(2))
    this.mostrarResultado = true

    this.totalGananciasString = this.totalGanancias.toString().replace('.', ',')
    this.dineroAcumuladoString = this.dineroAcumulado.toString().replace('.', ',')
    this.gananciasPorMesString = this.gananciasPorMes.toString().replace('.', ',')
    this.totalGananciasString = this.totalGananciasString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    this.dineroAcumuladoString = this.dineroAcumuladoString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    this.gananciasPorMesString = this.gananciasPorMesString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
