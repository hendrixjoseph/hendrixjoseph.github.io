(()=>{"use strict";var e={517:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(s(749)),n=s(462);class r extends Phaser.Game{constructor(e){super(e),this.scene.add(a.default.Name,a.default),this.scene.start(a.default.Name)}}t.default=r,window.onload=()=>{const e={width:800,height:600,physics:{default:"arcade",arcade:{debug:!1}},scale:{mode:Phaser.Scale.FIT},type:Phaser.AUTO,parent:"canvas",title:"Snake Game",fullscreenTarget:"content"};new r(e),(0,n.setupInstall)()}},749:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class s extends Phaser.Scene{constructor(){super(...arguments),this.INITIAL_SPEED=10,this.MAX_SPEED=500,this.FOOD_TYPES={faster:16711680,scorer:65280},this.documentListenersAdded=!1}set speed(e){this._speed=e,document.getElementById("speed").innerText=this.speed.toString()}get speed(){return this._speed}set score(e){this._score=e,document.getElementById("score").innerText=this.score.toString()}get score(){return this._score}create(){this.snakeHead=this.add.rectangle(400,300,20,20,16711680),this.snakeBody=[],this.xVelocity=0,this.yVelocity=0,this.snakeLength=10,this.lastUpdateTime=0,this.speed=this.INITIAL_SPEED,this.score=0,this.gameOver=!1,this.food=[this.createFood("scorer",450,350),this.createFood("faster",350,250)],this.setupFullScreen(),this.setupControls(),this.documentListenersAdded=!0,this.scale.displaySize.setAspectRatio(800/600),this.scale.refresh()}setupControls(){let e=this.input.keyboard.createCursorKeys();["up","down","left","right"].forEach((t=>{this.documentListenersAdded||document.querySelector(`.d-pad .${t}`).addEventListener("click",(()=>this.setDirection(t))),e[t].addListener("down",(()=>this.setDirection(t)))})),this.documentListenersAdded||document.addEventListener("click",(()=>{this.gameOver&&this.scene.restart()}))}setupFullScreen(){let e=()=>{this.scale.isFullscreen?this.scale.stopFullscreen():this.scale.startFullscreen()};this.input.keyboard.addKey("F").on("down",e),this.documentListenersAdded||document.getElementById("fullScreenButton").addEventListener("click",e)}createFood(e,t,s){let i=this.add.star(t,s,5,5,10,this.FOOD_TYPES[e]);return i.setData("type",e),i}eat(e){let t=e.getData("type");"scorer"===t?this.score+=10+(this.speed-this.INITIAL_SPEED)/2:"faster"===t&&(this.speed=Math.min(this.speed+10,this.MAX_SPEED));let s=Phaser.Math.RND.between(10,790),i=Phaser.Math.RND.between(10,590);this.food=this.food.filter((t=>t!==e)),this.food.push(this.createFood(t,s,i)),this.snakeLength++,e.destroy()}update(e){this.gameOver||(0===this.xVelocity&&0===this.yVelocity||e-this.lastUpdateTime>this.MAX_SPEED-this.speed&&(this.lastUpdateTime=e,this.move(),this.food.filter((e=>this.intersects(this.snakeHead,e))).forEach((e=>this.eat(e)))),this.gameOver&&this.add.text(400,300,"Game Over\n\ntap anywhere to start a new game",{fontSize:30,align:"center"}).setOrigin(.5))}intersects(e,t){return Phaser.Geom.Intersects.RectangleToRectangle(e.getBounds(),t.getBounds())}setDirection(e){"left"===e&&1!==this.xVelocity?(this.xVelocity=-1,this.yVelocity=0):"right"===e&&-1!==this.xVelocity?(this.xVelocity=1,this.yVelocity=0):"up"===e&&1!==this.yVelocity?(this.xVelocity=0,this.yVelocity=-1):"down"===e&&-1!==this.yVelocity&&(this.xVelocity=0,this.yVelocity=1)}move(){if(this.snakeBody.unshift(this.snakeHead),this.snakeBody.length>this.snakeLength){let e=this.snakeBody.pop();null==e||e.destroy()}this.snakeHead=this.add.rectangle(this.snakeHead.x+this.xVelocity*this.snakeHead.width,this.snakeHead.y+this.yVelocity*this.snakeHead.height,this.snakeHead.width,this.snakeHead.height,this.snakeHead.fillColor),this.gameOver=this.isGameOver()}isGameOver(){return this.snakeBody.some((e=>this.snakeHead.x===e.x&&this.snakeHead.y===e.y))||this.snakeHead.x<0||this.snakeHead.y<0||this.snakeHead.x>800||this.snakeHead.y>600}}s.Name="SnakeScene",t.default=s},462:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setupInstall=void 0,t.setupInstall=()=>{if("serviceWorker"in navigator){let e;navigator.serviceWorker.register("sw.js").then((e=>{console.log("ServiceWorker registration successful with scope: ",e.scope)}),(e=>{console.log("ServiceWorker registration failed: ",e)}));let t=document.getElementById("installButton");window.addEventListener("beforeinstallprompt",(s=>{console.log("beforeinstallprompt triggered",s.type),s.preventDefault(),e=s,null==t||t.removeAttribute("hidden")})),window.addEventListener("appinstalled",(()=>{null==t||t.setAttribute("hidden","")})),null==t||t.addEventListener("click",(()=>{null==e||e.prompt()}))}}}},t={};!function s(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}(517)})();