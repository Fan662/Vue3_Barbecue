import{S as c}from"./sweetalert2.all-4fbfe73e.js";import{_ as h,r as l,o as d,c as _,b as e,d as a,w as s,G as v,l as f,n as g,F as k,e as b,f as n}from"./index-97dc42a3.js";const{VITE_APP_URL:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Barbecue/",MODE:"production",DEV:!1,PROD:!0},A={data(){return{check:!1}},methods:{logout(){document.cookie=`myToken=; myexpired=${new Date}; `,c.fire({title:"已登出",icon:"success",confirmButtonText:"OK"}),this.$router.push("/login")},checkAdmin(){const i=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=i,i?this.$http.post(`${x}v2/api/user/check`).then(()=>{this.check=!0}).catch(o=>{c.fire({title:o.response.data.message,icon:"error",confirmButtonText:"OK"}),this.$router.push("/login")}):(c.fire({title:"您尚未登入",icon:"error",confirmButtonText:"OK"}),this.$router.push("/login"))}},mounted(){this.checkAdmin()}},V={class:"navbar navbar-expand-lg navbar-light bg-primary sticky-top px-5"},w=e("img",{height:"80",src:"https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678379860131.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TK6v4a8JwxXJ%2BS7pPBUR2PTw1KIOuQy7E0jWUKtwPyXkTlRLLNCSIGk5kwrZJXTNPR07F4Nb8%2FdmnDSD%2Fba078gpe3IH4AUe7cWV7yk6MHolsEgJS3i47tRIgYfFI9%2Bse3koGsHujP6AQtYumeAaDzVGrl3Lo%2B6HGeoWCkLh%2FGJX4Xe49fU31vTAzz35iIQwhsvjb5tgOQAqPjtzcpgVG1VJU%2F6Zetcc0R%2FkmZv59qacdS9g5%2Fi1FaRhPLviob7083qFRrI84Sc3Hb8AI4%2Fs81SFsR%2FL8zKl1HQdA4KBAMpE9tL%2Fk%2F0%2F2SlrkPP1Xz3MIGNVUNkvgkwd3M45m9vIfQ%3D%3D",alt:"點燒烤Logo"},null,-1),F=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),P={class:"RWD-padding collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},y={class:"navbar-nav"},R={class:"nav-item"},T={class:"nav-item"},B={class:"nav-item"},I={class:"nav-item"},L={class:"nav-item"},N=b('<footer class="bg-primary"><div class="container text-center py-4"><p class="m-0 text-white">聯絡我們</p><a class="me-1" href="#"><i class="fa-brands fa-facebook text-white"></i></a><a href="#"><i class="fa-solid fa-envelope text-white"></i></a><p class="m-0 text-white fs-7 pt-3">Copyright©2023 點燒烤(僅為個人作品使用，無商業用途)</p></div></footer>',1);function S(i,o,D,z,u,r){const t=l("RouterLink"),p=l("RouterView");return d(),_(k,null,[e("nav",V,[a(t,{to:"/",class:"navbar-brand fs-1"},{default:s(()=>[w]),_:1}),F,e("div",P,[e("ul",y,[e("li",R,[a(t,{to:"/admin/adminProducts",class:"nav-link me-4"},{default:s(()=>[n("後台產品列表")]),_:1})]),e("li",T,[a(t,{to:"/admin/adminOrders",class:"nav-link me-4"},{default:s(()=>[n("後台訂單列表")]),_:1})]),e("li",B,[a(t,{to:"/admin/adminCoupons",class:"nav-link me-4"},{default:s(()=>[n("後台優惠券列表 ")]),_:1})]),e("li",I,[a(t,{to:"/admin/adminArticles",class:"nav-link me-4"},{default:s(()=>[n("後台文章列表")]),_:1})]),e("li",L,[e("a",{href:"#",class:"nav-link",onClick:o[0]||(o[0]=v((...m)=>r.logout&&r.logout(...m),["prevent"]))},"登出")])])])]),u.check?(d(),f(p,{key:0})):g("",!0),N],64)}const G=h(A,[["render",S]]);export{G as default};
