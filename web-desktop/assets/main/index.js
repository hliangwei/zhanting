System.register("chunks:///_virtual/main",["./PlayerController.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var e,t,n,s,i,r,a,l,h,c;return{setters:[function(o){e=o.inheritsLoose},function(o){t=o.cclegacy,n=o._decorator,s=o.math,i=o.input,r=o.Input,a=o.Vec3,l=o.KeyCode,h=o.EventMouse,c=o.Component}],execute:function(){var u;t._RF.push({},"eca49zjVLNEVrYHA8WhIIV/","PlayerController",void 0);var _=n.ccclass,d=(n.property,s.Quat);o("PlayerController",_("PlayerController")(u=function(o){function t(){for(var e,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(e=o.call.apply(o,[this].concat(n))||this)._curPos=new a,e._deltaPos=new a(0,0,0),e._dir=new a(0,0,0),e._walk=!1,e._mouseDown=!1,e}e(t,o);var n=t.prototype;return n.start=function(){i.on(r.EventType.MOUSE_DOWN,this.onMouseDown,this),i.on(r.EventType.MOUSE_MOVE,this.onMouseMove,this),i.on(r.EventType.MOUSE_UP,this.onMouseUp,this),i.on(r.EventType.KEY_UP,this.onKeyUp,this),i.on(r.EventType.KEY_DOWN,this.onKeyDown,this)},n.onDestroy=function(){i.off(r.EventType.KEY_PRESSING,this.onKeyDown,this)},n.onKeyUp=function(o){this._walk=!1,this._deltaPos=a.ZERO},n.onKeyDown=function(o){switch(o.keyCode){case l.KEY_A:this._deltaPos=this.node.right.negative(),this._walk=!0,console.log("Release a key");break;case l.KEY_D:this._deltaPos=this.node.right,this._walk=!0,console.log("Release D key");break;case l.KEY_W:this._deltaPos=this.node.forward,this._walk=!0,console.log("Release W key");break;case l.KEY_S:this._deltaPos=this.node.forward.negative(),this._walk=!0,console.log("Release S key")}a.multiplyScalar(this._dir,this._deltaPos,.1)},n.onMouseDown=function(o){o.getButton()===h.BUTTON_RIGHT&&(this._mouseDown=!0)},n.onMouseUp=function(o){o.getButton()===h.BUTTON_RIGHT&&(this._mouseDown=!1)},n.onMouseMove=function(o){if(this._mouseDown){console.log("BUTTON_RIGHT");var e=-.005*o.getDeltaX(),t=this.node.worldRotation;d.rotateY(t,t,e),this.node.worldRotation=t}},n.update=function(o){this._walk&&(this._curPos=this.node.getPosition(),a.add(this._curPos,this._curPos,this._dir),this.node.setPosition(this._curPos))},t}(c))||u);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});