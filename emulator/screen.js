const colors = [
  "#0e0e0e",
  //"#000000",
  "#1D2B53",
  "#7E2553",
  "#008751",
  "#AB5236",
  "#5F574F",
  "#C2C3C7",
  "#FFF1E8",
  "#FF004D",
  "#FFA300",
  "#FFEC27",
  "#00E436",
  "#29ADFF",
  "#83769C",
  "#FF77A8",
  "#FFCCAA",
];

const pxa = (x, y) => {
  const addr = ((x >> 1) + y * 64)+1;
  const and = x & 1;
  const add = and ? 1 : 0;
  return ((x >> 1) + y * 64)+add;
}

const pxc = (x, y, memory) => {
  const addr1 = 0x6000 + (64 * y) + Math.floor(x / 2);
  const side = x % 2 === 0 ? 'left' : 'right';
  if (side === 'left') {
    return memory[addr1] & 0x0f;
  } else {
    return memory[addr1] >> 4;
  }
}

export default class Screen {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.memory = new Uint8Array(0x8000);
    this.running = false;
    this.ctx = this.canvas.getContext('2d');
    this.px = this.canvas.width / 128;
    this.render = this.render.bind(this);
    this.canvas.addEventListener("resize", () => {
      this.px = this.canvas.width / 128;
      this.render();
    });
  }

  start() {
    this.running = true;
    requestAnimationFrame(this.render);
  }

  update(memory) {
    this.memory = memory;
  }

  render() {
    for (let addr = 0x6000; addr <= 0x7FFF; addr++) {
      //const x = addr % 64 * 2;
      //const y = Math.floor(addr / 64);
      const i = addr - 0x6000;
      const x = (i * 2) % 128;
      const y = Math.floor(i / 64)
      const left = this.memory[addr] & 0x0f;
      const right = this.memory[addr] >> 4;

      this.ctx.beginPath()
      this.ctx.fillStyle = colors[left];
      this.ctx.strokeStyle = colors[left];
      this.ctx.rect(
        x * this.px,
        y * this.px,
        Math.floor(this.px),
        Math.floor(this.px)
      );
      this.ctx.fill()
      this.ctx.stroke()
      this.ctx.closePath()

      this.ctx.beginPath()
      this.ctx.fillStyle = colors[right];
      this.ctx.strokeStyle = colors[right];
      this.ctx.rect(
        (x+1) * this.px,
        y * this.px,
        Math.floor(this.px),
        Math.floor(this.px)
      );
      this.ctx.fill()
      this.ctx.stroke()
      this.ctx.closePath()
    }

    if (this.running) {
      requestAnimationFrame(this.render);
    }
  }

  stop() {
    this.running = false;
  }
}
