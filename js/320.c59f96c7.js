"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[320],{5320:function(t,a,r){r.r(a),r.d(a,{default:function(){return y}});var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container py-5"},[r("nav-tabs"),t.isLoading?r("loading-spinner"):[r("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),r("hr"),t._l(t.restaurants,(function(t){return r("restaurant-card",{key:t.id,attrs:{"initial-restaurant":t}})}))]],2)},e=[],n=r(6934),i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("a",{attrs:{href:"#"}},[r("img",{staticClass:"card-img",attrs:{src:t._f("emptyImage")(t.restaurant.image)}})])]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.restaurant.name))]),r("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(t.restaurant.FavoriteCount))]),r("p",{staticClass:"card-text"},[t._v(" "+t._s(t.restaurant.description)+" ")]),r("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant",params:{id:t.restaurant.id}}}},[t._v(" Show ")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")])],1)])])])},o=[],c=(r(1703),r(6017)),u=r(1926),l=r(8247),d={mixins:[l.L],props:{initialRestaurant:{type:Object,required:!0}},data(){return{restaurant:this.initialRestaurant}},methods:{async addFavorite(t){try{const{data:a}=await c.Z.addFavorite({restaurantId:t});if("success"!==a.status)throw new Error(a.message);this.restaurant={...this.restaurant,isFavorited:!0},this.restaurant.FavoriteCount+=1}catch(a){u.F.fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"}),console.log(a)}},async deleteFavorite(t){try{const{data:a}=await c.Z.deleteFavorite({restaurantId:t});if("success"!==a.status)throw new Error(a.message);this.restaurant={...this.restaurant,isFavorited:!1},this.restaurant.FavoriteCount-=1}catch(a){u.F.fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"}),console.log(a)}}}},h=d,v=r(1001),m=(0,v.Z)(h,i,o,!1,null,null,null),p=m.exports,f=r(2447),g=r(1947),b={name:"restaurants-home",components:{"nav-tabs":n.Z,"restaurant-card":p,"loading-spinner":f.Z},data(){return{restaurants:[],isLoading:!0}},created(){this.fetchRestaurant()},methods:{async fetchRestaurant(){try{const{data:t}=await g.Z.getTopRestaurants();this.restaurants=t.restaurants,this.isLoading=!1}catch(t){u.F.fire({icon:"error",title:"無法取得人氣餐廳，請稍後再試"}),console.log(t)}}}},C=b,_=(0,v.Z)(C,s,e,!1,null,null,null),y=_.exports}}]);
//# sourceMappingURL=320.c59f96c7.js.map