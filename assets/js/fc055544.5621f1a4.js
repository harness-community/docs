"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[5042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={slug:"harness-ci-onboarding",title:"Harness CI Onboarding - Beginners Guide",authors:["dhrubajyoti"],tags:["continuous-integration","harness-ci","beginners-guide","getting-started","cme"]},i=void 0,l={permalink:"/blog/harness-ci-onboarding",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-10-05-Harness-CI-Onboarding/harness-ci-onboarding.md",source:"@site/blog/2022-10-05-Harness-CI-Onboarding/harness-ci-onboarding.md",title:"Harness CI Onboarding - Beginners Guide",description:"Introduction",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"harness-ci",permalink:"/blog/tags/harness-ci"},{label:"beginners-guide",permalink:"/blog/tags/beginners-guide"},{label:"getting-started",permalink:"/blog/tags/getting-started"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:9.985,hasTruncateMarker:!1,authors:[{name:"Dhrubajyoti Chakraborty",title:"Community Engineering Intern",url:"https://github.com/codewdhruv",imageURL:"https://media-exp1.licdn.com/dms/image/C5603AQFvCMGToV9LMQ/profile-displayphoto-shrink_800_800/0/1631719718974?e=1670457600&v=beta&t=vWbeVBiAvAYLTdxYcAnIqzuvveJ8IWleCDV0A5Fdbp0",key:"dhrubajyoti"}],frontMatter:{slug:"harness-ci-onboarding",title:"Harness CI Onboarding - Beginners Guide",authors:["dhrubajyoti"],tags:["continuous-integration","harness-ci","beginners-guide","getting-started","cme"]},prevItem:{title:"Harness CI - Background Step",permalink:"/blog/harness-ci-background-step"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Environment",id:"environment",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Installing Docker Engine",id:"installing-docker-engine",level:3},{value:"Installation of K8s Delegate for Harness Delegate",id:"installation-of-k8s-delegate-for-harness-delegate",level:3},{value:"About Harness CI",id:"about-harness-ci",level:3},{value:"Getting Started with your first pipeline",id:"getting-started-with-your-first-pipeline",level:3},{value:"Conclusion - Developer Feedback on Harness CIE",id:"conclusion---developer-feedback-on-harness-cie",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This beginner guide aims to help learners learn about the basic components of Harness CI and develop an understanding of the DevOps ecosystem involved in the Software Development lifecycle. In this article we will learn about the basic features of Harness CIE and also get started by building the first basic sample pipeline."),(0,o.kt)("p",null,"Engineering team is usually expected to deliver error-free code at high frequency. A fast and reliable CI/CD pipeline is a major part for implementation of that in a sustainable model over time. Harness Continuous Integration tool which is built with test intelligence, native secrets, fine-grained RBAC, and extensible governance  as one of the best solutions in the marketplace for automated pipelines. Automated pipelines remove user errors, provide feedback loops to developers and helps enable fast product iterations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is a pipeline?")),(0,o.kt)("p",null,"A Pipeline is an end-to-end process that delivers a new version of your software. It can be considered to be a cyclical process that includes integration, delivery, operations, testing, deployment, real-time updates, and metrics monitoring."),(0,o.kt)("p",null,"For example: A pipeline can use the CI module of Harness to build, test & push code and then also a CD module to deploy the artifact to the production environment."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Github Account (",(0,o.kt)("a",{parentName:"li",href:"https://docs.harness.io/article/kqik8km5eb-source-code-manager-settings#source-code-manager-settings"},"Check out the other source code managers here"),")"),(0,o.kt)("li",{parentName:"ul"},"Docker Hub Account & Repository (",(0,o.kt)("a",{parentName:"li",href:"https://docs.harness.io/article/66ykcm0sf0-build-and-push-to-gcr-step-settings"},"Other artifactory packages"),")"),(0,o.kt)("li",{parentName:"ul"},"Installation of K8s Delegate for Harness Delegate"),(0,o.kt)("li",{parentName:"ul"},"About Harness CI"),(0,o.kt)("li",{parentName:"ul"},"Features in Harness CI"),(0,o.kt)("li",{parentName:"ul"},"Getting Started with your first pipeline"),(0,o.kt)("li",{parentName:"ul"},"Troubleshooting frequently encountered issues"),(0,o.kt)("li",{parentName:"ul"},"Conclusion: Developer Feedback on Harness CIE"),(0,o.kt)("li",{parentName:"ul"},"What\u2019s Next?")),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04/22.04")),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes cluster for Harness Delegate and build farm."),(0,o.kt)("li",{parentName:"ul"},"You'll need a Kubernetes cluster for Harness to use for the Harness Delegate and as a build farm. Ensure you have a cluster that meets the following requirements:"),(0,o.kt)("li",{parentName:"ul"},"Number of pods: 3 (two pods for the Harness Delegate, the remaining pod for the build farm)."),(0,o.kt)("li",{parentName:"ul"},"Machine type: ",(0,o.kt)("inlineCode",{parentName:"li"},"4vCPU")),(0,o.kt)("li",{parentName:"ul"},"Memory: 16GB RAM. The build farm and Delegate requirements are low but the remaining memory is for Kubernetes, the Docker container, and other default services."),(0,o.kt)("li",{parentName:"ul"},"Networking: Outbound ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTPS")," for the Harness connection, and to connect to Docker Hub. Allow TCP port 22 for SSH."),(0,o.kt)("li",{parentName:"ul"},"Namespace: When you install the ",(0,o.kt)("inlineCode",{parentName:"li"},"Harness Delegate"),", it will create the ",(0,o.kt)("inlineCode",{parentName:"li"},"harness-delegate")," namespace. You'll use the same namespace for the build farm.")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes service account")," with permission to create entities in the target namespace is required. The set of permissions should include ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," permissions. In general, the cluster-admin permission or namespace admin permission is enough.\nFor more information see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"User-Facing Roles")," from Kubernetes."),(0,o.kt)("p",null,"This tutorial implements creation of a pipeline over a github repository thus you\u2019ll be required to create a github account & host a project over a repository. To create a new repository on github follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move to the upper-right corner on the github webapp & use the  drop-down menu to select New repository option.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create-new-repository",src:n(8578).Z,width:"192",height:"201"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Type the name of the repository. The repository name is unique & cannot be same as already hosted repo names.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"repo-name",src:n(7739).Z,width:"808",height:"335"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select the repository visibility & click on create repository.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"repo-public",src:n(7111).Z,width:"750",height:"302"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create-repo",src:n(8578).Z,width:"192",height:"201"})),(0,o.kt)("h3",{id:"installing-docker-engine"},"Installing Docker Engine"),(0,o.kt)("p",null,"To get started with Docker Engine make sure you meet the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/#prerequisites"},"prerequisites")," then install Docker. Older versions of Docker were called ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docker.io"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-engine"),". If these are installed uninstall them with this command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get remove docker docker-engine docker.io containerd runc\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.docker.com/engine/install/"},"Check out this documentation to get your Docker Engine installed"))),(0,o.kt)("h3",{id:"installation-of-k8s-delegate-for-harness-delegate"},"Installation of K8s Delegate for Harness Delegate"),(0,o.kt)("p",null,"Harness Delegate is the service that connects all the components of the pipeline i.e artifact, infrastructure, collaboration, verification and other providers with the Harness Manager. It performs all the operations in the deployment lifecycle. Here we\u2019ll install Kubernetes Delegate."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move to the Harness Platform, in the Manager section click on setup and select Delegates."),(0,o.kt)("li",{parentName:"ol"},"In the delegates tab, click on the install delegate option with preference to Kubernetes YAML as the download type."),(0,o.kt)("li",{parentName:"ol"},"Update the name and profile and download the K8s Delegate or copy the download link."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the harness-delegate-kubernetes folder that you extracted in the terminal using the following command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf harness-delegate-kubernetes.tar.gz\n\ncd harness-delegate-kubernetes\n")),(0,o.kt)("p",null,"With this you will directly connect with your cluster from the terminal and thus can easily copy the YAML file over."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"To verify the connection of your created K8s Delegate with the Harness Platform use the following command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -p https://app.harness.io/ -O /dev/null\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Now we\u2019ll install the harness delegate using the ",(0,o.kt)("inlineCode",{parentName:"li"},"harness-delegate.yaml")," file using this command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f harness-delegate.yaml\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"To verify that the delegate pod was created run the following command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n harness-delegate\n")),(0,o.kt)("p",null,"With this now you're ready to connect Harness to your artifact servers, clusters, and so on."),(0,o.kt)("h3",{id:"about-harness-ci"},"About Harness CI"),(0,o.kt)("p",null,"Harness CI is powered by Drone the most popular open source CI tool. It\u2019s built for speed and developer experience. Onboarding it is simple and this is what this guide is about."),(0,o.kt)("p",null,"Harness alongside the open source counterpart Drone introduced new features to scale the developer onboarding experience and reduce the time involved in the process drastically as compared to the industry standards."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Harness CI\u2019s major features are the following:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Containerized Steps (Zero Dependencies)"),(0,o.kt)("li",{parentName:"ol"},"Visual Pipeline Builder with YAML Config as Code"),(0,o.kt)("li",{parentName:"ol"},"Git Operations, Secrets & Fine grained RBAC for security etc"),(0,o.kt)("li",{parentName:"ol"},"Test Intelligence"),(0,o.kt)("li",{parentName:"ol"},"Integrated Platform")),(0,o.kt)("h3",{id:"getting-started-with-your-first-pipeline"},"Getting Started with your first pipeline"),(0,o.kt)("p",null,"Pipelines are a group of one or more stages. They are responsible for managing and automating builds, testing, deployments, and other important build and release stages."),(0,o.kt)("p",null,"To create a new Pipeline in Harness CI follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move to the Harness Platform, click on projects. Create a new project incase you haven\u2019t already created one."),(0,o.kt)("li",{parentName:"ol"},"Move to the modules section and click on Continuous Integration & click on create a new pipeline."),(0,o.kt)("li",{parentName:"ol"},"Enter the name for the pipeline & click on start. It usually takes 2-4 min for the provisioning stage of the pipeline.")),(0,o.kt)("iframe",{width:"640",height:"480",src:"https://www.youtube.com/embed/251WU_OG0BI",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,o.kt)("p",null,"The backbone of the pipeline is the build stage. This is where the user specifies the pipeline configuration details as the codebase to build, the infrastructure, the build workflow and all other additional components. The next step involves establishing the connection of the pipeline with the external resource. We use a ",(0,o.kt)("inlineCode",{parentName:"p"},"connector")," in Harness CIE to develop this pipeline connection. The ",(0,o.kt)("inlineCode",{parentName:"p"},"connector")," is a configurable object that automatically establishes connection to an external resource. "),(0,o.kt)("p",null,"To create the Build Stage follow the steps given below: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move to the newly created pipeline in the Pipeline Studio, add a stage & select build.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a stage name & under the configure codebase select connect connector.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on New Creator & give preference to Github Connector from all the available options for connector type. "))),(0,o.kt)("p",null,"To configure the connector successfully provide the following details i.e\na. URL Type as a Repository\nb. Connection Type as HTTP\nc. GitHub Repository URL"),(0,o.kt)("p",null,"You\u2019ll also have to verify the github username & PAT\u2019s to make use of the connector. These secrets are stored in the Harness Secret Manager. "),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the connector has been configured with the necessary credentials select Enable API Access.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The connectivity medium can be directly through Harness Platform or through an delegate service running in an external resource. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In this guide we\u2019ll install the delegate into the K8s cluster. Select Connect Through An Harness Delegate from the available options.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the new delegate with infrastructure type as Kubernetes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the delegate information as Name, Size, Permissions etc & install the delegate using the workspace definition YAML file that can be installed directly to the build infrastructure.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the YAML script and run it on the previously created cluster from the terminal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to the K8s cluster from the same terminal and click on connect option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the Harness Delegate using the ",(0,o.kt)("inlineCode",{parentName:"p"},"harness-delegate.yaml")," file using the following command."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f harness-delegate.yaml\n")),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up the Delegate with the necessary configuration from the Delegate Setup option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the delegate is setup successfully you\u2019ll see the connector & repo details in the About your stage component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select on setup stage and the new stage will be added to the pipeline."))),(0,o.kt)("p",null,"The next step is to set up & define the Build Farm Infrastructure under the pipeline configuration settings. To setup the BFI follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the newly created K8s cluster & create a new connector. Specify details as Name, Details, Delegates Setup & Connection Test."),(0,o.kt)("li",{parentName:"ol"},"Once verified click on Finish to add the new connector to the K8s Cluster Field."),(0,o.kt)("li",{parentName:"ol"},"Verify the namespace carefully and move to the Execution component of the pipeline.")),(0,o.kt)("p",null,"Now we can build & run tests over & against the hosted code. Move to the Execution Tab of the pipeline & add the step to run the steps. Follow the following steps to setup the Execution workflow of the pipeline:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a run step to the pipeline & configure it as follows: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Give the step an appropriate name"),(0,o.kt)("li",{parentName:"ul"},"Click on add a new connector option under the container registry option."),(0,o.kt)("li",{parentName:"ul"},"Select the connector type as Docker Registry"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We\u2019ll now create a new connector to the DockerHub account. Specify the account credentials and configure the secrets."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"docker-img",src:n(8710).Z,width:"583",height:"437"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Verify the connection test & once successful click on Finish. Now we can Configure Run Step pane, with the new Connector in the Container Registry setting.\nConfigure the step as follows:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Give an appropriate step name."),(0,o.kt)("li",{parentName:"ul"},"The Container Registry should show the Docker Hub Connector you just created."),(0,o.kt)("li",{parentName:"ul"},"Image: ",(0,o.kt)("inlineCode",{parentName:"li"},"golang:1.15")),(0,o.kt)("li",{parentName:"ul"},"Command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get gotest.tools/gotestsum\ngotestsum --format=standard-verbose --junitfile unit-tests.xml || true\nCGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -tags netgo\n")),(0,o.kt)("p",null,"The last line contains the go build command to compile the package, along with its dependencies. Once configured click on Apply changes & save the pipeline."),(0,o.kt)("p",null,"Now we can add the step to build & push the created image into the DockerHub repository. A repository in DockerHub is required to receive the artifacts from the pipeline. Add a step and specify the DockerHub account credentials. "),(0,o.kt)("p",null,"Configure the step as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select Name as the Step name you defined earlier."),(0,o.kt)("li",{parentName:"ul"},"Select the Docker Hub Connector you set up previously."),(0,o.kt)("li",{parentName:"ul"},"Paste the docker repository URL & specify the tags: ",(0,o.kt)("inlineCode",{parentName:"li"},"<+pipeline.sequenceId>")),(0,o.kt)("li",{parentName:"ul"},"After successfully configuring the step components select Apply Changes & save the pipeline.")),(0,o.kt)("p",null,"The pipeline is now ready for execution & can be used for running tests.\nYou can also add the Integration Tests to the pipeline. To execute the pipeline click on Run. Select Git Branch and the git branch name when prompted such as main and click on Run Pipeline"),(0,o.kt)("p",null,"You can view the logs of each step by clicking on it or else can also switch to the console view for more tracking down the micro details.\nThe entire pipeline is also available in YAML. You can directly make changes to the YAML file and save the changes and it will automatically be reflected in the pipeline when executed."),(0,o.kt)("h3",{id:"conclusion---developer-feedback-on-harness-cie"},"Conclusion - Developer Feedback on Harness CIE"),(0,o.kt)("p",null,"Developers spend a lot of time into coding & solving the engineering problems. With Harness CIE we can now easily cut down the operational & functional time cost drastically. The added advantage to the features of CIE is the User Interface of CIE which is sleek and easy\n& solves major issues of longer build and testing time. Harness CIE automatically scales up the build, test and deploy cycles. "),(0,o.kt)("p",null,"The product focuses on developers & is completely developer-centric built around what a developer seeks to be the one stop solution for CI/CD."))}u.isMDXComponent=!0},8710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ci-tut-04-docker-connector-02-details-694e13ae74e3e5c8cb93f30da56c6471.png"},7739:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-repository-desc-d047c18e7b4c9821faa90fdc826b9dd4.png"},7111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-repository-public-private-aa8d0703e0ada95178c150a84eb7b64e.png"},8578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/repo-create-ba4bc7a2ad541270d85b12a1b30d61da.png"}}]);