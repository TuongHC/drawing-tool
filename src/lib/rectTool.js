export default class RectTool {
    constructor(core) {
        this.context = core.context;
        this.started = core.started;
        this.canvas = core.canvas;  

        this.mousedown = (ev) => {
            this.started = true;
            this.x0 = ev._x;
            this.y0 = ev._y;
        };

        this.mousemove = (ev) => {
            if (!this.started) {
                return;
            }

            var x = Math.min(ev._x, this.x0),
                y = Math.min(ev._y, this.y0),
                w = Math.abs(ev._x - this.x0),
                h = Math.abs(ev._y - this.y0);
            
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            if (!w || !h) {
                return;
            }           
            this.context.strokeStyle = core.strokeStyle;
            this.context.lineWidth = core.lineWidth;
            this.context.strokeRect(x, y, w, h);
            // this.context.stroke();
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