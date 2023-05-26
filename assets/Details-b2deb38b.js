import{r as m,j as e,V as u}from"./index-e7722040.js";import{F as i}from"./Form-23a38f21.js";import{C as p}from"./Center-e9bcd863.js";import{B as h}from"./Button-1043ad7e.js";import{r as g,f as c,b as x}from"./config-23994711.js";import"./transition-bdffd011.js";import"./upDownArrow-0fb4aff6.js";const f=()=>{const[t,r]=m.useState(localStorage.getItem("username")),a=s=>{localStorage.setItem("username",s.target.value),r(localStorage.getItem("username"))};return e.jsx("div",{className:"",children:e.jsx(i,{children:e.jsx(i.Text,{label:"Username",value:t,width:"md",onChange:a})})})},D=()=>{const t=[{date:"May 13",changes:["* add return lists","* add ability to delete address"]},{date:"May 3",changes:["+ add ability to submit to letter list","+ restrict special characters in house or unit number fields","+ use street coordinates when address match is poor","# fix use of letters in house or unit number fields"]},{date:"April 26",changes:["+ add lazy loading (performance)","# fix Select component bottom margin"]}];return e.jsx("div",{className:"m-6",children:t.map((r,a)=>e.jsxs("div",{className:"mt-8 font-bold",children:[r.date,r.changes.map((s,n)=>e.jsx("div",{className:"mt-1 font-light",children:s},n))]},a))})},b=async({mapID:t,cong:r})=>{if(t.length<1)return;const a=g(c,r,"maps");try{const s=await x(c,async n=>{if(!(await n.get(a)).exists())return n.set(a,{mapDetails:[{id:t,suburbs:[]}]}),{};const d=[...await n.get(a).then(l=>{var o;return(o=l.data())==null?void 0:o.mapDetails}),{suburbs:[],id:t}].sort((l,o)=>l.id.toLowerCase().localeCompare(o.id.toLowerCase()));return n.update(a,{mapDetails:d}),d});return console.log(`<<< NEW MAP ADDED >>>
`,t,`
Latest mapDetails:`,s),s}catch(s){return console.error("<<< NEW MAP NOT ADDED >>>",s.message),s}},j=()=>{const[t,r]=m.useState(""),a=async()=>{b({mapID:t,cong:"australia_nsw_maitland"}),r("")};return e.jsx(i,{children:e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i.Text,{label:"",value:t,onChange:s=>r(s.target.value),width:"md",placeholder:"Enter new Map ID"}),e.jsx(h,{color:"darkblue",width:"md",clickAction:a,children:"Add"})]})})},S=({changeSubpage:t})=>e.jsx("div",{className:"h-full overflow-y-auto",children:e.jsxs(p,{children:[e.jsx(u,{}),e.jsx(f,{}),e.jsx(D,{}),e.jsx(j,{})]})});export{S as default};
