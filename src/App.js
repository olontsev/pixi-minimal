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
      logo: new Logo()
    };
    this.views = {
      logo: new LogoView({ app: this, logo: this.models.logo })
    };
    this.activate(this.views.logo);

    this.onResize();
  };

  activate = (module) => {
    if(module.onActivate)
      module.onActivate();
    if(module.getView && module.getView())
      this.pixi.stage.addChild(module.getView());
    module.active = true;
  };

  onTick = (delta) => {
    for (let modelId in this.models) {
      if (this.models.hasOwnProperty(modelId) && this.models[modelId].active) {
        this.models[modelId].onTick(delta);
      }
    }
    for (let viewId in this.views) {
      if (this.views.hasOwnProperty(viewId) && this.views[viewId].active) {
        this.views[viewId].onTick(delta);
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
        view.onResize();
      }
    }
  }
}

export const app = new App();