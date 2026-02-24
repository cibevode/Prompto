import React from "react";

export default function ProcurementView({ ctx }) {
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
      {(view==="stonedb"||view==="procurement")&&<div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div style={{padding:"8px 18px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
          {stDbTab==="catalog"&&<><Btn small onClick={()=>{setDbRefreshing(true);setTimeout(()=>setDbRefreshing(false),2000);}}>↻ Refresh</Btn>
          <div style={{marginLeft:"auto",display:"flex",gap:3}}>
            {["All","Marble","Granite","Limestone","Sandstone","Travertine","Onyx","Quartzite"].map(f=><Btn key={f} small primary={stF===f} onClick={()=>setStF(f)}>{f}</Btn>)}
          </div></>}
          {stDbTab!=="catalog"&&<span/>}
        </div>
        {stDbTab==="catalog"&&<div style={{flex:1,overflowY:"auto",overflowX:"auto"}}>
          {stoneDetail&&<div style={{padding:"12px 18px"}}>
            <Btn small onClick={()=>setStoneDetail(null)}>← Back to Catalog</Btn>
            <div style={{display:"flex",gap:20,marginTop:10}}>
              <div style={{flex:1}}>
                <div style={{fontSize:28,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>{stoneDetail.name}</div>
                <div style={{display:"flex",gap:6,marginTop:4,marginBottom:12}}><Badge c={FC(stoneDetail.fam)}>{stoneDetail.fam}</Badge><Badge c={ROLES_C[stoneDetail.role]||"#706b63"}>{stoneDetail.role}</Badge><Badge c={CC(stoneDetail.color)}>{stoneDetail.color}</Badge></div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:14}}>
                  <KPI l="Hardness" v={stoneDetail.hard+" Mohs"} c={stoneDetail.hard>5?"#22c55e":G}/><KPI l="Durability" v={stoneDetail.dur+"/10"} c="#60a5fa"/><KPI l="Polish" v={stoneDetail.pol+"/10"} c="#a78bfa"/><KPI l="Yield" v={stoneDetail.yld+"%"} c="#22c55e"/>
                  <KPI l="Comp. Strength" v={stoneDetail.cs||"-"} c="#e2e0dc"/><KPI l="Water Abs." v={stoneDetail.wa||"-"} c="#60a5fa"/><KPI l="Porosity" v={stoneDetail.por+"/10"} c={G}/><KPI l="Est. Price" v={$(stonePrice(stoneDetail))+"/t"} c={G}/>
                </div>
                <Lbl>Origin & Supplier</Lbl>
                <div style={{padding:10,background:CB,border:BD,borderRadius:4,marginBottom:10}}>
                  <div style={{fontSize:14,color:"#e2e0dc"}}>{stoneDetail.origin}</div>
                  <div style={{fontSize:14,color:"#706b63",marginTop:2}}>Pattern: {stoneDetail.pat} · Grain: {stoneDetail.grain||"Standard"}</div>
                  <div style={{fontSize:14,color:"#60a5fa",marginTop:4,cursor:"pointer"}}>🌐 {stoneDetail.origin==="Italy"?"tuscanstonegroup.it":stoneDetail.origin==="USA"?"americanstonesupply.com":"quarryworld.com"} →</div>
                  <div style={{fontSize:10,color:"#4a4540",marginTop:4}}>📡 Last scraped: Feb 16, 2026 · Price: {stoneDetail.role==="Ultra-Luxury"?"↑ +8.2%":"→ Stable"} vs 12mo ago</div>
                </div>
                <Lbl>Reference Photos</Lbl>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6,marginBottom:12}}>
                  {["Polished slab","Raw block","Vein detail","Installed"].map((p,i)=><div key={i} style={{background:"rgba(255,255,255,.03)",border:BD,borderRadius:6,padding:14,textAlign:"center"}}><div style={{fontSize:22,marginBottom:2}}>{["✨","🪨","🔍","🏛"][i]}</div><div style={{fontSize:10,color:"#706b63"}}>{p}</div></div>)}
                </div>
                <div style={{display:"flex",gap:6}}>
                  <Btn small primary color="#60a5fa" onClick={()=>{setRfqModal(stoneDetail);setStoneDetail(null);}}>📧 Request Quote</Btn>
                  <Btn small primary color="#22c55e" onClick={()=>{setOrderModal(stoneDetail);setStoneDetail(null);}}>🛒 Place Order</Btn>
                </div>
              </div>
              <div style={{width:280}}>
                <div style={{padding:10,borderRadius:6,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.1)"}}>
                  <div style={{fontSize:14,fontWeight:600,color:"#a78bfa",marginBottom:6}}>🤖 Market Intelligence</div>
                  <div style={{fontSize:14,color:"#a09a92",lineHeight:1.6}}>
                    <div style={{padding:5,background:"rgba(255,255,255,.02)",borderRadius:4,marginBottom:4}}>Price trend: {stoneDetail.role==="Ultra-Luxury"?"↑ Rising 8% YoY":"Stable supply"}</div>
                    <div style={{padding:5,background:"rgba(255,255,255,.02)",borderRadius:4,marginBottom:4}}>Lead time: {stoneDetail.origin==="USA"?"2-3 weeks":"4-8 weeks"}</div>
                    <div style={{padding:5,background:"rgba(255,255,255,.02)",borderRadius:4}}>Used in {prjs.filter(p=>(p.sd?.stone_sourcing?.stoneType||"").includes(stoneDetail.name.split(" ")[0])).length} projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
          {!stoneDetail&&<div style={{padding:"12px 18px"}}>
          {(()=>{
            const families={};const roles={};const origins={};
            STONE_DB.forEach(s=>{families[s.fam]=(families[s.fam]||0)+1;roles[s.role]=(roles[s.role]||0)+1;origins[s.origin]=(origins[s.origin]||0)+1;});
            const topFam=Object.entries(families).sort((a,b)=>b[1]-a[1])[0];
            const topOrigin=Object.entries(origins).sort((a,b)=>b[1]-a[1])[0];
            const avgPrice=Math.round(STONE_DB.reduce((s,st)=>s+stonePrice(st),0)/STONE_DB.length);
            return <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[
                ["Total Stones",STONE_DB.length,"#60a5fa"],
                ["Families",Object.keys(families).length,"#a78bfa"],
                ["Top Family",topFam[0]+" ("+topFam[1]+")",FC(topFam[0])],
                ["Top Origin",topOrigin[0]+" ("+topOrigin[1]+")",G],
                ["Avg Price/t","$"+avgPrice.toLocaleString(),"#22c55e"],
              ].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>;
          })()}
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
            <thead><tr style={{position:"sticky",top:0,background:"#0e0d0c",zIndex:2}}>
              {[{k:"name",l:"Stone"},{k:"fam",l:"Family"},{k:"color",l:"Color"},{k:"role",l:"Tier"},{k:"pat",l:"Pattern"},{k:"hard",l:"Hard"},{k:"origin",l:"Origin"},{k:"dur",l:"Dur"},{k:"pol",l:"Polish"},{k:"yld",l:"Yield"},{k:"cs",l:"Comp. Str."},{k:"wa",l:"Water Abs."}].map(c=>
                <th key={c.k} onClick={()=>{stS===c.k?setStD(d=>-d):(setStS(c.k),setStD(1));}} style={{padding:"8px 12px",textAlign:"left",color:stS===c.k?G:"#706b63",fontSize:10,fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)",cursor:"pointer",whiteSpace:"nowrap"}}>{c.l}{stS===c.k&&(stD===1?" ↑":" ↓")}</th>
              )}
              <th style={{padding:"8px 12px",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>Actions</th>
            </tr></thead>
            <tbody>{sortSt.filter(s=>!stDbSearch||s.name.toLowerCase().includes(stDbSearch.toLowerCase())||s.fam.toLowerCase().includes(stDbSearch.toLowerCase())||s.color.toLowerCase().includes(stDbSearch.toLowerCase())||s.origin.toLowerCase().includes(stDbSearch.toLowerCase())||(s.role||"").toLowerCase().includes(stDbSearch.toLowerCase())||(s.pat||"").toLowerCase().includes(stDbSearch.toLowerCase())).map(s=><tr key={s.id} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)",cursor:"pointer"}} onClick={()=>setStoneDetail(s)}>              <td style={{padding:"8px 12px",fontWeight:600,color:"#e2e0dc",maxWidth:180}}>{s.name}</td>
              <td style={{padding:"8px 12px"}}><Badge c={FC(s.fam)}>{s.fam}</Badge></td>
              <td style={{padding:"8px 12px"}}><span style={{display:"inline-flex",alignItems:"center",gap:4}}><span style={{width:8,height:8,borderRadius:"50%",background:CC(s.color),border:"1px solid rgba(255,255,255,.1)"}}/><span style={{fontSize:14,color:"#a09a92"}}>{s.color}</span></span></td>
              <td style={{padding:"8px 12px"}}><Badge c={ROLES_C[s.role]||"#706b63"}>{s.role}</Badge></td>
              <td style={{padding:"8px 12px",fontSize:14,color:"#a09a92"}}>{s.pat}</td>
              <td style={{padding:"8px 12px",fontFamily:M,color:s.hard>5?"#22c55e":s.hard>3.5?G:"#f59e0b"}}>{s.hard}</td>
              <td style={{padding:"8px 12px",color:"#a09a92",fontSize:14}}>{s.origin}</td>
              <td style={{padding:"8px 12px",fontFamily:M,fontSize:14}}>{s.dur}/10</td>
              <td style={{padding:"8px 12px",fontFamily:M,fontSize:14}}>{s.pol}/10</td>
              <td style={{padding:"8px 12px",fontFamily:M,fontSize:14}}>{s.yld}%</td>
              <td style={{padding:"8px 12px",fontSize:14,color:"#706b63",fontFamily:M}}>{s.cs||"—"}</td>
              <td style={{padding:"8px 12px",fontSize:14,color:"#706b63",fontFamily:M}}>{s.wa||"—"}</td>
              <td style={{padding:"7px 6px",whiteSpace:"nowrap"}}>
                <Btn small color="#60a5fa" onClick={()=>setRfqModal(s)}>📧 RFQ</Btn>{" "}
                <Btn small color="#22c55e" onClick={()=>setOrderModal(s)}>🛒 Order</Btn>
              </td>
            </tr>)}</tbody>
          </table>
          </div>}
        </div>}
        {stDbTab==="orders"&&<div style={{flex:1,overflowY:"auto",padding:"12px 18px"}}>
          {(()=>{
            // Compute all orders for KPIs
            const allOrders=[];prjs.forEach(p=>{const ss=p.sd?.stone_sourcing;if(ss&&ss.shipStatus&&ss.shipStatus!=="Not ordered")allOrders.push({prj:p.id,nm:p.name,cl:p.client,st:ss.stoneType||"-",sup:ss.supplier||"-",stat:ss.shipStatus,dt:ss.orderDate||"-",eta:ss.eta||"-",cost:ss.stoneCost||0,wt:ss.weight||"-",blk:ss.blockId||"-"});});
            const inTransit=allOrders.filter(o=>o.stat==="In transit");
            const delivered=allOrders.filter(o=>o.stat==="Delivered");
            const ordered=allOrders.filter(o=>o.stat==="Ordered");
            const totalCost=allOrders.reduce((s,o)=>s+Number(o.cost||0),0);
            return <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[
                ["Total Orders",allOrders.length,"#60a5fa"],
                ["Ordered",ordered.length,"#a78bfa"],
                ["In Transit",inTransit.length,"#f59e0b"],
                ["Delivered",delivered.length,"#22c55e"],
                ["Total Value",$(totalCost),G],
              ].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>;
          })()}
          {(()=>{
            const unordered=prjs.filter(p=>p.sd&&p.sd.stone_sourcing&&p.sd.stone_sourcing.stoneType&&(!p.sd.stone_sourcing.shipStatus||p.sd.stone_sourcing.shipStatus==="Not ordered"));
            const byStone={};
            unordered.forEach(p=>{
              const st=p.sd.stone_sourcing.stoneType;
              if(!byStone[st]) byStone[st]=[];
              byStone[st].push(p);
            });
            const groups=Object.entries(byStone).filter(([,ps])=>ps.length>=2);
            if(!groups.length) return null;
            return <div style={{marginBottom:16}}>
              {groups.map(([stone,ps],gi)=>{
                const totalTons=ps.reduce((s,p)=>s+Number(p.sd.stone_sourcing.weight||0),0);
                const stoneRec=STONE_DB.find(s=>stone.toLowerCase().includes(s.name.split(" ")[0].toLowerCase()));
                const ppt=stoneRec?stonePrice(stoneRec):1000;
                const savings=Math.round(totalTons*ppt*0.08);
                const flagKey="consol_"+gi;
                const isFlagged=alertLog[flagKey]&&alertLog[flagKey].flagged;
                return <div key={gi} style={{marginBottom:10,padding:"12px 14px",borderRadius:6,background:"rgba(196,168,130,.05)",border:"1px solid rgba(196,168,130,.25)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8,marginBottom:8}}>
                    <div>
                      <div style={{fontSize:14,fontWeight:700,color:"#c4a882",marginBottom:3}}>Bulk Order Opportunity — {stone}</div>
                      <div style={{fontSize:14,color:"#a09a92"}}>{ps.length} projects need this stone and none have ordered yet.{totalTons>0?" Combined ~"+totalTons.toFixed(1)+"t.":""} Bulk order saves est. <span style={{color:"#22c55e",fontWeight:700}}>${savings.toLocaleString()} (8%)</span></div>
                    </div>
                    {!isFlagged
                      ? <button onClick={()=>{
                          setAlertLog(l=>({...l,[flagKey]:{flagged:true}}));
                          setPrjs(prev=>prev.map(p=>ps.find(pp=>pp.id===p.id)?{...p,log:[...(p.log||[]),{t:ts(),m:"Bulk order flag: "+stone+" — combine with "+ps.filter(pp=>pp.id!==p.id).map(pp=>pp.id).join(", ")+(savings>0?" for ~$"+savings.toLocaleString()+" savings":""),u:"System"}]}:p));
                        }} style={{fontSize:10,padding:"5px 10px",borderRadius:4,background:"rgba(196,168,130,.15)",border:"1px solid rgba(196,168,130,.3)",color:"#c4a882",cursor:"pointer",fontFamily:S,fontWeight:600,whiteSpace:"nowrap",flexShrink:0}}>Flag All Projects</button>
                      : <span style={{fontSize:10,color:"#22c55e",flexShrink:0}}>Flagged in all logs</span>
                    }
                  </div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    {ps.map((p,i)=><div key={i} onClick={()=>{setSelId(p.id);setView("lifecycle");setExpS(5);}} style={{fontSize:10,padding:"3px 9px",borderRadius:4,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",color:"#e2e0dc",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.08)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.04)"}>
                      {p.id} — {p.name.slice(0,22)}{p.name.length>22?"…":""}
                      {p.sd.stone_sourcing.weight&&<span style={{color:"#4a4540",fontFamily:M,marginLeft:4}}>{p.sd.stone_sourcing.weight}t</span>}
                    </div>)}
                  </div>
                </div>;
              })}
            </div>;
          })()}
          {(()=>{const orders=[];prjs.forEach(p=>{const ss=p.sd?.stone_sourcing;if(ss&&ss.shipStatus&&ss.shipStatus!=="Not ordered")orders.push({prj:p.id,nm:p.name,cl:p.client,st:ss.stoneType||"-",sup:ss.supplier||"-",stat:ss.shipStatus,dt:ss.orderDate||"-",eta:ss.eta||"-",cost:ss.stoneCost||0,wt:ss.weight||"-",blk:ss.blockId||"-"});});const fil=orders.filter(o=>!orderSearch||[o.st,o.sup,o.prj,o.cl].some(s=>(s||"").toLowerCase().includes(orderSearch.toLowerCase())));fil.sort((a,b)=>(a.dt>b.dt?-1:1));return fil.length===0?<div style={{color:"#706b63",fontSize:14,padding:20}}>No orders found.</div>:<div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}><thead><tr style={{background:"rgba(255,255,255,.02)"}}>{["Project","Client","Stone","Supplier","Status","Date","ETA","Cost"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}</tr></thead><tbody>{fil.map((o,i)=><tr key={i} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)",cursor:"pointer"}} onClick={()=>{setSelId(o.prj);setView("lifecycle");setExpS(5);}}><td style={{padding:"8px 12px",fontWeight:600,color:"#e2e0dc"}}>{o.prj}</td><td style={{padding:"8px 12px",color:"#a09a92"}}>{o.cl}</td><td style={{padding:"8px 12px",color:G}}>{o.st}</td><td style={{padding:"8px 12px",color:"#e2e0dc"}}>{o.sup}</td><td style={{padding:"8px 12px"}}><Badge c={o.stat==="Delivered"?"#22c55e":o.stat==="In transit"?"#f59e0b":"#60a5fa"}>{o.stat}</Badge></td><td style={{padding:"8px 12px",fontFamily:M,fontSize:11,color:"#706b63"}}>{o.dt}</td><td style={{padding:"8px 12px"}}>{o.eta}</td><td style={{padding:"8px 12px",fontFamily:M,color:G}}>{o.cost?$(o.cost):"-"}</td></tr>)}</tbody></table></div>;})()}
          <div style={{fontSize:11,color:"#4a4540",marginTop:10}}>Click a row to view project in lifecycle</div>
        </div>}
        {stDbTab==="inventory"&&<div style={{flex:1,overflowY:"auto",padding:"12px 18px"}}>
          {invDetail&&<div>
            <Btn small onClick={()=>setInvDetail(null)}>← Back to Inventory</Btn>
            <div style={{display:"flex",gap:20,marginTop:10}}>
              <div style={{flex:1}}>
                <div style={{fontSize:22,fontWeight:700,color:"#e2e0dc",fontFamily:D,marginBottom:4}}>{invDetail.sn}</div>
                <div style={{fontSize:14,color:"#706b63",marginBottom:12}}>{invDetail.bc} · {invDetail.fm} · {invDetail.loc}</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:14}}>
                  <KPI l="Dimensions" v={invDetail.dm} c={G}/><KPI l="Weight" v={invDetail.wt} c="#e2e0dc"/><KPI l="Status" v={invDetail.ss} c={invDetail.ss==="Available"?"#22c55e":invDetail.ss==="Defect"?"#ef4444":"#f59e0b"}/>
                </div>
                {invDetail.pj&&<div style={{padding:10,borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.1)",marginBottom:10}}>
                  <div style={{fontSize:14,fontWeight:600,color:"#60a5fa"}}>Associated Project</div>
                  <div style={{fontSize:14,color:"#e2e0dc",marginTop:2,cursor:"pointer"}} onClick={()=>{const pid=invDetail.pj.split(" — ")[0].split(" ")[0];if(prjs.find(p=>p.id===pid)){setSelId(pid);setView("lifecycle");}}}>{invDetail.pj}</div>
                </div>}
                {invDetail.ss==="Available"&&<div style={{padding:10,borderRadius:6,background:"rgba(34,197,94,.04)",border:"1px solid rgba(34,197,94,.1)",marginBottom:10}}>
                  <div style={{fontSize:14,fontWeight:600,color:"#22c55e",marginBottom:4}}>Allocate to Project</div>
                  <Inp label="" value={allocPrj} onChange={setAllocPrj} type="select" opts={prjs.filter(p=>p.stage<8).map(p=>p.id+" — "+p.name)}/>
                  {allocPrj&&<Btn small primary color="#22c55e" onClick={()=>{const pid=allocPrj.split(" — ")[0];const pName=allocPrj.split(" — ")[1]||"";setInvBlocks(bs=>bs.map(b=>b.bc===invDetail.bc?{...b,ss:"Reserved",pj:allocPrj,upd:ts()}:b));setPrjs(ps=>ps.map(p=>p.id!==pid?p:{...p,sd:{...p.sd,stone_sourcing:{...(p.sd?.stone_sourcing||{}),stoneType:invDetail.sn,blockId:invDetail.bc,blockDims:invDetail.dm,weight:invDetail.wt,shipStatus:"Delivered"}},log:[{t:ts(),m:"Block "+invDetail.bc+" ("+invDetail.sn+") allocated from inventory",u:"Current User"},...(p.log||[])],changelog:[...(p.changelog||[]),{t:ts(),u:"Current User",stage:"Stone Sourcing",changes:[{field:"Block allocated",from:"-",to:invDetail.bc+" — "+invDetail.sn}]}]}));setInvDetail({...invDetail,ss:"Reserved",pj:allocPrj,upd:ts()});setAllocPrj("");}}>✓ Confirm Allocation</Btn>}
                </div>}
                {invDetail.upd&&<div style={{fontSize:10,color:"#4a4540",marginBottom:10,fontFamily:M}}>Last updated: {invDetail.upd}</div>}
                <Lbl>Block Photos</Lbl>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:12}}>
                  {["Front face","Side profile","Top view"].map((p,i)=><div key={i} style={{background:"rgba(255,255,255,.03)",border:BD,borderRadius:6,padding:20,textAlign:"center"}}><div style={{fontSize:28,marginBottom:4}}>{["🪨","📐","✨"][i]}</div><div style={{fontSize:10,color:"#706b63"}}>{p}</div></div>)}
                </div>
                <div style={{display:"flex",gap:6}}>
                  <Btn small color="#60a5fa">📧 Contact Supplier</Btn>
                  <Btn small color={G}>🛒 Place Another Order</Btn>
                </div>
              </div>
              <div style={{width:280}}>
                <div style={{padding:10,borderRadius:6,background:"rgba(167,139,250,.04)",border:"1px solid rgba(167,139,250,.1)"}}>
                  <div style={{fontSize:14,fontWeight:600,color:"#a78bfa",marginBottom:6}}>🤖 AI Stone Analysis</div>
                  <div style={{fontSize:14,color:"#a09a92",lineHeight:1.6}}>
                    <div style={{marginBottom:6,padding:6,background:"rgba(255,255,255,.02)",borderRadius:4}}><span style={{color:"#e2e0dc",fontWeight:600}}>Structural:</span> {invDetail.ss==="Defect"?"⚠ Fracture detected — do NOT use for load-bearing. Cut around defect.":"No visible defects. Suitable for structural and decorative use."}</div>
                    <div style={{padding:6,background:"rgba(255,255,255,.02)",borderRadius:4}}><span style={{color:"#e2e0dc",fontWeight:600}}>Best Use:</span> {invDetail.fm==="Granite"?"Exterior facades, monumental sculpture":"Interior decorative, figurative sculpture"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
          {!invDetail&&<div>
          {(()=>{
            const avail=invBlocks.filter(b=>b.ss==="Available");
            const reserved=invBlocks.filter(b=>b.ss==="Reserved");
            const inUse=invBlocks.filter(b=>b.ss==="In Use");
            const defect=invBlocks.filter(b=>b.ss==="Defect");
            return <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
              {[
                ["Total Blocks",invBlocks.length,"#60a5fa"],
                ["Available",avail.length,"#22c55e"],
                ["Reserved",reserved.length,"#f59e0b"],
                ["In Use",inUse.length,"#a78bfa"],
                ["Defect",defect.length,defect.length>0?"#ef4444":"#706b63"],
              ].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
              </div>)}
            </div>;
          })()}
          <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
            <thead><tr style={{background:"rgba(255,255,255,.02)"}}>{["Barcode","Stone","Family","Dims","Weight","Bay","Status","Project","Updated","Actions"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}</tr></thead>
            <tbody>{invBlocks.filter(b=>!orderSearch||[b.sn,b.bc,b.loc,b.ss,b.pj].some(x=>x.toLowerCase().includes(orderSearch.toLowerCase()))).map(b=><tr key={b.bc} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)",cursor:"pointer"}} onClick={()=>setInvDetail(b)}><td style={{padding:"8px 12px",fontFamily:M,fontSize:11,color:"#60a5fa"}}>{b.bc}</td><td style={{padding:"8px 12px",fontWeight:600,color:"#e2e0dc"}}>{b.sn}</td><td style={{padding:"8px 12px"}}><Badge c={FC(b.fm)}>{b.fm}</Badge></td><td style={{padding:"8px 12px",fontFamily:M,fontSize:11}}>{b.dm}</td><td style={{padding:"8px 12px",fontFamily:M,fontSize:11}}>{b.wt}</td><td style={{padding:"8px 12px",fontSize:11}}>{b.loc}</td><td style={{padding:"8px 12px"}}><Badge c={b.ss==="Available"?"#22c55e":b.ss==="Reserved"?"#f59e0b":b.ss==="In Use"?"#60a5fa":"#ef4444"}>{b.ss}</Badge></td><td style={{padding:"8px 12px",fontSize:11,color:b.pj?"#60a5fa":"#4a4540"}}>{b.pj||"-"}</td><td style={{padding:"8px 12px",fontSize:10,color:"#4a4540",fontFamily:M}}>{b.upd||"-"}</td><td style={{padding:"8px 12px"}} onClick={e=>e.stopPropagation()}>{b.ss==="Available"&&<Btn small color="#22c55e" onClick={()=>{setInvDetail(b);setAllocPrj("");}}>Allocate</Btn>}<Btn small color={G}>🛒 Order More</Btn></td></tr>)}</tbody>
          </table>
          </div>
          <div style={{fontSize:11,color:"#4a4540",marginTop:10}}>Click a row to view block details</div>
          </div>}
        </div>}
        {orderModal&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100}} onClick={()=>setOrderModal(null)}>
          <div onClick={e=>e.stopPropagation()} style={{background:"#1a1918",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:20,width:420}}>
            <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc",marginBottom:12}}>Place Order — {orderModal.name}</div>
            <div style={{fontSize:14,color:"#706b63",marginBottom:8}}>{orderModal.fam} · {orderModal.role} · {orderModal.origin} · Est {$(stonePrice(orderModal))}/t</div>
            <Inp label="Associate with Project" value={orderPrj} onChange={setOrderPrj} type="select" opts={prjs.map(p=>`${p.id} — ${p.name}`)}/>
            <Inp label="Quantity (tonnes)" value={orderQty} onChange={setOrderQty} type="number"/>
            <Inp label="Block Dimensions" value={orderDims} onChange={setOrderDims} ph="e.g. 2.0×1.0×0.8m"/>
            <Inp label="Notes" value={orderNotes} onChange={setOrderNotes} ph="Special requirements..."/>
            {orderQty&&<div style={{fontSize:14,color:G,fontFamily:M,padding:"6px 10px",background:"rgba(196,168,130,.04)",borderRadius:4,marginTop:4}}>Est Cost: {$(Number(orderQty)*stonePrice(orderModal))} ({orderQty}t × {$(stonePrice(orderModal))}/t)</div>}
            <div style={{display:"flex",gap:8,marginTop:12}}>
              <Btn small color="#a78bfa" onClick={()=>{setPrjs(ps=>ps.map(p=>{const prjId=orderPrj?orderPrj.split(" — ")[0]:"";if(p.id!==prjId&&prjId)return p;return {...p,log:[{t:ts(),m:"🤖 Market Scan: "+orderModal.name+" — current spot price $"+(stonePrice(orderModal))+ "/t. 3 suppliers contacted. Best offer: "+["Tuscan Stone Group at -6% with 4-week lead","American Stone Supply at -3% with 2-week lead","Alentejo Marble SA at -8% with 6-week lead","Turkish Marble Export at -12% with 5-week lead"][Math.floor(Math.random()*4)]+". Negotiation script drafted.",u:"AI Agent"},{t:ts(),m:"⚠ Risk analysis: "+["Carrara quarry permits under EU review — 15% chance of 3-week delay Q2","Indiana limestone supply stable — Bedford quarries at full capacity","Geopolitical risk LOW for this origin — no trade restrictions pending","Weather risk: monsoon season may delay Indian granite shipments by 2-3 weeks in June-Aug"][Math.floor(Math.random()*4)],u:"Supply Chain Agent"},...(p.log||[])]};}));}}> 🔍 Run Market Scan & Negotiate</Btn>
              <Btn primary onClick={()=>{
                if(orderPrj){
                  const prjId=orderPrj.split(" — ")[0];
                  setPrjs(ps=>ps.map(p=>{
                    if(p.id!==prjId) return p;
                    const ss=p.sd?.stone_sourcing||{};
                    const now=ts();
                    return {...p,sd:{...p.sd,stone_sourcing:{...ss,stoneType:orderModal.name,supplier:orderModal.origin+" supplier",blockDims:orderDims||ss.blockDims,weight:orderQty||ss.weight,shipStatus:"Ordered",orderDate:now,stoneCost:String(Math.round(Number(orderQty||0)*stonePrice(orderModal))),eta:"3-4 weeks"}}};
                  }));
                }
                setOrderModal(null);setOrderPrj("");setOrderQty("");setOrderDims("");setOrderNotes("");
              }}>Place Order</Btn>
              <Btn onClick={()=>{setOrderModal(null);setOrderPrj("");setOrderQty("");setOrderDims("");setOrderNotes("");}}>Cancel</Btn>
            </div>
          </div>
        </div>}
        {rfqModal&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100}} onClick={()=>setRfqModal(null)}>
          <div onClick={e=>e.stopPropagation()} style={{background:"#1a1918",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:20,width:440}}>
            <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc",marginBottom:4}}>Request for Quote — {rfqModal.name}</div>
            <div style={{fontSize:14,color:"#706b63",marginBottom:12}}>{rfqModal.fam} · {rfqModal.role} · {rfqModal.origin} · Est {$(stonePrice(rfqModal))}/t</div>
            <Inp label="Assign to Project" value={rfqPrj} onChange={setRfqPrj} type="select" opts={["(No project — general inquiry)",...prjs.map(p=>`${p.id} — ${p.name}`)]}/>
            <Inp label="Quantity Needed (tonnes)" value={rfqQty} onChange={setRfqQty} type="number"/>
            <Inp label="Block Size Requirements" value={rfqDims} onChange={setRfqDims} ph="e.g. 2.0×1.0×0.8m min block"/>
            <Inp label="Required Timeline" value={rfqTimeline} onChange={setRfqTimeline} type="select" opts={["ASAP","2-4 weeks","1-2 months","3+ months","Flexible"]}/>
            <div style={{marginBottom:8}}><div style={{fontSize:14,color:"#706b63",marginBottom:2,fontWeight:500}}>Special Requirements</div>
            <textarea value={rfqNotes} onChange={e=>setRfqNotes(e.target.value)} placeholder="Veining preferences, color matching needs, structural requirements, max water absorption, minimum compressive strength..." rows={3} style={{width:"100%",fontFamily:M,fontSize:14,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.07)",color:"#e2e0dc",padding:"6px 10px",borderRadius:4,resize:"vertical"}}/></div>
            {rfqQty&&<div style={{fontSize:14,color:G,fontFamily:M,padding:"6px 10px",background:"rgba(196,168,130,.04)",borderRadius:4,marginBottom:8}}>Est Budget: {$(Number(rfqQty)*stonePrice(rfqModal))} · Supplier: {rfqModal.origin}</div>}
            <div style={{display:"flex",gap:8}}>
              <Btn primary onClick={()=>{
                const prjMatch=rfqPrj.match(/^(PRJ-\d+)/);
                if(prjMatch){
                  const pid=prjMatch[1];
                  const newRfq={id:"RFQ-"+String(Date.now()).slice(-3),supplier:rfqModal.origin==="Italy"?"Tuscan Stone Group":rfqModal.origin==="USA"?"Indiana Limestone Co":rfqModal.origin==="Portugal"?"Solancis":rfqModal.origin==="India"?"Delhi Granite Exports":"Int'l Stone Supply",stone:rfqModal.name,qty:rfqQty||"1",price:null,pricePerT:null,date:ts(),status:"pending",notes:(rfqNotes||"")+(rfqTimeline?" | Timeline: "+rfqTimeline:"")+(rfqDims?" | Block: "+rfqDims:"")};
                  setPrjRfqLog(lg=>({...lg,[pid]:[...(lg[pid]||[]),newRfq]}));
                }
                setRfqModal(null);setRfqPrj("");setRfqQty("");setRfqDims("");setRfqNotes("");setRfqTimeline("");
              }}>📧 Send RFQ to Supplier</Btn>
              <Btn onClick={()=>{setRfqModal(null);setRfqPrj("");setRfqQty("");setRfqDims("");setRfqNotes("");setRfqTimeline("");}}>Cancel</Btn>
            </div>
          </div>
        </div>}
        {/* RFQ Management */}
        {stDbTab==="rfqs"&&<div style={{flex:1,overflowY:"auto",padding:"12px 18px"}}>
          {(()=>{
            // Flatten all RFQs across projects
            const allRfqs=[];
            Object.entries(prjRfqLog).forEach(([prjId,rfqs])=>{
              const prj=prjs.find(p=>p.id===prjId);
              (rfqs||[]).forEach(r=>allRfqs.push({...r,prjId,prjName:prj?.name||prjId,client:prj?.client||"—"}));
            });
            const extraRfqs=[
              {id:"RFQ-008",prjId:"PRJ-012",prjName:"RAMSA Facade ×24",client:"Robert A.M. Stern",supplier:"Indiana Limestone Co.",stone:"Indiana Buff",qty:"8.4",price:16800,pricePerT:2000,date:"2026-02-15 09:30",status:"quoted",notes:"Bulk pricing for 24 panels. 6-week lead time."},
              {id:"RFQ-009",prjId:"PRJ-012",prjName:"RAMSA Facade ×24",client:"Robert A.M. Stern",supplier:"Elliott Stone Co.",stone:"Indiana Buff Select",qty:"8.4",price:21000,pricePerT:2500,date:"2026-02-14 11:00",status:"quoted",notes:"Premium select grade. 8-week lead."},
              {id:"RFQ-010",prjId:"PRJ-012",prjName:"RAMSA Facade ×24",client:"Robert A.M. Stern",supplier:"Bybee Stone Co.",stone:"Indiana Standard Buff",qty:"8.4",price:14280,pricePerT:1700,date:"2026-02-16 14:20",status:"pending",notes:"Budget option. Awaiting availability confirmation."},
              {id:"RFQ-011",prjId:"PRJ-018",prjName:"Private Lion Pair",client:"Anonymous",supplier:"Margraf SpA",stone:"Rosso Verona",qty:"1.8",price:3960,pricePerT:2200,date:"2026-02-18 10:15",status:"quoted",notes:"Good quality. Can ship within 3 weeks."},
              {id:"RFQ-012",prjId:"PRJ-018",prjName:"Private Lion Pair",client:"Anonymous",supplier:"Antolini Luigi",stone:"Rosso Verona Select",qty:"1.8",price:5040,pricePerT:2800,date:"2026-02-17 16:00",status:"pending",notes:"Awaiting slab photos for approval."},
              {id:"RFQ-013",prjId:"PRJ-020",prjName:"Carnegie Hall Rosette",client:"Carnegie Hall",supplier:"Jura Marmor GmbH",stone:"Jura Beige",qty:"0.6",price:1080,pricePerT:1800,date:"2026-02-19 08:45",status:"pending",notes:"Heritage match required. Sending samples."},
              {id:"RFQ-014",prjId:"PRJ-007",prjName:"Natl Garden Douglass",client:"NEH",supplier:"Indiana Limestone Co.",stone:"Indiana Buff",qty:"4.2",price:7560,pricePerT:1800,date:"2026-02-12 13:00",status:"accepted",notes:"Government project. Domestic stone required."},
              {id:"RFQ-015",prjId:"PRJ-015",prjName:"Stripe Logo v2",client:"Stripe Inc.",supplier:"Tuscan Stone Group",stone:"Calacatta Gold",qty:"0.3",price:720,pricePerT:2400,date:"2026-01-25 09:00",status:"accepted",notes:"Small qty. Shipped with PRJ-003 order."},
            ];
            const combined=[...allRfqs,...extraRfqs];
            const fil=combined.filter(r=>!orderSearch||[r.prjId,r.prjName,r.supplier,r.stone,r.status,r.client].some(s=>(s||"").toLowerCase().includes(orderSearch.toLowerCase())));
            fil.sort((a,b)=>b.date.localeCompare(a.date));

            const pending=combined.filter(r=>r.status==="pending");
            const quoted=combined.filter(r=>r.status==="quoted");
            const accepted=combined.filter(r=>r.status==="accepted");
            const voided=combined.filter(r=>r.status==="void");
            const totalQuotedVal=quoted.reduce((s,r)=>s+(r.price||0),0);

            const statusC={pending:"#f59e0b",quoted:"#60a5fa",accepted:"#22c55e",void:"#ef4444",expired:"#706b63"};

            return <div>
              {/* KPI strip */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:16}}>
                {[
                  ["Total RFQs",combined.length,"#60a5fa"],
                  ["Pending",pending.length,"#f59e0b"],
                  ["Quoted",quoted.length,"#60a5fa"],
                  ["Accepted",accepted.length,"#22c55e"],
                  ["Quoted Value",$(totalQuotedVal),G],
                ].map(([l,v,c])=><div key={l} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:6,padding:"12px 14px"}}>
                  <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:4}}>{l}</div>
                  <div style={{fontSize:20,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
                </div>)}
              </div>

              {/* Pending action banner */}
              {pending.length>0&&<div style={{padding:"12px 14px",borderRadius:6,background:"rgba(245,158,11,.05)",border:"1px solid rgba(245,158,11,.2)",marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontSize:14}}>⏳</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:600,color:"#f59e0b"}}>{pending.length} RFQ{pending.length!==1?"s":""} awaiting supplier response</div>
                  <div style={{fontSize:14,color:"#a09a92",marginTop:1}}>Oldest: {pending.sort((a,b)=>a.date.localeCompare(b.date))[0]?.supplier} — sent {pending.sort((a,b)=>a.date.localeCompare(b.date))[0]?.date.slice(0,10)}</div>
                </div>
                <Btn small color="#f59e0b">📧 Follow Up All</Btn>
              </div>}

              {/* Comparison groups — group by project for quotes comparison */}
              {(()=>{
                const byPrj={};
                fil.forEach(r=>{if(!byPrj[r.prjId])byPrj[r.prjId]={prjName:r.prjName,client:r.client,rfqs:[]};byPrj[r.prjId].rfqs.push(r);});
                const groups=Object.entries(byPrj).filter(([,g])=>g.rfqs.filter(r=>r.status==="quoted").length>=2);
                if(!groups.length) return null;
                return <div style={{marginBottom:14}}>
                  <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Quote Comparisons</div>
                  {groups.map(([prjId,g])=>{
                    const quotedRfqs=g.rfqs.filter(r=>r.status==="quoted").sort((a,b)=>(a.pricePerT||Infinity)-(b.pricePerT||Infinity));
                    const best=quotedRfqs[0];
                    const savings=quotedRfqs.length>=2?Math.round(quotedRfqs[quotedRfqs.length-1].price-best.price):0;
                    return <div key={prjId} style={{padding:"12px 14px",borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.15)",marginBottom:8}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                        <div>
                          <div style={{fontSize:14,fontWeight:700,color:"#60a5fa",marginBottom:2}}>💡 {g.prjName} <span style={{fontWeight:400,color:"#706b63"}}>— {g.client}</span></div>
                          <div style={{fontSize:14,color:"#a09a92"}}>{quotedRfqs.length} quotes received · Best: <span style={{color:"#22c55e",fontWeight:600}}>{best.supplier} at {$(best.pricePerT)}/t</span>{savings>0&&<span> · Save <span style={{color:"#22c55e",fontWeight:600}}>{$(savings)}</span> vs highest</span>}</div>
                        </div>
                      </div>
                      <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                        {quotedRfqs.map((r,i)=><div key={r.id} style={{padding:"6px 10px",borderRadius:6,background:i===0?"rgba(34,197,94,.08)":"rgba(255,255,255,.03)",border:i===0?"1px solid rgba(34,197,94,.25)":"1px solid rgba(255,255,255,.06)",fontSize:11}}>
                          <div style={{fontWeight:600,color:i===0?"#22c55e":"#e2e0dc"}}>{r.supplier}{i===0&&" ★ Best"}</div>
                          <div style={{color:"#a09a92",fontFamily:M}}>{$(r.price)} · {$(r.pricePerT)}/t · {r.stone}</div>
                        </div>)}
                      </div>
                    </div>;
                  })}
                </div>;
              })()}

              {/* RFQ Table */}
              <div style={{background:"rgba(255,255,255,.01)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,overflow:"hidden"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                  <thead><tr style={{background:"rgba(255,255,255,.02)"}}>
                    {["RFQ","Project","Client","Supplier","Stone","Qty (t)","Price","$/t","Status","Date","Notes"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontSize:10,color:"#706b63",fontWeight:600,textTransform:"uppercase",borderBottom:"1px solid rgba(255,255,255,.06)"}}>{h}</th>)}
                  </tr></thead>
                  <tbody>{fil.map(r=>{
                    const sc=statusC[r.status]||"#706b63";
                    return <tr key={r.id} className="rh" style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                      <td style={{padding:"8px 12px",fontFamily:M,fontSize:11,color:"#60a5fa",fontWeight:600}}>{r.id}</td>
                      <td style={{padding:"8px 12px",cursor:"pointer"}} onClick={()=>{setSelId(r.prjId);setView("lifecycle");setExpS(5);}}><span style={{fontWeight:600,color:"#e2e0dc"}}>{r.prjId}</span><div style={{fontSize:10,color:"#706b63"}}>{r.prjName.slice(0,20)}</div></td>
                      <td style={{padding:"8px 12px",color:"#a09a92",fontSize:14}}>{r.client}</td>
                      <td style={{padding:"8px 12px",color:"#e2e0dc",fontWeight:500}}>{r.supplier}</td>
                      <td style={{padding:"8px 12px",color:G}}>{r.stone}</td>
                      <td style={{padding:"8px 12px",fontFamily:M,color:"#a09a92"}}>{r.qty}</td>
                      <td style={{padding:"8px 12px",fontFamily:M,fontWeight:600,color:r.price?G:"#4a4540"}}>{r.price?$(r.price):"—"}</td>
                      <td style={{padding:"8px 12px",fontFamily:M,color:r.pricePerT?"#a09a92":"#4a4540",fontSize:11}}>{r.pricePerT?$(r.pricePerT):"—"}</td>
                      <td style={{padding:"8px 12px"}}><Badge c={sc}>{r.status}</Badge></td>
                      <td style={{padding:"8px 12px",fontFamily:M,fontSize:11,color:"#706b63"}}>{r.date.slice(0,10)}</td>
                      <td style={{padding:"8px 12px",fontSize:11,color:"#706b63",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}} title={r.notes}>{r.notes}</td>
                    </tr>;
                  })}</tbody>
                </table>
              </div>
              <div style={{fontSize:11,color:"#4a4540",marginTop:10}}>{fil.length} RFQ{fil.length!==1?"s":""} · Click project ID to view in lifecycle</div>
            </div>;
          })()}
        </div>}
        {/* Supplier Directory */}
        {stDbTab==="suppliers"&&(()=>{
          const SUPS=[
            {id:"SUP-001",biz:"La Fenice Marmi S.r.l.",contact:"Andrea Bianchi",title:"Export Director",email:"a.bianchi@lafenicemarmi.it",phone:"+39 0585 844 200",city:"Carrara",origin:"Italy",port:"Marina di Carrara",terms:"FOB / EXW",minOrder:"100 Tons",spec:["Marble","Travertine"],tiers:["Commercial","Mid-Market","Ultra-Luxury"],stoneCount:17,status:"Active",rating:4.7,orders:9,spend:72400,lastOrder:"2026-02-12",lead:"4-6 wk",notes:"Largest supplier by catalog. 17 stone varieties from Carrara basin + travertine. Bulk discount 8% on 100t+. Reliable logistics via Marina di Carrara.",tags:["preferred","marble","travertine","bulk"]},
            {id:"SUP-002",biz:"Acemar Srl",contact:"Marco Rossi",title:"Sales Manager",email:"m.rossi@acemar.it",phone:"+39 0585 632 100",city:"Carrara",origin:"Italy",port:"Marina di Carrara / Venice",terms:"FOB / EXW",minOrder:"1 Piece",spec:["Marble"],tiers:["Commercial","Mid-Market","Ultra-Luxury"],stoneCount:15,status:"Active",rating:4.5,orders:12,spend:86400,lastOrder:"2026-02-10",lead:"4-5 wk",notes:"Flexible minimum orders — ideal for small commissions. 15 marble varieties from white to colored. Multi-port shipping (Carrara, Venice, Genoa). Good for sample blocks.",tags:["preferred","marble","flexible","small-order"]},
            {id:"SUP-003",biz:"Politalia S.r.l.",contact:"Giulia Fontana",title:"International Sales",email:"g.fontana@politalia.it",phone:"+39 0585 790 300",city:"Carrara",origin:"Italy",port:"Marina di Carrara / Trieste",terms:"FOB / EXW",minOrder:"50 m²",spec:["Granite","Marble"],tiers:["Mid-Market","Premium","Ultra-Luxury"],stoneCount:12,status:"Active",rating:4.6,orders:6,spend:48200,lastOrder:"2026-01-28",lead:"5-7 wk",notes:"Strong on premium Italian marble and granite. Calacatta and colored marble specialist. Trieste port option saves 3 days for Adriatic routes. Minimum 50m² per order.",tags:["premium","marble","granite","calacatta"]},
            {id:"SUP-004",biz:"Nan'an Hengbaiyi Stone Industry Co.",contact:"Li Wei",title:"Export Manager",email:"liwei@hengbaiyi.cn",phone:"+86 139 5088 6200",city:"Nan'an",origin:"China",port:"Xiamen",terms:"FOB",minOrder:"10 Pieces",spec:["Marble"],tiers:["Commercial"],stoneCount:10,status:"Active",rating:3.8,orders:3,spend:18600,lastOrder:"2025-12-05",lead:"8-10 wk",notes:"Budget Chinese marble. Green marble specialist. 40-60% below Italian pricing. Quality varies — always request slab photos. Good for volume commercial work.",tags:["budget","marble","china","green-marble"]},
            {id:"SUP-005",biz:"Xiamen Hibo Stone Industry Co.",contact:"Chen Xia",title:"Sales Director",email:"chenxia@hibostone.com",phone:"+86 592 5039 8800",city:"Xiamen",origin:"China",port:"Xiamen",terms:"FOB",minOrder:"180 Pieces",spec:["Travertine"],tiers:["Commercial"],stoneCount:10,status:"Active",rating:3.9,orders:2,spend:12800,lastOrder:"2025-11-20",lead:"8-10 wk",notes:"Chinese travertine specialist. High minimums (180 pcs) but very competitive pricing. Container loads only. Good fill/no-fill options.",tags:["travertine","china","volume","budget"]},
            {id:"SUP-006",biz:"XIAMEN YONGFENG STONE CO.",contact:"Wang Jun",title:"General Manager",email:"wangjun@yongfengstone.com",phone:"+86 592 5683 2100",city:"Xiamen",origin:"China",port:"Xiamen",terms:"FOB",minOrder:"100 m²",spec:["Granite"],tiers:["Commodity"],stoneCount:10,status:"Active",rating:3.7,orders:5,spend:32400,lastOrder:"2026-02-14",lead:"6-8 wk",notes:"Chinese granite commodity supplier. G654, G603, G682 in volume. Absolute Black benchmark product. Container shipping included. Best for paving and cladding stock.",tags:["granite","china","commodity","volume"]},
            {id:"SUP-007",biz:"XIAMEN MRD STONE CO.",contact:"Zhang Ming",title:"VP Sales",email:"zhangming@mrdstone.com",phone:"+86 592 5690 1500",city:"Xiamen",origin:"China",port:"Xiamen",terms:"FOB",minOrder:"450 m²",spec:["Granite"],tiers:["Commodity"],stoneCount:10,status:"Active",rating:3.6,orders:2,spend:14280,lastOrder:"2026-01-08",lead:"6-8 wk",notes:"Large-volume Chinese granite. Very high minimums (450m²). Best pricing in category but inflexible on order sizes. Good for large facade projects only.",tags:["granite","china","commodity","large-order"]},
            {id:"SUP-008",biz:"XIAMEN FORTUNE EAST STONE",contact:"Liu Feng",title:"Export Director",email:"liufeng@fortuneeast.com",phone:"+86 592 5166 3200",city:"Xiamen",origin:"China",port:"Xiamen",terms:"FOB",minOrder:"100 m²",spec:["Granite"],tiers:["Commodity"],stoneCount:10,status:"Active",rating:3.8,orders:3,spend:22500,lastOrder:"2025-12-15",lead:"6-8 wk",notes:"Reliable Chinese granite. Mid-range minimums. G654 Dark Grey is their best product. Quality control above average for Chinese suppliers. Photo verification standard.",tags:["granite","china","reliable"]},
            {id:"SUP-009",biz:"STEFANO RAGNOLINI",contact:"Stefano Ragnolini",title:"Owner",email:"info@ragnolinimarmi.it",phone:"+39 0584 768 450",city:"Pietrasanta",origin:"Italy",port:"Livorno",terms:"FOB / EXW",minOrder:"1 Ton",spec:["Granite","Marble"],tiers:["Commercial"],stoneCount:7,status:"Active",rating:4.3,orders:4,spend:28900,lastOrder:"2026-02-05",lead:"3-5 wk",notes:"Family artisan supplier in Pietrasanta. Small but curated stock of marble and granite. Owner-operated — personal quality oversight. Good for specialty cuts and custom dimensions.",tags:["artisan","marble","granite","custom","family"]},
            {id:"SUP-010",biz:"Santini Roberto",contact:"Roberto Santini",title:"Proprietor",email:"r.santini@santinimarmi.it",phone:"+39 055 831 200",city:"Florence",origin:"Italy",port:"Livorno / Marina di Carrara",terms:"FOB / EXW",minOrder:"1 Piece",spec:["Marble"],tiers:["Commercial","Mid-Market","Ultra-Luxury"],stoneCount:6,status:"Active",rating:4.4,orders:3,spend:18900,lastOrder:"2026-02-18",lead:"4-6 wk",notes:"Florentine marble specialist. Unique access to Rosso Verona, Viola, and rare colored marbles. Heritage expertise — worked on Duomo restoration. Minimum 1 piece — ideal for art commissions.",tags:["marble","colored","heritage","florence","art"]},
            {id:"SUP-011",biz:"LAZZARINI GIUSEPPE SRL",contact:"Giuseppe Lazzarini",title:"Managing Director",email:"g.lazzarini@lazzarinimarmi.it",phone:"+39 0585 766 100",city:"Carrara",origin:"Italy",port:"Genoa / Livorno",terms:"FOB / EXW",minOrder:"24 Tons",spec:["Limestone","Marble"],tiers:["Mid-Market"],stoneCount:6,status:"Active",rating:4.2,orders:5,spend:34600,lastOrder:"2026-01-22",lead:"4-5 wk",notes:"Marble and limestone. Good mid-market pricing. 24t minimum keeps costs low. Genoa port option saves on trans-Atlantic shipping. Reliable delivery record.",tags:["marble","limestone","mid-market","genoa"]},
            {id:"SUP-012",biz:"Goldenblock s.r.l.",contact:"Davide Conti",title:"Sales Manager",email:"d.conti@goldenblock.it",phone:"+39 0585 844 500",city:"Carrara",origin:"Italy",port:"Livorno",terms:"FOB / EXW",minOrder:"1 Piece",spec:["Marble","Travertine"],tiers:["Commercial","Mid-Market"],stoneCount:5,status:"Active",rating:4.1,orders:3,spend:15200,lastOrder:"2026-01-15",lead:"3-5 wk",notes:"Good entry-level Italian supplier. Marble and travertine. Flexible minimums. Not the cheapest but fast turnaround (3 weeks possible for stock items).",tags:["marble","travertine","flexible","fast"]},
            {id:"SUP-013",biz:"BB Stone S.R.L.S",contact:"Beatrice Bellini",title:"Owner",email:"b.bellini@bbstone.it",phone:"+39 0585 790 800",city:"Carrara",origin:"Italy",port:"Marina di Carrara",terms:"FOB / EXW",minOrder:"—",spec:["Marble"],tiers:["Mid-Market","Ultra-Luxury"],stoneCount:5,status:"Active",rating:4.8,orders:2,spend:12800,lastOrder:"2026-02-17",lead:"5-8 wk",notes:"Boutique Carrara marble. Specializes in Calacatta and premium whites. Hand-selects blocks at quarry. No fixed minimum — works per-project. Best for museum-grade commissions.",tags:["ultra-premium","marble","calacatta","boutique","museum-grade"]},
            {id:"SUP-014",biz:"Monarch Global",contact:"Tariq Al-Rashid",title:"International Trade",email:"t.alrashid@monarchglobal.com",phone:"+39 348 555 0200",city:"Carrara",origin:"Italy",port:"Marina di Carrara / Trieste",terms:"FOB / EXW",minOrder:"10 Tons",spec:["Marble"],tiers:["Commercial","Premium","Ultra-Luxury"],stoneCount:4,status:"Active",rating:4.0,orders:4,spend:26800,lastOrder:"2026-02-09",lead:"4-6 wk",notes:"Trading house — sources from multiple quarries. Good for comparison pricing. Can arrange split shipments from different origins. 10t minimum is manageable for most projects.",tags:["trader","marble","multi-source"]},
            {id:"SUP-015",biz:"Di Nunzio Marmi",contact:"Francesco Di Nunzio",title:"General Manager",email:"f.dinunzio@dinunziomarmi.it",phone:"+39 0585 844 700",city:"Carrara",origin:"Italy",port:"Livorno",terms:"FOB / EXW",minOrder:"25 Tons",spec:["Marble"],tiers:["Mid-Market"],stoneCount:4,status:"Active",rating:4.3,orders:3,spend:19500,lastOrder:"2026-01-20",lead:"4-5 wk",notes:"Solid mid-market marble. Arabescato and Breccia specialist. 25t minimum. Consistent block sizing for architectural panels. Family business, third generation.",tags:["marble","mid-market","arabescato","family"]},
            {id:"SUP-016",biz:"Euro Mas S.r.l.",contact:"Elena Marchetti",title:"Export Manager",email:"e.marchetti@euromas.it",phone:"+39 0585 632 600",city:"Carrara",origin:"Italy",port:"Genoa / Marina di Carrara",terms:"FOB / EXW",minOrder:"40 Tons",spec:["Marble"],tiers:["Mid-Market","Premium"],stoneCount:3,status:"Active",rating:4.5,orders:2,spend:16400,lastOrder:"2025-11-30",lead:"5-7 wk",notes:"Premium Italian marble. Nero Marquina and dark marble specialist. High minimums (40t) but excellent quality control. Genoa port preferred.",tags:["marble","premium","nero-marquina","dark"]},
            {id:"SUP-017",biz:"MGI - Marmi e Graniti d'Italia",contact:"Paolo Galli",title:"Chief Commercial Officer",email:"p.galli@mgimarmi.it",phone:"+39 0585 790 100",city:"Carrara",origin:"Italy",port:"Marina di Carrara",terms:"FOB / EXW",minOrder:"1 Piece",spec:["Marble"],tiers:["Ultra-Luxury"],stoneCount:3,status:"Active",rating:4.9,orders:1,spend:8200,lastOrder:"2026-02-08",lead:"6-10 wk",notes:"Ultra-luxury only. Calacatta Borghini, Statuario Extra, Violet Marble. Museum-grade selection. Block-by-block approval process. Longest lead times but unmatched quality.",tags:["ultra-luxury","marble","museum-grade","calacatta-borghini"]},
            {id:"SUP-018",biz:"Canova Marmi",contact:"Silvia Canova",title:"Sales Director",email:"s.canova@canovamarmi.it",phone:"+39 0585 766 400",city:"Carrara",origin:"Italy",port:"Livorno / Marina di Carrara",terms:"FOB / EXW",minOrder:"1 Box",spec:["Marble"],tiers:["Mid-Market","Premium"],stoneCount:3,status:"Active",rating:4.4,orders:3,spend:21600,lastOrder:"2026-01-25",lead:"4-6 wk",notes:"Named after the sculptor — fitting for our work. Carrara whites specialist. Can supply from 1 box (sample) to full container. Good for prototyping before committing to large orders.",tags:["marble","carrara","sample-friendly","premium"]},
            {id:"SUP-019",biz:"Alba Ventura Srl",contact:"Matteo Ventura",title:"Managing Partner",email:"m.ventura@albaventura.it",phone:"+39 0585 844 900",city:"Carrara",origin:"Italy",port:"Livorno / Marina di Carrara",terms:"FOB / EXW",minOrder:"20 Tons",spec:["Marble"],tiers:["Commercial","Mid-Market"],stoneCount:3,status:"Active",rating:4.1,orders:2,spend:14200,lastOrder:"2025-12-10",lead:"4-5 wk",notes:"Solid commercial marble. White, beige, and black varieties. 20t minimum keeps pricing competitive. Good for repeat architectural work.",tags:["marble","commercial","architectural"]},
            {id:"SUP-020",biz:"P-Marble",contact:"Ahmed Hosseini",title:"Director",email:"ahmed@p-marble.com",phone:"+39 0585 631 200",city:"Carrara",origin:"Italy",port:"Marina di Carrara",terms:"FOB / EXW",minOrder:"20 Tons",spec:["Marble"],tiers:["Commercial"],stoneCount:3,status:"Active",rating:3.9,orders:2,spend:11800,lastOrder:"2025-10-15",lead:"5-7 wk",notes:"Budget Italian marble trading house. Sources from smaller quarries. Price-competitive but quality requires inspection. 20t minimum.",tags:["marble","budget","trader"]},
            {id:"SUP-021",biz:"Dial Marble srl",contact:"Marco Dialini",title:"Owner",email:"m.dialini@dialmarble.it",phone:"+39 0585 790 600",city:"Carrara",origin:"Italy",port:"Livorno / Marina di Carrara",terms:"FOB / EXW",minOrder:"1 Piece",spec:["Marble"],tiers:["Commercial","Mid-Market"],stoneCount:3,status:"Active",rating:4.0,orders:1,spend:5600,lastOrder:"2025-09-18",lead:"3-5 wk",notes:"Small Carrara operation. Black and white marble. Very low minimum (1 piece). Good for urgent small orders when stock is available. Check availability first.",tags:["marble","small-order","flexible"]},
            {id:"SUP-022",biz:"Persiano Stone",contact:"Ali Mohammadi",title:"Export Manager",email:"ali@persianostone.com",phone:"+98 31 3668 1234",city:"Isfahan",origin:"Iran",port:"Bandar Abbas",terms:"FOB",minOrder:"20 Tons",spec:["Travertine","Marble","Onyx"],tiers:["Mid-Market"],stoneCount:1,status:"Inactive",rating:3.6,orders:1,spend:4200,lastOrder:"2025-08-10",lead:"8-12 wk",notes:"Iranian stone — excellent travertine. ⚠ SANCTIONS RISK: verify OFAC compliance before every order. Payment routing complex. Last order had customs delays. Currently inactive.",tags:["travertine","onyx","iran","sanctions-risk"]},
          ];
          const statusC={"Active":"#22c55e","Prospect":"#60a5fa","Inactive":"#706b63"};
          const filtSup=SUPS.filter(s=>!orderSearch||[s.biz,s.contact,s.city,s.origin,...s.spec,...s.tags,s.status].some(v=>(v||"").toLowerCase().includes(orderSearch.toLowerCase())));
          return <div style={{flex:1,display:"flex",overflow:"hidden"}}>
            {/* Left list */}
            <div style={{width:340,flexShrink:0,borderRight:"1px solid rgba(255,255,255,.06)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
              <div style={{padding:"10px 12px",borderBottom:"1px solid rgba(255,255,255,.06)",flexShrink:0}}>
                <div style={{fontSize:10,color:"#4a4540",fontFamily:M}}>{filtSup.length} suppliers · {SUPS.filter(s=>s.status==="Active").length} active · {SUPS.reduce((s,x)=>s+x.stoneCount,0)} stones in catalog</div>
              </div>
              <div style={{flex:1,overflowY:"auto",padding:"6px 10px"}}>
                {filtSup.map(s=><div key={s.id} onClick={()=>setSelSupplier(s)} style={{padding:"9px 10px",marginBottom:3,borderRadius:6,cursor:"pointer",background:selSupplier?.id===s.id?`${G}0D`:"transparent",border:selSupplier?.id===s.id?`1px solid ${G}22`:"1px solid transparent"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.biz}</div>
                      <div style={{fontSize:14,color:"#706b63"}}>{s.contact} · {s.city}</div>
                      <div style={{fontSize:14,color:"#a09a92"}}>{s.origin} · {s.stoneCount} stones</div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0,marginLeft:8}}>
                      <div style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:(statusC[s.status]||"#706b63")+"20",color:statusC[s.status]||"#706b63",fontWeight:600}}>{s.status}</div>
                      {s.rating&&<div style={{fontSize:11,color:G,fontFamily:M,marginTop:3}}>★ {s.rating}</div>}
                    </div>
                  </div>
                  <div style={{display:"flex",gap:3,marginTop:4,flexWrap:"wrap"}}>
                    {s.spec.map(sp=><span key={sp} style={{fontSize:10,padding:"2px 6px",borderRadius:4,background:"rgba(255,255,255,.04)",color:"#706b63"}}>{sp}</span>)}
                  </div>
                </div>)}
              </div>
            </div>
            {/* Right detail */}
            <div style={{flex:1,overflowY:"auto",padding:"24px 28px"}}>
              {selSupplier?<div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
                  <div>
                    <div style={{width:48,height:48,borderRadius:"50%",background:`${G}20`,border:`2px solid ${G}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,marginBottom:10}}>🏭</div>
                    <div style={{fontSize:28,fontWeight:700,color:"#e2e0dc",fontFamily:D}}>{selSupplier.biz}</div>
                    <div style={{fontSize:14,color:"#a09a92",marginTop:2}}>{selSupplier.contact} · {selSupplier.title}</div>
                    <div style={{fontSize:14,color:"#706b63",marginTop:2}}>{selSupplier.city}, {selSupplier.origin}</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{display:"flex",gap:6,justifyContent:"flex-end",marginBottom:8}}>
                      <span style={{fontSize:10,padding:"3px 8px",borderRadius:4,background:(statusC[selSupplier.status])+"20",border:"1px solid "+(statusC[selSupplier.status])+"40",color:statusC[selSupplier.status],fontWeight:600}}>{selSupplier.status}</span>
                    </div>
                    {selSupplier.rating&&<div style={{fontSize:28,fontWeight:700,color:G,fontFamily:M}}>★ {selSupplier.rating}<span style={{fontSize:12,color:"#706b63"}}>/5</span></div>}
                  </div>
                </div>
                {/* Contact grid */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
                  {[["📧 Email",selSupplier.email,"#60a5fa"],["📞 Phone",selSupplier.phone,"#22c55e"],["🚢 Port",selSupplier.port,"#a09a92"],["🚚 Lead Time",selSupplier.lead,"#f59e0b"],["📋 Terms",selSupplier.terms,"#a09a92"],["📦 Min Order",selSupplier.minOrder,"#a78bfa"]].map(([l,v,c])=><div key={l} style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                    <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:3}}>{l}</div>
                    <div style={{fontSize:14,color:c,fontFamily:l.includes("Email")||l.includes("Phone")?M:S}}>{v}</div>
                  </div>)}
                </div>
                {/* Order history KPIs */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:16}}>
                  {[["Orders",selSupplier.orders,"#60a5fa"],["Total Spend",$(selSupplier.spend),G],["Stones",selSupplier.stoneCount,"#a78bfa"],["Last Order",selSupplier.lastOrder||"Never","#706b63"]].map(([l,v,c])=><div key={l} style={{padding:"10px 12px",borderRadius:6,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                    <div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:3}}>{l}</div>
                    <div style={{fontSize:18,fontWeight:700,color:c,fontFamily:M}}>{v}</div>
                  </div>)}
                </div>
                {/* Specialities */}
                <div style={{marginBottom:16}}>
                  <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Specialities & Tiers</div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    {selSupplier.spec.map(s=><span key={s} style={{padding:"4px 10px",borderRadius:4,background:"rgba(196,168,130,.08)",border:"1px solid rgba(196,168,130,.2)",color:G,fontSize:12,fontWeight:600}}>{s}</span>)}
                    {selSupplier.tiers.map(t=><span key={t} style={{padding:"4px 10px",borderRadius:4,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.08)",color:"#a09a92",fontSize:12}}>{t}</span>)}
                  </div>
                </div>
                {/* Notes */}
                <div style={{marginBottom:16,padding:"14px 16px",borderRadius:8,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                  <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:6}}>Notes</div>
                  <div style={{fontSize:14,color:"#a09a92",lineHeight:1.7}}>{selSupplier.notes}</div>
                </div>
                {/* Tags */}
                <div style={{marginBottom:20}}>
                  <div style={{fontSize:12,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".5px",marginBottom:8}}>Tags</div>
                  <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                    {selSupplier.tags.map(t=><span key={t} style={{padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.06)",color:"#706b63",fontSize:11}}>{t}</span>)}
                  </div>
                </div>
                {/* Actions */}
                <div style={{display:"flex",gap:8}}>
                  <Btn small color={G}>📧 Send RFQ</Btn>
                  <Btn small color="#60a5fa">📞 Log Call</Btn>
                  <Btn small color="#a09a92">📝 Add Note</Btn>
                </div>
              </div>:<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:8,color:"#4a4540"}}>
                <div style={{fontSize:28,opacity:.3}}>🏭</div>
                <div style={{fontSize:14}}>Select a supplier to view details</div>
              </div>}
            </div>
          </div>;
        })()}
      </div>}
  </>);
}
