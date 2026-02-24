import React from "react";

export default function RobotsView({ ctx }) {
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
      {view==="robots"&&<div style={{flex:1,overflowY:"auto",padding:20}}>
        {(()=>{
          const FLEET=[
            {id:"R1",name:"KUKA Alpha",model:"KR 240 R3100",serial:"KR-2024-A001",bay:"A-1",acquired:"2024-03-15",warranty:"2027-03-15",status:"Milling",hrs:4820,cost:385000,accuracy:0.02,lastMaint:"2026-02-01",nextMaint:"2026-03-01",uptime:94.2,output:127,projects:18,spindleHrs:1240,spindleMax:2000,toolChanges:342,prj:"PRJ-003",op:"Roughing 3/5",eta:"2h 15m",
              log:[{t:"Feb 20 14:22",m:"Roughing pass 3/5 started — PRJ-003 Benedictine",ty:"op"},{t:"Feb 18 09:00",m:"Tool change #342 — 12mm ball nose",ty:"maint"},{t:"Feb 15 11:30",m:"Calibration check passed — ±0.02mm",ty:"check"},{t:"Feb 01 08:00",m:"Scheduled service complete — spindle lube, belt tension, encoder check",ty:"service"}]},
            {id:"R2",name:"KUKA Beta",model:"KR 240 R3100",serial:"KR-2024-A002",bay:"A-2",acquired:"2024-03-15",warranty:"2027-03-15",status:"Milling",hrs:4650,cost:385000,accuracy:0.02,lastMaint:"2026-01-28",nextMaint:"2026-02-28",uptime:91.8,output:122,projects:16,spindleHrs:1580,spindleMax:2000,toolChanges:318,prj:"PRJ-012",op:"Detail 2/8",eta:"6h 40m",
              log:[{t:"Feb 20 08:15",m:"Detail pass 2/8 started — PRJ-012 RAMSA Facade",ty:"op"},{t:"Feb 14 16:00",m:"Minor vibration detected at 18k RPM — within tolerance",ty:"warn"},{t:"Jan 28 08:00",m:"Scheduled service — coolant flush, way covers inspected",ty:"service"}]},
            {id:"R3",name:"KUKA Gamma",model:"KR 240 R3100",serial:"KR-2024-B001",bay:"B-1",acquired:"2024-06-10",warranty:"2027-06-10",status:"Idle",hrs:3890,cost:385000,accuracy:0.03,lastMaint:"2026-02-10",nextMaint:"2026-03-10",uptime:88.5,output:98,projects:14,spindleHrs:980,spindleMax:2000,toolChanges:256,prj:null,op:null,eta:null,
              log:[{t:"Feb 19 17:00",m:"Job complete — PRJ-009 finished, robot idle",ty:"op"},{t:"Feb 10 08:00",m:"Scheduled service — linear guide rails lubed, no issues",ty:"service"},{t:"Feb 02 14:10",m:"Accuracy drift +0.01mm noted — within spec but monitor",ty:"warn"}]},
            {id:"R4",name:"KUKA Delta",model:"KR 360 R3100",serial:"KR-2024-C001",bay:"B-2",acquired:"2024-09-01",warranty:"2027-09-01",status:"Milling",hrs:3210,cost:420000,accuracy:0.015,lastMaint:"2026-02-05",nextMaint:"2026-03-05",uptime:96.1,output:89,projects:11,spindleHrs:640,spindleMax:2500,toolChanges:198,prj:"PRJ-001",op:"Finish 1/3",eta:"4h 10m",
              log:[{t:"Feb 20 10:30",m:"Finish pass 1/3 started — PRJ-001 Villard Houses",ty:"op"},{t:"Feb 17 15:45",m:"Tool change #198 — 6mm flat end",ty:"maint"},{t:"Feb 05 08:00",m:"Scheduled service — all systems nominal",ty:"service"}]},
            {id:"R5",name:"KUKA Epsilon",model:"KR 240 R3100",serial:"KR-2023-A001",bay:"C-1",acquired:"2023-08-20",warranty:"2026-08-20",status:"Maintenance",hrs:6420,cost:385000,accuracy:0.04,lastMaint:"2026-02-20",nextMaint:"—",uptime:72.3,output:164,projects:24,spindleHrs:1920,spindleMax:2000,toolChanges:480,prj:null,op:null,eta:null,
              log:[{t:"Feb 20 11:45",m:"CRITICAL: Spindle temp 94°C — auto-shutdown triggered. Threshold: 85°C",ty:"error"},{t:"Feb 20 11:50",m:"Maintenance ticket opened — bearing inspection required",ty:"maint"},{t:"Feb 18 09:00",m:"Spindle temp 82°C during heavy cut — near threshold",ty:"warn"},{t:"Feb 15 14:00",m:"Vibration anomaly at 16k RPM flagged by sensor",ty:"warn"},{t:"Feb 10 08:00",m:"Accuracy check: ±0.04mm — degraded, recalibration recommended",ty:"warn"},{t:"Jan 28 08:00",m:"Scheduled service — coolant, belts, no issues found at time",ty:"service"}]},
            {id:"R6",name:"KUKA Zeta",model:"KR 360 R3100",serial:"KR-2025-A001",bay:"C-2",acquired:"2025-01-10",warranty:"2028-01-10",status:"Milling",hrs:2180,cost:420000,accuracy:0.01,lastMaint:"2026-02-14",nextMaint:"2026-03-14",uptime:93.7,output:58,projects:8,spindleHrs:420,spindleMax:2500,toolChanges:134,prj:"PRJ-015",op:"Roughing 1/4",eta:"8h 20m",
              log:[{t:"Feb 20 06:00",m:"Roughing pass 1/4 started — PRJ-015 Stripe Logo",ty:"op"},{t:"Feb 14 08:00",m:"Scheduled service — encoder calibration, spindle check",ty:"service"}]},
            {id:"R7",name:"KUKA Eta",model:"KR 240 R3100",serial:"KR-2025-B001",bay:"D-1",acquired:"2025-05-01",warranty:"2028-05-01",status:"Queued",hrs:1540,cost:385000,accuracy:0.015,lastMaint:"2026-02-08",nextMaint:"2026-03-08",uptime:90.1,output:42,projects:6,spindleHrs:320,spindleMax:2000,toolChanges:98,prj:"PRJ-009",op:"Awaiting load",eta:null,
              log:[{t:"Feb 20 07:00",m:"Queued — awaiting stone load for PRJ-009",ty:"op"},{t:"Feb 08 08:00",m:"Scheduled service — all nominal",ty:"service"}]},
          ];
          const totalHrs=FLEET.reduce((s,r)=>s+r.hrs,0);
          const totalCost=FLEET.reduce((s,r)=>s+r.cost,0);
          const avgUp=Math.round(FLEET.reduce((s,r)=>s+r.uptime,0)/FLEET.length*10)/10;
          const warnings=FLEET.reduce((s,r)=>s+r.log.filter(l=>l.ty==="warn"||l.ty==="error").length,0);
          const spindleRisk=FLEET.filter(r=>r.spindleHrs/r.spindleMax>0.85);
          const maintDue=FLEET.filter(r=>{if(r.nextMaint==="—")return true;const d=new Date(r.nextMaint+"T00:00:00");return d<new Date(Date.now()+7*864e5);});
          const logC={op:"#60a5fa",maint:G,check:"#22c55e",service:"#a78bfa",warn:"#f59e0b",error:"#ef4444"};
          const logI={op:"○",maint:"🔧",check:"✓",service:"⚙",warn:"⚠",error:"🔴"};

          // ── MAINTENANCE TAB ──
          // ── FLEET TAB ──
          const sr=selRobot?FLEET.find(r=>r.id===selRobot):null;

          // ── FLEET OVERVIEW (two-panel) ──
          return <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[["Milling",FLEET.filter(r=>r.status==="Milling").length+"/"+FLEET.length,"#22c55e"],["Avg Uptime",avgUp+"%",avgUp>90?"#22c55e":"#f59e0b"],["Total Hours",totalHrs.toLocaleString(),"#60a5fa"],["Spindle Risk",spindleRisk.length,spindleRisk.length>0?"#ef4444":"#22c55e"],["Maint. Due",maintDue.length,maintDue.length>0?"#f59e0b":"#22c55e"]].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>
            <div style={{display:"flex",gap:14}}>
              {/* Left: Robot list */}
              <div style={{width:300,flexShrink:0}}>
                {FLEET.map(r=>{const spPct=Math.round(r.spindleHrs/r.spindleMax*100);const hasIssue=r.log.some(l=>l.ty==="error")||r.status==="Maintenance";const hasWarn=r.log.some(l=>l.ty==="warn");return <div key={r.id} onClick={()=>setSelRobot(r.id)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",marginBottom:4,borderRadius:6,background:selRobot===r.id?"rgba(96,165,250,.06)":hasIssue?"rgba(239,68,68,.03)":"transparent",border:selRobot===r.id?"1px solid rgba(96,165,250,.15)":hasIssue?"1px solid rgba(239,68,68,.08)":"1px solid transparent",cursor:"pointer"}}>
                  <div style={{width:10,height:10,borderRadius:6,background:STAT_C[r.status],flexShrink:0}}/>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:13,fontWeight:600,color:selRobot===r.id?"#e2e0dc":"#a09a92"}}>{r.name}</span>
                      <Badge c={STAT_C[r.status]}>{r.status}</Badge>
                    </div>
                    <div style={{fontSize:10,color:"#4a4540"}}>{r.prj?r.op+" · ETA "+(r.eta||"—"):r.model+" · Bay "+r.bay}</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:2,flexShrink:0}}>
                    <span style={{fontSize:10,fontFamily:M,color:r.uptime>90?"#22c55e":"#f59e0b"}}>{r.uptime}%</span>
                    <div style={{display:"flex",gap:3}}>
                      {spPct>70&&<span style={{fontSize:9,padding:"1px 4px",borderRadius:4,background:spPct>85?"rgba(239,68,68,.1)":"rgba(245,158,11,.1)",color:spPct>85?"#ef4444":"#f59e0b"}}>SPNDL</span>}
                      {hasWarn&&<span style={{fontSize:9,padding:"1px 4px",borderRadius:4,background:"rgba(245,158,11,.1)",color:"#f59e0b"}}>⚠</span>}
                    </div>
                  </div>
                </div>;})}
              </div>
              {/* Right: Robot detail */}
              <div style={{flex:1}}>
                {sr?<div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                    <div>
                      <div style={{fontSize:22,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>{sr.name}</div>
                      <div style={{fontSize:12,color:"#706b63",fontFamily:M}}>{sr.model} · {sr.serial} · Bay {sr.bay}</div>
                    </div>
                    <Badge c={STAT_C[sr.status]}>{sr.status}</Badge>
                  </div>
                  {sr.prj&&<div style={{padding:"12px 14px",borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.12)",marginBottom:14,cursor:"pointer"}} onClick={()=>{const p=prjs.find(p=>p.id===sr.prj);if(p){setSelId(p.id);setView("lifecycle");}}}>
                    <div style={{fontSize:11,color:"#60a5fa",fontWeight:600,marginBottom:2}}>Currently Running — click to view project</div>
                    <div style={{fontSize:14,color:"#e2e0dc"}}>{sr.prj} — {sr.op}{sr.eta?" · ETA "+sr.eta:""}</div>
                  </div>}
                  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:14}}>
                    {[["Uptime",sr.uptime+"%",sr.uptime>90?"#22c55e":"#f59e0b"],["Accuracy","±"+sr.accuracy+"mm",sr.accuracy>0.03?"#ef4444":"#22c55e"],["Total Hours",sr.hrs.toLocaleString(),"#a09a92"],["Jobs Done",sr.output,"#60a5fa"]].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                      <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                      <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
                    </div>)}
                  </div>
                  {/* Spindle + Tool wear */}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
                    {[["Spindle Life",sr.spindleHrs,sr.spindleMax,"hrs"],["Tool Changes",sr.toolChanges,600,"changes"]].map(([l,cur,max,unit])=>{const pct=Math.round(cur/max*100);return <div key={l} style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                        <span style={{fontSize:12,color:"#706b63",fontWeight:600,textTransform:"uppercase",letterSpacing:.5}}>{l}</span>
                        <span style={{fontSize:13,fontFamily:M,fontWeight:700,color:pct>85?"#ef4444":pct>70?"#f59e0b":"#22c55e"}}>{pct}%</span>
                      </div>
                      <div style={{height:10,background:"rgba(255,255,255,.04)",borderRadius:6,overflow:"hidden",marginBottom:4}}><div style={{height:"100%",width:pct+"%",borderRadius:6,background:pct>85?"#ef4444":pct>70?"#f59e0b":"#22c55e"}}/></div>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#4a4540",fontFamily:M}}><span>{cur.toLocaleString()} used</span><span>{(max-cur).toLocaleString()} remaining</span></div>
                    </div>;})}
                  </div>
                  {/* Asset + Service info */}
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:14,padding:"12px 14px",background:"rgba(255,255,255,.015)",borderRadius:6,border:BD}}>
                    {[["Acquired",sr.acquired],["Warranty",sr.warranty],["Asset Value","$"+(sr.cost/1000)+"k"],["Last Service",sr.lastMaint],["Next Service",sr.nextMaint],["Total Projects",sr.projects]].map(([l,v])=><div key={l}>
                      <div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",letterSpacing:.5,marginBottom:2}}>{l}</div>
                      <div style={{fontSize:12,color:l==="Warranty"&&new Date(v)<new Date("2026-12-31")?"#f59e0b":l==="Next Service"&&v==="—"?"#ef4444":"#a09a92",fontFamily:M}}>{v}</div>
                    </div>)}
                  </div>
                  {/* ── Maintenance & Health ── */}
                  {(()=>{
                    const spPctM=Math.round(sr.spindleHrs/sr.spindleMax*100);
                    const errors=sr.log.filter(l=>l.ty==="error");
                    const warns=sr.log.filter(l=>l.ty==="warn");
                    const services=sr.log.filter(l=>l.ty==="service");
                    const isMaintDue=sr.nextMaint==="—"||new Date(sr.nextMaint+"T00:00:00")<new Date(Date.now()+7*864e5);
                    const hasIssues=errors.length>0||warns.length>0||spPctM>85||isMaintDue;
                    if(!hasIssues) return <div style={{marginBottom:14,padding:"12px 14px",borderRadius:6,background:"rgba(34,197,94,.03)",border:"1px solid rgba(34,197,94,.08)"}}>
                      <div style={{fontSize:11,fontWeight:600,color:"#22c55e"}}>✓ No maintenance issues — all systems nominal</div>
                      {services.length>0&&<div style={{fontSize:10,color:"#4a4540",marginTop:3}}>Last service: {services[0].t} — {services[0].m}</div>}
                    </div>;
                    return <div style={{marginBottom:14}}>
                      <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Maintenance & Health</div>
                      {errors.length>0&&<div style={{padding:"12px 14px",borderRadius:6,background:"rgba(239,68,68,.04)",border:"1px solid rgba(239,68,68,.12)",marginBottom:8}}>
                        <div style={{fontSize:11,fontWeight:700,color:"#ef4444",marginBottom:4}}>🔴 Active Issue</div>
                        {errors.map((e,i)=><div key={i} style={{fontSize:12,color:"#e2e0dc",lineHeight:1.5}}>{e.m}<div style={{fontSize:10,color:"#4a4540",fontFamily:M}}>{e.t}</div></div>)}
                      </div>}
                      {spPctM>70&&<div style={{padding:"12px 14px",borderRadius:6,background:spPctM>85?"rgba(239,68,68,.03)":"rgba(245,158,11,.03)",border:spPctM>85?"1px solid rgba(239,68,68,.08)":"1px solid rgba(245,158,11,.08)",marginBottom:8}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <div>
                            <div style={{fontSize:11,fontWeight:600,color:spPctM>85?"#ef4444":"#f59e0b"}}>Spindle at {spPctM}% — {spPctM>85?"replacement needed":"schedule replacement"}</div>
                            <div style={{fontSize:10,color:"#4a4540"}}>{(sr.spindleMax-sr.spindleHrs).toLocaleString()} hrs remaining of {sr.spindleMax.toLocaleString()}</div>
                          </div>
                          <span style={{fontSize:9,padding:"2px 6px",borderRadius:4,background:spPctM>85?"rgba(239,68,68,.1)":"rgba(245,158,11,.1)",color:spPctM>85?"#ef4444":"#f59e0b",fontWeight:700}}>SPINDLE</span>
                        </div>
                      </div>}
                      {isMaintDue&&<div style={{padding:"12px 14px",borderRadius:6,background:"rgba(245,158,11,.03)",border:"1px solid rgba(245,158,11,.08)",marginBottom:8}}>
                        <div style={{fontSize:11,fontWeight:600,color:"#f59e0b"}}>Service {sr.nextMaint==="—"?"overdue":"due "+sr.nextMaint}</div>
                        <div style={{fontSize:10,color:"#4a4540"}}>Last service: {sr.lastMaint}</div>
                      </div>}
                      {warns.length>0&&<div style={{marginBottom:4}}>
                        <div style={{fontSize:10,fontWeight:600,color:"#4a4540",textTransform:"uppercase",marginBottom:4}}>Warnings ({warns.length})</div>
                        {warns.slice(0,3).map((w,i)=><div key={i} style={{display:"flex",gap:8,padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,.02)",alignItems:"baseline"}}>
                          <span style={{fontSize:10,fontFamily:M,color:"#4a4540",flexShrink:0,width:90}}>{w.t}</span>
                          <span style={{fontSize:11,color:"#f59e0b"}}>{w.m}</span>
                        </div>)}
                      </div>}
                    </div>;
                  })()}
                  {/* Event log — compact */}
                  <div style={{fontSize:11,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Event Log</div>
                  <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
                    {sr.log.map((l,i)=><div key={i} style={{display:"flex",gap:8,padding:"7px 12px",borderBottom:"1px solid rgba(255,255,255,.03)",alignItems:"center",background:l.ty==="error"?"rgba(239,68,68,.03)":l.ty==="warn"?"rgba(245,158,11,.02)":"transparent"}}>
                      <div style={{width:6,height:6,borderRadius:4,background:logC[l.ty],flexShrink:0}}/>
                      <span style={{fontSize:11,color:l.ty==="error"?"#ef4444":l.ty==="warn"?"#f59e0b":"#a09a92",flex:1}}>{l.m.length>100?l.m.slice(0,100)+"…":l.m}</span>
                      <span style={{fontSize:9,fontFamily:M,color:"#4a4540",flexShrink:0}}>{l.t}</span>
                    </div>)}
                  </div>
                </div>:<div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:40,color:"#4a4540",fontSize:13}}>Select a robot to view details</div>}
              </div>
            </div>
          </div>;
        })()}
      </div>}

      {/* ═══ SCENARIO ═══ */}
  </>);
}
