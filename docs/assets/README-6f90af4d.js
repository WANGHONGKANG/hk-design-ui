import{C as g}from"./vue-9425904f.js";import{e as A,r as c,a as j,o,c as u,b as e,f,g as a,t as D,w as p,d as s,u as d,h as E}from"./index-c584f2ba.js";/* empty css                                                            */const _=A({__name:"README.md.Virtuald25a9ff0",setup(h){const n=c(1);return(t,r)=>{const l=j("hk-pagination");return o(),u("div",null,[e(l,{total:50,current:n.value},null,8,["current"])])}}}),v={__name:"README.md.Virtual833150eb",setup(h){const n=c(1),t=c([10,20,30,50]),r=l=>{alert(l)};return(l,m)=>{const i=j("hk-pagination");return o(),f(i,{total:1050,current:n.value,showJumper:!0,pageSizes:t.value,pageSize:10,showTotal:!0,onChangePageSizes:r},null,8,["current","pageSizes"])}}},C={__name:"README.md.Virtual2470c49d",setup(h){const n=c(1),t=r=>{alert(r)};return(r,l)=>{const m=j("hk-pagination");return o(),u("div",null,[a("p",null,"当前页："+D(n.value),1),e(m,{total:50,current:n.value,"onUpdate:current":l[0]||(l[0]=i=>n.value=i),onChange:t,pageSize:10},null,8,["current"])])}}},S={class:"marked-body"},w={__name:"README",setup(h){return(n,t)=>(o(),u("div",S,[t[3]||(t[3]=a("h1",{id:"pagination-分页"},"Pagination 分页",-1)),t[4]||(t[4]=a("h3",{id:"基础用法"},"基础用法",-1)),e(d(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Chk-pagination%20%3Atotal%3D%2250%22%20%3Acurrent%3D%22page1%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20page1%20%3D%20ref(1)%0A%3C%2Fscript%3E%0A"},{code:p(()=>t[0]||(t[0]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-pagination"),s(),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"page1"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" page1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:p(()=>[e(_)]),_:1}),t[5]||(t[5]=a("h3",{id:"其他选项参数"},"其他选项参数",-1)),e(d(g),{code:"%3Ctemplate%3E%0A%20%20%3Chk-pagination%0A%20%20%20%20%3Atotal%3D%221050%22%0A%20%20%20%20%3Acurrent%3D%22page1%22%0A%20%20%20%20%3AshowJumper%3D%22true%22%0A%20%20%20%20%3ApageSizes%3D%22pageSizes%22%0A%20%20%20%20%3ApageSize%3D%2210%22%0A%20%20%20%20%3AshowTotal%3D%22true%22%0A%20%20%20%20%40changePageSizes%3D%22changePageSizes%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20page1%20%3D%20ref(1)%0A%20%20const%20pageSizes%20%3D%20ref(%5B10%2C%2020%2C%2030%2C%2050%5D)%0A%20%20const%20changePageSizes%20%3D%20(page)%20%3D%3E%20%7B%0A%20%20%20%20alert(page)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:p(()=>t[1]||(t[1]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-pagination"),s(`
    `),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"1050"'),s(`
    `),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"page1"'),s(`
    `),a("span",{class:"hljs-attr"},":showJumper"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},":pageSizes"),s("="),a("span",{class:"hljs-string"},'"pageSizes"'),s(`
    `),a("span",{class:"hljs-attr"},":pageSize"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
    `),a("span",{class:"hljs-attr"},":showTotal"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    @`),a("span",{class:"hljs-attr"},"changePageSizes"),s("="),a("span",{class:"hljs-string"},'"changePageSizes"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" page1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" pageSizes = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"20"),s(", "),a("span",{class:"hljs-number"},"30"),s(", "),a("span",{class:"hljs-number"},"50"),s(`])
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changePageSizes"),s(" = ("),a("span",{class:"hljs-params"},"page"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s(`(page)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:p(()=>[e(v)]),_:1}),t[6]||(t[6]=a("h3",{id:"事件"},"事件",-1)),e(d(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E5%BD%93%E5%89%8D%E9%A1%B5%EF%BC%9A%7B%7B%20page%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Chk-pagination%0A%20%20%20%20%20%20%3Atotal%3D%2250%22%0A%20%20%20%20%20%20v-model%3Acurrent%3D%22page%22%0A%20%20%20%20%20%20%40change%3D%22change%22%0A%20%20%20%20%20%20%3ApageSize%3D%2210%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20page%20%3D%20ref(1)%0A%20%20const%20change%20%3D%20(page)%20%3D%3E%20%7B%0A%20%20%20%20alert(page)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:p(()=>t[2]||(t[2]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("当前页：{{ page }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-pagination"),s(`
      `),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model:current"),s("="),a("span",{class:"hljs-string"},'"page"'),s(`
      @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(`
      `),a("span",{class:"hljs-attr"},":pageSize"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" page = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"1"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"page"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s(`(page)
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:p(()=>[e(C)]),_:1}),t[7]||(t[7]=E('<h2 id="api">API</h2><h3 id="pagination">Pagination</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>current</td><td>number</td><td>当前页数，支持v-model</td></tr><tr><td>total</td><td>number</td><td>总条目数</td></tr><tr><td>pageSize</td><td>number</td><td>每页显示条数</td></tr><tr><td>pagerCount</td><td>number/5</td><td>页码按钮的数量，当总页数超过该值时会折叠</td></tr><tr><td>showJumper</td><td>boolean/false</td><td>快速跳转</td></tr><tr><td>pageSizes</td><td>number[]</td><td>每页显示个数选择器的选项设置</td></tr><tr><td>showTotal</td><td>boolean/false</td><td>显示总记录条数</td></tr><tr><td>hideSinglePage</td><td>boolean/false</td><td>当小于或只有一页时是否隐藏显示</td></tr><tr><td>format</td><td>boolean/false</td><td>数值转千分制显示</td></tr></tbody></table><h3 id="pagination-event">Pagination Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>changePageSizes</td><td>每页显示条数改变事件</td></tr><tr><td>change</td><td>页码点击改变事件</td></tr></tbody></table>',5))]))}};export{w as default};
