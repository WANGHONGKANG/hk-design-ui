import{C as i}from"./vue-30d3eab6.js";import{e as h,r as j,a as u,o as c,f as g,c as A,g as t,b as n,w as d,d as s,u as m,h as v}from"./index-7ab9ed93.js";/* empty css                                                            */const E=h({__name:"README.md.Virtual40d63a12",setup(o){const l=j("");return(a,e)=>{const r=u("hk-time-select");return c(),g(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=p=>l.value=p),placeholder:"请选择时间"},null,8,["modelValue"])}}}),f=h({__name:"README.md.Virtual353bb43f",setup(o){const l=j("");return(a,e)=>{const r=u("hk-time-select");return c(),g(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=p=>l.value=p),placeholder:"请选择时间",start:"00:00",end:"07:00"},null,8,["modelValue"])}}}),_=h({__name:"README.md.Virtual70a5d089",setup(o){const l=j("");return(a,e)=>{const r=u("hk-time-select");return c(),g(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=p=>l.value=p),placeholder:"请选择时间","min-time":"13:00","max-time":"15:00"},null,8,["modelValue"])}}}),k={class:"marked-body"},B={__name:"README",setup(o){return(l,a)=>(c(),A("div",k,[a[3]||(a[3]=t("h1",{id:"timeselect-时间选择"},"TimeSelect 时间选择",-1)),a[4]||(a[4]=t("h3",{id:"基础用法"},"基础用法",-1)),n(m(i),{code:"%3Ctemplate%3E%0A%20%20%3Chk-time-select%20v-model%3D%22value%22%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A"},{code:d(()=>a[0]||(a[0]=[t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"hk-time-select"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请选择时间"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1)])),default:d(()=>[n(E)]),_:1}),a[5]||(a[5]=t("h3",{id:"选择开始和结束时间"},"选择开始和结束时间",-1)),n(m(i),{code:"%3Ctemplate%3E%0A%20%20%3Chk-time-select%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20start%3D%2200%3A00%22%0A%20%20%20%20end%3D%2207%3A00%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A"},{code:d(()=>a[1]||(a[1]=[t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"hk-time-select"),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
    `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请选择时间"'),s(`
    `),t("span",{class:"hljs-attr"},"start"),s("="),t("span",{class:"hljs-string"},'"00:00"'),s(`
    `),t("span",{class:"hljs-attr"},"end"),s("="),t("span",{class:"hljs-string"},'"07:00"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1)])),default:d(()=>[n(f)]),_:1}),a[6]||(a[6]=t("h3",{id:"固定时间范围"},"固定时间范围",-1)),n(m(i),{code:"%3Ctemplate%3E%0A%20%20%3Chk-time-select%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4%22%0A%20%20%20%20min-time%3D%2213%3A00%22%0A%20%20%20%20max-time%3D%2215%3A00%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A%0A"},{code:d(()=>a[2]||(a[2]=[t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"hk-time-select"),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
    `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请选择时间"'),s(`
    `),t("span",{class:"hljs-attr"},"min-time"),s("="),t("span",{class:"hljs-string"},'"13:00"'),s(`
    `),t("span",{class:"hljs-attr"},"max-time"),s("="),t("span",{class:"hljs-string"},'"15:00"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
  `),t("span",{class:"hljs-keyword"},"const"),s(" value = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1)])),default:d(()=>[n(_)]),_:1}),a[7]||(a[7]=v('<h2 id="api">API</h2><h3 id="timeselect-props">TimeSelect Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>显示的值</td></tr><tr><td>start</td><td>string</td><td>开始时间 09:00</td></tr><tr><td>end</td><td>string</td><td>结束时间 18:00</td></tr><tr><td>step</td><td>string</td><td>间隔时间 00:30</td></tr><tr><td>min-time</td><td>string</td><td>最早时间点，早于该时间的时间段将被禁用</td></tr><tr><td>max-time</td><td>string</td><td>最晚时间点，晚于该时间的时间段将被禁用</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0默认　1向下　2向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon图标</td></tr></tbody></table><h3 id="timeselect-event">TimeSelect Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>modelValue改变事件</td></tr><tr><td>toggleClick</td><td>点击展开收起事件</td></tr><tr><td>clear</td><td>清空事件</td></tr></tbody></table>',5))]))}};export{B as default};