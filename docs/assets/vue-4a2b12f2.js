import{e as h,r as v,o as p,c as _,g as o,v as c,s as d,x as l,t as w,y as u,z as k,_ as g}from"./index-dd3aacc0.js";/* empty css                                                            */const i=e=>(u("data-v-43edb7f1"),e=e(),k(),e),m={class:"doc-preview"},C={class:"component"},f={class:"fixed-tools"},x=i(()=>o("svg",{fill:"none",height:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",width:"20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),M=[x],B=i(()=>o("svg",{height:"20",viewBox:"0 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"46"})],-1)),S=[B],I={class:"code"},b={class:"control-tools"},j=i(()=>o("svg",{fill:"none",height:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",width:"20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),y=[j],V=i(()=>o("svg",{height:"20",viewBox:"0 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"46"})],-1)),D=[V],H=h({__name:"vue",props:{code:{}},setup(e){const r=e,s=v(!1),a=()=>{try{navigator.clipboard.writeText(decodeURIComponent(r.code))}catch(t){console.log(t)}},n=()=>{s.value=!s.value};return(t,L)=>(p(),_("div",m,[o("div",C,[c(t.$slots,"default",{},void 0,!0)]),d(o("div",f,[o("div",{class:"tools"},[o("div",{class:"item",onClick:a},M),o("div",{class:"item",onClick:n},S)])],512),[[l,s.value]]),d(o("div",I,[c(t.$slots,"code",{},void 0,!0)],512),[[l,s.value]]),o("div",b,[o("div",{class:"text",onClick:n},w(s.value?"隐藏代码":"展开代码"),1),o("div",{class:"tools"},[o("div",{class:"item",onClick:a},y),o("div",{class:"item",onClick:n},D)])])]))}}),E=g(H,[["__scopeId","data-v-43edb7f1"]]);export{E as C};
