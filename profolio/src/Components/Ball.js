

class Ball{
     
    constructor( x, y, dx, dy, pick_color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.pick_color = pick_color;
         
        this.opacity = "0.5"
    }
    opacityUpdate(){

    }

    // draw(){
    //     this.c.beginPath();
    //     this.c.arc(this.x,this.y,5,0,2*Math.PI);
    //     this.c.fillStyle = "rgba(" + this.pick_color +","+this.opacity+")";
    //     this.c.fill();
    //       }
          
    update(){
      if( this.x >= window.innerWidth || this.x < 0 ){
        this.dx = -this.dx;
      }
      if( this.y >= window.innerHeight || this.y < 0 ){
        this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;      
            // this.draw();
          }



}


export default Ball