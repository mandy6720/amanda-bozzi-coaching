webpackJsonp([0x7600c7af1a80],{79:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),f=o(i),c=n(29),l=o(c),s=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return f.default.createElement("div",null,e.map(function(e){return f.default.createElement(l.default,{to:e.path,key:e.title},f.default.createElement("h1",null,e.title))}))},t}(f.default.Component);t.default=s,e.exports=t.default},228:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(1),f=o(i),c=n(23),l=o(c),s=n(79),p=o(s),d=n(15),h=o(d),y=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.pathContext.category,t=this.props.data.allMarkdownRemark.edges;return f.default.createElement("div",{className:"category-container"},f.default.createElement(l.default,{title:'Posts in category "'+e+'" | '+h.default.siteTitle}),f.default.createElement(p.default,{postEdges:t}))},t}(f.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-category-jsx-3a50fee79b9519c47f96.js.map