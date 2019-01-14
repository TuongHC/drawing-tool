// import dependencies
// return UserList class
export default class DrawingCore{
    constructor(elem, options){
        this.elem = elem;
        this.options = options;
        this.initialized = false;        
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();
        this.paint = false;
        this.backgroundImage = new Image();

        this.cPushArray = new Array();
        this.cStep = -1;

        this.init();        
    }
    // initialize plugin
    init() { 
        // set initialized to `true`
        this.createDOM(this.elem);
        this.initialized = true;
    }
    // get fullname of the user

    createDOM(element) {
        this.undo = document.getElementById('undo');
        this.canvas = document.createElement('canvas');
        this.canvas.id = "canvas";
        this.canvas.width = this.options.width;
        this.canvas.height = this.options.height;
        element.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvas.addEventListener('mousemove', this.onMousemove.bind(this));
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        // this.canvas.addEventListener('dblclick', function(){return false});
        this.undo.addEventListener('click', this.cUndo.bind(this));
        
        //targetEl.parentElement.replaceChild(this.canvas, targetEl);        
    }

    onMouseDown(e){  
        e.preventDefault ? e.preventDefault() : e.returnValue = false
        this.paint = true;
        //this.Draw(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
        this.Draw(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop, false);
        //this.redraw();
    }

    onMousemove(e){
        if(this.paint){
           // this.Draw(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop, true);
            this.Draw(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop, true);
            // this.redraw();
        }        
    }

    onMouseUp(e){
        this.paint = false;
        this.cPush();
    }

    onMouseLeave(e){
        this.paint = false;
    }   

    addClick(x, y, dragging){
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
    }

    Draw(x, y, isDown) {
        if (isDown) {
            this.context.beginPath();
            this.context.strokeStyle = "#df4b26";
            this.context.lineJoin = "round";
            this.context.lineWidth = 5;
            this.context.moveTo(this.lastX, this.lastY);
            this.context.lineTo(x, y);
            this.context.closePath();
            this.context.stroke();
        }
        this.lastX = x;
        this.lastY = y;
    }
    
    redraw(){
        // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clears the canvas
        
        this.context.strokeStyle = "#df4b26";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
        this.context.moveTo(this.clickX, this.clickY);
        this.context.lineTo(this.clickX, this.clickY);
        
           this.context.closePath();
           this.context.stroke();
                  
        // for(var i=0; i < this.clickX.length; i++) {		
        //   this.context.beginPath();
        //   if(this.clickDrag[i] && i){
        //     this.context.moveTo(this.clickX[i-1], this.clickY[i-1]);
        //    }else{
        //      this.context.moveTo(this.clickX[i]-1, this.clickY[i]);
        //    }
        //    this.context.lineTo(this.clickX[i], this.clickY[i]);
        //    this.context.closePath();
        //    this.context.stroke();
        // }
    }

    cPush() {
        this.cStep++;
        if (this.cStep < this.cPushArray.length) {
             this.cPushArray.length = this.cStep; 
        }
       
        this.cPushArray.push(this.canvas.toDataURL());
        document.title = this.cStep + ":" + this.cPushArray.length;
    }

   cUndo() {       
        if (this.cStep > 0) {
            this.cStep--;
            var canvasPic = new Image();
            canvasPic.src = this.cPushArray[this.cStep];
            canvasPic.onload = () => {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                
                this.context.drawImage(canvasPic, 0, 0);
            }
          //  document.title = cStep + ":" + cPushArray.length;
        }
        
    }
    
}