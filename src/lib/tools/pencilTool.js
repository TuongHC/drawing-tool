export class PencilTool{
    constructor(core){ 
        this.context = core.context;        
        this.started = core.started;
        this.mousedown = (ev) => {
            this.context.beginPath();
            this.context.moveTo(ev._x, ev._y);
            this.started = true;
        };
    
        // This function is called every time you move the mouse. Obviously, it only 
        // draws if the tool.started state is set to true (when you are holding down 
        // the mouse button).
        this.mousemove = (ev) => {
          if (this.started) {
            this.context.lineTo(ev._x, ev._y);
            this.context.strokeStyle = core.strokeStyle;
            this.context.lineWidth = core.lineWidth;
            this.context.stroke();
          }
        };
    
        // This is called when you release the mouse button.
        this.mouseup = (ev) => {
            this.started = false;
        };

        this.mouseleave = (ev) => {
            this.started = false;
            
        };
    } 
    
}