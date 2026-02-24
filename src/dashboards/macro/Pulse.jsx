import React from "react";

export default function MacroPulseView({ ctx }) {
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
      {view==="macro"&&(()=>{
        const TFS={
          "1M":{label:"1M",months:1},"6M":{label:"6M",months:6},"1Y":{label:"1Y",months:12},"2Y":{label:"2Y",months:24},"5Y":{label:"5Y",months:60}
        };
        const stoneAll=[{m:"Jan 19",carrara:1220,indiana:370,black:1720,turkish:580},{m:"Jul 19",carrara:1240,indiana:375,black:1740,turkish:585},{m:"Jan 20",carrara:1170,indiana:365,black:1700,turkish:560},{m:"Jul 20",carrara:1200,indiana:368,black:1710,turkish:565},{m:"Jan 21",carrara:1300,indiana:378,black:1780,turkish:590},{m:"Jul 21",carrara:1400,indiana:388,black:1850,turkish:620},{m:"Jan 22",carrara:1520,indiana:400,black:1900,turkish:660},{m:"Jul 22",carrara:1580,indiana:408,black:1940,turkish:680},{m:"Jan 23",carrara:1600,indiana:405,black:1950,turkish:670},{m:"Jul 23",carrara:1640,indiana:410,black:1970,turkish:665},{m:"Jan 24",carrara:1680,indiana:412,black:2000,turkish:660},{m:"Apr 24",carrara:1700,indiana:414,black:2010,turkish:658},{m:"Jul 24",carrara:1720,indiana:415,black:2030,turkish:660},{m:"Sep 24",carrara:1740,indiana:416,black:2040,turkish:662},{m:"Nov 24",carrara:1760,indiana:417,black:2050,turkish:665},{m:"Jan 25",carrara:1780,indiana:418,black:2060,turkish:668},{m:"Mar 25",carrara:1800,indiana:419,black:2070,turkish:670},{m:"May 25",carrara:1810,indiana:419,black:2075,turkish:670},{m:"Jul 25",carrara:1820,indiana:420,black:2080,turkish:671},{m:"Sep 25",carrara:1830,indiana:420,black:2085,turkish:672},{m:"Nov 25",carrara:1840,indiana:420,black:2090,turkish:672},{m:"Jan 26",carrara:1845,indiana:420,black:2095,turkish:672},{m:"Feb 26",carrara:1850,indiana:420,black:2100,turkish:672}];
        const oceanAll=[{m:"Jan 21",it:2100,tr:1800,br:2400},{m:"Jul 21",it:2800,tr:2200,br:3000},{m:"Jan 22",it:4200,tr:3500,br:4600},{m:"Jul 22",it:5100,tr:4200,br:5400},{m:"Jan 23",it:3800,tr:3100,br:4000},{m:"Jul 23",it:3200,tr:2700,br:3300},{m:"Jan 24",it:3100,tr:2700,br:3300},{m:"Apr 24",it:3150,tr:2750,br:3350},{m:"Jul 24",it:3200,tr:2800,br:3400},{m:"Sep 24",it:3350,tr:2900,br:3500},{m:"Nov 24",it:3500,tr:2950,br:3450},{m:"Jan 25",it:3550,tr:2900,br:3500},{m:"Mar 25",it:3600,tr:2950,br:3500},{m:"May 25",it:3700,tr:3000,br:3550},{m:"Jul 25",it:3900,tr:3200,br:3600},{m:"Sep 25",it:3750,tr:3050,br:3450},{m:"Nov 25",it:3700,tr:2950,br:3400},{m:"Jan 26",it:3900,tr:3100,br:3600},{m:"Feb 26",it:3850,tr:3050,br:3550}];
        const fxAll=[{m:"Jan 21",eur:1.22,inr:0.0137},{m:"Jul 21",eur:1.18,inr:0.0134},{m:"Jan 22",eur:1.13,inr:0.0133},{m:"Jul 22",eur:1.02,inr:0.0126},{m:"Jan 23",eur:1.08,inr:0.0121},{m:"Jul 23",eur:1.10,inr:0.0121},{m:"Jan 24",eur:1.09,inr:0.0120},{m:"Apr 24",eur:1.07,inr:0.0120},{m:"Jul 24",eur:1.08,inr:0.0119},{m:"Sep 24",eur:1.10,inr:0.0119},{m:"Nov 24",eur:1.06,inr:0.0119},{m:"Jan 25",eur:1.04,inr:0.0118},{m:"Mar 25",eur:1.05,inr:0.0118},{m:"May 25",eur:1.06,inr:0.0117},{m:"Jul 25",eur:1.07,inr:0.0117},{m:"Sep 25",eur:1.06,inr:0.0116},{m:"Nov 25",eur:1.05,inr:0.0116},{m:"Jan 26",eur:1.04,inr:0.0115},{m:"Feb 26",eur:1.04,inr:0.0115}];
        const bunkerAll=[{m:"Jan 22",brent:86,bunker:680},{m:"Jul 22",brent:110,bunker:920},{m:"Jan 23",brent:82,bunker:640},{m:"Jul 23",brent:78,bunker:600},{m:"Jan 24",brent:76,bunker:580},{m:"Jul 24",brent:82,bunker:620},{m:"Sep 24",brent:74,bunker:570},{m:"Nov 24",brent:73,bunker:560},{m:"Jan 25",brent:76,bunker:580},{m:"Mar 25",brent:72,bunker:555},{m:"May 25",brent:68,bunker:530},{m:"Jul 25",brent:74,bunker:565},{m:"Sep 25",brent:71,bunker:545},{m:"Nov 25",brent:69,bunker:535},{m:"Jan 26",brent:72,bunker:555},{m:"Feb 26",brent:73,bunker:560}];
        const domesticAll=[{m:"Jan 22",flatbed:2.80,ltl:1.70,ups:10.5,fedex:11.2},{m:"Jul 22",flatbed:3.10,ltl:1.90,ups:11.2,fedex:11.8},{m:"Jan 23",flatbed:3.20,ltl:1.95,ups:11.5,fedex:12.0},{m:"Jul 23",flatbed:3.25,ltl:2.00,ups:11.8,fedex:12.5},{m:"Jan 24",flatbed:3.30,ltl:2.05,ups:12.0,fedex:12.8},{m:"Jul 24",flatbed:3.40,ltl:2.10,ups:12.5,fedex:13.2},{m:"Sep 24",flatbed:3.45,ltl:2.12,ups:12.6,fedex:13.3},{m:"Nov 24",flatbed:3.50,ltl:2.15,ups:12.8,fedex:13.5},{m:"Jan 25",flatbed:3.55,ltl:2.20,ups:13.0,fedex:13.8},{m:"Mar 25",flatbed:3.60,ltl:2.25,ups:13.2,fedex:14.0},{m:"May 25",flatbed:3.70,ltl:2.30,ups:13.5,fedex:14.2},{m:"Jul 25",flatbed:3.75,ltl:2.32,ups:13.6,fedex:14.3},{m:"Sep 25",flatbed:3.78,ltl:2.35,ups:13.8,fedex:14.5},{m:"Nov 25",flatbed:3.80,ltl:2.38,ups:14.0,fedex:14.8},{m:"Jan 26",flatbed:3.85,ltl:2.40,ups:14.2,fedex:15.0},{m:"Feb 26",flatbed:3.85,ltl:2.40,ups:14.3,fedex:15.1}];
        const tf=TFS[macroTF]||TFS["1Y"];
        const slice=(arr)=>{const n=Math.max(2,Math.ceil(tf.months/1.5));return arr.slice(-n);};
        const TFB=({})=><div style={{display:"flex",gap:2,marginBottom:8}}>{Object.keys(TFS).map(k=><button key={k} onClick={()=>setMacroTF(k)} style={{fontSize:14,padding:"2px 8px",borderRadius:6,border:macroTF===k?"1px solid "+G+"40":"1px solid transparent",background:macroTF===k?G+"14":"transparent",color:macroTF===k?G:"#706b63",cursor:"pointer",fontFamily:S}}>{k}</button>)}</div>;
        return <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div style={{padding:"0 18px",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",justifyContent:"space-between",alignItems:"stretch",height:44,flexShrink:0}}>
          <div style={{display:"flex",gap:0}}>
            
          </div>
          {macroTab==="market"&&<div style={{display:"flex",gap:6,alignItems:"center"}}>
            <TFB/>
          </div>}
        </div>
        {macroTab==="impact"&&(()=>{
          // Project × Stone cross-reference
          const IMPACT_PRJS=[
            {id:"PRJ-001",name:"Villard Houses Panel #4",client:"Lotte NYC Hotel",stone:"Bianco Carrara C",family:"carrara",tonnes:3.5,quotedPrice:1780,currentPrice:1850,ordered:true,status:"active"},
            {id:"PRJ-003",name:"Benedictine Capitals ×12",client:"St. Patrick's Cathedral",stone:"Statuario Carrara",family:"carrara",tonnes:8.2,quotedPrice:1820,currentPrice:1850,ordered:true,status:"active"},
            {id:"PRJ-007",name:"Natl Garden Douglass",client:"Nat. Garden Foundation",stone:"Bianco Carrara C",family:"carrara",tonnes:12.0,quotedPrice:1760,currentPrice:1850,ordered:false,status:"active"},
            {id:"PRJ-012",name:"RAMSA Facade ×24",client:"RAMSA Partners",stone:"Statuario Carrara",family:"carrara",tonnes:28.4,quotedPrice:1820,currentPrice:1850,ordered:true,status:"active"},
            {id:"PRJ-018",name:"Private Lion Pair",client:"Private Collector",stone:"Rosa Perlino Asiago",family:"other",tonnes:4.1,quotedPrice:980,currentPrice:1020,ordered:false,status:"active"},
            {id:"PRJ-020",name:"Carnegie Hall Rosette",client:"Carnegie Hall",stone:"Serpeggiante",family:"other",tonnes:2.8,quotedPrice:890,currentPrice:890,ordered:false,status:"active"},
          ];
          const FX=[
            {pair:"EUR/USD",atQuote:1.082,now:1.071,label:"Italian marble imports",change:-1.0},
            {pair:"USD/INR",atQuote:83.2,now:83.7,label:"Indian granite",change:+0.6},
            {pair:"USD/EUR",atQuote:0.924,now:0.934,label:"European stone exports",change:+1.1},
          ];
          const FREIGHT=[
            {id:"PRJ-003",desc:"Statuario Carrara — Carrara→NYC",surchargeAtOrder:18,surchargeNow:22,weight:"8.2t",impact:"+$1,640"},
            {id:"PRJ-012",desc:"Statuario Carrara — Carrara→NYC",surchargeAtOrder:18,surchargeNow:22,weight:"28.4t",impact:"+$5,680"},
            {id:"PRJ-001",desc:"Bianco Carrara C — Delivered",surchargeAtOrder:16,surchargeNow:22,weight:"3.5t",impact:"Absorbed"},
          ];
          const T=({c,children})=><td style={{padding:"8px 12px",borderBottom:"1px solid rgba(255,255,255,.04)",color:c||"#e2e0dc",fontSize:13,fontFamily:S}}>{children}</td>;
          const TH=({children})=><th style={{padding:"6px 10px",fontSize:10,fontWeight:700,color:"#706b63",textTransform:"uppercase",letterSpacing:".8px",textAlign:"left",borderBottom:"1px solid rgba(255,255,255,.08)"}}>{children}</th>;
          return <div style={{flex:1,overflowY:"auto",padding:"16px 20px"}}>

            {/* ── Cost Exposure ── */}
            <div style={{marginBottom:24}}>
              <div style={{fontSize:11,fontWeight:700,color:"#c4a882",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Cost Exposure</div>
              <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:8,overflow:"hidden"}}>
                <table style={{width:"100%",borderCollapse:"collapse"}}>
                  <thead><tr><TH>Project</TH><TH>Stone</TH><TH>Tonnes</TH><TH>Quoted $/t</TH><TH>Market $/t</TH><TH>Variance</TH><TH>Impact</TH><TH>Status</TH></tr></thead>
                  <tbody>
                    {IMPACT_PRJS.map(p=>{
                      const diff=p.currentPrice-p.quotedPrice;
                      const impact=Math.round(diff*p.tonnes);
                      const pct=Math.round(diff/p.quotedPrice*100);
                      const col=diff>50?"#ef4444":diff>0?"#f59e0b":"#22c55e";
                      const impactStr=impact===0?"—":impact>0?"+$"+impact.toLocaleString():"-$"+Math.abs(impact).toLocaleString();
                      return <tr key={p.id} style={{background:"transparent"}}>
                        <T><span style={{color:"#c4a882",fontFamily:M,fontSize:11}}>{p.id}</span><br/><span style={{fontSize:12,color:"#a09a92"}}>{p.name.slice(0,22)}</span></T>
                        <T>{p.stone}</T>
                        <T c="#a09a92">{p.tonnes}t</T>
                        <T c="#a09a92">${p.quotedPrice.toLocaleString()}</T>
                        <T c="#e2e0dc">${p.currentPrice.toLocaleString()}</T>
                        <T c={col}>{diff===0?"—":(diff>0?"+":"")+diff+"/t  ("+pct+"%)"}</T>
                        <T c={col} style={{fontWeight:600}}>{impactStr}</T>
                        <T><span style={{fontSize:11,padding:"2px 7px",borderRadius:4,background:p.ordered?"rgba(34,197,94,.1)":"rgba(245,158,11,.1)",color:p.ordered?"#22c55e":"#f59e0b"}}>{p.ordered?"Ordered":"Unordered"}</span></T>
                      </tr>;
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── Freight Alerts ── */}
            <div style={{marginBottom:24}}>
              <div style={{fontSize:11,fontWeight:700,color:"#c4a882",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>Freight Alerts — Red Sea Surcharge</div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {FREIGHT.map(f=>{
                  const up=f.surchargeNow>f.surchargeAtOrder;
                  const col=f.impact==="Absorbed"?"#64748b":up?"#f59e0b":"#22c55e";
                  return <div key={f.id} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:8,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                    <span style={{fontSize:11,color:"#c4a882",fontFamily:M,flexShrink:0}}>{f.id}</span>
                    <span style={{flex:1,fontSize:13,color:"#e2e0dc"}}>{f.desc}</span>
                    <span style={{fontSize:12,color:"#706b63"}}>{f.weight}</span>
                    <span style={{fontSize:12,color:"#a09a92"}}>Surcharge: {f.surchargeAtOrder}% → <span style={{color:up?"#f59e0b":"#22c55e"}}>{f.surchargeNow}%</span></span>
                    <span style={{fontSize:13,fontWeight:600,color:col,minWidth:90,textAlign:"right"}}>{f.impact}</span>
                  </div>;
                })}
              </div>
            </div>

            {/* ── FX Watch (collapsed by default) ── */}
            <div>
              <div style={{fontSize:11,fontWeight:700,color:"#c4a882",textTransform:"uppercase",letterSpacing:"1px",marginBottom:12}}>FX Watch — Italian Stone Orders</div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {FX.map(f=>{
                  const move=((f.now-f.atQuote)/f.atQuote*100).toFixed(1);
                  const flag=Math.abs(move)>2;
                  const col=flag?(f.change<0?"#22c55e":"#f59e0b"):"#64748b";
                  return <div key={f.pair} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:8,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
                    <span style={{fontSize:13,fontWeight:600,color:"#e2e0dc",fontFamily:M,minWidth:90}}>{f.pair}</span>
                    <span style={{flex:1,fontSize:12,color:"#a09a92"}}>{f.label}</span>
                    <span style={{fontSize:12,color:"#706b63"}}>At quote: {f.atQuote}</span>
                    <span style={{fontSize:12,color:"#706b63"}}>Now: <span style={{color:"#e2e0dc"}}>{f.now}</span></span>
                    <span style={{fontSize:12,fontWeight:600,color:col,minWidth:80,textAlign:"right"}}>{move>0?"+":""}{move}%{flag?" ⚠":""}</span>
                  </div>;
                })}
              </div>
            </div>

          </div>;
        })()}
        {macroTab==="market"&&<div style={{flex:1,overflowY:"auto",padding:"12px 18px"}}>


          <div style={{display:"grid",gridTemplateColumns:"repeat(8,1fr)",gap:6,marginBottom:16}}>
            <KPI l="Carrara C $/t" v="$1,850" c="#ef4444"/><KPI l="Indiana $/t" v="$420" c="#22c55e"/><KPI l="Abs Black $/t" v="$2,100" c="#f59e0b"/><KPI l="40ft Container" v="$3,850" c="#60a5fa"/><KPI l="EUR/USD" v="1.04" c="#f59e0b"/><KPI l="INR/USD" v="0.0115" c="#a09a92"/><KPI l="Bunker $/t" v="$560" c={G}/><KPI l="PPI Stone YoY" v="+3.4%" c="#ef4444"/>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6,marginBottom:16}}>
            <div style={{padding:10,borderRadius:6,background:"rgba(239,68,68,.04)",border:"1px solid rgba(239,68,68,.1)",textAlign:"center"}}><div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",marginBottom:2}}>Quarry Util — Italy</div><div style={{fontSize:22,fontWeight:700,color:"#ef4444",fontFamily:M}}>89%</div><div style={{fontSize:10,color:"#ef4444"}}>↑ High — price pressure</div></div>
            <div style={{padding:10,borderRadius:6,background:"rgba(34,197,94,.04)",border:"1px solid rgba(34,197,94,.1)",textAlign:"center"}}><div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",marginBottom:2}}>Quarry Util — USA</div><div style={{fontSize:22,fontWeight:700,color:"#22c55e",fontFamily:M}}>72%</div><div style={{fontSize:10,color:"#22c55e"}}>Stable capacity</div></div>
            <div style={{padding:10,borderRadius:6,background:"rgba(245,158,11,.04)",border:"1px solid rgba(245,158,11,.1)",textAlign:"center"}}><div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",marginBottom:2}}>Quarry Util — India</div><div style={{fontSize:22,fontWeight:700,color:"#f59e0b",fontFamily:M}}>81%</div><div style={{fontSize:10,color:"#f59e0b"}}>Monsoon risk Jun-Sep</div></div>
            <div style={{padding:10,borderRadius:6,background:"rgba(96,165,250,.04)",border:"1px solid rgba(96,165,250,.1)",textAlign:"center"}}><div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",marginBottom:2}}>Concrete vs Stone</div><div style={{fontSize:22,fontWeight:700,color:"#60a5fa",fontFamily:M}}>+38%</div><div style={{fontSize:10,color:"#60a5fa"}}>Stone premium — stable</div></div>
          </div>

          <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc",fontFamily:D,marginBottom:8}}>Stone Prices & PPI</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Stone Price Index — $/tonne</div><TFB/></div>
              <ResponsiveContainer width="100%" height={240}><LineChart data={slice(stoneAll)}><XAxis dataKey="m" tick={{fontSize:10,fill:"#706b63"}} interval={Math.max(0,Math.floor(slice(stoneAll).length/6))}/><YAxis tick={{fontSize:10,fill:"#706b63"}}/><Tooltip contentStyle={TT}/><Line type="monotone" dataKey="carrara" stroke={G} name="Carrara C" strokeWidth={2} dot={false}/><Line type="monotone" dataKey="indiana" stroke="#22c55e" name="Indiana" strokeWidth={2} dot={false}/><Line type="monotone" dataKey="black" stroke="#a78bfa" name="Abs Black" strokeWidth={2} dot={false}/><Line type="monotone" dataKey="turkish" stroke="#60a5fa" name="Turkish" strokeWidth={2} dot={false}/></LineChart></ResponsiveContainer>
            </div>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:8}}>Stone vs PPI Stone Index (rebased 100 = 2019)</div>
              <ResponsiveContainer width="100%" height={240}><LineChart data={[{m:"2019",ppi:100,carrara:100,indiana:100,concrete:100},{m:"2020",ppi:98,carrara:96,indiana:99,concrete:97},{m:"2021",ppi:108,carrara:112,indiana:105,concrete:110},{m:"2022",ppi:118,carrara:128,indiana:110,concrete:122},{m:"2023",ppi:122,carrara:135,indiana:113,concrete:118},{m:"2024",ppi:126,carrara:142,indiana:115,concrete:114},{m:"2025",ppi:130,carrara:152,indiana:117,concrete:112},{m:"2026",ppi:134,carrara:158,indiana:118,concrete:113}]}><XAxis dataKey="m" tick={{fontSize:10,fill:"#706b63"}}/><YAxis tick={{fontSize:10,fill:"#706b63"}} domain={[85,170]}/><Tooltip contentStyle={TT}/><Line type="monotone" dataKey="ppi" stroke="#ef4444" name="PPI Stone" strokeWidth={2} strokeDasharray="5 5" dot={false}/><Line type="monotone" dataKey="carrara" stroke={G} name="Carrara" strokeWidth={2} dot={false}/><Line type="monotone" dataKey="indiana" stroke="#22c55e" name="Indiana" strokeWidth={2} dot={false}/><Line type="monotone" dataKey="concrete" stroke="#706b63" name="Precast Concrete" strokeWidth={1} strokeDasharray="3 3" dot={false}/></LineChart></ResponsiveContainer>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:8}}>Annual Avg Stone Prices + US Construction Spending</div>
              <ResponsiveContainer width="100%" height={240}><ComposedChart data={[{yr:"2018",carrara:1180,indiana:360,granite:1680,constr:425},{yr:"2019",carrara:1220,indiana:370,granite:1720,constr:440},{yr:"2020",carrara:1170,indiana:365,granite:1700,constr:410},{yr:"2021",carrara:1360,indiana:385,granite:1820,constr:468},{yr:"2022",carrara:1520,indiana:400,granite:1900,constr:510},{yr:"2023",carrara:1620,indiana:408,granite:1960,constr:520},{yr:"2024",carrara:1700,indiana:415,granite:2020,constr:512},{yr:"2025",carrara:1800,indiana:420,granite:2080,constr:502}]}><XAxis dataKey="yr" tick={{fontSize:10,fill:"#706b63"}}/><YAxis yAxisId="left" tick={{fontSize:10,fill:"#706b63"}}/><YAxis yAxisId="right" orientation="right" tick={{fontSize:10,fill:"#60a5fa"}} domain={[350,550]}/><Tooltip contentStyle={TT}/><Bar yAxisId="left" dataKey="carrara" fill={G} name="Carrara $/t"/><Bar yAxisId="left" dataKey="indiana" fill="#22c55e" name="Indiana $/t"/><Line yAxisId="right" type="monotone" dataKey="constr" stroke="#60a5fa" name="Constr Spend $B" strokeWidth={2} dot={false}/></ComposedChart></ResponsiveContainer>
            </div>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:8}}>YoY Price Change by Stone Type</div>
              <ResponsiveContainer width="100%" height={240}><BarChart data={[{name:"Calacatta",chg:11.5},{name:"Statuario",chg:9.8},{name:"Carrara C",chg:8.2},{name:"Abs. Black",chg:4.2},{name:"Travertine",chg:3.1},{name:"P. Serena",chg:1.8},{name:"Indiana",chg:1.1},{name:"Turkish",chg:-2.3}]} layout="vertical"><XAxis type="number" tick={{fontSize:10,fill:"#706b63"}} domain={[-5,15]} unit="%"/><YAxis type="category" dataKey="name" tick={{fontSize:10,fill:"#706b63"}} width={70}/><Tooltip contentStyle={TT}/><Bar dataKey="chg" name="YoY %">{[11.5,9.8,8.2,4.2,3.1,1.8,1.1,-2.3].map((v,i)=><Cell key={i} fill={v>=5?"#ef4444":v>=0?G:"#22c55e"}/>)}</Bar></BarChart></ResponsiveContainer>
            </div>
          </div>

          <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc",fontFamily:D,marginBottom:8}}>FX & Fuel</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>EUR/USD & INR/USD</div><TFB/></div>
              <ResponsiveContainer width="100%" height={240}><LineChart data={slice(fxAll)}><XAxis dataKey="m" tick={{fontSize:10,fill:"#706b63"}} interval={Math.max(0,Math.floor(slice(fxAll).length/6))}/><YAxis yAxisId="eur" tick={{fontSize:10,fill:"#f59e0b"}} domain={["auto","auto"]}/><YAxis yAxisId="inr" orientation="right" tick={{fontSize:10,fill:"#60a5fa"}} domain={["auto","auto"]}/><Tooltip contentStyle={TT}/><Line yAxisId="eur" type="monotone" dataKey="eur" stroke="#f59e0b" name="EUR/USD" strokeWidth={2} dot={false}/><Line yAxisId="inr" type="monotone" dataKey="inr" stroke="#60a5fa" name="INR/USD" strokeWidth={2} dot={false}/></LineChart></ResponsiveContainer>
            </div>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Bunker Fuel Index & Brent Crude</div><TFB/></div>
              <ResponsiveContainer width="100%" height={240}><LineChart data={slice(bunkerAll)}><XAxis dataKey="m" tick={{fontSize:10,fill:"#706b63"}} interval={Math.max(0,Math.floor(slice(bunkerAll).length/6))}/><YAxis yAxisId="bunk" tick={{fontSize:10,fill:G}}/><YAxis yAxisId="brent" orientation="right" tick={{fontSize:10,fill:"#ef4444"}} domain={["auto","auto"]}/><Tooltip contentStyle={TT}/><Line yAxisId="bunk" type="monotone" dataKey="bunker" stroke={G} name="Bunker $/t" strokeWidth={2} dot={false}/><Line yAxisId="brent" type="monotone" dataKey="brent" stroke="#ef4444" name="Brent $/bbl" strokeWidth={2} dot={false}/></LineChart></ResponsiveContainer>
            </div>
          </div>

          <div style={{fontSize:18,fontWeight:700,color:"#e2e0dc",fontFamily:D,marginBottom:8}}>Shipping & Logistics</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Ocean Freight — 40ft Container (USD)</div><TFB/></div>
              <ResponsiveContainer width="100%" height={240}><AreaChart data={slice(oceanAll)}><XAxis dataKey="m" tick={{fontSize:10,fill:"#706b63"}} interval={Math.max(0,Math.floor(slice(oceanAll).length/6))}/><YAxis tick={{fontSize:10,fill:"#706b63"}}/><Tooltip contentStyle={TT}/><Area type="monotone" dataKey="it" stroke={G} fill={G+"20"} name="Italy→Newark"/><Area type="monotone" dataKey="tr" stroke="#22c55e" fill="rgba(34,197,94,.1)" name="Turkey→Newark"/><Area type="monotone" dataKey="br" stroke="#f59e0b" fill="rgba(245,158,11,.1)" name="Brazil→Newark"/></AreaChart></ResponsiveContainer>
            </div>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><div style={{fontSize:14,fontWeight:600,color:"#e2e0dc"}}>Domestic Rates (Flatbed, LTL, Parcel)</div><TFB/></div>
              <ResponsiveContainer width="100%" height={240}><LineChart data={slice(domesticAll)}><XAxis dataKey="m" tick={{fontSize:10,fill:"#706b63"}} interval={Math.max(0,Math.floor(slice(domesticAll).length/6))}/><YAxis tick={{fontSize:10,fill:"#706b63"}}/><Tooltip contentStyle={TT}/><Line type="monotone" dataKey="flatbed" stroke="#ef4444" name="Flatbed $/mi" strokeWidth={2} dot={false}/><Line type="monotone" dataKey="ltl" stroke="#60a5fa" name="LTL $/mi" strokeWidth={2} dot={false}/><Line type="monotone" dataKey="ups" stroke="#a78bfa" name="UPS $/50kg" strokeWidth={1} dot={false}/><Line type="monotone" dataKey="fedex" stroke="#22c55e" name="FedEx $/50kg" strokeWidth={1} dot={false}/></LineChart></ResponsiveContainer>
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginBottom:16}}>
            <div style={{padding:10,borderRadius:6,background:CB,border:BD,textAlign:"center"}}><div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",marginBottom:2}}>Container Avail — Shanghai</div><div style={{fontSize:18,fontWeight:700,color:"#22c55e",fontFamily:M}}>High</div><div style={{fontSize:10,color:"#a09a92"}}>No booking delays</div></div>
            <div style={{padding:10,borderRadius:6,background:CB,border:BD,textAlign:"center"}}><div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",marginBottom:2}}>Container Avail — Genoa</div><div style={{fontSize:18,fontWeight:700,color:"#f59e0b",fontFamily:M}}>Medium</div><div style={{fontSize:10,color:"#a09a92"}}>+2d booking lead</div></div>
            <div style={{padding:10,borderRadius:6,background:CB,border:BD,textAlign:"center"}}><div style={{fontSize:10,color:"#706b63",textTransform:"uppercase",marginBottom:2}}>Container Avail — Newark</div><div style={{fontSize:18,fontWeight:700,color:"#ef4444",fontFamily:M}}>Tight</div><div style={{fontSize:10,color:"#a09a92"}}>4.5d avg dwell</div></div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12}}>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:8}}>Key Routes</div>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}><tbody>{[{rt:"Carrara → Newark",cost:"$420/t",d:"18-22d"},{rt:"Bedford IN → NYC",cost:"$1,800",d:"3-4d"},{rt:"Izmir → Newark",cost:"$380/t",d:"25-30d"},{rt:"Rajasthan → Newark",cost:"$440/t",d:"28-35d"},{rt:"Greenpoint → Local",cost:"$350",d:"Same day"},{rt:"Espirito Santo → Newark",cost:"$460/t",d:"14-18d"}].map((r,i)=><tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,.03)"}}><td style={{padding:"3px 4px",color:"#e2e0dc"}}>{r.rt}</td><td style={{padding:"3px 4px",fontFamily:M,color:G}}>{r.cost}</td><td style={{padding:"3px 4px",color:"#a09a92"}}>{r.d}</td></tr>)}</tbody></table>
            </div>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:8}}>Hidden Costs</div>
              <div style={{fontSize:14,color:"#a09a92",lineHeight:1.7}}>{[["Customs brokerage","$250-400"],["Fumigation (wood)","$150-300"],["Insurance (1.5%)","Variable"],["Demurrage","$150/day"],["Chassis rental","$45/day"],["Liftgate/crane","$350-800"],["Tooling index","↑ +6% YoY"],["Ins. premium","↑ +18% YoY"]].map(([l,v],i)=><div key={i} style={{display:"flex",justifyContent:"space-between"}}><span>{l}</span><span style={{color:G,fontFamily:M}}>{v}</span></div>)}</div>
            </div>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:8}}>Seasonal Risk Calendar</div>
              <div style={{fontSize:14,color:"#a09a92",lineHeight:1.7}}>{[["🇮🇳 India monsoon","Jun-Sep","#f59e0b"],["🇮🇹 Carrara winter","Dec-Feb","#60a5fa"],["🇧🇷 Brazil rainy","Nov-Mar","#f59e0b"],["🌊 Red Sea peak","Oct-Mar","#ef4444"],["📦 Holiday surge","Nov-Jan","#a78bfa"],["🏗️ US constr peak","Apr-Oct","#22c55e"]].map(([l,p,c],i)=><div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span>{l}</span><span style={{color:c,fontFamily:M,fontSize:10}}>{p}</span></div>)}</div>
            </div>
            <div style={{background:CB,border:BD,borderRadius:8,padding:14}}>
              <div style={{fontSize:14,fontWeight:600,color:"#e2e0dc",marginBottom:8}}>⚠ Cost Pressure Alerts</div>
              <div style={{fontSize:10,lineHeight:1.6}}>{[["Italian marble +8.2% YoY. Quarry permits under EU review. Calacatta +11.5%.","#ef4444"],["CBAM risk: +€42/t expected on Italian marble from 2027. Pre-buy window closing.","#ef4444"],["Red Sea reroute: +$800/container, +8-12d on Med routes via Cape.","#ef4444"],["Newark dwell 4.5d (was 2.8). Book chassis 72h ahead.","#f59e0b"],["Ins. premiums +18% YoY for high-value stone. Red Sea + Houthi risk.","#f59e0b"],["Concrete -6% YoY — stone premium widening. Monitor facade bid competitiveness.","#f59e0b"],["Indiana Limestone stable +1.1%. Bedford at capacity. Safe bet.","#22c55e"],["Turkish marble -2.3% YoY. Afyon improving. Value opportunity.","#22c55e"],["Maersk Q2 contract locked $3,600/40ft Carrara-Newark.","#22c55e"]].map(([t,c],i)=><div key={i} style={{padding:4,marginBottom:3,background:c+"08",border:"1px solid "+c+"18",borderRadius:4,color:c}}>{t}</div>)}</div>
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginTop:12,marginBottom:8}}>
            <div style={{padding:10,borderRadius:6,background:"rgba(96,165,250,.03)",border:"1px solid rgba(96,165,250,.08)"}}>
              <div style={{fontSize:14,fontWeight:600,color:"#60a5fa",marginBottom:4}}>Port Congestion (days avg dwell)</div>
              <div style={{display:"flex",gap:12,fontSize:14}}><span><span style={{color:"#e2e0dc"}}>Newark:</span> <span style={{color:"#ef4444",fontFamily:M}}>4.5d</span></span><span><span style={{color:"#e2e0dc"}}>Savannah:</span> <span style={{color:"#22c55e",fontFamily:M}}>2.1d</span></span><span><span style={{color:"#e2e0dc"}}>Genoa:</span> <span style={{color:"#f59e0b",fontFamily:M}}>3.2d</span></span><span><span style={{color:"#e2e0dc"}}>LA/LB:</span> <span style={{color:"#f59e0b",fontFamily:M}}>3.8d</span></span></div>
            </div>
            <div style={{padding:10,borderRadius:6,background:"rgba(167,139,250,.03)",border:"1px solid rgba(167,139,250,.08)"}}>
              <div style={{fontSize:14,fontWeight:600,color:"#a78bfa",marginBottom:4}}>Embodied Carbon (kg CO₂/tonne)</div>
              <div style={{display:"flex",gap:12,fontSize:14}}><span><span style={{color:"#e2e0dc"}}>Marble:</span> <span style={{fontFamily:M}}>42</span></span><span><span style={{color:"#e2e0dc"}}>Granite:</span> <span style={{fontFamily:M}}>58</span></span><span><span style={{color:"#e2e0dc"}}>Limestone:</span> <span style={{fontFamily:M}}>31</span></span><span><span style={{color:"#e2e0dc"}}>Concrete:</span> <span style={{fontFamily:M}}>410</span></span></div>
            </div>
          </div>

        </div>}
      </div>;})()}


            {/* ═══ STONE DB ═══ */}
  </>);
}
