// import PencilTool from '../tools/pencilTool';
// import RectTool from '../tools/rectTool';
// import LineArrowTool from '../tools/lineArrowTool';
// import LineTool from '../tools/lineTool';
// import EllipseTool from '../tools/ellipseTool';
// import TextTool from '../tools/textTool';
import {
    PencilTool,
    MarkerTool,
    RectTool,
    LineArrowTool,
    LineTool,
    EllipseTool,
    TextTool
} from '../tools';
import Menu from '../menu/menu'
export default class DrawingCore{
    constructor(elem, options){
        this.elem = elem;
        this.options = options;
        this.started = false;
        this.tool_default = 'rect';
        this.tools = {
            pencil: PencilTool,
            marker: MarkerTool,
            rect: RectTool,
            line: LineTool,
            lineArrow: LineArrowTool,
            ellipse: EllipseTool,
            text: TextTool,
        };
        this.cPushArray = new Array();
        this.cStep = -1;
        this.strokeStyle = 'red';
        this.lineWidth = 5;
        this.init();        
    }
    init() {
        this.createCanvas(); 
        const menu = new Menu(this.elem);
        menu.creareMenu();
        var toolSelect = document.querySelectorAll('.toolSelect a')
        toolSelect.forEach((item)=>{
            let id = item.id;
            let type = item.dataset.type;
            if(type == 'tool'){
                item.addEventListener('click', (e) => {
                    this.tool = new this.tools[id](this);
                });
            }
            else if (type == 'color') {
                item.addEventListener('click', (e) => {
                    this.strokeStyle = id;
                });
            }
            else if (type == 'control') {
                item.addEventListener('click', (e) => {
                    this.handleUndoRedo(id)
                });
            }
           
        })
       
    }

    createCanvas() {
        this.canvaso = document.createElement('canvas');
        this.canvaso.id = "imageView";
        this.canvaso.width = this.options.width ? this.options.width : window.innerWidth;
        this.canvaso.height = this.options.height ? this.options.height : window.innerHeight;
        this.elem.appendChild(this.canvaso);
        this.contexto = this.canvaso.getContext("2d");
        this.canvas = document.createElement('canvas');    
        this.canvas.id = 'imageTemp';
        this.canvas.width  = this.options.width ? this.options.width : window.innerWidth;
        this.canvas.height = this.options.height ? this.options.height : window.innerHeight;
        
        this.elem.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        if(this.options.bgImage) {
            this.bgImage = new Image();
            this.bgImage.src = this.options.bgImage;
            this.bgImage.onload = () => {
                this.contexto.drawImage(this.bgImage, 0, 0);
                this.cPush();
            }
        }
        else {
            this.cPush();
        }
        
        if (this.tools[this.tool_default]) {
            this.tool = new this.tools[this.tool_default](this);           
        }
        this.canvas.addEventListener('mousedown', this.ev_canvas.bind(this));
        this.canvas.addEventListener('mousemove', this.ev_canvas.bind(this));
        this.canvas.addEventListener('mouseup', this.ev_canvas.bind(this));
        this.canvas.addEventListener('mouseleave', this.ev_canvas.bind(this));
       // this.cPush();    
    } 

    ev_canvas (ev) {
        if (ev.layerX || ev.layerX == 0) { // Firefox
          ev._x = ev.layerX;
          ev._y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
          ev._x = ev.offsetX;
          ev._y = ev.offsetY;
        }
        // Call the event handler of the tool.
        var func = this.tool[ev.type];
        if (func) {
            if(ev.type =='mouseup'){                
                this.img_update();
            }
            if(ev.type =='mousedown'){
                ev.preventDefault ? ev.preventDefault() : ev.returnValue = false
            }
          func(ev);
        }
    }

    img_update () {
        this.contexto.drawImage(this.canvas, 0, 0);
        this.cPush();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
       
    }
    
    cPush() {
        // add to history if there are something is drawn         
        if(this.cPushArray[this.cStep] != this.canvaso.toDataURL()){
            this.cStep++;
            if (this.cStep < this.cPushArray.length) {
                this.cPushArray.length = this.cStep; 
            } 
            this.cPushArray.push(this.canvaso.toDataURL());
            document.title = this.cStep + ":" + this.cPushArray.length;
        }        
    }

    cUndo() {   
        debugger    
        if (this.cStep > 0) {
            this.cStep--;
            var canvasPic = new Image();
            canvasPic.src = this.cPushArray[this.cStep];
            canvasPic.onload = () => {
                this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.contexto.drawImage(canvasPic, 0, 0);
            }
        }        
    }

    cRedo() {
        if (this.cStep < this.cPushArray.length-1) {
            this.cStep++;
            var canvasPic = new Image();
            canvasPic.src = this.cPushArray[this.cStep];
            canvasPic.onload = () => { 
                this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.contexto.drawImage(canvasPic, 0, 0);
             }
            //document.title = cStep + ":" + cPushArray.length;
        }
    }

    handleUndoRedo(id){
        if(id == 'undo'){
            this.cUndo();
        }
        else{
            this.cRedo();
        }
    }
    
}