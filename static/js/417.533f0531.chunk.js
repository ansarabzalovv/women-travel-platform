"use strict";(self.webpackChunkwomen_travel_platform=self.webpackChunkwomen_travel_platform||[]).push([[417],{5286:(e,t,o)=>{o.d(t,{A:()=>I});var r=o(5043),i=o(5475),n=o(2110),s=o(8168),a=o(8587),l=o(8387),c=o(8610),d=o(8206),x=o(4535),h=o(2532),m=o(2372);function f(e){return(0,m.Ay)("MuiCardActionArea",e)}const p=(0,h.A)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var b=o(6236),g=o(579);const u=["children","className","focusVisibleClassName"],A=(0,x.Ay)(b.A,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}}})),y=(0,x.Ay)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((e=>{let{theme:t}=e;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),j=r.forwardRef((function(e,t){const o=(0,d.b)({props:e,name:"MuiCardActionArea"}),{children:r,className:i,focusVisibleClassName:n}=o,x=(0,a.A)(o,u),h=o,m=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"],focusHighlight:["focusHighlight"]},f,t)})(h);return(0,g.jsxs)(A,(0,s.A)({className:(0,l.A)(m.root,i),focusVisibleClassName:(0,l.A)(n,m.focusVisible),ref:t,ownerState:h},x,{children:[r,(0,g.jsx)(y,{className:m.focusHighlight,ownerState:h})]}))}));var v=o(6591),w=o(6494),C=o(5865),W=o(6446),S=o(1906),k=o(3021),z=o(2177);const I=e=>{let{article:t}=e;return(0,g.jsxs)(n.A,{sx:{height:"100%",display:"flex",flexDirection:"column",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{transform:"translateY(-5px)",boxShadow:"0 10px 20px rgba(0,0,0,0.1)"}},elevation:2,children:[(0,g.jsx)(j,{component:i.N_,to:`/articles/${t.id}`,children:(0,g.jsx)(v.A,{component:"img",height:"200",image:t.image,alt:t.title,sx:{objectFit:"cover"}})}),(0,g.jsxs)(w.A,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[(0,g.jsx)(C.A,{gutterBottom:!0,variant:"h6",component:"div",sx:{fontWeight:600,fontFamily:"'Playfair Display', serif",color:"#333"},children:t.title}),(0,g.jsxs)(W.A,{sx:{display:"flex",alignItems:"center",mb:1},children:[(0,g.jsx)(k.A,{sx:{fontSize:16,color:"#ff6b81",mr:.5}}),(0,g.jsx)(C.A,{variant:"body2",color:"text.secondary",sx:{mr:2},children:t.date}),(0,g.jsx)(z.A,{sx:{fontSize:16,color:"#ff6b81",mr:.5}}),(0,g.jsx)(C.A,{variant:"body2",color:"text.secondary",children:t.author})]}),(0,g.jsx)(C.A,{variant:"body2",color:"text.secondary",sx:{mb:2,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:(e=>{const t=document.createElement("div");t.innerHTML=e;const o=t.querySelector("p");return o&&o.textContent||""})(t.content)}),(0,g.jsx)(W.A,{sx:{mt:"auto"},children:(0,g.jsx)(S.A,{component:i.N_,to:`/articles/${t.id}`,variant:"outlined",size:"small",sx:{borderColor:"#ff6b81",color:"#ff6b81","&:hover":{borderColor:"#ff4757",backgroundColor:"rgba(255, 107, 129, 0.05)"}},children:"Read More"})})]})]})}},7417:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var r=o(5043),i=o(6446),n=o(4150),s=o(5865),a=o(1906),l=o(8903),c=o(5475),d=o(579);const x=(0,r.memo)((e=>{let{title:t,subtitle:o,backgroundImage:r,buttonText:l,buttonLink:x}=e;return(0,d.jsxs)(i.A,{sx:{position:"relative",height:{xs:"80vh",md:"90vh"},width:"100%",overflow:"hidden",display:"flex",alignItems:"center",mb:8},children:[(0,d.jsx)(i.A,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:-1,"&::before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",bgcolor:"rgba(0,0,0,0.4)",zIndex:1},"&::after":{content:'""',position:"absolute",bottom:0,left:0,width:"100%",height:"30%",background:"linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))",zIndex:1}},children:(0,d.jsx)(i.A,{component:"img",src:r,alt:"Hero background",loading:"lazy",sx:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}})}),(0,d.jsx)(n.A,{maxWidth:"lg",children:(0,d.jsxs)(i.A,{sx:{maxWidth:{xs:"100%",md:"65%"},position:"relative",zIndex:2,color:"white",textAlign:{xs:"center",md:"left"},animation:"fadeIn 1s ease-in",padding:{xs:2,md:0}},children:[(0,d.jsx)(s.A,{variant:"h2",component:"h1",sx:{fontWeight:700,mb:3,fontFamily:"'Playfair Display', serif",textShadow:"2px 2px 4px rgba(0,0,0,0.3)",fontSize:{xs:"2.5rem",sm:"3.5rem",md:"4.5rem"}},children:t}),(0,d.jsx)(s.A,{variant:"h5",sx:{mb:4,fontWeight:400,lineHeight:1.5,textShadow:"1px 1px 3px rgba(0,0,0,0.3)",maxWidth:"800px",fontSize:{xs:"1.1rem",sm:"1.3rem",md:"1.5rem"}},children:o}),(0,d.jsx)(a.A,{component:c.N_,to:x,variant:"contained",size:"large",sx:{py:1.5,px:4,borderRadius:"50px",backgroundColor:"#ff6b81",fontSize:"1.1rem",fontWeight:500,boxShadow:"0 4px 10px rgba(0,0,0,0.15)","&:hover":{backgroundColor:"#ff4757",transform:"translateY(-3px)",boxShadow:"0 6px 15px rgba(0,0,0,0.2)"},transition:"all 0.3s ease"},children:l})]})})]})}));x.displayName="Hero";const h=x;var m=o(8085),f=o(5286),p=o(6915);const b=()=>{const[e,t]=(0,r.useState)([]),[o,x]=(0,r.useState)([]),[b,g]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{(async()=>{try{const[e,o]=await Promise.all([p.F.getFeaturedTours(),p.F.getArticles()]);t(e),x(o.slice(0,3))}catch(e){console.error("Error fetching homepage data:",e)}finally{g(!1)}})()}),[]),(0,d.jsxs)(i.A,{children:[(0,d.jsx)(h,{title:"Discover the World with Women Like You",subtitle:"Join our community of female travelers for safe, empowering, and unforgettable adventures around the globe.",backgroundImage:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",buttonText:"Explore Tours",buttonLink:"/tours"}),(0,d.jsx)(n.A,{children:(0,d.jsxs)(i.A,{sx:{mb:8},children:[(0,d.jsxs)(i.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:4},children:[(0,d.jsx)(s.A,{variant:"h4",component:"h2",sx:{fontFamily:"'Playfair Display', serif",color:"#333",fontWeight:600},children:"Featured Tours"}),(0,d.jsx)(a.A,{component:c.N_,to:"/tours",variant:"outlined",sx:{borderColor:"#ff6b81",color:"#ff6b81","&:hover":{borderColor:"#ff4757",backgroundColor:"rgba(255, 107, 129, 0.05)"}},children:"View All Tours"})]}),(0,d.jsx)(l.Ay,{container:!0,spacing:3,children:e.map((e=>(0,d.jsx)(l.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,d.jsx)(m.A,{tour:e})},e.id)))})]})}),(0,d.jsx)(i.A,{sx:{bgcolor:"#f8f9fa",py:8},children:(0,d.jsxs)(n.A,{children:[(0,d.jsx)(s.A,{variant:"h4",component:"h2",align:"center",sx:{mb:5,fontFamily:"'Playfair Display', serif",color:"#333",fontWeight:600},children:"Why Travel With Us"}),(0,d.jsxs)(l.Ay,{container:!0,spacing:4,children:[(0,d.jsx)(l.Ay,{item:!0,xs:12,sm:6,md:3,children:(0,d.jsxs)(i.A,{sx:{textAlign:"center",px:2},children:[(0,d.jsx)(i.A,{component:"img",src:"https://img.icons8.com/?size=100&id=Eya1W9PIj1fw&format=png&color=000000",alt:"Female Guides",sx:{height:80,mb:2}}),(0,d.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Female Guides"}),(0,d.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Our experienced female guides create a comfortable and empowering environment for all travelers."})]})}),(0,d.jsx)(l.Ay,{item:!0,xs:12,sm:6,md:3,children:(0,d.jsxs)(i.A,{sx:{textAlign:"center",px:2},children:[(0,d.jsx)(i.A,{component:"img",src:"https://img.icons8.com/cotton/100/000000/shield--v1.png",alt:"Safety First",sx:{height:80,mb:2}}),(0,d.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Safety First"}),(0,d.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"We prioritize your safety with carefully vetted accommodations and 24/7 support during your journey."})]})}),(0,d.jsx)(l.Ay,{item:!0,xs:12,sm:6,md:3,children:(0,d.jsxs)(i.A,{sx:{textAlign:"center",px:2},children:[(0,d.jsx)(i.A,{component:"img",src:"https://img.icons8.com/cotton/100/000000/conference.png",alt:"Small Groups",sx:{height:80,mb:2}}),(0,d.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Small Groups"}),(0,d.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Travel in intimate groups of 8-12 women, allowing for authentic experiences and lasting friendships."})]})}),(0,d.jsx)(l.Ay,{item:!0,xs:12,sm:6,md:3,children:(0,d.jsxs)(i.A,{sx:{textAlign:"center",px:2},children:[(0,d.jsx)(i.A,{component:"img",src:"https://img.icons8.com/cotton/100/000000/like--v1.png",alt:"Authentic Experiences",sx:{height:80,mb:2}}),(0,d.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Authentic Experiences"}),(0,d.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Immerse yourself in local cultures with unique activities and connections with local women."})]})})]})]})}),(0,d.jsx)(i.A,{sx:{py:8,backgroundImage:"linear-gradient(rgba(255, 107, 129, 0.05), rgba(255, 107, 129, 0.1))"},children:(0,d.jsxs)(n.A,{children:[(0,d.jsx)(s.A,{variant:"h4",component:"h2",align:"center",sx:{mb:5,fontFamily:"'Playfair Display', serif",color:"#333",fontWeight:600},children:"What Our Travelers Say"}),(0,d.jsxs)(l.Ay,{container:!0,spacing:4,children:[(0,d.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,d.jsxs)(i.A,{sx:{bgcolor:"white",p:3,borderRadius:2,height:"100%",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},children:[(0,d.jsx)(s.A,{variant:"body1",sx:{mb:3,fontStyle:"italic"},children:'"Traveling with WomenTravel was the best decision I\'ve made. I felt safe, connected with amazing women, and experienced Japan in a way I never could have on my own."'}),(0,d.jsxs)(i.A,{sx:{mt:"auto",display:"flex",alignItems:"center"},children:[(0,d.jsx)(i.A,{component:"img",src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"Sarah Johnson",sx:{width:50,height:50,borderRadius:"50%",mr:2}}),(0,d.jsxs)(i.A,{children:[(0,d.jsx)(s.A,{variant:"subtitle2",fontWeight:600,children:"Sarah Johnson"}),(0,d.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Photography Tour in Japan"})]})]})]})}),(0,d.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,d.jsxs)(i.A,{sx:{bgcolor:"white",p:3,borderRadius:2,height:"100%",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},children:[(0,d.jsx)(s.A,{variant:"body1",sx:{mb:3,fontStyle:"italic"},children:'"The Morocco tour exceeded all my expectations. Our guide was knowledgeable and passionate, and the connections we made with local women artisans were truly special."'}),(0,d.jsxs)(i.A,{sx:{mt:"auto",display:"flex",alignItems:"center"},children:[(0,d.jsx)(i.A,{component:"img",src:"https://randomuser.me/api/portraits/women/68.jpg",alt:"Emily Rodriguez",sx:{width:50,height:50,borderRadius:"50%",mr:2}}),(0,d.jsxs)(i.A,{children:[(0,d.jsx)(s.A,{variant:"subtitle2",fontWeight:600,children:"Emily Rodriguez"}),(0,d.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Cultural Tour of Morocco"})]})]})]})}),(0,d.jsx)(l.Ay,{item:!0,xs:12,md:4,children:(0,d.jsxs)(i.A,{sx:{bgcolor:"white",p:3,borderRadius:2,height:"100%",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},children:[(0,d.jsx)(s.A,{variant:"body1",sx:{mb:3,fontStyle:"italic"},children:'"As a solo traveler, I was nervous about joining a group tour, but the Bali retreat was transformative. I left with new friends, a renewed sense of self, and memories I\'ll cherish forever."'}),(0,d.jsxs)(i.A,{sx:{mt:"auto",display:"flex",alignItems:"center"},children:[(0,d.jsx)(i.A,{component:"img",src:"https://randomuser.me/api/portraits/women/33.jpg",alt:"Michelle Lee",sx:{width:50,height:50,borderRadius:"50%",mr:2}}),(0,d.jsxs)(i.A,{children:[(0,d.jsx)(s.A,{variant:"subtitle2",fontWeight:600,children:"Michelle Lee"}),(0,d.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Yoga Retreat in Bali"})]})]})]})})]})]})}),(0,d.jsxs)(n.A,{sx:{my:8},children:[(0,d.jsxs)(i.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:4},children:[(0,d.jsx)(s.A,{variant:"h4",component:"h2",sx:{fontFamily:"'Playfair Display', serif",color:"#333",fontWeight:600},children:"Travel Articles"}),(0,d.jsx)(a.A,{component:c.N_,to:"/articles",variant:"outlined",sx:{borderColor:"#ff6b81",color:"#ff6b81","&:hover":{borderColor:"#ff4757",backgroundColor:"rgba(255, 107, 129, 0.05)"}},children:"View All Articles"})]}),(0,d.jsx)(l.Ay,{container:!0,spacing:3,children:o.map((e=>(0,d.jsx)(l.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,d.jsx)(f.A,{article:e})},e.id)))})]}),(0,d.jsx)(i.A,{sx:{py:8,backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',backgroundSize:"cover",backgroundPosition:"center",color:"white"},children:(0,d.jsxs)(n.A,{children:[(0,d.jsx)(s.A,{variant:"h4",component:"h2",align:"center",sx:{mb:5,fontFamily:"'Playfair Display', serif",fontWeight:600},children:"BECOME AN ENTREPRENEUR"}),(0,d.jsxs)(i.A,{sx:{maxWidth:800,mx:"auto",textAlign:"center",mb:4},children:[(0,d.jsx)(s.A,{variant:"h6",sx:{mb:3,opacity:.9},children:'The "Women Tour" forum announces a call for women who want to work in tourism, offering them 5,000,000 tenge.'}),(0,d.jsx)(s.A,{variant:"h6",sx:{mb:3,color:"#ff6b81",fontWeight:600},children:"Criteria:"}),(0,d.jsxs)(i.A,{component:"ul",sx:{textAlign:"left",mb:4},children:[(0,d.jsx)(s.A,{component:"li",sx:{mb:2,opacity:.9},children:"Be under 30 years old"}),(0,d.jsx)(s.A,{component:"li",sx:{mb:2,opacity:.9},children:"Submit your application by May 5th"}),(0,d.jsx)(s.A,{component:"li",sx:{mb:2,opacity:.9},children:"Create a tourism-related business project"}),(0,d.jsx)(s.A,{component:"li",sx:{mb:2,opacity:.9},children:"Attend the project defense after application approval"}),(0,d.jsx)(s.A,{component:"li",sx:{opacity:.9},children:"Receive a grant of 5,000,000 tenge to start your business"})]}),(0,d.jsx)(a.A,{component:c.N_,to:"/contact",variant:"contained",size:"large",sx:{py:1.5,px:4,bgcolor:"#ff6b81","&:hover":{bgcolor:"#ff4757"}},children:"Submit Application"})]})]})}),(0,d.jsx)(i.A,{sx:{bgcolor:"#ff6b81",color:"white",py:8,textAlign:"center"},children:(0,d.jsxs)(n.A,{children:[(0,d.jsx)(s.A,{variant:"h4",component:"h2",sx:{mb:2,fontFamily:"'Playfair Display', serif",fontWeight:600},children:"Ready for Your Next Adventure?"}),(0,d.jsx)(s.A,{variant:"h6",sx:{mb:4,fontWeight:400,maxWidth:700,mx:"auto"},children:"Join our community of women travelers and discover the world in a safe, supportive environment."}),(0,d.jsxs)(i.A,{sx:{display:"flex",justifyContent:"center",gap:2,flexWrap:"wrap"},children:[(0,d.jsx)(a.A,{component:c.N_,to:"/tours",variant:"contained",size:"large",sx:{py:1.5,px:4,bgcolor:"white",color:"#ff6b81","&:hover":{bgcolor:"rgba(255, 255, 255, 0.9)"}},children:"Browse Tours"}),(0,d.jsx)(a.A,{component:c.N_,to:"/contact",variant:"outlined",size:"large",sx:{py:1.5,px:4,borderColor:"white",color:"white","&:hover":{borderColor:"white",bgcolor:"rgba(255, 255, 255, 0.1)"}},children:"Contact Us"})]})]})})]})}},8085:(e,t,o)=>{o.d(t,{A:()=>p});o(5043);var r=o(5475),i=o(2110),n=o(6591),s=o(6494),a=o(6446),l=o(3845),c=o(5865),d=o(1906),x=o(9974),h=o(3021),m=o(9423),f=o(579);const p=e=>{let{tour:t}=e;return(0,f.jsxs)(i.A,{sx:{height:"100%",display:"flex",flexDirection:"column",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{transform:"translateY(-5px)",boxShadow:"0 10px 20px rgba(0,0,0,0.1)"}},elevation:2,children:[(0,f.jsx)(n.A,{component:"img",height:"200",image:t.images[0],alt:t.title,sx:{objectFit:"cover"}}),(0,f.jsxs)(s.A,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[(0,f.jsxs)(a.A,{sx:{mb:1},children:[(0,f.jsx)(l.A,{label:t.format,size:"small",sx:{backgroundColor:"#ffd3da",color:"#ff6b81",fontWeight:500,fontSize:"0.7rem"}}),t.featured&&(0,f.jsx)(l.A,{label:"Featured",size:"small",sx:{ml:1,backgroundColor:"#e0f7fa",color:"#00acc1",fontWeight:500,fontSize:"0.7rem"}})]}),(0,f.jsx)(c.A,{gutterBottom:!0,variant:"h6",component:"div",sx:{fontWeight:600,fontFamily:"'Playfair Display', serif",color:"#333"},children:t.title}),(0,f.jsxs)(a.A,{sx:{display:"flex",alignItems:"center",mb:1},children:[(0,f.jsx)(x.A,{sx:{fontSize:16,color:"#ff6b81",mr:.5}}),(0,f.jsx)(c.A,{variant:"body2",color:"text.secondary",children:t.location})]}),(0,f.jsxs)(a.A,{sx:{display:"flex",alignItems:"center",mb:1},children:[(0,f.jsx)(h.A,{sx:{fontSize:16,color:"#ff6b81",mr:.5}}),(0,f.jsx)(c.A,{variant:"body2",color:"text.secondary",children:t.date})]}),(0,f.jsxs)(a.A,{sx:{display:"flex",alignItems:"center",mb:2},children:[(0,f.jsx)(m.A,{sx:{fontSize:16,color:"#ff6b81",mr:.5}}),(0,f.jsx)(c.A,{variant:"body2",color:"text.secondary",children:t.duration})]}),(0,f.jsx)(c.A,{variant:"body2",color:"text.secondary",sx:{mb:2,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:t.description}),(0,f.jsxs)(a.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mt:"auto"},children:[(0,f.jsx)(c.A,{variant:"h6",color:"#ff6b81",sx:{fontWeight:"bold"},children:t.price}),(0,f.jsx)(d.A,{component:r.N_,to:`/tours/${t.id}`,variant:"outlined",size:"small",sx:{borderColor:"#ff6b81",color:"#ff6b81","&:hover":{borderColor:"#ff4757",backgroundColor:"rgba(255, 107, 129, 0.05)"}},children:"View Details"})]})]})]})}}}]);
//# sourceMappingURL=417.533f0531.chunk.js.map