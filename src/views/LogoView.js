import * as PIXI from 'pixi.js';

export default class LogoView {
  constructor(state) {
    this.app = state.app;
    this.logo = state.logo;

    this.sprite = PIXI.Sprite.fromImage('react.png');
    this.sprite.anchor.set(0.5);
  }

  getView() {
    return this.sprite;
  }

  onResize() {
    this.sprite.x = this.app.pixi.renderer.width / 2;
    this.sprite.y = this.app.pixi.renderer.height / 2;
  }

  onTick() {
    this.sprite.rotation = this.logo.rotation;
  }
};
