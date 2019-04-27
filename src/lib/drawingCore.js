// import dependencies
// return UserList class
import PencilTool from './pencilTool';
import RectTool from './rectTool';
import LineArrowTool from './lineArrowTool';
import LineTool from './lineTool';
import EllipseTool from './ellipseTool';
import TextTool from './textTool';
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
            ellipse: EllipseTool,
            text: TextTool,
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
        this.creareMenu();
        this.handleMove()
        var toolSelect = document.querySelectorAll('a')
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

    createDOM(element) {
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
                id: 'text',
                title : 'Text',
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
        ul.draggable = true;   
        this.elem.parentNode.appendChild(ul);        
        items.forEach(function (item) {
            var li = document.createElement('li');
            li.className = 'toolSelect';
            var a = document.createElement('a');
            li.appendChild(a);
            a.innerHTML = item.title;
            a.className = item.type;
            if(item.draggable){
                a.draggable = true;
            }
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

    handleMove(){
        let menu = document.querySelectorAll('.drawing-menu');
        menu[0].addEventListener('dragover', (e) => {
            this.lastMenuX = e.x;
            this.lastMenuY = e.y;
            menu[0].style.top = this.lastMenuY - 10;
            let left = this.lastMenuX - menu[0].clientWidth + 20;
            menu[0].style.left = left;
            console.log(left);
                

        });
        
        // item.addEventListener('mousedown', (e) => {
        //     this.moveMenu = true;
        // });
        // item.addEventListener('mouseup', (e) => {
        //     if (this.moveMenu) {
        //         this.moveMenu = false;
        //       }
        // });
        // item.addEventListener('mouseleave', (e) => {
        //     // console.log(e);
        //     this.moveMenu = false;
        // });
    }
    
}