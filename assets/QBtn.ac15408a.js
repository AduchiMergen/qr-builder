var be=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var W=(e,n,t)=>n in e?be(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,R=(e,n)=>{for(var t in n||(n={}))ke.call(n,t)&&W(e,t,n[t]);if(F)for(var t of F(n))pe.call(n,t)&&W(e,t,n[t]);return e},L=(e,n)=>he(e,ye(n));import{c as s,h as v,g as Q,K as N,L as xe,M as qe,J as re,V as Ee,G as le,r as H,b as $e,W as Se,D as _,T as Re,d as we}from"./index.b9be31df.js";import{c as V,h as Le,a as O,e as _e,b as Be}from"./dom.6408ba6a.js";const I={xs:18,sm:24,md:32,lg:38,xl:46},ue={size:String};function ie(e,n=I){return s(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const U="0 0 24 24",X=e=>e,K=e=>`ionicons ${e}`,se={"mdi-":e=>`mdi ${e}`,"icon-":X,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":K,"ion-ios":K,"ion-logo":K,"iconfont ":X,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},ce={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ce=new RegExp("^("+Object.keys(se).join("|")+")"),Pe=new RegExp("^("+Object.keys(oe).join("|")+")"),G=new RegExp("^("+Object.keys(ce).join("|")+")"),Te=/^[Mm]\s?[-+]?\.?\d/,Me=/^img:/,Ae=/^svguse:/,Oe=/^ion-/,je=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var J=V({name:"QIcon",props:L(R({},ue),{tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean}),setup(e,{slots:n}){const{proxy:{$q:t}}=Q(),u=ie(e),g=s(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),i=s(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const d=t.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(Te.test(a)===!0){const[d,y=U]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(k=>{const[r,p,h]=k.split("@@");return v("path",{style:p,d:r,transform:h})})}}if(Me.test(a)===!0)return{img:!0,src:a.substring(4)};if(Ae.test(a)===!0){const[d,y=U]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let b=" ";const E=a.match(Ce);if(E!==null)o=se[E[1]](a);else if(je.test(a)===!0)o=a;else if(Oe.test(a)===!0)o=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(G.test(a)===!0){o="notranslate material-symbols";const d=a.match(G);d!==null&&(a=a.substring(6),o+=ce[d[1]]),b=a}else{o="notranslate material-icons";const d=a.match(Pe);d!==null&&(a=a.substring(2),o+=oe[d[1]]),b=a}return{cls:o,content:b}});return()=>{const o={class:g.value,style:u.value,"aria-hidden":"true",role:"presentation"};return i.value.none===!0?v(e.tag,o,Le(n.default)):i.value.img===!0?v("span",o,O(n.default,[v("img",{src:i.value.src})])):i.value.svg===!0?v("span",o,O(n.default,[v("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?v("span",o,O(n.default,[v("svg",{viewBox:i.value.viewBox},[v("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(o.class+=" "+i.value.cls),v(e.tag,o,O(n.default,[i.value.content])))}}});const ze={size:{type:[Number,String],default:"1em"},color:String};function Ke(e){return{cSize:s(()=>e.size in I?`${I[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ne=V({name:"QSpinner",props:L(R({},ze),{thickness:{type:Number,default:5}}),setup(e){const{cSize:n,classes:t}=Ke(e);return()=>v("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Ie(e,n=250){let t=!1,u;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),u=e.apply(this,arguments)),u}}function Y(e,n,t,u){t.modifiers.stop===!0&&re(e);const g=t.modifiers.color;let i=t.modifiers.center;i=i===!0||u===!0;const o=document.createElement("span"),a=document.createElement("span"),b=Ee(e),{left:E,top:d,width:y,height:k}=n.getBoundingClientRect(),r=Math.sqrt(y*y+k*k),p=r/2,h=`${(y-r)/2}px`,c=i?h:`${b.left-E-p}px`,f=`${(k-r)/2}px`,x=i?f:`${b.top-d-p}px`;a.className="q-ripple__inner",Be(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${g?" text-"+g:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),n.appendChild(o);const w=()=>{o.remove(),clearTimeout($)};t.abort.push(w);let $=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${h},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,$=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,$=setTimeout(()=>{o.remove(),t.abort.splice(t.abort.indexOf(w),1)},275)},250)},50)}function Z(e,{modifiers:n,value:t,arg:u,instance:g}){const i=Object.assign({},g.$q.config.ripple,n,t);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||u,keyCodes:[].concat(i.keyCodes||13)}}var Qe=_e({name:"ripple",beforeMount(e,n){const t={enabled:n.value!==!1,modifiers:{},abort:[],start(u){t.enabled===!0&&u.qSkipRipple!==!0&&(t.modifiers.early===!0?["mousedown","touchstart"].includes(u.type)===!0:u.type==="click")&&Y(u,e,t,u.qKeyEvent===!0)},keystart:Ie(u=>{t.enabled===!0&&u.qSkipRipple!==!0&&N(u,t.modifiers.keyCodes)===!0&&u.type===`key${t.modifiers.early===!0?"down":"up"}`&&Y(u,e,t,!0)},300)};Z(t,n),e.__qripple=t,xe(t,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&Z(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),qe(n,"main"),delete e._qripple}});const de={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ve=Object.keys(de),De={align:{type:String,validator:e=>Ve.includes(e)}};function Fe(e){return s(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${de[n]}`})}function We(e){return e.appContext.config.globalProperties.$router!==void 0}function ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function te(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function He(e,n){for(const t in n){const u=n[t],g=e[t];if(typeof u=="string"){if(u!==g)return!1}else if(Array.isArray(g)===!1||g.length!==u.length||u.some((i,o)=>i!==g[o]))return!1}return!0}function ne(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,u)=>t===n[u]):e.length===1&&e[0]===n}function Ue(e,n){return Array.isArray(e)===!0?ne(e,n):Array.isArray(n)===!0?ne(n,e):e===n}function Xe(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ue(e[t],n[t])===!1)return!1;return!0}const Ge={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Je(e){const n=Q(),{props:t,proxy:u}=n,g=We(n),i=s(()=>t.disable!==!0&&t.href!==void 0),o=s(()=>g===!0&&t.disable!==!0&&i.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),a=s(()=>{if(o.value===!0)try{return u.$router.resolve(t.to)}catch{}return null}),b=s(()=>a.value!==null),E=s(()=>i.value===!0||b.value===!0),d=s(()=>t.type==="a"||E.value===!0?"a":t.tag||e||"div"),y=s(()=>i.value===!0?{href:t.href,target:t.target}:b.value===!0?{href:a.value.href,target:t.target}:{}),k=s(()=>{if(b.value===!1)return null;const{matched:f}=a.value,{length:x}=f,w=f[x-1];if(w===void 0)return-1;const $=u.$route.matched;if($.length===0)return-1;const T=$.findIndex(te.bind(null,w));if(T>-1)return T;const j=ee(f[x-2]);return x>1&&ee(w)===j&&$[$.length-1].path!==j?$.findIndex(te.bind(null,f[x-2])):T}),r=s(()=>b.value===!0&&k.value>-1&&He(u.$route.params,a.value.params)),p=s(()=>r.value===!0&&k.value===u.$route.matched.length-1&&Xe(u.$route.params,a.value.params)),h=s(()=>b.value===!0?p.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function c(f){return t.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||t.target==="_blank"?!1:(le(f),u.$router[t.replace===!0?"replace":"push"](t.to).catch(x=>x))}return{hasRouterLink:b,hasHrefLink:i,hasLink:E,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:p,linkClass:h,linkProps:y,navigateToRouterLink:c}}const ae={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ye={xs:8,sm:10,md:14,lg:20,xl:24},Ze=["button","submit","reset"],et=/[^\s]\/[^\s]/,tt=L(R(R({},ue),Ge),{type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:L(R({},De.align),{default:"center"}),stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean});function nt(e){const n=ie(e,Ye),t=Fe(e),{hasRouterLink:u,hasLink:g,linkTag:i,linkProps:o,navigateToRouterLink:a}=Je("button"),b=s(()=>{const c=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(f=>f in ae?ae[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):c}),E=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=s(()=>e.disable!==!0&&e.loading!==!0),y=s(()=>d.value===!0?e.tabindex||0:-1),k=s(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=s(()=>{const c={tabindex:y.value};return g.value===!0?Object.assign(c,o.value):Ze.includes(e.type)===!0&&(c.type=e.type),i.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),u.value!==!0&&et.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),p=s(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${k.value} q-btn--${e.round===!0?"round":`rectangle${E.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),h=s(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:b,innerClasses:h,attributes:r,hasRouterLink:u,hasLink:g,linkTag:i,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:q}=we;let B=null,C=null,P=null;var ut=V({name:"QBtn",props:L(R({},tt),{percentage:Number,darkPercentage:Boolean}),emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:u}=Q(),{classes:g,style:i,innerClasses:o,attributes:a,hasRouterLink:b,hasLink:E,linkTag:d,navigateToRouterLink:y,isActionable:k}=nt(e),r=H(null),p=H(null);let h=null,c,f;const x=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),w=s(()=>e.disable===!0||e.ripple===!1?!1:R({keyCodes:E.value===!0?[13,32]:[13]},e.ripple===!0?{}:e.ripple)),$=s(()=>({center:e.round})),T=s(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),j=s(()=>e.loading===!0?{onMousedown:A,onTouchstartPassive:A,onClick:A,onKeydown:A,onKeyup:A}:k.value===!0?{onClick:D,onKeydown:ve,onMousedown:ge,onTouchstart:me}:{onClick:_}),fe=s(()=>R(R({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+g.value,style:i.value},a.value),j.value));function D(l){if(r.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const z=()=>{document.removeEventListener("keydown",_,!0),document.removeEventListener("keyup",z,q),r.value!==null&&r.value.removeEventListener("blur",z,q)};document.addEventListener("keydown",_,!0),document.addEventListener("keyup",z,q),r.value.addEventListener("blur",z,q)}}if(b.value===!0){const m=()=>{l.__qNavigate=!0,y(l)};t("click",l,m),l.defaultPrevented!==!0&&m()}else t("click",l)}}function ve(l){r.value!==null&&(t("keydown",l),N(l,[13,32])===!0&&C!==r.value&&(C!==null&&M(),l.defaultPrevented!==!0&&(r.value.focus(),C=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),r.value.addEventListener("blur",S,q)),_(l)))}function me(l){r.value!==null&&(t("touchstart",l),l.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&M(),B=r.value,h=l.target,h.addEventListener("touchcancel",S,q),h.addEventListener("touchend",S,q)),c=!0,clearTimeout(f),f=setTimeout(()=>{c=!1},200)))}function ge(l){r.value!==null&&(l.qSkipRipple=c===!0,t("mousedown",l),l.defaultPrevented!==!0&&P!==r.value&&(P!==null&&M(),P=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,q)))}function S(l){if(r.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===r.value)){if(l!==void 0&&l.type==="keyup"){if(C===r.value&&N(l,[13,32])===!0){const m=new MouseEvent("click",l);m.qKeyEvent=!0,l.defaultPrevented===!0&&le(m),l.cancelBubble===!0&&re(m),r.value.dispatchEvent(m),_(l),l.qKeyEvent=!0}t("keyup",l)}M()}}function M(l){const m=p.value;l!==!0&&(B===r.value||P===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),B===r.value&&(h!==null&&(h.removeEventListener("touchcancel",S,q),h.removeEventListener("touchend",S,q)),B=h=null),P===r.value&&(document.removeEventListener("mouseup",S,q),P=null),C===r.value&&(document.removeEventListener("keyup",S,!0),r.value!==null&&r.value.removeEventListener("blur",S,q),C=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function A(l){_(l),l.qSkipRipple=!0}return $e(()=>{M(!0)}),Object.assign(u,{click:D}),()=>{let l=[];e.icon!==void 0&&l.push(v(J,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(v("span",{class:"block"},[e.label])),l=O(n.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(v(J,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:T.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},l)),e.loading!==null&&m.push(v(Re,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[v(Ne)])]:null)),Se(v(d.value,fe.value,m),[[Qe,w.value,void 0,$.value]])}}});export{J as Q,ie as a,Ne as b,ut as c,ue as u,We as v};
