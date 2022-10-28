"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[3802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={slug:"git-connector",title:"Beginners Guide to Git Connectors",authors:["debabrata"],tags:["continuous-integration","continuous-delivery","connectors","harness","cme"]},i=void 0,s={permalink:"/blog/git-connector",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-10-09-git-connector/git-connector.md",source:"@site/blog/2022-10-09-git-connector/git-connector.md",title:"Beginners Guide to Git Connectors",description:"Are you confused with terminologies like Access Token, Access Control, and Personal Access Token while creating connectors? In this article, we will discuss a few such terminologies on the Harness platform, what they mean and what values should be entered against them.",date:"2022-10-09T00:00:00.000Z",formattedDate:"October 9, 2022",tags:[{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"continuous-delivery",permalink:"/blog/tags/continuous-delivery"},{label:"connectors",permalink:"/blog/tags/connectors"},{label:"harness",permalink:"/blog/tags/harness"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:2.92,hasTruncateMarker:!1,authors:[{name:"Debabrata Panigrahi",title:"Software Engineer",url:"https://github.com/Debanitrkl",imageURL:"https://github.com/Debanitrkl.png",key:"debabrata"}],frontMatter:{slug:"git-connector",title:"Beginners Guide to Git Connectors",authors:["debabrata"],tags:["continuous-integration","continuous-delivery","connectors","harness","cme"]},prevItem:{title:"Installing Harness Kubernetes(K8s) delegate via MiniKube",permalink:"/blog/delegate-minikube-install"},nextItem:{title:"Getting started with the Harness Platform",permalink:"/blog/harness-getting-started"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Are you confused with terminologies like Access Token, Access Control, and Personal Access Token while creating connectors? In this article, we will discuss a few such terminologies on the Harness platform, what they mean and what values should be entered against them. "),(0,r.kt)("p",null,"So, in Harness when you are using CI/CD to build or deploy we need access to your source code repository and the enterprise cloud for deployments, and hence encrypted secrets are asked as input. In this blog, I have focused on the common errors faced by beginners while trying to setup GitHub connectors. "),(0,r.kt)("p",null,"To begin with:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select new connector and from the new connector tab select Github under Code Repositories"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Connector Location",src:n(9992).Z,width:"3456",height:"1938"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now it\u2019s time to give a name to your connector, but there\u2019s some ",(0,r.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/7rsydu6iq2"},"entity name convention")," which you need to follow while naming it.\nSome common errors observed here are :\nFor ease of understanding across orgs and easy identification, you can also add tags and give an apt description to your connector. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"![Overview](./overview.png)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It\u2019s time for one of the most confusing steps of the process, giving the exact address for your connector which comes in two levels"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Account "),(0,r.kt)("li",{parentName:"ol"},"Repository")),(0,r.kt)("p",{parentName:"li"},"What\u2019s most intriguing and that first time user\u2019s like me, made a mistake in selecting the connection type,  so the suggested method is HTTP for first timers for ease of use and you can fetch this URL for your repository directly from the search bar of your browser or from local clone information available in the repository, which has the following format ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/<account-name>")," for account URL\u2019s type and ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/<account-name>/<repository-name>")," for Repository URLs.   "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Details",src:n(7352).Z,width:"2664",height:"1280"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, it\u2019s time to add credentials, which are required for the authentication to GitHub repository. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Credentials",src:n(1090).Z,width:"2662",height:"1276"})),(0,r.kt)("p",{parentName:"li"},"The value in the username field is the same as your GitHub username, and now the most crucial step of adding credentials, is adding the Personal Access Token as a secret, for that, you need to generate the PAT for your account by allowing adequate repo source control permission, which could be done by following the steps ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token"},"here"),". Further if you already have a PAT as a secret you could just skip to selecting the same, or else you need to add the generated PAT by selecting the \u201c+New Secrets\u201d and mentioning the PAT under the \u201cSecret Value\u201d field."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Secrets",src:n(3035).Z,width:"1638",height:"1468"})),(0,r.kt)("p",{parentName:"li"},"Be careful not to add your GitHub password under the secrets for GitHub, as some users tend to do this and the connector fails to connect. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now while connecting to the provider it\u2019s suggested to go for the connect through delegate step as it would allow delegates to perform tasks for you based on your requirements. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Delegate-Setup",src:n(1120).Z,width:"2958",height:"1408"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Going further to the Delegate Setup step, I would suggest using any available delegate as a beginner, or if you want to use a particular delegate, select the same and click on the empty field under the same to select and add the delegates. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What\u2019s important to consider here is if you\u2019re an absolute beginner using Harness for the first time, or have never created a delegate, please consider creating a delegate first by selecting the \u201cInstall new delegate\u201d and following the resources mentioned ",(0,r.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/0slo2gklsy-delegate-how-tos"},"here"),", to move forward and add a connector. "))),(0,r.kt)("p",null,"Need further help?\nFeel free to ask questions at ",(0,r.kt)("a",{parentName:"p",href:"https://community.harness.io/c/harness/7"},"community.harness.io")," or  ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw"},"join")," community slack to chat with our engineers in product-specific channels like:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw"},"#continuous-delivery"),"  Get support regarding the CD Module of Harness."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw"},"#continuous-integration")," Get support regarding the CI Module of Harness.")))}p.isMDXComponent=!0},9992:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connector-location-2daa663294be46d3a52f0a330dd4dc2f.png"},1090:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/credentials-d8684d24b2f699197fffad0b5d246b4f.png"},1120:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/delegate-setup-95035e0a2b1267eeffdd551f05fcb46d.png"},7352:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/details-71b0558f2fc998bd3d4c81000e5d9853.png"},3035:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/secrets-ffbb531ab38f45f6cb9b31743a742a42.png"}}]);