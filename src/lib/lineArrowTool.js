export default class LineArrowTool{
    constructor(core){ 
        this.context = core.context;        
        this.started = core.started;
        this.mousedown = (ev) => {
            this.started = true;
            this.x1 = ev._x;
            this.y1 = ev._y;
        };    

        this.mousemove = (ev) => {     
            if (this.started) {
                this.x2 = ev._x;
                this.y2 = ev._y;
                if (this.x1 !== this.x2 || this.y1 !== this.y2) {
                    this.context.clearRect(0, 0, core.canvas.width, core.canvas.height);        
                    this.context.beginPath();
                    this.context.moveTo(this.x1, this.y1);
                    this.context.lineTo(this.x2,   this.y2);
                    this.context.strokeStyle = core.strokeStyle;
                    this.context.lineWidth = core.lineWidth;
                    this.context.stroke();
                    // draw the starting arrowhead
                    var endRadians = Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));
                    endRadians += ((this.x2 > this.x1) ? 90 : -90) * Math.PI / 180;
                    this.drawArrowhead(this.context, this.x2, this.y2, endRadians, core.lineWidth, core.strokeStyle, core.strokeStyle);
                    this.context.closePath();
                }
                
            }        
            
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


drawArrowhead(ctx, x, y, radians, lineWidth, strokeStyle, fillStyle) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(radians);
    ctx.moveTo(0, 0);
    ctx.lineTo(lineWidth, lineWidth*2);
    ctx.lineTo(-(lineWidth), lineWidth*2);
    ctx.closePath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}
    
}