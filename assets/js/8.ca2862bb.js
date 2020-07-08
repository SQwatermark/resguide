(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{414:function(t,s,a){t.exports=a.p+"assets/img/v2-e05a576ea3c9244cbaa852c3ab5c5877_r.f163e99e.jpg"},415:function(t,s,a){t.exports=a.p+"assets/img/image-20200708102209703.79567c66.png"},416:function(t,s,a){t.exports=a.p+"assets/img/image-20200706141343682.79d016d6.png"},417:function(t,s,a){t.exports=a.p+"assets/img/image-20200706142144723.d13da031.png"},418:function(t,s,a){t.exports=a.p+"assets/img/image-20200706142651716.330b7329.png"},472:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"额外的资源文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#额外的资源文件"}},[t._v("#")]),t._v(" 额外的资源文件")]),t._v(" "),e("p",[t._v("Minecraft经常迭代版本，如果玩家经常更新版本的话，不可避免地要下载很多资源文件，我们知道很多时候这些资源是重复的，不需要每更新一次就下载一次。Minecraft开发团队显然也知道这一点，于是他们把部分占用空间较大的一部分资源文件从版本的jar包中给独立出去了。它们被放在了.minecraft/assets文件夹下，主要包括"),e("strong",[t._v("音效和语言文件")]),t._v("等。即便它们丢失，也不会对游戏的正常启动造成影响，顶多没有声音或者没有相应语言的翻译（英文语言文件en_us.lang是放在jar包下的）。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("圈内笑话")]),t._v(" "),e("p",[e("img",{attrs:{src:a(414),alt:""}})])]),t._v(" "),e("p",[t._v("打开这个文件夹你就会发现它和一个正常的资源包的结构完全不同。绝大部分资源文件名字变成了哈希值，被放在了一个叫做objects的文件夹下，根本无从下手。")]),t._v(" "),e("h2",{attrs:{id:"目录文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录文件"}},[t._v("#")]),t._v(" 目录文件")]),t._v(" "),e("p",[t._v("为了弄清楚这些文件的真面目，让我们打开.minecraft/assets/indexes文件夹，找到你在使用的版本的json文件。我的示例是1.15.2版本，所以我要打开1.15.json。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(415),alt:"image-20200708102209703"}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("我用IDEA展示这个文件只是为了展示的更清楚。因为原本的文件被压缩成了一行，几乎没什么可读性，我用IDEA的格式化功能（快捷键"),e("code",[t._v("Ctrl")]),t._v("+"),e("code",[t._v("Alt")]),t._v("+"),e("code",[t._v("L")]),t._v("）把它展开了。")])]),t._v(" "),e("p",[t._v("撇去json的格式，我们搬出其中的一小段来进行解释：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icons/icon_16x16.png"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hash"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bdf48ef6b5d0d23bbb02e17d04865216179f510a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3665")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("这是整个文件的第一个有价值的片段，我们看到了一个文件的路径，我们看到了一个hash值，和一个size值。它们的含义是什么？")]),t._v(" "),e("p",[t._v("这里的文件路径是相对于版本的jar包的assets文件夹的路径，同样也就是相对于资源包的assets文件夹的路径。如果我们在我们的资源包下新建一个icons文件夹，在icons文件夹下放上一张名为icon_16x16.png的图片，那么理所应当原本的这张图片将会被我们的图片所覆盖。")]),t._v(" "),e("h2",{attrs:{id:"根据信息寻找文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据信息寻找文件"}},[t._v("#")]),t._v(" 根据信息寻找文件")]),t._v(" "),e("p",[t._v("那我们怎么找到原本的这张图片？通过这里给出的hash值寻找，这里给出的hash值的前两位是bd，那我们进入.minecraft/assets/objects/文件夹，找到名为bd的子文件夹，不出意外的话你会在里面找到一个名字和这个hash值一样的文件。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(416),alt:"image-20200706141343682"}})]),t._v(" "),e("p",[t._v("我们知道它原本应该叫icon_16x16.png，为了防止我们正常的游戏出现问题，让我们复制一份，放到资源包中。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(417),alt:"image-20200706142144723"}})]),t._v(" "),e("p",[t._v("把文件名改为icon_16x16.png，我们可以看到它的真面目了。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(418),alt:"image-20200706142651716"}})]),t._v(" "),e("p",[t._v("于是乎我们就可以轻易做到很多人用各种奇奇怪怪的技术手段才能做到的事情：替换游戏图标。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("实际上游戏图标不止有这一个文件，1.15版本有6个，而且是三对重复的。我不知道这样做的原因。自己亲自查看一下，动手试试吧。")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),e("p",[t._v("不要直接修改这些文件，即便你必须要修改，也请使用资源包。Minecraft 会在连接网络的时候根据index文件夹里的json文件还原你所做的更改。即便"),e("a",{attrs:{href:"https://www.mcbbs.net/thread-421087-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("有办法绕过文件哈希值和大小检测"),e("OutboundLink")],1),t._v("，也仍然强烈建议不要直接修改这些文件，尤其是要将其分发出去时，发布擅自修改的 Minecraft资源文件是违反 "),e("a",{attrs:{href:"https://www.minecraft.net/zh-hans/terms/r1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EULA"),e("OutboundLink")],1),t._v(" 的）")])])])}),[],!1,null,null,null);s.default=r.exports}}]);