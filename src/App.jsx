import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, LineChart, Line, ComposedChart, ReferenceLine } from "recharts";
// Dashboard component imports
import MissionDashboards from "./dashboards/mission/Dashboards.jsx";
import LifecycleView from "./dashboards/lifecycle/Lifecycle.jsx";
import EstimatorView from "./dashboards/sales/Estimator.jsx";
import FinancialsView from "./dashboards/financials/Financials.jsx";
import MacroPulseView from "./dashboards/macro/Pulse.jsx";
import ProcurementView from "./dashboards/procurement/Procurement.jsx";
import AlertsLogView from "./dashboards/alerts/Log.jsx";
import SalesPipelineView from "./dashboards/sales/Pipeline.jsx";
import CapacityView from "./dashboards/capacity/Capacity.jsx";
import CalendarView from "./dashboards/calendar/Schedule.jsx";
import MCPanelView from "./dashboards/mission/Panel.jsx";
import MarketingView from "./dashboards/marketing/Marketing.jsx";
import RobotsView from "./dashboards/robots/Fleet.jsx";
import ScenarioView from "./dashboards/scenario/Builder.jsx";

const M="'JetBrains Mono',monospace",S="'Outfit',sans-serif",D="'Instrument Serif',serif";
const G="#c4a882",CB="rgba(255,255,255,.018)",BD="1px solid rgba(255,255,255,.05)";
/*─── COLOR SYSTEM ───
  Semantic:    #22c55e green (success/active/positive)  │  #ef4444 red (error/critical/loss)
               #f59e0b amber (warning/pending/caution)   │  #60a5fa blue (info/neutral/scoping)
               #a78bfa purple (AI/hand-finishing/premium) │  #f472b6 pink (profit/margin)
  Brand:       G=#c4a882 gold (primary accent, brand)    │  #64748b slate (inactive/idle/low)
  Surfaces:    #e2e0dc (primary text)  #a09a92 (secondary text)  #706b63 (muted text)
               #4a4540 (disabled text) #3a3530 (faintest text)   #0c0b0a (background)
───*/
const $=n=>"$"+Number(n||0).toLocaleString(undefined,{maximumFractionDigits:0});
const PC=(a,b)=>b?Math.round(a/b*100):0;
const TT={background:"#1a1918",border:"1px solid rgba(255,255,255,.1)",borderRadius:6,fontFamily:M,fontSize:14,color:"#e2e0dc"};
const PRI={critical:"#ef4444",high:"#f59e0b",medium:"#60a5fa",low:"#64748b"};
const STAT_C={Milling:"#22c55e",Idle:"#64748b",Maintenance:"#ef4444",Queued:"#f59e0b",Carving:"#22c55e",Available:"#64748b",Polishing:"#a78bfa"};
const FC=f=>({Marble:G,Limestone:"#a8b89a",Granite:"#8a8a8a",Sandstone:"#c9a86c",Travertine:"#b8a488",Onyx:"#d4a0e0",Quartzite:"#7eb8a4"}[f]||G);
const CC=c=>({White:"#e2e0dc",Black:"#555",Grey:"#888",Beige:G,Red:"#c45c5c",Pink:"#d4849a",Brown:"#8b7355",Violet:"#9b7dbd",Cream:"#d4c9a8",Green:"#6a9a7a",Multi:"#b89a6a","White/Gold":"#d4c088"}[c]||"#a09a92");
const ROLES_C={Commodity:"#64748b",Commercial:"#60a5fa","Mid-Market":G,Premium:"#a78bfa","Ultra-Luxury":"#f59e0b"};
const stonePrice=s=>({Commodity:600,Commercial:850,"Mid-Market":1100,Premium:1800,"Ultra-Luxury":2400}[s.role]||1000);
const genInv=()=>"INV-"+new Date().getFullYear()+"-"+String(Math.floor(Math.random()*9000)+1000);
const now=()=>new Date().toISOString().slice(0,10);
const ts=()=>new Date().toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});
const AsOf=()=><div style={{fontSize:9,color:"#4a4540",fontFamily:M,textAlign:"right",marginTop:4,marginBottom:8}}>{"as of "+new Date().toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}</div>;

const STAGES=[
  {key:"summary",label:"Summary",icon:"📊",color:"#60a5fa",desc:"Project overview — assignments, financials, activity",fields:[]},
  {key:"estimation",label:"Estimation",icon:"📐",color:"#8b9dc3",desc:"Volume, material & cost calculations",
    fields:[{k:"volume",l:"Volume (m³)",t:"auto"},{k:"surfaceArea",l:"Surface Area (m²)",t:"auto"},{k:"materialTonnes",l:"Material (t)",t:"auto"},{k:"robotHrsEst",l:"Est. Robot Hrs",t:"number"},{k:"handHrsEst",l:"Est. Hand Hrs",t:"number"},{k:"complexity",l:"Complexity",t:"select",o:["low","medium","high","extreme"]},{k:"totalEstCost",l:"Total Est. Cost ($)",t:"number"},{k:"costNotes",l:"Cost Notes",t:"text"},{k:"estimatedBy",l:"Estimated By",t:"text"}]},
  {key:"quote",label:"Quote Sent",icon:"📄",color:"#7eb8a4",desc:"Formal pricing delivered to client",
    fields:[{k:"quotedPrice",l:"Quoted Price ($)",t:"number"},{k:"margin",l:"Margin (%)",t:"auto"},{k:"paymentTerms",l:"Payment Terms",t:"select",o:["50/50","30/40/30","100% upfront","ML finances","Net 30","Net 60"]},{k:"quoteDate",l:"Quote Date",t:"date"},{k:"quoteExpiry",l:"Expiry",t:"date"},{k:"clientContact",l:"Client Contact",t:"text"},{k:"quoteStatus",l:"Status",t:"select",o:["Draft","Sent","Viewed","Accepted","Rejected","Expired"]},{k:"followUpDate",l:"Follow-up",t:"date"},{k:"quoteNotes",l:"Notes",t:"text"}]},
  {key:"design",label:"Design",icon:"✏️",color:"#a8c0e8",desc:"3D modeling from scan/concept/drawing",
    fields:[{k:"designSource",l:"Source",t:"select",o:["3D scan","Artist maquette","CAD drawings","Reference photos","Concept sketch","Client file"]},{k:"softwareUsed",l:"Software",t:"select",o:["Rhino 8","ZBrush","Rhino + ZBrush","Artec 3D","Blender","Fusion 360"]},{k:"modelVersion",l:"Version",t:"text"},{k:"fileFormat",l:"Format",t:"select",o:["STL","OBJ","STEP","STL + STEP","IGES","DWG"]},{k:"designApproved",l:"Approved",t:"select",o:["No","In review","Revisions","Yes"]},{k:"revisionCount",l:"Revisions",t:"number"},{k:"designNotes",l:"Notes",t:"text"},{k:"designCompleted",l:"Completed",t:"date"}]},
  {key:"toolpath",label:"Toolpath",icon:"🔧",color:"#d4a574",desc:"CNC toolpath generation & robot simulation",
    fields:[{k:"software",l:"Software",t:"select",o:["PowerMill 2025","PowerMill 2024","Mastercam","SprutCAM"]},{k:"strategy",l:"Strategy",t:"text"},{k:"passCount",l:"Passes",t:"number"},{k:"toolBits",l:"Tool Bits",t:"text"},{k:"estMillTime",l:"Est. Mill Hrs",t:"number"},{k:"simComplete",l:"Simulation",t:"select",o:["Not started","In progress","Approved","Failed"]},{k:"codeExported",l:"Robot Code",t:"select",o:["Not exported","Exported","Tested","Deployed"]},{k:"orientation",l:"Block Orient.",t:"text"},{k:"toolpathNotes",l:"Notes",t:"text"}]},
  {key:"stone_sourcing",label:"Stone/Carver Sourcing",icon:"🪨",color:"#b8a488",desc:"Stone selection, ordering & logistics",
    fields:[{k:"stoneType",l:"Stone",t:"stone"},{k:"supplier",l:"Supplier",t:"text"},{k:"blockId",l:"Block ID(s)",t:"text"},{k:"blockDims",l:"Block Dims",t:"text"},{k:"orderDate",l:"Order Date",t:"date"},{k:"weight",l:"Weight (t)",t:"number"},{k:"shipStatus",l:"Ship Status",t:"select",o:["Not ordered","Ordered","In transit","Customs","Delivered","Issue"]},{k:"eta",l:"ETA",t:"date"},{k:"stoneCost",l:"Cost ($)",t:"number"},{k:"assignedCarver",l:"Assigned Carver",t:"carver"},{k:"carverNotes",l:"Assignment Notes",t:"text"}]},
  {key:"invoice1",label:"Invoice #1",icon:"💰",color:"#7eba7e",desc:"50% deposit — triggers fabrication",
    fields:[{k:"invNum",l:"Invoice #",t:"text"},{k:"amount",l:"Amount ($)",t:"number"},{k:"dateSent",l:"Sent",t:"date"},{k:"dateDue",l:"Due",t:"date"},{k:"datePaid",l:"Paid",t:"date"},{k:"method",l:"Method",t:"select",o:["","Wire","ACH","Check","Card","Crypto"]},{k:"status",l:"Status",t:"select",o:["Draft","Sent","Overdue","Paid","Partial"]},{k:"reminder",l:"Reminder",t:"select",o:["No","1x","2x","3x+"]},{k:"notes",l:"Notes",t:"text"}]},
  {key:"fabrication",label:"Fabrication",icon:"🤖",color:"#22c55e",desc:"Robotic milling: roughing → detail → finish",
    fields:[{k:"robot",l:"Robot",t:"robot"},{k:"curPass",l:"Current Pass",t:"number"},{k:"totPass",l:"Total Passes",t:"number"},{k:"hrsLogged",l:"Hrs Logged",t:"number"},{k:"startDate",l:"Start",t:"date"},{k:"estEnd",l:"Est. End",t:"date"},{k:"overnight",l:"Overnight",t:"select",o:["No","Supervised","Unsupervised","Continuous"]},{k:"toolWear",l:"Tool Wear",t:"text"},{k:"quality",l:"Quality",t:"select",o:["","Excellent","Good","Acceptable","Issues"]},{k:"fabNotes",l:"Notes",t:"text"}]},
  {key:"hitl_polish",label:"HITL Polish",icon:"✋",color:"#a78bfa",desc:"Human hand finishing & artistic detail",
    fields:[{k:"carver",l:"Carver",t:"carver"},{k:"hrsLogged",l:"Hrs Logged",t:"number"},{k:"startDate",l:"Start",t:"date"},{k:"estEnd",l:"Est. End",t:"date"},{k:"finishType",l:"Finish",t:"select",o:["","High polish","Honed matte","Heritage match","Textured","Selective","Custom"]},{k:"qualityNotes",l:"Quality Notes",t:"text"},{k:"photos",l:"Photos",t:"number"},{k:"artistApproval",l:"Artist OK",t:"select",o:["N/A","Pending","Revisions","Approved"]},{k:"polishNotes",l:"Notes",t:"text"}]},
  {key:"invoice2",label:"Invoice #2",icon:"💰",color:"#4ade80",desc:"Final balance — due before delivery",
    fields:[{k:"invNum",l:"Invoice #",t:"auto_inv"},{k:"amount",l:"Amount ($)",t:"number"},{k:"dateSent",l:"Sent",t:"date"},{k:"dateDue",l:"Due",t:"date"},{k:"datePaid",l:"Paid",t:"date"},{k:"method",l:"Method",t:"select",o:["","Wire","ACH","Check","Card","Crypto"]},{k:"status",l:"Status",t:"select",o:["Draft","Sent","Overdue","Paid","Partial"]},{k:"notes",l:"Notes",t:"text"}]},
  {key:"qa_crating",label:"QA & Crating",icon:"📦",color:"#f59e0b",desc:"Quality inspection, photos & crating",
    fields:[{k:"inspector",l:"Inspector",t:"text"},{k:"qaDate",l:"QA Date",t:"date"},{k:"result",l:"Result",t:"select",o:["","Pass","Pass w/ notes","Minor issues","Major — rework","Fail"]},{k:"dimCheck",l:"Dim Check",t:"select",o:["","Within spec","Minor dev","Out of spec"]},{k:"photoCount",l:"Photos",t:"number"},{k:"crateType",l:"Crate",t:"select",o:["","Standard wood","Custom wood","Foam-lined","Museum grade","Steel frame"]},{k:"crateDims",l:"Crate Dims",t:"text"},{k:"totalWeight",l:"Weight (kg)",t:"number"},{k:"qaNotes",l:"Notes",t:"text"}]},
  {key:"delivery",label:"Delivery",icon:"🚛",color:"#60a5fa",desc:"Shipping, installation & handoff",
    fields:[{k:"carrier",l:"Carrier",t:"select",o:["","FedEx Custom","Stone Transport","Local courier","Client pickup","ML team"]},{k:"tracking",l:"Tracking #",t:"text"},{k:"shipDate",l:"Ship",t:"date"},{k:"delivDate",l:"Delivery",t:"date"},{k:"delivStatus",l:"Status",t:"select",o:["","Scheduled","In transit","Delivered","Issue"]},{k:"install",l:"Install",t:"select",o:["No","ML team","Client crew","3rd party","White glove"]},{k:"installDate",l:"Install Date",t:"date"},{k:"signoff",l:"Sign-off",t:"select",o:["","Pending","Signed","Issue"]},{k:"delivNotes",l:"Notes",t:"text"}]},
];

const STONE_DB=[
  {id:1,name:"Bianco Carrara C",fam:"Marble",hard:4.0,origin:"Italy",role:"Mid-Market",pat:"Veined",color:"White",grain:"Fine crystalline",dur:3,pol:9,por:4,yld:80,wa:"0.2-0.4%",ecm:0.95,fm:1.05,cs:"120-140 MPa"},
  {id:2,name:"Calacatta Murano",fam:"Marble",hard:4.0,origin:"Italy",role:"Ultra-Luxury",pat:"Veined",color:"White",grain:"Fine crystalline",dur:3,pol:9,por:4,yld:83,wa:"0.2-0.5%",ecm:1.0,fm:1.05,cs:"115-135 MPa"},
  {id:3,name:"Statuario Carrara",fam:"Marble",hard:4.0,origin:"Italy",role:"Ultra-Luxury",pat:"Veined",color:"White",grain:"Fine crystalline",dur:3,pol:9,por:4,yld:83,wa:"0.2-0.4%",ecm:0.95,fm:1.05,cs:"120-140 MPa"},
  {id:4,name:"Calacatta Manhattan Light",fam:"Marble",hard:4.0,origin:"Italy",role:"Ultra-Luxury",pat:"Veined",color:"White",grain:"Fine crystalline",dur:3,pol:9,por:4,yld:78,wa:"0.2-0.5%",ecm:1.0,fm:1.05,cs:"115-135 MPa"},
  {id:5,name:"Botticino Semi Classico",fam:"Marble",hard:3.5,origin:"Italy",role:"Mid-Market",pat:"Uniform",color:"Beige",grain:"Medium crystalline",dur:3,pol:9,por:5,yld:80,wa:"0.3-0.5%",ecm:0.81,fm:1.1,cs:"130-150 MPa"},
  {id:6,name:"Rosso Verona",fam:"Marble",hard:3.5,origin:"Italy",role:"Mid-Market",pat:"Veined",color:"Red",grain:"Medium crystalline",dur:4,pol:9,por:5,yld:80,wa:"0.2-0.4%",ecm:0.85,fm:1.1,cs:"130-150 MPa"},
  {id:7,name:"Serpeggiante",fam:"Marble",hard:3.5,origin:"Italy",role:"Mid-Market",pat:"Veined",color:"Beige",grain:"Medium crystalline",dur:3,pol:9,por:5,yld:80,wa:"0.3-0.5%",ecm:0.85,fm:1.1,cs:"100-120 MPa"},
  {id:8,name:"Bianco Perlino",fam:"Marble",hard:3.5,origin:"Italy",role:"Mid-Market",pat:"Clouded",color:"White",grain:"Medium crystalline",dur:3,pol:9,por:5,yld:80,wa:"0.2-0.5%",ecm:0.85,fm:1.1,cs:"100-140 MPa"},
  {id:9,name:"Rosa Perlino Asiago",fam:"Marble",hard:3.5,origin:"Italy",role:"Mid-Market",pat:"Speckled",color:"Pink",grain:"Medium crystalline",dur:4,pol:9,por:5,yld:80,wa:"0.4-0.6%",ecm:0.85,fm:1.1,cs:"100-120 MPa"},
  {id:10,name:"Sahara Noir",fam:"Marble",hard:3.5,origin:"Italy",role:"Commercial",pat:"Dramatic",color:"Black",grain:"Medium crystalline",dur:5,pol:9,por:5,yld:75,wa:"0.3-0.5%",ecm:0.85,fm:1.1,cs:"100-140 MPa"},
  {id:11,name:"Breccia Paradiso",fam:"Marble",hard:3.5,origin:"Italy",role:"Mid-Market",pat:"Brecciated",color:"Brown",grain:"Fragmented",dur:4,pol:7,por:6,yld:67,wa:"0.4-0.7%",ecm:1.02,fm:1.35,cs:"90-110 MPa"},
  {id:12,name:"Breccia Viola Extra",fam:"Marble",hard:3.5,origin:"Italy",role:"Premium",pat:"Brecciated",color:"Violet",grain:"Fragmented",dur:4,pol:7,por:6,yld:75,wa:"0.4-0.7%",ecm:1.02,fm:1.35,cs:"90-110 MPa"},
  {id:13,name:"Arabescato Gioia",fam:"Marble",hard:3.5,origin:"Italy",role:"Premium",pat:"Veined",color:"White",grain:"Medium crystalline",dur:3,pol:9,por:5,yld:75,wa:"0.3-0.5%",ecm:0.85,fm:1.1,cs:"100-140 MPa"},
  {id:14,name:"Alma Grey Granite",fam:"Granite",hard:6.5,origin:"Italy",role:"Commercial",pat:"Speckled",color:"Grey",grain:"Coarse",dur:9,pol:7,por:2,yld:90,wa:"0.1-0.3%",ecm:1.4,fm:1.15,cs:"180-250 MPa"},
  {id:15,name:"Via Lattea Granite",fam:"Granite",hard:6.5,origin:"Italy",role:"Mid-Market",pat:"Uniform",color:"Black",grain:"Coarse",dur:10,pol:7,por:1,yld:85,wa:"0.1-0.3%",ecm:1.4,fm:1.1,cs:"180-250 MPa"},
  {id:16,name:"G603 Light Grey",fam:"Granite",hard:6.5,origin:"China",role:"Commodity",pat:"Uniform",color:"Grey",grain:"Coarse",dur:9,pol:7,por:2,yld:90,wa:"0.1-0.3%",ecm:1.4,fm:1.15,cs:"180-250 MPa"},
  {id:17,name:"Aurisina Limestone",fam:"Limestone",hard:3.5,origin:"Italy",role:"Commercial",pat:"Veined",color:"Beige",grain:"Medium crystalline",dur:5,pol:9,por:7,yld:77,wa:"0.5-2.0%",ecm:0.85,fm:1.2,cs:"60-100 MPa"},
  {id:18,name:"Indiana Limestone",fam:"Limestone",hard:3.2,origin:"USA",role:"Commercial",pat:"Uniform",color:"Beige",grain:"Medium",dur:8,pol:4,por:7,yld:90,wa:"0.5-2.0%",ecm:0.85,fm:1.2,cs:"60-100 MPa"},
  {id:19,name:"Limra Limestone",fam:"Limestone",hard:3.5,origin:"Italy",role:"Commercial",pat:"Veined",color:"Beige",grain:"Medium crystalline",dur:5,pol:9,por:7,yld:77,wa:"0.5-2.0%",ecm:0.85,fm:1.2,cs:"60-100 MPa"},
  {id:20,name:"Pietra Serena Sandstone",fam:"Sandstone",hard:6.0,origin:"Italy",role:"Commercial",pat:"Layered",color:"Grey",grain:"Fine",dur:7,pol:3,por:9,yld:70,wa:"1.0-6.0%",ecm:1.4,fm:1.5,cs:"40-70 MPa"},
  {id:21,name:"Alba Grey Sandstone",fam:"Sandstone",hard:6.0,origin:"Italy",role:"Commodity",pat:"Layered",color:"Grey",grain:"Fine",dur:7,pol:5,por:9,yld:75,wa:"1.0-6.0%",ecm:1.4,fm:1.5,cs:"40-70 MPa"},
  {id:22,name:"Macedonia Honey Onyx",fam:"Onyx",hard:6.5,origin:"Italy",role:"Mid-Market",pat:"Veined",color:"Multi",grain:"Crystalline",dur:3,pol:10,por:4,yld:60,wa:"0.1-0.3%",ecm:1.82,fm:0.95,cs:"50-80 MPa"},
  {id:23,name:"Pink Onyx",fam:"Onyx",hard:6.5,origin:"Italy",role:"Mid-Market",pat:"Veined",color:"Pink",grain:"Crystalline",dur:3,pol:10,por:4,yld:60,wa:"0.1-0.3%",ecm:1.82,fm:0.95,cs:"50-80 MPa"},
  {id:24,name:"Antracite Quartzite",fam:"Quartzite",hard:7.0,origin:"Italy",role:"Commercial",pat:"Uniform",color:"Black",grain:"Medium crystalline",dur:9,pol:9,por:5,yld:85,wa:"0.1-0.2%",ecm:1.4,fm:1.1,cs:"200-300 MPa"},
  {id:25,name:"Rhein Quarzit",fam:"Quartzite",hard:7.0,origin:"Italy",role:"Mid-Market",pat:"Veined",color:"Beige",grain:"Medium crystalline",dur:9,pol:9,por:5,yld:80,wa:"0.1-0.2%",ecm:1.4,fm:1.1,cs:"200-300 MPa"},
  {id:26,name:"Travertino Romano",fam:"Travertine",hard:3.5,origin:"Italy",role:"Commercial",pat:"Layered",color:"Cream",grain:"Porous/Cellular",dur:5,pol:9,por:8,yld:70,wa:"1.0-5.0%",ecm:0.98,fm:1.45,cs:"50-80 MPa"},
  {id:27,name:"Roman Travertine Silver",fam:"Travertine",hard:3.5,origin:"Italy",role:"Commercial",pat:"Layered",color:"Green",grain:"Porous/Cellular",dur:5,pol:9,por:8,yld:65,wa:"1.0-5.0%",ecm:0.98,fm:1.45,cs:"50-80 MPa"},
  {id:28,name:"Estremoz White",fam:"Marble",hard:3.4,origin:"Portugal",role:"Mid-Market",pat:"Uniform",color:"White",grain:"Fine crystalline",dur:6,pol:9,por:3,yld:86,wa:"0.2-0.3%",ecm:0.9,fm:1.05,cs:"110-130 MPa"},
  {id:29,name:"Absolute Black",fam:"Granite",hard:6.8,origin:"India",role:"Premium",pat:"Uniform",color:"Black",grain:"Coarse",dur:10,pol:7,por:1,yld:88,wa:"0.1-0.2%",ecm:1.4,fm:1.1,cs:"200-280 MPa"},
  {id:30,name:"Calacatta Gold",fam:"Marble",hard:3.6,origin:"Italy",role:"Ultra-Luxury",pat:"Veined",color:"White/Gold",grain:"Fine crystalline",dur:5,pol:9,por:4,yld:80,wa:"0.2-0.4%",ecm:1.0,fm:1.05,cs:"115-135 MPa"},
];

const ROBOTS=[
  {id:"R1",name:"KUKA Alpha",status:"Milling",prj:"PRJ-003",op:"Roughing 3/5",eta:"2h 15m",up:94.2},
  {id:"R2",name:"KUKA Beta",status:"Milling",prj:"PRJ-012",op:"Detail 2/8",eta:"6h 40m",up:91.8},
  {id:"R3",name:"KUKA Gamma",status:"Idle",prj:null,op:"—",eta:"—",up:88.5},
  {id:"R4",name:"KUKA Delta",status:"Milling",prj:"PRJ-001",op:"Finish 1/3",eta:"4h 10m",up:96.1},
  {id:"R5",name:"KUKA Epsilon",status:"Maintenance",prj:null,op:"Spindle swap",eta:"~3h",up:72.3},
  {id:"R6",name:"KUKA Zeta",status:"Milling",prj:"PRJ-015",op:"Roughing 1/4",eta:"8h 20m",up:93.7},
  {id:"R7",name:"KUKA Eta",status:"Queued",prj:"PRJ-009",op:"Awaiting load",eta:"—",up:90.1},
];
const CARVERS=[
  {id:"C1",name:"Marco V.",spec:"Figurative",status:"Carving",prj:"PRJ-003"},
  {id:"C2",name:"Elena S.",spec:"Architectural",status:"Carving",prj:"PRJ-005"},
  {id:"C3",name:"James K.",spec:"Ornament",status:"Available",prj:null},
  {id:"C4",name:"Sofia R.",spec:"Figurative",status:"Carving",prj:"PRJ-007"},
  {id:"C5",name:"David M.",spec:"Restoration",status:"Polishing",prj:"PRJ-001"},
];

const mkSD=()=>{const d={};STAGES.forEach(s=>{d[s.key]={};s.fields.forEach(f=>d[s.key][f.k]="");});return d;};

const INIT_EST_QUEUE=[
  {id:"EQ-001",client:"Schwarz Architects",desc:"Nashville limestone facade, 16 panels",status:"Agent Pricing",step:3,stoneRec:"Indiana Limestone",recReason:"Uniform texture ideal for architectural facade; no veining ensures consistent panel appearance; high durability (8/10) for exterior use",files:["facade_plans.dwg","reference_photos.zip"],estCost:240000,agentNotes:"Analyzing panel complexity... 16 unique designs detected. Cross-referencing with RAMSA project for similar scope pricing.",ts:"2026-02-17 13:45",pricedBy:"agent",dateSent:null,stoneId:8,dims:{l:"2.4",w:"1.2",h:"0.15"},cx:"high",changelog:[]},
  {id:"EQ-002",client:"Private Collector",desc:"Bust of Marcus Aurelius, 60cm height",status:"HITL Review",step:4,stoneRec:"Carrara White CD",recReason:"Classic white marble for figurative sculpture; fine grain allows detailed carving; traditional choice for portrait busts",files:["aurelius_scan.stl"],estCost:18500,agentNotes:"High detail face — flagged for human review of hand-finishing estimate. Robot time confident at 12h, hand time uncertain: 15-30h range.",ts:"2026-02-17 12:20",pricedBy:"agent",dateSent:null,stoneId:1,dims:{l:"0.3",w:"0.25",h:"0.6"},cx:"extreme",changelog:[]},
  {id:"EQ-003",client:"Aman Resorts",desc:"Lobby water feature, travertine, 3m×2m",status:"Files Received",step:1,stoneRec:"",recReason:"",files:["concept_render.jpg","dimensions.pdf"],estCost:null,agentNotes:"Processing uploaded files... Extracting dimensions from PDF.",ts:"2026-02-17 14:10",pricedBy:null,dateSent:null,stoneId:null,dims:{l:"3",w:"2",h:"0.4"},cx:"medium",changelog:[]},
  {id:"EQ-004",client:"Jeff Koons Studio",desc:"Abstract form, polished granite, 1.2m",status:"Quote Sent",step:6,stoneRec:"Absolute Black",recReason:"Mirror polish achievable (polish rank 1); extreme hardness ensures longevity; solid uniform color matches Koons' aesthetic",files:["koons_form_v3.step"],estCost:95000,agentNotes:"Quote QTN-2026-0088 sent to studio. 50% margin applied per fine art pricing. Awaiting response.",ts:"2026-02-16 16:30",pricedBy:"human",dateSent:"2026-02-14",stoneId:15,dims:{l:"0.6",w:"0.6",h:"1.2"},cx:"high",changelog:[]},
  {id:"EQ-005",client:"Soho House NYC",desc:"Reception desk surround, Calacatta marble, 4.2m curved",status:"Quote Sent",step:6,stoneRec:"Calacatta Gold",recReason:"Ultra-luxury veining for statement piece; dramatic pattern per client mood board; high polish achievable (9/10)",files:["reception_cad.step","mood_board.pdf"],estCost:68000,agentNotes:"Quote QTN-2026-0072 sent. Client requested Calacatta specifically. Lead time concern — 5-6 week sourcing.",ts:"2026-02-01 10:15",pricedBy:"agent",dateSent:"2026-02-02"},
  {id:"EQ-006",client:"Mark Foster Gage Architects",desc:"Parametric facade panels ×8, limestone",status:"Quote Sent",step:6,stoneRec:"Indiana Limestone",recReason:"Cost-effective for batch architectural elements; uniform texture ensures consistent panel matching; proven with RAMSA project",files:["gage_panels_v2.3dm","spec_sheet.pdf","elevation.dwg"],estCost:156000,agentNotes:"Quote QTN-2026-0061 sent Jan 28. Complex geometry — 5-axis required. Follow-up call scheduled but not completed.",ts:"2026-01-27 09:30",pricedBy:"human",dateSent:"2026-01-28"},
  {id:"EQ-007",client:"Hudson Yards Developer",desc:"Lobby column capitals ×6, Corinthian style",status:"Quote Sent",step:6,stoneRec:"Bianco Carrara C",recReason:"Classic marble for architectural capitals; fine grain supports acanthus leaf detail; cost-effective at Mid-Market tier",files:["column_scan.stl","detail_spec.pdf"],estCost:180000,agentNotes:"Quote QTN-2026-0055 sent Jan 18. Developer comparing against precast concrete alternative. Price competitive at $30k/capital vs $90k hand-carved.",ts:"2026-01-17 14:00",pricedBy:"agent",dateSent:"2026-01-18"},
  {id:"EQ-008",client:"Whitney Museum",desc:"Outdoor sculpture restoration, 2 granite plinths",status:"Quote Sent",step:6,stoneRec:"Alma Grey",recReason:"Granite durability essential for outdoor exposure; speckled pattern matches existing museum plinths; high compressive strength for load bearing",files:["plinth_photos.zip","dims_survey.pdf"],estCost:42000,agentNotes:"Quote QTN-2026-0044 sent Dec 22. Museum procurement cycle — expect 6-8 week decision. Budget approval needed from facilities board.",ts:"2025-12-20 11:45",pricedBy:"human",dateSent:"2025-12-22"},
];

const EST_STEPS=[
  {key:"upload",label:"Files Received",icon:"📁"},
  {key:"standardize",label:"Standardizing",icon:"🔄"},
  {key:"analyze",label:"Agent Analyzing",icon:"🤖"},
  {key:"pricing",label:"Agent Pricing",icon:"💲"},
  {key:"hitl",label:"HITL Review",icon:"👁"},
  {key:"quote_gen",label:"Quote Generated",icon:"📋"},
  {key:"sent",label:"Quote Sent",icon:"📧"},
  {key:"accepted",label:"Accepted",icon:"✅"},
];

const INIT_PRJS=[
  {id:"PRJ-001",name:"Villard Houses Panel #4",client:"Lotte NYC Hotel",type:"Restoration",artist:"",stage:8,progress:78,stoneId:1,dims:{l:1.8,w:0.6,h:0.3},priority:"high",due:"2026-03-15",estCost:45000,quoted:52000,inv1:26000,inv1P:true,inv2:0,inv2P:false,notes:"Final panel. Match 1880s patina.",
    log:[{t:"Feb 14, 14:22",m:"Hand polishing 78%",u:"David M."},{t:"Feb 10, 09:00",m:"Milling complete → HITL",u:"System"},{t:"Nov 15, 11:30",m:"Invoice #1 paid",u:"System"}],
    changelog:[{t:"Nov 1, 10:30 AM",u:"Micah S.",stage:"Invoice #1",changes:[{field:"Sent",from:"-",to:"2025-11-01"}]},{t:"Nov 15, 14:00 PM",u:"System",stage:"Invoice #1",changes:[{field:"Payment received",from:"Unpaid",to:"Paid via Wire"}]},{t:"Oct 1, 09:15 AM",u:"Micah S.",stage:"Quote Sent",changes:[{field:"Sent",from:"-",to:"2025-10-01"}]},{t:"Sep 28, 16:00 PM",u:"David M.",stage:"Design",changes:[{field:"designApproved",from:"In review",to:"Yes"}]}],
    sd:{estimation:{volume:"0.32",surfaceArea:"3.00",materialTonnes:"0.86",robotHrsEst:"38",handHrsEst:"24",complexity:"high",totalEstCost:"45000",costNotes:"Heritage matching premium",estimatedBy:"Micah S."},quote:{quotedPrice:"52000",margin:"13",paymentTerms:"50/50",quoteDate:"2025-10-01",quoteExpiry:"2025-11-01",clientContact:"James Whitfield",quoteStatus:"Accepted",followUpDate:"",quoteNotes:""},design:{designSource:"3D scan",softwareUsed:"Rhino 8",modelVersion:"v4.2",fileFormat:"STL + STEP",designApproved:"Yes",revisionCount:"2",designNotes:"Matched 1880s detail",designCompleted:"2025-09-28"},toolpath:{software:"PowerMill 2025",strategy:"Adaptive rough → spiral",passCount:"5",toolBits:"12,6mm ball,3mm flat",estMillTime:"38",simComplete:"Approved",codeExported:"Deployed",orientation:"Landscape",toolpathNotes:""},stone_sourcing:{stoneType:"Carrara White CD",supplier:"Tuscan Stone Group",blockId:"BLK-0847",blockDims:"2.0×0.8×0.5",orderDate:"2025-10-15",weight:"0.86",shipStatus:"Delivered",eta:"2025-11-20",stoneCost:"820"},invoice1:{invNum:"INV-2025-0034",amount:"26000",dateSent:"2025-11-01",dateDue:"2025-11-15",datePaid:"2025-11-15",method:"Wire",status:"Paid",reminder:"No",notes:""},fabrication:{robot:"R4",curPass:"5",totPass:"5",hrsLogged:"36.5",startDate:"2025-12-01",estEnd:"2026-02-01",overnight:"Supervised",toolWear:"2 bits",quality:"Excellent",fabNotes:""},hitl_polish:{carver:"C5",hrsLogged:"18",startDate:"2026-02-10",estEnd:"2026-02-28",finishType:"Heritage match",qualityNotes:"Match 1880s patina",photos:"12",artistApproval:"Pending",polishNotes:""},invoice2:{invNum:"",amount:"26000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:""},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"",tracking:"",shipDate:"",delivDate:"",delivStatus:"",install:"ML team",installDate:"",signoff:"",delivNotes:""}}},
  {id:"PRJ-003",name:"Benedictine Capitals ×12",client:"Erik Bootsma",type:"Architecture",artist:"",stage:7,progress:52,stoneId:3,dims:{l:0.8,w:0.8,h:0.9},priority:"high",due:"2026-06-01",estCost:180000,quoted:210000,inv1:105000,inv1P:true,inv2:0,inv2P:false,notes:"Corinthian. 8/12 roughed.",
    log:[{t:"Feb 15, 10:00",m:"Capital #9 started",u:"System"}],changelog:[],
    sd:{estimation:{volume:"0.58",surfaceArea:"4.16",materialTonnes:"1.36",robotHrsEst:"280",handHrsEst:"180",complexity:"extreme",totalEstCost:"180000",costNotes:"12×$15k",estimatedBy:"Micah S."},quote:{quotedPrice:"210000",margin:"14",paymentTerms:"50/50",quoteDate:"2025-08-15",quoteExpiry:"2025-09-15",clientContact:"Erik Bootsma",quoteStatus:"Accepted",followUpDate:"",quoteNotes:""},design:{designSource:"CAD drawings",softwareUsed:"Rhino + ZBrush",modelVersion:"v3.0",fileFormat:"STL",designApproved:"Yes",revisionCount:"3",designNotes:"Corinthian order",designCompleted:"2025-09-10"},toolpath:{software:"PowerMill 2025",strategy:"5-axis acanthus",passCount:"8",toolBits:"20,12,6,2mm",estMillTime:"280",simComplete:"Approved",codeExported:"Deployed",orientation:"Vertical",toolpathNotes:""},stone_sourcing:{stoneType:"Indiana Limestone",supplier:"American Stone Supply",blockId:"BLK-0112-0123",blockDims:"1.0×1.0×1.2",orderDate:"2025-09-01",weight:"16.3",shipStatus:"Delivered",eta:"2025-10-10",stoneCost:"13860"},invoice1:{invNum:"INV-2025-0029",amount:"105000",dateSent:"2025-09-20",dateDue:"2025-10-05",datePaid:"2025-10-05",method:"Wire",status:"Paid",reminder:"No",notes:""},fabrication:{robot:"R1",curPass:"3",totPass:"8",hrsLogged:"145",startDate:"2025-11-01",estEnd:"2026-04-15",overnight:"Supervised",toolWear:"4 bits",quality:"Good",fabNotes:"8/12 roughed"},hitl_polish:{carver:"C1",hrsLogged:"32",startDate:"2026-01-15",estEnd:"",finishType:"High polish",qualityNotes:"Leaf tips",photos:"8",artistApproval:"N/A",polishNotes:""},invoice2:{invNum:"",amount:"105000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:""},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"Stone Transport",tracking:"",shipDate:"",delivDate:"",delivStatus:"",install:"Client crew",installDate:"",signoff:"",delivNotes:""}}},
  {id:"PRJ-005",name:"Arsham Eroded Venus",client:"Arsham Studio",type:"Fine Art",artist:"Daniel Arsham",stage:8,progress:82,stoneId:8,dims:{l:0.5,w:0.5,h:1.8},priority:"medium",due:"2026-04-10",estCost:72000,quoted:85000,inv1:42500,inv1P:true,inv2:0,inv2P:false,notes:"Erosion effect.",
    log:[{t:"Feb 14, 11:00",m:"Elena erosion zones",u:"Elena S."}],changelog:[],
    sd:{estimation:{volume:"0.45",surfaceArea:"4.10",materialTonnes:"1.22",robotHrsEst:"52",handHrsEst:"48",complexity:"high",totalEstCost:"72000",costNotes:"Premium + custom tooling",estimatedBy:"Bryan K."},quote:{quotedPrice:"85000",margin:"15",paymentTerms:"50/50",quoteDate:"2025-11-01",quoteExpiry:"2025-12-01",clientContact:"Studio Mgr",quoteStatus:"Accepted",followUpDate:"",quoteNotes:""},design:{designSource:"Artist maquette",softwareUsed:"Artec 3D",modelVersion:"v2.1",fileFormat:"OBJ + STL",designApproved:"Yes",revisionCount:"1",designNotes:"Erosion zones mapped",designCompleted:"2025-11-05"},toolpath:{software:"PowerMill 2025",strategy:"Body → erosion passes",passCount:"6",toolBits:"12,6,3mm,custom",estMillTime:"52",simComplete:"Approved",codeExported:"Deployed",orientation:"Vertical",toolpathNotes:"Custom erosion bit"},stone_sourcing:{stoneType:"Calacatta Gold",supplier:"Tuscan Stone Group",blockId:"BLK-0201",blockDims:"0.7×0.7×2.0",orderDate:"2025-11-10",weight:"1.22",shipStatus:"Delivered",eta:"2025-12-22",stoneCost:"2928"},invoice1:{invNum:"INV-2025-0041",amount:"42500",dateSent:"2025-12-01",dateDue:"2025-12-15",datePaid:"2025-12-18",method:"Wire",status:"Paid",reminder:"No",notes:""},fabrication:{robot:"R2",curPass:"6",totPass:"6",hrsLogged:"49",startDate:"2026-01-05",estEnd:"2026-02-05",overnight:"Supervised",toolWear:"1 custom",quality:"Excellent",fabNotes:""},hitl_polish:{carver:"C2",hrsLogged:"28",startDate:"2026-02-06",estEnd:"2026-03-15",finishType:"Selective",qualityNotes:"Polish vs raw contrast",photos:"22",artistApproval:"Pending",polishNotes:"Review Feb 20"},invoice2:{invNum:"",amount:"42500",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:""},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"Museum grade",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"FedEx Custom",tracking:"",shipDate:"",delivDate:"",delivStatus:"",install:"White glove",installDate:"",signoff:"",delivNotes:""}}},
  {id:"PRJ-007",name:"Natl Garden Douglass",client:"NEH",type:"Monument",artist:"TBD",stage:4,progress:22,stoneId:1,dims:{l:0.7,w:0.7,h:2.1},priority:"critical",due:"2026-07-04",estCost:95000,quoted:100000,inv1:0,inv1P:false,inv2:0,inv2P:false,notes:"10-statue program.",
    log:[{t:"Feb 15, 09:00",m:"Reviewing 3 maquettes",u:"Micah S."}],changelog:[],
    sd:{estimation:{volume:"1.03",surfaceArea:"7.00",materialTonnes:"2.78",robotHrsEst:"96",handHrsEst:"72",complexity:"extreme",totalEstCost:"95000",costNotes:"ML finances",estimatedBy:"Micah S."},quote:{quotedPrice:"100000",margin:"5",paymentTerms:"ML finances",quoteDate:"2025-12-15",quoteExpiry:"2026-01-15",clientContact:"NEH Office",quoteStatus:"Accepted",followUpDate:"2026-03-01",quoteNotes:"Strategic"},design:{designSource:"Artist maquette",softwareUsed:"",modelVersion:"",fileFormat:"",designApproved:"No",revisionCount:"0",designNotes:"3 submissions. Mar 1 deadline.",designCompleted:""},toolpath:{software:"",strategy:"",passCount:"",toolBits:"",estMillTime:"",simComplete:"Not started",codeExported:"Not exported",orientation:"",toolpathNotes:""},stone_sourcing:{stoneType:"Carrara White CD",supplier:"Tuscan Stone Group",blockId:"",blockDims:"",orderDate:"",weight:"2.78",shipStatus:"Not ordered",eta:"",stoneCost:""},invoice1:{invNum:"",amount:"50000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",reminder:"No",notes:"ML financing"},fabrication:{robot:"",curPass:"",totPass:"",hrsLogged:"",startDate:"",estEnd:"",overnight:"",toolWear:"",quality:"",fabNotes:""},hitl_polish:{carver:"",hrsLogged:"",startDate:"",estEnd:"",finishType:"",qualityNotes:"",photos:"",artistApproval:"Pending",polishNotes:""},invoice2:{invNum:"",amount:"50000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:"NEH completion"},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"",tracking:"",shipDate:"",delivDate:"2026-07-04",delivStatus:"",install:"ML team",installDate:"",signoff:"",delivNotes:""}}},
  {id:"PRJ-012",name:"RAMSA Facade ×24",client:"Robert A.M. Stern",type:"Architecture",artist:"",stage:7,progress:35,stoneId:3,dims:{l:1.2,w:1.2,h:0.15},priority:"high",due:"2026-09-01",estCost:320000,quoted:375000,inv1:187500,inv1P:true,inv2:0,inv2P:false,notes:"24 panels. Largest job.",
    log:[{t:"Feb 14, 08:00",m:"Batch 2 milling",u:"System"}],changelog:[],
    sd:{estimation:{volume:"0.22",surfaceArea:"3.24",materialTonnes:"0.51",robotHrsEst:"192",handHrsEst:"96",complexity:"medium",totalEstCost:"320000",costNotes:"24×$13.3k",estimatedBy:"Micah S."},quote:{quotedPrice:"375000",margin:"15",paymentTerms:"50/50",quoteDate:"2025-07-01",quoteExpiry:"2025-08-01",clientContact:"RAMSA Lead",quoteStatus:"Accepted",followUpDate:"",quoteNotes:""},design:{designSource:"CAD drawings",softwareUsed:"Rhino 8",modelVersion:"v5.0",fileFormat:"STEP + DWG",designApproved:"Yes",revisionCount:"5",designNotes:"24 unique panels",designCompleted:"2025-08-10"},toolpath:{software:"PowerMill 2025",strategy:"Batch 3/cycle",passCount:"4",toolBits:"20,10,5mm",estMillTime:"192",simComplete:"Approved",codeExported:"Deployed",orientation:"Flat",toolpathNotes:"All 24 done"},stone_sourcing:{stoneType:"Indiana Limestone",supplier:"American Stone Supply",blockId:"BLK-0300-0323",blockDims:"1.5×1.5×0.3",orderDate:"2025-08-15",weight:"12.2",shipStatus:"Delivered",eta:"2025-09-30",stoneCost:"10370"},invoice1:{invNum:"INV-2025-0025",amount:"187500",dateSent:"2025-08-20",dateDue:"2025-09-10",datePaid:"2025-09-10",method:"Wire",status:"Paid",reminder:"No",notes:""},fabrication:{robot:"R2",curPass:"2",totPass:"4",hrsLogged:"68",startDate:"2025-10-15",estEnd:"2026-06-01",overnight:"Supervised",toolWear:"Normal",quality:"Good",fabNotes:"1-8 done, 9-16 WIP"},hitl_polish:{carver:"",hrsLogged:"",startDate:"",estEnd:"",finishType:"High polish",qualityNotes:"",photos:"",artistApproval:"N/A",polishNotes:"Need 2"},invoice2:{invNum:"",amount:"187500",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:""},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"Custom wood",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"Stone Transport",tracking:"",shipDate:"",delivDate:"",delivStatus:"",install:"Client crew",installDate:"",signoff:"",delivNotes:""}}},
  {id:"PRJ-015",name:"Stripe Logo v2",client:"Stripe Inc.",type:"Corporate",artist:"",stage:7,progress:60,stoneId:8,dims:{l:0.6,w:0.6,h:0.08},priority:"medium",due:"2026-03-01",estCost:15000,quoted:18000,inv1:9000,inv1P:true,inv2:0,inv2P:false,notes:"Viral follow-up.",
    log:[{t:"Feb 10, 14:00",m:"Milling R6",u:"System"}],changelog:[],
    sd:{estimation:{volume:"0.03",surfaceArea:"0.82",materialTonnes:"0.08",robotHrsEst:"6",handHrsEst:"4",complexity:"low",totalEstCost:"15000",costNotes:"Simple + premium stone",estimatedBy:"Bryan K."},quote:{quotedPrice:"18000",margin:"17",paymentTerms:"50/50",quoteDate:"2026-01-05",quoteExpiry:"2026-02-05",clientContact:"Stripe Design",quoteStatus:"Accepted",followUpDate:"",quoteNotes:""},design:{designSource:"Client file",softwareUsed:"Rhino 8",modelVersion:"v1.0",fileFormat:"STL",designApproved:"Yes",revisionCount:"0",designNotes:"Beveled S 3mm",designCompleted:"2026-01-08"},toolpath:{software:"PowerMill 2025",strategy:"2D+3D finish",passCount:"3",toolBits:"6mm flat,3mm ball",estMillTime:"6",simComplete:"Approved",codeExported:"Deployed",orientation:"Flat",toolpathNotes:""},stone_sourcing:{stoneType:"Calacatta Gold",supplier:"Tuscan Stone Group",blockId:"BLK-2026-0004",blockDims:"0.8×0.8×0.15",orderDate:"2026-01-10",weight:"0.08",shipStatus:"Delivered",eta:"2026-01-28",stoneCost:"192"},invoice1:{invNum:"INV-2026-0003",amount:"9000",dateSent:"2026-01-15",dateDue:"2026-01-30",datePaid:"2026-01-22",method:"ACH",status:"Paid",reminder:"No",notes:""},fabrication:{robot:"R6",curPass:"1",totPass:"3",hrsLogged:"3.2",startDate:"2026-02-05",estEnd:"2026-02-18",overnight:"No",toolWear:"Minimal",quality:"",fabNotes:""},hitl_polish:{carver:"",hrsLogged:"",startDate:"",estEnd:"",finishType:"High polish",qualityNotes:"",photos:"",artistApproval:"N/A",polishNotes:""},invoice2:{invNum:"",amount:"9000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:""},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"Foam-lined",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"FedEx Custom",tracking:"",shipDate:"",delivDate:"",delivStatus:"",install:"No",installDate:"",signoff:"",delivNotes:""}}},
  {id:"PRJ-018",name:"Private Lion Pair",client:"Anonymous",type:"Sculpture",artist:"",stage:4,progress:22,stoneId:9,dims:{l:1.2,w:0.5,h:0.9},priority:"medium",due:"2026-05-20",estCost:38000,quoted:44000,inv1:0,inv1P:false,inv2:0,inv2P:false,notes:"Matching lions. Toolpath phase.",
    log:[{t:"Feb 12, 10:00",m:"Toolpath sim in progress",u:"System"},{t:"Jan 28, 14:00",m:"Design approved",u:"Micah S."}],changelog:[],
    sd:{estimation:{volume:"0.54",surfaceArea:"3.36",materialTonnes:"1.46",robotHrsEst:"64",handHrsEst:"40",complexity:"high",totalEstCost:"38000",costNotes:"Pair pricing",estimatedBy:"Bryan K."},quote:{quotedPrice:"44000",margin:"14",paymentTerms:"50/50",quoteDate:"2025-12-01",quoteExpiry:"2026-01-01",clientContact:"Private",quoteStatus:"Accepted",followUpDate:"",quoteNotes:""},design:{designSource:"Artist maquette",softwareUsed:"ZBrush",modelVersion:"v2.0",fileFormat:"OBJ",designApproved:"Yes",revisionCount:"1",designNotes:"Symmetrical pair",designCompleted:"2026-01-25"},toolpath:{software:"PowerMill 2025",strategy:"Multi-axis figurative",passCount:"6",toolBits:"16,8,4,2mm",estMillTime:"64",simComplete:"In progress",codeExported:"Not exported",orientation:"Vertical",toolpathNotes:"Lion mane detail challenging"},stone_sourcing:{stoneType:"Estremoz White",supplier:"Alentejo Marble SA",blockId:"",blockDims:"",orderDate:"",weight:"1.46",shipStatus:"Not ordered",eta:"",stoneCost:""},invoice1:{invNum:"",amount:"22000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",reminder:"No",notes:""},fabrication:{robot:"",curPass:"",totPass:"",hrsLogged:"",startDate:"",estEnd:"",overnight:"",toolWear:"",quality:"",fabNotes:""},hitl_polish:{carver:"",hrsLogged:"",startDate:"",estEnd:"",finishType:"High polish",qualityNotes:"",photos:"",artistApproval:"N/A",polishNotes:""},invoice2:{invNum:"",amount:"22000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:""},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"",tracking:"",shipDate:"",delivDate:"",delivStatus:"",install:"",installDate:"",signoff:"",delivNotes:""}}},
  {id:"PRJ-020",name:"Carnegie Hall Rosette",client:"Carnegie Hall",type:"Restoration",artist:"",stage:3,progress:15,stoneId:7,dims:{l:1.0,w:1.0,h:0.2},priority:"low",due:"2026-08-01",estCost:22000,quoted:28000,inv1:0,inv1P:false,inv2:0,inv2P:false,notes:"Ceiling rosette restoration.",
    log:[{t:"Feb 08, 11:00",m:"Design started — 3D scan",u:"Bryan K."}],changelog:[],
    sd:{estimation:{volume:"0.20",surfaceArea:"2.48",materialTonnes:"0.47",robotHrsEst:"28",handHrsEst:"18",complexity:"high",totalEstCost:"22000",costNotes:"Heritage detail",estimatedBy:"Micah S."},quote:{quotedPrice:"28000",margin:"21",paymentTerms:"50/50",quoteDate:"2026-01-20",quoteExpiry:"2026-02-20",clientContact:"Facilities Mgr",quoteStatus:"Accepted",followUpDate:"",quoteNotes:""},design:{designSource:"3D scan",softwareUsed:"Artec 3D",modelVersion:"v1.0",fileFormat:"STL",designApproved:"No",revisionCount:"0",designNotes:"Scanning original rosette",designCompleted:""},toolpath:{software:"",strategy:"",passCount:"",toolBits:"",estMillTime:"",simComplete:"Not started",codeExported:"Not exported",orientation:"",toolpathNotes:""},stone_sourcing:{stoneType:"Jura Beige",supplier:"Bavarian Stone Works",blockId:"",blockDims:"",orderDate:"",weight:"0.47",shipStatus:"Not ordered",eta:"",stoneCost:""},invoice1:{invNum:"",amount:"14000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",reminder:"No",notes:""},fabrication:{robot:"",curPass:"",totPass:"",hrsLogged:"",startDate:"",estEnd:"",overnight:"",toolWear:"",quality:"",fabNotes:""},hitl_polish:{carver:"",hrsLogged:"",startDate:"",estEnd:"",finishType:"Heritage match",qualityNotes:"",photos:"",artistApproval:"N/A",polishNotes:""},invoice2:{invNum:"",amount:"14000",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:""},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"",tracking:"",shipDate:"",delivDate:"",delivStatus:"",install:"ML team",installDate:"",signoff:"",delivNotes:""}}},
  {id:"PRJ-022",name:"Hudson Yards Column Caps ×8",client:"Related Companies",type:"Architecture",artist:"",stage:5,progress:32,stoneId:4,dims:{l:0.6,w:0.6,h:0.4},priority:"high",due:"2026-04-15",estCost:96000,quoted:115000,inv1:57500,inv1P:true,inv2:0,inv2P:false,notes:"Black granite. Premium finish.",
    log:[{t:"Feb 16, 09:00",m:"Stone order placed",u:"Micah S."},{t:"Feb 01, 15:00",m:"Inv #1 paid",u:"System"}],changelog:[],
    sd:{estimation:{volume:"0.14",surfaceArea:"1.68",materialTonnes:"0.39",robotHrsEst:"96",handHrsEst:"32",complexity:"medium",totalEstCost:"96000",costNotes:"8 units, granite hardness premium",estimatedBy:"Micah S."},quote:{quotedPrice:"115000",margin:"17",paymentTerms:"50/50",quoteDate:"2025-11-15",quoteExpiry:"2025-12-15",clientContact:"Dev Team Lead",quoteStatus:"Accepted",followUpDate:"",quoteNotes:""},design:{designSource:"CAD drawings",softwareUsed:"Rhino 8",modelVersion:"v2.0",fileFormat:"STEP",designApproved:"Yes",revisionCount:"1",designNotes:"Modernist caps",designCompleted:"2026-01-10"},toolpath:{software:"PowerMill 2025",strategy:"Heavy rough + precision",passCount:"5",toolBits:"25,12,6mm diamond",estMillTime:"96",simComplete:"Approved",codeExported:"Deployed",orientation:"Vertical",toolpathNotes:"Diamond tooling req"},stone_sourcing:{stoneType:"Absolute Black",supplier:"Delhi Granite Exports",blockId:"BLK-2026-0012",blockDims:"0.8×0.8×0.6",orderDate:"2026-02-16",weight:"3.1",shipStatus:"Ordered",eta:"2026-03-20",stoneCost:"5580"},invoice1:{invNum:"INV-2026-0005",amount:"57500",dateSent:"2026-01-20",dateDue:"2026-02-01",datePaid:"2026-02-01",method:"Wire",status:"Paid",reminder:"No",notes:""},fabrication:{robot:"",curPass:"",totPass:"",hrsLogged:"",startDate:"",estEnd:"",overnight:"",toolWear:"",quality:"",fabNotes:""},hitl_polish:{carver:"",hrsLogged:"",startDate:"",estEnd:"",finishType:"High polish",qualityNotes:"",photos:"",artistApproval:"N/A",polishNotes:""},invoice2:{invNum:"",amount:"57500",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Draft",notes:""},qa_crating:{inspector:"",qaDate:"",result:"",dimCheck:"",photoCount:"",crateType:"Steel frame",crateDims:"",totalWeight:"",qaNotes:""},delivery:{carrier:"Stone Transport",tracking:"",shipDate:"",delivDate:"",delivStatus:"",install:"Client crew",installDate:"",signoff:"",delivNotes:""}}},
  // ── DELIVERED PROJECTS ──
  {id:"PRJ-D01",name:"Greenwich Hotel Bar Top",client:"The Greenwich Hotel",type:"Hospitality",artist:"",stage:11,progress:100,stoneId:27,dims:{l:4.2,w:0.9,h:0.04},priority:"medium",due:"2025-11-30",estCost:68000,quoted:88000,inv1:44000,inv1P:true,inv2:44000,inv2P:true,notes:"Verde Guatemala marble, curved bar top + feature wall. Installed Nov 2025.",
    log:[{t:"Nov 28, 14:00",m:"Client sign-off received. Project complete.",u:"Micah S."},{t:"Nov 27, 10:00",m:"Installation complete. White glove delivery.",u:"Install Team"},{t:"Nov 20, 09:00",m:"QA passed — Grade A. Crated.",u:"Marco V."},{t:"Nov 5, 16:00",m:"HITL polish complete. Artist approved.",u:"Elena S."},{t:"Oct 18, 08:00",m:"Fabrication complete — 42.6h logged.",u:"System"}],changelog:[],
    sd:{estimation:{volume:"0.15",surfaceArea:"7.56",materialTonnes:"0.41",robotHrsEst:"40",handHrsEst:"18",complexity:"medium",totalEstCost:"68000",costNotes:"Curved form, verde marble premium",estimatedBy:"Bryan K."},quote:{quotedPrice:"88000",margin:"22.7",paymentTerms:"50/50",quoteDate:"2025-09-10",quoteExpiry:"2025-10-10",clientContact:"Sophia Laurent",quoteStatus:"Accepted",followUpDate:"",quoteNotes:"Repeat client — prioritized"},design:{designSource:"CAD drawings",softwareUsed:"Rhino 8",modelVersion:"v1.0",fileFormat:"STEP",designApproved:"Yes",revisionCount:"0",designNotes:"Curved bar profile, client-supplied dims",designCompleted:"2025-09-28"},toolpath:{software:"PowerMill 2025",strategy:"3+2 adaptive rough → Z-level finish",passCount:"4",toolBits:"32mm bull-nose, 16mm ball, 8mm ball",estMillTime:"40",simComplete:"Approved",codeExported:"Deployed",orientation:"Flat — Z-up",toolpathNotes:"Curved edge requires tilt passes"},stone_sourcing:{stoneType:"Roman Travertine Silver",supplier:"Tuscan Stone Group",blockId:"BLK-2025-0088",blockDims:"4.8×1.2×0.15",orderDate:"2025-09-30",weight:"0.41",shipStatus:"Delivered",eta:"2025-10-14",stoneCost:"3900"},invoice1:{invNum:"INV-2025-0031",amount:"44000",dateSent:"2025-09-15",dateDue:"2025-09-30",datePaid:"2025-09-30",method:"Wire",status:"Paid",reminder:"No",notes:"Deposit to start"},fabrication:{robot:"KUKA Beta",curPass:"4",totPass:"4",hrsLogged:"42.6",startDate:"2025-10-16",estEnd:"2025-10-28",overnight:"Supervised",toolWear:"Normal",quality:"Excellent",fabNotes:"Curved passes executed without issues"},hitl_polish:{carver:"Elena S.",hrsLogged:"20",startDate:"2025-10-29",estEnd:"2025-11-05",finishType:"High polish",qualityNotes:"Mirror polish achieved. Verde veining shows beautifully.",photos:"18",artistApproval:"Approved",polishNotes:"Additional edge chamfer per client request"},invoice2:{invNum:"INV-2025-0044",amount:"44000",dateSent:"2025-11-06",dateDue:"2025-11-20",datePaid:"2025-11-20",method:"Wire",status:"Paid",notes:""},qa_crating:{inspector:"Marco V.",qaDate:"2025-11-20",result:"Pass",dimCheck:"Within spec",photoCount:"24",crateType:"Custom wood",crateDims:"5.0×1.4×0.4m",totalWeight:"680",qaNotes:"Excellent surface. Zero defects. Foam-padded."},delivery:{carrier:"Stone Transport",tracking:"ST-2025-8841",shipDate:"2025-11-25",delivDate:"2025-11-27",delivStatus:"Delivered",install:"White glove",installDate:"2025-11-27",signoff:"Signed",delivNotes:"Client thrilled. Requested quote for terrace expansion."}}},

  {id:"PRJ-D02",name:"Hudson Yards Amenity Panels",client:"Related Companies",type:"Architecture",artist:"",stage:11,progress:100,stoneId:1,dims:{l:2.4,w:1.2,h:0.05},priority:"high",due:"2025-12-31",estCost:451000,quoted:550000,inv1:275000,inv1P:true,inv2:275000,inv2P:true,notes:"32 Carrara panels for Hudson Yards amenity floor. Flagship project. Delivered on schedule.",
    log:[{t:"Dec 30, 16:00",m:"All 32 panels installed. Client sign-off.",u:"Claire Fontaine"},{t:"Dec 22, 09:00",m:"Final delivery — panels 25–32.",u:"Install Team"},{t:"Dec 10, 09:00",m:"Panels 1–24 installed successfully.",u:"Install Team"},{t:"Dec 5, 14:00",m:"QA complete — all 32 panels Grade A.",u:"Marco V."},{t:"Nov 28, 10:00",m:"Fabrication complete. 312h robot time.",u:"System"},{t:"Sep 15, 14:00",m:"Inv #1 paid — $275k. Fabrication started.",u:"System"}],changelog:[],
    sd:{estimation:{volume:"0.69",surfaceArea:"92.2",materialTonnes:"1.86",robotHrsEst:"310",handHrsEst:"60",complexity:"medium",totalEstCost:"451000",costNotes:"32 units batch — 18% margin locked",estimatedBy:"Micah S."},quote:{quotedPrice:"550000",margin:"18",paymentTerms:"50/50",quoteDate:"2025-08-01",quoteExpiry:"2025-09-01",clientContact:"Claire Fontaine",quoteStatus:"Accepted",followUpDate:"",quoteNotes:"Phase 2 conversation flagged"},design:{designSource:"CAD drawings",softwareUsed:"Rhino 8",modelVersion:"v3.0",fileFormat:"STEP",designApproved:"Yes",revisionCount:"2",designNotes:"32 unique panel patterns, parametric variation",designCompleted:"2025-09-05"},toolpath:{software:"PowerMill 2025",strategy:"Raster rough → Z-level finish, mirrored pairs",passCount:"3",toolBits:"32mm bull-nose, 16mm ball, 8mm finish",estMillTime:"310",simComplete:"Approved",codeExported:"Deployed",orientation:"Flat — Z-up",toolpathNotes:"Panels batched 4/cycle on 2 robots"},stone_sourcing:{stoneType:"Bianco Carrara C",supplier:"Tuscan Stone Group",blockId:"BLK-2025-0040 to 0071",blockDims:"2.8×1.6×0.2m ×32",orderDate:"2025-09-02",weight:"59.5",shipStatus:"Delivered",eta:"2025-10-01",stoneCost:"109075"},invoice1:{invNum:"INV-2025-0022",amount:"275000",dateSent:"2025-08-15",dateDue:"2025-09-01",datePaid:"2025-09-01",method:"Wire",status:"Paid",reminder:"No",notes:"Deposit to begin"},fabrication:{robot:"KUKA Alpha + KUKA Delta",curPass:"3",totPass:"3",hrsLogged:"312",startDate:"2025-09-16",estEnd:"2025-11-28",overnight:"Continuous",toolWear:"High — 6 bit changes",quality:"Excellent",fabNotes:"2 robots in parallel. All panels within 0.3mm tolerance."},hitl_polish:{carver:"Marco V., Elena S.",hrsLogged:"64",startDate:"2025-11-29",estEnd:"2025-12-05",finishType:"Honed matte",qualityNotes:"Consistent finish across all 32 panels.",photos:"96",artistApproval:"N/A",polishNotes:"Edge chamfer on all panels per architect spec"},invoice2:{invNum:"INV-2025-0048",amount:"275000",dateSent:"2025-12-06",dateDue:"2025-12-20",datePaid:"2025-12-18",method:"Wire",status:"Paid",notes:"Early payment — 2 days ahead"},qa_crating:{inspector:"Marco V.",qaDate:"2025-12-05",result:"Pass",dimCheck:"Within spec",photoCount:"128",crateType:"Custom wood",crateDims:"2.8×1.6×0.4m ×32",totalWeight:"2400",qaNotes:"All 32 panels pass. Photos documented per panel."},delivery:{carrier:"Stone Transport",tracking:"ST-2025-9201",shipDate:"2025-12-08",delivDate:"2025-12-10",delivStatus:"Delivered",install:"ML team",installDate:"2025-12-10",signoff:"Signed",delivNotes:"Phased delivery: 24 panels Dec 10, 8 panels Dec 22."}}},

  {id:"PRJ-D03",name:"Selldorf Penthouse Stair",client:"Selldorf Architects",type:"Architecture",artist:"",stage:11,progress:100,stoneId:30,dims:{l:3.6,w:1.1,h:0.03},priority:"high",due:"2025-12-15",estCost:150100,quoted:190000,inv1:95000,inv1P:true,inv2:95000,inv2P:true,notes:"Calacatta Gold stair surround + terrace, Tribeca penthouse. Completed Dec 2025.",
    log:[{t:"Dec 14, 15:00",m:"Architect sign-off. Perfect fit.",u:"Robert Ashby"},{t:"Dec 13, 11:00",m:"Installation complete.",u:"Install Team"},{t:"Dec 6, 09:00",m:"QA passed. Museum-grade crating.",u:"Marco V."},{t:"Nov 30, 14:00",m:"HITL polish complete. Calacatta veining exceptional.",u:"Marco V."},{t:"Nov 10, 08:00",m:"Fabrication complete — 88.4h.",u:"System"}],changelog:[],
    sd:{estimation:{volume:"0.12",surfaceArea:"7.92",materialTonnes:"0.33",robotHrsEst:"85",handHrsEst:"35",complexity:"high",totalEstCost:"150100",costNotes:"Calacatta Gold premium + ultra-thin slab handling risk",estimatedBy:"Micah S."},quote:{quotedPrice:"190000",margin:"21",paymentTerms:"50/50",quoteDate:"2025-10-01",quoteExpiry:"2025-11-01",clientContact:"Robert Ashby",quoteStatus:"Accepted",followUpDate:"",quoteNotes:"Key repeat client — AD100 architect"},design:{designSource:"CAD drawings",softwareUsed:"Rhino 8",modelVersion:"v2.0",fileFormat:"STEP",designApproved:"Yes",revisionCount:"1",designNotes:"Stair treads + terrace coping, ultra-thin Calacatta",designCompleted:"2025-10-20"},toolpath:{software:"PowerMill 2025",strategy:"5-axis adaptive → flow-line finish",passCount:"5",toolBits:"20mm bull-nose, 10mm ball, 4mm ball, 2mm taper",estMillTime:"85",simComplete:"Approved",codeExported:"Deployed",orientation:"Flat — indexed",toolpathNotes:"Ultra-thin slab — reduced feed rates throughout"},stone_sourcing:{stoneType:"Calacatta Gold",supplier:"Tuscan Stone Group",blockId:"BLK-2025-0082",blockDims:"4.0×1.4×0.1m",orderDate:"2025-10-05",weight:"1.12",shipStatus:"Delivered",eta:"2025-10-28",stoneCost:"11200"},invoice1:{invNum:"INV-2025-0035",amount:"95000",dateSent:"2025-10-08",dateDue:"2025-10-22",datePaid:"2025-10-22",method:"Wire",status:"Paid",reminder:"No",notes:""},fabrication:{robot:"KUKA Delta",curPass:"5",totPass:"5",hrsLogged:"88.4",startDate:"2025-10-30",estEnd:"2025-11-10",overnight:"Supervised",toolWear:"Low",quality:"Excellent",fabNotes:"Calacatta veining aligned per architect direction"},hitl_polish:{carver:"Marco V.",hrsLogged:"36",startDate:"2025-11-11",estEnd:"2025-11-30",finishType:"High polish",qualityNotes:"Mirror finish. Veining bookmatched across treads.",photos:"32",artistApproval:"Approved",polishNotes:"Edge profile hand-eased per Selldorf detail"},invoice2:{invNum:"INV-2025-0051",amount:"95000",dateSent:"2025-12-01",dateDue:"2025-12-15",datePaid:"2025-12-12",method:"Wire",status:"Paid",notes:"Paid 3 days early"},qa_crating:{inspector:"Marco V.",qaDate:"2025-12-06",result:"Pass",dimCheck:"Within spec",photoCount:"40",crateType:"Museum grade",crateDims:"4.0×1.4×0.4m",totalWeight:"520",qaNotes:"Zero defects. Calacatta Gold matched per sample board."},delivery:{carrier:"Stone Transport",tracking:"ST-2025-9380",shipDate:"2025-12-10",delivDate:"2025-12-13",delivStatus:"Delivered",install:"ML team",installDate:"2025-12-13",signoff:"Signed",delivNotes:"White glove install. Architect on-site. Perfect fit confirmed."}}},

  {id:"PRJ-D04",name:"Brooklyn Library Relief",client:"Brooklyn Public Library",type:"Public Art",artist:"Marcus Reid",stage:11,progress:100,stoneId:18,dims:{l:3.2,w:2.4,h:0.2},priority:"medium",due:"2026-01-31",estCost:176400,quoted:210000,inv1:105000,inv1P:true,inv2:105000,inv2P:true,notes:"Commemorative relief sculpture in Indiana Limestone. Installed Jan 2026. Won 3-way RFP.",
    log:[{t:"Jan 29, 13:00",m:"Public unveiling. Client delighted.",u:"Marcus Reid"},{t:"Jan 28, 10:00",m:"Installation complete — public artwork.",u:"Install Team"},{t:"Jan 22, 09:00",m:"QA passed. Crated for transport.",u:"Elena S."},{t:"Jan 15, 14:00",m:"HITL complete. Artist Marcus Reid approved.",u:"Marco V."},{t:"Dec 20, 08:00",m:"Fabrication complete — 148h robot time.",u:"System"}],changelog:[],
    sd:{estimation:{volume:"1.54",surfaceArea:"14.08",materialTonnes:"2.47",robotHrsEst:"145",handHrsEst:"65",complexity:"high",totalEstCost:"176400",costNotes:"Large format relief, 3-axis + hand carving detail",estimatedBy:"Micah S."},quote:{quotedPrice:"210000",margin:"16",paymentTerms:"50/50",quoteDate:"2025-11-01",quoteExpiry:"2025-12-01",clientContact:"Marcus Reid",quoteStatus:"Accepted",followUpDate:"",quoteNotes:"Won 3-way competitive RFP on portfolio quality"},design:{designSource:"Artist maquette",softwareUsed:"ZBrush",modelVersion:"v4.0",fileFormat:"STL + OBJ",designApproved:"Yes",revisionCount:"3",designNotes:"Commemorative figures, Brooklyn skyline motif",designCompleted:"2025-11-28"},toolpath:{software:"PowerMill 2025",strategy:"Adaptive rough → parallel semi-finish → pencil edge",passCount:"4",toolBits:"25mm bull-nose, 12mm ball, 6mm ball, 3mm pencil",estMillTime:"145",simComplete:"Approved",codeExported:"Deployed",orientation:"Vertical — indexed 0° and 90°",toolpathNotes:"Undercut areas in figure details required 5th-axis tilt"},stone_sourcing:{stoneType:"Indiana Limestone",supplier:"American Stone Supply",blockId:"BLK-2025-0094",blockDims:"3.6×2.8×0.5m",orderDate:"2025-11-10",weight:"12.6",shipStatus:"Delivered",eta:"2025-12-01",stoneCost:"10710"},invoice1:{invNum:"INV-2025-0041",amount:"105000",dateSent:"2025-11-05",dateDue:"2025-11-20",datePaid:"2025-11-19",method:"Wire",status:"Paid",reminder:"No",notes:"Government wire — 1 day early"},fabrication:{robot:"KUKA Alpha",curPass:"4",totPass:"4",hrsLogged:"148",startDate:"2025-12-02",estEnd:"2025-12-20",overnight:"Unsupervised",toolWear:"Medium — 3 bit changes",quality:"Excellent",fabNotes:"Relief detail exceeded expectations. Stone carved beautifully."},hitl_polish:{carver:"Marco V.",hrsLogged:"68",startDate:"2025-12-21",estEnd:"2026-01-15",finishType:"Heritage match",qualityNotes:"Figure faces hand-carved to artist spec. Skyline crisp.",photos:"42",artistApproval:"Approved",polishNotes:"Artist Marcus Reid on-site for 3 sessions. Enthusiastic approval."},invoice2:{invNum:"INV-2026-0001",amount:"105000",dateSent:"2026-01-16",dateDue:"2026-01-30",datePaid:"2026-01-28",method:"Wire",status:"Paid",notes:"Final payment — project complete"},qa_crating:{inspector:"Elena S.",qaDate:"2026-01-22",result:"Pass",dimCheck:"Within spec",photoCount:"56",crateType:"Custom wood",crateDims:"3.8×2.6×0.8m",totalWeight:"2850",qaNotes:"All figures pass dimensional check. Surface grade A."},delivery:{carrier:"Stone Transport",tracking:"ST-2026-0041",shipDate:"2026-01-25",delivDate:"2026-01-28",delivStatus:"Delivered",install:"ML team",installDate:"2026-01-28",signoff:"Signed",delivNotes:"Public unveiling Jan 29. Press coverage in Brooklyn Eagle."}}},

  {id:"PRJ-D05",name:"Stripe HQ Logo",client:"Stripe Inc.",type:"Corporate",artist:"",stage:11,progress:100,stoneId:30,dims:{l:1.4,w:0.9,h:0.06},priority:"medium",due:"2026-02-10",estCost:13000,quoted:18000,inv1:9000,inv1P:true,inv2:9000,inv2P:true,notes:"Calacatta Gold lobby logo. Fast turnaround. Delivered Feb 2026.",
    log:[{t:"Feb 12, 14:00",m:"Stripe confirmed install. Love it.",u:"Marcus Chen"},{t:"Feb 11, 10:00",m:"Installed at Stripe NYC lobby.",u:"Install Team"},{t:"Feb 8, 11:00",m:"QA pass. Ready for delivery.",u:"Elena S."},{t:"Feb 6, 15:00",m:"HITL polish complete.",u:"David M."},{t:"Feb 3, 07:00",m:"Fabrication complete — 6.2h.",u:"System"}],changelog:[],
    sd:{estimation:{volume:"0.08",surfaceArea:"2.52",materialTonnes:"0.21",robotHrsEst:"6",handHrsEst:"4",complexity:"low",totalEstCost:"13000",costNotes:"Logo geometry simple, Calacatta premium material cost",estimatedBy:"Bryan K."},quote:{quotedPrice:"18000",margin:"27.8",paymentTerms:"100% upfront",quoteDate:"2026-01-22",quoteExpiry:"2026-02-01",clientContact:"Marcus Chen",quoteStatus:"Accepted",followUpDate:"",quoteNotes:"Corp client — 100% upfront, fast approval"},design:{designSource:"Client file",softwareUsed:"Rhino 8",modelVersion:"v1.0",fileFormat:"DWG",designApproved:"Yes",revisionCount:"0",designNotes:"Stripe wordmark + underline, exact brand spec",designCompleted:"2026-01-25"},toolpath:{software:"PowerMill 2025",strategy:"2D profile rough → 3D finish → chamfer",passCount:"3",toolBits:"6mm flat, 3mm ball, 60° V-bit",estMillTime:"6",simComplete:"Approved",codeExported:"Deployed",orientation:"Flat",toolpathNotes:"Letter spacing locked to client file"},stone_sourcing:{stoneType:"Calacatta Gold",supplier:"Tuscan Stone Group",blockId:"BLK-2026-0004",blockDims:"1.6×1.1×0.15m",orderDate:"2026-01-23",weight:"0.42",shipStatus:"Delivered",eta:"2026-01-30",stoneCost:"4200"},invoice1:{invNum:"INV-2026-0003",amount:"18000",dateSent:"2026-01-24",dateDue:"2026-01-31",datePaid:"2026-01-29",method:"Card",status:"Paid",reminder:"No",notes:"100% upfront paid in full"},fabrication:{robot:"KUKA Zeta",curPass:"3",totPass:"3",hrsLogged:"6.2",startDate:"2026-02-03",estEnd:"2026-02-03",overnight:"No",toolWear:"Minimal",quality:"Excellent",fabNotes:"Simple geometry executed perfectly"},hitl_polish:{carver:"David M.",hrsLogged:"4",startDate:"2026-02-04",estEnd:"2026-02-06",finishType:"High polish",qualityNotes:"Mirror finish on logo face.",photos:"8",artistApproval:"N/A",polishNotes:"Edge bevels crisp"},invoice2:{invNum:"",amount:"0",dateSent:"",dateDue:"",datePaid:"",method:"",status:"Paid",notes:"Covered by 100% upfront payment"},qa_crating:{inspector:"Elena S.",qaDate:"2026-02-08",result:"Pass",dimCheck:"Within spec",photoCount:"12",crateType:"Foam-lined",crateDims:"1.6×1.1×0.4m",totalWeight:"220",qaNotes:"Perfect. Calacatta veining centered on logo."},delivery:{carrier:"Local courier",tracking:"LC-2026-0088",shipDate:"2026-02-10",delivDate:"2026-02-11",delivStatus:"Delivered",install:"Client crew",installDate:"2026-02-11",signoff:"Signed",delivNotes:"Marcus Chen on-site. Social post from Stripe account."}}},
];

// Helpers
const Dot=({c,p})=><span style={{position:"relative",display:"inline-block",width:6,height:6,marginRight:4,verticalAlign:"middle"}}><span style={{position:"absolute",inset:0,borderRadius:"50%",background:c}}/>{p&&<span style={{position:"absolute",inset:-2,borderRadius:"50%",border:`1px solid ${c}`,opacity:.3,animation:"pulse 2s infinite"}}/>}</span>;
const Lbl=({children,s})=><div style={{fontSize:14,color:"#706b63",textTransform:"uppercase",letterSpacing:".8px",fontWeight:600,marginBottom:5,...s}}>{children}</div>;
const Badge=({children,c})=><span style={{fontSize:14,padding:"2px 7px",borderRadius:4,fontWeight:700,textTransform:"uppercase",letterSpacing:".3px",background:c+"18",color:c,whiteSpace:"nowrap"}}>{children}</span>;
const Btn=({children,onClick,primary,disabled,small,color:cl,style:sx})=><button onClick={onClick} disabled={disabled} style={{background:primary?(cl||G):disabled?"#2a2826":"transparent",border:primary?"none":`1px solid ${cl||"rgba(255,255,255,.08)"}`,color:primary?(disabled?"#706b63":"#0c0b0a"):(cl||"#a09a92"),fontSize:small?10:11,fontWeight:primary?700:500,padding:small?"4px 10px":"7px 16px",borderRadius:6,cursor:disabled?"not-allowed":"pointer",fontFamily:S,opacity:disabled?.5:1,...sx}}>{children}</button>;
const KPI=({l,v,c})=><div style={{padding:"11px 13px",borderRadius:6,background:CB,border:BD}}><div style={{fontSize:14,color:"#706b63",textTransform:"uppercase",letterSpacing:".7px",marginBottom:3}}>{l}</div><div style={{fontSize:18,fontWeight:700,color:c||G,fontFamily:M}}>{v}</div></div>;

// ═══ MAIN ═══
function App(){
  const ROUTE_MAP={"mission":"mission-control","lifecycle":"projects","estimator":"sales","salespipeline":"sales-pipeline","capacity":"capacity","financials":"financials","stonedb":"stone-db","macro":"macro-pulse","alerts":"real-time-log"};
  const ROUTE_REV=Object.fromEntries(Object.entries(ROUTE_MAP).map(([k,v])=>[v,k]));
  const[view,setViewRaw]=useState(()=>{try{const h=window.location.hash.slice(1);return h||"lifecycle";}catch(e){return"lifecycle";}});
  const setView=(v)=>{setViewRaw(v);try{window.location.hash=v;}catch(e){}};
  useEffect(()=>{try{const onHash=()=>{const h=window.location.hash.slice(1);if(h)setViewRaw(h);};window.addEventListener("hashchange",onHash);return()=>window.removeEventListener("hashchange",onHash);}catch(e){}},[]);
  const setViewWithProject=(v,prjId)=>{setViewRaw(v);setSelIdRaw(prjId);};
  const[prjs,setPrjs]=useState(INIT_PRJS);
  const[selId,setSelIdRaw]=useState("PRJ-001");
  const setSelId=(id)=>setSelIdRaw(id);
  const[expS,setExpS]=useState(null);
  const[showNew,setShowNew]=useState(false);
  const[prjSearch,setPrjSearch]=useState("");
  const[priFilt,setPriFilt]=useState("All");
  const[newP,setNewP]=useState({name:"",client:"",type:"Sculpture",priority:"medium",due:"",stoneId:"",dims:{l:"",w:"",h:""},complexity:"medium",notes:""});
  const[clk,setClk]=useState(new Date());
  const[stF,setStF]=useState("All");
  const[stS,setStS]=useState("name");
  const[stD,setStD]=useState(1);
  const[editing,setEditing]=useState(false);
  const[editSnap,setEditSnap]=useState(null);
  const[salesTab,setSalesTab]=useState("pipeline");
  const[estView,setEstView]=useState("dashboard"); // dashboard | client | manual
  const[estStoneId,setEstStoneId]=useState("");
  const[estDims,setEstDims]=useState({l:"",w:"",h:""});
  const[estCx,setEstCx]=useState("medium");
  const[estQty,setEstQty]=useState(1);
  const[estQ,setEstQ]=useState(INIT_EST_QUEUE);
  const[expEst,setExpEst]=useState(null);
  const[estSearch,setEstSearch]=useState("");
  const[quoteFilter,setQuoteFilter]=useState(null);
  const[quoteSortBy,setQuoteSortBy]=useState("date");
  const[expAlert,setExpAlert]=useState(null);
  const[alertLog,setAlertLog]=useState({});
  const mcBadgeCount=useMemo(()=>{
    const items=[
      {ty:"decision",sev:"high",a:true},{ty:"decision",sev:"high",a:true},
      {ty:"alert",sev:"high",a:false},{ty:"supply",sev:"medium",a:false},
      {ty:"finance",sev:"medium",a:false},{ty:"decision",sev:"high",a:true},
      {ty:"decision",sev:"high",a:true},{ty:"supply",sev:"medium",a:true},
      {id:"A1"},{id:"A11"},{id:"A20"},{id:"A21",a:true},{id:"A5",a:true},
      {id:"A9",a:true},{id:"A22",a:true},{id:"A23",a:true},{id:"A27",a:true},
    ];
    const actionable=new Set(["A5","A9","A21","A22","A23","A27"]);
    const overduePrj=prjs.filter(p=>p.due&&new Date(p.due)<new Date()&&p.stage<10).length;
    const pendingInv=prjs.filter(p=>p.sd?.invoice1?.status==="Draft"||p.sd?.invoice2?.status==="Draft").length;
    let count=0;
    actionable.forEach(id=>{if(!alertLog[id]?.resolved)count++;});
    count+=overduePrj;
    return count;
  },[alertLog,prjs]);
  const[orderModal,setOrderModal]=useState(null);
  const[orderPrj,setOrderPrj]=useState("");
  const[orderQty,setOrderQty]=useState("");
  const[orderDims,setOrderDims]=useState("");
  const[orderNotes,setOrderNotes]=useState("");
  const[rfqModal,setRfqModal]=useState(null);
  const[rfqPrj,setRfqPrj]=useState("");
  const[rfqQty,setRfqQty]=useState("");
  const[rfqDims,setRfqDims]=useState("");
  const[rfqNotes,setRfqNotes]=useState("");
  const[rfqTimeline,setRfqTimeline]=useState("");
  const[rfqEditId,setRfqEditId]=useState(null);
  const[rfqEditNote,setRfqEditNote]=useState("");
  const[stDbTab,setStDbTab]=useState("catalog");
  const[orderSearch,setOrderSearch]=useState("");
  const[editingQuoteId,setEditingQuoteId]=useState(null);
  const[showResolved,setShowResolved]=useState(false);
  const[finAiOpen,setFinAiOpen]=useState(false);
  const[finTab,setFinTab]=useState("overview");
  const[mktTab,setMktTab]=useState("content");
  const[robotTab,setRobotTab]=useState("fleet");
  const[selRobot,setSelRobot]=useState("R1");
  const scenarioBase={winRate:35,avgProject:120000,avgMargin:18,monthlyProjects:2.5,stoneCostPct:28,laborPct:32,overhead:45000,robotUtil:75,headcount:12,avgSalary:85000};
  const[sc,setSc]=useState(scenarioBase);
  const[designRecs,setDesignRecs]=useState({});
  const[sourceRecs,setSourceRecs]=useState({});
  const[tpGenState,setTpGenState]=useState({}); // {[prjId]: "idle"|"generating"|"done"}
  const[tpGenTime,setTpGenTime]=useState({});   // {[prjId]: timestamp string}
  const[tpProgress,setTpProgress]=useState({}); // {[prjId]: 0-100}
  const[tpStatus,setTpStatus]=useState({});     // {[prjId]: status string}
  const[invDetail,setInvDetail]=useState(null);
  const[invBlocks,setInvBlocks]=useState([{bc:"BLK-2026-0041",sn:"Bianco Carrara C",fm:"Marble",dm:"2.1x1.0x0.8m",wt:"4.2t",loc:"Bay A-3",ss:"Available",pj:"",upd:"Feb 17, 2026"},{bc:"BLK-2026-0039",sn:"Indiana Limestone",fm:"Limestone",dm:"3.0x1.5x0.6m",wt:"5.8t",loc:"Bay B-1",ss:"Reserved",pj:"PRJ-001 — RAMSA Facade",upd:"Feb 15, 2026"},{bc:"BLK-2026-0037",sn:"Calacatta Gold",fm:"Marble",dm:"1.8x0.9x0.7m",wt:"2.8t",loc:"Bay A-1",ss:"In Use",pj:"PRJ-003 — Benedictine Capitals",upd:"Feb 12, 2026"},{bc:"BLK-2026-0035",sn:"Absolute Black",fm:"Granite",dm:"2.4x1.2x1.0m",wt:"7.6t",loc:"Bay C-2",ss:"Available",pj:"",upd:"Feb 16, 2026"},{bc:"BLK-2026-0030",sn:"Carrara White CD",fm:"Marble",dm:"1.2x0.6x0.5m",wt:"0.9t",loc:"Bay A-2",ss:"Defect",pj:"",upd:"Feb 10, 2026"},{bc:"BLK-2026-0028",sn:"Crema Marfil",fm:"Marble",dm:"2.0x1.0x0.9m",wt:"4.5t",loc:"Bay A-4",ss:"Available",pj:"",upd:"Feb 14, 2026"},{bc:"BLK-2025-0190",sn:"Pietra Serena",fm:"Sandstone",dm:"2.5x1.0x0.5m",wt:"3.1t",loc:"Bay D-1",ss:"Available",pj:"",upd:"Jan 28, 2026"}]);
  const[allocPrj,setAllocPrj]=useState("");
  const[cpName,setCpName]=useState("");
  const[cpEmail,setCpEmail]=useState("");
  const[cpType,setCpType]=useState("");
  const[cpDims,setCpDims]=useState("");
  const[cpStone,setCpStone]=useState("");
  const[cpBudget,setCpBudget]=useState("");
  const[cpNotes,setCpNotes]=useState("");
  const[cpSubmitted,setCpSubmitted]=useState(false);
  const[cpFiles,setCpFiles]=useState([]);
  const[macroTF,setMacroTF]=useState("1Y");
  const[macroTab,setMacroTab]=useState("market");
  const[macroAI,setMacroAI]=useState(false);
  const[mcPanelOpen,setMcPanelOpen]=useState(false);
  const[mcPanelWidth,setMcPanelWidth]=useState("wide");
  const[mcPanelTab,setMcPanelTab]=useState("log");
  const[mcTab,setMcTab]=useState("actions");
  const[mcExp,setMcExp]=useState(null);
  const[mcFilt,setMcFilt]=useState("all");
  const[mcDone,setMcDone]=useState([]);
  const[lFilt,setLFilt]=useState("all");
  const[lStatus,setLStatus]=useState("open");
  const[lExp,setLExp]=useState(null);
  const[gSearch,setGSearch]=useState("");
  const[gSearchOpen,setGSearchOpen]=useState(false);
  const[gSearchFocused,setGSearchFocused]=useState(false);
  const[sideOpen,setSideOpen]=useState(true);
  const[sidebarPinned,setSidebarPinned]=useState(true);
  const chatUnread={"general":1,"shop":2,"PRJ-003":1};
  const[estFiles,setEstFiles]=useState([{name:"facade_01.jpg",type:"Photos"},{name:"facade_02.jpg",type:"Photos"},{name:"detail_03.jpg",type:"Photos"},{name:"concept_v2.stl",type:"3D Models"},{name:"sketch_dims.pdf",type:"Sketches"},{name:"brief.docx",type:"Concepts"}]);
  const[estAiRefresh,setEstAiRefresh]=useState(0);
  const estFileRef=useRef(null);
  const[stoneDetail,setStoneDetail]=useState(null);
  // Per-project RFQ log: { [prjId]: [{id, supplier, stone, qty, price, pricePerT, date, status, notes}] }
  const[prjRfqLog,setPrjRfqLog]=useState(()=>{
    const log={};
    // Seed some existing RFQs for demo projects
    log["PRJ-001"]=[
      {id:"RFQ-001",supplier:"Tuscan Stone Group",stone:"Carrara White CD",qty:"0.86",price:820,pricePerT:953,date:"2025-10-10 09:30",status:"accepted",notes:"Best price. Delivered on time."},
      {id:"RFQ-002",supplier:"Henraux SpA",stone:"Bianco Carrara C",qty:"0.86",price:1100,pricePerT:1279,date:"2025-10-08 14:15",status:"void",notes:"Higher grade but over budget."},
    ];
    log["PRJ-003"]=[
      {id:"RFQ-003",supplier:"Tuscan Stone Group",stone:"Calacatta Gold",qty:"1.22",price:2928,pricePerT:2400,date:"2025-11-05 10:00",status:"accepted",notes:"Ultra-luxury tier confirmed."},
    ];
    log["PRJ-004"]=[
      {id:"RFQ-004",supplier:"Tuscan Stone Group",stone:"Carrara White CD",qty:"2.78",price:null,pricePerT:null,date:"2026-02-10 11:20",status:"pending",notes:"Awaiting quote. Large block needed."},
      {id:"RFQ-005",supplier:"Henraux SpA",stone:"Statuario",qty:"2.78",price:5200,pricePerT:1871,date:"2026-02-08 16:45",status:"quoted",notes:"Premium Statuario. Higher than expected."},
      {id:"RFQ-006",supplier:"Marble Art Italia",stone:"Carrara White CD",qty:"2.78",price:2500,pricePerT:899,date:"2026-02-09 09:00",status:"quoted",notes:"Budget option. 4-5 week lead."},
    ];
    log["PRJ-009"]=[
      {id:"RFQ-007",supplier:"Delhi Granite Exports",stone:"Absolute Black",qty:"3.1",price:5580,pricePerT:1800,date:"2026-02-14 10:00",status:"accepted",notes:"Order placed. ETA 4 weeks."},
    ];
    return log;
  });
  const[dbRefreshing,setDbRefreshing]=useState(false);
  const[stDbSearch,setStDbSearch]=useState("");
  const[alertSearch,setAlertSearch]=useState("");
  const[estEmailTo,setEstEmailTo]=useState("");
  const[estClientName,setEstClientName]=useState("");
  const[estProjectName,setEstProjectName]=useState("");
  const[estAgentCtx,setEstAgentCtx]=useState("");
  const[estMargin,setEstMargin]=useState(25);
  const[lossConfirm,setLossConfirm]=useState(false);
  const[quoteApplied,setQuoteApplied]=useState(false);
  const[estShopEmail,setEstShopEmail]=useState("");
  const[estActionLog,setEstActionLog]=useState([]);
  const[showEstAction,setShowEstAction]=useState(null);
  const[finOverrides,setFinOverrides]=useState({});
  const[finEditing,setFinEditing]=useState(false);
  const[finScenario,setFinScenario]=useState(null); // null=off, or preset name
  const[finScenarioAdj,setFinScenarioAdj]=useState({revMult:1,costMult:1,marginAdj:0,note:""});
  const[alertFilt,setAlertFilt]=useState("All");

  // ── Sales Pipeline state ──
  const[leads,setLeads]=useState([
    {id:"LD-001",company:"Vanderbilt University",contact:"Dr. James Whitfield",type:"Architecture",src:"Press — Fast Company",val:480000,prob:60,stage:"Proposal",lastTouch:"2026-02-14",nextAction:"2026-02-28",nextNote:"Send facade panel case study",notes:"New residential college, 6 facade panels + capitals. Referenced RAMSA work.",hot:true},
    {id:"LD-002",company:"Aman Resorts NYC",contact:"Maria Chen",type:"Hospitality",src:"Inbound — website",val:220000,prob:40,stage:"Scoping",lastTouch:"2026-02-17",nextAction:"2026-02-21",nextNote:"Confirm lobby dims + stone spec",notes:"Lobby water feature + reception surround. High urgency, opening Oct 2026.",hot:true},
    {id:"LD-003",company:"Gagosian Gallery",contact:"Sarah Moore",type:"Fine Art",src:"Referral — Daniel Arsham",val:95000,prob:75,stage:"Quote Sent",lastTouch:"2026-02-12",nextAction:"2026-02-22",nextNote:"Follow up — 10 days since quote",notes:"Group show installation. 3 abstract forms in Calacatta.",hot:false},
    {id:"LD-004",company:"St. Patrick's Cathedral",contact:"Fr. Thomas Kelly",type:"Restoration",src:"Inbound — referral",val:340000,prob:25,stage:"Discovery",lastTouch:"2026-01-30",nextAction:"2026-03-01",nextNote:"Site visit scheduled",notes:"Apse restoration. Heritage match critical. Long procurement cycle.",hot:false},
    {id:"LD-005",company:"David Chipperfield Architects",contact:"Lena Beck",type:"Architecture",src:"Conference — AIANY",val:650000,prob:20,stage:"Discovery",lastTouch:"2026-02-10",nextAction:"2026-03-15",nextNote:"Send full capability deck",notes:"Large residential project, parametric stone facade. Budget TBC.",hot:false},
    {id:"LD-006",company:"Private Estate — Hamptons",contact:"[Confidential]",type:"Sculpture",src:"Inbound — social",val:65000,prob:80,stage:"Quote Sent",lastTouch:"2026-02-16",nextAction:"2026-02-20",nextNote:"Decision expected today",notes:"Pair of garden lions, matched to existing stonework. Motivated buyer.",hot:true},
    {id:"LD-007",company:"NYC Parks Foundation",contact:"Julia Torres",type:"Public Art",src:"RFP",val:280000,prob:35,stage:"Proposal",lastTouch:"2026-02-05",nextAction:"2026-02-28",nextNote:"RFP submission deadline",notes:"Public sculpture program, 3 monuments. Government procurement cycle.",hot:false},
    {id:"LD-008",company:"Four Seasons Residences",contact:"Dev Team",type:"Hospitality",src:"Referral — Aman",val:180000,prob:15,stage:"Discovery",lastTouch:"2026-01-20",nextAction:"2026-03-10",nextNote:"Re-engage after budget review",notes:"Amenity floor ornament. Budget pressure, comparing precast.",hot:false},
    // Won
    {id:"LD-W01",company:"Related Companies",contact:"Claire Fontaine",type:"Architecture",src:"Referral — RAMSA",val:550000,prob:100,stage:"Won",lastTouch:"2025-12-18",nextAction:"",nextNote:"",notes:"Hudson Yards amenity spaces. Closed Dec 2025. Excellent margin at 18%. Phase 2 conversation to open Q3 2026.",hot:false,wonDate:"2025-12-18",margin:18},
    {id:"LD-W02",company:"Rosewood Hotels — Dallas",contact:"André Leblanc",type:"Hospitality",src:"Inbound — Aman referral",val:145000,prob:100,stage:"Won",lastTouch:"2026-02-15",nextAction:"",nextNote:"",notes:"Grand lobby installation won after reducing margin to 14%. Stone order to be placed week of Feb 24.",hot:false,wonDate:"2026-02-15",margin:14},
    {id:"LD-W03",company:"Brooklyn Public Library",contact:"Marcus Reid",type:"Public Art",src:"RFP — NYC Cultural",val:210000,prob:100,stage:"Won",lastTouch:"2026-01-10",nextAction:"",nextNote:"",notes:"Commemorative relief sculpture, Indiana limestone. 3-way RFP. Won on portfolio quality + timeline. Start April 2026.",hot:false,wonDate:"2026-01-10",margin:16},
    {id:"LD-W04",company:"Selldorf Architects",contact:"Robert Ashby",type:"Architecture",src:"Conference — AD100",val:190000,prob:100,stage:"Won",lastTouch:"2025-11-22",nextAction:"",nextNote:"",notes:"Tribeca penthouse stair surround + terrace. Calacatta Gold. In design phase. Key repeat client.",hot:false,wonDate:"2025-11-22",margin:21},
    {id:"LD-W05",company:"Stripe Inc.",contact:"Marcus Chen",type:"Corporate",src:"Inbound — website",val:18000,prob:100,stage:"Won",lastTouch:"2026-01-22",nextAction:"",nextNote:"",notes:"HQ lobby logo. Simple scope, high margin. In fabrication. Good template for tech sector outreach.",hot:false,wonDate:"2026-01-22",margin:28},
    {id:"LD-W06",company:"The Greenwich Hotel",contact:"Sophia Laurent",type:"Hospitality",src:"Referral — Rosewood",val:88000,prob:100,stage:"Won",lastTouch:"2025-10-14",nextAction:"",nextNote:"",notes:"Bar top + feature wall in Verde Guatemala marble. Completed and installed Nov 2025. Client thrilled.",hot:false,wonDate:"2025-10-14",margin:22},
    {id:"LD-W07",company:"Park Avenue Armory",contact:"Stella Park",type:"Fine Art",src:"Direct outreach",val:85000,prob:100,stage:"Won",lastTouch:"2025-12-01",nextAction:"",nextNote:"",notes:"Kiona Thunderbird sculpture for residency show. In HITL polish phase. Museum-grade crating required.",hot:false,wonDate:"2025-12-01",margin:17},
    // Lost
    {id:"LD-L01",company:"Apple Retail",contact:"Sarah Kim",type:"Corporate",src:"RFP — direct",val:420000,prob:0,stage:"Lost",lastTouch:"2025-12-10",nextAction:"",nextNote:"",notes:"Lost to Italian fabricator on price. Competitor quoted 22% below our rate. Keep warm — Apple redesigns stores every 3-4 years.",hot:false,lostDate:"2025-12-10",lostReason:"Price — competitor 22% lower"},
    {id:"LD-L02",company:"Marriott International",contact:"Dev Relations",type:"Hospitality",src:"RFP — Marriott Design",val:380000,prob:0,stage:"Lost",lastTouch:"2025-11-05",nextAction:"",nextNote:"",notes:"Brand standards required precast, not carved stone. Structural decision, not competitive. Re-engage when premium tier launches.",hot:false,lostDate:"2025-11-05",lostReason:"Spec change — precast required"},
    {id:"LD-L03",company:"Snohetta NY",contact:"Yuki Tanaka",type:"Public Art",src:"Conference — AIANY",val:320000,prob:0,stage:"Lost",lastTouch:"2026-01-28",nextAction:"",nextNote:"",notes:"Lost to competing studio with existing public art relationship. Strong interest in future collaboration. Follow up Q3 2026.",hot:false,lostDate:"2026-01-28",lostReason:"Incumbent relationship"},
    {id:"LD-L04",company:"Ace Hotel Brooklyn",contact:"Brand Director",type:"Hospitality",src:"Inbound — Instagram",val:95000,prob:0,stage:"Lost",lastTouch:"2025-10-20",nextAction:"",nextNote:"",notes:"Budget cut mid-process. Project shelved indefinitely. Contact reengaged via email Feb 2026 — budget review Q2.",hot:false,lostDate:"2025-10-20",lostReason:"Budget cut — project shelved"},
    {id:"LD-L05",company:"Whitney Museum",contact:"Acquisitions Dept",type:"Fine Art",src:"Referral — Christie's",val:160000,prob:0,stage:"Lost",lastTouch:"2025-09-15",nextAction:"",nextNote:"",notes:"Selected artist supplied their own fabricator. Decision made before our proposal was reviewed. Museum RFP process opaque.",hot:false,lostDate:"2025-09-15",lostReason:"Artist supplied own fabricator"},
    {id:"LD-L06",company:"NeueHouse Hollywood",contact:"GM",type:"Hospitality",src:"Referral — Soho House",val:72000,prob:0,stage:"Lost",lastTouch:"2025-08-30",nextAction:"",nextNote:"",notes:"Timeline too aggressive (6 weeks). We couldn't deliver without compromising quality. Client went with domestic shop doing cast resin.",hot:false,lostDate:"2025-08-30",lostReason:"Timeline — 6 weeks not feasible"},
  ]);
  const[selLead,setSelLead]=useState(null);
  const[leadSearch,setLeadSearch]=useState("");
  const[leadStageFilt,setLeadStageFilt]=useState("All");
  const[pipeQuickFilt,setPipeQuickFilt]=useState(null);
  const[prjTabFilt,setPrjTabFilt]=useState("all"); // all | active | delivered
  const[contactSearch,setContactSearch_]=useState("");
  const[selContact,setSelContact]=useState(null);
  const[selContactEst,setSelContactEst]=useState(null);
  const[selSupplier,setSelSupplier]=useState(null);
  const[showNewLead,setShowNewLead]=useState(false);
  const[newLead,setNewLead]=useState({company:"",contact:"",type:"Architecture",src:"",val:"",prob:50,stage:"Discovery",nextAction:"",nextNote:"",notes:""});
  const LEAD_STAGES=["Discovery","Scoping","Proposal","Quote Sent","Negotiation","Won","Lost"];
  const LEAD_STAGE_C={"Discovery":"#64748b","Scoping":"#60a5fa","Proposal":"#a78bfa","Quote Sent":G,"Negotiation":"#f59e0b","Won":"#22c55e","Lost":"#ef4444"};

  // ── Capacity Calendar state ──
  const[capWeek,setCapWeek]=useState(0); // offset from current week
  const[capView,setCapView]=useState("both"); // both only
  const[capTab,setCapTab]=useState("team");
  const[capSelSup,setCapSelSup]=useState("S1");
  const[capSelClient,setCapSelClient]=useState("CL1");
  const[tblSort,setTblSort]=useState({key:null,dir:"asc"});
  const[capSelPerson,setCapSelPerson]=useState("H1");
  const[selDay,setSelDay]=useState(null); // selected day on capacity calendar
  const[selWeekCF,setSelWeekCF]=useState(null); // cash flow selected week
  const[cfRange,setCfRange]=useState(6); // forecast months: 1,3,6,12
  const[revRange,setRevRange]=useState(12); // revenue trend months
  const[plRange,setPlRange]=useState(12); // P&L chart months

  useEffect(()=>{const t=setInterval(()=>setClk(new Date()),1000);return()=>clearInterval(t);},[]);
  const sel=prjs.find(p=>p.id===selId);
  const aR=ROBOTS.filter(r=>r.status==="Milling").length;

  const upd=useCallback((sk,fk,v)=>{
    setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,sd:{...p.sd,[sk]:{...p.sd[sk],[fk]:v}}}));
  },[selId]);

  const saveEdit=useCallback(()=>{
    if(!editSnap||!sel) return;
    const stg=STAGES[expS];
    if(!stg) return;
    const cur=sel.sd?.[stg.key]||{};
    const changes=[];
    stg.fields.forEach(f=>{
      const oldV=editSnap[f.k]||"";
      const newV=cur[f.k]||"";
      if(oldV!==newV) changes.push({field:f.l,from:oldV||"(empty)",to:newV||"(empty)"});
    });
    if(changes.length>0){
      setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,changelog:[{t:ts(),u:"Current User",stage:stg.label,changes},...(p.changelog||[])]}));
    }
    setEditing(false);
    setEditSnap(null);
  },[editSnap,sel,expS,selId]);

  const startEdit=useCallback(()=>{
    if(!sel||expS===null) return;
    const stg=STAGES[expS];
    setEditSnap({...(sel.sd?.[stg.key]||{})});
    setEditing(true);
  },[sel,expS]);

  const advance=useCallback(()=>{
    const nextStage=sel?Math.min(sel.stage+1,STAGES.length-1):0;
    setPrjs(ps=>ps.map(p=>p.id!==selId?p:{
      ...p,stage:Math.min(p.stage+1,STAGES.length-1),
      progress:Math.min(100,Math.round(((p.stage+2)/(STAGES.length+1))*100)),
      log:[{t:ts(),m:`${STAGES[p.stage]?.label} → ${STAGES[p.stage+1]?.label}`,u:"System"},...(p.log||[])],
      sd:{...p.sd,invoice2:{...p.sd.invoice2,invNum:p.sd.invoice2.invNum||(p.stage===7?genInv():"")}}
    }));
    setExpS(nextStage);setEditing(false);
  },[selId,sel]);

  const sendInv2=useCallback(()=>{
    setPrjs(ps=>ps.map(p=>p.id!==selId?p:{
      ...p,sd:{...p.sd,invoice2:{...p.sd.invoice2,invNum:p.sd.invoice2.invNum||genInv(),dateSent:now(),status:"Sent"}},
      log:[{t:ts(),m:`Invoice #2 ${p.sd.invoice2.invNum||"(new)"} sent to client`,u:"Current User"},...(p.log||[])]
    }));
  },[selId]);

  const createPrj=()=>{
    const id="PRJ-"+String(Math.floor(Math.random()*900)+100);
    const p={id,name:newP.name,client:newP.client,type:newP.type,artist:"",stage:0,progress:0,stoneId:Number(newP.stoneId)||null,dims:{l:Number(newP.dims.l)||0,w:Number(newP.dims.w)||0,h:Number(newP.dims.h)||0},priority:newP.priority,due:newP.due,estCost:0,quoted:0,inv1:0,inv1P:false,inv2:0,inv2P:false,notes:newP.notes,log:[{t:ts(),m:"Project created",u:"Current User"}],changelog:[],sd:mkSD()};
    setPrjs(ps=>[...ps,p]);setSelId(id);setShowNew(false);
    setNewP({name:"",client:"",type:"Sculpture",priority:"medium",due:"",stoneId:"",dims:{l:"",w:"",h:""},complexity:"medium",notes:""});
  };

  // Estimator calc
  const estStone=STONE_DB.find(s=>s.id===Number(estStoneId));
  // Estimator settings
  const[estRobotRate,setEstRobotRate]=useState(85);
  const[estHandRate,setEstHandRate]=useState(62);
  const[estOverhead,setEstOverhead]=useState(30);
  const[estProfit,setEstProfit]=useState(15);
  const[estDist,setEstDist]=useState(5000);
  const[estShipFactor,setEstShipFactor]=useState(0.1);
  const[estQuality,setEstQuality]=useState("Premium");

  const estimate=useMemo(()=>{
    if(!estStone||!estDims.l||!estDims.w||!estDims.h) return null;
    const l=Number(estDims.l),w=Number(estDims.w),h=Number(estDims.h),q=Number(estQty)||1;
    const vol=l*w*h,sa=2*(l*w+l*h+w*h);
    const dens=({Marble:2.7,Granite:2.75,Limestone:2.35,Sandstone:2.2,Travertine:2.5}[estStone.fam]||2.5);
    const mt=vol*dens,matC=mt*stonePrice(estStone)/(estStone.yld/100);
    const cx=({low:.6,medium:1,high:1.6,extreme:2.4}[estCx]||1);
    const qualM=({Standard:.85,Premium:1,Artisan:1.3,Museum:1.6}[estQuality]||1);
    const rh=sa*8*cx*(estStone.hard/3.5)*qualM;
    const hh=rh*(estStone.pol/3)*.35*qualM;
    const rr=Number(estRobotRate),hr=Number(estHandRate);
    const rc=rh*rr,hc=hh*hr;
    const shipBase=mt*200;
    const shipDist=Number(estDist)*Number(estShipFactor);
    const intl=estStone.origin!=="USA"?1500:400;
    const sh=shipBase+shipDist+intl;
    const subtotal=matC+rc+hc+sh;
    const oh=subtotal*(Number(estOverhead)/100);
    const profitAmt=(subtotal+oh)*(Number(estProfit)/100);
    const tot=subtotal+oh+profitAmt;
    return{vol:vol*q,sa:sa*q,mt:mt*q,dens,rh:rh*q,hh:hh*q,th:(rh+hh)*q,matC:matC*q,rc:rc*q,hc:hc*q,sh:sh*q,shipBase:shipBase*q,shipDist:shipDist*q,intl:intl*q,oh:oh*q,profitAmt:profitAmt*q,tot:tot*q,subtotal:subtotal*q,rr,hr,cx,qualM,m40:tot/.85*q,m50:tot/.75*q,m60:tot/.65*q};
  },[estStone,estDims,estCx,estQty,estRobotRate,estHandRate,estOverhead,estProfit,estDist,estShipFactor,estQuality]);

  // Financials
  const fin=useMemo(()=>{
    const tq=prjs.reduce((s,p)=>s+(p.quoted||0),0),tc=prjs.reduce((s,p)=>s+p.estCost,0);
    const tp=prjs.reduce((s,p)=>s+(p.inv1P?p.inv1:0)+(p.inv2P?p.inv2:0),0);
    const ar=tq-tp;
    const am=tq>0?Math.round((1-tc/tq)*100):0;
    const bt={};prjs.forEach(p=>{bt[p.type]=(bt[p.type]||0)+(p.quoted||0);});
    const bs=Array(11).fill(0);prjs.forEach(p=>bs[p.stage]++);
    const trh=prjs.reduce((s,p)=>s+Number(p.sd?.fabrication?.hrsLogged||0),0);
    const thh=prjs.reduce((s,p)=>s+Number(p.sd?.hitl_polish?.hrsLogged||0),0);
    const tsc=prjs.reduce((s,p)=>s+Number(p.sd?.stone_sourcing?.stoneCost||0),0);
    const rU=Math.round(aR/ROBOTS.length*100);
    const forecast=[];let bal=tp-tc*.6;
    for(let i=0;i<12;i++){const m=new Date();m.setMonth(m.getMonth()+i);const rev=i<2?ar*.3:tq*.08;const exp=145000;bal+=rev-exp;forecast.push({m:m.toLocaleString("en",{month:"short",year:i===0||m.getMonth()===0?"2-digit":undefined}),rev:Math.round(rev),exp,bal:Math.round(bal)});}
    return{tq,tc,tp,ar,am,bt,bs,trh,thh,tsc,rU,burn:145000,n:prjs.length,avgV:tq>0?Math.round(tq/prjs.length):0,forecast};
  },[prjs,aR]);
  // Scenario-adjusted financials
  const finAdj=useMemo(()=>{
    if(!finScenario) return fin;
    const a=finScenarioAdj;
    const tq=Math.round(fin.tq*a.revMult);
    const tc=Math.round(fin.tc*a.costMult);
    const tp=Math.round(fin.tp*a.revMult);
    const ar=tq-tp;
    const am=tq>0?Math.round((1-tc/tq)*100)+a.marginAdj:0;
    const burn=Math.round(fin.burn*a.costMult);
    const avgV=tq>0?Math.round(tq/fin.n):0;
    const forecast=[];let bal=tp-tc*.6;
    for(let i=0;i<12;i++){const m=new Date();m.setMonth(m.getMonth()+i);const rev=i<2?ar*.3:tq*.08;const exp=burn;bal+=rev-exp;forecast.push({m:m.toLocaleString("en",{month:"short",year:i===0||m.getMonth()===0?"2-digit":undefined}),rev:Math.round(rev),exp,bal:Math.round(bal)});}
    return{...fin,tq,tc,tp,ar,am,burn,avgV,forecast};
  },[fin,finScenario,finScenarioAdj]);

  const sortSt=useMemo(()=>{
    let a=stF==="All"?[...STONE_DB]:STONE_DB.filter(s=>s.fam===stF);
    a.sort((x,y)=>(typeof x[stS]==="number"?(x[stS]-y[stS]):String(x[stS]).localeCompare(String(y[stS])))*stD);
    return a;
  },[stF,stS,stD]);

  const DS={background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"6px 10px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S};

const Inp=({label,value,onChange,type,opts,ph,disabled:dis,robots,carvers,stoneDb,genInv:gI})=>(
    <div style={{marginBottom:7}}>
      <div style={{fontSize:14,color:"#706b63",marginBottom:2,fontWeight:500}}>{label}</div>
      {type==="select"?<select value={value||""} onChange={e=>onChange(e.target.value)} disabled={dis} style={{...DS,width:"100%",opacity:dis?.5:1,cursor:"pointer"}}><option value="" style={{background:"#1a1918"}}>—</option>{(opts||[]).map(o=><option key={o} value={o} style={{background:"#1a1918",color:"#e2e0dc"}}>{o}</option>)}</select>
       :type==="robot"?<select value={value||""} onChange={e=>onChange(e.target.value)} disabled={dis} style={{...DS,width:"100%",cursor:"pointer"}}><option value="" style={{background:"#1a1918"}}>Unassigned</option>{(robots||[]).map(r=><option key={r.id} value={r.id} style={{background:"#1a1918",color:"#e2e0dc"}}>{r.name} ({r.status})</option>)}</select>
       :type==="carver"?<select value={value||""} onChange={e=>onChange(e.target.value)} disabled={dis} style={{...DS,width:"100%",cursor:"pointer"}}><option value="" style={{background:"#1a1918"}}>Unassigned</option>{(carvers||[]).map(c=><option key={c.id} value={c.id} style={{background:"#1a1918",color:"#e2e0dc"}}>{c.name} — {c.spec}</option>)}</select>
       :type==="stone"?<select value={value||""} onChange={e=>onChange(e.target.value)} disabled={dis} style={{...DS,width:"100%",cursor:"pointer"}}><option value="" style={{background:"#1a1918"}}>Select...</option>{(stoneDb||[]).map(s=><option key={s.id} value={s.name} style={{background:"#1a1918",color:"#e2e0dc"}}>{s.name} — {s.fam}</option>)}</select>
       :type==="auto_inv"?<div style={{display:"flex",gap:4}}><input value={value||""} readOnly style={{...DS,flex:1,opacity:.6}} placeholder="Auto-generated"/><button onClick={()=>onChange(gI())} style={{fontSize:10,padding:"4px 10px",borderRadius:6,border:"1px solid rgba(255,255,255,.08)",background:"transparent",color:"#a09a92",cursor:"pointer",fontFamily:S}}>Generate</button></div>
       :<input type={type==="auto"?"text":type||"text"} value={value||""} onChange={e=>onChange(e.target.value)} placeholder={ph||""} readOnly={type==="auto"||dis} style={{...DS,width:"100%",opacity:(type==="auto"||dis)?.5:1}}/>}
    </div>
  );

  const NAV=[
    // Activities
    {k:"lifecycle",l:"Projects",         i:"○", sec:"activities"},
    {k:"procurement",l:"Procurement",    i:"◫", sec:"activities"},
    {k:"sales",      l:"Sales",           i:"⬡", sec:"activities"},
    {k:"marketing",  l:"Marketing",       i:"📣", sec:"activities"},
    // Resources
    {k:"financials",l:"Finances",         i:"$", sec:"resources"},
    {k:"stonedb",  l:"Materials",         i:"◇", sec:"resources"},
    {k:"capacity", l:"Humans",            i:"👤", sec:"resources"},
    {k:"robots",   l:"Robots",            i:"▦", sec:"resources"},
    // Tools
    {k:"calendar", l:"Calendar",          i:"📅", sec:"tools"},
    {k:"scenario", l:"Scenario",          i:"🔮", sec:"tools"},
    {k:"estimate", l:"Estimate",          i:"△", sec:"tools"},
    {k:"invoice",  l:"Invoice",           i:"💰", sec:"tools"},
    {k:"alerts",   l:"Operation Log",     i:"⚡", sec:"tools"},
  ];

  // Per-view config: title, new-button label+items, sub-tabs
  // Every view gets Mission Control as its first tab
  const MC_TAB={k:"mission",l:"Overview"};
  const VIEW_CFG={
    mission:{
      title:"Mission Control",
      newItems:null,
      tabs:[{k:"overview",l:"Overview"},{k:"projects",l:"Projects"},{k:"robots",l:"Robots"},{k:"finance",l:"Finance"},{k:"alerts",l:"Alerts"}],
    },
    lifecycle:{
      title:"Projects",
      newLabel:"+ New",
      newItems:[{l:"New Project",icon:"○",action:"newProject"},{l:"Import from CSV",icon:"↑",action:null}],
      tabs:[{k:"all",l:"All Projects"},{k:"active",l:"Active"},{k:"delivered",l:"Delivered"}],
    },
    procurement:{
      title:"Procurement",
      newLabel:"+ New",
      newItems:[{l:"New Stone Order",icon:"🛒",action:"newOrder"},{l:"Request Quote (RFQ)",icon:"📧",action:"newRfq"},{l:"Log Inventory",icon:"◇",action:null}],
      tabs:[{k:"orders",l:"Orders"},{k:"inventory",l:"Inventory"},{k:"rfqs",l:"RFQs"}],
    },
    sales:{
      title:"Sales",
      newLabel:"+ New",
      newItems:[{l:"New Lead",icon:"⬡",action:"newLead"}],
      tabs:[{k:"pipeline",l:"Pipeline"},{k:"quoting",l:"Quoting"},{k:"portal",l:"Client Portal"}],
    },
    marketing:{
      title:"Marketing",
      newLabel:"+ New",
      newItems:[{l:"New Campaign",icon:"📣",action:null},{l:"New Content",icon:"📝",action:null},{l:"Update Website",icon:"🌐",action:null}],
      tabs:[{k:"content",l:"CMS"},{k:"campaigns",l:"Campaigns"},{k:"analytics",l:"Analytics"}],
    },
    financials:{
      title:"Finances",
      newLabel:"+ New",
      newItems:[{l:"New Invoice",icon:"💰",action:null},{l:"Log Expense",icon:"↓",action:null},{l:"Export Report",icon:"📥",action:null}],
      tabs:[{k:"overview",l:"Revenue"},{k:"pl",l:"P&L"},{k:"cashflow",l:"Cash Flow"}],
    },
    stonedb:{
      title:"Materials",
      newLabel:"+ New",
      newItems:[{l:"Add Stone to Catalog",icon:"◇",action:null}],
      tabs:[{k:"catalog",l:"Catalog"}],
    },
    capacity:{
      title:"Humans",
      newLabel:"+ New",
      newItems:[{l:"Add Person",icon:"👤",action:null}],
      tabs:[{k:"team",l:"Team"},{k:"clients",l:"Clients"},{k:"suppliers",l:"Suppliers"}],
    },
    calendar:{
      title:"Calendar",
      newLabel:"+ New",
      newItems:[{l:"Schedule Job",icon:"▦",action:null},{l:"Block Time",icon:"🔧",action:null}],
      tabs:[],
    },
    robots:{
      title:"Robots",
      newLabel:"+ New",
      newItems:[{l:"Add Robot",icon:"▦",action:null},{l:"Schedule Maintenance",icon:"🔧",action:null}],
      tabs:[{k:"fleet",l:"Fleet"}],
    },
    scenario:{
      title:"Scenario",
      newLabel:null,
      newItems:[],
      tabs:[{k:"builder",l:"Scenario Builder"}],
    },
    estimate:{
      title:"Estimate",
      newLabel:"+ New",
      newItems:[{l:"New Estimate",icon:"△",action:"newEstimate"}],
      tabs:[{k:"calculator",l:"Estimate"}],
    },
    quote:{
      title:"Quote",
      newLabel:"+ New",
      newItems:[{l:"New Quote",icon:"📄",action:"newQuote"}],
      tabs:[{k:"drafts",l:"Drafts"},{k:"sent",l:"Sent"},{k:"templates",l:"Templates"}],
    },
    invoice:{
      title:"Invoice",
      newLabel:"+ New",
      newItems:[{l:"New Invoice",icon:"💰",action:null},{l:"Import Invoice",icon:"↑",action:null}],
      tabs:[{k:"outstanding",l:"Invoices"}],
    },
    macro:{
      title:"Market Intelligence",
      newLabel:null,
      newItems:null,
      tabs:[{k:"market",l:"Market Data"},{k:"impact",l:"Project Impact"}],
    },
    alerts:{
      title:"Operation Log",
      newLabel:"+ New",
      newItems:[{l:"New Alert",icon:"⚠",action:null},{l:"New Milestone",icon:"◆",action:null}],
      tabs:[{k:"All",l:"All"},{k:"Alerts",l:"Alerts"},{k:"Decisions",l:"Decisions"},{k:"Supply",l:"Supply"},{k:"Finance",l:"Finance"},{k:"Hardware",l:"Hardware"},{k:"Milestone",l:"Milestones"}],
    },
  };

  const[newMenuOpen,setNewMenuOpen]=useState(false);
  const[viewTab,setViewTab]=useState({lifecycle:"all",sales:"pipeline"});
  const[mcOrigin,setMcOrigin]=useState("lifecycle"); // which section launched Mission Control
  const getTab=(v)=>viewTab[v]||(VIEW_CFG[v]?.tabs?.[0]?.k||"");
  const setTab=(v,t)=>setViewTab(vt=>({...vt,[v]:t}));


  const ctx = {
    view,
    setViewRaw,
    prjs,
    setPrjs,
    selId,
    setSelIdRaw,
    expS,
    setExpS,
    showNew,
    setShowNew,
    prjSearch,
    setPrjSearch,
    priFilt,
    setPriFilt,
    newP,
    setNewP,
    clk,
    setClk,
    stF,
    setStF,
    stS,
    setStS,
    stD,
    setStD,
    editing,
    setEditing,
    editSnap,
    setEditSnap,
    salesTab,
    setSalesTab,
    estView,
    setEstView,
    estStoneId,
    setEstStoneId,
    estDims,
    setEstDims,
    estCx,
    setEstCx,
    estQty,
    setEstQty,
    estQ,
    setEstQ,
    expEst,
    setExpEst,
    estSearch,
    setEstSearch,
    quoteFilter,
    setQuoteFilter,
    quoteSortBy,
    setQuoteSortBy,
    expAlert,
    setExpAlert,
    alertLog,
    setAlertLog,
    orderModal,
    setOrderModal,
    orderPrj,
    setOrderPrj,
    orderQty,
    setOrderQty,
    orderDims,
    setOrderDims,
    orderNotes,
    setOrderNotes,
    rfqModal,
    setRfqModal,
    rfqPrj,
    setRfqPrj,
    rfqQty,
    setRfqQty,
    rfqDims,
    setRfqDims,
    rfqNotes,
    setRfqNotes,
    rfqTimeline,
    setRfqTimeline,
    rfqEditId,
    setRfqEditId,
    rfqEditNote,
    setRfqEditNote,
    stDbTab,
    setStDbTab,
    orderSearch,
    setOrderSearch,
    editingQuoteId,
    setEditingQuoteId,
    showResolved,
    setShowResolved,
    finAiOpen,
    setFinAiOpen,
    finTab,
    setFinTab,
    mktTab,
    setMktTab,
    robotTab,
    setRobotTab,
    selRobot,
    setSelRobot,
    sc,
    setSc,
    designRecs,
    setDesignRecs,
    sourceRecs,
    setSourceRecs,
    tpGenState,
    setTpGenState,
    tpGenTime,
    setTpGenTime,
    tpProgress,
    setTpProgress,
    tpStatus,
    setTpStatus,
    invDetail,
    setInvDetail,
    invBlocks,
    setInvBlocks,
    allocPrj,
    setAllocPrj,
    cpName,
    setCpName,
    cpEmail,
    setCpEmail,
    cpType,
    setCpType,
    cpDims,
    setCpDims,
    cpStone,
    setCpStone,
    cpBudget,
    setCpBudget,
    cpNotes,
    setCpNotes,
    cpSubmitted,
    setCpSubmitted,
    cpFiles,
    setCpFiles,
    macroTF,
    setMacroTF,
    macroTab,
    setMacroTab,
    macroAI,
    setMacroAI,
    mcPanelOpen,
    setMcPanelOpen,
    mcPanelWidth,
    setMcPanelWidth,
    mcPanelTab,
    setMcPanelTab,
    mcTab,
    setMcTab,
    mcExp,
    setMcExp,
    mcFilt,
    setMcFilt,
    mcDone,
    setMcDone,
    lFilt,
    setLFilt,
    lStatus,
    setLStatus,
    lExp,
    setLExp,
    gSearch,
    setGSearch,
    gSearchOpen,
    setGSearchOpen,
    gSearchFocused,
    setGSearchFocused,
    sideOpen,
    setSideOpen,
    sidebarPinned,
    setSidebarPinned,
    estFiles,
    setEstFiles,
    estAiRefresh,
    setEstAiRefresh,
    stoneDetail,
    setStoneDetail,
    prjRfqLog,
    setPrjRfqLog,
    dbRefreshing,
    setDbRefreshing,
    stDbSearch,
    setStDbSearch,
    alertSearch,
    setAlertSearch,
    estEmailTo,
    setEstEmailTo,
    estClientName,
    setEstClientName,
    estProjectName,
    setEstProjectName,
    estAgentCtx,
    setEstAgentCtx,
    estMargin,
    setEstMargin,
    lossConfirm,
    setLossConfirm,
    quoteApplied,
    setQuoteApplied,
    estShopEmail,
    setEstShopEmail,
    estActionLog,
    setEstActionLog,
    showEstAction,
    setShowEstAction,
    finOverrides,
    setFinOverrides,
    finEditing,
    setFinEditing,
    finScenario,
    setFinScenario,
    finScenarioAdj,
    setFinScenarioAdj,
    alertFilt,
    setAlertFilt,
    leads,
    setLeads,
    selLead,
    setSelLead,
    leadSearch,
    setLeadSearch,
    leadStageFilt,
    setLeadStageFilt,
    pipeQuickFilt,
    setPipeQuickFilt,
    prjTabFilt,
    setPrjTabFilt,
    contactSearch,
    setContactSearch_,
    selContact,
    setSelContact,
    selContactEst,
    setSelContactEst,
    selSupplier,
    setSelSupplier,
    showNewLead,
    setShowNewLead,
    newLead,
    setNewLead,
    capWeek,
    setCapWeek,
    capView,
    setCapView,
    capTab,
    setCapTab,
    capSelSup,
    setCapSelSup,
    capSelClient,
    setCapSelClient,
    tblSort,
    setTblSort,
    capSelPerson,
    setCapSelPerson,
    selDay,
    setSelDay,
    selWeekCF,
    setSelWeekCF,
    cfRange,
    setCfRange,
    revRange,
    setRevRange,
    plRange,
    setPlRange,
    estRobotRate,
    setEstRobotRate,
    estHandRate,
    setEstHandRate,
    estOverhead,
    setEstOverhead,
    estProfit,
    setEstProfit,
    estDist,
    setEstDist,
    estShipFactor,
    setEstShipFactor,
    estQuality,
    setEstQuality,
    newMenuOpen,
    setNewMenuOpen,
    viewTab,
    setViewTab,
    mcOrigin,
    setMcOrigin,
    M,
    S,
    D,
    G,
    CB,
    BD,
    $,
    PC,
    TT,
    PRI,
    STAT_C,
    FC,
    CC,
    ROLES_C,
    stonePrice,
    genInv,
    now,
    ts,
    AsOf,
    STAGES,
    STONE_DB,
    ROBOTS,
    CARVERS,
    INIT_PRJS,
    mkSD,
    INIT_EST_QUEUE,
    EST_STEPS,
    Dot,
    Lbl,
    Badge,
    Btn,
    KPI,
    NAV,
    VIEW_CFG,
    ROUTE_MAP,
    nav,
    finAdj,
    aR,
  };

  return(
    <div style={{fontFamily:S,background:"#0c0b0a",color:"#d4d0ca",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      

      {/* BRAND BAR + TABS — single unified row */}
      {(()=>{
        const effectiveView = (view==="mission" && mcOrigin) ? mcOrigin : view;
        const cfg=VIEW_CFG[effectiveView]||VIEW_CFG[view]||{};
        const tabs=cfg.tabs||[];
        const curTab=getTab(effectiveView);
        return <div style={{height:46,display:"flex",alignItems:"stretch",padding:"0 0 0 16px",borderBottom:"1px solid rgba(255,255,255,.06)",background:"rgba(255,255,255,.01)",flexShrink:0}}>

          {/* Hamburger + Logo */}
          <div style={{display:"flex",alignItems:"center",gap:10,paddingRight:16,flexShrink:0}}>
            <button onClick={()=>{if(!sidebarPinned)setSideOpen(s=>!s);}} style={{background:"none",border:"none",color:"#706b63",cursor:"pointer",padding:"4px",lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:4}} title="Toggle sidebar">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect width="16" height="1.5" rx=".75" fill="currentColor"/><rect y="5.25" width="16" height="1.5" rx=".75" fill="currentColor"/><rect y="10.5" width="16" height="1.5" rx=".75" fill="currentColor"/></svg>
            </button>
            <span style={{fontSize:18}}>🏛</span>
            <span style={{fontSize:18,fontWeight:700,color:"#e8e4df",fontFamily:D,letterSpacing:"-.3px",whiteSpace:"nowrap"}}>Monumental Labs</span>
          </div>

          {/* Divider */}
          <div style={{width:1,background:"rgba(255,255,255,.06)",margin:"10px 0",flexShrink:0}}/>

          {/* New button */}
          {cfg.newLabel&&<div style={{position:"relative",display:"flex",alignItems:"center",paddingLeft:12,paddingRight:4,flexShrink:0}}>
            <button onClick={()=>setNewMenuOpen(o=>!o)} style={{display:"flex",alignItems:"center",gap:4,background:G,border:"none",color:"#0c0b0a",fontSize:14,fontWeight:700,padding:"5px 11px 5px 9px",borderRadius:6,cursor:"pointer",fontFamily:S,whiteSpace:"nowrap",lineHeight:1}}>
              <span style={{fontSize:18,lineHeight:1}}>+</span>
              <span>New</span>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{marginLeft:1,transition:"transform .15s",transform:newMenuOpen?"rotate(180deg)":"none"}}><path d="M1 2.5l3 3 3-3" stroke="#0c0b0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {newMenuOpen&&<>
              <div onClick={()=>setNewMenuOpen(false)} style={{position:"fixed",inset:0,zIndex:199}}/>
              <div className="dropIn" style={{position:"absolute",top:"calc(100% + 6px)",left:0,zIndex:200,background:"#1c1a18",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:"5px",minWidth:200,boxShadow:"0 16px 48px rgba(0,0,0,.7)"}}>
                <div style={{fontSize:10,color:"#4a4540",textTransform:"uppercase",letterSpacing:1.2,padding:"6px 10px 4px",fontWeight:600}}>{cfg.title}</div>
                {(cfg.newItems||[]).map((item,i)=><button key={i} onClick={()=>{
                  setNewMenuOpen(false);
                  if(item.action==="newProject") setShowNew(true);
                  if(item.action==="newLead") setShowNewLead(true);
                  if(item.action==="newEstimate"||item.action==="newQuote") setEstView("client");
                  if(item.action==="newOrder") setOrderModal({name:"Custom",fam:"",role:"",origin:"",hard:0,dur:0,pol:0,yld:0,por:0});
                  if(item.action==="newRfq") setRfqModal({name:"Custom",fam:"",role:"",origin:""});
                }} style={{display:"flex",alignItems:"center",gap:10,width:"100%",background:"none",border:"none",color:"#d4d0ca",fontSize:14,padding:"8px 12px",borderRadius:6,cursor:"pointer",fontFamily:S,textAlign:"left"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.06)"}
                  onMouseLeave={e=>e.currentTarget.style.background="none"}>
                  <span style={{fontSize:14,width:20,textAlign:"center",color:G,flexShrink:0}}>{item.icon}</span>
                  <span>{item.l}</span>
                </button>)}
              </div>
            </>}
          </div>}

          {/* Tabs — inline in the brand bar */}
          <div style={{display:"flex",alignItems:"stretch",gap:0,flex:1,overflowX:"auto",minWidth:0,paddingLeft:cfg.newLabel?4:12}}>
            {tabs.map(t=>{
              const act=t.k==="mission" ? view==="mission" : (view!=="mission" && curTab===t.k);
              return <button key={t.k} onClick={()=>{
                if(t.k==="mission"){setMcOrigin(effectiveView);setView("mission");return;}
                setView(effectiveView);
                setTab(effectiveView,t.k);
                if(effectiveView==="lifecycle") setPrjTabFilt(t.k);
                if(effectiveView==="salespipeline"&&["won","lost","pipeline","contacts"].includes(t.k)) setLeadStageFilt(t.k==="pipeline"?"All":t.k==="won"?"Won":t.k==="lost"?"Lost":t.k);
                if(effectiveView==="estimator") setEstView(t.k==="contacts"?"contacts":t.k);
                if(effectiveView==="capacity") setCapTab(t.k);
                if(effectiveView==="stonedb") setStDbTab(t.k);
                if(effectiveView==="procurement") setStDbTab(t.k);
                if(effectiveView==="sales"){setSalesTab(t.k);setEstView(t.k==="quoting"?"dashboard":t.k==="portal"?"client":t.k==="contacts"?"contacts":t.k);}
                if(effectiveView==="macro") setMacroTab(t.k);
                if(effectiveView==="financials") setFinTab(t.k);
                if(effectiveView==="marketing") setMktTab(t.k);
                if(effectiveView==="robots") setRobotTab(t.k);
                if(effectiveView==="alerts") setAlertFilt(t.k);
              }} style={{fontSize:14,fontWeight:act?600:400,color:act?"#ede9e3":t.k==="mission"?"#c4a882":"#706b63",background:"none",border:"none",borderBottom:act?`2px solid ${G}`:"2px solid transparent",padding:"0 13px",cursor:"pointer",fontFamily:S,whiteSpace:"nowrap",transition:"color .12s",alignSelf:"stretch",display:"flex",alignItems:"center"}}>
                {t.l}
              </button>;
            })}
          </div>

          {/* Right side — search + alerts + chat */}
          <div style={{display:"flex",alignItems:"center",gap:8,padding:"0 16px",flexShrink:0,position:"relative"}}>
            
            {view==="calendar"&&<Btn small color="#706b63" onClick={()=>setCapWeek(0)}>↺ Today</Btn>}
            {/* Global Search */}
            <div style={{position:"relative",display:"flex",justifyContent:"flex-end"}}>
              <div style={{display:"flex",flexDirection:"row-reverse",alignItems:"center",gap:gSearchFocused?6:0,padding:"5px",borderRadius:6,background:gSearchFocused?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)",border:gSearchFocused?"1px solid rgba(196,168,130,.3)":"1px solid rgba(255,255,255,.08)",transition:"all .2s ease",width:gSearchFocused?260:32,overflow:"hidden",cursor:gSearchFocused?"text":"pointer"}} onClick={()=>{if(!gSearchFocused)document.getElementById("gsearch").focus();}}>
                <svg onClick={()=>document.getElementById("gsearch").focus()} width="20" height="20" viewBox="0 0 20 20" fill="none" style={{flexShrink:0,cursor:"pointer",opacity:gSearchFocused?.7:1,transition:"opacity .15s"}}>
                  <circle cx="8.5" cy="8.5" r="5.5" stroke={gSearchFocused?"#c4a882":"#a09a92"} strokeWidth="1.7"/>
                  <path d="M13 13L17 17" stroke={gSearchFocused?"#c4a882":"#a09a92"} strokeWidth="1.7" strokeLinecap="round"/>
                </svg>
                <input
                  id="gsearch"
                  value={gSearch}
                  onChange={e=>{setGSearch(e.target.value);setGSearchOpen(e.target.value.length>0);}}
                  onFocus={()=>{setGSearchFocused(true);if(gSearch.length>0)setGSearchOpen(true);}}
                  onBlur={()=>{setGSearchFocused(false);setTimeout(()=>setGSearchOpen(false),200);}}
                  placeholder=""
                  style={{background:"none",border:"none",outline:"none",fontSize:14,color:"#e2e0dc",fontFamily:S,width:"100%",minWidth:0}}
                />
                {gSearch&&<button onClick={()=>{setGSearch("");setGSearchOpen(false);}} style={{background:"none",border:"none",color:"#4a4540",cursor:"pointer",fontSize:14,lineHeight:1,padding:0,flexShrink:0}}>×</button>}
              </div>
              {gSearchOpen&&(()=>{
                const q=gSearch.toLowerCase();
                const hits=[];
                const nav=(action)=>{setGSearchOpen(false);setGSearch("");action();};
                const sdText=(sd)=>{if(!sd)return"";return Object.values(sd).map(stage=>Object.values(stage||{}).join(" ")).join(" ");};

                // ── PROJECTS: name, ID, client, type, artist, notes, log comments, all stage data fields ──
                prjs.forEach(p=>{
                  const logText=(p.log||[]).map(l=>l.m+" "+l.u).join(" ");
                  const changeText=(p.changelog||[]).map(c=>c.changes?.map(x=>x.field+" "+x.from+" "+x.to).join(" ")||"").join(" ");
                  const corpus=[p.name,p.id,p.client,p.type||"",p.artist||"",p.notes||"",logText,changeText,sdText(p.sd)].join(" ").toLowerCase();
                  if(corpus.includes(q)){
                    const matchIn=logText.toLowerCase().includes(q)?"log":changeText.toLowerCase().includes(q)?"changelog":sdText(p.sd).toLowerCase().includes(q)?"stage data":"details";
                    hits.push({type:"Project",icon:"📐",label:p.name,sub:p.client+" · "+p.id+(matchIn!=="details"?" · match in "+matchIn:""),action:()=>nav(()=>{setSelId(p.id);setView("lifecycle");})});
                  }
                });

                // ── ESTIMATION QUEUE: client, desc, agentNotes, stoneRec, recReason, files ──
                estQ.forEach(e=>{
                  const corpus=[e.client||"",e.desc||"",e.agentNotes||"",e.stoneRec||"",e.recReason||"",(e.files||[]).join(" ")].join(" ").toLowerCase();
                  if(corpus.includes(q)) hits.push({type:"Quote",icon:"💲",label:e.desc,sub:e.client+" · "+e.status,action:()=>nav(()=>{setView("estimator");setEstView("quotations");})});
                });

                // ── LEADS: company, contact, type, notes, nextNote, src ──
                leads.forEach(l=>{
                  const corpus=[l.company||"",l.contact||"",l.type||"",l.notes||"",l.nextNote||"",l.src||"",l.stage||""].join(" ").toLowerCase();
                  if(corpus.includes(q)) hits.push({type:"Lead",icon:"🎯",label:l.company,sub:l.contact+" · "+l.stage,action:()=>nav(()=>setView("salespipeline"))});
                });

                // ── CONTACTS (both sets) ──
                const ALL_CONTACTS=[
                  {id:"C001",name:"James Whitfield",title:"Principal",company:"RAMSA",email:"j.whitfield@ramsa.com",notes:"Lead contact for facade projects. Former client at SOM."},
                  {id:"C002",name:"Erik Bootsma",title:"Director",company:"Bootsma Abbeys",email:"e.bootsma@bootsma-eu.com",notes:"Demanding but loyal. Prefers weekly calls."},
                  {id:"C003",name:"Daniel Arsham",title:"Artist",company:"Arsham Studio",email:"studio@danielarsham.com",notes:"Eroded Venus project. Fast approvals."},
                  {id:"C004",name:"Claire Fontaine",title:"Dev Manager",company:"Related Companies",email:"c.fontaine@related.com",notes:"Hudson Yards amenity project. Phase 2 in discussion."},
                  {id:"C005",name:"Marcus Chen",title:"Creative Director",company:"Stripe",email:"m.chen@stripe.com",notes:"Stripe HQ lobby logo. Fast turnaround."},
                  {id:"C006",name:"Robert Ashby",title:"Associate Principal",company:"Selldorf Architects",email:"r.ashby@selldorf.com",notes:"Calacatta Gold penthouse. Key repeat client."},
                  {id:"C007",name:"Sophia Laurent",title:"GM",company:"The Greenwich Hotel",email:"s.laurent@greenwichhotel.com",notes:"Bar top + feature wall. Completed Nov 2025."},
                  {id:"C008",name:"Marcus Reid",title:"Public Art Dir.",company:"Brooklyn Public Library",email:"m.reid@bklynlibrary.org",notes:"Commemorative relief. Installed Jan 2026."},
                  {id:"C009",name:"André Leblanc",title:"COO",company:"Rosewood Hotels",email:"a.leblanc@rosewoodhotels.com",notes:"Dallas lobby quote sent. 72hr window."},
                  {id:"C010",name:"Sarah Moore",title:"Curator",company:"Gagosian Gallery",email:"s.moore@gagosian.com",notes:"Group show inquiry. Referral from Arsham."},
                ];
                ALL_CONTACTS.forEach(c=>{
                  const corpus=[c.name,c.title,c.company,c.email||"",c.notes||"",(c.tags||[]).join(" ")].join(" ").toLowerCase();
                  if(corpus.includes(q)) hits.push({type:"Contact",icon:"👤",label:c.name,sub:c.title+" · "+c.company,action:()=>nav(()=>{setView("estimator");setEstView("contacts");})});
                });

                // ── STONE DB ──
                STONE_DB.forEach(s=>{
                  const corpus=[s.name,s.fam,s.origin,s.role||"",s.pat||"",s.color||""].join(" ").toLowerCase();
                  if(corpus.includes(q)) hits.push({type:"Stone",icon:"🪨",label:s.name,sub:s.fam+" · "+s.origin+" · "+s.role,action:()=>nav(()=>{setView("stonedb");setStDbTab("catalog");})});
                });

                // ── ALERTS & MILESTONES ──
                const ALL_ALERTS=[
                  {id:"A1",m:"KUKA Epsilon — spindle temp anomaly detected.",det:"Spindle temperature reached 87°C. Auto-shutdown triggered.",s:"Robot Monitor",ty:"alert"},
                  {id:"A5",m:"NEH National Garden — maquette review extended to March 1.",det:"Artists under review: Vinnie Bagwell, Preston Jackson, Alison Saar.",s:"Project Management",ty:"decision"},
                  {id:"A9",m:"Benedictine — Bootsma requesting accelerated timeline.",det:"Erik Bootsma requesting completion by April 15 (6 weeks early).",s:"Project Management",ty:"decision"},
                  {id:"A11",m:"Block BLK-2026-0004 — hairline vein near edge.",det:"QA inspection found 12cm hairline vein 3mm from block edge.",s:"QA",ty:"alert"},
                  {id:"A21",m:"PRJ-018 (Lion Pair) — stone sourcing unconfirmed.",det:"Estremoz White blocks still Not ordered. Fabrication blocked.",s:"Supply Chain",ty:"alert"},
                  {id:"A22",m:"Gensler Brooklyn — quote revision requested.",det:"Isabelle Morel requesting 8% price reduction on $280k quote.",s:"Sales",ty:"decision"},
                  {id:"A23",m:"Soho House invoice 67 days overdue.",det:"Thomas Aquino unresponsive. Invoice: $21,000 balance.",s:"Finance",ty:"decision"},
                  {id:"M2",m:"New inquiry: Schwarz Architects — Nashville facade, 32 limestone panels.",det:"David M. Schwarz Architects. Scope: 32 Indiana Limestone panels, $400-500k.",s:"Business Dev",ty:"milestone"},
                  {id:"M5",m:"Quote sent to Rosewood Hotels — $145k grand lobby.",det:"André Leblanc received quote. 72hr decision window.",s:"Sales",ty:"milestone"},
                  {id:"M8",m:"PRJ-003 NEH National Garden — design concept A selected.",det:"Vinnie Bagwell. Maquette approved pending committee March 1.",s:"Project Management",ty:"milestone"},
                ];
                ALL_ALERTS.forEach(a=>{
                  const corpus=[a.m,a.det||"",a.s||"",a.id].join(" ").toLowerCase();
                  if(corpus.includes(q)){
                    const icon=a.ty==="alert"?"⚠️":a.ty==="decision"?"🔴":"🏁";
                    hits.push({type:a.ty==="milestone"?"Milestone":"Alert",icon,label:a.m,sub:a.s+" · "+a.id,action:()=>nav(()=>{setView("alerts");setAlertFilt("All");})});
                  }
                });

                // ── ROBOTS & CARVERS ──
                ROBOTS.forEach(r=>{
                  if((r.name+r.status+(r.op||"")).toLowerCase().includes(q)) hits.push({type:"Robot",icon:"🤖",label:r.name,sub:r.status+(r.prj?" · "+r.prj:""),action:()=>nav(()=>setView("capacity"))});
                });
                CARVERS.forEach(c=>{
                  if((c.name+c.spec+c.status).toLowerCase().includes(q)) hits.push({type:"Carver",icon:"✋",label:c.name,sub:c.spec+" · "+c.status,action:()=>nav(()=>setView("capacity"))});
                });

                // ── PAGES ──
                [{k:"lifecycle",l:"Projects",i:"📋"},{k:"financials",l:"Financials",i:"💰"},{k:"capacity",l:"Capacity",i:"▦"},{k:"salespipeline",l:"Sales Pipeline",i:"🎯"},{k:"stonedb",l:"Materials",i:"🪨"},{k:"estimator",l:"Sales & Quoting",i:"💲"},{k:"alerts",l:"Mission Control Log",i:"⚡"},{k:"macro",l:"Macro Pulse",i:"📈"}].filter(p=>p.l.toLowerCase().includes(q)).forEach(p=>hits.push({type:"Page",icon:p.i,label:p.l,sub:"Navigate to section",action:()=>nav(()=>setView(p.k))}));

                const typeOrder=["Project","Quote","Lead","Contact","Stone","Milestone","Alert","Chat","Robot","Carver","Page"];
                hits.sort((a,b)=>typeOrder.indexOf(a.type)-typeOrder.indexOf(b.type));
                const deduped=hits.filter((h,i)=>hits.findIndex(x=>x.label===h.label&&x.type===h.type)===i);

                const typeGroups=[...new Set(deduped.map(r=>r.type))];
                const summary=deduped.length>0
                  ? `${deduped.length} result${deduped.length!==1?"s":""} across ${typeGroups.join(", ")}`
                  : `No matches for "${gSearch}" — try client names, project IDs, stone types, or keywords from notes and comments`;

                return <div style={{position:"absolute",top:"calc(100% + 6px)",right:0,width:400,maxHeight:480,background:"#1a1816",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,overflow:"hidden",display:"flex",flexDirection:"column",zIndex:300,boxShadow:"0 12px 40px rgba(0,0,0,.7)"}}>
                  <div style={{padding:"8px 12px",borderBottom:"1px solid rgba(255,255,255,.06)",background:"rgba(167,139,250,.06)",display:"flex",gap:6,alignItems:"flex-start",flexShrink:0}}>
                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" style={{marginTop:2,flexShrink:0}}><path d="M6.5 1L7.8 4.7H11.5L8.4 7L9.5 10.7L6.5 8.5L3.5 10.7L4.6 7L1.5 4.7H5.2L6.5 1Z" fill="#a78bfa" opacity=".9"/></svg>
                    <span style={{fontSize:14,color:"#a78bfa",lineHeight:1.5}}>{summary}</span>
                  </div>
                  <div style={{overflowY:"auto",flex:1}}>
                    {deduped.length===0&&<div style={{padding:"20px 12px",fontSize:14,color:"#4a4540",fontStyle:"italic",textAlign:"center"}}>No results found</div>}
                    {deduped.slice(0,12).map((r,i)=><div key={i} onClick={r.action} style={{padding:"8px 12px",cursor:"pointer",display:"flex",gap:10,alignItems:"center",borderBottom:"1px solid rgba(255,255,255,.025)"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.04)"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                      <span style={{fontSize:14,flexShrink:0,width:20,textAlign:"center"}}>{r.icon}</span>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontSize:14,color:"#e2e0dc",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.label}</div>
                        <div style={{fontSize:10,color:"#706b63",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.sub}</div>
                      </div>
                      <span style={{fontSize:10,color:"#4a4540",textTransform:"uppercase",letterSpacing:".4px",flexShrink:0,background:"rgba(255,255,255,.04)",padding:"2px 5px",borderRadius:4,whiteSpace:"nowrap"}}>{r.type}</span>
                    </div>)}
                    {deduped.length>12&&<div style={{padding:"8px 12px",fontSize:10,color:"#4a4540",textAlign:"center",borderTop:"1px solid rgba(255,255,255,.04)"}}>+{deduped.length-12} more results — refine your search</div>}
                  </div>
                </div>;
              })()}
            </div>
            <div style={{width:1,background:"rgba(255,255,255,.06)",height:20,flexShrink:0}}/>
            <button onClick={()=>setMcPanelOpen(o=>!o)} style={{display:"flex",alignItems:"center",gap:5,padding:"4px 11px 4px 8px",borderRadius:6,background:mcPanelOpen?"rgba(196,168,130,.15)":"rgba(196,168,130,.06)",border:mcPanelOpen?"1px solid rgba(196,168,130,.35)":"1px solid rgba(196,168,130,.12)",cursor:"pointer",transition:"all .15s",position:"relative"}}>
              <div style={{position:"relative",display:"flex",alignItems:"center"}}>
                <svg width="11" height="14" viewBox="0 0 10 16" fill="none"><path d="M6 0L0 9h4.5L4 16l6-9H5.5L6 0z" fill="#c4a882"/></svg>
                <span style={{position:"absolute",top:-5,right:-7,background:mcBadgeCount>0?"#ef4444":"#22c55e",color:"#fff",fontSize:10,fontWeight:700,borderRadius:8,minWidth:14,height:14,display:mcBadgeCount>0?"flex":"none",alignItems:"center",justifyContent:"center",padding:"0 3px",fontFamily:M,lineHeight:1}}>{mcBadgeCount}</span>
              </div>
              <span style={{fontSize:14,fontWeight:400,color:"#c4a882",fontFamily:S,whiteSpace:"nowrap",letterSpacing:"-.1px"}}>Mission Control</span>
            </button>

          </div>

        </div>;
      })()}

      <div style={{flex:1,overflow:"hidden",display:"flex"}}>
        {/* LEFT SIDEBAR */}
        <div style={{width:(sideOpen||sidebarPinned)?200:0,overflow:"hidden",transition:"width .2s ease",borderRight:(sideOpen||sidebarPinned)?"1px solid rgba(255,255,255,.06)":"none",background:"rgba(255,255,255,.006)",flexShrink:0,display:"flex",flexDirection:"column"}}>
          <div style={{padding:"14px 8px 8px",flex:1,overflowY:"auto"}}>
            <div style={{fontSize:10,color:"#3a3530",textTransform:"uppercase",letterSpacing:1.8,padding:"0 10px",marginBottom:4,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"space-between"}}>Activities<button onClick={()=>setSidebarPinned(p=>!p)} title={sidebarPinned?"Unpin sidebar":"Pin sidebar open"} style={{background:"none",border:"none",cursor:"pointer",color:sidebarPinned?"#60a5fa":"#706b63",padding:0,lineHeight:1,display:"flex",alignItems:"center",transition:"color .15s, transform .15s",transform:sidebarPinned?"rotate(0deg)":"rotate(45deg)",transformOrigin:"center"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17v5"/><path d="M5 17h14"/><path d="M15 3.5L9.5 9c-.3.3-.5.7-.5 1.1V13h6v-2.9c0-.4-.2-.8-.5-1.1L9 3.5"/><path d="M9 3.5A2 2 0 0 1 10.6 3h2.8A2 2 0 0 1 15 3.5" fill={sidebarPinned?"currentColor":"none"}/></svg></button></div>
            {NAV.filter(n=>n.sec==="activities").map(n=><button key={n.k} className="navbtn" onClick={()=>{setMcOrigin(n.k);setView(n.k);setExpS(null);setEditing(false);setNewMenuOpen(false);setSideOpen(false);if(n.k==="procurement")setStDbTab("orders");}} style={{display:"flex",alignItems:"center",gap:8,width:"100%",textAlign:"left",background:(view===n.k||(view==="mission"&&mcOrigin===n.k))?"rgba(196,168,130,.08)":"transparent",border:"none",borderLeft:(view===n.k||(view==="mission"&&mcOrigin===n.k))?`2px solid ${G}`:"2px solid transparent",color:(view===n.k||(view==="mission"&&mcOrigin===n.k))?"#e2d9cc":"#706b63",fontSize:14,fontWeight:(view===n.k||(view==="mission"&&mcOrigin===n.k))?500:400,padding:"6px 10px 6px 8px",cursor:"pointer",fontFamily:S,marginBottom:0}}>
              <span style={{fontSize:10,width:16,textAlign:"center",flexShrink:0,color:(view===n.k||(view==="mission"&&mcOrigin===n.k))?G:"#4a4540"}}>{n.i}</span>
              {n.l}
            </button>)}

            <div style={{fontSize:10,color:"#3a3530",textTransform:"uppercase",letterSpacing:1.8,padding:"0 10px",marginTop:16,marginBottom:4,fontWeight:700}}>Resources</div>
            {NAV.filter(n=>n.sec==="resources").map(n=><button key={n.k} className="navbtn" onClick={()=>{setMcOrigin(n.k);setView(n.k);setExpS(null);setEditing(false);setNewMenuOpen(false);setSideOpen(false);if(n.k==="stonedb")setStDbTab("catalog");if(n.k==="financials")setFinTab("overview");}} style={{display:"flex",alignItems:"center",gap:8,width:"100%",textAlign:"left",background:(view===n.k||(view==="mission"&&mcOrigin===n.k))?"rgba(196,168,130,.08)":"transparent",border:"none",borderLeft:(view===n.k||(view==="mission"&&mcOrigin===n.k))?`2px solid ${G}`:"2px solid transparent",color:(view===n.k||(view==="mission"&&mcOrigin===n.k))?"#e2d9cc":"#706b63",fontSize:14,fontWeight:(view===n.k||(view==="mission"&&mcOrigin===n.k))?500:400,padding:"6px 10px 6px 8px",cursor:"pointer",fontFamily:S,marginBottom:0}}>
              <span style={{fontSize:10,width:16,textAlign:"center",flexShrink:0,color:(view===n.k||(view==="mission"&&mcOrigin===n.k))?G:"#4a4540"}}>{n.i}</span>
              {n.l}
            </button>)}

            <div style={{fontSize:10,color:"#3a3530",textTransform:"uppercase",letterSpacing:1.8,padding:"0 10px",marginTop:16,marginBottom:4,fontWeight:700}}>Tools</div>
            {NAV.filter(n=>n.sec==="tools").map(n=><button key={n.k} className="navbtn" onClick={()=>{setMcOrigin(n.k);setView(n.k);setExpS(null);setEditing(false);setNewMenuOpen(false);setSideOpen(false);if(n.k==="estimate")setEstView("manual");if(n.k==="invoice")setFinTab("invoices");}} style={{display:"flex",alignItems:"center",gap:8,width:"100%",textAlign:"left",background:(view===n.k||(view==="mission"&&mcOrigin===n.k))?"rgba(196,168,130,.08)":"transparent",border:"none",borderLeft:(view===n.k||(view==="mission"&&mcOrigin===n.k))?`2px solid ${G}`:"2px solid transparent",color:(view===n.k||(view==="mission"&&mcOrigin===n.k))?"#e2d9cc":"#706b63",fontSize:14,fontWeight:(view===n.k||(view==="mission"&&mcOrigin===n.k))?500:400,padding:"6px 10px 6px 8px",cursor:"pointer",fontFamily:S,marginBottom:0}}>
              <span style={{fontSize:10,width:16,textAlign:"center",flexShrink:0,color:(view===n.k||(view==="mission"&&mcOrigin===n.k))?G:"#4a4540"}}>{n.i}</span>
              {n.l}
            </button>)}
          </div>
          <div style={{padding:"8px",borderTop:"1px solid rgba(255,255,255,.04)"}}>
            <button className="navbtn" style={{display:"flex",alignItems:"center",gap:8,width:"100%",textAlign:"left",color:"#4a4540",fontSize:14,padding:"6px 10px",borderRadius:6,cursor:"pointer",fontFamily:S,border:"none",background:"transparent"}}>
              <span style={{fontSize:14}}>⚙</span> Settings
            </button>
          </div>
        </div>


      
      {/* ═══ MISSION CONTROL — Context-aware section dashboards ═══ */}
      {/* ═══ VIEW ROUTING ═══ */}
      <MissionDashboards ctx={ctx}/>
      <LifecycleView ctx={ctx}/>
      <EstimatorView ctx={ctx}/>
      <FinancialsView ctx={ctx}/>
      <MacroPulseView ctx={ctx}/>
      <ProcurementView ctx={ctx}/>
      <AlertsLogView ctx={ctx}/>
      <SalesPipelineView ctx={ctx}/>
      <CapacityView ctx={ctx}/>
      <CalendarView ctx={ctx}/>
      <MCPanelView ctx={ctx}/>
      <MarketingView ctx={ctx}/>
      <RobotsView ctx={ctx}/>
      <ScenarioView ctx={ctx}/>

      {/* ═══ PLACEHOLDER VIEWS — remaining nav items ═══ */}
      {["quote"].includes(view)&&<div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,color:"#4a4540",overflow:"hidden"}}>
        <div style={{fontSize:48,opacity:.2}}>{NAV.find(n=>n.k===view)?.i||"◇"}</div>
        <div style={{fontSize:22,fontWeight:700,color:"#706b63",fontFamily:D}}>{VIEW_CFG[view]?.title||view}</div>
        <div style={{fontSize:14,color:"#4a4540",maxWidth:400,textAlign:"center",lineHeight:1.6}}>This section is under development. Content will be available soon.</div>
        <div style={{marginTop:8,padding:"6px 14px",borderRadius:6,background:"rgba(196,168,130,.06)",border:"1px solid rgba(196,168,130,.12)",fontSize:12,color:G}}>Coming soon</div>
      </div>}

      </div>{/* end flex row: sidebar + content */}

      <div style={{height:22,display:"flex",alignItems:"center",gap:16,padding:"0 16px",borderTop:"1px solid rgba(255,255,255,.04)",background:"rgba(255,255,255,.008)",flexShrink:0}}>
        <span style={{fontSize:10,fontFamily:M,color:"#3a3530",display:"flex",alignItems:"center",gap:4}}><Dot c="#22c55e"/>{aR} milling</span>
        <span style={{fontSize:10,fontFamily:M,color:"#3a3530",display:"flex",alignItems:"center",gap:4}}><Dot c="#a78bfa"/>{CARVERS.filter(c=>c.status!=="Available").length} carving</span>
        <span style={{fontSize:10,fontFamily:M,color:"#3a3530"}}>{prjs.length} projects</span>
        <span style={{width:1,height:10,background:"rgba(255,255,255,.06)",flexShrink:0}}/>
        <span style={{fontSize:10,fontFamily:M,color:"#3a3530"}}>Pipeline {$(finAdj.tq)}</span>
        <span style={{fontSize:10,fontFamily:M,color:"#3a3530"}}>Receivables {$(finAdj.ar)}</span>
        <span style={{marginLeft:"auto",fontSize:10,fontFamily:M,color:"#2a2520"}}>v1.2.1-alpha</span>
      </div>
    </div>
  );
}

export default App;
