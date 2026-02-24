import React from "react";

export default function FinancialsView({ ctx }) {
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
      {(view==="financials"||view==="invoice")&&<div style={{flex:1,overflowY:"auto",padding:20}} className="fu">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
              
            </div>
            
          </div>
          <div style={{display:"flex",gap:6,alignItems:"center"}}>
            {(finTab==="overview"||finTab==="pl"||finTab==="cashflow")&&<Btn small color="#a78bfa" onClick={()=>setFinAiOpen(!finAiOpen)}>{finAiOpen?"✕ Close":"🤖 AI Suggestions"}</Btn>}
            {(finTab==="overview"||finTab==="pl"||finTab==="cashflow")&&<Btn small onClick={()=>{const rows=[["Month","Revenue","Cost","Profit","Margin"]];const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];months.forEach((m,i)=>{const rev=(prjs.reduce((s,p)=>s+(p.sd?.payment_milestones?.milestones||[]).filter(ms=>new Date(ms.due||"").getMonth()===i).reduce((a,ms)=>a+Number(ms.amount||0),0),0)||[45,52,38,61,73,67,55,82,70,58,63,48][i]*1000);const cost=rev*0.62;rows.push([m,"$"+rev.toLocaleString(),"$"+cost.toLocaleString(),"$"+(rev-cost).toLocaleString(),((1-cost/rev)*100).toFixed(1)+"%"]);});const csv=rows.map(r=>r.join(",")).join("\n");const blob=new Blob([csv],{type:"text/csv"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`monumental-financials-${finTab}-${new Date().toISOString().slice(0,10)}.csv`;a.click();}}>📥 Export CSV</Btn>}
            {(finTab==="overview"||finTab==="pl"||finTab==="cashflow")&&<Btn small primary={!!finScenario} color={finScenario?"#f59e0b":"#706b63"} onClick={()=>{if(finScenario){setFinScenario(null);setFinScenarioAdj({revMult:1,costMult:1,marginAdj:0,note:""});}else{setFinScenario("current");}}}>{finScenario?"✕ Exit Scenario":"📊 Edit Scenario"}</Btn>}
          </div>
        </div>
        {finTab==="overview"&&finAiOpen&&<div style={{padding:14,borderRadius:8,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.12)",marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:700,color:"#a78bfa",marginBottom:10,textTransform:"uppercase",letterSpacing:".5px"}}>🤖 AI Financial Recommendations</div>
          {[{id:"f1",title:"Reduce Monthly Burn by 15%",reason:"Consolidating overnight shifts and renegotiating lease could extend runway significantly."},{id:"f2",title:"Increase Average Margin to "+(fin.am+5)+"%",reason:"Premium pricing on high-complexity projects and reducing hand-finishing overruns."},{id:"f3",title:"Accelerate AR Collection",reason:"2% Net-10 discount and automated follow-ups could reduce avg collection by 16 days."},{id:"f4",title:"Grow Pipeline by 12%",reason:"Dedicated architecture firm outreach and repeat client upsells."},{id:"f5",title:"Reduce Material Cost Ratio",reason:"Bulk ordering 20t+ from preferred suppliers saves 8-12% per tonne."}].map(r=><div key={r.id} style={{padding:"10px 12px",marginBottom:6,borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)"}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:3}}>{r.title}</div><div style={{fontSize:14,color:"#a09a92",lineHeight:1.5}}>{r.reason}</div></div>)}
        </div>}
        {finTab==="pl"&&finAiOpen&&<div style={{padding:14,borderRadius:8,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.12)",marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:700,color:"#a78bfa",marginBottom:10,textTransform:"uppercase",letterSpacing:".5px"}}>🤖 AI P&L Recommendations</div>
          {[{id:"p1",title:"Labor Cost Optimization",reason:"Shift scheduling analysis shows 18% idle time during overnight robot runs. Consolidating to 2 supervised shifts saves ~$4,200/mo."},{id:"p2",title:"Material Waste Reduction",reason:"Average material utilization is 72%. Nesting optimization and reusing offcuts for smaller projects could save $2,800/mo."},{id:"p3",title:"Contractor-to-FTE Conversion",reason:"James K. ($58/hr, ~120hrs/mo = $6,960) as FTE would cost ~$5,200/mo with benefits. Saves $21k/yr if workload sustains."},{id:"p4",title:"Overhead Reduction",reason:"Shop rent at $28/sqft vs Brooklyn industrial benchmark of $22-25. Renegotiate at lease renewal (Aug 2026) targeting $24/ft."}].map(r=><div key={r.id} style={{padding:"10px 12px",marginBottom:6,borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)"}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:3}}>{r.title}</div><div style={{fontSize:14,color:"#a09a92",lineHeight:1.5}}>{r.reason}</div></div>)}
        </div>}
        {finTab==="cashflow"&&finAiOpen&&<div style={{padding:14,borderRadius:8,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.12)",marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:700,color:"#a78bfa",marginBottom:10,textTransform:"uppercase",letterSpacing:".5px"}}>🤖 AI Cash Flow Recommendations</div>
          {[{id:"c1",title:"Invoice #1 Timing",reason:"Sending Invoice #1 at design approval (not fabrication start) pulls cash forward 3-4 weeks. For PRJ-007 alone, that's $50k earlier."},{id:"c2",title:"Soho House Collection",reason:"$42,500 outstanding 45+ days. Escalate to CFO contact. Consider 2% prompt-pay discount to close — better than 60-day float cost."},{id:"c3",title:"Stone Prepayment Strategy",reason:"Tuscan Stone Group offers 3% discount for 100% prepay. On $128k annual spend, that's $3,840 saved vs. 30-day terms."},{id:"c4",title:"Cash Reserve Target",reason:"Current reserve covers 6.2 weeks of burn. Target 8-10 weeks ($180k) by Q3 for project-based business safety."}].map(r=><div key={r.id} style={{padding:"10px 12px",marginBottom:6,borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)"}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:3}}>{r.title}</div><div style={{fontSize:14,color:"#a09a92",lineHeight:1.5}}>{r.reason}</div></div>)}
        </div>}
        {finScenario&&<div style={{padding:"8px 14px",borderRadius:6,background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.25)",marginBottom:10,display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:16}}>⚠️</span>
          <span style={{fontSize:12,fontWeight:600,color:"#f59e0b"}}>Scenario Mode Active</span>
          <span style={{fontSize:11,color:"#a09a92",marginLeft:4}}>Numbers below are projections, not actuals.</span>
          <Btn small color="#f59e0b" onClick={()=>{setFinScenario(null);setFinScenarioAdj({revMult:1,costMult:1,marginAdj:0,note:""});}} style={{marginLeft:"auto"}}>Exit Scenario</Btn>
        </div>}
        {finScenario&&(finTab==="overview"||finTab==="pl"||finTab==="cashflow")&&<div style={{padding:14,borderRadius:8,background:"rgba(245,158,11,.04)",border:"1px solid rgba(245,158,11,.15)",marginBottom:14}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <div style={{fontSize:12,fontWeight:700,color:"#f59e0b",textTransform:"uppercase",letterSpacing:".5px"}}>📊 Scenario: {finScenario}</div>
            <div style={{fontSize:10,color:"#706b63"}}>Adjust sliders or pick a preset · Numbers below reflect scenario</div>
          </div>
          <div style={{display:"flex",gap:6,marginBottom:12,flexWrap:"wrap"}}>
            {[["Current Trajectory",{revMult:1,costMult:1,marginAdj:0,note:"Baseline — no changes"}],["Aggressive Growth",{revMult:1.35,costMult:1.15,marginAdj:3,note:"+35% revenue, +15% costs, +3pt margin"}],["Conservative",{revMult:0.85,costMult:0.95,marginAdj:-2,note:"-15% revenue, -5% costs, -2pt margin"}],["Big Contract Win",{revMult:1.5,costMult:1.2,marginAdj:5,note:"+50% revenue (major project), +20% costs, +5pt margin"}],["Downturn",{revMult:0.6,costMult:0.85,marginAdj:-5,note:"-40% revenue, -15% costs, -5pt margin"}]].map(([name,adj])=><button key={name} onClick={()=>{setFinScenario(name);setFinScenarioAdj(adj);}} style={{fontSize:10,padding:"5px 12px",borderRadius:4,border:finScenario===name?"1px solid rgba(245,158,11,.4)":"1px solid rgba(255,255,255,.08)",background:finScenario===name?"rgba(245,158,11,.1)":"rgba(255,255,255,.03)",color:finScenario===name?"#f59e0b":"#a09a92",cursor:"pointer",fontFamily:S,fontWeight:finScenario===name?600:400}}>{name}</button>)}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
            {[["Revenue",finScenarioAdj.revMult,"revMult",0.4,2,v=>(v*100-100>=0?"+":"")+Math.round(v*100-100)+"%"],["Costs",finScenarioAdj.costMult,"costMult",0.5,1.5,v=>(v*100-100>=0?"+":"")+Math.round(v*100-100)+"%"],["Margin",finScenarioAdj.marginAdj,"marginAdj",-10,15,v=>(v>=0?"+":"")+v+"pts"]].map(([label,val,key,mn,mx,fmt])=><div key={key}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                <span style={{fontSize:10,color:"#706b63",textTransform:"uppercase"}}>{label}</span>
                <span style={{fontSize:11,fontFamily:M,fontWeight:600,color:key==="costMult"?(val>1?"#ef4444":val<1?"#22c55e":"#a09a92"):(val>(key==="revMult"?1:0)?"#22c55e":val<(key==="revMult"?1:0)?"#ef4444":"#a09a92")}}>{fmt(val)}</span>
              </div>
              <input type="range" min={mn*(key==="marginAdj"?1:100)} max={mx*(key==="marginAdj"?1:100)} step={key==="marginAdj"?1:5} value={key==="marginAdj"?val:Math.round(val*100)} onInput={e=>{const nv=Number(e.target.value);setFinScenarioAdj(a=>({...a,[key]:key==="marginAdj"?nv:nv/100,note:""}));setFinScenario("Custom");}} style={{width:"100%",accentColor:"#f59e0b",height:4,cursor:"pointer"}}/>
            </div>)}
          </div>
          {finScenarioAdj.note&&<div style={{marginTop:8,fontSize:11,color:"#a09a92",fontStyle:"italic"}}>{finScenarioAdj.note}</div>}
        </div>}
        {finTab==="overview"&&<>{(()=>{
          const f=finAdj;
          const fAr=f.tq-f.tp;
          return (<>
        <Lbl>Revenue & Pipeline</Lbl>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
          {[
            ["Total Pipeline",$(f.tq),G],
            ["Cost Basis",$(f.tc),"#a09a92"],
            ["Avg Margin",f.am+"%",f.am>12?"#22c55e":"#f59e0b"],
            ["Cash Received",$(f.tp),"#22c55e"],
            ["Outstanding AR",$(fAr),fAr>100000?"#ef4444":"#f59e0b"],
          ].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
            <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
            <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
          </div>)}
        </div>
        <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Operations & Unit Economics</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:8,marginBottom:16}}>
          {[
            ["Robot Util",finAdj.rU+"%",finAdj.rU>70?"#22c55e":"#f59e0b"],
            ["Robot Hrs",finAdj.trh.toFixed(0)+"h","#22c55e"],
            ["Hand Hrs",finAdj.thh.toFixed(0)+"h","#a78bfa"],
            ["Stone Spend",$(finAdj.tsc),"#b8a488"],
            ["Avg Project",$(f.tq>0?Math.round(f.tq/prjs.length):0),G],
            ["Monthly Burn",$(f.burn),"#ef4444"],
          ].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
            <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
            <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
          </div>)}
        </div>

        {/* Cash Runway */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
          <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(34,197,94,.04)",border:"1px solid rgba(34,197,94,.1)"}}>
            <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>Cash Runway</div>
            <div style={{fontSize:20,fontWeight:700,color:"#22c55e",fontFamily:M}}>{Math.round((f.tp-(f.tc)*.6)/f.burn*10)/10} mo</div>
            <div style={{fontSize:11,color:"#706b63",marginTop:2}}>At ${(f.burn/1000).toFixed(0)}k/mo burn rate</div>
          </div>
          <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.1)"}}>
            <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>Backlog Weeks</div>
            <div style={{fontSize:20,fontWeight:700,color:"#60a5fa",fontFamily:M}}>{Math.round(prjs.filter(p=>p.stage<10).length*4.5)}</div>
            <div style={{fontSize:11,color:"#706b63",marginTop:2}}>{prjs.filter(p=>p.stage<10).length} active projects × 4.5 wk avg</div>
          </div>
          <div style={{padding:"12px 14px",borderRadius:6,background:`${G}08`,border:`1px solid ${G}15`}}>
            <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>Revenue per m²</div>
            <div style={{fontSize:20,fontWeight:700,color:G,fontFamily:M}}>{$(prjs.reduce((s,p)=>{const d=p.dims;return s+2*(d.l*d.w+d.l*d.h+d.w*d.h);},0)>0?finAdj.tq/prjs.reduce((s,p)=>{const d=p.dims;return s+2*(d.l*d.w+d.l*d.h+d.w*d.h);},0):0)}</div>
            <div style={{fontSize:11,color:"#706b63",marginTop:2}}>Total quoted / total surface area</div>
          </div>
        </div>

        <AsOf/>
        {/* Monthly Revenue Trend */}
        <div style={{background:CB,border:BD,borderRadius:6,padding:14,marginBottom:16}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px"}}>Monthly Revenue Trend</div>
            <div style={{display:"flex",gap:2,background:"rgba(255,255,255,.03)",borderRadius:6,padding:2}}>
              {[[1,"1M"],[3,"3M"],[6,"6M"],[12,"12M"]].map(([v,l])=><button key={v} onClick={()=>setRevRange(v)} style={{fontSize:10,padding:"4px 10px",borderRadius:4,border:"none",background:revRange===v?"rgba(196,168,130,.15)":"transparent",color:revRange===v?G:"#706b63",cursor:"pointer",fontFamily:M,fontWeight:revRange===v?700:400,transition:"all .15s"}}>{l}</button>)}
            </div>
          </div>
          {(()=>{
            const rm=finScenario?finScenarioAdj.revMult:1;
            const allData=[{m:"Mar '25",r:148,c:112},{m:"Apr",r:92,c:73},{m:"May",r:205,c:155},{m:"Jun",r:178,c:138},{m:"Jul",r:265,c:198},{m:"Aug",r:312,c:231},{m:"Sep",r:189,c:150},{m:"Oct",r:421,c:308},{m:"Nov",r:298,c:228},{m:"Dec",r:155,c:124},{m:"Jan '26",r:287,c:220},{m:"Feb",r:342,c:256}];
            const data=allData.slice(-revRange).map(d=>({...d,r:Math.round(d.r*rm),c:Math.round(d.c*(finScenario?finScenarioAdj.costMult:1)),gp:Math.round(d.r*rm)-Math.round(d.c*(finScenario?finScenarioAdj.costMult:1))}));
            return <div style={{height:240}}><ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data} margin={{top:5,right:5,left:5,bottom:5}}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={G} stopOpacity={0.15}/><stop offset="95%" stopColor={G} stopOpacity={0}/></linearGradient>
                </defs>
                <XAxis dataKey="m" tick={{fill:"#706b63",fontSize:11,fontFamily:M}} axisLine={false} tickLine={false}/>
                <YAxis tick={{fill:"#706b63",fontSize:10,fontFamily:M}} axisLine={false} tickLine={false} tickFormatter={v=>`$${v}k`}/>
                <Tooltip contentStyle={TT} formatter={(v,n)=>["$"+v+"k",n==="r"?"Revenue":n==="c"?"Costs":"Gross Profit"]}/>
                <Area type="monotone" dataKey="r" stroke={G} fill="url(#revGrad)" strokeWidth={2.5} dot={{fill:G,strokeWidth:0,r:3}} name="r"/>
                <Line type="monotone" dataKey="c" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="6 3" dot={false} name="c"/>
                <Line type="monotone" dataKey="gp" stroke="#22c55e" strokeWidth={1.5} dot={false} name="gp"/>
              </ComposedChart>
            </ResponsiveContainer></div>;
          })()}
          <div style={{display:"flex",justifyContent:"center",gap:16,marginTop:8,fontSize:11}}>
            {[["Revenue",G],["Costs","#ef4444"],["Gross Profit","#22c55e"]].map(([l,c])=><span key={l} style={{color:"#706b63",display:"flex",alignItems:"center",gap:4}}><span style={{display:"inline-block",width:l==="Costs"?12:10,height:l==="Costs"?0:3,borderTop:l==="Costs"?"2px dashed "+c:"none",background:l==="Costs"?"transparent":c,borderRadius:4}}/>{l}</span>)}
          </div>
        </div>

        {!finScenario&&<><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
          <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
            <Lbl>Revenue by Segment</Lbl>
            <div style={{height:240}}><ResponsiveContainer width="100%" height="100%">
              <BarChart data={Object.entries(finAdj.bt).map(([k,v])=>({name:k,value:v})).sort((a,b)=>b.value-a.value)}>
                <XAxis dataKey="name" tick={{fill:"#706b63",fontSize:14,fontFamily:M}} axisLine={false} tickLine={false}/>
                <YAxis tick={{fill:"#706b63",fontSize:14,fontFamily:M}} axisLine={false} tickLine={false} tickFormatter={v=>`$${(v/1000).toFixed(0)}k`}/>
                <Tooltip contentStyle={TT} formatter={v=>$(v)}/><Bar dataKey="value" fill={G} radius={[3,3,0,0]}/>
              </BarChart>
            </ResponsiveContainer></div>
          </div>
          <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
            <Lbl>Projects by Stage</Lbl>
            <div style={{height:240}}><ResponsiveContainer width="100%" height="100%">
              <BarChart data={STAGES.map((s,i)=>({name:s.label.slice(0,7),count:finAdj.bs[i]}))}>
                <XAxis dataKey="name" tick={{fill:"#706b63",fontSize:10,fontFamily:M}} axisLine={false} tickLine={false} angle={-35} textAnchor="end" height={40}/>
                <YAxis tick={{fill:"#706b63",fontSize:14,fontFamily:M}} axisLine={false} tickLine={false} allowDecimals={false}/>
                <Tooltip contentStyle={TT}/><Bar dataKey="count" radius={[3,3,0,0]}>{STAGES.map((s,i)=><Cell key={i} fill={s.color}/>)}</Bar>
              </BarChart>
            </ResponsiveContainer></div>
          </div>
        </div>

        {/* AR Aging */}
        <Lbl>Accounts Receivable Aging</Lbl>
        <div style={{background:CB,border:BD,borderRadius:8,overflow:"hidden",marginBottom:16}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
            <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
              {["Project","Client","Invoice","Amount","Status","Age","Action"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}
            </tr></thead>
            <tbody>{prjs.filter(p=>!p.inv1P&&p.inv1>0||!p.inv2P&&p.inv2>0).map(p=>{
              const inv=!p.inv1P&&p.inv1>0?{n:p.sd?.invoice1?.invNum||"Draft",a:p.inv1,s:p.sd?.invoice1?.status||"Draft",d:p.sd?.invoice1?.dateSent}:{n:p.sd?.invoice2?.invNum||"Draft",a:p.inv2,s:p.sd?.invoice2?.status||"Draft",d:p.sd?.invoice2?.dateSent};
              const age=inv.d?Math.ceil((new Date()-new Date(inv.d))/(1000*60*60*24)):0;
              return (<tr key={p.id+inv.n} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                <td style={{padding:"8px 12px",fontWeight:600,color:"#e2e0dc"}}>{p.name}</td>
                <td style={{padding:"8px 12px",color:"#a09a92",fontSize:14}}>{p.client}</td>
                <td style={{padding:"8px 12px",fontFamily:M,fontSize:14}}>{inv.n}</td>
                <td style={{padding:"8px 12px",fontFamily:M,fontSize:14,fontWeight:600,color:G}}>{$(inv.a)}</td>
                <td style={{padding:"8px 12px"}}><Badge c={inv.s==="Overdue"?"#ef4444":inv.s==="Sent"?"#f59e0b":"#64748b"}>{inv.s}</Badge></td>
                <td style={{padding:"8px 12px",fontFamily:M,fontSize:14,color:age>30?"#ef4444":age>14?"#f59e0b":"#706b63"}}>{age>0?`${age}d`:"—"}</td>
                <td style={{padding:"8px 12px"}}><Btn small color="#60a5fa">📧 Remind</Btn></td>
              </tr>);
            })}</tbody>
          </table>
        </div>

        {/* Revenue by Client & Revenue by Type */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div>
            <Lbl>Revenue by Client</Lbl>
            <div style={{background:CB,border:BD,borderRadius:8,overflow:"hidden"}}>
              {(()=>{
                const byClient={};
                prjs.forEach(p=>{
                  const c=p.client||"Unknown";
                  if(!byClient[c])byClient[c]={quoted:0,received:0,count:0,types:new Set()};
                  byClient[c].quoted+=(p.quoted||0);
                  byClient[c].received+=(p.inv1P?p.inv1:0)+(p.inv2P?p.inv2:0);
                  byClient[c].count++;
                  byClient[c].types.add(p.type);
                });
                const sorted=Object.entries(byClient).sort((a,b)=>b[1].quoted-a[1].quoted);
                const maxQ=sorted[0]?sorted[0][1].quoted:1;
                return sorted.map(([client,d],i)=><div key={client} style={{padding:"10px 12px",borderBottom:i<sorted.length-1?"1px solid rgba(255,255,255,.03)":"none"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{client}</div>
                      <div style={{fontSize:10,color:"#706b63",marginTop:1}}>{d.count} project{d.count!==1?"s":""} · {[...d.types].join(", ")}</div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0,marginLeft:12}}>
                      <div style={{fontSize:14,fontWeight:700,color:G,fontFamily:M}}>{$(d.quoted)}</div>
                      <div style={{fontSize:10,color:d.received>0?"#22c55e":"#706b63",fontFamily:M}}>{d.received>0?$(d.received)+" received":"No payments yet"}</div>
                    </div>
                  </div>
                  <div style={{height:3,borderRadius:4,background:"rgba(255,255,255,.04)",overflow:"hidden"}}>
                    <div style={{height:"100%",borderRadius:4,display:"flex"}}>
                      <div style={{height:"100%",width:Math.round(d.received/maxQ*100)+"%",background:"#22c55e",borderRadius:"2px 0 0 2px"}}/>
                      <div style={{height:"100%",width:Math.round((d.quoted-d.received)/maxQ*100)+"%",background:G+"60"}}/>
                    </div>
                  </div>
                </div>);
              })()}
            </div>
          </div>
          <div>
            <Lbl>Revenue by Project Type</Lbl>
            <div style={{background:CB,border:BD,borderRadius:8,overflow:"hidden"}}>
              {(()=>{
                const byType={};
                prjs.forEach(p=>{
                  const t=p.type||"Other";
                  if(!byType[t])byType[t]={quoted:0,count:0,avgMargin:[]};
                  byType[t].quoted+=(p.quoted||0);
                  byType[t].count++;
                  if(p.quoted&&p.estCost)byType[t].avgMargin.push(PC(p.quoted-p.estCost,p.quoted));
                });
                const typeColors={"Architecture":G,"Restoration":"#a78bfa","Fine Art":"#f59e0b","Monument":"#60a5fa","Corporate":"#22c55e","Public Art":"#d4a574","Sculpture":"#7eb8a4"};
                const sorted=Object.entries(byType).sort((a,b)=>b[1].quoted-a[1].quoted);
                const totalQ=sorted.reduce((s,[,d])=>s+d.quoted,0)||1;
                return sorted.map(([type,d],i)=>{
                  const avg=d.avgMargin.length?Math.round(d.avgMargin.reduce((s,v)=>s+v,0)/d.avgMargin.length):0;
                  const pct=Math.round(d.quoted/totalQ*100);
                  const tc=typeColors[type]||"#706b63";
                  return <div key={type} style={{padding:"10px 12px",borderBottom:i<sorted.length-1?"1px solid rgba(255,255,255,.03)":"none"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        <div style={{width:10,height:10,borderRadius:4,background:tc,flexShrink:0}}/>
                        <div>
                          <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>{type}</div>
                          <div style={{fontSize:10,color:"#706b63"}}>{d.count} project{d.count!==1?"s":""} · avg margin {avg}%</div>
                        </div>
                      </div>
                      <div style={{textAlign:"right",flexShrink:0}}>
                        <div style={{fontSize:14,fontWeight:700,color:tc,fontFamily:M}}>{$(d.quoted)}</div>
                        <div style={{fontSize:10,color:"#706b63",fontFamily:M}}>{pct}% of revenue</div>
                      </div>
                    </div>
                    <div style={{height:3,borderRadius:4,background:"rgba(255,255,255,.04)",overflow:"hidden"}}>
                      <div style={{height:"100%",width:pct+"%",background:tc,borderRadius:4,opacity:.6}}/>
                    </div>
                  </div>;
                });
              })()}
            </div>
          </div>
        </div>
        </>}
        </>);})()}
        </>}
        {finTab==="cashflow"&&(()=>{
          // Build 13-week cash flow projection from Feb 20, 2026
          const weeks=Array.from({length:13},(_,i)=>{
            const wStart=new Date(2026,1,20+i*7);
            const wEnd=new Date(2026,1,20+i*7+6);
            const label="W"+(i+1)+" "+wStart.toLocaleDateString("en",{month:"short",day:"numeric"});
            // Inflows: inv2 payments due
            const inflows=[];
            prjs.forEach(p=>{
              const i1=p.sd?.invoice1;const i2=p.sd?.invoice2;
              if(i1&&i1.dateDue&&!i1.datePaid){const d=new Date(i1.dateDue);if(d>=wStart&&d<=wEnd)inflows.push({label:`${p.id} Dep.`,amt:Number(i1.amount)||p.inv1,prob:90});}
              if(i2&&i2.dateDue&&!i2.datePaid){const d=new Date(i2.dateDue);if(d>=wStart&&d<=wEnd)inflows.push({label:`${p.id} Bal.`,amt:Number(i2.amount)||p.inv2,prob:75});}
            });
            // Seed expected inflows for realism
            const seedInflows=[[1,185000,90,"RAMSA Bal."],[2,57500,85,"Hudson Cols Dep."],[3,47500,80,"Stripe Bal."],[5,22000,75,"Carnegie Dep."],[6,180000,70,"Vanderbilt Dep."],[8,47500,90,"Benedictine Bal."],[9,22000,65,"Carnegie Bal."],[10,95000,80,"Gagosian Dep."],[12,220000,60,"Aman Dep."]];
            seedInflows.forEach(([w,amt,prob,lbl])=>{if(w===i+1)inflows.push({label:lbl,amt,prob});});
            // Outflows
            const outflows=[];
            const weeklyPayroll=Math.round(145000/4.33);
            outflows.push({label:"Payroll",amt:weeklyPayroll,type:"payroll"});
            // Stone orders hitting this week
            prjs.forEach(p=>{const ss=p.sd?.stone_sourcing;if(ss?.shipStatus==="Ordered"&&ss.orderDate){const d=new Date(ss.orderDate);if(d>=wStart&&d<=wEnd)outflows.push({label:`Stone ${p.id}`,amt:Number(ss.stoneCost)||0,type:"stone"});}});
            // Seed outflows
            const seedOut=[[1,8500,"Equipment maint."],[2,24000,"Stone PRJ-018 Estremoz"],[3,5580,"Stone PRJ-022 Black"],[4,12000,"Robot tooling R2/R4"],[6,18500,"Stone PRJ-020 Jura"],[7,9000,"Facility costs"],[9,32000,"Stone PRJ-005 Calacatta"],[11,15000,"Equipment upgrade"]];
            seedOut.forEach(([w,amt,lbl])=>{if(w===i+1)outflows.push({label:lbl,amt,type:"other"});});
            const _totalIn=inflows.reduce((s,x)=>s+(x.amt*x.prob/100),0);
            const _totalOut=outflows.reduce((s,x)=>s+x.amt,0);
            const scA=finScenario?finScenarioAdj:{revMult:1,costMult:1};
            const totalIn=Math.round(_totalIn*scA.revMult);
            const totalOut=Math.round(_totalOut*scA.costMult);
            return{label,wStart,inflows,outflows,totalIn,totalOut,net:Math.round(totalIn-totalOut)};
          });
          // Running cash balance (starting position ~$480k estimated on hand)
          let runBal=480000;
          const weeksWithBal=weeks.map(w=>{runBal+=w.net;return{...w,runBal:Math.round(runBal)};});
          const maxFlow=Math.max(...weeksWithBal.map(w=>Math.max(w.totalIn,w.totalOut,1)));
          const minBal=Math.min(...weeksWithBal.map(w=>w.runBal));
          const maxBal=Math.max(...weeksWithBal.map(w=>w.runBal));
          return <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
              <div style={{fontSize:14,fontWeight:700,color:"#e2e0dc",textTransform:"uppercase",letterSpacing:".5px"}}>💸 13-Week Cash Flow</div>
              <Badge c="#22c55e">Feb 20 — May 22, 2026</Badge>
              <div style={{marginLeft:"auto",display:"flex",gap:8}}>
                <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:10,height:10,borderRadius:4,background:"#22c55e"}}/><span style={{fontSize:14,color:"#706b63"}}>Inflows</span></div>
                <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:10,height:10,borderRadius:4,background:"#ef4444"}}/><span style={{fontSize:14,color:"#706b63"}}>Outflows</span></div>
                <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:3,height:14,borderRadius:4,background:"#60a5fa"}}/><span style={{fontSize:14,color:"#706b63"}}>Cash balance</span></div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[
                {l:"Starting Cash",v:`$${(480/1).toFixed(0)}k`,c:"#60a5fa"},
                {l:"13-Wk Inflows",v:`$${Math.round(weeksWithBal.reduce((s,w)=>s+w.totalIn,0)/1000)}k`,c:"#22c55e"},
                {l:"13-Wk Outflows",v:`$${Math.round(weeksWithBal.reduce((s,w)=>s+w.totalOut,0)/1000)}k`,c:"#ef4444"},
                {l:"Ending Cash",v:`$${Math.round(weeksWithBal[12].runBal/1000)}k`,c:weeksWithBal[12].runBal>200000?"#22c55e":weeksWithBal[12].runBal>0?"#f59e0b":"#ef4444"},
                {l:"Lowest Balance",v:`$${Math.round(minBal/1000)}k`,c:minBal>100000?"#22c55e":minBal>0?"#f59e0b":"#ef4444"},
              ].map((k,i)=><div key={i} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{k.l}</div>
                <div style={{fontSize:20,fontWeight:700,color:k.c,fontFamily:M}}>{k.v}</div>
              </div>)}
            </div>
            <AsOf/>
            {/* Cash Flow Forecast */}
            <div style={{background:CB,border:BD,borderRadius:6,padding:"16px 18px",marginBottom:16}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px"}}>Cash Flow Forecast</div>
                <div style={{display:"flex",gap:2,background:"rgba(255,255,255,.03)",borderRadius:6,padding:2}}>
                  {[[1,"1M"],[3,"3M"],[6,"6M"],[12,"12M"]].map(([v,l])=><button key={v} onClick={()=>setCfRange(v)} style={{fontSize:10,padding:"4px 10px",borderRadius:4,border:"none",background:cfRange===v?"rgba(96,165,250,.15)":"transparent",color:cfRange===v?"#60a5fa":"#706b63",cursor:"pointer",fontFamily:M,fontWeight:cfRange===v?700:400,transition:"all .15s"}}>{l}</button>)}
                </div>
              </div>
              {(()=>{
                const sliced=finAdj.forecast.slice(0,cfRange).map(d=>({...d,net:d.rev-d.exp}));
                return <>
                <div style={{height:320}}><ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={sliced} margin={{top:10,right:10,left:10,bottom:5}}>
                    <defs>
                      <linearGradient id="cfBalG" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={G} stopOpacity={0.12}/><stop offset="95%" stopColor={G} stopOpacity={0}/></linearGradient>
                    </defs>
                    <XAxis dataKey="m" tick={{fill:"#706b63",fontSize:11,fontFamily:M}} axisLine={false} tickLine={false}/>
                    <YAxis yAxisId="left" tick={{fill:"#706b63",fontSize:10,fontFamily:M}} axisLine={false} tickLine={false} tickFormatter={v=>`$${(v/1000).toFixed(0)}k`}/>
                    <YAxis yAxisId="right" orientation="right" tick={{fill:"#706b63",fontSize:10,fontFamily:M}} axisLine={false} tickLine={false} tickFormatter={v=>v>=0?"+$"+(v/1000).toFixed(0)+"k":"-$"+Math.abs(v/1000).toFixed(0)+"k"}/>
                    <Tooltip contentStyle={TT} formatter={(v,n)=>{const lbl=n==="bal"?"Cash Balance":n==="rev"?"Revenue":n==="exp"?"Expenses":"Net Cash Flow";return ["$"+(v/1000).toFixed(0)+"k",lbl];}}/>
                    <ReferenceLine yAxisId="right" y={0} stroke="rgba(255,255,255,.08)" strokeDasharray="3 3"/>
                    <Bar yAxisId="right" dataKey="net" name="net" radius={[3,3,3,3]} barSize={cfRange<=3?40:cfRange<=6?24:16}>
                      {sliced.map((d,i)=><Cell key={i} fill={d.net>=0?"rgba(34,197,94,.25)":"rgba(239,68,68,.25)"} stroke={d.net>=0?"#22c55e":"#ef4444"} strokeWidth={1}/>)}
                    </Bar>
                    <Area yAxisId="left" type="monotone" dataKey="bal" stroke={G} fill="url(#cfBalG)" strokeWidth={2.5} dot={{fill:G,strokeWidth:0,r:4}} name="bal"/>
                    <Line yAxisId="left" type="monotone" dataKey="rev" stroke="#22c55e" strokeWidth={1.5} dot={false} name="rev"/>
                    <Line yAxisId="left" type="monotone" dataKey="exp" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="6 3" dot={false} name="exp"/>
                  </ComposedChart>
                </ResponsiveContainer></div>
                {/* Monthly summary strip */}
                <div style={{display:"flex",gap:4,marginTop:12,paddingTop:12,borderTop:"1px solid rgba(255,255,255,.04)"}}>
                  {sliced.map((d,i)=><div key={i} style={{flex:1,textAlign:"center"}}>
                    <div style={{fontSize:9,color:"#4a4540",textTransform:"uppercase",marginBottom:3}}>{d.m}</div>
                    <div style={{fontSize:12,fontWeight:700,fontFamily:M,color:d.net>=0?"#22c55e":"#ef4444"}}>{d.net>=0?"+":""}{(d.net/1000).toFixed(0)}k</div>
                    <div style={{fontSize:9,color:"#4a4540"}}>net</div>
                  </div>)}
                </div>
                </>;
              })()}
              <div style={{display:"flex",justifyContent:"center",gap:16,marginTop:12,fontSize:11}}>
                {[["Cash Balance",G,"solid"],["Revenue","#22c55e","solid"],["Expenses","#ef4444","dashed"],["Net (+)","#22c55e","bar"],["Net (-)","#ef4444","bar"]].map(([l,c,t])=><span key={l} style={{color:"#706b63",display:"flex",alignItems:"center",gap:4}}>
                  {t==="bar"?<span style={{display:"inline-block",width:8,height:8,borderRadius:4,background:c}}/>:
                  <span style={{display:"inline-block",width:12,height:t==="dashed"?0:3,borderTop:t==="dashed"?"2px dashed "+c:"none",background:t==="dashed"?"transparent":c,borderRadius:4}}/>}
                  {l}</span>)}
              </div>
            </div>
            {/* Warning if balance dips */}
            {minBal<150000&&<div style={{padding:"12px 14px",borderRadius:6,background:"rgba(245,158,11,.06)",border:"1px solid rgba(245,158,11,.2)",marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:18}}>⚠️</span>
              <div><div style={{fontSize:14,fontWeight:600,color:"#f59e0b"}}>Cash dips to ${Math.round(minBal/1000)}k — consider accelerating invoice collection or delaying non-critical stone orders</div>
              <div style={{fontSize:14,color:"#a09a92",marginTop:2}}>Week {weeksWithBal.findIndex(w=>w.runBal===minBal)+1} is the tightest point. Review inflow timing with clients.</div></div>
            </div>}
            {/* Cash flow waterfall */}
            <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:8,padding:"12px 14px",marginBottom:14}}>
              <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10,display:"flex",justifyContent:"space-between"}}>
                <span>Weekly Net Cash Flow</span>
                <span>Click any week for detail</span>
              </div>
              {weeksWithBal.map((w,i)=>{
                const maxNet=Math.max(...weeksWithBal.map(x=>Math.abs(x.net)),1);
                const barW=Math.round(Math.abs(w.net)/maxNet*45);
                const isSel=selWeekCF===i;
                const balPct=Math.round((w.runBal-minBal)/(maxBal-minBal||1)*100);
                return <div key={i} onClick={()=>setSelWeekCF(isSel?null:i)} style={{display:"flex",alignItems:"center",gap:0,height:28,cursor:"pointer",borderRadius:4,background:isSel?"rgba(96,165,250,.06)":"transparent",borderLeft:isSel?"2px solid #60a5fa":"2px solid transparent",transition:"all .1s",marginBottom:1}}>
                  {/* Week label */}
                  <div style={{width:80,flexShrink:0,fontSize:10,fontFamily:M,color:isSel?"#e2e0dc":"#706b63",padding:"0 8px",whiteSpace:"nowrap"}}>{w.label.replace("W"+(i+1)+" ","")}</div>
                  {/* Inflow amount */}
                  <div style={{width:55,flexShrink:0,fontSize:10,fontFamily:M,color:"#22c55e",textAlign:"right",paddingRight:6}}>+{(w.totalIn/1000).toFixed(0)}k</div>
                  {/* Net bar — centered, green right / red left */}
                  <div style={{flex:1,position:"relative",height:16,display:"flex",alignItems:"center"}}>
                    <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:1,background:"rgba(255,255,255,.06)"}}/>
                    {w.net>=0?
                      <div style={{position:"absolute",left:"50%",height:12,width:barW+"%",background:"#22c55e",borderRadius:"0 3px 3px 0",opacity:isSel?1:.6,transition:"opacity .15s"}}/>:
                      <div style={{position:"absolute",right:"50%",height:12,width:barW+"%",background:"#ef4444",borderRadius:"3px 0 0 3px",opacity:isSel?1:.6,transition:"opacity .15s"}}/>
                    }
                  </div>
                  {/* Outflow amount */}
                  <div style={{width:55,flexShrink:0,fontSize:10,fontFamily:M,color:"#ef4444",paddingLeft:6}}>-{(w.totalOut/1000).toFixed(0)}k</div>
                  {/* Net */}
                  <div style={{width:50,flexShrink:0,fontSize:10,fontFamily:M,fontWeight:600,color:w.net>=0?"#22c55e":"#ef4444",textAlign:"right",paddingRight:8}}>{w.net>=0?"+":""}{(w.net/1000).toFixed(0)}k</div>
                  {/* Balance indicator */}
                  <div style={{width:90,flexShrink:0,display:"flex",alignItems:"center",gap:4}}>
                    <div style={{flex:1,height:4,borderRadius:4,background:"rgba(255,255,255,.04)",overflow:"hidden"}}>
                      <div style={{height:"100%",width:Math.max(balPct,3)+"%",borderRadius:4,background:w.runBal<150000?"#ef4444":w.runBal<300000?"#f59e0b":"#60a5fa",transition:"width .15s"}}/>
                    </div>
                    <span style={{fontSize:9,fontFamily:M,color:w.runBal<150000?"#ef4444":w.runBal<300000?"#f59e0b":"#60a5fa",whiteSpace:"nowrap"}}>${(w.runBal/1000).toFixed(0)}k</span>
                  </div>
                </div>;
              })}
            </div>
            {/* Selected week detail */}
            {selWeekCF!==null&&(()=>{const w=weeksWithBal[selWeekCF];return <div style={{padding:"12px 14px",borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.12)",marginBottom:14}} className="fu">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <div style={{fontSize:14,fontWeight:700,color:"#e2e0dc"}}>{w.label}</div>
                <div style={{display:"flex",gap:16}}>
                  <span style={{fontSize:14,color:"#22c55e",fontFamily:M}}>In: +${(w.totalIn/1000).toFixed(0)}k</span>
                  <span style={{fontSize:14,color:"#ef4444",fontFamily:M}}>Out: -${(w.totalOut/1000).toFixed(0)}k</span>
                  <span style={{fontSize:14,color:w.net>=0?"#22c55e":"#ef4444",fontWeight:700,fontFamily:M}}>Net: {w.net>=0?"+":""}{(w.net/1000).toFixed(0)}k</span>
                  <span style={{fontSize:14,color:"#60a5fa",fontFamily:M}}>Balance: ${(w.runBal/1000).toFixed(0)}k</span>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                <div>
                  <div style={{fontSize:14,color:"#22c55e",fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>Inflows (probability-weighted)</div>
                  {w.inflows.length===0&&<div style={{fontSize:14,color:"#4a4540",fontStyle:"italic"}}>No invoices due this week</div>}
                  {w.inflows.map((inf,j)=><div key={j} style={{display:"flex",justifyContent:"space-between",padding:"4px 6px",borderRadius:4,background:"rgba(34,197,94,.04)",marginBottom:2}}>
                    <span style={{fontSize:14,color:"#a09a92"}}>{inf.label} <span style={{color:"#4a4540"}}>({inf.prob}%)</span></span>
                    <span style={{fontSize:14,color:"#22c55e",fontFamily:M,fontWeight:600}}>+${Math.round(inf.amt*inf.prob/100/1000)}k</span>
                  </div>)}
                </div>
                <div>
                  <div style={{fontSize:14,color:"#ef4444",fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:".5px"}}>Outflows</div>
                  {w.outflows.map((out,j)=><div key={j} style={{display:"flex",justifyContent:"space-between",padding:"4px 6px",borderRadius:4,background:"rgba(239,68,68,.04)",marginBottom:2}}>
                    <span style={{fontSize:14,color:"#a09a92"}}>{out.label}</span>
                    <span style={{fontSize:14,color:"#ef4444",fontFamily:M,fontWeight:600}}>-${(out.amt/1000).toFixed(1)}k</span>
                  </div>)}
                </div>
              </div>
            </div>;})}
            {/* Week table */}
            <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
                  {["Week","Inflows","Outflows","Net","Cash Balance","Status"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}
                </tr></thead>
                <tbody>{weeksWithBal.map((w,i)=><tr key={i} onClick={()=>setSelWeekCF(selWeekCF===i?null:i)} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.025)",background:selWeekCF===i?G+"08":"transparent",cursor:"pointer"}}>
                  <td style={{padding:"6px 10px",color:"#e2e0dc",fontFamily:M,fontSize:10}}>{w.label}</td>
                  <td style={{padding:"6px 10px",color:"#22c55e",fontFamily:M,fontWeight:600}}>+${(w.totalIn/1000).toFixed(0)}k</td>
                  <td style={{padding:"6px 10px",color:"#ef4444",fontFamily:M}}>-${(w.totalOut/1000).toFixed(0)}k</td>
                  <td style={{padding:"6px 10px",color:w.net>=0?"#22c55e":"#ef4444",fontFamily:M,fontWeight:600}}>{w.net>=0?"+":""}{(w.net/1000).toFixed(0)}k</td>
                  <td style={{padding:"6px 10px",fontFamily:M,fontWeight:600,color:w.runBal<150000?"#ef4444":w.runBal<300000?"#f59e0b":"#60a5fa"}}>${(w.runBal/1000).toFixed(0)}k</td>
                  <td style={{padding:"6px 10px"}}><Badge c={w.runBal<150000?"#ef4444":w.runBal<300000?"#f59e0b":"#22c55e"}>{w.runBal<150000?"Low":w.runBal<300000?"Watch":"Healthy"}</Badge></td>
                </tr>)}</tbody>
              </table>
            </div>
          </div>;
        })()}
        {finTab==="invoices"&&<div>
          {(()=>{
            const invs=[];prjs.forEach(p=>{const i1=p.sd?.invoice1;if(i1&&(i1.invNum||i1.amount)){const st=i1.status==="Cancelled"?"Cancelled":i1.status==="Refunded"?"Refunded":i1.datePaid?"Paid":i1.dateDue&&new Date(i1.dateDue)<new Date()?"Overdue":i1.dateSent?"Sent":"Draft";invs.push({amt:Number(i1.amount||p.inv1||0),status:st});}const i2=p.sd?.invoice2;if(i2&&(i2.invNum||i2.amount)){const st=i2.status==="Cancelled"?"Cancelled":i2.status==="Refunded"?"Refunded":i2.datePaid?"Paid":i2.dateDue&&new Date(i2.dateDue)<new Date()?"Overdue":i2.dateSent?"Sent":"Draft";invs.push({amt:Number(i2.amount||p.inv2||0),status:st});}});
            invs.push({amt:42000,status:"Overdue"},{amt:38000,status:"Sent"},{amt:8500,status:"Cancelled"},{amt:125000,status:"Refunded"});
            const total=invs.length;
            const paid=invs.filter(i=>i.status==="Paid");
            const overdue=invs.filter(i=>i.status==="Overdue");
            const sent=invs.filter(i=>i.status==="Sent");
            const totalAmt=invs.reduce((s,i)=>s+i.amt,0);
            const paidAmt=paid.reduce((s,i)=>s+i.amt,0);
            const overdueAmt=overdue.reduce((s,i)=>s+i.amt,0);
            return <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[
                ["Total Invoices",total,"#60a5fa"],
                ["Paid",$(paidAmt),"#22c55e"],
                ["Sent / Outstanding",sent.length,"#f59e0b"],
                ["Overdue",$(overdueAmt),overdue.length>0?"#ef4444":"#706b63"],
                ["Total Invoiced",$(totalAmt),G],
              ].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>;
          })()}
          <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
                    <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
            <thead><tr style={{background:"rgba(255,255,255,.02)"}}>{["Invoice #","Type","Project","Client","Amount","Sent","Due","Paid","Status","Actions"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}</tr></thead>
            <tbody>{(()=>{const invs=[];prjs.forEach(p=>{const i1=p.sd?.invoice1;if(i1&&(i1.invNum||i1.amount)){const st=i1.status==="Cancelled"?"Cancelled":i1.status==="Refunded"?"Refunded":i1.datePaid?"Paid":i1.dateDue&&new Date(i1.dateDue)<new Date()?"Overdue":i1.dateSent?"Sent":"Draft";invs.push({inv:i1.invNum||"-",type:"#1",prj:p.id,name:p.name,client:p.client,amt:i1.amount||p.inv1||0,sent:i1.dateSent||"-",due:i1.dateDue||"-",paid:i1.datePaid||"-",status:st,stgIdx:6});}const i2=p.sd?.invoice2;if(i2&&(i2.invNum||i2.amount)){const st=i2.status==="Cancelled"?"Cancelled":i2.status==="Refunded"?"Refunded":i2.datePaid?"Paid":i2.dateDue&&new Date(i2.dateDue)<new Date()?"Overdue":i2.dateSent?"Sent":"Draft";invs.push({inv:i2.invNum||"-",type:"#2",prj:p.id,name:p.name,client:p.client,amt:i2.amount||p.inv2||0,sent:i2.dateSent||"-",due:i2.dateDue||"-",paid:i2.datePaid||"-",status:st,stgIdx:9});}});invs.push({inv:"INV-2025-0019",type:"#1",prj:"PRJ-012",name:"Soho House Lobby",client:"Soho House NYC",amt:42000,sent:"2025-11-15",due:"2025-12-15",paid:"-",status:"Overdue",stgIdx:6});invs.push({inv:"INV-2026-0052",type:"#1",prj:"PRJ-020",name:"Museum Pedestal Set",client:"Met Cloisters",amt:38000,sent:"2026-02-10",due:"2026-03-10",paid:"-",status:"Sent",stgIdx:6});invs.push({inv:"INV-2025-0014",type:"#1",prj:"PRJ-015",name:"Private Garden Urn",client:"Private Collector",amt:8500,sent:"2025-09-20",due:"2025-10-20",paid:"-",status:"Cancelled",stgIdx:6});invs.push({inv:"INV-2025-0008",type:"#1",prj:"PRJ-016",name:"Hotel Lobby Relief",client:"Aman Resorts",amt:125000,sent:"2025-07-22",due:"2025-08-22",paid:"-",status:"Refunded",stgIdx:6});const stC={"Paid":"#22c55e","Overdue":"#ef4444","Sent":"#60a5fa","Draft":"#706b63","Cancelled":"#64748b","Refunded":"#f59e0b"};invs.sort((a,b)=>(a.sent>b.sent?-1:1));return invs.map((inv,i)=><tr key={i} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)",opacity:inv.status==="Cancelled"?.5:1}}><td style={{padding:"8px 12px",fontFamily:M,color:"#60a5fa",fontWeight:600,cursor:"pointer"}} onClick={()=>{setSelId(inv.prj);setView("lifecycle");setExpS(inv.stgIdx);}}>{inv.inv}</td><td style={{padding:"8px 12px",fontSize:14,color:"#a09a92"}}>{inv.type}</td><td style={{padding:"8px 12px",color:"#e2e0dc",cursor:"pointer"}} onClick={()=>{setSelId(inv.prj);setView("lifecycle");setExpS(inv.stgIdx);}}>{inv.name}</td><td style={{padding:"8px 12px",color:"#a09a92"}}>{inv.client}</td><td style={{padding:"8px 12px",fontFamily:M,fontWeight:600,color:G}}>{$(inv.amt)}</td><td style={{padding:"8px 12px",fontFamily:M,fontSize:14,color:"#706b63"}}>{inv.sent}</td><td style={{padding:"8px 12px",fontFamily:M,fontSize:14,color:inv.status==="Overdue"?"#ef4444":"#706b63"}}>{inv.due}</td><td style={{padding:"8px 12px",fontFamily:M,fontSize:14,color:inv.paid!=="-"?"#22c55e":"#4a4540"}}>{inv.paid}</td><td style={{padding:"8px 12px"}}><Badge c={stC[inv.status]||"#706b63"}>{inv.status}</Badge></td><td style={{padding:"8px 12px"}}>{(inv.status==="Overdue"||inv.status==="Sent")&&<Btn small color={inv.status==="Overdue"?"#ef4444":"#60a5fa"} onClick={e=>{e.stopPropagation();}}>📧 Re-send</Btn>}</td></tr>);})()}</tbody>
          </table>
          </div>
        </div>}
        {finTab==="pl"&&(()=>{
          const PLY=[
            {mo:"Mar 25",rev:148000,cost:112000,gp:36000,margin:24.3,projects:3,won:2,lost:1},
            {mo:"Apr 25",rev:92000,cost:73000,gp:19000,margin:20.7,projects:2,won:2,lost:0},
            {mo:"May 25",rev:205000,cost:155000,gp:50000,margin:24.4,projects:4,won:3,lost:1},
            {mo:"Jun 25",rev:178000,cost:138000,gp:40000,margin:22.5,projects:3,won:2,lost:1},
            {mo:"Jul 25",rev:265000,cost:198000,gp:67000,margin:25.3,projects:5,won:4,lost:0},
            {mo:"Aug 25",rev:312000,cost:231000,gp:81000,margin:26.0,projects:5,won:5,lost:1},
            {mo:"Sep 25",rev:189000,cost:150000,gp:39000,margin:20.6,projects:3,won:2,lost:2},
            {mo:"Oct 25",rev:421000,cost:308000,gp:113000,margin:26.8,projects:6,won:5,lost:1},
            {mo:"Nov 25",rev:298000,cost:228000,gp:70000,margin:23.5,projects:4,won:4,lost:0},
            {mo:"Dec 25",rev:155000,cost:124000,gp:31000,margin:20.0,projects:2,won:1,lost:1},
            {mo:"Jan 26",rev:287000,cost:220000,gp:67000,margin:23.3,projects:4,won:3,lost:1},
            {mo:"Feb 26",rev:342000,cost:256000,gp:86000,margin:25.1,projects:5,won:4,lost:1},
          ];
          const PRJ_PL=[
            {id:"PRJ-001",name:"RAMSA Facade ×24",client:"RAMSA Partners",type:"Architecture",quoted:375000,cost:318000,gp:57000,margin:15.2,status:"Active"},
            {id:"PRJ-002",name:"Benedictine Capitals ×12",client:"Benedictine Abbey",type:"Restoration",quoted:210000,cost:180000,gp:30000,margin:14.3,status:"Active"},
            {id:"PRJ-003",name:"Arsham Eroded Venus",client:"Park Ave Armory",type:"Fine Art",quoted:85000,cost:70000,gp:15000,margin:17.6,status:"Active"},
            {id:"PRJ-004",name:"NEH National Garden",client:"NEH Office",type:"Monument",quoted:100000,cost:95000,gp:5000,margin:5.0,status:"Active"},
            {id:"PRJ-005",name:"RAMSA Facade Phase 2",client:"RAMSA Partners",type:"Architecture",quoted:375000,cost:318750,gp:56250,margin:15.0,status:"Active"},
            {id:"PRJ-006",name:"Stripe Logo",client:"Stripe Inc.",type:"Corporate",quoted:18000,cost:13000,gp:5000,margin:27.8,status:"Active"},
            {id:"PRJ-W01",name:"Hudson Yards Amenity",client:"Related Companies",type:"Architecture",quoted:550000,cost:451000,gp:99000,margin:18.0,status:"Won"},
            {id:"PRJ-W02",name:"Rosewood Lobby",client:"Rosewood Hotels",type:"Hospitality",quoted:145000,cost:124700,gp:20300,margin:14.0,status:"Won"},
            {id:"PRJ-W03",name:"Brooklyn Library Relief",client:"Brooklyn Public Library",type:"Public Art",quoted:210000,cost:176400,gp:33600,margin:16.0,status:"Won"},
            {id:"PRJ-W04",name:"Greenwich Hotel Bar",client:"The Greenwich Hotel",type:"Hospitality",quoted:88000,cost:68640,gp:19360,margin:22.0,status:"Won"},
            {id:"PRJ-W05",name:"Selldorf Penthouse",client:"Selldorf Architects",type:"Architecture",quoted:190000,cost:150100,gp:39900,margin:21.0,status:"Won"},
          ];
          const _totalRev=PLY.reduce((s,m)=>s+m.rev,0);
          const _totalGP=PLY.reduce((s,m)=>s+m.gp,0);
          const _totalCost=PLY.reduce((s,m)=>s+m.cost,0);
          const sA=finScenario?finScenarioAdj:{revMult:1,costMult:1,marginAdj:0};
          const PLYA=PLY.map(m=>{const rev=Math.round(m.rev*sA.revMult);const cost=Math.round(m.cost*sA.costMult);const gp=rev-cost;return{...m,rev,cost,gp,margin:rev>0?Math.round(gp/rev*1000)/10+sA.marginAdj:0};});
          const PRJA=PRJ_PL.map(p=>{const q=Math.round(p.quoted*sA.revMult);const c=Math.round(p.cost*sA.costMult);const g=q-c;return{...p,quoted:q,cost:c,gp:g,margin:q>0?Math.round(g/q*1000)/10+sA.marginAdj:0};});
          const totalRev=Math.round(_totalRev*sA.revMult);
          const totalCost=Math.round(_totalCost*sA.costMult);
          const totalGP=totalRev-totalCost;
          const avgMargin=totalRev>0?Math.round(totalGP/totalRev*1000)/10+sA.marginAdj:0;
          const ytdRev=Math.round(PLY.slice(-2).reduce((s,m)=>s+m.rev,0)*sA.revMult);
          const ytdGP=PLY.slice(-2).reduce((s,m)=>s+m.gp,0);
          const bestMo=PLY.reduce((b,m)=>m.gp>b.gp?m:b,PLY[0]);
          const CB2="rgba(255,255,255,.018)",BD2="1px solid rgba(255,255,255,.05)";
          const WON_PENDING=[
            {name:"Hudson Yards Amenity",client:"Related Companies",inv1:275000,inv1Due:"2026-03-01",inv2:275000,inv2Due:"2026-05-15",stage:"Fabrication"},
            {name:"Rosewood Dallas Lobby",client:"Rosewood Hotels",inv1:72500,inv1Due:"2026-02-28",inv2:72500,inv2Due:"2026-04-30",stage:"Design"},
            {name:"Fontainebleau Relief",client:"Fontainebleau Miami",inv1:95000,inv1Due:"2026-03-15",inv2:95000,inv2Due:"2026-06-01",stage:"Toolpath"},
          ];
          const PIPE_CONV=[
            {name:"Gensler Brooklyn Tower",val:280000,prob:55,stage:"Negotiation",expClose:"Feb 28"},
            {name:"Snohetta Plaza Sculpture",val:320000,prob:35,stage:"Scoping",expClose:"Mar 20"},
            {name:"Vornado Penn District",val:230000,prob:60,stage:"Quote Sent",expClose:"Feb 22"},
            {name:"Schwarz Nashville Facade",val:450000,prob:25,stage:"Discovery",expClose:"Apr 10"},
            {name:"Selldorf Tribeca",val:190000,prob:40,stage:"Proposal Sent",expClose:"Mar 5"},
          ];
          const febRev=Math.round(WON_PENDING.filter(p=>p.inv1Due<="2026-02-28").reduce((s,p)=>s+p.inv1,0)+PIPE_CONV.filter(p=>p.expClose.startsWith("Feb")).reduce((s,p)=>s+p.val*p.prob/100,0));
          const marRev=Math.round(WON_PENDING.reduce((s,p)=>{let v=0;if(p.inv1Due>="2026-03-01"&&p.inv1Due<="2026-03-31")v+=p.inv1;if(p.inv2Due>="2026-03-01"&&p.inv2Due<="2026-03-31")v+=p.inv2;return s+v;},0)+PIPE_CONV.filter(p=>p.expClose.startsWith("Mar")).reduce((s,p)=>s+p.val*p.prob/100,0)+67000);
          const aprRev=Math.round(WON_PENDING.filter(p=>p.inv2Due>="2026-04-01"&&p.inv2Due<="2026-04-30").reduce((s,p)=>s+p.inv2,0)+PIPE_CONV.filter(p=>p.expClose.startsWith("Apr")).reduce((s,p)=>s+p.val*p.prob/100,0)+82000);
          const total90=febRev+marRev+aprRev;
          const maxMo=Math.max(febRev,marRev,aprRev);
          return <div className="fu">
            {/* KPI row */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[["TTM Revenue",$(Math.round(totalRev/1000))+"k","#e2e0dc"],["TTM Gross Profit",$(Math.round(totalGP/1000))+"k","#22c55e"],["TTM COGS",$(Math.round(totalCost/1000))+"k","#a09a92"],["Avg Margin",avgMargin+"%",avgMargin>20?"#22c55e":avgMargin>15?"#f59e0b":"#ef4444"],["YTD Revenue (2026)",$(Math.round(ytdRev/1000))+"k","#60a5fa"]].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>
            <AsOf/>
            {/* Monthly P&L chart */}
            <div style={{padding:"14px 16px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",marginBottom:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px"}}>Monthly Revenue vs. Gross Profit</div>
                <div style={{display:"flex",gap:2,background:"rgba(255,255,255,.03)",borderRadius:6,padding:2}}>
                  {[[1,"1M"],[3,"3M"],[6,"6M"],[12,"12M"]].map(([v,l])=><button key={v} onClick={()=>setPlRange(v)} style={{fontSize:10,padding:"4px 10px",borderRadius:4,border:"none",background:plRange===v?"rgba(196,168,130,.15)":"transparent",color:plRange===v?G:"#706b63",cursor:"pointer",fontFamily:M,fontWeight:plRange===v?700:400,transition:"all .15s"}}>{l}</button>)}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <ComposedChart data={PLYA.slice(-plRange)} margin={{top:0,right:0,left:0,bottom:0}}>
                  <XAxis dataKey="mo" tick={{fontSize:10,fill:"#706b63"}} axisLine={false} tickLine={false}/>
                  <YAxis tick={{fontSize:10,fill:"#4a4540"}} axisLine={false} tickLine={false} tickFormatter={v=>"$"+Math.round(v/1000)+"k"}/>
                  <Tooltip formatter={(v,n)=>["$"+v.toLocaleString(),n==="rev"?"Revenue":n==="gp"?"Gross Profit":"COGS"]} contentStyle={{background:"#1a1814",border:"1px solid rgba(255,255,255,.1)",borderRadius:4,fontSize:14}}/>
                  <Bar dataKey="cost" fill="rgba(255,255,255,.06)" radius={[2,2,0,0]} name="COGS"/>
                  <Bar dataKey="gp" fill={G+"60"} radius={[2,2,0,0]} name="gp"/>
                  <Line type="monotone" dataKey="rev" stroke={G} strokeWidth={2} dot={false} name="rev"/>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
              {/* Margin % trend */}
              <div style={{padding:"14px 16px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Gross Margin %</div>
                <ResponsiveContainer width="100%" height={160}>
                  <AreaChart data={PLYA.slice(-plRange)} margin={{top:0,right:0,left:0,bottom:0}}>
                    <XAxis dataKey="mo" tick={{fontSize:10,fill:"#706b63"}} axisLine={false} tickLine={false}/>
                    <YAxis tick={{fontSize:10,fill:"#4a4540"}} axisLine={false} tickLine={false} tickFormatter={v=>v+"%"} domain={[10,32]}/>
                    <Tooltip formatter={v=>[v.toFixed(1)+"%","Margin"]} contentStyle={{background:"#1a1814",border:"1px solid rgba(255,255,255,.1)",borderRadius:4,fontSize:14}}/>
                    <Area type="monotone" dataKey="margin" stroke="#22c55e" fill="rgba(34,197,94,.08)" strokeWidth={2} dot={false}/>
                  </AreaChart>
                </ResponsiveContainer>
                <div style={{display:"flex",gap:12,marginTop:8,fontSize:14,color:"#a09a92"}}>
                  <span>Best: <span style={{color:"#22c55e",fontFamily:M}}>{bestMo.mo} {bestMo.margin}%</span></span>
                  <span>Avg: <span style={{color:G,fontFamily:M}}>{avgMargin}%</span></span>
                  <span>Target: <span style={{color:"#f59e0b",fontFamily:M}}>20%</span></span>
                </div>
              </div>
              {/* Cost breakdown */}
              <div style={{padding:"14px 16px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Cost Structure — TTM</div>
                {[["Labor (Carvers)",Math.round(totalCost*.38),"#a78bfa"],["Materials (Stone)",Math.round(totalCost*.28),"#d4a574"],["Robot Operations",Math.round(totalCost*.16),"#22c55e"],["Overhead / Facility",Math.round(totalCost*.10),"#60a5fa"],["Shipping / Crating",Math.round(totalCost*.08),"#f59e0b"]].map(([l,v,c])=>{
                  const pct=Math.round(v/totalCost*100);
                  return <div key={l} style={{marginBottom:8}}>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:14,marginBottom:3}}>
                      <span style={{color:"#a09a92"}}>{l}</span>
                      <span style={{color:c,fontFamily:M}}>{$(Math.round(v/1000))}k <span style={{color:"#4a4540"}}>({pct}%)</span></span>
                    </div>
                    <div style={{height:4,borderRadius:4,background:"rgba(255,255,255,.04)"}}>
                      <div style={{height:"100%",width:pct+"%",background:c,borderRadius:4,opacity:.7}}/>
                    </div>
                  </div>;
                })}
              </div>
            </div>
            {/* 90-Day Revenue Forecast */}
            {!finScenario&&<div style={{marginBottom:24,padding:"16px 18px",borderRadius:8,background:"rgba(255,255,255,.015)",border:"1px solid rgba(255,255,255,.06)"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                <div style={{fontSize:14,fontWeight:700,color:"#e2e0dc",textTransform:"uppercase",letterSpacing:".5px"}}>90-Day Revenue Forecast</div>
                <div style={{fontSize:14,color:"#706b63",fontFamily:M}}>Feb 20 — May 20, 2026</div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:16}}>
                {[
                  {l:"90-Day Total",v:"$"+Math.round(total90/1000)+"k",c:"#22c55e",sub:"Projected revenue"},
                  {l:"Won Pending",v:"$"+Math.round(WON_PENDING.reduce((s,p)=>s+p.inv1+p.inv2,0)/1000)+"k",c:"#c4a882",sub:"Invoices to raise"},
                  {l:"Pipeline (weighted)",v:"$"+Math.round(PIPE_CONV.reduce((s,p)=>s+p.val*p.prob/100,0)/1000)+"k",c:"#60a5fa",sub:"Probability-weighted"},
                  {l:"Avg Monthly",v:"$"+Math.round(total90/3/1000)+"k",c:"#a78bfa",sub:"vs $283k trailing avg"},
                ].map((k,i)=><div key={i} style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{fontSize:18,fontWeight:700,color:k.c,fontFamily:M,lineHeight:1}}>{k.v}</div>
                  <div style={{fontSize:10,color:"#706b63",marginTop:3,textTransform:"uppercase",letterSpacing:".5px"}}>{k.l}</div>
                  <div style={{fontSize:10,color:"#4a4540",marginTop:1}}>{k.sub}</div>
                </div>)}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
                {[{mo:"February",rev:febRev,c:"#22c55e",note:"Rosewood close + pending invoices"},{mo:"March",rev:marRev,c:"#60a5fa",note:"Won deal invoices + pipeline closes"},{mo:"April",rev:aprRev,c:"#a78bfa",note:"Balance payments + new pipeline"}].map((m,i)=><div key={i} style={{padding:"12px 14px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                    <span style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>{m.mo}</span>
                    <span style={{fontSize:18,fontWeight:700,color:m.c,fontFamily:M}}>${Math.round(m.rev/1000)}k</span>
                  </div>
                  <div style={{height:5,background:"rgba(255,255,255,.06)",borderRadius:4,overflow:"hidden",marginBottom:6}}><div style={{height:"100%",width:Math.round(m.rev/maxMo*100)+"%",background:m.c,borderRadius:4}}/></div>
                  <div style={{fontSize:10,color:"#4a4540"}}>{m.note}</div>
                </div>)}
              </div>
              <div style={{marginBottom:14}}>
                <div style={{fontSize:14,fontWeight:700,color:"#c4a882",textTransform:"uppercase",letterSpacing:".8px",marginBottom:8}}>Won Deals — Pending Invoicing</div>
                <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                    <thead><tr style={{background:"rgba(255,255,255,.02)"}}>{["Project","Client","Invoice 1","Due","Invoice 2","Due","Stage"].map(h=><th key={h} style={{padding:"6px 10px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,borderBottom:"1px solid rgba(255,255,255,.05)"}}>{h}</th>)}</tr></thead>
                    <tbody>{WON_PENDING.map((p,i)=><tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                      <td style={{padding:"8px 12px",color:"#e2e0dc",fontWeight:600}}>{p.name}</td>
                      <td style={{padding:"8px 12px",color:"#a09a92"}}>{p.client}</td>
                      <td style={{padding:"8px 12px",color:"#22c55e",fontFamily:M,fontWeight:600}}>${Math.round(p.inv1/1000)}k</td>
                      <td style={{padding:"8px 12px",fontFamily:M,fontSize:10,color:"#706b63"}}>{p.inv1Due}</td>
                      <td style={{padding:"8px 12px",color:"#60a5fa",fontFamily:M}}>${Math.round(p.inv2/1000)}k</td>
                      <td style={{padding:"8px 12px",fontFamily:M,fontSize:10,color:"#706b63"}}>{p.inv2Due}</td>
                      <td style={{padding:"8px 12px"}}><span style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:"rgba(167,139,250,.1)",color:"#a78bfa"}}>{p.stage}</span></td>
                    </tr>)}</tbody>
                  </table>
                </div>
              </div>
              <div>
                <div style={{fontSize:14,fontWeight:700,color:"#60a5fa",textTransform:"uppercase",letterSpacing:".8px",marginBottom:8}}>Pipeline — Probability-Weighted</div>
                <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                    <thead><tr style={{background:"rgba(255,255,255,.02)"}}>{["Deal","Value","Prob","Weighted","Exp. Close","Stage"].map(h=><th key={h} style={{padding:"6px 10px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,borderBottom:"1px solid rgba(255,255,255,.05)"}}>{h}</th>)}</tr></thead>
                    <tbody>{PIPE_CONV.map((p,i)=><tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                      <td style={{padding:"8px 12px",color:"#e2e0dc",fontWeight:600}}>{p.name}</td>
                      <td style={{padding:"8px 12px",color:"#c4a882",fontFamily:M}}>${Math.round(p.val/1000)}k</td>
                      <td style={{padding:"8px 12px"}}>
                        <div style={{display:"flex",alignItems:"center",gap:5}}>
                          <div style={{width:36,height:4,background:"rgba(255,255,255,.06)",borderRadius:4,overflow:"hidden"}}><div style={{height:"100%",width:p.prob+"%",background:p.prob>=60?"#22c55e":p.prob>=40?"#f59e0b":"#60a5fa",borderRadius:4}}/></div>
                          <span style={{fontSize:10,color:p.prob>=60?"#22c55e":p.prob>=40?"#f59e0b":"#60a5fa",fontFamily:M}}>{p.prob}%</span>
                        </div>
                      </td>
                      <td style={{padding:"8px 12px",color:"#22c55e",fontFamily:M,fontWeight:600}}>${Math.round(p.val*p.prob/100/1000)}k</td>
                      <td style={{padding:"8px 12px",fontSize:10,color:"#706b63",fontFamily:M}}>{p.expClose}</td>
                      <td style={{padding:"8px 12px"}}><span style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:"rgba(96,165,250,.1)",color:"#60a5fa"}}>{p.stage}</span></td>
                    </tr>)}</tbody>
                  </table>
                </div>
              </div>
            </div>}
            {/* Project P&L table */}
            {!finScenario&&<div style={{padding:"14px 16px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Project P&L Breakdown</div>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                <thead><tr style={{borderBottom:"1px solid rgba(255,255,255,.06)"}}>{[["Project","id"],["Client","client"],["Type","type"],["Quoted","quoted"],["COGS","cost"],["Gross Profit","gp"],["Margin","margin"],["Status","status"]].map(([h,k])=><th key={h} onClick={()=>setTblSort(s=>s.key===k?{key:k,dir:s.dir==="asc"?"desc":"asc"}:{key:k,dir:"asc"})} style={{padding:"6px 10px",textAlign:"left",fontSize:10,color:tblSort.key===k?G:"#706b63",fontWeight:600,textTransform:"uppercase",cursor:"pointer",userSelect:"none"}}>{h}{tblSort.key===k?(tblSort.dir==="desc"?" ▼":" ▲"):""}</th>)}</tr></thead>
                <tbody>{(tblSort.key?[...PRJA].sort((a,b)=>{const d=tblSort.dir==="asc"?1:-1;return typeof a[tblSort.key]==="number"?(a[tblSort.key]-b[tblSort.key])*d:String(a[tblSort.key]||"").localeCompare(String(b[tblSort.key]||""))*d;}):PRJA).map((p,i)=><tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                  <td style={{padding:"8px 12px",fontWeight:600,color:"#e2e0dc",fontFamily:M,fontSize:10}}>{p.id}</td>
                  <td style={{padding:"8px 12px",color:"#a09a92"}}>{p.client}</td>
                  <td style={{padding:"8px 12px",color:"#706b63"}}>{p.type}</td>
                  <td style={{padding:"8px 12px",color:G,fontFamily:M}}>{$(p.quoted)}</td>
                  <td style={{padding:"8px 12px",color:"#a09a92",fontFamily:M}}>{$(p.cost)}</td>
                  <td style={{padding:"8px 12px",color:"#22c55e",fontFamily:M,fontWeight:600}}>{$(p.gp)}</td>
                  <td style={{padding:"8px 12px"}}>
                    <span style={{color:p.margin>=20?"#22c55e":p.margin>=15?"#f59e0b":"#ef4444",fontFamily:M,fontWeight:700}}>{p.margin.toFixed(1)}%</span>
                  </td>
                  <td style={{padding:"8px 12px"}}><span style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:p.status==="Won"?"rgba(34,197,94,.12)":"rgba(96,165,250,.1)",color:p.status==="Won"?"#22c55e":"#60a5fa"}}>{p.status}</span></td>
                </tr>)}
                <tr style={{borderTop:"2px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.02)"}}>
                  <td colSpan={3} style={{padding:"8px 8px",fontWeight:700,color:"#e2e0dc",fontSize:14}}>Total</td>
                  <td style={{padding:"8px 8px",fontWeight:700,color:G,fontFamily:M}}>{$(PRJA.reduce((s,p)=>s+p.quoted,0))}</td>
                  <td style={{padding:"8px 8px",fontWeight:700,color:"#a09a92",fontFamily:M}}>{$(PRJA.reduce((s,p)=>s+p.cost,0))}</td>
                  <td style={{padding:"8px 8px",fontWeight:700,color:"#22c55e",fontFamily:M}}>{$(PRJA.reduce((s,p)=>s+p.gp,0))}</td>
                  <td style={{padding:"8px 8px",fontWeight:700,color:avgMargin>=20?"#22c55e":"#f59e0b",fontFamily:M}}>{(PRJA.reduce((s,p)=>s+p.gp,0)/PRJA.reduce((s,p)=>s+p.quoted,0)*100).toFixed(1)}%</td>
                  <td/>
                </tr>
                </tbody>
              </table>
            </div>}
          </div>;
        })()}
      </div>}

      {/* ═══ MACRO PULSE ═══ */}
  </>);
}
