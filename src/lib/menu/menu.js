export default class Menu {
  constructor(elem){ 
    this.elem = elem;
    this.active = false;
    this.currentX;
    this.currentY;
    this.initialX;
    this.initialY;
    this.xOffset = 0;
    this.yOffset = 0;

    
  }
  
  creareMenu(){           
    var arrMenu = [
        {
            id: 'pencil',
            title: 'Pencil',
            type: 'tool',        
            icon: '<span class="icon-pen"></span>',

        },
        {
          id: 'marker',
          title: 'Marker',
          type: 'tool',        
          icon: '<span class="icon-pen"></span>',

        },
        {
            id: 'line',
            title: 'Line',
            type: 'tool',      
            icon: '<span class="icon-line"></span>',          
        },
        {
            id: 'lineArrow',
            title: 'Line Arrow',
            type: 'tool',
            icon: '<span class="icon-arrow"></span>',
        },
        {
            id: 'rect',
            title: 'Rect',
            type: 'tool',
            icon: '<span class="icon-rectangle"></span>',
        },
        {
            id: 'ellipse',
            title: 'Ellipse',
            type: 'tool',
            icon: '<span class="icon-ellipse"></span>',
        },
        {
            id: 'text',
            title: 'Text',
            type: 'tool',
            icon: '<span class="icon-text"></span>',
        },
        {
            id: 'blue',
            title: 'Blue',                
            type: 'color',
            value: '<input type="color" value="#ff0000" id="inputColor">'
        },
        {
            id: 'undo',
            title: 'Undo',
            type: 'control',
            icon: '<span class="icon-undo"></span>',
        },
        {
            id: 'redo',
            title: 'Redo',                
            type: 'control',
            icon: '<span class="icon-redo"></span>',
        },
        {
          id: 'move',
          title: 'Move',                
          type: 'move',
          icon: '<span class="icon-move" id="icon-move"></span>',
        },
        {
          id: 'cropper',
          title: 'cropper',                
          type: 'tool',
          icon: '<span class="icon-ellipse"></span>',
        }
    ];    
    this.ul = document.createElement('ul');   
    this.ul.className = 'drawing-menu';  
      
    this.elem.appendChild(this.ul);        
    arrMenu.forEach((item) => {
        let li = document.createElement('li');
        li.className = 'toolSelect';
        let a = document.createElement('a');
        li.appendChild(a);
        a.innerHTML = item.icon ? item.icon: item.value;
        a.className = item.type;
        if(item.draggable){
            a.draggable = true;
        }
        a.dataset.type = item.type;
        a.id = item.id;
        this.ul.appendChild(li);
    }); 

    this.elem.addEventListener("touchstart", this.dragStart.bind(this), false);
    this.elem.addEventListener("touchend", this.dragEnd.bind(this), false);
    this.elem.addEventListener("touchmove", this.drag.bind(this), false);

    this.elem.addEventListener("mousedown", this.dragStart.bind(this), false);
    this.elem.addEventListener("mouseup", this.dragEnd.bind(this), false);
    this.elem.addEventListener("mousemove", this.drag.bind(this), false);
    
  }

  dragStart(e) {
    if (e.type === "touchstart") {
      this.initialX = e.touches[0].clientX - this.xOffset;
      this.initialY = e.touches[0].clientY - this.yOffset;
    } else {
      this.initialX = e.clientX - this.xOffset;
      this.initialY = e.clientY - this.yOffset;
    }

    if (e.target.id === 'move' || e.target.id === 'icon-move') {
      this.ul.draggable = true; 
      this.active = true;
    }
  }

  dragEnd(e) {
    this.initialX = this.currentX;
    this.initialY = this.currentY;
    this.ul.draggable = false; 
    this.active = false;
  }

  drag(e) {
    if (this.active) {
      e.preventDefault();
      if (e.type === "touchmove") {
        this.currentX = e.touches[0].clientX - this.initialX;
        this.currentY = e.touches[0].clientY - this.initialY;
      } else {
        this.currentX = e.clientX - this.initialX;
        this.currentY = e.clientY - this.initialY;
      }

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;

      this.setTranslate(this.currentX, this.currentY, this.ul);
    }
  }

  setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
  
}