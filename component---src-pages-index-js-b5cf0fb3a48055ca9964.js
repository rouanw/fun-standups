(self.webpackChunkfun_standups=self.webpackChunkfun_standups||[]).push([[678],{7704:function(e,t,a){"use strict";a.r(t);var n=a(5564),l=a.n(n),r=a(7294),s=a(5127),o=a(3751),i=a(5855),u=a(5029),c=a(2562),m=Array.from(new Set(l()(u.map((function(e){return e.tags}))).filter(Boolean))),d=(0,c.Z)();t.default=function(){var e=(0,r.useState)(u),t=e[0],a=e[1],n=(0,r.useState)(),l=n[0],c=n[1],f=(0,r.useState)(!1),p=f[0],E=f[1];return r.createElement(s.Z,null,r.createElement(o.Z,{title:"Home",socialTitle:!0}),r.createElement("section",{className:"page-header"},r.createElement("h1",{className:"display"},"Remote-friendly standup ideas for your team"),r.createElement("p",null,"Tired of having the same old Zoom call every day?"),r.createElement("p",null,"Use these fun and creative standup formats to mix things up and learn more about your team and work."),r.createElement("div",null,r.createElement("button",{className:"button -primary",onClick:function(){var e=[u[Math.floor(Math.random()*u.length)].slug];window.location.assign(e)}},"Gimme a random idea!"),r.createElement("a",{className:"button -secondary",href:"https://forms.gle/QtQXGZ3E3UCaMnoG9"},"I have an idea..."))),r.createElement("nav",{className:"standup-navigation"},r.createElement("p",{id:"filter-label"},"Filter:"),r.createElement("div",{className:"standup-filters",role:"radiogroup","aria-labelledby":"filter-label","aria-controls":"standups"},m.map((function(e,t){var n;return r.createElement("button",((n={key:t,className:"button -tag",onClick:function(){E(!0),setTimeout((function(){a(function(e,t){return e.filter((function(e){return e.tags&&e.tags.includes(t)}))}(u,e))}),400),c(e)},role:"radio","aria-checked":e===l?"true":"false",style:{color:e===l?"white":d[e]}}).key=e,n),e)})),r.createElement("span",{"aria-live":"polite"},r.createElement("button",{className:"button -tag -clear",onClick:function(){E(!0),setTimeout((function(){a(u)}),400),E(!0),c()},style:{display:l?"block":"none"}},r.createElement("span",{"aria-hidden":"true"},"× "),"Clear filter")))),r.createElement("ul",{id:"standups",className:"standups",style:{transition:"opacity 400ms ease-in-out",opacity:""+(p?0:1)},onTransitionEnd:function(){return E(!1)}},t.map((function(e){return r.createElement(i.Z,{key:e.title,standup:e,tagColors:d})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b5cf0fb3a48055ca9964.js.map