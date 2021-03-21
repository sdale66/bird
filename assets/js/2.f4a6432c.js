/*! For license information please see 2.f4a6432c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(133),l=a(135),o=a(24),s=a(63),i=a.n(s);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){const e=Object(n.useRef)(null),t=Object(o.useLocation)();return Object(n.useEffect)((()=>{t.hash||u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:i.a.skipToContent,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(l.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=a(134),f=a(155),h=a(64),b=a.n(h);var v=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(f.a)(),{announcementBar:a}=Object(m.useThemeConfig)();if(!a)return null;const{content:n,backgroundColor:o,textColor:s,isCloseable:i}=a;return!n||i&&e?null:r.a.createElement("div",{className:b.a.announcementBar,style:{backgroundColor:o,color:s},role:"banner"},r.a.createElement("div",{className:Object(c.a)(b.a.announcementBarContent,{[b.a.announcementBarCloseable]:i}),dangerouslySetInnerHTML:{__html:n}}),i?r.a.createElement("button",{type:"button",className:b.a.announcementBarClose,onClick:t,"aria-label":Object(l.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=a(164),g=a(3),k=a(136),E=a(139),O=a(69),j=a.n(O),y=a(162);function _({to:e,href:t,label:a,prependBaseUrlToHref:n,...c}){const l=Object(E.a)(e),o=Object(E.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(k.a,Object(g.a)({className:"footer__link-item"},t?{href:n?o:t}:{to:l},c),a)}const C=({sources:e,alt:t})=>r.a.createElement(y.a,{className:"footer__logo",alt:t,sources:e});var w=function(){const{footer:e}=Object(m.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{},l={light:Object(E.a)(n.src),dark:Object(E.a)(n.srcDark||n.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(_,e))))):null)))),(n||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},n.href?r.a.createElement(k.a,{href:n.href,className:j.a.footerLogoLink},r.a.createElement(C,{alt:n.alt,sources:l})):r.a.createElement(C,{alt:n.alt,sources:l})),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},N=a(8);const T="light",L="dark",S=e=>e===L?L:T,D=()=>N.a.canUseDOM?S(document.documentElement.getAttribute("data-theme")):T,x=e=>{try{localStorage.setItem("theme",S(e))}catch(t){console.error(t)}};var I=()=>{const{colorMode:{disableSwitch:e,respectPrefersColorScheme:t}}=Object(m.useThemeConfig)(),[a,r]=Object(n.useState)(D),c=Object(n.useCallback)((()=>{r(T),x(T)}),[]),l=Object(n.useCallback)((()=>{r(L),x(L)}),[]);return Object(n.useEffect)((()=>{document.documentElement.setAttribute("data-theme",S(a))}),[a]),Object(n.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&r(S(e))}catch(t){console.error(t)}}),[r]),Object(n.useEffect)((()=>{e&&!t||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{r(e?L:T)}))}),[]),{isDarkTheme:a===L,setLightTheme:c,setDarkTheme:l}},A=a(157);var B=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=I();return r.a.createElement(A.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};const M="docusaurus.tab.";var P=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)(((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith(M)){e[a.substring(M.length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t((t=>({...t,[e]:n}))),a(e,n)}}};const V="docusaurus.announcement.dismiss",U="docusaurus.announcement.id";var R=()=>{const{announcementBar:e}=Object(m.useThemeConfig)(),[t,a]=Object(n.useState)(!0),r=Object(n.useCallback)((()=>{localStorage.setItem(V,"true"),a(!0)}),[]);return Object(n.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=localStorage.getItem(U);"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;localStorage.setItem(U,t),r&&localStorage.setItem(V,"false"),(r||"false"===localStorage.getItem(V))&&a(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}},F=a(156);var X=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=P(),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}=R();return r.a.createElement(F.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:c}},e.children)};function H({children:e}){return r.a.createElement(B,null,r.a.createElement(X,null,r.a.createElement(m.DocsPreferredVersionContextProvider,null,e)))}var $=a(25),z=a(16);function G({locale:e,version:t,tag:a}){return r.a.createElement($.a,null,e&&r.a.createElement("meta",{name:"docusaurus_locale",content:`${e}`}),t&&r.a.createElement("meta",{name:"docusaurus_version",content:t}),a&&r.a.createElement("meta",{name:"docusaurus_tag",content:a}))}var W=a(147);function Y(){const{i18n:{defaultLocale:e,locales:t}}=Object(z.default)(),a=Object(m.useAlternatePageUtils)();return r.a.createElement($.a,null,t.map((e=>r.a.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),r.a.createElement("link",{rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function K({permalink:e}){const{siteConfig:{url:t}}=Object(z.default)(),a=function(){const{siteConfig:{url:e}}=Object(z.default)(),{pathname:t}=Object(o.useLocation)();return e+Object(E.a)(t)}(),n=e?`${t}${e}`:a;return r.a.createElement($.a,null,r.a.createElement("meta",{property:"og:url",content:n}),r.a.createElement("link",{rel:"canonical",href:n}))}function Q(e){const{siteConfig:t,i18n:{currentLocale:a,localeConfigs:n}}=Object(z.default)(),{favicon:c,themeConfig:{image:l,metadatas:o}}=t,{title:s,description:i,image:u,keywords:d,searchMetadatas:f}=e,h=Object(E.a)(c),b=a,v=n[a].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,null,r.a.createElement("html",{lang:b,dir:v}),c&&r.a.createElement("link",{rel:"shortcut icon",href:h})),r.a.createElement(W.a,{title:s,description:i,keywords:d,image:u||l}),r.a.createElement(K,null),r.a.createElement(Y,null),r.a.createElement(G,Object(g.a)({tag:m.DEFAULT_SEARCH_TAG,locale:a},f)),r.a.createElement($.a,null,o.map(((e,t)=>r.a.createElement("meta",Object(g.a)({key:`metadata_${t}`},e))))))}a(70);var q=function(){Object(n.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(71);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n}=e;return q(),r.a.createElement(H,null,r.a.createElement(Q,e),r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(p.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(w,null))}},140:function(e,t,a){"use strict";var n=a(0),r=a(157);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},141:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),l=a(133),o=a(136),s=a(139),i=a(24),u=a(134);function d({activeBasePath:e,activeBaseRegex:t,to:a,href:r,label:l,activeClassName:i="navbar__link--active",prependBaseUrlToHref:u,...d}){const m=Object(s.a)(a),f=Object(s.a)(e),h=Object(s.a)(r,{forcePrependBaseUrl:!0});return c.a.createElement(o.a,Object(n.a)({},r?{href:u?h:r}:{isNavLink:!0,activeClassName:i,to:m,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(f)}:null},d),l)}function m({items:e,position:t,className:a,...o}){var s;const i=Object(r.useRef)(null),u=Object(r.useRef)(null),[m,f]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i]);const h=(e,t=!1)=>Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?c.a.createElement("div",{ref:i,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":m})},c.a.createElement(d,Object(n.a)({className:h(a)},o,{onClick:o.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f(!m))}}),null!==(s=o.children)&&void 0!==s?s:o.label),c.a.createElement("ul",{ref:u,className:"dropdown__menu"},e.map((({className:t,...a},r)=>c.a.createElement("li",{key:r},c.a.createElement(d,Object(n.a)({onKeyDown:t=>{if(r===e.length-1&&"Tab"===t.key){t.preventDefault(),f(!1);const e=i.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active",className:h(t,!0)},a))))))):c.a.createElement(d,Object(n.a)({className:h(a)},o))}function f({items:e,className:t,position:a,...o}){var s,m,f;const h=Object(r.useRef)(null),{pathname:b}=Object(i.useLocation)(),[v,p]=Object(r.useState)((()=>{var t;return null===(t=!(null!=e&&e.some((e=>Object(u.isSamePath)(e.to,b)))))||void 0===t||t})),g=(e,t=!1)=>Object(l.a)("menu__link",{"menu__link--sublist":t},e);if(!e)return c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(d,Object(n.a)({className:g(t)},o)));const k=null!==(s=h.current)&&void 0!==s&&s.scrollHeight?`${null===(m=h.current)||void 0===m?void 0:m.scrollHeight}px`:void 0;return c.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":v})},c.a.createElement(d,Object(n.a)({role:"button",className:g(t,!0)},o,{onClick:e=>{e.preventDefault(),p((e=>!e))}}),null!==(f=o.children)&&void 0!==f?f:o.label),c.a.createElement("ul",{className:"menu__list",ref:h,style:{height:v?void 0:k}},e.map((({className:e,...t},a)=>c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(d,Object(n.a)({activeClassName:"menu__link--active",className:g(e)},t,{onClick:o.onClick})))))))}t.a=function({mobile:e=!1,...t}){const a=e?f:m;return c.a.createElement(a,t)}},155:function(e,t,a){"use strict";var n=a(0),r=a(156);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},156:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},157:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},158:function(e,t,a){"use strict";var n=a(0),r=a(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),l=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)((()=>{const e={passive:!0};return window.addEventListener("scroll",l,e),()=>window.removeEventListener("scroll",l,e)}),t),a}},159:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},160:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=a(8);const c={desktop:"desktop",mobile:"mobile"};t.a=function(){const e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}const[a,l]=Object(n.useState)(t);return Object(n.useEffect)((()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){l(t())}}),[]),a}},161:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),l=a(136),o=a(162),s=a(139),i=a(16),u=a(134);t.a=e=>{const{isClient:t}=Object(i.default)(),{navbar:{title:a,logo:r={src:""}}}=Object(u.useThemeConfig)(),{imageClassName:d,titleClassName:m,...f}=e,h=Object(s.a)(r.href||"/"),b={light:Object(s.a)(r.src),dark:Object(s.a)(r.srcDark||r.src)};return c.a.createElement(l.a,Object(n.a)({to:h},f,r.target&&{target:r.target}),r.src&&c.a.createElement(o.a,{key:t,className:d,sources:b,alt:r.alt||a||"Logo"}),null!=a&&c.a.createElement("strong",{className:m},a))}},162:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),l=a(133),o=a(16),s=a(140),i=a(67),u=a.n(i);t.a=e=>{const{isClient:t}=Object(o.default)(),{isDarkTheme:a}=Object(s.a)(),{sources:r,className:i,alt:d="",...m}=e,f=t?a?["dark"]:["light"]:["light","dark"];return c.a.createElement(c.a.Fragment,null,f.map((e=>c.a.createElement("img",Object(n.a)({key:e,src:r[e],alt:d,className:Object(l.a)(u.a.themedImage,u.a[`themedImage--${e}`],i)},m)))))}},163:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=({width:e=30,height:t=30,className:a,...r})=>c.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:a,width:e,height:t,viewBox:"0 0 30 30",role:"img",focusable:"false"},r),c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},164:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),l=a(133),o=()=>null,s=a(176),i=a.n(s),u=a(134),d=a(16),m=a(65),f=a.n(m);const h=({icon:e,style:t})=>c.a.createElement("span",{className:Object(l.a)(f.a.toggle,f.a.dark),style:t},e),b=({icon:e,style:t})=>c.a.createElement("span",{className:Object(l.a)(f.a.toggle,f.a.light),style:t},e);var v=function(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:r,lightIconStyle:l}}}=Object(u.useThemeConfig)(),{isClient:o}=Object(d.default)();return c.a.createElement(i.a,Object(n.a)({disabled:!o,icons:{checked:c.a.createElement(h,{icon:t,style:a}),unchecked:c.a.createElement(b,{icon:r,style:l})}},e))},p=a(140),g=a(24),k=a(158);var E=e=>{const t=Object(g.useLocation)(),[a,n]=Object(r.useState)(e),c=Object(r.useRef)(!1),[l,o]=Object(r.useState)(0),[s,i]=Object(r.useState)(0),u=Object(r.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return Object(k.a)((({scrollY:t})=>{if(!e)return;if(t<s)return void n(!0);if(c.current)return c.current=!1,n(!1),void o(t);l&&0===t&&n(!0);const a=document.documentElement.scrollHeight-s,r=window.innerHeight;l&&t>=l?n(!1):t+r<a&&n(!0),o(t)}),[l,s,c]),Object(r.useEffect)((()=>{e&&l&&n(!0)}),[t.pathname]),Object(r.useEffect)((()=>{e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:a}},O=a(159),j=a(160),y=a(141);var _=({width:e=20,height:t=20,...a})=>c.a.createElement("svg",Object(n.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:t},a),c.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));function C({mobile:e,dropdownItemsBefore:t,dropdownItemsAfter:a,...r}){const{i18n:{currentLocale:l,locales:o,localeConfigs:s}}=Object(d.default)(),i=Object(u.useAlternatePageUtils)();function m(e){return s[e].label}const f=[...t,...o.map((e=>{const t=`pathname://${i.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:m(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":""}})),...a],h=e?"Languages":m(l);return c.a.createElement(y.a,Object(n.a)({},r,{href:"#",mobile:e,label:c.a.createElement("span",null,c.a.createElement(_,{style:{verticalAlign:"text-bottom",marginRight:5}}),c.a.createElement("span",null,h)),items:f}))}var w=a(66),N=a.n(w);function T({mobile:e}){return e?null:c.a.createElement("div",{className:N.a.searchWrapper},c.a.createElement(o,null))}const L={default:()=>y.a,localeDropdown:()=>C,search:()=>T,docsVersion:()=>a(181).default,docsVersionDropdown:()=>a(182).default,doc:()=>a(183).default};function S({type:e,...t}){const a=((e="default")=>{const t=L[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return c.a.createElement(a,t)}var D=a(161),x=a(163),I=a(68),A=a.n(I);const B="right";t.a=function(){const{navbar:{items:e,hideOnScroll:t,style:a},colorMode:{disableSwitch:s}}=Object(u.useThemeConfig)(),[i,d]=Object(r.useState)(!1),{isDarkTheme:m,setLightTheme:f,setDarkTheme:h}=Object(p.a)(),{navbarRef:b,isNavbarVisible:g}=E(t);Object(O.a)(i);const k=Object(r.useCallback)((()=>{d(!0)}),[d]),y=Object(r.useCallback)((()=>{d(!1)}),[d]),_=Object(r.useCallback)((e=>e.target.checked?h():f()),[f,h]),C=Object(j.a)();Object(r.useEffect)((()=>{C===j.b.desktop&&d(!1)}),[C]);const w=e.some((e=>"search"===e.type)),{leftItems:N,rightItems:T}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:B)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:B)}))}}(e);return c.a.createElement("nav",{ref:b,className:Object(l.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===a,"navbar--primary":"primary"===a,"navbar-sidebar--show":i,[A.a.navbarHideable]:t,[A.a.navbarHidden]:t&&!g})},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&c.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:k,onKeyDown:k},c.a.createElement(x.a,null)),c.a.createElement(D.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(l.a)("navbar__title")}),N.map(((e,t)=>c.a.createElement(S,Object(n.a)({},e,{key:t}))))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},T.map(((e,t)=>c.a.createElement(S,Object(n.a)({},e,{key:t})))),!s&&c.a.createElement(v,{className:A.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:m,onChange:_}),!w&&c.a.createElement(o,null))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(D.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!s&&i&&c.a.createElement(v,{"aria-label":"Dark mode toggle in sidebar",checked:m,onChange:_})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>c.a.createElement(S,Object(n.a)({mobile:!0},e,{onClick:y,key:t})))))))))}},176:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(177)),s=m(a(1)),i=m(a(178)),u=m(a(179)),d=a(180);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},177:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},178:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},179:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},180:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},181:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(3),r=a(0),c=a.n(r),l=a(141),o=a(138),s=a(134);function i({label:e,to:t,docsPluginId:a,...r}){var i;const u=Object(o.useActiveVersion)(a),{preferredVersion:d}=Object(s.useDocsPreferredVersion)(a),m=Object(o.useLatestVersion)(a),f=null!==(i=null!=u?u:d)&&void 0!==i?i:m,h=null!=e?e:f.label,b=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(f).path;return c.a.createElement(l.a,Object(n.a)({},r,{label:h,to:b}))}},182:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),l=a(141),o=a(138),s=a(134);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function u({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:a,dropdownItemsBefore:r,dropdownItemsAfter:u,...d}){var m,f;const h=Object(o.useActiveDocContext)(t),b=Object(o.useVersions)(t),v=Object(o.useLatestVersion)(t),{preferredVersion:p,savePreferredVersionName:g}=Object(s.useDocsPreferredVersion)(t);const k=null!==(m=null!==(f=h.activeVersion)&&void 0!==f?f:p)&&void 0!==m?m:v,E=e?"Versions":k.label,O=e?void 0:i(k).path;return c.a.createElement(l.a,Object(n.a)({},d,{mobile:e,label:E,to:O,items:function(){const e=b.map((e=>{const t=(null==h?void 0:h.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==h?void 0:h.activeVersion),onClick:()=>{g(e.name)}}})),t=[...r,...e,...u];if(!(t.length<=1))return t}(),isActive:a?()=>!1:void 0}))}},183:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),l=a(141),o=a(138),s=a(133),i=a(134);function u({docId:e,activeSidebarClassName:t,label:a,docsPluginId:r,...u}){var d;const{activeVersion:m,activeDoc:f}=Object(o.useActiveDocContext)(r),{preferredVersion:h}=Object(i.useDocsPreferredVersion)(r),b=Object(o.useLatestVersion)(r),v=null!==(d=null!=m?m:h)&&void 0!==d?d:b,p=v.docs.find((t=>t.id===e));if(!p)throw new Error(`DocNavbarItem: couldn't find any doc with id=${e} in version ${v.name}.\nAvailable docIds=\n- ${v.docs.join("\n- ")}`);return c.a.createElement(l.a,Object(n.a)({exact:!0},u,{className:Object(s.a)(u.className,{[t]:f&&f.sidebar===p.sidebar}),label:null!=a?a:p.id,to:p.path}))}}}]);