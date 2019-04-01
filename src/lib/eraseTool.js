export default class Erase {
    constructor(core) {
        this.context = core.context;
        this.started = core.started;
        this.canvas = core.canvas;     
        this.offsetX = this.canvas.offsetLeft;
        this.offsetY = this.canvas.offsetTop
        this.lastX = this.lastY = 0;
        this.mouseX = this.mouseY = 0;  
        this.isMouseDown=false;
        this.mode = "psen"

        this.mousedown = (e) => {
            this.mouseX=parseInt(e.clientX-this.offsetX);
            this.mouseY=parseInt(e.clientY-this.offsetY);

            // Put your mousedown stuff here
            this.lastX=this.mouseX;
            this.lastY=this.mouseY;
            this.isMouseDown=true;
        };

        this.mousemove = (e) => {
            this.mouseX=parseInt(e.clientX-this.offsetX);
            this.mouseY=parseInt(e.clientY-this.offsetY);

            // Put your mousemove stuff here
            if(this.isMouseDown){
                this.context.beginPath();
                if(this.mode=="pen"){
                this.context.globalCompositeOperation="source-over";
                this.context.moveTo(this.lastX,this.lastY);
                this.context.lineTo(this.mouseX,this.mouseY);
                this.context.stroke();     
                }else{
                this.context.globalCompositeOperation="destination-out";
                this.context.arc(this.lastX,this.lastY,8,0,Math.PI*2,false);
                this.context.fill();
                }
                this.lastX=this.mouseX;
                this.lastY=this.mouseY;
            }

            
        };

        this.mouseup = (e) => {
            this.mouseX=parseInt(e.clientX-this.offsetX);
            this.mouseY=parseInt(e.clientY-this.offsetY);
          
            // Put your mouseup stuff here
            this.isMouseDown=false;
        };

        this.mouseleave = (ev) => {
          // this.started = false;
        };

        

    }

}