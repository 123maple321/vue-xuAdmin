(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{LiX9:function(n,e,t){"use strict";t.r(e);var a=t("NvbN"),i=t("tjfH"),r={name:"markdownView",data:function(){return{initData:i.a}},components:{Markdown:a.a},methods:{change:function(){console.log(arguments)}}},l=t("KHd+"),o=Object(l.a)(r,(function(){var n=this._self._c;return n("div",[n("markdown",{attrs:{onchange:this.change,initData:this.initData}})],1)}),[],!1,null,"3dcee14c",null);e.default=o.exports},NvbN:function(n,e,t){"use strict";var a=t("14Xm"),i=t.n(a),r=t("D3Ub"),l=t.n(r),o=t("QbLZ"),s=t.n(o),d=t("4d7F"),c=t.n(d),u=t("ojxP"),h=t.n(u),m={width:"100%",height:600,path:"./static/markdown/lib/",previewTheme:"default",editorTheme:"pastel-on-dark",lineWrapping:!0,codeFold:!0,placeholder:"请输入...",syncScrolling:!0,saveHTMLToTextarea:!0,searchReplace:!0,watch:!0,toolbar:!0,previewCodeHighlight:!0,emoji:!0,taskList:!0,tocm:!0,tex:!0,flowChart:!0,sequenceDiagram:!0,imageUpload:!0,imageFormats:["jpg","jpeg","gif","png","bmp","webp"],imageUploadURL:"../../assets/uploadImage"},f=[{label:"monokai",value:"monokai.min.css"},{label:"atelier-cave-dark",value:"atelier-cave-dark.min.css"},{label:"atelier-cave-light",value:"atelier-cave-light.min.css"},{label:"atelier-dune-dark",value:"atelier-dune-dark.min.css"},{label:"atelier-dune-light",value:"atelier-dune-light.min.css"},{label:"atelier-estuary-dark",value:"atelier-estuary-dark.min.css"},{label:"atelier-estuary-light",value:"atelier-estuary-light.min.css"},{label:"atelier-forest-dark",value:"atelier-forest-dark.min.css"},{label:"atelier-forest-light",value:"atelier-forest-light.min.css"},{label:"atelier-heath-dark",value:"atelier-heath-dark.min.css"},{label:"atelier-heath-light",value:"atelier-heath-light.min.css"},{label:"atelier-lakeside-dark",value:"atelier-lakeside-dark.min.css"},{label:"atelier-lakeside-light",value:"atelier-lakeside-light.min.css"},{label:"atelier-plateau-dark",value:"atelier-plateau-dark.min.css"},{label:"atelier-plateau-light",value:"atelier-plateau-light.min.css"},{label:"atelier-savanna-dark",value:"atelier-savanna-dark.min.css"},{label:"atelier-savanna-light",value:"atelier-savanna-light.min.css"},{label:"atelier-seaside-dark",value:"atelier-seaside-dark.min.css"},{label:"atelier-seaside-light",value:"atelier-seaside-light.min.css"},{label:"atelier-sulphurpool-dark",value:"atelier-sulphurpool-dark.min.css"},{label:"atelier-sulphurpool-light",value:"atelier-sulphurpool-light.min.css"},{label:"github",value:"github.min.css"},{label:"github-v2",value:"github-v2.min.css"},{label:"hemisu-dark",value:"hemisu-dark.min.css"},{label:"hemisu-light",value:"hemisu-light.min.css"},{label:"tomorrow",value:"tomorrow.min.css"},{label:"tomorrow-night",value:"tomorrow-night.min.css"},{label:"tomorrow-night-blue",value:"tomorrow-night-blue.min.css"},{label:"tomorrow-night-bright",value:"tomorrow-night-bright.min.css"},{label:"tomorrow-night-eighties",value:"tomorrow-night-eighties.min.css"},{label:"tranquil-heart",value:"previewTheme-xu.css"},{label:"vibrant-ink",value:"vibrant-ink.min.css"},{label:"pastel-on-dark-xu",value:"pastel-on-dark-xu.css"}],g={name:"markdown-editor",props:{editorId:{type:String,default:"markdown-editor"},onchange:{type:Function},config:{type:Object},codeTheme:{type:String,default:"vibrant-ink.min.css"},initData:{type:String},initDataDelay:{type:Number,default:0}},data:function(){return{editor:null,codeThemes:f,editorLoaded:!1}},methods:{fetchScript:function(n){return new c.a((function(e){h()(n,(function(){e()}))}))},getConfig:function(){return s()({},m,this.config)},setMarkdown:function(n){window.editormd(this.editorId,this.getConfig()).setMarkdown(n)},initEditor:function(){var n=this;l()(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchScript("./static/markdown/jquery.min.js");case 2:return e.next=4,n.fetchScript("./static/markdown/editormd.min.js");case 4:n.$nextTick((function(){var e=window.editormd(n.editorId,n.getConfig());e.on("load",(function(){setTimeout((function(){n.editorLoaded=!0,n.initData&&e.setMarkdown(n.initData)}),n.initDataDelay)})),n.onchange&&e.on("change",(function(){var t=e.getPreviewedHTML();n.onchange({markdown:e.getMarkdown(),html:t,text:window.$(t).text()})})),n.editor=e}));case 5:case"end":return e.stop()}}),e,n)})))()}},mounted:function(){this.initEditor()},watch:{initData:function(n){n&&this.editorLoaded&&this.editor.setMarkdown(n)}}},p=t("KHd+"),v=Object(p.a)(g,(function(){var n=this._self._c;return n("div",{staticClass:"markdownBox"},[n("link",{attrs:{rel:"stylesheet",href:"./static/markdown/css/editormd.min.css"}}),this._v(" "),n("link",{attrs:{rel:"stylesheet",href:"./static/markdown/css/googleCodePrettifyThemes/previewTheme-xu.css"}}),this._v(" "),n("div",{attrs:{id:this.editorId}})])}),[],!1,null,"498842a6",null);e.a=v.exports},ojxP:function(n,e,t){var a,i,r;
/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */r=function(){var n,e,t=document,a=t.getElementsByTagName("head")[0],i={},r={},l={},o={};function s(n,e){for(var t=0,a=n.length;t<a;++t)if(!e(n[t]))return!1;return 1}function d(n,e){s(n,(function(n){return e(n),1}))}function c(e,t,a){e=e.push?e:[e];var h=t&&t.call,m=h?t:a,f=h?e.join(""):t,g=e.length;function p(n){return n.call?n():i[n]}function v(){if(!--g)for(var n in i[f]=1,m&&m(),l)s(n.split("|"),p)&&!d(l[n],p)&&(l[n]=[])}return setTimeout((function(){d(e,(function e(t,a){return null===t?v():(a||/^https?:\/\//.test(t)||!n||(t=-1===t.indexOf(".js")?n+t+".js":n+t),o[t]?(f&&(r[f]=1),2==o[t]?v():setTimeout((function(){e(t,!0)}),0)):(o[t]=1,f&&(r[f]=1),void u(t,v)))}))}),0),c}function u(n,i){var r,l=t.createElement("script");l.onload=l.onerror=l.onreadystatechange=function(){l.readyState&&!/^c|loade/.test(l.readyState)||r||(l.onload=l.onreadystatechange=null,r=1,o[n]=2,i())},l.async=1,l.src=e?n+(-1===n.indexOf("?")?"?":"&")+e:n,a.insertBefore(l,a.lastChild)}return c.get=u,c.order=function(n,e,t){!function a(i){i=n.shift(),n.length?c(i,a):c(i,e,t)}()},c.path=function(e){n=e},c.urlArgs=function(n){e=n},c.ready=function(n,e,t){n=n.push?n:[n];var a,r=[];return!d(n,(function(n){i[n]||r.push(n)}))&&s(n,(function(n){return i[n]}))?e():(a=n.join("|"),l[a]=l[a]||[],l[a].push(e),t&&t(r)),c},c.done=function(n){c([null],n)},c},n.exports?n.exports=r():void 0===(i="function"==typeof(a=r)?a.call(e,t,e,n):a)||(n.exports=i)},tjfH:function(n,e,t){"use strict";e.a='# vue-xuAdmin 初始值\n\n### 多语言代码高亮 Codes\n\n#### 行内代码 Inline code\n\n执行命令：`npm install marked`\n\n#### 缩进风格\n\n即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。\n\n    <?php\n        echo "Hello world!";\n    ?>\n    \n预格式化文本：\n\n    | First Header  | Second Header |\n    | ------------- | ------------- |\n    | Content Cell  | Content Cell  |\n    | Content Cell  | Content Cell  |\n#### java代码\n\n```java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n```\n#### JS代码　\n\n```javascript\nfunction test(){\n\tconsole.log("Hello world!");\n}\n \n(function(){\n    var box = function(){\n        return box.fn.init();\n    };\n\n    box.prototype = box.fn = {\n        init : function(){\n            console.log(\'box.init()\');\n\n\t\t\treturn this;\n        },\n\n\t\tadd : function(str){\n\t\t\talert("add", str);\n\n\t\t\treturn this;\n\t\t},\n\n\t\tremove : function(str){\n\t\t\talert("remove", str);\n\n\t\t\treturn this;\n\t\t}\n    };\n    \n    box.fn.init.prototype = box.fn;\n    \n    window.box =box;\n})();\n\nvar testBox = box();\ntestBox.add("jQuery").remove("jQuery");\n```\n\n#### HTML代码 HTML codes\n\n```html\n<!DOCTYPE html>\n<html>\n    <head>\n        <mate charest="utf-8" />\n        <title>Hello world!</title>\n    </head>\n    <body>\n        <h1>Hello world!</h1>\n    </body>\n</html>\n```\n### 列表 Lists\n\n#### 无序列表（减号）Unordered Lists (-)\n                \n- 列表一\n- 列表二\n- 列表三\n     \n#### 无序列表（星号）Unordered Lists (*)\n\n* 列表一\n* 列表二\n* 列表三\n\n#### 无序列表（加号和嵌套）Unordered Lists (+)\n                \n+ 列表一\n+ 列表二\n    + 列表二-1\n    + 列表二-2\n    + 列表二-3\n+ 列表三\n    * 列表一\n    * 列表二\n    * 列表三\n\n#### 有序列表 Ordered Lists (-)\n                \n1. 第一行\n2. 第二行\n3. 第三行\n\n#### GFM task list\n\n- [x] GFM task list 1\n- [x] GFM task list 2\n- [ ] GFM task list 3\n    - [ ] GFM task list 3-1\n    - [ ] GFM task list 3-2\n    - [ ] GFM task list 3-3\n- [ ] GFM task list 4\n    - [ ] GFM task list 4-1\n    - [ ] GFM task list 4-2\n                \n----### 绘制表格 Tables\n\n| 项目        | 价格   |  数量  |\n| --------   | -----:  | :----:  |\n| 计算机      | $1600   |   5     |\n| 手机        |   $12   |   12   |\n| 管线        |    $1    |  234  |\n                    \n\n| Function name | Description                    |\n| ------------- | ------------------------------ |\n| `help()`      | Display the help window.       |\n| `destroy()`   | **Destroy your computer!**     |\n\n| Left-Aligned  | Center Aligned  | Right Aligned |\n| :------------ |:---------------:| -----:|\n| col 3 is      | some wordy text | $1600 |\n| col 2 is      | centered        |   $12 |\n| zebra stripes | are neat        |    $1 |\n\n\n            \n### 科学公式 TeX(KaTeX)\n                    \n$$E=mc^2$$\n\n行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。\n\n$$\\(\\sqrt{3x-1}+(1+x)^2\\)$$\n                    \n$$\\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$\n多行公式：\n\n```math\n\\displaystyle\n\\left( \\sum\\_{k=1}^n a\\_k b\\_k \\right)^2\n\\leq\n\\left( \\sum\\_{k=1}^n a\\_k^2 \\right)\n\\left( \\sum\\_{k=1}^n b\\_k^2 \\right)\n```\n```katex\n\\displaystyle \n    \\frac{1}{\n        \\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\n        \\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {\n        1+\\frac{e^{-6\\pi}}\n        {1+\\frac{e^{-8\\pi}}\n         {1+\\cdots} }\n        } \n    }\n```\n### 绘制流程图 Flowchart\n\n```flow\nst=>start: 用户登陆\nop=>operation: 登陆操作\ncond=>condition: 登陆成功 Yes or No?\ne=>end: 进入后台\n\nst->op->cond\ncond(yes)->e\ncond(no)->op\n```\n                    \n### 绘制序列图 Sequence Diagram\n                    \n```seq\nAndrew->China: Says Hello \nNote right of China: China thinks\\nabout it \nChina--\x3eAndrew: How are you? \nAndrew->>China: I am good thanks!\n```\n\n### End'}}]);
//# sourceMappingURL=13.dc239e9dab65597bb49f.js.map