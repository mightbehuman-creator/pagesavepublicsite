(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{103:function(e,t,n){e.exports={container:"SubmissionBar_container__20zvx",inputbar:"SubmissionBar_inputbar__eWceA"}},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=(n(76),n(27)),s=n(19),u=n(154),l=(n(82),n(23)),d=n(13),b=n(149),j=n(151),f=n(24),m=n.n(f),g=n(31),h=n(20),p=n(46),v=n.n(p),x="https://pagesave.herokuapp.com";function O(){var e="";return e=x+"/pagesave",new Promise((function(t,n){v.a.get(e,{}).then((function(e){console.log(e),t(e)})).catch((function(e){console.log(e),n(e)}))}))}var w=Object(h.b)("archive/fetchArchives",Object(g.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),y=Object(h.c)({name:"archive",initialState:{archives:[],status:"idle"},reducers:{},extraReducers:function(e){e.addCase(w.pending,(function(e){e.status="loading"})).addCase(w.fulfilled,(function(e,t){e.status="idle",e.archives=t.payload}))}}),k=function(e){return e.archive.archives},N=function(e){return e.archive.status},C=y.reducer,T=n(146),S=n(152),B=n(157),A=n(4),_=Object(T.a)((function(e){return{centering:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:e.spacing(4)},archivecontainer:{marginTop:e.spacing(8)},firstArchive:{marginTop:e.spacing(4)},gridcontainer:{backgroundColor:e.palette.background.paper,display:"grid",gridTemplateColumns:"2fr 3fr 4fr",maxWidth:"100%",marginTop:e.spacing(3)},imgofpage:{width:"max-content",overflowY:"hidden",height:"100%",maxHeight:"100%",maxWidth:"100%",verticalAlign:"top",objectFit:"cover",objectPosition:"0% 0%"},archiveTitle:{fontFamily:"'Train One', cursive"},paper:{height:"100%"},fillheight:{height:"200px"}}}));function R(e){console.log(e);var t=_();return Object(A.jsxs)("div",{className:0==e.idx?t.firstArchive:t.archivecontainer,children:[Object(A.jsx)(b.a,{variant:"h5",gutterBottom:!0,children:e.title}),Object(A.jsxs)("div",{className:t.gridcontainer,children:[Object(A.jsx)(j.a,{className:t.fillheight,children:Object(A.jsx)(S.a,{elevation:3,className:t.paper,children:Object(A.jsx)("a",{href:e.img0,target:"_blank",children:Object(A.jsx)("img",{className:t.imgofpage,src:e.img0})})})}),Object(A.jsx)(j.a,{className:t.fillheight,children:Object(A.jsx)(S.a,{elevation:3,className:t.paper,children:Object(A.jsx)("a",{href:e.img1,target:"_blank",children:Object(A.jsx)("img",{className:t.imgofpage,src:e.img1})})})}),Object(A.jsx)(j.a,{className:t.fillheight,children:Object(A.jsx)(S.a,{elevation:3,className:t.paper,children:Object(A.jsx)("a",{href:e.img2,target:"_blank",children:Object(A.jsx)("img",{className:t.imgofpage,src:e.img2})})})})]})]})}function W(){var e=Object(s.b)(),t=Object(s.c)(k),n=Object(s.c)(N);console.log("reverse");var r=Object(d.a)(t).reverse(),c=Object(a.useState)(1),i=Object(l.a)(c,2),u=i[0],f=i[1],m=_();return Object(a.useEffect)((function(){console.log("running archive mounting stuff"),e(w())}),[]),"loading"!==n&&Object(A.jsxs)(j.a,{maxWidth:"md",children:[Object(A.jsx)(b.a,{variant:"h3",className:m.archiveTitle,gutterBottom:!0,children:"ARCHIVES"}),r.filter((function(e,t){return t>=5*(u-1)&&t<5*u})).map((function(e,t){return Object(A.jsx)(R,Object(o.a)({idx:t},e),e.id)})),Object(A.jsx)("div",{className:m.centering,children:Object(A.jsx)(B.a,{page:u,onChange:function(e,t){console.log(t),f(t)},count:Math.ceil(r.length/5),color:"secondary"})})]})}var I=n(8),P=n(153),D=n(64),E=n.n(D),F=n(155);n(103);function H(e){var t="";return t=x+"/pagesave",new Promise((function(n,a){v.a.post(t,{url:e}).then((function(e){console.log(e),n(e)})).catch((function(e){console.log(e),a(e)}))}))}var M=Object(h.b)("submissionbar/submitURL",function(){var e=Object(g.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to submit async ".concat(t)),e.next=3,H(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=function(e){return e.submissionbar.snackbarOpen},z=Object(h.c)({name:"submissionbar",initialState:{status:"idle",snackbarOpen:!1},reducers:{closeSB:function(e){e.snackbarOpen=!1}},extraReducers:function(e){e.addCase(M.pending,(function(e){e.status="submitting"})).addCase(M.fulfilled,(function(e,t){e.status="idle",e.snackbarOpen=!0}))}}),J=z.actions.closeSB,U=z.reducer,V=Object(T.a)((function(e){return{container:{marginTop:e.spacing(8)},savebutton:Object(I.a)({minWidth:"150px",alignSelf:"flex-end",height:"56px"},e.breakpoints.up("md"),{flexDirection:"row",minwidth:"0px",marginLeft:"32px"}),input:{width:"80%"},root:Object(I.a)({margin:"auto",display:"flex",justifyContent:"center",alignItems:"center","& > *":{margin:e.spacing(2)},flexDirection:"column"},e.breakpoints.up("sm"),{flexDirection:"row",maxWidth:"500px"})}}));function Y(){var e=Object(s.b)(),t=r.a.createRef(),n=V();return Object(A.jsx)("div",{className:n.container,children:Object(A.jsxs)("form",{className:n.root,noValidate:!0,autoComplete:"off",children:[Object(A.jsx)(F.a,{inputRef:t,className:n.input,label:"Enter url of page to save"}),Object(A.jsx)(P.a,{className:n.savebutton,startIcon:Object(A.jsx)(E.a,{}),variant:"contained",color:"primary",onClick:function(){var n=t.current.value;console.log(n),e(M(n)),t.current.value=""},children:"Save"})]})})}var $=Object(T.a)({title:{fontFamily:"'Train One', cursive"},heroBackground:Object(I.a)({width:"100%",margin:0,textAlign:"center",height:"500px",paddingTop:"120px",boxSizing:"border-box"},"height","100vh")});function q(){var e=$();return Object(A.jsxs)("div",{className:e.heroBackground,children:[Object(A.jsx)(b.a,{className:e.title,variant:"h2",gutterBottom:!0,children:"Page Saver"}),Object(A.jsx)("div",{}),Object(A.jsx)(Y,{})]})}var G=Object(T.a)((function(e){return{footercontainer:{minHeight:"100px",display:"flex",justifyContent:"center",alignItems:"center",background:e.palette.primary.dark,borderTop:"1px solid black"},footertext:{margin:"auto",textAlign:"center",color:e.palette.primary.contrastText},footerMarginTop:{marginTop:e.spacing(4)}}})),K=function(){var e=G();return Object(A.jsx)("footer",{className:e.footerMarginTop,children:Object(A.jsx)("div",{className:e.footercontainer,children:Object(A.jsx)(b.a,{className:e.footertext,variant:"subtitle",children:"mightbehuman@protonmail.com"})})})},Q=n(159),X=n(156);function Z(e){return Object(A.jsx)(X.a,Object(o.a)({elevation:6,variant:"filled"},e))}var ee=function(){var e=Object(s.c)(L),t=Object(s.b)(),n=function(e,n){"clickaway"!==n&&(console.log("trying to close"),t(J()))};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(u.a,{}),Object(A.jsx)(q,{}),Object(A.jsx)(W,{}),Object(A.jsx)(Q.a,{open:e,autoHideDuration:1200,onClose:n,children:Object(A.jsx)(Z,{onClose:n,severity:"success",children:"URL saved!"})}),Object(A.jsx)(K,{})]})};function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var ne=Object(h.b)("counter/fetchCount",function(){var e=Object(g.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ae=Object(h.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(ne.pending,(function(e){e.status="loading"})).addCase(ne.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),re=ae.actions,ce=(re.increment,re.decrement,re.incrementByAmount,ae.reducer),ie=Object(h.a)({reducer:{counter:ce,submissionbar:U,archive:C}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(s.a,{store:ie,children:Object(A.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,n){},82:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.8bb51494.chunk.js.map