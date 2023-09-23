import { Wave } from "./wave.js";

export class WaveGroup{
  constructor(){
    this.totalwaves = 3;
    this.totalPoints = 6;

    this.color = ['rgba(255,0,0,0.4)','rgba(255,255,0,0.4)','rgba(0,255,158,0.4)']

    this.waves = [];
    
    for(let i = 0; i<this.totalwaves; i++){
      const wave = new Wave(        
        i,
        this.totalPoints,
        this.color[i],          
      );
      this.waves[i] = wave;
    }
  }

  resize(stageWidth,stageheight){
    for(let i=0;i<this.totalwaves;i++){
      const wave = this.waves[i];
      wave.resize(stageWidth,stageheight);
    }
  }

  draw(ctx){
    for(let i=0;i<this.totalwaves;i++){
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}