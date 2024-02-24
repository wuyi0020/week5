(function(){"use strict";var e={4780:function(e,t,n){var o=n(2500),r=n(7764),a=n(8808),i=n(4108);const s={id:"app"};function c(e,t,n,o,r,a){const c=(0,i.E1)("NavComponent"),u=(0,i.E1)("router-view");return(0,i.Wz)(),(0,i.An)("div",s,[(0,i.K2)(c),(0,i.K2)(u)])}const u={class:"navbar fixed-top navbar-dark bg-dark"},l={class:"container-fluid"};function d(e,t,n,o,r,a){const s=(0,i.E1)("router-link");return(0,i.Wz)(),(0,i.An)("nav",u,[(0,i.QD)("div",l,[(0,i.K2)(s,{class:"navbar-brand me-auto",to:"/"},{default:(0,i.Ql)((()=>[(0,i.mY)("Home")])),_:1}),(0,i.K2)(s,{class:"btn btn-outline-light me-2",to:"/buycoin"},{default:(0,i.Ql)((()=>[(0,i.mY)("購買硬幣")])),_:1}),(0,i.K2)(s,{class:"btn btn-outline-light me-2",to:"/cart"},{default:(0,i.Ql)((()=>[(0,i.mY)("查看購物車 ")])),_:1}),0==e.userLoginState?((0,i.Wz)(),(0,i.Az)(s,{key:0,class:"btn btn-outline-light me-2",to:"/login"},{default:(0,i.Ql)((()=>[(0,i.mY)("登入")])),_:1})):((0,i.Wz)(),(0,i.An)("div",{key:1,class:"btn btn-outline-light me-2",onClick:t[0]||(t[0]=t=>e.logOut()),to:"/login"},"登出"))])])}n(3248);var p=n(2964),h=(0,a.O6)("loginStore",{state:()=>({LoginState:!0,apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020"}),getters:{userLoginState({LoginState:e}){return e},getuserLoginState(){return this.LoginState}},actions:{setUserLoginState(e){this.LoginState=e},checkAdmin(){const e=`${this.apiUrl}/api/user/check`;p.c.post(e).then((()=>{this.setUserLoginState(!0)})).catch((()=>{this.setUserLoginState(!1)}))},logOut(){document.cookie="hexToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",this.setUserLoginState(!1),this.checkAdmin()},login(e){const t="https://vue3-course-api.hexschool.io/v2/admin/signin";p.c.post(t,e).then((e=>{const t=e.data.expired,n=e.data.token;document.cookie=`hexToken=${n};expires=${new Date(t)}; path=/`,this.LoginState=!0,this.$router.push("/")})).catch((e=>{alert(e.response.data.message)}))}}}),m={data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020"}},methods:{...(0,a.ae)(h,["setUserLoginState","checkAdmin","logOut"])},computed:{...(0,a.ys)(h,["userLoginState","getuserLoginState"])}},f=n(4100);const g=(0,f.c)(m,[["render",d]]);var v=g,b={data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020"}},components:{NavComponent:v}};const y=(0,f.c)(b,[["render",c]]);var w=y,D=n(7464);const Q={class:"container mt-5"},k={class:"row justify-content-center"},A={class:"col-md-6"},S={class:"card"},x=(0,i.QD)("div",{class:"card-header"},[(0,i.QD)("h3",{class:"text-center"},"登入")],-1),W={class:"card-body"},L={class:"mb-3"},C=(0,i.QD)("label",{for:"username",class:"form-label"},"使用者名稱：",-1),O={class:"mb-3"},U=(0,i.QD)("label",{for:"password",class:"form-label"},"密碼：",-1),z=(0,i.QD)("div",{class:"text-center"},[(0,i.QD)("button",{type:"submit",class:"btn btn-primary"},"登入")],-1);function E(e,t,n,o,a,s){return(0,i.Wz)(),(0,i.An)("div",Q,[(0,i.QD)("div",k,[(0,i.QD)("div",A,[(0,i.QD)("div",S,[x,(0,i.QD)("div",W,[(0,i.QD)("form",{onSubmit:t[2]||(t[2]=(0,r.Y7)((t=>e.login(a.user)),["prevent"]))},[(0,i.QD)("div",L,[C,(0,i.wt)((0,i.QD)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>a.user.username=e),id:"username",name:"username",required:""},null,512),[[r.Og,a.user.username]])]),(0,i.QD)("div",O,[U,(0,i.wt)((0,i.QD)("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.user.password=e),autocomplete:"current-password"},null,512),[[r.Og,a.user.password]])]),z],32)])])])])])}var P={name:"LoginView",components:{},data(){return{user:{username:"",password:""}}},methods:{...(0,a.ae)(h,["login"])}};const I=(0,f.c)(P,[["render",E]]);var _=I,T=n(9096);const j={class:"container"},$={class:"row py-3"},N={class:"col-md-6"},Y=(0,i.QD)("h2",null,"產品列表",-1),V={class:"table table-hover mt-4"},K=(0,i.QD)("thead",null,[(0,i.QD)("tr",null,[(0,i.QD)("th",{width:"150"},"產品名稱"),(0,i.QD)("th",{width:"120"},"原價"),(0,i.QD)("th",{width:"120"},"售價"),(0,i.QD)("th",{width:"150"},"是否啟用"),(0,i.QD)("th",{width:"120"},"查看細節")])],-1),B={width:"150"},F={width:"120"},M={width:"120"},q={width:"150"},H={key:0,class:"text-success"},J={key:1},G={width:"120"},R=["onClick"],X={class:"col-md-6"},Z=(0,i.QD)("h2",null,"單一產品細節",-1),ee={class:"card mb-3"},te=["src"],ne={class:"card-body"},oe={class:"card-title"},re={class:"badge bg-primary ms-2"},ae={class:"card-text"},ie={class:"card-text"},se={class:"d-flex"},ce={class:"card-text me-2"},ue={class:"card-text text-secondary"},le={key:0},de=["src"],pe={key:1,class:"text-secondary"};function he(e,t,n,o,r,a){return(0,i.Wz)(),(0,i.An)("div",j,[(0,i.QD)("div",$,[(0,i.QD)("div",N,[Y,(0,i.QD)("table",V,[K,(0,i.QD)("tbody",null,[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(r.products,(e=>((0,i.Wz)(),(0,i.An)("tr",{key:e.id},[(0,i.QD)("td",B,(0,T.WA)(e.title),1),(0,i.QD)("td",F,(0,T.WA)(e.origin_price),1),(0,i.QD)("td",M,(0,T.WA)(e.price),1),(0,i.QD)("td",q,[e.is_enabled?((0,i.Wz)(),(0,i.An)("span",H,"啟用")):(0,i.g1)("",!0),e.is_enabled?(0,i.g1)("",!0):((0,i.Wz)(),(0,i.An)("span",J,"未啟用"))]),(0,i.QD)("td",G,[(0,i.QD)("button",{type:"button",class:"btn btn-primary",onClick:t=>r.SingleInfo=e},"查看細節",8,R)])])))),128))])]),(0,i.QD)("p",null,[(0,i.mY)(" 目前有 "),(0,i.QD)("span",null,(0,T.WA)(r.products.length),1),(0,i.mY)(" 項產品 ")])]),(0,i.QD)("div",X,[Z,r.SingleInfo.title?((0,i.Wz)(),(0,i.An)(i.ae,{key:0},[(0,i.QD)("div",ee,[(0,i.QD)("img",{src:r.SingleInfo.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,te),(0,i.QD)("div",ne,[(0,i.QD)("h5",oe,[(0,i.mY)((0,T.WA)(r.SingleInfo.title)+" ",1),(0,i.QD)("span",re,(0,T.WA)(r.SingleInfo.category),1)]),(0,i.QD)("p",ae,"商品描述："+(0,T.WA)(r.SingleInfo.description),1),(0,i.QD)("p",ie,"商品內容："+(0,T.WA)(r.SingleInfo.content),1),(0,i.QD)("div",se,[(0,i.QD)("p",ce,(0,T.WA)(r.SingleInfo.price),1),(0,i.QD)("p",ue,[(0,i.QD)("del",null,(0,T.WA)(r.SingleInfo.origin_price),1)]),(0,i.mY)(" 元 / "+(0,T.WA)(r.SingleInfo.unit),1)])])]),r.SingleInfo.imagesUrl?((0,i.Wz)(),(0,i.An)("div",le,[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(r.SingleInfo.imagesUrl,((e,t)=>((0,i.Wz)(),(0,i.An)("img",{key:t,src:e,alt:"",class:"images m-2"},null,8,de)))),128))])):(0,i.g1)("",!0)],64)):(0,i.g1)("",!0),r.SingleInfo.title?(0,i.g1)("",!0):((0,i.Wz)(),(0,i.An)("p",pe,"請選擇一個商品查看"))])])])}var me={name:"ProductView",components:{},data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020",products:[],SingleInfo:{}}},methods:{checkAdmin(){const e=`${this.apiUrl}/api/user/check`;p.c.post(e).then((()=>{this.getData()})).catch((e=>{alert(e.response.data.message),this.$router.push("/login")}))},getData(){const e=`${this.apiUrl}/api/${this.apiPath}/admin/products`;p.c.get(e).then((e=>{this.products=e.data.products})).catch((e=>{alert(e.response.data.message)}))},openProduct(e){this.tempProduct=e}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");p.c.defaults.headers.common.Authorization=e,this.checkAdmin()}};const fe=(0,f.c)(me,[["render",he]]);var ge=fe;const ve=[{path:"/",name:"home",component:()=>n.e(328).then(n.bind(n,9328))},{path:"/login",name:"login",component:_},{path:"/product",name:"product",component:ge},{path:"/editcoin",name:"editcoin",component:()=>n.e(236).then(n.bind(n,3236))},{path:"/author",name:"AuthorView",component:()=>n.e(448).then(n.bind(n,7068))},{path:"/artwork/:id",name:"ArtWorkView",component:()=>n.e(536).then(n.bind(n,7536))},{path:"/buycoin",name:"BuyCoinView",component:()=>n.e(334).then(n.bind(n,6334))},{path:"/cart",name:"CartView",component:()=>n.e(890).then(n.bind(n,9890))}],be=(0,D.gv)({history:(0,D.Ow)(),routes:ve});var ye=be,we=n(4944);const De=(0,a.Kw)();De.use((({store:e})=>{e.$router=(0,o.Md)(ye)})),(0,r.W0)(w).use(ye).use(we.LoadingPlugin).use(De).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{236:"207da678",328:"8ebaeec9",334:"aab5c210",448:"7ab2440a",536:"5bff5d6e",890:"e1044d56"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".97277291.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="week5:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/week5/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&n.type,s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,null,r,a)}))},r={524:0};n.f.miniCss=function(e,t){var n={890:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkweek5"]=self["webpackChunkweek5"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[999],(function(){return n(4780)}));o=n.O(o)})();
//# sourceMappingURL=app.35f5beed.js.map