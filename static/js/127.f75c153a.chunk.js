"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[127],{127:function(n,r,t){t.r(r),t.d(r,{default:function(){return Z}});var e,a,u=t(861),c=t(439),s=t(757),i=t.n(s),o=t(791),f=t(87),p=t(86),v=t(168),d=t(444),l=d.ZP.div(e||(e=(0,v.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),h=d.ZP.ul(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),x=t(991),m=t(184);function Z(){var n=(0,o.useState)([]),r=(0,c.Z)(n,2),t=r[0],e=r[1],a=(0,o.useState)(!1),s=(0,c.Z)(a,2),v=s[0],d=s[1];return(0,o.useEffect)((function(){d(!0);var n=function(){var n=(0,u.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Df)();case 3:return r=n.sent,e(r),n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(l,{children:[(0,m.jsx)("h3",{children:"TRENDING NOW"}),v&&(0,m.jsx)(x.a,{}),(0,m.jsx)(h,{children:t.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)(f.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})})}},86:function(n,r,t){t.d(r,{Df:function(){return s},Ph:function(){return p},Xm:function(){return f},sk:function(){return o},vq:function(){return i}});var e=t(861),a=t(757),u=t.n(a),c=t(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"68f9ac02869bbba2dc968e1b369c4856"};var s=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/week");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie",{params:{query:r}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=127.f75c153a.chunk.js.map