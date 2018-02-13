require=function e(t,c,o){function n(a,s){if(!c[a]){if(!t[a]){var i="function"==typeof require&&require;if(!s&&i)return i(a,!0);if(r)return r(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var l=c[a]={exports:{}};t[a][0].call(l.exports,function(e){var c=t[a][1][e];return n(c||e)},l,l.exports,e,t,c,o)}return c[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}({choseControl:[function(e,t,c){"use strict";cc._RF.push(t,"b7efdCufbRJrpOUuT7GB4MJ","choseControl"),Object.defineProperty(c,"__esModule",{value:!0});var o=e("./sceneManager"),n=cc._decorator,r=n.ccclass,a=n.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.button1=null,t.button2=null,t._chose=null,t._left=null,t._right=null,t._up=null,t._down=null,t.sceneManager=null,t}return __extends(t,e),t.prototype.onLoad=function(){var e=this;this.button1.on("touchend",this.onTouchEnd1,e),this.button2.on("touchend",this.onTouchEnd2,e)},t.prototype.onTouchEnd1=function(e){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.on1Down,self),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.on1Up,self),this.sceneManager.changeScene(cc.director.getScene(),"level-scene")},t.prototype.onTouchEnd2=function(e){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.on2Down,self),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.on2Up,self),this.sceneManager.changeScene(cc.director.getScene(),"level-scene")},t.prototype.on1Down=function(e){switch(e.keyCode){case cc.KEY.a:this._left=!0;break;case cc.KEY.d:this._right=!0;break;case cc.KEY.w:this._up=!0;break;case cc.KEY.s:this._down=!0}},t.prototype.on1Up=function(e){switch(e.keyCode){case cc.KEY.a:this._left=!1;break;case cc.KEY.d:this._right=!1;break;case cc.KEY.w:this._up=!1;break;case cc.KEY.s:this._down=!1}},t.prototype.on2Down=function(e){switch(e.keyCode){case cc.KEY.left:this._left=!0;break;case cc.KEY.right:this._right=!0;break;case cc.KEY.up:this._up=!0;break;case cc.KEY.down:this._down=!0}},t.prototype.on2Up=function(e){switch(e.keyCode){case cc.KEY.left:this._left=!1;break;case cc.KEY.right:this._right=!1;break;case cc.KEY.up:this._up=!1;break;case cc.KEY.down:this._down=!1}},__decorate([a(cc.Node)],t.prototype,"button1",void 0),__decorate([a(cc.Node)],t.prototype,"button2",void 0),__decorate([a],t.prototype,"_chose",void 0),__decorate([a],t.prototype,"_left",void 0),__decorate([a],t.prototype,"_right",void 0),__decorate([a],t.prototype,"_up",void 0),__decorate([a],t.prototype,"_down",void 0),__decorate([a(o.default)],t.prototype,"sceneManager",void 0),t=__decorate([r],t)}(cc.Component);c.default=s,cc._RF.pop()},{"./sceneManager":"sceneManager"}],game:[function(e,t,c){"use strict";cc._RF.push(t,"0061cWOro5FnqTc/RPnA4jZ","game"),Object.defineProperty(c,"__esModule",{value:!0});var o=cc._decorator,n=o.ccclass,r=(o.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){},t=__decorate([n],t)}(cc.Component));c.default=r,cc._RF.pop()},{}],levelControl:[function(e,t,c){"use strict";cc._RF.push(t,"f9d8cDOwI5BGrOCJ+Rgpe11","levelControl"),Object.defineProperty(c,"__esModule",{value:!0});var o=cc._decorator,n=o.ccclass,r=(o.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){},t=__decorate([n],t)}(cc.Component));c.default=r,cc._RF.pop()},{}],loadingLabelControl:[function(e,t,c){"use strict";cc._RF.push(t,"5de72nnWpFCFoccdIigl3xr","loadingLabelControl"),Object.defineProperty(c,"__esModule",{value:!0});var o=e("./sceneManager"),n=cc._decorator,r=n.ccclass,a=n.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loginLabel=null,t.Cavas=null,t.promptLabel=null,t.SceneManager=null,t}return __extends(t,e),t.prototype.onLoad=function(){var e=this;cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onSpaceEnd,e)},t.prototype.onSpaceEnd=function(e){switch(e.keyCode){case cc.KEY.space:this.promptLabel.enabled=!1;var t=this.loginLabel.node.parent.convertToNodeSpaceAR(cc.v2(cc.winSize.width/8*7,cc.winSize.height/8));this.loginLabel.node.position=t;var c=this.loginLabel.string,o=0;this.schedule(function(){c+=".",++o>3&&(c="loading",o=0),this.loginLabel.string=c},.3),this.Cavas.off(cc.Node.EventType.TOUCH_END,this.touchEnd,self),this.SceneManager.changeScene(cc.director.getScene(),"chose-scene")}},__decorate([a(cc.Label)],t.prototype,"loginLabel",void 0),__decorate([a(cc.Node)],t.prototype,"Cavas",void 0),__decorate([a(cc.Label)],t.prototype,"promptLabel",void 0),__decorate([a(o.default)],t.prototype,"SceneManager",void 0),t=__decorate([r],t)}(cc.Component);c.default=s,cc._RF.pop()},{"./sceneManager":"sceneManager"}],sceneManager:[function(e,t,c){"use strict";cc._RF.push(t,"74696ADUYhHaIQbOSHDXTxC","sceneManager"),Object.defineProperty(c,"__esModule",{value:!0});var o=cc._decorator,n=o.ccclass,r=(o.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){},t.prototype.changeScene=function(e,t){cc.director.preloadScene(t);var c=!1;this.schedule(function(){e.opacity>=21?e.opacity-=20:(e.opacity=0,c=!0),1==c&&cc.director.loadScene(t)},.1)},t=__decorate([n],t)}(cc.Component));c.default=r,cc._RF.pop()},{}]},{},["choseControl","game","levelControl","loadingLabelControl","sceneManager"]);