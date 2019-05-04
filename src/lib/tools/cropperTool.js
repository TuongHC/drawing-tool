export class CropperTool{
  constructor(core){ 
      this.name = "CropperTool";
      this.context = core.context;        
      this.started = core.started;
      this.canvas = core.canvas;
      this.image = core.canvasPic;
	    this.restoreImage;
	    this.currentDimens = {};
      this.cropping = false;
      debugger;
      this.colors = {
        white: "#ffffff",
        black: "#000000",
        overlay: "rgba(0, 0, 0, 0.6)"
      };
      this.overlay = {
        x: 50,
        y: 50,
        width: 300,
        height: 300,
        resizerSide: 10,
        ratioXY: 1
      }
      this.drag = {
        type: "", // options: "moveOverlay", "resizeOverlay"
        inProgress: false,
        originalOverlayX: 0,
        originalOverlayY: 0,
        originalX: 0,
        originalY: 0,
        originalOverlayWidth: 0,
        originalOverlayHeight: 0
      };
      HTMLCanvasElement.prototype.getMouseCoords = function(event){
        // loop through this element and all its parents to get the total offset
        var totalOffsetX = 0;
        var totalOffsetY = 0;
        var canvasX = 0;
        var canvasY = 0;
        var currentElement = this;

        do {
          totalOffsetX += currentElement.offsetLeft;
          totalOffsetY += currentElement.offsetTop;
        }
        while(currentElement = currentElement.offsetParent)

        canvasX = event.pageX - totalOffsetX;
        canvasY = event.pageY - totalOffsetY;

        return {x:canvasX, y:canvasY}
      }
      
      this.drawOverlay(this.context, this.canvas, this.colors, this.overlay);

      this.mousedown = (event) => {
        /* modify the canvas prototype to allow us to get x and y mouse coords from it */
        var coords = core.canvas.getMouseCoords(event);
        var x = coords.x;
        var y = coords.y;

        // if the mouse clicked in the overlay
        if(this.isInOverlay(x, y, this.overlay)) {
          this.drag.type = "moveOverlay";
          this.drag.inProgress = true;
          this.drag.originalOverlayX = x - this.overlay.x;
          this.drag.originalOverlayY = y - this.overlay.y;
        }
        if(this.isInHandle(x, y, this.overlay)) {
          this.drag.type = "resizeOverlay";
          this.drag.inProgress = true;
          this.drag.originalX = x;
          this.drag.originalY = y;
          this.drag.originalOverlayWidth = this.overlay.width;
          this.drag.originalOverlayHeight = this.overlay.height;
        }
      };
  
      this.mousemove = (event) => {
        if(!cropping){
          return;
        }
        var coords = this.canvas.getMouseCoords(event);
        var x = coords.x;
        var y = coords.y;

        // Set current cursor as appropriate
        if(this.isInHandle(x, y, this.overlay) || (this.drag.inProgress && this.drag.type === "resizeOverlay")) {
          this.canvas.style.cursor = 'nwse-resize'
        } else if(this.isInOverlay(x, y, this.overlay)) {
          this.canvas.style.cursor = 'move'
        } else {
          this.canvas.style.cursor = 'auto'
        }

        // give up if there is no drag in progress
        if(!this.drag.inProgress) {
          return;
        }

        // check what type of drag to do
        if(this.drag.type === "moveOverlay") {
          this.overlay.x = x - this.drag.originalOverlayX;
          this.overlay.y = y - this.drag.originalOverlayY;

          // Limit to size of canvas.
          var xMax = this.canvas.width - this.overlay.width;
          var yMax = this.canvas.height - this.overlay.height;

          if(this.overlay.x < 0) {
            this.overlay.x = 0;
          } else if(this.overlay.x > xMax) {
            this.overlay.x = xMax;
          }

          if(this.overlay.y < 0) {
            this.overlay.y = 0;
          } else if(this.overlay.y > yMax) {
            this.overlay.y = yMax;
          }

          this.draw();
        } else if(this.drag.type === "resizeOverlay") {
          this.overlay.width = this.drag.originalOverlayWidth + (x - this.drag.originalX);

          // do not allow the overlay to get too small
          if(this.overlay.width < 10) {
            this.overlay.width = 10;
          }

          // Don't allow crop to overflow
          if(this.overlay.x + this.overlay.width > this.canvas.width) {
            this.overlay.width = this.canvas.width - this.overlay.x;
          }

          this.overlay.height = this.overlay.width * this.overlay.ratioXY;

          if(this.overlay.y + this.overlay.height > this.canvas.height) {
            this.overlay.height = this.canvas.height - this.overlay.y;
            this.overlay.width = this.overlay.height / this.overlay.ratioXY;
          }

          this.draw();
        }
      };
  
      this.mouseup = () => {
        this.drag.inProgress = false;
      };

      this.mouseleave = () => {
        this.drag.inProgress = false;
      };
  } 

 draw() {
		// clear the canvas
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		//if we don't have an image file, abort the draw at this point
		if(!this.image) {
			return;
		}

		// draw the image
		var dimens = this.currentDimens;
		this.context.drawImage(this.image, 0, 0, dimens.width, dimens.height);

		// draw cropping stuff if we are cropping
		if(this.cropping) {
			// draw the overlay
			this.drawOverlay(this.context, this.canvas, this.colors, this.overlay);

			// draw the resizer
			var x = this.overlay.x + this.overlay.width - 5,
				y = this.overlay.y + this.overlay.height - 5,
				w = this.overlay.resizerSide,
				h = this.overlay.resizerSide;

			this.context.save();
			this.context.fillStyle = this.colors.black;
			this.context.strokeStyle = this.colors.white;
			this.context.fillRect(x, y, w, h);
			this.context.strokeRect(x, y, w, h);
			this.context.restore();
    }
    else{
      return;
    }
	}

  drawOverlay(context, canvas, colors, overlay) {
		// draw the overlay using a path made of 4 trapeziums (ahem)
		context.save();

    context.fillStyle = colors.overlay;
		context.beginPath();

		context.moveTo(0, 0);
		context.lineTo(overlay.x, overlay.y);
		context.lineTo(overlay.x + overlay.width, overlay.y);
		context.lineTo(canvas.width, 0);

		context.moveTo(canvas.width, 0);
		context.lineTo(overlay.x + overlay.width, overlay.y);
		context.lineTo(overlay.x + overlay.width, overlay.y + overlay.height);
		context.lineTo(canvas.width, canvas.height);

		context.moveTo(canvas.width, canvas.height);
		context.lineTo(overlay.x + overlay.width, overlay.y + overlay.height);
		context.lineTo(overlay.x, overlay.y + overlay.height);
		context.lineTo(0, canvas.height);

		context.moveTo(0, canvas.height);
		context.lineTo(overlay.x, overlay.y + overlay.height);
		context.lineTo(overlay.x, overlay.y);
		context.lineTo(0, 0);

		context.fill();

		context.restore();
  }
  
  setRatio(ratio, overlay) {
		overlay.ratioXY = ratio;
		overlay.height = Math.floor(overlay.width * ratio);
	}

	getScaledImageDimensions(width, height, canvas) {
		// choose the dimension to scale to, depending on which is "more too big"
		var factor = 1;
		if((canvas.width - width) < (canvas.height - height)) {
			// scale to width
			factor = canvas.width / width;
		} else {
			// scale to height
			factor = canvas.height / height;
		}
		// important "if,else" not "if,if" otherwise 1:1 images don't scale

		var dimens = {
			width: Math.floor(width * factor),
			height: Math.floor(height * factor),
			factor: factor
		};

		return dimens;
  }
  
  isInOverlay(x, y, overlay) {
		return x > overlay.x && x < (overlay.x + overlay.width) && y > overlay.y && y < (overlay.y + overlay.height);
	}

	isInHandle(x, y, overlay) {
		return x > (overlay.x + overlay.width - overlay.resizerSide) && x < (overlay.x + overlay.width + overlay.resizerSide) && y > (overlay.y + overlay.height - overlay.resizerSide) && y < (overlay.y + overlay.height + overlay.resizerSide);
	}
  
}