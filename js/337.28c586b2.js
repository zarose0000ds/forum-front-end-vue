"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[337],{2337:function(t,s,a){a.r(s),a.d(s,{default:function(){return q}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container py-5"},[a("nav-tabs"),t.isLoading?a("loading-spinner"):[a("h1",{staticClass:"mt-5"},[t._v("最新動態")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新餐廳")]),a("newest-restaurants",{attrs:{restaurants:t.restaurants}})],1),a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新評論")]),a("newest-comments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=a(6934),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新餐廳")]),a("div",{staticClass:"card-body"},t._l(t.restaurants,(function(s){return a("div",{key:s.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:s.id}}}},[t._v(" "+t._s(s.name)+" ")]),a("small",[t._v(t._s(s.Category?s.Category.name:"未分類"))])],1),a("p",[t._v(t._s(s.description))]),t._v(" "+t._s(t._f("fromNow")(s.createdAt))+" "),a("hr")])})),0)])},c=[],o=a(8247),l={mixins:[o.q],props:{restaurants:{type:Array,required:!0}}},d=l,u=a(1001),m=(0,u.Z)(d,i,c,!1,null,"06b48763",null),_=m.exports,v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新評論")]),a("div",{staticClass:"card-body"},t._l(t.comments,(function(s){return a("div",{key:s.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:s.Restaurant.id}}}},[t._v(" "+t._s(s.Restaurant.name)+" ")])],1),a("p",[t._v(t._s(s.text))]),t._v(" by "),a("a",{attrs:{href:"#"}},[t._v(t._s(s.User.name))]),t._v(" at "+t._s(t._f("fromNow")(s.createdAt))+" "),a("hr")])})),0)])},h=[],f={mixins:[o.q],props:{comments:{type:Array,required:!0}}},p=f,C=(0,u.Z)(p,v,h,!1,null,null,null),y=C.exports,w=a(2447),g=a(1947),b=a(1926),k={name:"restaurants-home",components:{"nav-tabs":n.Z,"newest-restaurants":_,"newest-comments":y,"loading-spinner":w.Z},data(){return{restaurants:[],comments:[],isLoading:!0}},created(){this.fetchFeeds()},methods:{async fetchFeeds(){try{const t=await g.Z.getRestaurantsFeeds();this.restaurants=t.data.restaurants,this.comments=t.data.comments,this.isLoading=!1}catch(t){this.isLoading=!1,b.F.fire({icon:"error",title:"無法取得資料，請稍後再試"}),console.log(t)}}}},x=k,Z=(0,u.Z)(x,e,r,!1,null,null,null),q=Z.exports}}]);
//# sourceMappingURL=337.28c586b2.js.map