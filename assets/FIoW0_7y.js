import{o as l,c as n,b as r,f as k,r as u,i as w,C as f,T as x,d as g,w as _,e as O,F as y,g as z,t as S,Y as D,u as L}from"./Ho11KFCP.js";import{_ as C}from"./D7mtGAGI.js";import{_ as M}from"./9nx4tXco.js";import{f as V,u as j}from"./ycDIoMx1.js";import{a as i}from"./COAcYwch.js";function B(p,c){return l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"fill-rule":"evenodd",d:"M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z","clip-rule":"evenodd"})])}const T={class:"flex items-center justify-center"},E={class:"flex flex-col items-center"},N={class:"relative mt-2 flex items-center justify-center"},$={class:"flex min-w-fit justify-end"},A={"data-slot":"control",class:"group relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:has-[[data-focus]]:ring-2 sm:after:has-[[data-focus]]:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none"},I=["value"],Z=k({__name:"OrgList",emits:["defaultOrgSelected"],setup(p,{emit:c}){const o=u([]),s=u(null),h=c,v=async()=>{try{o.value=V();let a=b();if(o.value.length>0){const e=o.value.find(t=>t.instance_url===a);e?s.value=e:s.value=o.value.length>0?o.value[0]:null,await d(!1)}else i("No orgs found","Error")}catch(a){i("Error Occured while fetching data, check console","Error"),console.error("errorToastMsg",a)}},d=async a=>{var e,t;console.log("selectedOrg.value?.instance_url --> "+((e=s.value)==null?void 0:e.instance_url)),await j({selectedOrg:s.value}),a?(m((t=s.value)==null?void 0:t.instance_url),i("Default org has been set.","Success")):h("defaultOrgSelected",s.value)},m=a=>{localStorage.setItem("default_org",a)},b=()=>{const a=localStorage.getItem("default_org");return a||null};return w(()=>{v()}),(a,e)=>f((l(),n("div",T,[r("div",E,[r("div",null,[g(C,null,{default:_(()=>e[3]||(e[3]=[O("Set Default Org")])),_:1})]),r("div",N,[r("div",$,[r("span",A,[f(r("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),onChange:e[1]||(e[1]=t=>d(!1)),class:"bg-gray-50 relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)] [&_optgroup]:font-semibold text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 dark:*:bg-zinc-800 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600 data-[disabled]:border-zinc-950/20 data-[disabled]:opacity-100 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]"},[(l(!0),n(y,null,z(o.value,t=>(l(),n("option",{value:t,key:t.instance_url},S(t.instance_url),9,I))),128))],544),[[D,s.value]]),e[4]||(e[4]=r("span",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},[r("svg",{class:"size-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]",viewBox:"0 0 16 16","aria-hidden":"true",fill:"none"},[r("path",{d:"M5.75 10.75L8 13L10.25 10.75","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),r("path",{d:"M10.25 5.25L8 3L5.75 5.25","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))])]),g(M,{icon:L(B),color:"green",onClick:e[2]||(e[2]=t=>d(!0)),class:"ml-4",title:"Save Default Org"},null,8,["icon"])])])],512)),[[x,o.value.length>0]])}});export{Z as _};
