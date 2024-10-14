import{C as h}from"./vue-9425904f.js";import{e as u,a as e,o as r,f as E,w as n,b as c,d as t,c as m,g as s,u as i,h as A}from"./index-c584f2ba.js";/* empty css                                                            */const g="http://localhost/upload/upload.php",B=u({__name:"README.md.Virtual7404450e",setup(o){const d=(a,l)=>{l(a.data,2)};return(a,l)=>{const p=e("hk-button"),j=e("hk-upload");return r(),E(j,{action:g,onSuccess:d},{default:n(()=>[c(p,{type:"primary"},{default:n(()=>l[0]||(l[0]=[t("图片上传")])),_:1})]),_:1})}}}),C="http://localhost/upload/upload.php",b=u({__name:"README.md.Virtual9a9c3c2b",setup(o){const d=(a,l)=>{l("",2)};return(a,l)=>{const p=e("hk-upload");return r(),E(p,{action:C,listType:"picture",multiple:!0,onSuccess:d})}}}),k="http://localhost/upload/upload.php",F=u({__name:"README.md.Virtual287de55a",setup(o){const d=(a,l)=>{l("",2)};return(a,l)=>{const p=e("hk-upload");return r(),E(p,{action:k,drag:!0,listType:"picture",multiple:!0,onSuccess:d})}}}),D="http://localhost/upload/upload.php",_=u({__name:"README.md.Virtual61ae2911",setup(o){return(d,a)=>{const l=e("hk-img-crop");return r(),E(l,{action:D})}}}),y={class:"marked-body"},v={__name:"README",setup(o){return(d,a)=>(r(),m("div",y,[a[4]||(a[4]=s("h1",{id:"upload-文件上传"},"Upload 文件上传",-1)),a[5]||(a[5]=s("h3",{id:"基本用法"},"基本用法",-1)),a[6]||(a[6]=s("p",null,"图片上传需要显示上传进度和状态时，需要在上传完成后通过回调事件更新图片地址和状态",-1)),c(i(h),{code:"%3Ctemplate%3E%0A%20%20%3Chk-upload%20%3Aaction%3D%22action%22%20%40success%3D%22success%22%3E%0A%20%20%20%20%3Chk-button%20type%3D%22primary%22%3E%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0%3C%2Fhk-button%3E%0A%20%20%3C%2Fhk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20const%20action%20%3D%20'http%3A%2F%2Flocalhost%2Fupload%2Fupload.php'%0A%0A%20%20%2F%2F%20%E6%9B%B4%E6%96%B0%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%96%87%E4%BB%B6%E5%9C%B0%E5%9D%80%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E7%9A%84%E5%9C%B0%E5%9D%80%EF%BC%8C%E5%90%8C%E6%97%B6%E6%9B%B4%E6%96%B0%E7%8A%B6%E6%80%812%EF%BC%9D%E4%B8%8A%E4%BC%A0%E6%88%90%E5%8A%9F%0A%20%20const%20success%20%3D%20(res%3A%20any%2C%20callback%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20callback(res.data%2C%202)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:n(()=>a[0]||(a[0]=[s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"hk-upload"),t(),s("span",{class:"hljs-attr"},":action"),t("="),s("span",{class:"hljs-string"},'"action"'),t(" @"),s("span",{class:"hljs-attr"},"success"),t("="),s("span",{class:"hljs-string"},'"success"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"hk-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(">")]),t("图片上传"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"hk-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"hk-upload"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"lang"),t("="),s("span",{class:"hljs-string"},'"ts"'),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"language-javascript"},[t(`
  `),s("span",{class:"hljs-keyword"},"const"),t(" action = "),s("span",{class:"hljs-string"},"'http://localhost/upload/upload.php'"),t(`

  `),s("span",{class:"hljs-comment"},"// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功"),t(`
  `),s("span",{class:"hljs-keyword"},"const"),t(),s("span",{class:"hljs-title function_"},"success"),t(" = ("),s("span",{class:"hljs-params"},"res: any, callback: any"),t(`) => {
    `),s("span",{class:"hljs-title function_"},"callback"),t("(res."),s("span",{class:"hljs-property"},"data"),t(", "),s("span",{class:"hljs-number"},"2"),t(`)
  }
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`
`)])],-1)])),default:n(()=>[c(B)]),_:1}),a[7]||(a[7]=s("h3",{id:"图片列表"},"图片列表",-1)),c(i(h),{code:"%3Ctemplate%3E%0A%20%20%3Chk-upload%0A%20%20%20%20%3Aaction%3D%22action%22%0A%20%20%20%20listType%3D%22picture%22%0A%20%20%20%20%3Amultiple%3D%22true%22%0A%20%20%20%20%40success%3D%22success%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20const%20action%20%3D%20'http%3A%2F%2Flocalhost%2Fupload%2Fupload.php'%0A%0A%20%20%2F%2F%20%E6%9B%B4%E6%96%B0%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%96%87%E4%BB%B6%E5%9C%B0%E5%9D%80%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E7%9A%84%E5%9C%B0%E5%9D%80%EF%BC%8C%E5%90%8C%E6%97%B6%E6%9B%B4%E6%96%B0%E7%8A%B6%E6%80%812%EF%BC%9D%E4%B8%8A%E4%BC%A0%E6%88%90%E5%8A%9F%0A%20%20const%20success%20%3D%20(res%3A%20any%2C%20callback%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20callback(''%2C%202)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:n(()=>a[1]||(a[1]=[s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"hk-upload"),t(`
    `),s("span",{class:"hljs-attr"},":action"),t("="),s("span",{class:"hljs-string"},'"action"'),t(`
    `),s("span",{class:"hljs-attr"},"listType"),t("="),s("span",{class:"hljs-string"},'"picture"'),t(`
    `),s("span",{class:"hljs-attr"},":multiple"),t("="),s("span",{class:"hljs-string"},'"true"'),t(`
    @`),s("span",{class:"hljs-attr"},"success"),t("="),s("span",{class:"hljs-string"},'"success"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"lang"),t("="),s("span",{class:"hljs-string"},'"ts"'),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"language-javascript"},[t(`
  `),s("span",{class:"hljs-keyword"},"const"),t(" action = "),s("span",{class:"hljs-string"},"'http://localhost/upload/upload.php'"),t(`

  `),s("span",{class:"hljs-comment"},"// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功"),t(`
  `),s("span",{class:"hljs-keyword"},"const"),t(),s("span",{class:"hljs-title function_"},"success"),t(" = ("),s("span",{class:"hljs-params"},"res: any, callback: any"),t(`) => {
    `),s("span",{class:"hljs-title function_"},"callback"),t("("),s("span",{class:"hljs-string"},"''"),t(", "),s("span",{class:"hljs-number"},"2"),t(`)
  }
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`
`)])],-1)])),default:n(()=>[c(b)]),_:1}),a[8]||(a[8]=s("h3",{id:"拖动上传"},"拖动上传",-1)),c(i(h),{code:"%3Ctemplate%3E%0A%20%20%3Chk-upload%0A%20%20%20%20%3Aaction%3D%22action%22%0A%20%20%20%20%3Adrag%3D%22true%22%0A%20%20%20%20listType%3D%22picture%22%0A%20%20%20%20%3Amultiple%3D%22true%22%0A%20%20%20%20%40success%3D%22success%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20const%20action%20%3D%20'http%3A%2F%2Flocalhost%2Fupload%2Fupload.php'%0A%0A%20%20%2F%2F%20%E6%9B%B4%E6%96%B0%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%96%87%E4%BB%B6%E5%9C%B0%E5%9D%80%E4%B8%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E7%9A%84%E5%9C%B0%E5%9D%80%EF%BC%8C%E5%90%8C%E6%97%B6%E6%9B%B4%E6%96%B0%E7%8A%B6%E6%80%812%EF%BC%9D%E4%B8%8A%E4%BC%A0%E6%88%90%E5%8A%9F%0A%20%20const%20success%20%3D%20(res%3A%20any%2C%20callback%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20callback(''%2C%202)%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:n(()=>a[2]||(a[2]=[s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"hk-upload"),t(`
    `),s("span",{class:"hljs-attr"},":action"),t("="),s("span",{class:"hljs-string"},'"action"'),t(`
    `),s("span",{class:"hljs-attr"},":drag"),t("="),s("span",{class:"hljs-string"},'"true"'),t(`
    `),s("span",{class:"hljs-attr"},"listType"),t("="),s("span",{class:"hljs-string"},'"picture"'),t(`
    `),s("span",{class:"hljs-attr"},":multiple"),t("="),s("span",{class:"hljs-string"},'"true"'),t(`
    @`),s("span",{class:"hljs-attr"},"success"),t("="),s("span",{class:"hljs-string"},'"success"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"lang"),t("="),s("span",{class:"hljs-string"},'"ts"'),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"language-javascript"},[t(`
  `),s("span",{class:"hljs-keyword"},"const"),t(" action = "),s("span",{class:"hljs-string"},"'http://localhost/upload/upload.php'"),t(`

  `),s("span",{class:"hljs-comment"},"// 更新上传的文件地址为服务器返回的地址，同时更新状态2＝上传成功"),t(`
  `),s("span",{class:"hljs-keyword"},"const"),t(),s("span",{class:"hljs-title function_"},"success"),t(" = ("),s("span",{class:"hljs-params"},"res: any, callback: any"),t(`) => {
    `),s("span",{class:"hljs-title function_"},"callback"),t("("),s("span",{class:"hljs-string"},"''"),t(", "),s("span",{class:"hljs-number"},"2"),t(`)
  }
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`
`)])],-1)])),default:n(()=>[c(F)]),_:1}),a[9]||(a[9]=s("h3",{id:"裁切上传"},"裁切上传",-1)),c(i(h),{code:"%3Ctemplate%3E%0A%20%20%3Chk-img-crop%20%3Aaction%3D%22action%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20const%20action%20%3D%20'http%3A%2F%2Flocalhost%2Fupload%2Fupload.php'%0A%3C%2Fscript%3E%0A"},{code:n(()=>a[3]||(a[3]=[s("pre",{class:"language-xml"},[s("code",{class:"hljs"},[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"hk-img-crop"),t(),s("span",{class:"hljs-attr"},":action"),t("="),s("span",{class:"hljs-string"},'"action"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"lang"),t("="),s("span",{class:"hljs-string"},'"ts"'),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"language-javascript"},[t(`
  `),s("span",{class:"hljs-keyword"},"const"),t(" action = "),s("span",{class:"hljs-string"},"'http://localhost/upload/upload.php'"),t(`
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`
`)])],-1)])),default:n(()=>[c(_)]),_:1}),a[10]||(a[10]=A('<h2 id="api">API</h2><h3 id="upload-props">Upload Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>modelValue</td><td>Array/Object</td><td>上传的文件，单个文件时为object</td></tr><tr><td>name</td><td>string</td><td>上传的文件字段名</td></tr><tr><td>action</td><td>string</td><td>必选参数，上传的地址</td></tr><tr><td>multiple</td><td>Boolean/false</td><td>是否支持多选文件</td></tr><tr><td>accept</td><td>string</td><td>h5原生属性，接受上传的文件类型，即打开上传框时默认选择的类型</td></tr><tr><td>data</td><td>Object</td><td>上传时附带的额外参数</td></tr><tr><td>headers</td><td>Object</td><td>设置上传的请求头部</td></tr><tr><td>format</td><td>string</td><td>支持的文件后缀类型，多个用豆号隔开</td></tr><tr><td>maxSize</td><td>number</td><td>最大上传限制kb</td></tr><tr><td>timeout</td><td>number</td><td>指定请求超时的毫秒数</td></tr><tr><td>auto</td><td>Boolean/true</td><td>是否自动上传文件</td></tr><tr><td>drag</td><td>Boolean/false</td><td>允许拖动上传</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>禁止上传状态</td></tr><tr><td>limit</td><td>number</td><td>允许上传的最大数量</td></tr><tr><td>showFileList</td><td>Boolean/true</td><td>是否显示已上传文件列表</td></tr><tr><td>listType</td><td>string/text</td><td>文件列表展示类型text/picture</td></tr></tbody></table><h3 id="upload-event">Upload Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>选择上传文件时触发的事件</td></tr><tr><td>error</td><td>上传错误事件</td></tr><tr><td>success</td><td>上传成功事件</td></tr><tr><td>remove</td><td>移除上传文件事件</td></tr></tbody></table><h3 id="upload-methods">Upload Methods</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>cancelRequest</td><td>取消上传方法</td></tr><tr><td>upload</td><td>手动上传方法</td></tr></tbody></table><h3 id="imgcrop-props-图片裁切上传">ImgCrop Props 图片裁切上传</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>boxWidth</td><td>number</td><td>裁切画布的宽</td></tr><tr><td>boxHeight</td><td>number</td><td>裁切画布的高</td></tr><tr><td>imgWidth</td><td>number</td><td>裁切图片的宽</td></tr><tr><td>imgHeight</td><td>number</td><td>裁切图片的高</td></tr><tr><td>fixedScale</td><td>Boolean/true</td><td>约束比例</td></tr><tr><td>maxSize</td><td>number</td><td>最大上传限制kb</td></tr><tr><td>name</td><td>string</td><td>上传的文件字段名</td></tr><tr><td>data</td><td>Object</td><td>上传时附带的额外参数</td></tr><tr><td>headers</td><td>Object</td><td>设置上传的请求头部</td></tr><tr><td>action</td><td>string</td><td>必选参数，上传的地址</td></tr><tr><td>timeout</td><td>number</td><td>指定请求超时的毫秒数</td></tr><tr><td>text</td><td>array</td><td>文案</td></tr></tbody></table>',9))]))}};export{v as default};