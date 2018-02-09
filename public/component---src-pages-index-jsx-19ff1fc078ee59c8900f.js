webpackJsonp([0xc23565d713b7],{81:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),u=l(i),s=a(19),c=l(s),d=a(12),f=l(d),m=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,l=e.postSEO,n=void 0,r=void 0,o=void 0,i=void 0;if(l){var s=t.frontmatter;n=s.title,r=s.description?s.description:t.excerpt,o=s.cover,i=f.default.siteUrl+f.default.pathPrefix+a}else n=f.default.siteTitle,r=f.default.siteDescription,o=f.default.siteLogo;var d="/"===f.default.pathPrefix?"":f.default.pathPrefix;o=f.default.siteUrl+d+o;var m=f.default.siteUrl+f.default.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:n,alternateName:f.default.siteTitleAlt?f.default.siteTitleAlt:""}];return l&&p.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:n,image:o}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:n,alternateName:f.default.siteTitleAlt?f.default.siteTitleAlt:"",headline:n,image:{"@type":"ImageObject",url:o},description:r}]),u.default.createElement(c.default,null,u.default.createElement("meta",{name:"description",content:r}),u.default.createElement("meta",{name:"image",content:o}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),u.default.createElement("meta",{property:"og:url",content:l?i:m}),l?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:n}),u.default.createElement("meta",{property:"og:description",content:r}),u.default.createElement("meta",{property:"og:image",content:o}),u.default.createElement("meta",{property:"fb:app_id",content:f.default.siteFBAppID?f.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:f.default.userTwitter?f.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:n}),u.default.createElement("meta",{name:"twitter:description",content:r}),u.default.createElement("meta",{name:"twitter:image",content:o}))},t}(i.Component);t.default=m,e.exports=t.default},227:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=a(1),u=l(i),s=a(19),c=l(s),d=a(81),f=l(d),m=a(12),p=l(m),h=a(47),y=l(h),E=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"container"},u.default.createElement(c.default,{title:p.default.siteTitle}),u.default.createElement(f.default,{postEdges:e}),u.default.createElement("div",{className:"hero"},u.default.createElement("div",{className:"hero-content"},u.default.createElement("h1",{className:""},"Get Unstuck."),u.default.createElement("h4",null,"Stop wasting your time in an unfulfilling, unsatisfying, soul-sucking job and start doing work you love."),u.default.createElement("a",{href:"https://forms.aweber.com/form/57/2063595657.htm",target:"_blank"},u.default.createElement("button",{className:"gold-button"},"Get Started")))),u.default.createElement("div",{className:"home-content"},u.default.createElement("div",{className:"divider-text"},u.default.createElement("h1",null,"Let me know if any of this sounds familiar...")),u.default.createElement("div",{className:"content-section"},u.default.createElement("ul",{className:"no-bullet-list gold-bullet"},u.default.createElement("li",null,"You feel like everybody else is moving along on their path and you are just standing still. Paralyzed."),u.default.createElement("li",null,"You’re doing everything you’re ‘supposed’ to do, everything you ‘should’ do and yet you’re left completely unfulfilled and unsatisfied."),u.default.createElement("li",null,"You remember a time when you were excited and passionate but it somehow got buried under the day to day overwhelm, the crazy schedule, or that job that - if we're being honest - isn't going anywhere."),u.default.createElement("li",null,"The zest you once had for life is just slowly drifting away."),u.default.createElement("li",null,"Let’s face it. you are S-T-U-C-K ."))),u.default.createElement("div",{className:"divider-text"},u.default.createElement("h1",null,"What if you want more?")),u.default.createElement("div",{className:"content-section"},u.default.createElement("ul",{className:"no-bullet-list gold-bullet"},u.default.createElement("li",null,"You’re creative, smart, and pretty ambitious. "),u.default.createElement("li",null,"You dreamed of so much more."),u.default.createElement("li",null,"You’re not quite willing to settle just yet."))),u.default.createElement("div",{className:"divider-text"},u.default.createElement("h1",null,"Hi there, I'm Amanda 👋 ")),u.default.createElement("div",{className:"content-section"},u.default.createElement("ul",{className:"no-bullet-list"},u.default.createElement("li",null,"I help ambitious millennials create a professional life they love by using proven techniques used by the biggest tech companies and fastest-growing startups so they can achieve their goals faster."))),u.default.createElement("div",{className:"divider-text",id:"get-started"},u.default.createElement("h1",null,"🔥 Re-ignite your passion")),u.default.createElement("div",{className:"content-section"},u.default.createElement("ul",{className:"no-bullet-list gold-bullet"},u.default.createElement("li",null,"Start creating a life you're passionate about."),u.default.createElement("li",null,"Find your perfect side hustle with this ",u.default.createElement("a",{href:"https://forms.aweber.com/form/57/2063595657.htm",target:"_blank"},"free workbook")," (or test your current business idea against it)")))),u.default.createElement(y.default,{config:p.default}))},t}(u.default.Component);t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-19ff1fc078ee59c8900f.js.map