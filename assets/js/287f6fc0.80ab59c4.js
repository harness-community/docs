"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[1736],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={slug:"aws-infra-for-delegates",title:"Provision AWS Infrastructure for Delegates",authors:["debabrata"],tags:["continuous-integration","continuous-delivery","delegates","harness","cme"]},l=void 0,s={permalink:"/blog/aws-infra-for-delegates",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-11-03-aws-infra-for-delegate/aws-infra-for-delegate.md",source:"@site/blog/2022-11-03-aws-infra-for-delegate/aws-infra-for-delegate.md",title:"Provision AWS Infrastructure for Delegates",description:"This tutorial aims at enabling users to set up a Kubernetes cluster on AWS and will serve as the foundation for your CI/CD pipeline infrastructure. After the infrastructure is ready on a free account, you can proceed to create and install a Delegate.",date:"2022-11-03T00:00:00.000Z",formattedDate:"November 3, 2022",tags:[{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"continuous-delivery",permalink:"/blog/tags/continuous-delivery"},{label:"delegates",permalink:"/blog/tags/delegates"},{label:"harness",permalink:"/blog/tags/harness"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:2.91,hasTruncateMarker:!1,authors:[{name:"Debabrata Panigrahi",title:"Software Engineer",url:"https://github.com/Debanitrkl",imageURL:"https://github.com/Debanitrkl.png",key:"debabrata"}],frontMatter:{slug:"aws-infra-for-delegates",title:"Provision AWS Infrastructure for Delegates",authors:["debabrata"],tags:["continuous-integration","continuous-delivery","delegates","harness","cme"]},nextItem:{title:"Python Yaml Onboarding for beginners",permalink:"/blog/2022/10/30/YAML_ONBOARDING-PYTHON/yaml_onboarding_python"}},i={authorsImageUrls:[void 0]},c=[{value:"Credits for AWS",id:"credits-for-aws",level:3},{value:"Pre-requisites:",id:"pre-requisites",level:3},{value:"Creating a Cluster:",id:"creating-a-cluster",level:3},{value:"Authenticate to the cluster:",id:"authenticate-to-the-cluster",level:3},{value:"Need further help?",id:"need-further-help",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial aims at enabling users to set up a Kubernetes cluster on AWS and will serve as the foundation for your CI/CD pipeline infrastructure. After the infrastructure is ready on a free account, you can proceed to create and install a Delegate. "),(0,n.kt)("h3",{id:"credits-for-aws"},"Credits for AWS"),(0,n.kt)("p",null,"To avail free credits in AWS please follow the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.lastweekinaws.com/blog/how-to-get-free-aws-credits-4-tactics-to-use/"},"AWS Credits: How To Obtain Free Credits for Your Startup?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.argonaut.dev/blog/aws-free-credits"},"How to Get Free AWS Credits: 4 Tactics to Use"))),(0,n.kt)("p",null,"If you are a student please sign in using ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/education/awseducate/"},"AWS Educate")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nUnder the AWS Free tier the EKS service is not available, so it\u2019s suggested to get some free credits and use them for EKS. ")),(0,n.kt)("h3",{id:"pre-requisites"},"Pre-requisites:"),(0,n.kt)("p",null,"There are certain requirements in terms of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/2132l9r4gt#permissions"},"access and permissions")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/2132l9r4gt#compute_resources"},"memory resources")," for the delegate to function properly. "),(0,n.kt)("h3",{id:"creating-a-cluster"},"Creating a Cluster:"),(0,n.kt)("p",null,"Considering you are a first-time user, please consider the following specifications along with the above prerequisites, while creating a cluster:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Number of nodes:")," minimum of 3."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Machine type:")," 4vCPU"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Memory:")," 12GB RAM and 6GB Disk Space. 8GB RAM is for the Delegate. The remaining memory is for Kubernetes and containers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Networking:")," Outbound HTTPS for the Harness connection, and to connect to any container image repo. Allow TCP port 22 for SSH.")),(0,n.kt)("p",null,"For creating a cluster follow the steps mentioned in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"documentation"),", also you can take the help of the demo in the video below. "),(0,n.kt)("div",{className:"iframe-wrapper"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/p6xDCz00TxU",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),(0,n.kt)("p",null,"You will be able to see your cluster, after creation on the management console, like the picture below. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Dashboard",src:a(6384).Z,width:"2806",height:"1478"})),(0,n.kt)("h3",{id:"authenticate-to-the-cluster"},"Authenticate to the cluster:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open a terminal and navigate to where the Delegate file is located."),(0,n.kt)("li",{parentName:"ol"},"You will connect to your cluster using the terminal so you can simply run the YAML file on the cluster.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Access",src:a(4324).Z,width:"1110",height:"148"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"In the same terminal, log into your Kubernetes cluster. In most platforms, you select the cluster, click Connect, and copy the access command.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Configure",src:a(6453).Z,width:"2262",height:"478"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Next, install the Harness Delegate using the harness-delegate.yaml file you just downloaded. In the terminal connected to your cluster, run this command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f harness-delegate.yml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The successful output would look like this"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"delegate-install",src:a(431).Z,width:"1998",height:"428"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To validate run the following command and check."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get namespaces\nNAME                  STATUS   AGE\ndefault               Active   29h\nharness-delegate-ng   Active   24m\nkube-node-lease       Active   29h\nkube-public           Active   29h\nkube-system           Active   29h\n")))),(0,n.kt)("p",null,"Also, you could check for pods under your AWS cluster to find the delegate"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"delegate pods",src:a(6131).Z,width:"2664",height:"1624"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Now that your cluster is operational, you may add resources to it by using the kubectl utility, as you can see. Please use ",(0,n.kt)("a",{parentName:"li",href:"https://www.harness.io/technical-blog/deploy-in-5-minutes-with-a-delegate-first-approach"},"Start Deploying in 5 Minutes with a Delegate-first Approach")," tutorial to install Delegate at this time and move forward with creating your CI/CD pipeline.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning:"),"\nYou have to exit the present pipeline without saving to view delegate details/continue with further steps.")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"You could check about your delegates on the dashboard under Project Setup.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"check-delegate",src:a(9084).Z,width:"1450",height:"1838"})),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"The delegate details would look something similar to this")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"delegate-available",src:a(2225).Z,width:"2822",height:"314"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nApart from the above mentioned way, there are other ways to install delegate on AWS, for eg using EC2. ")),(0,n.kt)("h3",{id:"need-further-help"},"Need further help?"),(0,n.kt)("p",null,"Feel free to ask questions at ",(0,n.kt)("a",{parentName:"p",href:"https://community.harness.io/c/harness/7"},"community.harness.io")," or  ",(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw"},"join community slack")," to chat with our engineers in product-specific channels like:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/share/enQtMzkwNjIzMDIxMDEwMy1mYjM2M2FlY2Y3ZWM5ZTRiMGM0MzI1ZTA2YzIxNDYzYjFiODVjZjZlZmE5ZTRmZmZlZjEzYWY1YzU4ODdmNmVj"},"#continuous-delivery"),"  Get support regarding the CD Module of Harness.\n",(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/share/enQtMzkyMzI1ODcxNzAxMi05MTI2M2VlNmVhZDY4NTlkM2JiODgxNWQ5NzY4NGU4MjE0MDQ1MDhlZTM0ZjA1ZjAyNjc3N2E4YmY2ZTc2YWY0"},"#continuous-integration")," Get support regarding the CI Module of Harness."))}p.isMDXComponent=!0},4324:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-access-2cf298ed719447220060d13b21c2ab4b.png"},6453:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-configure-5b8d84086d08ab09075bdbad542b5c5e.png"},6384:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-dashboard-85e6bf2bec6556645fc43b4e93e9b171.png"},9084:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/check-delegate-b5efa205c30f8b8d2d8f661224d59964.png"},2225:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/delegate-available-55626c2048a521fd8ee0c663b82d0b28.png"},431:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/delegate-install-6e376d6fc533b9dac19ab87c23e224e8.png"},6131:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/delegate-pods-a6a3fb2e7de1a06c82ebf0c34feaddd7.png"}}]);