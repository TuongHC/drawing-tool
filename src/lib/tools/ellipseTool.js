export class EllipseTool {
    constructor(core) {
        this.context = core.context;
        this.started = core.started;
        this.canvas = core.canvas;     
        this.canvasx = this.canvas.offsetLeft;
        this.canvasy = this.canvas.offsetTop
        this.last_mousex = this.last_mousey = 0;
        this.mousex = this.mousey = 0;  

        this.mousedown = (e) => {
            this.started = true;
            this.last_mousex = parseInt(e._x-this.canvasx);
	        this.last_mousey = parseInt(e._y-this.canvasy);
        };

        this.mousemove = (e) => {
            this.mousex = parseInt(e._x-this.canvasx);
            this.mousey = parseInt(e._y-this.canvasy);
            if (this.started) { 
                this.context.clearRect(0,0,this.canvas.width,this.canvas.height); //clear canvas
                //Save
                this.context.save();
                this.context.beginPath();
                //Dynamic scaling
                var scalex = 1*((this.mousex-this.last_mousex)/2);
                var scaley = 1*((this.mousey-this.last_mousey)/2);
                this.context.scale(scalex,scaley);
                //Create ellipse
                var centerx = (this.last_mousex/scalex)+1;
                var centery = (this.last_mousey/scaley)+1;
                this.context.arc(centerx, centery, 1, 0, 2*Math.PI);
                //Restore and draw
                this.context.restore();
                this.context.strokeStyle = core.strokeStyle;
                this.context.lineWidth = core.lineWidth;
                this.context.stroke();
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

}