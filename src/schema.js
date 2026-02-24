// ═══ DESIGN TOKENS & UTILITIES ═══
// Fonts
export const M="'JetBrains Mono',monospace", S="'Outfit',sans-serif", D="'Instrument Serif',serif";
// Brand
export const G="#c4a882", CB="rgba(255,255,255,.018)", BD="1px solid rgba(255,255,255,.05)";
// Utilities
export const $=n=>"$"+Number(n||0).toLocaleString(undefined,{maximumFractionDigits:0});
export const PC=(a,b)=>b?Math.round(a/b*100):0;
export const TT={background:"#1a1918",border:"1px solid rgba(255,255,255,.1)",borderRadius:6,fontFamily:M,fontSize:14,color:"#e2e0dc"};
export const PRI={critical:"#ef4444",high:"#f59e0b",medium:"#60a5fa",low:"#64748b"};
export const STAT_C={Milling:"#22c55e",Idle:"#64748b",Maintenance:"#ef4444",Queued:"#f59e0b",Carving:"#22c55e",Available:"#64748b",Polishing:"#a78bfa"};
export const FC=f=>({"Marble":G,"Limestone":"#a8b89a","Granite":"#8a8a8a","Sandstone":"#c9a86c","Travertine":"#b8a488","Onyx":"#d4a0e0","Quartzite":"#7eb8a4"}[f]||G);
export const CC=c=>({"White":"#e2e0dc","Black":"#555","Grey":"#888","Beige":G,"Red":"#c45c5c","Pink":"#d4849a","Brown":"#8b7355","Violet":"#9b7dbd","Cream":"#d4c9a8","Green":"#6a9a7a","Multi":"#b89a6a","White/Gold":"#d4c088"}[c]||"#a09a92");
export const ROLES_C={Commodity:"#64748b",Commercial:"#60a5fa","Mid-Market":G,Premium:"#a78bfa","Ultra-Luxury":"#f59e0b"};
export const stonePrice=s=>({"Commodity":600,"Commercial":850,"Mid-Market":1100,"Premium":1800,"Ultra-Luxury":2400}[s.role]||1000);
export const genInv=()=>"INV-"+new Date().getFullYear()+"-"+String(Math.floor(Math.random()*9000)+1000);
export const now=()=>new Date().toISOString().slice(0,10);
export const ts=()=>new Date().toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});
