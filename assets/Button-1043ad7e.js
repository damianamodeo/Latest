import{r as t,j as k}from"./index-e7722040.js";import{w as v,k as m}from"./transition-bdffd011.js";const p=(r,b,{shouldPreventDefault:a=!0,delay:s=300}={})=>{const[d,l]=t.useState(!1),o=t.useRef(),n=t.useRef(),g=t.useCallback(e=>{a&&e.target&&(e.target.addEventListener("touchend",i,{passive:!1}),n.current=e.target),o.current=setTimeout(()=>{r(e),l(!0)},s)},[r,s,a]),u=t.useCallback((e,h=!0)=>{o.current&&clearTimeout(o.current),h&&!d&&b(),l(!1),a&&n.current&&n.current.removeEventListener("touchend",i)},[a,b,d]);return{onMouseDown:e=>g(e),onTouchStart:e=>g(e),onMouseUp:e=>u(e),onMouseLeave:e=>u(e,!1),onTouchEnd:e=>u(e)}},f=r=>"touches"in r,i=r=>{f(r)&&r.touches.length<2&&r.preventDefault&&r.preventDefault()},y={slate:"bg-slate-500 hover:bg-slate-400 dark:bg-slate-400 dark:hover:bg-slate-400 ",gray:"bg-gray-500 hover:bg-gray-400 dark:bg-gray-300 dark:hover:bg-gray-400 ",zinc:"bg-zinc-500 hover:bg-zinc-400 dark:bg-zinc-300 dark:hover:bg-zinc-400 ",neutral:"bg-neutral-500 hover:bg-neutral-400 dark:bg-neutral-300 dark:hover:bg-neutral-400 ",stone:"bg-stone-500 hover:bg-stone-400 dark:bg-stone-300 dark:hover:bg-stone-400 ",red:"bg-red-500 hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-400 ",orange:"bg-orange-500 hover:bg-orange-400 dark:bg-orange-300 dark:hover:bg-orange-400 ",amber:"bg-amber-500 hover:bg-amber-400 dark:bg-amber-300 dark:hover:bg-amber-400 ",yellow:"bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 ",lime:"bg-lime-500 hover:bg-lime-400 dark:bg-lime-300 dark:hover:bg-lime-400 ",green:"bg-green-500 hover:bg-green-400 dark:bg-green-300 dark:hover:bg-green-400 ",emerald:"bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-300 dark:hover:bg-emerald-400 ",teal:"bg-teal-500 hover:bg-teal-400 dark:bg-teal-300 dark:hover:bg-teal-400 ",cyan:"bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-300 dark:hover:bg-cyan-400 ",sky:"bg-sky-500 hover:bg-sky-400 dark:bg-sky-300 dark:hover:bg-sky-400 ",blue:"bg-blue-500 hover:bg-blue-400 dark:bg-blue-300 dark:hover:bg-blue-400 ",darkblue:"bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 ",indigo:"bg-indigo-500 hover:bg-indigo-400 dark:bg-indigo-300 dark:hover:bg-indigo-400 ",violet:"bg-violet-500 hover:bg-violet-400 dark:bg-violet-300 dark:hover:bg-violet-400 ",purple:"bg-purple-500 hover:bg-purple-400 dark:bg-purple-300 dark:hover:bg-purple-400 ",fuchsia:"bg-fuchsia-500 hover:bg-fuchsia-400 dark:bg-fuchsia-300 dark:hover:bg-fuchsia-400 ",pink:"bg-pink-500 hover:bg-pink-400 dark:bg-pink-300 dark:hover:bg-pink-400 ",rose:"bg-rose-500 hover:bg-rose-400 dark:bg-rose-300 dark:hover:bg-rose-400 "},E=({clickAction:r,longPressAction:b,children:a,color:s,width:d,delay:l,submit:o,height:n="md"})=>{const g=t.useRef(document.createElement("button")),c=p(()=>{b&&b(),o&&g.current.click()},()=>{r&&r(),o&&g.current.click()},{shouldPreventDefault:!0,delay:l});return k.jsx(k.Fragment,{children:k.jsx("button",{...c,type:`${o?"submit":"button"}`,className:`${y[s]} ${v[d]} ${m[n]} w- rounded text-white font-medium px-5 py-2.5 focus:outline-none dark:text-black`,ref:g,children:a})})};export{E as B,p as u};