import{_ as M,o as l,c as d,b as o,I as u,K as m,L as y,t as b,a as w,r as f,F as x,p as k,d as C}from"./index-97dc42a3.js";import{S as c}from"./sweetalert2.all-4fbfe73e.js";import{D}from"./DeleteModal-29747747.js";import{v as T}from"./vueLoadingStore-a0b8f305.js";import{M as $}from"./modal-a1bbae86.js";const L={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{tempCoupon:{},due_date:"",couponModal:null}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const t=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=t},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{openModal(){this.couponModal.show()},hideModal(){this.couponModal.hide()}},mounted(){this.couponModal=new $(this.$refs.couponModal)}},P={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"couponModal"},V={class:"modal-dialog",role:"document"},B={class:"modal-content"},A={class:"modal-header"},N={class:"modal-title",id:"exampleModalLabel"},O={key:0},U={key:1},E=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body"},I={class:"mb-3"},K=o("label",{for:"title"},"標題",-1),R={class:"mb-3"},j=o("label",{for:"coupon_code"},"優惠碼",-1),F={class:"mb-3"},H=o("label",{for:"due_date"},"到期日",-1),z={class:"mb-3"},q=o("label",{for:"price"},"折扣百分比",-1),G={class:"mb-3"},J={class:"form-check"},Q=o("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),W={class:"modal-footer"},X=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Y(t,e,i,r,n,a){return l(),d("div",P,[o("div",V,[o("div",B,[o("div",A,[o("h5",N,[i.isNew?(l(),d("span",O,"新增優惠卷")):(l(),d("span",U,"編輯優惠卷"))]),E]),o("div",S,[o("div",I,[K,u(o("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=s=>n.tempCoupon.title=s),placeholder:"請輸入標題"},null,512),[[m,n.tempCoupon.title]])]),o("div",R,[j,u(o("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=s=>n.tempCoupon.code=s),placeholder:"請輸入優惠碼"},null,512),[[m,n.tempCoupon.code]])]),o("div",F,[H,u(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=s=>n.due_date=s)},null,512),[[m,n.due_date]])]),o("div",z,[q,u(o("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":e[3]||(e[3]=s=>n.tempCoupon.percent=s),placeholder:"請輸入折扣百分比"},null,512),[[m,n.tempCoupon.percent,void 0,{number:!0}]])]),o("div",G,[o("div",J,[u(o("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=s=>n.tempCoupon.is_enabled=s),id:"is_enabled"},null,512),[[y,n.tempCoupon.is_enabled]]),Q])])]),o("div",W,[X,o("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=()=>t.$emit("update-coupon",n.tempCoupon))},b(i.isNew?"新增優惠券":"更新優惠券"),1)])])])],512)}const Z=M(L,[["render",Y]]),{VITE_APP_URL:h,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Barbecue/",MODE:"production",DEV:!1,PROD:!0},oo={components:{DeleteModal:D,CouponModal:Z},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!1}},methods:{...w(T,["showLoading","hideLoading"]),openCouponModal(t,e){this.isNew=t,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...e},this.$refs.couponModal.openModal()},openDelCouponModal(t){this.tempCoupon={...t},this.$refs.delCouponModal.opendelModal()},getCoupons(){this.showLoading(),this.$http.get(`${h}v2/api/${_}/admin/coupons`,this.tempProduct).then(t=>{this.coupons=t.data.coupons,this.hideLoading()}).catch(t=>{c.fire({title:t.response.data.message,icon:"error",confirmButtonText:"OK"}),this.hideLoading()})},updateCoupon(t){let e=`${h}v2/api/${_}/admin/coupon`,i="post",r=t;this.isNew||(e=`${h}v2/api/${_}/admin/coupon/${this.tempCoupon.id}`,i="put",r=this.tempCoupon),this.$http[i](e,{data:r}).then(n=>{this.getCoupons(),this.$refs.couponModal.hideModal(),c.fire({title:n.data.message,icon:"success",confirmButtonText:"OK"})}).catch(n=>{c.fire({title:n.response.data.message,icon:"error",confirmButtonText:"OK"})})},delCoupon(){this.$http.delete(`${h}v2/api/${_}/admin/coupon/${this.tempCoupon.id}`).then(t=>{c.fire({title:t.data.message,icon:"success",confirmButtonText:"OK"}),this.$refs.delCouponModal.hidedelModal(),this.getCoupons()}).catch(t=>{c.fire({title:t.response.data.message,icon:"error",confirmButtonText:"OK"})})},date(t){return new Date(t*1e3).toLocaleDateString()}},mounted(){this.getCoupons()}},eo={class:"container"},to={class:"text-end mt-4"},no={class:"table mt-4"},so=o("thead",null,[o("tr",null,[o("th",null,"名稱"),o("th",null,"折扣百分比"),o("th",null,"到期日"),o("th",null,"是否啟用"),o("th",null,"編輯")])],-1),lo={key:0,class:"text-success"},ao={key:1,class:"text-muted"},io={class:"btn-group"},po=["onClick"],uo=["onClick"];function co(t,e,i,r,n,a){const s=f("CouponModal"),v=f("DeleteModal");return l(),d("div",eo,[o("div",null,[o("div",to,[o("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=()=>a.openCouponModal(!0))},"建立新的優惠券")]),o("table",no,[so,o("tbody",null,[(l(!0),d(x,null,k(n.coupons,(p,g)=>(l(),d("tr",{key:g},[o("td",null,b(p.title),1),o("td",null,b(p.percent)+"%",1),o("td",null,b(a.date(p.due_date)),1),o("td",null,[p.is_enabled===1?(l(),d("span",lo,"啟用")):(l(),d("span",ao,"未啟用"))]),o("td",null,[o("div",io,[o("button",{class:"btn btn-outline-primary btn-sm",onClick:()=>a.openCouponModal(!1,p)},"編輯",8,po),o("button",{class:"btn btn-outline-danger btn-sm",onClick:()=>a.openDelCouponModal(p)},"刪除",8,uo)])])]))),128))])]),C(s,{coupon:n.tempCoupon,"is-new":n.isNew,ref:"couponModal",onUpdateCoupon:a.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),C(v,{"temp-coupon":n.tempCoupon,ref:"delCouponModal",deleteProduct:a.delCoupon},null,8,["temp-coupon","deleteProduct"])])])}const fo=M(oo,[["render",co]]);export{fo as default};
