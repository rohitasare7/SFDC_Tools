import{o as D,c as _,b as te,t as he,I as ge,M as S,r as b,m as x,f as V,P as ae,i as T,L as ie,B as be,O as j,s as ye,Q as q}from"./Ho11KFCP.js";import{o as P,u as k,A as K,N as we,s as Ee,S as E,a as Le,t as Se,i as g,l as Fe,T as Te}from"./ChDmTMo_.js";const xe={class:"relative inline-flex items-center mr-5 cursor-pointer"},Ae=["checked"],Ne={key:0,class:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"},Oe={key:1},ft={__name:"InputToggle",props:{value:String,isChecked:{type:Boolean,default:!1}},setup(e){return(t,n)=>(D(),_("label",xe,[te("input",{type:"checkbox",value:"",class:"sr-only peer",checked:e.isChecked},null,8,Ae),n[0]||(n[0]=te("div",{class:"w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1)),e.value?(D(),_("span",Ne,he(e.value),1)):(D(),_("span",Oe,[ge(t.$slots,"default")]))]))}};function $e(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function W(){let e=[],t={addEventListener(n,a,l,r){return n.addEventListener(a,l,r),t.add(()=>n.removeEventListener(a,l,r))},requestAnimationFrame(...n){let a=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(a))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let a=setTimeout(...n);t.add(()=>clearTimeout(a))},microTask(...n){let a={current:!0};return $e(()=>{a.current&&n[0]()}),t.add(()=>{a.current=!1})},style(n,a,l){let r=n.style.getPropertyValue(a);return Object.assign(n.style,{[a]:l}),this.add(()=>{Object.assign(n.style,{[a]:r})})},group(n){let a=W();return n(a),this.add(()=>a.dispose())},add(n){return e.push(n),()=>{let a=e.indexOf(n);if(a>=0)for(let l of e.splice(a,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}var Pe=Object.defineProperty,ke=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t,n)=>(ke(e,typeof t!="symbol"?t+"":t,n),n);class Me{constructor(){ne(this,"current",this.detect()),ne(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let M=new Me;function Ce(e){if(M.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=P(e);if(t)return t.ownerDocument}return document}let U=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Ie=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Ie||{}),Be=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Be||{}),De=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(De||{});function _e(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(U)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var oe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(oe||{});function He(e,t=0){var n;return e===((n=Ce(e))==null?void 0:n.body)?!1:k(t,{0(){return e.matches(U)},1(){let a=e;for(;a!==null;){if(a.matches(U))return!0;a=a.parentElement}return!1}})}var je=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(je||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function vt(e){e==null||e.focus({preventScroll:!0})}let Ue=["textarea","input"].join(",");function Re(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ue))!=null?n:!1}function Ve(e,t=n=>n){return e.slice().sort((n,a)=>{let l=t(n),r=t(a);if(l===null||r===null)return 0;let o=l.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function mt(e,t,{sorted:n=!0,relativeTo:a=null,skipElements:l=[]}={}){var r;let o=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,i=Array.isArray(e)?n?Ve(e):e:_e(e);l.length>0&&i.length>1&&(i=i.filter(f=>!l.includes(f))),a=a??o.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(a))-1;if(t&4)return Math.max(0,i.indexOf(a))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},v=0,c=i.length,m;do{if(v>=c||v+c<=0)return 0;let f=s+v;if(t&16)f=(f+c)%c;else{if(f<0)return 3;if(f>=c)return 1}m=i[f],m==null||m.focus(u),v+=d}while(m!==o.activeElement);return t&6&&Re(m)&&m.select(),2}function qe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ke(){return/Android/gi.test(window.navigator.userAgent)}function We(){return qe()||Ke()}function O(e,t,n){M.isServer||S(a=>{document.addEventListener(e,t,n),a(()=>document.removeEventListener(e,t,n))})}function Ge(e,t,n){M.isServer||S(a=>{window.addEventListener(e,t,n),a(()=>window.removeEventListener(e,t,n))})}function pt(e,t,n=x(()=>!0)){function a(r,o){if(!n.value||r.defaultPrevented)return;let i=o(r);if(i===null||!i.getRootNode().contains(i))return;let d=function s(u){return typeof u=="function"?s(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let s of d){if(s===null)continue;let u=s instanceof HTMLElement?s:P(s);if(u!=null&&u.contains(i)||r.composed&&r.composedPath().includes(u))return}return!He(i,oe.Loose)&&i.tabIndex!==-1&&r.preventDefault(),t(r,i)}let l=b(null);O("pointerdown",r=>{var o,i;n.value&&(l.value=((i=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:i[0])||r.target)},!0),O("mousedown",r=>{var o,i;n.value&&(l.value=((i=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:i[0])||r.target)},!0),O("click",r=>{We()||l.value&&(a(r,()=>l.value),l.value=null)},!0),O("touchend",r=>a(r,()=>r.target instanceof HTMLElement?r.target:null),!0),Ge("blur",r=>a(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Xe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Xe||{});let ht=V({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var a;let{features:l,...r}=e,o={"aria-hidden":(l&2)===2?!0:(a=r["aria-hidden"])!=null?a:void 0,hidden:(l&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return K({ourProps:o,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function Qe(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let F=[];Qe(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ze(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function H(e,...t){e&&t.length>0&&e.classList.add(...t)}function $(e,...t){e&&t.length>0&&e.classList.remove(...t)}var R=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(R||{});function Ye(e,t){let n=W();if(!e)return n.dispose;let{transitionDuration:a,transitionDelay:l}=getComputedStyle(e),[r,o]=[a,l].map(i=>{let[d=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,u)=>u-s);return d});return r!==0?n.setTimeout(()=>t("finished"),r+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function re(e,t,n,a,l,r){let o=W(),i=r!==void 0?ze(r):()=>{};return $(e,...l),H(e,...t,...n),o.nextFrame(()=>{$(e,...n),H(e,...a),o.add(Ye(e,d=>($(e,...a,...t),H(e,...l),i(d))))}),o.add(()=>$(e,...t,...n,...a,...l)),o.add(()=>i("cancelled")),o.dispose}function w(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let G=Symbol("TransitionContext");var Ze=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ze||{});function Je(){return q(G,null)!==null}function et(){let e=q(G,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function tt(){let e=q(X,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let X=Symbol("NestingContext");function C(e){return"children"in e?C(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function le(e){let t=b([]),n=b(!1);T(()=>n.value=!0),ie(()=>n.value=!1);function a(r,o=E.Hidden){let i=t.value.findIndex(({id:d})=>d===r);i!==-1&&(k(o,{[E.Unmount](){t.value.splice(i,1)},[E.Hidden](){t.value[i].state="hidden"}}),!C(t)&&n.value&&(e==null||e()))}function l(r){let o=t.value.find(({id:i})=>i===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>a(r,E.Unmount)}return{children:t,register:l,unregister:a}}let ue=we.RenderStrategy,nt=V({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:l}){let r=b(0);function o(){r.value|=g.Opening,t("beforeEnter")}function i(){r.value&=~g.Opening,t("afterEnter")}function d(){r.value|=g.Closing,t("beforeLeave")}function s(){r.value&=~g.Closing,t("afterLeave")}if(!Je()&&Ee())return()=>ae(at,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:d,onAfterLeave:s},a);let u=b(null),v=x(()=>e.unmount?E.Unmount:E.Hidden);l({el:u,$el:u});let{show:c,appear:m}=et(),{register:f,unregister:I}=tt(),p=b(c.value?"visible":"hidden"),Q={value:!0},L=Le(),A={value:!1},z=le(()=>{!A.value&&p.value!=="hidden"&&(p.value="hidden",I(L),s())});T(()=>{let h=f(L);ie(h)}),S(()=>{if(v.value===E.Hidden&&L){if(c.value&&p.value!=="visible"){p.value="visible";return}k(p.value,{hidden:()=>I(L),visible:()=>f(L)})}});let Y=w(e.enter),Z=w(e.enterFrom),se=w(e.enterTo),J=w(e.entered),de=w(e.leave),ce=w(e.leaveFrom),fe=w(e.leaveTo);T(()=>{S(()=>{if(p.value==="visible"){let h=P(u);if(h instanceof Comment&&h.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ve(h){let B=Q.value&&!m.value,y=P(u);!y||!(y instanceof HTMLElement)||B||(A.value=!0,c.value&&o(),c.value||d(),h(c.value?re(y,Y,Z,se,J,N=>{A.value=!1,N===R.Finished&&i()}):re(y,de,ce,fe,J,N=>{A.value=!1,N===R.Finished&&(C(z)||(p.value="hidden",I(L),s()))})))}return T(()=>{be([c],(h,B,y)=>{ve(y),Q.value=!1},{immediate:!0})}),j(X,z),Se(x(()=>k(p.value,{visible:g.Open,hidden:g.Closed})|r.value)),()=>{let{appear:h,show:B,enter:y,enterFrom:N,enterTo:it,entered:ot,leave:lt,leaveFrom:ut,leaveTo:st,...ee}=e,me={ref:u},pe={...ee,...m.value&&c.value&&M.isServer?{class:ye([n.class,ee.class,...Y,...Z])}:{}};return K({theirProps:pe,ourProps:me,slot:{},slots:a,attrs:n,features:ue,visible:p.value==="visible",name:"TransitionChild"})}}}),rt=nt,at=V({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a}){let l=Fe(),r=x(()=>e.show===null&&l!==null?(l.value&g.Open)===g.Open:e.show);S(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=b(r.value?"visible":"hidden"),i=le(()=>{o.value="hidden"}),d=b(!0),s={show:r,appear:x(()=>e.appear||!d.value)};return T(()=>{S(()=>{d.value=!1,r.value?o.value="visible":C(i)||(o.value="hidden")})}),j(X,i),j(G,s),()=>{let u=Te(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),v={unmount:e.unmount};return K({ourProps:{...v,as:"template"},theirProps:{},slot:{},slots:{...a,default:()=>[ae(rt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...v,...u},a.default)]},attrs:{},features:ue,visible:o.value==="visible",name:"Transition"})}}});export{Ie as N,Ve as O,mt as P,at as S,Be as T,ft as _,Ge as a,vt as b,M as c,$e as d,qe as e,ht as f,nt as h,Ce as i,We as n,W as o,F as t,Xe as u,pt as w};
