(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e356368"],{"0d11":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("032a"),s=a("ddd3");const r=i["a"].getInstance();class n{constructor(t){this.loading=!1,this.error=!1,this.isEdit=!1,this.title=t.title,this.table=t.table,this.form=t.form,this.id=t.id,this.isEdit&&this.find(),t.callBack&&(this.callBack=t.callBack),this.editForm="undefined"!=typeof t.editForm?t.editForm:t.form}find(){return new Promise((t,e)=>{this.editForm.loading=!0,this.loading=!0;let a=`${this.table}/${this.id}`;r.get(a).then(e=>{this.editForm.state=e,this.editForm.loading=!1,this._reset(),s["a"].$emit("changeStateAppForm",e),t(e)}).catch(t=>{this.loading=!1,this.error=!0,e(t)})})}async setId(t){this.id!=t&&(this.id=t,this.isEdit=!0,await this.find())}submit(){let t=this.table+"/editadd",e="post";this.isEdit&&(t+="/"+this.id,e="put");const a=this.isEdit?this.editForm.state:this.form.state;return new Promise((i,n)=>{r[e](t,a).then(t=>{s["a"].$emit("resetAppForm");this.isEdit;return this._reset(),this.resetEdit(),i(t)}).catch(t=>n(t))})}_reset(){this.loading=!1,this.error=!1}resetEdit(){this.isEdit=!1,this.id=void 0}}},"4ec5":function(t,e,a){"use strict";a.r(e);var i=a("a523"),s=function(){var t=this,e=t._self._c;return e(i["a"],[e("edit-add",{attrs:{d:t.d}})],1)},r=[],n=a("370f"),d=a("7173"),o=a("2b0e"),c=a("b955"),l=a("26d8");const u={name:"name",generateInputHtml:()=>o["a"].extend(c["a"]),rules:[t=>Object(l["b"])(t)],label:"name",cols:6,type:"text",value:""},h={name:"startTable",generateInputHtml:()=>o["a"].extend(c["a"]),rules:[t=>Object(l["b"])(t),t=>Object(l["a"])(t)],label:"start table",cols:6,type:"number",value:""},m={name:"tableCount",generateInputHtml:()=>o["a"].extend(c["a"]),rules:[t=>Object(l["b"])(t),t=>Object(l["a"])(t)],label:"countTable",cols:6,type:"number",value:""},p=[new n["a"](u),new n["a"](h),new n["a"](m)],b={inputs:p},f=new d["a"](b);var v=f,w=a("0d11");const F=t=>{console.log("from hereeeee")},g={title:"groups",table:"groupTable",form:v,callBack:F},k=new w["a"](g);var y=k,_=a("8816"),E={name:"groupTable",components:{"edit-add":_["a"]},computed:{d(){return y}}},I=E,$=a("2877"),j=Object($["a"])(I,s,r,!1,null,null,null);e["default"]=j.exports},8816:function(t,e,a){"use strict";var i=a("8336"),s=a("62ad"),r=a("a523"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-12"},[e(r["a"],[e("app-form",{attrs:{form:t.activeForm},scopedSlots:t._u([{key:"form-submit",fn:function(){return[e(s["a"],{attrs:{cols:"12"}},[e(i["a"],{staticClass:"app-btn",on:{click:function(e){return e.preventDefault(),t.submit()}}},[t._v(t._s(t.$t("submit")))])],1)]},proxy:!0}])})],1)],1)},d=[],o=a("40b0"),c=a("0d11"),l=a("ddd3"),u=a("afbc"),h={data(){let t=this.d.form;return{activeForm:t}},props:{d:{required:!0,type:c["a"]}},watch:{"$route.params.id":{handler:function(t){this.activeForm=t?this.d.editForm:this.d.form},deep:!0,immediate:!0}},methods:{async submit(){const t=await this.activeForm.validate();t&&this.d.submit().then(t=>{null!=this.d.callBack?this.d.callBack(this.activeForm.state):this.$router.back()}).catch(t=>{this.activeForm.error=t})}},components:{"app-form":o["a"]},async created(){u["a"].currentRoute.params.id&&await this.d.setId(parseInt(u["a"].currentRoute.params.id)),l["a"].$on("editAddFind",async t=>{await this.d.setId(t)})}},m=h,p=a("2877"),b=Object(p["a"])(m,n,d,!1,null,null,null);e["a"]=b.exports}}]);
//# sourceMappingURL=chunk-2e356368.c2bdfa7c.js.map