import{_ as de,a as me}from"./CuTdjjvY.js";import{_ as ue}from"./FIoW0_7y.js";import{_ as W}from"./D7mtGAGI.js";import{_ as X}from"./C0MpYsF0.js";import{_ as Y}from"./CKP9D31c.js";import{_ as Z}from"./9nx4tXco.js";import{_ as U}from"./BA2uKlca.js";import{h as S}from"./BWsKriaw.js";import{D as q}from"./NYwah7P7.js";import{b as R,a as V}from"./COAcYwch.js";import{r as ee}from"./J0KE5HEr.js";import{o as y,c as T,b as r,f as G,r as d,i as H,d as s,w as t,e as p,u as a,S as te,x as N,t as $,s as E,F as Q,q as z,C as fe,T as pe,j as ve}from"./Ho11KFCP.js";import{_ as ye}from"./PYXEAhwZ.js";import{_ as _e}from"./BCUAfS-d.js";import{r as Ce}from"./DdI82SeF.js";import{r as ge}from"./DLsSqBkb.js";import{u as xe}from"./bkTsuWyN.js";import"./ycDIoMx1.js";import"./Z-iyx2tQ.js";import"./BhtQlZEJ.js";import"./BmYiYK0q.js";function he(F,_){return y(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"})])}const Te={class:"flex flex-col md:flex-row justify-start items-center space-y-2 md:space-y-0"},be={key:1},we={class:"text-left ml-2"},De={class:"text-center"},ke="LastModifiedDate",Le="desc",Me=G({__name:"testClassList",setup(F){const _=d([]),w=["Name","CreatedBy.Name","LastModifiedBy.Name","CreatedDate"],m=d(""),x=[{text:"Test Class",value:"Name"},{text:"Created By",value:"CreatedBy.Name"},{text:"LastModified By",value:"LastModifiedBy.Name"},{text:"Created Date",value:"CreatedDate"},{text:"LastModified Date",value:"LastModifiedDate"},{text:"Actions",value:"Actions"}],v=d(!1),D=async()=>{v.value=!0;const n=await S("Search_Query_TestClass",null,null,"GET");n&&n.searchRecords&&n.searchRecords.length>0?_.value=n==null?void 0:n.searchRecords.map(o=>(o.CreatedDate=R(o.CreatedDate),o.LastModifiedDate=R(o.LastModifiedDate),{...o})):_.value=[],v.value=!1},b=d(""),M=async n=>{var C,k;b.value=n;const o={classids:n,maxFailedTests:"-1",testLevel:"RunSpecifiedTests",skipCodeCoverage:"false"};try{const u=await S("Tooling_Run_Test",null,o,"POST");Array.isArray(u)&&u.length>0&&((C=u[0])!=null&&C.message)?V((k=u[0])==null?void 0:k.message,"Error"):V("Apex Test Execution Started, Please wait for sometime. ID : "+u,"Success")}catch(u){console.log("err --> "+u)}b.value=""};return H(async()=>{await D()}),(n,o)=>{const C=W,k=X,u=Y,I=Z;return y(),T(Q,null,[s(C,{class:"font-semibold mt-4"},{default:t(()=>o[1]||(o[1]=[p("All Test Classes")])),_:1}),r("div",Te,[s(k,{modelValue:a(m),"onUpdate:modelValue":o[0]||(o[0]=g=>te(m)?m.value=g:null),type:"text",class:"my-4 mr-4 !px-2 !py-1",placeholder:"Search classes.."},null,8,["modelValue"]),s(u,{onClick:D,class:"my-4 mr-4",title:"Fetch Main Classes."},{default:t(()=>[a(v)?(y(),N(U,{key:0,cssStyle:"h-4 w-4 mr-2"},{default:t(()=>o[2]||(o[2]=[p("Retrieving data...")])),_:1})):(y(),T("p",be,"Refresh List"))]),_:1}),s(u,{class:"my-4 mr-4"},{default:t(()=>o[3]||(o[3]=[p("View Apex Test Execution Logs")])),_:1})]),s(a(q),{headers:x,items:a(_),"search-field":w,"rows-per-page":10,"header-text-direction":"center","search-value":a(m),"sort-by":ke,"sort-type":Le,"no-hover":!0,"theme-color":"#312e3d","body-text-direction":"center","table-class-name":"tableCSS mb-12 rounded-lg border dark:border-gray-600 shadow-md"},{"empty-message":t(()=>[s(C,{class:"font-semibold my-4"},{default:t(()=>o[4]||(o[4]=[p("No data present, please click Refresh List button.")])),_:1})]),loading:t(()=>[s(C,{class:"font-semibold my-4"},{default:t(()=>o[5]||(o[5]=[p("Data loading, please wait...")])),_:1})]),"item-Name":t(({Name:g})=>[r("p",we,$(g),1)]),"item-Actions":t(({Id:g})=>[r("div",De,[s(I,{icon:a(ee),color:"green",class:E(["mr-2 my-2",{"animate-spin":a(b)==g}]),title:"Run Tests",onClick:j=>M(g)},null,8,["icon","onClick","class"])])]),_:1},8,["items","search-value"])],64)}}}),Be={class:"flex flex-col md:flex-row justify-start items-center space-y-2 md:space-y-0"},Se={key:1},Ae={class:"text-left ml-2"},Ne={class:"text-center"},$e={class:"p-6"},Re={class:"flex justify-between items-center mb-4"},Ve={key:0},Ee={class:"text-center"},Fe={class:E("mt-6 flex justify-center")},Ie={key:1},J="LastModifiedDate",K="desc",je=G({__name:"mainClassList",setup(F){const _=d([]),w=["ApexClassOrTrigger.Name","Coverage"],m=d(""),x=[{text:"Main Class",value:"ApexClassOrTrigger.Name"},{text:"Total Coverage",value:"Coverage"},{text:"Lines Covered",value:"NumLinesCovered"},{text:"Lines Not Covered",value:"NumLinesUncovered"},{text:"Total Lines",value:"totalLines"},{text:"Created By",value:"CreatedBy.Name"},{text:"Actions",value:"Actions"}],v=d([]),D=[{text:"Test Class",value:"name"},{text:"Created By",value:"createdBy"},{text:"Last Modified By",value:"lastModifiedBy"},{text:"Created Date",value:"createdDate"},{text:"Last Modified Date",value:"modifiedDate"},{text:"Actions",value:"Actions"}],b=d(!1),M=d(!1),n=d(!1),o=d("");d([]);const C=d(""),k=(l,e)=>(l/(l+e)*100).toFixed(0),u=async()=>{b.value=!0;const l=await S("Tooling_Query_MainClassCoverageList",null,null,"GET");l&&l.records&&l.records.length>0?_.value=l==null?void 0:l.records.map(e=>{const i=k(e.NumLinesCovered,e.NumLinesUncovered);return{...e,Coverage:i}}):_.value=[],b.value=!1},I=()=>{M.value=!0},g=()=>{M.value=!1,o.value=""},j=async l=>{var i,h;C.value=l,n.value=!0;const e={classids:l,maxFailedTests:"-1",testLevel:"RunSpecifiedTests",skipCodeCoverage:"false"};try{const f=await S("Tooling_Run_Test",null,e,"POST");Array.isArray(f)&&f.length>0&&((i=f[0])!=null&&i.message)?V((h=f[0])==null?void 0:h.message,"Error"):V("Apex Test Execution Started, Please wait for sometime. ID : "+f,"Success")}catch(f){C.value="",console.log("err --> "+f)}n.value=!1},se=async()=>{n.value=!0;try{const e=Array.from(new Set(v.value.map(i=>i.testClassId))).join(",");await j(e)}catch(l){console.log("err --> "+l)}n.value=!1},ae=async l=>{try{n.value=!0;const e=await S("Tooling_GetTestClassData",l,null,"GET");let i=null;const h=[];for(const B of e.records){const{ApexClassOrTrigger:{Name:O},ApexTestClass:{Name:A,CreatedBy:{Name:c},LastModifiedBy:{Name:L},CreatedDate:P,LastModifiedDate:le},ApexTestClassId:ne}=B;i===null&&(i=O);const re=R(P),ie=R(le);h.find(ce=>ce.name===A)||h.push({name:A,createdBy:c,lastModifiedBy:L,createdDate:re,modifiedDate:ie,testClassId:ne})}const f={mainClass:i,testClassList:h};v.value=f.testClassList,o.value=f.mainClass,I()}catch(e){console.error("Error loading debug log list:",e)}n.value=!1},oe=async(l,e)=>{await ve({path:`/tools/testClass/${l}`,query:{coverage:e}})};return H(async()=>{await u()}),(l,e)=>{const i=W,h=X,f=Y,B=Z,O=ye,A=_e;return y(),T(Q,null,[s(i,{class:"font-semibold mt-4"},{default:t(()=>e[1]||(e[1]=[p("Main Class Coverage")])),_:1}),r("div",Be,[s(h,{modelValue:a(m),"onUpdate:modelValue":e[0]||(e[0]=c=>te(m)?m.value=c:null),type:"text",class:"my-4 mr-4 !px-2 !py-1",placeholder:"Search classes.."},null,8,["modelValue"]),s(f,{onClick:u,class:"my-4 mr-4",title:"Fetch Main Classes."},{default:t(()=>[a(b)?(y(),N(U,{key:0,cssStyle:"h-4 w-4 mr-2"},{default:t(()=>e[2]||(e[2]=[p("Retrieving data...")])),_:1})):(y(),T("p",Se,"Refresh List"))]),_:1})]),s(a(q),{headers:x,items:a(_),"search-field":w,"rows-per-page":10,"header-text-direction":"center","search-value":a(m),"sort-by":J,"sort-type":K,"no-hover":!0,"theme-color":"#312e3d","body-text-direction":"center","table-class-name":"tableCSS mb-12 rounded-lg border dark:border-gray-600 shadow-md"},{"empty-message":t(()=>[s(i,{class:"font-semibold my-4"},{default:t(()=>e[3]||(e[3]=[p("No data present, please click Refresh List button.")])),_:1})]),loading:t(()=>[s(i,{class:"font-semibold my-4"},{default:t(()=>e[4]||(e[4]=[p("Data loading, please wait...")])),_:1})]),"item-ApexClassOrTrigger.Name":t(({ApexClassOrTrigger:c})=>[r("p",Ae,$(c.Name),1)]),"item-totalLines":t(({NumLinesCovered:c,NumLinesUncovered:L})=>[r("p",null,$(c+L),1)]),"item-Coverage":t(({Coverage:c})=>[r("p",{class:E(["font-semibold",{"text-rose-500":c<75,"text-green-600":c>=75}])},$(c)+" %",3)]),"item-Actions":t(({ApexClassOrTriggerId:c,Coverage:L})=>[r("div",Ne,[s(B,{icon:a(Ce),color:"blue",onClick:P=>ae(c),class:"mr-2 my-2",title:"View Test Classes"},null,8,["icon","onClick"]),s(B,{icon:a(he),color:"green",class:"mr-2 my-2",title:"View Coverage & Data",onClick:P=>oe(c,L)},null,8,["icon","onClick"])])]),_:1},8,["items","search-value"]),s(A,{show:a(M),onClose:g,cssStyle:"mt-12 !max-w-screen-lg"},{default:t(()=>[r("button",{type:"button",onClick:g,class:"absolute top-3 end-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"},[s(a(ge),{class:"w-6 h-6"}),e[5]||(e[5]=r("span",{class:"sr-only"},"Close modal",-1))]),r("div",$e,[r("div",Re,[r("div",null,[s(i,{value:"Associated Test Classes for "+a(o)},null,8,["value"]),a(v).length==0?(y(),N(i,{key:0,value:"No classes available.",class:"mt-4"})):z("",!0)])]),a(v).length>0?(y(),T("div",Ve,[s(a(q),{headers:D,items:a(v),"search-field":w,"rows-per-page":10,"header-text-direction":"center","search-value":a(m),"sort-by":J,"sort-type":K,"no-hover":!0,"theme-color":"#312e3d","body-text-direction":"center","table-class-name":"tableCSS mb-12 rounded-lg border dark:border-gray-600 "},{"item-Actions":t(({testClassId:c})=>[r("div",Ee,[s(B,{icon:a(ee),color:"green",onClick:L=>j(c),class:E(["mr-2 my-2",{"animate-spin":a(n)&&a(C)==c}]),title:"View Test Classes"},null,8,["icon","onClick","class"])])]),_:1},8,["items","search-value"])])):z("",!0),r("div",Fe,[s(O,{onClick:g},{default:t(()=>e[6]||(e[6]=[p(" Cancel ")])),_:1}),fe(s(f,{onClick:se,class:"ml-3",title:"Run all test classes."},{default:t(()=>[a(n)?(y(),N(U,{key:0,cssStyle:"h-4 w-4 mr-2"},{default:t(()=>e[7]||(e[7]=[p("Executing Tests... ")])),_:1})):(y(),T("p",Ie,"Run All"))]),_:1},512),[[pe,a(v).length>1]])])])]),_:1},8,["show"])],64)}}}),Oe={class:"flex justify-between"},Pe={class:"flex flex-col"},dt=G({__name:"index",setup(F){xe({title:"Test Class Utility | SFDC Developer Toolkit",ogTitle:"Test Class Utility | SFDC Developer Toolkit",description:"Manage your test classes, execute tests and check errors.",ogDescription:"Manage your test classes, execute tests and check errors."});const _=d(null),w=async m=>{_.value=m};return H(async()=>{}),(m,x)=>{const v=de,D=me;return y(),T(Q,null,[r("div",Oe,[r("div",Pe,[s(v,{class:"mb-2"},{default:t(()=>x[0]||(x[0]=[p("Test Class Utility")])),_:1}),s(D,null,{default:t(()=>x[1]||(x[1]=[p("Explore the Main Classes below to view associated test classes and execute tests. ")])),_:1})]),r("div",null,[s(ue,{onDefaultOrgSelected:w})])]),s(je),s(Me)],64)}}});export{dt as default};
