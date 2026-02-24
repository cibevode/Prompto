import React from "react";

export default function EstimatorView({ ctx }) {
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
      {(view==="sales"&&salesTab!=="pipeline"||view==="estimate")&&<div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        {(estView==="quotations"||estView==="dashboard")&&<div style={{padding:"12px 14px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
          <div style={{fontSize:14,fontWeight:700,color:"#e2e0dc"}}>Quote Pipeline</div>
          <div style={{display:"flex",alignItems:"center",gap:5,padding:"3px 8px",borderRadius:6,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",width:180}}><svg width="12" height="12" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#a09a92" strokeWidth="1.8"/><path d="M13 13L17 17" stroke="#a09a92" strokeWidth="1.8" strokeLinecap="round"/></svg><input value={estSearch} onChange={e=>setEstSearch(e.target.value)} placeholder="Search quotes..." style={{flex:1,background:"none",border:"none",outline:"none",fontSize:11,color:"#e2e0dc",fontFamily:S,minWidth:0}}/></div>
          <select value={quoteSortBy} onChange={e=>setQuoteSortBy(e.target.value)} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"3px 8px",color:"#a09a92",fontSize:11,fontFamily:S,outline:"none",cursor:"pointer"}}>
            <option value="date">Sort: Newest</option>
            <option value="value">Sort: Value ↓</option>
            <option value="status">Sort: Status</option>
            <option value="client">Sort: Client A-Z</option>
          </select>
        </div>}
        {estView==="contacts"&&(()=>{
          const statusColors={"Active Client":"#22c55e","Hot Lead":"#ef4444","Won":"#22c55e","Lost":"#ef4444","Overdue Invoice":"#f59e0b","In Estimation":"#60a5fa","Proposal Sent":"#a78bfa","Negotiation":"#f59e0b","Scoping":"#60a5fa","Discovery":"#64748b","Quote Sent":G,"Vendor Contact":"#706b63","Referral Source":"#a78bfa"};
          const CONTACTS=[
            {id:"C001",name:"James Whitfield",title:"Director of Design",company:"RAMSA Partners",email:"j.whitfield@ramsa.com",phone:"(212) 555-0142",type:"Architecture",city:"New York, NY",lastContact:"Feb 14, 2026",value:"$375k",status:"Active Client",notes:"Lead contact for RAMSA facade. Prefers email. Very detail-oriented on finishes.",tags:["client","architecture","repeat"]},
            {id:"C002",name:"Erik Bootsma",title:"Project Manager",company:"Benedictine Abbey",email:"e.bootsma@benedictine.org",phone:"(845) 555-0078",type:"Restoration",city:"Hyde Park, NY",lastContact:"Feb 18, 2026",value:"$210k",status:"Active Client",notes:"Managing the 12-capital project. Weekly calls every Monday 9am. Interested in timeline acceleration.",tags:["client","restoration","vip"]},
            {id:"C003",name:"Stella Park",title:"Curator",company:"Park Avenue Armory",email:"s.park@armoryonpark.org",phone:"(212) 555-0319",type:"Fine Art",city:"New York, NY",lastContact:"Jan 30, 2026",value:"$85k",status:"Active Client",notes:"Commissioned Kiona Thunderbird sculpture. Museum-grade crating required. Approval pending.",tags:["client","fine-art","museum"]},
            {id:"C004",name:"David Osei",title:"VP Real Estate",company:"NEH Office (Strategic)",email:"d.osei@neh.gov",phone:"(202) 555-0221",type:"Monument",city:"Washington, DC",lastContact:"Feb 10, 2026",value:"$100k",status:"Active Client",notes:"Strategic project. Low margin, high visibility. March 1 design deadline.",tags:["client","monument","government"]},
            {id:"C005",name:"Marcus Chen",title:"Creative Director",company:"Stripe",email:"m.chen@stripe.com",phone:"(415) 555-0884",type:"Corporate",city:"San Francisco, CA",lastContact:"Feb 19, 2026",value:"$18k",status:"Active Client",notes:"Stripe HQ lobby logo. Simple job, fast turnaround needed. Direct decision-maker.",tags:["client","corporate","logo"]},
            {id:"C006",name:"Isabelle Morel",title:"Senior Partner",company:"Gensler NY",email:"i.morel@gensler.com",phone:"(212) 555-0567",type:"Architecture",city:"New York, NY",lastContact:"Feb 5, 2026",value:"$280k",status:"Hot Lead",notes:"Negotiating Brooklyn tower lobby. Needs quote revision. Decision by March 15.",tags:["lead","architecture","hot"]},
            {id:"C007",name:"Thomas Aquino",title:"Facilities Director",company:"Soho House NYC",email:"t.aquino@sohohouse.com",phone:"(212) 555-0033",type:"Hospitality",city:"New York, NY",lastContact:"Feb 10, 2026",value:"$42k",status:"Overdue Invoice",notes:"Invoice overdue 67 days. Last responded Feb 10. Escalation needed.",tags:["client","hospitality","ar"]},
            {id:"C008",name:"Priya Nair",title:"Art Director",company:"Aman Resorts",email:"p.nair@aman.com",phone:"(646) 555-0712",type:"Hospitality",city:"New York, NY",lastContact:"Feb 17, 2026",value:"$60k",status:"In Estimation",notes:"Travertine lobby water feature. Files received, awaiting estimate. High-profile brand.",tags:["lead","hospitality","estimation"]},
            {id:"C009",name:"Robert Ashby",title:"Principal",company:"Selldorf Architects",email:"r.ashby@selldorf.com",phone:"(212) 555-0445",type:"Architecture",city:"New York, NY",lastContact:"Jan 22, 2026",value:"$190k",status:"Proposal Sent",notes:"Tribeca townhouse project. 5-axis figurative. Long sales cycle, very selective.",tags:["lead","architecture","proposal"]},
            {id:"C010",name:"Yuki Tanaka",title:"Project Architect",company:"Snohetta NY",email:"y.tanaka@snohetta.com",phone:"(212) 555-0298",type:"Public Art",city:"New York, NY",lastContact:"Feb 1, 2026",value:"$320k",status:"Scoping",notes:"Public plaza commission. Needs 3D model before committing. Strong interest.",tags:["lead","public-art","scoping"]},
            {id:"C011",name:"Helena Voss",title:"Curator of Collections",company:"The Met",email:"h.voss@metmuseum.org",phone:"(212) 555-0881",type:"Restoration",city:"New York, NY",lastContact:"Jan 15, 2026",value:"$95k",status:"Discovery",notes:"Interested in gallery restoration work. Very early stage. Met procurement is slow.",tags:["lead","museum","restoration"]},
            {id:"C012",name:"Andre Leblanc",title:"COO",company:"Rosewood Hotels",email:"a.leblanc@rosewoodhotels.com",phone:"(214) 555-0156",type:"Hospitality",city:"Dallas, TX",lastContact:"Feb 12, 2026",value:"$145k",status:"Negotiation",notes:"Grand lobby installation. Strong interest. Pushing on price — offer 3% max.",tags:["lead","hospitality","negotiation"]},
            {id:"C013",name:"Sarah Kim",title:"Design Lead",company:"Apple (Retail)",email:"s.kim@apple.com",phone:"(408) 555-0772",type:"Corporate",city:"Cupertino, CA",lastContact:"Dec 10, 2025",value:"$420k",status:"Lost",notes:"Lost to Italian competitor on price. Keep warm — Apple redesigns retail every 3-4 years.",tags:["lost","corporate","reopen"]},
            {id:"C014",name:"Micah Stern",title:"Owner",company:"Private Collector",email:"m.stern@sternfamily.com",phone:"(917) 555-0334",type:"Fine Art",city:"East Hampton, NY",lastContact:"Feb 16, 2026",value:"$44k",status:"Active Client",notes:"Private lion pair commission. Anonymous. Handle with discretion.",tags:["client","fine-art","private"]},
            {id:"C015",name:"Claire Fontaine",title:"VP Development",company:"Related Companies",email:"c.fontaine@related.com",phone:"(212) 555-0609",type:"Architecture",city:"New York, NY",lastContact:"Feb 3, 2026",value:"$550k",status:"Won",notes:"Hudson Yards amenity spaces. Closed Dec 2025. Great relationship. Reopen for Phase 2.",tags:["won","architecture","repeat"]},
            {id:"C016",name:"James O'Brien",title:"Superintendent",company:"Turner Construction",email:"j.obrien@tcco.com",phone:"(212) 555-0118",type:"Architecture",city:"New York, NY",lastContact:"Jan 28, 2026",value:"$0",status:"Vendor Contact",notes:"Site logistics contact for RAMSA installation. Not a buyer.",tags:["vendor","construction","logistics"]},
            {id:"C017",name:"Denise Portillo",title:"Acquisitions",company:"Christie's",email:"d.portillo@christies.com",phone:"(212) 555-0499",type:"Fine Art",city:"New York, NY",lastContact:"Nov 20, 2025",value:"$0",status:"Referral Source",notes:"Refers high-net-worth collectors. Has sent 2 leads. Send gift basket end of year.",tags:["referral","fine-art","networking"]},
            {id:"C018",name:"Ben Okafor",title:"Project Developer",company:"Vornado Realty",email:"b.okafor@vno.com",phone:"(212) 555-0384",type:"Architecture",city:"New York, NY",lastContact:"Feb 8, 2026",value:"$230k",status:"Quote Sent",notes:"Penn District lobby. Quote sent Jan 30. Follow-up Feb 22.",tags:["lead","architecture","follow-up"]},
          ];
          const filtContacts=CONTACTS.filter(c=>!contactSearch||[c.name,c.company,c.title,c.type,c.status].some(s=>s.toLowerCase().includes(contactSearch.toLowerCase())));
          return <div style={{flex:1,display:"flex",overflow:"hidden"}} className="fu">
            <div style={{width:340,flexShrink:0,borderRight:"1px solid rgba(255,255,255,.06)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
              <div style={{padding:"10px 12px",borderBottom:"1px solid rgba(255,255,255,.06)",flexShrink:0}}>
                <div style={{display:"flex",alignItems:"center",gap:5,padding:"3px 8px",borderRadius:6,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",width:"100%"}}><svg width="13" height="13" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#a09a92" strokeWidth="1.8"/><path d="M13 13L17 17" stroke="#a09a92" strokeWidth="1.8" strokeLinecap="round"/></svg><input value={contactSearch} onChange={e=>setContactSearch_(e.target.value)} placeholder="Search contacts, company, type…" style={{flex:1,background:"none",border:"none",outline:"none",fontSize:14,color:"#e2e0dc",fontFamily:S,minWidth:0}}/></div>
                <div style={{fontSize:10,color:"#4a4540",marginTop:6,fontFamily:M}}>{filtContacts.length} contacts</div>
              </div>
              <div style={{flex:1,overflowY:"auto",padding:"6px 10px"}}>
                {filtContacts.map(c=><div key={c.id} onClick={()=>setSelContactEst(c)} style={{padding:"9px 10px",marginBottom:3,borderRadius:6,cursor:"pointer",background:selContactEst?.id===c.id?`${G}0D`:"transparent",border:selContactEst?.id===c.id?`1px solid ${G}22`:"1px solid transparent"}}>
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
            <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}}>
              {selContactEst?<div className="fu">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
                  <div>
                    <div style={{width:48,height:48,borderRadius:"50%",background:`${G}20`,border:`2px solid ${G}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:10}}>{selContactEst.name.charAt(0)}</div>
                    <div style={{fontSize:28,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>{selContactEst.name}</div>
                    <div style={{fontSize:14,color:"#a09a92",marginTop:2}}>{selContactEst.title} · {selContactEst.company}</div>
                    <div style={{fontSize:14,color:"#706b63",marginTop:2}}>{selContactEst.city}</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{padding:"4px 10px",borderRadius:4,background:(statusColors[selContactEst.status]||"#706b63")+"20",color:statusColors[selContactEst.status]||"#706b63",fontSize:14,fontWeight:600,marginBottom:8}}>{selContactEst.status}</div>
                    <div style={{fontSize:14,color:G,fontFamily:M,fontWeight:600}}>{selContactEst.value}</div>
                    <div style={{fontSize:14,color:"#706b63",marginTop:4}}>{selContactEst.type}</div>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
                  {[["Email",selContactEst.email,"#60a5fa"],["Phone",selContactEst.phone,"#a09a92"],["Last Contact",selContactEst.lastContact,"#a09a92"],["Value",selContactEst.value,G]].map(([l,v,c])=><div key={l} style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)"}}>
                    <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                    <div style={{fontSize:14,color:c,fontFamily:l==="Email"||l==="Phone"?"'JetBrains Mono',monospace":"inherit"}}>{v}</div>
                  </div>)}
                </div>
                <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)",marginBottom:16}}>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>Notes</div>
                  <div style={{fontSize:14,color:"#a09a92",lineHeight:1.7}}>{selContactEst.notes}</div>
                </div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {selContactEst.tags.map(t=><span key={t} style={{padding:"3px 9px",borderRadius:4,background:"rgba(255,255,255,.04)",color:"#706b63",fontSize:14,border:"1px solid rgba(255,255,255,.06)"}}>{t}</span>)}
                </div>
                {(()=>{
                  const contactPrjs=prjs.filter(p=>p.client&&selContactEst.company && (p.client.toLowerCase().includes(selContactEst.company.toLowerCase()) || selContactEst.company.toLowerCase().includes(p.client.toLowerCase()) || (p.sd?.quote?.clientContact||"").toLowerCase().includes(selContactEst.name.split(" ")[1]?.toLowerCase()||"__none__")));
                  return contactPrjs.length>0?<div style={{marginTop:16}}>
                    <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Project History</div>
                    {contactPrjs.map(p=>{
                      const stgLabel=STAGES[Math.min(p.stage,STAGES.length-1)]?.label||"Unknown";
                      const isComplete=p.stage>=STAGES.length-1||p.sd?.delivery?.signoff==="Signed";
                      const totalVal=p.quoted||Number(p.sd?.quote?.quotedPrice)||0;
                      return <div key={p.id} onClick={()=>{setSelId(p.id);setView("lifecycle");}} style={{padding:"8px 12px",marginBottom:4,borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",cursor:"pointer",transition:"background .15s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.04)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.02)"}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name}</div>
                            <div style={{fontSize:11,color:"#706b63",marginTop:2}}>{p.id} · {p.type}</div>
                          </div>
                          <div style={{textAlign:"right",flexShrink:0,marginLeft:8}}>
                            <div style={{fontSize:11,fontWeight:600,color:isComplete?"#22c55e":"#f59e0b",padding:"2px 6px",borderRadius:4,background:isComplete?"rgba(34,197,94,.08)":"rgba(245,158,11,.08)"}}>{isComplete?"✓ Delivered":stgLabel}</div>
                            {totalVal>0&&<div style={{fontSize:11,color:G,fontFamily:M,marginTop:3}}>{$(totalVal)}</div>}
                          </div>
                        </div>
                        <div style={{display:"flex",gap:1,marginTop:6,height:2,borderRadius:4,overflow:"hidden"}}>
                          {STAGES.map((_,i)=><div key={i} style={{flex:1,background:i<p.stage?"#22c55e":i===p.stage?"#22c55e60":"rgba(255,255,255,.06)"}}/>)}
                        </div>
                      </div>;
                    })}
                  </div>:null;
                })()}
                <div style={{display:"flex",gap:8,marginTop:20}}>
                  <button style={{padding:"7px 14px",borderRadius:6,background:`${G}18`,border:`1px solid ${G}30`,color:G,fontSize:12,cursor:"pointer",fontFamily:S}}>📋 Create Quote</button>
                  <button style={{padding:"7px 14px",borderRadius:6,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",color:"#a09a92",fontSize:12,cursor:"pointer",fontFamily:S}}>📧 Send Email</button>
                  <button style={{padding:"7px 14px",borderRadius:6,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",color:"#a09a92",fontSize:12,cursor:"pointer",fontFamily:S}}>📅 Log Activity</button>
                </div>
              </div>:<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:8,color:"#4a4540"}}>
                <div style={{fontSize:28,opacity:.3}}>👤</div>
                <div style={{fontSize:14}}>Select a contact to view details</div>
              </div>}
            </div>
          </div>;
        })()}
        {estView!=="contacts"&&<div style={{flex:1,overflowY:"auto",padding:14}}>
          {estView==="dashboard"&&(()=>{
            const agentQ=estQ.filter(e=>e.pricedBy==="agent");
            const humanQ=estQ.filter(e=>e.pricedBy!=="agent");
            const inProg=estQ.filter(e=>e.step<6&&!e.paused);
            const hitl=estQ.filter(e=>e.step===4);
            const pipeVal=estQ.reduce((s,e)=>s+(e.estCost||0),0);
            const filtered=estQ.filter(e=>{
              const textMatch=!estSearch||[e.client,e.desc,e.id].join(" ").toLowerCase().includes(estSearch.toLowerCase());
              const filtMatch=!quoteFilter||(quoteFilter==="agent"?e.pricedBy==="agent"&&!e.paused&&e.step<6:quoteFilter==="human"?e.pricedBy!=="agent"&&e.step<6:quoteFilter==="hitl"?e.step===4:quoteFilter==="sent"?e.step>=6:quoteFilter==="paused"?e.paused:true);
              return textMatch&&filtMatch;
            }).sort((a,b)=>{
              if(quoteSortBy==="value")return(b.estCost||0)-(a.estCost||0);
              if(quoteSortBy==="client")return(a.client||"").localeCompare(b.client||"");
              if(quoteSortBy==="status")return b.step-a.step;
              return 0; // date = default order
            });

            return <div className="fu">

              {/* ── KPI strip — clickable filters ── */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:14}}>
                {[
                  ["all","Total Quotes",    estQ.length,        "#60a5fa"],
                  ["agent","Agent Active",    agentQ.filter(e=>!e.paused&&e.step<6).length, "#a78bfa"],
                  ["human","Human Active",    humanQ.filter(e=>e.step<6).length,            "#22c55e"],
                  ["hitl","HITL Review",     hitl.length,        "#f59e0b"],
                  ["sent","Sent / Won",  estQ.filter(e=>e.step>=6).length, G],
                ].map(([k,l,v,c])=><div key={k} onClick={()=>setQuoteFilter(quoteFilter===k||k==="all"?null:k)} style={{background:quoteFilter===k?c+"15":"rgba(255,255,255,.02)",border:quoteFilter===k?"1px solid "+c+"40":"1px solid rgba(255,255,255,.06)",borderRadius:8,padding:"12px 14px",cursor:"pointer",transition:"all .15s"}}>
                  <div style={{fontSize:11,color:quoteFilter===k?c:"#706b63",marginBottom:4}}>{l}</div>
                  <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{typeof v==="number"?v:v}</div>
                </div>)}
              </div>

              {/* ── Filter + Legend bar ── */}
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                <div style={{fontSize:12,color:"#706b63"}}>{filtered.length} quote{filtered.length!==1?"s":""}{quoteFilter?" · filtered":""}
                  {quoteFilter&&<button onClick={()=>setQuoteFilter(null)} style={{background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:11,marginLeft:6,fontFamily:S}}>✕ Clear</button>}
                </div>
                <div style={{display:"flex",gap:4,marginLeft:4}}>
                  {[["paused","Paused","#ef4444"]].map(([k,l,c])=>{
                    const cnt=estQ.filter(e=>e.paused).length;
                    return cnt>0?<div key={k} onClick={()=>setQuoteFilter(quoteFilter===k?null:k)} style={{display:"flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:4,cursor:"pointer",fontSize:11,fontWeight:600,background:quoteFilter===k?c+"20":"rgba(239,68,68,.06)",border:quoteFilter===k?"1px solid "+c+"40":"1px solid rgba(239,68,68,.12)",color:c}}>{cnt} {l}</div>:null;
                  })}
                </div>
                <div style={{marginLeft:"auto",display:"flex",gap:12,alignItems:"center"}}>
                  <span style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:"#706b63"}}>
                    <span style={{width:8,height:8,borderRadius:4,background:"rgba(167,139,250,.35)",border:"1px solid rgba(167,139,250,.5)",display:"inline-block"}}/>Agent
                  </span>
                  <span style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:"#706b63"}}>
                    <span style={{width:8,height:8,borderRadius:4,background:"rgba(34,197,94,.2)",border:"1px solid rgba(34,197,94,.35)",display:"inline-block"}}/>Human
                  </span>
                  <span style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:"#706b63"}}>
                    <span style={{width:8,height:8,borderRadius:4,background:"rgba(239,68,68,.2)",border:"1px solid rgba(239,68,68,.35)",display:"inline-block"}}/>Paused
                  </span>
                </div>
              </div>

              {/* ── Quote cards ── */}
              {filtered.length===0&&<div style={{padding:"40px 20px",textAlign:"center",color:"#4a4540"}}>
                <div style={{fontSize:28,marginBottom:8,opacity:.3}}>📋</div>
                <div style={{fontSize:14}}>No quotes match your filter</div>
                <button onClick={()=>{setQuoteFilter(null);setEstSearch("");}} style={{marginTop:8,background:"none",border:"none",color:"#60a5fa",cursor:"pointer",fontSize:12,fontFamily:S}}>Clear filters</button>
              </div>}
              {filtered.map(e=>{
                const ag=e.pricedBy==="agent";
                const paused=e.paused;
                const done=e.step>=6;
                const hitlFlag=e.step===4;
                const ds=e.dateSent?Math.max(0,Math.round((Date.now()-new Date(e.dateSent))/(86400000))):null;
                const urg=ds===null?0:ds<=3?.3:ds<=7?.5:ds<=14?.7:1;
                const uc=urg<=.3?"#22c55e":urg<=.5?G:urg<=.7?"#f59e0b":"#ef4444";
                const sc=paused?"#ef4444":ag?"#a78bfa":"#22c55e";

                return <div key={e.id} style={{
                  borderRadius:8,marginBottom:10,overflow:"hidden",
                  border:paused?"1px solid rgba(239,68,68,.25)":ag?"1px solid rgba(167,139,250,.22)":"1px solid rgba(255,255,255,.07)",
                  background:paused?"rgba(239,68,68,.04)":ag?"rgba(139,92,246,.05)":"rgba(255,255,255,.02)",
                }}>

                  {/* Top colour stripe */}
                  <div style={{height:2,background:paused?"rgba(239,68,68,.6)":ag?"linear-gradient(90deg,#7c3aed,#a78bfa)":"rgba(34,197,94,.4)"}}/>

                  {/* Card header */}
                  <div style={{padding:"12px 14px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>

                    {/* Left: identity */}
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",gap:7,flexWrap:"wrap",marginBottom:4}}>
                        <span style={{fontSize:11,fontWeight:700,color:"#60a5fa",fontFamily:M}}>{e.id.replace("EQ","QTN")}</span>
                        <span style={{fontSize:14,fontWeight:700,color:"#e2e0dc"}}>{e.client}</span>
                        {ag&&<span style={{fontSize:11,padding:"1px 7px",borderRadius:4,background:"rgba(167,139,250,.15)",border:"1px solid rgba(167,139,250,.3)",color:"#c4b5fd",fontWeight:600}}>🤖 Agent</span>}
                        {!ag&&<span style={{fontSize:11,padding:"1px 7px",borderRadius:4,background:"rgba(34,197,94,.1)",border:"1px solid rgba(34,197,94,.25)",color:"#22c55e",fontWeight:600}}>✋ Human</span>}
                        {paused&&<span style={{fontSize:11,padding:"1px 7px",borderRadius:4,background:"rgba(239,68,68,.12)",border:"1px solid rgba(239,68,68,.3)",color:"#ef4444",fontWeight:600}}>⏸ Paused</span>}
                        {hitlFlag&&<span style={{fontSize:11,padding:"1px 7px",borderRadius:4,background:"rgba(245,158,11,.12)",border:"1px solid rgba(245,158,11,.3)",color:"#f59e0b",fontWeight:600}}>👁 Needs Review</span>}
                        {done&&<span style={{fontSize:11,padding:"1px 7px",borderRadius:4,background:"rgba(96,165,250,.1)",border:"1px solid rgba(96,165,250,.25)",color:"#60a5fa",fontWeight:600}}>{e.status}</span>}
                      </div>
                      <div style={{fontSize:12,color:"#706b63",marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{e.desc}</div>
                      <div style={{fontSize:11,color:"#4a4540"}}>{e.ts}{ds!==null&&<span style={{color:uc,fontWeight:600,marginLeft:8}}>{ds}d since sent{ds>=7?" ⚠":""}</span>}</div>
                    </div>

                    {/* Right: value + primary action */}
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6,flexShrink:0}}>
                      <div style={{textAlign:"right"}}>
                        {e.estCost
                          ?<div style={{fontSize:20,fontWeight:700,color:ag?"#a78bfa":G,fontFamily:M}}>{$(e.estCost)}</div>
                          :<div style={{fontSize:12,color:"#4a4540",fontStyle:"italic"}}>Calculating…</div>}
                        {e.estCost&&<div style={{fontSize:10,color:"#706b63",fontFamily:M,marginTop:1}}>{e.margin||"—"}% margin</div>}
                      </div>
                      {/* Primary action */}
                      <div style={{display:"flex",gap:5}}>
                        {ag&&e.step<6&&!paused&&<Btn small color="#ef4444" onClick={()=>setEstQ(q=>q.map(x=>x.id===e.id?{...x,paused:true,agentNotes:x.agentNotes+" | Agent paused "+ts()}:x))}>⏹ Stop</Btn>}
                        {ag&&paused&&<Btn small primary color="#a78bfa" onClick={()=>setEstQ(q=>q.map(x=>x.id===e.id?{...x,paused:false,agentNotes:x.agentNotes+" | Agent resumed "+ts()}:x))}>▶ Resume</Btn>}
                        {!ag&&e.step<6&&!paused&&<Btn small color="#f59e0b" onClick={()=>setEstQ(q=>q.map(x=>x.id===e.id?{...x,paused:true,agentNotes:x.agentNotes+" | Paused "+ts()}:x))}>⏸ Pause</Btn>}
                        {!ag&&paused&&<Btn small primary color="#22c55e" onClick={()=>setEstQ(q=>q.map(x=>x.id===e.id?{...x,paused:false,agentNotes:x.agentNotes+" | Resumed "+ts()}:x))}>▶ Resume</Btn>}
                        {!done&&e.step>=5&&<Btn small primary color="#60a5fa" onClick={()=>setEstQ(q=>q.map(x=>x.id===e.id?{...x,dateSent:now(),status:"Quote Sent",step:Math.max(x.step,6)}:x))}>📧 Send Quote</Btn>}
                        {e.step>=6&&<Btn small primary color="#22c55e">✓ Convert to Project</Btn>}
                      </div>
                      {/* Secondary actions */}
                      <div style={{display:"flex",gap:3}}>
                        <button onClick={()=>{setEditingQuoteId(e.id);if(e.stoneId)setEstStoneId(String(e.stoneId));if(e.dims)setEstDims(e.dims);if(e.cx)setEstCx(e.cx);setEstView("manual");}} style={{background:"none",border:"none",color:"#706b63",cursor:"pointer",fontSize:12,padding:"2px 6px",borderRadius:4}} title="Edit quote">✏️</button>
                        <button onClick={()=>setEstQ(q=>q.filter(x=>x.id!==e.id))} style={{background:"none",border:"none",color:"#4a4540",cursor:"pointer",fontSize:12,padding:"2px 6px",borderRadius:4}} title="Delete quote">✕</button>
                      </div>
                    </div>
                  </div>

                  {/* Pipeline tracker */}
                  <div style={{padding:"8px 14px 12px",borderTop:"1px solid rgba(255,255,255,.04)"}}>
                    {(()=>{
                      const AGENT_STEPS=[
                        {label:"Received",   icon:"📁"},
                        {label:"Standardising", icon:"🔄"},
                        {label:"AI Analysis",   icon:"🤖"},
                        {label:"AI Pricing",    icon:"💲"},
                        {label:"HITL Review",   icon:"👁"},
                        {label:"Quote Ready",   icon:"📋"},
                        {label:"Sent",          icon:"📧"},
                        {label:"Accepted",      icon:"✅"},
                      ];
                      const HUMAN_STEPS=[
                        {label:"Received",   icon:"📁"},
                        {label:"Consultation",  icon:"🤝"},
                        {label:"Measuring",     icon:"📐"},
                        {label:"Pricing",       icon:"💲"},
                        {label:"Review",        icon:"👁"},
                        {label:"Quote Ready",   icon:"📋"},
                        {label:"Sent",          icon:"📧"},
                        {label:"Accepted",      icon:"✅"},
                      ];
                      const steps=ag?AGENT_STEPS:HUMAN_STEPS;
                      return <div style={{display:"flex",alignItems:"flex-start"}}>
                        {steps.map((st,si)=>{
                          const isDone=si<e.step;
                          const isCurrent=si===e.step;
                          const isPending=si>e.step;
                          const nodeColor=paused&&isCurrent?"#ef4444":sc;
                          return <div key={si} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",position:"relative"}}>
                            {si>0&&<div style={{position:"absolute",top:11,right:"50%",left:"-50%",height:2,background:isDone?sc:paused&&isCurrent?"rgba(239,68,68,.3)":"rgba(255,255,255,.06)",zIndex:0}}/>}
                            <div style={{
                              width:22,height:22,borderRadius:"50%",flexShrink:0,zIndex:1,
                              display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,
                              background:isDone?sc:isCurrent?nodeColor+"28":"rgba(255,255,255,.04)",
                              color:isDone?"#0c0b0a":isCurrent?nodeColor:"#3a3530",
                              border:isCurrent?"2px solid "+nodeColor:isDone?"none":"1px solid rgba(255,255,255,.1)",
                              boxShadow:isCurrent&&!paused?"0 0 10px "+nodeColor+"70":"none",
                              marginBottom:5,transition:"all .3s",
                            }}>{isDone?"✓":paused&&isCurrent?"⏸":st.icon}</div>
                            <div style={{
                              fontSize:9,textAlign:"center",lineHeight:1.3,padding:"0 1px",
                              color:isDone?sc:isCurrent?nodeColor:"#3a3530",
                              fontWeight:isCurrent?700:isDone?500:400,
                              opacity:isPending?.4:1,
                            }}>{st.label}</div>
                          </div>;
                        })}
                      </div>;
                    })()}
                  </div>

                  {/* Expanded agent notes — always visible, collapsible */}
                  <div style={{borderTop:"1px solid rgba(255,255,255,.04)",padding:"8px 14px",background:"rgba(255,255,255,.01)"}}>
                    <div style={{fontSize:11,color:"#a09a92",lineHeight:1.6}}>
                      <Dot c={paused?"#ef4444":ag?"#a78bfa":"#22c55e"} p/>{e.agentNotes}
                    </div>
                    {e.files&&e.files.length>0&&<div style={{fontSize:11,color:"#4a4540",marginTop:4}}>📎 {e.files.join(" · ")}</div>}
                  </div>

                </div>;
              })}

            </div>;
          })()}

          {estView==="client"&&<div className="fu" style={{maxWidth:860,margin:"0 auto",paddingBottom:40}}>

            {/* Nav */}
            <div style={{display:"flex",gap:6,marginBottom:24}}>
              {[["1. Request a Quote","client",true],["2. Track Your Quote","tracking",false]].map(([l,v,a])=><button key={l} onClick={()=>setEstView(v)} style={{padding:"7px 14px",borderRadius:6,fontSize:12,fontWeight:a?700:400,cursor:"pointer",fontFamily:S,border:a?"1px solid rgba(196,168,130,.4)":"1px solid rgba(255,255,255,.08)",background:a?"rgba(196,168,130,.1)":"rgba(255,255,255,.03)",color:a?G:"#706b63"}}>{l}</button>)}
            </div>

            {/* Workflow explainer */}
            <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:8,padding:"14px 18px",marginBottom:24}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#e2e0dc"}}>What happens after you submit</div>
                <div style={{fontSize:11,color:"#4a4540"}}>Avg turnaround: <span style={{color:G,fontWeight:600}}>~2 hours</span></div>
              </div>
              <div style={{display:"flex",alignItems:"flex-start"}}>
                {[
                  {icon:"📂",label:"Received",desc:"Files & brief land in the queue",color:"#60a5fa"},
                  {icon:"🔄",label:"Standardising",desc:"Formats converted to 3D mesh",color:"#8b9dc3"},
                  {icon:"🤖",label:"AI Analysis",desc:"Volume & complexity scored",color:"#a78bfa"},
                  {icon:"💲",label:"AI Pricing",desc:"Costed against current rates",color:"#a78bfa"},
                  {icon:"👁️",label:"Human Review",desc:"Estimator validates before release",color:"#f59e0b"},
                  {icon:"📧",label:"Quote Sent",desc:"PDF emailed to you",color:"#22c55e"},
                ].map((f,i,arr)=><div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",position:"relative"}}>
                  {i<arr.length-1&&<div style={{position:"absolute",top:15,left:"50%",right:"-50%",height:2,background:"rgba(255,255,255,.06)",zIndex:0}}/>}
                  <div style={{width:30,height:30,borderRadius:"50%",background:f.color+"18",border:"1px solid "+f.color+"40",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,zIndex:1,marginBottom:5}}>{f.icon}</div>
                  <div style={{fontSize:10,fontWeight:600,color:f.color,textAlign:"center",marginBottom:2}}>{f.label}</div>
                  <div style={{fontSize:9,color:"#4a4540",textAlign:"center",lineHeight:1.4,padding:"0 2px"}}>{f.desc}</div>
                </div>)}
              </div>
            </div>

            {/* Form + sidebar */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 260px",gap:20,alignItems:"start"}}>

              {/* Form */}
              <div style={{display:"flex",flexDirection:"column"}}>

                {/* Step 1 */}
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"10px 10px 0 0",borderBottom:"none",padding:"18px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G}}>1</div>
                    <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Upload Project Files</div>
                    <div style={{marginLeft:"auto",fontSize:11,color:"#4a4540"}}>Optional</div>
                  </div>
                  <input id="cpFileInput" type="file" multiple accept=".stl,.obj,.step,.stp,.dwg,.jpg,.jpeg,.png,.pdf" style={{display:"none"}} onChange={ev=>{const n=Array.from(ev.target.files).map(f=>f.name);setCpFiles(p=>[...p,...n.filter(x=>!p.includes(x))]);ev.target.value="";}}/>
                  <div onClick={()=>document.getElementById("cpFileInput").click()}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(196,168,130,.4)";e.currentTarget.style.background="rgba(196,168,130,.04)";}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(196,168,130,.18)";e.currentTarget.style.background="rgba(196,168,130,.02)";}}
                    style={{border:"2px dashed rgba(196,168,130,.18)",borderRadius:8,padding:"20px",textAlign:"center",cursor:"pointer",background:"rgba(196,168,130,.02)",transition:"all .15s"}}>
                    <div style={{fontSize:28,marginBottom:5,opacity:.5}}>📂</div>
                    <div style={{fontSize:13,fontWeight:600,color:G,marginBottom:2}}>Click to browse files</div>
                    <div style={{fontSize:11,color:"#4a4540"}}>STL · OBJ · STEP · DWG · JPG · PNG · PDF · up to 500MB</div>
                  </div>
                  {cpFiles&&cpFiles.length>0&&<div style={{marginTop:10,display:"flex",flexDirection:"column",gap:4}}>
                    {cpFiles.map((f,i)=><div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 10px",borderRadius:6,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)"}}>
                      <span style={{fontSize:12,color:"#e2e0dc"}}>📄 {f}</span>
                      <button onClick={()=>setCpFiles(p=>p.filter((_,j)=>j!==i))} style={{background:"none",border:"none",color:"#706b63",cursor:"pointer",fontSize:13,padding:"0 2px"}}>✕</button>
                    </div>)}
                  </div>}
                </div>

                {/* Step 2 */}
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.07)",borderBottom:"none",padding:"18px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G}}>2</div>
                    <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Contact Details</div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                    <Inp label="Name / Company" value={cpName} onChange={setCpName}/>
                    <Inp label="Email" value={cpEmail} onChange={setCpEmail} type="text"/>
                  </div>
                </div>

                {/* Step 3 */}
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.07)",borderBottom:"none",padding:"18px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G}}>3</div>
                    <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Project Details</div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
                    <Inp label="Project Type" value={cpType} onChange={setCpType} type="select" opts={["Sculpture","Architectural","Monument","Restoration","Corporate","Other"]}/>
                    <Inp label="Approx. Dimensions" value={cpDims} onChange={setCpDims} ph="e.g. 1.5m × 0.8m × 2.0m"/>
                    <Inp label="Stone Preference" value={cpStone} onChange={setCpStone} type="select" opts={["No preference — let AI recommend",...STONE_DB.map(s=>s.name)]}/>
                    <Inp label="Budget Range" value={cpBudget} onChange={setCpBudget} type="select" opts={["Under $10k","$10k–$50k","$50k–$150k","$150k–$500k","$500k+"]}/>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",gap:4}}>
                    <label style={{fontSize:11,color:"#a09a92",fontWeight:500,textTransform:"uppercase",letterSpacing:".5px"}}>Describe your vision</label>
                    <textarea value={cpNotes} onChange={e=>setCpNotes(e.target.value)} placeholder="Materials, style, context, deadline, references — the more detail, the more accurate your quote." style={{width:"100%",minHeight:160,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:6,padding:"10px 12px",color:"#e2e0dc",fontSize:13,fontFamily:S,lineHeight:1.7,resize:"vertical",outline:"none",boxSizing:"border-box"}}/>
                  </div>
                </div>

                {/* Step 4 */}
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"0 0 10px 10px",padding:"18px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G}}>4</div>
                    <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Submit</div>
                  </div>
                  {!cpSubmitted?<div>
                    <div style={{fontSize:12,color:"#4a4540",marginBottom:12,lineHeight:1.6}}>By submitting you agree files will be used solely for quoting and kept confidential. We'll email your quote to the address provided.</div>
                    <Btn primary onClick={()=>{
                      if(!cpName||!cpEmail)return;
                      const newId="EQ-"+String(estQ.length+1).padStart(3,"0");
                      const dims=cpDims?cpDims.split(/[×x,]/g).map(s=>s.trim()):["1","1","1"];
                      const stoneMatch=STONE_DB.find(s=>s.name===cpStone);
                      const uploadedFiles=cpFiles&&cpFiles.length>0?cpFiles:["client_upload.pdf"];
                      setEstQ(q=>[{id:newId,client:cpName,desc:(cpType||"Project")+": "+(cpNotes||cpDims||"New submission"),status:"Files Received",step:1,stoneRec:stoneMatch?stoneMatch.name:"",recReason:stoneMatch?"Client preference":"Pending AI recommendation",files:uploadedFiles,estCost:null,agentNotes:"Processing client submission. Analyzing files...",ts:ts(),pricedBy:null,dateSent:null,stoneId:stoneMatch?stoneMatch.id:null,dims:{l:dims[0]||"1",w:dims[1]||"1",h:dims[2]||"1"},cx:"medium",changelog:[{t:ts(),u:"Client Portal",changes:[{field:"Submitted",from:"-",to:cpName+" ("+cpEmail+")"}]}]},...q]);
                      setCpSubmitted(true);
                      setTimeout(()=>{setEstQ(q=>q.map(e=>e.id===newId?{...e,status:"Agent Pricing",step:3,agentNotes:"AI analyzing... Budget: "+(cpBudget||"Not specified"),estCost:cpBudget==="Under $10k"?8000:cpBudget==="$10k–$50k"?28000:cpBudget==="$50k–$150k"?85000:cpBudget==="$150k–$500k"?250000:50000}:e));},3000);
                    }}>Submit for AI Estimation →</Btn>
                  </div>:<div style={{padding:"14px 16px",borderRadius:8,background:"rgba(34,197,94,.06)",border:"1px solid rgba(34,197,94,.2)"}}>
                    <div style={{fontSize:14,fontWeight:700,color:"#22c55e",marginBottom:4}}>✓ Request received</div>
                    <div style={{fontSize:13,color:"#a09a92",marginBottom:10,lineHeight:1.6}}>Got your submission for <strong style={{color:"#e2e0dc"}}>{cpName}</strong>. Our AI agent is processing — check the Quoting tab for tracking.</div>
                    <Btn small color="#22c55e" onClick={()=>{setCpSubmitted(false);setCpName("");setCpEmail("");setCpType("");setCpDims("");setCpStone("");setCpBudget("");setCpNotes("");setCpFiles([]);}}>Submit another</Btn>
                  </div>}
                </div>
              </div>

              {/* Right sidebar */}
              <div style={{display:"flex",flexDirection:"column",gap:12,position:"sticky",top:0}}>
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.07)",borderRadius:8,padding:14}}>
                  <div style={{fontSize:11,fontWeight:700,color:G,textTransform:"uppercase",letterSpacing:"1px",marginBottom:14}}>How It Works</div>
                  {[["📂","Upload & describe","Share files or describe in words"],["🤖","AI analysis","Volume, complexity and stone recommendation"],["👁️","Human review","Senior estimator checks every quote"],["📧","Quote delivered","PDF to your inbox, usually within 2 hrs"]].map(([icon,title,desc],i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<3?12:0}}>
                    <div style={{fontSize:18,flexShrink:0}}>{icon}</div>
                    <div>
                      <div style={{fontSize:12,fontWeight:600,color:"#e2e0dc",marginBottom:2}}>{title}</div>
                      <div style={{fontSize:11,color:"#706b63",lineHeight:1.5}}>{desc}</div>
                    </div>
                  </div>)}
                </div>
                <div style={{background:"rgba(196,168,130,.04)",border:"1px solid rgba(196,168,130,.1)",borderRadius:8,padding:14}}>
                  <div style={{fontSize:11,fontWeight:700,color:G,textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Typical Turnarounds</div>
                  {[["Small","Under 1 tonne","~1 hr"],["Medium","1–10 tonnes","~2 hrs"],["Large","10 tonnes+","~4 hrs"]].map(([size,weight,time])=><div key={size} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,paddingBottom:10,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                    <div><div style={{fontSize:12,color:"#e2e0dc",fontWeight:500}}>{size}</div><div style={{fontSize:11,color:"#4a4540"}}>{weight}</div></div>
                    <div style={{fontSize:13,fontWeight:700,color:G,fontFamily:M}}>{time}</div>
                  </div>)}
                  <div style={{fontSize:11,color:"#4a4540",textAlign:"center"}}>Complex work may take longer</div>
                </div>
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:8,padding:14,fontSize:11,color:"#706b63",lineHeight:1.7}}>
                  🔒 Files encrypted in transit and at rest. Project details never shared outside our team.
                </div>
              </div>
            </div>
          </div>}

          {estView==="tracking"&&(()=>{
              const STAGES=[
                {key:"enquiry",   icon:"📋",label:"Enquiry Received",   desc:"We have your brief and files",                 phase:"quote",     c:"#60a5fa"},
                {key:"reviewing", icon:"🔍",label:"Under Review",        desc:"Reviewing your submission",                    phase:"quote",     c:"#60a5fa"},
                {key:"pricing",   icon:"🤖",label:"Pricing in Progress", desc:"AI calculates materials and cost",             phase:"quote",     c:"#60a5fa"},
                {key:"human",     icon:"👁",label:"Human Review",        desc:"Estimator validates your quote",               phase:"quote",     c:"#60a5fa"},
                {key:"sent",      icon:"📧",label:"Quote Sent",          desc:"Your quote has been emailed to you",           phase:"quote",     c:"#60a5fa"},
                {key:"accepted",  icon:"✅",label:"Quote Accepted",      desc:"You accepted — time to make it real",          phase:"production",c:"#a78bfa"},
                {key:"payment",   icon:"💳",label:"Payment Received",    desc:"Deposit confirmed, your slot is booked",       phase:"production",c:"#a78bfa"},
                {key:"material",  icon:"🪨",label:"Material Sourced",    desc:"Stone arriving at our studio",                 phase:"production",c:"#a78bfa"},
                {key:"cutting",   icon:"⚙",label:"CNC Cutting",         desc:"Your piece is being machined from the block",  phase:"production",c:"#a78bfa"},
                {key:"finishing", icon:"✋",label:"Hand Finishing",       desc:"Artisans refining details and texture",        phase:"production",c:"#a78bfa"},
                {key:"polishing", icon:"✨",label:"Polishing and Sealing",desc:"Final polish and sealant applied",            phase:"production",c:"#a78bfa"},
                {key:"qc",        icon:"🔬",label:"Quality Inspection",  desc:"Dimensions and finish checked to spec",        phase:"production",c:"#a78bfa"},
                {key:"packaging", icon:"📦",label:"Packaged and Crated", desc:"Custom crating built for safe transport",      phase:"delivery",  c:"#22c55e"},
                {key:"transit",   icon:"🚚",label:"In Transit",          desc:"Your piece is on its way",                     phase:"delivery",  c:"#22c55e"},
                {key:"delivered", icon:"🏛",label:"Delivered",           desc:"Your piece has arrived — enjoy it",            phase:"delivery",  c:"#22c55e"},
              ];
              const PHASES=[
                {key:"quote",      label:"Quoting",    c:"#60a5fa"},
                {key:"production", label:"Production", c:"#a78bfa"},
                {key:"delivery",   label:"Delivery",   c:"#22c55e"},
              ];
              const order=estQ[0]||{id:"EQ-001",client:"Your Project",desc:"Stone project",estCost:null,stoneRec:"",step:1};
              const stepMap={1:1,2:1,3:2,4:3,5:4,6:5,7:6,8:7};
              const clientStep=Math.max(stepMap[order.step]||1,1);
              return <div style={{maxWidth:860,margin:"0 auto",paddingBottom:40}}>
                {/* Nav */}
                <div style={{display:"flex",gap:6,marginBottom:24}}>
                  {[["1. Request a Quote","client"],["2. Track Your Quote","tracking"]].map(([l,v])=>{
                    const a=estView===v;
                    return <button key={l} onClick={()=>setEstView(v)} style={{padding:"7px 14px",borderRadius:6,fontSize:12,fontWeight:a?700:400,cursor:"pointer",fontFamily:S,border:a?"1px solid rgba(196,168,130,.4)":"1px solid rgba(255,255,255,.08)",background:a?"rgba(196,168,130,.1)":"rgba(255,255,255,.03)",color:a?G:"#706b63"}}>{l}</button>;
                  })}
                </div>
                {/* Order header */}
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.07)",borderRadius:8,padding:"18px 22px",marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                  <div>
                    <div style={{fontSize:11,color:"#706b63",textTransform:"uppercase",letterSpacing:"1px",marginBottom:5}}>Your Order</div>
                    <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc",marginBottom:3}}>{order.client}</div>
                    <div style={{fontSize:12,color:"#a09a92"}}>{order.desc}</div>
                    {order.stoneRec&&<div style={{fontSize:12,color:"#706b63",marginTop:3}}>{"🪨 "+order.stoneRec}</div>}
                  </div>
                  <div style={{textAlign:"right",flexShrink:0,marginLeft:20}}>
                    <div style={{fontSize:11,color:"#706b63",marginBottom:4}}>{order.id&&order.id.replace("EQ","Ref #")}</div>
                    {order.estCost?<div style={{fontSize:22,fontWeight:700,color:G,fontFamily:M}}>{$(order.estCost)}</div>:<div style={{fontSize:12,color:"#4a4540",fontStyle:"italic"}}>Quote in preparation</div>}
                    <div style={{marginTop:8,fontSize:11,padding:"3px 10px",borderRadius:4,background:"rgba(34,197,94,.1)",border:"1px solid rgba(34,197,94,.2)",color:"#22c55e",fontWeight:600,display:"inline-block"}}>{"● "+STAGES[Math.min(clientStep-1,STAGES.length-1)].label}</div>
                  </div>
                </div>
                {/* Phase strip */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:16}}>
                  {PHASES.map(ph=>{
                    const phStages=STAGES.filter(s=>s.phase===ph.key);
                    const firstIdx=STAGES.findIndex(s=>s.phase===ph.key);
                    const done=clientStep>firstIdx+phStages.length;
                    const active=!done&&clientStep>firstIdx;
                    return <div key={ph.key} style={{padding:"12px 14px",borderRadius:8,border:active?"1px solid "+ph.c+"50":done?"1px solid rgba(34,197,94,.25)":"1px solid rgba(255,255,255,.06)",background:active?ph.c+"09":done?"rgba(34,197,94,.04)":"rgba(255,255,255,.01)"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}>
                        <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:done?"#22c55e":active?ph.c:"#4a4540"}}>{ph.label}</div>
                        <div style={{fontSize:11,color:done?"#22c55e":active?ph.c:"#3a3530"}}>{done?"✓":active?"●":"○"}</div>
                      </div>
                      <div style={{display:"flex",gap:3}}>
                        {phStages.map((_,i)=>{
                          const abs=firstIdx+i;
                          return <div key={i} style={{flex:1,height:3,borderRadius:4,background:clientStep>abs+1?"#22c55e":clientStep===abs+1?ph.c:"rgba(255,255,255,.08)"}}/>;
                        })}
                      </div>
                      <div style={{fontSize:10,color:"#4a4540",marginTop:5}}>{phStages.length+" steps"+(done?" · Complete":active?" · In progress":"")}</div>
                    </div>;
                  })}
                </div>
                {/* Timeline */}
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.07)",borderRadius:8,padding:"22px",position:"relative"}}>
                  <div style={{position:"absolute",left:38,top:22,bottom:22,width:2,background:"rgba(255,255,255,.06)"}}/>
                  <div style={{position:"absolute",left:38,top:22,width:2,background:"#22c55e",height:Math.max(0,(clientStep-1)/(STAGES.length-1)*100)+"%",maxHeight:"calc(100% - 44px)",transition:"height .8s"}}/>
                  {STAGES.map((st,i)=>{
                    const done=i<clientStep-1;
                    const current=i===clientStep-1;
                    const isFirst=i===0||STAGES[i-1].phase!==st.phase;
                    return <div key={st.key}>
                      {isFirst&&i>0&&<div style={{marginLeft:54,marginTop:14,marginBottom:10,fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"1.5px",color:st.c,opacity:i>=clientStep?.4:1}}>{PHASES.find(p=>p.key===st.phase).label}</div>}
                      <div style={{display:"flex",alignItems:"flex-start",gap:14,marginBottom:i<STAGES.length-1?14:0,position:"relative",zIndex:1}}>
                        <div style={{width:30,height:30,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,transition:"all .4s",
                          background:done?"#22c55e":current?st.c+"25":"rgba(255,255,255,.04)",
                          border:done?"2px solid #22c55e":current?"2px solid "+st.c:"1px solid rgba(255,255,255,.09)",
                          color:done?"#0c0b0a":current?st.c:"#3a3530",
                          boxShadow:current?"0 0 14px "+st.c+"55":"none"}}>
                          {done?"✓":st.icon}
                        </div>
                        <div style={{paddingTop:4,flex:1,opacity:i>clientStep-1?.3:1}}>
                          <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:2}}>
                            <span style={{fontSize:13,fontWeight:done||current?600:400,color:current?"#e2e0dc":done?"#a09a92":"#4a4540"}}>{st.label}</span>
                            {current&&<span style={{fontSize:10,padding:"1px 7px",borderRadius:4,background:st.c+"20",border:"1px solid "+st.c+"40",color:st.c,fontWeight:600}}>Now</span>}
                          </div>
                          <div style={{fontSize:11,color:"#4a4540",lineHeight:1.5}}>{st.desc}</div>
                        </div>
                      </div>
                    </div>;
                  })}
                </div>
                {/* Footer */}
                <div style={{marginTop:14,padding:"12px 16px",borderRadius:8,background:"rgba(196,168,130,.03)",border:"1px solid rgba(196,168,130,.08)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{fontSize:12,color:"#706b63"}}>Questions about your order?</div>
                  <div style={{display:"flex",gap:8}}>
                    <Btn small color={G}>{"📧 Email us"}</Btn>
                    <Btn small color="#60a5fa">{"📞 Call us"}</Btn>
                  </div>
                </div>
              </div>;
            })()}

          {estView==="manual"&&<div className="fu" style={{overflowY:"auto",flex:1}}>
            <div style={{display:"flex",gap:20,alignItems:"stretch"}}>

              {/* ══════════════════════════════
                  LEFT — INPUTS
              ══════════════════════════════ */}
              <div style={{width:360,flexShrink:0,display:"flex",flexDirection:"column",gap:10}}>

                {/* ── 1. Client & Project ── */}
                <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G,flexShrink:0}}>1</div>
                    <div style={{fontSize:13,fontWeight:700,color:"#e2e0dc"}}>Client & Project</div>
                  </div>
                  <Inp label="Client Name" value={estClientName} onChange={setEstClientName} ph="e.g. RAMSA Partners"/>
                  <Inp label="Project Description" value={estProjectName} onChange={setEstProjectName} ph="e.g. Facade capitals × 24"/>
                  {editingQuoteId&&<div style={{marginTop:4,padding:"6px 10px",borderRadius:4,background:"rgba(196,168,130,.06)",border:"1px solid rgba(196,168,130,.12)",fontSize:11,color:G}}>✏️ Editing {editingQuoteId} — {estQ.find(x=>x.id===editingQuoteId)?.client}</div>}
                </div>

                {/* ── 2. Dimensions & Complexity ── */}
                <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G,flexShrink:0}}>2</div>
                    <div style={{fontSize:13,fontWeight:700,color:"#e2e0dc"}}>Dimensions & Complexity</div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:10}}>
                    <Inp label="Length (m)" value={estDims.l} onChange={v=>setEstDims(d=>({...d,l:v}))} type="number"/>
                    <Inp label="Width (m)" value={estDims.w} onChange={v=>setEstDims(d=>({...d,w:v}))} type="number"/>
                    <Inp label="Height (m)" value={estDims.h} onChange={v=>setEstDims(d=>({...d,h:v}))} type="number"/>
                  </div>
                  {estimate&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
                    {[["Vol",estimate.vol.toFixed(2),"m³","#e2e0dc"],["Area",estimate.sa.toFixed(2),"m²","#a09a92"],["Mass",estimate.mt.toFixed(2),"t","#a09a92"]].map(([l,v,u,c])=><div key={l} style={{background:"rgba(255,255,255,.03)",borderRadius:6,padding:"6px 10px",textAlign:"center"}}>
                      <div style={{fontSize:14,fontWeight:700,color:c,fontFamily:M}}>{v}<span style={{fontSize:10,color:"#706b63",marginLeft:2}}>{u}</span></div>
                      <div style={{fontSize:10,color:"#4a4540"}}>{l}</div>
                    </div>)}
                  </div>}
                  <div style={{marginBottom:10}}>
                    <div style={{fontSize:11,color:"#706b63",fontWeight:500,marginBottom:5}}>Complexity</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:4}}>
                      {[["low","×0.6","Simple forms"],["medium","×1.0","Standard"],["high","×1.6","Complex detail"],["extreme","×2.4","Museum-grade"]].map(([c,mult,desc])=><button key={c} onClick={()=>setEstCx(c)} style={{padding:"7px 4px",borderRadius:6,border:estCx===c?"1px solid rgba(196,168,130,.4)":"1px solid rgba(255,255,255,.08)",background:estCx===c?"rgba(196,168,130,.1)":"rgba(255,255,255,.02)",cursor:"pointer",textAlign:"center",transition:"all .15s"}}>
                        <div style={{fontSize:11,fontWeight:700,color:estCx===c?G:"#a09a92",textTransform:"capitalize"}}>{c}</div>
                        <div style={{fontSize:10,color:estCx===c?G:"#4a4540"}}>{mult}</div>
                      </button>)}
                    </div>
                  </div>
                  <Inp label="Quantity" value={estQty} onChange={setEstQty} type="number"/>
                </div>

                {/* ── 3. Stone Selection ── */}
                <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G,flexShrink:0}}>3</div>
                    <div style={{fontSize:13,fontWeight:700,color:"#e2e0dc"}}>Stone Selection</div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
                    <div style={{marginBottom:7}}>
                      <div style={{fontSize:14,color:"#706b63",marginBottom:2,fontWeight:500}}>Family</div>
                      <select value={estStone?.fam||""} onChange={e=>{const v=e.target.value;const first=STONE_DB.find(s=>s.fam===v);if(first)setEstStoneId(String(first.id));}} style={{...DS,width:"100%",cursor:"pointer"}}>
                        <option value="" style={{background:"#1a1918"}}>—</option>
                        {["Marble","Limestone","Granite","Sandstone","Travertine"].map(f=><option key={f} value={f} style={{background:"#1a1918",color:"#e2e0dc"}}>{f}</option>)}
                      </select>
                    </div>
                    <div style={{marginBottom:7}}>
                      <div style={{fontSize:14,color:"#706b63",marginBottom:2,fontWeight:500}}>Stone</div>
                      <select value={estStoneId} onChange={e=>setEstStoneId(e.target.value)} style={{...DS,width:"100%",cursor:"pointer"}}>
                        <option value="" style={{background:"#1a1918"}}>—</option>
                        {(estStone?.fam?STONE_DB.filter(s=>s.fam===estStone.fam):STONE_DB).map(s=><option key={s.id} value={String(s.id)} style={{background:"#1a1918",color:"#e2e0dc"}}>{s.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{opacity:estStone?1:0,pointerEvents:estStone?"auto":"none",transition:"opacity .15s"}}>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:4,marginBottom:8}}>
                      {[["Hardness",estStone?.hard??"-"],["Polish",estStone?.pol??"-"],["Yield",(estStone?.yld??"-")+"%"],["Price",estStone?$(stonePrice(estStone))+"/t":"-"],["Dur",(estStone?.dur??"-")+"/10"],["Pattern",estStone?.pat??"-"]].map(([l,v])=><div key={l} style={{background:"rgba(255,255,255,.03)",borderRadius:4,padding:"5px 7px"}}>
                        <div style={{fontSize:10,color:"#4a4540"}}>{l}</div>
                        <div style={{fontSize:12,fontWeight:600,color:G}}>{v}</div>
                      </div>)}
                    </div>
                    {estStone&&<div style={{marginBottom:10,padding:10,borderRadius:6,background:"rgba(0,0,0,.15)",border:"1px solid rgba(255,255,255,.03)",textAlign:"center"}}>
                      <svg width="100%" height="80" viewBox="0 0 320 100">
                        <defs>
                          <linearGradient id="stFace" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={CC(estStone.color)} stopOpacity="0.5"/><stop offset="100%" stopColor={CC(estStone.color)} stopOpacity="0.2"/></linearGradient>
                          <linearGradient id="stTop" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor={CC(estStone.color)} stopOpacity="0.35"/><stop offset="100%" stopColor={CC(estStone.color)} stopOpacity="0.15"/></linearGradient>
                          <linearGradient id="stSide" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={CC(estStone.color)} stopOpacity="0.25"/><stop offset="100%" stopColor={CC(estStone.color)} stopOpacity="0.1"/></linearGradient>
                        </defs>
                        <polygon points="40,35 180,35 180,85 40,85" fill="url(#stFace)" stroke={CC(estStone.color)} strokeWidth="0.5" opacity="0.8"/>
                        <polygon points="40,35 75,18 215,18 180,35" fill="url(#stTop)" stroke={CC(estStone.color)} strokeWidth="0.5" opacity="0.6"/>
                        <polygon points="180,35 215,18 215,68 180,85" fill="url(#stSide)" stroke={CC(estStone.color)} strokeWidth="0.5" opacity="0.5"/>
                        {estStone.pat==="Veined"&&<><path d="M55 42 Q90 55 110 75" fill="none" stroke={CC(estStone.color)} strokeWidth="0.8" opacity="0.3"/><path d="M80 38 Q120 50 160 80" fill="none" stroke={CC(estStone.color)} strokeWidth="0.5" opacity="0.2"/><path d="M130 38 Q155 55 170 78" fill="none" stroke={CC(estStone.color)} strokeWidth="0.6" opacity="0.25"/></>}
                        {estStone.pat==="Speckled"&&[...Array(20)].map((_,i)=><circle key={i} cx={50+Math.sin(i*7)*60+60} cy={40+Math.cos(i*5)*20+10} r={1+Math.sin(i*3)*0.5} fill={CC(estStone.color)} opacity={0.15+Math.sin(i*4)*0.1}/>)}
                        {estStone.pat==="Brecciated"&&<><polygon points="60,45 80,42 85,60 65,58" fill="none" stroke={CC(estStone.color)} strokeWidth="0.6" opacity="0.3"/><polygon points="100,50 125,48 130,70 105,68" fill="none" stroke={CC(estStone.color)} strokeWidth="0.6" opacity="0.25"/><polygon points="140,42 160,40 158,65 138,62" fill="none" stroke={CC(estStone.color)} strokeWidth="0.5" opacity="0.2"/></>}
                        {estStone.pat==="Layered"&&[0,1,2,3,4].map(i=><line key={i} x1="45" y1={42+i*10} x2="175" y2={42+i*10} stroke={CC(estStone.color)} strokeWidth="0.5" opacity={0.15+i*0.03}/>)}
                        <text x="225" y="32" fill="#e2e0dc" fontSize="9" fontWeight="600" fontFamily={S}>{estStone.name}</text>
                        <text x="225" y="45" fill={FC(estStone.fam)} fontSize="8" fontFamily={M}>{estStone.fam} · {estStone.color}</text>
                        <text x="225" y="57" fill="#706b63" fontSize="7" fontFamily={M}>{estStone.origin}</text>
                        <text x="225" y="68" fill="#706b63" fontSize="7" fontFamily={M}>{estStone.grain}</text>
                      </svg>
                      <div style={{fontSize:11,color:"#706b63",marginTop:2}}>{estStone.name} from {estStone.origin}</div>
                    </div>}
                  </div>
                  <div style={{marginBottom:7}}>
                    <div style={{fontSize:14,color:"#706b63",marginBottom:2,fontWeight:500}}>Quality Level</div>
                    <select value={estQuality} onChange={e=>setEstQuality(e.target.value)} style={{...DS,width:"100%",cursor:"pointer"}}>
                      {[["Standard","×0.85 — Commercial grade"],["Premium","×1.0 — High quality"],["Artisan","×1.3 — Hand-selected"],["Museum","×1.6 — Finest available"]].map(([v,l])=><option key={v} value={v} style={{background:"#1a1918",color:"#e2e0dc"}}>{v} — {l}</option>)}
                    </select>
                  </div>
                </div>

                {/* ── 4. Procurement ── */}
                <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G,flexShrink:0}}>4</div>
                    <div style={{fontSize:13,fontWeight:700,color:"#e2e0dc"}}>Procurement</div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                    <Inp label="Distance (km)" value={estDist} onChange={setEstDist} type="number"/>
                    <Inp label="Shipping factor ($/km/t)" value={estShipFactor} onChange={setEstShipFactor} type="number"/>
                  </div>
                  {estStone&&<div style={{marginTop:6,fontSize:11,color:"#4a4540",lineHeight:1.6}}>
                    Origin: <span style={{color:"#a09a92"}}>{estStone.origin}</span>
                    {estStone.origin!=="USA"&&<span style={{color:"#f59e0b",marginLeft:6}}>⚠ International — $1,500 surcharge applies</span>}
                  </div>}
                </div>

                {/* ── 5. Labour & Margins ── */}
                <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:G,flexShrink:0}}>5</div>
                    <div style={{fontSize:13,fontWeight:700,color:"#e2e0dc"}}>Labour & Margins</div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                    <Inp label="Robot rate ($/hr)" value={estRobotRate} onChange={setEstRobotRate} type="number"/>
                    <Inp label="Hand finishing ($/hr)" value={estHandRate} onChange={setEstHandRate} type="number"/>
                    <Inp label="Overhead (%)" value={estOverhead} onChange={setEstOverhead} type="number"/>
                    <Inp label="Profit margin (%)" value={estProfit} onChange={setEstProfit} type="number"/>
                  </div>
                </div>

                {/* ── Client Files ── */}
                <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                    <div style={{fontSize:13,fontWeight:700,color:"#e2e0dc"}}>Client Files</div>
                    <span style={{fontSize:12,color:"#60a5fa",cursor:"pointer",fontWeight:600}} onClick={()=>estFileRef.current?.click()}>+ Add Files</span>
                    <input ref={estFileRef} type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.stl,.obj,.step,.dwg,.docx" style={{display:"none"}} onChange={e=>{const newFiles=[...e.target.files].map(f=>({name:f.name,type:f.name.match(/\.(jpg|jpeg|png|gif)$/i)?"Photos":f.name.match(/\.(stl|obj|step|iges)$/i)?"3D Models":f.name.match(/\.(pdf)$/i)?"Sketches":"Concepts"}));setEstFiles(prev=>[...prev,...newFiles]);setEstAiRefresh(r=>r+1);e.target.value="";}}/>\
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:5}}>
                    {[{icon:"📸",label:"Photos"},{icon:"🧊",label:"3D Models"},{icon:"✏️",label:"Sketches"},{icon:"📐",label:"Concepts"}].map(d=>{const count=estFiles.filter(f=>f.type===d.label).length;return <div key={d.label} onClick={()=>estFileRef.current?.click()} style={{padding:"8px 4px",borderRadius:6,background:"rgba(255,255,255,.02)",border:count>0?"1px solid rgba(96,165,250,.2)":"1px solid rgba(255,255,255,.04)",textAlign:"center",cursor:"pointer"}}>
                      <div style={{fontSize:14}}>{d.icon}</div>
                      <div style={{fontSize:10,color:"#e2e0dc",fontWeight:600,marginTop:2}}>{d.label}</div>
                      <div style={{fontSize:10,color:count>0?"#60a5fa":"#4a4540"}}>{count} file{count!==1?"s":""}</div>
                    </div>;})}
                  </div>
                  {estFiles.length>0&&<div style={{fontSize:10,color:"#4a4540",marginTop:6,fontFamily:M,lineHeight:1.5}}>📎 {estFiles.map(f=>f.name).join(", ")}</div>}
                  {estAiRefresh>0&&<div style={{fontSize:10,color:"#22c55e",marginTop:4}}>✓ Files added — AI recommendations updated</div>}
                </div>

              </div>

              {/* ══════════════════════════════
                  RIGHT — RESULTS
              ══════════════════════════════ */}
              <div style={{flex:1,display:"flex",flexDirection:"column",gap:10}}>

                {!estimate?<div style={{background:CB,border:BD,borderRadius:8,padding:40,textAlign:"center",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10}}>
                  <div style={{fontSize:32,opacity:.2}}>📐</div>
                  <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Ready to estimate</div>
                  <div style={{fontSize:12,color:"#706b63",maxWidth:260,lineHeight:1.6}}>Fill in dimensions and select a stone on the left to generate a live estimate</div>
                </div>:<>

                  {/* ── Physics ── */}
                  <div style={{background:CB,border:BD,borderRadius:8,padding:"12px 16px"}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:"1px",marginBottom:10}}>Material Physics</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
                      {[["Volume",estimate.vol.toFixed(3),"m³","#e2e0dc"],["Surface Area",estimate.sa.toFixed(2),"m²","#a09a92"],["Total Mass",estimate.mt.toFixed(2),"t","#a09a92"]].map(([l,v,u,c])=><div key={l}>
                        <div style={{fontSize:22,fontWeight:700,color:c,fontFamily:M,lineHeight:1}}>{v}<span style={{fontSize:11,color:"#706b63",marginLeft:3}}>{u}</span></div>
                        <div style={{fontSize:11,color:"#4a4540",marginTop:2}}>{l}</div>
                      </div>)}
                    </div>
                  </div>

                  {/* ── Time split ── */}
                  <div style={{background:CB,border:BD,borderRadius:8,padding:"12px 16px"}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:"1px",marginBottom:10}}>Production Time</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:10}}>
                      {[["Robot (KUKA)",estimate.rh.toFixed(1),"hrs","#22c55e"],["Hand Finishing",estimate.hh.toFixed(1),"hrs","#a78bfa"],["Total",estimate.th.toFixed(1),"hrs","#e2e0dc"]].map(([l,v,u,c])=><div key={l}>
                        <div style={{fontSize:22,fontWeight:700,color:c,fontFamily:M,lineHeight:1}}>{v}<span style={{fontSize:11,color:"#706b63",marginLeft:3}}>{u}</span></div>
                        <div style={{fontSize:11,color:"#4a4540",marginTop:2}}>{l}</div>
                      </div>)}
                    </div>
                    <div style={{height:6,borderRadius:4,overflow:"hidden",background:"rgba(255,255,255,.05)",display:"flex"}}>
                      <div style={{width:(estimate.rh/estimate.th*100)+"%",background:"#22c55e",transition:"width .4s"}}/>
                      <div style={{flex:1,background:"#a78bfa"}}/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#706b63",marginTop:4}}>
                      <span style={{color:"#22c55e"}}>Robot {Math.round(estimate.rh/estimate.th*100)}%</span>
                      <span style={{color:"#a78bfa"}}>Hand {Math.round(estimate.hh/estimate.th*100)}%</span>
                    </div>
                  </div>

                  {/* ── Cost breakdown ── */}
                  <div style={{background:CB,border:BD,borderRadius:8,padding:"12px 16px"}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:"1px",marginBottom:10}}>Cost Breakdown</div>
                    {[
                      {l:"Material",      v:estimate.matC,       c:G,         rate:$(stonePrice(estStone))+"/t",       desc:estimate.mt.toFixed(2)+"t × price/yield"},
                      {l:"Milling",       v:estimate.rc,         c:"#22c55e", rate:"$"+estRobotRate+"/hr",             desc:estimate.rh.toFixed(1)+" robot hrs"},
                      {l:"Hand Finishing",v:estimate.hc,         c:"#a78bfa", rate:"$"+estHandRate+"/hr",              desc:estimate.hh.toFixed(1)+" hand hrs"},
                      {l:"Shipping",      v:estimate.sh,         c:"#f59e0b", rate:"flat",                             desc:estStone?.origin!=="USA"?"Intl + dist + weight":"Dist + weight"},
                      {l:"Overhead",      v:estimate.oh,         c:"#60a5fa", rate:estOverhead+"%",                    desc:"of subtotal"},
                      {l:"Profit",        v:estimate.profitAmt,  c:"#f472b6", rate:estProfit+"%",                     desc:"of sub + overhead"},
                    ].map(b=><div key={b.l} style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
                      <span style={{width:90,fontSize:11,color:"#a09a92",flexShrink:0}}>{b.l}</span>
                      <div style={{flex:1,height:10,background:"rgba(255,255,255,.03)",borderRadius:4,overflow:"hidden"}}>
                        <div style={{width:Math.max(2,b.v/estimate.tot*100)+"%",height:"100%",background:b.c,borderRadius:4,transition:"width .4s"}}/>
                      </div>
                      <span style={{width:60,fontSize:11,color:"#706b63",fontFamily:M,flexShrink:0,textAlign:"right"}}>{b.rate}</span>
                      <span style={{width:130,fontSize:10,color:"#706b63",flexShrink:0}}>{b.desc}</span>
                      <span style={{width:65,fontSize:11,fontFamily:M,color:b.c,textAlign:"right",flexShrink:0,fontWeight:600}}>{$(b.v)}</span>
                    </div>)}
                  </div>

                  {/* ── TOTAL ── */}
                  <div style={{padding:"18px 20px",borderRadius:8,background:"rgba(196,168,130,.06)",border:"1px solid rgba(196,168,130,.2)"}}>
                    <div style={{fontSize:11,fontWeight:700,color:G,textTransform:"uppercase",letterSpacing:"1px",marginBottom:6}}>Total Estimated Cost</div>
                    <div style={{fontSize:40,fontWeight:700,color:G,fontFamily:M,lineHeight:1}}>{$(estimate.tot)}</div>
                    <div style={{fontSize:11,color:"#706b63",marginTop:4}}>Before client margin · {estQty}× unit{Number(estQty)>1?"s":""} · {estStone?.name}</div>
                  </div>

                  {/* ── AI Recommendations + Market Intelligence ── */}
                  {(()=>{
                    // Stone price trend data (from market intelligence)
                    const stoneTrends={
                      "Marble":    {trend:"+4.2%",dir:"up",  note:"Carrara region exports tightening — port congestion Q1"},
                      "Limestone": {trend:"+1.8%",dir:"up",  note:"Indiana quarries at 92% capacity — moderate pressure"},
                      "Granite":   {trend:"-0.6%",dir:"down",note:"Indian rupee weakness offsetting material gains"},
                      "Sandstone": {trend:"+2.1%",dir:"up",  note:"Australian supply constrained — lead times extending"},
                      "Travertine":{trend:"+3.4%",dir:"up",  note:"Turkish lira volatility adding import uncertainty"},
                    };
                    const trend=estStone?stoneTrends[estStone.fam]||{trend:"0%",dir:"flat",note:"Stable"}:{trend:"—",dir:"flat",note:""};
                    const trendUp=trend.dir==="up";

                    // FX exposure
                    const fxRisk=estStone?.origin==="Italy"?"EUR/USD at 1.071 — down 1.0% since last quarter. Italian stone costs effectively +1.0% for USD buyers."
                      :estStone?.origin==="India"?"USD/INR at 83.7 — Indian granite marginally cheaper for US importers."
                      :estStone?.origin==="Turkey"?"Turkish lira volatile — lock in pricing now to avoid exposure."
                      :"No significant FX exposure for this stone origin.";

                    // Freight
                    const intlStone=estStone?.origin!=="USA";
                    const freightNote=intlStone
                      ?"Port surcharges up $4/t vs last quarter. Container availability tight on Italy→US routes — factor 3–4 week buffer."
                      :"Domestic freight stable. No surcharge risk.";

                    // Weather / seasonal risk
                    const month=new Date().getMonth();
                    const weatherRisk=month>=10||month<=1
                      ?"Winter — quarry access limited in Alpine regions. Delivery delays possible Jan–Feb."
                      :month>=5&&month<=8
                      ?"Summer peak — quarry output high but shipping lanes congested. Book freight early."
                      :"Shoulder season — optimal procurement window. Stable conditions expected.";

                    // Complexity-based suggestion
                    const cxSuggest=estCx==="extreme"?"Extreme complexity detected — consider 15–20% contingency buffer in quote."
                      :estCx==="high"?"High complexity — recommend 10% contingency above standard margin."
                      :"Standard complexity — normal margin rules apply.";

                    // Material cost % warning
                    const matPct=Math.round(estimate.matC/estimate.tot*100);
                    const matWarn=matPct>45?"Material is "+matPct+"% of total cost — any stone price movement has outsized impact. Consider locking in price with supplier now."
                      :"Material at "+matPct+"% of total — within normal range.";

                    // Suggested margin adjustment based on risks
                    const riskCount=[trendUp, intlStone, estCx==="high"||estCx==="extreme", month>=10||month<=1].filter(Boolean).length;
                    const suggestedMarginAdj=riskCount>=3?"+8–12%":riskCount===2?"+4–8%":riskCount===1?"+2–4%":"No adjustment needed";
                    const adjColor=riskCount>=3?"#ef4444":riskCount===2?"#f59e0b":riskCount===1?G:"#22c55e";

                    const recs=[
                      {
                        icon:"📈", label:"Stone Price Trend",
                        tag:trend.trend, tagColor:trendUp?"#ef4444":"#22c55e",
                        body:trend.note,
                        action:trendUp?"Consider adding "+Math.round((parseFloat(trend.trend)+2))+"% buffer to quote to protect margin":null,
                      },
                      {
                        icon:"💱", label:"FX Exposure",
                        tag:estStone?.origin==="USA"?"Low risk":"Monitor",
                        tagColor:estStone?.origin==="USA"?"#22c55e":"#f59e0b",
                        body:fxRisk,
                        action:intlStone?"Quote in USD only. Add 2% FX buffer for orders not placed within 30 days.":null,
                      },
                      {
                        icon:"🚢", label:"Freight & Logistics",
                        tag:intlStone?"Surcharge risk":"Stable",
                        tagColor:intlStone?"#f59e0b":"#22c55e",
                        body:freightNote,
                        action:intlStone?"Add $4–6/t freight buffer to procurement cost.":null,
                      },
                      {
                        icon:"🌦", label:"Seasonal Risk",
                        tag:month>=10||month<=1?"High":month>=5&&month<=8?"Medium":"Low",
                        tagColor:month>=10||month<=1?"#ef4444":month>=5&&month<=8?"#f59e0b":"#22c55e",
                        body:weatherRisk,
                        action:month>=10||month<=1?"Add 2–3 week buffer to delivery timeline in client quote.":null,
                      },
                      {
                        icon:"⚙️", label:"Complexity Assessment",
                        tag:estCx.charAt(0).toUpperCase()+estCx.slice(1),
                        tagColor:estCx==="extreme"?"#ef4444":estCx==="high"?"#f59e0b":G,
                        body:cxSuggest,
                        action:estCx==="extreme"||estCx==="high"?"Review HITL hours estimate — complex jobs frequently run 15–20% over initial time estimate.":null,
                      },
                      {
                        icon:"💰", label:"Material Cost Exposure",
                        tag:matPct+"%",
                        tagColor:matPct>45?"#ef4444":matPct>35?"#f59e0b":"#22c55e",
                        body:matWarn,
                        action:matPct>45?"Get supplier price lock before sending quote to client.":null,
                      },
                    ];

                    return <div style={{background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.15)",borderRadius:8,overflow:"hidden",flexShrink:0}}>
                      {/* Header */}
                      <div style={{padding:"12px 16px",borderBottom:"1px solid rgba(167,139,250,.1)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{display:"flex",alignItems:"center",gap:8}}>
                          <div style={{fontSize:12,fontWeight:700,color:"#a78bfa"}}>🤖 AI Recommendations & Market Intelligence</div>
                          <div style={{fontSize:10,padding:"2px 7px",borderRadius:4,background:"rgba(167,139,250,.15)",border:"1px solid rgba(167,139,250,.25)",color:"#a78bfa"}}>{recs.filter(r=>r.action).length} actions suggested</div>
                        </div>
                        {/* Margin adjustment summary */}
                        <div style={{textAlign:"right"}}>
                          <div style={{fontSize:10,color:"#706b63"}}>Suggested quote adjustment</div>
                          <div style={{fontSize:14,fontWeight:700,color:adjColor,fontFamily:M}}>{suggestedMarginAdj}</div>
                        </div>
                      </div>
                      {/* Risk items */}
                      <div style={{padding:"4px 0"}}>
                        {recs.map((r,i)=><div key={i} style={{padding:"10px 16px",borderBottom:i<recs.length-1?"1px solid rgba(255,255,255,.04)":"none",display:"flex",alignItems:"flex-start",gap:12}}>
                          <div style={{fontSize:18,flexShrink:0,marginTop:1}}>{r.icon}</div>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                              <span style={{fontSize:12,fontWeight:600,color:"#e2e0dc"}}>{r.label}</span>
                              <span style={{fontSize:10,padding:"1px 6px",borderRadius:4,background:r.tagColor+"18",border:"1px solid "+r.tagColor+"35",color:r.tagColor,fontWeight:600}}>{r.tag}</span>
                            </div>
                            <div style={{fontSize:11,color:"#706b63",lineHeight:1.5,marginBottom:r.action?5:0}}>{r.body}</div>
                            {r.action&&<div style={{fontSize:11,color:"#a78bfa",lineHeight:1.5,padding:"4px 8px",borderRadius:4,background:"rgba(167,139,250,.06)",border:"1px solid rgba(167,139,250,.12)"}}>💡 {r.action}</div>}
                          </div>
                        </div>)}
                      </div>
                      {/* Quote adjustment callout */}
                      {riskCount>0&&<div style={{padding:"10px 16px",borderTop:"1px solid rgba(167,139,250,.1)",background:"rgba(167,139,250,.04)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{fontSize:11,color:"#a09a92"}}>Based on {riskCount} active risk factor{riskCount>1?"s":""} — recommended to add <span style={{color:adjColor,fontWeight:700}}>{suggestedMarginAdj}</span> to client quote margin</div>
                        <Btn small color="#a78bfa" onClick={()=>{
                          const adj=riskCount>=3?10:riskCount===2?6:3;
                          setEstMargin(m=>Math.min(50,m+adj));
                          setQuoteApplied(false);
                        }}>Apply adjustment ↑</Btn>
                      </div>}
                    </div>;
                  })()}
                  <div style={{background:CB,border:BD,borderRadius:8,padding:"12px 16px"}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Client Quote & Margin</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}>
                      {[{label:"Conservative",pct:15,c:"#60a5fa"},{label:"Standard",pct:25,c:G},{label:"Premium",pct:40,c:"#22c55e"}].map(q=>{
                        const sel=estMargin===q.pct;
                        return <div key={q.pct} onClick={()=>{setEstMargin(q.pct);setQuoteApplied(false);setLossConfirm(false);}} style={{background:sel?q.c+"14":CB,border:sel?"1px solid "+q.c+"40":BD,borderRadius:6,padding:"10px 10px",textAlign:"center",cursor:"pointer",transition:"all .15s"}}>
                          <div style={{fontSize:10,color:sel?q.c:"#706b63",marginBottom:3}}>{q.label} ({q.pct}%)</div>
                          <div style={{fontSize:14,fontWeight:700,color:q.c,fontFamily:M}}>{$(estimate.tot*(1+q.pct/100))}</div>
                          <div style={{fontSize:10,color:"#4a4540"}}>+{$(estimate.tot*q.pct/100)}</div>
                        </div>;
                      })}
                    </div>
                    {(()=>{
                      /* Unified color scale: <5 red(loss), <15 amber, <20 blue(conservative), <30 gold(standard), <40 green(premium), 40+ purple */
                      const mC=estMargin<5?"#ef4444":estMargin<15?"#f59e0b":estMargin<20?"#60a5fa":estMargin<30?G:estMargin<40?"#22c55e":"#a78bfa";
                      const mLabel=estMargin<5?"Loss":estMargin<15?"Low":estMargin<20?"Conservative":estMargin<30?"Standard":estMargin<40?"Premium":"Aggressive";
                      const quotedPrice=Math.round(estimate.tot*(1+estMargin/100));
                      const isLoss=estMargin<5;
                      return <>
                    <div style={{marginBottom:6,display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
                      <div style={{fontSize:12,fontWeight:600,color:"#e2e0dc"}}>Custom margin: <span style={{color:mC,fontFamily:M,fontSize:14}}>{estMargin}%</span> <span style={{fontSize:10,color:mC,fontWeight:400}}>({mLabel})</span></div>
                      <div style={{fontSize:14,fontWeight:700,fontFamily:M,color:mC}}>{$(quotedPrice)}</div>
                    </div>
                    <div style={{position:"relative",marginBottom:6}}>
                      <div style={{position:"absolute",top:8,left:0,right:0,height:4,borderRadius:4,background:"rgba(255,255,255,.06)"}}/>
                      <div style={{position:"absolute",top:8,left:0,height:4,borderRadius:4,background:mC,width:(estMargin/50*100)+"%",transition:"width .1s"}}/>
                      <input type="range" min={0} max={50} value={estMargin} onChange={e=>{setEstMargin(Number(e.target.value));setQuoteApplied(false);setLossConfirm(false);}} style={{width:"100%",appearance:"none",WebkitAppearance:"none",background:"transparent",height:20,cursor:"pointer",position:"relative",zIndex:1}}/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#4a4540",marginBottom:8}}>
                      <span style={{color:"#ef4444"}}>Loss zone</span>
                      <span>Historical win rate: <span style={{color:mC,fontWeight:600}}>{estMargin<10?"92%":estMargin<15?"78%":estMargin<20?"65%":estMargin<25?"52%":estMargin<30?"41%":estMargin<35?"28%":estMargin<40?"18%":"8%"}</span> at {estMargin}%</span>
                      <span style={{color:"#a78bfa"}}>Premium</span>
                    </div>
                    {!quoteApplied
                      ?isLoss&&!lossConfirm
                        ?<div style={{display:"flex",flexDirection:"column",gap:6}}>
                          <div style={{padding:"8px 12px",borderRadius:6,background:"rgba(239,68,68,.08)",border:"1px solid rgba(239,68,68,.25)",fontSize:12,color:"#ef4444",display:"flex",alignItems:"center",gap:6}}>
                            <span style={{fontSize:14}}>⚠</span> Margin is {estMargin}% — this quote is in the <strong>loss zone</strong>. Are you sure?
                          </div>
                          <div style={{display:"flex",gap:6}}>
                            <Btn primary color="#ef4444" style={{flex:1}} onClick={()=>setLossConfirm(true)}>Yes, apply loss rate</Btn>
                            <Btn color="#706b63" style={{flex:1}} onClick={()=>setEstMargin(15)}>Reset to 15%</Btn>
                          </div>
                        </div>
                        :<Btn primary color={mC} style={{width:"100%"}} onClick={()=>setQuoteApplied(true)}>✓ Apply Quote — {$(quotedPrice)} at {estMargin}%</Btn>
                      :<div style={{display:"flex",alignItems:"center",gap:8}}>
                        <div style={{flex:1,padding:"8px 12px",borderRadius:6,background:mC+"14",border:"1px solid "+mC+"35",fontSize:12,color:mC,fontWeight:600}}>✓ Quote applied — {$(quotedPrice)}{isLoss?" ⚠ Loss rate":""}</div>
                        <Btn small color="#706b63" onClick={()=>{setQuoteApplied(false);setLossConfirm(false);}}>Edit</Btn>
                      </div>}
                    </>;
                    })()}
                  </div>

                  {/* ── Actions ── */}
                  <div style={{background:CB,border:BD,borderRadius:8,padding:"12px 16px",opacity:quoteApplied?1:.45,pointerEvents:quoteApplied?"auto":"none",transition:"opacity .3s",position:"relative"}}>
                    {!quoteApplied&&<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,borderRadius:8}}>
                      <div style={{fontSize:12,color:"#f59e0b",background:"rgba(15,14,13,.85)",padding:"6px 14px",borderRadius:6,border:"1px solid rgba(245,158,11,.2)"}}>⚠ Apply a quote above to unlock actions</div>
                    </div>}
                    <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:"1px",marginBottom:10}}>Actions</div>

                    {editingQuoteId&&<div style={{marginBottom:10,padding:"8px 12px",borderRadius:6,background:"rgba(34,197,94,.05)",border:"1px solid rgba(34,197,94,.15)"}}>
                      <div style={{fontSize:11,color:"#22c55e",fontWeight:600,marginBottom:6}}>Editing {editingQuoteId} — {estQ.find(x=>x.id===editingQuoteId)?.client}</div>
                      <div style={{display:"flex",gap:6}}>
                        <Btn small primary color="#22c55e" onClick={()=>{const eq=estQ.find(x=>x.id===editingQuoteId);if(eq){const changes=[];if(eq.estCost!==Math.round(estimate.tot))changes.push({field:"estCost",from:$(eq.estCost||0),to:$(estimate.tot)});if(String(eq.stoneId)!==estStoneId)changes.push({field:"stone",from:"-",to:estStone?.name||"-"});setEstQ(q=>q.map(x=>x.id===editingQuoteId?{...x,estCost:Math.round(estimate.tot),stoneId:Number(estStoneId)||x.stoneId,dims:{...estDims},cx:estCx,changelog:[...(x.changelog||[]),{t:ts(),u:"Current User",changes:changes.length?changes:[{field:"reviewed",from:"-",to:"No changes"}]}]}:x));}setEditingQuoteId(null);setEstView("dashboard");}}>💾 Save to {editingQuoteId}</Btn>
                        <Btn small onClick={()=>setEditingQuoteId(null)}>Cancel</Btn>
                      </div>
                    </div>}

                    <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
                      <Btn small color="#60a5fa" primary={showEstAction==="email"} onClick={()=>setShowEstAction(showEstAction==="email"?null:"email")}>📧 Email to Client</Btn>
                      <Btn small color="#a78bfa" primary={showEstAction==="agent"} onClick={()=>setShowEstAction(showEstAction==="agent"?null:"agent")}>🤖 Give to Agent</Btn>
                      <Btn small color="#22c55e" primary={showEstAction==="shop"} onClick={()=>setShowEstAction(showEstAction==="shop"?null:"shop")}>🏭 Shop Floor</Btn>
                      <Btn small color={G} onClick={()=>setEstActionLog(l=>[{t:ts(),m:"PDF downloaded",u:"Current User"},...l])}>📄 PDF</Btn>
                    </div>

                    {showEstAction==="email"&&<div style={{padding:10,borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.1)",marginBottom:8}}>
                      <div style={{fontSize:12,fontWeight:600,color:"#60a5fa",marginBottom:6}}>Email Estimate to Client</div>
                      <Inp label="Client Email" value={estEmailTo} onChange={setEstEmailTo} ph="client@company.com"/>
                      <Btn small primary color="#60a5fa" onClick={()=>{if(estEmailTo){setEstActionLog(l=>[{t:ts(),m:"Estimate emailed to "+estEmailTo,u:"Current User"},...l]);setEstEmailTo("");setShowEstAction(null);}}}>Send</Btn>
                    </div>}

                    {showEstAction==="agent"&&<div style={{padding:10,borderRadius:6,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.1)",marginBottom:8}}>
                      <div style={{fontSize:12,fontWeight:600,color:"#a78bfa",marginBottom:6}}>Hand Off to Agent</div>
                      <textarea value={estAgentCtx} onChange={e=>setEstAgentCtx(e.target.value)} placeholder="Context for agent — alternative stones, turnaround priority, inventory check..." rows={3} style={{width:"100%",fontFamily:M,fontSize:12,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.07)",color:"#e2e0dc",padding:"6px 10px",borderRadius:4,resize:"vertical"}}/>
                      <Btn small primary color="#a78bfa" style={{marginTop:6}} onClick={()=>{if(estAgentCtx){setEstActionLog(l=>[{t:ts(),m:"Handed to agent: "+estAgentCtx.slice(0,60)+(estAgentCtx.length>60?"...":""),u:"Current User"},...l]);setEstAgentCtx("");setShowEstAction(null);}}}>Send to Agent</Btn>
                    </div>}

                    {showEstAction==="shop"&&<div style={{padding:10,borderRadius:6,background:"rgba(34,197,94,.04)",border:"1px solid rgba(34,197,94,.1)",marginBottom:8}}>
                      <div style={{fontSize:12,fontWeight:600,color:"#22c55e",marginBottom:6}}>Email to Shop Floor</div>
                      <div style={{display:"flex",alignItems:"center",marginBottom:6}}>
                        <input value={estShopEmail} onChange={e=>setEstShopEmail(e.target.value)} placeholder="name" style={{flex:1,fontSize:12,borderRadius:"4px 0 0 4px",padding:"6px 10px",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",color:"#e2e0dc"}}/>
                        <span style={{fontSize:12,color:"#706b63",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderLeft:"none",padding:"6px 10px",borderRadius:"0 4px 4px 0"}}>@monumentallabs.co</span>
                      </div>
                      <Btn small primary color="#22c55e" onClick={()=>{if(estShopEmail){setEstActionLog(l=>[{t:ts(),m:"Emailed to "+estShopEmail+"@monumentallabs.co",u:"Current User"},...l]);setEstShopEmail("");setShowEstAction(null);}}}>Send</Btn>
                    </div>}

                    {estActionLog.length>0&&<div style={{marginTop:8,paddingTop:8,borderTop:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",letterSpacing:"1px",marginBottom:6}}>Activity Log</div>
                      {estActionLog.slice(0,6).map((l,i)=><div key={i} style={{fontSize:11,color:"#a09a92",padding:"3px 0",borderBottom:"1px solid rgba(255,255,255,.02)"}}><span style={{color:"#706b63",fontFamily:M,marginRight:6}}>{l.t}</span>{l.m}</div>)}
                    </div>}
                  </div>

                  {/* ── Comparable Projects ── */}
                  <div style={{background:CB,border:BD,borderRadius:8,padding:"12px 16px"}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:"1px",marginBottom:10}}>Comparable Projects</div>
                    {(()=>{
                      const comps=[
                        {name:"Villard Houses",type:"Restoration",cx:"high",stone:"Carrara",cost:52000,margin:13,rHrs:38,hHrs:24,dims:"0.6×0.5×0.8",won:"Oct 2025"},
                        {name:"RAMSA Facade ×24",type:"Architectural",cx:"medium",stone:"Indiana",cost:375000,margin:15,rHrs:192,hHrs:96,dims:"1.5×1.5×0.3",won:"Jul 2025"},
                        {name:"Arsham Venus",type:"Sculpture",cx:"high",stone:"Calacatta",cost:85000,margin:15,rHrs:52,hHrs:48,dims:"0.7×0.7×2.0",won:"Nov 2025"},
                        {name:"Stripe Logo",type:"Corporate",cx:"low",stone:"Calacatta",cost:18000,margin:17,rHrs:6,hHrs:4,dims:"0.8×0.8×0.15",won:"Jan 2026"},
                        {name:"Carnegie Rosette",type:"Restoration",cx:"high",stone:"Jura",cost:28000,margin:21,rHrs:28,hHrs:18,dims:"0.7×0.7×0.5",won:"Jan 2026"},
                        {name:"Lion Pair ×2",type:"Sculpture",cx:"high",stone:"Estremoz",cost:44000,margin:14,rHrs:64,hHrs:40,dims:"0.5×0.8×1.2",won:"Dec 2025"},
                        {name:"Benedictine ×12",type:"Architectural",cx:"extreme",stone:"Indiana",cost:210000,margin:14,rHrs:280,hHrs:180,dims:"1.0×1.0×1.2",won:"Aug 2025"},
                      ];
                      return <div style={{overflow:"hidden"}}>
                        <table style={{width:"100%",borderCollapse:"collapse"}}>
                          <thead><tr>{["Project","Stone","Robot","Hand","Cost","Margin","Won"].map(h=><th key={h} style={{padding:"5px 6px",textAlign:"left",fontSize:9,color:"#4a4540",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}</tr></thead>
                          <tbody>{comps.map((c,i)=><tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                            <td style={{padding:"6px 6px"}}><div style={{fontSize:11,fontWeight:600,color:"#e2e0dc"}}>{c.name}</div><div style={{fontSize:9,color:"#4a4540"}}>{c.type} · {c.dims}</div></td>
                            <td style={{padding:"6px",fontSize:10,color:"#a09a92"}}>{c.stone}</td>
                            <td style={{padding:"6px",fontSize:10,fontFamily:M,color:"#22c55e"}}>{c.rHrs}h</td>
                            <td style={{padding:"6px",fontSize:10,fontFamily:M,color:"#60a5fa"}}>{c.hHrs}h</td>
                            <td style={{padding:"6px",fontSize:11,fontFamily:M,fontWeight:600,color:G}}>{$(c.cost)}</td>
                            <td style={{padding:"6px",fontSize:10,fontFamily:M,color:c.margin>=15?"#22c55e":"#f59e0b"}}>{c.margin}%</td>
                            <td style={{padding:"6px",fontSize:10,fontFamily:M,color:"#706b63"}}>{c.won}</td>
                          </tr>)}</tbody>
                        </table>
                      </div>;
                    })()}
                  </div>


                </>}
              </div>
            </div>
          </div>}

        
        </div>}
      </div>}

      {/* ═══ FINANCIALS ═══ */}
  </>);
}
