class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 100; 
      this.h = this.w / imgRatio;
      this.x = 750;
      this.y = H/2;
    };
    img.src = "images/car.png";
  };


  draw() {
    if (!this.img) return // si pas def stop

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}