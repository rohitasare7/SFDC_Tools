import{_}from"./B4TJsizH.js";import{a as u}from"./COAcYwch.js";import{f as p,o as d,c as l,d as n,w as r,e as a,u as t,b as m,v as f}from"./Ho11KFCP.js";import"./BhtQlZEJ.js";const g={class:"grid gap-4 grid-cols-3"},F=p({__name:"item",setup(C){const o=f(),i=o.public.SF_CLIENT_ID,c=o.public.SF_REDIRECT_URI;return(x,e)=>{const s=_;return d(),l("div",g,[n(s,{to:`https://login.salesforce.com/services/oauth2/authorize?client_id=${t(i)}&redirect_uri=${t(c)}&response_type=code&prompt=select_account`,target:"_self",external:""},{default:r(()=>e[1]||(e[1]=[a("Login to SF")])),_:1},8,["to"]),m("button",{onClick:e[0]||(e[0]=I=>t(u)("ToastMessageHere","Success"))},"Click for Toast"),n(s,{to:"/"},{default:r(()=>e[2]||(e[2]=[a("home")])),_:1})])}}});export{F as default};
