(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{142:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(32),l=n.n(c),r=(n(142),n(33)),i=n(78),s=n(80),d=n(167),o=n(74),j=n(109),u=(n(143),{});j.a.initializeApp(u);var b=j.a,h=(n(146),function(e){s.b.success(e,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),O=n(8),x=function(e){var t=e.updateFormHandler,n=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),s=Object(i.a)(l,2),d=s[0],o=s[1];return Object(a.useEffect)((function(){o(!0),b.database().ref("contact").on("value",(function(e){var t=e.val(),n=[];for(var a in t)n.push(Object(r.a)({id:a},t[a]));c(n),o(!1)}))}),[]),{contactList:n,isLoading:d}}(),c=n.contactList,l=n.isLoading;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"contact-header",children:"Contacts"}),Object(O.jsxs)(d.a,{size:"large",className:"table",children:[Object(O.jsx)(d.a.Header,{children:Object(O.jsxs)(d.a.Row,{children:[Object(O.jsx)(d.a.HeaderCell,{textAlign:"center",children:"Username"}),Object(O.jsx)(d.a.HeaderCell,{textAlign:"center",children:"Phone Number"}),Object(O.jsx)(d.a.HeaderCell,{textAlign:"center",children:"Gender"}),Object(O.jsx)(d.a.HeaderCell,{textAlign:"center",children:"Delete"}),Object(O.jsx)(d.a.HeaderCell,{textAlign:"center",children:"Edit"})]})}),Object(O.jsx)(d.a.Body,{children:l?Object(O.jsx)(d.a.Row,{children:Object(O.jsx)(d.a.Cell,{colSpan:5,textAlign:"center",children:Object(O.jsx)("p",{children:"Loading..."})})}):0===(null===c||void 0===c?void 0:c.length)?Object(O.jsx)(d.a.Row,{children:Object(O.jsx)(d.a.Cell,{colSpan:5,textAlign:"center",children:Object(O.jsx)("p",{className:"nothing-found",children:"Nothing found!"})})}):null===c||void 0===c?void 0:c.map((function(e){return Object(O.jsxs)(d.a.Row,{children:[Object(O.jsx)(d.a.Cell,{children:e.username.toUpperCase()}),Object(O.jsx)(d.a.Cell,{children:e.phoneNumber}),Object(O.jsx)(d.a.Cell,{children:e.gender}),Object(O.jsx)(d.a.Cell,{onClick:function(){return t=e.id,b.database().ref("contact").child(t).remove(),void h("Deleted successfully");var t},children:Object(O.jsx)(o.a,{name:"delete"})}),Object(O.jsx)(d.a.Cell,{onClick:function(){return t(e)},children:Object(O.jsx)(o.a,{name:"edit"})})]},null===e||void 0===e?void 0:e.id)}))})]})]})},m=n(75),p=n(170),f=n(166),v=n(171),g=n(168),C=[{key:"m",text:"Male",value:"male"},{key:"f",text:"Female",value:"female"},{key:"o",text:"Other",value:"other"}],N=function(e){var t=e.info,n=e.setInfo,a=e.handleFormSubmit,c=function(e){var a=e.target,c=a.name,l=a.value;n(Object(r.a)(Object(r.a)({},t),{},Object(m.a)({},c,l.toUpperCase())))};return Object(O.jsx)(p.a,{textAlign:"center",verticalAlign:"middle",children:Object(O.jsxs)(p.a.Column,{style:{width:"300px"},children:[Object(O.jsx)("div",{className:"ui pilled segment",children:Object(O.jsx)("div",{className:"ui pilled brand",children:Object(O.jsxs)("a",{href:"https://github.com/brkdkmn",className:"design",target:"_blank",rel:"noopener noreferrer",children:[Object(O.jsx)("code",{children:"<Burak />"}),Object(O.jsx)("span",{className:"design header",children:" design"})]})})}),Object(O.jsx)("h2",{className:"contact-header",children:"Addd Contact"}),Object(O.jsx)(f.a,{size:"large",onSubmit:a,children:Object(O.jsxs)(v.a,{stacked:!0,children:[Object(O.jsx)(f.a.Input,{fluid:!0,name:"username",icon:"user",iconPosition:"left",placeholder:"Name",value:t.username,onChange:c,required:!0}),Object(O.jsx)(f.a.Input,{fluid:!0,name:"phoneNumber",icon:"phone",iconPosition:"left",placeholder:"Phone Number",type:"text",value:t.phoneNumber,onChange:c,required:!0}),Object(O.jsx)(f.a.Dropdown,{options:C,onChange:function(e,a){var c=a.name,l=a.value;n(Object(r.a)(Object(r.a)({},t),{},Object(m.a)({},c,l.toUpperCase())))},value:t.gender.toLowerCase(),placeholder:"Gender",name:"gender",fluid:!0,selection:!0,required:!0}),Object(O.jsx)(g.a,{color:"teal",fluid:!0,size:"large",type:"submit",children:t.id?"Update":"Add"})]})})]})})},A={username:"",phoneNumber:"",gender:"NO INFO"};var k=function(){var e=Object(a.useState)(A),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(N,{handleFormSubmit:function(e){e.preventDefault(),(null===n||void 0===n?void 0:n.id)?function(e){b.database().ref("contact").child(e.id).update(e),h("Updated Successfully")}(n):function(e){b.database().ref("contact").push(e),h("Added successfully")}(n),c(A)},className:"form",info:n,setInfo:c}),Object(O.jsx)(x,{className:"contacts",updateFormHandler:function(e){c(Object(r.a)({},e))}}),Object(O.jsx)(s.a,{})]})};n(153);l.a.render(Object(O.jsx)(k,{}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.451a8377.chunk.js.map