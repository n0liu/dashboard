(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["posts"],{"759b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"heading"},[a("h1",{staticClass:"title"},[t._v("New "+t._s(t.$route.params.type))])])])},n=[],l={name:"new"},i=l,o=a("2877"),r=Object(o["a"])(i,s,n,!1,null,null,null);e["default"]=r.exports},"7a3e":function(t,e,a){"use strict";var s=a("c925"),n=a.n(s);n.a},"94c7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"heading"},[t.selections.length?a("h1",{staticClass:"title"},[t._v(t._s(t.selections.length)+" "+t._s(1===t.selections.length?"item":"items")+" selected")]):a("h1",{staticClass:"title"},[t._v(t._s(t.posts.length)+" "+t._s(1===t.posts.length?"item":"items"))]),a("transition",{attrs:{name:"fade"}},[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.selections.length,expression:"selections.length"}],staticClass:"action"},[a("li",[a("a",{staticClass:"icon-before icon-checkmark",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"icon-before icon-blocked",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"icon-before icon-bin",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"icon-before icon-copy",attrs:{href:"#"}})])])]),t._m(0),a("router-link",{attrs:{to:{name:"new",params:{type:t.$route.params.type}}}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}},[t._v("Add item")])],1)],1),a("el-table",{attrs:{data:t.posts},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),a("el-table-column",{attrs:{prop:"title",label:"Title","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"Status",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.status)+"\n      ")]}}])}),a("el-table-column",{attrs:{label:"Categories",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.categories,function(e){return a("a",{key:e.slug,attrs:{href:"#"}},[t._v(t._s(e.name)+", ")])})}}])}),a("el-table-column",{attrs:{label:"Tags",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.tags,function(e){return a("a",{key:e.slug,attrs:{href:"#"}},[t._v(t._s(e.name)+", ")])})}}])}),a("el-table-column",{attrs:{label:"Author",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:"#"}},[t._v(t._s(e.row.author.name))])]}}])}),a("el-table-column",{attrs:{label:"Comments",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"icon-before icon-bubble"},[t._v(t._s(e.row.comment))])]}}])}),a("el-table-column",{attrs:{prop:"date",label:"Date",width:"120"}})],1),a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","current-page":4,"page-sizes":[50,100,150,200],"page-size":50,total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"search icon-before icon-search"},[a("input",{attrs:{type:"text",placeholder:"Search"}})])}],l={name:"posts",data:function(){return{size:50,posts:[],selections:[]}},created:function(){this.$title(this.$route.params.type),this.initData()},methods:{initData:function(){this.posts=[];for(var t=0;t<this.size;t++)this.posts.push({title:"Hello world ".concat(t),status:"pub",categories:[{name:"None",slug:"uncategoried"},{name:"Test",slug:"test-category"}],tags:[{name:"demo",slug:"demo"},{name:"tag",slug:"test-tag"},{name:"tag2",slug:"test-tag2"},{name:"tag3",slug:"test-tag3"}],author:{name:"Wang Lei",slug:"zce"},comment:10,date:(new Date).toLocaleDateString()})},handleSelectionChange:function(t){this.selections=t},handleSizeChange:function(t){console.log("每页 ".concat(t," 条")),this.size=t,this.initData()},handleCurrentChange:function(t){this.currentPage=t,console.log("当前页: ".concat(t))}},watch:{$route:function(){this.initData()}}},i=l,o=(a("7a3e"),a("2877")),r=Object(o["a"])(i,s,n,!1,null,null,null);e["default"]=r.exports},a2c6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"heading"},[a("h1",{staticClass:"title"},[t._v("Edit "+t._s(t.$route.params.type))])]),a("p",[t._v("Not yet!")])])},n=[],l={name:"edit"},i=l,o=a("2877"),r=Object(o["a"])(i,s,n,!1,null,null,null);e["default"]=r.exports},c925:function(t,e,a){}}]);