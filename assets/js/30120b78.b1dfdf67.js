(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,h=s["".concat(o,".").concat(d)]||s[d]||u[d]||a;return n?i.a.createElement(h,c(c({ref:t},p),{},{components:n})):i.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(132)),o={id:"what-is-birt",title:"What is BIRT?",sidebar_label:"What is BIRT"},c={unversionedId:"what-is-birt",id:"what-is-birt",isDocsHomePage:!1,title:"What is BIRT?",description:"The Project",source:"@site/docs/what-is-birt.md",slug:"/what-is-birt",permalink:"/BIRT-Dev/docs/what-is-birt",editUrl:"https://github.com/chloetz/BIRT-Dev/docs/what-is-birt.md",version:"current",sidebar_label:"What is BIRT",sidebar:"someSidebar",next:{title:"Design",permalink:"/BIRT-Dev/docs/overview-design"}},l=[{value:"The Project",id:"the-project",children:[]},{value:"The Groundswell",id:"the-groundswell",children:[]},{value:"The Technology Platform",id:"the-technology-platform",children:[]},{value:"The Philosophy",id:"the-philosophy",children:[]},{value:"Design Overview",id:"design-overview",children:[]},{value:"Architecture Overview",id:"architecture-overview",children:[]},{value:"Designer Overview",id:"designer-overview",children:[]},{value:"Customization Overview",id:"customization-overview",children:[]},{value:"Extensibility Overview",id:"extensibility-overview",children:[]},{value:"Project Organization",id:"project-organization",children:[]},{value:"Project Development Plan",id:"project-development-plan",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"the-project"},"The Project"),Object(a.b)("p",null,"BIRT is an open source software project that provides the BIRT technology platform to create data visualizations and reports that can be embedded into rich client and web applications, especially those based on Java. BIRT is a top-level software project within the Eclipse Foundation, an independent not-for-profit consortium of software industry vendors and an open source community."),Object(a.b)("p",null,"The project is sponsored by Compex Systemhaus GmbH, Heidelberg, Germany, and $$$ along with contributions from Actuate, IBM, and Innovent Solutions. BIRT is supported by an active community of users here at Eclipse.org. It is licensed under the Eclipse Public License (EPL)."),Object(a.b)("p",null,"Project Organization | Project Development Plan"),Object(a.b)("h2",{id:"the-groundswell"},"The Groundswell"),Object(a.b)("p",null,"Today, BIRT technology platform is one of the most widely\nadopted data visualization and reporting technologies with over 12\nmillion downloads and over 2.5M developers across 157 countries. BIRT\nalso has a large, active and growing developer community representing\nall types of organizations. Major technology companies such as IBM,\nCisco, S1 and ABS Nautical Systems as well as Eclipse projects like OSBP have incorporated BIRT into their\nproduct lines."),Object(a.b)("h2",{id:"the-technology-platform"},"The Technology Platform"),Object(a.b)("p",null,"BIRT has two main components: a visual report designer for\ncreating BIRT Designs, and a runtime component for generating those\ndesigns that can be deployed to any Java environment. The BIRT project\nalso includes a charting engine that is both fully integrated into the\nBIRT designer and can be used standalone to integrate charts into an\napplication."),Object(a.b)("p",null,"BIRT designs are persisted as XML and can access a number of\ndifferent data sources including JDO datastores, JFire Scripting\nObjects, POJOs, SQL databases, Web Services and XML."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.eclipse.org/birt/about/architecture.php"},"Learn more about BIRT Architecture")),Object(a.b)("h2",{id:"the-philosophy"},"The Philosophy"),Object(a.b)("p",null,"BIRT is about open standards (see also the Eclipse project Open Standard Business Platform). It integrates with any data source in any\nenvironment. BIRT represents a commitment to the highest standards in\nsoftware design and quality."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.eclipse.org/birt/about/design.php"},"Learn More")),Object(a.b)("h2",{id:"design-overview"},"Design Overview"),Object(a.b)("p",null,"In this section, you'll get an overview of what a BIRT design is, including:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Report Introduction")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The Anatomy of a Report")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.eclipse.org/birt/about/design.php"},"Learn More")),Object(a.b)("h2",{id:"architecture-overview"},"Architecture Overview"),Object(a.b)("p",null,"In this section, you'll get an overview of the BIRT architecure. Topics included:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"BIRT Components")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Architecture Diagram"))),Object(a.b)("h4",{id:"learn-more"},Object(a.b)("a",{parentName:"h4",href:"https://www.eclipse.org/birt/about/architecture.php"},"Learn More")),Object(a.b)("h2",{id:"designer-overview"},"Designer Overview"),Object(a.b)("p",null,"This section will take you through a quick tour of the BIRT Designer."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.eclipse.org/birt/about/designer.php"},"Learn More")),Object(a.b)("h2",{id:"customization-overview"},"Customization Overview"),Object(a.b)("p",null,"In this section, you'll get an overview of some different ways to customize your report design, including:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Data Customization")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Conditional Formatting")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Scripting")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Java Event Coding")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Project Management")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Styles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Libraries")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Internationalization"))),Object(a.b)("h4",{id:"learn-more-1"},Object(a.b)("a",{parentName:"h4",href:"https://www.eclipse.org/birt/about/customization.php"},"Learn More")),Object(a.b)("h2",{id:"extensibility-overview"},"Extensibility Overview"),Object(a.b)("p",null,"Since BIRT cannot contain every feature needed for all\napplications, it is very extendible. This section gives an overview of\nwhat parts of BIRT can be extended. The topics included are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Extensibility")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Data Access")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Report Items")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Chart Types")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Output Formats"))),Object(a.b)("h4",{id:"learn-more-2"},Object(a.b)("a",{parentName:"h4",href:"https://www.eclipse.org/birt/about/extensibility.php"},"Learn More")),Object(a.b)("h2",{id:"project-organization"},"Project Organization"),Object(a.b)("p",null,"This section contains information about many different aspects\nof the BIRT project, like committee members, how to contribute, etc.\nTopics include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Project Organization")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"About the BIRT Project")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Getting Help Using BIRT")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Project Resources")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Project Processes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"PMC Minues")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Projects"))),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.eclipse.org/birt/about/project-organization/"},"Learn More")),Object(a.b)("h2",{id:"project-development-plan"},"Project Development Plan"),Object(a.b)("p",null,"On this page, you'll find links to Project Plans for the version(s) of BIRT currently in Development."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://wiki.eclipse.org/BIRT_Project_Plan"},"Learn More")))}b.isMDXComponent=!0}}]);