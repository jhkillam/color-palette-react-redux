(this["webpackJsonpcolor-palette-react"]=this["webpackJsonpcolor-palette-react"]||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(6),a=n.n(c),i=n(3),l=n(4),u=n(5),f=function(){return"#"+(16777215*Math.random()<<0).toString(16)},p=function(){return{color:f(),isLocked:!1}},s=function(e){return JSON.parse(JSON.stringify(e))},d=[p(),p(),p()],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=s(e);if("ADD_BOX"===t.type)return[].concat(Object(u.a)(n),[p()]);if("REMOVE_BOX"===t.type){var r=Object(u.a)(n);return r.pop(),r}if("TOGGLE_LOCK"===t.type){var o=Object(u.a)(n);o[t.boxIndex].isLocked=!o[t.boxIndex].isLocked}else if("RANDOMIZE"===t.type){var c=Object(u.a)(n);c.map((function(e){return e.isLocked||(e.color=f()),e}))}return n},O=n(12);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={firstName:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;if("UPDATE_PROFILE"===t.type){var n=y({},e);return n.firstName=t.firstName,n}return e},v=Object(l.b)({profile:g,boxes:b}),x=Object(l.c)(v);n(25),n(26);var k=function(e,t,n){var r={border:"2px solid black",backgroundColor:e.color,width:"200px",height:"200px",textAlign:"center"},c="Unlocked";return e.isLocked&&(c="Locked"),o.a.createElement("div",{style:r},o.a.createElement("button",{onClick:e.toggleLock},c),o.a.createElement("h3",null,o.a.createElement("span",{style:{backgroundColor:"#373637",color:"#ffffff",borderRadius:"5px",padding:"0 5px"}},e.color)))};var j=Object(i.b)((function(e){return{boxes:e.boxes}}),(function(e){return{randomize:function(){return e({type:"RANDOMIZE"})},addBox:function(){return e({type:"ADD_BOX"})},removeBox:function(){return e({type:"REMOVE_BOX"})},toggleLock:function(t){return e({type:"TOGGLE_LOCK",boxIndex:t})}}}))((function(e){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("button",{onClick:e.randomize},"Randomize!"),o.a.createElement("button",{onClick:e.addBox},"Add box"),o.a.createElement("button",{onClick:e.removeBox},"Remove box"),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.boxes.map((function(t,n){return o.a.createElement(k,Object.assign({},t,{key:n,toggleLock:function(){return e.toggleLock(n)}}))}))))})),h=Object(i.b)((function(e){return{profile:e.profile}}))((function(e){return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("input",{onChange:function(e){x.dispatch({type:"UPDATE_PROFILE",firstName:e.target.value})},type:"text",name:"firstName",value:e.profile.firstName})))}));var L=function(e){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(h,null),o.a.createElement(j,null))};a.a.render(o.a.createElement(i.a,{store:x},o.a.createElement(L,null)),document.getElementById("root")),x.dispatch({type:null})}},[[13,1,2]]]);
//# sourceMappingURL=main.a95ee41b.chunk.js.map