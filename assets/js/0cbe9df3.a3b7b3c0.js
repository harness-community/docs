"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[8725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"azure-infra-for-delegates",title:"Provision Azure Infrastructure for Delegates",authors:["hrittikhere"],tags:["delegates","continuous-integration","continuous-delivery","connectors","harness","cme"]},i=void 0,l={permalink:"/blog/azure-infra-for-delegates",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-10-13-azure-infra-for-delegates/azure-infra-for-delegates.md",source:"@site/blog/2022-10-13-azure-infra-for-delegates/azure-infra-for-delegates.md",title:"Provision Azure Infrastructure for Delegates",description:"Creating a delegate requires the creation of an infrastructure in which computational tasks can take place. The infrastructure is typically a Kubernetes cluster.",date:"2022-10-13T00:00:00.000Z",formattedDate:"October 13, 2022",tags:[{label:"delegates",permalink:"/blog/tags/delegates"},{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"continuous-delivery",permalink:"/blog/tags/continuous-delivery"},{label:"connectors",permalink:"/blog/tags/connectors"},{label:"harness",permalink:"/blog/tags/harness"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:3.475,hasTruncateMarker:!1,authors:[{name:"Hrittik Roy",title:"Community Engineer",url:"https://github.com/hrittikhere",imageURL:"https://github.com/hrittikhere.png",key:"hrittikhere"}],frontMatter:{slug:"azure-infra-for-delegates",title:"Provision Azure Infrastructure for Delegates",authors:["hrittikhere"],tags:["delegates","continuous-integration","continuous-delivery","connectors","harness","cme"]},prevItem:{title:"Configure Run Step in Harness CI",permalink:"/blog/configure-run-step"},nextItem:{title:"Troubleshooting Guide: Harness CI",permalink:"/blog/troubleshooting-harness-ci"}},s={authorsImageUrls:[void 0]},u=[{value:"Student Account",id:"student-account",level:2},{value:"A free Azure Account",id:"a-free-azure-account",level:2},{value:"Azure Portal",id:"azure-portal",level:2},{value:"Create a Cluster",id:"create-a-cluster",level:2},{value:"Connect to your cluster",id:"connect-to-your-cluster",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Need further help?",id:"need-further-help",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creating a delegate requires the creation of an infrastructure in which computational tasks can take place. The infrastructure is typically a Kubernetes cluster."),(0,a.kt)("p",null,"This tutorial shows you how to set up a Kubernetes cluster on Azure and will serve as the foundation for your CI/CD pipeline infrastructure. After the infrastructure is ready on a free account, you can proceed to create and install a Delegate."),(0,a.kt)("h2",{id:"student-account"},"Student Account"),(0,a.kt)("p",null,"If you\u2019re a student, you\u2019re in luck as there is ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/free/students/"},"Azure for Students")," where you can sign in with your educational email address to create an account without a credit card to get $100 worth of credits."),(0,a.kt)("p",null,"These credits can be used to deploy the Kubernetes Cluster and other services if required. "),(0,a.kt)("p",null,"To, get started with the account creation go to Azure for Students."),(0,a.kt)("p",null,"Step 1: Click on Activate Now"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Activate Free Account",src:r(8697).Z,width:"1902",height:"582"})),(0,a.kt)("p",null,"Step 2: After signing in with a Microsoft account, enter your educational email address:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Activate Azure for Students",src:r(6662).Z,width:"1908",height:"851"})),(0,a.kt)("p",null,"Step 3: Sign in to Azure Portal!"),(0,a.kt)("h2",{id:"a-free-azure-account"},"A free Azure Account"),(0,a.kt)("p",null,"For anyone who can verify their identity with a phone number and a credit card, Azure offers a free account with $200 in Azure credit. Once your account has been verified, you can create a Kubernetes cluster in it."),(0,a.kt)("p",null,"Step 1: Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-in/free/"},"Azure Free Account Page")),(0,a.kt)("p",null,"Step 2: Click on Start free to start the account creation procedure "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Azure Free Account",src:r(103).Z,width:"2048",height:"1517"})),(0,a.kt)("p",null,"Step 3: Fill in the following fields"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fill Details",src:r(9116).Z,width:"2048",height:"1052"})),(0,a.kt)("p",null,"Step 4: Once your details are in click on Sign Up after you have accepted the terms and conditions. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign Up Credit Card",src:r(7695).Z,width:"2048",height:"1052"})),(0,a.kt)("p",null,"Step 5: Verify your phone number"),(0,a.kt)("p",null,"Step 6: Put in your CC details and depending upon your Region a small amount will be deducted and refunded for verification. "),(0,a.kt)("p",null,"Step 7: You can access your account using the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Azure Portal")),(0,a.kt)("h2",{id:"azure-portal"},"Azure Portal"),(0,a.kt)("p",null,"Azure portal is the web-based management console for Microsoft Azure. It provides a single, unified view of all your Azure resources, including compute, storage, networking, and security. You can use the Azure portal to deploy and manage your Azure resources and to monitor their health and usage. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Azure Portal",src:r(2838).Z,width:"2048",height:"1117"})),(0,a.kt)("p",null,"You will use the portal to create your Kubernetes Cluster and connect to it."),(0,a.kt)("h2",{id:"create-a-cluster"},"Create a Cluster"),(0,a.kt)("p",null,"The steps to create a cluster will be to use the Azure Kubernetes Service which is the managed Kubernetes offering from Azure. The steps are as follows:"),(0,a.kt)("p",null,"Step 1: Click on Create a Resource after signing in"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a Resource",src:r(8734).Z,width:"894",height:"472"})),(0,a.kt)("p",null,"Step 2: Search Container and then click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes Service")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Find Kubernetes Service",src:r(2750).Z,width:"1524",height:"1066"})),(0,a.kt)("p",null,"Step 3: Click on Create"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Kubernetes Service",src:r(1735).Z,width:"2048",height:"1001"})),(0,a.kt)("p",null,"Step 4: On the Basics page, configure the following options for a Delegate to Run:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Project details:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select an Azure Subscription."),(0,a.kt)("li",{parentName:"ul"},"Select or create an Azure Resource group, such as DelegateGroup."))),(0,a.kt)("li",{parentName:"ul"},"Cluster details:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enter a Kubernetes cluster name, such as myEnviroment."),(0,a.kt)("li",{parentName:"ul"},"Select a Region for the AKS cluster"),(0,a.kt)("li",{parentName:"ul"},"Select 99.5% for API server availability for lower cost")))),(0,a.kt)("p",null,"Step 5: Start the resource validation by clicking Review + Create on your portal. Once validated, click Create to begin the process of cluster creation. Wait a few minutes for the cluster to deploy."),(0,a.kt)("h2",{id:"connect-to-your-cluster"},"Connect to your cluster"),(0,a.kt)("p",null,"Now, when your cluster is ready you can connect to the Azure Cloud Shel on your portal and open the terminal!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cloud Shell",src:r(737).Z,width:"1472",height:"740"})),(0,a.kt)("p",null,"Navigate to your cluster and click on Connect!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connect to Cluster",src:r(7835).Z,width:"1734",height:"626"})),(0,a.kt)("p",null,"Follow the steps displayed on the right panel and then you can connect to your cluster! "),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")," to display details on your cluster!"),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"Now that your cluster is operational, you may add resources to it by using the kubectl utility, as you can see. Please use ",(0,a.kt)("a",{parentName:"p",href:"https://www.harness.io/technical-blog/deploy-in-5-minutes-with-a-delegate-first-approach"},"Start Deploying in 5 Minutes with a Delegate-first Approach")," tutorial to install Delegate at this time and move forward with creating your CI/CD pipeline."),(0,a.kt)("h2",{id:"need-further-help"},"Need further help?"),(0,a.kt)("p",null,"Feel free to ask questions at ",(0,a.kt)("a",{parentName:"p",href:"https://community.harness.io/c/harness/7"},"community.harness.io")," or ",(0,a.kt)("a",{parentName:"p",href:"https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw"}," join community slack")," to chat with our engineers in product-specific channels like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw"},"#continuous-delivery"),"  Ask questions/help other users regarding CD Module of Harness."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw"},"#continuous-integration")," Ask questions/help other users regarding CI Module of Harness.")))}p.isMDXComponent=!0},6662:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/activate-azure-for-students-764034ecb13afdf587591927ae721008.png"},8697:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/activate-free-account-f6a86b040ac07a1897011cc7435239c7.png"},103:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/azure_free_account_cc-9625c1ac42c6babde9905719f828d0ce.png"},2838:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/azure_portal-3df20350e141954e875b9a8cdc7146ee.png"},737:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cloud_shell-e1371438ad45d5f757d47fe50e8064c2.png"},7835:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/connect_to_aks-00d9cbcfa633c8e07b8a151905763763.png"},8734:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_a_resource-1567b5c3d571b7293e1179d4542d8d89.png"},2750:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_k8s_service-f5b1c91671d7faf9266cadd842486118.png"},1735:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/creation_k8s_service-17f6fcd1478997c4e3eb828495297e6e.png"},9116:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fill_cc_details-b4c55d27510b710b55f152f4621c231d.png"},7695:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sign_up_cc-edf018874e140abdf8169ec13dd33e42.png"}}]);