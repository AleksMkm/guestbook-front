(this["webpackJsonpguestbook-front"]=this["webpackJsonpguestbook-front"]||[]).push([[0],{36:function(e,r,t){},62:function(e,r,t){"use strict";t.r(r);var a=t(0),c=t.n(a),n=t(11),s=t.n(n),o=t(3),i=(t(36),t(1));function l(e){var r=e.children;return Object(i.jsx)("div",{className:"container",children:r})}var u=function(){return Object(i.jsx)("div",{className:"header",children:"Guestbook"})},d=function(){return Object(i.jsx)("div",{className:"footer",children:"(c) meaningful footer :)"})};var j=function(e){var r=e.title,t=e.children,a=e.flex,c=e.auxClass,n=a?"flex":"",s=c||"",o=e.fullWidth?"fullWidth":"";return Object(i.jsxs)("section",{className:"section ".concat(n," ").concat(o," ").concat(s),children:[Object(i.jsx)("p",{className:"section-title",children:r}),t]})},b=t(4),m=t(25),f=t(5),O=t(8),g=t.n(O),h=t(14),p=t(12),v=t.n(p);v.a.defaults.baseURL="https://guestbook-am.herokuapp.com/api";var x,N=Object(f.b)("records/createRecord",function(){var e=Object(h.a)(g.a.mark((function e(r,t){var a,c,n,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.name,c=r.message,n=t.rejectWithValue,e.prev=2,e.next=5,v.a.post("/records",{name:a,message:c});case 5:return s=e.sent,e.abrupt("return",s.data.data.record);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",n(e.t0.response.data.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r,t){return e.apply(this,arguments)}}()),y=Object(f.b)("records/getRecords",function(){var e=Object(h.a)(g.a.mark((function e(r,t){var a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.prev=1,e.next=4,v.a.get("/records");case 4:return c=e.sent,e.abrupt("return",c.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",a(e.t0.response.data.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r,t){return e.apply(this,arguments)}}()),k={createRecord:N,getRecords:y},w={records:[],name:"",message:"",isLoading:!1,isMessageUploading:!1,errors:{name:null,message:null}},R=k.createRecord,E=k.getRecords,M=Object(f.c)({name:"records",initialState:w,reducers:{changeName:function(e,r){var t=r.payload;e.name=t},changeMessage:function(e,r){var t=r.payload;e.message=t},setErrors:function(e,r){var t=r.payload;e.errors=t},clearNameError:function(e){e.errors.name=null},clearMessageError:function(e){e.errors.message=null},clearErrors:function(e){e.errors=w.errors}},extraReducers:(x={},Object(b.a)(x,E.fulfilled,(function(e,r){var t=r.payload;e.records=t,e.isLoading=!1})),Object(b.a)(x,E.pending,(function(e){e.errors={},e.isLoading=!0})),Object(b.a)(x,E.rejected,(function(e,r){var t=r.payload;e.errors=t,e.isLoading=!1})),Object(b.a)(x,R.fulfilled,(function(e,r){var t=r.payload;e.records=[t].concat(Object(m.a)(e.records)),e.isMessageUploading=!1,e.message=""})),Object(b.a)(x,R.pending,(function(e){e.errors={},e.isMessageUploading=!0})),Object(b.a)(x,R.rejected,(function(e,r){var t=r.payload;e.errors=t,e.isMessageUploading=!1})),x)}),_=M.reducer,L=M.actions,C=function(e){return e.records.records},U=function(e){return e.records.name},W=function(e){return e.records.message},S=function(e){return e.records.isLoading},V=function(e){return e.records.isMessageUploading},D=function(e){return e.records.errors},F=t(6),J=function(e,r){var t={},a=!0,c=!0;return e||(t=Object(F.a)(Object(F.a)({},t),{},{name:"Can't be blank"}),a=!1),e&&!/^\w+$/.test(e)&&(t=Object(F.a)(Object(F.a)({},t),{},{name:"Only latin characters, numbers and underscore are allowed"}),a=!1),r||(t=Object(F.a)(Object(F.a)({},t),{},{message:"Can't be blank"}),c=!1),{isValid:a&&c,errors:t}},K=function(){var e=Object(o.c)(U),r=Object(o.c)(W),t=Object(o.c)(V),c=Object(o.c)(D),n=Object(o.b)(),s=Object(a.useRef)(),l=function(){n(L.clearErrors());var t=J(e,r),a=t.isValid,c=t.errors;n(a?k.createRecord({name:e,message:r}):L.setErrors(c))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"section-title",children:"Leave your thoughts here"}),Object(i.jsxs)("form",{className:"new-message-form",onSubmit:function(e){e.preventDefault(),s.current.blur(),l()},onKeyPress:function(e){"Enter"===event.code&&event.ctrlKey&&(e.preventDefault(),l())},children:[Object(i.jsxs)("label",{className:"field",children:[Object(i.jsx)("input",{className:"field__name",onChange:function(e){n(L.clearNameError()),n(L.changeName(e.target.value))},value:e,type:"text",name:"name",placeholder:"Your name"}),Object(i.jsx)("div",{className:"error",children:c.name})]}),Object(i.jsxs)("label",{className:"field",children:[Object(i.jsx)("textarea",{className:"field__message",onChange:function(e){n(L.clearMessageError()),n(L.changeMessage(e.target.value))},value:r,name:"message",rows:"3",placeholder:"Please type your message"}),Object(i.jsx)("div",{className:"error",children:c.message})]}),Object(i.jsx)("button",{ref:s,className:"post-comment-btn ".concat(t?"disabled":null),type:"submit",disabled:t,children:"Send"})]})]})},P=function(e){var r=e.record;return Object(i.jsxs)("div",{className:"record",children:[Object(i.jsx)("div",{className:"record__author",children:r.name}),Object(i.jsx)("div",{className:"record__message",children:r.message})]})},z=t(24),B=t.n(z);var G=function(){return Object(i.jsx)(B.a,{size:30,margin:10,color:"black",loading:!0})},I=function(){var e=Object(o.c)(C),r=Object(o.c)(S),t=Object(o.b)();return Object(a.useEffect)((function(){t(k.getRecords())}),[]),r?Object(i.jsx)(G,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"section-title",children:"Responses"}),Object(i.jsx)("div",{className:"records-wrapper",children:e.length?e.map((function(e){return Object(i.jsx)(P,{record:e},e._id)})):Object(i.jsx)("div",{children:"No records"})})]})},Y=function(){return Object(i.jsxs)(j,{auxClass:"content-wrapper",fullWidth:!0,flex:!0,children:[Object(i.jsx)(j,{children:Object(i.jsx)(K,{})}),Object(i.jsx)(j,{fullWidth:!0,children:Object(i.jsx)(I,{})})]})};var $=function(){return Object(i.jsxs)(l,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(Y,{}),Object(i.jsx)(d,{})]})},q=Object(f.a)({reducer:{records:_}});s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(o.a,{store:q,children:Object(i.jsx)($,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.50db2e34.chunk.js.map