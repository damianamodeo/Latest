import{r as f,f as j,b as v,a as h,j as t,F as b,B as g,C as S,u as k,c as A}from"./index-54e444fa.js";import{M as w,d as O,T as M}from"./deleteNotAtHome-0a97c136.js";const E=async({cong:n,mapID:e,suburb:r,street:u,coordinates:l})=>{const s=f(j,n,"maps");try{return await v(j,async i=>{if(!(await i.get(s)).exists())return{};const c=await i.get(s).then(a=>{var x;return(x=a.data())==null?void 0:x.mapDetails});return c[e].suburbs[r].streets.includes(u)||(c[e].suburbs[r].streets=[...c[e].suburbs[r].streets,{name:u,lng:l.lng,lat:l.lat}].sort((a,x)=>a.name.toLowerCase().localeCompare(x.name.toLowerCase()))),i.update(s,{mapDetails:c}),console.log(`<<< NEW STREET ADDED >>>
`,u,`
Latest mapDetails:`,c),c})}catch(o){return console.error(o.message),o}},$=async(n,e,r,u)=>{e==null||e.toString();const l=`https://api.mapbox.com/geocoding/v5/mapbox.places/${n}.json?country=au&bbox=${e==null?void 0:e.join("%2C")}&proximity=151.209889%2C-33.874666&types=address&fuzzyMatch=false&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`;return await fetch(l).then(s=>s.json()).then(s=>s.features)},L=({isOpen:n,closeModal:e,map:r,suburb:u,mapDetails:l})=>{const[s,o]=h.useState({street:"",lng:0,lat:0}),[i,d]=h.useState([]),c=async m=>{if(m.target.value.length<=2){d([]);return}o({street:m.target.value,lng:0,lat:0});const y=await $(s.street,l[r].suburbs[u].bbox,l[r].suburbs[u].name);y&&d(y)},a=()=>{E({cong:"australia_nsw_maitland",mapID:r,suburb:u,street:s.street,coordinates:{lng:s.lng,lat:s.lat}}),e({type:"street",payload:s.street}),o({street:"",lng:0,lat:0}),d([])},x=()=>{e({type:"street",payload:"init"}),o({street:"",lng:0,lat:0})};return t.jsx(w,{isOpen:n,onClose:()=>{},title:"Add Street",height:"lg",children:t.jsx("div",{className:"h-full relative",children:t.jsx(b,{children:t.jsxs("div",{className:"flex justify-evenly m-4",children:[t.jsx(b.Autocomplete,{value:s.street,onChange:m=>{c(m)},onSelect:m=>{console.log(m.props.children[0].props.id),o({street:m.props.children[0].props.children,lng:m.props.children[0].props.id[0],lat:m.props.children[0].props.id[1]})},options:i.map((m,y)=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"font-bold",id:m.center,children:m.text}),t.jsx("div",{className:"text-xs",children:m.place_name.split(", ")[1]})]})),width:"lg"}),t.jsxs("div",{className:"flex gap-2 m-auto absolute bottom-0 justify-evenly w-full",children:[t.jsx(g,{color:"blue",clickAction:x,width:"sm",children:"Cancel"}),i.map(m=>m.text).includes(s.street)&&t.jsx(g,{color:"blue",clickAction:a,width:"sm",children:"Add"})]})]})})})})},_=async({cong:n,mapID:e,suburb:r,bbox:u})=>{const l=f(j,n,"maps");try{const s=await v(j,async o=>{if(!(await o.get(l)).exists())return console.log("<<<NO SUCH DOCUMENT>>>"),{};const d=await o.get(l).then(c=>{var a;return(a=c.data())==null?void 0:a.mapDetails});return d[e].suburbs=[...d[e].suburbs,d[e].suburbs.map(({name:c})=>(console.log(c),c)).includes(r)?null:{streets:[],bbox:u,name:r}].sort((c,a)=>c.name.toLowerCase().localeCompare(a.name.toLowerCase())),o.update(l,{mapDetails:d}),d});return console.log(`<<< NEW SUBURB ADDED >>>
`,r,`
Latest mapDetails:`,s),s}catch(s){return console.error(s.message),s}},W=async(n,e,r)=>await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${n}.json?types=place&proximity=151.209889,-33.874666&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`).then(l=>l.json()).then(l=>l.features),z=({isOpen:n,closeModal:e,map:r})=>{const[u,l]=h.useState(""),[s,o]=h.useState([]),[i,d]=h.useState([]),[c,a]=h.useState([]),x=async p=>{if(l(p.target.value),p.target.value.length<=2){d([]);return}const I=await W(p.target.value);a(I.map((N,D)=>({display:t.jsxs("div",{className:`${D} font-semibold`,children:[N.text,t.jsx("div",{className:"text-sm font-light dark:text-neutral-200",children:N.place_name})]}),...N})))},m=p=>{o(c[p.props.className[0]].bbox),l(p.props.children[0])},y=()=>{_({cong:"australia_nsw_maitland",mapID:r,suburb:u,bbox:s}),e({type:"suburb",payload:u}),l(""),d([])},C=()=>{e({type:"suburb",payload:"init"}),l("")};return h.useEffect(()=>(d(c.map(p=>p.display)),()=>{}),[c]),t.jsx(w,{isOpen:n,onClose:()=>{},title:"Add Suburb",height:"lg",children:t.jsx("div",{className:"h-full relative",children:t.jsx(b,{children:t.jsxs("div",{className:"flex justify-around m-4",children:[t.jsx(b.Autocomplete,{value:u,onChange:p=>x(p),onSelect:m,options:i,width:"lg"}),t.jsxs("div",{className:"flex gap-2 m-auto-xx absolute bottom-0 justify-evenly w-fit",children:[t.jsx(g,{color:"blue",clickAction:C,width:"sm",children:"Cancel"}),i.map(p=>p.props.children[0]).includes(u)&&t.jsx(g,{color:"blue",clickAction:y,width:"sm",children:"Add"})]})]})})})})},Q=async({houseNumber:n,street:e,suburb:r,bbox:u,country:l})=>{const o=`https://api.mapbox.com/geocoding/v5/mapbox.places/${n}%20${e}%20${r}%20.json?country=au&bbox=${u[0]-.015}%2C${u[1]-.015}%2C${u[2]+.015}%2C${u[3]+.015}&types=address&fuzzyMatch=false&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`;return await fetch(o).then(i=>i.json()).then(i=>({lng:i.features[0].center[0],lat:i.features[0].center[1],relevance:i.features[0].relevance}))},R=async({cong:n,mapID:e,lng:r,lat:u,relevance:l,streetCoordinates:s,...o})=>{const i={["id"+Date.now()]:{user:`${localStorage.getItem("initID")}_${localStorage.getItem("username")}`,id:Date.now(),mapNumber:e,relevance:l,...o,...l>.7037?{lng:r,lat:u}:s}},d=f(j,"notAtHomes","MaitlandCongregation");try{const c=await v(j,async a=>{const x="id"+Date.now();return(await a.get(d)).exists()?(a.update(d,i),i):(a.set(d,i),"First Not At Home created successfully")});return console.log(`<<< NEW NOT AT HOME ADDED >>>
Address Details:`,c),c}catch(c){return console.error(c.message),c}},Z=({closeModal:n,address:e,streetCoordinates:r,bbox:u,dispatch:l})=>{const[s,o]=h.useState({lng:0,lat:0,relevance:0}),i=async()=>{const c=await Q({...e,bbox:u});o(c)},d=async c=>{await R({...s,...e,calls:[Date.now()],cong:"australia_nsw_maitland",streetCoordinates:r,letter:c}),e.unitNumber===""&&l({type:"houseNumber",payload:""}),l({type:"unitNumber",payload:""}),n(!1)};return h.useEffect(()=>{i()},[]),t.jsx(w,{isOpen:!0,onClose:()=>{},title:"Confirm Address",height:"lg",children:t.jsx(S,{children:t.jsx("div",{className:"h-full relative text-white",children:t.jsxs(b,{children:[t.jsx("div",{className:"text-center m-4",children:s.relevance===1?t.jsx("span",{className:"text-green-500",children:"Exact match was found."}):t.jsx("span",{className:"text-orange-500",children:"WARNING! An exact match was not found. Please check details before submitting this address."})}),t.jsxs("div",{className:"text-center m-4",children:[e.unitNumber,e.unitNumber?"/":"",e.houseNumber," ",e.street,", ",e.suburb," "]}),t.jsxs(S,{style:"gap-5 mt-4",children:[t.jsx(g,{color:"blue",width:"md",clickAction:()=>n(!1),children:"cancel"}),t.jsx(g,{color:"blue",width:"md",clickAction:()=>d(!0),children:"Letter List"}),t.jsx(g,{color:"blue",width:"md",clickAction:()=>d(!1),children:"Return List"})]})]})})})})},F=(n,e)=>typeof e.payload=="object"?{...n,[e.type]:"adding "+e.type}:{mapID:{mapID:e.payload,suburb:"init",street:"init",houseNumber:"",unitNumber:""},suburb:{...n,suburb:e.payload,street:"init",houseNumber:"",unitNumber:""},street:{...n,street:e.payload,houseNumber:"",unitNumber:""},houseNumber:{...n,houseNumber:e.payload},unitNumber:{...n,unitNumber:e.payload}}[e.type],G=({mapDetails:n})=>{const[e,r]=h.useReducer(F,{mapID:"init",suburb:"init",street:"init",houseNumber:"",unitNumber:"",mapData:{}}),[u,l]=h.useState(!1),s=()=>Math.max(0,n.findIndex(a=>a.id==e.mapID)),o=()=>e.mapID==="init"?0:Math.max(0,n[s()].suburbs.findIndex(a=>a.name===e.suburb)),i=()=>n[s()].suburbs[o()].streets.findIndex(a=>a.name===e.street),d=n.length===0?[]:n[s()].suburbs.map(a=>a.name),c=n.length===0?[]:n[s()].suburbs.length===0?[]:n[s()].suburbs[o()].streets.map(a=>a.name);return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex justify-center p-2",children:[t.jsxs(b,{children:[t.jsx(b.Select,{onChange:a=>{r({type:"mapID",payload:a})},options:n.map(a=>a.id),placeholder:"Map",value:e.mapID,width:"lg",height:"xl"}),t.jsx("div",{className:"h-2"}),e.mapID!=="init"&&t.jsx(b.Select,{onChange:a=>{r({type:"suburb",payload:a})},value:e.suburb,options:[...d,t.jsx("span",{className:"text-blue-400",children:"add new suburb"})],placeholder:"Suburb",width:"lg",height:"xl"}),t.jsx("div",{className:"h-2"}),e.suburb==="init"?null:t.jsx(b.Select,{onChange:a=>{r({type:"street",payload:a})},value:e.street,options:[...c,t.jsx("span",{className:"text-blue-400",children:"add new street"})],placeholder:"Street",width:"lg",height:"xl"}),t.jsx("div",{className:"h-2"}),t.jsxs("div",{className:"flex",children:[e.street==="init"?null:t.jsx(b.Alphanumeric,{value:e.houseNumber,label:"",placeholder:"House",onChange:a=>r({type:"houseNumber",payload:a}),width:"sm",height:"xl"}),t.jsx("div",{className:"grow"}),e.houseNumber===""?null:t.jsx(b.Alphanumeric,{value:e.unitNumber,label:"",placeholder:"Unit",onChange:a=>r({type:"unitNumber",payload:a}),width:"xs",height:"xl"})]}),t.jsx("div",{className:"h-8"}),t.jsx("div",{className:"grid gap-4",children:e.houseNumber===""?null:t.jsx(g,{clickAction:()=>l(!0),width:"full",color:"blue",children:"Add"})})]}),t.jsx(z,{isOpen:e.suburb==="adding suburb",closeModal:r,map:s()}),t.jsx(L,{isOpen:e.street==="adding street",closeModal:r,map:s(),suburb:o(),mapDetails:n}),u&&t.jsx(Z,{closeModal:l,address:e,bbox:n[s()].suburbs[o()].bbox,streetCoordinates:{lng:n[s()].suburbs[o()].streets[i()].lng,lat:n[s()].suburbs[o()].streets[i()].lat},dispatch:r})]})})},H=({action:n,children:e})=>{const s=k(()=>{n()},()=>{console.log("click is triggered")},{shouldPreventDefault:!0,delay:500});return t.jsx("div",{...s,children:e})},X=({notAtHomesList:n})=>t.jsxs("div",{className:"pb-16",children:[t.jsx("div",{className:"text-sm text-center m-2 text-blue-500 dark:text-blue-300",children:"Press and hold to delete"}),n&&n.sort((e,r)=>r.key.localeCompare(e.key)).filter(e=>e.user===`${localStorage.getItem("initID")}_${localStorage.getItem("username")}`).map((e,r)=>t.jsx("div",{children:t.jsx(H,{action:()=>O(e),children:t.jsxs("div",{className:`grid grid-cols-12 h-12 border-b dark:border-darkGrey-700 text-sm text-center ${e.letter?"text-neutral-500 dark:text-neutral-400":"X"}`,children:[t.jsx("div",{className:"col-span-2 px-2 my-auto font-bold",children:e.mapNumber}),t.jsx("div",{className:"col-span-1 px-2 my-auto",children:`${e.unitNumber&&`${e.unitNumber}/`}${e.houseNumber}`}),t.jsx("div",{className:"col-span-4 my-auto",children:`${e.street}`}),t.jsx("div",{className:"col-span-4 my-auto",children:e.suburb})]})})},r))]}),B=()=>{const[n,e]=h.useState([]),[r,u]=h.useState([{key:""}]);return h.useEffect(()=>A(f(j,"notAtHomes","MaitlandCongregation"),s=>{const o=s.data(),i=o?Object.keys(o).map(d=>({key:d,...o[d]})):[];u(i)}),[]),h.useEffect(()=>{const l=A(f(j,"australia_nsw_maitland","maps"),s=>{var o;s.data()&&e((o=s.data())==null?void 0:o.mapDetails)});return()=>{l()}},[]),t.jsx("div",{className:"h-full",children:t.jsx(M,{color:"blue",tabItems:[{title:"Add",content:t.jsx(G,{mapDetails:n})},{title:"List",content:t.jsx(X,{notAtHomesList:r})}]})})};export{B as default};