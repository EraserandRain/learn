(function(n){function t(t){for(var l,c,u=t[0],o=t[1],s=t[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l]);a&&a(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],l=!0,u=1;u<e.length;u++){var o=e[u];0!==r[o]&&(l=!1)}l&&(i.splice(t--,1),n=c(c.s=e[0]))}return n}var l={},r={app:0},i=[];function c(t){if(l[t])return l[t].exports;var e=l[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=l,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var l in n)c.d(e,l,function(t){return n[t]}.bind(null,l));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var a=o;i.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("85ec")},"07e1":function(n,t,e){"use strict";e("2acc")},"2acc":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var l=e("2b0e"),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("div",[n._v("第 "+n._s(n.n)+" 手")]),e("div",{staticClass:"wrapper"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(0,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(1,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(2,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(3,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(4,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(5,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(6,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(7,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.ClickCell(8,t)}}})],1),e("div",[n._v(n._s(null==n.result?"胜负未分":"胜方为"+n.result))])])},i=[],c=(e("d81d"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cell",on:{click:n.ClickSelf}},[n.a?e("div",[n._v(n._s(n.text))]):e("div")])}),u=[],o={props:["n"],data:function(){return{a:!1,text:""}},methods:{ClickSelf:function(){""===this.text&&(this.a=!0,this.text=this.n%2==0?"x":"o",this.$emit("click",this.text))}}},s=o,a=(e("07e1"),e("2877")),f=Object(a["a"])(s,c,u,!1,null,null,null),p=f.exports,d={components:{Cell:p},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:null}},methods:{ClickCell:function(n,t){this.n+=1,this.map[Math.floor(n/3)][n%3]=t,this.win()},win:function(){for(var n=this.map,t=0;t<=2;t++)null!==n[t][0]&&n[t][0]==n[t][1]&&n[t][1]==n[t][2]?this.result=n[t][0]:null!==n[0][t]&&n[0][t]==n[1][t]&&n[1][t]==n[2][t]?this.result=n[0][t]:null!==n[0][0]&&n[0][0]==n[1][1]&&n[1][1]==n[2][2]?this.result=n[0][0]:null!==n[0][2]&&n[0][2]==n[1][1]&&n[1][1]==n[2][0]&&(this.result=n[0][2])}}},h=d,C=(e("034f"),Object(a["a"])(h,r,i,!1,null,null,null)),v=C.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(n){return n(v)}}).$mount("#app")},"85ec":function(n,t,e){}});
//# sourceMappingURL=app.8ce7eee8.js.map