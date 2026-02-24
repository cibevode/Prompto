import React from "react";

export default function CapacityView({ ctx }) {
  const {
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
  } = ctx;

  return (<>
      {view==="capacity"&&<div style={{flex:1,overflowY:"auto",padding:20}}>
        {(()=>{
          const TEAM=[
            {id:"H1",nm:"Marco Valentini",rl:"Master Carver",spec:"Figurative, portrait, classical",prj:"PRJ-003",emp:"Employee",since:"2023",hrs:168,cap:168,skills:["figurative","portrait","classical","marble","restoration"],cert:["Master Guild — Florence","AIC Conservation"],note:"Lead carver. 22 yrs experience. Trained at Accademia di Belle Arti. Best figurative sculptor on staff. Critical path for high-profile projects.",email:"marco@monumentallabs.co",phone:"(718) 555-0101",history:[{prj:"PRJ-003",name:"Benedictine ×12",role:"Lead carver",hrs:32,rating:"Excellent",type:"Architecture",val:210000,stone:"Indiana Limestone",hardness:"3.5",complexity:"Extreme"},{prj:"PRJ-024",name:"Hudson Yards ×32",role:"Lead carver",hrs:180,rating:"Excellent",type:"Architecture",val:450000,stone:"Bianco Carrara C",hardness:"3",complexity:"High"},{prj:"PRJ-026",name:"BPL Relief",role:"Detail finishing",hrs:48,rating:"Excellent",type:"Monument",val:95000,stone:"Indiana Limestone",hardness:"3.5",complexity:"High"}]},
            {id:"H2",nm:"Elena Sorokina",rl:"Master Carver",spec:"Architectural, ornamental detail",prj:"PRJ-005",emp:"Employee",since:"2023",hrs:160,cap:168,skills:["architectural","ornamental","marble","granite","lettering"],cert:["Master Guild — Moscow","Stone Federation UK"],note:"Architectural specialist. Exceptional at repeating ornamental patterns. Key for RAMSA and Benedictine-type work. Currently on Arsham Venus — unusual for her but broadening range.",email:"elena@monumentallabs.co",phone:"(718) 555-0102",history:[{prj:"PRJ-005",name:"Arsham Venus",role:"Lead carver",hrs:28,rating:"Excellent",type:"Fine Art",val:85000,stone:"Calacatta Gold",hardness:"3",complexity:"High"},{prj:"PRJ-012",name:"RAMSA Facade ×24",role:"Detail finishing",hrs:96,rating:"Excellent",type:"Architecture",val:375000,stone:"Indiana Limestone",hardness:"3.5",complexity:"Medium"},{prj:"PRJ-025",name:"Selldorf Stair",role:"Lead carver",hrs:64,rating:"Excellent",type:"Architecture",val:190000,stone:"Calacatta Gold",hardness:"3",complexity:"High"}]},
            {id:"H3",nm:"James Kowalski",rl:"Carver",spec:"Ornamental, hand lettering",prj:null,emp:"Contractor",since:"2024",hrs:0,cap:168,skills:["ornamental","lettering","limestone","sandstone"],cert:[],note:"Freelance carver. Available for project work. Strong lettering skills — ideal for monument inscriptions. Contract rate: $58/hr. Next availability: immediate.",contract:"Month-to-month",rate:"$58/hr",email:"james.k@gmail.com",phone:"(347) 555-0203",history:[{prj:"PRJ-026",name:"BPL Relief",role:"Lettering",hrs:24,rating:"Good",type:"Monument",val:95000,stone:"Indiana Limestone",hardness:"3.5",complexity:"Medium"},{prj:"PRJ-024",name:"Hudson Yards ×32",role:"Ornamental detail",hrs:40,rating:"Good",type:"Architecture",val:450000,stone:"Bianco Carrara C",hardness:"3",complexity:"Medium"}]},
            {id:"H4",nm:"Sofia Reyes",rl:"Master Carver",spec:"Figurative, contemporary sculpture",prj:"PRJ-007",emp:"Employee",since:"2023",hrs:152,cap:168,skills:["figurative","contemporary","marble","mixed-media"],cert:["MFA Sculpture — RISD"],note:"Youngest master carver. Exceptional at bridging traditional technique with contemporary aesthetics. Perfect for artist collaborations. Currently leading NEH Douglass sculpt.",email:"sofia@monumentallabs.co",phone:"(718) 555-0104",history:[{prj:"PRJ-007",name:"NEH Douglass",role:"Lead carver",hrs:12,rating:"In progress",type:"Monument",val:100000,stone:"Carrara White CD",hardness:"3",complexity:"Extreme"},{prj:"PRJ-005",name:"Arsham Venus",role:"Consultation",hrs:8,rating:"Excellent",type:"Fine Art",val:85000,stone:"Calacatta Gold",hardness:"3",complexity:"High"},{prj:"PRJ-029",name:"Greenwich Hotel",role:"Lead carver",hrs:36,rating:"Excellent",type:"Hospitality",val:68000,stone:"Roman Travertine",hardness:"4",complexity:"Medium"}]},
            {id:"H5",nm:"David Mitchell",rl:"Carver",spec:"Restoration, heritage matching",prj:"PRJ-001",emp:"Employee",since:"2024",hrs:140,cap:168,skills:["restoration","heritage","limestone","patina-matching"],cert:["AIC — Historic Preservation"],note:"Restoration specialist. Critical for Villard Houses. Can match 19th-century tooling marks. Only person qualified for heritage patina work.",email:"david@monumentallabs.co",phone:"(718) 555-0105",history:[{prj:"PRJ-001",name:"Villard Houses",role:"Lead restorer",hrs:18,rating:"Excellent",type:"Restoration",val:52000,stone:"Carrara White CD",hardness:"3",complexity:"High"},{prj:"PRJ-022",name:"Carnegie Rosette",role:"Heritage consult",hrs:4,rating:"Excellent",type:"Restoration",val:28000,stone:"Jura Beige",hardness:"3.5",complexity:"High"}]},
            {id:"H6",nm:"Amir Zarrabi",rl:"Design Lead",spec:"Digital / CAD / Toolpath",prj:"PRJ-007",emp:"Employee",since:"2023",hrs:160,cap:168,skills:["rhino","grasshopper","powermill","zbrush","3d-scan"],cert:["MSc Computational Design — ETH Zürich"],note:"Owns the full digital pipeline: 3D scan → Rhino/Grasshopper → PowerMill toolpath. Bottleneck risk — only person who can generate production toolpaths. Training Carlos as backup.",email:"amir@monumentallabs.co",phone:"(718) 555-0106",history:[{prj:"PRJ-007",name:"NEH Douglass",role:"Design lead",hrs:40,rating:"In progress",type:"Monument",val:100000,stone:"Carrara White CD",hardness:"3",complexity:"Extreme"},{prj:"PRJ-012",name:"RAMSA Facade ×24",role:"Toolpath",hrs:80,rating:"Excellent",type:"Architecture",val:375000,stone:"Indiana Limestone",hardness:"3.5",complexity:"Medium"},{prj:"PRJ-005",name:"Arsham Venus",role:"3D scan + toolpath",hrs:24,rating:"Excellent",type:"Fine Art",val:85000,stone:"Calacatta Gold",hardness:"3",complexity:"High"},{prj:"PRJ-003",name:"Benedictine ×12",role:"Toolpath",hrs:60,rating:"Excellent",type:"Architecture",val:210000,stone:"Indiana Limestone",hardness:"3.5",complexity:"Extreme"}]},
            {id:"H7",nm:"Carlos Medina",rl:"CNC Operator",spec:"Robot operations, setup, calibration",prj:"PRJ-012",emp:"Employee",since:"2024",hrs:168,cap:168,skills:["kuka-ops","robot-calibration","fixture-setup","overnight-monitoring"],cert:["KUKA Certified Operator"],note:"Runs all 7 robots. Night shift monitoring. Learning PowerMill from Amir. At full capacity — if we add robots, we need a second operator.",email:"carlos@monumentallabs.co",phone:"(718) 555-0107",history:[{prj:"PRJ-012",name:"RAMSA Facade ×24",role:"Robot operator",hrs:168,rating:"Good",type:"Architecture",val:375000,stone:"Indiana Limestone",hardness:"3.5",complexity:"Medium"},{prj:"PRJ-003",name:"Benedictine ×12",role:"Robot operator",hrs:168,rating:"Good",type:"Architecture",val:210000,stone:"Indiana Limestone",hardness:"3.5",complexity:"Extreme"},{prj:"PRJ-015",name:"Stripe Logo",role:"Setup + run",hrs:12,rating:"Excellent",type:"Corporate",val:18000,stone:"Calacatta Gold",hardness:"3",complexity:"Low"}]},
            {id:"H8",nm:"Priya Narayan",rl:"Sales Lead",spec:"Client relations, estimation",prj:null,emp:"Employee",since:"2024",hrs:120,cap:168,skills:["client-management","estimation","quoting","presentations"],cert:[],note:"Manages full sales pipeline. Handles estimation for new inquiries. Currently carrying 8 active leads. Workload manageable but will need support if pipeline grows past 12 leads.",email:"priya@monumentallabs.co",phone:"(718) 555-0108",history:[]},
            {id:"H9",nm:"Tomasz Nowak",rl:"QA Inspector",spec:"Dimensional QA, surface grading",prj:null,emp:"Contractor",since:"2024",hrs:80,cap:168,skills:["dimensional-inspection","surface-grading","crating","shipping"],cert:["ISO 9001 Internal Auditor"],note:"Part-time QA. Inspects completed pieces, grades surfaces, oversees crating. Available 3 days/week. Reliable but limited hours — bottleneck during multi-delivery weeks.",contract:"3 days/week",rate:"$52/hr",email:"tomasz.nowak@qaconsult.com",phone:"(347) 555-0209",history:[{prj:"PRJ-024",name:"Hudson Yards ×32",role:"QA + crating",hrs:64,rating:"Excellent",type:"Architecture",val:450000,stone:"Bianco Carrara C",hardness:"3",complexity:"Medium"},{prj:"PRJ-012",name:"RAMSA Facade ×24",role:"QA inspection",hrs:24,rating:"Good",type:"Architecture",val:375000,stone:"Indiana Limestone",hardness:"3.5",complexity:"Medium"}]},
            {id:"H10",nm:"Ling Chen",rl:"Finance",spec:"AR/AP, invoicing, cash flow",prj:null,emp:"Employee",since:"2024",hrs:140,cap:168,skills:["quickbooks","invoicing","ar-collections","cash-flow","tax"],cert:["CPA — NY State"],note:"Handles all financials. Soho House collections situation is ongoing — escalation needed. Manages cash flow forecasting. Also handles stone purchase orders and supplier payments.",email:"ling@monumentallabs.co",phone:"(718) 555-0110",history:[]},
            {id:"H11",nm:"Roberto Fiore",rl:"Shop Manager",spec:"Operations, logistics, safety",prj:null,emp:"Employee",since:"2023",hrs:168,cap:168,skills:["operations","logistics","safety","inventory","facilities"],cert:["OSHA 30","Forklift Certified"],note:"Runs the physical shop. Manages receiving, inventory, safety protocols, equipment maintenance scheduling. Point person for all deliveries and site logistics. Working at full capacity.",email:"roberto@monumentallabs.co",phone:"(718) 555-0111",history:[]},
            {id:"H12",nm:"Nina Vasquez",rl:"Marketing",spec:"Content, social, brand",prj:null,emp:"Contractor",since:"2025",hrs:100,cap:168,skills:["content-creation","social-media","photography","copywriting","seo"],cert:[],note:"Manages all marketing output. Content calendar, social media, photography coordination. Contractor — 25 hrs/week. If content volume increases, may need to convert to full-time or add freelancer.",contract:"25 hrs/week",rate:"$65/hr",email:"nina.v@creativeconsult.co",phone:"(917) 555-0312",history:[]},
          ];
          const CLIENTS=[
            {id:"CL1",nm:"James Whitfield",co:"RAMSA Partners",rl:"Dir. of Design",val:375000,prjs:1,st:"Active",lt:"Feb 14",email:"j.whitfield@ramsa.com",phone:"(212) 555-0134",notes:"Key relationship — RAMSA is our largest client. James drives all stone decisions. Prefers email. Met at AIA conference 2023.",history:[{prj:"PRJ-012",name:"RAMSA Facade ×24",type:"Architecture",stone:"Indiana Limestone",cost:318000,quoted:375000,margin:15.2,status:"Active"}]},
            {id:"CL2",nm:"Erik Bootsma",co:"Benedictine Abbey",rl:"Project Manager",val:210000,prjs:1,st:"Active",lt:"Feb 18",email:"e.bootsma@benedictine.org",phone:"(507) 555-0198",notes:"Patient, detail-oriented. Restoration must match 1880s original. Send progress photos weekly.",history:[{prj:"PRJ-003",name:"Benedictine ×12",type:"Restoration",stone:"Indiana Limestone",cost:180000,quoted:210000,margin:14.3,status:"Active"}]},
            {id:"CL3",nm:"Stella Park",co:"Arsham Studio",rl:"Studio Director",val:85000,prjs:1,st:"Active",lt:"Jan 30",email:"stella@arshamstudio.com",phone:"(646) 555-0276",notes:"Creative collaborator. Daniel Arsham signs off on everything but Stella manages day-to-day. Fast email responder.",history:[{prj:"PRJ-005",name:"Arsham Venus",type:"Fine Art",stone:"Calacatta Gold",cost:70000,quoted:85000,margin:17.6,status:"Active"}]},
            {id:"CL4",nm:"Marcus Chen",co:"Stripe",rl:"Creative Director",val:18000,prjs:1,st:"Active",lt:"Feb 19",email:"marcus@stripe.com",phone:"(415) 555-0322",notes:"Tech company client. Quick decisions, big budget potential. Logo project could lead to office lobby commission.",history:[{prj:"PRJ-015",name:"Stripe Logo",type:"Corporate",stone:"Calacatta Gold",cost:13000,quoted:18000,margin:27.8,status:"Active"}]},
            {id:"CL5",nm:"Thomas Aquino",co:"Soho House NYC",rl:"Facilities Dir.",val:42000,prjs:1,st:"Overdue",lt:"Jan 14",email:"t.aquino@sohohouse.com",phone:"(212) 555-0488",notes:"⚠ Payment overdue 45+ days. Escalate to CFO. Otherwise good relationship — repeat client potential for other Soho House locations.",history:[{prj:"PRJ-028",name:"Soho House Bar",type:"Hospitality",stone:"Nero Marquina",cost:34000,quoted:42000,margin:19.0,status:"Invoiced"}]},
            {id:"CL6",nm:"Julia Torres",co:"NYC Parks",rl:"Public Art",val:0,prjs:0,st:"Prospect",lt:"Feb 5",email:"j.torres@parks.nyc.gov",phone:"(212) 555-0611",notes:"Public art program. Budget cycles are annual — RFP expected Q2. Could be $200k+ for Central Park commission.",history:[]},
            {id:"CL7",nm:"André Leblanc",co:"Rosewood Hotels",rl:"COO",val:0,prjs:0,st:"Prospect",lt:"Feb 19",email:"a.leblanc@rosewoodhotels.com",phone:"(212) 555-0733",notes:"Rosewood lobby redesign. Spec samples sent. Decision expected March. $145k estimated if won.",history:[]},
            {id:"CL8",nm:"Isabelle Morel",co:"Gensler NY",rl:"Senior Partner",val:0,prjs:0,st:"Lead",lt:"Feb 5",email:"i.morel@gensler.com",phone:"(212) 555-0855",notes:"Architecture firm lead. Could bring multiple projects. Interested in CNC capabilities for facade panels.",history:[]},
            {id:"CL9",nm:"Dr. Sarah Whitmore",co:"NEH",rl:"Program Director",val:100000,prjs:1,st:"Active",lt:"Feb 10",email:"s.whitmore@neh.gov",phone:"(202) 555-0912",notes:"Government client. Formal communication. All changes require written approval. Budget is fixed — no overruns.",history:[{prj:"PRJ-007",name:"NEH Douglass",type:"Monument",stone:"Carrara White CD",cost:95000,quoted:100000,margin:5.0,status:"Active"}]},
            {id:"CL10",nm:"Dev Team",co:"Related Companies",rl:"Development",val:115000,prjs:1,st:"Active",lt:"Feb 12",email:"dev@related.com",phone:"(212) 555-1034",notes:"Major NYC developer. Hudson Yards connection. High volume potential but price-sensitive.",history:[{prj:"PRJ-024",name:"Hudson Yards ×32",type:"Architecture",stone:"Bianco Carrara C",cost:95000,quoted:115000,margin:17.4,status:"Won"}]},
            {id:"CL11",nm:"Facilities",co:"Carnegie Hall",rl:"Restoration",val:28000,prjs:1,st:"Active",lt:"Jan 20",email:"facilities@carnegiehall.org",phone:"(212) 555-1156",notes:"Heritage restoration. Jura Beige must match 1891 original exactly. David Mitchell is lead carver.",history:[{prj:"PRJ-022",name:"Carnegie Rosette",type:"Restoration",stone:"Jura Beige",cost:22000,quoted:28000,margin:21.4,status:"Active"}]},
            {id:"CL12",nm:"Anonymous",co:"Private Collector",rl:"—",val:44000,prjs:1,st:"Active",lt:"Feb 16",email:"via.agent@christies.com",phone:"—",notes:"Private collector via Christie's. High net worth. Interested in figurative work. Agent handles all communication.",history:[{prj:"PRJ-030",name:"Private Commission",type:"Fine Art",stone:"Estremoz White",cost:35000,quoted:44000,margin:20.5,status:"Active"}]},
          ];
          const selCl=CLIENTS.find(c=>c.id===capSelClient);
          const SUPS=[
            {id:"S1",nm:"Giovanni Bardi",co:"Tuscan Stone Group",loc:"Carrara, Italy",mat:"Carrara White CD, Calacatta Gold, Statuario, Bianco Carrara C",orders:12,val:89000,rate:4.8,phone:"+39 0585 71234",email:"g.bardi@tuscanstone.it",lead:"3–4 weeks",pay:"Net 30",notes:"Primary Italian supplier. Excellent consistency. Quarry access for block selection. Has supplied 8 of our 14 active projects.",tags:["marble","premium","trusted"],since:"2023"},
            {id:"S2",nm:"Mike Patterson",co:"American Stone Supply",loc:"Bedford, IN",mat:"Indiana Limestone, Salem Limestone",orders:8,val:42000,rate:4.5,phone:"(812) 555-0187",email:"mike@americanstone.com",lead:"1–2 weeks",pay:"Net 15",notes:"Domestic limestone specialist. Fast turnaround. Good for large-format architectural panels. Volume discounts at 20t+.",tags:["limestone","domestic","fast"],since:"2023"},
            {id:"S3",nm:"Raj Mehta",co:"Delhi Granite Exports",loc:"Rajasthan, India",mat:"Absolute Black, Fantasy Brown, Kashmir White",orders:3,val:18000,rate:4.2,phone:"+91 141 555 8834",email:"raj@delhigranite.in",lead:"5–6 weeks",pay:"50% advance, 50% on ship",notes:"Competitive granite pricing. Longer lead times due to shipping. Quality occasionally inconsistent — always request sample slab. Currency: quote in USD.",tags:["granite","budget","international"],since:"2024"},
            {id:"S4",nm:"Ana Ferreira",co:"Alentejo Marble SA",loc:"Estremoz, Portugal",mat:"Estremoz White, Rosa Aurora, Ruivina Dark",orders:2,val:12000,rate:4.6,phone:"+351 268 555 901",email:"ana@alentejo-marble.pt",lead:"3–4 weeks",pay:"Net 30",notes:"Premium Portuguese marble. Estremoz White is best-in-class for figurative work. Small quarry — limited block sizes. Book early.",tags:["marble","figurative","boutique"],since:"2024"},
            {id:"S5",nm:"Klaus Steinberg",co:"Bavarian Stone Works",loc:"Eichstätt, Germany",mat:"Jura Beige, Jura Grey, Solnhofen",orders:4,val:24000,rate:4.7,phone:"+49 8421 555 112",email:"k.steinberg@bavstone.de",lead:"2–3 weeks",pay:"Net 30",notes:"German precision. Excellent dimensional consistency. Jura Beige ideal for heritage restoration. Provides certified geological reports with every block.",tags:["limestone","heritage","precise"],since:"2023"},
            {id:"S6",nm:"Marco Rossi",co:"Pietra di Rapolano",loc:"Siena, Italy",mat:"Roman Travertine Silver, Travertine Noce, Travertine Gold",orders:3,val:15600,rate:4.4,phone:"+39 0577 72445",email:"m.rossi@rapolano.it",lead:"3–4 weeks",pay:"Net 30",notes:"Specialist travertine supplier. Excellent fill quality. Used for Greenwich Hotel bar top. Can do bookmatched pairs.",tags:["travertine","hospitality","fill"],since:"2024"},
            {id:"S7",nm:"Sarah Kim",co:"Pacific Rim Stone",loc:"Xiamen, China",mat:"Nero Marquina, White Jade, Guangxi White",orders:1,val:6200,rate:3.9,phone:"+86 592 555 7721",email:"sarah@pacrimstone.cn",lead:"6–8 weeks",pay:"100% advance",notes:"Competitive pricing on Chinese marble. Long lead times. Quality control requires pre-shipment inspection. Good for budget projects.",tags:["marble","budget","asia"],since:"2025"},
            {id:"S8",nm:"Tom O'Brien",co:"Vermont Quarries Inc.",loc:"Barre, VT",mat:"Barre Grey Granite, Vermont Verde Antique",orders:2,val:8400,rate:4.3,phone:"(802) 555-0234",email:"tom@vtquarries.com",lead:"1–2 weeks",pay:"Net 15",notes:"Domestic granite and verde antique. Small operation, personal service. Verde Antique sourced from single quarry — limited annual output.",tags:["granite","verde","domestic"],since:"2024"},
          ];
          const INVESTORS=[
            {id:"I1",nm:"Lux Capital",co:"Venture Capital",rl:"Series A Lead",invested:"$4.2M",dt:"2023",ct:"Josh Wolfe"},
            {id:"I2",nm:"Bloomberg Beta",co:"Venture Capital",rl:"Series A",invested:"$1.5M",dt:"2023",ct:"Roy Bahat"},
            {id:"I3",nm:"Y Combinator",co:"Accelerator",rl:"Seed",invested:"$500k",dt:"2022",ct:"YC Partners"},
          ];
          const rlC={"Master Carver":"#a78bfa","Carver":"#60a5fa","Design Lead":"#22c55e","CNC Operator":"#f59e0b","Sales Lead":G,"QA Inspector":"#64748b","Finance":"#a09a92","Shop Manager":"#e2e0dc","Marketing":"#f472b6"};
          const stC={"Active":"#22c55e","Overdue":"#ef4444","Prospect":"#64748b","Lead":"#f59e0b"};
          const PersonRow=({nm,sub,c,right})=><div style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,.03)"}}>
            <div style={{width:32,height:32,borderRadius:16,background:(c||G)+"18",border:`1px solid ${c||G}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:c||G,fontWeight:700,flexShrink:0}}>{nm.split(" ").map(w=>w[0]).join("").slice(0,2)}</div>
            <div style={{flex:1,minWidth:0}}><div style={{fontSize:13,fontWeight:600,color:"#e2e0dc"}}>{nm}</div><div style={{fontSize:11,color:"#706b63"}}>{sub}</div></div>
            {right}
          </div>;
          const activeClients=CLIENTS.filter(c=>c.st==="Active").length;
          const employees=TEAM.filter(t=>t.emp==="Employee").length;
          const contractors=TEAM.filter(t=>t.emp==="Contractor").length;
          const shopFloor=TEAM.filter(t=>["Master Carver","Carver","CNC Operator","QA Inspector"].includes(t.rl));
          const atCapacity=TEAM.filter(t=>t.hrs>=t.cap*0.9).length;
          const selPerson=capSelPerson?TEAM.find(t=>t.id===capSelPerson):null;
          return <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[["Team",TEAM.length,"#60a5fa"],["Employees",employees,"#22c55e"],["Contractors",contractors,"#f59e0b"],["Clients",CLIENTS.length,"#c4a882"],["Suppliers",SUPS.length,"#a78bfa"]].map(([l,v,c],i)=>l?<div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>:<div key={i} style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.03)",borderRadius:6,padding:"12px 14px"}}/>)}
            </div>
            {capTab==="team"&&<div style={{display:"flex",gap:14}}>
              {/* Left: Team list */}
              <div style={{width:300,flexShrink:0}}>
                {TEAM.map(t=>{const prj=prjs.find(p=>p.id===t.prj);const util=Math.round(t.hrs/t.cap*100);return <div key={t.id} onClick={()=>setCapSelPerson(t.id)} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",marginBottom:3,borderRadius:6,background:capSelPerson===t.id?G+"10":"transparent",borderLeft:capSelPerson===t.id?"2px solid "+G:"2px solid transparent",cursor:"pointer"}}>
                  <div style={{width:34,height:34,borderRadius:17,background:(rlC[t.rl]||G)+"18",border:`1.5px solid ${rlC[t.rl]||G}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:rlC[t.rl]||G,fontWeight:700,flexShrink:0}}>{t.nm.split(" ").map(w=>w[0]).join("")}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:5}}>
                      <span style={{fontSize:13,fontWeight:600,color:capSelPerson===t.id?"#e2e0dc":"#a09a92"}}>{t.nm}</span>
                      <span style={{fontSize:9,padding:"2px 6px",borderRadius:4,background:t.emp==="Contractor"?"rgba(245,158,11,.08)":"rgba(34,197,94,.08)",border:t.emp==="Contractor"?"1px solid rgba(245,158,11,.15)":"1px solid rgba(34,197,94,.15)",color:t.emp==="Contractor"?"#f59e0b":"#22c55e",textTransform:"uppercase",fontWeight:700,letterSpacing:".3px"}}>{t.emp==="Contractor"?"CTR":"FTE"}</span>
                    </div>
                    <div style={{fontSize:10,color:"#4a4540"}}>{t.rl} · {prj?prj.name:"Unassigned"}</div>
                  </div>
                  <div style={{width:32,textAlign:"right"}}>
                    <div style={{fontSize:10,fontFamily:M,fontWeight:600,color:util>=90?"#ef4444":util>=70?"#f59e0b":"#22c55e"}}>{util}%</div>
                    <div style={{height:3,width:32,background:"rgba(255,255,255,.06)",borderRadius:4,marginTop:2,overflow:"hidden"}}><div style={{height:"100%",width:util+"%",background:util>=90?"#ef4444":util>=70?"#f59e0b":"#22c55e",borderRadius:4}}/></div>
                  </div>
                </div>;})}
              </div>
              {/* Right: Person detail */}
              <div style={{flex:1}}>
                {selPerson?(()=>{
                  const prj=prjs.find(p=>p.id===selPerson.prj);
                  const util=Math.round(selPerson.hrs/selPerson.cap*100);
                  // Find all projects this person has worked on (by role matching)
                  const relatedPrjs=prjs.filter(p=>{
                    if(p.id===selPerson.prj)return true;
                    if(selPerson.rl==="Master Carver"&&["Hand Polish","QA","Complete","Delivered"].includes(p.status))return Math.random()>0.5;
                    return false;
                  }).slice(0,5);
                  return <div>
                    {/* Header */}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                      <div style={{display:"flex",gap:12,alignItems:"center"}}>
                        <div style={{width:48,height:48,borderRadius:24,background:(rlC[selPerson.rl]||G)+"18",border:`2px solid ${rlC[selPerson.rl]||G}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:rlC[selPerson.rl]||G,fontWeight:700}}>{selPerson.nm.split(" ").map(w=>w[0]).join("")}</div>
                        <div>
                          <div style={{display:"flex",alignItems:"center",gap:8}}>
                            <span style={{fontSize:20,fontWeight:700,color:"#e2e0dc"}}>{selPerson.nm}</span>
                            <span style={{fontSize:9,padding:"2px 7px",borderRadius:4,fontWeight:700,textTransform:"uppercase",letterSpacing:".3px",background:selPerson.emp==="Contractor"?"rgba(245,158,11,.08)":"rgba(34,197,94,.08)",border:selPerson.emp==="Contractor"?"1px solid rgba(245,158,11,.15)":"1px solid rgba(34,197,94,.15)",color:selPerson.emp==="Contractor"?"#f59e0b":"#22c55e"}}>{selPerson.emp}</span>
                          </div>
                          <div style={{fontSize:12,color:"#706b63"}}>{selPerson.rl} · Since {selPerson.since}{selPerson.contract?" · "+selPerson.contract:""}{selPerson.rate?" · "+selPerson.rate:""}</div>
                        </div>
                      </div>
                      <div style={{display:"flex",gap:6,flexShrink:0}}>
                        <Btn small color="#60a5fa">📧 Email</Btn>
                        <Btn small color="#a09a92">📞 Call</Btn>
                      </div>
                    </div>
                    {/* KPIs */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:14}}>
                      {[["Utilization",util+"%",util>=90?"#ef4444":util>=70?G:"#22c55e"],["Hours (mo)",selPerson.hrs+"/"+selPerson.cap,"#60a5fa"],["Current",prj?prj.name:"Unassigned",prj?"#60a5fa":"#64748b"],["Status",selPerson.hrs>=selPerson.cap*0.9?"At Capacity":selPerson.hrs===0?"Available":"Active",selPerson.hrs>=selPerson.cap*0.9?"#ef4444":selPerson.hrs===0?"#22c55e":G]].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:BD,borderRadius:6,padding:"8px 12px"}}><div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",letterSpacing:".5px",marginBottom:2}}>{l}</div><div style={{fontSize:14,fontWeight:700,color:c,fontFamily:l==="Current"?S:M}}>{v}</div></div>)}
                    </div>
                    {/* Utilization bar */}
                    <div style={{marginBottom:14}}>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#706b63",marginBottom:3}}><span>Utilization</span><span>{selPerson.hrs}h / {selPerson.cap}h capacity</span></div>
                      <div style={{height:8,background:"rgba(255,255,255,.04)",borderRadius:4,overflow:"hidden"}}><div style={{height:"100%",width:util+"%",background:util>=90?"#ef4444":util>=70?"linear-gradient(90deg,#f59e0b,#ef4444)":"#22c55e",borderRadius:4}}/></div>
                    </div>
                    {/* Contact info */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14,padding:"12px 14px",background:"rgba(255,255,255,.015)",borderRadius:6,border:BD}}>
                      <div><div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:2}}>📧 Email</div><div style={{fontSize:11,color:"#60a5fa"}}>{selPerson.email}</div></div>
                      <div><div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:2}}>📞 Phone</div><div style={{fontSize:11,color:"#a09a92"}}>{selPerson.phone}</div></div>
                    </div>
                    {/* Specialization + Skills */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
                      <div>
                        <div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:4}}>Specialization</div>
                        <div style={{fontSize:12,color:"#e2e0dc"}}>{selPerson.spec}</div>
                      </div>
                      <div>
                        <div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:4}}>Certifications</div>
                        {selPerson.cert.length>0?selPerson.cert.map(c=><div key={c} style={{fontSize:11,color:"#a09a92",lineHeight:1.5}}>✓ {c}</div>):<div style={{fontSize:11,color:"#4a4540"}}>None listed</div>}
                      </div>
                    </div>
                    {/* Skills tags */}
                    <div style={{marginBottom:14}}>
                      <div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:5}}>Skills</div>
                      <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>{selPerson.skills.map(s=><span key={s} style={{fontSize:9,padding:"2px 7px",borderRadius:4,background:"rgba(96,165,250,.06)",border:"1px solid rgba(96,165,250,.12)",color:"#60a5fa"}}>{s}</span>)}</div>
                    </div>
                    {/* Internal notes */}
                    <div style={{marginBottom:14}}>
                      <div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:4}}>Manager Notes</div>
                      <div style={{fontSize:12,color:"#a09a92",lineHeight:1.6,padding:"12px 14px",background:"rgba(255,255,255,.015)",borderRadius:6,border:BD}}>{selPerson.note}</div>
                    </div>
                    {/* Current Assignment */}
                    {prj&&<div style={{marginBottom:14}}>
                      <div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:6}}>Current Assignment</div>
                      <div onClick={()=>{setSelId(prj.id);setView("lifecycle");}} style={{padding:"12px 14px",borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.12)",cursor:"pointer"}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <div><div style={{fontSize:13,fontWeight:600,color:"#e2e0dc"}}>{prj.name}</div><div style={{fontSize:10,color:"#706b63"}}>{prj.id} · {prj.client} · {prj.type}</div></div>
                          <div style={{textAlign:"right"}}><Badge c={STAT_C[prj.status]||G}>{prj.status}</Badge><div style={{fontSize:10,color:"#4a4540",marginTop:2}}>Due {prj.due}</div></div>
                        </div>
                      </div>
                    </div>}
                    {/* Project History */}
                    {selPerson.history&&selPerson.history.length>0&&<div>
                      <div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:6}}>Project History ({selPerson.history.length})</div>
                      <div style={{overflowX:"auto"}}>
                      <table style={{width:"100%",borderCollapse:"collapse",fontSize:11,minWidth:600}}>
                        <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
                          {["Project","Type","Stone","Mohs","Role","Hours","Value","Rating"].map(h=><th key={h} style={{padding:"6px 10px",textAlign:"left",fontSize:9,color:"#4a4540",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)",whiteSpace:"nowrap"}}>{h}</th>)}
                        </tr></thead>
                        <tbody>{selPerson.history.map(h=><tr key={h.prj} style={{borderBottom:"1px solid rgba(255,255,255,.03)",cursor:"pointer"}} onClick={()=>{const p=prjs.find(x=>x.id===h.prj);if(p){setSelId(p.id);setView("lifecycle");}}}>
                          <td style={{padding:"6px 10px"}}><span style={{color:"#60a5fa",fontWeight:500}}>{h.name}</span></td>
                          <td style={{padding:"6px 10px",color:"#a09a92",whiteSpace:"nowrap"}}>{h.type||"—"}</td>
                          <td style={{padding:"6px 10px",color:"#e2e0dc",whiteSpace:"nowrap"}}>{h.stone||"—"}</td>
                          <td style={{padding:"6px 10px",fontFamily:M,color:Number(h.hardness)>=5?"#ef4444":Number(h.hardness)>=4?"#f59e0b":"#a09a92",fontWeight:600}}>{h.hardness||"—"}</td>
                          <td style={{padding:"6px 10px",color:"#a09a92"}}>{h.role}</td>
                          <td style={{padding:"6px 10px",fontFamily:M,color:G}}>{h.hrs}h</td>
                          <td style={{padding:"6px 10px",fontFamily:M,color:"#a09a92"}}>{h.val?"$"+(h.val/1000)+"k":"—"}</td>
                          <td style={{padding:"6px 10px",color:h.rating==="Excellent"?"#22c55e":h.rating==="Good"?"#60a5fa":"#a09a92",fontWeight:500}}>{h.rating}</td>
                        </tr>)}</tbody>
                      </table>
                      </div>
                      {/* Experience summary */}
                      {(()=>{const stones=[...new Set(selPerson.history.map(h=>h.stone).filter(Boolean))];const types=[...new Set(selPerson.history.map(h=>h.type).filter(Boolean))];const totalVal=selPerson.history.reduce((s,h)=>s+(h.val||0),0);const totalHrs=selPerson.history.reduce((s,h)=>s+h.hrs,0);return <div style={{display:"flex",gap:12,marginTop:8,flexWrap:"wrap"}}>
                        {stones.length>0&&<div style={{fontSize:10,color:"#706b63"}}>Stones: {stones.map(s=><span key={s} style={{fontSize:9,padding:"2px 6px",borderRadius:4,background:"rgba(196,168,130,.06)",border:"1px solid rgba(196,168,130,.12)",color:G,marginLeft:3}}>{s}</span>)}</div>}
                        <div style={{fontSize:10,color:"#706b63"}}>Types: {types.map(t=><span key={t} style={{fontSize:9,padding:"2px 6px",borderRadius:4,background:"rgba(96,165,250,.06)",border:"1px solid rgba(96,165,250,.12)",color:"#60a5fa",marginLeft:3}}>{t}</span>)}</div>
                        <div style={{fontSize:10,color:"#706b63",marginLeft:"auto",fontFamily:M}}>{totalHrs}h across ${(totalVal/1000).toFixed(0)}k in projects</div>
                      </div>;})()}
                    </div>}
                  </div>;
                })():<div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:40,color:"#4a4540",fontSize:13}}>Select a team member to view profile</div>}
              </div>
            </div>}
            {capTab==="clients"&&<div style={{display:"flex",gap:14}}>
              {/* Left — client list */}
              <div style={{width:300,flexShrink:0}}>
                {CLIENTS.map(c=><div key={c.id} onClick={()=>setCapSelClient(c.id)} style={{padding:"8px 12px",borderRadius:6,marginBottom:2,cursor:"pointer",background:capSelClient===c.id?G+"10":"transparent",borderLeft:capSelClient===c.id?"2px solid "+G:"2px solid transparent"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:13,fontWeight:capSelClient===c.id?600:400,color:capSelClient===c.id?"#e2e0dc":"#a09a92"}}>{c.nm}</span>
                    <Badge c={stC[c.st]||G}>{c.st}</Badge>
                  </div>
                  <div style={{fontSize:11,color:"#706b63",marginTop:1}}>{c.co} · {c.rl}{c.val?` · ${$(c.val)}`:""}</div>
                </div>)}
              </div>
              {/* Right — detail panel */}
              {selCl&&<div style={{flex:1,minWidth:0}}>
                {/* Header */}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <span style={{fontSize:18}}>👤</span>
                      <div>
                        <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc"}}>{selCl.nm}</div>
                        <div style={{fontSize:13,color:"#a09a92"}}>{selCl.rl} · {selCl.co}</div>
                      </div>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:6,flexShrink:0}}>
                    <Btn small color="#22c55e">📝 Create Quote</Btn>
                    <Btn small color="#60a5fa">📧 Send Email</Btn>
                    <Btn small color="#a09a92">📞 Call</Btn>
                  </div>
                </div>
                {/* Contact grid + KPIs */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10,marginBottom:14}}>
                  {[["📧 Email",selCl.email],["📞 Phone",selCl.phone],["🕐 Last Contact",selCl.lt],["💰 Total Value",selCl.val?$(selCl.val):"—"]].map(([l,v])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"8px 12px"}}>
                    <div style={{fontSize:9,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:3}}>{l}</div>
                    <div style={{fontSize:12,color:"#e2e0dc",fontFamily:M,wordBreak:"break-all"}}>{v}</div>
                  </div>)}
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}}>
                  {[["Status",selCl.st,stC[selCl.st]||G],["Projects",selCl.prjs||0,"#e2e0dc"],["Avg Margin",selCl.history.length>0?Math.round(selCl.history.reduce((s,h)=>s+h.margin,0)/selCl.history.length*10)/10+"%":"—","#22c55e"]].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"8px 12px"}}>
                    <div style={{fontSize:9,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:3}}>{l}</div>
                    <div style={{fontSize:14,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
                  </div>)}
                </div>
                {/* Notes */}
                <div style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",marginBottom:14}}>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>Notes</div>
                  <div style={{fontSize:13,color:"#a09a92",lineHeight:1.5}}>{selCl.notes}</div>
                </div>
                {/* Project History */}
                {selCl.history.length>0&&<div>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>Project History</div>
                  <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,overflow:"hidden"}}>
                    <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
                      <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
                        {["Code","Project","Type","Stone","Quoted","Cost","Margin","Status"].map(h=><th key={h} style={{padding:"6px 10px",textAlign:"left",fontSize:9,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}
                      </tr></thead>
                      <tbody>{selCl.history.map((h,i)=><tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                        <td style={{padding:"6px 10px",fontFamily:M,color:"#60a5fa",fontSize:10,cursor:"pointer"}} onClick={()=>{const p=prjs.find(x=>x.id===h.prj);if(p){setSelId(p.id);setView("lifecycle");}}}>{h.prj}</td>
                        <td style={{padding:"6px 10px",fontWeight:600,color:"#e2e0dc"}}>{h.name}</td>
                        <td style={{padding:"6px 10px",color:"#a09a92"}}>{h.type}</td>
                        <td style={{padding:"6px 10px",color:"#a09a92"}}>{h.stone}</td>
                        <td style={{padding:"6px 10px",fontFamily:M,fontWeight:600,color:G}}>{$(h.quoted)}</td>
                        <td style={{padding:"6px 10px",fontFamily:M,color:"#a09a92"}}>{$(h.cost)}</td>
                        <td style={{padding:"6px 10px",fontFamily:M,fontWeight:600,color:h.margin>=20?"#22c55e":h.margin>=15?G:"#f59e0b"}}>{h.margin}%</td>
                        <td style={{padding:"6px 10px"}}><Badge c={h.status==="Active"?"#22c55e":h.status==="Won"?"#60a5fa":"#f59e0b"}>{h.status}</Badge></td>
                      </tr>)}</tbody>
                    </table>
                  </div>
                </div>}
                {selCl.history.length===0&&<div style={{padding:"16px",textAlign:"center",color:"#4a4540",fontSize:13,fontStyle:"italic",background:"rgba(255,255,255,.01)",borderRadius:6,border:"1px dashed rgba(255,255,255,.06)"}}>No project history yet — {selCl.st==="Prospect"?"prospect in pipeline":"convert to active project"}</div>}
              </div>}
            </div>}
            {capTab==="suppliers"&&(()=>{
              const selSup=SUPS.find(s=>s.id===capSelSup);
              // Order history per supplier
              const SUP_ORDERS={
                S1:[
                  {id:"PO-2025-001",dt:"Sep 2025",stone:"Bianco Carrara C",qty:"59.5t (32 slabs)",prj:"PRJ-024 Hudson Yards ×32",cost:109075,status:"Delivered",del:"On time",quality:"A — Zero defects",inv:"INV-TSG-0891",notes:"Largest single order. Bookmatched pairs verified."},
                  {id:"PO-2025-014",dt:"Oct 2025",stone:"Carrara White CD",qty:"0.86t (1 block)",prj:"PRJ-001 Villard Houses",cost:820,status:"Delivered",del:"On time",quality:"A — Heritage match confirmed",inv:"INV-TSG-0903",notes:"Matched 1880s patina requirement."},
                  {id:"PO-2025-022",dt:"Nov 2025",stone:"Calacatta Gold",qty:"1.22t (1 block)",prj:"PRJ-005 Arsham Venus",cost:2928,status:"Delivered",del:"2 days late",quality:"A — Veining aligned per artist spec",inv:"INV-TSG-0918",notes:"Slight delay due to customs. Quality excellent."},
                  {id:"PO-2025-028",dt:"Oct 2025",stone:"Calacatta Gold",qty:"1.12t (1 slab)",prj:"PRJ-025 Selldorf Stair",cost:11200,status:"Delivered",del:"On time",quality:"A — Mirror finish possible",inv:"INV-TSG-0910",notes:"Ultra-thin slab. Handled with extra padding."},
                  {id:"PO-2025-031",dt:"Nov 2025",stone:"Roman Travertine Silver",qty:"0.41t",prj:"PRJ-029 Greenwich Hotel",cost:3900,status:"Delivered",del:"On time",quality:"A — Excellent fill",inv:"INV-TSG-0920",notes:"Subcontracted via Pietra di Rapolano."},
                  {id:"PO-2026-001",dt:"Jan 2026",stone:"Carrara White CD",qty:"2.78t",prj:"PRJ-007 NEH Douglass",cost:0,status:"Not yet ordered",del:"—",quality:"—",inv:"—",notes:"Pending maquette approval. Pre-order recommended before Mar 1 price increase (+4.2%)."},
                  {id:"PO-2026-004",dt:"Jan 2026",stone:"Calacatta Gold",qty:"0.42t (2 blocks)",prj:"PRJ-015 Stripe Logo",cost:4200,status:"Delivered",del:"On time",quality:"B+ — Hairline vein near edge (non-critical)",inv:"INV-TSG-0944",notes:"Block A had 12cm hairline vein. Proceed — carve zone is center-block."},
                ],
                S2:[
                  {id:"PO-2025-008",dt:"Sep 2025",stone:"Indiana Limestone",qty:"16.3t (12 blocks)",prj:"PRJ-003 Benedictine ×12",cost:13860,status:"Delivered",del:"On time",quality:"A — Consistent grain",inv:"INV-ASS-2204",notes:"Bulk order, 20t+ discount applied."},
                  {id:"PO-2025-018",dt:"Aug 2025",stone:"Indiana Limestone",qty:"12.2t (24 panels)",prj:"PRJ-012 RAMSA Facade ×24",cost:10370,status:"Delivered",del:"On time",quality:"A — All panels matched",inv:"INV-ASS-2198",notes:"FOB Bedford. Shipping to Greenpoint $1,200 flat."},
                  {id:"PO-2025-033",dt:"Nov 2025",stone:"Indiana Limestone",qty:"12.6t (1 block)",prj:"PRJ-026 BPL Relief",cost:10710,status:"Delivered",del:"1 day early",quality:"A — Large format, no faults",inv:"INV-ASS-2231",notes:"3.6×2.8×0.5m block. Special flatbed delivery."},
                  {id:"PO-2026-008",dt:"Feb 2026",stone:"Indiana Limestone",qty:"Est. 4.5t",prj:"Restock — general inventory",cost:3825,status:"Quote received",del:"—",quality:"—",inv:"—",notes:"$850/t, 20t min. Valid 30 days. Current inv: 4.5t."},
                ],
                S3:[
                  {id:"PO-2026-005",dt:"Feb 2026",stone:"Absolute Black",qty:"3.1t (8 blocks)",prj:"PRJ-024B Vornado Capitals",cost:5580,status:"Ordered",del:"ETA Mar 20",quality:"—",inv:"INV-DGE-0412",notes:"Diamond tooling required. 50% advance paid."},
                  {id:"PO-2025-027",dt:"Oct 2025",stone:"Absolute Black",qty:"1.8t",prj:"Test blocks — R&D",cost:3240,status:"Delivered",del:"3 days late",quality:"B — 15% color variation",inv:"INV-DGE-0388",notes:"Color inconsistency between blocks. Requested sample slab policy going forward."},
                  {id:"PO-2025-019",dt:"Aug 2025",stone:"Fantasy Brown",qty:"2.4t",prj:"Spec sample — not used",cost:4080,status:"Delivered",del:"On time",quality:"A — Striking pattern",inv:"INV-DGE-0371",notes:"Beautiful material but client chose Calacatta instead."},
                ],
                S4:[
                  {id:"PO-2025-030",dt:"Dec 2025",stone:"Estremoz White",qty:"1.46t",prj:"PRJ-018 Lion Pair ×2",cost:0,status:"Not yet ordered",del:"—",quality:"—",inv:"—",notes:"⚠ BLOCKED — order must be placed by Feb 25 for Mar fabrication start."},
                  {id:"PO-2025-023",dt:"Oct 2025",stone:"Estremoz White",qty:"0.8t (sample blocks)",prj:"Material evaluation",cost:4400,status:"Delivered",del:"On time",quality:"A — Ideal for figurative",inv:"INV-AMS-0156",notes:"Best Estremoz we've seen. Limited quarry — book early."},
                ],
                S5:[
                  {id:"PO-2026-003",dt:"Jan 2026",stone:"Jura Beige",qty:"0.47t",prj:"PRJ-022 Carnegie Rosette",cost:0,status:"Not yet ordered",del:"—",quality:"—",inv:"—",notes:"Pending design approval. Heritage match critical."},
                  {id:"PO-2025-016",dt:"Sep 2025",stone:"Jura Beige",qty:"2.1t",prj:"Test — restoration match",cost:8400,status:"Delivered",del:"On time",quality:"A+ — Certified geological report",inv:"INV-BSW-0733",notes:"Exact match to 1891 Carnegie limestone. Klaus provided full geological cert."},
                  {id:"PO-2025-009",dt:"Jul 2025",stone:"Solnhofen",qty:"0.6t",prj:"Spec library",cost:4800,status:"Delivered",del:"On time",quality:"A — Museum grade",inv:"INV-BSW-0718",notes:"Extremely fine-grained. Excellent for detail work."},
                ],
                S6:[
                  {id:"PO-2025-025",dt:"Sep 2025",stone:"Roman Travertine Silver",qty:"0.41t",prj:"PRJ-029 Greenwich Hotel",cost:3900,status:"Delivered",del:"On time",quality:"A — Mirror polish achieved",inv:"INV-PDR-0089",notes:"Bookmatched bar top. Client ecstatic."},
                  {id:"PO-2025-035",dt:"Nov 2025",stone:"Travertine Noce",qty:"1.2t",prj:"Rosewood lobby concept",cost:5400,status:"Delivered",del:"On time",quality:"A — Excellent fill",inv:"INV-PDR-0102",notes:"Spec sample for Rosewood Hotels RFQ. Fill holes to 95%."},
                ],
                S7:[
                  {id:"PO-2025-032",dt:"Nov 2025",stone:"Nero Marquina",qty:"0.9t",prj:"Spec library",cost:6200,status:"Delivered",del:"8 days late",quality:"B — Minor surface scratches",inv:"INV-PRS-0044",notes:"Pre-shipment inspection missed scratches. Resolved with credit note. Use inspection protocol going forward."},
                ],
                S8:[
                  {id:"PO-2025-020",dt:"Sep 2025",stone:"Vermont Verde Antique",qty:"0.4t",prj:"Spec library",cost:3800,status:"Delivered",del:"On time",quality:"A — Unique veining",inv:"INV-VQI-0167",notes:"Single-quarry source. Annual output limited — must pre-book for 2026."},
                  {id:"PO-2025-026",dt:"Oct 2025",stone:"Barre Grey Granite",qty:"1.6t",prj:"Material testing",cost:4600,status:"Delivered",del:"On time",quality:"A — Uniform grain",inv:"INV-VQI-0172",notes:"Hardness ideal for exterior. Domestic shipping advantage."},
                ],
              };
              const orders=SUP_ORDERS[capSelSup]||[];
              const delivered=orders.filter(o=>o.status==="Delivered");
              const onTime=delivered.filter(o=>o.del==="On time"||o.del.includes("early"));
              const otRate=delivered.length>0?Math.round(onTime.length/delivered.length*100):0;
              const gradeA=delivered.filter(o=>o.quality.startsWith("A"));
              const qRate=delivered.length>0?Math.round(gradeA.length/delivered.length*100):0;
              const openIssues=orders.filter(o=>o.status==="Not yet ordered"||o.notes.includes("⚠")||o.quality.includes("B"));
              return <div style={{display:"flex",gap:14}}>
                <div style={{width:300,flexShrink:0}}>
                  {SUPS.map((s,si)=>{const supColors=["#c4a882","#22c55e","#f59e0b","#60a5fa","#a78bfa","#ef4444","#06b6d4","#e879f9"];const sc=supColors[si%supColors.length];const so=SUP_ORDERS[s.id]||[];const issues=so.filter(o=>o.status==="Not yet ordered"||o.notes.includes("⚠")||o.quality.includes("B")).length;return <div key={s.id} onClick={()=>setCapSelSup(s.id)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",marginBottom:4,borderRadius:6,background:capSelSup===s.id?G+"10":"transparent",borderLeft:capSelSup===s.id?"2px solid "+G:"2px solid transparent",cursor:"pointer"}}>
                    <div style={{width:34,height:34,borderRadius:17,background:sc+"18",border:"1px solid "+sc+"30",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:sc,fontWeight:700,flexShrink:0}}>{s.nm.split(" ").map(w=>w[0]).join("").slice(0,2)}</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:13,fontWeight:600,color:capSelSup===s.id?"#e2e0dc":"#a09a92"}}>{s.nm}</div>
                      <div style={{fontSize:10,color:"#4a4540"}}>{s.co} · {so.length} orders</div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:2}}>
                      <span style={{fontSize:10,color:"#f59e0b"}}>⭐ {s.rate}</span>
                      {issues>0&&<span style={{fontSize:9,padding:"2px 6px",borderRadius:4,background:"rgba(245,158,11,.1)",color:"#f59e0b"}}>{issues} flag{issues>1?"s":""}</span>}
                    </div>
                  </div>;})}
                </div>
                <div style={{flex:1,overflowY:"auto"}}>
                  {selSup?<div>
                    {/* Header with actions top-right */}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
                      <div>
                        <div style={{width:42,height:42,borderRadius:"50%",background:G+"20",border:"2px solid "+G+"30",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,marginBottom:8}}>🏭</div>
                        <div style={{fontSize:24,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>{selSup.nm}</div>
                        <div style={{fontSize:13,color:"#a09a92",marginTop:2}}>{selSup.co} · {selSup.loc} · Since {selSup.since}</div>
                      </div>
                      <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8}}>
                        <div style={{display:"flex",gap:6}}>
                          <Btn small color={G}>📧 Send RFQ</Btn>
                          <Btn small color="#22c55e">📞 Log Call</Btn>
                          <Btn small color="#a78bfa">📋 New PO</Btn>
                          <Btn small color="#60a5fa">📧 Email</Btn>
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:6}}>
                          <span style={{fontSize:10,padding:"3px 8px",borderRadius:4,background:"rgba(34,197,94,.1)",border:"1px solid rgba(34,197,94,.2)",color:"#22c55e",fontWeight:600}}>Active</span>
                          <span style={{fontSize:22,fontWeight:700,color:G,fontFamily:M}}>★ {selSup.rate}<span style={{fontSize:11,color:"#706b63"}}>/5</span></span>
                        </div>
                      </div>
                    </div>
                    {/* Contact grid */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
                      {[["📧 Email",selSup.email,"#60a5fa"],["📞 Phone",selSup.phone,"#22c55e"],["🚚 Lead Time",selSup.lead,"#f59e0b"],["📋 Terms",selSup.pay,"#a09a92"]].map(([l,v,c])=><div key={l} style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                        <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:3}}>{l}</div>
                        <div style={{fontSize:13,color:c,fontFamily:l.includes("Email")||l.includes("Phone")?M:S}}>{v}</div>
                      </div>)}
                    </div>
                    {/* Order KPIs */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:14}}>
                      {[["Orders",orders.length,"#60a5fa"],["Total Spend",$(selSup.val),G],["On-Time",otRate+"%",otRate>=90?"#22c55e":otRate>=75?"#f59e0b":"#ef4444"],["Quality A",qRate+"%",qRate>=80?"#22c55e":"#f59e0b"]].map(([l,v,c])=><div key={l} style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                        <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:3}}>{l}</div>
                        <div style={{fontSize:18,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
                      </div>)}
                    </div>
                    {/* Specialties + Tags */}
                    <div style={{marginBottom:14}}>
                      <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>Specialties & Tags</div>
                      <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
                        {(selSup.mat||"").split(",").map(s=>s.trim()).filter(Boolean).map(s=><span key={s} style={{padding:"3px 8px",borderRadius:4,background:"rgba(196,168,130,.08)",border:"1px solid rgba(196,168,130,.2)",color:G,fontSize:11,fontWeight:600}}>{s}</span>)}
                        {selSup.tags.map(tg=><span key={tg} style={{fontSize:10,padding:"2px 7px",borderRadius:4,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",color:"#706b63"}}>{tg}</span>)}
                      </div>
                    </div>
                    {/* Notes */}
                    <div style={{marginBottom:14,padding:"12px 14px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                      <div style={{fontSize:10,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>Notes</div>
                      <div style={{fontSize:12,color:"#a09a92",lineHeight:1.6}}>{selSup.notes}</div>
                    </div>
                    {/* Flags / Issues */}
                    {openIssues.length>0&&<div style={{marginBottom:14,padding:"12px 14px",borderRadius:6,background:"rgba(245,158,11,.03)",border:"1px solid rgba(245,158,11,.1)"}}>
                      <div style={{fontSize:10,fontWeight:700,color:"#f59e0b",textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>⚠ Action Required</div>
                      {openIssues.map(o=><div key={o.id} style={{fontSize:11,color:"#e2e0dc",padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,.02)"}}><span style={{color:"#f59e0b",fontFamily:M,marginRight:6}}>{o.id}</span>{o.stone} — {o.notes.includes("⚠")?o.notes:o.status==="Not yet ordered"?"Order not placed — "+o.notes:o.quality+" quality — review needed"}</div>)}
                    </div>}
                    {/* Order History */}
                    <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Order History ({orders.length})</div>
                    <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
                      <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
                        {["PO #","Date","Stone","Qty","Project","Cost","Delivery","Quality"].map(h=><th key={h} style={{padding:"6px 10px",textAlign:"left",fontSize:9,color:"#4a4540",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}
                      </tr></thead>
                      <tbody>{orders.map(o=>{
                        const delC=o.del==="On time"||o.del.includes("early")?"#22c55e":o.del==="—"?"#4a4540":o.del.includes("late")?"#f59e0b":"#a09a92";
                        const qC=o.quality.startsWith("A")?"#22c55e":o.quality.startsWith("B")?"#f59e0b":o.quality==="—"?"#4a4540":"#a09a92";
                        return <tr key={o.id} style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                          <td style={{padding:"8px 12px",fontFamily:M,color:"#a09a92"}}>{o.id}</td>
                          <td style={{padding:"8px 12px",color:"#706b63"}}>{o.dt}</td>
                          <td style={{padding:"8px 12px",color:"#e2e0dc",fontWeight:500}}>{o.stone}</td>
                          <td style={{padding:"8px 12px",color:"#a09a92",fontFamily:M}}>{o.qty}</td>
                          <td style={{padding:"8px 12px"}}><span style={{color:"#60a5fa",fontSize:10}}>{o.prj}</span></td>
                          <td style={{padding:"8px 12px",fontFamily:M,fontWeight:600,color:o.cost>0?G:"#4a4540"}}>{o.cost>0?$(o.cost):"—"}</td>
                          <td style={{padding:"8px 12px",color:delC,fontWeight:500}}>{o.del}</td>
                          <td style={{padding:"8px 12px",color:qC,fontWeight:500}}>{o.quality}</td>
                        </tr>;
                      })}</tbody>
                    </table>
                    {/* Order notes */}
                    <div style={{marginTop:12}}>
                      <div style={{fontSize:9,fontWeight:600,color:"#4a4540",textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>Order Notes</div>
                      {orders.filter(o=>o.notes).map(o=><div key={o.id} style={{fontSize:11,color:"#a09a92",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.02)",lineHeight:1.5}}>
                        <span style={{fontFamily:M,color:"#706b63",marginRight:6}}>{o.id}</span>{o.notes}
                      </div>)}
                    </div>
                  </div>:<div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:40,color:"#4a4540",fontSize:13}}>Select a supplier to view details</div>}
                </div>
              </div>;
            })()}
          </div>;
        })()}
      </div>}
      {/* ═══ CAPACITY CALENDAR ═══ */}
  </>);
}
