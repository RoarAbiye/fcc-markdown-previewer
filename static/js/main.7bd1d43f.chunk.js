(this["webpackJsonpfcc-markdown-previewer"]=this["webpackJsonpfcc-markdown-previewer"]||[]).push([[0],{15:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(5),c=n.n(i),s=(n(15),n(6)),u=n(7),o=n(10),d=n(9),h=n(8),p=n.n(h),b=(n(25),n(3)),j=n(1);b.marked.setOptions({breaks:!0});var l="\nParagraph\n**Bold Text**\n> Block Quotes!\n# Heading Size 1\n## Heading Size 2\n- List Item\n- Another List Iterm\n![Link](https://github.com/RoarAbiye)\n```javascript:\n    var add2 = function(number) {\n      return number + 2;\n    }\n```\n",k=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState({markup:e.target.value})},r.state={markup:l},r}return Object(u.a)(n,[{key:"getMarkdownText",value:function(){return{__html:b.marked.parse(this.state.markup)}}},{key:"render",value:function(){return Object(j.jsxs)("wrapper",{id:"wrapper",children:[Object(j.jsx)(p.a,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("textarea",{id:"editor",value:this.state.markup,onChange:this.handleChange}),Object(j.jsx)("div",{id:"preview",value:this.state.markup,dangerouslySetInnerHTML:this.getMarkdownText()})]})]})}}]),n}(r.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),m()}},[[27,1,2]]]);
//# sourceMappingURL=main.7bd1d43f.chunk.js.map