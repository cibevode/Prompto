import React from "react";

export default function SalesPipelineView({ ctx }) {
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
      {view==="sales"&&salesTab==="pipeline"&&(()=>{
        const curPipelineTab=salesTab;

        // ── CONTACTS VIEW ──
        const CONTACTS=[
          {id:"C001",name:"James Whitfield",title:"Director of Design",company:"RAMSA Partners",email:"j.whitfield@ramsa.com",phone:"(212) 555-0142",type:"Architecture",city:"New York, NY",lastContact:"Feb 14, 2026",value:"$375k",status:"Active Client",notes:"Lead contact for RAMSA facade. Prefers email. Very detail-oriented on finishes.",tags:["client","architecture","repeat"]},
          {id:"C002",name:"Erik Bootsma",title:"Project Manager",company:"Benedictine Abbey",email:"e.bootsma@benedictine.org",phone:"(845) 555-0078",type:"Restoration",city:"Hyde Park, NY",lastContact:"Feb 18, 2026",value:"$210k",status:"Active Client",notes:"Managing the 12-capital project. Weekly calls every Monday 9am. Interested in timeline acceleration.",tags:["client","restoration","vip"]},
          {id:"C003",name:"Stella Park",title:"Curator",company:"Park Avenue Armory",email:"s.park@armoryonpark.org",phone:"(212) 555-0319",type:"Fine Art",city:"New York, NY",lastContact:"Jan 30, 2026",value:"$85k",status:"Active Client",notes:"Commissioned Kiona Thunderbird sculpture. Museum-grade crating required. Approval pending.",tags:["client","fine-art","museum"]},
          {id:"C004",name:"David Osei",title:"VP Real Estate",company:"NEH Office (Strategic)",email:"d.osei@neh.gov",phone:"(202) 555-0221",type:"Monument",city:"Washington, DC",lastContact:"Feb 10, 2026",value:"$100k",status:"Active Client",notes:"Strategic project. Low margin, high visibility. March 1 design deadline.",tags:["client","monument","government"]},
          {id:"C005",name:"Marcus Chen",title:"Creative Director",company:"Stripe",email:"m.chen@stripe.com",phone:"(415) 555-0884",type:"Corporate",city:"San Francisco, CA",lastContact:"Feb 19, 2026",value:"$18k",status:"Active Client",notes:"Stripe HQ lobby logo. Simple job, fast turnaround needed. Direct decision-maker.",tags:["client","corporate","logo"]},
          {id:"C006",name:"Isabelle Morel",title:"Senior Partner",company:"Gensler NY",email:"i.morel@gensler.com",phone:"(212) 555-0567",type:"Architecture",city:"New York, NY",lastContact:"Feb 5, 2026",value:"$280k",status:"Hot Lead",notes:"Negotiating Brooklyn tower lobby. Needs quote revision. Decision by March 15.",tags:["lead","architecture","hot"]},
          {id:"C007",name:"Thomas Aquino",title:"Facilities Director",company:"Soho House NYC",email:"t.aquino@sohohouse.com",phone:"(212) 555-0033",type:"Hospitality",city:"New York, NY",lastContact:"Feb 10, 2026",value:"$42k",status:"Overdue Invoice",notes:"Invoice overdue 67 days. Last responded Feb 10. Escalation needed. Good long-term relationship.",tags:["client","hospitality","ar"]},
          {id:"C008",name:"Priya Nair",title:"Art Director",company:"Aman Resorts",email:"p.nair@aman.com",phone:"(646) 555-0712",type:"Hospitality",city:"New York, NY",lastContact:"Feb 17, 2026",value:"$60k",status:"In Estimation",notes:"Travertine lobby water feature. Files received, awaiting estimate. High-profile brand.",tags:["lead","hospitality","estimation"]},
          {id:"C009",name:"Robert Ashby",title:"Principal",company:"Selldorf Architects",email:"r.ashby@selldorf.com",phone:"(212) 555-0445",type:"Architecture",city:"New York, NY",lastContact:"Jan 22, 2026",value:"$190k",status:"Proposal Sent",notes:"Tribeca townhouse project. 5-axis figurative. Long sales cycle, very selective.",tags:["lead","architecture","proposal"]},
          {id:"C010",name:"Yuki Tanaka",title:"Project Architect",company:"Snøhetta NY",email:"y.tanaka@snohetta.com",phone:"(212) 555-0298",type:"Public Art",city:"New York, NY",lastContact:"Feb 1, 2026",value:"$320k",status:"Scoping",notes:"Public plaza commission. Needs 3D model before committing. Strong interest.",tags:["lead","public-art","scoping"]},
          {id:"C011",name:"Helena Voss",title:"Curator of Collections",company:"The Met",email:"h.voss@metmuseum.org",phone:"(212) 555-0881",type:"Restoration",city:"New York, NY",lastContact:"Jan 15, 2026",value:"$95k",status:"Discovery",notes:"Interested in gallery restoration work. Very early stage. Met procurement is slow.",tags:["lead","museum","restoration"]},
          {id:"C012",name:"Andre Leblanc",title:"COO",company:"Rosewood Hotels",email:"a.leblanc@rosewoodhotels.com",phone:"(214) 555-0156",type:"Hospitality",city:"Dallas, TX",lastContact:"Feb 12, 2026",value:"$145k",status:"Negotiation",notes:"Grand lobby installation. Strong interest. Pushing on price — offer 3% max.",tags:["lead","hospitality","negotiation"]},
          {id:"C013",name:"Sarah Kim",title:"Design Lead",company:"Apple (Retail)",email:"s.kim@apple.com",phone:"(408) 555-0772",type:"Corporate",city:"Cupertino, CA",lastContact:"Dec 10, 2025",value:"$420k",status:"Lost",notes:"Lost to Italian competitor on price. Keep warm — Apple redesigns retail every 3-4 years.",tags:["lost","corporate","reopen"]},
          {id:"C014",name:"Micah Stern",title:"Owner",company:"Private Collector",email:"m.stern@sternfamily.com",phone:"(917) 555-0334",type:"Fine Art",city:"East Hampton, NY",lastContact:"Feb 16, 2026",value:"$44k",status:"Active Client",notes:"Private lion pair commission. Anonymous. Handle with discretion.",tags:["client","fine-art","private"]},
          {id:"C015",name:"Claire Fontaine",title:"VP Development",company:"Related Companies",email:"c.fontaine@related.com",phone:"(212) 555-0609",type:"Architecture",city:"New York, NY",lastContact:"Feb 3, 2026",value:"$550k",status:"Won",notes:"Hudson Yards amenity spaces. Closed Dec 2025. Great relationship. Reopen for Phase 2.",tags:["won","architecture","repeat"]},
          {id:"C016",name:"James O'Brien",title:"Superintendent",company:"Turner Construction",email:"j.obrien@tcco.com",phone:"(212) 555-0118",type:"Architecture",city:"New York, NY",lastContact:"Jan 28, 2026",value:"$0",status:"Vendor Contact",notes:"Site logistics contact for RAMSA installation. Not a buyer.",tags:["vendor","construction","logistics"]},
          {id:"C017",name:"Denise Portillo",title:"Acquisitions",company:"Christie's",email:"d.portillo@christies.com",phone:"(212) 555-0499",type:"Fine Art",city:"New York, NY",lastContact:"Nov 20, 2025",value:"$0",status:"Referral Source",notes:"Refers high-net-worth collectors. Has sent 2 leads. Send gift basket end of year.",tags:["referral","fine-art","networking"]},
          {id:"C018",name:"Ben Okafor",title:"Project Developer",company:"Vornado Realty",email:"b.okafor@vno.com",phone:"(212) 555-0384",type:"Architecture",city:"New York, NY",lastContact:"Feb 8, 2026",value:"$230k",status:"Quote Sent",notes:"Penn District lobby. Quote sent Jan 30. Follow-up Feb 22.",tags:["lead","architecture","follow-up"]},
        ];

        const statusColors={"Active Client":"#22c55e","Hot Lead":"#ef4444","Won":"#22c55e","Lost":"#ef4444","Overdue Invoice":"#f59e0b","In Estimation":"#60a5fa","Proposal Sent":"#a78bfa","Negotiation":"#f59e0b","Scoping":"#60a5fa","Discovery":"#64748b","Quote Sent":G,"Vendor Contact":"#706b63","Referral Source":"#a78bfa"};

        if(curPipelineTab==="contacts"){
          const filtContacts=CONTACTS.filter(c=>!contactSearch||[c.name,c.company,c.title,c.type,c.status].some(s=>s.toLowerCase().includes(contactSearch.toLowerCase())));
          return <div style={{flex:1,display:"flex",overflow:"hidden"}} className="fu">
            <div style={{width:340,flexShrink:0,borderRight:"1px solid rgba(255,255,255,.06)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
              <div style={{padding:"10px 12px",borderBottom:"1px solid rgba(255,255,255,.06)",flexShrink:0}}>
                <div style={{display:"flex",alignItems:"center",gap:5,padding:"3px 8px",borderRadius:6,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",width:"100%"}}><svg width="13" height="13" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#a09a92" strokeWidth="1.8"/><path d="M13 13L17 17" stroke="#a09a92" strokeWidth="1.8" strokeLinecap="round"/></svg><input value={contactSearch} onChange={e=>setContactSearch_(e.target.value)} placeholder="Search contacts, company, type…" style={{flex:1,background:"none",border:"none",outline:"none",fontSize:14,color:"#e2e0dc",fontFamily:S,minWidth:0}}/></div>
                <div style={{fontSize:10,color:"#4a4540",marginTop:6,fontFamily:M}}>{filtContacts.length} contacts</div>
              </div>
              <div style={{flex:1,overflowY:"auto",padding:"6px 10px"}}>
                {filtContacts.map(c=><div key={c.id} onClick={()=>setSelContact(c)} style={{padding:"9px 10px",marginBottom:3,borderRadius:6,cursor:"pointer",background:selContact?.id===c.id?`${G}0D`:"transparent",border:selContact?.id===c.id?`1px solid ${G}22`:"1px solid transparent"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <div>
                      <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>{c.name}</div>
                      <div style={{fontSize:14,color:"#706b63"}}>{c.title}</div>
                      <div style={{fontSize:14,color:"#a09a92",fontWeight:500}}>{c.company}</div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:(statusColors[c.status]||"#706b63")+"20",color:statusColors[c.status]||"#706b63",fontWeight:600,whiteSpace:"nowrap"}}>{c.status}</div>
                      {c.value!=="$0"&&<div style={{fontSize:10,color:G,fontFamily:M,marginTop:3}}>{c.value}</div>}
                    </div>
                  </div>
                  <div style={{fontSize:10,color:"#4a4540",marginTop:4,display:"flex",gap:4,flexWrap:"wrap"}}>
                    {c.tags.map(t=><span key={t} style={{padding:"2px 6px",borderRadius:4,background:"rgba(255,255,255,.04)",color:"#706b63"}}>{t}</span>)}
                  </div>
                </div>)}
              </div>
            </div>
            {/* Contact detail panel */}
            <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}}>
              {selContact?<div className="fu">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
                  <div>
                    <div style={{width:48,height:48,borderRadius:"50%",background:`${G}20`,border:`2px solid ${G}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:10}}>{selContact.name.charAt(0)}</div>
                    <div style={{fontSize:28,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>{selContact.name}</div>
                    <div style={{fontSize:14,color:"#a09a92",marginTop:2}}>{selContact.title} · {selContact.company}</div>
                    <div style={{fontSize:14,color:"#706b63",marginTop:2}}>{selContact.city}</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{padding:"4px 10px",borderRadius:4,background:(statusColors[selContact.status]||"#706b63")+"20",color:statusColors[selContact.status]||"#706b63",fontSize:14,fontWeight:600,marginBottom:8}}>{selContact.status}</div>
                    <div style={{fontSize:14,color:G,fontFamily:M,fontWeight:600}}>{selContact.value}</div>
                    <div style={{fontSize:14,color:"#706b63",marginTop:4}}>{selContact.type}</div>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
                  {[["Email",selContact.email,"#60a5fa"],["Phone",selContact.phone,"#a09a92"],["Last Contact",selContact.lastContact,"#a09a92"],["Value",selContact.value,G]].map(([l,v,c])=><div key={l} style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)"}}>
                    <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                    <div style={{fontSize:14,color:c,fontFamily:l==="Email"||l==="Phone"?"'JetBrains Mono',monospace":"inherit"}}>{v}</div>
                  </div>)}
                </div>
                <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)",marginBottom:16}}>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>Notes</div>
                  <div style={{fontSize:14,color:"#a09a92",lineHeight:1.7}}>{selContact.notes}</div>
                </div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {selContact.tags.map(t=><span key={t} style={{padding:"3px 9px",borderRadius:4,background:"rgba(255,255,255,.04)",color:"#706b63",fontSize:14,border:"1px solid rgba(255,255,255,.06)"}}>{t}</span>)}
                </div>
                <div style={{display:"flex",gap:8,marginTop:20}}>
                  <button style={{padding:"7px 14px",borderRadius:6,background:`${G}18`,border:`1px solid ${G}30`,color:G,fontSize:12,cursor:"pointer",fontFamily:S}}>📧 Send Email</button>
                  <button style={{padding:"7px 14px",borderRadius:6,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",color:"#a09a92",fontSize:12,cursor:"pointer",fontFamily:S}}>📋 Create Quote</button>
                  <button style={{padding:"7px 14px",borderRadius:6,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",color:"#a09a92",fontSize:12,cursor:"pointer",fontFamily:S}}>📅 Log Activity</button>
                </div>
              </div>:<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:8,color:"#4a4540"}}>
                <div style={{fontSize:28,opacity:.3}}>👤</div>
                <div style={{fontSize:14}}>Select a contact to view details</div>
              </div>}
            </div>
          </div>;
        }

        const isWonView=curPipelineTab==="won";
        const isLostView=curPipelineTab==="lost";

        const stages=LEAD_STAGES.filter(s=>s!=="Won"&&s!=="Lost");
        const filtLeads=leads.filter(l=>{
          const sm=isWonView?l.stage==="Won":isLostView?l.stage==="Lost":(leadStageFilt==="All"||l.stage===leadStageFilt);
          const qm=!leadSearch||l.company.toLowerCase().includes(leadSearch.toLowerCase())||l.contact.toLowerCase().includes(leadSearch.toLowerCase());
          const qf=!pipeQuickFilt||(pipeQuickFilt==="hot"?l.hot&&!["Won","Lost"].includes(l.stage):pipeQuickFilt==="overdue"?l.nextAction&&new Date(l.nextAction)<new Date()&&!["Won","Lost"].includes(l.stage):true);
          return sm&&qm&&qf;
        });
        const pipelineVal=leads.filter(l=>!["Won","Lost"].includes(l.stage)).reduce((s,l)=>s+(l.val*l.prob/100),0);
        const totalVal=leads.filter(l=>!["Won","Lost"].includes(l.stage)).reduce((s,l)=>s+l.val,0);
        const hotCount=leads.filter(l=>l.hot&&!["Won","Lost"].includes(l.stage)).length;
        const overdueCount=leads.filter(l=>l.nextAction&&new Date(l.nextAction)<new Date()&&!["Won","Lost"].includes(l.stage)).length;
        return <div style={{flex:1,display:"flex",overflow:"hidden"}} className="fu">
          {/* Left: Lead list */}
          <div style={{width:selLead?380:500,flexShrink:0,borderRight:"1px solid rgba(255,255,255,.06)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
            {/* KPIs */}
            <div style={{padding:"14px 16px 10px",borderBottom:"1px solid rgba(255,255,255,.05)",display:"flex",gap:10,flexShrink:0}}>
              <div style={{flex:1,padding:"8px 12px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)",textAlign:"center"}}>
                <div style={{fontSize:18,fontWeight:700,color:G,fontFamily:M}}>${Math.round(pipelineVal/1000)}k</div>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px"}}>Weighted Pipeline</div>
              </div>
              <div style={{flex:1,padding:"8px 12px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)",textAlign:"center"}}>
                <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc",fontFamily:M}}>${Math.round(totalVal/1000)}k</div>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px"}}>Total Opportunity</div>
              </div>
              <div onClick={()=>{setPipeQuickFilt(pipeQuickFilt==="hot"?null:"hot");setLeadStageFilt("All");}} style={{flex:1,padding:"8px 12px",borderRadius:6,background:pipeQuickFilt==="hot"?"rgba(239,68,68,.12)":hotCount>0?"rgba(239,68,68,.06)":"rgba(255,255,255,.018)",border:pipeQuickFilt==="hot"?"1px solid rgba(239,68,68,.35)":hotCount>0?"1px solid rgba(239,68,68,.12)":"1px solid rgba(255,255,255,.05)",textAlign:"center",cursor:"pointer",transition:"all .15s"}}>
                <div style={{fontSize:18,fontWeight:700,color:hotCount>0?"#ef4444":"#e2e0dc",fontFamily:M}}>{hotCount}</div>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px"}}>Hot Leads</div>
              </div>
              <div onClick={()=>{setPipeQuickFilt(pipeQuickFilt==="overdue"?null:"overdue");setLeadStageFilt("All");}} style={{flex:1,padding:"8px 12px",borderRadius:6,background:pipeQuickFilt==="overdue"?"rgba(245,158,11,.12)":overdueCount>0?"rgba(245,158,11,.06)":"rgba(255,255,255,.018)",border:pipeQuickFilt==="overdue"?"1px solid rgba(245,158,11,.35)":overdueCount>0?"1px solid rgba(245,158,11,.15)":"1px solid rgba(255,255,255,.05)",textAlign:"center",cursor:"pointer",transition:"all .15s"}}>
                <div style={{fontSize:18,fontWeight:700,color:overdueCount>0?"#f59e0b":"#e2e0dc",fontFamily:M}}>{overdueCount}</div>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px"}}>Overdue Follow-up</div>
              </div>
            </div>
            {/* Funnel bar */}
            <div style={{padding:"0 16px 10px",borderBottom:"1px solid rgba(255,255,255,.04)",flexShrink:0}}>
              <div style={{display:"flex",gap:3,marginTop:8,marginBottom:4,flexWrap:"wrap"}}>
                {stages.map(s=>{const cnt=leads.filter(l=>l.stage===s).length;return(
                  <div key={s} onClick={()=>{setLeadStageFilt(leadStageFilt===s?"All":s);setPipeQuickFilt(null);}} style={{display:"flex",alignItems:"center",gap:5,padding:"3px 10px",borderRadius:6,cursor:"pointer",transition:"all .15s",background:leadStageFilt===s&&!pipeQuickFilt?LEAD_STAGE_C[s]:"rgba(255,255,255,.04)",border:"1px solid "+(leadStageFilt===s&&!pipeQuickFilt?"transparent":LEAD_STAGE_C[s]+"40")}}>
                    <span style={{fontSize:11,fontWeight:700,color:leadStageFilt===s&&!pipeQuickFilt?"#0c0b0a":LEAD_STAGE_C[s],fontFamily:M}}>{cnt}</span>
                    <span style={{fontSize:11,color:leadStageFilt===s&&!pipeQuickFilt?"#0c0b0a":LEAD_STAGE_C[s],opacity:.85}}>{s}</span>
                  </div>
                );})}
              </div>
            </div>
            {/* Search + add */}
            <div style={{padding:"8px 12px",borderBottom:"1px solid rgba(255,255,255,.04)",display:"flex",gap:6,flexShrink:0}}>
              <Btn small primary color={G} onClick={()=>setShowNewLead(true)}>+ Lead</Btn>
            </div>
            {/* Lead rows */}
            <div style={{flex:1,overflowY:"auto",padding:"6px 10px"}}>
              {showNewLead&&<div style={{padding:10,marginBottom:6,borderRadius:6,background:"rgba(196,168,130,.04)",border:"1px solid rgba(196,168,130,.15)"}} className="fu">
                <div style={{fontSize:14,fontWeight:600,color:G,marginBottom:8}}>New Lead</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:6}}>
                  <input value={newLead.company} onChange={e=>setNewLead(n=>({...n,company:e.target.value}))} placeholder="Company *" style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"6px 10px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S}}/>
                  <input value={newLead.contact} onChange={e=>setNewLead(n=>({...n,contact:e.target.value}))} placeholder="Contact" style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"6px 10px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S}}/>
                  <select value={newLead.type} onChange={e=>setNewLead(n=>({...n,type:e.target.value}))} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"4px 8px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S,cursor:"pointer",width:"100%"}}>
                    {["Architecture","Fine Art","Restoration","Hospitality","Corporate","Public Art","Sculpture"].map(t=><option key={t}>{t}</option>)}
                  </select>
                  <input value={newLead.src} onChange={e=>setNewLead(n=>({...n,src:e.target.value}))} placeholder="Source (referral, inbound…)" style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"6px 10px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S}}/>
                  <input type="number" value={newLead.val} onChange={e=>setNewLead(n=>({...n,val:Number(e.target.value)}))} placeholder="Est. value ($)" style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"6px 10px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S}}/>
                  <div style={{display:"flex",alignItems:"center",gap:6,fontSize:14,color:"#706b63"}}>
                    <span>Prob:</span><input type="number" value={newLead.prob} onChange={e=>setNewLead(n=>({...n,prob:Number(e.target.value)}))} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"6px 10px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S}}/>%
                  </div>
                </div>
                <textarea value={newLead.notes} onChange={e=>setNewLead(n=>({...n,notes:e.target.value}))} placeholder="Notes…" rows={2} style={{width:"100%",fontFamily:M,fontSize:14,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.07)",color:"#e2e0dc",padding:"6px 10px",borderRadius:4,resize:"none",marginBottom:6}}/>
                <div style={{display:"flex",gap:6}}>
                  <Btn small primary color={G} onClick={()=>{if(newLead.company){const id="LD-"+String(leads.length+1).padStart(3,"0");setLeads(ls=>[...ls,{...newLead,id,lastTouch:new Date().toISOString().slice(0,10),hot:false}]);setShowNewLead(false);setNewLead({company:"",contact:"",type:"Architecture",src:"",val:"",prob:50,stage:"Discovery",nextAction:"",nextNote:"",notes:""});}}}>Save</Btn>
                  <Btn small onClick={()=>setShowNewLead(false)}>Cancel</Btn>
                </div>
              </div>}
              {filtLeads.length===0&&<div style={{textAlign:"center",padding:40,color:"#4a4540",fontSize:14}}>No leads match filters</div>}
              {filtLeads.map(l=>{
                const overdue=l.nextAction&&new Date(l.nextAction)<new Date()&&!["Won","Lost"].includes(l.stage);
                const isActive=selLead?.id===l.id;
                return <div key={l.id} onClick={()=>setSelLead(isActive?null:l)} className="rh" style={{padding:"9px 10px",marginBottom:3,borderRadius:6,background:isActive?G+"10":"rgba(255,255,255,.015)",border:isActive?"1px solid "+G+"28":overdue?"1px solid rgba(245,158,11,.15)":"1px solid rgba(255,255,255,.04)",cursor:"pointer"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      {l.hot&&<span style={{fontSize:10,color:"#ef4444"}}>🔥</span>}
                      <span style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>{l.company}</span>
                      <span style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:LEAD_STAGE_C[l.stage]+"20",color:LEAD_STAGE_C[l.stage],fontWeight:600,whiteSpace:"nowrap"}}>{l.stage}</span>
                    </div>
                    <span style={{fontSize:14,fontWeight:700,color:G,fontFamily:M}}>${(l.val/1000).toFixed(0)}k</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{fontSize:14,color:"#706b63"}}>{l.contact} · <span style={{color:"#a09a92"}}>{l.type}</span></div>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <div style={{width:36,height:4,borderRadius:4,background:"rgba(255,255,255,.06)",overflow:"hidden"}}><div style={{height:"100%",width:l.prob+"%",background:l.prob>=60?"#22c55e":l.prob>=35?"#f59e0b":"#64748b",borderRadius:4}}/></div>
                      <span style={{fontSize:10,color:"#706b63",fontFamily:M}}>{l.prob}%</span>
                    </div>
                  </div>
                  {overdue&&<div style={{fontSize:10,color:"#f59e0b",marginTop:3}}>⚠ Follow-up overdue — was {l.nextAction}</div>}
                  {!overdue&&l.nextAction&&<div style={{fontSize:10,color:"#60a5fa",marginTop:3}}>→ {l.nextNote||"Follow up"} · {l.nextAction}</div>}
                </div>;
              })}
            </div>
          </div>

          {/* Right: Lead detail */}
          {selLead?(()=>{
            const l=leads.find(ld=>ld.id===selLead.id)||selLead;
            const overdue=l.nextAction&&new Date(l.nextAction)<new Date();
            const wVal=Math.round(l.val*l.prob/100);
            return <div style={{flex:1,overflowY:"auto",padding:20}} className="fu">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                    {l.hot&&<span style={{fontSize:14,color:"#ef4444"}}>🔥</span>}
                    <span style={{fontSize:22,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>{l.company}</span>
                    <span style={{fontSize:14,padding:"2px 8px",borderRadius:4,background:LEAD_STAGE_C[l.stage]+"20",color:LEAD_STAGE_C[l.stage],fontWeight:700}}>{l.stage}</span>
                  </div>
                  <div style={{fontSize:14,color:"#706b63"}}>{l.contact} · {l.type} · Source: {l.src}</div>
                </div>
                <button onClick={()=>setSelLead(null)} style={{background:"none",border:"none",color:"#706b63",fontSize:18,cursor:"pointer"}}>×</button>
              </div>
              {/* Value + probability */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:14}}>
                <div style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{fontSize:18,fontWeight:700,color:G,fontFamily:M}}>${(l.val/1000).toFixed(0)}k</div>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase"}}>Est. Value</div>
                </div>
                <div style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{fontSize:18,fontWeight:700,color:"#22c55e",fontFamily:M}}>${(wVal/1000).toFixed(0)}k</div>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase"}}>Weighted Value</div>
                </div>
                <div style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc",fontFamily:M}}>{l.prob}%</div>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase"}}>Win Probability</div>
                </div>
                <div style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>{l.lastTouch||"—"}</div>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase"}}>Last Touch</div>
                </div>
              </div>
              {/* Probability slider */}
              <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)",marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                  <span style={{fontSize:14,color:"#706b63",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px"}}>Win Probability</span>
                  <span style={{fontSize:14,fontWeight:700,color:l.prob>=60?"#22c55e":l.prob>=35?"#f59e0b":"#ef4444",fontFamily:M}}>{l.prob}% → ${(wVal/1000).toFixed(0)}k weighted</span>
                </div>
                <input type="range" min={0} max={100} step={5} value={l.prob} onChange={e=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,prob:Number(e.target.value)}:ld))} style={{width:"100%",accentColor:l.prob>=60?"#22c55e":l.prob>=35?"#f59e0b":"#ef4444"}}/>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#4a4540",marginTop:2}}>
                  <span>0% Cold</span><span>50% Warm</span><span>100% Closed</span>
                </div>
              </div>
              {/* Stage progression */}
              <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)",marginBottom:12}}>
                <div style={{fontSize:14,color:"#706b63",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Stage</div>
                <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                  {LEAD_STAGES.map(s=><button key={s} onClick={()=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,stage:s,lastTouch:new Date().toISOString().slice(0,10)}:ld))} style={{fontSize:14,padding:"5px 10px",borderRadius:4,border:l.stage===s?"none":"1px solid rgba(255,255,255,.06)",background:l.stage===s?LEAD_STAGE_C[s]:"transparent",color:l.stage===s?"#0c0b0a":LEAD_STAGE_C[s],cursor:"pointer",fontWeight:l.stage===s?700:400,fontFamily:S}}>{s}</button>)}
                </div>
              </div>
              {/* Next action */}
              <div style={{padding:"12px 14px",borderRadius:6,background:overdue?"rgba(245,158,11,.04)":"rgba(255,255,255,.018)",border:overdue?"1px solid rgba(245,158,11,.15)":"1px solid rgba(255,255,255,.05)",marginBottom:12}}>
                <div style={{fontSize:14,color:"#706b63",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Next Action {overdue&&<span style={{color:"#f59e0b",fontSize:10}}>⚠ OVERDUE</span>}</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:6}}>
                  <div>
                    <div style={{fontSize:10,color:"#706b63",marginBottom:3}}>Due Date</div>
                    <input type="date" value={l.nextAction||""} onChange={e=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,nextAction:e.target.value}:ld))} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"6px 10px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S,colorScheme:"dark"}}/>
                  </div>
                  <div>
                    <div style={{fontSize:10,color:"#706b63",marginBottom:3}}>Action</div>
                    <input value={l.nextNote||""} onChange={e=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,nextNote:e.target.value}:ld))} placeholder="What needs to happen…" style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"6px 10px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S}}/>
                  </div>
                </div>
              </div>
              {/* Notes */}
              <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)",marginBottom:12}}>
                <div style={{fontSize:14,color:"#706b63",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>Notes</div>
                <textarea value={l.notes||""} onChange={e=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,notes:e.target.value}:ld))} rows={3} style={{width:"100%",fontFamily:M,fontSize:14,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",color:"#e2e0dc",padding:"7px 9px",borderRadius:4,resize:"vertical"}}/>
              </div>
              {/* Hot toggle + actions */}
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <Btn small color={l.hot?"#ef4444":G} onClick={()=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,hot:!ld.hot}:ld))}>{l.hot?"🔥 Hot":"Mark Hot"}</Btn>
                <Btn small primary color="#22c55e" onClick={()=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,stage:"Won",lastTouch:new Date().toISOString().slice(0,10)}:ld))}>✓ Mark Won</Btn>
                <Btn small color="#ef4444" onClick={()=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,stage:"Lost",lastTouch:new Date().toISOString().slice(0,10)}:ld))}>✗ Lost</Btn>
                <Btn small color="#a78bfa" onClick={()=>setLeads(ls=>ls.map(ld=>ld.id===l.id?{...ld,lastTouch:new Date().toISOString().slice(0,10)}:ld))}>📞 Log Touch</Btn>
              </div>
            </div>;
          })():<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:10,color:"#4a4540"}}>
            <div style={{fontSize:46}}>⬡</div>
            <div style={{fontSize:14}}>Select a lead to view details</div>
            <div style={{fontSize:14,color:"#3a3530"}}>Weighted pipeline: ${Math.round(pipelineVal/1000)}k</div>
          </div>}
        </div>;
      })()}


      {/* ═══ HUMANS ═══ */}
  </>);
}
