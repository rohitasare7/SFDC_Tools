import{a as n}from"./COAcYwch.js";import{j as i}from"./Ho11KFCP.js";const t=async r=>{var e;return r!=null&&r.success?r!=null&&r.response?r==null?void 0:r.response:"API_SUCCESS_NO_BODY":r!=null&&r.response&&(r==null?void 0:r.response)=="NO_AUTH_DATA_PRESENT"?(n("No auth data present, please add an org.","Error"),i("/settings/orgs"),r==null?void 0:r.response):((e=r==null?void 0:r.response)==null?void 0:e.errorCode)=="INVALID_SESSION_ID"?(n("Please renew or re-authorize the org.","Error"),i("/settings/orgs"),"AUTH_ERROR"):(console.log("UNKNOWN_ERROR --> "+JSON.stringify(r)),"UNKNOWN_ERROR")},p=async(r,e,o,c="GET")=>{try{const s={query:{sfdcAction:r,recordId:e},method:c};c==="POST"&&(s.body=o);const N=await $fetch("/api/sfdc/hitSFAPI",s);return t(N)}catch(s){return console.error("error --> ",s),n(s,"Error"),"UNKNOWN_ERROR_CATCHBLOCK"}},u=async(r,e)=>{try{const o={query:{org_type:r,refresh_token:e}},c=await $fetch("/api/sfdc/renew",o);return t(c)}catch(o){return console.error("error --> ",o),n(o,"Error"),"UNKNOWN_ERROR_CATCHBLOCK"}},_=async r=>{try{const e={query:{instance_url:r}};return await $fetch("/api/sfdc/revoke",e)}catch(e){return console.error("error --> ",e),n(e,"Error"),"UNKNOWN_ERROR_CATCHBLOCK"}};export{_ as a,p as h,u as r};
