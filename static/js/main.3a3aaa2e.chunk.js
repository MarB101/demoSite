(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{45:function(e,t,a){e.exports=a(58)},50:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a.n(r),i=(a(50),a(7)),c=a(8),s=a(10),m=a(9),p=a(20),u=a(61),d=a(62),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{float:"right",marginTop:"100px",marginRight:"20px"},className:"accountSection"},l.a.createElement(p.a,{style:{backgroundColor:"grey",float:"right",padding:"10px 50px 10px 50px",borderWidth:"0px",margin:"10px",borderRadius:"0px",textTransform:"uppercase",fontWeight:"bold"},className:"LoginBtn",type:"submit"},l.a.createElement(u.a,null)," Login"),l.a.createElement(p.a,{style:{backgroundColor:"navy",float:"right",borderWidth:"0px",padding:"10px 50px 10px 50px",margin:"10px",borderRadius:"0px",textTransform:"uppercase",fontWeight:"bold"},className:"registerBtn",type:"submit"},l.a.createElement(d.a,null)," Register"))}}]),a}(n.Component),g=(a(53),a(11)),E=a(63),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={color:"white",textAlign:"center",textTransform:"uppercase",fontWeight:"bold",padding:"10px 30px 10px 30px"},t={backgroundColor:"#5496ff"},a={backgroundColor:"#103585"};return l.a.createElement("div",{id:"menuBar"},l.a.createElement(g.a,{style:{background:"grey"},variant:"pills"},l.a.createElement(g.a.Item,{style:t},l.a.createElement(g.a.Link,{style:e,eventKey:"link-0"},"Home")),l.a.createElement(g.a.Item,{style:a},l.a.createElement(g.a.Link,{style:e,active:!0,eventKey:"link-1"},"Speakers")),l.a.createElement(g.a.Item,{style:t},l.a.createElement(g.a.Link,{style:e,eventKey:"link-2"},"Agenda")),l.a.createElement(g.a.Item,{style:a},l.a.createElement(g.a.Link,{style:e,eventKey:"link-3"},"Why Attend")),l.a.createElement(g.a.Item,{style:t},l.a.createElement(g.a.Link,{style:e,eventKey:"link-4"},"Contact Us")),l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{style:e,eventKey:"link-5"},"Entrance ",l.a.createElement(E.a,null)," "))))}}]),a}(n.Component),h=a(24),b=a(44),x=a(34);var k=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:{display:"block",margin:"auto"},variant:"primary",onClick:function(){return r(!0)}},"More Info"),l.a.createElement(x.a,{size:"xl",show:a,onHide:function(){return r(!1)},centered:!0},l.a.createElement(x.a.Header,{closeButton:!0}),l.a.createElement(x.a.Body,null,l.a.createElement("h3",{style:{display:"inline-block",color:"#5496ff",fontWeight:"bold"}},"Speaker Name"),l.a.createElement("img",{style:{float:"left"},src:"/demoSite/images/logo.jpg",alt:"popImage"}),l.a.createElement("p",{style:{fontWeight:"bold"}},"Job Title, Department Name, Company Name"),l.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'))))},v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{listStyleType:"none",margin:"auto"},className:"cardHolder"},l.a.createElement(h.a,{style:{borderWidth:"0px",borderRadius:"0px",width:"300px",listStyleType:"none",margin:"0px"}},l.a.createElement(h.a.Img,{style:{objectFit:"cover",height:"300px",borderRadius:"0px"},variant:"top",src:"https://images.unsplash.com/photo-1592011159356-3a1f7c74e784?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}),l.a.createElement(h.a.Body,{style:{backgroundColor:"#ebf5ff"}},l.a.createElement(h.a.Title,{style:{display:"block",color:"#5496ff",float:"left"}},"Speaker Name"),l.a.createElement(h.a.Text,{style:{clear:"both"}},"Job Title, Department Name, Company Name"),l.a.createElement(k,null))))}}]),a}(n.Component),C=a(64),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={popupOpen:!1},e.togglePop=function(){e.setState({popupOpen:!e.state.popupOpen})},e}return Object(c.a)(a,[{key:"render",value:function(){var e={margin:"30px 250px 30px 250px"};return l.a.createElement("div",{id:"speakerSection"},l.a.createElement("h2",{style:{textAlign:"Center",textTransform:"uppercase",color:"#356fcc"},className:"pageTitle"},"Speakers"),l.a.createElement("ul",{style:{listStyleType:"none",padding:"0px"},className:"speakerList"},l.a.createElement("li",{style:e,className:"cardDeckHolder"},l.a.createElement(C.a,null,l.a.createElement(v,null),l.a.createElement(v,null),l.a.createElement(v,null),l.a.createElement(v,null))),l.a.createElement("li",{style:e,className:"cardDeckHolder"},l.a.createElement(C.a,null,l.a.createElement(v,null),l.a.createElement(v,null),l.a.createElement(v,null),l.a.createElement(v,null)))))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={padding:"10px 30px 10px 30px",width:"600px",float:"left",color:"white"},t={display:"block",margin:"auto",textAlign:"left"},a={textAlign:"left",margin:"20px",textTransform:"uppercase",fontWeight:"bold",color:"white"},n={display:"block",textAlign:"left",margin:"auto",color:"white"},r={borderColor:"white"};return l.a.createElement("div",{style:{background:"#575757",border:"1px solid #575757",padding:"10px 30px 10px 30px",overflow:"hidden"},id:"footerSection"},l.a.createElement("ul",{style:e,className:"footerList"},l.a.createElement("span",{style:a}," Other Company Sites "),l.a.createElement("hr",{style:r}),l.a.createElement("li",{style:t,className:"listCol"},l.a.createElement("a",{style:n,className:"link",href:"test"},"Corporate")),l.a.createElement("li",{style:t,className:"listCol"},l.a.createElement("a",{style:n,className:"link",href:"test"},"Marketing"))),l.a.createElement("ul",{style:e,className:"footerList"},l.a.createElement("span",{style:a}," Legal "),l.a.createElement("hr",{style:r}),l.a.createElement("li",{style:t,className:"listCol"},l.a.createElement("a",{style:n,className:"link",href:"test"},"Terms & Conditions")),l.a.createElement("li",{style:t,className:"listCol"},l.a.createElement("a",{style:n,className:"link",href:"test"},"Terms & Conditions of use")),l.a.createElement("li",{style:t,className:"listCol"},l.a.createElement("a",{style:n,className:"link",href:"test"},"Privacy Policy")),l.a.createElement("li",{style:t,className:"listCol"},l.a.createElement("a",{style:n,className:"link",href:"test"},"Cookies Policy")),l.a.createElement("li",{style:t,className:"listCol"},l.a.createElement("a",{style:n,className:"link",href:"test"},"Accessibility"))),l.a.createElement("ul",{style:e,className:"footerList"},l.a.createElement("span",{style:a}," Social "),l.a.createElement("hr",{style:r})),l.a.createElement("ul",{style:e,className:"footerList"},l.a.createElement("span",{style:a}," Find Us "),l.a.createElement("hr",{style:r}),l.a.createElement("p",null,"Company"),l.a.createElement("p",null,"Building"),l.a.createElement("p",null,"Street"),l.a.createElement("p",null,"County/Postcode")))}}]),a}(n.Component),N=a(19),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={textAlign:"center",paddingTop:"50px ",paddingBottom:"100px"};return l.a.createElement("div",{style:{textAlign:"center",padding:"30px 400px 30px 400px",background:"linear-gradient(90deg, rgba(33,100,161,1) 0%, rgba(33,100,161,1) 50%, rgba(74,145,214,1) 100%)"},id:"QuoteSection"},l.a.createElement(N.a,null,l.a.createElement(N.a.Item,{style:e},l.a.createElement(N.a.Caption,null,l.a.createElement("p",null,"The presentations gave a fascinating insight into the implementation of DevOps at high profile companies"),l.a.createElement("h3",null,"John Hayes, London & Quadrant"))),l.a.createElement(N.a.Item,{style:e},l.a.createElement(N.a.Caption,null,l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(N.a.Item,{style:e},l.a.createElement(N.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))}}]),a}(n.Component),S=a(65),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={padding:"60px",backgroundImage:"url(".concat("/demoSite/images/background.jpg",")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"};return l.a.createElement("div",{style:{fontFamily:"Arial"},id:"streamGoDemoPage"},l.a.createElement("div",{id:"header"},l.a.createElement("img",{style:{padding:"30px 0px 0px 30px",width:"130px",height:"130px"},className:"logo",src:"/demoSite/images/logo.jpg",alt:"logo"}),l.a.createElement(y,null),l.a.createElement("h1",{style:{padding:"0px 0px 20px 30px",color:"#5496ff",fontWeight:"bold",fontSize:"75px"},className:"headerText"},"This Conference ",l.a.createElement("span",{style:{color:"#356fcc"}},"2020")),l.a.createElement(f,null)),l.a.createElement("body",{style:e,id:"container"},l.a.createElement(O,null),l.a.createElement(S.a,{style:{display:"block",margin:"auto",marginBottom:"30px"}}),l.a.createElement(p.a,{style:{backgroundColor:"orange",border:"0px",borderRadius:"0px",display:"block",margin:"auto",textTransform:"uppercase",padding:"10px 30px 10px 30px",fontWeight:"bold"}},"Register Now")),l.a.createElement(w,null),l.a.createElement("div",{id:"footer"},l.a.createElement(j,null)),l.a.createElement("div",{style:{backgroundColor:"#404142",overflow:"hidden"},id:"copyright"},l.a.createElement("h3",{style:{color:"white",float:"right",margin:"0px",padding:"10px"}},"Copyright")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(57);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.3a3aaa2e.chunk.js.map