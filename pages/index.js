import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const WEB_PAGE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Bästa hemförsäkringen 2026 | Jämför & spara\",\"description\":\"Bästa hemförsäkringen 2026 — jämför 8 alternativ ✓ Uppdaterad 2026. Hitta rätt försäkring för ditt hem och spara pengar idag!\",\"url\":\"https://hemkollen.vercel.app\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"inLanguage\":\"sv-SE\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"HEMkollen\",\"url\":\"https://hemkollen.vercel.app\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Hem\",\"item\":\"https://hemkollen.vercel.app\"}]}}";
const ITEM_LIST_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Bästa hemförsäkringen 2026 — jämför 8 alternativ — Jämförelse 2026\",\"description\":\"Jämför hemförsäkringar för nyblivna husägare i Sverige\",\"numberOfItems\":8,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Product\",\"name\":\"Hedvig\",\"url\":\"https://www.hedvig.com/se\",\"description\":\"Digital hemförsäkring — ersättning på minuter\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.9\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"364\"}}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Product\",\"name\":\"Länsförsäkringar\",\"url\":\"https://www.lansforsakringar.se\",\"description\":\"Störst i Sverige — lokala kontor i hela landet\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"464\"}}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Product\",\"name\":\"If Försäkring\",\"url\":\"https://www.if.se\",\"description\":\"Nordens ledande — 45 dagars prova-på\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.6\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"275\"}}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Product\",\"name\":\"Folksam\",\"url\":\"https://www.folksam.se\",\"description\":\"Kundägt bolag utan vinstdrivande ägare sedan 1908\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"301\"}}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Product\",\"name\":\"Trygg-Hansa\",\"url\":\"https://www.trygghansa.se\",\"description\":\"24/7 skadeservice — snabb utbetalning\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"372\"}}},{\"@type\":\"ListItem\",\"position\":6,\"item\":{\"@type\":\"Product\",\"name\":\"Dina Försäkringar\",\"url\":\"https://www.dinaf.se\",\"description\":\"Lokalt ägd med personlig service och konkurrenskraftigt pris\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.3\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"123\"}}},{\"@type\":\"ListItem\",\"position\":7,\"item\":{\"@type\":\"Product\",\"name\":\"ICA Försäkring\",\"url\":\"https://www.icaforsakring.se\",\"description\":\"Lägst grundpris — enkel att teckna direkt online\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.1\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"341\"}}},{\"@type\":\"ListItem\",\"position\":8,\"item\":{\"@type\":\"Product\",\"name\":\"Gjensidige\",\"url\":\"https://www.gjensidige.se\",\"description\":\"Nordisk storbolag med stabil ekonomi och bred täckning\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.2\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"405\"}}}]}";
const ARTICLE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Bästa hemförsäkringen 2026 — jämför 8 alternativ\",\"description\":\"Jämför hemförsäkringar för nyblivna husägare i Sverige\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"author\":{\"@type\":\"Organization\",\"name\":\"HEMkollen\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"HEMkollen\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://hemkollen.vercel.app\"}}";
const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Vilken är den bästa hemförsäkringen för husägare?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Den bästa hemförsäkringen varierar beroende på dina specifika behov. Det är viktigt att jämföra täckning, självrisk och kundrecensioner.\"}},{\"@type\":\"Question\",\"name\":\"Vad täcker en hemförsäkring?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"En hemförsäkring täcker ofta skador från brand, stöld och vattenskador. Det kan även inkludera ansvarsskydd och rättsskydd.\"}},{\"@type\":\"Question\",\"name\":\"Hur mycket kostar en hemförsäkring i genomsnitt?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Kostnaden för en hemförsäkring varierar beroende på faktorer som bostadens värde, läge och vald täckning. Priserna kan börja från några hundralappar i månaden.\"}},{\"@type\":\"Question\",\"name\":\"Kan jag byta hemförsäkring när som helst?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, du kan byta hemförsäkring när som helst, men det är vanligt att ha en bindningstid på 12 månader. Kontrollera villkoren för din nuvarande försäkring.\"}},{\"@type\":\"Question\",\"name\":\"Vad är självrisk inom hemförsäkring?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Självrisk är den del av kostnaden du själv betalar vid ett skadefall. En lägre premie kan innebära en högre självrisk.\"}},{\"@type\":\"Question\",\"name\":\"Hur jämför jag hemförsäkringar effektivt?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Jämför försäkringens täckning, pris och självrisk. Läs kundrecensioner och undersök hur enkelt det är att anmäla skador.\"}},{\"@type\":\"Question\",\"name\":\"Behöver jag extra försäkring för värdefulla föremål?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Om du har särskilt värdefulla föremål kan det vara klokt att skaffa en allriskförsäkring för att få extra skydd utöver din vanliga hemförsäkring.\"}},{\"@type\":\"Question\",\"name\":\"Vad händer om jag inte har en hemförsäkring?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Utan hemförsäkring riskerar du att stå för hela kostnaden vid skador eller förluster, vilket kan bli mycket dyrt.\"}}]}";

export async function getStaticProps() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.toLocaleDateString('sv-SE', { month: 'long' });
  var updated = now.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
  var fallback = [{"name":"Hedvig","url":"https://www.hedvig.com/se","description":"Digital hemförsäkring — ersättning på minuter","badge":"Bäst digital","score":"4.9","price":"från 89 kr/mån","pros":["Utbetalning direkt i appen","Ingen bindningstid","100% app-baserad"]},{"name":"Länsförsäkringar","url":"https://www.lansforsakringar.se","description":"Störst i Sverige — lokala kontor i hela landet","badge":"Störst i Sverige","score":"4.7","price":"från 129 kr/mån","pros":["Lokala kontor runt om","Kombinera med LF Bank","Bred täckning"]},{"name":"If Försäkring","url":"https://www.if.se","description":"Nordens ledande — 45 dagars prova-på","badge":"Nordens ledande","score":"4.6","price":"från 99 kr/mån","pros":["45 dagar gratis prova-på","Perfekt för familjer","Snabb skadehantering"]},{"name":"Folksam","url":"https://www.folksam.se","description":"Kundägt bolag utan vinstdrivande ägare sedan 1908","badge":"Kundägt bolag","score":"4.5","price":"från 95 kr/mån","pros":["Ingen vinstdrivande ägare","Starka kollektivavtal","Etiskt val"]},{"name":"Trygg-Hansa","url":"https://www.trygghansa.se","description":"24/7 skadeservice — snabb utbetalning","badge":"Snabb utbetalning","score":"4.4","price":"från 110 kr/mån","pros":["24/7 skadeservice","Stabil och stor aktör","Hem + bil samlat"]},{"name":"Dina Försäkringar","url":"https://www.dinaf.se","description":"Lokalt ägd med personlig service och konkurrenskraftigt pris","badge":"Lokalt förankrad","score":"4.3","price":"från 85 kr/mån","pros":["Lokalt ägd","Personlig service","Konkurrenskraftigt pris"]},{"name":"ICA Försäkring","url":"https://www.icaforsakring.se","description":"Lägst grundpris — enkel att teckna direkt online","badge":"Billigast","score":"4.1","price":"från 79 kr/mån","pros":["Lägst grundpris","Enkel att teckna online","ICA-bonus"]},{"name":"Gjensidige","url":"https://www.gjensidige.se","description":"Nordisk storbolag med stabil ekonomi och bred täckning","badge":null,"score":"4.2","price":"från 92 kr/mån","pros":["Stabil nordisk aktör","Bred täckning","Bra villkor"]}];
  var items = fallback.slice();

  return {
    props: { providers: items, year: year, month: month, updated: updated },
    revalidate: 86400,
  };
}

export default function Home({ providers, year, month, updated }) {
  const [sortBy, setSortBy] = useState('betyg');
  const [visibleCount, setVisibleCount] = useState(5);
  const [selected, setSelected] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  

  var extractNum = function(p) {
    if (p.rateValue) return parseFloat(p.rateValue);
    if (p.priceValue) return parseFloat(p.priceValue);
    var m = String(p.price||'').match(/[0-9]+[.,]?[0-9]*/);
    return m ? parseFloat(m[0].replace(',','.')) : 9999;
  };
  var sorted = [...providers].sort(function(a, b) {
    if (sortBy === 'pris') return extractNum(a) - extractNum(b);
    if (sortBy === 'namn') return a.name.localeCompare(b.name, 'sv');
    return parseFloat(b.score||b.rating||0) - parseFloat(a.score||a.rating||0);
  });
  var visible = sorted.slice(0, visibleCount);
  var toggleSelect = function(name) {
    setSelected(function(prev) {
      return prev.includes(name) ? prev.filter(function(n){return n!==name;}) : prev.length < 3 ? prev.concat([name]) : prev;
    });
  };
  var selectedProviders = providers.filter(function(p){return selected.includes(p.name);});

  const pc = '#15803d';
  const pcLight = '#15803d14';
  const pcMed = '#15803d30';

  const TRACK_BASE = 'axiom-engine-production-54c3.up.railway.app/r';
  const SITE_SLUG = 'hemkollen';
  const AffBtn = ({ url, name, primary }) => {
    var href = TRACK_BASE && TRACK_BASE !== '/r'
      ? TRACK_BASE + '?p=' + encodeURIComponent(name) + '&url=' + encodeURIComponent(url) + '&site=' + SITE_SLUG
      : url;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer sponsored"
        style={{ display:'inline-block', background: primary ? pc : '#0f172a', color:'#fff',
          padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:14,
          textDecoration:'none', whiteSpace:'nowrap', transition:'opacity .15s' }}>
        Välj {name} →
      </a>
    );
  };

  const Stars = ({ score }) => {
    const n = parseFloat(score);
    return (
      <span style={{ fontSize:15, letterSpacing:1 }}>
        <span style={{ color:'#f59e0b' }}>{'★'.repeat(Math.floor(n))}</span>
        <span style={{ color:'#d1d5db' }}>{'★'.repeat(5 - Math.floor(n))}</span>
        <span style={{ color:'#64748b', fontSize:12, marginLeft:6, fontWeight:600 }}>{score}</span>
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>Bästa hemförsäkringen 2026 | Jämför & spara</title>
        <meta name="description" content="Bästa hemförsäkringen 2026 — jämför 8 alternativ ✓ Uppdaterad 2026. Hitta rätt försäkring för ditt hem och spara pengar idag!" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://hemkollen.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bästa hemförsäkringen 2026 | Jämför & spara" />
        <meta property="og:description" content="Bästa hemförsäkringen 2026 — jämför 8 alternativ ✓ Uppdaterad 2026. Hitta rätt försäkring för ditt hem och spara pengar idag!" />
        <meta property="og:url" content="https://hemkollen.vercel.app" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="HEMkollen" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bästa hemförsäkringen 2026 | Jämför & spara" />
        <meta name="twitter:description" content="Bästa hemförsäkringen 2026 — jämför 8 alternativ ✓ Uppdaterad 2026. Hitta rätt försäkring för ditt hem och spara pengar idag!" />
        <link rel="alternate" hreflang="sv" href="https://hemkollen.vercel.app" />
        <link rel="alternate" hreflang="x-default" href="https://hemkollen.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: WEB_PAGE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ITEM_LIST_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ARTICLE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      </Head>

      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px',
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:pc, textDecoration:'none' }}>
          HEMkollen
        </Link>
        <div style={{ display:'flex', gap:28, fontSize:14 }}>
          <a href="#jamfor" style={{ color:'#64748b', textDecoration:'none' }}>Jämförelse</a>
          <a href="#guide" style={{ color:'#64748b', textDecoration:'none' }}>Guide</a>
          <Link href="/om-oss" style={{ color:'#64748b', textDecoration:'none' }}>Om oss</Link>
        </div>
      </nav>

      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f8fafc 100%)',
        padding:'72px 20px 56px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center',
          gap:48, flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:pcLight, color:pc, padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Uppdaterad {updated}
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#f0fdf4', color:'#15803d', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Oberoende jämförelse
              </div>
            </div>
            <h1 style={{ fontSize:'clamp(26px,4vw,46px)', fontWeight:800,
              lineHeight:1.14, marginBottom:18, color:'#0f172a' }}>
              Bästa hemförsäkringen 2026 — jämför 8 alternativ
            </h1>
            <p style={{ fontSize:18, color:'#475569', lineHeight:1.72,
              marginBottom:32, maxWidth:540 }}>
              Jämför hemförsäkringar för nyblivna husägare i Sverige
            </p>
            <a href="#jamfor" style={{ display:'inline-block', background:pc, color:'#fff',
              padding:'14px 32px', borderRadius:10, fontWeight:700, fontSize:16,
              textDecoration:'none', boxShadow:'0 4px 24px '+pc+'44' }}>
              Jämför nu och spara →
            </a>
            <p style={{ marginTop:14, fontSize:13, color:'#94a3b8' }}>
              Gratis &middot; Oberoende &middot; Ingen prenumeration
            </p>
          </div>
          <div style={{ flexShrink:0 }} dangerouslySetInnerHTML={{ __html: "<svg width=\"260\" height=\"210\" viewBox=\"0 0 260 210\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M130 12 L205 46 L205 106 C205 158 170 188 130 200 C90 188 55 158 55 106 L55 46 Z\" fill=\"#15803d\" opacity=\"0.1\" stroke=\"#15803d\" stroke-width=\"2.5\"/><path d=\"M130 28 L192 57 L192 106 C192 148 163 172 130 183 C97 172 68 148 68 106 L68 57 Z\" fill=\"#15803d\" opacity=\"0.07\"/><path d=\"M97 106 L118 130 L163 82\" stroke=\"#15803d\" stroke-width=\"5.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>" }} />
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid #e2e8f0',
        padding:'16px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'flex',
          gap:32, flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
          <div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#15803d',fontWeight:800,flexShrink:0}}>✓</span><span>Spara tid och pengar</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#15803d',fontWeight:800,flexShrink:0}}>✓</span><span>Hitta bästa skyddet</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#15803d',fontWeight:800,flexShrink:0}}>✓</span><span>Jämför enkelt online</span></div>
        </div>
      </div>

      <section id="jamfor" style={{ padding:'64px 20px', maxWidth:980,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:30, fontWeight:800, marginBottom:10, color:'#0f172a' }}>
            Jämför försäkringar enkelt
          </h2>
          <p style={{ color:'#64748b', fontSize:15 }}>
            Vi har granskat {providers.length} alternativ &mdash; senast uppdaterat {updated}
          </p>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:20,
          flexWrap:'wrap', justifyContent:'center' }}>
          {['betyg','pris','namn'].map(function(s) { return (
            <button key={s} onClick={() => setSortBy(s)}
              style={{ padding:'7px 18px', borderRadius:20, fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:'Inter,sans-serif', border:'none',
                background: sortBy===s ? pc : '#f1f5f9',
                color: sortBy===s ? '#fff' : '#64748b' }}>
              {s==='betyg' ? '⭐ Bäst betyg' : s==='pris' ? '💰 Lägst pris' : '🔤 Namn A–Ö'}
            </button>
          ); })}
        </div>

        {sorted[0] && (
          <div style={{ background:pc+'14', border:'2px solid '+pc, borderRadius:14,
            padding:'16px 22px', marginBottom:22, position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, right:0, background:pc,
              color:'#fff', fontSize:10, fontWeight:800, padding:'4px 14px',
              borderBottomLeftRadius:10, letterSpacing:'0.5px' }}>
              {sortBy==='pris' ? '💰 BILLIGAST' : sortBy==='namn' ? '🔤 TOPPALTERNATIV' : '⭐ BÄST BETYG'}
            </div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
              gap:16, flexWrap:'wrap' }}>
              <div>
                <div style={{ fontSize:11, color:pc, fontWeight:700, marginBottom:4 }}>
                  {sortBy==='pris' ? 'Billigaste alternativet just nu' : 'Redaktionens val'}
                </div>
                <div style={{ fontSize:20, fontWeight:800, color:'#0f172a', marginBottom:4 }}>
                  {sorted[0].name}
                </div>
                <div style={{ fontSize:13, color:'#374151', display:'flex', gap:10, flexWrap:'wrap' }}>
                  <span style={{ fontWeight:700, color:pc }}>{sorted[0].price}</span>
                  
                  {sorted[0].score ? <span style={{ color:'#64748b' }}> · {sorted[0].score}/10</span> : null}
                  {sorted[0].badge ? <span style={{ background:pc+'22', color:pc, fontWeight:700,
                    fontSize:11, padding:'2px 8px', borderRadius:6 }}>{sorted[0].badge}</span> : null}
                </div>
              </div>
              <AffBtn url={sorted[0].url} name={sorted[0].name} primary={true} />
            </div>
          </div>
        )}

        
        <div>
          {visible[0] && (
            <div style={{ display:'flex', gap:24, background:pc+'0d', border:'2px solid '+pc, borderRadius:18, padding:'24px 28px', marginBottom:22, flexWrap:'wrap' }}>
              <div style={{ width:80, height:80, borderRadius:16, background:pc+'25', color:pc, display:'flex', alignItems:'center', justifyContent:'center', fontSize:34, fontWeight:800, flexShrink:0 }}>{visible[0].name[0]}</div>
              <div style={{ flex:1, minWidth:200 }}>
                <div style={{ fontSize:11, fontWeight:800, color:pc, letterSpacing:'0.5px', marginBottom:6, textTransform:'uppercase' }}>⭐ Redaktionens val</div>
                <div style={{ fontSize:22, fontWeight:800, color:'#0f172a', marginBottom:6 }}>{visible[0].name}</div>
                <div style={{ fontSize:14, color:'#64748b', marginBottom:12, lineHeight:1.6 }}>{visible[0].description}</div>
                <div style={{ display:'flex', gap:16, alignItems:'center', flexWrap:'wrap' }}>
                  <span style={{ fontSize:22, fontWeight:800, color:pc }}>{visible[0].currentPrice||visible[0].price}</span>
                  {visible[0].badge && <span style={{ background:pc+'18', color:pc, fontSize:12, fontWeight:700, padding:'3px 10px', borderRadius:8 }}>{visible[0].badge}</span>}
                </div>
                <div style={{ marginTop:12, display:'flex', gap:16, alignItems:'center', flexWrap:'wrap' }}>
                  <AffBtn url={visible[0].url} name={visible[0].name} primary={true} />
                  {visible[0].score && <span style={{ fontSize:13, color:'#64748b' }}>⭐ {visible[0].score}/10</span>}
                </div>
              </div>
            </div>
          )}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:14 }}>
            {visible.slice(1).map((p, i) => (
              <div key={p.name} style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:14, padding:'20px 22px', display:'flex', flexDirection:'column', gap:10 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                  <div style={{ fontWeight:800, fontSize:16, color:'#0f172a' }}>{p.name}</div>
                  {p.badge && <span style={{ fontSize:11, background:pc+'15', color:pc, padding:'2px 9px', borderRadius:8, fontWeight:700, flexShrink:0, marginLeft:8 }}>{p.badge}</span>}
                </div>
                <div style={{ fontSize:13, color:'#64748b', lineHeight:1.55 }}>{p.description}</div>
                <div style={{ fontSize:20, fontWeight:800, color:pc }}>{p.currentPrice||p.price}</div>
                <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
                  {(p.pros||[]).slice(0,2).map((pr,j) => (<div key={j} style={{ fontSize:12, color:'#374151', display:'flex', gap:6 }}><span style={{ color:pc, fontWeight:700 }}>✓</span>{pr}</div>))}
                </div>
                <div style={{ marginTop:'auto', paddingTop:10, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  {p.score && <span style={{ fontSize:12, color:'#94a3b8' }}>⭐ {p.score}/10</span>}
                  <AffBtn url={p.url} name={p.name} primary={false} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign:'center', marginTop:20, marginBottom:4, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          {visibleCount < sorted.length && (
            <button onClick={() => setVisibleCount(function(c){ return Math.min(c + 5, sorted.length); })}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid '+pc, background:'#fff', color:pc }}>
              Visa 5 fler ↓ &nbsp;<span style={{ fontWeight:400, fontSize:13, opacity:0.7 }}>({sorted.length - visibleCount} återstår)</span>
            </button>
          )}
          {visibleCount >= sorted.length && sorted.length > 5 && (
            <button onClick={() => setVisibleCount(5)}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid #e2e8f0', background:'#fff', color:'#64748b' }}>
              Visa färre ↑
            </button>
          )}
          <p style={{ margin:0, fontSize:13, color:'#94a3b8' }}>
            Visar {visible.length} av {sorted.length} alternativ
            {selected.length > 0 && <span style={{ marginLeft:12, color:pc, fontWeight:600 }}>{selected.length} valda för jämförelse</span>}
          </p>
          <p style={{ margin:0, fontSize:11, color:'#cbd5e1' }}>
            Priser är riktpriser — klicka på ett alternativ för aktuellt pris hos respektive leverantör
          </p>
        </div>

        {selected.length >= 2 && (
          <div style={{ position:'fixed', bottom:0, left:0, right:0, zIndex:80,
            background:'#0f172a', padding:'14px 20px', fontFamily:'Inter,sans-serif',
            display:'flex', alignItems:'center', justifyContent:'center', gap:14, flexWrap:'wrap',
            boxShadow:'0 -4px 32px rgba(0,0,0,0.25)' }}>
            <span style={{ color:'#e2e8f0', fontWeight:600, fontSize:14 }}>
              {selected.length} valda: {selected.join(' vs ')}
            </span>
            <button onClick={() => setShowCompare(true)}
              style={{ background:pc, color:'#fff', border:'none', borderRadius:8,
                padding:'9px 22px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Jämför nu →
            </button>
            <button onClick={() => setSelected([])}
              style={{ background:'transparent', color:'#94a3b8', border:'1px solid #334155',
                borderRadius:8, padding:'9px 14px', fontSize:13, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Rensa
            </button>
          </div>
        )}

        {showCompare && (
          <div onClick={() => setShowCompare(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.72)', zIndex:200,
            display:'flex', alignItems:'flex-start', justifyContent:'center',
            padding:'24px 16px', overflowY:'auto', fontFamily:'Inter,sans-serif' }}>
            <div onClick={e => e.stopPropagation()} style={{ background:'#fff', borderRadius:16,
              width:'100%', maxWidth: selectedProviders.length === 2 ? 700 : 940,
              padding:28, marginTop:12, marginBottom:24 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
                <h3 style={{ fontSize:20, fontWeight:800, margin:0, color:'#0f172a' }}>
                  Jämförelse — {selectedProviders.map(function(p){return p.name;}).join(' vs ')}
                </h3>
                <button onClick={() => setShowCompare(false)}
                  style={{ background:'none', border:'none', fontSize:22, cursor:'pointer', color:'#94a3b8' }}>✕</button>
              </div>
              <div style={{ display:'grid', gridTemplateColumns: selectedProviders.map(function(){return '1fr';}).join(' '), gap:14 }}>
                {selectedProviders.map(function(p) { return (
                  <div key={p.name} style={{ border:'2px solid '+pc+'30', borderRadius:12, padding:'20px 18px',
                    display:'flex', flexDirection:'column', gap:10 }}>
                    <div style={{ fontWeight:800, fontSize:17, color:'#0f172a', borderBottom:'1px solid #f1f5f9', paddingBottom:10 }}>{p.name}</div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>PRIS</div>
                      <div style={{ fontSize:20, fontWeight:800, color:pc }}>{p.currentPrice||p.price||'—'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>BETYG</div>
                      <Stars score={p.score} />
                    </div>
                    {p.badge && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>UTMÄRKELSE</div>
                        <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:8, display:'inline-block' }}>{p.badge}</div>
                      </div>
                    )}
                    {p.description && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>OM TJÄNSTEN</div>
                        <div style={{ fontSize:13, color:'#475569', lineHeight:1.5 }}>{p.description}</div>
                      </div>
                    )}
                    {p.pros && p.pros.length > 0 && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:6 }}>FÖRDELAR</div>
                        <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                          {p.pros.map(function(pro,j){return(
                            <div key={j} style={{ display:'flex', gap:6, fontSize:13 }}>
                              <span style={{ color:pc, fontWeight:700, flexShrink:0 }}>✓</span>
                              <span style={{ color:'#374151' }}>{pro}</span>
                            </div>
                          );})}
                        </div>
                      </div>
                    )}
                    <div style={{ marginTop:'auto', paddingTop:10 }}>
                      <AffBtn url={p.url} name={p.name} primary={true} />
                    </div>
                  </div>
                );})}
              </div>
              <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
                * Stäng för att välja fler alternativ eller byta urval.
              </p>
            </div>
          </div>
        )}

        <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
          * Vi kan erhålla provision vid val via våra länkar. Det påverkar aldrig priset för dig eller våra oberoende betyg.
          Se vår <Link href="/om-oss" style={{ color:pc }}>redaktionspolicy</Link>.
        </p>
      </section>

      

      <section id="guide" style={{ background:'#f8fafc',
        borderTop:'1px solid #e2e8f0', padding:'64px 20px',
        fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <h2 style={{ fontSize:28, fontWeight:800, marginBottom:20, color:'#0f172a' }}>
            Så väljer du rätt leverantör
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>
            Att välja rätt hemförsäkring handlar om mer än bara priset. Först och främst bör du överväga vilka typer av skador och risker som försäkringen täcker. De flesta hemförsäkringar täcker grundläggande saker som stöld, brand och vattenskador, men villkoren kan variera. Kontrollera noggrant vad som ingår i varje leverantörs erbjudande. Ett annat viktigt steg är att undersöka självriskerna; vissa försäkringar kan erbjuda en lägre premie men ha högre självrisker, vilket kan bli dyrt vid ett skadefall. Tänk också på kundservice och hur enkelt det är att anmäla skador, då detta kan vara avgörande i en stressig situation. Slutligen, läs recensioner och kundomdömen för att få en bättre förståelse av hur nöjda andra husägare är med sin försäkring.
          </p>
          <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16, color:'#0f172a', marginTop:40 }}>Vanliga misstag att undvika</h3>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>Ett vanligt misstag är att välja den billigaste försäkringen utan att tänka på vad som faktiskt täcks. Detta kan leda till att du står utan skydd när du som mest behöver det. Ett annat misstag är att inte jämföra flera olika alternativ. Många nöjer sig med den första försäkringen de hittar, men genom att jämföra kan du hitta ett som erbjuder mer för pengarna. Slutligen, se till att du inte underskattar värdet på dina ägodelar, då detta kan påverka ersättningen vid skada.</p>
          <h3 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:'#0f172a' }}>
            Vad ska du tänka på?
          </h3>
          <div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#15803d15',color:'#15803d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>1</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Jämför täckning noggrant</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#15803d15',color:'#15803d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>2</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kontrollera självrisker</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#15803d15',color:'#15803d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>3</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Läs kundomdömen</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#15803d15',color:'#15803d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>4</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Undvik billigaste valet</p></div>
        </div>
      </section>

      <section style={{ padding:'64px 20px', maxWidth:760,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:26, fontWeight:800, marginBottom:32, color:'#0f172a' }}>
          Vanliga frågor
        </h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilken är den bästa hemförsäkringen för husägare?<span style={{color:'#15803d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Den bästa hemförsäkringen varierar beroende på dina specifika behov. Det är viktigt att jämföra täckning, självrisk och kundrecensioner.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad täcker en hemförsäkring?<span style={{color:'#15803d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>En hemförsäkring täcker ofta skador från brand, stöld och vattenskador. Det kan även inkludera ansvarsskydd och rättsskydd.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur mycket kostar en hemförsäkring i genomsnitt?<span style={{color:'#15803d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Kostnaden för en hemförsäkring varierar beroende på faktorer som bostadens värde, läge och vald täckning. Priserna kan börja från några hundralappar i månaden.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Kan jag byta hemförsäkring när som helst?<span style={{color:'#15803d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, du kan byta hemförsäkring när som helst, men det är vanligt att ha en bindningstid på 12 månader. Kontrollera villkoren för din nuvarande försäkring.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad är självrisk inom hemförsäkring?<span style={{color:'#15803d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Självrisk är den del av kostnaden du själv betalar vid ett skadefall. En lägre premie kan innebära en högre självrisk.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur jämför jag hemförsäkringar effektivt?<span style={{color:'#15803d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Jämför försäkringens täckning, pris och självrisk. Läs kundrecensioner och undersök hur enkelt det är att anmäla skador.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Behöver jag extra försäkring för värdefulla föremål?<span style={{color:'#15803d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Om du har särskilt värdefulla föremål kan det vara klokt att skaffa en allriskförsäkring för att få extra skydd utöver din vanliga hemförsäkring.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad händer om jag inte har en hemförsäkring?<span style={{color:'#15803d',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Utan hemförsäkring riskerar du att stå för hela kostnaden vid skador eller förluster, vilket kan bli mycket dyrt.</p></details>
      </section>

      <section style={{ background:'#f8fafc', borderTop:'1px solid #e2e8f0', padding:'32px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:12, fontWeight:600 }}>Läs mer:</p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a href="/student" style={{color:'#15803d',fontWeight:600,textDecoration:'none',fontSize:14}}>Hemförsäkring för studenter</a>
            · <a href="/villa" style={{color:'#15803d',fontWeight:600,textDecoration:'none',fontSize:14}}>Villahemförsäkring</a>
            · <a href="/bostadsratt" style={{color:'#15803d',fontWeight:600,textDecoration:'none',fontSize:14}}>Bostadsrättsförsäkring</a>
            · <a href="/hyresratt" style={{color:'#15803d',fontWeight:600,textDecoration:'none',fontSize:14}}>Hyresrättsförsäkring</a>
          </div>
        </div>
      </section>

      <footer style={{ background:'#0f172a', color:'#94a3b8',
        padding:'52px 20px 32px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', marginBottom:36 }}>
            <div style={{ maxWidth:260 }}>
              <div style={{ fontWeight:800, color:'#fff', fontSize:18, marginBottom:10 }}>HEMkollen</div>
              <p style={{ fontSize:13, lineHeight:1.75 }}>
                Oberoende jämförelsetjänst för svenska konsumenter. Vi jämför 8 alternativ inom försäkring.
              </p>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Sidor</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Jämförelse</Link>
                <Link href="/om-oss" style={{ color:'#94a3b8', textDecoration:'none' }}>Om oss</Link>
                <Link href="/kontakt" style={{ color:'#94a3b8', textDecoration:'none' }}>Kontakt</Link>
                <Link href="/integritetspolicy" style={{ color:'#94a3b8', textDecoration:'none' }}>Integritetspolicy</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Se även</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/student" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Hemförsäkring för studenter</Link>
                <Link href="/villa" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Villahemförsäkring</Link>
                <Link href="/bostadsratt" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bostadsrättsförsäkring</Link>
                <Link href="/hyresratt" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Hyresrättsförsäkring</Link>
                <Link href="/utan-bindningstid" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Hemförsäkring utan bindningstid</Link>
                <Link href="/billigast" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Billigaste hemförsäkringen</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Jämförelser</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/jamfor/hedvig-vs-lansforsakringar" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Hedvig vs Länsförsäkringar</Link>
                <Link href="/jamfor/hedvig-vs-if-forsakring" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Hedvig vs If Försäkring</Link>
                <Link href="/jamfor/hedvig-vs-folksam" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Hedvig vs Folksam</Link>
                <Link href="/jamfor/hedvig-vs-trygg-hansa" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Hedvig vs Trygg-Hansa</Link>
                <Link href="/jamfor/hedvig-vs-dina-forsakringar" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Hedvig vs Dina Försäkringar</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop:'1px solid #1e293b', paddingTop:24, fontSize:12, lineHeight:1.75 }}>
            <p style={{ marginBottom:8 }}>
              &copy; {year} HEMkollen. Oberoende jämförelsetjänst utan koppling till listade
              varumärken utöver eventuella affiliate-provisioner.
            </p>
            <p>
              <strong style={{ color:'#e2e8f0' }}>Affiliateinformation:</strong> Sidan innehåller
              affiliate-länkar via Adtraction Sverige. Vi kan ta emot provision från annonsörer.
              Det påverkar aldrig priset för dig eller våra oberoende betyg.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}