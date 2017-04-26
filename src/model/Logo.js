export default class Logo {
  constructor() {
    this.rotation = 0;
  }

  tick(delta) {
    this.rotation += 0.01 * delta;
  }
};
