// Robot and Carver entity data
export const ROBOTS=[
  {id:"R1",name:"KUKA Alpha",status:"Milling",prj:"PRJ-003",op:"Roughing 3/5",eta:"2h 15m",up:94.2},
  {id:"R2",name:"KUKA Beta",status:"Milling",prj:"PRJ-012",op:"Detail 2/8",eta:"6h 40m",up:91.8},
  {id:"R3",name:"KUKA Gamma",status:"Idle",prj:null,op:"—",eta:"—",up:88.5},
  {id:"R4",name:"KUKA Delta",status:"Milling",prj:"PRJ-001",op:"Finish 1/3",eta:"4h 10m",up:96.1},
  {id:"R5",name:"KUKA Epsilon",status:"Maintenance",prj:null,op:"Spindle swap",eta:"~3h",up:72.3},
  {id:"R6",name:"KUKA Zeta",status:"Milling",prj:"PRJ-015",op:"Roughing 1/4",eta:"8h 20m",up:93.7},
  {id:"R7",name:"KUKA Eta",status:"Queued",prj:"PRJ-009",op:"Awaiting load",eta:"—",up:90.1},
];
export const CARVERS=[
  {id:"C1",name:"Marco V.",spec:"Figurative",status:"Carving",prj:"PRJ-003"},
  {id:"C2",name:"Elena S.",spec:"Architectural",status:"Carving",prj:"PRJ-005"},
  {id:"C3",name:"James K.",spec:"Ornament",status:"Available",prj:null},
  {id:"C4",name:"Sofia R.",spec:"Figurative",status:"Carving",prj:"PRJ-007"},
  {id:"C5",name:"David M.",spec:"Restoration",status:"Polishing",prj:"PRJ-001"},
];
