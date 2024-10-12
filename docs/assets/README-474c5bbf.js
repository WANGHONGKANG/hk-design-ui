import{C as g}from"./vue-4a2b12f2.js";import{e as b,r as d,a as h,o as j,c as u,b as n,w as l,d as s,u as f,g as t,h as v}from"./index-dd3aacc0.js";/* empty css                                                            */const _=b({__name:"README.md.Virtualc9d793b9",setup(m){const i=d("left"),o=d(!1),c=p=>{i.value=p,o.value=!0};return(p,a)=>{const r=h("ak-button"),k=h("ak-drawer");return j(),u("div",null,[n(r,{onClick:a[0]||(a[0]=e=>c("left"))},{default:l(()=>[s("左边")]),_:1}),n(r,{onClick:a[1]||(a[1]=e=>c("top"))},{default:l(()=>[s("项部")]),_:1}),n(r,{onClick:a[2]||(a[2]=e=>c("right"))},{default:l(()=>[s("右边")]),_:1}),n(r,{onClick:a[3]||(a[3]=e=>c("bottom"))},{default:l(()=>[s("底部")]),_:1}),n(k,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value=e),title:"title",direction:i.value},{default:l(()=>[s("this content")]),_:1},8,["modelValue","direction"])])}}}),A={class:"marked-body"},E=t("h1",{id:"drawer-抽屉对话框"},"Drawer 抽屉对话框",-1),C=t("h3",{id:"基本用法"},"基本用法",-1),D=t("p",null,[s("用法和所有参数同"),t("code",null,"Dialog"),s("一样")],-1),w=t("pre",{class:"language-xml"},[t("code",{class:"hljs"},[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"open('left')"`),s(">")]),s("左边"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"open('top')"`),s(">")]),s("项部"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"open('right')"`),s(">")]),s("右边"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"open('bottom')"`),s(">")]),s("底部"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"ak-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"ak-drawer"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"visible"'),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"title"'),s(),t("span",{class:"hljs-attr"},":direction"),s("="),t("span",{class:"hljs-string"},'"direction"'),s(`
      >`)]),s(`this content</hk-drawer
    >
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"lang"),s("="),t("span",{class:"hljs-string"},'"ts"'),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"language-javascript"},[s(`
  `),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

  `),t("span",{class:"hljs-keyword"},"const"),s(" direction = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-string"},"'left'"),s(`)
  `),t("span",{class:"hljs-keyword"},"const"),s(" visible = "),t("span",{class:"hljs-title function_"},"ref"),s("("),t("span",{class:"hljs-literal"},"false"),s(`)
  `),t("span",{class:"hljs-keyword"},"const"),s(),t("span",{class:"hljs-title function_"},"open"),s(" = ("),t("span",{class:"hljs-params"},"type: string"),s(`) => {
    direction.`),t("span",{class:"hljs-property"},"value"),s(` = type
    visible.`),t("span",{class:"hljs-property"},"value"),s(" = "),t("span",{class:"hljs-literal"},"true"),s(`
  }
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),y=v('<h2 id="api">API</h2><h3 id="drawer">Drawer</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>direction</td><td>string/right</td><td>显示方向，left/right/top/bottom</td></tr><tr><td>-</td><td>-</td><td>其他所有参数同<a href="/#/dialog">dialog</a></td></tr></tbody></table>',3),x={__name:"README",setup(m){return(i,o)=>(j(),u("div",A,[E,C,D,n(f(g),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-button%20%40click%3D%22open('left')%22%3E%E5%B7%A6%E8%BE%B9%3C%2Fak-button%3E%0A%20%20%20%20%3Cak-button%20%40click%3D%22open('top')%22%3E%E9%A1%B9%E9%83%A8%3C%2Fak-button%3E%0A%20%20%20%20%3Cak-button%20%40click%3D%22open('right')%22%3E%E5%8F%B3%E8%BE%B9%3C%2Fak-button%3E%0A%20%20%20%20%3Cak-button%20%40click%3D%22open('bottom')%22%3E%E5%BA%95%E9%83%A8%3C%2Fak-button%3E%0A%20%20%20%20%3Cak-drawer%20v-model%3D%22visible%22%20title%3D%22title%22%20%3Adirection%3D%22direction%22%0A%20%20%20%20%20%20%3Ethis%20content%3C%2Fak-drawer%0A%20%20%20%20%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20direction%20%3D%20ref('left')%0A%20%20const%20visible%20%3D%20ref(false)%0A%20%20const%20open%20%3D%20(type%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20direction.value%20%3D%20type%0A%20%20%20%20visible.value%20%3D%20true%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:l(()=>[w]),default:l(()=>[n(_)]),_:1}),y]))}};export{x as default};
