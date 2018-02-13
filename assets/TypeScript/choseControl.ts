import sceneManager from "./sceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class choseControl extends cc.Component {

@property(cc.Node)
button1:cc.Node = null;

@property(cc.Node)
button2:cc.Node = null;

@property
_chose:number = null;

@property
_left:boolean = null;

@property
_right:boolean = null;

@property
_up:boolean = null;

@property
_down:boolean = null;

@property(sceneManager)
sceneManager:sceneManager = null;

    onLoad () {
        let self = this;
        this.button1.on('touchend',this.onTouchEnd1,self);
        this.button2.on('touchend',this.onTouchEnd2,self);
    }

    onTouchEnd1(event) {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.on1Down,self);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.on1Up,self);

        
        this.sceneManager.changeScene(cc.director.getScene(),'level-scene');
    }

    onTouchEnd2(event) {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.on2Down,self);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.on2Up,self);

        this.sceneManager.changeScene(cc.director.getScene(),'level-scene');
    }

    on1Down(e){
        switch (e.keyCode){
            case cc.KEY.a:
                this._left = true;
                break;
            case cc.KEY.d:
                this._right = true;
                break;
            case  cc.KEY.w:
                this._up = true;
                break;
            case  cc.KEY.s:
                this._down = true;
                break;
        }
    }


    on1Up(e){
        switch (e.keyCode){
            case cc.KEY.a:
                this._left = false;
                break;
            case cc.KEY.d:
                this._right = false;
                break;
            case  cc.KEY.w:
                this._up = false;
                break;
            case  cc.KEY.s:
                this._down = false;
                break;
    }
}

    on2Down(e){
        switch (e.keyCode){
            case cc.KEY.left:
                this._left = true;
                break;
            case cc.KEY.right:
                this._right = true;
                break;
            case  cc.KEY.up:
                this._up = true;
                break;
            case  cc.KEY.down:
                this._down = true;
                break;
            }
    }

    on2Up(e){
        switch (e.keyCode){
            case cc.KEY.left:
                this._left = false;
                break;
            case cc.KEY.right:
                this._right = false;
                break;
            case  cc.KEY.up:
                this._up = false;
                break;
            case  cc.KEY.down:
                this._down = false;
                break;
        }
    }

    // update (dt) {},
}
