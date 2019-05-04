import Croppr from '../croppr';
import {
    PencilTool,
    MarkerTool,
    RectTool,
    LineArrowTool,
    LineTool,
    EllipseTool,
    TextTool,
    CropperTool,
} from '../tools';
import Menu from '../menu/menu'
export default class DrawingCore {
    constructor(elem, options) {
        this.elem = elem;
        this.options = options;
        this.started = false;
        this.tools = {
            pencil: PencilTool,
            marker: MarkerTool,
            rect: RectTool,
            line: LineTool,
            lineArrow: LineArrowTool,
            ellipse: EllipseTool,
            text: TextTool,
            cropper: CropperTool,
        };
        this.tool_default = 'cropper';
        this.cPushArray = new Array();
        this.cStep = -1;
        this.strokeStyle = '#ff0000';
        this.lineWidth = 4;
        this.canvasPic = new Image();
        this.init();        
    }
    init() {
        this.createCanvas(); 
        const menu = new Menu(this.elem);
        menu.creareMenu();
        this.handleMenuClick();
        this.handleColorChange();
        
    }

    createDropArea() {
        this.imgcroper = document.createElement('img');
        this.imgcroper.src = this.canvaso.toDataURL();
        document.body.appendChild(this.imgcroper)
        const croppr = new Croppr(this.imgcroper, {
            onInitialize: (instance) => { console.log(instance); },
            onCropStart: (data) => { console.log('start', data); },
            onCropEnd: (data) => { console.log('end', data); },
            onCropMove: (data) => { console.log('move', data); }
        });
    }

    handleMenuClick(){
        let toolSelect = document.querySelectorAll('.toolSelect a');
        toolSelect.forEach((item)=>{
            let id = item.id;
            let type = item.dataset.type;
            switch (type) {
                case 'tool':
                    item.addEventListener('click', (e) => {
                        toolSelect.forEach( (el) => {
                            if(!(el.className == e.currentTarget.className)) {
                                    el.classList.remove("active");
                            }
                        });
                        if(e.currentTarget.classList.contains('active')) {
                            e.currentTarget.classList.remove('active');
                            this.tool = null;
                        }
                        else {
                            e.currentTarget.classList.add('active');
                            this.tool = new this.tools[id](this);
                        }
                    });
                    break;
                case 'control':    
                    item.addEventListener('click', (e) => {
                        this.handleUndoRedo(id)
                    });
                    break;    
                default:
                    break;
            }
        });
    }

    handleColorChange() {
        let color = document.getElementById('inputColor');
        color.addEventListener('change',  (e) => {
            this.strokeStyle = e.target.value;
        });
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
        this.canvas.addEventListener('mousedown', this.canvasEvent.bind(this));
        this.canvas.addEventListener('mousemove', this.canvasEvent.bind(this));
        this.canvas.addEventListener('mouseup', this.canvasEvent.bind(this));
        this.canvas.addEventListener('mouseleave', this.canvasEvent.bind(this));
    } 

    canvasEvent (ev) {
        if (ev.layerX || ev.layerX == 0) { // Firefox
          ev._x = ev.layerX;
          ev._y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
          ev._x = ev.offsetX;
          ev._y = ev.offsetY;
        }
        var func = this.tool ? this.tool[ev.type] : null;
        if (func) {
            if(ev.type =='mouseup'){  
                debugger    
                if(!this.tool.name){
                    this.img_update();
                }        
                
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
        if (this.cStep > 0) {
            this.cStep--;
            this.canvasPic.src = this.cPushArray[this.cStep];
            this.canvasPic.onload = () => {
                this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.contexto.drawImage(this.canvasPic, 0, 0);
            }
        }        
    }

    cRedo() {
        if (this.cStep < this.cPushArray.length-1) {
            this.cStep++;
            this.canvasPic.src = this.cPushArray[this.cStep];
            this.canvasPic.onload = () => { 
                this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.contexto.drawImage(this.canvasPic, 0, 0);
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