"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[146],{2595:function(e,t,r){r.d(t,{Z:function(){return g}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:e.restaurant.name},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"categoryId"}},[e._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.restaurant,"categoryId",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--請選擇--")]),e._l(e.categories,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tel"}},[e._v("Tel")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:e.restaurant.tel},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"tel",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[e._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:e.restaurant.address},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"address",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"opening-hours"}},[e._v("Opening Hours")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:e.restaurant.openingHours},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"openingHours",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[e._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:e.restaurant.description},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"description",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.restaurant.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.restaurant.image,width:"200",height:"200"}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中...":"送出")+" ")])])},n=[],s=r(6198),i=r(3019),o=(r(1539),r(8783),r(3948),r(285),r(1637),r(8309),r(5666),r(9032)),u=r(1926),c={props:{isProcessing:{type:Boolean,default:!1},initialRestaurant:{type:Object,default:function(){return{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}}},data:function(){return{restaurant:{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},categories:[],isLoading:!0}},watch:{initialRestaurant:function(e){this.restaurant=(0,i.Z)((0,i.Z)({},this.restaurant),e)}},created:function(){this.fetchCategories(),this.restaurant=(0,i.Z)((0,i.Z)({},this.restaurant),this.initialRestaurant)},methods:{fetchCategories:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.categories.get();case 3:r=t.sent,a=r.data,e.categories=a.categories,e.isLoading=!1,t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](0),e.isLoading=!1,u.F.fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"}),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()},handleFileChange:function(e){var t=e.target.files;if(0===t.length)return this.restaurant.image="";var r=window.URL.createObjectURL(t[0]);this.restaurant.image=r},handleSubmit:function(e){if(this.restaurant.name)if(this.restaurant.categoryId){var t=e.target,r=new FormData(t);this.$emit("after-submit",r)}else u.F.fire({icon:"warning",title:"請選擇餐廳類別"});else u.F.fire({icon:"warning",title:"請填寫餐廳名稱"})}}},l=c,d=r(1001),m=(0,d.Z)(l,a,n,!1,null,null,null),g=m.exports},8146:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("restaurant-form",{attrs:{"is-processing":e.isProcessing},on:{"after-submit":e.handleAfterSubmit}})],1)},n=[],s=r(6198),i=(r(5666),r(1703),r(2595)),o=r(9032),u=r(1926),c={name:"admin-restaurant-new",components:{"restaurant-form":i.Z},data:function(){return{isProcessing:!1}},methods:{handleAfterSubmit:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,o.Z.restaurants.create({formData:e});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:t.$router.push({name:"admin-restaurants"}),r.next=16;break;case 11:r.prev=11,r.t0=r["catch"](0),t.isProcessing=!0,u.F.fire({icon:"error",title:"無法建立餐廳，請稍後再試"}),console.log(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},l=c,d=r(1001),m=(0,d.Z)(l,a,n,!1,null,null,null),g=m.exports},9032:function(e,t,r){r(8309);var a=r(1926);t["Z"]={users:{get:function(){return a.l.get("/admin/users")},toggleUserRole:function(e){var t=e.userId,r=e.isAdmin;return a.l.put("admin/users/".concat(t),{isAdmin:r})}},categories:{get:function(){return a.l.get("/admin/categories")},create:function(e){var t=e.name;return a.l.post("/admin/categories",{name:t})},delete:function(e){var t=e.categoryId;return a.l["delete"]("/admin/categories/".concat(t))},update:function(e){var t=e.categoryId,r=e.name;return a.l.put("/admin/categories/".concat(t),{name:r})}},restaurants:{get:function(){return a.l.get("/admin/restaurants")},create:function(e){var t=e.formData;return a.l.post("/admin/restaurants",t)},delete:function(e){var t=e.restaurantId;return a.l["delete"]("/admin/restaurants/".concat(t))},getDetail:function(e){var t=e.restaurantId;return a.l.get("/admin/restaurants/".concat(t))},update:function(e){var t=e.restaurantId,r=e.formData;return a.l.put("/admin/restaurants/".concat(t),r)}}}}}]);
//# sourceMappingURL=146-legacy.d4b0acda.js.map