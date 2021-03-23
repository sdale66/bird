(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(133)),o={id:"overview-architecture",title:"Archticture",sidebar_label:"Archticture"},s={unversionedId:"overview-architecture",id:"overview-architecture",isDocsHomePage:!1,title:"Archticture",description:"Architectur Overview of BIRT",source:"@site/docs/overview-architecture.md",slug:"/overview-architecture",permalink:"/BIRT-Dev/docs/overview-architecture",editUrl:"/docs/overview-architecture.md",version:"current",sidebar_label:"Archticture",sidebar:"someSidebar",previous:{title:"Design",permalink:"/BIRT-Dev/docs/overview-design"},next:{title:"Designer",permalink:"/BIRT-Dev/docs/overview-designer"}},c=[{value:"Architectur Overview of BIRT",id:"architectur-overview-of-birt",children:[]},{value:"The Anatomy of a Report",id:"the-anatomy-of-a-report",children:[]},{value:"BIRT Components",id:"birt-components",children:[]}],l={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"architectur-overview-of-birt"},"Architectur Overview of BIRT"),Object(i.b)("p",null,"BIRT has two main components: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a report designer based on Eclipse, and "),Object(i.b)("li",{parentName:"ul"},"a runtime component that you can add to your app server. ")),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:r(191).default})),Object(i.b)("h2",{id:"the-anatomy-of-a-report"},"The Anatomy of a Report"),Object(i.b)("p",null,"BIRT reports consist of four main parts: data, data transforms, business logic and presentation."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data - Databases, web services, Java objects all can supply data to your BIRT report. BIRT provides JDBC, XML, Web Services, and Flat File support, as well as support for using code to get at other sources of data. BIRT's use of the Open Data Access (ODA) framework allows anyone to build new UI and runtime support for any kind of tabular data. Further, a single report can include data from any number of data sources. BIRT also supplies a feature that allows disparate data sources to be combined using inner and outer joins.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Data Transforms - Reports present data sorted, summarized, filtered and grouped to fit the user\'s needs. While databases can do some of this work, BIRT must do it for "simple" data sources such as flat files or Java objects. BIRT allows sophisticated operations such as grouping on sums, percentages of overall totals and more.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Business Logic - Real-world data is seldom structured exactly as you'd like for a report. Many reports require business-specific logic to convert raw data into information useful for the user. If the logic is just for the report, you can script it using BIRT's JavaScript support. If your application already contains the logic, you can call into your existing Java code.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Presentation - Once the data is ready, you have a wide range of options for presenting it to the user. Tables, charts, text and more. A single data set can appear in multiple ways, and a single report can present data from multiple data sets."))),Object(i.b)("h2",{id:"birt-components"},"BIRT Components"),Object(i.b)("p",null,"The BIRT project delivers many components. These are listed below with a brief description. More information about BIRT components and architecture is available in the documentation section."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"BIRT Report Designer - The BIRT Report Designer is an Eclipse perspective that is used to create BIRT report designs. These designs are stored in an open XML format. The Designer can be downloaded as a Rich Client Platform (RCP) application, a set of plug-ins to enable the Designer perspective within an existing Eclipse build or as an all in one download that includes Eclipse.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Design Engine - This engine is responsible for creating and modifying report designs. The Design Engine API (DE API) wraps the functionality of the design engine and is available for use within any Java/Java EE project. The BIRT Report Designer uses this API internally to construct the XML designs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Report Engine - The Report Engine uses the report design files to generate and render reports. Using the Report Engine API (RE API) the engine can be embedded within any Java/Java EE application. The BIRT Web Viewer uses this API to execute and display reports.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Charting Engine - The Charting Engine is used to design and generate Charts either in standalone or embedded within BIRT reports. The Charting Engine API (CE API) allows Java/Java EE developers to add charting capabilities to their applications. The Design and Report Engines make use of this API to deliver Charts.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'BIRT Viewer - The BIRT project provides a sample "viewer" that is used to preview reports within Eclipse. BIRT includes an Apache Tomcat server invoked each time you preview your report. In addition to being packaged as an Eclipse Plug-in, the Viewer is also available as a standalone Java EE application, which can be used in any JSP-compliant Java EE server. The Viewer Plug-in can also be embedded within a Rich Client Platform (RCP) application. BIRT provides web output as a single HTML document, paginated HTML, PDF, XLS, DOC, PPT, and Postscript. Additionally the viewer allows exporting the data to CSV, printing, and Table of Contents functionality.'))))}p.isMDXComponent=!0},133:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?n.a.createElement(m,s(s({ref:t},l),{},{components:r})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},191:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/BIRT-Architektur-01_V2-e524e89ec093787b4df2f42b16bb9c7b.png"}}]);