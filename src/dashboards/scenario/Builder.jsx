import React from "react";

export default function ScenarioView({ ctx }) {
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
      {view==="scenario"&&<div style={{flex:1,overflowY:"auto",padding:20}}>
        {(()=>{
          const base=scenarioBase;
          const monthlyRev=sc.monthlyProjects*sc.avgProject*(sc.winRate/100);
          const annualRev=monthlyRev*12;
          const grossProfit=annualRev*(sc.avgMargin/100);
          const stoneCost=annualRev*(sc.stoneCostPct/100);
          const laborCost=sc.headcount*sc.avgSalary;
          const totalCost=stoneCost+laborCost+(sc.overhead*12);
          const netProfit=annualRev-totalCost;
          const margin=annualRev>0?Math.round(netProfit/annualRev*100):0;

          const sl=(label,k,min,max,step,fmt)=><div key={k} style={{marginBottom:12}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
              <span style={{fontSize:12,color:"#a09a92"}}>{label}</span>
              <span style={{fontSize:13,fontFamily:M,fontWeight:700,color:G}}>{fmt?fmt(sc[k]):sc[k]}</span>
            </div>
            <input type="range" min={min} max={max} step={step||1} value={sc[k]} onInput={e=>setSc(s=>({...s,[k]:Number(e.target.value)}))} style={{width:"100%",accentColor:G,height:4,cursor:"pointer"}}/>
          </div>;

          // Monthly projection data with seasonal variation
          const seasonal=[0.7,0.75,0.9,1.0,1.1,1.15,1.1,0.95,1.0,1.1,1.05,0.8];
          const monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
          const monthlyData=seasonal.map((s,i)=>{
            const rev=Math.round(monthlyRev*s);const cost=Math.round((stoneCost/12*s)+(laborCost/12)+(sc.overhead));
            return{m:monthNames[i],rev,cost,profit:rev-cost};
          });
          const cumData=monthlyData.reduce((acc,d,i)=>{const prev=i>0?acc[i-1].cum:0;acc.push({m:d.m,cum:prev+d.profit});return acc;},[]);
          const costBreak=[{name:"Stone",value:Math.round(stoneCost),fill:"#f59e0b"},{name:"Labor",value:Math.round(laborCost),fill:"#60a5fa"},{name:"Overhead",value:Math.round(sc.overhead*12),fill:"#a09a92"}];
          if(netProfit>0) costBreak.push({name:"Profit",value:Math.round(netProfit),fill:"#22c55e"});

          return <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[["Annual Revenue",$(annualRev),annualRev>2000000?"#22c55e":"#f59e0b"],["Gross Profit",$(grossProfit),"#22c55e"],["Net Profit",$(netProfit),netProfit>0?"#22c55e":"#ef4444"],["Net Margin",margin+"%",margin>10?"#22c55e":margin>0?G:"#ef4444"],["Breakeven",netProfit>0?"✓":"✗",netProfit>0?"#22c55e":"#ef4444"]].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>
            {/* Quick Presets */}
            <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
              {[
                {l:"📈 Aggressive Growth",desc:"+2 robots, higher win rate",v:{winRate:50,avgProject:150000,avgMargin:16,monthlyProjects:4,stoneCostPct:30,headcount:16,avgSalary:87000,overhead:62000}},
                {l:"🛡️ Conservative",desc:"No new hires, steady pace",v:{winRate:30,avgProject:100000,avgMargin:20,monthlyProjects:2,stoneCostPct:25,headcount:12,avgSalary:85000,overhead:45000}},
                {l:"🎯 Current Trajectory",desc:"Maintain current rates",v:{...base}},
                {l:"🏗️ Big Contract Win",desc:"+$500k project added",v:{winRate:40,avgProject:180000,avgMargin:17,monthlyProjects:3,stoneCostPct:32,headcount:14,avgSalary:86000,overhead:55000}},
                {l:"⚠️ Downturn",desc:"Pipeline slows 40%",v:{winRate:20,avgProject:90000,avgMargin:22,monthlyProjects:1.5,stoneCostPct:26,headcount:10,avgSalary:85000,overhead:40000}},
              ].map(p=><button key={p.l} onClick={()=>setSc(p.v)} style={{padding:"8px 14px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",cursor:"pointer",textAlign:"left",flex:"0 0 auto"}}>
                <div style={{fontSize:12,fontWeight:600,color:"#e2e0dc",marginBottom:1}}>{p.l}</div>
                <div style={{fontSize:10,color:"#4a4540"}}>{p.desc}</div>
              </button>)}
            </div>
            {/* Charts */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
              <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10}}>Monthly Revenue vs Cost</div>
                <div style={{height:240}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData} barGap={2}>
                      <XAxis dataKey="m" tick={{fill:"#706b63",fontSize:10}} axisLine={false} tickLine={false}/>
                      <YAxis tick={{fill:"#4a4540",fontSize:9}} axisLine={false} tickLine={false} tickFormatter={v=>"$"+(v/1000)+"k"}/>
                      <Tooltip contentStyle={TT} formatter={v=>$(v)}/>
                      <Bar dataKey="rev" fill="#22c55e" radius={[3,3,0,0]} name="Revenue"/>
                      <Bar dataKey="cost" fill="#ef444480" radius={[3,3,0,0]} name="Cost"/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10}}>Cumulative Profit</div>
                <div style={{height:240}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={cumData}>
                      <XAxis dataKey="m" tick={{fill:"#706b63",fontSize:10}} axisLine={false} tickLine={false}/>
                      <YAxis tick={{fill:"#4a4540",fontSize:9}} axisLine={false} tickLine={false} tickFormatter={v=>"$"+(v/1000)+"k"}/>
                      <Tooltip contentStyle={TT} formatter={v=>$(v)}/>
                      <Area type="monotone" dataKey="cum" stroke={netProfit>0?"#22c55e":"#ef4444"} fill={netProfit>0?"rgba(34,197,94,.1)":"rgba(239,68,68,.1)"} strokeWidth={2}/>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            {/* Revenue allocation bar */}
            <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14,marginBottom:16}}>
              <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10}}>Revenue Allocation</div>
              <div style={{display:"flex",height:28,borderRadius:6,overflow:"hidden",marginBottom:10}}>
                {costBreak.map(c=>{const pct=annualRev>0?Math.max(c.value/annualRev*100,1):0;return <div key={c.name} style={{width:pct+"%",background:c.fill,transition:"width .3s ease"}} title={c.name+": "+$(c.value)}/>;})}
              </div>
              <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
                {costBreak.map(c=>{const pct=annualRev>0?Math.round(c.value/annualRev*100):0;return <div key={c.name} style={{display:"flex",alignItems:"center",gap:6}}>
                  <div style={{width:10,height:10,borderRadius:4,background:c.fill,flexShrink:0}}/>
                  <span style={{fontSize:12,color:"#a09a92"}}>{c.name}</span>
                  <span style={{fontSize:12,fontFamily:M,fontWeight:600,color:c.fill}}>{$(c.value)} ({pct}%)</span>
                </div>;})}
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:14}}>Revenue Inputs</div>
                {sl("Win Rate (%)","winRate",10,80,1,v=>v+"%")}
                {sl("Avg Project Value","avgProject",20000,500000,10000,v=>$(v))}
                {sl("Monthly Proposals","monthlyProjects",1,8,0.5)}
                {sl("Avg Margin (%)","avgMargin",5,40,1,v=>v+"%")}
              </div>
              <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:14}}>Cost Inputs</div>
                {sl("Stone Cost (% of Rev)","stoneCostPct",15,45,1,v=>v+"%")}
                {sl("Headcount","headcount",5,25)}
                {sl("Avg Salary","avgSalary",50000,150000,5000,v=>$(v))}
                {sl("Monthly Overhead","overhead",20000,100000,5000,v=>$(v))}
              </div>
            </div>
            {/* P&L breakdown */}
            <div style={{marginTop:16,background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:14}}>
              <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10}}>Projected Annual P&L</div>
              {[["Revenue",annualRev,"#22c55e",false],["Stone & Materials",stoneCost,"#f59e0b",true],["Labor ("+sc.headcount+" FTE)",laborCost,"#60a5fa",true],["Overhead ("+$(sc.overhead)+"/mo)",sc.overhead*12,"#a09a92",true],["Total Cost",totalCost,"#ef4444",false],["Net Profit",netProfit,netProfit>0?"#22c55e":"#ef4444",false]].map(([l,v,c,indent])=><div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",paddingLeft:indent?16:0,borderBottom:l==="Total Cost"?"1px solid rgba(255,255,255,.08)":"1px solid rgba(255,255,255,.03)"}}>
                <span style={{fontSize:13,color:indent?"#a09a92":"#e2e0dc",fontWeight:indent?400:600}}>{l}</span>
                <span style={{fontSize:14,fontFamily:M,fontWeight:700,color:c}}>{$(v)}</span>
              </div>)}
            </div>
            <div style={{marginTop:12,textAlign:"center"}}>
              <button onClick={()=>setSc(base)} style={{fontSize:12,padding:"6px 16px",borderRadius:6,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",color:"#706b63",cursor:"pointer",fontFamily:S}}>↺ Reset to Current</button>
            </div>
          </div>;
        })()}
      </div>}

  </>);
}
