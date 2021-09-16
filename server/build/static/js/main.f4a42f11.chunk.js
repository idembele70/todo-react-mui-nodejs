(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{55:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(117),o=a(0),r=a.n(o),c=a(26),i=a.n(c),s=a(10),l=a(66),d=a(8),h=a(110),j=a(113),b=a(50),m=a.n(b),p=a(56),u=a(92),x=a(118),f=a(114),g=a(63),O=a.n(g),v=a(67),y=Object(v.a)({palette:{marine:{main:"#094067"},primary:{main:"#3DA9FC",light:"#2196f375"},secondary:{main:"#FFF"},red:{main:"#EF4565",light:"#f1607b"}}}),w=a(52),S=a(111),T=a(119),C=a(62),N=a.n(C),k=a(61),B=a.n(k),E=a(2),I=Object(h.a)({checkbox:{margin:0},details:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:148},title:{margin:"0 0 9px 0"}});function F(e){var t=e.todo,a=I(),n=t.details,r=t._id,c=t.isDone,i=t.name,l=Object(o.useState)(c||!1),d=Object(s.a)(l,2),h=d[0],j=d[1],b=new AbortController,m=b.signal;return Object(o.useEffect)((function(){return function(){b.abort()}})),Object(E.jsxs)(x.a,{display:"flex",alignItems:"center",width:350,height:100,borderBottom:"1px solid #90B4CE",children:[Object(E.jsx)(S.a,{className:a.checkbox,control:Object(E.jsx)(T.a,{icon:Object(E.jsx)(B.a,{fontSize:"large",color:"primary"}),checkedIcon:Object(E.jsx)(N.a,{fontSize:"large",color:"primary"}),name:"todoIcon",checked:h,onChange:function(){j(!h);var e=JSON.stringify(Object(w.a)(Object(w.a)({},t),{},{isDone:!h}));fetch("/todo/update/".concat(r),{method:"PUT",headers:{"content-type":"application/json"},body:e,signal:m}).then((function(){return"Todo sat done !"})).catch((function(e){"AbortError"!==e.name&&console.error("Error while fetching method put todo in TodoRow jsx file :",e)}))}})}),Object(E.jsxs)(x.a,{pl:"29px",pr:"41px",width:"calc(100% - 90px)",style:{cursor:"pointer"},onClick:function(){window.location="/todo/client/update/".concat(r)},children:[Object(E.jsx)(u.a,{variant:"h5",className:a.title,children:i}),Object(E.jsx)(u.a,{className:a.details,variant:"body1",children:n})]})]})}var R=a(112),A=Object(h.a)({circularProgressContainer:{position:"fixed",top:"40%",left:"50%",transform:"translateX(-50%)"}});var H=function(){var e=A();return Object(E.jsx)(x.a,{className:e.circularProgressContainer,children:Object(E.jsx)(R.a,{color:"primary"})})},D=Object(h.a)({root:{maxHeight:492,width:"100%",overflow:"auto",position:"relative"},addBtn:{borderRadius:50,height:64,boxShadow:"0px 4px 4px rgba(9, 64, 103, 0.47)",backgroundColor:y.palette.primary.main,"&:hover":{backgroundColor:y.palette.primary.light}},addIcon:{fontSize:48},noTodoText:{paddingTop:y.spacing(8),textAlign:"center",color:y.palette.primary.main}});function P(e){var t=e.searchTerm,a=D(),n=Object(o.useState)([]),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(o.useState)(!0),d=Object(s.a)(l,2),h=d[0],b=d[1];return Object(o.useEffect)((function(){b(!0);var e=new AbortController,a=e.signal;return fetch("https://todo-react-nodejs.herokuapp.com/todo",{signal:a}).then((function(e){return e.json()})).then(function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(a.filter((function(e){return t&&e.name.match(new RegExp(t,"ig"))||!t})));case 2:b(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){"AbortError"!==e.name&&console.error("Error while fetching all Todos in TodoContainer jsx file",e),b(!1)})),function(){return e.abort()}}),[t,c.length]),h?Object(E.jsx)(H,{}):Object(E.jsxs)(j.a,{container:!0,justifyContent:"flex-start",className:a.root,children:[c.length?c.map((function(e){var t=e._id;return Object(E.jsx)(j.a,{item:!0,xs:12,style:{maxHeight:101},children:Object(E.jsx)(F,{todo:e})},t)})):!h&&Object(E.jsx)(u.a,{variant:"h4",className:a.noTodoText,children:"There is no todo found in the DB !"}),!h&&Object(E.jsx)(x.a,{top:500,position:"fixed",width:64,style:{transform:"translateX(280px)"},children:Object(E.jsx)(f.a,{className:a.addBtn,href:"/todo/client/new",color:"secondary",children:Object(E.jsx)(O.a,{className:a.addIcon})})})]})}P.defaultProps={searchTerm:""};a(55);var U=Object(h.a)({main:{height:"calc(100% - 154px)"}});function z(e){var t=e.searchTerm,a=U();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(j.a,{className:"container",children:Object(E.jsx)(j.a,{item:!0,className:a.main,xs:12,children:Object(E.jsx)(P,{searchTerm:t})})})})}var L=a(5),J=a(11),W=a(95),M=a(115),X=a(120),_=Object(L.a)({root:{"label + &":{marginTop:y.spacing(3)}},input:{"&:focus":{borderColor:y.palette.primary.main,boxShadow:"".concat(Object(J.a)(y.palette.primary.main,.25)," 0 0 0 0.2rem")},border:"1px solid #094067",borderRadius:5,color:y.palette.text.primary,fontFamily:["Roboto","-apple-system","BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),marginTop:y.spacing(2),padding:7,position:"relative",transition:y.transitions.create(["border-color","box-shadow"]),height:24,width:312}})(W.a),q=Object(h.a)({label:{color:y.palette.marine.main,lineHeight:"28px"},rootItem:{maxWidth:328,margin:"auto"}});function G(e){var t=e.children,a=e.onSubmit,n=e.putSpaceBetween,r=e.error,c=e.data,i=q(),l=Object(o.useState)(""),d=Object(s.a)(l,2),h=d[0],b=d[1],m=Object(o.useState)(""),p=Object(s.a)(m,2),x=p[0],f=p[1],g=function(e){switch(e.target.name){case"name":b(e.target.value);break;case"details":f(e.target.value);break;default:console.error("invalid Name")}};return Object(o.useEffect)((function(){b(c.name),f(c.details)}),[c]),Object(E.jsx)(j.a,{container:!0,alignItems:"center",direction:"column",className:"container",children:Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a([h,x])},children:[Object(E.jsx)(j.a,{item:!0,xs:12,className:i.rootItem,children:Object(E.jsxs)(M.a,{children:[Object(E.jsx)(X.a,{shrink:!0,htmlFor:"name",children:Object(E.jsx)(u.a,{variant:"h5",className:i.label,children:"Name"})}),Object(E.jsx)(_,{id:"name",name:"name",onChange:g,placeholder:"Enter the name",value:h||""})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,className:i.rootItem,children:Object(E.jsxs)(M.a,{style:{marginTop:32},children:[Object(E.jsx)(X.a,{shrink:!0,htmlFor:"details",children:Object(E.jsx)(u.a,{variant:"h5",className:i.label,children:"Details"})}),Object(E.jsx)(_,{id:"details",name:"details",onChange:g,multiline:!0,minRows:11,placeholder:"Enter the details",value:x||""})]})}),r&&Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsx)(u.a,{variant:"h6",align:"center",color:"error",children:r})}),Object(E.jsx)(j.a,{item:!0,container:!0,xs:12,justifyContent:n?"space-between":"center",children:t})]})})}G.defaultProps={data:{name:String,details:String},error:"",onSubmit:function(){},putSpaceBetween:!1};var K=G,Q=(Object(L.a)({root:{"label + &":{marginTop:y.spacing(3)}},input:{"&:focus":{borderColor:y.palette.primary.main,boxShadow:"".concat(Object(J.a)(y.palette.primary.main,.25)," 0 0 0 0.2rem")},border:"1px solid #094067",borderRadius:5,color:y.palette.text.primary,fontFamily:["Roboto","-apple-system","BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),marginTop:y.spacing(2),padding:7,position:"relative",transition:y.transitions.create(["border-color","box-shadow"]),height:24,width:312}})(W.a),Object(h.a)({validateBtn:{"&:hover":{backgroundColor:y.palette.primary.light},backgroundColor:y.palette.primary.main,color:y.palette.secondary.main,marginTop:y.spacing(4),width:328,height:60,textTransform:"capitalize"},validateTextContent:{fontWeight:"bold",fontStyle:"normal",lineHeight:"28px"}}));var V=function(){var e=Q(),t=Object(o.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1];return Object(E.jsx)(K,{onSubmit:function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1],o=JSON.stringify({name:a,details:n});fetch("/todo/new",{method:"POST",headers:{"content-type":"application/json"},body:o}).then((function(e){return e.redirected?(window.location.href=e.url,r("")):e.text().then((function(e){return r(e)}))})).catch((function(e){return console.error("error while post fetching todo newTodoFrom jsx file",e)}))},error:n,children:Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsx)(f.a,{className:e.validateBtn,type:"submit",variant:"outlined",children:Object(E.jsx)(u.a,{variant:"h5",className:e.validateTextContent,children:"Save"})})})})},Y=Object(h.a)({root:{}});function Z(){Y();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(V,{})})}var $=Object(h.a)({btn:{marginTop:y.spacing(4),width:153,height:60,textTransform:"capitalize",color:y.palette.secondary.main},btnTypography:{fontWeight:"bold",fontStyle:"normal",lineHeight:"28px"},deleteBtn:{"&:hover":{backgroundColor:y.palette.red.light},backgroundColor:y.palette.red.main},validateBtn:{"&:hover":{backgroundColor:y.palette.primary.light},backgroundColor:y.palette.primary.main}});var ee=function(){var e=$(),t=Object(o.useState)([]),a=Object(s.a)(t,2),n=a[0],r=a[1],c=Object(o.useState)(!0),i=Object(s.a)(c,2),l=i[0],h=i[1],j=Object(d.g)().id;return Object(o.useEffect)((function(){var e=new AbortController,t=e.signal;return fetch("/todo/".concat(j),{signal:t}).then((function(e){return e.json()})).then((function(e){return r(e),h(!1)})).catch((function(e){"AbortError"!==e.name&&console.error("Error while fetching one todo in EditTodoRow jsx file",e),h(!1)})),function(){return e.abort()}}),[j]),l?Object(E.jsx)(H,{}):Object(E.jsxs)(K,{putSpaceBetween:!0,onSubmit:function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1],o=JSON.stringify({name:a,details:n});fetch("/todo/update/".concat(j),{body:o,headers:{"content-type":"application/json"},method:"PUT"}).then((function(){window.location.href="/"})).catch((function(e){return"AbortError"!==e.name&&console.error("Error while updating todo in EditTodoRow jsx file",e)}))},data:n,children:[Object(E.jsx)(f.a,{className:"".concat(e.btn," ").concat(e.validateBtn),type:"submit",variant:"outlined",name:"update",children:Object(E.jsx)(u.a,{variant:"h5",className:e.btnTypography,children:"Save"})}),Object(E.jsx)(f.a,{className:"".concat(e.btn," ").concat(e.deleteBtn),onClick:function(){fetch("/todo/delete/".concat(j),{method:"DELETE"}).then((function(){window.location.href="/"})).catch((function(e){return"AbortError"!==e.name&&console.error("Error while deleting todo in editTodoRow jsx file",e)}))},type:"reset",children:Object(E.jsx)(u.a,{variant:"h5",className:e.btnTypography,children:"Delete"})})]})};var te=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(ee,{})})},ae=a(116),ne=a(65),oe=a.n(ne),re=Object(h.a)((function(e){return{root:{width:375,height:"23%",maxHeight:154,backgroundColor:e.palette.info.main,padding:"24px 12px 48px",position:"relative"},BackIosIcons:{cursor:"pointer"},searchBarForm:{width:350,display:"inline-block",height:40,"& > *":{maxHeight:40,height:40}},searchBarInput:{width:250,backgroundColor:"rgba(255, 255, 255, 0.22)",borderRadius:"50px 0 0 50px",padding:"0 48px 0 30px",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",color:e.palette.secondary.light,"&::before, &::after":{display:"none"}},searchBarBtn:{width:100,padding:0,backgroundColor:e.palette.secondary.main,borderRadius:"0 50px 50px 0",verticalAlign:"top",lineHeight:"unset",color:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.secondary.light}}}}));function ce(e){var t=e.isHomeLocation,a=e.onSearch,n=re(),r=Object(d.f)(),c=Object(o.useState)(""),i=Object(s.a)(c,2),l=i[0],h=i[1];return Object(E.jsxs)(j.a,{container:!0,className:n.root,children:[Object(E.jsx)(j.a,{item:!0,container:!0,justifyContent:"center",children:Object(E.jsx)(u.a,{variant:"h5",color:"secondary",children:"TodoRama"})}),t&&Object(E.jsx)(j.a,{item:!0,className:n.searchBar,children:Object(E.jsx)("form",{onSubmit:function(e){e.preventDefault(),a(l)},children:Object(E.jsxs)(M.a,{className:n.searchBarForm,children:[Object(E.jsx)(ae.a,{placeholder:"Search",value:l,onChange:function(e){return h(e.target.value)},className:n.searchBarInput}),Object(E.jsx)(f.a,{type:"submit",className:n.searchBarBtn,children:"Search"})]})})}),Object(E.jsx)(x.a,{width:"100%",height:26,position:"absolute",bottom:-1,bgcolor:"secondary.main",left:0,borderRadius:"50px 50px 0 0"}),!t&&Object(E.jsx)(x.a,{position:"absolute",top:25,left:17,children:Object(E.jsx)(oe.a,{color:"secondary",fontSize:"large",onClick:function(){return r.push("/")},className:n.BackIosIcons})})]})}ce.defaultProps={onSearch:function(){}};var ie=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(E.jsxs)(l.a,{children:[Object(E.jsxs)(d.c,{children:[Object(E.jsx)(d.a,{exact:!0,path:"/",children:Object(E.jsx)(ce,{isHomeLocation:!0,onSearch:function(e){n(e)}})}),Object(E.jsx)(d.a,{path:"/todo/client",children:Object(E.jsx)(ce,{isHomeLocation:!1})})]}),Object(E.jsxs)(d.c,{children:[Object(E.jsx)(d.a,{exact:!0,path:"/",children:Object(E.jsx)(z,{searchTerm:a})}),Object(E.jsx)(d.a,{exact:!0,path:"/todo/client/new",component:Z}),Object(E.jsx)(d.a,{path:"/todo/client/update/:id",component:te})]})]})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};i.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(n.a,{theme:y,children:Object(E.jsx)(ie,{})})}),document.getElementById("root")),se()}},[[88,1,2]]]);
//# sourceMappingURL=main.f4a42f11.chunk.js.map