(this.webpackJsonpmorosoft=this.webpackJsonpmorosoft||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(23),s=n.n(r),i=(n(142),n(36)),j=n.n(i),u=n(57),b=n(44),o=(n(143),n(58)),l=n.n(o),O=n(60),d=n(242),x=n(241),f=n(33),p=n(240),h=(n(161),n(10)),m=function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(b.a)(r,2),i=s[0],o=s[1],m=Object(c.useState)(""),v=Object(b.a)(m,2),g=v[0],y=v[1],k=Object(c.useState)({id:"",name:""}),C=Object(b.a)(k,2),w=C[0],F=C[1],S=Object(c.useState)(!1),I=Object(b.a)(S,2),D=I[0],A=I[1],L=function(){A(!1)},N=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/find");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){N()}),[]);var P=function(){var e=Object(u.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(!0),F(Object(O.a)(Object(O.a)({},w),{},{id:t,name:n}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/delete",{id:t});case 2:200==e.sent.status&&N();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/update",w);case 2:200==e.sent.status&&(L(),N());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=[{title:"id",dataIndex:"id",key:"id"},{title:"Item name",dataIndex:"name",key:"name"},{title:"Action",key:"action",render:function(e,t){return Object(h.jsxs)(d.b,{size:"middle",children:[Object(h.jsx)("a",{onClick:function(){return P(t.id,t.name)},children:"edit"}),Object(h.jsx)("a",{onClick:function(){return B(t.id)},children:"Delete"})]})}}];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Add Item "}),Object(h.jsx)("label",{htmlFor:"fname",children:"item ID:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"lname",children:"Item Name:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",value:g,onChange:function(e){y(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:function(){l.a.post("/save",{id:i,name:g}),o(""),y(""),N()},children:"save item!"}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)(x.a,{title:"Update data",visible:D,footer:[Object(h.jsx)(f.a,{onClick:L,children:"Cancel"})],children:[Object(h.jsx)("label",{htmlFor:"fname",children:"item ID:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",value:w.id,onChange:function(e){F(Object(O.a)(Object(O.a)({},w),{},{id:e.target.value}))}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"lname",children:"Item Name:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",value:w.name,onChange:function(e){F(Object(O.a)(Object(O.a)({},w),{},{name:e.target.value}))}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:E,children:"update!"})]}),Object(h.jsx)(p.a,{dataSource:n,columns:J})]})]})};var v=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(b.a)(r,2),i=s[0],o=s[1],O=Object(c.useState)(""),d=Object(b.a)(O,2),x=d[0],f=d[1],p=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/",{username:i,password:x});case 2:void 0!=e.sent.data.data.user&&a(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(h.jsx)(m,{}):Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{htmlFor:"fname",children:"User name:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"lname",children:"Password:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",value:x,onChange:function(e){f(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:p,children:"Login!"})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,243)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),g()}},[[236,1,2]]]);
//# sourceMappingURL=main.638442d6.chunk.js.map