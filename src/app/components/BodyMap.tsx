import { useState } from 'react';
import { Link } from 'react-router';
import { X, ArrowRight, Zap, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

// ─── THERAPY DATA ─────────────────────────────────────────────────────────────
interface TherapyData {
  id: string;
  label: { SRB: string; ENG: string };
  desc: { SRB: string; ENG: string };
  conditions: { SRB: string[]; ENG: string[] };
  therapies: { SRB: string[]; ENG: string[] };
  benefit: { SRB: string; ENG: string };
  img: string;
  duration: { SRB: string; ENG: string };
}

interface HotSpot {
  id: string;
  therapyId: string;
  cx: number;
  cy: number;
  view: 'front' | 'back';
}

const therapies: TherapyData[] = [
  {
    id: 'neck',
    label: { SRB: 'Vrat i cervikalni stub', ENG: 'Neck & Cervical Spine' },
    desc: {
      SRB: 'Bol u vratu i gornjim cervikalnim segmentima često izaziva glavobolju, vrtoglavicu i ukočenost. Kombinujemo manuelnu terapiju, dry needling i ciljane vežbe za trajno rešavanje uzroka bola.',
      ENG: 'Neck and upper cervical pain often causes headaches, dizziness and stiffness. We combine manual therapy, dry needling and targeted exercise to permanently address the pain source.',
    },
    conditions: {
      SRB: ['Cervikogena glavobolja', 'Hernija diska', 'Tortikollis', 'Whiplash', 'Ukočenost vrata'],
      ENG: ['Cervicogenic headache', 'Disc herniation', 'Torticollis', 'Whiplash', 'Neck stiffness'],
    },
    therapies: {
      SRB: ['Manuelna terapija', 'Dry Needling', 'McKenzie metoda', 'Kinesio taping', 'Cervikalna mobilizacija'],
      ENG: ['Manual therapy', 'Dry Needling', 'McKenzie method', 'Kinesio taping', 'Cervical mobilization'],
    },
    benefit: {
      SRB: 'Pacijenti prijavljuju 70–90% smanjenje bola već posle 4–6 tretmana uz vraćanje pune mobilnosti vrata.',
      ENG: 'Patients report 70–90% pain reduction after just 4–6 treatments with full cervical mobility restored.',
    },
    img: 'https://images.unsplash.com/photo-1643237131522-bbf79b062ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    duration: { SRB: '4–6 tretmana', ENG: '4–6 sessions' },
  },
  {
    id: 'shoulder',
    label: { SRB: 'Rame i rotatorna manžetna', ENG: 'Shoulder & Rotator Cuff' },
    desc: {
      SRB: 'Bol u ramenu i smanjen opseg pokreta mogu ozbiljno ograničiti svakodnevne aktivnosti. Naš program vraća punu funkciju ramena kroz kombinaciju pasivnih i aktivnih tehnika.',
      ENG: 'Shoulder pain and reduced range of motion can seriously limit daily activities. Our program restores full shoulder function through a combination of passive and active techniques.',
    },
    conditions: {
      SRB: ['Impingement sindrom', 'Povreda rotatorne manžetne', 'Zamrznuto rame', 'Tendinitis bicepsa', 'AC artritis'],
      ENG: ['Impingement syndrome', 'Rotator cuff tear', 'Frozen shoulder', 'Biceps tendinitis', 'AC arthritis'],
    },
    therapies: {
      SRB: ['Dry Needling', 'Cupping terapija', 'Manuelna terapija', 'Kineziterapija', 'Kinesio taping'],
      ENG: ['Dry Needling', 'Cupping therapy', 'Manual therapy', 'Exercise therapy', 'Kinesio taping'],
    },
    benefit: {
      SRB: 'Povratak pune funkcije ramena i eliminacija bola u prosečno 6–10 tretmana, bez operacije.',
      ENG: 'Full shoulder function and pain elimination in an average of 6–10 treatments, without surgery.',
    },
    img: 'https://images.unsplash.com/photo-1731514836024-614e2bab04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    duration: { SRB: '6–10 tretmana', ENG: '6–10 sessions' },
  },
  {
    id: 'upperback',
    label: { SRB: 'Gornja leđa i grudni koš', ENG: 'Upper Back & Thoracic' },
    desc: {
      SRB: 'Napetost u gornjim leđima i torakalnom delu kičme je česta posledica sedentarnog rada i loše posture. Primenjujemo tehnike koje direktno utiču na mišićnu rigidnost i mobilnost torakalnih pršljenova.',
      ENG: 'Upper back tension and thoracic tightness are common consequences of sedentary work and poor posture. We apply techniques that directly address muscle rigidity and thoracic vertebral mobility.',
    },
    conditions: {
      SRB: ['Posturalni bol', 'Kifoza', 'Torakalna ukočenost', 'Interkostalna neuralgija', 'Bol između lopatica'],
      ENG: ['Postural pain', 'Kyphosis', 'Thoracic stiffness', 'Intercostal neuralgia', 'Pain between shoulder blades'],
    },
    therapies: {
      SRB: ['Cupping terapija', 'Terapeutska masaža', 'Dry Needling', 'Posturalna korekcija', 'Mobilizacija torakalne kičme'],
      ENG: ['Cupping therapy', 'Therapeutic massage', 'Dry Needling', 'Postural correction', 'Thoracic mobilization'],
    },
    benefit: {
      SRB: 'Odmah osetan pad napetosti mišića. Posturalne korekcije daju dugotrajan efekat uz redovni home program.',
      ENG: 'Immediately noticeable drop in muscle tension. Postural corrections give lasting effect with regular home program.',
    },
    img: 'https://images.unsplash.com/photo-1620924721217-93fd71e354ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    duration: { SRB: '3–6 tretmana', ENG: '3–6 sessions' },
  },
  {
    id: 'lowerback',
    label: { SRB: 'Donja leđa i lumbar', ENG: 'Lower Back & Lumbar' },
    desc: {
      SRB: 'Lumbalni bol je vodeći uzrok odsustva sa posla. Naš multidisciplinarni pristup obrađuje i muskuloskeletne i neuralne komponente bola za brz i trajan oporavak.',
      ENG: 'Lumbar pain is the leading cause of work absence. Our multidisciplinary approach addresses both musculoskeletal and neural pain components for fast and lasting recovery.',
    },
    conditions: {
      SRB: ['Hernija lumbalne ploče', 'Išijasa', 'Spondiloza', 'Facet sindrom', 'Lumbalna nestabilnost'],
      ENG: ['Lumbar disc herniation', 'Sciatica', 'Spondylosis', 'Facet syndrome', 'Lumbar instability'],
    },
    therapies: {
      SRB: ['McKenzie metoda', 'Core stabilizacija', 'Manuelna terapija', 'Dry Needling', 'Trakovanje'],
      ENG: ['McKenzie method', 'Core stabilization', 'Manual therapy', 'Dry Needling', 'Taping'],
    },
    benefit: {
      SRB: 'Program core stabilizacije + manuelna terapija smanjuje bol za 80% i vraća punu radnu sposobnost.',
      ENG: 'Core stabilization program + manual therapy reduces pain by 80% and restores full work capacity.',
    },
    img: 'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    duration: { SRB: '6–12 tretmana', ENG: '6–12 sessions' },
  },
  {
    id: 'hip',
    label: { SRB: 'Kuk i karlica', ENG: 'Hip & Pelvis' },
    desc: {
      SRB: 'Bol u kuku narušava hod, stajanje i kvalitet sna. Naš pristup kombinuje mobilizaciju zgloba, jačanje muskulature i manuelne tehnike za optimalizaciju biomehanike kukova.',
      ENG: 'Hip pain disrupts walking, standing, and sleep quality. Our approach combines joint mobilization, muscular strengthening, and manual techniques to optimize hip biomechanics.',
    },
    conditions: {
      SRB: ['Koksartroza', 'IT band sindrom', 'Trohanterni burzitis', 'Slabost gluteusa', 'SI zglobni bol'],
      ENG: ['Hip osteoarthritis', 'IT band syndrome', 'Trochanteric bursitis', 'Gluteal weakness', 'SI joint pain'],
    },
    therapies: {
      SRB: ['Hip mobilizacija', 'Glutealni snažni trening', 'Cupping terapija', 'Manuelna terapija', 'Kinesio taping'],
      ENG: ['Hip mobilization', 'Gluteal strengthening', 'Cupping therapy', 'Manual therapy', 'Kinesio taping'],
    },
    benefit: {
      SRB: 'Poboljšana stabilnost kuka i bez bola pri hodu i stepenicama u proseku posle 8 tretmana.',
      ENG: 'Improved hip stability and pain-free walking and stairs climbing on average after 8 treatments.',
    },
    img: 'https://images.unsplash.com/photo-1579854602908-ce7e7c29f4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    duration: { SRB: '6–10 tretmana', ENG: '6–10 sessions' },
  },
  {
    id: 'knee',
    label: { SRB: 'Koleno i patela', ENG: 'Knee & Patella' },
    desc: {
      SRB: 'Bol u kolenu ograničava sportske aktivnosti, hod i svakodnevni život. Naš program jača stabilizatore kolena, vraća propriocepciju i eliminiše uzrok bola.',
      ENG: 'Knee pain limits sports activities, walking, and everyday life. Our program strengthens knee stabilizers, restores proprioception, and eliminates the pain source.',
    },
    conditions: {
      SRB: ['Gonartroza', 'Patellofemoral bol', 'Oštećenje meniskusa', 'Ligamentarne povrede', 'Patelarna tendinopatija'],
      ENG: ['Knee osteoarthritis', 'Patellofemoral pain', 'Meniscus injury', 'Ligament injuries', 'Patellar tendinopathy'],
    },
    therapies: {
      SRB: ['Kineziterapija', 'Kinesio taping', 'Propriocepcija', 'Snažni trening', 'Manuelna terapija'],
      ENG: ['Exercise therapy', 'Kinesio taping', 'Proprioception training', 'Strength training', 'Manual therapy'],
    },
    benefit: {
      SRB: 'Stabilno koleno bez bola pri sportskim aktivnostima — prosečno 8–12 tretmana do punog oporavka.',
      ENG: 'Stable, pain-free knee during sports activities — average 8–12 treatments to full recovery.',
    },
    img: 'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    duration: { SRB: '8–12 tretmana', ENG: '8–12 sessions' },
  },
];

// ─── HOTSPOT DATA ─────────────────────────────────────────────────────────────
const allHotspots: HotSpot[] = [
  // ── FRONT VIEW ──────────────────────────────────────────────────────────────
  { id: 'jaw',      therapyId: 'neck',      cx: 54,  cy: 44,  view: 'front' },
  { id: 'shL-F',   therapyId: 'shoulder',  cx: 20,  cy: 100, view: 'front' },
  { id: 'shR-F',   therapyId: 'shoulder',  cx: 120, cy: 100, view: 'front' },
  { id: 'chest',   therapyId: 'upperback', cx: 70,  cy: 150, view: 'front' },
  { id: 'abdomen', therapyId: 'lowerback', cx: 70,  cy: 232, view: 'front' },
  { id: 'hipL-F',  therapyId: 'hip',       cx: 26,  cy: 296, view: 'front' },
  { id: 'hipR-F',  therapyId: 'hip',       cx: 114, cy: 296, view: 'front' },
  { id: 'kneeL',   therapyId: 'knee',      cx: 38,  cy: 408, view: 'front' },
  { id: 'kneeR',   therapyId: 'knee',      cx: 102, cy: 408, view: 'front' },
  // ── BACK VIEW ───────────────────────────────────────────────────────────────
  { id: 'neck-B',  therapyId: 'neck',      cx: 70,  cy: 62,  view: 'back' },
  { id: 'trapL',   therapyId: 'shoulder',  cx: 44,  cy: 98,  view: 'back' },
  { id: 'trapR',   therapyId: 'shoulder',  cx: 96,  cy: 98,  view: 'back' },
  { id: 'scapL',   therapyId: 'upperback', cx: 40,  cy: 148, view: 'back' },
  { id: 'scapR',   therapyId: 'upperback', cx: 100, cy: 148, view: 'back' },
  { id: 'midback', therapyId: 'upperback', cx: 70,  cy: 198, view: 'back' },
  { id: 'lumB',    therapyId: 'lowerback', cx: 70,  cy: 254, view: 'back' },
  { id: 'gluteL',  therapyId: 'hip',       cx: 46,  cy: 306, view: 'back' },
  { id: 'gluteR',  therapyId: 'hip',       cx: 94,  cy: 306, view: 'back' },
];

// ─── BODY SVG ─────────────────────────────────────────────────────────────────
function BodySVG({
  view,
  hotspots,
  activeId,
  anyActive,
  activeTherapyId,
  onHotspot,
  lang,
  isDark,
}: {
  view: 'front' | 'back';
  hotspots: HotSpot[];
  activeId: string | null;
  anyActive: boolean;
  activeTherapyId: string | null;
  onHotspot: (id: string) => void;
  lang: 'SRB' | 'ENG';
  isDark: boolean;
}) {
  const skin    = isDark ? '#5a3422' : '#F5C8AD';
  const skinMid = isDark ? '#7a4830' : '#E0A070';
  const skinOut = isDark ? '#9a6040' : '#C07040';

  // Shared geometry
  const leftArm  = 'M 26,87 C 12,103 4,140 2,182 C 0,215 2,248 6,270 L 12,292 Q 16,308 24,314 Q 34,318 40,308 Q 44,293 42,275 C 38,249 36,214 36,182 C 36,146 40,109 50,97 Q 36,91 26,87 Z';
  const rightArm = 'M 114,87 C 128,103 136,140 138,182 C 140,215 138,248 134,270 L 128,292 Q 124,308 116,314 Q 106,318 100,308 Q 96,293 98,275 C 102,249 104,214 104,182 C 104,146 100,109 90,97 Q 104,91 114,87 Z';
  const leftLeg  = 'M 24,308 C 14,336 10,373 12,408 C 14,440 20,464 28,478 Q 34,492 46,494 Q 62,494 70,484 Q 74,470 72,454 C 70,434 66,404 68,372 C 70,342 68,318 58,308 Q 42,300 24,308 Z';
  const rightLeg = 'M 116,308 C 126,336 130,373 128,408 C 126,440 120,464 112,478 Q 106,492 94,494 Q 78,494 70,484 Q 66,470 68,454 C 70,434 74,404 72,372 C 70,342 72,318 82,308 Q 98,300 116,308 Z';

  return (
    <svg
      viewBox="0 0 140 502"
      width={116}
      style={{ height: 'auto', display: 'block' }}
      role="img"
      aria-label={
        view === 'front'
          ? (lang === 'SRB' ? 'Prednja strana tela' : 'Front view')
          : (lang === 'SRB' ? 'Zadnja strana tela' : 'Back view')
      }
    >
      {/* ══ HEAD ══ */}
      <ellipse cx="70" cy="30" rx="20" ry="24" fill={skin} stroke={skinOut} strokeWidth="0.9"/>
      <ellipse cx="50" cy="31" rx="4"  ry="6"  fill={skin} stroke={skinOut} strokeWidth="0.7"/>
      <ellipse cx="90" cy="31" rx="4"  ry="6"  fill={skin} stroke={skinOut} strokeWidth="0.7"/>

      {/* ══ NECK ══ */}
      <path d="M 62,52 L 60,68 Q 70,73 80,68 L 78,52 Z" fill={skin} stroke={skinOut} strokeWidth="0.9"/>

      {/* ══ TRAPEZIUS / SHOULDER WING ══ */}
      <path
        d="M 60,68 Q 44,72 26,87 L 22,118 L 26,123 Q 42,108 56,100 Q 70,94 84,100 Q 98,108 114,123 L 118,118 L 114,87 Q 96,72 80,68 Z"
        fill={skin} stroke={skinOut} strokeWidth="0.9"
      />

      {/* ══ MAIN TORSO ══ */}
      <path
        d="M 22,118 C 14,136 12,162 12,192 L 12,258 Q 12,282 24,308 Q 46,332 70,334 Q 94,332 116,308 Q 128,282 128,258 L 128,192 C 128,162 126,136 118,118 Z"
        fill={skin} stroke={skinOut} strokeWidth="0.9"
      />

      {/* ══ FRONT DETAILS ══ */}
      {view === 'front' && (
        <>
          <path d="M 62,72 Q 44,77 26,87"   stroke={skinMid} strokeWidth="0.8" fill="none" opacity="0.7"/>
          <path d="M 78,72 Q 96,77 114,87"  stroke={skinMid} strokeWidth="0.8" fill="none" opacity="0.7"/>
          <path d="M 62,72 Q 70,100 78,72"  stroke={skinMid} strokeWidth="0.8" fill="none" opacity="0.65"/>
          <path d="M 65,54 Q 63,62 64,68"   stroke={skinMid} strokeWidth="0.5" fill="none" opacity="0.55"/>
          <path d="M 75,54 Q 77,62 76,68"   stroke={skinMid} strokeWidth="0.5" fill="none" opacity="0.55"/>
          <line x1="70" y1="96" x2="70" y2="242" stroke={skinMid} strokeWidth="0.45" opacity="0.5"/>
          <path d="M 57,152 Q 70,149 83,152" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.55"/>
          <path d="M 55,173 Q 70,170 85,173" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.55"/>
          <path d="M 54,195 Q 70,192 86,195" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.55"/>
          <path d="M 54,217 Q 70,214 86,217" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.55"/>
          <circle cx="70" cy="238" r="2.5"  fill={skinMid} opacity="0.45"/>
          <path d="M 20,282 Q 38,270 55,268" stroke={skinMid} strokeWidth="0.55" fill="none" opacity="0.6"/>
          <path d="M 120,282 Q 102,270 85,268" stroke={skinMid} strokeWidth="0.55" fill="none" opacity="0.6"/>
          <path d="M 22,120 Q 18,153 22,183" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.4"/>
          <path d="M 118,120 Q 122,153 118,183" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.4"/>
          <path d="M 30,424 Q 30,450 32,468" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 110,424 Q 110,450 108,468" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
        </>
      )}

      {/* ══ BACK DETAILS ══ */}
      {view === 'back' && (
        <>
          <line x1="70" y1="54" x2="70" y2="68"   stroke={skinMid} strokeWidth="0.55" opacity="0.6"/>
          <line x1="70" y1="70" x2="70" y2="284"  stroke={skinMid} strokeWidth="0.55" opacity="0.55"/>
          <path d="M 70,68 Q 50,84 44,104 Q 70,116 96,104 Q 90,84 70,68" stroke={skinMid} strokeWidth="0.7" fill="none" opacity="0.6"/>
          <path d="M 36,120 C 34,140 34,160 40,172 Q 52,177 56,163 L 50,120" stroke={skinMid} strokeWidth="0.7" fill="none" opacity="0.55"/>
          <path d="M 104,120 C 106,140 106,160 100,172 Q 88,177 84,163 L 90,120" stroke={skinMid} strokeWidth="0.7" fill="none" opacity="0.55"/>
          <path d="M 64,122 C 62,166 62,212 64,262" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 76,122 C 78,166 78,212 76,262" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 20,128 C 14,168 14,210 18,254" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.45"/>
          <path d="M 120,128 C 126,168 126,210 122,254" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.45"/>
          <path d="M 18,286 Q 44,274 70,272"  stroke={skinMid} strokeWidth="0.55" fill="none" opacity="0.6"/>
          <path d="M 122,286 Q 96,274 70,272" stroke={skinMid} strokeWidth="0.55" fill="none" opacity="0.6"/>
          <path d="M 24,312 Q 46,300 70,298 Q 94,300 116,312" stroke={skinMid} strokeWidth="0.55" fill="none" opacity="0.55"/>
          <path d="M 26,322 Q 48,312 70,310 Q 92,312 114,322" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 28,116 Q 24,152 26,184" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.4"/>
          <path d="M 112,116 Q 116,152 114,184" stroke={skinMid} strokeWidth="0.45" fill="none" opacity="0.4"/>
          <path d="M 30,322 Q 26,368 30,410" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 110,322 Q 114,368 110,410" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 34,422 Q 32,450 36,472" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 42,422 Q 44,452 44,472" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 98,422 Q 108,450 104,472" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
          <path d="M 106,422 Q 96,452 96,472" stroke={skinMid} strokeWidth="0.4" fill="none" opacity="0.4"/>
        </>
      )}

      {/* ══ ARMS ══ */}
      <path d={leftArm}  fill={skin} stroke={skinOut} strokeWidth="0.9"/>
      <path d={rightArm} fill={skin} stroke={skinOut} strokeWidth="0.9"/>

      {/* ══ LEGS ══ */}
      <path d={leftLeg}  fill={skin} stroke={skinOut} strokeWidth="0.9"/>
      <path d={rightLeg} fill={skin} stroke={skinOut} strokeWidth="0.9"/>

      {/* Knee caps */}
      <ellipse cx="38"  cy="406" rx="13" ry="10" fill={skinMid} stroke={skinOut} strokeWidth="0.7" opacity="0.7"/>
      <ellipse cx="102" cy="406" rx="13" ry="10" fill={skinMid} stroke={skinOut} strokeWidth="0.7" opacity="0.7"/>

      {/* ══ HOTSPOTS ══ */}
      {hotspots.map((spot, idx) => {
        const isTherapySame = anyActive && activeTherapyId === spot.therapyId;
        const pulseDelay    = `${(idx * 0.38) % 2.2}s`;

        return (
          <g
            key={spot.id}
            transform={`translate(${spot.cx}, ${spot.cy})`}
            onClick={() => onHotspot(spot.id)}
            style={{ cursor: 'pointer' }}
            role="button"
            aria-pressed={activeId === spot.id}
            aria-label={therapies.find(t => t.id === spot.therapyId)?.label[lang]}
          >
            {/* Active glow ring */}
            {isTherapySame && (
              <circle r={15} fill="rgba(229,62,62,0.18)"/>
            )}
            {/* Idle pulsing ring */}
            {!anyActive && (
              <circle
                r={10}
                fill="rgba(229,62,62,0.22)"
                style={{
                  transformOrigin: '0 0',
                  animation: 'ping 2.4s cubic-bezier(0,0,0.2,1) infinite',
                  animationDelay: pulseDelay,
                }}
              />
            )}
            {/* Main dot */}
            <circle
              r={isTherapySame ? 7.5 : anyActive ? 4.5 : 6.5}
              fill={anyActive && !isTherapySame ? 'rgba(229,62,62,0.38)' : '#E53E3E'}
              style={{ transition: 'r 0.25s ease, fill 0.25s ease' }}
            />
            {/* Specular highlight */}
            <circle r={2} cx={-2} cy={-2} fill="rgba(255,255,255,0.55)"/>
          </g>
        );
      })}
    </svg>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function BodyMap() {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeHotspot    = activeId ? allHotspots.find(h => h.id === activeId) : null;
  const activeTherapy    = activeHotspot ? therapies.find(t => t.id === activeHotspot.therapyId) : null;
  const activeTherapyId  = activeHotspot?.therapyId ?? null;
  const anyActive        = activeId !== null;
  const frontSpots       = allHotspots.filter(h => h.view === 'front');
  const backSpots        = allHotspots.filter(h => h.view === 'back');

  const handleHotspot = (id: string) =>
    setActiveId(prev => prev === id ? null : id);

  return (
    <div className="flex flex-col xl:flex-row gap-10 items-start">

      {/* ── BODY COLUMN ── */}
      <div className="flex flex-col items-center">
        {/* Hint */}
        <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-[#666] dark:text-[#555] mb-5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E53E3E] animate-pulse flex-shrink-0"/>
          {lang === 'SRB' ? 'Kliknite na bolnu tačku' : 'Click on a pain point'}
        </p>

        {/* Dual body view */}
        <div className="flex gap-4 items-end">
          <div className="flex flex-col items-center gap-2">
            <BodySVG
              view="front"
              hotspots={frontSpots}
              activeId={activeId}
              anyActive={anyActive}
              activeTherapyId={activeTherapyId}
              onHotspot={handleHotspot}
              lang={lang}
              isDark={isDark}
            />
            <span className="text-[0.58rem] font-black tracking-[0.2em] uppercase text-[#bbb] dark:text-[#555]">
              {lang === 'SRB' ? 'Prednja' : 'Front'}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <BodySVG
              view="back"
              hotspots={backSpots}
              activeId={activeId}
              anyActive={anyActive}
              activeTherapyId={activeTherapyId}
              onHotspot={handleHotspot}
              lang={lang}
              isDark={isDark}
            />
            <span className="text-[0.58rem] font-black tracking-[0.2em] uppercase text-[#bbb] dark:text-[#555]">
              {lang === 'SRB' ? 'Zadnja' : 'Back'}
            </span>
          </div>
        </div>

        {/* Quick-select chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-[270px]">
          {therapies.map((t) => {
            const spots = allHotspots.filter(h => h.therapyId === t.id);
            const isOn  = spots.some(h => h.id === activeId);
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  if (isOn) setActiveId(null);
                  else setActiveId(spots[0]?.id ?? null);
                }}
                className={`px-3 py-1.5 rounded-full text-[0.6rem] font-bold tracking-wide transition-all duration-200 cursor-pointer border ${
                  isOn
                    ? 'bg-[#E53E3E] text-white border-[#E53E3E] shadow-[0_4px_14px_rgba(229,62,62,0.3)]'
                    : 'bg-transparent text-[#555] dark:text-[#666] border-[#ddd] dark:border-[#2a2a2a] hover:border-[#E53E3E]/50 hover:text-[#E53E3E]'
                }`}
              >
                {t.label[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── THERAPY PANEL ── */}
      <div className="flex-1 w-full min-h-[460px]">
        {activeTherapy ? (
          <TherapyPanel therapy={activeTherapy} lang={lang} onClose={() => setActiveId(null)}/>
        ) : (
          <EmptyPanel lang={lang}/>
        )}
      </div>
    </div>
  );
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────
function EmptyPanel({ lang }: { lang: 'SRB' | 'ENG' }) {
  const areas = [
    { label: lang === 'SRB' ? 'Vrat' : 'Neck' },
    { label: lang === 'SRB' ? 'Rame' : 'Shoulder' },
    { label: lang === 'SRB' ? 'Gornja leđa' : 'Upper Back' },
    { label: lang === 'SRB' ? 'Donja leđa' : 'Lower Back' },
    { label: lang === 'SRB' ? 'Kuk' : 'Hip' },
    { label: lang === 'SRB' ? 'Koleno' : 'Knee' },
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center text-center bg-white dark:bg-[#161616] rounded-[28px] border border-[#e8e8e8] dark:border-[#222] p-10 min-h-[460px]">
      <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[#E53E3E]/10 animate-ping" style={{ animationDuration: '2s' }}/>
        <div className="absolute inset-2 rounded-full bg-[#E53E3E]/10"/>
        <div className="w-8 h-8 rounded-full bg-[#E53E3E] relative z-10 shadow-[0_4px_18px_rgba(229,62,62,0.4)]"/>
      </div>

      <h3 className="font-['Montserrat'] text-[1.2rem] font-extrabold text-[#181818] dark:text-[#ebebeb] mb-3">
        {lang === 'SRB' ? 'Gde vas boli?' : 'Where does it hurt?'}
      </h3>
      <p className="text-[0.9rem] text-[#555] dark:text-[#666] max-w-[300px] leading-relaxed mb-8 font-light">
        {lang === 'SRB'
          ? 'Kliknite na crvenu tačku na figuri ili izaberite oblast ispod.'
          : 'Click a red dot on the figure or choose an area below.'}
      </p>

      <div className="grid grid-cols-3 gap-2.5 w-full max-w-[300px]">
        {areas.map((a) => (
          <div key={a.label} className="bg-[#FAFAFA] dark:bg-[#1a1a1a] rounded-xl p-3 border border-[#efefef] dark:border-[#242424] text-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E53E3E]/60 mx-auto mb-1.5"/>
            <div className="text-[0.65rem] font-semibold text-[#444] dark:text-[#777]">{a.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── THERAPY PANEL ────────────────────────────────────────────────────────────
function TherapyPanel({
  therapy,
  lang,
  onClose,
}: {
  therapy: TherapyData;
  lang: 'SRB' | 'ENG';
  onClose: () => void;
}) {
  return (
    <div
      className="bg-white dark:bg-[#161616] rounded-[28px] border border-[#e8e8e8] dark:border-[#222] overflow-hidden shadow-[0_20px_60px_rgba(24,24,24,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      style={{ animation: 'fadeInUp 0.35s ease both' }}
    >
      {/* Hero image */}
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={therapy.img}
          alt={therapy.label[lang]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,24,24,0.75)] via-[rgba(24,24,24,0.2)] to-transparent"/>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
          <div className="inline-flex items-center gap-2 bg-[#E53E3E] text-white text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-2">
            <Zap size={9}/>
            {therapy.duration[lang]}
          </div>
          <h3 className="font-['Montserrat'] text-[1.25rem] font-extrabold text-white leading-tight">
            {therapy.label[lang]}
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/65 flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label={lang === 'SRB' ? 'Zatvori' : 'Close'}
        >
          <X size={14}/>
        </button>
      </div>

      <div className="p-6 space-y-5">
        <p className="text-[0.92rem] text-[#444] dark:text-[#888] leading-[1.75] font-light">
          {therapy.desc[lang]}
        </p>

        {/* Conditions */}
        <div>
          <div className="text-[0.63rem] font-black tracking-[0.18em] uppercase text-[#555] dark:text-[#555] mb-3 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#E53E3E]"/>
            {lang === 'SRB' ? 'Česte dijagnoze' : 'Common conditions'}
          </div>
          <div className="flex flex-wrap gap-2">
            {therapy.conditions[lang].map((c) => (
              <span key={c} className="px-3 py-1.5 bg-[#F5F5F5] dark:bg-[#1e1e1e] text-[#333] dark:text-[#bbb] text-[0.68rem] font-medium rounded-lg border border-[#e8e8e8] dark:border-[#272727]">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Therapies */}
        <div>
          <div className="text-[0.63rem] font-black tracking-[0.18em] uppercase text-[#555] dark:text-[#555] mb-3 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#E53E3E]"/>
            {lang === 'SRB' ? 'Naše terapije' : 'Our therapies'}
          </div>
          <div className="space-y-2">
            {therapy.therapies[lang].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#E53E3E]/10 flex items-center justify-center flex-shrink-0">
                  <Activity size={9} className="text-[#E53E3E]"/>
                </div>
                <span className="text-[0.87rem] text-[#333] dark:text-[#c5c5c5] font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefit callout */}
        <div className="bg-[#E53E3E]/5 dark:bg-[#E53E3E]/8 border border-[#E53E3E]/15 rounded-xl p-4">
          <p className="text-[0.84rem] text-[#c53030] dark:text-[#f08080] leading-[1.65] font-medium">
            ✦ {therapy.benefit[lang]}
          </p>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 w-full bg-[#181818] dark:bg-[#ebebeb] text-white dark:text-[#111] font-['Montserrat'] font-bold text-[0.77rem] tracking-[0.08em] uppercase py-4 rounded-full hover:bg-[#E53E3E] dark:hover:bg-[#E53E3E] dark:hover:text-white transition-colors duration-250"
        >
          {lang === 'SRB' ? 'Zakaži konsultaciju' : 'Book Consultation'}
          <ArrowRight size={14}/>
        </Link>
      </div>
    </div>
  );
}
