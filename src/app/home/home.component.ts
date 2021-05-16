import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entradaTempo: number;
  iniciado = "Timer iniciado!";
  contador = 0;
 
  constructor() { }

  ngOnInit(): void { }

  iniciar() {
    setTimeout(() => {
      this.playAudio()
    }, this.entradaTempo*1000*60);
  }
  
  intervalo(){
    setInterval( ()=>{this.contador ++},1000*60);
    
  }

  reiniciar(): void{
    this.entradaTempo = 0;
  }
  
  parar(): void{
    let audio = new Audio();
    audio.remove();
    clearTimeout();
  }
  
  playAudio(): any {
    let audio = new Audio();
    audio.src = "../../assets/alarm.mp3";
    audio.load();
    audio.play();
  }
  
  msgTimerIniciado(){
    return this.iniciado;
  }
}
