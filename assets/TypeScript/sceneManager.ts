// let SceneManager = null;

const {ccclass, property} = cc._decorator;

@ccclass
export default class sceneManager extends cc.Component {

    onLoad () {

    }


    changeScene(nowScene,toSceneName:string){
        cc.director.preloadScene(toSceneName);

        let flag:any = false;

        this.schedule(function(){
            if(nowScene.opacity >= 21) {
                nowScene.opacity -= 20;
            } else {
                nowScene.opacity = 0;
                flag = true;
            }

            if(flag == true)
            {
                cc.director.loadScene(toSceneName);
            }
        },0.1)
    }

    // update (dt) {}
}
