(this["webpackJsonpfcc-markdown-previewer"]=this["webpackJsonpfcc-markdown-previewer"]||[]).push([[0],{16:function(e,n,t){},26:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var i,r=t(1),a=t.n(r),s=t(6),o=t.n(s),c=(t(16),t(7)),d=t(8),u=t(11),l=t(10),h=t(3),m=t(9),p=t.n(m),b=(t(26),t(4)),g=t(0);b.marked.setOptions({breaks:!0});var j="\n# Heading Size H1\n## Heading Size H2\n### Heading Size H3\n#### Heading Size H4\n##### Heading Size H5\n###### Heading Size h6\n\nThis is a Paragraph!\n\n**Bold Text** \n\n_italic text_\n\n\n> Block Quotes!\n\n- List Item\n- Another List Item\n  - Nested List Item\n\n1. Number list item\n2. Another item in Number list item\n\n- [x] DONE! Task list item\n- [ ] TODO! Task list item\n\nA link:\n[Check Out My Github Account](https://github.com/RoarAbiye)\n\nAn Image:\n![image](https://picsum.photos/200)\n\nIn line Code quote\n`print(inline code)`\n\nA block of code:\n```javascript\n   function addNums (num1, num2) {\n      console.log(num1+num2);\n   }\n```\n",k=(i={"border-radius":".35em","border-style":"none none solid none","border-width":".35em",margine:".1em","border-color":"#ccc","background-image":"linear-gradient(to right, #eee , #ddd)",color:"#999",position:"-webkit-sticky"},Object(h.a)(i,"position","sticky"),Object(h.a)(i,"top","0"),Object(h.a)(i,"padding-left","1em"),i),O=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=n.call(this,e)).handleChange=function(e){i.setState({markup:e.target.value})},i.state={markup:j},i}return Object(d.a)(t,[{key:"getMarkdownText",value:function(){return{__html:b.marked.parse(this.state.markup)}}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(p.a,{}),Object(g.jsxs)("wrapper",{id:"wrapper",children:[Object(g.jsxs)("div",{id:"editor-group",children:[Object(g.jsx)("h3",{className:"editor-heading",style:k,children:"Input"}),Object(g.jsx)("textarea",{id:"editor",value:this.state.markup,onChange:this.handleChange})]}),Object(g.jsxs)("div",{id:"preview-group",children:[Object(g.jsx)("h3",{className:"preview-heading",style:k,children:" Markdown Preview"}),Object(g.jsx)("div",{id:"preview",value:this.state.markup,dangerouslySetInnerHTML:this.getMarkdownText()})]})]})]})}}]),t}(r.Component),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),i(e),r(e),a(e),s(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root")),v()}},[[28,1,2]]]);
//# sourceMappingURL=main.8cc73b47.chunk.js.map