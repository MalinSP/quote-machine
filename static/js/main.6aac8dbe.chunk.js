(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),a=n(8),r=n.n(a),s=(n(16),n(7)),u=n.n(s),i=n(9),l=n(3),F=(n(18),["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"]),h=n(10),b=n(11),j=n(1),d="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";var f=function(){var e=Object(c.useState)("If you look at what you have in life, you\u2019ll always have more. If you look at what you don\u2019t have in life, you\u2019ll never have enough."),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)("Oprah Winfrey"),r=Object(l.a)(a,2),s=r[0],f=r[1],C=Object(c.useState)(0),p=Object(l.a)(C,2),O=(p[0],p[1]),B=Object(c.useState)(null),g=Object(l.a)(B,2),x=g[0],v=g[1],y=Object(c.useState)("#CC9999"),E=Object(l.a)(y,2),w=E[0],m=E[1],D=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,v(c.quotes),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){D(d)}),[d]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",style:{backgroundColor:w},children:Object(j.jsxs)("div",{id:"quote-box",style:{color:w},children:[Object(j.jsxs)("p",{id:"text",children:['"',n,'"']}),Object(j.jsxs)("p",{id:"author",children:[" - ",s]}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("a",{style:{backgroundColor:w},id:"tweet-quote",target:"_blank",href:encodeURI("http://www.twitter.com/intent/tweet?text="+n+"  - "+s),children:Object(j.jsx)(h.a,{icon:b.a})}),Object(j.jsx)("button",{id:"new-quote",style:{backgroundColor:w},onClick:function(){return function(){var e=Math.floor(x.length*Math.random()),t=Math.floor(F.length*Math.random());O(e),m(F[t]),o(x[e].quote),f(x[e].author)}()},children:"Change Quote"})]})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),C()}},[[25,1,2]]]);
//# sourceMappingURL=main.6aac8dbe.chunk.js.map