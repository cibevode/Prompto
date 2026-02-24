import React from "react";

export default function LifecycleView({ ctx }) {
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
      {view==="lifecycle"&&<div style={{flex:1,display:"flex",overflow:"hidden"}}>
        <div style={{width:250,borderRight:"1px solid rgba(255,255,255,.06)",display:"flex",flexDirection:"column",flexShrink:0,background:"rgba(255,255,255,.005)"}}>
          <div style={{padding:"8px 12px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Projects ({prjs.length})</span>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:"4px 6px"}}>
            {prjs.filter(p=>{
              const matchSearch=!prjSearch||p.name.toLowerCase().includes(prjSearch.toLowerCase())||p.client.toLowerCase().includes(prjSearch.toLowerCase())||p.type.toLowerCase().includes(prjSearch.toLowerCase())||p.id.toLowerCase().includes(prjSearch.toLowerCase());
              const matchTab=prjTabFilt==="all"||(prjTabFilt==="active"&&p.stage>0&&p.stage<10)||(prjTabFilt==="delivered"&&p.stage>=10);
              return matchSearch&&matchTab;
            }).map(p=><div key={p.id} onClick={()=>{setSelId(p.id);setShowNew(false);setEditing(false);}} style={{padding:"8px 9px",marginBottom:3,borderRadius:6,cursor:"pointer",background:selId===p.id?`${G}0D`:"transparent",border:selId===p.id?`1px solid ${G}22`:"1px solid transparent"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:14,fontWeight:600,color:selId===p.id?"#e2e0dc":"#a09a92",lineHeight:1.3,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name}</span>
                <div style={{display:"flex",alignItems:"center",gap:4,flexShrink:0}}>
                  <span style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:p.stage>=STAGES.length-1?"rgba(34,197,94,.12)":(STAGES[p.stage]?.color||"#706b63")+"15",color:p.stage>=STAGES.length-1?"#22c55e":STAGES[p.stage]?.color||"#706b63",fontWeight:600,whiteSpace:"nowrap"}}>{p.stage>=STAGES.length-1?"\u2713 Complete":STAGES[p.stage]?.label}</span>
                  <span style={{width:6,height:6,borderRadius:"50%",background:PRI[p.priority],flexShrink:0}}/>
                </div>
              </div>
              <div style={{fontSize:14,color:"#706b63",fontFamily:M,marginTop:2}}>{p.client} · {STAGES[p.stage]?.label}</div>
              <div style={{display:"flex",gap:1.5,height:3,borderRadius:1.5,overflow:"hidden",marginTop:4}}>
                {STAGES.map((_,i)=><div key={i} style={{flex:1,background:i<p.stage?G:i===p.stage?G+"60":"rgba(255,255,255,.04)",borderRadius:4}}/>)}
              </div>
            </div>)}
          </div>
        </div>
        <div style={{flex:1,overflowY:"auto"}}>
          {showNew?<div className="fu" style={{padding:20,maxWidth:680}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <span style={{fontSize:18,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>New Project</span>
              <button onClick={()=>setShowNew(false)} style={{background:"none",border:"none",color:"#706b63",cursor:"pointer",fontSize:18}}>×</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <Inp label="Name" value={newP.name} onChange={v=>setNewP(p=>({...p,name:v}))} ph="e.g. Carnegie Rosette"/>
              <Inp label="Client" value={newP.client} onChange={v=>setNewP(p=>({...p,client:v}))}/>
              <Inp label="Type" value={newP.type} onChange={v=>setNewP(p=>({...p,type:v}))} type="select" opts={["Sculpture","Architecture","Fine Art","Monument","Restoration","Corporate"]}/>
              <Inp label="Priority" value={newP.priority} onChange={v=>setNewP(p=>({...p,priority:v}))} type="select" opts={["critical","high","medium","low"]}/>
              <Inp label="Due" value={newP.due} onChange={v=>setNewP(p=>({...p,due:v}))} type="date"/>
              <Inp label="Stone" value={newP.stoneId} onChange={v=>setNewP(p=>({...p,stoneId:v}))} type="select" opts={STONE_DB.map(s=>s.name)}/>
            </div>
            <div style={{display:"flex",gap:8,marginTop:14}}>
              <Btn primary onClick={createPrj} disabled={!newP.name||!newP.client}>Create Project</Btn>
              <Btn onClick={()=>setShowNew(false)}>Cancel</Btn>
            </div>
          </div>
          :sel?<div className="fu" style={{padding:"14px 18px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
              <div>
                <div style={{fontSize:14,color:"#706b63",fontFamily:M}}>{sel.id} · {sel.type}</div>
                <div style={{fontSize:22,fontWeight:700,color:"#e2e0dc",fontFamily:D,marginTop:1}}>{sel.name}</div>
                <div style={{fontSize:14,color:"#706b63",marginTop:2}}>{sel.client} · Due {sel.due}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <Badge c={PRI[sel.priority]}>{sel.priority}</Badge>
                <span style={{fontSize:28,fontWeight:700,color:G,fontFamily:M}}>{sel.progress}%</span>
              </div>
            </div>
            {/* Pipeline */}
            <div style={{display:"flex",alignItems:"flex-start",gap:0,marginBottom:12,overflowX:"auto",paddingBottom:4}}>
              {STAGES.map((s,i)=>{
                const dn=i<sel.stage,ac=i===sel.stage,ex=expS===i;
                const filled=sel.sd?.[s.key]?Object.values(sel.sd[s.key]).filter(v=>v).length:0;
                return (
                  <div key={i} style={{display:"flex",alignItems:"flex-start",flexShrink:0}}>
                    <div onClick={()=>{setExpS(ex?null:i);setEditing(false);}} className="sb" style={{display:"flex",flexDirection:"column",alignItems:"center",width:72,padding:"4px 2px",borderRadius:6,background:ex?`${s.color}0A`:"transparent",border:ex?`1px solid ${s.color}20`:"1px solid transparent"}}>
                      <div style={{width:28,height:28,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,background:dn?s.color:ac?s.color+"20":"rgba(255,255,255,.03)",border:ac?`2px solid ${s.color}`:dn?`1px solid ${s.color}`:"1px solid rgba(255,255,255,.05)",color:dn?"#0c0b0a":ac?s.color:"#3a3632",boxShadow:ac?`0 0 10px ${s.color}25`:""}}>{dn?"✓":s.icon}</div>
                      <div style={{fontSize:10,fontWeight:ac?700:500,color:dn?s.color:ac?"#e2e0dc":"#4a4540",marginTop:3,textAlign:"center",lineHeight:1.2}}>{s.label}</div>
                    </div>
                    {i<STAGES.length-1&&<div style={{width:6,height:2,marginTop:19,background:dn?s.color:"rgba(255,255,255,.05)",flexShrink:0}}/>}
                  </div>
                );
              })}
            </div>
            {/* Expanded stage */}
            {expS!==null&&(()=>{
              const stg=STAGES[expS],data=sel.sd?.[stg.key]||{};
              const dn=expS<sel.stage,ac=expS===sel.stage;
              const filled=Object.values(data).filter(v=>v).length;
              const isInv2=stg.key==="invoice2";
              return (
                <div className="fu" style={{background:"rgba(255,255,255,.012)",border:`1px solid ${stg.color}20`,borderRadius:8,padding:14,marginBottom:14}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <span style={{fontSize:22}}>{stg.icon}</span>
                      <div><div style={{fontSize:18,fontWeight:700,color:"#e2e0dc"}}>{stg.label}</div><div style={{fontSize:14,color:"#706b63"}}>{stg.desc}</div></div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:14,color:"#706b63",fontFamily:M}}>{filled}/{stg.fields.length}</span>
                      {dn&&<Badge c="#22c55e">DONE</Badge>}{ac&&<Badge c={stg.color}>ACTIVE</Badge>}{!dn&&!ac&&<Badge c="#64748b">UPCOMING</Badge>}
                      {!editing?<Btn small onClick={startEdit}>✏ Edit</Btn>:<><Btn small primary color="#22c55e" onClick={saveEdit}>Save</Btn><Btn small onClick={()=>{setEditing(false);if(editSnap){const stg2=STAGES[expS];setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,sd:{...p.sd,[stg2.key]:editSnap}}));}}}>Cancel</Btn></>}
                      <button onClick={()=>{setExpS(null);setEditing(false);}} style={{background:"none",border:"none",color:"#706b63",cursor:"pointer",fontSize:18}}>×</button>
                    </div>
                  </div>
                  {stg.key==="summary"&&<div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:12}}>
                      <KPI l="Est. Cost" v={$(sel.estCost)} c={G}/><KPI l="Quoted" v={$(sel.quoted)} c="#22c55e"/><KPI l="Margin" v={sel.quoted?Math.round((sel.quoted-sel.estCost)/sel.quoted*100)+"%":"-"} c="#60a5fa"/><KPI l="Stage" v={STAGES[sel.stage]?.label||"-"} c={STAGES[sel.stage]?.color||"#706b63"}/>
                      <KPI l="Priority" v={sel.priority} c={PRI[sel.priority]}/><KPI l="Due" v={sel.due||"-"} c={sel.due&&new Date(sel.due)<new Date()?"#ef4444":"#e2e0dc"}/><KPI l="Progress" v={sel.progress+"%"} c="#22c55e"/><KPI l="Inv #1" v={sel.inv1P?"Paid":"Unpaid"} c={sel.inv1P?"#22c55e":"#f59e0b"}/>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                      <div>
                        <Lbl>Assignments</Lbl>
                        <div style={{fontSize:14,color:"#a09a92",lineHeight:1.8,padding:10,background:CB,border:BD,borderRadius:4}}>
                          <div><span style={{color:"#e2e0dc"}}>Client:</span> {sel.client}</div>
                          <div><span style={{color:"#e2e0dc"}}>Type:</span> {sel.type}{sel.artist?" · Artist: "+sel.artist:""}</div>
                          <div><span style={{color:"#e2e0dc"}}>Stone:</span> {sel.sd?.stone_sourcing?.stoneType||"TBD"}</div>
                          <div><span style={{color:"#e2e0dc"}}>Robot:</span> {sel.sd?.fabrication?.robot||"Unassigned"}</div>
                          <div><span style={{color:"#e2e0dc"}}>Carver:</span> {sel.sd?.hitl_polish?.carver||"Unassigned"}</div>
                          <div><span style={{color:"#e2e0dc"}}>Supplier:</span> {sel.sd?.stone_sourcing?.supplier||"TBD"}</div>
                        </div>
                      </div>
                      <div>
                        <Lbl>Financials</Lbl>
                        <div style={{fontSize:14,color:"#a09a92",lineHeight:1.8,padding:10,background:CB,border:BD,borderRadius:4}}>
                          <div><span style={{color:"#e2e0dc"}}>Invoice #1:</span> {$(sel.sd?.invoice1?.amount||sel.inv1||0)} — {sel.sd?.invoice1?.status||"Draft"}</div>
                          <div><span style={{color:"#e2e0dc"}}>Invoice #2:</span> {$(sel.sd?.invoice2?.amount||sel.inv2||0)} — {sel.sd?.invoice2?.status||"Draft"}</div>
                          <div><span style={{color:"#e2e0dc"}}>Stone Cost:</span> {$(sel.sd?.stone_sourcing?.stoneCost||0)}</div>
                          <div><span style={{color:"#e2e0dc"}}>Robot Hrs:</span> {sel.sd?.fabrication?.hrsLogged||0} / {sel.sd?.estimation?.robotHrsEst||"?"}</div>
                          <div><span style={{color:"#e2e0dc"}}>Hand Hrs:</span> {sel.sd?.hitl_polish?.hrsLogged||0} / {sel.sd?.estimation?.handHrsEst||"?"}</div>
                        </div>
                      </div>
                    </div>
                    <Lbl>Recent Activity</Lbl>
                    <div style={{maxHeight:140,overflowY:"auto",background:CB,border:BD,borderRadius:4,padding:10,marginTop:4}}>
                      {(sel.log||[]).slice(0,8).map((l,i)=><div key={i} style={{fontSize:14,padding:"3px 0",borderBottom:"1px solid rgba(255,255,255,.02)"}}><span style={{color:"#706b63",fontFamily:M,fontSize:14}}>{l.t}</span> <span style={{color:"#a09a92"}}>{l.m}</span> <span style={{color:"#60a5fa",fontSize:10}}>{l.u}</span></div>)}
                      {(!sel.log||sel.log.length===0)&&<div style={{fontSize:14,color:"#4a4540",fontStyle:"italic"}}>No activity yet.</div>}
                    </div>
                  </div>}
                  {stg.key!=="summary"&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                    {stg.fields.map(f=><Inp key={f.k} label={f.l} value={data[f.k]||""} onChange={v=>upd(stg.key,f.k,v)} type={f.t} opts={f.o} disabled={!editing} robots={ROBOTS} carvers={CARVERS} stoneDb={STONE_DB} genInv={genInv}/>)}
                  </div>}
                  {/* Model / Wireframe Preview for Quote & Design stages */}
                  {(stg.key==="quote"||stg.key==="design"||stg.key==="toolpath")&&<div style={{marginTop:12,padding:12,borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)"}}>
                    <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:8}}>{stg.key==="quote"?"Quoted Model Reference":stg.key==="toolpath"?"Toolpath Visualization":"Design Model"}</div>
                    <div style={{display:"flex",gap:12}}>
                      {/* Toolpath SVG — static for quote/design, dynamic for toolpath */}
                      {stg.key==="toolpath"&&(()=>{
                        const tp=sel.sd?.toolpath||{};
                        const generated=tpGenState[selId]==="done"||tp.simComplete==="Approved"||tp.codeExported==="Deployed";
                        const passes=Number(tp.passCount||4);
                        const type=sel.type||"";
                        // Generate SVG paths based on project type
                        const isFacade=type==="Facade Panel"||type==="Architectural";
                        const isSculpture=type==="Sculpture"||type==="Monument"||type==="Public Art";
                        const isRestoration=type==="Restoration";
                        const W=180,H=130;
                        const passColors=["#22c55e","#60a5fa","#a78bfa","#f59e0b","#f472b6","#22c55e","#38bdf8","#c084fc"];
                        return <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{background:"rgba(0,0,0,.25)",borderRadius:4,border:"1px solid rgba(255,255,255,.06)",flexShrink:0}}>
                          <defs>
                            <linearGradient id="tpbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#d4a574" stopOpacity="0.12"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.04"/></linearGradient>
                            <filter id="glow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                          </defs>
                          {/* Block outline */}
                          <rect x="10" y="10" width={W-20} height={H-20} rx="3" fill="url(#tpbg)" stroke="rgba(255,255,255,.08)" strokeWidth="0.5"/>
                          {!generated&&<>
                            <text x={W/2} y={H/2-6} textAnchor="middle" fill="#4a4540" fontSize="9" fontFamily={M}>No toolpath generated</text>
                            <text x={W/2} y={H/2+8} textAnchor="middle" fill="#3a3530" fontSize="8" fontFamily={M}>Run agent to preview</text>
                          </>}
                          {generated&&<>
                            {/* Facade: horizontal scan lines + step-overs */}
                            {isFacade&&Array.from({length:passes*3+4}).map((_,i)=>{
                              const y=15+i*(H-30)/(passes*3+3);
                              const amp=i%3===0?8:3;
                              const freq=i%3===0?0.08:0.15;
                              const pts=Array.from({length:20}).map((_,j)=>{const x=15+j*(W-30)/19;return `${x},${y+Math.sin(j*freq+i)*amp}`;}).join(" ");
                              return <polyline key={i} points={pts} fill="none" stroke={passColors[i%passes]} strokeWidth={i%3===0?0.9:0.4} opacity={i%3===0?0.8:0.3}/>;
                            })}
                            {/* Sculpture: spiral + contour passes */}
                            {isSculpture&&Array.from({length:passes+2}).map((_,i)=>{
                              const cx=W/2,cy=H/2,r=20+i*8;
                              const pts=Array.from({length:60}).map((_,j)=>{
                                const a=j/60*Math.PI*2;
                                const wobble=Math.sin(a*4+i)*3;
                                return `${cx+Math.cos(a)*(r+wobble)},${cy+Math.sin(a)*(r+wobble)*0.75}`;
                              }).join(" ");
                              return <polyline key={i} points={pts} fill="none" stroke={passColors[i%8]} strokeWidth={i===0?1:0.5} opacity={i===0?0.9:0.4}/>;
                            })}
                            {/* Restoration: concentric follow-curves */}
                            {isRestoration&&<>{Array.from({length:passes*2}).map((_,i)=>{
                              const pad=10+i*4;
                              const w2=W-pad*2,h2=H-pad*2;
                              return <rect key={i} x={pad} y={pad} width={w2} height={h2} rx="2" fill="none" stroke={passColors[i%8]} strokeWidth={i===0?1:0.4} opacity={0.7-i*0.06}/>;
                            })}</>}
                            {/* Default: adaptive rough + spiral finish */}
                            {!isFacade&&!isSculpture&&!isRestoration&&<>{
                              Array.from({length:passes}).map((_,i)=>{
                                const phase=i/passes;
                                const pts=Array.from({length:30}).map((_,j)=>{
                                  const t=j/29;
                                  const x=15+(W-30)*t;
                                  const y=20+(H-40)*phase+Math.sin(t*Math.PI*4+i)*10*(1-phase);
                                  return `${x},${y}`;
                                }).join(" ");
                                return <polyline key={i} points={pts} fill="none" stroke={passColors[i%8]} strokeWidth={i===0?1.2:0.6} opacity={0.8-i*0.1}/>;
                              })
                            }</>}
                            {/* Tool head marker on last pass */}
                            <circle cx={W-20} cy={H/2} r="3" fill="#22c55e" opacity="0.9" filter="url(#glow)"/>
                            <circle cx={W-20} cy={H/2} r="6" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.4"/>
                          </>}
                          {/* Labels */}
                          <text x="13" y={H-4} fill="#4a4540" fontSize="6" fontFamily={M}>{sel.dims.l}×{sel.dims.w}×{sel.dims.h}m</text>
                          {generated&&<text x={W-10} y={H-4} fill="#22c55e" fontSize="6" fontFamily={M} textAnchor="end">{passes}p · {tp.estMillTime||"—"}h</text>}
                        </svg>;
                      })()}
                      {stg.key!=="toolpath"&&<svg width="180" height="130" viewBox="0 0 180 130" style={{background:"rgba(0,0,0,.2)",borderRadius:4,border:"1px solid rgba(255,255,255,.04)"}}>
                        <defs><linearGradient id="wf" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={stg.color} stopOpacity="0.3"/><stop offset="100%" stopColor={stg.color} stopOpacity="0.05"/></linearGradient></defs>
                        <rect x="30" y="20" width="60" height="90" rx="2" fill="url(#wf)" stroke={stg.color} strokeWidth="0.5" opacity="0.6"/>
                        <rect x="90" y="30" width="60" height="80" rx="2" fill="none" stroke={stg.color} strokeWidth="0.5" strokeDasharray="2,2" opacity="0.4"/>
                        <line x1="30" y1="20" x2="90" y2="30" stroke={stg.color} strokeWidth="0.3" opacity="0.3"/>
                        <line x1="90" y1="20" x2="150" y2="30" stroke={stg.color} strokeWidth="0.3" opacity="0.3"/>
                        <line x1="90" y1="110" x2="150" y2="110" stroke={stg.color} strokeWidth="0.3" opacity="0.3"/>
                        <ellipse cx="60" cy="55" rx="15" ry="25" fill="none" stroke={stg.color} strokeWidth="0.5" opacity="0.4"/>
                        <line x1="45" y1="55" x2="75" y2="55" stroke={stg.color} strokeWidth="0.3" opacity="0.3"/>
                        <line x1="60" y1="30" x2="60" y2="80" stroke={stg.color} strokeWidth="0.3" opacity="0.3"/>
                        <text x="10" y="126" fill="#706b63" fontSize="6" fontFamily={M}>{sel.dims.l}×{sel.dims.w}×{sel.dims.h}m</text>
                        <text x="100" y="126" fill={stg.color} fontSize="6" fontFamily={M}>{"v"+(data.modelVersion||data.quoteDate||"1.0")}</text>
                      </svg>}
                      <div style={{flex:1,fontSize:14,color:"#a09a92",lineHeight:1.6}}>
                        {stg.key==="quote"&&<><div>Quoted against: <span style={{color:"#e2e0dc",fontWeight:600}}>{data.quotedPrice?$(data.quotedPrice):"Draft"}</span></div><div>Format: {sel.sd?.design?.fileFormat||"Pending design"}</div><div>Source: {sel.sd?.design?.designSource||"TBD"}</div><div>Stone: <span style={{color:G}}>{sel.sd?.stone_sourcing?.stoneType||(STONE_DB.find(s=>s.id===sel.stoneId)||{}).name||"TBD"}</span></div><div>Dims: {sel.dims.l}×{sel.dims.w}×{sel.dims.h}m</div></>}
                        {stg.key==="design"&&<><div>Software: <span style={{color:"#e2e0dc"}}>{data.softwareUsed||"TBD"}</span></div><div>Version: <span style={{color:"#e2e0dc"}}>{data.modelVersion||"—"}</span></div><div>Format: <span style={{color:"#e2e0dc"}}>{data.fileFormat||"—"}</span></div><div>Revisions: {data.revisionCount||0}</div><div>Status: <Badge c={data.designApproved==="Yes"?"#22c55e":"#f59e0b"}>{data.designApproved||"Pending"}</Badge></div></>}
                        {stg.key==="toolpath"&&<><div>Software: <span style={{color:"#e2e0dc"}}>{data.software||"—"}</span></div><div>Strategy: <span style={{color:"#e2e0dc"}}>{data.strategy||"—"}</span></div><div>Tool Bits: <span style={{color:"#e2e0dc"}}>{data.toolBits||"—"}</span></div><div>Est Time: <span style={{color:"#22c55e"}}>{data.estMillTime||"—"}h</span></div><div>Sim: <Badge c={data.simComplete==="Approved"?"#22c55e":data.simComplete==="In progress"?"#f59e0b":"#706b63"}>{data.simComplete||"Not started"}</Badge></div><div>Code: <Badge c={data.codeExported==="Deployed"?"#22c55e":data.codeExported==="Exported"?"#60a5fa":"#706b63"}>{data.codeExported||"Not exported"}</Badge></div></>}
                      </div>
                    </div>
                  </div>}

                  {/* Quote — download, recipient details, event log */}
                  {stg.key==="quote"&&<div style={{marginTop:10}}>
                    <div style={{display:"flex",gap:10,marginBottom:8}}>
                      <div style={{flex:1,padding:12,borderRadius:6,background:"rgba(126,184,164,.04)",border:"1px solid rgba(126,184,164,.1)"}}>
                        <div style={{fontSize:12,fontWeight:700,color:"#7eb8a4",marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>Quote Delivery</div>
                        <div style={{fontSize:14,color:"#a09a92",lineHeight:1.6}}>
                          <div>Sent to: <span style={{color:"#e2e0dc"}}>{data.clientContact||"—"}</span></div>
                          <div>Email: <span style={{color:"#e2e0dc",fontFamily:M}}>{data.clientContact?(data.clientContact.toLowerCase().replace(/\s/g,".")+"@client.com"):"—"}</span></div>
                          <div>Date sent: <span style={{color:"#e2e0dc"}}>{data.quoteDate||"Not sent"}</span></div>
                          <div>Status: <Badge c={data.quoteStatus==="Accepted"?"#22c55e":data.quoteStatus==="Rejected"?"#ef4444":data.quoteStatus==="Sent"||data.quoteStatus==="Viewed"?"#60a5fa":"#706b63"}>{data.quoteStatus||"Draft"}</Badge></div>
                          {data.quoteExpiry&&<div>Expires: <span style={{color:new Date(data.quoteExpiry)<new Date()?"#ef4444":"#e2e0dc"}}>{data.quoteExpiry}{new Date(data.quoteExpiry)<new Date()?" ⚠ EXPIRED":""}</span></div>}
                        </div>
                      </div>
                      <div style={{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-start"}}>
                        <Btn small color="#7eb8a4" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Quote Sent",changes:[{field:"Action",from:"—",to:"PDF downloaded"}]}]}));}}> 📄 Download Quote PDF</Btn>
                        <Btn small color="#60a5fa" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Quote Sent",changes:[{field:"Action",from:"—",to:"Quote re-sent to client"}]}]}));}}> 📧 Re-send Quote</Btn>
                      </div>
                    </div>
                    {(sel.changelog||[]).filter(c=>c.stage==="Quote Sent").length>0&&<div style={{padding:12,borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)"}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>Quote Event Log</div>
                      {(sel.changelog||[]).filter(c=>c.stage==="Quote Sent").map((c,ci)=><div key={ci} style={{fontSize:14,color:"#a09a92",padding:"3px 0",borderBottom:"1px solid rgba(255,255,255,.02)"}}>
                        <span style={{color:"#706b63",fontFamily:M,marginRight:4}}>{c.t}</span>
                        {c.changes.map((ch,j)=><span key={j}>{ch.field==="Action"?ch.to:<><span style={{color:"#e2e0dc"}}>{ch.field}:</span> <span style={{color:"#ef4444",textDecoration:"line-through"}}>{ch.from}</span> → <span style={{color:"#22c55e"}}>{ch.to}</span></>} </span>)}
                        <span style={{color:"#4a4540"}}>({c.u})</span>
                      </div>)}
                    </div>}
                  </div>}

                  {/* Estimation — matching manual estimator dropdowns + download */}
                  {stg.key==="estimation"&&<div style={{marginTop:10}}>
                    <div style={{padding:12,borderRadius:6,background:"rgba(139,157,195,.04)",border:"1px solid rgba(139,157,195,.1)"}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#8b9dc3",marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>Estimation Parameters</div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
                        <div><div style={{fontSize:14,color:"#706b63",marginBottom:2}}>Stone</div><select value={data.stoneType||""} onChange={e=>upd("estimation","stoneType",e.target.value)} disabled={!editing} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"4px 8px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S,cursor:"pointer",width:"100%"}}><option value="">Select...</option>{STONE_DB.map(s=><option key={s.id} value={s.name}>{s.name} ({s.fam})</option>)}</select></div>
                        <div><div style={{fontSize:14,color:"#706b63",marginBottom:2}}>Quality Level</div><select value={data.qualityLevel||"Standard"} onChange={e=>upd("estimation","qualityLevel",e.target.value)} disabled={!editing} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"4px 8px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S,cursor:"pointer",width:"100%"}}>{["Standard (×0.85)","Premium (×1.0)","Artisan (×1.3)","Museum (×1.6)"].map(q=><option key={q} value={q.split(" ")[0]}>{q}</option>)}</select></div>
                        <div><div style={{fontSize:14,color:"#706b63",marginBottom:2}}>Complexity</div><select value={data.complexity||""} onChange={e=>upd("estimation","complexity",e.target.value)} disabled={!editing} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"4px 8px",color:"#e2e0dc",fontSize:14,outline:"none",fontFamily:S,cursor:"pointer",width:"100%"}}>{["low","medium","high","extreme"].map(q=><option key={q} value={q}>{q} ({q==="low"?"×0.7":q==="medium"?"×1.0":q==="high"?"×1.5":"×2.2"})</option>)}</select></div>
                        <Inp label="Robot Rate ($/hr)" value={data.robotRate||"85"} onChange={v=>upd("estimation","robotRate",v)} type="number" disabled={!editing}/>
                        <Inp label="Hand Rate ($/hr)" value={data.handRate||"62"} onChange={v=>upd("estimation","handRate",v)} type="number" disabled={!editing}/>
                        <Inp label="Overhead (%)" value={data.overhead||"30"} onChange={v=>upd("estimation","overhead",v)} type="number" disabled={!editing}/>
                        <Inp label="Profit (%)" value={data.profit||"15"} onChange={v=>upd("estimation","profit",v)} type="number" disabled={!editing}/>
                        <Inp label="Distance (km)" value={data.distance||"5000"} onChange={v=>upd("estimation","distance",v)} type="number" disabled={!editing}/>
                        <Inp label="Shipping Factor" value={data.shipFactor||"0.10"} onChange={v=>upd("estimation","shipFactor",v)} type="number" disabled={!editing}/>
                      </div>
                    </div>
                    <div style={{marginTop:6}}><Btn small color="#8b9dc3" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Estimation",changes:[{field:"Action",from:"—",to:"Estimate PDF downloaded"}]}]}));}}> 📄 Download Estimate PDF</Btn></div>
                  </div>}

                  {/* Stone/Carver Sourcing — order status display & alert */}
                  {stg.key==="stone_sourcing"&&<div style={{marginTop:10}}>
                    <div style={{padding:12,borderRadius:6,background:data.shipStatus==="Not ordered"||!data.shipStatus?"rgba(239,68,68,.04)":"rgba(184,164,136,.04)",border:`1px solid ${data.shipStatus==="Not ordered"||!data.shipStatus?"rgba(239,68,68,.12)":"rgba(184,164,136,.1)"}`}}>
                      <div style={{fontSize:12,fontWeight:700,color:data.shipStatus==="Not ordered"||!data.shipStatus?"#ef4444":"#b8a488",marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>Order Status</div>
                      {(!data.shipStatus||data.shipStatus==="Not ordered")?
                        <div style={{fontSize:14,color:"#ef4444",lineHeight:1.6}}>
                          <div style={{fontWeight:600}}>⚠ Material needs to be ordered</div>
                          <div style={{color:"#a09a92"}}>Stone: {data.stoneType||"Not selected"} · Weight: {data.weight||"—"}t</div>
                          <div style={{color:"#a09a92",marginTop:2}}>This item will appear in Alerts until material is ordered.</div>
                          <div style={{marginTop:6}}><Btn small primary color="#b8a488" onClick={()=>{const stone=STONE_DB.find(s=>s.name===data.stoneType);if(stone)setOrderModal(stone);}}> 🛒 Order Stone Now</Btn></div>
                        </div>
                      :<div style={{fontSize:14,color:"#a09a92",lineHeight:1.6}}>
                          <div>Status: <Badge c={data.shipStatus==="Delivered"?"#22c55e":data.shipStatus==="Ordered"?"#60a5fa":data.shipStatus==="In transit"?"#f59e0b":"#a78bfa"}>{data.shipStatus}</Badge></div>
                          {data.orderDate&&<div>Ordered: <span style={{color:"#e2e0dc"}}>{data.orderDate}</span></div>}
                          {data.blockId&&<div>Block ID: <span style={{color:"#e2e0dc",fontFamily:M}}>{data.blockId}</span></div>}
                          {data.blockDims&&<div>Block: <span style={{color:"#e2e0dc"}}>{data.blockDims}</span> · {data.weight||"—"}t</div>}
                          {data.eta&&<div>ETA: <span style={{color:"#e2e0dc"}}>{data.eta}</span></div>}
                          {data.stoneCost&&<div>Cost: <span style={{color:G}}>{$(data.stoneCost)}</span></div>}
                          {data.supplier&&<div>Supplier: <span style={{color:"#e2e0dc"}}>{data.supplier}</span></div>}
                        </div>}
                    </div>
                    {/* RFQ Log */}
                    {(()=>{
                      const rfqs=(prjRfqLog[selId]||[]).slice().sort((a,b)=>{
                        // Accepted first, then cheapest quoted price first, then pending last
                        if(a.status==="accepted"&&b.status!=="accepted")return -1;
                        if(b.status==="accepted"&&a.status!=="accepted")return 1;
                        const ap=a.pricePerT||Infinity, bp=b.pricePerT||Infinity;
                        return ap-bp;
                      });
                      const hasAccepted=rfqs.some(r=>r.status==="accepted");
                      return (<div style={{marginTop:12,padding:12,borderRadius:6,background:"rgba(96,165,250,.03)",border:"1px solid rgba(96,165,250,.08)"}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                          <div style={{fontSize:12,fontWeight:700,color:"#60a5fa",textTransform:"uppercase",letterSpacing:".5px"}}>RFQ Log</div>
                          <div style={{display:"flex",gap:4,alignItems:"center"}}>
                            <span style={{fontSize:14,color:"#706b63"}}>{rfqs.length} RFQ{rfqs.length!==1?"s":""}</span>
                            {hasAccepted&&<Badge c="#22c55e">ORDER PLACED</Badge>}
                          </div>
                        </div>
                        {rfqs.length===0?<div style={{fontSize:14,color:"#706b63",padding:"8px 0"}}>No RFQs sent yet. Use Procurement to send an RFQ for this project.</div>
                        :<div style={{maxHeight:220,overflowY:"auto"}}>
                          {rfqs.map((r,ri)=><div key={r.id} style={{padding:"8px 12px",marginBottom:4,borderRadius:6,background:r.status==="accepted"?"rgba(34,197,94,.05)":r.status==="void"?"rgba(255,255,255,.01)":"rgba(255,255,255,.02)",border:`1px solid ${r.status==="accepted"?"rgba(34,197,94,.15)":r.status==="void"?"rgba(255,255,255,.04)":"rgba(255,255,255,.06)"}`,opacity:r.status==="void"?.5:1}}>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                              <div>
                                <div style={{display:"flex",alignItems:"center",gap:6}}>
                                  <span style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>{r.supplier}</span>
                                  <Badge c={r.status==="accepted"?"#22c55e":r.status==="quoted"?"#60a5fa":r.status==="pending"?"#f59e0b":"#706b63"}>{r.status==="accepted"?"✓ ACCEPTED":r.status==="quoted"?"QUOTED":r.status==="pending"?"PENDING":"VOID"}</Badge>
                                </div>
                                <div style={{fontSize:14,color:"#a09a92",marginTop:2}}>{r.stone} · {r.qty}t · <span style={{fontFamily:M,color:"#706b63"}}>{r.id}</span></div>
                              </div>
                              <div style={{textAlign:"right"}}>
                                {r.price?<div style={{fontSize:18,fontWeight:700,color:r.status==="accepted"?"#22c55e":G,fontFamily:M}}>{$(r.price)}</div>
                                :<div style={{fontSize:14,color:"#706b63",fontStyle:"italic"}}>Awaiting price</div>}
                                {r.pricePerT&&<div style={{fontSize:14,color:"#706b63",fontFamily:M}}>{$(r.pricePerT)}/t</div>}
                              </div>
                            </div>
                            <div style={{fontSize:10,color:"#4a4540",fontFamily:M,marginTop:3}}>{r.date}</div>
                            {r.notes&&<div style={{fontSize:14,color:"#a09a92",marginTop:3,fontStyle:"italic"}}>{r.notes}</div>}
                            {r.status!=="void"&&r.status!=="accepted"&&<div style={{display:"flex",gap:4,marginTop:6,flexWrap:"wrap"}}>
                              {!hasAccepted&&r.price&&<Btn small primary color="#22c55e" onClick={()=>{
                                setPrjRfqLog(lg=>({...lg,[selId]:(lg[selId]||[]).map(x=>x.id===r.id?{...x,status:"accepted",notes:(x.notes?x.notes+" | ":"")+"Order request sent "+ts()}:x.status!=="accepted"?{...x,status:"void",notes:(x.notes?x.notes+" | ":"")+"Voided — "+r.supplier+" accepted"}:x)}));
                                upd("stone_sourcing","supplier",r.supplier);
                                upd("stone_sourcing","shipStatus","Ordered");
                                upd("stone_sourcing","orderDate",now());
                                upd("stone_sourcing","stoneCost",r.price);
                                upd("stone_sourcing","stoneType",r.stone);
                              }}>✓ Accept & Order</Btn>}
                              <Btn small color="#60a5fa" onClick={()=>{
                                setPrjRfqLog(lg=>({...lg,[selId]:(lg[selId]||[]).map(x=>x.id===r.id?{...x,notes:(x.notes?x.notes+" | ":"")+"RFQ re-sent "+ts()}:x)}));
                              }}>↻ Re-send RFQ</Btn>
                              <Btn small color="#d4a574" onClick={()=>{setRfqEditId(rfqEditId===r.id?null:r.id);setRfqEditNote("");}}>✏ Edit</Btn>
                              <Btn small onClick={()=>{setRfqEditId(r.id+"_note");setRfqEditNote("");}}>📝 Add Note</Btn>
                            </div>}
                            {r.status==="accepted"&&<div style={{display:"flex",gap:4,marginTop:6}}>
                              <Btn small onClick={()=>{setRfqEditId(r.id+"_note");setRfqEditNote("");}}>📝 Add Note</Btn>
                            </div>}
                            {rfqEditId===r.id&&<div className="fu" style={{marginTop:6,padding:10,borderRadius:4,background:"rgba(212,165,116,.04)",border:"1px solid rgba(212,165,116,.1)"}}>
                              <div style={{fontSize:12,fontWeight:700,color:"#d4a574",marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>Edit RFQ</div>
                              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4,marginBottom:4}}>
                                <div><div style={{fontSize:10,color:"#706b63"}}>Supplier</div><input value={r.supplier} onChange={e=>{const v=e.target.value;setPrjRfqLog(lg=>({...lg,[selId]:(lg[selId]||[]).map(x=>x.id===r.id?{...x,supplier:v}:x)}));}} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:4,padding:"3px 6px",color:"#e2e0dc",fontSize:10,outline:"none",fontFamily:S}}/></div>
                                <div><div style={{fontSize:10,color:"#706b63"}}>Qty (t)</div><input value={r.qty} onChange={e=>{const v=e.target.value;setPrjRfqLog(lg=>({...lg,[selId]:(lg[selId]||[]).map(x=>x.id===r.id?{...x,qty:v}:x)}));}} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:4,padding:"3px 6px",color:"#e2e0dc",fontSize:10,outline:"none",fontFamily:S}}/></div>
                                <div><div style={{fontSize:10,color:"#706b63"}}>Price ($)</div><input value={r.price||""} onChange={e=>{const v=e.target.value;const p=Number(v)||null;setPrjRfqLog(lg=>({...lg,[selId]:(lg[selId]||[]).map(x=>x.id===r.id?{...x,price:p,pricePerT:p&&Number(x.qty)?Math.round(p/Number(x.qty)):null,status:p?"quoted":x.status}:x)}));}} type="number" style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:4,padding:"3px 6px",color:"#e2e0dc",fontSize:10,outline:"none",fontFamily:S}}/></div>
                              </div>
                              <div><div style={{fontSize:10,color:"#706b63"}}>Stone</div><input value={r.stone} onChange={e=>{const v=e.target.value;setPrjRfqLog(lg=>({...lg,[selId]:(lg[selId]||[]).map(x=>x.id===r.id?{...x,stone:v}:x)}));}} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:4,padding:"3px 6px",color:"#e2e0dc",fontSize:10,outline:"none",fontFamily:S}}/></div>
                              <Btn small color="#22c55e" onClick={()=>setRfqEditId(null)}>✓ Done</Btn>
                            </div>}
                            {rfqEditId===r.id+"_note"&&<div className="fu" style={{marginTop:6,display:"flex",gap:4,alignItems:"flex-end"}}>
                              <div style={{flex:1}}><div style={{fontSize:10,color:"#706b63",marginBottom:2}}>Add note</div><input value={rfqEditNote} onChange={e=>setRfqEditNote(e.target.value)} placeholder="Type note..." style={{width:"100%",fontSize:14}} onKeyDown={e=>{if(e.key==="Enter"&&rfqEditNote){setPrjRfqLog(lg=>({...lg,[selId]:(lg[selId]||[]).map(x=>x.id===r.id?{...x,notes:(x.notes?x.notes+" | ":"")+rfqEditNote+" ("+ts()+")"}:x)}));setRfqEditId(null);setRfqEditNote("");}}}/></div>
                              <Btn small color="#22c55e" onClick={()=>{if(rfqEditNote){setPrjRfqLog(lg=>({...lg,[selId]:(lg[selId]||[]).map(x=>x.id===r.id?{...x,notes:(x.notes?x.notes+" | ":"")+rfqEditNote+" ("+ts()+")"}:x)}));setRfqEditId(null);setRfqEditNote("");}}}> ✓</Btn>
                              <Btn small onClick={()=>{setRfqEditId(null);setRfqEditNote("");}}>×</Btn>
                            </div>}
                          </div>)}
                        </div>}
                      </div>);
                    })()}
                  </div>}

                  {/* Delivery — tracking status history log */}
                  {stg.key==="delivery"&&<div style={{marginTop:10}}>
                    <div style={{padding:12,borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.1)"}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#60a5fa",marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>Tracking Status History</div>
                      {data.tracking?<div style={{fontSize:14,color:"#a09a92",marginBottom:6}}>Tracking #: <span style={{color:"#e2e0dc",fontFamily:M}}>{data.tracking}</span> · Carrier: <span style={{color:"#e2e0dc"}}>{data.carrier||"—"}</span></div>
                      :<div style={{fontSize:14,color:"#706b63",marginBottom:6}}>No tracking number assigned yet.</div>}
                      <div style={{maxHeight:140,overflowY:"auto"}}>
                        {(()=>{
                          const log=[];
                          if(data.signoff==="Signed")log.push({t:data.installDate||"—",m:"Client sign-off received ✓",c:"#22c55e",icon:"✓"});
                          if(data.installDate)log.push({t:data.installDate,m:`Installation ${data.install==="No"?"N/A":"by "+data.install}`,c:"#a78bfa",icon:"🔧"});
                          if(data.delivStatus==="Delivered")log.push({t:data.delivDate||"—",m:"Delivered to site",c:"#22c55e",icon:"📦"});
                          if(data.delivStatus==="In transit"||data.delivStatus==="Delivered")log.push({t:data.shipDate||"—",m:`Shipped via ${data.carrier||"carrier"} ${data.tracking?"("+data.tracking+")":""}`,c:"#60a5fa",icon:"🚛"});
                          if(data.delivStatus==="Delivered"||data.delivStatus==="In transit")log.push({t:data.shipDate||"—",m:"Picked up from Greenpoint HQ",c:"#f59e0b",icon:"📋"});
                          if(data.shipDate)log.push({t:"Pre-ship",m:"Crating complete, ready for dispatch",c:"#b8a488",icon:"📦"});
                          if(!data.shipDate&&!data.delivStatus)log.push({t:"—",m:"Awaiting shipping schedule",c:"#706b63",icon:"⏳"});
                          // Add any changelog entries for delivery
                          (sel.changelog||[]).filter(c=>c.stage==="Delivery").forEach(c=>{
                            c.changes.forEach(ch=>{log.push({t:c.t,m:`${ch.field}: ${ch.to}`,c:"#60a5fa",icon:"📝"});});
                          });
                          return log.map((l,i)=><div key={i} style={{display:"flex",gap:8,padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,.02)"}}>
                            <span style={{fontSize:14,flexShrink:0}}>{l.icon}</span>
                            <div style={{flex:1}}>
                              <span style={{fontSize:14,color:l.c,fontWeight:600}}>{l.m}</span>
                            </div>
                            <span style={{fontSize:10,color:"#4a4540",fontFamily:M,flexShrink:0}}>{l.t}</span>
                          </div>);
                        })()}
                      </div>
                      <div style={{marginTop:6,display:"flex",gap:4}}>
                        <Btn small color="#60a5fa" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Delivery",changes:[{field:"Tracking update",from:"—",to:"Status checked — no changes"}]}]}));}}> 🔄 Check Status</Btn>
                        <Btn small onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Delivery",changes:[{field:"Client notified",from:"—",to:"Tracking update sent"}]}]}));}}> 📧 Notify Client</Btn>
                      </div>
                    </div>
                  </div>}

                  {/* AI AGENT PANELS */}
                  {stg.key==="design"&&<div style={{marginTop:12,padding:12,borderRadius:6,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.1)"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#a78bfa",textTransform:"uppercase",letterSpacing:".5px"}}>🤖 Design Refinement Agent</div>
                      <Btn small primary color="#a78bfa" onClick={()=>{setDesignRecs(r=>({...r,[selId]:[{id:"d1",title:"Wall Thickness",rec:"Increase base wall from 15mm to 25mm for transport integrity",field:"designNotes",val:"Base wall increased to 25mm per AI analysis"},{id:"d2",title:"Fine Detail Flag",rec:"Crown detail sub-2mm — flag for HITL hand carving",field:"designNotes",val:"Crown flagged for HITL (sub-2mm)"},{id:"d3",title:"Block Orientation",rec:"Undercut zone B needs 4th-axis reorientation — split into 2 setups",field:"designNotes",val:"Split into 2 milling setups for undercut B"},{id:"d4",title:"Stone Compatibility",rec:"Hardness and polish compatible with design detail level",field:"designNotes",val:"Stone compatibility confirmed"}]}));}}>🤖 Get AI Recommendations</Btn>
                    </div>
                    {(designRecs[selId]||[]).map(r=><div key={r.id} style={{padding:"8px 12px",marginTop:4,borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8}}><div style={{flex:1}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:2}}>{r.title}</div><div style={{fontSize:14,color:"#a09a92",lineHeight:1.4}}>{r.rec}</div></div><Btn small primary color="#a78bfa" onClick={()=>{upd("design",r.field,(data[r.field]?data[r.field]+" | ":"")+r.val);upd("design","revisionCount",String(Number(data.revisionCount||0)+1));setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:"Design Agent: "+r.val.substring(0,50),u:"AI Agent"},...(p.log||[])]}));setDesignRecs(dr=>({...dr,[selId]:(dr[selId]||[]).filter(x=>x.id!==r.id)}));}}>+ Add</Btn></div></div>)}
                  </div>}
                  {stg.key==="toolpath"&&(()=>{
                    const genState=tpGenState[selId]||"idle";
                    const progress=tpProgress[selId]||0;
                    const statusMsg=tpStatus[selId]||"";
                    const lastGenTime=tpGenTime[selId]||null;
                    const isGenerating=genState==="generating";
                    const isDone=genState==="done";
                    const alreadyDeployed=data.codeExported==="Deployed";
                    const alreadyApproved=data.simComplete==="Approved";

                    const runGenerate=()=>{
                      const type=sel.type||"";
                      const isFacade=type==="Facade Panel"||type==="Architectural";
                      const isSculpture=type==="Sculpture"||type==="Fine Art";
                      const isMonument=type==="Monument"||type==="Public Art";
                      const isRestoration=type==="Restoration";
                      const isLogo=type==="Logo / Signage"||type==="Corporate";

                      const steps=[
                        "Parsing STL geometry…",
                        "Analysing surface topology…",
                        "Calculating stock material removal…",
                        "Selecting optimal tool bits…",
                        "Generating roughing passes…",
                        "Generating semi-finish passes…",
                        "Generating finish passes…",
                        "Running collision simulation…",
                        "Optimising feed rates…",
                        "Exporting robot code…",
                      ];

                      setTpGenState(s=>({...s,[selId]:"generating"}));
                      setTpProgress(s=>({...s,[selId]:0}));

                      let step=0;
                      const tick=setInterval(()=>{
                        step++;
                        const pct=Math.round(step/steps.length*100);
                        setTpProgress(s=>({...s,[selId]:pct}));
                        setTpStatus(s=>({...s,[selId]:steps[Math.min(step-1,steps.length-1)]}));
                        if(step>=steps.length){
                          clearInterval(tick);

                          // Type-aware field generation
                          let strategy,toolBits,passCount,estMillTime,orientation,software,notes;
                          const vol=Number(sel.dims.l)*Number(sel.dims.w)*Number(sel.dims.h);
                          const cx=sel.sd?.estimation?.complexity||"medium";
                          const cxMult={low:0.7,medium:1,high:1.4,extreme:2}[cx]||1;

                          if(isFacade){
                            strategy="3+2 adaptive rough → Z-level semi-finish → raster finish";
                            toolBits="32mm bull-nose roughing, 16mm ball semi-finish, 8mm ball finish, 4mm detail ball";
                            passCount=String(4+Math.round(cxMult));
                            estMillTime=String(Math.round(vol*60*cxMult*10)/10);
                            orientation="Flat — Z-up";
                            software="PowerMill 2025";
                            notes="Panel batched 3/cycle. Tabs at 4 corners for fixture. Toolpath mirrored for symmetrical pairs.";
                          } else if(isSculpture||isMonument){
                            strategy="5-axis adaptive rough → parallel semi-finish → flow-line finish → pencil edge clean";
                            toolBits="20mm bull-nose roughing, 12mm ball 3rd-pass, 6mm ball finish, 2mm taper detail, custom ball-burnish";
                            passCount=String(5+Math.round(cxMult));
                            estMillTime=String(Math.round(vol*120*cxMult*10)/10);
                            orientation="Vertical — indexed at 0°, 90°, 180°, 270°";
                            software="PowerMill 2025";
                            notes="Undercut regions require 5th-axis tilt >45°. Mane/hair detail on pencil pass. Recommend high-gloss ballnose for figurative zones.";
                          } else if(isRestoration){
                            strategy="3D scan-matched contour follow → adaptive infill → heritage texture match";
                            toolBits="12mm ball (contour), 6mm ball (detail), 3mm ball (texture), custom heritage bit";
                            passCount=String(3+Math.round(cxMult));
                            estMillTime=String(Math.round(vol*90*cxMult*10)/10);
                            orientation="Match original block orientation";
                            software="PowerMill 2025";
                            notes="Toolpath derived from Artec 3D scan reference. Surface deviation target <0.5mm. Heritage texture applied in final pass.";
                          } else if(isLogo){
                            strategy="2D profile rough → 3D finish → V-carve lettering → edge chamfer";
                            toolBits="6mm flat endmill, 3mm ball finish, 60° V-bit lettering";
                            passCount="3";
                            estMillTime=String(Math.round(vol*40*cxMult*10)/10);
                            orientation="Flat";
                            software="PowerMill 2025";
                            notes="Bevel depth 3mm. Letter spacing locked to client file. Sandblast mask optional for lettering contrast.";
                          } else {
                            strategy="Adaptive rough → spiral semi-finish → flow-line finish";
                            toolBits="25mm bull-nose, 12mm ball semi-finish, 6mm ball finish, 3mm pencil";
                            passCount=String(4+Math.round(cxMult));
                            estMillTime=String(Math.round(vol*80*cxMult*10)/10);
                            orientation="Vertical";
                            software="PowerMill 2025";
                            notes="Auto-generated. Review fixture orientation before deployment.";
                          }

                          const now2=new Date().toLocaleString("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});
                          upd("toolpath","software",software);
                          upd("toolpath","strategy",strategy);
                          upd("toolpath","toolBits",toolBits);
                          upd("toolpath","passCount",passCount);
                          upd("toolpath","estMillTime",estMillTime);
                          upd("toolpath","orientation",orientation);
                          upd("toolpath","toolpathNotes",notes);
                          upd("toolpath","simComplete","In progress");
                          setTimeout(()=>{
                            upd("toolpath","simComplete","Approved");
                            setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,
                              changelog:[...(p.changelog||[]),{t:ts(),u:"Toolpath Agent",stage:"Toolpath",changes:[
                                {field:"Strategy",from:"—",to:strategy.slice(0,40)+"…"},
                                {field:"Simulation",from:"Not started",to:"Approved"},
                              ]}],
                              log:[{t:ts(),m:"Toolpath generated by AI agent — "+passCount+" passes, "+estMillTime+"h est. Simulation approved.",u:"Toolpath Agent"},...(p.log||[])],
                            }));
                          },1500);

                          setTpGenState(s=>({...s,[selId]:"done"}));
                          setTpGenTime(s=>({...s,[selId]:now2}));
                          setTpStatus(s=>({...s,[selId]:"Generation complete"}));
                        }
                      },320);
                    };

                    return <div style={{marginTop:10,padding:12,borderRadius:6,background:"rgba(34,197,94,.04)",border:"1px solid rgba(34,197,94,.14)"}}>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:isGenerating?10:6}}>
                        <div style={{fontSize:12,fontWeight:700,color:"#22c55e",textTransform:"uppercase",letterSpacing:".5px"}}>🚀 Toolpath Generation Agent</div>
                        {lastGenTime&&!isGenerating&&<span style={{fontSize:10,color:"#4a4540",fontFamily:M}}>Last generated {lastGenTime}</span>}
                      </div>

                      {/* Progress modal */}
                      {isGenerating&&<div style={{marginBottom:10}}>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#a09a92",marginBottom:4,fontFamily:M}}>
                          <span style={{color:"#22c55e"}}>{statusMsg}</span>
                          <span>{progress}%</span>
                        </div>
                        <div style={{height:6,borderRadius:4,background:"rgba(255,255,255,.06)",overflow:"hidden"}}>
                          <div style={{height:"100%",width:progress+"%",background:"linear-gradient(90deg,#22c55e,#60a5fa)",borderRadius:4,transition:"width .3s ease"}}/>
                        </div>
                        <div style={{marginTop:6,display:"flex",gap:3,flexWrap:"wrap"}}>
                          {["Parsing","Topology","Stock calc","Tool select","Rough","Semi-finish","Finish","Collision sim","Feed rates","Export"].map((s,i)=>(
                            <span key={i} style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:progress>i*10?"rgba(34,197,94,.15)":"rgba(255,255,255,.03)",color:progress>i*10?"#22c55e":"#4a4540",fontFamily:M,transition:"all .3s"}}>{s}</span>
                          ))}
                        </div>
                      </div>}

                      {/* Buttons */}
                      {!isGenerating&&<div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
                        <button onClick={runGenerate} style={{display:"flex",alignItems:"center",gap:5,background:"#22c55e",border:"none",color:"#0c0b0a",fontSize:12,fontWeight:700,padding:"6px 12px",borderRadius:6,cursor:"pointer",fontFamily:S}}>
                          <span>{isDone||alreadyApproved?"↺ Regenerate":"🚀 Generate Toolpath"}</span>
                        </button>

                        {(isDone||alreadyApproved)&&!alreadyDeployed&&<button onClick={()=>{
                          upd("toolpath","codeExported","Deployed");
                          upd("toolpath","simComplete","Approved");
                          setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,
                            changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Toolpath",changes:[
                              {field:"Robot Code",from:data.codeExported||"Not exported",to:"Deployed"},
                              {field:"Simulation",from:data.simComplete,to:"Approved"},
                            ]}],
                            log:[{t:ts(),m:"Toolpath approved & deployed to robot queue by "+ROBOTS.find(r=>r.prj===selId)?.name||"robot",u:"Current User"},...(p.log||[])],
                          }));
                        }} style={{display:"flex",alignItems:"center",gap:5,background:"rgba(96,165,250,.15)",border:"1px solid rgba(96,165,250,.3)",color:"#60a5fa",fontSize:14,fontWeight:600,padding:"6px 12px",borderRadius:4,cursor:"pointer",fontFamily:S}}>
                          ✓ Approve & Deploy
                        </button>}

                        {alreadyDeployed&&<div style={{display:"flex",alignItems:"center",gap:5,fontSize:14,color:"#22c55e",fontFamily:M}}>
                          <span>✓</span><span>Deployed to robot queue</span>
                        </div>}
                      </div>}

                      {/* Post-generation status */}
                      {(isDone||alreadyApproved)&&!isGenerating&&<div style={{marginTop:8,fontSize:14,color:"#a09a92",lineHeight:1.5,display:"flex",gap:12,flexWrap:"wrap"}}>
                        <span>Passes: <span style={{color:"#22c55e",fontFamily:M}}>{data.passCount||"—"}</span></span>
                        <span>Mill time: <span style={{color:"#22c55e",fontFamily:M}}>{data.estMillTime||"—"}h</span></span>
                        <span>Sim: <Badge c={data.simComplete==="Approved"?"#22c55e":"#f59e0b"}>{data.simComplete}</Badge></span>
                        <span>Code: <Badge c={alreadyDeployed?"#22c55e":"#64748b"}>{data.codeExported||"Not exported"}</Badge></span>
                      </div>}
                    </div>;
                  })()}
                  {stg.key==="stone_sourcing"&&<div style={{marginTop:12,padding:12,borderRadius:6,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.1)"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#a78bfa",textTransform:"uppercase",letterSpacing:".5px"}}>🤖 Stone Recommendation Agent</div>
                      <Btn small primary color="#a78bfa" onClick={()=>{const recs=STONE_DB.filter(s=>s.yld>=70).sort((a,b)=>b.yld-a.yld).slice(0,4);const risks=["2% vein risk","8% color variation","Low risk — uniform grain","12% fossil inclusion risk"];setSourceRecs(r=>({...r,[selId]:recs.map((s,i)=>({id:"sr"+s.id,stone:s,title:s.name+" ("+s.origin+")",rec:(i===0?"Top pick: ":"Alt: ")+s.name+" — "+s.yld+"% yield, "+s.hard+" Mohs. "+risks[i%risks.length],fields:{stoneType:s.name,supplier:s.origin+" supplier"}}))}));}}>🤖 Get AI Recommendations</Btn>
                    </div>
                    {(sourceRecs[selId]||[]).map(r=><div key={r.id} style={{padding:"8px 12px",marginTop:4,borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8}}><div style={{flex:1}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:2}}>{r.title} <Badge c={FC(r.stone.fam)}>{r.stone.fam}</Badge></div><div style={{fontSize:14,color:"#a09a92",lineHeight:1.4}}>{r.rec}</div></div><Btn small primary color="#a78bfa" onClick={()=>{Object.entries(r.fields).forEach(([k,v])=>upd("stone_sourcing",k,v));setSourceRecs(sr=>({...sr,[selId]:(sr[selId]||[]).filter(x=>x.id!==r.id)}));}}>+ Add</Btn></div></div>)}
                    {/* ── Carver Assignment Panel ── */}
                    <div style={{marginTop:12,padding:12,borderRadius:6,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.1)"}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#a78bfa",marginBottom:8,textTransform:"uppercase",letterSpacing:".5px"}}>👤 Carver Assignment</div>
                      <div style={{fontSize:12,color:"#a09a92",marginBottom:10,lineHeight:1.5}}>Assign a hand carver for the HITL polish phase. Suggestions are ranked by skill match, stone experience, and current availability.</div>
                      {(()=>{
                        const CARVERS=[
                          {id:"H1",nm:"Marco Valentini",rl:"Master Carver",spec:"Figurative, portrait, classical",skills:["figurative","portrait","classical","marble","restoration"],prj:"PRJ-003",hrs:168,cap:168,emp:"Employee",email:"marco@monumentallabs.co",phone:"(718) 555-0101"},
                          {id:"H2",nm:"Elena Sorokina",rl:"Master Carver",spec:"Architectural, ornamental detail",skills:["architectural","ornamental","marble","granite","lettering"],prj:"PRJ-005",hrs:160,cap:168,emp:"Employee",email:"elena@monumentallabs.co",phone:"(718) 555-0102"},
                          {id:"H3",nm:"James Kowalski",rl:"Carver",spec:"Ornamental, hand lettering",skills:["ornamental","lettering","limestone","sandstone"],prj:null,hrs:0,cap:168,emp:"Contractor",email:"james.k@gmail.com",phone:"(347) 555-0203"},
                          {id:"H4",nm:"Sofia Reyes",rl:"Master Carver",spec:"Figurative, contemporary sculpture",skills:["figurative","contemporary","marble","mixed-media"],prj:"PRJ-007",hrs:152,cap:168,emp:"Employee",email:"sofia@monumentallabs.co",phone:"(718) 555-0104"},
                          {id:"H5",nm:"David Mitchell",rl:"Carver",spec:"Restoration, heritage matching",skills:["restoration","heritage","limestone","patina-matching"],prj:"PRJ-001",hrs:140,cap:168,emp:"Employee",email:"david@monumentallabs.co",phone:"(718) 555-0105"},
                        ];
                        const stoneType=(data.stoneType||"").toLowerCase();
                        const prjType=(sel.type||"").toLowerCase();
                        const scored=CARVERS.map(c=>{
                          let score=0;
                          if(stoneType.includes("marble")&&c.skills.includes("marble"))score+=3;
                          if(stoneType.includes("limestone")&&c.skills.includes("limestone"))score+=3;
                          if(stoneType.includes("granite")&&c.skills.includes("granite"))score+=3;
                          if(prjType.includes("restoration")&&c.skills.includes("restoration"))score+=4;
                          if(prjType.includes("monument")&&c.skills.includes("figurative"))score+=3;
                          if(prjType.includes("fine art")&&c.skills.includes("figurative"))score+=3;
                          if(prjType.includes("architecture")&&c.skills.includes("architectural"))score+=3;
                          if(!c.prj)score+=2; // available bonus
                          if(c.hrs<c.cap*0.7)score+=1;
                          if(c.rl==="Master Carver")score+=1;
                          const util=Math.round(c.hrs/c.cap*100);
                          const reason=[];
                          if(stoneType&&c.skills.some(s=>stoneType.includes(s)))reason.push("Stone experience");
                          if(prjType&&c.skills.some(s=>prjType.includes(s)))reason.push(sel.type+" specialist");
                          if(!c.prj)reason.push("Available now");
                          else reason.push(util+"% utilized");
                          return {...c,score,util,reason:reason.join(" · ")};
                        }).sort((a,b)=>b.score-a.score);
                        const assigned=data.assignedCarver;
                        return <div>
                          {scored.map((c,i)=>{const isSel=assigned===c.id;return <div key={c.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",marginBottom:3,borderRadius:6,background:isSel?"rgba(167,139,250,.08)":"rgba(255,255,255,.015)",border:isSel?"1px solid rgba(167,139,250,.2)":"1px solid rgba(255,255,255,.04)"}}>
                            {i===0&&!assigned&&<span style={{fontSize:9,padding:"2px 6px",borderRadius:4,background:"rgba(34,197,94,.1)",color:"#22c55e",fontWeight:700,flexShrink:0}}>BEST MATCH</span>}
                            <div style={{flex:1,minWidth:0}}>
                              <div style={{display:"flex",alignItems:"center",gap:5}}>
                                <span style={{fontSize:13,fontWeight:600,color:isSel?"#e2e0dc":"#a09a92"}}>{c.nm}</span>
                                <span style={{fontSize:9,padding:"2px 6px",borderRadius:4,background:c.emp==="Contractor"?"rgba(245,158,11,.08)":"rgba(34,197,94,.08)",color:c.emp==="Contractor"?"#f59e0b":"#22c55e",fontWeight:700}}>{c.emp==="Contractor"?"CTR":"FTE"}</span>
                              </div>
                              <div style={{fontSize:10,color:"#4a4540"}}>{c.spec} · {c.reason}</div>
                            </div>
                            <div style={{fontSize:10,fontFamily:M,color:c.util>=90?"#ef4444":c.util>=70?"#f59e0b":"#22c55e",flexShrink:0}}>{c.util}%</div>
                            {isSel?<Badge c="#a78bfa">Assigned</Badge>:<Btn small color="#a78bfa" onClick={()=>{upd("stone_sourcing","assignedCarver",c.id);upd("stone_sourcing","carverNotes",c.nm+" — "+c.reason);setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:"Carver assigned: "+c.nm+" ("+c.reason+")",u:"Current User"},...(p.log||[])],changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Stone Sourcing",changes:[{field:"Assigned Carver",from:"—",to:c.nm}]}]}));}}>Assign</Btn>}
                          </div>;})}
                          {assigned&&<div style={{marginTop:6,display:"flex",gap:6}}>
                            <Btn small color="#60a5fa" onClick={()=>{setView("calendar");}}>📅 View Calendar</Btn>
                            <Btn small color="#a09a92" onClick={()=>{upd("stone_sourcing","assignedCarver","");upd("stone_sourcing","carverNotes","");}}>✕ Unassign</Btn>
                          </div>}
                        </div>;
                      })()}
                    </div>
                  </div>}
                  {stg.key==="fabrication"&&<div style={{marginTop:12,padding:12,borderRadius:6,background:"rgba(34,197,94,.04)",border:"1px solid rgba(34,197,94,.12)"}}>
                    <div style={{fontSize:12,fontWeight:700,color:"#22c55e",marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>🤖 Fabrication Monitor</div>
                    <div style={{fontSize:14,color:"#a09a92",lineHeight:1.6}}>Spindle: <span style={{color:"#22c55e"}}>62°C</span> · Vibration: <span style={{color:"#22c55e"}}>Normal</span> · Power: 4.2kW<div style={{color:"#f59e0b",marginTop:2}}>⚡ Bit #3 wearing faster — swap in ~45 min</div></div>
                  </div>}
                  {stg.key==="qa_crating"&&<div style={{marginTop:12,padding:12,borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.12)"}}>
                    <div style={{fontSize:12,fontWeight:700,color:"#60a5fa",marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>📱 Content & Social Agent</div>
                    <div style={{fontSize:14,color:"#a09a92",marginBottom:8,lineHeight:1.5}}>Auto-generate social media content from project photos, logs, and completion data. Creates before/after reels, captions, and long-form articles.</div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      <Btn small primary color="#60a5fa" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:"📱 Social Package generated: 3 reel clips (15s/30s/60s), 5 photo sets (before/after/detail/installed/team), X thread draft, Instagram carousel, LinkedIn article outline. Files staged in /content/"+sel.id+"/",u:"Content Agent"},{t:ts(),m:"📝 Draft caption: \"From raw "+((sel.sd?.stone_sourcing?.stoneType)||"stone")+" block to finished "+sel.type.toLowerCase()+" — "+Math.round(Number(sel.sd?.fabrication?.hrsLogged||40))+"hrs of robot milling + "+Math.round(Number(sel.sd?.hitl_polish?.hrsLogged||20))+"hrs of master hand carving. This is what $"+(sel.quoted||0).toLocaleString()+" of modern stonemasonry looks like.\" #MonumentalLabs #StoneCraft #CNC",u:"Content Agent"},...(p.log||[])],changelog:[...(p.changelog||[]),{t:ts(),u:"Content Agent",stage:"QA & Crating",changes:[{field:"Social Package",from:"-",to:"Generated — 3 reels, 5 photos, captions"}]}]}));}}>📱 Generate Social Package</Btn>
                      <Btn small color="#a78bfa" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:"📰 Long-form article drafted: \"How we made this "+sel.name+" — a deep dive into robotic stonemasonry, from 3D scan to final installation.\" 1,200 words. Ready for review.",u:"Content Agent"},...(p.log||[])]}));}}>📰 Generate Article</Btn>
                      <Btn small color="#22c55e" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:"📅 Social posts scheduled: X thread (tomorrow 9am), Instagram carousel (tomorrow 12pm), LinkedIn article (Thursday 8am). All pending team review.",u:"Content Agent"},...(p.log||[])]}));}}>📅 Schedule Posts</Btn>
                    </div>
                  </div>}
                  {stg.key==="hitl_polish"&&<div style={{marginTop:12,padding:12,borderRadius:6,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.1)"}}>
                    <div style={{fontSize:12,fontWeight:700,color:"#a78bfa",marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>🤖 HITL Quality Assistant</div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:8}}>
                      <Btn small primary color="#a78bfa" onClick={()=>{const a=["leaf tips need more definition — recommend 0.5mm deeper relief on acanthus edges","nose bridge slightly asymmetric — shift 0.3mm left at bridge apex","drapery folds 92% match to reference — tighten inner fold radius by 1mm","finish scored 8.7/10 — minor tool marks visible at 15° light angle on cheek surface","surface porosity detected in zone B — recommend filling with matched epoxy before final polish"][Math.floor(Math.random()*5)];upd("hitl_polish","qualityNotes",(data.qualityNotes?data.qualityNotes+" | ":"")+"AI: "+a);setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:"AI Quality: "+a,u:"AI Agent"},...(p.log||[])]}));}}>🤖 Get AI Recommendations</Btn>
                      <Btn small primary color="#d4a574" onClick={()=>{const fb=["Carver notes: grain runs diagonal here — switch to cross-hatch finish for better light catch","Carver notes: stone responding well to bush hammer, recommend for all flat surfaces on this piece","Carver notes: found a soft spot at 12 o'clock on base — routed around it, added 2hrs","Carver notes: client ref photo shows more contrast in shadow lines — deepening by 0.8mm","Carver notes: polish grade exceeding expectations, this block is exceptional quality"][Math.floor(Math.random()*5)];setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:fb,u:(()=>{const c=CARVERS.find(x=>x.prj===selId);return c?c.name:"Carver";})()},...(p.log||[])],changelog:[...(p.changelog||[]),{t:ts(),u:(()=>{const c=CARVERS.find(x=>x.prj===selId);return c?c.name:"Carver";})(),stage:"HITL Polish",changes:[{field:"Carver Feedback",from:"-",to:fb.substring(14,60)+"..."}]}]}));}}>🪨 Get Carver Feedback</Btn>
                    </div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      <Btn small color="#22c55e" onClick={()=>{const ct=Number(data.photos||0)+4;upd("hitl_polish","photos",String(ct));setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:"4 progress photos uploaded ("+ct+" total). AI analyzing for defects and improvements...",u:"Current User"},{t:ts(),m:"AI Photo Analysis: Surface uniformity 94%. Minor tool marks detected in zone C — recommend light sanding pass before final polish.",u:"AI Agent"},...(p.log||[])]}));}}>📸 Upload Photos for AI Analysis</Btn>
                      <Btn small color="#60a5fa" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,log:[{t:ts(),m:"Progress photos sent to "+(sel.sd?.quote?.clientContact||sel.client),u:"Current User"},...(p.log||[])],changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"HITL Polish",changes:[{field:"Client Update",from:"-",to:"Progress photos sent"}]}]}));}}>📧 Send Progress Photos to Client</Btn>
                    </div>
                  </div>}

                  <div style={{display:"flex",gap:8,marginTop:12,paddingTop:10,borderTop:"1px solid rgba(255,255,255,.04)",alignItems:"center",flexWrap:"wrap"}}>
                    {ac&&<Btn primary color={stg.color} onClick={advance}>Complete → {STAGES[expS+1]?.label||"Done"}</Btn>}
                    {stg.key==="design"&&<Btn small color="#a8c0e8" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Design",changes:[{field:"Action",from:"—",to:"Design file uploaded"}]}]}));}}> 📁 Upload Design File</Btn>}
                    {stg.key==="toolpath"&&<Btn small color="#d4a574" onClick={()=>{setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Toolpath",changes:[{field:"Action",from:"—",to:"Toolpath file uploaded"}]}]}));}}> 📁 Upload Toolpath</Btn>}
                    {stg.key==="invoice1"&&(()=>{const allPrior=[0,1,2,3,4,5].every(i=>i<sel.stage);const alreadySent=data.dateSent||data.status==="Sent";return <Btn small primary={allPrior} color="#7eba7e" onClick={()=>{if(allPrior){setPrjs(ps=>ps.map(p=>p.id!==selId?p:{...p,sd:{...p.sd,invoice1:{...p.sd.invoice1,dateSent:now(),status:"Sent",invNum:p.sd.invoice1.invNum||genInv()}},changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Invoice #1",changes:[{field:alreadySent?"Re-sent":"Sent",from:alreadySent?data.dateSent:"-",to:now()}]}],log:[{t:ts(),m:"Invoice #1 "+(alreadySent?"re-sent":"sent"),u:"Current User"},...(p.log||[])]}));}}} disabled={!allPrior}>{alreadySent?"📧 Re-send Invoice":"📧 Send Invoice"}{!allPrior?" (complete prior steps)":""}</Btn>;})()}
                    {isInv2&&(()=>{const allPrior=[0,1,2,3,4,5,6,7,8].every(i=>i<sel.stage);return <Btn small primary={allPrior} color="#4ade80" onClick={()=>{if(allPrior)sendInv2();}} disabled={!allPrior}> 📧 Send Invoice #2{!allPrior?" (complete prior steps)":""}</Btn>;})()}
                    {ac&&filled<stg.fields.length&&<span style={{fontSize:11,color:"#f59e0b"}}>⚠ {stg.fields.length-filled} empty</span>}
                  </div>
                  {/* Changelog */}
                  <div style={{marginTop:12,paddingTop:10,borderTop:"1px solid rgba(255,255,255,.04)"}}>
                    <Lbl>Change Log</Lbl>
                    {(sel.changelog||[]).filter(c=>c.stage===stg.label).length>0?<div style={{maxHeight:140,overflowY:"auto"}}>
                      {(sel.changelog||[]).filter(c=>c.stage===stg.label).map((c,ci)=><div key={ci} style={{fontSize:14,padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,.02)"}}>
                        <span style={{color:"#706b63",fontFamily:M,fontSize:14}}>{c.t} · {c.u}</span>
                        {c.changes.map((ch,j)=><div key={j} style={{color:"#a09a92",marginLeft:8,marginTop:1}}>
                          <span style={{color:"#e2e0dc"}}>{ch.field}:</span> <span style={{color:"#ef4444",textDecoration:"line-through"}}>{ch.from}</span> → <span style={{color:"#22c55e"}}>{ch.to}</span>
                        </div>)}
                      </div>)}
                    </div>:<div style={{fontSize:14,color:"#4a4540",fontStyle:"italic"}}>No changes recorded yet.</div>}
                  </div>
                </div>
              );
            })()}
            {/* Summary */}
            {expS===null&&<div className="fu">
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}}>
                <div style={{background:CB,border:BD,borderRadius:8,padding:12}}>
                  <Lbl>Assignments</Lbl>
                  {[["Stone",(()=>{const s=STONE_DB.find(s=>s.id===sel.stoneId);return s?s.name:"TBD";})()],["Robot",(()=>{const r=ROBOTS.find(r=>r.prj===sel.id);return r?r.name:"—";})()],["Carver",(()=>{const c=CARVERS.find(c=>c.prj===sel.id);return c?`${c.name}`:"—";})()],["Dims",`${sel.dims.l}×${sel.dims.w}×${sel.dims.h}m`]].map(([k,v])=><div key={k} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",fontSize:14,borderBottom:"1px solid rgba(255,255,255,.03)"}}><span style={{color:"#706b63"}}>{k}</span><span style={{color:"#d4d0ca",fontFamily:M,fontSize:14}}>{v}</span></div>)}
                </div>
                <div style={{background:CB,border:BD,borderRadius:8,padding:12}}>
                  <Lbl>Financials</Lbl>
                  {[["Est",$(sel.estCost)],["Quoted",sel.quoted?$(sel.quoted):"—"],["Margin",sel.quoted?PC(sel.quoted-sel.estCost,sel.quoted)+"%":"—"],["Inv1",sel.inv1?`${$(sel.inv1)} ${sel.inv1P?"✓":"⏳"}`:"—"],["Inv2",sel.inv2?`${$(sel.inv2)} ${sel.inv2P?"✓":"⏳"}`:"—"]].map(([k,v])=><div key={k} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",fontSize:14,borderBottom:"1px solid rgba(255,255,255,.03)"}}><span style={{color:"#706b63"}}>{k}</span><span style={{color:"#d4d0ca",fontFamily:M,fontSize:14}}>{v}</span></div>)}
                </div>
                <div style={{background:CB,border:BD,borderRadius:8,padding:12}}>
                  <Lbl>Activity</Lbl>
                  <div style={{maxHeight:130,overflowY:"auto"}}>{(sel.log||[]).map((e,i)=><div key={i} style={{fontSize:14,color:"#a09a92",padding:"3px 0",borderBottom:"1px solid rgba(255,255,255,.02)"}}><span style={{color:"#706b63",fontFamily:M,fontSize:14,marginRight:4}}>{e.t}</span>{e.m}<span style={{color:"#4a4540",marginLeft:4}}>({e.u})</span></div>)}</div>
                </div>
              </div>
            </div>}
          </div>:null}
        </div>
      </div>}

      {/* ═══ ESTIMATOR ═══ */}
  </>);
}
