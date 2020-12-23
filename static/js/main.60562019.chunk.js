(this.webpackJsonppersonalwebpage=this.webpackJsonppersonalwebpage||[]).push([[0],{48:function(e,n,t){},67:function(e,n,t){e.exports=t(78)},72:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(10),l=t.n(i),o=(t(48),t(72),t(6)),c=t(7);function s(){var e=Object(o.a)(["\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr ;\n    grid-template-rows: 1fr ;\n    justify-items: center;\n    align-content: center;\n    grid-gap: 0;\n    padding: 1em;\n\n    #projects {\n        color: slateblue;\n        text-align: left;\n        justify-content: left;\n        justify-items: left;\n        justify-self: left;\n        grid-column: 1/4;\n        grid-row: 1;\n        padding-bottom: 0.5em;\n    }\n\n    .flipcard-inner {\n        grid-row: 2;\n        background-color: transparent;\n        perspective: 1000px;\n        cursor: pointer;  \n        width: 29vw;\n        color: slateblue;\n        height: 72.5vh;\n        border: solid lightgrey 5px;\n        box-shadow: slateblue 0px 0px 5px 5px;\n        \n        position: relative;\n        transform-style: preserve-3d;   \n    } \n\n    .flipcard-front, .flipcard-back{\n        position: absolute;\n        width: 100%;\n        height: 100%; \n        backface-visibility: hidden;\n        -webkit-backface-visibility: hidden; \n    }\n    \n    \n    .flipcard-back {\n        color: white;\n        transform: rotateY(180deg);\n\n        .flipcard-back-content {\n            background-color: slateblue;\n            padding-left: 1em;\n            height: 75%;\n\n            ul  {\n                margin-top: 0;\n            }\n        }\n        .button-flipcard-back {\n            text-align: center;\n            padding: 1em;\n            justify-content: space-around;\n        }\n    }\n    \n    .vid-gif {\n        height: 60%;\n        width: 100%;\n    }\n"]);return s=function(){return e},e}function m(){var e=Object(o.a)(["\n    height: fit-content;\n    width: 100vw;\n    height: 95vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    padding-bottom: 20vh;\n    background: url('https://process.filestackapi.com/cache=expiry:max/resize=width:1050/0w55oh9HTEqO3yqHs4tQ');\n   \n    img {\n        height: 50vh;\n        transform: rotate(90deg);\n        margin-top: 22vh;\n        margin-left: 5vw;\n        justify-self: right;\n    } \n"]);return m=function(){return e},e}function d(){var e=Object(o.a)(["\n    padding: 3vw;\n    width: 15vw; \n    height: 25vh;\n"]);return d=function(){return e},e}function u(){var e=Object(o.a)(["\n    display: flex;\n    padding: 3vw;\n    transform: translateY(100vh);\n\n    img {\n        animation: "," 6s linear infinite;\n        padding: 3vw;\n\n        &:nth-child(1) {\n            animation-delay: 1.5s;\n        }\n\n        &:nth-child(2) {\n            animation-delay: -0.75s;\n        }\n        &:nth-child(3) {\n            animation-delay: 0s;\n        }  \n        \n        &:nth-child(4) {\n            animation-delay: -2s;\n        }  \n        \n        &:nth-child(5) {\n            animation-delay: 3s;\n        }  \n\n        \n    }   \n"]);return u=function(){return e},e}function p(){var e=Object(o.a)(["\n    from {\n        transform: translateY(0)\n        opacity: 1;\n    }\n    to {\n        transform: translateY(-110vh);\n        opacity: 0;\n    }\n"]);return p=function(){return e},e}function g(){var e=Object(o.a)(['\n    overflow: hidden;\n    height: 100vh;\n    width: 100vw;\n    background-image: url("https://image.freepik.com/free-vector/underwater-background-water-surface-ocean-sea_33099-1755.jpg");\n    background-size: cover;\n']);return g=function(){return e},e}function b(){var e=Object(o.a)(["\n    width: 100vw;\n    height: 100vh;\n    overflow-y: scroll;\n    scroll-behavior: smooth;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    * {\n        font-family: 'Merriweather', serif;\n\n\n    }\n\n    nav .immediate-contact {\n        text-align: left;\n        padding-left: 5%;\n    }\n"]);return b=function(){return e},e}var f=c.a.div(b()),h=c.a.div(g()),v=Object(c.b)(p()),E=c.a.div(u(),v),w=c.a.img(d()),y=c.a.div(m()),k=c.a.div(s()),j=t(61),x=t(18),N=t(115),S=t(116);function O(){var e=Object(o.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    padding-left: 10vw;\n    padding-right: 10vw;  \n\n    .myName {\n        grid-column: 1/3;\n        text-align: left;\n        grid-row: 1;\n    }\n\n    .coverPage-descrip {\n        grid-column: 1/4;\n        grid-row: 2;\n        text-align: center;\n    }\n\n    .btns-coverPage {\n        display: flex;\n        grid-column: 2;\n        grid-row: 3;\n        .cover-btn {\n            width: 15vw;\n            margin-left: 5vw;\n            margin-right: 5vw;\n            color: white;\n        }\n    }\n \n\n    .journey-btn {\n        color: white;\n    }\n"]);return O=function(){return e},e}var I=c.a.div(O()),M=Object(j.a)({palette:{primary:{main:"#0d47a1"},secondary:{main:"#e65100"}}});var P=function(){return r.a.createElement("div",null,r.a.createElement(I,null,r.a.createElement(x.a,{variant:"h3",align:"center",color:"textSecondary",className:"myName"},"Hi, I'm Bemnet Dejene"),r.a.createElement(x.a,{variant:"h4",align:"center",color:"textSecondary",className:"coverPage-descrip"},"a Software Developer specializing in React.js and Python"),r.a.createElement("div",{className:"btns-coverPage"},r.a.createElement(N.a,{theme:M},r.a.createElement(S.a,{style:{backgroundColor:"#d84315"},variant:"contained",size:"large",as:"a",href:"#my-journey",className:"cover-btn"}," See my journey "),r.a.createElement(S.a,{color:"primary",variant:"contained",size:"large",href:"#projects",className:"cover-btn"}," View Projects ")))))},D=t(37),L=t(62),C=t(41),R=t(3),A=t(117),B=t(24),T=t(129),G=t(119),H=t(120),z=t(118),W=t(123),V=t(122),F=t(121),J=t(55),Y=t.n(J),q=t(56),U=t.n(q),_=t(57),Q=t.n(_),$=t(130),K=t(124),X=t(125),Z=t(59),ee=t.n(Z),ne=t(60),te=t.n(ne),ae=t(58),re=t.n(ae);function ie(){var e=Object(o.a)(['\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n\n    .tooltip {\n        position: relative;\n        display: inline-block;\n    }\n\n    .tooltip .tooltiptext {\n        visibility: hidden;\n        width: 100px;\n        background-color: black;\n        color: #fff;\n        text-align: center;\n        border-radius: 6px;\n        padding: 5px 0;\n        position: absolute;\n        z-index: 1;\n        top: 120%;\n        left: 50%;\n        margin-left: -60px;\n    }\n\n    .tooltip .tooltiptext::after {\n        content: "";\n        position: absolute;\n        bottom: 100%;\n        left: 50%;\n        margin-left: 0px;\n        border-width: 5px;\n        border-style: solid;\n        border-color: transparent transparent black transparent;\n    }\n\n    .tooltip:hover .tooltiptext {\n        visibility: visible;\n    }\n\n    .contact-icon {\n        display: inline;\n        cursor: pointer;\n        width: 40px;\n        height: 40px;\n    }\n']);return ie=function(){return e},e}var le=c.a.div(ie());function oe(){return r.a.createElement(le,null,r.a.createElement("div",{className:"tooltip"},r.a.createElement("span",{className:"tooltiptext"},"LinkedIn"),r.a.createElement("a",{href:"https://www.google.com"},r.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png",alt:"LinkedIn",className:"contact-icon"}))),r.a.createElement("div",{className:"tooltip"},r.a.createElement("span",{className:"tooltiptext"},"GitHub"),r.a.createElement("a",{href:"https://github.com/bdejene19"},r.a.createElement("img",{src:"https://newslibre.com/wp-content/uploads/2018/06/Microsoft-to-Acquire-GitHub-Newslibre-920x425.png",alt:"Github",className:"contact-icon"}))))}function ce(){var e=Object(o.a)(["\n  width: 15vw;\n"]);return ce=function(){return e},e}function se(e){"Why programming"===e?document.getElementById("modal").style.display="block":"Download Resume"===e&&(window.location.href="/personalwebpage/Bemnet Dejene Developer Resume.docx")}var me=c.a.img(ce()),de=Object(A.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:240},title:{flexGrow:1},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(C.a)(Object(C.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0}}}));function ue(){var e=de(),n=Object(B.a)(),t=r.a.useState(!1),a=Object(L.a)(t,2),i=a[0],l=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(z.a,null),r.a.createElement(G.a,{position:"fixed",className:Object(R.a)(e.appBar,Object(D.a)({},e.appBarShift,i))},r.a.createElement(H.a,null,r.a.createElement(x.a,{variant:"h6",noWrap:!0,className:e.title}),r.a.createElement(F.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){l(!0)},className:Object(R.a)(i&&e.hide)},r.a.createElement(Y.a,null)))),r.a.createElement(T.a,{className:e.drawer,variant:"persistent",anchor:"right",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(F.a,{onClick:function(){l(!1)}},"rtl"===n.direction?r.a.createElement(U.a,null):r.a.createElement(Q.a,null))),r.a.createElement(V.a,null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(me,{src:"https://www.iconfinder.com/data/icons/diversity-avatars-volume-01-v2/64/man-beard-glasses-african-512.png",alt:"avatar",className:"profile_photo"}),r.a.createElement("div",{className:"immediate-contact"},"Phone: 519-619-3930",r.a.createElement("br",null),"Email: bdejene19@gmail.com",r.a.createElement("br",null)),r.a.createElement(oe,null)),r.a.createElement(W.a,null,["Download Resume","Why programming"].map((function(e,n){return 3===n?r.a.createElement($.a,{button:!0,key:e,onClick:function(){return se(e)},id:e},r.a.createElement(K.a,null," ",r.a.createElement(re.a,null)),r.a.createElement(X.a,{primary:e})):r.a.createElement($.a,{button:!0,key:e,onClick:function(){return se(e)},id:e},r.a.createElement(K.a,null,n%2===0?r.a.createElement(ee.a,null):r.a.createElement(te.a,null)),r.a.createElement(X.a,{primary:e}))}))),r.a.createElement(V.a,null),r.a.createElement(W.a,null)))}var pe=t(126),ge=t(127),be=t(128);function fe(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, 1fr);\n  width: 80%;\n  text-align: center;\n  margin-left: 10%;\n  margin-top: 7.5%;\n \n  \n  div {\n    border-top: solid lightgrey 2px;\n    &:nth-child(1) {\n      border-top: none;\n    }\n  }\n"]);return fe=function(){return e},e}var he=c.a.div(fe()),ve=0,Ee=0,we=0;function ye(e){var n=e.skillsInvolved,t=e.skillsLearned,a=e.improveNotes,i=[],l=[],o=[];for(var c in n)i.push(n[c]);for(var s in t)l.push(t[s]);for(var m in a)o.push(a[m]);return r.a.createElement("div",{className:"flipcard-inner",id:e.idValue,onClick:function(){return function(e){var n=document.getElementById(e);"landing-page"===e?(ve+=1,n.style.transform="rotateY(".concat(180*ve,"deg)"),n.style.transition="all 0.6s"):"movie-app"===e?(Ee+=1,n.style.transform="rotateY(".concat(180*Ee,"deg)"),n.style.transition="all 0.6s"):"arsenal-fanpage"===e&&(we+=1,n.style.transform="rotateY(".concat(180*we,"deg)"),n.style.transition="all 0.6s")}(e.idValue)}},r.a.createElement("div",{className:"flipcard-front"},r.a.createElement(pe.a,{style:{height:75},title:e.projectTitle}),r.a.createElement(ge.a,{component:"video",id:"vid-gif",image:"/personalwebpage/"+e.projectGif,onMouseEnter:function(e){return e.target.play()},onMouseLeave:function(e){return e.target.pause()},pause:!0,title:e.projectTitle}),r.a.createElement(be.a,{disableSpacing:!0},r.a.createElement(he,null,i.map((function(e){return r.a.createElement("div",null,r.a.createElement(x.a,{variant:"body2",color:"inherit"},e))}))))),r.a.createElement("div",{className:"flipcard-back"},r.a.createElement(pe.a,{style:{height:50,color:"slateblue"},title:"About"}),r.a.createElement("div",{className:"flipcard-back-content"},r.a.createElement(x.a,{variant:"subtitle1"},e.projDescrip),r.a.createElement("div",{className:"skills-acquired"},r.a.createElement(x.a,{variant:"subtitle2"},r.a.createElement("b",null,"What I Learned")),r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement("div",{className:"skills-acquired"},r.a.createElement(x.a,{variant:"subtitle2"},r.a.createElement("b",null,"What/How I would improve")),r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",null,e)}))))),r.a.createElement("div",{className:"button-flipcard-back"},r.a.createElement(S.a,{variant:"contained",className:"button-viewGit",style:{backgroundColor:"slateblue",color:"white"},href:e.gitLink},"View source code"))))}function ke(){var e=Object(o.a)(["\n  font-size: 28px;\n  float: right;\n  height: 10vh;\n  margin: 0;\n  padding: 0;\n  transform: translate(-2vw, -1.5vh);\n\n  &:hover {\n    opacity: 0.5;\n    cursor: pointer;\n  }\n"]);return ke=function(){return e},e}function je(){var e=Object(o.a)(["\n  width: 100%;\n  color: white;\n  z-index: 1;\n\n  div {\n        background: lightskyblue;\n        color: whitesmoke;\n    }\n\n    .passion-content {\n      padding: 5%;\n      background: whitesmoke;\n      color: black;\n      height: 70%;\n      width: 100%;\n    }\n"]);return je=function(){return e},e}function xe(){var e=Object(o.a)(["\n  display: none;\n  position: fixed;\n  overflow: auto;\n  width: 50%; \n  height: 50%;\n  transform: translate(50%, -60%);\n  border: solid lightskyblue 10px; \n  border-radius: 2.5%;\n  margin: 0;\n  padding: 0;\n  background: lightskyblue;\n  z-index: 1;\n"]);return xe=function(){return e},e}var Ne=c.a.div(xe()),Se=c.a.div(je()),Oe=c.a.span(ke()),Ie=function(){return r.a.createElement(Ne,{id:"modal"},r.a.createElement(Se,null,r.a.createElement("div",null,r.a.createElement(Oe,{onClick:function(){return document.getElementById("modal").style.display="none"}},"\xd7"),r.a.createElement("i",null,r.a.createElement("h2",null,"Why I chose coding"))),r.a.createElement("div",{className:"passion-content"},r.a.createElement("p",null,"From the moment I hit 'run program', I felt an immediate strike in balance between creativity and logistics. An algorithm requires logic, however, the optimal solution often takes lots of creativity."),r.a.createElement("p",null,'From a young age, there has always been an internal power struggle between the logistic and creative aspects of my brain. The result of the two is man who plays piano, self teaches himself guitar, and a Double Major in Medical Sciences from the University of Western Ontario (UWO). I felt fulfillment, but didnt have happiness. This all changed from my first "hello world" algorithm.'))))};function Me(){var e=Object(o.a)(["\n    color: slateblue;\n   \n   h2 {\n       text-align: center;\n       grid-column: 1/3;\n       padding-bottom: 0;\n       margin-bottom: 0vh;\n   }\n\n   .skills-wrapper {\n        transform: translate(5vw, 3vh);\n       display : grid;\n       grid-template-columns: 1fr 1fr;\n       grid-template-rows: auto;\n        padding-bottom: 1em;\n\n       background: linear-gradient(200deg, rgba(245, 222, 179, 0.6), rgba(255, 255, 255, 0.6));\n\n   }\n\n   .programming-skills {\n       text-align: center;\n   }\n"]);return Me=function(){return e},e}var Pe=c.a.div(Me());var De=function(){return r.a.createElement(Pe,null,r.a.createElement("b",null,r.a.createElement("i",null,r.a.createElement(x.a,{variant:"h3",color:"primary",style:{fontSize:36,paddingLeft:25,color:"slateblue"}},"My Progress Journey..."))),r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement("h2",{className:"skills-title"},"Programming Skills"),r.a.createElement("div",{className:"programming-skills"},r.a.createElement("h3",null,"Languages"),"JS ",r.a.createElement("br",null),"Python ",r.a.createElement("br",null),"HTML ",r.a.createElement("br",null),"CSS ",r.a.createElement("br",null),"Java"),r.a.createElement("div",null),r.a.createElement("div",{className:"programming-skills"},r.a.createElement("h3",null,"Frameworks and Technologies"),"React ",r.a.createElement("br",null),"Express ",r.a.createElement("br",null),"MongoDB ",r.a.createElement("br",null),"Node ",r.a.createElement("br",null),"Git Version Control ",r.a.createElement("br",null),"Sass/Styled Components ",r.a.createElement("br",null),"Responsive Design"),r.a.createElement("div",{className:"programming-skills"},r.a.createElement("h3",null,"Soft Skills"),"Collaboration and Adaptability ",r.a.createElement("br",null),"Communication ",r.a.createElement("br",null),"Creativity ",r.a.createElement("br",null),"Emotional Intelligence")))};var Le=function(){return r.a.createElement(f,null,r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(ue,null))),r.a.createElement("main",null,r.a.createElement("article",null,r.a.createElement("section",null,r.a.createElement(h,null,r.a.createElement(E,null,r.a.createElement(w,{src:"/personalwebpage/bubble.png",alt:"bubbles"}),r.a.createElement(w,{src:"/personalwebpage/bubble.png",alt:"bubbles"}),r.a.createElement(w,{src:"/personalwebpage/bubble.png",alt:"bubbles"}),r.a.createElement(w,{src:"/personalwebpage/bubble.png",alt:"bubbles"}),r.a.createElement(w,{src:"/personalwebpage/bubble.png",alt:"bubbles"}),r.a.createElement(w,{src:"/personalwebpage/bubble.png",alt:"bubbles"})),r.a.createElement(P,null),r.a.createElement(Ie,null)))),r.a.createElement("article",null,r.a.createElement("section",null,r.a.createElement(y,{id:"my-journey"},r.a.createElement(De,null),r.a.createElement("div",null,r.a.createElement("img",{src:"/personalwebpage/roadmap.png",alt:"roadmap"}))))),r.a.createElement("article",null,r.a.createElement(k,null,r.a.createElement(x.a,{variant:"h3",id:"projects"},"Personal projects"),r.a.createElement("section",null,r.a.createElement(ye,{projectTitle:"Digital Marketing Landing-Page",skillsInvolved:["React","Material-UI","Responsive Design"],idValue:"landing-page",projectGif:"/dmpagegif.mp4",projDescrip:"Created landing-page clone of a digital marketing, making it fully responsive to be viewable on all monitors",skillsLearned:["Responsive web design - using styled components in particular","Power and flexibility of grid/flexbox combination"],improveNotes:["Learn how to use Figma editor/SVGs to give an even more modern look"],gitLink:"https://github.com/bdejene19/DigitalMarketingLandPage"})),r.a.createElement("section",null,r.a.createElement(ye,{projectTitle:"Movie Pop App",skillsInvolved:["Express","MongoDB","JS","Handlebars"],idValue:"movie-app",projectGif:"movieappgif.mp4",projDescrip:"Built own API for server using Express.js as backend, and persisted users using MongoDb. Movie/show data fetched from TMDb API.",skillsLearned:["Server Side Rendering (SSR)","Non-relational Databases","Routing","CRUD API"],improveNotes:["Add React: to make code component based","Add bcrypt/OAuth security measures",'Use CSS-frameworks to "prettify" more'],gitLink:"https://github.com/bdejene19/MovieApp"})),r.a.createElement("section",null,r.a.createElement(ye,{projectTitle:"Arsenal Soccer Fans Page",skillsInvolved:["React","HTML","CSS","JS"],idValue:"arsenal-fanpage",projectGif:"arsenalfansgif.mp4",projDescrip:"My first front-end project: a single-page app meant to showcase the past, present and future of the soccer club, Arsenal. Is a static HTML site, however, has dynanism through state management.",skillsLearned:["React States","React Life-Cycles","DOM manipulation"],improveNotes:["Fetch data from API","Add grid/flexbox layout for consistency/efficiency"],gitLink:"https://github.com/bdejene19/ArsenalSoccerFansPage"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.60562019.chunk.js.map