(this.webpackJsonp2irr_calc=this.webpackJsonp2irr_calc||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(3),r=t.n(l),c=(t(9),t(1)),i=[];var u=function(){var e=o.a.useState(),n=Object(c.a)(e,2),t=n[0],a=n[1],l=o.a.useState(50),r=Object(c.a)(l,2),u=r[0],s=r[1],m=o.a.useState(),v=Object(c.a)(m,2),d=v[0],g=v[1],h=o.a.useState(0),f=Object(c.a)(h,2),p=f[0],E=f[1],w=o.a.useState(""),b=Object(c.a)(w,2),C=b[0],O=b[1];return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h1",null,p),o.a.createElement("button",{name:"findNPV",onClick:function(){return E(S)}},"find NPV")),o.a.createElement("div",null,o.a.createElement("div",null,"Initial Investment: ",d),o.a.createElement("input",{type:"text",name:"initialInv",onChange:function(e){return g(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("div",null,"Target ROR: ",u,"%"),o.a.createElement("input",{type:"range",min:"0",max:"100",step:"1",name:"ROR",onChange:function(e){return s(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("div",null,"Cash Flows: ",C),o.a.createElement("input",{type:"text",name:"cashFlow",onChange:function(e){return a(e.target.value)}}),o.a.createElement("button",{name:"cashFlowBtn",onClick:function(){var e="";for(var n in i.push(t),i)e+=i[n].toString(),e+=",";O(e),console.log(i)}},"Add Cash Flow")));function S(){var e=u/100;console.log("before r "+u);var n=null;for(var t in i){var a=parseInt(t)+1;n+=i[t]/Math.pow(1+e,a)}return console.log("r "+u),console.log("cashflows "+i),console.log("initial Invest "+d),console.log("npv "+n),console.log(p),(n-d).toFixed(2)}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,n,t){e.exports=t(10)},9:function(e,n,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.e94a9796.chunk.js.map