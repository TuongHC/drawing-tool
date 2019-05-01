export class MarkerTool{
  constructor(core){ 
      this.context = core.context;        
      this.started = core.started;
      this.points = [];
      this.mousedown = (e) => {
          this.context.globalAlpha = 0.4;
          this.points.push({ x: e.clientX, y: e.clientY });
          this.started = true;
      };
  
      this.mousemove = (e) => {
        if (this.started) {
          this.points.push({ x: e.clientX, y: e.clientY });
          this.context.beginPath();
          this.context.lineWidth = 10;
          this.context.strokeStyle = core.strokeStyle;
          if(this.points.length > 1) {
            this.context.moveTo(this.points[this.points.length-2].x, this.points[this.points.length-2].y);
            this.context.lineTo(this.points[this.points.length-1].x, this.points[this.points.length-1].y);
          }
          this.context.stroke();
          this.context.closePath();
        }
      };
  
      this.mouseup = (e) => {
        this.context.globalAlpha = 1;
        this.started = false;
        this.points.length = 0;
      };

      this.mouseleave = (e) => {
        this.started = false;
        this.points.length = 0;
      };
  } 
  
}