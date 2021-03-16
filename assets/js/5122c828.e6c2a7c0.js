(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{132:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var o=r(0),a=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,n=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,h=p["".concat(n,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(h,l(l({ref:t},c),{},{components:r})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var c=2;c<i;c++)n[c]=r[c];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var o=r(3),a=r(7),i=(r(0),r(132)),n={id:"t_brief-editor-tour",title:"Brief Editor Tour",sidebar_label:"Brief Editor Tour"},l={unversionedId:"t_brief-editor-tour",id:"t_brief-editor-tour",isDocsHomePage:!1,title:"Brief Editor Tour",description:"Before we start work on the report, let's take a quick tour of the UI. We'll be looking at most of the UI in detail as we build our report.",source:"@site/docs/t_brief-editor-tour.md",slug:"/t_brief-editor-tour",permalink:"/BIRT-Dev/docs/t_brief-editor-tour",editUrl:"https://github.com/chloetz/BIRT-Dev/docs/t_brief-editor-tour.md",version:"current",sidebar_label:"Brief Editor Tour",sidebar:"someSidebar",previous:{title:"Community",permalink:"/BIRT-Dev/docs/community"},next:{title:"Grids",permalink:"/BIRT-Dev/docs/t_grids"}},s=[{value:"Cheat Sheets",id:"cheat-sheets",children:[]},{value:"Layout Editor",id:"layout-editor",children:[]},{value:"Views",id:"views",children:[]},{value:"Displaying Views",id:"displaying-views",children:[]}],c={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Before we start work on the report, let's take a quick tour of the UI. We'll be looking at most of the UI in detail as we build our report."),Object(i.b)("h2",{id:"cheat-sheets"},"Cheat Sheets"),Object(i.b)("p",null,'Notice at the right of your Eclipse workspace (for the default configuration) is a view called "Cheat Sheets." This view walks you though the process of building a report based on the template you selected.'),Object(i.b)("p",null,"For now, let's go ahead and close that view by clicking on the X (close) button in the upper left corner of the view, since we'll be following the steps in this tutorial."),Object(i.b)("h2",{id:"layout-editor"},"Layout Editor"),Object(i.b)("p",null,"The central area is the Layout Editor. This is the place where you create your report design. The editor has five tabs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Layout - Where you edit your report design.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Preview - Runs your report and shows the output.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Script - Where you add JavaScript to your report to customize its behavior.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"XML Source - You can view and modify the XML source of a report from here.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Master Page - Used to format page data such as page headers."))),Object(i.b)("h2",{id:"views"},"Views"),Object(i.b)("p",null,"Around the editor are a number of views: The views below can be arranged to the left, right or bottom of the Layout Editor"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Palette - BIRT View that shows the standard report items you can add to your report using drag & drop.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Outline - BIRT View that shows the structure of your report as a tree view.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigator - Standard Eclipse view that shows your projects, and the reports within your projects.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data Explorer - BIRT View that shows your data sources (connections), data sets (queries) and report parameters. You also use this view to add data set columns to your report layout.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Property Editor - BIRT View that displays properties for many report items. It has tabs and groupings that organize properties into categories.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Properties View - Standard Eclipse view that shows all properties for a report item as a simple list. This view is optional, and we will not use it in this tutorial.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Library Explorer View - BIRT allows the reuse of report objects, such as tables, data sources and styles. Objects created for reuse are stored in a library file. The Library Explorer will display Libraries that exist in the resource folder. Developed libraries can be added to the resource folder by selecting File->Publish Library to Resource Folder or by right clicking in Library Explorer and selecting add. The resource folder location can be configured at Window->Preferences->Report Design->Resource."))),Object(i.b)("h2",{id:"displaying-views"},"Displaying Views"),Object(i.b)("p",null,'You can arrange your views any way you like. You can also hide them by clicking the "X" button next to the view tab. If you accidentally hide a view, you can display it again by using the Window->Show View menu item.'),Object(i.b)("p",null,"Many people find that a convenient layout is to have the Palette, Navigator, Outline and Data Explorer docked at the left edge of your workspace, and the Property Editor and Properties view docked at the bottom of the workspace."))}u.isMDXComponent=!0}}]);