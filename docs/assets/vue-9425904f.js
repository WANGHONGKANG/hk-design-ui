import{e as v,r as h,o as w,c as p,g as o,v as n,s as r,x as a,t as u,_ as k}from"./index-c584f2ba.js";/* empty css                                                            */const g={class:"doc-preview"},m={class:"component"},C={class:"fixed-tools"},f={class:"code"},x={class:"control-tools"},M=v({__name:"vue",props:{code:{}},setup(d){const c=d,t=h(!1),l=()=>{try{navigator.clipboard.writeText(decodeURIComponent(c.code))}catch(s){console.log(s)}},i=()=>{t.value=!t.value};return(s,e)=>(w(),p("div",g,[o("div",m,[n(s.$slots,"default",{},void 0,!0)]),r(o("div",C,[o("div",{class:"tools"},[o("div",{class:"item",onClick:l},e[0]||(e[0]=[o("svg",{fill:"none",height:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",width:"20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),o("div",{class:"item",onClick:i},e[1]||(e[1]=[o("svg",{height:"20",viewBox:"0 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"46"})],-1)]))])],512),[[a,t.value]]),r(o("div",f,[n(s.$slots,"code",{},void 0,!0)],512),[[a,t.value]]),o("div",x,[o("div",{class:"text",onClick:i},u(t.value?"隐藏代码":"展开代码"),1),o("div",{class:"tools"},[o("div",{class:"item",onClick:l},e[2]||(e[2]=[o("svg",{fill:"none",height:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",width:"20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),o("div",{class:"item",onClick:i},e[3]||(e[3]=[o("svg",{height:"20",viewBox:"0 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"46"})],-1)]))])])]))}}),j=k(M,[["__scopeId","data-v-43edb7f1"]]);export{j as C};