(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(21),s=n.n(a),i=(n(28),n(2)),l=(n(29),n(3)),r=n(4),d=n(0),j=function(){var e=Object(l.f)(),t=Object(c.useContext)(S),n=t.state,o=t.dispatch;return Object(d.jsx)("nav",{children:Object(d.jsxs)("div",{className:"nav-wrapper",children:[Object(d.jsx)(r.b,{to:n?"/":"/login",className:"brand-logo left b",children:"Social Network"}),Object(d.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:n?[Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/profile",children:"Profile"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/createpost",children:"CreatePost"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/subpost",children:"My Follwing Posts"})}),Object(d.jsx)("button",{onClick:function(){localStorage.clear(),o({type:"CLEAR"}),e.push("/login")},className:"btn waves-effect waves-light #e57373 blue lighten-2",type:"submit",name:"action",children:"LogOut"})]})]:[Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/login",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/signup",children:"Signup"})})]})]})]})})},u=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useContext)(S),s=a.state;a.dispatch;Object(c.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}))}));return Object(d.jsx)("div",{children:n.map((function(e){return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"card home-card",children:[Object(d.jsxs)("h5",{children:[Object(d.jsx)(r.b,{to:"/profile/".concat(e.postedby._id),children:e.postedby.name}),Object(d.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){var t;t=e._id,fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e.id}));o(t)}))},children:"delete"})]}),Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:e.photo,alt:"nothing"})}),Object(d.jsxs)("div",{className:"card-content",children:[e.likes.includes(s._id)?Object(d.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(d.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(d.jsxs)("h6",{children:[e.likes.length," Likes"]}),Object(d.jsx)("h6",{children:e.title}),Object(d.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(d.jsxs)("h6",{children:[Object(d.jsx)("span",{style:{fontWeight:"600"},children:e.postedby.name}),e.text]})})),Object(d.jsx)("form",{onSubmit:function(t){var c,a;t.preventDefault(),c=t.target[0].value,a=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({text:c,name:localStorage.getItem("user").name,postId:a})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:Object(d.jsx)("input",{type:"text",placeholder:"Add a Comment"})})]})]},e._id)})}))})},h=function(){var e=Object(c.useContext)(S),t=e.state,n=(e.dispatch,Object(c.useState)([])),o=Object(i.a)(n,2),a=o[0],s=o[1];return Object(c.useEffect)((function(){fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e.mypost)}))}),[]),Object(d.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:t?t.pic:"loading",alt:"Profie"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:t?t.name:"loading"}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",width:"108%"},children:[Object(d.jsxs)("h6",{children:[a.length," Posts"]}),Object(d.jsxs)("h6",{children:[t?t.followers:"0"," Followers"]}),Object(d.jsxs)("h6",{children:[t?t.following:"0"," Following"]})]})]})]}),Object(d.jsx)("div",{className:"gallery",children:a.map((function(e){return Object(d.jsx)("img",{className:"item",src:e.photo,alt:"nothing"},e._id)}))})]})},p=n(7),b=n.n(p),f=function(){var e=Object(c.useContext)(S),t=(e.state,e.dispatch),n=Object(l.f)(),o=Object(c.useState)(""),a=Object(i.a)(o,2),s=a[0],j=a[1],u=Object(c.useState)(""),h=Object(i.a)(u,2),p=h[0],f=h[1];return Object(d.jsx)("div",{className:"mycard",children:Object(d.jsx)("div",{className:"card auth-card",children:Object(d.jsxs)("div",{className:"card-content white-text",children:[Object(d.jsx)("h3",{children:"The Social Network"}),Object(d.jsx)("input",{type:"text",placeholder:"email",value:p,onChange:function(e){f(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"Password",value:s,onChange:function(e){j(e.target.value)}}),Object(d.jsxs)("button",{onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p,password:s})}).then((function(e){return e.json()})).then((function(e){e.error?(console.log(e.error),b.a.toast({html:e.error,classes:"#e53935 red darken-3"})):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),b.a.toast({html:"Sigin Successfully",classes:"#6a1b9a purple darken-3"}),n.push("/"))})).catch((function(e){console.log(e)})):b.a.toast({html:"Invalid Email Id",classes:"#e53935 red darken-3"})},className:"btn waves-effect waves-light #e57373 red lighten-2",type:"submit",name:"action",children:["Login",Object(d.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(d.jsx)("h6",{children:Object(d.jsx)(r.b,{to:"/signup",children:"Don't Have an Account ? SignUp"})})]})})})},O=function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),o=n[0],a=n[1],s=Object(c.useState)(""),j=Object(i.a)(s,2),u=j[0],h=j[1],p=Object(c.useState)(""),f=Object(i.a)(p,2),O=f[0],m=f[1],g=Object(c.useState)(""),x=Object(i.a)(g,2),y=x[0],v=x[1],w=Object(c.useState)(""),S=Object(i.a)(w,2),N=S[0],C=S[1];Object(c.useEffect)((function(){y&&k()}),[y]);var k=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(O)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,email:O,password:u,pic:y})}).then((function(e){return e.json()})).then((function(t){t.error?b.a.toast({html:t.error,classes:"#e53935 red darken-3"}):(b.a.toast({html:t.message,classes:"#6a1b9a purple darken-3"}),e.push("/login"))})).catch((function(e){console.log(e)})):b.a.toast({html:"Invalid Email Id",classes:"#e53935 red darken-3"})},_=function(){var e=new FormData;e.append("file",N),e.append("upload_preset","socialnetwork"),e.append("cloud_name","dxopkgosy"),fetch("https://api.cloudinary.com/v1_1/dxopkgosy/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){v(e.url)})).catch((function(e){console.log(e)}))};return Object(d.jsx)("div",{className:"mycard",children:Object(d.jsx)("div",{className:"card auth-card",children:Object(d.jsxs)("div",{className:"card-content white-text",children:[Object(d.jsx)("h3",{children:"The Social Network"}),Object(d.jsx)("input",{type:"text",placeholder:"name",value:o,onChange:function(e){a(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"email",value:O,onChange:function(e){m(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){h(e.target.value)}}),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn waves-effect waves-light #e57373 red lighten-2",children:[Object(d.jsx)("span",{children:"Upload Image"}),Object(d.jsx)("input",{type:"file",onChange:function(e){C(e.target.files[0])}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(d.jsxs)("button",{onClick:function(){N?_():k()},className:"btn waves-effect waves-light #e57373 red lighten-2",type:"submit",name:"action",children:["SignUp",Object(d.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(d.jsx)("h6",{children:Object(d.jsx)(r.b,{to:"/login",children:"Already Have an Account?"})})]})})})},m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],j=s[1],u=Object(c.useState)(""),h=Object(i.a)(u,2),p=h[0],f=h[1],O=Object(c.useState)(""),m=Object(i.a)(O,2),g=m[0],x=m[1],y=Object(l.f)();Object(c.useEffect)((function(){g&&fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:n,body:r,pic:g})}).then((function(e){return e.json()})).then((function(e){e.error?(console.log(e.error),b.a.toast({html:e.error,classes:"#e53935 red darken-3"})):(b.a.toast({html:"Created Post Successfully",classes:"#6a1b9a purple darken-3"}),y.push("/"))})).catch((function(e){console.log(e)}))}),[g]);return Object(d.jsxs)("div",{className:"card input-filed",style:{margin:"10px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(d.jsx)("input",{type:"text",placeholder:"Title",value:n,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Description",value:r,onChange:function(e){j(e.target.value)}}),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn waves-effect waves-light #e57373 red lighten-2",children:[Object(d.jsx)("span",{children:"Upload Image"}),Object(d.jsx)("input",{type:"file",onChange:function(e){f(e.target.files[0])}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(d.jsx)("button",{onClick:function(){!function(){var e=new FormData;e.append("file",p),e.append("upload_preset","socialnetwork"),e.append("cloud_name","dxopkgosy"),fetch("https://api.cloudinary.com/v1_1/dxopkgosy/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){x(e.url)})).catch((function(e){console.log(e)})),fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:n,body:r,pic:g})}).then((function(e){return e.json()})).then((function(e){e.error?(console.log(e.error),b.a.toast({html:e.error,classes:"#e53935 red darken-3"})):(b.a.toast({html:"Created Post Successfully",classes:"#6a1b9a purple darken-3"}),y.push("/"))})).catch((function(e){console.log(e)}))}()},className:"btn waves-effect waves-light #e57373 red lighten-2",children:"Upload Post"})]})},g=n(10),x=function(e,t){return"USER"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"===t.type?Object(g.a)(Object(g.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):e},y=n(23),v=function(){var e=Object(c.useContext)(S),t=e.state,n=e.dispatch,o=Object(c.useState)(" "),a=Object(i.a)(o,2),s=a[0],r=a[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),h=u[0],p=u[1],b=Object(c.useState)(""),f=Object(i.a)(b,2),O=f[0],m=f[1],x=Object(c.useState)(""),v=Object(i.a)(x,2),w=v[0],N=v[1],C=Object(c.useState)([]),k=Object(i.a)(C,2),_=k[0],I=k[1],A=Object(l.g)().userid,z=Object(c.useState)(!t||!t.following.includes(A)),B=Object(i.a)(z,2),T=B[0],E=B[1],J=Object(c.useState)(""),P=Object(i.a)(J,2),F=P[0],U=P[1];console.log(A),Object(c.useEffect)((function(){fetch("/user/".concat(A),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){N(e.user.name),m(e.user.email),p(e.posts.length),I(e.posts),U(e.user.pic),r(e)}))}),[]);return Object(d.jsx)(d.Fragment,{children:_?Object(d.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:F,alt:"Profie"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:w}),Object(d.jsx)("h5",{children:O}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",width:"108%"},children:[Object(d.jsxs)("h6",{children:[h," Posts"]}),Object(d.jsxs)("h6",{children:[void 0===s.user?"loading...":void 0===s.user.followers?"loading":s.user.followers.length," Followers"]}),Object(d.jsxs)("h6",{children:[void 0===s.user?"loading...":void 0===s.user.following?"loading":s.user.following.length," Following"]})]}),T?Object(d.jsx)("button",{onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:A})}).then((function(e){return e.json()})).then((function(e){n({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),r((function(t){return{user:Object(g.a)(Object(g.a)({},t.user),{},{followers:[].concat(Object(y.a)(t.user.followers),[e._id])})}})),E(!1)}))},className:"btn waves-effect waves-light #e57373 blue lighten-2",type:"submit",name:"action",children:"Follow"}):Object(d.jsx)("button",{onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:A})}).then((function(e){return e.json()})).then((function(e){n({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),r((function(t){var n=t.user.followers.filter((function(t){return t!==e._id}));return{user:Object(g.a)(Object(g.a)({},t),{},{users:Object(g.a)(Object(g.a)({},t.user),{},{followers:n})})}})),E(!0),window.location.reload()}))},className:"btn waves-effect waves-light #e57373 red lighten-2",type:"submit",name:"action",children:"UnFollow"})]})]}),Object(d.jsx)("div",{className:"gallery",children:_.map((function(e){return Object(d.jsx)("img",{className:"item",src:e.photo,alt:"nothing"},e._id)}))})]}):"Loading .."})},w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useContext)(S),s=a.state;a.dispatch;Object(c.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}))}));return Object(d.jsx)("div",{children:n.map((function(e){return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"card home-card",children:[Object(d.jsxs)("h5",{children:[Object(d.jsx)(r.b,{to:"/profile/".concat(e.postedby._id),children:e.postedby.name}),Object(d.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){var t;t=e._id,fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e.id}));o(t)}))},children:"delete"})]}),Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:e.photo,alt:"nothing"})}),Object(d.jsxs)("div",{className:"card-content",children:[e.likes.includes(s._id)?Object(d.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(d.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(d.jsxs)("h6",{children:[e.likes.length," Likes"]}),Object(d.jsx)("h6",{children:e.title}),Object(d.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(d.jsxs)("h6",{children:[Object(d.jsx)("span",{style:{fontWeight:"600"},children:e.postedby.name}),e.text]})})),Object(d.jsx)("form",{onSubmit:function(t){var c,a;t.preventDefault(),c=t.target[0].value,a=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({text:c,name:localStorage.getItem("user").name,postId:a})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:Object(d.jsx)("input",{type:"text",placeholder:"Add a Comment"})})]})]},e._id)})}))})},S=Object(c.createContext)(),N=function(){var e=Object(l.f)(),t=Object(c.useContext)(S),n=(t.state,t.dispatch);return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.push("/login")}),[]),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(d.jsx)(l.a,{path:"/login",component:f}),Object(d.jsx)(l.a,{path:"/signup",component:O}),Object(d.jsx)(l.a,{exact:!0,path:"/profile",component:h}),Object(d.jsx)(l.a,{path:"/createpost",component:m}),Object(d.jsx)(l.a,{path:"/subpost",component:w}),Object(d.jsx)(l.a,{path:"/profile/:userid",component:v})]})};var C=function(){var e=Object(c.useReducer)(x,null),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(d.jsx)(S.Provider,{value:{state:n,dispatch:o},children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(N,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),k()}},[[35,1,2]]]);
//# sourceMappingURL=main.931f7fdc.chunk.js.map