import{_ as i}from"./CrT3yI36.js";import{u as l}from"./bkTsuWyN.js";import{f as d,h as f,r as n,i as h,u as t,o as m,x as p}from"./Ho11KFCP.js";import{h as _}from"./ycDIoMx1.js";import{b as D}from"./COAcYwch.js";import"./CuTdjjvY.js";import"./tyoosHN1.js";import"./C1WC2wNv.js";import"./ChDmTMo_.js";import"./CKP9D31c.js";import"./D7mtGAGI.js";import"./C0MpYsF0.js";import"./PYXEAhwZ.js";import"./BCUAfS-d.js";import"./FIoW0_7y.js";import"./9nx4tXco.js";import"./BA2uKlca.js";import"./D97VTyYW.js";import"./DW2Y3oEk.js";import"./BQImT8Uo.js";import"./DLsSqBkb.js";import"./BmYiYK0q.js";import"./Z-iyx2tQ.js";import"./BhtQlZEJ.js";const G=d({__name:"[id]",setup(y){l({title:"Execute Anonymous Apex | SFDC Developer Toolkit",ogTitle:"Execute Anonymous Apex | SFDC Developer Toolkit",description:"Execute ananoymous salesforce apex code, save and share with your team.",ogDescription:"Execute ananoymous salesforce apex code, save and share with your team."});const a=f().params.id,o=n({}),r=n(!1),c=async s=>{const e=await _({table:"tool_json",fields:"id,name,created_at,shared,json,user(name)",filter:{compareTo:"id",CompareValue:s}});console.log("json tool resp --> "+JSON.stringify(e)),e.length>0?(o.value={json:e[0].json,id:e[0].id,name:e[0].name,shared:e[0].shared,createdBy:e[0].user.name,createdDate:D(e[0].created_at)},r.value=!0):o.value={json:"No JSON Code Found",id:0,name:"NA"}};return h(async()=>{console.log("recordId --> "+a),a&&await c(a)}),(s,u)=>t(r)?(m(),p(i,{key:0,searchData:t(o)},null,8,["searchData"])):(m(),p(i,{key:1,searchData:t(o)},null,8,["searchData"]))}});export{G as default};
