import{C as E}from"./vue-b1840a52.js";import{a as A,o as j,f as u,r as k,c as D,d as s,t as f,b as t,w as n,i as b,g as a,u as d,h as F}from"./index-22d010af.js";/* empty css                                                            */const y={__name:"README.md.Virtual20d5d4e8",setup(i){const r=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}];return(l,h)=>{const e=A("hk-tree");return j(),u(e,{data:r})}}},_={__name:"README.md.Virtualb9f51e07",setup(i){const r=[{label:"广东",open:!0,children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}];return(l,h)=>{const e=A("hk-tree");return j(),u(e,{data:r})}}},x={__name:"README.md.Virtualbe81f400",setup(i){const r=k("gd"),l=[{id:"gd",label:"广东",children:[{id:"gz",label:"广州",children:[{id:"th",label:"天河区"},{id:"by",label:"白云区"},{id:"yx",label:"越秀区"},{id:"hz",label:"海珠区"}]},{id:"sz",label:"深圳"},{id:"dg",label:"东莞"},{id:"fs",label:"佛山"}]},{id:"gx",label:"广西"},{id:"bj",label:"北京"}];return(h,e)=>{const p=A("hk-tree");return j(),D("p",null,[s("当前选中值："+f(r.value)+" ",1),t(p,{data:l,modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=c=>r.value=c)},null,8,["modelValue"])])}}},v={__name:"README.md.Virtual89a3ef0a",setup(i){const r=[{id:"gd",label:"广东"},{id:"gx",label:"广西"},{id:"bj",label:"北京"},{id:"sh",label:"上海",hasChild:!1}],l=(h,e)=>{if(!h.isLoad){let p=[];h.id==="gd"&&(p=[{label:"天河区",hasChild:!1},{label:"白云区",hasChild:!1}]),h.id==="gx"&&(p=[{label:"桂林市",hasChild:!1},{label:"南宁市",hasChild:!1}]),h.id==="bj"&&(p=[{label:"朝阳区",hasChild:!1},{label:"东城区",hasChild:!1}]),setTimeout(()=>{e&&e(p)},5e3)}};return(h,e)=>{const p=A("hk-tree");return j(),D("p",null,[t(p,{data:r,onClick:l,lazy:!0})])}}},w={__name:"README.md.Virtuale748ef5d",setup(i){const r=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],l=h=>{alert(JSON.stringify(h))};return(h,e)=>{const p=A("hk-tree");return j(),u(p,{data:r,showCheckbox:!0,onChange:l})}}},V={__name:"README.md.Virtualf8ca7d3f",setup(i){const r=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],l=h=>{alert(JSON.stringify(h))};return(h,e)=>{const p=A("hk-button"),c=A("hk-button-group"),o=A("hk-tree");return j(),u(o,{data:r},{default:n(B=>[t(c,{style:{"margin-left":"5px"}},{default:n(()=>[t(p,{type:"text",onClick:b(C=>l(B),["stop"])},{default:n(()=>e[0]||(e[0]=[s("添加")])),_:2},1032,["onClick"]),t(p,{type:"text",onClick:b(C=>l(B),["stop"])},{default:n(()=>e[1]||(e[1]=[s("修改")])),_:2},1032,["onClick"]),t(p,{type:"text",onClick:b(C=>l(B),["stop"])},{default:n(()=>e[2]||(e[2]=[s("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})}}},z={__name:"README.md.Virtuald2a050e3",setup(i){const r=k(),l=[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],h=p=>{alert(JSON.stringify(p))},e=p=>{console.log(r.value.getValue(p))};return(p,c)=>{const o=A("hk-button"),B=A("hk-button-group"),C=A("hk-tree");return j(),D("div",null,[t(C,{data:l,showCheckbox:!0,ref_key:"treeEl",ref:r},{default:n(g=>[t(B,{style:{"margin-left":"5px"}},{default:n(()=>[t(o,{type:"text",onClick:b(m=>h(g),["stop"])},{default:n(()=>c[2]||(c[2]=[s("添加")])),_:2},1032,["onClick"]),t(o,{type:"text",onClick:b(m=>h(g),["stop"])},{default:n(()=>c[3]||(c[3]=[s("修改")])),_:2},1032,["onClick"]),t(o,{type:"text",onClick:b(m=>h(g),["stop"])},{default:n(()=>c[4]||(c[4]=[s("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),_:1},512),c[7]||(c[7]=a("p",null,null,-1)),t(B,null,{default:n(()=>[t(o,{onClick:c[0]||(c[0]=g=>e())},{default:n(()=>c[5]||(c[5]=[s("取值")])),_:1}),t(o,{onClick:c[1]||(c[1]=g=>e(!0))},{default:n(()=>c[6]||(c[6]=[s("取值(label)")])),_:1})]),_:1})])}}},$={class:"marked-body"},M={__name:"README",setup(i){return(r,l)=>(j(),D("div",$,[l[7]||(l[7]=a("h1",{id:"tree-树"},"Tree 树",-1)),l[8]||(l[8]=a("h3",{id:"基本用法"},"基本用法",-1)),t(d(E),{code:"%0A%3Ctemplate%3E%0A%20%20%3Chk-tree%20%3Adata%3D%22data%22%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E5%B7%9E'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E5%A4%A9%E6%B2%B3%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E7%99%BD%E4%BA%91%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E8%B6%8A%E7%A7%80%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B5%B7%E7%8F%A0%E5%8C%BA'%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B7%B1%E5%9C%B3'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%B8%9C%E8%8E%9E'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%BD%9B%E5%B1%B1'%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%B9%BF%E8%A5%BF'%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%8C%97%E4%BA%AC'%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:n(()=>l[0]||(l[0]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(`}
          ]
        },
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(`}
      ]
    },
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`}
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:n(()=>[t(y)]),_:1}),l[9]||(l[9]=a("h3",{id:"默认展开指定项"},"默认展开指定项",-1)),l[10]||(l[10]=a("p",null,[s("在列表数据"),a("code",null,"data"),s("里使用"),a("code",null,'open="true"'),s("可默认展开")],-1)),t(d(E),{code:"%0A%3Ctemplate%3E%0A%20%20%3Chk-tree%20%3Adata%3D%22data%22%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20open%3A%20true%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E5%B7%9E'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E5%A4%A9%E6%B2%B3%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E7%99%BD%E4%BA%91%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E8%B6%8A%E7%A7%80%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B5%B7%E7%8F%A0%E5%8C%BA'%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B7%B1%E5%9C%B3'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%B8%9C%E8%8E%9E'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%BD%9B%E5%B1%B1'%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%B9%BF%E8%A5%BF'%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%8C%97%E4%BA%AC'%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:n(()=>l[1]||(l[1]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"open"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(`}
          ]
        },
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(`}
      ]
    },
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`}
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:n(()=>[t(_)]),_:1}),l[11]||(l[11]=a("h3",{id:"点击可选中值"},"点击可选中值",-1)),l[12]||(l[12]=a("p",null,[s("使用"),a("code",null,'v-model="string/array"'),s("，为"),a("code",null,"string"),s("时单选，"),a("code",null,"array"),s("时可多选，对应数据列表"),a("code",null,"data"),s("的"),a("code",null,"id"),s("值")],-1)),t(d(E),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cp%0A%20%20%3E%E5%BD%93%E5%89%8D%E9%80%89%E4%B8%AD%E5%80%BC%EF%BC%9A%7B%7B%20value%20%7D%7D%0A%20%20%20%20%3Chk-tree%20%3Adata%3D%22data%22%20v-model%3D%22value%22%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7Bref%7D%20from%20'vue'%0A%0A%20%20const%20value%20%3D%20ref('gd')%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20id%3A%20'gd'%2C%0A%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%3A%20'gz'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E5%B7%9E'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bid%3A%20'th'%2C%20label%3A%20'%E5%A4%A9%E6%B2%B3%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bid%3A%20'by'%2C%20label%3A%20'%E7%99%BD%E4%BA%91%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bid%3A%20'yx'%2C%20label%3A%20'%E8%B6%8A%E7%A7%80%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bid%3A%20'hz'%2C%20label%3A%20'%E6%B5%B7%E7%8F%A0%E5%8C%BA'%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7Bid%3A%20'sz'%2C%20label%3A%20'%E6%B7%B1%E5%9C%B3'%7D%2C%0A%20%20%20%20%20%20%20%20%7Bid%3A%20'dg'%2C%20label%3A%20'%E4%B8%9C%E8%8E%9E'%7D%2C%0A%20%20%20%20%20%20%20%20%7Bid%3A%20'fs'%2C%20label%3A%20'%E4%BD%9B%E5%B1%B1'%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7Bid%3A%20'gx'%2C%20label%3A%20'%E5%B9%BF%E8%A5%BF'%7D%2C%0A%20%20%20%20%7Bid%3A%20'bj'%2C%20label%3A%20'%E5%8C%97%E4%BA%AC'%7D%0A%20%20%5D%0A%3C%2Fscript%3E%0A"},{code:n(()=>l[2]||(l[2]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
  >`)]),s(`当前选中值：{{ value }}
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" {ref} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'gd'"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gd'"),s(`,
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gz'"),s(`,
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'th'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'by'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'yx'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'hz'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(`}
          ]
        },
        {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'sz'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`},
        {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'dg'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(`},
        {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'fs'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(`}
      ]
    },
    {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gx'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`},
    {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'bj'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`}
  ]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:n(()=>[t(x)]),_:1}),l[13]||(l[13]=a("h3",{id:"异步加载数据"},"异步加载数据",-1)),l[14]||(l[14]=a("p",null,[s("使用"),a("code",null,'lazy="true"'),s("，在点击展开时可异步加载数据，开启异步加载点击可返回回调方法，用于加载新数据。 返回当前项数据时会添加"),a("code",null,"isLoad"),s("属性，用于表示当前项是否已经请求过数据，可减少重复请求")],-1)),t(d(E),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Chk-tree%20%3Adata%3D%22data%22%20%40click%3D%22click%22%20%3Alazy%3D%22true%22%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7Bid%3A%20'gd'%2C%20label%3A%20'%E5%B9%BF%E4%B8%9C'%7D%2C%0A%20%20%20%20%7Bid%3A%20'gx'%2C%20label%3A%20'%E5%B9%BF%E8%A5%BF'%7D%2C%0A%20%20%20%20%7Bid%3A%20'bj'%2C%20label%3A%20'%E5%8C%97%E4%BA%AC'%7D%2C%0A%20%20%20%20%7Bid%3A%20'sh'%2C%20label%3A%20'%E4%B8%8A%E6%B5%B7'%2C%20hasChild%3A%20false%7D%20%2F%2F%20hasChild%3Dfalse%E8%A1%A8%E7%A4%BA%E6%B2%A1%E6%9C%89%E4%B8%8B%E7%BA%A7%E5%8F%AF%E5%8A%A0%E8%BD%BD%0A%20%20%5D%0A%20%20const%20click%20%3D%20(item%2C%20resolve)%20%3D%3E%20%7B%0A%20%20%20%20if%20(!item.isLoad)%20%7B%0A%20%20%20%20%20%20%2F%2F%20false%E8%A1%A8%E7%A4%BA%E8%BF%98%E6%B2%A1%E5%B1%95%E5%BC%80%E5%8A%A0%E8%BD%BD%E8%BF%87%0A%20%20%20%20%20%20let%20newData%20%3D%20%5B%5D%0A%20%20%20%20%20%20if%20(item.id%20%3D%3D%3D%20'gd')%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%E6%A0%B9%E6%8D%AE%E5%BD%93%E5%89%8D%E9%A1%B9%E7%9A%84%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B7%E6%B1%82%E4%B8%8B%E4%B8%80%E7%BA%A7%0A%20%20%20%20%20%20%20%20newData%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E5%A4%A9%E6%B2%B3%E5%8C%BA'%2C%20hasChild%3A%20false%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E7%99%BD%E4%BA%91%E5%8C%BA'%2C%20hasChild%3A%20false%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(item.id%20%3D%3D%3D%20'gx')%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%E6%A0%B9%E6%8D%AE%E5%BD%93%E5%89%8D%E9%A1%B9%E7%9A%84%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B7%E6%B1%82%E4%B8%8B%E4%B8%80%E7%BA%A7%0A%20%20%20%20%20%20%20%20newData%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%A1%82%E6%9E%97%E5%B8%82'%2C%20hasChild%3A%20false%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E5%8D%97%E5%AE%81%E5%B8%82'%2C%20hasChild%3A%20false%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(item.id%20%3D%3D%3D%20'bj')%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%E6%A0%B9%E6%8D%AE%E5%BD%93%E5%89%8D%E9%A1%B9%E7%9A%84%E7%9B%B8%E5%85%B3%E5%8F%82%E6%95%B0%E8%AF%B7%E6%B1%82%E4%B8%8B%E4%B8%80%E7%BA%A7%0A%20%20%20%20%20%20%20%20newData%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%9C%9D%E9%98%B3%E5%8C%BA'%2C%20hasChild%3A%20false%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%B8%9C%E5%9F%8E%E5%8C%BA'%2C%20hasChild%3A%20false%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%2F%2F%20%E6%A8%A1%E6%8B%9F%E8%AF%B7%E6%B1%82%E6%95%B0%E6%8D%AE%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20resolve%20%26%26%20resolve(newData)%0A%20%20%20%20%20%20%7D%2C%205000)%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:n(()=>l[3]||(l[3]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"click"'),s(),a("span",{class:"hljs-attr"},":lazy"),s("="),a("span",{class:"hljs-string"},'"true"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gd'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`},
    {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'gx'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`},
    {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'bj'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`},
    {`),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-string"},"'sh'"),s(", "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'上海'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s("} "),a("span",{class:"hljs-comment"},"// hasChild=false表示没有下级可加载"),s(`
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"},"item, resolve"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (!item."),a("span",{class:"hljs-property"},"isLoad"),s(`) {
      `),a("span",{class:"hljs-comment"},"// false表示还没展开加载过"),s(`
      `),a("span",{class:"hljs-keyword"},"let"),s(` newData = []
      `),a("span",{class:"hljs-keyword"},"if"),s(" (item."),a("span",{class:"hljs-property"},"id"),s(" === "),a("span",{class:"hljs-string"},"'gd'"),s(`) {
        `),a("span",{class:"hljs-comment"},"// 根据当前项的相关参数请求下一级"),s(`
        newData = [
          {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`},
          {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`}
        ]
      }
      `),a("span",{class:"hljs-keyword"},"if"),s(" (item."),a("span",{class:"hljs-property"},"id"),s(" === "),a("span",{class:"hljs-string"},"'gx'"),s(`) {
        `),a("span",{class:"hljs-comment"},"// 根据当前项的相关参数请求下一级"),s(`
        newData = [
          {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'桂林市'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`},
          {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'南宁市'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`}
        ]
      }
      `),a("span",{class:"hljs-keyword"},"if"),s(" (item."),a("span",{class:"hljs-property"},"id"),s(" === "),a("span",{class:"hljs-string"},"'bj'"),s(`) {
        `),a("span",{class:"hljs-comment"},"// 根据当前项的相关参数请求下一级"),s(`
        newData = [
          {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'朝阳区'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`},
          {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东城区'"),s(", "),a("span",{class:"hljs-attr"},"hasChild"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`}
        ]
      }
      `),a("span",{class:"hljs-comment"},"// 模拟请求数据"),s(`
      `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        resolve && `),a("span",{class:"hljs-title function_"},"resolve"),s(`(newData)
      }, `),a("span",{class:"hljs-number"},"5000"),s(`)
    }
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:n(()=>[t(v)]),_:1}),l[15]||(l[15]=a("h3",{id:"支持勾选"},"支持勾选",-1)),l[16]||(l[16]=a("p",null,[a("code",null,'showCheckbox="true"'),s("可支持勾选，"),a("code",null,"change"),s("为勾选改变事件")],-1)),t(d(E),{code:"%0A%3Ctemplate%3E%0A%20%20%3Chk-tree%20%3Adata%3D%22data%22%20%3AshowCheckbox%3D%22true%22%20%40change%3D%22change%22%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E5%B7%9E'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E5%A4%A9%E6%B2%B3%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E7%99%BD%E4%BA%91%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E8%B6%8A%E7%A7%80%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B5%B7%E7%8F%A0%E5%8C%BA'%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B7%B1%E5%9C%B3'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%B8%9C%E8%8E%9E'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%BD%9B%E5%B1%B1'%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%B9%BF%E8%A5%BF'%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%8C%97%E4%BA%AC'%7D%0A%20%20%5D%0A%20%20const%20change%20%3D%20(obj)%20%3D%3E%20%7B%0A%20%20%20%20alert(JSON.stringify(obj))%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:n(()=>l[4]||(l[4]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":showCheckbox"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(`}
          ]
        },
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(`}
      ]
    },
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`}
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"change"),s(" = ("),a("span",{class:"hljs-params"},"obj"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(obj))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1)])),default:n(()=>[t(w)]),_:1}),l[17]||(l[17]=a("h3",{id:"可使用slot自定义显示内容"},"可使用slot自定义显示内容",-1)),t(d(E),{code:"%0A%3Ctemplate%3E%0A%20%20%3Chk-tree%20%3Adata%3D%22data%22%3E%0A%20%20%20%20%3Ctemplate%20%23default%3D%22slot%22%3E%0A%20%20%20%20%20%20%3Chk-button-group%20style%3D%22margin-left%3A%205px%22%3E%0A%20%20%20%20%20%20%20%20%3Chk-button%20type%3D%22text%22%20%40click.stop%3D%22click(slot)%22%3E%E6%B7%BB%E5%8A%A0%3C%2Fhk-button%3E%0A%20%20%20%20%20%20%20%20%3Chk-button%20type%3D%22text%22%20%40click.stop%3D%22click(slot)%22%3E%E4%BF%AE%E6%94%B9%3C%2Fhk-button%3E%0A%20%20%20%20%20%20%20%20%3Chk-button%20type%3D%22text%22%20%40click.stop%3D%22click(slot)%22%3E%E5%88%A0%E9%99%A4%3C%2Fhk-button%3E%0A%20%20%20%20%20%20%3C%2Fhk-button-group%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fhk-tree%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E5%B7%9E'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E5%A4%A9%E6%B2%B3%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E7%99%BD%E4%BA%91%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E8%B6%8A%E7%A7%80%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B5%B7%E7%8F%A0%E5%8C%BA'%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B7%B1%E5%9C%B3'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%B8%9C%E8%8E%9E'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%BD%9B%E5%B1%B1'%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%B9%BF%E8%A5%BF'%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%8C%97%E4%BA%AC'%7D%0A%20%20%5D%0A%20%20const%20click%20%3D%20(obj)%20%3D%3E%20%7B%0A%20%20%20%20alert(JSON.stringify(obj))%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:n(()=>l[5]||(l[5]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s("="),a("span",{class:"hljs-string"},'"slot"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button-group"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left: 5px"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("添加"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("修改"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-tree"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(`}
          ]
        },
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(`}
      ]
    },
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`}
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"},"obj"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(obj))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1)])),default:n(()=>[t(V)]),_:1}),l[18]||(l[18]=a("h3",{id:"使用getvalue取值"},"使用getValue取值",-1)),t(d(E),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Chk-tree%20%3Adata%3D%22data%22%20%3AshowCheckbox%3D%22true%22%20ref%3D%22treeEl%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22slot%22%3E%0A%20%20%20%20%20%20%20%20%3Chk-button-group%20style%3D%22margin-left%3A%205px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Chk-button%20type%3D%22text%22%20%40click.stop%3D%22click(slot)%22%3E%E6%B7%BB%E5%8A%A0%3C%2Fhk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Chk-button%20type%3D%22text%22%20%40click.stop%3D%22click(slot)%22%3E%E4%BF%AE%E6%94%B9%3C%2Fhk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Chk-button%20type%3D%22text%22%20%40click.stop%3D%22click(slot)%22%3E%E5%88%A0%E9%99%A4%3C%2Fhk-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fhk-button-group%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fhk-tree%3E%0A%20%20%20%20%3Cp%3E%3C%2Fp%3E%0A%20%20%20%20%3Chk-button-group%3E%0A%20%20%20%20%20%20%3Chk-button%20%40click%3D%22getValue()%22%3E%E5%8F%96%E5%80%BC%3C%2Fhk-button%3E%0A%20%20%20%20%20%20%3Chk-button%20%40click%3D%22getValue(true)%22%3E%E5%8F%96%E5%80%BC(label)%3C%2Fhk-button%3E%0A%20%20%20%20%3C%2Fhk-button-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7Bref%7D%20from%20'vue'%0A%0A%20%20const%20treeEl%20%3D%20ref()%0A%20%20const%20data%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E4%B8%9C'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%BF%E5%B7%9E'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E5%A4%A9%E6%B2%B3%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E7%99%BD%E4%BA%91%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E8%B6%8A%E7%A7%80%E5%8C%BA'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B5%B7%E7%8F%A0%E5%8C%BA'%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E6%B7%B1%E5%9C%B3'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%B8%9C%E8%8E%9E'%7D%2C%0A%20%20%20%20%20%20%20%20%7Blabel%3A%20'%E4%BD%9B%E5%B1%B1'%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%B9%BF%E8%A5%BF'%7D%2C%0A%20%20%20%20%7Blabel%3A%20'%E5%8C%97%E4%BA%AC'%7D%0A%20%20%5D%0A%20%20const%20click%20%3D%20(obj)%20%3D%3E%20%7B%0A%20%20%20%20alert(JSON.stringify(obj))%0A%20%20%7D%0A%20%20const%20getValue%20%3D%20(bool)%20%3D%3E%20%7B%0A%20%20%20%20console.log(treeEl.value.getValue(bool))%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A"},{code:n(()=>l[6]||(l[6]=[a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-tree"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":showCheckbox"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"treeEl"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s("="),a("span",{class:"hljs-string"},'"slot"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button-group"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-left: 5px"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("添加"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("修改"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"click(slot)"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-tree"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"getValue()"'),s(">")]),s("取值"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"hk-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"getValue(true)"'),s(">")]),s("取值(label)"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"hk-button-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" {ref} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(" treeEl = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
  `),a("span",{class:"hljs-keyword"},"const"),s(` data = [
    {
      `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广东'"),s(`,
      `),a("span",{class:"hljs-attr"},"children"),s(`: [
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广州'"),s(`,
          `),a("span",{class:"hljs-attr"},"children"),s(`: [
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'天河区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'白云区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'越秀区'"),s(`},
            {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'海珠区'"),s(`}
          ]
        },
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'深圳'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'东莞'"),s(`},
        {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'佛山'"),s(`}
      ]
    },
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'广西'"),s(`},
    {`),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`}
  ]
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"},"obj"),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-title class_"},"JSON"),s("."),a("span",{class:"hljs-title function_"},"stringify"),s(`(obj))
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"getValue"),s(" = ("),a("span",{class:"hljs-params"},"bool"),s(`) => {
    `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(treeEl."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"getValue"),s(`(bool))
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1)])),default:n(()=>[t(z)]),_:1}),l[19]||(l[19]=F('<h2 id="api">API</h2><h3 id="tree-props">Tree Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>Array</td><td>列表数据</td></tr><tr><td>showCheckbox</td><td>Boolean/false</td><td>显示勾选</td></tr><tr><td>lazy</td><td>Boolean/false</td><td>是否异步加载</td></tr><tr><td>v-model</td><td>Array/string</td><td>选中的值，array时为多选</td></tr></tbody></table><h3 id="tree-event">Tree Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td></tr></tbody></table><h3 id="tree-data">Tree Data</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>唯一值</td></tr><tr><td>label</td><td>string</td><td>显示的名称</td></tr><tr><td>checked</td><td>Boolean/false</td><td>当前项为勾选状态，仅当showCheckbox=true时有效</td></tr><tr><td>open</td><td>Boolean/false</td><td>是否展开当前项</td></tr><tr><td>hasChild</td><td>Boolean/false</td><td>表示当前级下没有子级可加载。仅在<code>tree</code>里设置了异步加载<code>lazy=&quot;true&quot;</code>时有效</td></tr></tbody></table>',7))]))}};export{M as default};
