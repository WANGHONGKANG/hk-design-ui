import{C as h}from"./vue-30d3eab6.js";import{e as j,r as g,a as A,o,f,c as k,g as a,b as r,w as p,d as s,u,h as E}from"./index-7ab9ed93.js";/* empty css                                                            */const D=j({__name:"README.md.Virtualeabf512a",setup(i){const t=g(new Date().toLocaleTimeString());return(d,e)=>{const l=A("hk-time-picker");return o(),f(l,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n)},null,8,["modelValue"])}}}),b=j({__name:"README.md.Virtualf0eff077",setup(i){const t=g(new Date().toLocaleTimeString());return(d,e)=>{const l=A("hk-time-picker");return o(),f(l,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n),filterable:""},null,8,["modelValue"])}}}),C=j({__name:"README.md.Virtualb4dfa50d",setup(i){const t=g(new Date().toLocaleTimeString()),d=(e,l)=>{const{a:n,h:m}=e;if(l==="h")return![9,10,11,12,14,15,16,17,18].includes(n);if(l==="m")return m===9&&n<30||m===18&&n>30};return(e,l)=>{const n=A("hk-time-picker");return o(),f(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=m=>t.value=m),"disabled-time":d},null,8,["modelValue"])}}}),v=j({__name:"README.md.Virtual8c2822c0",setup(i){const c=g([]);return(t,d)=>{const e=A("hk-time-picker");return o(),f(e,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=l=>c.value=l),"is-range":""},null,8,["modelValue"])}}}),_={class:"marked-body"},B={__name:"README",setup(i){return(c,t)=>(o(),k("div",_,[t[4]||(t[4]=a("h1",{id:"timepicker-时间选择"},"TimePicker 时间选择",-1)),t[5]||(t[5]=a("h3",{id:"基础用法"},"基础用法",-1)),r(u(h),{code:"%3Ctemplate%3E%0A%20%20%3Chk-time-picker%20v-model%3D%22value%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20date%20%3D%20new%20Date()%0A%20%20const%20value%20%3D%20ref(date.toLocaleTimeString())%0A%3C%2Fscript%3E%0A"},{code:p(()=>t[0]||(t[0]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(date."),a("span",{class:"hljs-title function_"},"toLocaleTimeString"),s(`())
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:p(()=>[r(D)]),_:1}),t[6]||(t[6]=a("h3",{id:"可输入"},"可输入",-1)),r(u(h),{code:"%3Ctemplate%3E%0A%20%20%3Chk-time-picker%20v-model%3D%22value%22%20filterable%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20date%20%3D%20new%20Date()%0A%20%20const%20value%20%3D%20ref(date.toLocaleTimeString())%0A%3C%2Fscript%3E%0A"},{code:p(()=>t[1]||(t[1]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"filterable"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(date."),a("span",{class:"hljs-title function_"},"toLocaleTimeString"),s(`())
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:p(()=>[r(b)]),_:1}),t[7]||(t[7]=a("h3",{id:"限制时间范围"},"限制时间范围",-1)),t[8]||(t[8]=a("p",null,[s("使用"),a("code",null,"disabled-time"),s("限制时间选择范围")],-1)),t[9]||(t[9]=a("p",null,"示例限制时间范围上午 9-12，下午 14-18 点",-1)),t[10]||(t[10]=a("p",null,"选择 9 点时，9:30 可选，选择 18 点时，18:30 之前可选",-1)),r(u(h),{code:"%3Ctemplate%3E%0A%20%20%3Chk-time-picker%20v-model%3D%22value%22%20%3Adisabled-time%3D%22disabledHours%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20date%20%3D%20new%20Date()%0A%20%20const%20value%20%3D%20ref(date.toLocaleTimeString())%0A%0A%20%20interface%20Time%20%7B%0A%20%20%20%20h%3A%20number%20%2F%2F%20%E6%97%B6%0A%20%20%20%20m%3A%20number%20%2F%2F%20%E5%88%86%0A%20%20%20%20s%3A%20number%20%2F%2F%20%E7%A7%92%0A%20%20%20%20a%3A%20number%20%2F%2F%20%E5%BD%93%E5%89%8D%E5%80%BC%0A%20%20%7D%0A%0A%20%20const%20disabledHours%20%3D%20(time%3A%20Time%2C%20type%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20const%20%7B%20a%2C%20h%20%7D%20%3D%20time%0A%20%20%20%20if%20(type%20%3D%3D%3D%20'h')%20%7B%0A%20%20%20%20%20%20%2F%2F%20return%20(a%20%3C%209%20%7C%7C%20a%20%3E%2012)%20%26%26%20(a%20%3C%2014%20%7C%7C%20a%20%3E%2018)%0A%20%20%20%20%20%20return%20!%5B9%2C%2010%2C%2011%2C%2012%2C%2014%2C%2015%2C%2016%2C%2017%2C%2018%5D.includes(a)%20%2F%2F%20%E8%BF%94%E5%9B%9E9-12%2014-18%0A%20%20%20%20%7D%0A%20%20%20%20if%20(type%20%3D%3D%3D%20'm')%20%7B%0A%20%20%20%20%20%20%2F%2F%20%E4%BB%8E9%3A30%E5%BC%80%E5%A7%8B%E5%8F%AF%E9%80%89%EF%BC%8C18%E7%82%B9%E6%97%B6%E5%88%86%E9%92%9F%E6%9C%80%E5%A4%A7%E5%8F%AF%E9%80%8930%E5%88%86%E9%92%9F%0A%20%20%20%20%20%20return%20(h%20%3D%3D%3D%209%20%26%26%20a%20%3C%2030)%20%7C%7C%20(h%20%3D%3D%3D%2018%20%26%26%20a%20%3E%2030)%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:p(()=>t[2]||(t[2]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":disabled-time"),s("="),a("span",{class:"hljs-string"},'"disabledHours"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" date = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Date"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("(date."),a("span",{class:"hljs-title function_"},"toLocaleTimeString"),s(`())

  interface `),a("span",{class:"hljs-title class_"},"Time"),s(` {
    `),a("span",{class:"hljs-attr"},"h"),s(": number "),a("span",{class:"hljs-comment"},"// 时"),s(`
    `),a("span",{class:"hljs-attr"},"m"),s(": number "),a("span",{class:"hljs-comment"},"// 分"),s(`
    `),a("span",{class:"hljs-attr"},"s"),s(": number "),a("span",{class:"hljs-comment"},"// 秒"),s(`
    `),a("span",{class:"hljs-attr"},"a"),s(": number "),a("span",{class:"hljs-comment"},"// 当前值"),s(`
  }

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"disabledHours"),s(" = ("),a("span",{class:"hljs-params"},"time: Time, type: string"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(` { a, h } = time
    `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'h'"),s(`) {
      `),a("span",{class:"hljs-comment"},"// return (a < 9 || a > 12) && (a < 14 || a > 18)"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(" !["),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"11"),s(", "),a("span",{class:"hljs-number"},"12"),s(", "),a("span",{class:"hljs-number"},"14"),s(", "),a("span",{class:"hljs-number"},"15"),s(", "),a("span",{class:"hljs-number"},"16"),s(", "),a("span",{class:"hljs-number"},"17"),s(", "),a("span",{class:"hljs-number"},"18"),s("]."),a("span",{class:"hljs-title function_"},"includes"),s("(a) "),a("span",{class:"hljs-comment"},"// 返回9-12 14-18"),s(`
    }
    `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'m'"),s(`) {
      `),a("span",{class:"hljs-comment"},"// 从9:30开始可选，18点时分钟最大可选30分钟"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(" (h === "),a("span",{class:"hljs-number"},"9"),s(" && a < "),a("span",{class:"hljs-number"},"30"),s(") || (h === "),a("span",{class:"hljs-number"},"18"),s(" && a > "),a("span",{class:"hljs-number"},"30"),s(`)
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:p(()=>[r(C)]),_:1}),t[11]||(t[11]=a("h3",{id:"区间选择"},"区间选择",-1)),r(u(h),{code:"%3Ctemplate%3E%0A%20%20%3Chk-time-picker%20v-model%3D%22modelValue%22%20is-range%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20modelValue%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{code:p(()=>t[3]||(t[3]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-time-picker"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"modelValue"'),s(),a("span",{class:"hljs-attr"},"is-range"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" modelValue = "),a("span",{class:"hljs-title function_"},"ref"),s(`([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:p(()=>[r(v)]),_:1}),t[12]||(t[12]=E('<h2 id="api">API</h2><h3 id="timeselect-props">TimeSelect Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>显示的值</td></tr><tr><td>disabled</td><td>boolean/false</td><td>禁用状态</td></tr><tr><td>width</td><td>string</td><td>组件宽</td></tr><tr><td>clear</td><td>boolean/false</td><td>是否可清空</td></tr><tr><td>filterable</td><td>boolean/false</td><td>可输入</td></tr><tr><td>size</td><td>string</td><td>大小</td></tr><tr><td>placeholder</td><td>string</td><td>占位符</td></tr><tr><td>direction</td><td>number</td><td>下拉的方向动画，0 默认　 1 向下　 2 向上</td></tr><tr><td>downClass</td><td>string</td><td>下拉面板类</td></tr><tr><td>downStyle</td><td>object</td><td>下拉面板样式</td></tr><tr><td>appendToBody</td><td>boolean/false</td><td>下拉插入到 body</td></tr><tr><td>downHeight</td><td>number</td><td>下拉的面板的高</td></tr><tr><td>icon</td><td>string</td><td>icon 图标</td></tr></tbody></table><h3 id="timeselect-event">TimeSelect Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>toggleClick</td><td>点击展开收起事件</td></tr><tr><td>clear</td><td>清空事件</td></tr><tr><td>blur</td><td>失焦事件</td></tr></tbody></table>',5))]))}};export{B as default};
