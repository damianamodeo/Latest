import{j as e,r as p}from"./index-e7722040.js";import{M as w,T as $}from"./Modal-2f48ec5e.js";import{r as v,f as g,b as A,c as S}from"./config-23994711.js";import{A as N}from"./Disclosure-7ff190f7.js";import{B as j}from"./Button-1043ad7e.js";import{d as y}from"./deleteNotAtHome-67469197.js";import"./transition-bdffd011.js";import"./upDownArrow-0fb4aff6.js";const I=async(x,t,m)=>{const h=v(g,"notAtHomes","MaitlandCongregation");try{return await A(g,async r=>{const a=await r.get(h).then(l=>l.data());r.update(h,{...a,[x.key]:{...a[x.key],[t]:m}})})}catch(u){return console.error(u.message),u}},k=({isOpen:x,address:t,setModalOpen:m})=>e.jsxs(w,{isOpen:x,onClose:()=>{},title:"",height:"md",children:[e.jsxs("div",{className:"h-full text-center text-xl dark:text-white",children:[(t==null?void 0:t.unitNumber)&&`${t==null?void 0:t.unitNumber}/`,t==null?void 0:t.houseNumber," ",t==null?void 0:t.street,", ",t==null?void 0:t.suburb]}),e.jsxs("div",{className:"grid place-items-center gap-4",children:[e.jsx(j,{width:"md",clickAction:()=>m(!1),color:"blue",children:"cancel"}),e.jsx(j,{width:"md",clickAction:()=>{I(t,"letter",!0),m(!1)},color:"blue",children:"Letter List"}),e.jsx(j,{width:"md",clickAction:()=>{y(t),m(!1)},color:"blue",children:"Delete"})]})]}),M=({suburbs:x})=>{const[t,m]=p.useState(void 0),[h,u]=p.useState(!1);return e.jsxs("div",{className:"",children:[e.jsx(k,{address:t,isOpen:h,setModalOpen:u}),x.filter(r=>r.suburb!==void 0).sort((r,a)=>a.total-r.total).map((r,a)=>e.jsx("div",{className:"mx-auto w-full max-w-md p-2",children:e.jsx(N,{title:e.jsxs("div",{className:"p-3 text-2xl",children:[`${r.suburb} (${r.total})`," "]}),children:r.streets.sort((l,d)=>l.street.localeCompare(d.street)).map((l,d)=>e.jsx("div",{className:"my-2 mx-6",children:e.jsx(N,{title:e.jsx("div",{className:"p-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded",children:`${l.street} ${l.addresses.length}`}),children:e.jsx("div",{className:" grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))]",children:l.addresses.sort((n,b)=>n.houseNumber-b.houseNumber).map((n,b)=>e.jsx("div",{children:e.jsxs("div",{onClick:()=>{m(n),u(!0)},className:`m-1 py-2 rounded text-center dark:text-white ${n.houseNumber%2===0?"dark:bg-neutral-600 bg-neutral-300":"dark:bg-neutral-800 bg-neutral-400"}`,children:[n.unitNumber&&`${n.unitNumber}/`,n.houseNumber]})},b))})},d)},d))})},a))]})},C=({mapNumbers:x})=>{const[t,m]=p.useState(void 0),[h,u]=p.useState(!1);return e.jsxs("div",{className:"",children:[e.jsx(k,{address:t,isOpen:h,setModalOpen:u}),x.filter(r=>r.mapNumber!==void 0).sort((r,a)=>a.total-r.total).map((r,a)=>e.jsx("div",{className:"mx-auto w-full max-w-md p-2",children:e.jsx(N,{title:e.jsx("div",{className:"p-3 w-full bg-neutral-200 dark:bg-neutral-700 text-2xl",children:`Map ${r.mapNumber} (${r.total})`}),children:r.streets.sort((l,d)=>l.street.localeCompare(d.street)).map((l,d)=>e.jsx("div",{className:"my-2 mx-6",children:e.jsx(N,{title:e.jsx("div",{className:"p-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded",children:`${l.street} ${l.addresses.length}`}),children:e.jsx("div",{className:" grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))]",children:l.addresses.sort((n,b)=>n.houseNumber-b.houseNumber).map((n,b)=>e.jsx("div",{children:e.jsxs("div",{onClick:()=>{m(n),u(!0)},className:`m-1 py-2 rounded text-center dark:text-white ${n.houseNumber%2===0?"dark:bg-neutral-600 bg-neutral-300":"dark:bg-neutral-800 bg-neutral-400"}`,children:[n.unitNumber&&`${n.unitNumber}/`,n.houseNumber]})},b))})},d)},d))})},a))]})},P=({changeSubpage:x})=>{const[t,m]=p.useState([{key:""}]),[h,u]=p.useState([]),[r,a]=p.useState([]);return p.useEffect(()=>S(v(g,"notAtHomes","MaitlandCongregation"),d=>{const n=d.data(),b=n?Object.keys(n).map(s=>({key:s,...n[s]})):[];m(b),u(b.reduce((s,i)=>{if(i.letter)return s;const o=s.findIndex(c=>c.mapNumber===`${i.mapNumber}`);if(o<0)s.push({mapNumber:i.mapNumber,total:1,streets:[{street:i.street,addresses:[i]}]});else{s[o].total=s[o].total+1;const c=s[o].streets.findIndex(f=>f.street===`${i.street}`);c<0?s[o].streets.push({street:i.street,addresses:[i]}):s[o].streets[c].addresses.push(i)}return s},[])),a(b.reduce((s,i)=>{if(i.letter)return s;const o=s.findIndex(c=>c.suburb===`${i.suburb}`);if(o<0)s.push({suburb:i.suburb,total:1,streets:[{street:i.street,addresses:[i]}]});else{s[o].total=s[o].total+1;const c=s[o].streets.findIndex(f=>f.street===`${i.street}`);c<0?s[o].streets.push({street:i.street,addresses:[i]}):s[o].streets[c].addresses.push(i)}return s},[]))}),[]),e.jsx("div",{className:"h-full",children:e.jsx($,{color:"blue",tabItems:[{title:"Suburb",content:e.jsx(M,{suburbs:r})},{title:"Map ID",content:e.jsx(C,{mapNumbers:h})}]})})};export{P as default};