"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[3147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,g=d["".concat(c,".").concat(h)]||d[h]||l[h]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={slug:"harness-ci-background-step",title:"Harness CI - Background Step",authors:["krishikasingh"],tags:["continuous-integration","integration-test"]},i=void 0,s={permalink:"/blog/harness-ci-background-step",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-10-05-CI-BackgroundStep/all_about_background_step.md",source:"@site/blog/2022-10-05-CI-BackgroundStep/all_about_background_step.md",title:"Harness CI - Background Step",description:"Introduction",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"integration-test",permalink:"/blog/tags/integration-test"}],readingTime:2.85,hasTruncateMarker:!1,authors:[{name:"Krishika Singh",title:"Community Engineer @ Harness",url:"https://github.com/krishi0408",imageURL:"https://github.com/krishi0408.png",key:"krishikasingh"}],frontMatter:{slug:"harness-ci-background-step",title:"Harness CI - Background Step",authors:["krishikasingh"],tags:["continuous-integration","integration-test"]},prevItem:{title:"Getting started with the Harness Platform",permalink:"/blog/harness-getting-started"},nextItem:{title:"Harness CI Onboarding - Beginners Guide",permalink:"/blog/harness-ci-onboarding"}},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Background step support commands",id:"background-step-support-commands",level:3},{value:"Background step can be added anywhere in the pipeline execution",id:"background-step-can-be-added-anywhere-in-the-pipeline-execution",level:3},{value:"Background step supports Templatization",id:"background-step-supports-templatization",level:3},{value:"Some important points:",id:"some-important-points",level:4}],u={toc:p};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Background steps are useful for running services that need to run for the entire lifetime of a build. This can be used when user wants to run something in background throughout the stage execution or when you want to run an end to end test, redis service or mysql local service to run some operations  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Background Step Introduction",src:n(9053).Z,width:"1446",height:"389"})),(0,o.kt)("p",null,"Before diving deep into background step further, let\u2019s talk about service dependencies, how it helped and what were the shortcomings that service dependencies had that we have to introduce the background step "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Service Dependency")," is a detached service that's accessible to all steps in a stage. Service dependencies support workflows such as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integration testing:")," You can set up a service and then run tests against this service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Running Docker-in-Docker:")," You can set up a dind service to process Docker commands in Run Steps.")),(0,o.kt)("p",null,"Well you can see how important it was to introduce service dependency in your pipeline but then why did we introduce the background step?"),(0,o.kt)("p",null,"Well service dependency did have some shortcomings which background step could solve easily for example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Suppose you want to run a cypress server which needs some custom commands to start, you won\u2019t be able to do that with a service dependency but with a background step as it accepts commands so with the help of that you can write a script and run any service.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Suppose you want redis,postgres and node js server to run together,with the help of service dependency you will have to define it separately but with the background step you can easily do that by adding a docker compose file ( the docker file either needs to be downloaded or we can easily use the one present in the git repo) and then doing docker-compose up with the help of command functionality. "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Background Step Pipeline",src:n(6359).Z,width:"1268",height:"552"})),(0,o.kt)("p",null,"We discussed about some of the shortcomings of service dependency that background step could solve, let\u2019s have a detailed look on three of the major differences between the two:"),(0,o.kt)("h3",{id:"background-step-support-commands"},"Background step support commands"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Background Step Settings",src:n(3441).Z,width:"1198",height:"1506"})),(0,o.kt)("p",null,"Let\u2019s say you are running some local server and you want to run some pre command or you want to fetch some file before running the server , there is an optional field called command in the background step. With the support of this optional functionality it acts as a run step now ."),(0,o.kt)("h3",{id:"background-step-can-be-added-anywhere-in-the-pipeline-execution"},"Background step can be added anywhere in the pipeline execution"),(0,o.kt)("p",null,"The background step can be added anywhere during the pipeline execution, thus making it flexible for the user."),(0,o.kt)("h3",{id:"background-step-supports-templatization"},"Background step supports Templatization"),(0,o.kt)("p",null,"The background step supports templates that can be reused across Pipelines which enhance developer productivity,reduce onboarding time,and enforce standardization across the teams.\nAlso ,the background step supports sequential approvals, that is when one step is completed then only you can move to the other step,whereas service dependency was running all the commands at the same time."),(0,o.kt)("p",null,"To know more about templates visit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/6tl8zyxeol-template"},"Templates"),"."),(0,o.kt)("h4",{id:"some-important-points"},"Some important points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Background step starts a service and then proceeds. For any later step that relies on the service,it is good practice to verify that the service is running before you send requests.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the pipeline runs on a VM build infrastructure, you can run the background service directly on the VM rather than in a container.To do this, leave the Container Registry and Image fields blank."))))}l.isMDXComponent=!0},9053:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/background_step_introduction-19ceae8378b8b5798e151431bd29f020.png"},6359:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/background_step_pipeline-123ee78afe95a2e89c2277a3fbee8424.png"},3441:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/background_step_settings-f2e9f10bf2a34dce91de075032e95b02.png"}}]);