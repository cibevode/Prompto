import React from "react";

export default function CalendarView({ ctx }) {
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
      {view==="calendar"&&(()=>{
        // Build a 4-week calendar from capWeek offset
        const today=new Date(2026,1,20); // Feb 20 2026
        const startOfWeek=(d)=>{const r=new Date(d);const day=r.getDay();r.setDate(r.getDate()-day+(day===0?-6:1));r.setHours(0,0,0,0);return r;};
        const baseMonday=startOfWeek(new Date(today.getTime()+capWeek*7*24*3600*1000));
        const weeks=Array.from({length:4},(_,wi)=>{
          const wStart=new Date(baseMonday.getTime()+wi*7*24*3600*1000);
          return Array.from({length:5},(_,di)=>{const d=new Date(wStart.getTime()+di*24*3600*1000);return d;});
        });
        const fmtDate=(d)=>d.toLocaleDateString("en",{month:"short",day:"numeric"});
        const isToday=(d)=>d.toDateString()===today.toDateString();
        // Fake schedule data: which robot/carver is on which project, which days
        const schedule={
          "R1":{"PRJ-003":[[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2]],"PRJ-007":[[1,3],[1,4],[2,0],[2,1]]},
          "R2":{"PRJ-012":[[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4]]},
          "R3":{"PRJ-018":[[1,0],[1,1],[1,2],[1,3],[1,4],[2,0],[2,1]]},
          "R4":{"PRJ-001":[[0,0],[0,1],[0,2]],"maintenance":[[0,3]],"PRJ-022":[[1,0],[1,1],[1,2],[1,3],[1,4]]},
          "R5":{"maintenance":[[0,0],[0,1],[0,2],[0,3],[0,4],[1,0]],"PRJ-015":[[1,1],[1,2],[1,3],[1,4]]},
          "R6":{"PRJ-015":[[0,0],[0,1],[0,2]],"PRJ-012":[[0,3],[0,4],[1,0],[1,1],[1,2],[1,3]]},
          "R7":{"PRJ-009":[[0,0],[0,1],[0,2],[0,3],[0,4]],"idle":[[1,0],[1,1]],"PRJ-022":[[1,2],[1,3],[1,4]]},
          "C1":{"PRJ-003":[[0,0],[0,1],[0,2],[0,3],[0,4]],"PRJ-007":[[1,0],[1,1],[1,2]]},
          "C2":{"PRJ-005":[[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1]]},
          "C3":{"available":[[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4]]},
          "C4":{"PRJ-007":[[0,0],[0,1],[0,2],[0,3]],"PRJ-003":[[0,4],[1,0],[1,1],[1,2]]},
          "C5":{"PRJ-001":[[0,0],[0,1],[0,2],[0,3],[0,4]],"PRJ-022":[[1,0],[1,1],[1,2]]},
        };
        const PRJ_COLORS=["#a78bfa","#60a5fa","#22c55e","#f59e0b","#c4a882","#7eb8a4","#d4a574","#d4849a","#e879f9","#38bdf8","#fb923c","#4ade80","#f472b6","#a3e635"];
        const prjColorMap={};prjs.forEach((p,i)=>{prjColorMap[p.id]=PRJ_COLORS[i%PRJ_COLORS.length];});
        const prjColors={...prjColorMap,"maintenance":"#ef4444","idle":"#64748b","available":"#22c55e"};
        const getCellBlock=(assetId,wi,di)=>{
          const assetSched=schedule[assetId]||{};
          for(const[prjId,days] of Object.entries(assetSched)){
            if(days.some(([w,d])=>w===wi&&d===di)) return prjId;
          }
          return null;
        };
        const doubleBookedWeeks={};
        ROBOTS.forEach(r=>{
          const assetSched=schedule[r.id]||{};
          const prjsPerWeek={};
          Object.entries(assetSched).forEach(([prjId,days])=>{
            if(["maintenance","idle","available"].includes(prjId)) return;
            days.forEach(([w])=>{
              if(!prjsPerWeek[w]) prjsPerWeek[w]=new Set();
              prjsPerWeek[w].add(prjId);
            });
          });
          Object.entries(prjsPerWeek).forEach(([w,set])=>{
            if(set.size>1){
              if(!doubleBookedWeeks[r.id]) doubleBookedWeeks[r.id]=new Set();
              doubleBookedWeeks[r.id].add(Number(w));
            }
          });
        });
        const TODAY_MS=new Date().getTime();
        const deadlineRiskPrjs=new Set(prjs.filter(p=>{
          if(!p.due) return false;
          const daysLeft=Math.ceil((new Date(p.due)-TODAY_MS)/(1000*60*60*24));
          const fabStarted=p.sd&&p.sd.fabrication&&(p.sd.fabrication.startDate||p.sd.fabrication.hrsLogged);
          return daysLeft>=0&&daysLeft<=21&&!fabStarted;
        }).map(p=>p.id));
        const getPrjName=(id)=>{if(id==="maintenance")return"Maintenance";if(id==="idle")return"Idle";if(id==="available")return"Available";return prjs.find(p=>p.id===id)?.name?.slice(0,18)||id;};
        const showRobots=capView==="robots"||capView==="both";
        const showCarvers=capView==="carvers"||capView==="both";
        const assets=[...(showRobots?ROBOTS:[]),...(showCarvers?CARVERS:[])];
        return <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"}} className="fu">
          {/* Controls */}
          <div style={{padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:12,flexShrink:0,flexWrap:"wrap"}}>
            <Btn small onClick={()=>setCapWeek(w=>w-1)}>← Prev</Btn>
            <span style={{fontSize:14,fontWeight:600,color:"#e2e0dc",fontFamily:M,minWidth:200,textAlign:"center"}}>{fmtDate(baseMonday)} – {fmtDate(new Date(baseMonday.getTime()+27*24*3600*1000))}, {baseMonday.getFullYear()}</span>
            <Btn small onClick={()=>setCapWeek(w=>w+1)}>Next →</Btn>
            <Btn small color="#60a5fa" onClick={()=>setCapWeek(0)}>Today</Btn>
            <div style={{display:"flex",alignItems:"center",gap:6,marginLeft:4}}>
              <span style={{fontSize:11,color:"#706b63"}}>Go to:</span>
              <input type="date" defaultValue={baseMonday.toISOString().slice(0,10)} onChange={e=>{
                if(!e.target.value)return;
                const target=new Date(e.target.value);
                const diff=Math.round((target-today)/(7*24*3600*1000));
                setCapWeek(diff);
              }} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,padding:"3px 8px",color:"#e2e0dc",fontSize:11,fontFamily:M,outline:"none",cursor:"pointer"}}/>
            </div>
            <div style={{display:"flex",gap:8,alignItems:"center",marginLeft:"auto"}}>
              <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:12,height:12,borderRadius:4,background:"rgba(239,68,68,.3)",border:"2px solid #ef4444",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:8,fontWeight:900,color:"#ef4444"}}>✕</span></div><span style={{fontSize:10,color:"#ef4444"}}>Double-booked</span></div>
              <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:12,height:12,borderRadius:4,background:"rgba(245,158,11,.2)",border:"2px solid #f59e0b",position:"relative"}}><span style={{position:"absolute",top:-3,right:-1,fontSize:8}}>⚠️</span></div><span style={{fontSize:10,color:"#f59e0b"}}>Deadline risk</span></div>
            </div>
            <div style={{marginLeft:"auto",display:"flex",gap:10,flexWrap:"wrap"}}>
              {Object.entries(prjColors).filter(([k])=>!["maintenance","idle","available"].includes(k)&&prjs.find(p=>p.id===k)).slice(0,6).map(([id,c])=><div key={id} style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:10,height:10,borderRadius:4,background:c}}/><span style={{fontSize:10,color:"#706b63"}}>{id}</span></div>)}
              <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:10,height:10,borderRadius:4,background:"#ef4444"}}/><span style={{fontSize:10,color:"#706b63"}}>Maint.</span></div>
              <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:10,height:10,borderRadius:4,background:"#64748b"}}/><span style={{fontSize:10,color:"#706b63"}}>Idle</span></div>
            </div>
          </div>
          {/* KPI strip */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,padding:"8px 16px",flexShrink:0}}>
            {(()=>{
              const activeRobots=ROBOTS.filter(r=>r.status==="Milling").length;
              const totalRobots=ROBOTS.length;
              const activeCarvers=CARVERS.filter(c=>c.status!=="Available").length;
              const totalCarvers=CARVERS.length;
              const avgUptime=Math.round(ROBOTS.reduce((s,r)=>s+r.up,0)/totalRobots*10)/10;
              const maint=ROBOTS.filter(r=>r.status==="Maintenance").length;
              const totalSlots=totalRobots*20+totalCarvers*20;
              const bookedSlots=Object.values(schedule).reduce((s,res)=>s+Object.values(res).reduce((s2,days)=>s2+days.length,0),0);
              const utilPct=Math.round(bookedSlots/totalSlots*100);
              return [
                ["Active Robots",activeRobots+"/"+totalRobots,"#22c55e"],
                ["Active Carvers",activeCarvers+"/"+totalCarvers,"#a78bfa"],
                ["Avg Uptime",avgUptime+"%","#60a5fa"],
                ["In Maintenance",maint,maint>0?"#ef4444":"#706b63"],
                ["4-Wk Utilization",utilPct+"%",utilPct>80?"#22c55e":utilPct>60?G:"#f59e0b"],
              ];
            })().map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"8px 12px"}}>
              <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:3}}>{l}</div>
              <div style={{fontSize:18,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
            </div>)}
          </div>
          {/* Grid */}
          <div style={{flex:1,overflowY:"auto",overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",tableLayout:"fixed",minWidth:900}}>
              <colgroup>
                <col style={{width:130}}/>
                {weeks.flat().map((_,i)=><col key={i} style={{width:"calc((100% - 130px) / 20)"}}/>)}
              </colgroup>
              <thead>
                <tr style={{borderBottom:"1px solid rgba(255,255,255,.08)"}}>
                  <th style={{padding:"6px 10px",fontSize:10,color:"#706b63",textAlign:"left",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px",background:"#0c0b0a",position:"sticky",top:0,zIndex:2}}>Asset</th>
                  {weeks.map((wk,wi)=>wk.map((d,di)=>{
                    const isSel=selDay&&d.toDateString()===selDay.toDateString();
                    return <th key={wi*5+di} onClick={()=>setSelDay(isSel?null:d)} style={{padding:"4px 2px",fontSize:10,textAlign:"center",fontWeight:isToday(d)||isSel?700:400,background:isSel?G+"18":"#0c0b0a",position:"sticky",top:0,zIndex:2,borderLeft:di===0?"1px solid rgba(255,255,255,.06)":"none",borderBottom:isSel?"2px solid "+G:"1px solid rgba(255,255,255,.08)",cursor:"pointer",transition:"background .12s"}}
                      onMouseEnter={e=>{if(!isSel)e.currentTarget.style.background="rgba(196,168,130,.06)";}}
                      onMouseLeave={e=>{if(!isSel)e.currentTarget.style.background="#0c0b0a";}}>
                      <div style={{color:isSel?G:isToday(d)?G:"#706b63",fontSize:10}}>{["M","T","W","T","F"][di]}</div>
                      <div style={{fontSize:10,color:isSel?G:isToday(d)?"#e2e0dc":"#4a4540"}}>{fmtDate(d)}</div>
                      {isToday(d)&&!isSel&&<div style={{width:4,height:4,borderRadius:"50%",background:G,margin:"2px auto 0"}}/>}
                      {isSel&&<div style={{width:4,height:4,borderRadius:"50%",background:G,margin:"2px auto 0"}}/>}
                    </th>;
                  }))}
                </tr>
                {/* Week label row */}
                <tr style={{borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                  <th style={{padding:"3px 10px",fontSize:10,color:"#4a4540",textAlign:"left",background:"#0a0908",position:"sticky",top:42,zIndex:2}}>4-WEEK VIEW</th>
                  {weeks.map((wk,wi)=>[
                    <th key={"wl"+wi} colSpan={5} style={{padding:"3px 4px",fontSize:10,color:"#4a4540",textAlign:"center",background:"#0a0908",borderLeft:"1px solid rgba(255,255,255,.06)",position:"sticky",top:42,zIndex:2,fontFamily:M}}>Week {wi+1}{wi===0?" (current)":""}</th>
                  ])}
                </tr>
              </thead>
              <tbody>
                {assets.map((asset,ai)=>{
                  const isRobot=ROBOTS.find(r=>r.id===asset.id);
                  return <tr key={asset.id} style={{borderBottom:"1px solid rgba(255,255,255,.025)"}}>
                    <td style={{padding:"5px 10px",borderRight:"1px solid rgba(255,255,255,.05)"}}>
                      <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",cursor:"pointer"}} onClick={()=>{if(isRobot){setSelRobot(asset.id);setView("robots");}else{const cMap={"C1":"H1","C2":"H2","C3":"H3","C4":"H4","C5":"H5"};setCapSelPerson(cMap[asset.id]||null);setCapTab("team");setView("capacity");}}}>{isRobot?"🤖":"✋"} <span style={{borderBottom:"1px dashed rgba(255,255,255,.15)"}}>{asset.name}</span></div>
                      <div style={{fontSize:10,color:"#4a4540"}}>{isRobot?asset.op:asset.spec}</div>
                    </td>
                    {weeks.map((wk,wi)=>wk.map((d,di)=>{
                      const block=getCellBlock(asset.id,wi,di);
                      const bg=block?prjColors[block]||G:undefined;
                      const isPast=d<today&&!isToday(d);
                      const isRobotCell=!!ROBOTS.find(r=>r.id===asset.id);
                      const isDoubleBooked=isRobotCell&&block&&!["maintenance","idle","available"].includes(block)&&doubleBookedWeeks[asset.id]&&doubleBookedWeeks[asset.id].has(wi);
                      const isDeadlineRisk=block&&deadlineRiskPrjs.has(block);
                      return <td key={wi*5+di} style={{padding:2,borderLeft:di===0?"1px solid rgba(255,255,255,.06)":"none",background:isPast?"rgba(0,0,0,.1)":isDoubleBooked?"rgba(239,68,68,.08)":isDeadlineRisk?"rgba(245,158,11,.06)":"transparent",opacity:isPast?.5:1}}>
                        {block&&<div title={getPrjName(block)+(isDoubleBooked?" — DOUBLE BOOKED":isDeadlineRisk?" — DEADLINE RISK":"")} style={{height:28,borderRadius:4,background:isDoubleBooked?"rgba(239,68,68,.3)":isDeadlineRisk?"rgba(245,158,11,.2)":bg+"30",border:isDoubleBooked?"2px solid #ef4444":isDeadlineRisk?"2px solid #f59e0b":"1px solid "+bg+"60",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",cursor:"default",gap:2}}>
                          {isDoubleBooked&&<span style={{fontSize:12,fontWeight:900,color:"#ef4444"}}>✕</span>}
                          {isDeadlineRisk&&!isDoubleBooked&&<span style={{fontSize:10}}>⚠️</span>}
                          <span style={{fontSize:10,color:isDoubleBooked?"#ef4444":isDeadlineRisk?"#f59e0b":bg,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",padding:"0 2px"}}>{block==="maintenance"?"🔧":block==="idle"?"—":block==="available"?"✓":block.replace("PRJ-","")}</span>
                        </div>}
                        {!block&&!isPast&&<div style={{height:28,borderRadius:4,background:"rgba(255,255,255,.01)",border:"1px dashed rgba(255,255,255,.03)"}}/>}
                      </td>;
                    }))}
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
          {/* Utilization summary */}
          <div style={{padding:"10px 16px",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",gap:16,flexShrink:0,flexWrap:"wrap"}}>
            {showRobots&&<div style={{display:"flex",gap:8,alignItems:"center"}}>
              <span style={{fontSize:14,color:"#706b63"}}>Robot Utilisation (this week):</span>
              {ROBOTS.map(r=>{
                const days=Object.values(schedule[r.id]||{}).flat().filter(([w])=>w===0).length;
                const util=Math.round(days/5*100);
                return <div key={r.id} style={{display:"flex",alignItems:"center",gap:4}}>
                  <div style={{width:28,height:6,borderRadius:4,background:"rgba(255,255,255,.06)",overflow:"hidden"}}><div style={{height:"100%",width:util+"%",background:util>=80?"#22c55e":util>=40?"#f59e0b":"#ef4444"}}/></div>
                  <span style={{fontSize:10,color:"#706b63",fontFamily:M}}>{r.name.split(" ")[1]} {util}%</span>
                </div>;
              })}
            </div>}
            {showCarvers&&<div style={{display:"flex",gap:8,alignItems:"center"}}>
              <span style={{fontSize:14,color:"#706b63"}}>Carver Availability (this week):</span>
              {CARVERS.map(c=>{
                const booked=Object.values(schedule[c.id]||{}).flat().filter(([w,d])=>w===0&&schedule[c.id]&&!Object.entries(schedule[c.id]).some(([k,days])=>k==="available"&&days.some(([w2,d2])=>w2===0&&d2===d))).length;
                const free=5-booked;
                return <div key={c.id} style={{fontSize:10,color:free>2?"#22c55e":free>0?"#f59e0b":"#ef4444",fontFamily:M}}>{c.name.split(" ")[0]}: {free}d free</div>;
              })}
            </div>}
          </div>
          {/* Day detail panel */}
          {selDay&&(()=>{
            const dayAssets=assets.map(asset=>{
              const wi=weeks.findIndex(wk=>wk.some(d=>d.toDateString()===selDay.toDateString()));
              const di=wi>=0?weeks[wi].findIndex(d=>d.toDateString()===selDay.toDateString()):-1;
              const block=wi>=0&&di>=0?getCellBlock(asset.id,wi,di):null;
              return {asset,block};
            });
            const booked=dayAssets.filter(x=>x.block&&x.block!=="idle"&&x.block!=="available");
            const idle=dayAssets.filter(x=>!x.block||x.block==="idle"||x.block==="available");
            return <div style={{position:"absolute",bottom:0,left:0,right:0,background:"#141312",borderTop:"1px solid "+G+"40",padding:"12px 18px",zIndex:5,animation:"fu .15s ease-out both",maxHeight:220,overflowY:"auto"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                <div style={{fontSize:14,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>{selDay.toLocaleDateString("en",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}</div>
                <button onClick={()=>setSelDay(null)} style={{background:"none",border:"none",color:"#706b63",cursor:"pointer",fontSize:18}}>×</button>
              </div>
              <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
                <div style={{flex:1,minWidth:300}}>
                  <div style={{fontSize:10,color:G,textTransform:"uppercase",letterSpacing:".8px",fontWeight:600,marginBottom:6}}>{booked.length} Assets Scheduled</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {booked.map(({asset,block})=>{
                      const isRobot=ROBOTS.find(r=>r.id===asset.id);
                      const c=prjColors[block]||G;
                      return <div key={asset.id} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:6,background:c+"12",border:"1px solid "+c+"30"}}>
                        <span style={{fontSize:14}}>{isRobot?"🤖":"✋"}</span>
                        <div>
                          <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>{asset.name}</div>
                          <div style={{fontSize:10,color:c}}>{block==="maintenance"?"🔧 Maintenance":getPrjName(block)}</div>
                        </div>
                      </div>;
                    })}
                    {booked.length===0&&<span style={{fontSize:14,color:"#4a4540",fontStyle:"italic"}}>No scheduled work</span>}
                  </div>
                </div>
                <div style={{minWidth:200}}>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".8px",fontWeight:600,marginBottom:6}}>{idle.length} Available</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                    {idle.map(({asset})=>{
                      const isRobot=ROBOTS.find(r=>r.id===asset.id);
                      return <span key={asset.id} style={{fontSize:10,padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",color:"#706b63"}}>{isRobot?"🤖":"✋"} {asset.name}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>;
          })()}
        </div>;
      })()}
  </>);
}
