import React from "react";

export default function MarketingView({ ctx }) {
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
      {view==="marketing"&&<div style={{flex:1,overflowY:"auto",padding:20}}>
        {mktTab==="content"&&(()=>{
          const CONTENT=[
            {id:"MKT-001",title:"The Robot & The Chisel: How AI + Master Carvers Create Museum-Grade Sculpture",type:"Blog Post",status:"Published",date:"2026-02-18",channel:"Website",engagement:{views:4200,clicks:380,shares:92},tags:["thought-leadership","process","AI"],notes:"Hit #1 on Hacker News. 92 shares in first 48hrs. Drove 14 inbound leads."},
            {id:"MKT-002",title:"RAMSA Facade: 24 Panels, Zero Defects — A Case Study",type:"Case Study",status:"Published",date:"2026-02-10",channel:"Website / PDF",engagement:{views:1850,clicks:210,shares:34},tags:["case-study","architecture","RAMSA"],notes:"Gated PDF — 210 downloads. 6 qualified leads from architecture firms. Robert Stern shared on LinkedIn."},
            {id:"MKT-003",title:"From Quarry to Installation: Benedictine Abbey Capitals Timelapse",type:"Video",status:"Published",date:"2026-01-28",channel:"YouTube / Instagram",engagement:{views:28400,clicks:null,shares:415},tags:["video","restoration","timelapse"],notes:"Went semi-viral on Instagram Reels. 28K views. Best performing content ever. Comment section very positive."},
            {id:"MKT-004",title:"Daniel Arsham × Monumental Labs: Eroding the Boundary Between Art and Technology",type:"Artist Collaboration",status:"Published",date:"2026-01-15",channel:"Website / Artnet",engagement:{views:12600,clicks:890,shares:245},tags:["collaboration","fine-art","Arsham"],notes:"Cross-posted to Artnet News. Arsham shared to 1.4M followers. Highest reach piece ever."},
            {id:"MKT-005",title:"The Stone Selector: An Interactive Guide to Choosing the Right Material",type:"Interactive Tool",status:"Published",date:"2025-12-20",channel:"Website",engagement:{views:6800,clicks:1420,shares:56},tags:["tool","interactive","materials"],notes:"Embedded in estimator page. 1,420 tool completions. Avg session 4.2 min. Converts at 3.1%."},
            {id:"MKT-006",title:"Stripe HQ: Why Silicon Valley Chose Stone Over Steel",type:"Case Study",status:"Draft",date:"2026-02-20",channel:"Website / LinkedIn",engagement:{views:0,clicks:0,shares:0},tags:["case-study","corporate","Stripe"],notes:"Awaiting Stripe PR approval. Marcus Chen reviewing. Expected publish Mar 1."},
            {id:"MKT-007",title:"Spring 2026 Lookbook: Monumental Collection",type:"Lookbook",status:"In Production",date:"2026-03-01",channel:"Print / PDF / Web",engagement:{views:0,clicks:0,shares:0},tags:["lookbook","brand","seasonal"],notes:"Photographer booked Mar 3-5. Featuring 8 completed projects. 40-page layout in InDesign."},
            {id:"MKT-008",title:"The Future of Public Monuments: Preserving History with Precision",type:"Blog Post",status:"Scheduled",date:"2026-02-25",channel:"Website / Medium",engagement:{views:0,clicks:0,shares:0},tags:["thought-leadership","monument","public-art"],notes:"Tied to NEH Douglass project. Embargo until Feb 25. Government comms approved."},
            {id:"MKT-009",title:"AD100 Interview: Monumental Labs Founder on Craft & Code",type:"Press",status:"Published",date:"2026-01-05",channel:"Architectural Digest",engagement:{views:45000,clicks:null,shares:620},tags:["press","interview","AD100"],notes:"Full-page feature in AD. Included in AD100 list. Enormous brand lift. Reprint rights secured."},
            {id:"MKT-010",title:"Architect's Guide to Specifying Natural Stone in 2026",type:"Whitepaper",status:"Draft",date:"2026-03-10",channel:"Gated PDF",engagement:{views:0,clicks:0,shares:0},tags:["whitepaper","architecture","lead-gen"],notes:"12-page technical guide. Targeting architecture firms. CPE credit partnership with AIA pending."},
            {id:"MKT-011",title:"Newsletter: February 2026 — Shop Floor Dispatch",type:"Email",status:"Sent",date:"2026-02-15",channel:"Email (1,240 subs)",engagement:{views:null,clicks:186,shares:12},tags:["newsletter","email","monthly"],notes:"42% open rate (industry avg 21%). 186 click-throughs. 3 unsubscribes. Best performing newsletter."},
            {id:"MKT-012",title:"Instagram Carousel: 5-Axis Robot Carving Process",type:"Social",status:"Published",date:"2026-02-12",channel:"Instagram",engagement:{views:8900,clicks:null,shares:156},tags:["social","instagram","process"],notes:"Carousel format. 8.9K impressions, 156 saves. Good for algorithm — keep doing carousel format."},
          ];
          const published=CONTENT.filter(c=>c.status==="Published"||c.status==="Sent");
          const drafts=CONTENT.filter(c=>c.status==="Draft");
          const scheduled=CONTENT.filter(c=>c.status==="Scheduled"||c.status==="In Production");
          const totalViews=published.reduce((s,c)=>s+(c.engagement.views||0),0);
          const totalShares=published.reduce((s,c)=>s+(c.engagement.shares||0),0);
          const statusC={"Published":"#22c55e","Sent":"#22c55e","Draft":"#f59e0b","Scheduled":"#60a5fa","In Production":"#a78bfa"};
          const typeC={"Blog Post":"#60a5fa","Case Study":G,"Video":"#ef4444","Artist Collaboration":"#a78bfa","Interactive Tool":"#22c55e","Lookbook":"#f472b6","Press":"#f59e0b","Whitepaper":"#64748b","Email":"#60a5fa","Social":"#a78bfa"};

          return <div>
            {/* KPI strip */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[
                ["Total Content",CONTENT.length,"#60a5fa"],
                ["Published",published.length,"#22c55e"],
                ["In Pipeline",drafts.length+scheduled.length,"#f59e0b"],
                ["Total Views",totalViews.toLocaleString(),"#a78bfa"],
                ["Total Shares",totalShares.toLocaleString(),G],
              ].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>

            {/* Top performers banner */}
            <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.15)",marginBottom:16}}>
              <div style={{fontSize:12,fontWeight:700,color:"#a78bfa",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>🏆 Top Performing Content</div>
              <div style={{display:"flex",gap:10}}>
                {CONTENT.filter(c=>c.engagement.views>0).sort((a,b)=>(b.engagement.views||0)-(a.engagement.views||0)).slice(0,3).map((c,i)=><div key={c.id} style={{flex:1,padding:"8px 12px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                    <span style={{fontSize:14,fontWeight:700,color:["#FFD700","#C0C0C0","#CD7F32"][i]}}>{["🥇","🥈","🥉"][i]}</span>
                    <span style={{fontSize:12,fontWeight:600,color:"#e2e0dc",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.title.slice(0,40)}{c.title.length>40?"…":""}</span>
                  </div>
                  <div style={{fontSize:11,color:"#a09a92",fontFamily:M}}>{(c.engagement.views||0).toLocaleString()} views · {(c.engagement.shares||0)} shares</div>
                </div>)}
              </div>
            </div>

            {/* Pipeline — scheduled/in production items */}
            {scheduled.length>0&&<div style={{marginBottom:16}}>
              <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Upcoming Pipeline</div>
              <div style={{display:"flex",gap:8}}>
                {scheduled.map(c=><div key={c.id} style={{flex:1,padding:"10px 12px",borderRadius:6,background:c.status==="Scheduled"?"rgba(96,165,250,.04)":"rgba(167,139,250,.04)",border:c.status==="Scheduled"?"1px solid rgba(96,165,250,.15)":"1px solid rgba(167,139,250,.15)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                    <Badge c={statusC[c.status]}>{c.status}</Badge>
                    <span style={{fontSize:10,color:"#706b63",fontFamily:M}}>{c.date}</span>
                  </div>
                  <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:2}}>{c.title.slice(0,50)}{c.title.length>50?"…":""}</div>
                  <div style={{fontSize:11,color:"#706b63"}}>{c.type} · {c.channel}</div>
                  <div style={{fontSize:11,color:"#a09a92",marginTop:4,lineHeight:1.5}}>{c.notes}</div>
                </div>)}
              </div>
            </div>}

            {/* Content table */}
            <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
                  {["Title","Type","Channel","Status","Date","Views","Clicks","Shares","Tags"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}
                </tr></thead>
                <tbody>{CONTENT.map(c=><tr key={c.id} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                  <td style={{padding:"8px 12px",maxWidth:260}}>
                    <div style={{fontWeight:600,color:"#e2e0dc",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.title}</div>
                    <div style={{fontSize:10,color:"#706b63",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.notes}</div>
                  </td>
                  <td style={{padding:"8px 12px"}}><Badge c={typeC[c.type]||"#706b63"}>{c.type}</Badge></td>
                  <td style={{padding:"8px 12px",fontSize:11,color:"#a09a92"}}>{c.channel}</td>
                  <td style={{padding:"8px 12px"}}><Badge c={statusC[c.status]||"#706b63"}>{c.status}</Badge></td>
                  <td style={{padding:"8px 12px",fontFamily:M,fontSize:11,color:"#706b63"}}>{c.date}</td>
                  <td style={{padding:"8px 12px",fontFamily:M,fontSize:11,color:c.engagement.views?"#a78bfa":"#3a3530"}}>{c.engagement.views?c.engagement.views.toLocaleString():"—"}</td>
                  <td style={{padding:"8px 12px",fontFamily:M,fontSize:11,color:c.engagement.clicks?"#60a5fa":"#3a3530"}}>{c.engagement.clicks||"—"}</td>
                  <td style={{padding:"8px 12px",fontFamily:M,fontSize:11,color:c.engagement.shares?G:"#3a3530"}}>{c.engagement.shares||"—"}</td>
                  <td style={{padding:"8px 12px"}}><div style={{display:"flex",gap:3,flexWrap:"wrap"}}>{c.tags.map(t=><span key={t} style={{fontSize:9,padding:"2px 6px",borderRadius:4,background:"rgba(255,255,255,.04)",color:"#706b63"}}>{t}</span>)}</div></td>
                </tr>)}</tbody>
              </table>
            </div>
            <div style={{fontSize:11,color:"#4a4540",marginTop:10}}>{CONTENT.length} content pieces · {published.length} published · {drafts.length} drafts</div>
          </div>;
        })()}

        {mktTab==="campaigns"&&(()=>{
          const CAMPAIGNS=[
            {id:"C1",name:"Architect Outreach — Spring 2026",type:"Email",status:"Active",start:"Feb 1",end:"Mar 31",budget:4500,spent:2800,leads:24,conv:6,list:1240,openRate:42,clickRate:15},
            {id:"C2",name:"AD100 Feature Amplification",type:"Social",status:"Active",start:"Jan 15",end:"Feb 28",budget:2000,spent:1850,leads:14,conv:3,list:null,openRate:null,clickRate:null,impressions:145000,engagement:3.2},
            {id:"C3",name:"Stone Selector Tool — PPC",type:"Paid",status:"Active",start:"Jan 1",end:"Ongoing",budget:3000,spent:2100,leads:31,conv:8,cpc:2.40,ctr:4.1,impressions:52000},
            {id:"C4",name:"Benedictine Capitals Case Study",type:"Content",status:"Complete",start:"Jan 10",end:"Feb 10",budget:800,spent:650,leads:6,conv:2,list:null},
            {id:"C5",name:"Arsham Collaboration PR Push",type:"PR",status:"Complete",start:"Jan 15",end:"Jan 30",budget:0,spent:0,leads:18,conv:4,impressions:1400000},
            {id:"C6",name:"Spring Lookbook Launch",type:"Multi-channel",status:"Planned",start:"Mar 5",end:"Apr 15",budget:6000,spent:0,leads:0,conv:0},
            {id:"C7",name:"NEH Public Art Announcement",type:"PR",status:"Planned",start:"Feb 25",end:"Mar 15",budget:0,spent:0,leads:0,conv:0},
          ];
          const typC={"Email":"#60a5fa","Social":"#f472b6","Paid":"#f59e0b","Content":G,"PR":"#a78bfa","Multi-channel":"#22c55e"};
          const stC={"Active":"#22c55e","Complete":"#64748b","Planned":"#60a5fa","Paused":"#f59e0b"};
          const active=CAMPAIGNS.filter(c=>c.status==="Active");
          const totalSpent=CAMPAIGNS.reduce((s,c)=>s+c.spent,0);
          const totalLeads=CAMPAIGNS.reduce((s,c)=>s+c.leads,0);
          const totalConv=CAMPAIGNS.reduce((s,c)=>s+c.conv,0);
          return <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[["Active",active.length,"#22c55e"],["Total Spend","$"+totalSpent.toLocaleString(),"#f59e0b"],["Leads Generated",totalLeads,"#60a5fa"],["Conversions",totalConv,"#a78bfa"],["Conv. Rate",totalLeads>0?Math.round(totalConv/totalLeads*100)+"%":"—",G]].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>
            <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
                  {["Campaign","Type","Status","Period","Budget","Spent","Leads","Conv"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}
                </tr></thead>
                <tbody>{CAMPAIGNS.map(c=><tr key={c.id} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                  <td style={{padding:"8px 12px",fontWeight:600,color:"#e2e0dc"}}>{c.name}</td>
                  <td style={{padding:"8px 12px"}}><Badge c={typC[c.type]||G}>{c.type}</Badge></td>
                  <td style={{padding:"8px 12px"}}><Badge c={stC[c.status]||"#706b63"}>{c.status}</Badge></td>
                  <td style={{padding:"8px 12px",fontSize:11,color:"#706b63",fontFamily:M}}>{c.start} — {c.end}</td>
                  <td style={{padding:"8px 12px",fontFamily:M,color:"#a09a92"}}>{c.budget?"$"+c.budget.toLocaleString():"—"}</td>
                  <td style={{padding:"8px 12px",fontFamily:M,color:c.spent>0?G:"#4a4540"}}>{c.spent?"$"+c.spent.toLocaleString():"—"}</td>
                  <td style={{padding:"8px 12px",fontFamily:M,fontWeight:700,color:"#60a5fa"}}>{c.leads||"—"}</td>
                  <td style={{padding:"8px 12px",fontFamily:M,fontWeight:700,color:"#22c55e"}}>{c.conv||"—"}</td>
                </tr>)}</tbody>
              </table>
            </div>
            {/* Email list + site stats */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:16}}>
              <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10}}>Email Lists</div>
                {[["Architect Newsletter",1240,42,"#60a5fa"],["Client Updates",380,68,"#22c55e"],["Press / Media",95,51,"#a78bfa"],["Leads (Nurture)",460,28,"#f59e0b"]].map(([nm,sz,op,c])=><div key={nm} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                  <span style={{fontSize:12,color:"#e2e0dc"}}>{nm}</span>
                  <span style={{fontSize:11,fontFamily:M,color:c}}>{sz} subs · {op}% open</span>
                </div>)}
              </div>
              <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10}}>Website — Feb 2026</div>
                {[["Unique Visitors","8,420","#e2e0dc"],["Page Views","24,100","#60a5fa"],["Avg Session","3:42","#22c55e"],["Bounce Rate","38%","#f59e0b"],["Portfolio Views","4,210","#a78bfa"],["Contact Form Submissions","47",G]].map(([l,v,c])=><div key={l} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                  <span style={{fontSize:12,color:"#a09a92"}}>{l}</span>
                  <span style={{fontSize:12,fontFamily:M,fontWeight:600,color:c}}>{v}</span>
                </div>)}
              </div>
            </div>
          </div>;
        })()}

        {mktTab==="analytics"&&(()=>{
          const MONTHLY=[
            {mo:"Sep 25",visits:2100,leads:8,conversions:2,emailSubs:890,social:1200},
            {mo:"Oct 25",visits:3400,leads:14,conversions:4,emailSubs:920,social:2100},
            {mo:"Nov 25",visits:2800,leads:11,conversions:3,emailSubs:960,social:1800},
            {mo:"Dec 25",visits:4200,leads:18,conversions:5,emailSubs:1010,social:3400},
            {mo:"Jan 26",visits:6800,leads:26,conversions:7,emailSubs:1120,social:8900},
            {mo:"Feb 26",visits:9200,leads:34,conversions:9,emailSubs:1240,social:12600},
          ];
          const cur=MONTHLY[MONTHLY.length-1];
          const prev=MONTHLY[MONTHLY.length-2];
          const pctChange=(c,p)=>{const d=Math.round((c-p)/p*100);return d>=0?"+"+d+"%":d+"%";};
          const CHANNELS=[
            {name:"Organic Search",visits:3200,leads:12,pct:34.8,trend:"+18%",c:"#22c55e"},
            {name:"Direct",visits:2100,leads:8,pct:22.8,trend:"+5%",c:"#60a5fa"},
            {name:"Social Media",visits:1800,leads:6,pct:19.6,trend:"+42%",c:"#a78bfa"},
            {name:"Referral",visits:1200,leads:5,pct:13.0,trend:"+28%",c:G},
            {name:"Email",visits:600,leads:2,pct:6.5,trend:"+12%",c:"#f59e0b"},
            {name:"Paid",visits:300,leads:1,pct:3.3,trend:"New",c:"#ef4444"},
          ];
          const LEAD_SOURCES=[
            {source:"AD100 Feature",leads:8,value:"$420k",type:"Press"},
            {source:"Arsham Collab Post",leads:6,value:"$310k",type:"Content"},
            {source:"Stone Selector Tool",leads:5,value:"$180k",type:"Interactive"},
            {source:"RAMSA Case Study",leads:4,value:"$290k",type:"Case Study"},
            {source:"Benedictine Timelapse",leads:3,value:"$85k",type:"Video"},
            {source:"Google 'stone carving CNC'",leads:3,value:"$120k",type:"SEO"},
            {source:"LinkedIn Referral",leads:3,value:"$95k",type:"Social"},
            {source:"Newsletter CTA",leads:2,value:"$60k",type:"Email"},
          ];

          return <div>
            {/* KPI strip */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[
                ["Website Visits",cur.visits.toLocaleString(),pctChange(cur.visits,prev.visits),"#60a5fa"],
                ["Inbound Leads",cur.leads,pctChange(cur.leads,prev.leads),"#22c55e"],
                ["Conversions",cur.conversions,pctChange(cur.conversions,prev.conversions),"#a78bfa"],
                ["Email Subscribers",cur.emailSubs.toLocaleString(),pctChange(cur.emailSubs,prev.emailSubs),G],
                ["Social Reach",cur.social.toLocaleString(),pctChange(cur.social,prev.social),"#f59e0b"],
              ].map(([l,v,ch,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{display:"flex",alignItems:"baseline",gap:6}}>
                  <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
                  <div style={{fontSize:11,fontWeight:600,color:ch.startsWith("+")?"#22c55e":ch.startsWith("-")?"#ef4444":"#60a5fa"}}>{ch}</div>
                </div>
                <div style={{fontSize:10,color:"#4a4540",marginTop:2}}>vs last month</div>
              </div>)}
            </div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
              {/* Monthly trend */}
              <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"14px 16px"}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:12}}>6-Month Trend</div>
                <div style={{display:"flex",alignItems:"flex-end",gap:6,height:120,marginBottom:8}}>
                  {MONTHLY.map((m,i)=>{
                    const maxV=Math.max(...MONTHLY.map(x=>x.visits));
                    const h=Math.max(8,m.visits/maxV*100);
                    return <div key={m.mo} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                      <div style={{fontSize:10,fontFamily:M,color:"#a09a92"}}>{m.visits>=1000?(m.visits/1000).toFixed(1)+"k":m.visits}</div>
                      <div style={{width:"100%",height:h,borderRadius:4,background:i===MONTHLY.length-1?"#60a5fa":"rgba(96,165,250,.3)",transition:"height .3s"}}/>
                      <div style={{fontSize:9,color:"#4a4540"}}>{m.mo.slice(0,3)}</div>
                    </div>;
                  })}
                </div>
                <div style={{fontSize:11,color:"#a09a92",textAlign:"center"}}>Website visits · <span style={{color:"#22c55e",fontWeight:600}}>{pctChange(cur.visits,MONTHLY[0].visits)} since Sep</span></div>
              </div>

              {/* Channel breakdown */}
              <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"14px 16px"}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:12}}>Traffic Channels</div>
                {CHANNELS.map(ch=><div key={ch.name} style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  <span style={{width:90,fontSize:11,color:"#a09a92",flexShrink:0}}>{ch.name}</span>
                  <div style={{flex:1,height:8,background:"rgba(255,255,255,.03)",borderRadius:4,overflow:"hidden"}}>
                    <div style={{width:ch.pct+"%",height:"100%",background:ch.c,borderRadius:4}}/>
                  </div>
                  <span style={{width:45,fontSize:11,fontFamily:M,color:ch.c,textAlign:"right",flexShrink:0}}>{ch.pct}%</span>
                  <span style={{width:35,fontSize:10,color:"#22c55e",textAlign:"right",flexShrink:0,fontWeight:600}}>{ch.trend}</span>
                </div>)}
              </div>
            </div>

            {/* Lead sources table */}
            <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Lead Attribution — February 2026</div>
            <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden",marginBottom:16}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
                  {["Source","Type","Leads","Est. Pipeline Value","Share"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}
                </tr></thead>
                <tbody>{LEAD_SOURCES.map((ls,i)=>{
                  const totalLeads=LEAD_SOURCES.reduce((s,x)=>s+x.leads,0);
                  const pct=Math.round(ls.leads/totalLeads*100);
                  return <tr key={i} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                    <td style={{padding:"8px 12px",fontWeight:600,color:"#e2e0dc"}}>{ls.source}</td>
                    <td style={{padding:"8px 12px"}}><Badge c={ls.type==="Press"?"#f59e0b":ls.type==="Content"?"#a78bfa":ls.type==="Case Study"?G:ls.type==="Video"?"#ef4444":ls.type==="Interactive"?"#22c55e":ls.type==="SEO"?"#60a5fa":"#706b63"}>{ls.type}</Badge></td>
                    <td style={{padding:"8px 12px",fontFamily:M,fontWeight:700,color:"#60a5fa"}}>{ls.leads}</td>
                    <td style={{padding:"8px 12px",fontFamily:M,fontWeight:600,color:G}}>{ls.value}</td>
                    <td style={{padding:"8px 12px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <div style={{flex:1,height:6,background:"rgba(255,255,255,.03)",borderRadius:4,overflow:"hidden",maxWidth:80}}>
                          <div style={{width:pct+"%",height:"100%",background:"#22c55e",borderRadius:4}}/>
                        </div>
                        <span style={{fontSize:11,fontFamily:M,color:"#a09a92"}}>{pct}%</span>
                      </div>
                    </td>
                  </tr>;
                })}</tbody>
              </table>
            </div>

            {/* Conversion funnel */}
            <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"14px 16px"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:12}}>Conversion Funnel — February</div>
              <div style={{display:"flex",alignItems:"center",gap:4}}>
                {[
                  {label:"Visitors",val:9200,c:"#60a5fa"},
                  {label:"Engaged",val:2800,c:"#a78bfa"},
                  {label:"Leads",val:34,c:"#22c55e"},
                  {label:"Qualified",val:18,c:G},
                  {label:"Won",val:9,c:"#22c55e"},
                ].map((step,i,arr)=><React.Fragment key={step.label}>
                  <div style={{flex:1,padding:"12px 10px",borderRadius:6,background:step.c+"10",border:"1px solid "+step.c+"25",textAlign:"center"}}>
                    <div style={{fontSize:20,fontWeight:700,color:step.c,fontFamily:M}}>{step.val.toLocaleString()}</div>
                    <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginTop:2}}>{step.label}</div>
                    {i>0&&<div style={{fontSize:10,color:"#a09a92",marginTop:2,fontFamily:M}}>{(step.val/arr[i-1].val*100).toFixed(1)}%</div>}
                  </div>
                  {i<arr.length-1&&<div style={{fontSize:14,color:"#3a3530",flexShrink:0}}>→</div>}
                </React.Fragment>)}
              </div>
            </div>
          </div>;
        })()}
      </div>}

      {/* ═══ ROBOTS ═══ */}
  </>);
}
