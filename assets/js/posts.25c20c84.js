(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["posts"],{"759b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"heading"},[s("h1",{staticClass:"title"},[t._v("New "+t._s(t.$route.params.type))])])])},n=[],l={name:"new"},i=l,o=s("2877"),c=Object(o["a"])(i,a,n,!1,null,null,null);e["default"]=c.exports},"7c97":function(t,e,s){"use strict";s("c11a")},"94c7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"posts"},[s("header",{staticClass:"heading"},[t.selections.length?s("h1",{staticClass:"title"},[t._v(t._s(t.selections.length)+" "+t._s(1===t.selections.length?"item":"items")+" selected")]):s("h1",{staticClass:"title"},[t._v(t._s(t.posts.length)+" "+t._s(1===t.posts.length?"item":"items"))]),s("transition",{attrs:{name:"fade"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.selections.length,expression:"selections.length"}],staticClass:"action"},[s("li",[s("a",{staticClass:"icon-before icon-checkmark",attrs:{href:"#"}})]),s("li",[s("a",{staticClass:"icon-before icon-blocked",attrs:{href:"#"}})]),s("li",[s("a",{staticClass:"icon-before icon-bin",attrs:{href:"#"}})]),s("li",[s("a",{staticClass:"icon-before icon-copy",attrs:{href:"#"}})])])]),t._m(0),s("router-link",{attrs:{to:{name:"new",params:{type:t.$route.params.type}}}},[s("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}},[t._v("Add item")])],1)],1),s("el-table",{attrs:{data:t.posts},on:{"selection-change":t.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection"}}),s("el-table-column",{attrs:{prop:"title",label:"Title","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{label:"Status",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.status)+" ")]}}])}),s("el-table-column",{attrs:{label:"Categories",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.categories,(function(e){return s("a",{key:e.slug,attrs:{href:"#"}},[t._v(t._s(e.name)+", ")])}))}}])}),s("el-table-column",{attrs:{label:"Tags",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.tags,(function(e){return s("a",{key:e.slug,attrs:{href:"#"}},[t._v(t._s(e.name)+", ")])}))}}])}),s("el-table-column",{attrs:{label:"Author",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("a",{attrs:{href:"#"}},[t._v(t._s(e.row.author.name))])]}}])}),s("el-table-column",{attrs:{label:"Comments",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("i",{staticClass:"icon-before icon-bubble"}),s("span",[t._v(t._s(e.row.comment))])]}}])}),s("el-table-column",{attrs:{prop:"date",label:"Date",width:"120"}})],1),s("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","current-page":4,"page-sizes":[50,100,150,200],"page-size":50,total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"search icon-before icon-search"},[s("input",{attrs:{type:"text",placeholder:"Search"}})])}],l={name:"posts",data:function(){return{size:50,posts:[],selections:[]}},created:function(){this.$title=this.$route.params.type,this.initData()},methods:{initData:function(){var t=this;this.$services.post.get().then((function(e){return console.log(e.data),t.$services.post.getComments(e.data[0].id)})).then((function(t){console.log(t)})),this.posts=[];for(var e=0;e<this.size;e++)this.posts.push({title:"Hello world ".concat(e),status:"pub",categories:[{name:"None",slug:"uncategoried"},{name:"Test",slug:"test-category"}],tags:[{name:"demo",slug:"demo"},{name:"tag",slug:"test-tag"},{name:"tag2",slug:"test-tag2"},{name:"tag3",slug:"test-tag3"}],author:{name:"Wang Lei",slug:"zce"},comment:10,date:(new Date).toLocaleDateString()})},handleSelectionChange:function(t){this.selections=t},handleSizeChange:function(t){console.log("每页 ".concat(t," 条")),this.size=t,this.initData()},handleCurrentChange:function(t){this.currentPage=t,console.log("当前页: ".concat(t))}},watch:{$route:function(){this.initData()}}},i=l,o=(s("7c97"),s("2877")),c=Object(o["a"])(i,a,n,!1,null,"1462145c",null);e["default"]=c.exports},a2c6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"heading"},[s("h1",{staticClass:"title"},[t._v("Edit "+t._s(t.$route.params.type))])]),s("p",[t._v("Not yet!")])])},n=[],l={name:"edit"},i=l,o=s("2877"),c=Object(o["a"])(i,a,n,!1,null,null,null);e["default"]=c.exports},c11a:function(t,e,s){}}]);