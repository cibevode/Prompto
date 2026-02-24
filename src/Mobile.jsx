import React, { useState, useMemo } from "react";
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, Line, CartesianGrid, LineChart } from "recharts";
const M="'JetBrains Mono',monospace",S="'Outfit',sans-serif",D="'Instrument Serif',serif";
const G="#c4a882",BD="1px solid rgba(255,255,255,.05)";
const TT={background:"#1a1918",border:"1px solid rgba(255,255,255,.1)",borderRadius:6,fontSize:11,fontFamily:M};
const SC={Milling:"#22c55e",Idle:"#64748b",Maintenance:"#ef4444",Queued:"#f59e0b","Hand Polish":"#a78bfa",QA:"#60a5fa",Design:"#60a5fa",Won:"#22c55e"};
const $=v=>{if(v==null)return"—";const n=typeof v==="string"?parseFloat(v):v;if(isNaN(n))return"—";const a=Math.abs(n);return(n<0?"-":"")+"$"+(a>=1e6?(a/1e6).toFixed(1)+"M":a>=1e3?Math.round(a).toLocaleString():a.toFixed(0));};
const AsOf=()=><div style={{fontSize:9,color:"#4a4540",fontFamily:M,textAlign:"right",marginTop:4,marginBottom:6}}>{"as of "+new Date().toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}</div>;
const Badge=({children,c})=><span style={{fontSize:9,padding:"2px 6px",borderRadius:4,fontWeight:700,textTransform:"uppercase",letterSpacing:".3px",background:c+"18",color:c,whiteSpace:"nowrap"}}>{children}</span>;
const Empty=({icon,title,sub})=><div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"32px 20px",color:"#4a4540"}}><div style={{fontSize:24,marginBottom:8,opacity:.4}}>{icon||"📋"}</div><div style={{fontSize:13,fontWeight:600,color:"#706b63",marginBottom:4}}>{title||"Nothing here yet"}</div>{sub&&<div style={{fontSize:11,color:"#4a4540",textAlign:"center",maxWidth:260}}>{sub}</div>}</div>;
const Card=({children,onClick,accent,sx})=><div onClick={onClick} style={{padding:"12px 14px",marginBottom:8,borderRadius:8,background:accent?"rgba("+{r:"239,68,68",a:"245,158,11",g:"34,197,94"}[accent]+",.03)":"rgba(255,255,255,.018)",border:accent?"1px solid rgba("+{r:"239,68,68",a:"245,158,11",g:"34,197,94"}[accent]+",.1)":BD,cursor:onClick?"pointer":"default",...sx}}>{children}</div>;
const Kpi=({label,value,color,sub})=><div style={{background:"rgba(255,255,255,.02)",border:BD,borderRadius:8,padding:"10px 12px",flex:1,minWidth:0}}><div style={{fontSize:9,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:3}}>{label}</div><div style={{fontSize:18,fontWeight:700,color:color||"#e2e0dc",fontFamily:M}}>{value}</div>{sub&&<div style={{fontSize:9,color:"#4a4540",marginTop:2}}>{sub}</div>}</div>;
const Section=({title,right,children})=><div style={{marginTop:20,marginBottom:8}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px"}}>{title}</div>{right}</div>{children}</div>;
const Pills=({tabs,active,onChange})=><div style={{display:"flex",gap:5,overflowX:"auto",paddingBottom:4,marginBottom:12,scrollbarWidth:"none"}}>{tabs.map(t=><button key={t.k} onClick={()=>onChange(t.k)} style={{fontSize:11,padding:"6px 14px",borderRadius:20,border:active===t.k?"1px solid "+G:"1px solid rgba(255,255,255,.07)",background:active===t.k?"rgba(196,168,130,.08)":"transparent",color:active===t.k?G:"#706b63",cursor:"pointer",fontFamily:S,fontWeight:active===t.k?600:400,whiteSpace:"nowrap",flexShrink:0}}>{t.l}</button>)}</div>;
const Row=({left,right,onClick,leftSub})=><div onClick={onClick} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,.03)",cursor:onClick?"pointer":"default"}}><div style={{flex:1,minWidth:0}}><div style={{fontSize:13,fontWeight:600,color:"#e2e0dc",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{left}</div>{leftSub&&<div style={{fontSize:10,color:"#706b63",marginTop:1}}>{leftSub}</div>}</div><div style={{flexShrink:0,marginLeft:8}}>{typeof right==="string"?<span style={{fontSize:12,fontFamily:M,color:G}}>{right}</span>:right}</div></div>;
const Btn=({children,onClick,small,color})=><button onClick={onClick} style={{fontSize:small?10:12,padding:small?"4px 10px":"8px 16px",borderRadius:6,border:"1px solid "+(color||G)+"30",background:(color||G)+"10",color:color||G,cursor:"pointer",fontFamily:S,fontWeight:600}}>{children}</button>;
const Gauge=({pct,color,label})=><div style={{flex:1}}><div style={{display:"flex",justifyContent:"space-between",fontSize:9,marginBottom:3}}><span style={{color:"#706b63"}}>{label}</span><span style={{color:color||G,fontFamily:M}}>{pct}%</span></div><div style={{height:5,borderRadius:4,background:"rgba(255,255,255,.06)",overflow:"hidden"}}><div style={{height:"100%",width:pct+"%",borderRadius:4,background:color||G}}/></div></div>;
const STAGES=[{label:"Estimate",color:"#64748b"},{label:"Quote Sent",color:"#60a5fa"},{label:"Negotiation",color:"#a78bfa"},{label:"Won",color:"#22c55e"},{label:"Design",color:"#06b6d4"},{label:"Stone Sourcing",color:"#f59e0b"},{label:"Fabrication",color:G},{label:"Hand Polish",color:"#a78bfa"},{label:"QA",color:"#60a5fa"},{label:"Delivery",color:"#22c55e"},{label:"Complete",color:"#22c55e"}];
const P=[
  {id:"PRJ-012",nm:"RAMSA Facade ×24",cl:"RAMSA Partners",ty:"Architecture",st:6,stat:"Milling",q:375000,c:318000,due:"Mar 15",pct:62,rb:"R1",cv:"Marco B.",stn:"Indiana Buff",mg:15},
  {id:"PRJ-003",nm:"Benedictine Capitals ×12",cl:"Benedictine Abbey",ty:"Restoration",st:6,stat:"Milling",q:210000,c:180000,due:"Apr 10",pct:45,rb:"R2",cv:"Elena V.",stn:"Carrara White",mg:14},
  {id:"PRJ-005",nm:"Arsham Eroded Venus",cl:"Park Ave Armory",ty:"Fine Art",st:7,stat:"Hand Polish",q:85000,c:70000,due:"Mar 1",pct:88,rb:null,cv:"Elena V.",stn:"Calacatta Gold",mg:18},
  {id:"PRJ-001",nm:"Villard Houses #4",cl:"Lotte NYC Hotel",ty:"Restoration",st:8,stat:"QA",q:52000,c:45000,due:"Mar 15",pct:78,rb:null,cv:"David M.",stn:"Carrara White",mg:13},
  {id:"PRJ-007",nm:"NEH Douglass Monument",cl:"NEH Office",ty:"Monument",st:4,stat:"Design",q:100000,c:95000,due:"Jun 30",pct:15,rb:null,cv:null,stn:"Absolute Black",mg:5},
  {id:"PRJ-015",nm:"Stripe Logo",cl:"Stripe Inc.",ty:"Corporate",st:8,stat:"QA",q:18000,c:13000,due:"Feb 28",pct:92,rb:null,cv:"David M.",stn:"Calacatta Gold",mg:28},
  {id:"PRJ-018",nm:"Estremoz Lion Pair",cl:"Private Collector",ty:"Fine Art",st:4,stat:"Design",q:44000,c:35000,due:"May 15",pct:8,rb:null,cv:null,stn:"Estremoz White",mg:20},
  {id:"PRJ-024",nm:"Hudson Yards ×32",cl:"Related Companies",ty:"Architecture",st:3,stat:"Won",q:550000,c:451000,due:"Aug 30",pct:0,rb:null,cv:null,stn:"Jura Beige",mg:18},
  {id:"PRJ-009",nm:"Gensler Brooklyn",cl:"Gensler",ty:"Architecture",st:2,stat:"Quote Sent",q:280000,c:230000,due:"Jul 1",pct:0,rb:null,cv:null,stn:"Pietra Serena",mg:18},
  {id:"PRJ-022",nm:"Aman Resorts Relief",cl:"Aman Resorts",ty:"Hospitality",st:6,stat:"Milling",q:125000,c:106000,due:"Apr 20",pct:35,rb:"R7",cv:"Sofia A.",stn:"Jura Beige",mg:15},
];
const R=[
  {id:"R1",nm:"KUKA Alpha",md:"KR 240",st:"Milling",bay:"A-1",prj:"PRJ-012",up:94,sp:1240,spM:2000,op:"Roughing 3/5",eta:"2h 15m",lm:"Feb 1",nm2:"Mar 1"},
  {id:"R2",nm:"KUKA Beta",md:"KR 240",st:"Milling",bay:"A-2",prj:"PRJ-003",up:92,sp:1580,spM:2000,op:"Detail 2/8",eta:"6h 40m",lm:"Jan 28",nm2:"Feb 28"},
  {id:"R3",nm:"KUKA Gamma",md:"KR 240",st:"Idle",bay:"B-1",prj:null,up:89,sp:980,spM:2000,op:null,eta:null,lm:"Feb 10",nm2:"Mar 10"},
  {id:"R4",nm:"KUKA Delta",md:"KR 360",st:"Milling",bay:"B-2",prj:"PRJ-001",up:96,sp:640,spM:2500,op:"Finish 1/3",eta:"4h 10m",lm:"Feb 5",nm2:"Mar 5"},
  {id:"R5",nm:"KUKA Epsilon",md:"KR 360",st:"Maintenance",bay:"C-1",prj:null,up:82,sp:1920,spM:2000,op:null,eta:null,lm:"Feb 18",nm2:"—",iss:"Spindle temp 87°C — cooling cycle"},
  {id:"R6",nm:"KUKA Zeta",md:"KR 150",st:"Milling",bay:"C-2",prj:"PRJ-012",up:91,sp:780,spM:2000,op:"Panel 15/24",eta:"3h 20m",lm:"Feb 12",nm2:"Mar 12"},
  {id:"R7",nm:"KUKA Eta",md:"KR 150",st:"Milling",bay:"D-1",prj:"PRJ-022",up:93,sp:560,spM:2000,op:"Roughing",eta:"8h 00m",lm:"Feb 8",nm2:"Mar 8"},
];
const AL=[
  {id:1,ty:"urgent",cat:"🔧",msg:"KUKA Epsilon — spindle temp anomaly. Auto-shutdown triggered.",tm:"2h ago",ow:"Shop Floor"},
  {id:2,ty:"urgent",cat:"📋",msg:"NEH National Garden — maquette review extended to March 1.",tm:"4h ago",ow:"Micah S."},
  {id:3,ty:"info",cat:"💰",msg:"Invoice INV-2025-0025 RAMSA — $187,500 wire received.",tm:"6h ago",ow:"Accounts"},
  {id:4,ty:"update",cat:"🏁",msg:"Arsham Venus entered Hand Polish — Elena Vasquez assigned.",tm:"8h ago",ow:"System"},
  {id:5,ty:"urgent",cat:"💰",msg:"Soho House invoice 67 days overdue — escalation needed.",tm:"1d ago",ow:"Accounts"},
  {id:6,ty:"update",cat:"🏁",msg:"RAMSA Facade Panel 14/24 milling started on KUKA Alpha.",tm:"1d ago",ow:"System"},
  {id:7,ty:"urgent",cat:"📦",msg:"PRJ-018 Lion Pair — stone sourcing unconfirmed. Fabrication blocked.",tm:"2d ago",ow:"Purchasing"},
  {id:8,ty:"info",cat:"💰",msg:"Hudson Yards contract signed — $550k.",tm:"2d ago",ow:"Sales"},
  {id:9,ty:"urgent",cat:"📋",msg:"Benedictine — client requesting accelerated timeline.",tm:"3d ago",ow:"Micah S."},
  {id:10,ty:"update",cat:"📦",msg:"Calacatta Gold slab cleared customs. Delivered to Bay C.",tm:"3d ago",ow:"Logistics"},
];
const TM=[
  {id:"H1",nm:"Marco Bianchi",rl:"Lead Sculptor",ft:true,hrs:152,cap:168,prj:"PRJ-012",em:"marco@ml.co",ph:"718-555-0101",sk:["Roughing","Detail","Limestone"]},
  {id:"H2",nm:"Elena Vasquez",rl:"Master Carver",ft:true,hrs:145,cap:168,prj:"PRJ-005",em:"elena@ml.co",ph:"718-555-0102",sk:["Hand Polish","Marble","Fine Art"]},
  {id:"H3",nm:"James Kim",rl:"CNC Operator",ft:true,hrs:120,cap:168,prj:"PRJ-003",em:"james@ml.co",ph:"718-555-0103",sk:["PowerMill","Toolpath"]},
  {id:"H4",nm:"Sofia Andersson",rl:"CNC Operator",ft:false,hrs:110,cap:168,prj:"PRJ-007",em:"sofia@ml.co",ph:"718-555-0104",sk:["3D Scan","Detail","Granite"]},
  {id:"H5",nm:"David Mitchell",rl:"Master Carver",ft:true,hrs:88,cap:168,prj:"PRJ-015",em:"david@ml.co",ph:"718-555-0105",sk:["Lettering","QA"]},
  {id:"H6",nm:"Yuki Tanaka",rl:"Digital Designer",ft:true,hrs:160,cap:168,prj:"PRJ-007",em:"yuki@ml.co",ph:"718-555-0106",sk:["Rhino","ZBrush","Scan"]},
  {id:"H7",nm:"Omar Hassan",rl:"Fab Lead",ft:true,hrs:140,cap:168,prj:"PRJ-022",em:"omar@ml.co",ph:"718-555-0107",sk:["Roughing","Crating","Install"]},
];
const CL=[
  {id:"CL1",nm:"James Whitfield",co:"RAMSA Partners",rl:"Dir. of Design",val:375000,s:"Active",lt:"Feb 14",em:"j.whitfield@ramsa.com",ph:"212-555-0134"},
  {id:"CL2",nm:"Erik Bootsma",co:"Benedictine Abbey",rl:"Project Mgr",val:210000,s:"Active",lt:"Feb 18",em:"e.bootsma@benedictine.org",ph:"507-555-0198"},
  {id:"CL3",nm:"Stella Park",co:"Arsham Studio",rl:"Studio Director",val:85000,s:"Active",lt:"Jan 30",em:"stella@arshamstudio.com",ph:"646-555-0276"},
  {id:"CL4",nm:"Marcus Chen",co:"Stripe",rl:"Creative Dir.",val:18000,s:"Active",lt:"Feb 19",em:"marcus@stripe.com",ph:"415-555-0322"},
  {id:"CL5",nm:"Thomas Aquino",co:"Soho House NYC",rl:"Facilities Dir.",val:42000,s:"Overdue",lt:"Jan 14",em:"t.aquino@sohohouse.com",ph:"212-555-0488"},
  {id:"CL6",nm:"Julia Torres",co:"NYC Parks",rl:"Public Art",val:0,s:"Prospect",lt:"Feb 5",em:"j.torres@parks.nyc.gov",ph:"212-555-0611"},
];
const SP=[{id:"S1",nm:"Tuscan Stone",loc:"Carrara, IT",mat:"Marble",ot:94,q:"A",po:2},{id:"S2",nm:"Delhi Granite",loc:"Delhi, IN",mat:"Granite",ot:88,q:"A-",po:1},{id:"S3",nm:"Bavarian Stone",loc:"Germany",mat:"Limestone",ot:96,q:"A+",po:1},{id:"S4",nm:"Alentejo Marble",loc:"Portugal",mat:"Marble",ot:91,q:"A",po:1},{id:"S5",nm:"Indiana Limestone",loc:"Bedford, IN",mat:"Limestone",ot:99,q:"A+",po:0}];
const LD=[{co:"Gensler",ct:"Isabelle Morel",val:280000,stg:"Proposal",pr:65,hot:true},{co:"MoMA PS1",ct:"Sarah Lin",val:120000,stg:"Discovery",pr:25,hot:false},{co:"Aman Resorts",ct:"Raj Patel",val:340000,stg:"Negotiation",pr:70,hot:true},{co:"SOM",ct:"James Park",val:190000,stg:"Proposal",pr:50,hot:false},{co:"BIG",ct:"Anna Holm",val:420000,stg:"Discovery",pr:15,hot:false},{co:"Chipperfield",ct:"Tom White",val:250000,stg:"Proposal",pr:55,hot:true}];
const STN=[{nm:"Carrara White",fm:"Marble",or:"Italy",pr:480,h:3},{nm:"Calacatta Gold",fm:"Marble",or:"Italy",pr:2400,h:3},{nm:"Indiana Buff",fm:"Limestone",or:"USA",pr:850,h:2},{nm:"Absolute Black",fm:"Granite",or:"India",pr:1800,h:7},{nm:"Estremoz White",fm:"Marble",or:"Portugal",pr:5500,h:3},{nm:"Jura Beige",fm:"Limestone",or:"Germany",pr:4000,h:2.5},{nm:"Pietra Serena",fm:"Sandstone",or:"Italy",pr:1200,h:4},{nm:"Vermont Verde",fm:"Marble",or:"USA",pr:3200,h:3.5},{nm:"Nero Marquina",fm:"Marble",or:"Spain",pr:2800,h:3},{nm:"Travertine Silver",fm:"Travertine",or:"Turkey",pr:950,h:2}];
const CT=[{t:"Robot & Chisel: AI + Carvers",ty:"Blog",vw:4200,sh:92,d:"Feb 18"},{t:"RAMSA: 24 Panels Zero Defects",ty:"Case Study",vw:1850,sh:34,d:"Feb 10"},{t:"Benedictine Abbey Timelapse",ty:"Video",vw:28400,sh:415,d:"Jan 28"},{t:"Arsham × Monumental",ty:"Collab",vw:12600,sh:245,d:"Jan 15"},{t:"AD100 Interview",ty:"Press",vw:45000,sh:620,d:"Jan 5"},{t:"Feb Shop Floor Dispatch",ty:"Email",vw:null,sh:12,d:"Feb 15"}];
const PO=[{id:"PO-005",stn:"Absolute Black",sup:"Delhi Granite",s:"Ordered",eta:"Mar 20",a:24000},{id:"PO-004",stn:"Calacatta Gold",sup:"Tuscan Stone",s:"Delivered",eta:"—",a:96000},{id:"PO-003",stn:"Jura Beige",sup:"Bavarian Stone",s:"In Transit",eta:"Mar 5",a:64000},{id:"PO-002",stn:"Estremoz White",sup:"Alentejo Marble",s:"Blocked",eta:"—",a:38000},{id:"PO-001",stn:"Carrara White",sup:"Tuscan Stone",s:"Delivered",eta:"—",a:19200}];
const RV=[{m:"Sep",r:185,c:148},{m:"Oct",r:210,c:168},{m:"Nov",r:195,c:156},{m:"Dec",r:240,c:192},{m:"Jan",r:230,c:184},{m:"Feb",r:268,c:214}];
const CFD=[{m:"Sep",i:195,o:-165},{m:"Oct",i:220,o:-180},{m:"Nov",i:205,o:-175},{m:"Dec",i:255,o:-200},{m:"Jan",i:245,o:-195},{m:"Feb",i:280,o:-220}];
const PLY=[{c:"Direct Labor",a:84,p:31},{c:"Materials",a:72,p:27},{c:"Machine Ops",a:48,p:18},{c:"Overhead",a:32,p:12},{c:"Subcontract",a:18,p:7},{c:"Other",a:14,p:5}];
const stC={Active:"#22c55e",Overdue:"#ef4444",Prospect:"#60a5fa"};
const poC={Ordered:"#f59e0b",Delivered:"#22c55e","In Transit":"#60a5fa",Blocked:"#ef4444"};
export default function MobileApp(){
  const[view,setView]=useState("home");const[sel,setSel]=useState(null);const[menuOpen,setMenuOpen]=useState(false);
  const[finTab,setFinTab]=useState("revenue");const[humTab,setHumTab]=useState("team");const[mktTab,setMktTab]=useState("content");
  const[finScen,setFinScen]=useState(false);const[fadj,setFadj]=useState({r:1,c:1});
  const[alFilt,setAlFilt]=useState("all");const[slFilt,setSlFilt]=useState("all");const[stSrch,setStSrch]=useState("");
  const uc=AL.filter(a=>a.ty==="urgent").length;const ar=R.filter(r=>r.st==="Milling").length;
  const tp=P.reduce((s,p)=>s+p.q,0);
  const nav=k=>{setSel(null);setView(k);setMenuOpen(false);};
  const fa=(v,t)=>finScen?Math.round(v*(t==="r"?fadj.r:fadj.c)):v;
  const Back=({to,label})=><button onClick={()=>setSel(null)} style={{background:"none",border:"none",color:"#60a5fa",fontSize:12,cursor:"pointer",padding:0,marginBottom:12,fontFamily:S}}>← {label||"Back"}</button>;
  const ScenBar=()=>finScen?<div style={{padding:10,borderRadius:8,background:"rgba(245,158,11,.04)",border:"1px solid rgba(245,158,11,.15)",marginBottom:12}}>
    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}><span style={{fontSize:11}}>⚠️</span><span style={{fontSize:10,fontWeight:700,color:"#f59e0b",textTransform:"uppercase"}}>Scenario Mode</span><span style={{fontSize:10,color:"#a09a92"}}>— modeled, not actuals</span></div>
    {[{l:"Revenue",k:"r",mn:70,mx:150},{l:"Cost",k:"c",mn:70,mx:130}].map(s=><div key={s.k} style={{marginBottom:6}}><div style={{display:"flex",justifyContent:"space-between",fontSize:10,marginBottom:2}}><span style={{color:"#706b63"}}>{s.l}</span><span style={{color:"#f59e0b",fontFamily:M}}>{(fadj[s.k]*100).toFixed(0)}%</span></div><input type="range" min={s.mn} max={s.mx} value={fadj[s.k]*100} onInput={e=>setFadj(a=>({...a,[s.k]:e.target.value/100}))} style={{width:"100%",accentColor:"#f59e0b"}}/></div>)}
    <div style={{display:"flex",gap:5,flexWrap:"wrap",marginTop:6}}>{[["Optimistic",1.2,.95],["Conservative",.9,1.05],["Recession",.75,1.15],["Growth",1.3,.9]].map(([l,r,c])=><Btn key={l} small color="#f59e0b" onClick={()=>setFadj({r,c})}>{l}</Btn>)}</div>
    <div style={{marginTop:8}}><Btn small color="#706b63" onClick={()=>{setFinScen(false);setFadj({r:1,c:1});}}>✕ Exit</Btn></div>
  </div>:null;
  return(
    <div style={{fontFamily:S,background:"#0c0b0a",color:"#e2e0dc",minHeight:"100vh",maxWidth:480,margin:"0 auto",paddingBottom:70}}>
    {/* HEADER */}
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,.06)",position:"sticky",top:0,zIndex:50,background:"#0c0b0a"}}>
      <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"none",border:"none",color:"#706b63",fontSize:18,cursor:"pointer",padding:4}}>☰</button>
      <span style={{fontFamily:D,fontSize:16,color:G}}>Monumental Labs</span>
      <button onClick={()=>nav("alerts")} style={{background:"none",border:"none",color:"#706b63",fontSize:16,cursor:"pointer",padding:4,position:"relative"}}>🔔{uc>0&&<span style={{position:"absolute",top:0,right:0,width:8,height:8,borderRadius:4,background:"#ef4444"}}/>}</button>
    </div>
    {/* MENU */}
    {menuOpen&&<div style={{position:"fixed",inset:0,zIndex:100,display:"flex"}}>
      <div style={{width:260,background:"#141210",borderRight:"1px solid rgba(255,255,255,.06)",overflowY:"auto",paddingBottom:40}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,.06)"}}><span style={{fontFamily:D,fontSize:16,color:G}}>Monumental</span><button onClick={()=>setMenuOpen(false)} style={{background:"none",border:"none",color:"#706b63",fontSize:18,cursor:"pointer"}}>✕</button></div>
        {[{s:"Activities",it:[{k:"home",i:"🏠",l:"Dashboard"},{k:"projects",i:"📋",l:"Projects"},{k:"sales",i:"🎯",l:"Sales"},{k:"marketing",i:"📣",l:"Marketing"}]},{s:"Resources",it:[{k:"humans",i:"👥",l:"Humans"},{k:"robots",i:"🤖",l:"Robots"},{k:"materials",i:"🪨",l:"Stone DB"},{k:"procurement",i:"📦",l:"Procurement"},{k:"finances",i:"💰",l:"Finances"}]},{s:"Tools",it:[{k:"scenario",i:"📊",l:"Scenario"},{k:"calendar",i:"📅",l:"Calendar"},{k:"alerts",i:"⚡",l:"Op. Log"}]}].map(g=><div key={g.s}><div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",letterSpacing:".5px",padding:"14px 16px 4px",fontWeight:700}}>{g.s}</div>{g.it.map(it=><div key={it.k} onClick={()=>nav(it.k)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 16px",background:view===it.k?G+"10":"transparent",borderLeft:view===it.k?"2px solid "+G:"2px solid transparent",cursor:"pointer"}}><span style={{fontSize:13}}>{it.i}</span><span style={{fontSize:13,color:view===it.k?G:"#a09a92",fontWeight:view===it.k?600:400}}>{it.l}</span></div>)}</div>)}
      </div><div onClick={()=>setMenuOpen(false)} style={{flex:1,background:"rgba(0,0,0,.5)"}}/>
    </div>}
    <div style={{padding:"0 16px"}}>
    {/* ═══ HOME ═══ */}
    {view==="home"&&<div>
      <div style={{fontSize:14,color:"#706b63",margin:"12px 0 14px"}}>Today · {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
        <Kpi label="Pipeline" value={$(tp)} color={G} sub={P.length+" projects"}/><Kpi label="Robots" value={ar+"/"+R.length} color="#22c55e" sub="milling"/>
        <Kpi label="Revenue MTD" value="$268k" color="#60a5fa" sub="↑ 12% vs Jan"/><Kpi label="Urgent" value={uc} color="#ef4444" sub="need attention"/>
      </div>
      <Section title="Active">{P.filter(p=>p.st>=4&&p.st<10).slice(0,4).map(p=><Card key={p.id} onClick={()=>{setSel(p.id);setView("projects");}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:13,fontWeight:600}}>{p.nm}</span><Badge c={SC[p.stat]||G}>{p.stat}</Badge></div><Gauge pct={p.pct} color={STAGES[p.st]?.color}/></Card>)}</Section>
      <Section title="Urgent">{AL.filter(a=>a.ty==="urgent").slice(0,3).map(a=><Card key={a.id} accent="r"><div style={{fontSize:12,lineHeight:1.5}}>{a.msg}</div><div style={{fontSize:10,color:"#706b63",marginTop:3}}>{a.tm} · {a.ow}</div></Card>)}</Section>
    </div>}
    {/* ═══ PROJECTS ═══ */}
    {view==="projects"&&!sel&&<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,margin:"12px 0 14px"}}>
        <Kpi label="Active" value={P.filter(p=>p.st>=4&&p.st<10).length} color="#22c55e"/><Kpi label="Pipeline" value={$(tp)} color={G}/><Kpi label="Avg Margin" value={Math.round(P.reduce((s,p)=>s+p.mg,0)/P.length)+"%"} color="#60a5fa"/>
      </div>
      {P.map(p=><Card key={p.id} onClick={()=>setSel(p.id)}><div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}><span style={{fontSize:13,fontWeight:600}}>{p.nm}</span><span style={{fontSize:11,fontFamily:M,color:G}}>{$(p.q)}</span></div><div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#706b63",marginBottom:4}}><span>{p.cl}</span><Badge c={SC[p.stat]||G}>{p.stat}</Badge></div><div style={{display:"flex",gap:1.5,height:3,borderRadius:2,overflow:"hidden"}}>{STAGES.map((_,i)=><div key={i} style={{flex:1,background:i<p.st?STAGES[i].color:i===p.st?STAGES[i].color+"60":"rgba(255,255,255,.04)"}}/>)}</div></Card>)}
    </div>}
    {view==="projects"&&sel&&(()=>{const p=P.find(x=>x.id===sel);if(!p)return null;const rb=R.find(x=>x.id===p.rb);return <div><Back label="Projects"/>
      <div style={{fontSize:18,fontWeight:700,marginBottom:2}}>{p.nm}</div>
      <div style={{fontSize:12,color:"#706b63",marginBottom:14}}>{p.cl} · {p.ty} · Due {p.due}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Quoted" value={$(p.q)} color={G}/><Kpi label="Cost" value={$(p.c)} color="#a09a92"/><Kpi label="Margin" value={p.mg+"%"} color={p.mg>=20?"#22c55e":p.mg>=10?"#f59e0b":"#ef4444"}/><Kpi label="Progress" value={p.pct+"%"} color="#60a5fa"/></div>
      {rb&&<Card accent="g"><div style={{fontSize:11,color:"#22c55e",fontWeight:600}}>Currently Running</div><div style={{fontSize:13,marginTop:2}}>{rb.nm} — {rb.op}</div><div style={{fontSize:11,color:"#706b63"}}>ETA {rb.eta}</div></Card>}
      <Section title="Assignments">{p.rb&&<Row left={"🤖 "+(rb?.nm||p.rb)} leftSub="Robot" right={<Badge c="#22c55e">Active</Badge>}/>}{p.cv&&<Row left={"✋ "+p.cv} leftSub="Carver" right={<Badge c="#a78bfa">Assigned</Badge>}/>}<Row left={"🪨 "+p.stn} leftSub="Stone"/></Section>
      <Section title="Workflow">{STAGES.map((s,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",opacity:i<=p.st?1:.3}}><div style={{width:8,height:8,borderRadius:4,background:i<p.st?s.color:i===p.st?s.color+"80":"#3a3530"}}/><span style={{fontSize:12,color:i===p.st?"#e2e0dc":"#706b63",fontWeight:i===p.st?600:400}}>{s.label}</span>{i===p.st&&<Badge c={s.color}>Current</Badge>}</div>)}</Section>
      <div style={{display:"flex",gap:8,marginTop:14}}><Btn small color="#60a5fa">📧 Email</Btn><Btn small color="#22c55e">📞 Call</Btn></div>
    </div>;})()}
    {/* ═══ ROBOTS ═══ */}
    {view==="robots"&&!sel&&<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,margin:"12px 0 14px"}}><Kpi label="Milling" value={ar} color="#22c55e"/><Kpi label="Idle" value={R.filter(r=>r.st==="Idle").length} color="#64748b"/><Kpi label="⚠" value={R.filter(r=>r.st==="Maintenance").length} color="#ef4444"/></div>
      {R.map(r=><Card key={r.id} onClick={()=>setSel(r.id)} accent={r.st==="Maintenance"?"r":null}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:13,fontWeight:600}}>{r.nm}</span><Badge c={SC[r.st]||"#64748b"}>{r.st}</Badge></div>
        <div style={{fontSize:11,color:"#706b63",marginBottom:6}}>{r.st==="Milling"?(P.find(p=>p.id===r.prj)?.nm||"")+" · "+r.op:r.md+" · "+r.bay}</div>
        <div style={{display:"flex",gap:12}}><Gauge pct={r.up} color={r.up>=90?"#22c55e":"#f59e0b"} label="Uptime"/><Gauge pct={Math.round(r.sp/r.spM*100)} color={r.sp/r.spM>.8?"#ef4444":"#22c55e"} label="Spindle"/></div>
      </Card>)}
    </div>}
    {view==="robots"&&sel&&(()=>{const r=R.find(x=>x.id===sel);if(!r)return null;const sp=Math.round(r.sp/r.spM*100);return <div><Back label="Fleet"/>
      <div style={{fontSize:18,fontWeight:700,marginBottom:2}}>{r.nm}</div>
      <div style={{fontSize:12,color:"#706b63",marginBottom:14}}>{r.md} · {r.bay}</div>
      {r.st==="Milling"&&<Card accent="g"><div style={{fontSize:11,color:"#22c55e",fontWeight:600}}>Currently Running</div><div style={{fontSize:13,marginTop:2}}>{P.find(p=>p.id===r.prj)?.nm}</div><div style={{fontSize:11,color:"#706b63"}}>{r.op} · ETA {r.eta}</div></Card>}
      {r.iss&&<Card accent="r"><div style={{fontSize:11,color:"#ef4444",fontWeight:600}}>⚠ Active Issue</div><div style={{fontSize:12,marginTop:2}}>{r.iss}</div></Card>}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Uptime" value={r.up+"%"} color={r.up>=90?"#22c55e":"#f59e0b"}/><Kpi label="Spindle" value={sp+"%"} color={sp>80?"#ef4444":"#22c55e"}/></div>
      <Section title="Info"><Row left="Last Maint." right={r.lm}/><Row left="Next Maint." right={r.nm2}/><Row left="Spindle Hrs" right={r.sp+"/"+r.spM}/><Row left="Bay" right={r.bay}/></Section>
    </div>;})()}
    {/* ═══ FINANCES ═══ */}
    {view==="finances"&&<div style={{marginTop:12}}>
      <Pills tabs={[{k:"revenue",l:"Revenue"},{k:"pl",l:"P&L"},{k:"cashflow",l:"Cash Flow"},{k:"invoices",l:"Invoices"}]} active={finTab} onChange={setFinTab}/>
      {!finScen&&<div style={{marginBottom:10}}><Btn small color="#706b63" onClick={()=>setFinScen(true)}>📊 Edit Scenario</Btn></div>}
      <ScenBar/>
      {finTab==="revenue"&&<div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}><Kpi label="Revenue MTD" value={$(fa(268000,"r"))} color={G}/><Kpi label="YTD" value={$(fa(498000,"r"))} color="#60a5fa"/></div><AsOf/><div style={{height:200,marginBottom:14}}><ResponsiveContainer><ComposedChart data={RV.map(x=>({...x,r:fa(x.r*1000,"r")/1000,c:fa(x.c*1000,"c")/1000}))}><CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.04)"/><XAxis dataKey="m" tick={{fill:"#706b63",fontSize:10}} axisLine={false}/><YAxis tick={{fill:"#706b63",fontSize:10}} axisLine={false} tickFormatter={v=>"$"+v+"k"}/><Tooltip contentStyle={TT}/><Bar dataKey="c" fill="#ef444430" radius={[4,4,0,0]}/><Line dataKey="r" stroke={G} strokeWidth={2} dot={false}/></ComposedChart></ResponsiveContainer></div></div>}
      {finTab==="pl"&&<div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}><Kpi label="Rev" value={$(fa(268000,"r"))} color={G}/><Kpi label="Cost" value={$(fa(214000,"c"))} color="#ef4444"/><Kpi label="Profit" value={$(fa(268000,"r")-fa(214000,"c"))} color="#22c55e"/></div><AsOf/><Section title="Cost Breakdown">{PLY.map(x=><div key={x.c} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,.03)"}}><div style={{flex:1,fontSize:12}}>{x.c}</div><span style={{fontSize:12,fontFamily:M,color:G,width:50,textAlign:"right"}}>{$(fa(x.a*1000,"c"))}</span><div style={{width:50,height:5,borderRadius:3,background:"rgba(255,255,255,.06)",overflow:"hidden"}}><div style={{height:"100%",width:x.p+"%",borderRadius:3,background:G}}/></div></div>)}</Section></div>}
      {finTab==="cashflow"&&<div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}><Kpi label="Net This Month" value={$(fa(60000,"r"))} color="#22c55e"/><Kpi label="Cash" value="$342k" color={G}/></div><AsOf/><div style={{height:200}}><ResponsiveContainer><BarChart data={CFD.map(x=>({...x,i:fa(x.i*1000,"r")/1000,o:fa(Math.abs(x.o)*1000,"c")/-1000}))}><XAxis dataKey="m" tick={{fill:"#706b63",fontSize:10}} axisLine={false}/><YAxis tick={{fill:"#706b63",fontSize:10}} axisLine={false} tickFormatter={v=>"$"+v+"k"}/><Tooltip contentStyle={TT}/><Bar dataKey="i" fill="#22c55e40" radius={[4,4,0,0]}/><Bar dataKey="o" fill="#ef444430" radius={[4,4,0,0]}/></BarChart></ResponsiveContainer></div></div>}
      {finTab==="invoices"&&<div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}><Kpi label="Outstanding" value="$186k" color="#f59e0b"/><Kpi label="Collected" value="$842k" color="#22c55e"/><Kpi label="Overdue" value="$42.5k" color="#ef4444"/></div><Section title="Pending">{P.filter(p=>p.q>0).slice(0,6).map(p=><Row key={p.id} left={p.nm} leftSub={p.cl} right={$(Math.round(p.q*.4))} onClick={()=>{setSel(p.id);setView("projects");}}/>)}</Section></div>}
    </div>}
    {/* ═══ HUMANS ═══ */}
    {view==="humans"&&!sel&&<div style={{marginTop:12}}>
      <Pills tabs={[{k:"team",l:"Team ("+TM.length+")"},{k:"clients",l:"Clients ("+CL.length+")"},{k:"suppliers",l:"Suppliers ("+SP.length+")"}]} active={humTab} onChange={setHumTab}/>
      {humTab==="team"&&<div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Team" value={TM.length} color={G}/><Kpi label="FTE" value={TM.filter(t=>t.ft).length} color="#22c55e"/><Kpi label="CTR" value={TM.filter(t=>!t.ft).length} color="#60a5fa"/></div>
        {TM.map(t=>{const u=Math.round(t.hrs/t.cap*100);return <Card key={t.id} onClick={()=>setSel(t.id)}><div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{fontSize:13,fontWeight:600}}>{t.nm}</span><Badge c={t.ft?"#22c55e":"#60a5fa"}>{t.ft?"FTE":"CTR"}</Badge></div><div style={{fontSize:11,color:"#706b63",marginBottom:4}}>{t.rl} · {P.find(x=>x.id===t.prj)?.nm||"Available"}</div><Gauge pct={u} color={u>=90?"#ef4444":u>=70?"#22c55e":"#706b63"} label="Utilization"/></Card>;})}
      </div>}
      {humTab==="clients"&&<div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Clients" value={CL.length} color={G}/><Kpi label="Total Value" value={$(CL.reduce((s,c)=>s+c.val,0))} color="#22c55e"/></div>
        {CL.map(c=><Card key={c.id} onClick={()=>setSel(c.id)}><div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{fontSize:13,fontWeight:600}}>{c.nm}</span><Badge c={stC[c.s]||G}>{c.s}</Badge></div><div style={{fontSize:11,color:"#706b63"}}>{c.co} · {c.rl}</div><div style={{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:11}}><span style={{color:"#706b63"}}>Value: <span style={{color:G,fontFamily:M}}>{$(c.val)}</span></span><span style={{color:"#4a4540"}}>Last: {c.lt}</span></div></Card>)}
      </div>}
      {humTab==="suppliers"&&<div>{SP.map(s=><Card key={s.id}><div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{fontSize:13,fontWeight:600}}>{s.nm}</span><Badge c={s.q.startsWith("A")?"#22c55e":"#f59e0b"}>{s.q}</Badge></div><div style={{fontSize:11,color:"#706b63"}}>{s.loc} · {s.mat}</div><div style={{display:"flex",gap:12,marginTop:4,fontSize:11}}><span style={{color:"#706b63"}}>On-time: <span style={{color:s.ot>=95?"#22c55e":"#f59e0b",fontFamily:M}}>{s.ot}%</span></span><span style={{color:"#706b63"}}>Open POs: <span style={{fontFamily:M}}>{s.po}</span></span></div></Card>)}</div>}
    </div>}
    {view==="humans"&&sel&&(()=>{
      const t=TM.find(x=>x.id===sel);const c=CL.find(x=>x.id===sel);
      if(t){const u=Math.round(t.hrs/t.cap*100);return <div><Back label="Team"/><div style={{fontSize:18,fontWeight:700,marginBottom:2}}>{t.nm}</div><div style={{fontSize:12,color:"#706b63",marginBottom:14}}>{t.rl} · <Badge c={t.ft?"#22c55e":"#60a5fa"}>{t.ft?"FTE":"CTR"}</Badge></div><Gauge pct={u} color={u>=90?"#ef4444":"#22c55e"} label={t.hrs+"/"+t.cap+"h"}/>{t.sk&&<div style={{display:"flex",gap:4,flexWrap:"wrap",margin:"14px 0"}}>{t.sk.map(s=><span key={s} style={{fontSize:10,padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,.04)",color:"#a09a92"}}>{s}</span>)}</div>}<div style={{display:"flex",gap:8,marginBottom:14}}><Btn small color="#60a5fa">📧 Email</Btn><Btn small color="#22c55e">📞 Call</Btn></div><Section title="Current">{P.find(x=>x.id===t.prj)?<Card onClick={()=>{setSel(t.prj);setView("projects");}}><div style={{fontSize:13,fontWeight:600}}>{P.find(x=>x.id===t.prj).nm}</div><div style={{fontSize:11,color:"#706b63"}}>{P.find(x=>x.id===t.prj).cl}</div></Card>:<div style={{fontSize:12,color:"#4a4540"}}>No active assignment</div>}</Section></div>;}
      if(c){return <div><Back label="Clients"/><div style={{fontSize:18,fontWeight:700,marginBottom:2}}>{c.nm}</div><div style={{fontSize:12,color:"#706b63",marginBottom:14}}>{c.co} · {c.rl} · <Badge c={stC[c.s]||G}>{c.s}</Badge></div><Kpi label="Lifetime Value" value={$(c.val)} color={G}/><div style={{display:"flex",gap:8,margin:"14px 0"}}><Btn small color="#60a5fa">📧 Email</Btn><Btn small color="#22c55e">📞 Call</Btn></div><Section title="Projects">{P.filter(p=>p.cl===c.co).map(p=><Card key={p.id} onClick={()=>{setSel(p.id);setView("projects");}}><div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:13,fontWeight:600}}>{p.nm}</span><span style={{fontFamily:M,fontSize:11,color:G}}>{$(p.q)}</span></div><div style={{fontSize:11,color:"#706b63",marginTop:2}}>{STAGES[p.st]?.label} · {p.pct}%</div></Card>)}</Section></div>;}
      return null;
    })()}
    {/* ═══ SALES ═══ */}
    {view==="sales"&&<div style={{marginTop:12}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Pipeline" value={$(LD.reduce((s,l)=>s+l.val,0))} color={G}/><Kpi label="Hot" value={LD.filter(l=>l.hot).length} color="#ef4444"/><Kpi label="Avg Prob." value={Math.round(LD.reduce((s,l)=>s+l.pr,0)/LD.length)+"%"} color="#60a5fa"/></div>
      <Pills tabs={[{k:"all",l:"All"},{k:"hot",l:"🔥 Hot"},{k:"Proposal",l:"Proposal"},{k:"Negotiation",l:"Negotiation"},{k:"Discovery",l:"Discovery"}]} active={slFilt} onChange={setSlFilt}/>
      {LD.filter(l=>slFilt==="all"?true:slFilt==="hot"?l.hot:l.stg===slFilt).map((l,i)=><Card key={i}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{fontSize:13,fontWeight:600}}>{l.co}{l.hot?" 🔥":""}</span><span style={{fontFamily:M,fontSize:12,color:G}}>{$(l.val)}</span></div>
        <div style={{fontSize:11,color:"#706b63",marginBottom:4}}>{l.ct} · <Badge c={l.stg==="Negotiation"?"#f59e0b":l.stg==="Proposal"?"#60a5fa":"#a78bfa"}>{l.stg}</Badge></div>
        <Gauge pct={l.pr} color={l.pr>=60?"#22c55e":l.pr>=30?"#f59e0b":"#706b63"} label="Probability"/>
      </Card>)}
    </div>}
    {/* ═══ MARKETING ═══ */}
    {view==="marketing"&&<div style={{marginTop:12}}>
      <Pills tabs={[{k:"content",l:"Content"},{k:"analytics",l:"Analytics"}]} active={mktTab} onChange={setMktTab}/>
      {mktTab==="content"&&<div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Content" value={CT.length} color="#a78bfa"/><Kpi label="Total Views" value={(CT.reduce((s,c)=>s+(c.vw||0),0)/1000).toFixed(1)+"k"} color="#60a5fa"/><Kpi label="Shares" value={CT.reduce((s,c)=>s+c.sh,0)} color="#22c55e"/></div>
        {CT.map((c,i)=><Card key={i}><div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{fontSize:13,fontWeight:600}}>{c.t}</span><Badge c={c.ty==="Video"?"#ef4444":c.ty==="Blog"?"#60a5fa":c.ty==="Press"?"#22c55e":G}>{c.ty}</Badge></div><div style={{display:"flex",gap:12,fontSize:11,color:"#706b63",marginTop:3}}>{c.vw&&<span>{(c.vw/1000).toFixed(1)}k views</span>}<span>{c.sh} shares</span><span>{c.d}</span></div></Card>)}
      </div>}
      {mktTab==="analytics"&&<div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Website" value="2.4k" color="#60a5fa" sub="monthly visitors"/><Kpi label="Engagement" value="4.2%" color="#22c55e" sub="avg. rate"/></div><div style={{height:180}}><ResponsiveContainer><AreaChart data={[{m:"Sep",v:1200},{m:"Oct",v:1450},{m:"Nov",v:1680},{m:"Dec",v:1950},{m:"Jan",v:2100},{m:"Feb",v:2400}]}><XAxis dataKey="m" tick={{fill:"#706b63",fontSize:10}} axisLine={false}/><YAxis tick={{fill:"#706b63",fontSize:10}} axisLine={false}/><Tooltip contentStyle={TT}/><Area type="monotone" dataKey="v" stroke="#a78bfa" fill="#a78bfa20"/></AreaChart></ResponsiveContainer></div></div>}
    </div>}
    {/* ═══ STONE DB ═══ */}
    {view==="materials"&&<div style={{marginTop:12}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Stones" value={STN.length} color={G}/><Kpi label="Families" value={[...new Set(STN.map(s=>s.fm))].length} color="#60a5fa"/><Kpi label="Origins" value={[...new Set(STN.map(s=>s.or))].length} color="#22c55e"/></div>
      <div style={{marginBottom:12}}><input value={stSrch} onChange={e=>setStSrch(e.target.value)} placeholder="Search stones..." style={{width:"100%",boxSizing:"border-box",padding:"8px 12px",borderRadius:8,border:BD,background:"rgba(255,255,255,.04)",color:"#e2e0dc",fontSize:13,fontFamily:S,outline:"none"}}/></div>
      {STN.filter(s=>!stSrch||s.nm.toLowerCase().includes(stSrch.toLowerCase())||s.fm.toLowerCase().includes(stSrch.toLowerCase())).map((s,i)=><Card key={i}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{fontSize:13,fontWeight:600}}>{s.nm}</span><span style={{fontFamily:M,fontSize:12,color:G}}>${s.pr}/t</span></div>
        <div style={{display:"flex",gap:8,fontSize:11,color:"#706b63"}}><span>{s.fm}</span><span>·</span><span>{s.or}</span><span>·</span><span>Hardness {s.h}/10</span></div>
      </Card>)}
    </div>}
    {/* ═══ PROCUREMENT ═══ */}
    {view==="procurement"&&<div style={{marginTop:12}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Open POs" value={PO.filter(o=>o.s!=="Delivered").length} color="#f59e0b"/><Kpi label="In Transit" value={PO.filter(o=>o.s==="In Transit").length} color="#60a5fa"/><Kpi label="Total Spend" value={$(PO.reduce((s,o)=>s+o.a,0))} color={G}/></div>
      {PO.map(o=><Card key={o.id} accent={o.s==="Blocked"?"r":null}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{fontSize:13,fontWeight:600}}>{o.id}</span><Badge c={poC[o.s]||G}>{o.s}</Badge></div>
        <div style={{fontSize:11,color:"#706b63"}}>{o.stn} · {o.sup}</div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:11}}><span style={{color:"#706b63"}}>Amount: <span style={{fontFamily:M,color:G}}>{$(o.a)}</span></span>{o.eta!=="—"&&<span style={{color:"#706b63"}}>ETA: {o.eta}</span>}</div>
      </Card>)}
    </div>}
    {/* ═══ SCENARIO ═══ */}
    {view==="scenario"&&<div style={{marginTop:12}}>
      <Section title="Scenario Builder"><div style={{fontSize:12,color:"#706b63",marginBottom:12}}>Model different business outcomes with adjustable revenue and cost assumptions.</div>
      {!finScen&&<Btn color="#f59e0b" onClick={()=>setFinScen(true)}>📊 Open Scenario Builder</Btn>}
      <ScenBar/>
      {finScen&&<div style={{marginTop:14}}><div style={{height:200}}><ResponsiveContainer><ComposedChart data={RV.map(x=>({m:x.m,rev:fa(x.r*1000,"r")/1000,cost:fa(x.c*1000,"c")/1000,profit:(fa(x.r*1000,"r")-fa(x.c*1000,"c"))/1000}))}><CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.04)"/><XAxis dataKey="m" tick={{fill:"#706b63",fontSize:10}} axisLine={false}/><YAxis tick={{fill:"#706b63",fontSize:10}} axisLine={false} tickFormatter={v=>"$"+v+"k"}/><Tooltip contentStyle={TT}/><Bar dataKey="rev" fill={G+"40"} radius={[4,4,0,0]}/><Bar dataKey="cost" fill="#ef444430" radius={[4,4,0,0]}/><Line dataKey="profit" stroke="#22c55e" strokeWidth={2} dot={false}/></ComposedChart></ResponsiveContainer></div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:12}}><Kpi label="Adj. Rev" value={$(fa(268000,"r"))} color={G}/><Kpi label="Adj. Cost" value={$(fa(214000,"c"))} color="#ef4444"/><Kpi label="Adj. Profit" value={$(fa(268000,"r")-fa(214000,"c"))} color="#22c55e"/></div></div>}
      </Section>
    </div>}
    {/* ═══ CALENDAR ═══ */}
    {view==="calendar"&&<div style={{marginTop:12}}>
      <Section title="This Week — Feb 24–28">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Scheduled" value={ar+" robots"} color="#22c55e"/><Kpi label="Team" value={TM.filter(t=>t.hrs>100).length+" active"} color="#60a5fa"/></div>
        {[{d:"Mon 24",jobs:["Alpha → RAMSA 3/5","Beta → Bened. 6/12","Delta → Villard 1/3","Zeta → RAMSA 15/24","Eta → Aman Rough","Marco → RAMSA Polish","Elena → Venus Hand"]},{d:"Tue 25",jobs:["Alpha → RAMSA 3/5","Beta → Bened. 7/12","Delta → Villard 2/3","Zeta → RAMSA 16/24","Eta → Aman Rough"]},{d:"Wed 26",jobs:["Alpha → RAMSA 4/5","Beta → Bened. 7/12","Delta → Villard 2/3","David → Stripe QA"]},{d:"Thu 27",jobs:["Alpha → RAMSA 4/5","Beta → Bened. 8/12","Omar → Aman Crate"]},{d:"Fri 28",jobs:["Alpha → RAMSA 5/5","Beta → Bened. 8/12","Elena → Venus Final","Omar → Ship Stripe"]}].map(day=><Card key={day.d}><div style={{fontSize:12,fontWeight:700,color:G,marginBottom:6}}>{day.d}</div>{day.jobs.map((j,i)=><div key={i} style={{fontSize:11,color:"#a09a92",padding:"3px 0",borderBottom:i<day.jobs.length-1?"1px solid rgba(255,255,255,.02)":"none"}}>{j.includes("→")?<><span style={{color:j.split("→")[0].trim().match(/^[A-Z]/)?STAGES[6].color:"#a78bfa"}}>{j.split("→")[0]}</span><span style={{color:"#4a4540"}}>→</span>{j.split("→")[1]}</>:j}</div>)}</Card>)}
      </Section>
    </div>}
    {/* ═══ OP LOG ═══ */}
    {view==="alerts"&&<div style={{marginTop:12}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}><Kpi label="Urgent" value={AL.filter(a=>a.ty==="urgent").length} color="#ef4444"/><Kpi label="Total" value={AL.length} color="#706b63"/></div>
      <Pills tabs={[{k:"all",l:"All"},{k:"urgent",l:"🔴 Urgent"},{k:"update",l:"Updates"},{k:"info",l:"Info"}]} active={alFilt} onChange={setAlFilt}/>
      {AL.filter(a=>alFilt==="all"?true:a.ty===alFilt).map(a=><Card key={a.id} accent={a.ty==="urgent"?"r":null}>
        <div style={{display:"flex",alignItems:"flex-start",gap:8}}><span style={{fontSize:13,flexShrink:0}}>{a.cat}</span><div style={{flex:1}}><div style={{fontSize:12,lineHeight:1.5,color:"#e2e0dc"}}>{a.msg}</div><div style={{fontSize:10,color:"#706b63",marginTop:3}}>{a.tm} · {a.ow}</div></div></div>
      </Card>)}
    </div>}
    </div>
    {/* TAB BAR */}
    <div style={{position:"fixed",bottom:0,left:0,right:0,display:"flex",justifyContent:"space-around",padding:"8px 0 12px",background:"#1a1814",borderTop:"1px solid rgba(255,255,255,.06)",zIndex:100}}>{[{k:"home",i:"🏠",l:"Home"},{k:"projects",i:"📋",l:"Projects"},{k:"robots",i:"🤖",l:"Robots"},{k:"finances",i:"💰",l:"Finance"},{k:"alerts",i:"⚡",l:"Log"}].map(t=><button key={t.k} onClick={()=>nav(t.k)} style={{background:"none",border:"none",display:"flex",flexDirection:"column",alignItems:"center",gap:2,cursor:"pointer",padding:"2px 0",minWidth:50}}><span style={{fontSize:14,color:view===t.k?G:"#4a4540"}}>{t.i}</span><span style={{fontSize:9,color:view===t.k?G:"#4a4540",fontFamily:S,fontWeight:view===t.k?600:400}}>{t.l}</span></button>)}</div>
  </div>);
}
