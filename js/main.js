import { WaveGroup } from "./waveGroup.js";

class App{
  constructor(){
    this.canvas= document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.WaveGroup = new WaveGroup();

    

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));

  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageheight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageheight * 2;
    this.ctx.scale(2,2);

    this.WaveGroup.resize(this.stageWidth, this.stageheight);
   
  }

  

  animate(){
    
    this.ctx.clearRect(0,0, this.stageWidth, this.stageheight);
    this.WaveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));


  }
}

window.onload = ()=>{
  new App();
}