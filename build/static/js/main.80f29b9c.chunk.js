(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),o=t.n(a),r=t(6),u=t.n(r),l=(t(21),t(7)),s=t(3),i=(t(22),t(4)),d=t.n(i),j="/api/persons",b=function(){return d.a.get(j)},f=function(e){return d.a.post(j,e)},m=function(e){return d.a.delete("".concat(j,"/").concat(e))},h=function(e,n){return d.a.put("".concat(j,"/").concat(e),n)},v=function(e){return Object(c.jsxs)("div",{children:["Filter: ",Object(c.jsx)("input",{value:e.value,onChange:e.onChange})]})},O=function(e){var n=e.onSubmit,t=e.nameValue,a=e.numberValue,o=e.nameHandler,r=e.numberHandle;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("input",{value:t,onChange:o})]}),Object(c.jsxs)("div",{children:["Phone number: ",Object(c.jsx)("input",{value:a,onChange:r})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},g=function(e){return Object(c.jsx)("ul",{children:e.persons.filter((function(n){return n.name.toLowerCase().includes(e.newSearch.toLowerCase())})).map((function(n){return Object(c.jsxs)("li",{value:n.id,style:{textTransform:"capitalize"},children:[n.name," ",n.number,Object(c.jsx)("button",{value:n.id,onClick:e.onClickHandler,children:"Delete"})]},n.id)}))})},x=function(e){var n=e.message,t=e.errorMessage;return null===n?null:n===t?Object(c.jsx)("div",{className:"error",children:n}):Object(c.jsx)("div",{className:"success",children:n})},p=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(""),u=Object(s.a)(r,2),i=u[0],d=u[1],j=Object(a.useState)(""),p=Object(s.a)(j,2),w=p[0],C=p[1],S=Object(a.useState)(""),y=Object(s.a)(S,2),k=y[0],H=y[1],L=Object(a.useState)(""),T=Object(s.a)(L,2),N=(T[0],T[1]),V=Object(a.useState)(""),E=Object(s.a)(V,2),M=E[0],P=E[1];Object(a.useEffect)((function(){b().then((function(e){o(e.data)}))}),[]),console.log("render",t.length,"notes");return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{message:M}),Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(v,{value:k,onChange:function(e){H(e.target.value)}}),Object(c.jsx)(O,{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===i.toLowerCase()})),c={name:i,number:w};if(n&&(console.log("Miksi me ollaan t\xe4\xe4ll\xe4?"),window.confirm("Haluatko lis\xe4t\xe4 uuden numeron henkil\xf6lle?"))){var a=i.toLowerCase(),r=w,u=t.find((function(e){return e.name.toLowerCase()===a})).id,s=Object(l.a)(Object(l.a)({},u),{},{name:a,number:r});h(u,s).then((function(e){var n=t.map((function(n){return n.id!=u?u:e.data}));console.log(n),o(n);var c=" '".concat(e.data.name,"' was updated succesfully to the server");P(c),setTimeout((function(){P(null)}),11e3)})).catch((function(e){P("Person was already removed from server"),setTimeout((function(){P(null)}),11e3)}))}n||(console.log("Ei l\xf6ydy listalta, lis\xe4t\xe4\xe4n...."),f(c).then((function(e){console.log(e.data),o(t.concat(e.data)),N("");var n=" '".concat(e.data.name,"' was succesfully added to the server");P(n),console.log(M),setTimeout((function(){P(null)}),11e3)})))},nameValue:i,nameHandler:function(e){console.log(e.target.value),d(e.target.value)},numberValue:w,numberHandle:function(e){console.log(e.target.value),C(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(g,{persons:t,newSearch:k,onClickHandler:function(e){var n=e.target.value;console.log(n),window.confirm("Are you sure you want to delete "+n)&&m(n).then((function(e){var c=t.find((function(e){return e.id}));console.log(c,"T\xe4ss\xe4 on ihmiset");var a=c.name;console.log(a),P(" '".concat(a,"' was deleted succesfully to the server")),setTimeout((function(){P(null)}),11e3);var r=t.filter((function(e){return e.id!=n}));o(r)}))}})]})};u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.80f29b9c.chunk.js.map