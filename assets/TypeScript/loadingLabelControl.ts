import sceneManager from "./sceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class loadingLabelControl extends cc.Component {

    @property(cc.Label)
    loginLabel: cc.Label = null;

    @property(cc.Node)
    Cavas:cc.Node = null;

    @property(cc.Label)
    promptLabel:cc.Label = null;

    @property(sceneManager)
    SceneManager:sceneManager = null;

    onLoad () {
        let self = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onSpaceEnd,self);
    }

    onSpaceEnd (e) {
        switch (e.keyCode){
            case cc.KEY.space:
        
            this.promptLabel.enabled = false;

            let pos = this.loginLabel.node.parent.convertToNodeSpaceAR(cc.v2(cc.winSize.width / 8 * 7,cc.winSize.height / 8));
            this.loginLabel.node.position = pos;
            //小数点动画
            let str = this.loginLabel.string;
            let number = 0;

            this.schedule(function(){
                str = str + '.';

                number++;

                if(number>3){
                    str = 'loading';
                    number=0;
                }

                this.loginLabel.string = str;
            },0.3);

            this.Cavas.off(cc.Node.EventType.TOUCH_END,this.touchEnd,self);

            this.SceneManager.changeScene(cc.director.getScene(),'chose-scene');

            break;
        }
    }

    // update (dt) {},
}
