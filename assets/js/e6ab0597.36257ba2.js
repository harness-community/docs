"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[3339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||h[m]||s;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={slug:"harness-getting-started",title:"Getting started with the Harness Platform",authors:["krishikasingh"],tags:["harness","beginners-guide","getting-started","cme"]},i=void 0,o={permalink:"/blog/harness-getting-started",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-10-07-Harness-Platform/getting_start_harness_platform.md",source:"@site/blog/2022-10-07-Harness-Platform/getting_start_harness_platform.md",title:"Getting started with the Harness Platform",description:"Hey\xa0!! new to the Harness Platform, we are here to help you find your way around.",date:"2022-10-07T00:00:00.000Z",formattedDate:"October 7, 2022",tags:[{label:"harness",permalink:"/blog/tags/harness"},{label:"beginners-guide",permalink:"/blog/tags/beginners-guide"},{label:"getting-started",permalink:"/blog/tags/getting-started"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:4.75,hasTruncateMarker:!1,authors:[{name:"Krishika Singh",title:"Community Engineer @ Harness",url:"https://github.com/krishi0408",imageURL:"https://github.com/krishi0408.png",key:"krishikasingh"}],frontMatter:{slug:"harness-getting-started",title:"Getting started with the Harness Platform",authors:["krishikasingh"],tags:["harness","beginners-guide","getting-started","cme"]},prevItem:{title:"Installing Harness Kubernetes(K8s) delegate via MiniKube",permalink:"/blog/delegate-minikube-install"},nextItem:{title:"Harness CI - Background Step",permalink:"/blog/harness-ci-background-step"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hey\xa0!! new to the ",(0,r.kt)("strong",{parentName:"p"},"Harness Platform"),", we are here to help you find your way around."),(0,r.kt)("p",null,"Harness is the industry's first ",(0,r.kt)("strong",{parentName:"p"},"Software Delivery Platform")," to use AI to simplify your DevOps processes\u200a-\u200aCI, CD, Feature Flags, Cloud Costs, and much more."),(0,r.kt)("p",null,"Let's get started with a short introductory video about the harness platform."),(0,r.kt)("div",{className:"iframe-wrapper"},(0,r.kt)("iframe",{src:"https://www.youtube.com/embed/I4sbENt4IeM",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),(0,r.kt)("p",null,"Hope you have got an idea of how interesting is the Harness Platform."),(0,r.kt)("p",null,"Don't forget to ",(0,r.kt)("a",{parentName:"p",href:"https://app.harness.io/auth/#/signin"},"signup")," at Harness platform to play around with the product."),(0,r.kt)("p",null,"Let's dive deep and explore our products so that we can help you around with your goals."),(0,r.kt)("p",null,"Before starting we highly recommend you to go through some basic ",(0,r.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/hv2758ro4e-learn-harness-key-concepts"},"key concepts")," about Harness Platform."),(0,r.kt)("h1",{id:"harness-cicontinuous-integration"},"Harness CI(Continuous Integration)"),(0,r.kt)("p",null,"Harness CI simplifies the development and testing of code. In Harness Pipelines, you visually model your build and test processes as CI Stages. Each Stage includes steps for building, testing, and pushing your code."),(0,r.kt)("p",null,"Well let's get you started with your first pipeline, and we are sure you are going to enjoy it, Harness has step by step guide for building different sample pipelines for different languages, you can try any one of them or all of them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harness-community/python-pipeline-samples"},"Python Sample Pipeline")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harness-community/nodejs-pipeline-samples"},"Node Sample Pipeline")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io/article/x0d77ktjw8-ci-pipeline-quickstart"},"Go Sample Pipeline"))),(0,r.kt)("p",null,"Don't forget to through the docs as well as the courses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io/category/zgffarnh1m-ci-category"},"Harness CI docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.harness.io/page/continuous-integration"},"Harness CI University"))),(0,r.kt)("h1",{id:"harness-cdcontinuous-delivery"},"Harness CD(Continuous Delivery)"),(0,r.kt)("p",null,"Harness CD is a Self-Service Continuous Delivery module that enables engineers to deploy on-demand without scripts, plugins, version dependencies, toil, downtime, and anger."),(0,r.kt)("p",null,"In each Stage, you define what you want to deploy using Services, where you want to deploy it using Environments, and how you want to deploy it using Execution steps.\nYou can refer to the docs below and get familiar with some basics as well deployment tutorials."),(0,r.kt)("p",null,"You can go through the following docs to get familiar with the basics as well as deployment tutorials as well as sample CD pipeline for you to try out:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harness-community/cd-pipeline-sample"},"CD Sample Pipeline")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io/category/pfzgb4tg05-howto-cd"},"CD how to"))),(0,r.kt)("p",null,"You can go through Harness docs as well as Harness University courses to get clarity on Harness CD:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io/category/pfzgb4tg05-howto-cd"},"Harness CD Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.harness.io/page/continuous-delivery"},"Harness CD University"))),(0,r.kt)("h1",{id:"feature-flags"},"Feature Flags"),(0,r.kt)("p",null,"Empower product development teams to quickly release new features, with minimal risk. Test with a specified subset, or roll out to all customers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Feature flags")," create private swim lanes for developers where they can ship the feature directly to customers and then control who sees it, get feedback and turn it on and off when needed."),(0,r.kt)("p",null,"We recommend you follow the below blog and implement your first feature flag, I am sure you are going to love the way it works:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://harness.io/blog/implement-your-first-feature-flag"},"Implement your first Feature Flag"))),(0,r.kt)("p",null,"There are some well curated courses as well as docs on Feature Flags that will help you get a much deeper insight into the product\xa0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io/category/vjolt35atg-feature-flags"},"Harness Feature Flags Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.harness.io/page/harness-feature-flags"},"Harness Feature Flags University Course"))),(0,r.kt)("h1",{id:"cloud-cost-managementccm"},"Cloud Cost Management(CCM)"),(0,r.kt)("p",null,"Harness Cloud Cost Management empowers engineers with cloud cost visibility of their apps, microservices, and clusters. The best part? Tagging isn't required."),(0,r.kt)("p",null,"Harness provides curated docs as well as courses that can surely help you out with the concept of CCM:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io/category/exgoemqhji-ccm"},"Harness CCM docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.harness.io/page/harness-cloud-cost-management"},"Harness CCM University Course"))),(0,r.kt)("h1",{id:"service-reliability-management"},"Service Reliability Management"),(0,r.kt)("p",null,"Harness Service Reliability Management (SRM) module helps engineering and DevOps teams to balance feature velocity and bug fixes along with the stability and reliability needs in a production environment."),(0,r.kt)("p",null,"You can refer to the below docs as well as some organized courses and get yourself onboard with the basics as well the usage of Service Reliability Management:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io/category/ko19u4brsv-howtos-service-reliability-management"},"Harness SRM Blogs"))),(0,r.kt)("p",null,"Those who want to try out SRM, we recommend them to go through the Harness SRM Practitioner exam it will help you in gaining much deeper product knowledge:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.harness.io/path/srm-practitioner/srm-comprehensive-quiz"},"SRM Practitioner Exam"))),(0,r.kt)("h1",{id:"chaos-engineering"},"Chaos Engineering"),(0,r.kt)("p",null,"Chaos engineering is the discipline of experimenting with a software system in production to build confidence in the system's capability to withstand turbulent and unexpected conditions."),(0,r.kt)("p",null,"You can go through the below docs and learn more about chaos engineering, we recommend you go through the quick-start guide provided in the documentation and try out your first chaos experimentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.harness.io/path/harness-chaos-engineering-practitioner"},"Chaos Engineering Docs"))),(0,r.kt)("p",null,"Harness has structured courses on Chaos Engineering and those who want to try chaos engineering should surely give the Harness Chaos Practitioner Exam:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.harness.io/path/harness-chaos-engineering-practitioner"},"Harness Chaos Practitioner Exam"))),(0,r.kt)("h1",{id:"security-testing-orchestration"},"Security Testing Orchestration"),(0,r.kt)("p",null,"Harness Security Testing Orchestration (STO) enables DevOps and DevSecOps teams to left shift security testing. STO orchestrates scanning, intelligently deduplicating scanner output, prioritizing remediations, and enforcing governance into your Pipeline."),(0,r.kt)("p",null,"STO puts scanning directly into your Pipelines to ensure that vulnerabilities are caught and fixed before your products are ever released."),(0,r.kt)("p",null,"You can surely have a look in the below video about the introduction as well as a demo of STO:"),(0,r.kt)("div",{className:"iframe-wrapper"},(0,r.kt)("iframe",{src:"https://www.youtube.com/embed/dIT8utE_fvU",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),(0,r.kt)("p",null,"You can go through the below docs and get through the basics of the product:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io/category/txlccquh5c-sto-category"},"Security Testing Orchestration docs"))),(0,r.kt)("h1",{id:"software-delivery-foundations-certification"},"Software Delivery Foundations Certification"),(0,r.kt)("p",null,"You can also give Harness Software Delivery Foundations Certification, it will surely help you in getting much deeper knowledge about the\xa0product."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.harness.io/page/certifications"},"Software Delivery Foundations Certification"))),(0,r.kt)("h1",{id:"important-links"},"Important links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.harness.io"},"Harness Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://harness.io/blog/"},"Harness Blogs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://university.harness.io"},"Harness University"))),(0,r.kt)("p",null,"\ud83c\udf08Join the growing community on Slack, refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harness-community/overview/blob/main/community_communication_guide.rst"},"Harness Community Communications Guide")," to interact with the wider community users/contributors, or create topics in ",(0,r.kt)("a",{parentName:"p",href:"https://community.harness.io"},"community.harness.io")),(0,r.kt)("p",null,"We at Harness are always there to help our community, feel free to slack us on our Community Slack channel (P.S don't forget to join the channel). You can also reach out to us at ",(0,r.kt)("a",{parentName:"p",href:"https://community.harness.io"},"discourse"),"."))}h.isMDXComponent=!0}}]);