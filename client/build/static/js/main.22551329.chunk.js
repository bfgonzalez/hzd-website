(this["webpackJsonphorizon-zero-dawn"]=this["webpackJsonphorizon-zero-dawn"]||[]).push([[0],{18:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/hzd-logo.51a04884.png"},31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),i=(a(36),a(7)),o=a(1),s=a(8),m=a(28),u=a.n(m),d=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("nav",{className:"navbar is-fixed-top is-family-secondary is-transparent is-spaced",role:"navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(i.b,{className:"navbar-item has-text-weight-bold has-text-white is-size-4",to:"/"},"Horizon Zero Dawn Wiki"),r.a.createElement("div",{className:"navbar-burger",onClick:function(){return c(!a)}},r.a.createElement("span",{className:"has-background-red"}),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:u()("navbar-menu",!0===a&&"is-active"),"data-target":"navbar"},r.a.createElement("div",{id:"navbar",className:"navbar-end is-size-5 has-text-centered"},r.a.createElement(i.b,{className:"navbar-item has-text-white has-text-weight-bold",onClick:function(){return c(!a)},to:"/machines"},"Machines"),r.a.createElement(i.b,{className:"navbar-item has-text-white has-text-weight-bold",onClick:function(){return c(!a)},to:"/admin"},"Admin"))))},h=(a(18),a(30)),b=a.n(h);a(42).config();var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",{className:"hero-section"},r.a.createElement("img",{src:b.a,alt:"logo"}),r.a.createElement("div",{className:"buttons"},r.a.createElement(i.b,{to:"/machines"},r.a.createElement("button",{className:"button is-primary has-text-weight-bold mt-5 mr-4"},"View Machine Catalogue")),r.a.createElement(i.b,{to:"/admin"},r.a.createElement("button",{className:"button is-black has-text-white has-text-weight-bold mt-5"},"Admin Login")))))},E=a(13),v=a.n(E),f=function(e){var t=e.tableCells;return r.a.createElement("tr",null,Object.keys(t).map((function(e,a){return r.a.createElement("td",{key:a},t[e])})))},g=function(e){var t=e.headers,a=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement(f,{key:t,tableCells:e})}))))},w=["Name","Size","Origin","Override","Class","Machine Sites","Weakness","Strength","Weak Points"],N=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){v.a.get("".concat("https://hzd-website.herokuapp.com/api/machines")).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Machines"),r.a.createElement(g,{headers:w,data:a}))},y=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),m=i[0],u=i[1],d=Object(o.f)();return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a==="".concat("myusername123")&&m==="".concat("mypassword123")?d.push("".concat("/admin-panel")):alert("you're not my master!")}},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-primary",name:"username",type:"text",placeholder:"Username",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"input is-primary",name:"password",type:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)}}))),r.a.createElement("button",{className:"button is-primary has-text-weight-bold",type:"submit"},"Login")))},k=function(e){console.log(e)},x=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Admin Panel"),r.a.createElement("form",{onSubmit:k},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-primary",type:"text",placeholder:"Add Machine"}))),r.a.createElement("button",{className:"button is-primary has-text-weight-bold",type:"submit",onClick:function(e){console.log(e.target.result)}},"Add Machine")))},O=function(){return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:p}),r.a.createElement(o.a,{path:"/machines",component:N}),r.a.createElement(o.a,{path:"/admin",component:y}),r.a.createElement(o.a,{path:"".concat("/admin-panel"),component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.22551329.chunk.js.map