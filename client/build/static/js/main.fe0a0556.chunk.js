(this["webpackJsonphorizon-zero-dawn"]=this["webpackJsonphorizon-zero-dawn"]||[]).push([[0],{21:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/hzd-logo.51a04884.png"},34:function(e,a,t){e.exports=t(65)},39:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(30),r=t.n(c),i=(t(39),t(7)),s=t(1),m=t(8),o=t(31),h=t.n(o),d=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1];return l.a.createElement("nav",{className:"navbar is-fixed-top is-family-secondary has-background-black is-spaced is-transparent has-text-centered",role:"navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(i.b,{className:"navbar-item has-text-weight-bold has-text-white is-size-4",to:"/"},"Horizon Zero Dawn Wiki"),l.a.createElement("div",{className:"navbar-burger",onClick:function(){return c(!t)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{className:h()("navbar-menu",!0===t&&"is-active"),"data-target":"navbar"},l.a.createElement("div",{id:"navbar",className:"navbar-end is-size-5 has-text-centered"},l.a.createElement(i.b,{className:"navbar-item has-text-white has-text-weight-bold",to:"/machines"},"Machines"),l.a.createElement(i.b,{className:"navbar-item has-text-white has-text-weight-bold",to:"/admin/login"},"Admin"))))},u=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"footer"))},p=function(e){var a=e.children;return l.a.createElement("div",{className:"has-background-dark"},l.a.createElement(d,null),l.a.createElement("div",{className:"has-navbar-fixed-top"},l.a.createElement("main",null,a)),l.a.createElement(u,null))},E=function(e){var a=e.text,t=e.link,n=e.color;return l.a.createElement("div",{className:"control"},l.a.createElement(i.b,{to:t},l.a.createElement("button",{className:"button is-".concat(n," has-text-weight-bold")},a)))},v=(t(21),t(33)),b=t.n(v);t(45).config();var f=function(){return l.a.createElement(p,null,l.a.createElement("div",{className:"hero-section"},l.a.createElement("img",{src:b.a,alt:"logo"}),l.a.createElement("div",{className:"field is-grouped mt-5"},l.a.createElement(E,{text:"View Machine Catalogue",color:"primary",link:"/machines"}),l.a.createElement(E,{text:"Admin Login",color:"black",link:"/admin/login"}))))},N=t(11),g=t.n(N),x=function(e){var a=e.tableCells;return l.a.createElement("tr",null,Object.keys(a).map((function(e,t){return l.a.createElement("td",{key:t},a[e])})))},w=function(e){var a=e.headers,t=e.data;return l.a.createElement("table",{className:"table is-fullwidth"},l.a.createElement("thead",null,l.a.createElement("tr",null,a.map((function(e,a){return l.a.createElement("th",{key:a},e)})))),l.a.createElement("tbody",null,t.map((function(e,a){return l.a.createElement(x,{key:a,tableCells:e})}))))},y=["Name","Size","Origin","Override","Class","Machine Sites","Weakness","Strength","Weak Points","Explosive Components"],k=function(e){var a=e.isAdmin,t=Object(n.useState)([]),c=Object(m.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),h=o[0],d=o[1],u=[];Object(n.useEffect)((function(){g.a.get("".concat("https://hzd-website.herokuapp.com/api/machines")).then((function(e){""===h?i(e.data):(r.filter((function(e){for(var a=h.toLowerCase(),t=0,n=Object.values(e);t<n.length;t++){var l=n[t];if(null!==l&&l.toString().toLowerCase().includes(a)){u.push(e);break}}})),i(u))})).catch((function(e){return console.log(e)}))}),[h]);return l.a.createElement(p,null,l.a.createElement("div",{className:"machines-section pt-6"},l.a.createElement("h1",{className:"pt-6 has-text-white title is-inline"},"Machine Catalogue"),a&&l.a.createElement("div",{className:"field is-grouped is-pulled-right"},l.a.createElement(E,{text:"Add Machine",color:"primary",link:"/admin/add-machine"}),l.a.createElement(E,{text:"Edit Machine",color:"warning",link:"/admin/edit-machine"}),l.a.createElement(E,{text:"Delete Machine",color:"danger",link:"/admin/delete-machine"})),l.a.createElement("div",{className:"field mt-4"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-primary",name:"search",type:"text",onChange:function(e){d(e.target.value)},value:h,placeholder:"Search Machines"}))),l.a.createElement(w,{headers:y,data:r})))},C=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),o=i[0],h=i[1],d=Object(s.g)();return l.a.createElement(p,null,l.a.createElement("div",{className:"login-section"},l.a.createElement("h1",{className:"title has-text-white"},"Login"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t==="".concat("myusername123")&&o==="".concat("mypassword123")?d.push("".concat("/admin/machines")):alert("unauthorized user")}},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-primary",name:"username",type:"text",placeholder:"Username",onChange:function(e){return c(e.target.value)}}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input is-primary",name:"password",type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}}))),l.a.createElement("button",{className:"button is-primary has-text-weight-bold",type:"submit"},"Login"))))},O=function(){return l.a.createElement(k,{isAdmin:!0})},j=t(12),M=t(17),S=t(18),z=t.n(S),_=function(){var e=new Date,a=Object(s.g)(),t=Object(n.useState)({name:"",size:"",origin:"",override:"",machine_class:"",machine_sites:0,weakness:"",strength:"",weak_points:"",explosive_components:"",created_at:z()(e).format("MM-DD-YYYY"),updated_at:z()(e).format("MM-DD-YYYY")}),c=Object(m.a)(t,2),r=c[0],i=c[1],o=function(e){var a=e.target,t=a.name,n=a.value;i(Object(M.a)(Object(M.a)({},r),{},Object(j.a)({},t,n)))},h=function(e){e.preventDefault();var t=r;g.a.post("https://hzd-website.herokuapp.com/api/machines",t,{headers:{"content-type":"application/json"}}).then((function(e){console.log(e.data),alert("".concat(e.data.name," has been added to the machines database!")),a.push("/machines")})).catch((function(e){return console.log(e)}))};return l.a.createElement(p,null,l.a.createElement("div",{className:"add-machine-section"},l.a.createElement("h1",{className:"title has-text-white has-text-center"},"Add Machine"),l.a.createElement("form",{onSubmit:h,name:"addMachinesForm"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"name",className:"has-text-white"},"Name"),l.a.createElement("input",{className:"input is-primary",name:"name",type:"text",onChange:o,value:r.name,placeholder:"Name"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"size",className:"has-text-white"},"Size"),l.a.createElement("input",{className:"input is-primary",name:"size",type:"text",onChange:o,value:r.size,placeholder:"Size"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"origin",className:"has-text-white"},"Origin"),l.a.createElement("input",{className:"input is-primary",name:"origin",type:"text",onChange:o,value:r.origin,placeholder:"Origin"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"override",className:"has-text-white"},"Override"),l.a.createElement("input",{className:"input is-primary",name:"override",type:"text",onChange:o,value:r.override,placeholder:"Override"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"machine_class",className:"has-text-white"},"Machine Class"),l.a.createElement("input",{className:"input is-primary",name:"machine_class",type:"text",onChange:o,value:r.machine_class,placeholder:"Machine Class"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"machine_sites",className:"has-text-white"},"Machine Sites"),l.a.createElement("input",{className:"input is-primary",name:"machine_sites",type:"number",onChange:o,value:r.machine_sites,placeholder:"Machine Sites"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"weakness",className:"has-text-white"},"Weakness"),l.a.createElement("input",{className:"input is-primary",name:"weakness",type:"text",onChange:o,value:r.weakness,placeholder:"Weakness"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"strength",className:"has-text-white"},"Strength"),l.a.createElement("input",{className:"input is-primary",name:"strength",type:"text",onChange:o,value:r.strength,placeholder:"Strength"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"weak_points",className:"has-text-white"},"Weak Points"),l.a.createElement("input",{className:"input is-primary",name:"weak_points",type:"text",onChange:o,value:r.weak_points,placeholder:"Weak Points"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{for:"explosive_components",className:"has-text-white"},"Explosive Components"),l.a.createElement("input",{className:"input is-primary",name:"explosive_components",type:"text",onChange:o,value:r.explosive_components,placeholder:"Explosive Components"}))),l.a.createElement("button",{className:"button is-primary has-text-weight-bold",type:"submit",onClick:h},"Add Machine"))))},D=function(){return l.a.createElement(i.a,{basename:"/"},l.a.createElement(s.d,null,l.a.createElement(s.a,{exact:!0,path:"/",component:f}),l.a.createElement(s.a,{path:"/machines",component:k}),l.a.createElement(s.a,{path:"/admin",render:function(e){var a=e.match.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{path:"".concat(a,"/login"),component:C,exact:!0}),l.a.createElement(s.a,{path:"".concat(a,"/machines"),component:O}),l.a.createElement(s.a,{path:"".concat(a,"/add-machine"),component:_}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.c,{basename:"/"},l.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.fe0a0556.chunk.js.map