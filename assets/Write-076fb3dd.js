import{a as o,j as t,F as r}from"./index-54e444fa.js";const s=["hello","goodbye","1"],p=({changeSubpage:i})=>{const[l,c]=o.useState(s[0]),[a,n]=o.useState(""),u=a===""?s:s.filter(e=>e.toLowerCase().replace(/\s+/g,"").includes(a.toLowerCase().replace(/\s+/g,"")));return t.jsx("div",{className:"",children:t.jsxs(r,{children:[t.jsx(r.Autocomplete,{value:l,options:u,onSelect:e=>c(e),onChange:e=>n(e.target.value),width:"md"}),"test"]})})};export{p as default};