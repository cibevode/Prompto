import React from "react";

export default function MissionDashboards({ ctx }) {
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
      {view==="mission"&&(()=>{
        const origin=mcOrigin||"lifecycle";
        const Stat=({label,value,color,sub})=><div style={{padding:"14px 16px",borderRadius:8,background:"rgba(255,255,255,.018)",border:"1px solid rgba(255,255,255,.05)"}}>
          <div style={{fontSize:28,fontWeight:700,color:color||G,fontFamily:M,lineHeight:1}}>{value}</div>
          <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".6px",marginTop:4}}>{label}</div>
          {sub&&<div style={{fontSize:14,color:"#4a4540",marginTop:3}}>{sub}</div>}
        </div>;
        const Row=({label,value,color})=><div style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.035)",fontSize:14}}>
          <span style={{color:"#706b63"}}>{label}</span><span style={{color:color||"#e2e0dc",fontFamily:M,fontWeight:500}}>{value}</span>
        </div>;
        const Section=({title,children,color})=><div style={{marginBottom:20}}>
          <div style={{fontSize:10,fontWeight:700,color:color||G,textTransform:"uppercase",letterSpacing:1.2,marginBottom:8,display:"flex",alignItems:"center",gap:6}}>
            <div style={{width:16,height:1.5,background:color||G,borderRadius:4}}/>{title}
          </div>
          {children}
        </div>;

        // ─── PROJECTS DASHBOARD ───
        if(origin==="lifecycle") {
          const active=prjs.filter(p=>p.stage>0&&p.stage<10);
          const overdue=prjs.filter(p=>p.due&&new Date(p.due)<new Date()&&p.stage<10);
          const byStage=STAGES.map((s,i)=>({...s,count:prjs.filter(p=>p.stage===i).length}));
          const totalRobotHrs=prjs.reduce((s,p)=>s+Number(p.sd?.fabrication?.hrsLogged||0),0);
          const totalHandHrs=prjs.reduce((s,p)=>s+Number(p.sd?.hitl_polish?.hrsLogged||0),0);
          const pendingInvoices=prjs.filter(p=>!p.inv1P&&p.inv1>0);
          return <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}} className="fu">
            <div style={{fontSize:14,color:"#706b63",marginBottom:20}}>Projects snapshot — {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
              <Stat label="Total Projects" value={prjs.length} color="#60a5fa"/>
              <Stat label="Active" value={active.length} color="#22c55e"/>
              <Stat label="Overdue" value={overdue.length} color={overdue.length>0?"#ef4444":"#22c55e"} sub={overdue.length>0?overdue[0].name:"All on time"}/>
              <Stat label="Robot Hours" value={totalRobotHrs.toFixed(0)+"h"} color="#a78bfa"/>
              <Stat label="Pending Invoices" value={pendingInvoices.length} color={pendingInvoices.length>0?"#f59e0b":"#22c55e"}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
              <div>
                <Section title="Pipeline by Stage" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {byStage.filter(s=>s.count>0).map(s=><div key={s.key} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{fontSize:14}}>{s.icon}</span>
                      <div style={{flex:1}}><div style={{fontSize:14,color:"#a09a92"}}>{s.label}</div>
                        <div style={{height:3,background:"rgba(255,255,255,.04)",borderRadius:4,marginTop:2,overflow:"hidden"}}><div style={{height:"100%",width:(s.count/prjs.length*100)+"%",background:s.color,borderRadius:4}}/></div>
                      </div>
                      <span style={{fontSize:14,fontWeight:700,color:s.color,fontFamily:M,minWidth:16,textAlign:"right"}}>{s.count}</span>
                    </div>)}
                  </div>
                </Section>
                <Section title="Overdue Projects" color="#ef4444">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {overdue.length===0?<div style={{fontSize:14,color:"#22c55e"}}>✓ No overdue projects</div>
                    :overdue.map(p=><div key={p.id} style={{marginBottom:6,paddingBottom:6,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{fontSize:14,color:"#e2e0dc",fontWeight:600}}>{p.name}</div>
                      <div style={{fontSize:14,color:"#ef4444"}}>{Math.ceil((new Date()-new Date(p.due))/(1000*60*60*24))}d overdue · {p.client}</div>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Robot Status" color="#22c55e">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {ROBOTS.map(r=><div key={r.id} style={{display:"flex",alignItems:"center",gap:6,marginBottom:5}}>
                      <Dot c={STAT_C[r.status]} p={r.status==="Milling"}/>
                      <div style={{flex:1}}><div style={{fontSize:14,color:"#e2e0dc",fontWeight:500}}>{r.name}</div>
                        <div style={{fontSize:10,color:"#706b63"}}>{r.op}</div>
                      </div>
                      <Badge c={STAT_C[r.status]}>{r.status}</Badge>
                    </div>)}
                    <div style={{marginTop:8,paddingTop:8,borderTop:"1px solid rgba(255,255,255,.04)"}}>
                      <Row label="Total robot hrs logged" value={totalRobotHrs.toFixed(0)+"h"} color="#22c55e"/>
                      <Row label="Total hand-finish hrs" value={totalHandHrs.toFixed(0)+"h"} color="#a78bfa"/>
                    </div>
                  </div>
                </Section>
                <Section title="Carvers" color="#a78bfa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {CARVERS.map(c=><div key={c.id} style={{display:"flex",justifyContent:"space-between",marginBottom:5,fontSize:14}}>
                      <span style={{color:"#e2e0dc"}}>✋ {c.name}</span>
                      <span style={{color:c.status==="Carving"?"#22c55e":"#706b63"}}>{c.spec} · {c.status}</span>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Financial Snapshot" color={G}>
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Total pipeline" value={$(fin.tq)} color={G}/>
                    <Row label="Cash received" value={$(fin.tp)} color="#22c55e"/>
                    <Row label="Outstanding AR" value={$(fin.ar)} color={fin.ar>100000?"#ef4444":"#f59e0b"}/>
                    <Row label="Avg margin" value={fin.am+"%"} color={fin.am>15?"#22c55e":"#f59e0b"}/>
                    <Row label="Monthly burn" value={$(fin.burn)} color="#ef4444"/>
                  </div>
                </Section>
                <Section title="Pending Invoices" color="#f59e0b">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {pendingInvoices.length===0?<div style={{fontSize:14,color:"#22c55e"}}>✓ All invoices settled</div>
                    :pendingInvoices.map(p=><div key={p.id} style={{marginBottom:5,paddingBottom:5,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:14,color:"#e2e0dc",fontWeight:600}}>{p.name}</span><span style={{fontSize:14,color:G,fontFamily:M}}>{$(p.inv1)}</span></div>
                      <div style={{fontSize:10,color:"#f59e0b"}}>{p.client} · Deposit outstanding</div>
                    </div>)}
                  </div>
                </Section>
              </div>
            </div>
          </div>;
        }

        // ─── SALES & QUOTING DASHBOARD ───
        if(origin==="estimator") {
          const totalQuotes=estQ.length;
          const sentQuotes=estQ.filter(q=>q.status==="Quote Sent"||q.dateSent);
          const pendingPricing=estQ.filter(q=>q.status==="Files Received"||q.status==="Agent Pricing");
          const avgEst=estQ.reduce((s,q)=>s+(q.estCost||0),0)/(estQ.length||1);
          const convRate=estQ.length?Math.round(sentQuotes.length/estQ.length*100):0;
          return <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}} className="fu">
            <div style={{fontSize:14,color:"#706b63",marginBottom:20}}>Sales & Quoting snapshot — {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
              <Stat label="Total Quotes" value={totalQuotes} color="#60a5fa"/>
              <Stat label="Quotes Sent" value={sentQuotes.length} color="#22c55e"/>
              <Stat label="Pending Pricing" value={pendingPricing.length} color={pendingPricing.length>0?"#f59e0b":"#22c55e"} sub="Awaiting estimate"/>
              <Stat label="Avg Est. Value" value={"$"+Math.round(avgEst/1000)+"k"} color={G}/>
              <Stat label="Send Rate" value={convRate+"%"} color={convRate>50?"#22c55e":"#f59e0b"} sub="Quotes → sent"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
              <div>
                <Section title="Quote Pipeline" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {["Files Received","Agent Pricing","Ready to Send","Quote Sent","Accepted","Rejected"].map(st=>{
                      const cnt=estQ.filter(q=>q.status===st).length;
                      return <div key={st} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5,fontSize:14}}>
                        <span style={{color:"#a09a92"}}>{st}</span>
                        <div style={{display:"flex",alignItems:"center",gap:6}}>
                          <div style={{width:60,height:3,background:"rgba(255,255,255,.04)",borderRadius:4,overflow:"hidden"}}><div style={{height:"100%",width:(cnt/(estQ.length||1)*100)+"%",background:st==="Accepted"?"#22c55e":st==="Rejected"?"#ef4444":st==="Quote Sent"?"#60a5fa":"#f59e0b",borderRadius:4}}/></div>
                          <span style={{color:"#e2e0dc",fontWeight:600,fontFamily:M,minWidth:12,textAlign:"right"}}>{cnt}</span>
                        </div>
                      </div>;
                    })}
                  </div>
                </Section>
                <Section title="Agent Activity" color="#a78bfa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Auto-estimates generated" value={estQ.filter(q=>q.agentNotes).length} color="#a78bfa"/>
                    <Row label="Awaiting agent review" value={pendingPricing.length} color="#f59e0b"/>
                    <Row label="Stone recommendations" value={estQ.filter(q=>q.stoneRec).length} color={G}/>
                    <Row label="Avg processing time" value="~4 min" color="#a09a92"/>
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Recent Quotes" color="#22c55e">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {estQ.slice(0,5).map(q=><div key={q.id} style={{marginBottom:7,paddingBottom:7,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                        <span style={{fontSize:14,color:"#e2e0dc",fontWeight:600}}>{q.client}</span>
                        <Badge c={q.status==="Accepted"?"#22c55e":q.status==="Quote Sent"?"#60a5fa":q.status==="Rejected"?"#ef4444":"#f59e0b"}>{q.status}</Badge>
                      </div>
                      <div style={{fontSize:10,color:"#706b63"}}>{q.desc}</div>
                      {q.estCost&&<div style={{fontSize:14,color:G,fontFamily:M,marginTop:2}}>{$(q.estCost)}</div>}
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Manual Estimator" color={G}>
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Current stone" value={estimate?.stone||estStone?.name||"None selected"} color={G}/>
                    <Row label="Complexity" value={estCx||"Not set"}/>
                    <Row label="Est. robot hrs" value={estimate?.rh?estimate.rh.toFixed(1)+"h":"—"} color="#22c55e"/>
                    <Row label="Est. hand hrs" value={estimate?.hh?estimate.hh.toFixed(1)+"h":"—"} color="#a78bfa"/>
                    <Row label="Total estimate" value={estimate?.tot?$(Math.round(estimate.tot)):"—"} color={G}/>
                    <Row label="At 40% margin" value={estimate?.m40?$(Math.round(estimate.m40)):"—"} color="#f59e0b"/>
                  </div>
                </Section>
                <Section title="Client Portal" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Submissions received" value={estQ.length} color="#60a5fa"/>
                    <Row label="Awaiting response" value={pendingPricing.length} color="#f59e0b"/>
                    <Row label="Portal status" value="Live ✓" color="#22c55e"/>
                  </div>
                </Section>
              </div>
            </div>
          </div>;
        }

        // ─── SALES PIPELINE DASHBOARD ───
        if(origin==="salespipeline") {
          const active=leads.filter(l=>!["Won","Lost"].includes(l.stage));
          const won=leads.filter(l=>l.stage==="Won");
          const lost=leads.filter(l=>l.stage==="Lost");
          const weighted=active.reduce((s,l)=>s+l.val*l.prob/100,0);
          const hot=active.filter(l=>l.hot);
          const overdue=active.filter(l=>l.nextAction&&new Date(l.nextAction)<new Date());
          const winRate=leads.length?Math.round(won.length/(won.length+lost.length||1)*100):0;
          const byStage=LEAD_STAGES.filter(s=>!["Won","Lost"].includes(s)).map(s=>({s,cnt:leads.filter(l=>l.stage===s).length,val:leads.filter(l=>l.stage===s).reduce((t,l)=>t+l.val,0)}));
          return <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}} className="fu">
            <div style={{fontSize:14,color:"#706b63",marginBottom:20}}>Sales Pipeline snapshot — {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
              <Stat label="Weighted Pipeline" value={"$"+Math.round(weighted/1000)+"k"} color={G}/>
              <Stat label="Active Leads" value={active.length} color="#60a5fa"/>
              <Stat label="Hot Leads 🔥" value={hot.length} color={hot.length?"#ef4444":"#22c55e"} sub={hot.map(l=>l.company).join(", ")||"None"}/>
              <Stat label="Overdue Follow-up" value={overdue.length} color={overdue.length?"#f59e0b":"#22c55e"}/>
              <Stat label="Win Rate" value={winRate+"%"} color={winRate>40?"#22c55e":"#f59e0b"} sub={won.length+" won · "+lost.length+" lost"}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
              <div>
                <Section title="Funnel Breakdown" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {byStage.map(({s,cnt,val})=><div key={s} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <div style={{width:10,height:10,borderRadius:4,background:LEAD_STAGE_C[s],flexShrink:0}}/>
                      <div style={{flex:1}}><div style={{fontSize:14,color:"#a09a92"}}>{s}</div>
                        <div style={{height:3,background:"rgba(255,255,255,.04)",borderRadius:4,marginTop:2,overflow:"hidden"}}><div style={{height:"100%",width:(cnt/(active.length||1)*100)+"%",background:LEAD_STAGE_C[s],borderRadius:4}}/></div>
                      </div>
                      <div style={{textAlign:"right",flexShrink:0}}>
                        <div style={{fontSize:14,fontWeight:700,color:LEAD_STAGE_C[s],fontFamily:M}}>{cnt}</div>
                        <div style={{fontSize:10,color:"#4a4540",fontFamily:M}}>${Math.round(val/1000)}k</div>
                      </div>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Hot Leads" color="#ef4444">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {hot.length===0?<div style={{fontSize:14,color:"#706b63"}}>No hot leads right now</div>
                    :hot.map(l=><div key={l.id} style={{marginBottom:6,paddingBottom:6,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:14,color:"#e2e0dc",fontWeight:600}}>🔥 {l.company}</span><span style={{fontSize:14,color:G,fontFamily:M}}>${Math.round(l.val/1000)}k</span></div>
                      <div style={{fontSize:10,color:"#706b63"}}>{l.stage} · {l.prob}% prob · {l.type}</div>
                    </div>)}
                  </div>
                </Section>
                <Section title="Overdue Follow-ups" color="#f59e0b">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {overdue.length===0?<div style={{fontSize:14,color:"#22c55e"}}>✓ All follow-ups current</div>
                    :overdue.map(l=><div key={l.id} style={{marginBottom:5,fontSize:14}}>
                      <span style={{color:"#f59e0b",fontWeight:600}}>{l.company}</span> <span style={{color:"#706b63"}}>→ {l.nextAction}</span>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Won & Lost" color="#22c55e">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Deals won" value={won.length} color="#22c55e"/>
                    <Row label="Won value" value={"$"+Math.round(won.reduce((s,l)=>s+l.val,0)/1000)+"k"} color="#22c55e"/>
                    <Row label="Deals lost" value={lost.length} color="#ef4444"/>
                    <Row label="Lost value" value={"$"+Math.round(lost.reduce((s,l)=>s+l.val,0)/1000)+"k"} color="#ef4444"/>
                    <Row label="Avg deal size" value={"$"+Math.round(active.reduce((s,l)=>s+l.val,0)/(active.length||1)/1000)+"k"} color={G}/>
                  </div>
                </Section>
                <Section title="By Client Type" color={G}>
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {["Architecture","Hospitality","Fine Art","Restoration","Corporate","Public Art"].map(t=>{
                      const cnt=active.filter(l=>l.type===t).length;
                      if(!cnt) return null;
                      return <div key={t} style={{display:"flex",justifyContent:"space-between",fontSize:14,marginBottom:3}}>
                        <span style={{color:"#a09a92"}}>{t}</span><span style={{color:"#e2e0dc",fontFamily:M}}>{cnt}</span>
                      </div>;
                    })}
                  </div>
                </Section>
              </div>
            </div>
          </div>;
        }

        // ─── CAPACITY CALENDAR DASHBOARD ───
        if(origin==="capacity") {
          const millingNow=ROBOTS.filter(r=>r.status==="Milling");
          const idleNow=ROBOTS.filter(r=>r.status==="Idle");
          const maintNow=ROBOTS.filter(r=>r.status==="Maintenance");
          const utilPct=Math.round(millingNow.length/ROBOTS.length*100);
          const carvingNow=CARVERS.filter(c=>c.status==="Carving");
          const availCarvers=CARVERS.filter(c=>c.status==="Available");
          const activeProjects=prjs.filter(p=>p.stage>=7&&p.stage<=8);
          return <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}} className="fu">
            <div style={{fontSize:14,color:"#706b63",marginBottom:20}}>Capacity snapshot — {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
              <Stat label="Robot Utilization" value={utilPct+"%"} color={utilPct>=70?"#22c55e":utilPct>=40?"#f59e0b":"#ef4444"} sub={millingNow.length+"/"+ROBOTS.length+" milling"}/>
              <Stat label="Robots Idle" value={idleNow.length} color={idleNow.length>2?"#ef4444":"#f59e0b"}/>
              <Stat label="In Maintenance" value={maintNow.length} color={maintNow.length?"#f59e0b":"#22c55e"}/>
              <Stat label="Carvers Active" value={carvingNow.length+"/"+CARVERS.length} color="#a78bfa"/>
              <Stat label="Fabrication Jobs" value={activeProjects.length} color="#60a5fa" sub="In robot/HITL stage"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
              <div>
                <Section title="Robot Status" color="#22c55e">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {ROBOTS.map(r=><div key={r.id} style={{marginBottom:7,paddingBottom:7,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                        <span style={{fontSize:14,color:"#e2e0dc",fontWeight:600,display:"flex",alignItems:"center",gap:4}}><Dot c={STAT_C[r.status]} p={r.status==="Milling"}/>{r.name}</span>
                        <Badge c={STAT_C[r.status]}>{r.status}</Badge>
                      </div>
                      <div style={{fontSize:10,color:"#706b63"}}>{r.op} {r.status==="Milling"?"· ETA "+r.eta:""}</div>
                      <div style={{fontSize:10,color:"#4a4540"}}>{r.up}% uptime</div>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Carver Assignments" color="#a78bfa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {CARVERS.map(c=><div key={c.id} style={{marginBottom:6,paddingBottom:6,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                        <span style={{fontSize:14,color:"#e2e0dc",fontWeight:600}}>✋ {c.name}</span>
                        <Badge c={c.status==="Carving"?"#22c55e":"#64748b"}>{c.status}</Badge>
                      </div>
                      <div style={{fontSize:10,color:"#706b63"}}>{c.spec}</div>
                      {c.prj&&<div style={{fontSize:10,color:"#a78bfa"}}>{c.prj}</div>}
                    </div>)}
                    <Row label="Available carvers" value={availCarvers.length} color="#22c55e"/>
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Active Fabrication" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {activeProjects.length===0?<div style={{fontSize:14,color:"#706b63"}}>No active fabrication</div>
                    :activeProjects.map(p=><div key={p.id} style={{marginBottom:6,paddingBottom:6,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{fontSize:14,color:"#e2e0dc",fontWeight:600}}>{p.name}</div>
                      <div style={{fontSize:10,color:"#706b63"}}>{p.client} · Due {p.due}</div>
                      <div style={{display:"flex",gap:1.5,height:3,borderRadius:4,overflow:"hidden",marginTop:4}}>
                        {STAGES.map((_,i)=><div key={i} style={{flex:1,background:i<p.stage?"#22c55e":i===p.stage?"#22c55e60":"rgba(255,255,255,.04)"}}/>)}
                      </div>
                    </div>)}
                  </div>
                </Section>
                <Section title="Capacity Summary" color={G}>
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Robots milling" value={millingNow.length+"/"+ROBOTS.length} color="#22c55e"/>
                    <Row label="Robots idle" value={idleNow.length} color={idleNow.length>2?"#ef4444":"#a09a92"}/>
                    <Row label="Overnight runs" value={prjs.filter(p=>p.sd?.fabrication?.overnight&&p.sd.fabrication.overnight!=="No").length} color="#60a5fa"/>
                    <Row label="Avg uptime" value={Math.round(ROBOTS.reduce((s,r)=>s+r.up,0)/ROBOTS.length)+"%"} color="#22c55e"/>
                  </div>
                </Section>
              </div>
            </div>
          </div>;
        }

        // ─── STONE & MATERIALS DASHBOARD ───
        if(origin==="stonedb") {
          const orderedProjects=prjs.filter(p=>p.sd?.stone_sourcing?.shipStatus&&p.sd.stone_sourcing.shipStatus!=="Not ordered");
          const inTransit=orderedProjects.filter(p=>p.sd.stone_sourcing.shipStatus==="In transit");
          const delivered=orderedProjects.filter(p=>p.sd.stone_sourcing.shipStatus==="Delivered");
          const totalStoneCost=prjs.reduce((s,p)=>s+Number(p.sd?.stone_sourcing?.stoneCost||0),0);
          const notOrdered=prjs.filter(p=>p.stage>=5&&(!p.sd?.stone_sourcing?.shipStatus||p.sd.stone_sourcing.shipStatus==="Not ordered"));
          const famCounts={};STONE_DB.forEach(s=>{famCounts[s.fam]=(famCounts[s.fam]||0)+1;});
          return <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}} className="fu">
            <div style={{fontSize:14,color:"#706b63",marginBottom:20}}>Stone & Materials snapshot — {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
              <Stat label="Stone Orders" value={orderedProjects.length} color="#60a5fa"/>
              <Stat label="In Transit" value={inTransit.length} color={inTransit.length?"#f59e0b":"#22c55e"}/>
              <Stat label="Delivered" value={delivered.length} color="#22c55e"/>
              <Stat label="Stone Spend" value={"$"+Math.round(totalStoneCost/1000)+"k"} color={G}/>
              <Stat label="Unordered (active)" value={notOrdered.length} color={notOrdered.length?"#ef4444":"#22c55e"} sub="Need ordering"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
              <div>
                <Section title="Orders by Status" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {["Ordered","In transit","Customs","Delivered","Issue"].map(st=>{
                      const cnt=orderedProjects.filter(p=>p.sd.stone_sourcing.shipStatus===st).length;
                      const c=st==="Delivered"?"#22c55e":st==="In transit"?"#f59e0b":st==="Issue"?"#ef4444":"#60a5fa";
                      return <div key={st} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5,fontSize:14}}>
                        <span style={{color:"#a09a92"}}>{st}</span>
                        <div style={{display:"flex",alignItems:"center",gap:6}}>
                          <div style={{width:50,height:3,background:"rgba(255,255,255,.04)",borderRadius:4,overflow:"hidden"}}><div style={{height:"100%",width:(cnt/(orderedProjects.length||1)*100)+"%",background:c,borderRadius:4}}/></div>
                          <span style={{color:c,fontWeight:700,fontFamily:M,minWidth:12}}>{cnt}</span>
                        </div>
                      </div>;
                    })}
                  </div>
                </Section>
                <Section title="Needs Ordering" color="#ef4444">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {notOrdered.length===0?<div style={{fontSize:14,color:"#22c55e"}}>✓ All active jobs have stone</div>
                    :notOrdered.map(p=><div key={p.id} style={{marginBottom:5,fontSize:14}}>
                      <span style={{color:"#ef4444",fontWeight:600}}>{p.id}</span> <span style={{color:"#a09a92"}}>{p.name}</span>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Active Stone Orders" color={G}>
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {orderedProjects.filter(p=>p.sd.stone_sourcing.shipStatus!=="Delivered").map(p=><div key={p.id} style={{marginBottom:7,paddingBottom:7,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                        <span style={{fontSize:14,color:"#e2e0dc",fontWeight:600}}>{p.sd.stone_sourcing.stoneType||"Stone"}</span>
                        <Badge c={p.sd.stone_sourcing.shipStatus==="In transit"?"#f59e0b":"#60a5fa"}>{p.sd.stone_sourcing.shipStatus}</Badge>
                      </div>
                      <div style={{fontSize:10,color:"#706b63"}}>{p.name} · {p.sd.stone_sourcing.supplier||"Supplier TBD"}</div>
                      {p.sd.stone_sourcing.eta&&<div style={{fontSize:10,color:"#a09a92"}}>ETA: {p.sd.stone_sourcing.eta}</div>}
                    </div>)}
                    {orderedProjects.filter(p=>p.sd.stone_sourcing.shipStatus!=="Delivered").length===0&&<div style={{fontSize:14,color:"#706b63"}}>No orders in transit</div>}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Catalog Summary" color="#a78bfa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {Object.entries(famCounts).map(([fam,cnt])=><Row key={fam} label={fam} value={cnt+" varieties"} color={FC(fam)}/>)}
                    <div style={{marginTop:8,paddingTop:8,borderTop:"1px solid rgba(255,255,255,.04)"}}>
                      <Row label="Total stones in DB" value={STONE_DB.length} color="#60a5fa"/>
                      <Row label="Total stone spend" value={$(totalStoneCost)} color={G}/>
                    </div>
                  </div>
                </Section>
                <Section title="Price Tiers" color={G}>
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {["Commodity","Commercial","Mid-Market","Premium","Ultra-Luxury"].map(tier=>{
                      const cnt=STONE_DB.filter(s=>s.role===tier).length;
                      const price={Commodity:600,Commercial:850,"Mid-Market":1100,Premium:1800,"Ultra-Luxury":2400}[tier];
                      return <div key={tier} style={{display:"flex",justifyContent:"space-between",fontSize:14,marginBottom:3}}>
                        <span style={{color:"#a09a92"}}>{tier}</span>
                        <div style={{textAlign:"right"}}>
                          <span style={{color:ROLES_C[tier]||G,fontFamily:M,fontSize:10}}>{cnt} · ${price}/t</span>
                        </div>
                      </div>;
                    })}
                  </div>
                </Section>
              </div>
            </div>
          </div>;
        }

        // ─── FINANCIALS DASHBOARD ───
        if(origin==="financials") {
          const unpaidInv1=prjs.filter(p=>p.inv1>0&&!p.inv1P);
          const unpaidInv2=prjs.filter(p=>p.inv2>0&&!p.inv2P);
          const totalAR=fin.ar;
          const runway=Math.round((fin.tp-fin.tc*.6)/fin.burn*10)/10;
          const overduePrj=prjs.filter(p=>p.due&&new Date(p.due)<new Date()&&p.stage<10);
          return <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}} className="fu">
            <div style={{fontSize:14,color:"#706b63",marginBottom:20}}>Financials snapshot — {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
              <Stat label="Total Pipeline" value={"$"+Math.round(fin.tq/1000)+"k"} color={G}/>
              <Stat label="Cash Received" value={"$"+Math.round(fin.tp/1000)+"k"} color="#22c55e"/>
              <Stat label="Outstanding AR" value={"$"+Math.round(totalAR/1000)+"k"} color={totalAR>150000?"#ef4444":"#f59e0b"}/>
              <Stat label="Avg Margin" value={fin.am+"%"} color={fin.am>15?"#22c55e":"#f59e0b"} sub={fin.am>15?"Healthy":"Below target"}/>
              <Stat label="Cash Runway" value={runway+"mo"} color={runway>6?"#22c55e":runway>3?"#f59e0b":"#ef4444"} sub={"At $"+Math.round(fin.burn/1000)+"k/mo burn"}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
              <div>
                <Section title="Revenue Breakdown" color={G}>
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Total quoted" value={$(fin.tq)} color={G}/>
                    <Row label="Cost basis" value={$(fin.tc)} color="#a09a92"/>
                    <Row label="Gross margin" value={fin.am+"%"} color={fin.am>15?"#22c55e":"#f59e0b"}/>
                    <Row label="Monthly burn" value={$(fin.burn)} color="#ef4444"/>
                    <Row label="Stone spend" value={$(fin.tsc)} color="#b8a488"/>
                    <Row label="Robot hours" value={fin.trh.toFixed(0)+"h"} color="#22c55e"/>
                    <Row label="Hand-finish hours" value={fin.thh.toFixed(0)+"h"} color="#a78bfa"/>
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Outstanding Invoices" color="#f59e0b">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Unpaid deposits" value={unpaidInv1.length} color={unpaidInv1.length?"#f59e0b":"#22c55e"}/>
                    <Row label="Unpaid balances" value={unpaidInv2.length} color={unpaidInv2.length?"#ef4444":"#22c55e"}/>
                    {unpaidInv1.slice(0,3).map(p=><div key={p.id} style={{marginTop:6,paddingTop:6,borderTop:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:14}}>
                        <span style={{color:"#e2e0dc"}}>{p.name}</span>
                        <span style={{color:"#f59e0b",fontFamily:M}}>{$(p.inv1)}</span>
                      </div>
                      <div style={{fontSize:10,color:"#706b63"}}>{p.client} · Deposit</div>
                    </div>)}
                    {unpaidInv2.slice(0,2).map(p=><div key={p.id+"b"} style={{marginTop:6,paddingTop:6,borderTop:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:14}}>
                        <span style={{color:"#e2e0dc"}}>{p.name}</span>
                        <span style={{color:"#ef4444",fontFamily:M}}>{$(p.inv2)}</span>
                      </div>
                      <div style={{fontSize:10,color:"#706b63"}}>{p.client} · Balance</div>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Project P&L" color="#22c55e">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {prjs.slice(0,5).map(p=>{
                      const margin=p.quoted&&p.estCost?Math.round((p.quoted-p.estCost)/p.quoted*100):null;
                      return <div key={p.id} style={{marginBottom:5,paddingBottom:5,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:14}}>
                          <span style={{color:"#e2e0dc",fontWeight:500}}>{p.name.slice(0,20)}</span>
                          <span style={{color:margin!=null&&margin>15?"#22c55e":"#f59e0b",fontFamily:M}}>{margin!=null?margin+"%":"—"}</span>
                        </div>
                        <div style={{fontSize:10,color:"#706b63"}}>{$(p.quoted)} quoted · {$(p.estCost)} cost</div>
                      </div>;
                    })}
                  </div>
                </Section>
                <Section title="Business Health" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Avg project value" value={$(fin.avgV)} color={G}/>
                    <Row label="Backlog" value={prjs.filter(p=>p.stage<10).length+" projects"} color="#60a5fa"/>
                    <Row label="Robot utilization" value={fin.rU+"%"} color={fin.rU>70?"#22c55e":"#f59e0b"}/>
                    <Row label="Overdue projects" value={overduePrj.length} color={overduePrj.length?"#ef4444":"#22c55e"}/>
                  </div>
                </Section>
              </div>
            </div>
          </div>;
        }

        // ─── MARKET PULSE DASHBOARD ───
        if(origin==="macro") {
          return <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}} className="fu">
            <div style={{fontSize:14,color:"#706b63",marginBottom:20}}>Market Pulse snapshot — {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:24}}>
              <Stat label="Carrara Marble" value="$1,850/t" color="#60a5fa" sub="↑ +4.2% YoY"/>
              <Stat label="Indiana Limestone" value="$420/t" color="#22c55e" sub="→ Stable"/>
              <Stat label="Absolute Black" value="$2,100/t" color="#a78bfa" sub="↑ +2.8% YoY"/>
              <Stat label="Turkish White" value="$672/t" color={G} sub="↓ −1.2% YoY"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
              <div>
                <Section title="Stone Price Trends" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {[{n:"Carrara Marble",p:"$1,850/t",ch:"+4.2%",up:true},{n:"Calacatta",p:"$2,400/t",ch:"+6.1%",up:true},{n:"Indiana Limestone",p:"$420/t",ch:"0%",up:null},{n:"Absolute Black",p:"$2,100/t",ch:"+2.8%",up:true},{n:"Turkish White",p:"$672/t",ch:"−1.2%",up:false},{n:"Botticino",p:"$980/t",ch:"+1.5%",up:true}].map(s=><div key={s.n} style={{display:"flex",justifyContent:"space-between",marginBottom:5,fontSize:14,paddingBottom:5,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <span style={{color:"#a09a92"}}>{s.n}</span>
                      <div style={{textAlign:"right"}}>
                        <span style={{color:"#e2e0dc",fontFamily:M}}>{s.p}</span>
                        <span style={{color:s.up===null?"#706b63":s.up?"#22c55e":"#ef4444",fontSize:10,marginLeft:6}}>{s.ch}</span>
                      </div>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Supply Chain Signals" color="#f59e0b">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {[{s:"Carrara quarry permits under EU review — 15% delay risk Q2",c:"#f59e0b"},{s:"Indiana limestone supply stable — full capacity",c:"#22c55e"},{s:"Turkish exports steady — no trade restrictions",c:"#22c55e"},{s:"Monsoon season may affect Indian granite Jun–Aug",c:"#f59e0b"},{s:"USD/EUR favorable for European stone imports",c:"#60a5fa"}].map((it,i)=><div key={i} style={{fontSize:14,color:it.c,marginBottom:6,paddingBottom:6,borderBottom:"1px solid rgba(255,255,255,.04)",display:"flex",gap:6}}>
                      <span style={{flexShrink:0}}>{it.c==="#22c55e"?"✓":"⚠"}</span>{it.s}
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Industry Benchmarks" color="#a78bfa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Arch. stone avg margin" value="18–24%" color="#22c55e"/>
                    <Row label="Monumental avg (est)" value={fin.am+"%"} color={fin.am>=18?"#22c55e":"#f59e0b"}/>
                    <Row label="Lead time: Carrara" value="4–8 weeks" color="#a09a92"/>
                    <Row label="Lead time: Indiana" value="2–3 weeks" color="#a09a92"/>
                    <Row label="CNC cost/hr industry" value="$85–$140" color="#a09a92"/>
                    <Row label="ML robot rate" value="$95/hr" color={G}/>
                  </div>
                </Section>
                <Section title="Your Stone Exposure" color={G}>
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    <Row label="Stone spend to date" value={$(fin.tsc)} color={G}/>
                    <Row label="Avg per project" value={$(Math.round(fin.tsc/(prjs.length||1)))} color="#a09a92"/>
                    <Row label="Stone as % of cost" value={fin.tc?Math.round(fin.tsc/fin.tc*100)+"%":"—"} color="#a09a92"/>
                  </div>
                </Section>
              </div>
            </div>
          </div>;
        }

        // ─── REAL-TIME LOG DASHBOARD ───
        if(origin==="alerts") {
          const ALERTS=[
            {ty:"decision",sev:"high",m:"PRJ-007: Approve 2-week delay on RAMSA facade — weather hold at quarry",a:true,det:"Supplier reports 14-day hold due to quarry flooding. Options: accept delay, switch to domestic limestone, or airfreight block at +$8k cost. Decision needed by Feb 22."},
            {ty:"decision",sev:"high",m:"PRJ-018: Client requesting scope change — add 3 relief panels at $42k",a:true,det:"Benedictine Abbey client wants additional carved panels. Requires 80h robot + 40h carver time. Change order needs approval before scheduling."},
            {ty:"alert",sev:"high",m:"KUKA Gamma offline — spindle fault F301",a:false,det:"Error detected at 03:14. Robot halted mid-pass. Technician notified. Estimated repair: 6h."},
            {ty:"supply",sev:"medium",m:"PRJ-005 stone not ordered — fabrication starts in 12 days",a:false,det:"Calacatta Murano block must be ordered immediately. Current supplier lead time 4-6 weeks."},
            {ty:"finance",sev:"medium",m:"INV-2025-0019 overdue 67 days — $42k outstanding",a:false,det:"Soho House NYC invoice remains unpaid. Last contact Feb 10. Recommend escalation."},
            {ty:"milestone",sev:"low",m:"PRJ-001 RAMSA columns: Roughing complete — detail pass starting",a:false,det:"KUKA Alpha completed roughing 3/5 columns. Moving to 4mm detail bit tomorrow morning."},
          ];
          const decisions=ALERTS.filter(a=>a.ty==="decision");
          const highAlerts=ALERTS.filter(a=>a.sev==="high");
          const byType={decision:0,alert:0,supply:0,finance:0,milestone:0};
          ALERTS.forEach(a=>byType[a.ty]++);
          return <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}} className="fu">
            <div style={{fontSize:14,color:"#706b63",marginBottom:20}}>Mission Control snapshot — {new Date().toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric"})}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
              <Stat label="Total Signals" value={ALERTS.length} color="#60a5fa"/>
              <Stat label="Decisions Needed" value={decisions.length} color="#f59e0b" sub="Action required"/>
              <Stat label="High Priority" value={highAlerts.length} color="#ef4444"/>
              <Stat label="Supply Issues" value={byType.supply} color="#f59e0b"/>
              <Stat label="Finance Alerts" value={byType.finance} color="#a78bfa"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
              <div>
                <Section title="Decisions Required" color="#f59e0b">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {decisions.map((d,i)=><div key={i} style={{marginBottom:8,paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{fontSize:14,color:"#e2e0dc",fontWeight:600,marginBottom:3}}>{d.m}</div>
                      <div style={{fontSize:10,color:"#706b63",lineHeight:1.5}}>{d.det.slice(0,100)}...</div>
                      <Badge c="#f59e0b" style={{marginTop:4}}>ACTION REQUIRED</Badge>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Active Alerts" color="#ef4444">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {ALERTS.filter(a=>a.ty==="alert"||a.ty==="supply").map((a,i)=><div key={i} style={{marginBottom:7,paddingBottom:7,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{display:"flex",gap:6,alignItems:"flex-start"}}>
                        <span style={{color:a.sev==="high"?"#ef4444":"#f59e0b",fontSize:14,flexShrink:0}}>{a.ty==="supply"?"◫":"⚠"}</span>
                        <div>
                          <div style={{fontSize:14,color:"#e2e0dc",lineHeight:1.4}}>{a.m}</div>
                          <Badge c={a.sev==="high"?"#ef4444":"#f59e0b"} style={{marginTop:3}}>{a.sev.toUpperCase()}</Badge>
                        </div>
                      </div>
                    </div>)}
                  </div>
                </Section>
              </div>
              <div>
                <Section title="Signals by Type" color="#60a5fa">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {[["Decisions","decision","#f59e0b"],["Alerts","alert","#ef4444"],["Supply","supply","#f59e0b"],["Finance","finance","#a78bfa"],["Milestones","milestone","#22c55e"]].map(([l,k,c])=><div key={k} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5,fontSize:14}}>
                      <span style={{color:"#a09a92"}}>{l}</span>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <div style={{width:50,height:3,background:"rgba(255,255,255,.04)",borderRadius:4,overflow:"hidden"}}><div style={{height:"100%",width:(byType[k]/(ALERTS.length||1)*100)+"%",background:c}}/></div>
                        <span style={{color:c,fontWeight:700,fontFamily:M,minWidth:12}}>{byType[k]}</span>
                      </div>
                    </div>)}
                  </div>
                </Section>
                <Section title="Recent Milestones" color="#22c55e">
                  <div style={{background:"rgba(255,255,255,.015)",borderRadius:6,padding:"10px 12px"}}>
                    {ALERTS.filter(a=>a.ty==="milestone").map((a,i)=><div key={i} style={{fontSize:14,marginBottom:5,paddingBottom:5,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      <span style={{color:"#22c55e"}}>◆ </span><span style={{color:"#a09a92"}}>{a.m}</span>
                    </div>)}
                    {ALERTS.filter(a=>a.ty==="milestone").length===0&&<div style={{fontSize:14,color:"#706b63"}}>No milestones today</div>}
                  </div>
                </Section>
              </div>
            </div>
          </div>;
        }

        // ─── FALLBACK (default projects view) ───
        return <div style={{flex:1,display:"flex",overflow:"hidden"}}>
        <div style={{width:200,borderRight:"1px solid rgba(255,255,255,.06)",overflowY:"auto",padding:"8px 6px",flexShrink:0,background:"rgba(255,255,255,.005)"}}>
          <Lbl s={{padding:"2px 6px"}}>ROBOTS</Lbl>
          {ROBOTS.map(r=><div key={r.id} style={{padding:"7px 9px",marginBottom:3,borderRadius:4,background:CB,border:BD}}>
            <div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}><Dot c={STAT_C[r.status]} p={r.status==="Milling"}/>{r.name}</span></div>
            <div style={{fontSize:14,color:"#706b63",fontFamily:M}}>{r.status} · {r.op}</div>
          </div>)}
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"24px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8}}>
          <div style={{fontSize:28,opacity:.3}}>◈</div>
          <div style={{color:"#706b63",fontSize:14}}>Navigate to a section first, then click Mission Control</div>
        </div>
      </div>;
      })()}

      {/* ═══ LIFECYCLE ═══ */}
  </>);
}
