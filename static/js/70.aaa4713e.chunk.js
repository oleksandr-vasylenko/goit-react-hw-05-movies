"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[70],{70:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r,a,u,c=n(861),s=n(439),i=n(757),o=n.n(i),p=n(791),f=n(86),l=n(87),v=n(689),d=n(168),h=n(444),x=h.ZP.div(r||(r=(0,d.Z)(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),m=h.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n  gap: 12px;\n"]))),Z=h.ZP.ul(u||(u=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),w=n(991),g=n(184);function b(){var t=(0,p.useState)(""),e=(0,s.Z)(t,2),n=e[0],r=e[1],a=(0,p.useState)([]),u=(0,s.Z)(a,2),i=u[0],d=u[1],h=(0,p.useState)(null),b=(0,s.Z)(h,2),y=b[0],k=b[1],j=(0,p.useState)(!1),_=(0,s.Z)(j,2),S=_[0],P=_[1],C=(0,v.TH)();(0,p.useEffect)((function(){if(""!==n){var t=function(){var t=(0,c.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(!0),t.next=4,(0,f.Ph)(n);case 4:(e=t.sent)&&d(e),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),k("Something went wrong. Please try again."),t.abrupt("return",y);case 12:return t.prev=12,P(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}}();null!==n&&t()}}),[n,y]);return(0,g.jsxs)(x,{children:[S&&(0,g.jsx)(w.a,{}),(0,g.jsxs)(m,{onSubmit:function(t){t.preventDefault();var e=t.target.elements.input.value;""===e?alert("Type something!"):r(e),t.target.elements.input.value=""},children:[(0,g.jsx)("input",{name:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,g.jsx)("button",{type:"submit",children:(0,g.jsx)("span",{children:"Search"})})]}),(0,g.jsx)(Z,{children:n&&i.map((function(t){var e=t.id,n=t.title;return(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{to:"".concat(e),state:{from:C},children:n})},e)}))})]})}},86:function(t,e,n){n.d(e,{Df:function(){return s},Ph:function(){return f},Xm:function(){return p},sk:function(){return o},vq:function(){return i}});var r=n(861),a=n(757),u=n.n(a),c=n(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"68f9ac02869bbba2dc968e1b369c4856"};var s=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie",{params:{query:e}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=70.aaa4713e.chunk.js.map