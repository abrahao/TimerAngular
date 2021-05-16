import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entradaTempo: number;

  constructor() { }

  ngOnInit(): void { }

  iniciar() {
    setTimeout(() => {
      this.playAudio()
    }, this.entradaTempo*1000*60);
  }
  reiniciar(): void{
    this.entradaTempo = 0;
  }
  parar(): void{
    clearTimeout();
  }
  playAudio(): any {
    let audio = new Audio();
    audio.src = "../../assets/alarm.mp3";
    audio.load();
    audio.play();
  }
}
