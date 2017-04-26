import * as PIXI from 'pixi.js';
import Logo from './model/Logo';
import LogoView from './views/LogoView';

class App {
  constructor() {
    this.pixi = new PIXI.Application(100, 100, {backgroundColor: 0x1099bb, antialias: true});
    document.body.appendChild(this.pixi.view);
    window.onresize = this.onResize;
    this.pixi.ticker.add(this.onTick);

    this.models = {
      Logo: new Logo({app: this})
    };
    this.views = {
      Logo: new LogoView({ app: this, logo: this.models.Logo })
    };

    this.onResize();
  };

  onTick = (delta) => {
    for (let modelId in this.models) {
      if (this.models.hasOwnProperty(modelId)) {
        this.models[modelId].tick(delta);
      }
    }
    for (let viewId in this.views) {
      if (this.views.hasOwnProperty(viewId)) {
        this.views[viewId].tick(delta);
      }
    }
  };

  onResize = () => {
    let w = window.innerWidth || document.body.clientWidth;
    let h = window.innerHeight || document.body.clientHeight;
    this.pixi.view.style.width = w + "px";
    this.pixi.view.style.height = h + "px";
    this.pixi.renderer.resize(w, h);

    for (let viewId in this.views) {
      if (this.views.hasOwnProperty(viewId)) {
        let view = this.views[viewId];
        view.resize();
      }
    }
  }
}

export const app = new App();