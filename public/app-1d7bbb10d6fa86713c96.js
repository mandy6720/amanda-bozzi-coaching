webpackJsonp([0xd2a57dc1d883],{78:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(372),options:{plugins:[]}},{plugin:t(363),options:{plugins:[],trackingId:"UA-110601944-1"}},{plugin:t(364),options:{plugins:[],color:"#c62828"}},{plugin:t(362),options:{plugins:[]}},{plugin:t(367),options:{plugins:[]}},{plugin:t(366),options:{plugins:[]}}]},207:function(n,e,t){"use strict";var o;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(324),"component---src-templates-post-jsx":t(329),"component---src-templates-tag-jsx":t(330),"component---src-templates-category-jsx":t(328),"component---src-pages-about-jsx":t(326),"component---src-pages-index-jsx":t(327)},e.json=(o={"layout-index.json":t(4),"offline-plugin-app-shell-fallback.json":t(343)},o["layout-index.json"]=t(4),o["bold-mage.json"]=t(335),o["layout-index.json"]=t(4),o["the-fallen-time.json"]=t(360),o["layout-index.json"]=t(4),o["random-project-4-with-super-long-title-phase-one.json"]=t(344),o["layout-index.json"]=t(4),o["the-fairys-witches.json"]=t(359),o["layout-index.json"]=t(4),o["the-butterfly-of-the-edge.json"]=t(358),o["layout-index.json"]=t(4),o["birch-in-the-roses.json"]=t(334),o["layout-index.json"]=t(4),o["angels-of-mist.json"]=t(332),o["layout-index.json"]=t(4),o["big-test.json"]=t(333),o["layout-index.json"]=t(4),o["tags-programming.json"]=t(350),o["layout-index.json"]=t(4),o["tags-stuff.json"]=t(353),o["layout-index.json"]=t(4),o["tags-other.json"]=t(349),o["layout-index.json"]=t(4),o["tags-test.json"]=t(356),o["layout-index.json"]=t(4),o["tags-something.json"]=t(352),o["layout-index.json"]=t(4),o["tags-tagging.json"]=t(355),o["layout-index.json"]=t(4),o["tags-say-hi.json"]=t(351),o["layout-index.json"]=t(4),o["tags-more-tags.json"]=t(348),o["layout-index.json"]=t(4),o["tags-testing.json"]=t(357),o["layout-index.json"]=t(4),o["tags-another-one.json"]=t(345),o["layout-index.json"]=t(4),o["tags-tag.json"]=t(354),o["layout-index.json"]=t(4),o["tags-cheese.json"]=t(346),o["layout-index.json"]=t(4),o["tags-huge.json"]=t(347),o["layout-index.json"]=t(4),o["categories-tech.json"]=t(340),o["layout-index.json"]=t(4),o["categories-another-one.json"]=t(336),o["layout-index.json"]=t(4),o["categories-random.json"]=t(338),o["layout-index.json"]=t(4),o["categories-something.json"]=t(339),o["layout-index.json"]=t(4),o["categories-test-3.json"]=t(341),o["layout-index.json"]=t(4),o["categories-moar.json"]=t(337),o["layout-index.json"]=t(4),o["about.json"]=t(331),o["layout-index.json"]=t(4),o["index.json"]=t(342),o),e.layouts={"layout---index":t(325)}},208:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(7),p=o(l),f=t(125),d=o(f),m=t(58),g=o(m),h=t(78),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},x=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);x.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=x,n.exports=e.default},58:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(448),a=o(r),u=(0,a.default)();n.exports=u},209:function(n,e,t){"use strict";var o=t(77),r={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(e.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,o.matchPath)(u,{path:n.path})||(0,o.matchPath)(u,{path:n.matchPath}))return s=n,r[u]=n,!0}else{if((0,o.matchPath)(u,{path:n.path,exact:!0}))return s=n,r[u]=n,!0;if((0,o.matchPath)(u,{path:n.path+"index.html"}))return s=n,r[u]=n,!0}return!1}),s}}},210:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(99),a=o(r),u=t(78),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},331:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(376)})})}},332:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9fa24562b7fa,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(377)})})}},333:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd4f2c1887bbe,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(378)})})}},334:function(n,e,t){t(3),n.exports=function(n){return t.e(73939936618060,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(379)})})}},335:function(n,e,t){t(3),n.exports=function(n){return t.e(0x5f99141bd9df,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(380)})})}},336:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81296eefdff0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(381)})})}},337:function(n,e,t){t(3),n.exports=function(n){return t.e(73254467154745,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(382)})})}},338:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb4fb314415ad,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(383)})})}},339:function(n,e,t){t(3),n.exports=function(n){return t.e(0x620bd45b1a89,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(384)})})}},340:function(n,e,t){t(3),n.exports=function(n){return t.e(86242794778721,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(385)})})}},341:function(n,e,t){t(3),n.exports=function(n){return t.e(84311424391466,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(386)})})}},342:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(387)})})}},4:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(101)})})}},343:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(388)})})}},344:function(n,e,t){t(3),n.exports=function(n){return t.e(33042797743989,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(389)})})}},345:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81a38731c630,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(390)})})}},346:function(n,e,t){t(3),n.exports=function(n){return t.e(65611441667662,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},347:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf154838ecb1e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(392)})})}},348:function(n,e,t){t(3),n.exports=function(n){return t.e(31698914519776,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(393)})})}},349:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd84ca2f2aac,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(394)})})}},350:function(n,e,t){t(3),n.exports=function(n){return t.e(20956934260092,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(395)})})}},351:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd84c5c500e0a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},352:function(n,e,t){t(3),n.exports=function(n){return t.e(0xcc0040e2dd93,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(397)})})}},353:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf81835755154,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(398)})})}},354:function(n,e,t){t(3),n.exports=function(n){return t.e(0x63c62a4ba499,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},355:function(n,e,t){t(3),n.exports=function(n){return t.e(0x91a4df6aa80e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},356:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf3126e66c535,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},357:function(n,e,t){t(3),n.exports=function(n){return t.e(79338355588033,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},358:function(n,e,t){t(3),n.exports=function(n){return t.e(22820678339136,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},359:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa76cab327e0f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},360:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd6a4403459ab,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},325:function(n,e,t){t(3),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(211)})})}},125:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(209)),u=o(a),s=t(58),i=o(s),c=void 0,l={},p={},f={},d={},m={},g=[],h=[],y={},x=[],j={},v=function(n){return n&&n.default||n},b=void 0,C=!0;b=t(212)({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(n){k(n,function(){x=x.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var N=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},w=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){t(null,d[e])});else{var o=void 0;o="component---"===e.slice(0,12)?p.components[e]:"layout---"===e.slice(0,9)?p.layouts[e]:p.json[e],o(function(n,o){d[e]=o,t(n,o)})}},R=function(e,t){m[e]?n.nextTick(function(){t(null,m[e])}):k(e,function(n,o){if(n)t(n);else{var r=v(o());m[e]=r,t(n,r)}})},P=1,_={empty:function(){h=[],y={},j={},x=[],g=[]},addPagesArray:function(n){g=n;var e="";e="",c=(0,u.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return h.pop()},enqueue:function(n){if(!g.some(function(e){return e.path===n}))return!1;var e=1/P;P+=1,y[n]?y[n]+=1:y[n]=1,_.has(n)||h.unshift(n),h.sort(w);var t=c(n);return t.jsonName&&(j[t.jsonName]?j[t.jsonName]+=1+e:j[t.jsonName]=1+e,x.indexOf(t.jsonName)!==-1||d[t.jsonName]||x.unshift(t.jsonName)),t.componentChunkName&&(j[t.componentChunkName]?j[t.componentChunkName]+=1+e:j[t.componentChunkName]=1+e,x.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||x.unshift(t.componentChunkName)),x.sort(N),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:j}},getPages:function(){return{pathArray:h,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return h.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),C=!1;var o=c(e);if(!o)return console.log("A page wasn't found for \""+e+'"'),t();if(e=o.path,f[e])return n.nextTick(function(){t(f[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:f[e]})}),f[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){f[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return R(o.componentChunkName,function(n,e){n&&console.log("Loading the component for "+o.path+" failed"),r=e,s()}),R(o.jsonName,function(n,e){n&&console.log("Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&R(o.layout,function(n,e){n&&console.log("Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(n){return h.length-h.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:_.getResourcesForPathname};e.default=_}).call(e,t(39))},406:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"bold-mage.json",path:"/bold-mage"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"the-fallen-time.json",path:"/the-fallen-time"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"random-project-4-with-super-long-title-phase-one.json",path:"/random-project-4-with-super-long-title-phase-one"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"the-fairys-witches.json",path:"/the-fairys-witches"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"the-butterfly-of-the-edge.json",path:"/the-butterfly-of-the-edge"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"birch-in-the-roses.json",path:"/birch-in-the-roses"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"angels-of-mist.json",path:"/angels-of-mist"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"big-test.json",path:"/big-test"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-programming.json",path:"/tags/programming/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-stuff.json",path:"/tags/stuff/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-other.json",path:"/tags/other/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-test.json",path:"/tags/test/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-something.json",path:"/tags/something/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-tagging.json",path:"/tags/tagging/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-say-hi.json",path:"/tags/say-hi/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-more-tags.json",path:"/tags/more-tags/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-testing.json",path:"/tags/testing/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-another-one.json",path:"/tags/another-one/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-tag.json",path:"/tags/tag/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-cheese.json",path:"/tags/cheese/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-huge.json",path:"/tags/huge/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-tech.json",path:"/categories/tech/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-another-one.json",path:"/categories/another-one/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-random.json",path:"/categories/random/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-something.json",path:"/categories/something/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-test-3.json",path:"/categories/test-3/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-moar.json",path:"/categories/moar/"},{componentChunkName:"component---src-pages-about-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"}]},212:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(78),u=t(1),s=o(u),i=t(172),c=o(i),l=t(77),p=t(371),f=t(305),d=o(f),m=t(210),g=o(m),h=t(58),y=o(h),x=t(406),j=o(x),v=t(407),b=o(v),C=t(208),N=o(C),w=t(207),k=o(w),R=t(125),P=o(R);t(293),window.___emitter=y.default,P.default.addPagesArray(j.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var _=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=_[n];return null!=e&&(g.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(213);var o=function(n){function e(t){t.page.path===P.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(o),window.___history.push(n))}var t=_[n];if(t&&(n=t.toPath),window.location.pathname!==n){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);P.default.getResourcesForPathname(n)?(clearTimeout(o),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],f=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},m=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(i?i:f,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(m,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(N.default,r({page:!0},o)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},407:function(n,e){n.exports=[]},213:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(58),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},305:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},361:function(n,e){"use strict";n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,o=n.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},362:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(52),a=t(361),u=o(a);(0,u.default)(window,function(n){(0,r.navigateTo)(n)})},363:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},364:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(450),a=o(r);e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"#29d"};window.___emitter.on("onDelayedLoadPageResources",function(){a.default.configure(e),a.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){a.default.done()});var t="#nprogress {\n    pointer-events: none;\n}\n#nprogress .bar {\n    background: "+e.color+";\n    position: fixed;\n    z-index: 1031;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n}\n#nprogress .peg {\n    display: block;\n    position: absolute;\n    right: 0px;\n    width: 100px;\n    height: 100%;\n    box-shadow: 0 0 10px "+e.color+", 0 0 5px "+e.color+";\n    opacity: 1.0;\n    -webkit-transform: rotate(3deg) translate(0px, -4px);\n    -ms-transform: rotate(3deg) translate(0px, -4px);\n    transform: rotate(3deg) translate(0px, -4px);\n}\n#nprogress .spinner {\n    display: block;\n    position: fixed;\n    z-index: 1031;\n    top: 15px;\n    right: 15px;\n}\n#nprogress .spinner-icon {\n    width: 18px;\n    height: 18px;\n    box-sizing: border-box;\n    border: solid 2px transparent;\n    border-top-color: "+e.color+";\n    border-left-color: "+e.color+";\n    border-radius: 50%;\n    -webkit-animation: nprogress-spinner 400ms linear infinite;\n    animation: nprogress-spinner 400ms linear infinite;\n}\n.nprogress-custom-parent {\n    overflow: hidden;\n    position: relative;\n}\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n    position: absolute;\n}\n@-webkit-keyframes nprogress-spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@keyframes nprogress-spinner {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n",o=document.createElement("style");o.id="nprogress-styles",o.innerHTML=t,document.head.appendChild(o)}},324:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(365)})})}},366:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},367:function(n,e){"use strict";e.onRouteUpdate=function(n){n.location;setTimeout(function(){"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()},0)}},372:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.location.hash.replace("#","");if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},448:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).map(function(n){n(t)}),(n["*"]||[]).map(function(n){n(e,t)})}}}n.exports=t},450:function(n,e,t){var o,r;!function(a,u){o=u,r="function"==typeof o?o.call(e,t,e,n):o,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,t){return n<e?e:n>t?t:n}function e(n){
return 100*(-1+n)}function t(n,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},r.transition="all "+t+"ms "+o,r}function o(n,e){var t="string"==typeof n?n:u(n);return t.indexOf(" "+e+" ")>=0}function r(n,e){var t=u(n),r=t+e;o(t,e)||(n.className=r.substring(1))}function a(n,e){var t,r=u(n);o(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function s(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var i={};i.version="0.2.0";var c=i.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};i.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},i.status=null,i.set=function(e){var o=i.isStarted();e=n(e,c.minimum,1),i.status=1===e?null:e;var r=i.render(!o),a=r.querySelector(c.barSelector),u=c.speed,s=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=i.getPositioningCSS()),p(a,t(e,u,s)),1===e?(p(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){p(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){i.remove(),n()},u)},u)):setTimeout(n,u)}),this},i.isStarted=function(){return"number"==typeof i.status},i.start=function(){i.status||i.set(0);var n=function(){setTimeout(function(){i.status&&(i.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},i.done=function(n){return n||i.status?i.inc(.3+.5*Math.random()).set(1):this},i.inc=function(e){var t=i.status;return t?("number"!=typeof e&&(e=(1-t)*n(Math.random()*t,.1,.95)),t=n(t+e,0,.994),i.set(t)):i.start()},i.trickle=function(){return i.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;i.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&i.start(),n++,e++,t.always(function(){e--,0===e?(n=0,i.done()):i.set((n-e)/n)}),this):this}}(),i.render=function(n){if(i.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),u=n?"-100":e(i.status||0),l=document.querySelector(c.parent);return p(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&s(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},i.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&s(n)},i.isRendered=function(){return!!document.getElementById("nprogress")},i.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),p=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,o=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if(t=r[o]+a,t in e)return t;return n}function t(t){return t=n(t),a[t]||(a[t]=e(t))}function o(n,e,o){e=t(e),n.style[e]=o}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var t,r,a=arguments;if(2==a.length)for(t in e)r=e[t],void 0!==r&&e.hasOwnProperty(t)&&o(n,t,r);else o(n,a[1],a[2])}}();return i})},39:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=r(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||g||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},326:function(n,e,t){t(3),n.exports=function(n){return t.e(0x83323ebd9d39,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(220)})})}},327:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(221)})})}},328:function(n,e,t){t(3),n.exports=function(n){return t.e(0x7600c7af1a80,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(222)})})}},329:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc1d74b0851a0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(223)})})}},330:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa6cd3c51205b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(224)})})}}});
//# sourceMappingURL=app-1d7bbb10d6fa86713c96.js.map