(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{463:function(t,s,a){"use strict";a.r(s);var n=a(27),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"枯山水-ctm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枯山水-ctm"}},[t._v("#")]),t._v(" 枯山水——CTM")]),t._v(" "),a("p",[t._v("许多艺术创作者用CTM展示的图案不是简单的面与边框，而是更富有创造性的东西。")]),t._v(" "),a("p",[t._v("下图是我的朋友绘制的枯山水，这个图案由两种完全不同的方块构成，下图中被圈起来的是一种使用了CTM格式的方块，而没被圈起来的是另一种方块：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/28/QpTUNVOxJ53qyiw.png",alt:"image-20200707223919074"}})]),t._v(" "),a("h2",{attrs:{id:"复杂ctm的思路梳理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂ctm的思路梳理"}},[t._v("#")]),t._v(" 复杂CTM的思路梳理")]),t._v(" "),a("p",[t._v("我们要用两种方块制作枯山水，ctm格式的用红沙制作，非ctm格式的用沙子制作。")]),t._v(" "),a("p",[t._v("前面制作的铁块ctm这时起到了作用，我们用铁块摆出形状，从而推测出该如何绘制材质：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/28/W1i8AdIszwJuv45.png",alt:"image-20200708105930161"}})]),t._v(" "),a("p",[t._v("我们可以看出，ctm方块单独摆放时，显示0号材质，摆放成3×3的样式时，显示13,14,15,25,26,27,37,38,39号材质。")]),t._v(" "),a("p",[t._v("所以0号材质应该是这样的："),a("img",{attrs:{src:"https://i.loli.net/2020/07/28/jt13iwmbC6AWacB.png",alt:"image-20200708110251476"}})]),t._v(" "),a("p",[t._v("而13,14,15,25,26,27,37,38,39号材质分别是这样的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/28/JFLR3VEiDUYe912.png",alt:"image-20200708110411929"}})]),t._v(" "),a("p",[t._v("按照这种思路，设想可能的摆放方式，逐步画出所有材质：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/28/so89nDwRmCHYIvM.png",alt:"image-20200708110626171"}})]),t._v(" "),a("p",[t._v("将材质放入ctm文件夹内，再新建一个properties文件，我将其命名为karesansui1.properties（karesansui是枯山水的罗马音）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/28/dhwbl5DUM6iZuPt.png",alt:"image-20200708111117126"}})]),t._v(" "),a("p",[t._v("输入如下代码，保存")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ctm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchBlocks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:red_sand")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-47")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("由于标注了Error的贴图最终不会展示在作品中，可以把这些贴图去掉，令tiles=0 0 0 0 0 0 0 0 8 9 10 11 0 13 14 15 0 0 0 0 20 21 22 23 0 25 26 27 28 29 30 31 0 0 0 0 0 37 38 39 40 41 42 43 0 0 0 47，以节省空间。")])]),t._v(" "),a("p",[t._v("让我们进入游戏看看效果吧！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/28/uFX1qhlDCPZdAvR.png",alt:"image-20200708111309850"}})]),t._v(" "),a("p",[t._v("结果和设想的不同，非常失败！")]),t._v(" "),a("p",[t._v("别急着投降，仔细观察，似乎所有材质的位置都是正确的，但是被旋转了若干个90°")]),t._v(" "),a("h2",{attrs:{id:"插曲-随机旋转的沙子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插曲-随机旋转的沙子"}},[t._v("#")]),t._v(" 插曲——随机旋转的沙子")]),t._v(" "),a("p",[t._v("我起初认为这是红沙拥有"),a("a",{attrs:{href:"https://www.mcbbs.net/forum.php?mod=redirect&goto=findpost&ptid=896135&pid=15603178",target:"_blank",rel:"noopener noreferrer"}},[t._v("自然纹理"),a("OutboundLink")],1),t._v("，但是文档中并没有给沙子设置默认的自然纹理，游戏设置里甚至没有开启自然纹理的选项。")]),t._v(" "),a("p",[t._v("也就是说，红沙的随机旋转不是OptiFine造成的，而是原版的性质。")]),t._v(" "),a("p",[t._v("这给了我一个方向，我打开了assets/minecraft/blockstates/red_sand.json，果不其然，沙子被设置了随机模型：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"variants"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block/red_sand"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block/red_sand"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"y"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block/red_sand"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"y"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block/red_sand"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"y"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("270")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("稍加修改，只保留其中的一种模型：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"variants"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block/red_sand"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("保存，重载资源包，十分完美：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/28/pwB95zl8uHikfPV.png",alt:"image-20200708114537676"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);