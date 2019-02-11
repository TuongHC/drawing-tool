// import dependencies
// return UserList class
import PencilTool from './pencilTool';
import RectTool from './rectTool';
import LineArrowTool from './lineArrowTool';
import LineTool from './lineTool';
import EllipseTool from './ellipseTool';

export default class DrawingCore{
    constructor(elem, options){
        this.elem = elem;
        this.options = options;
        this.initialized = false;
        this.started = false;
        this.tool_default = 'rect'
        this.tools = {
            pencil: PencilTool,
            rect: RectTool,
            line: LineTool,
            lineArrow: LineArrowTool,
            ellipse: EllipseTool
        };
        this.backgroundImage = new Image();
        this.cPushArray = new Array();
        this.cStep = -1;
        this.strokeStyle = 'red';
        this.lineWidth = 5;
        this.init();        
    }
    // initialize plugin
    init() { 
        // set initialized to `true`
        this.createDOM(this.elem);    
        this. creareMenu();

        // var toolSelect = document.getElementsByClassName("tool");
        var toolSelect = document.querySelectorAll('a')
        for(let i = 0; i < toolSelect.length; i ++) {            
            toolSelect[i].addEventListener('click', (e) => {
                e.preventDefault ? e.preventDefault() : e.returnValue = false
                let id = e.toElement.id;
                let type = e.toElement.dataset.type;
                if(type == 'tool'){                    
                    if (this.tools[id]) {
                        this.tool = new this.tools[id](this);
                        //this.tool_select.value = this.tool_default;
                    }
                }    
                else if (type == 'color'){
                    this.strokeStyle = id;
                }
                else if (type == 'control'){                    
                    this.handleUndoRedo(id)
                }
            });
        }
       
    }
    // get fullname of the user

    createDOM(element) {
        this.undo = document.getElementById('undo');
        this.redo = document.getElementById('redo');
        this.canvaso = document.createElement('canvas');
        this.canvaso.id = "imageView";
        this.canvaso.width = this.options.width;
        this.canvaso.height = this.options.height;
        element.appendChild(this.canvaso);
        this.contexto = this.canvaso.getContext("2d");

        this.canvas = document.createElement('canvas');    
        this.canvas.id = 'imageTemp';
        this.canvas.width  = this.options.width;
        this.canvas.height = this.options.width;

        element.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");

       
        if (this.tools[this.tool_default]) {
            this.tool = new this.tools[this.tool_default](this);           
          }

        this.canvas.addEventListener('mousedown', this.ev_canvas.bind(this));
        this.canvas.addEventListener('mousemove', this.ev_canvas.bind(this));
        this.canvas.addEventListener('mouseup', this.ev_canvas.bind(this));
        this.canvas.addEventListener('mouseleave', this.ev_canvas.bind(this));
        this.cPush();    
        this.initialized = true;       
       
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
      creareMenu(){           
        var items = [
            {
                id: 'pencil',
                title : 'Pencil',
                type : 'tool',                
            },
            {
                id: 'line',
                title : 'Line',
                type : 'tool',                
            },
            {
                id: 'lineArrow',
                title : 'Line Arrow',
                type : 'tool',
            },
            {
                id: 'rect',
                title : 'Rect',
                type : 'tool',
            },
            {
                id: 'ellipse',
                title : 'Ellipse',
                type : 'tool',
            },
            {
                id : 'red',
                title : 'Red',
                type : 'color',
            },
            {
                id : 'blue',
                title : 'Blue',                
                type : 'color',
            },
            {
                id : 'undo',
                title : 'Undo',
                type : 'control',
            },
            {
                id : 'redo',
                title : 'Redo',                
                type : 'control',
            }
            
            
        ];    
        var ul = document.createElement('ul');   
        ul.className = 'drawing-menu';     
        this.elem.parentNode.appendChild(ul);        
        items.forEach(function (item) {
            var li = document.createElement('li');
            li.className = 'toolSelect';
            var a = document.createElement('a');
            li.appendChild(a);
            a.innerHTML = item.title;
            a.className = item.type;
            a.dataset.type = item.type;
            a.id = item.id;
            ul.appendChild(li);
        }); 
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