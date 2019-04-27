export default class MoveTool{
  constructor(core){ 
      this.context = core.context;        
      this.started = core.started;

      this.mousedown = (ev) => {
          this.started = true;
          this.x0 = ev._x;
          this.y0 = ev._y;
      };    

      this.mousemove = (ev) => {          
          if (!this.started) {
              return;
          }        
          this.context.clearRect(0, 0, core.canvas.width, core.canvas.height);        
          this.context.beginPath();
          this.context.moveTo(this.x0, this.y0);
          this.context.lineTo(ev._x,   ev._y);
          this.context.strokeStyle = core.strokeStyle;
          this.context.lineWidth = core.lineWidth;
          this.context.stroke();
          this.context.closePath();
      };    
     
      this.mouseup = (ev) => {
        if (this.started) {
          this.mousemove(ev);
          this.started = false;
        }
      };

      this.mouseleave = (ev) => {
          this.started = false;
          
      };
  } 
  
}