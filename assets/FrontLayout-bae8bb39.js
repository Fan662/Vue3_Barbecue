import{_ as d,m as p,a as _,r as c,o as v,c as g,b as a,d as t,w as s,F as m,e as u,f as o,t as b}from"./index-97dc42a3.js";import{c as i}from"./cartStore-92ea952b.js";import"./sweetalert2.all-4fbfe73e.js";import"./vueLoadingStore-a0b8f305.js";const f={data(){return{}},computed:{...p(i,["cart"])},methods:{..._(i,["getCarts"])},mounted(){this.getCarts()}},h={style:{"z-index":"1030"},class:"navbar navbar-expand-lg navbar-light bg-primary sticky-top px-5"},k=a("img",{height:"80",src:"https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678379860131.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TK6v4a8JwxXJ%2BS7pPBUR2PTw1KIOuQy7E0jWUKtwPyXkTlRLLNCSIGk5kwrZJXTNPR07F4Nb8%2FdmnDSD%2Fba078gpe3IH4AUe7cWV7yk6MHolsEgJS3i47tRIgYfFI9%2Bse3koGsHujP6AQtYumeAaDzVGrl3Lo%2B6HGeoWCkLh%2FGJX4Xe49fU31vTAzz35iIQwhsvjb5tgOQAqPjtzcpgVG1VJU%2F6Zetcc0R%2FkmZv59qacdS9g5%2Fi1FaRhPLviob7083qFRrI84Sc3Hb8AI4%2Fs81SFsR%2FL8zKl1HQdA4KBAMpE9tL%2Fk%2F0%2F2SlrkPP1Xz3MIGNVUNkvgkwd3M45m9vIfQ%3D%3D",alt:""},null,-1),F=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),x={class:"RWD-padding collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},y={class:"navbar-nav"},w={class:"nav-item"},R={class:"nav-item"},A={class:"nav-item"},S=a("i",{class:"fas fa-shopping-cart"},null,-1),N={class:"RWD-cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger"},I={class:"nav-item"},L=u('<footer class="bg-primary"><div class="container text-center py-4"><p class="m-0 text-white">聯絡我們</p><a class="me-1" href="#"><i class="fa-brands fa-facebook text-white"></i></a><a href="#"><i class="fa-solid fa-envelope text-white"></i></a><p class="m-0 text-white fs-7 pt-3">Copyright©2023 點燒烤(僅為個人作品使用，無商業用途)</p></div></footer>',1);function V(r,z,P,B,D,G){const e=c("RouterLink"),l=c("RouterView");return v(),g(m,null,[a("nav",h,[t(e,{to:"/",class:"navbar-brand fs-1"},{default:s(()=>[k]),_:1}),F,a("div",x,[a("ul",y,[a("li",w,[t(e,{to:"/articles",class:"nav-link me-4"},{default:s(()=>[o("最新消息")]),_:1})]),a("li",R,[t(e,{to:"/products",class:"nav-link me-4"},{default:s(()=>[o("產品列表")]),_:1})]),a("li",A,[t(e,{to:"/cart",class:"nav-link me-4 position-relative"},{default:s(()=>{var n;return[S,a("span",N,b((n=r.cart.carts)==null?void 0:n.length),1)]}),_:1})]),a("li",I,[t(e,{to:"/admin/adminProducts",class:"nav-link"},{default:s(()=>[o("登入後台")]),_:1})])])])]),t(l),L],64)}const J=d(f,[["render",V]]);export{J as default};
