(this["webpackJsonpdiaco-react-starter"]=this["webpackJsonpdiaco-react-starter"]||[]).push([[0],{18:function(e,a,t){e.exports=t(28)},23:function(e,a,t){},24:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),o=(t(23),t(5)),s=(t(24),t(16));var i=t(2);function m(e){var a=e.article,t=a.urlToImage,n=a.publishedAt,c=a.title,l=a.description,r=a.url,o=new Date(n);return Object(i.a)("div",{className:"col-12 col-md-6",key:c},Object(i.a)("div",{className:"article mb-4"},Object(i.a)("div",{className:"article-image",css:{backgroundImage:"url(".concat(t,")")}}),Object(i.a)("div",{className:"article-content p-4 p-lg-5"},Object(i.a)("h3",null,c),Object(i.a)("h6",{className:"mb-3"},o.toDateString()),Object(i.a)("p",{className:"d-none d-md-block"},l),Object(i.a)("p",null,Object(i.a)("a",{className:"btn btn-dark",href:r,target:"_blank",rel:"noopener noreferrer"},"Read More")))))}var u=t(17),d=t(15),b=Object(i.b)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),p=Object(u.a)(d.a,{target:"ebh1tc80",label:"Spinner"})({display:"block",animation:"".concat(b," 1s linear infinite"),color:"#CCCCCC",height:"100px",width:"100px",margin:"50px auto"},"");p.defaultProps={"aria-label":"loading"};var v=function(){var e,a=c.a.useState("idle"),t=Object(o.a)(a,2),n=t[0],l=t[1],r=c.a.useState(""),i=Object(o.a)(r,2),u=i[0],d=i[1],b=c.a.useState(!1),v=Object(o.a)(b,2),f=v[0],h=v[1],g=c.a.useState(""),E=Object(o.a)(g,2),N=E[0],O=E[1],j=c.a.useState(null),y=Object(o.a)(j,2),S=y[0],k=y[1],w="loading"===n,C="success"===n;return c.a.useEffect((function(){f&&(l("loading"),function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(s.a)({method:"GET"},a);return window.fetch("".concat("https://newsapi.org/v2","/").concat(e),t).then((function(e){return e.json()}))}("/everything?language=en&q=".concat(encodeURIComponent(u),"&sortBy=").concat(encodeURIComponent(N),"&apiKey=a5f10eed4f94467ba5a6479ba32597a9")).then((function(e){k(e),l("success")})))}),[f,u,N]),c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"navbar navbar-dark bg-dark d-flex mb-2 mb-md-5"},c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"nav-form",onSubmit:function(e){e.preventDefault(),O(e.target.elements.sortOptions.value),d(e.target.elements.search.value),h(!0)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4 col-md-6"},c.a.createElement("input",{id:"search",className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"})),c.a.createElement("div",{className:"col-5 col-md-4"},c.a.createElement("select",{id:"sortOptions",className:"form-control"},c.a.createElement("option",{value:"publishedAt"},"By Date"),c.a.createElement("option",{value:"relevancy"},"By Relevancy"),c.a.createElement("option",{value:"popularity"},"By Popularity"))),c.a.createElement("div",{className:"col-3 col-md-2"},c.a.createElement("button",{className:"btn btn-search",type:"submit"},"Search")))))),c.a.createElement("div",{className:"container"},w?c.a.createElement(p,null):null,C?(null===S||void 0===S||null===(e=S.articles)||void 0===e?void 0:e.length)?c.a.createElement("div",{className:"row"},S.articles.map((function(e){return c.a.createElement(m,{key:e.url,article:e})}))):c.a.createElement("p",null,"No articles found. Try another search."):null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a98d6ef9.chunk.js.map