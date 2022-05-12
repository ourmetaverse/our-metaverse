class Star {
  x: number;
  y: number;
  length: number;
  opacity: number;
  screenW: number;
  screenH: number;
  factor: number;
  increment: number;
  constructor(
    x: number,
    y: number,
    length: number,
    opacity: number,
    screenW: number,
    screenH: number,
  ) {
    this.x = Math.round(x);
    this.y = Math.round(y);
    this.length = Math.round(length);
    this.opacity = opacity;
    this.screenW = screenW;
    this.screenH = screenH;
    this.factor = 1;
    this.increment = Math.random() * 0.03;
  }

  draw(context: CanvasRenderingContext2D) {
    context.rotate((Math.PI * 1) / 10);
    context.save();
    context.translate(this.x, this.y);
    if (this.opacity > 1) {
      this.factor = -1;
    } else if (this.opacity <= 0) {
      this.factor = 1;
      this.x = Math.round(Math.random() * this.screenW);
      this.y = Math.round(Math.random() * this.screenH);
    }

    this.opacity += this.increment * this.factor;

    context.beginPath();

    for (var i = 5; i > 0; i--) {
      context.lineTo(0, this.length);
      context.translate(0, this.length);
      context.rotate((Math.PI * 2) / 10);
      context.lineTo(0, -this.length);
      context.translate(0, -this.length);
      context.rotate(-((Math.PI * 6) / 10));
    }

    context.lineTo(0, this.length);
    context.closePath();
    context.fillStyle = `rgba(255,255,200, ${this.opacity})`;
    context.shadowBlur = 5;
    context.shadowColor = '#ffff33';
    context.fill();
    context.restore();
  }
}

export default Star;
