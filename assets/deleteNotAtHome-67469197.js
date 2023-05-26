import{r,f as t,b as a,P as c}from"./config-23994711.js";const f=async s=>{const o=r(t,"notAtHomes","MaitlandCongregation");try{const e=await a(t,async n=>{n.update(o,{[s.key]:c()})});return console.log(`<<< NOT AT HOME DELETED >>>
Address Details:`,s),e}catch(e){return console.error(e.message),e}};export{f as d};
