export class TextTool{
    constructor(core){ 
        this.context = core.context;        
        this.started = core.started;
        this.textarea = null;
        this.removeTextarea(core);
        this.mousedown = (e) => {
            this.started = true;
            this.x0 = e._x;
            this.y0 = e._y;
            
            if(this.textValue){
                var lineHeight = 14;               
                this.context.clearRect(0,0,core.canvas.width, core.canvas.height);
                this.drawText(this.context, this.textValue, this.lastX + 4, this.lastY + 16, lineHeight, core.strokeStyle);
                core.img_update();
                this.textValue = "";
            }            

            let insertText = document.getElementById('insertText');
            if(insertText){
                insertText.parentNode.removeChild(insertText);
            }

            this.textarea = document.createElement('textarea');
            this.textarea.className = 'insertText';
            this.textarea.id = 'insertText'; 
            this.textarea.rows = 2;         
            this.textarea.style.color = core.strokeStyle;    
            this.textarea.spellcheck = false;   
            document.body.appendChild(this.textarea);
            this.textarea.focus();
            this.spanTextCalc = document.createElement('span');
            this.spanTextCalc.id = 'spanTextCalc';
            document.body.appendChild(this.spanTextCalc);
            this.textarea.addEventListener('keyup', (e) => {
              this.context.clearRect(0,0,core.canvas.width, core.canvas.height);
              this.textValue = this.textarea.value;
              this.lastX = this.x0;
              this.lastY = this.y0; 
            });
            this.textarea.addEventListener('keydown', (e) => {
                if(e.keyCode == 13){
                  this.textarea.rows = this.textarea.rows + 1;
                }
                this.spanTextCalc.style.fontSize = 16;
                let spanText = this.textarea.value.replace(/ /g, '&nbsp;');
                this.spanTextCalc.innerHTML = spanText;
                let arrTextLine =  spanText.split('\n');
                if(arrTextLine && arrTextLine.length > 1) {
                  let ulText = document.getElementById('ulText');
                  if(ulText){
                    ulText.parentNode.removeChild(ulText);
                  }

                  var ul = document.createElement('ul');   
                  ul.id = 'ulText';     
                  document.body.appendChild(ul);        
                  arrTextLine.forEach(function (item) {
                      var li = document.createElement('li');
                      li.className = 'liText';
                      li.innerHTML = item;
                      ul.appendChild(li);
                  });
                  var liTextNodeList = document.querySelectorAll('li.liText')
                  var liTextArr = Array.prototype.slice.call(liTextNodeList);
                  var longestText = liTextArr.reduce( (a, b)=> { 
                    return a.clientWidth > b.clientWidth ? a : b; 
                  });
                  this.spanTextCalc.innerHTML = longestText.textContent.replace(/ /g, '&nbsp;');
                  this.textwidth = (this.spanTextCalc.clientWidth);
                  this.textarea.style.width = (this.textwidth + 30);
                }
                else {
                  this.textwidth = (this.spanTextCalc.clientWidth);
                  this.textarea.style.width = (this.textwidth + 30);
                }                
            }); 
            this.textarea.style.top = e.clientY + 'px';
            this.textarea.style.left = e.clientX + 'px';
            
        };    
    } 

    drawText(context, text, x, y, lineHeight, color) {
      var txt = text;     
      var lineheight = lineHeight;
      var lines = txt.split('\n');
      context.font = '16px Helvetica'; // add font 
      context.fillStyle = color;
      for (var i = 0; i<lines.length; i++)
      context.fillText(lines[i], x, y + (i*lineheight) );
    }

    removeTextarea(core){
      let toolSelect = document.querySelectorAll('.toolSelect a')
        toolSelect.forEach((item) => {
          item.addEventListener('click', (e) => {
            let insertText = document.getElementById('insertText');
            let className = e.currentTarget.className;
            if(className === 'control' || className === 'move'){
              return;
            }
            else if(className === 'color'){
              if(insertText){
                insertText.style.color = core.strokeStyle;
              }
              return;
            }
            else {
             // let insertText = document.getElementById('insertText');
              if(insertText){
                if(insertText.value){
                  var lineHeight = 14;               
                  this.context.clearRect(0,0, core.canvas.width, core.canvas.height);
                  let y = insertText.offsetTop;
                  let x = insertText.offsetLeft;
                  this.drawText(this.context, insertText.value, x + 4, y + 16, lineHeight, core.strokeStyle);
                  core.img_update();
                  insertText.value = "";
                }
                insertText.parentNode.removeChild(insertText);
              }
            }
          });
        })
    }
    
}