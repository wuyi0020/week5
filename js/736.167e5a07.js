"use strict";(self["webpackChunkweek5"]=self["webpackChunkweek5"]||[]).push([[736],{6736:function(a,e,t){t.r(e),t.d(e,{default:function(){return K}});var n=t(4108),s=t(9096);const i={class:"container"},c={class:"row"},r={key:0,class:"col"},l=(0,n.QD)("h1",null," 作品列表 ",-1),o=[l],p={key:1,class:"d-flex align-items-center justify-content-center"},d=(0,n.QD)("strong",null,"Loading... ",-1),g=(0,n.QD)("div",{class:"spinner-border",role:"status","aria-hidden":"true"},null,-1),u=[d,g],h={class:"row row-cols-5"},D={class:"card mt-2"},m=(0,n.QD)("div",{class:"card-header"},null,-1),k={class:"card-body"},v=["src"],Q={class:"card-footer mb-0"},f={class:"row"};function A(a,e,t,l,d,g){const A=(0,n.E1)("pagination");return(0,n.Wz)(),(0,n.An)("div",i,[(0,n.QD)("div",c,[d.products.length?((0,n.Wz)(),(0,n.An)("div",r,o)):((0,n.Wz)(),(0,n.An)("div",p,u))]),(0,n.QD)("div",h,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(d.products,(a=>((0,n.Wz)(),(0,n.An)("div",{key:a.id},[(0,n.QD)("div",D,[m,(0,n.QD)("div",k,[(0,n.QD)("img",{src:a.imageUrl,class:"card-img-top h-75 mb-1",alt:"..."},null,8,v)]),(0,n.QD)("h5",Q,(0,s.WA)(a.title),1)])])))),128))]),(0,n.QD)("div",f,[(0,n.K2)(A,{page:d.page,onGetcoinData:g.getData},null,8,["page","onGetcoinData"])])])}t(3248);var W=t(2964);const b={"aria-label":"Page navigation example"},w={class:"pagination justify-content-center"},y=(0,n.QD)("span",{"aria-hidden":"true"},"«",-1),z=[y],$=["onClick"],C=(0,n.QD)("span",{"aria-hidden":"true"},"»",-1),x=[C];function _(a,e,t,i,c,r){return(0,n.Wz)(),(0,n.An)("nav",b,[(0,n.QD)("ul",w,[(0,n.QD)("li",{class:(0,s.WN)(["page-item",{disabled:!t.page.has_pre}])},[(0,n.QD)("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=a=>r.getData(t.page.current_page-1)),"aria-label":"Previous"},z)],2),((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(t.page.total_pages,(a=>((0,n.Wz)(),(0,n.An)("div",{key:"page"+a},[(0,n.QD)("li",{class:(0,s.WN)(["page-item",{active:t.page.current_page===a}])},[(0,n.QD)("a",{class:"page-link",onClick:e=>r.getData(a),href:"#"},(0,s.WA)(a),9,$)],2)])))),128)),(0,n.QD)("li",{class:(0,s.WN)(["page-item",{disabled:!t.page.has_next}])},[(0,n.QD)("a",{class:"page-link",onClick:e[1]||(e[1]=a=>r.getData(t.page.current_page+1)),href:"#","aria-label":"Next"},x)],2)])])}var P={name:"PaginationComponent",props:["page"],methods:{getData(a){this.$emit("getcoinData",a)}}},N=t(4100);const U=(0,N.c)(P,[["render",_]]);var j=U,G={name:"AllArtWorkView",components:{pagination:j},data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020",products:[],page:{}}},methods:{checkAdmin(){const a=`${this.apiUrl}/api/user/check`;W.c.post(a).then((()=>{this.getData()})).catch((a=>{alert(a.response.data.message),this.$router.push("/login")}))},getData(a=1){const e=`${this.apiUrl}/api/${this.apiPath}/products?category=作品&page=${a}`;W.c.get(e).then((a=>{this.products=a.data.products,this.page=a.data.pagination})).catch((a=>{alert(a.response.data.message)}))}},mounted(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");W.c.defaults.headers.common.Authorization=a,this.checkAdmin()}};const E=(0,N.c)(G,[["render",A]]);var K=E}}]);
//# sourceMappingURL=736.167e5a07.js.map