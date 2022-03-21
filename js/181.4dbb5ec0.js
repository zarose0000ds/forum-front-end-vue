"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[181],{2617:function(t,e,r){r.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h1",[t._v("餐廳後台")]),r("router-link",{attrs:{to:{name:"admin-restaurants"}}},[t._v("Restaurants")]),t._v(" | "),r("router-link",{attrs:{to:{name:"admin-categories"}}},[t._v("Categories")]),t._v(" | "),r("router-link",{attrs:{to:{name:"admin-users"}}},[t._v("Users")])],1)},n=[],a=r(1001),i={},o=(0,a.Z)(i,s,n,!1,null,null,null),u=o.exports},7719:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("admin-nav"),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),r("td",{staticStyle:{width:"60%"}},[t._v(t._s(e.email))]),r("td",{staticStyle:{width:"20%"}},[e.isAdmin?[t._v("admin")]:[t._v("user")]],2),r("td",[e.isAdmin?r("button",{staticClass:"btn btn-link",attrs:{type:"button",disabled:1===e.id},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.toggleIsAdmin(e.id,e.isAdmin)}}},[t._v(" set as user ")]):r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.toggleIsAdmin(e.id,e.isAdmin)}}},[t._v(" set as admin ")])])])})),0)])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("Email")]),r("th",{attrs:{scope:"col"}},[t._v("Role")]),r("th",{attrs:{scope:"col",width:"140"}},[t._v("Action")])])])}],a=(r(1703),r(2617)),i=r(9032),o=r(1926),u=r(629),l={name:"admin-users",components:{"admin-nav":a.Z},data(){return{users:[]}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const{data:t,statusText:e}=await i.Z.users.get();if("OK"!==e)throw new Error(e);this.users=t.users}catch(t){o.F.fire({icon:"error",title:"無法取得用戶列表，請稍後再試"}),console.log(t)}},async toggleIsAdmin(t,e){try{const r=!e,{data:s}=await i.Z.users.toggleUserRole({userId:t,isAdmin:r.toString()});if("success"!==s.status)throw new Error(s.message);this.users=this.users.map((e=>e.id===t?{...e,isAdmin:!e.isAdmin}:e))}catch(r){o.F.fire({icon:"error",title:"無法更新用戶權限，請稍後再試"}),console.log(r)}}},computed:{...(0,u.rn)(["currentUser"])}},d=l,c=r(1001),m=(0,c.Z)(d,s,n,!1,null,null,null),g=m.exports},9032:function(t,e,r){var s=r(1926);e["Z"]={users:{get(){return s.l.get("/admin/users")},toggleUserRole({userId:t,isAdmin:e}){return s.l.put(`admin/users/${t}`,{isAdmin:e})}},categories:{get(){return s.l.get("/admin/categories")},create({name:t}){return s.l.post("/admin/categories",{name:t})},delete({categoryId:t}){return s.l["delete"](`/admin/categories/${t}`)},update({categoryId:t,name:e}){return s.l.put(`/admin/categories/${t}`,{name:e})}},restaurants:{get(){return s.l.get("/admin/restaurants")},create({formData:t}){return s.l.post("/admin/restaurants",t)},delete({restaurantId:t}){return s.l["delete"](`/admin/restaurants/${t}`)},getDetail({restaurantId:t}){return s.l.get(`/admin/restaurants/${t}`)},update({restaurantId:t,formData:e}){return s.l.put(`/admin/restaurants/${t}`,e)}}}}}]);
//# sourceMappingURL=181.4dbb5ec0.js.map