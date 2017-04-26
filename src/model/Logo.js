export default class Logo {
  constructor() {
    this.active = true;
    this.rotation = 0;
  }

  onTick(delta) {
    this.rotation += 0.01 * delta;
  }
};
