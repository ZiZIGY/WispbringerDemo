const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/IntroView-CkJ8MoRN.js","assets/vue-i18n-BaeyTUu8.js","assets/bismuth-BuW-ODlZ.js","assets/AudioManager-Df2hUZ8G.js","assets/settings-V8Pk9DDF.js","assets/GameButton-DP_q-GDu.js","assets/useCalm-Bmykn_Rj.js","assets/IntroView-Cal7NThQ.css","assets/MenuLayout-CiaGyZOo.js","assets/input-CDB6F6u-.js","assets/three.module-D6I_rDWY.js","assets/GameDialog-Sdj21KDC.js","assets/MenuLayout-Bz7MvBF8.css","assets/PlayView-BElE9P94.js","assets/meta-BcdeOy2c.js","assets/TrialsView-p4Nuj4i4.js","assets/useAmount-Dn89-eJK.js","assets/GameSwitch-DtIrGRi7.js","assets/GameBadge-DsnBn1EH.js","assets/AchievementsView-DdfNpEM6.js","assets/Talents-CTISz3iM.js","assets/achievements-B_V0-u3N.js","assets/CollectionView-cY6RjH4X.js","assets/GameTabs-BDDA8e0D.js","assets/GameTabs-ihCZvl7k.css","assets/CollectionView-BKk4hy5G.css","assets/SettingsView-0Ai_Y0To.js","assets/QualitySettings-1b6yjP9n.js","assets/QualitySettings-BnFA56_O.css","assets/AboutView-BlIQAAx3.js","assets/sectors-Bxms5Af-.js","assets/GameView-CR12CuJv.js","assets/GameView-DGx2MqYW.css"])))=>i.map(i=>d[i]);
import{$ as e,At as t,C as n,F as r,I as i,J as a,O as o,Ot as s,P as c,R as l,T as u,Y as d,d as f,f as p,it as m,j as h,jt as g,k as _,lt as v,m as y,mt as b,n as x,o as S,ot as C,p as w,q as T,rt as E,st as ee,u as D,v as O,y as k}from"./vue-i18n-BaeyTUu8.js";import{D as te,F as ne,M as re,O as ie,S as A,T as ae,i as oe,j as se,v as ce}from"./bismuth-BuW-ODlZ.js";import{$ as le,B as j,Cn as ue,D as de,F as fe,Q as pe,R as M,V as me,a as he,b as N,g as ge,gt as _e,h as P,i as ve,in as ye,j as be,lt as xe,o as Se,r as Ce,rt as we,s as Te,sn as Ee,t as De,u as Oe,un as ke,ut as Ae,v as je}from"./input-CDB6F6u-.js";import{B as Me,D as Ne,E as Pe,F as Fe,I as Ie,L as Le,M as Re,N as ze,O as Be,P as Ve,S as He,T as Ue,a as We,j as Ge,k as Ke,n as qe,t as Je,w as Ye,z as Xe}from"./Talents-CTISz3iM.js";import{E as Ze,O as F,S as Qe,T as $e,_ as et,b as tt,c as nt,g as rt,m as it,n as at,o as ot,t as I,v as L,w as st,x as ct,y as lt}from"./AudioManager-Df2hUZ8G.js";import{i as ut,r as dt}from"./settings-V8Pk9DDF.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ft=Math.PI*2,pt=(e,t=!1)=>({closed:t,points:e});function mt(e=-1,t=0,n=1,r=0){return{id:`line`,paths:[pt([e,t,n,r])]}}function ht(e=0,t=Math.PI,n=24){let r=[],i=t-e;for(let t=0;t<=n;t++){let a=e+i*t/n;r.push(Math.cos(a),Math.sin(a))}return{id:`arc`,paths:[pt(r,Math.abs(i)>=ft-1e-6)]}}function gt(e=32){return{...ht(0,ft,e),id:`circle`}}function _t(e=5,t=.45,n=Math.PI/2){let r=[];for(let i=0;i<e*2;i++){let a=n+ft*i/(e*2),o=i%2==0?1:t;r.push(Math.cos(a)*o,Math.sin(a)*o)}return{id:`star${e}`,paths:[pt(r,!0)]}}function vt(e=.5,t=-.3){return{id:`spear`,paths:[pt([1,0,-.55,e,t,0,-.55,-e],!0)]}}function yt(e=2,t=64){let n=[];for(let r=0;r<=t;r++){let i=r/t,a=ft*e*i;n.push(Math.cos(a)*i,Math.sin(a)*i)}return{id:`spiral`,paths:[pt(n)]}}function bt(e=6,t=0){let n=[];for(let r=0;r<e;r++){let i=ft*r/e,a=Math.cos(i),o=Math.sin(i);n.push(pt([a*t,o*t,a,o]))}return{id:`rays${e}`,paths:n}}function xt(e){let{points:t}=e,n=0;for(let e=2;e<t.length;e+=2)n+=Math.hypot(t[e]-t[e-2],t[e+1]-t[e-1]);return e.closed&&t.length>=4&&(n+=Math.hypot(t[0]-t[t.length-2],t[1]-t[t.length-1])),n}function St(e,t){let n=e.paths.map(xt),r=n.reduce((e,t)=>e+t,0);if(r<=0||t<=0)return e;let i=e.paths.map((e,i)=>pt(Ct(e,Math.max(2,Math.round(t*n[i]/r))),e.closed));return{...e,paths:i}}function Ct(e,t){let{points:n}=e,r=e.closed?n.length/2:n.length/2-1;if(r<1)return[...n];let i=xt(e)/(e.closed?t:t-1),a=[n[0],n[1]],o=0,s=0,c=i;for(;a.length<t*2&&o<r;){let e=o*2,t=(o+1)%(n.length/2)*2,r=n[t]-n[e],l=n[t+1]-n[e+1],u=Math.hypot(r,l);if(s+u<c||u===0){s+=u,o++;continue}let d=(c-s)/u;a.push(n[e]+r*d,n[e+1]+l*d),c+=i}return a}function wt(e,t){switch(e){case`in`:return t*t*t;case`out`:{let e=1-t;return 1-e*e*e}case`inOut`:return t<.5?4*t*t*t:1-(-2*t+2)**3/2;case`outBack`:{let e=t-1;return 1+2.70158*e*e*e+1.70158*e*e}default:return t}}var Tt=Math.PI*(3-Math.sqrt(5)),Et=new WeakMap;function Dt(e,t){let n=Et.get(e);n||(n=new Map,Et.set(e,n));let r=n.get(t);if(r)return r;let i=new Float32Array(t*2);if(e.kind===`disc`)for(let e=0;e<t;e++){let n=Math.sqrt((e+.5)/t),r=e*Tt;i[e*2]=Math.cos(r)*n,i[e*2+1]=Math.sin(r)*n}else if(e.kind===`outline`){let n=[];for(let r of St(e.shape,t).paths)for(let e=0;e<r.points.length;e++)n.push(r.points[e]);let r=n.length/2;for(let e=0;e<t;e++){let t=r>0?e%r:0;i[e*2]=n[t*2]??0,i[e*2+1]=n[t*2+1]??0}}return n.set(t,i),i}var Ot={lux:{id:`lux`,label:`Свет`,core:16774870,glow:16771496,shade:12159534},ignis:{id:`ignis`,label:`Огонь`,core:16767392,glow:16738859,shade:9380869},glacies:{id:`glacies`,label:`Холод`,core:14481663,glow:5431551,shade:1205155},fulgur:{id:`fulgur`,label:`Молния`,core:15787263,glow:12160255,shade:5910184},umbra:{id:`umbra`,label:`Мрак`,core:16765156,glow:16727435,shade:7999552}},kt=.38,At=.46,jt=.72,R=1.9,Mt=1.5,Nt={value:1},Pt=`precision mediump float;

/*
 * Луч: спектр, поток и раскрытие.
 *
 * Три вещи делают из светящейся полосы луч, и ни одна в одиночку не делает.
 *
 * СПЕКТР. Цвет берётся по расстоянию от оси: середина выбелена, дальше кольца
 * уходят по радуге. Это и есть призма — свет, разложенный поперёк пучка, а не
 * подкрашенный с краёв.
 *
 * До этого разложение делалось разницей ШИРИН каналов: синий туже, красный
 * шире. Оно давало верную кромку — тёплую по краям, холодную в середине, — но
 * ровно три цвета, потому что каналов три. У спектра их столько, сколько
 * попадёт в полосу: между жёлтым и синим у него есть зелёный, которому в
 * трёхканальной схеме взяться было негде.
 *
 * А до ширин было хуже: каналы разъезжались в СТОРОНЫ, и к концу луча
 * перестали перекрываться — вышли три отдельные полосы, красная, белая и
 * синяя. Здесь этого не случится по устройству: кольца идут симметрично от оси
 * и непрерывно по оттенку, то есть отдельной полосе взяться неоткуда.
 *
 * ПОТОК. Полосы бегут ОТ виспа. Это единственное, по чему видно направление
 * света: сама плоскость симметрична, и без потока луч читается натянутой
 * верёвкой, а не несущейся энергией.
 *
 * РАСКРЫТИЕ. Ядро туго собрано у основания и расходится к концу. Свет,
 * выпущенный из точки, расходится всегда; равномерная по всей длине полоса
 * выглядит нарисованной линейкой.
 */

/**
 * Насколько узко собрано ядро у основания и у конца.
 *
 * Заметно свободнее прежнего, и это не вкус: радуге нужна ширина. На тугом
 * ядре все кольца спектра ложились в четыре пикселя и сливались в белое с
 * цветной каймой — то есть ровно в то, что было до спектра.
 */
#define TIGHT_ROOT 12.0
#define TIGHT_TIP 5.0

/**
 * Докуда середина остаётся белой, в долях видимой полуширины.
 *
 * Без выбеленной середины радуга читается наклейкой: у горячего света ядро
 * всегда выбито в белый, и по этому признаку глаз отличает светящееся от
 * раскрашенного.
 */
#define CORE_SPAN 0.5

/**
 * Сколько спектра укладывается на полуширину при нулевом развороте.
 *
 * Считано, а не подобрано на глаз: полуширина луча — это шесть-семь пикселей у
 * края экрана, и на них должна лечь заметная часть круга, но НЕ больше одного
 * круга. Полный круг на такой ширине означал бы смену оттенка каждый пиксель —
 * то есть цветной шум вместо радуги, — а больше круга дало бы ещё и шов, где
 * спектр замкнётся сам на себя.
 *
 * С этими числами разворот выходит 0.49 круга у виспа, 0.66 у края экрана и
 * 0.90 у самого конца: везде широкая радуга и нигде не замкнутая.
 */
#define HUE_SPAN 0.32

/*
 * Всё, что бежит по лучу, считается в ПИКСЕЛЯХ, а не в долях длины.
 *
 * Раньше считалось в долях: тридцать волн потока на ленту, какой бы она ни
 * была. Пока лента одна и во весь экран, разницы нет. Но та же лента у
 * спутников — игла в сорок восемь пикселей, и тридцать волн на ней ложатся по
 * полтора пикселя каждая: вместо потока получаются полоски, а мелкая дрожь на
 * девяноста одной волне и вовсе уходит в муар.
 *
 * Числа выведены из прежних, и вывод стоит записать — на нём я уже ошибся.
 * В \`sin(vAlong * 30.0)\` тридцать — это РАДИАНЫ на всю длину, а не волны:
 * волн там 30/2pi, то есть меньше пяти. Прочитав тридцатку как число волн, я
 * сделал поток вшестеро гуще, и весь луч превратился в полосатую ленту.
 *
 * Длина луча виспа — диагональ кадра, около 705 пикселей. Отсюда:
 * поток 705 / (30/2pi) = 148 пикселей на волну, дрожь 705 / (91/2pi) = 49.
 */
#define FLOW_WAVE 148.0
#define FLOW_FINE 49.0

/**
 * Насколько оттенок уезжает вдоль луча — на пиксель.
 *
 * Та же арифметика: прежние 0.22 круга приходились на всю длину, то есть на
 * семьсот пикселей. Без перевода в пиксели короткая игла прокручивала бы почти
 * четверть спектра на своих сорока восьми — и это второй источник полосатости,
 * после потока.
 */
#define HUE_PER_PIXEL 0.00031

/** На какой длине веер за призмой раскрывается полностью, пиксели. */
#define SPLIT_SPAN 700.0

/** Насколько далеко от основания видна вспышка выхода, пиксели. */
#define ROOT_GLOW 27.0

#define TAU 6.28318530718

uniform float uTime;
/** Белёсая середина и цвет, из-под которого выходит спектр. */
uniform vec3 uCore;
uniform vec3 uGlow;
/** Насколько радуга вытесняет цвет виспа: ноль — луч одноцветный, как был. */
uniform float uRainbow;
/** Прибавка к развороту спектра у конца луча — веер за призмой. */
uniform float uSplit;
/** Размах яркости: палитра выдаёт единицу, а кадру нужен его собственный. */
uniform float uGain;

varying float vAlong;
varying float vAcross;
varying float vHeat;
varying float vSpan;

/**
 * Спектр по кругу.
 *
 * Три косинуса вместо таблицы: смещения на трети круга дают ровную радугу без
 * мёртвых участков и без единой выборки текстуры. Дешевле любого атласа и
 * непрерывно по построению.
 */
vec3 prism(float hue) {
  return 0.5 + 0.5 * cos(TAU * (hue + vec3(0.0, 0.33, 0.67)));
}

void main() {
  float tight = mix(TIGHT_ROOT, TIGHT_TIP, vAlong);
  float lobe = exp(-vAcross * vAcross * tight);

  /*
   * Расстояние от оси в долях ВИДИМОЙ полуширины.
   *
   * Множитель — корень из тугости, потому что именно так эта полуширина и
   * устроена. Без него радуга не растягивалась бы вместе с лучом: у основания
   * кольца ложились бы поперёк всей полосы, а к концу собирались в точку у
   * самой оси.
   */
  float band = abs(vAcross) * sqrt(tight);

  // Расстояние от основания в пикселях: из него считается всё бегущее.
  float run = vAlong * vSpan;

  // Поток и мелкая дрожь поверх него. Дрожь тоже бежит наружу и заметно
  // быстрее: одна ровная волна читалась бы бегущей строкой.
  float stream = 0.72 + 0.28 * sin(run / FLOW_WAVE * TAU - uTime * 11.0);
  stream *= 0.88 + 0.12 * sin(run / FLOW_FINE * TAU - uTime * 27.0 + vAcross * 3.0);

  // Конец растворяется, у основания — вспышка выхода.
  float tip = 1.0 - smoothstep(0.86, 1.0, vAlong);
  float root = 1.0 + exp(-run / ROOT_GLOW) * 1.6;

  /*
   * Оттенок УБЫВАЕТ от оси и едет вдоль луча и во времени.
   *
   * Убывает, а не растёт, и направление здесь решает всё: по возрастанию спектр
   * от белого уходил сразу в малиновый и синий, минуя жёлтый и зелёный, — то
   * есть ровно те цвета, по которым разложенный свет и узнают. По убыванию
   * порядок выходит природный: белое ядро, жёлтая кромка, дальше зелёный,
   * бирюзовый, синий, фиолетовый.
   *
   * Вдоль луча — потому что веер за призмой тем шире, чем дальше от неё, и
   * потому что одинаковый по всей длине спектр выглядит натянутой лентой. Во
   * времени — медленно: радуга должна дышать, а не мигать.
   */
  float fan = uSplit * min(1.0, run / SPLIT_SPAN);
  float hue = -band * (HUE_SPAN + fan) - run * HUE_PER_PIXEL - uTime * 0.1;
  vec3 rainbow = prism(hue) * uGain;

  // Цвет виспа остаётся под радугой: на нуле \`uRainbow\` луч тот же
  // одноцветный, что и был, и скин по-прежнему что-то значит.
  vec3 spread = mix(uGlow, rainbow, uRainbow);
  float hot = smoothstep(CORE_SPAN, 0.0, band);
  vec3 tint = mix(spread, uCore, hot);

  // Складывается с кадром, поэтому вся форма уже в цвете: прозрачность здесь
  // единица, иначе спад пришлось бы возводить в квадрат.
  gl_FragColor = vec4(tint * (lobe * stream * tip * root * vHeat), 1.0);
}
`,Ft=`// Луч: плоскость от виспа до края кадра.
//
// Место вершины вдоль луча и поперёк него залито в буфер один раз и больше не
// меняется: у всех лучей оно одинаково, а меняются только сами углы плоскости.
// Каждый кадр переписываются лишь положения и накал.
attribute float aAlong;
attribute float aAcross;
attribute float aHeat;
// Длина ленты в пикселях мира: по ней шейдер считает поток и радугу в
// физическом масштабе, а не в долях длины. Подробности в beam.frag.glsl.
attribute float aSpan;

varying float vAlong;
varying float vAcross;
varying float vHeat;
varying float vSpan;

void main() {
  vAlong = aAlong;
  vAcross = aAcross;
  vHeat = aHeat;
  vSpan = aSpan;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,It=`// Чёрная дыра: шейдер «Singularity» Хора (@XorDev, shadertoy.com/view/3csSWB),
// приспособленный к нашему кадру. Точность и квантование — lib/common.frag.glsl.
//
// Рисует ЕГО МАТЕМАТИКА, целиком: искривление координат от смещённого центра,
// логарифмическая спираль, девять проходов волн и — главное — сборка яркости
// делением с двойной экспонентой. Последнее и даёт тот вид, ради которого
// шейдер брали: диск и обод получаются сами, из одного выражения, а не
// собираются из колец, и потому не выглядят наклейкой.
//
// Своё здесь только то, без чего он не живёт в нашем кадре, и таких вещей три.
//
// НЕПРОЗРАЧНОСТЬ. У оригинала альфы нет вовсе — он заливает экран целиком.
// Вывести её из яркости нельзя: самое тёмное место дыры стало бы самым
// прозрачным, и сквозь горизонт просвечивали бы звёзды. Здесь тень и диск
// непрозрачны сами по себе, а свет добавляет непрозрачности сверху.
//
// ПАЛИТРА. Красно-синий градиент заменён парой цветов скина. Заменён именно
// градиент, а не яркость: разница между каналами у Хора несёт форму — одна
// сторона диска горячее другой, — и она сохранена. Где у него все три канала
// уходят в белое, белое остаётся белым.
//
// КАДР. Круглая маска квада и наклон диска: без них дыра шла бы
// прямоугольником.

uniform float uTime;
uniform vec3 uHot;
uniform vec3 uCold;
uniform float uIntensity;
uniform float uTilt;
uniform float uCeiling;

varying vec2 vUv;

/** Радиус непрозрачной тени в долях полуширины квада. */
#define HORIZON 0.3

/** Где в координатах диска лежит обод — то самое \`.7\` из оригинала. */
#define RIM 0.7

/** Сколько проходов волн наматывается на закрученные координаты. */
const int WAVES = 9;

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  float r = length(uv);
  if (r > 1.0) discard;

  /*
   * Наклон — до всего остального.
   *
   * Сжимаем по вертикали ДО искривления, а не картинку после: тогда спираль
   * ложится на сплюснутый диск сама, как если бы мы смотрели на него под углом.
   * Сжатие готового изображения дало бы овал из круглых колец, то есть плоскую
   * наклейку. У фонового ориентира наклон почти с ребра, у колодца — плашмя.
   */
  vec2 p = vec2(uv.x, uv.y / max(uTilt, 0.08)) / 0.7;
  float lp = length(p);

  vec2 d = vec2(-1.0, 1.0);
  float i = 0.2;

  // Центр искривления смещён по диагонали: у диска появляются ближняя и дальняя
  // стороны без единой строчки про перспективу.
  vec2 b = p - i * d;
  vec2 c = p * mat2(1.0, 1.0, d / (0.1 + i / dot(b, b)));

  /*
   * Ноль в логарифм не пускаем.
   *
   * Ровно в центре \`dot(c, c)\` обращается в ноль, \`log\` даёт минус
   * бесконечность, а косинус от неё — NaN. Один такой пиксель не просто чёрный:
   * он уходит в блум и пачкает вокруг себя целую область. У Хора этого не
   * видно — там дыра смещена от центра экрана и в точный ноль не попадает; у
   * нас квад центрирован по ней, и попадает всегда.
   */
  float a = max(dot(c, c), 1e-6);

  // Логарифмическая спираль: угол растёт с логарифмом расстояния, поэтому витки
  // сгущаются к горизонту, а не идут ровной каруселью.
  vec4 turn = cos(0.5 * log(a) + uTime * i + vec4(0.0, 33.0, 11.0, 0.0));
  // Матрица из четырёх скаляров, а не из одного вектора: спека такое допускает,
  // но принимают не все драйверы, и падает это молча — программа просто не
  // компилируется.
  vec2 v = (c * mat2(turn.x, turn.y, turn.z, turn.w)) / i;

  // Счётчик целый, а не дробный, как в оригинале: в GLSL ES 1.00 цикл с
  // плавающим условием разворачивается не на всех драйверах. Значения \`i\` те же,
  // от 1.2 до 9.2, и порядок тот же — сначала сдвиг \`v\`, потом накопление \`w\`.
  vec2 w = vec2(0.0);
  for (int n = 0; n < WAVES; n++) {
    i += 1.0;
    v += 0.7 * sin(v.yx * i + uTime) / i + 0.5;
    w += 1.0 + sin(v);
  }

  float disk = length(sin(v / 0.3) * 0.4 + c * (3.0 + d));

  /*
   * Яркость Хора, слово в слово.
   *
   * Собирается ДЕЛЕНИЕМ, а не сложением слоёв: волны дают структуру, диск —
   * кольцо, \`1/a\` — темноту у центра, последний множитель — узкую полосу обода.
   * Двойная экспонента сверху выбивает плотное в белое. Ни одного слагаемого
   * здесь не добавлено и не убрано: это и есть тот вид, ради которого шейдер
   * брали, и трогать тут нечего.
   */
  vec3 glow = exp(c.x * vec3(0.6, -0.4, -1.0))
    / vec3(w.x, w.y, w.y)
    / (2.0 + disk * disk / 4.0 - disk)
    / (0.5 + 1.0 / a)
    / (0.03 + abs(lp - RIM));

  vec3 lit = 1.0 - exp(-glow);

  /*
   * Палитра.
   *
   * \`level\` — его яркость, берём как есть. \`white\` — насколько все три канала
   * ушли в потолок: там, где у Хора белое, белое и остаётся, иначе дыра
   * потеряла бы раскалённый край. \`warm\` — куда наклонились каналы: красный
   * обгоняет синий на той стороне, что набегает на зрителя. Это форма, а не
   * украшение, поэтому она и решает, где горячий цвет скина, а где холодный.
   * Мягкий знак вместо голого \`c.x\`: под наклоном с ребра \`c.x\` разбегается на
   * порядки и без него палитра схлопнулась бы в один цвет.
   */
  float level = max(max(lit.r, lit.g), lit.b);
  float white = min(min(lit.r, lit.g), lit.b);
  float warm = c.x / (abs(c.x) + 1.4) * 0.5 + 0.5;
  vec3 color = mix(mix(uCold, uHot, warm) * level, vec3(level), white) * uIntensity * 2.6;

  /*
   * Тень.
   *
   * У Хора центр темнеет сам — из-за деления на \`0.5 + 1/a\`, — но не до конца и
   * не по кругу. Нам нужен ровно чёрный круг: горизонт событий это не «очень
   * тёмное место», а место, откуда свет не выходит.
   */
  float shadow = 1.0 - smoothstep(HORIZON - 0.03, HORIZON, r);
  color = min(color, vec3(uCeiling)) * (1.0 - shadow);

  /*
   * Непрозрачность.
   *
   * Три вклада, и каждый закрывает свою дыру в буквальном смысле:
   *
   * - тень — всегда непрозрачна, иначе сквозь горизонт видны звёзды;
   * - \`body\` — плоскость диска до обода. Между тенью и ободом у Хора темно, и
   *   без этой маски там зиял бы прозрачный бублик. Маска эллиптическая (по
   *   \`lp\`), поэтому с ребра остаётся полоской, а не раздувается в шар;
   * - свет — добавляет непрозрачности там, где ярко.
   *
   * Наружу всё сходит на нет по круглому краю, чтобы квад себя не выдал.
   */
  float body = max(shadow, 1.0 - smoothstep(0.52, RIM + 0.08, lp));
  float alpha = max(body, clamp(level * uIntensity * 3.0, 0.0, 1.0));
  alpha *= 1.0 - smoothstep(0.8, 1.0, r);

  gl_FragColor = vec4(color, alpha);
}
`,Lt=`// Разряд: плоскость от точки до точки.
//
// Та же схема, что у луча (beam.vert.glsl): место вершины вдоль и поперёк
// залито в буфер один раз, каждый кадр меняются только углы. Отличий два, и оба
// нужны фрагментному шейдеру, чтобы шум был ОДИНАКОВОГО МАСШТАБА на разрядах
// любой длины: полуширина плоскости в пикселях мира и собственное зерно каждого
// разряда.
attribute float aAlong;
attribute float aAcross;
attribute float aHeat;
attribute float aSpan;
attribute float aHalf;
attribute float aSeed;
attribute vec3 aTint;

varying float vAlong;
varying float vAcross;
varying float vHeat;
varying float vSpan;
varying float vHalf;
varying float vSeed;
varying vec3 vTint;

void main() {
  vAlong = aAlong;
  vAcross = aAcross;
  vHeat = aHeat;
  vSpan = aSpan;
  vHalf = aHalf;
  vSeed = aSeed;
  vTint = aTint;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Rt=`// Общий вершинный шейдер для полноэкранных квадов (туманность, чёрная дыра).
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,zt=`// Спиральная галактика: ядро, рукава, пылевые прожилки.
// Точность и шум приходят из lib/common.frag.glsl.

uniform float uTime;
uniform vec3 uCore;
uniform vec3 uArm;
uniform vec3 uDust;
uniform float uTilt;
uniform float uBrightness;
uniform float uCeiling;

varying vec2 vUv;

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  // Диск наклонён к наблюдателю: сжимаем по вертикали.
  vec2 p = vec2(uv.x, uv.y / max(uTilt, 0.05));
  float r = length(p);
  if (r > 1.0) discard;

  vec2 dir = p / max(r, 0.0001);

  // sin(2θ) и cos(2θ) выражены через направление — atan не нужен, а значит
  // и шва на ±pi быть не может (см. историю диска чёрной дыры).
  float s2 = 2.0 * dir.x * dir.y;
  float c2 = dir.x * dir.x - dir.y * dir.y;

  // Логарифмическая спираль: угол закрутки растёт с радиусом.
  float twist = log(r * 3.0 + 0.35) * 3.4 - uTime * 0.05;
  float arms = s2 * cos(twist) + c2 * sin(twist);
  float armMask = pow(clamp(arms * 0.5 + 0.5, 0.0, 1.0), 2.6);

  // Клочковатость рукавов: шум по повёрнутому направлению.
  float cs = cos(twist * 0.5);
  float sn = sin(twist * 0.5);
  vec2 q = vec2(dir.x * cs - dir.y * sn, dir.x * sn + dir.y * cs) * (2.0 + r * 6.0);
  float clumps = noise(q) * 0.62 + 0.38 * noise(q * 2.7 + vec2(5.1, -3.3));

  float disk = exp(-r * 2.6);
  float core = exp(-r * 9.0);

  vec3 color = uArm * armMask * clumps * disk * 2.4;
  color += uCore * core * 1.5;
  color += uDust * disk * clumps * 0.3;

  // Пылевые полосы: тёмные прожилки вдоль рукавов, без них галактика
  // выглядит ровным пятном.
  color *= 1.0 - 0.5 * smoothstep(0.45, 0.95, clumps) * armMask;

  color *= uBrightness;
  color = min(color, vec3(uCeiling));

  float alpha = clamp(max(max(color.r, color.g), color.b) * 2.4, 0.0, 1.0);
  gl_FragColor = vec4(color, alpha);
}
`,Bt=`precision mediump float;

uniform sampler2D uMap;
uniform float uGrid;

varying vec3 vColor;
varying float vAlpha;
varying float vTile;

void main() {
  if (vAlpha <= 0.001) discard;

  // Смещение по сетке атласа: тайл выбирается номером глифа.
  vec2 tile = vec2(mod(vTile, uGrid), floor(vTile / uGrid));
  vec2 uv = (tile + gl_PointCoord) / uGrid;

  vec4 texel = texture2D(uMap, uv);
  if (texel.a < 0.02) discard;

  // Тень в атласе чёрная — её нельзя красить в цвет числа.
  vec3 color = mix(vec3(0.0), vColor, texel.r);
  gl_FragColor = vec4(color * vAlpha, texel.a * vAlpha);
}
`,Vt=`precision mediump float;

/**
 * Потолок яркости полосы. Держится ниже порога bloom: интерфейс не светится,
 * светятся только висп, враги и снаряды.
 */
const float BAR_CEILING = 0.42;

varying vec2 vUv;
varying float vFill;
varying vec3 vColor;

void main() {
  // Тёмная окантовка в один пиксель: полоса читается на любом фоне.
  float border = step(vUv.y, 0.18) + step(0.82, vUv.y) + step(vUv.x, 0.06) + step(0.94, vUv.x);
  if (border > 0.5) {
    gl_FragColor = vec4(0.02, 0.01, 0.05, 0.85);
    return;
  }

  if (vUv.x <= vFill) {
    gl_FragColor = vec4(min(vColor, vec3(BAR_CEILING)), 1.0);
  } else {
    gl_FragColor = vec4(0.08, 0.05, 0.12, 0.7);
  }
}
`,Ht=`// Полосы здоровья: один инстанс на врага.
attribute vec2 aOffset;
attribute vec2 aSize;
attribute float aFill;
attribute vec3 aColor;

varying vec2 vUv;
varying float vFill;
varying vec3 vColor;

void main() {
  vUv = uv;
  vFill = aFill;
  vColor = aColor;

  vec2 world = position.xy * aSize + aOffset;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(world, 0.0, 1.0);
}
`,Ut=`// Разряд: шейдер «Lightning» (reactbits.dev/backgrounds/lightning),
// приспособленный к нашему кадру. Точность и квантование — lib/common.frag.glsl.
//
// Рисует ЕГО МАТЕМАТИКА: десять октав шума с поворотом на 0.45 между ними,
// координата, СМЕЩЁННАЯ этим шумом, и яркость как единица, делённая на
// расстояние до оси. Последнее и даёт тот вид, ради которого шейдер брали:
// разряд получается не нарисованной ломаной, а светом, который сам находит
// извилистый путь, — и путь этот меняется каждый кадр.
//
// Своё здесь только то, без чего он не живёт в нашем кадре, и таких вещей три.
//
// КАДР. У него разряд идёт через весь экран сверху вниз и никуда не
// приколот — он фон. У нас разряд СОЕДИНЯЕТ ДВЕ ТОЧКИ: висп с врагом, врага с
// врагом. Поэтому координаты берутся не из пикселя экрана, а из ленты (вдоль и
// поперёк), а у концов смещение сходит на нет — иначе разряд отрывался бы от
// того, кого бьёт, и это читалось бы промахом.
//
// МАСШТАБ. Его \`0.07\` — доля ЭКРАНА, на котором ядро выходит пикселей в
// двадцать. У нас та же доля считается от полуширины ленты, а лента бывает и в
// десять пикселей: без переводного множителя ядро вышло бы тоньше пикселя.
// Отсюда \`uThick\`. По той же причине шум считается в полуширинах ленты, а не в
// долях её длины: иначе короткое ответвление выглядело бы сжатой копией длинного
// разряда, а должно — его куском.
//
// ПАЛИТРА. Оттенок по кругу HSV заменён парой цветов скина. Заменён именно
// оттенок, а не яркость: форму несёт она, и она оставлена как есть.

uniform float uTime;
/** Ядро — почти белый цвет виспа. */
uniform vec3 uCore;
uniform float uSpeed;
uniform float uIntensity;
uniform float uSize;
/** Во что превращается его доля экрана на нашей ленте. */
uniform float uThick;
/** Насколько разряд уводит от прямой, в полуширинах ленты. */
uniform float uWander;
uniform float uGain;

varying float vAlong;
varying float vAcross;
varying float vHeat;
varying float vSpan;
varying float vHalf;
varying float vSeed;
/** Ореол: свой у каждого разряда — цепь, пентаграмма и искры удара разные. */
varying vec3 vTint;

/** Столько же октав, сколько у него: на меньшем числе шум теряет мелкий излом. */
#define OCTAVES 10

/*
 * Шум у разряда СВОЙ, а не из общей библиотеки, и это не небрежность.
 *
 * У библиотечного \`fbm\` пять октав и сдвиг между ними; у него — десять и
 * ПОВОРОТ на 0.45. Поворот и есть причина, по которой его шум не даёт сетки:
 * октавы ложатся под углом друг к другу, и решётка ячеек не совпадает сама с
 * собой. Заменить его библиотечным значит получить другой разряд.
 */
float boltHash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float boltHash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

mat2 boltTurn(float theta) {
  float c = cos(theta);
  float s = sin(theta);
  return mat2(c, -s, s, c);
}

float boltNoise(vec2 p) {
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float a = boltHash12(ip);
  float b = boltHash12(ip + vec2(1.0, 0.0));
  float c = boltHash12(ip + vec2(0.0, 1.0));
  float d = boltHash12(ip + vec2(1.0, 1.0));

  vec2 t = smoothstep(0.0, 1.0, fp);
  return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
}

float boltFbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * boltNoise(p);
    p = p * boltTurn(0.45);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  if (vHeat <= 0.001) discard;

  /*
   * Координаты в ПОЛУШИРИНАХ ленты.
   *
   * Поперёк это ±1 — край плоскости. Вдоль столько, сколько полуширин
   * укладывается в длину: короткий отросток даёт три-четыре, разряд через
   * полэкрана — три десятка. Ячейки шума при этом у всех одинаковые, и потому
   * отросток выглядит куском разряда, а не его уменьшенной копией.
   */
  vec2 base = vec2(vAcross, (vAlong - 0.5) * vSpan / max(vHalf, 0.5));

  /*
   * Время СВОРАЧИВАЕТСЯ, и это не мелочь.
   *
   * У него шейдер живёт секунды: фон запускают и смотрят. У нас забег идёт
   * полчаса и больше, а десятая октава умножает координату на тысячу — то есть
   * к тридцатой минуте в шум приходят числа за десять миллионов. Мантисса
   * \`highp\` кончается на шестнадцати, и шум там вырождается в полосы.
   *
   * Свёрнутое время этого не допускает. Скачок раз в две минуты приходится на
   * один кадр разряда, живущего полторы десятых секунды, — увидеть его нельзя.
   */
  float beat = mod(uTime * uSpeed, 128.0);

  // Смещение — его, слово в слово: шум сдвигает саму координату, а не яркость.
  vec2 shift = base * uSize + 0.8 * beat + vSeed;
  float wander = (2.0 * boltFbm(shift) - 1.0) * uWander;

  /*
   * Концы приколоты к точкам.
   *
   * У него разряд уходит за кадр обоими концами, и смещать его целиком можно
   * как угодно. Наш соединяет виспа с врагом: оторвись он от врага хоть на
   * пиксель — и удар читается промахом. Поэтому у концов смещение сходит на
   * нет, а вся извилина достаётся середине, где она и нужна.
   */
  float anchor = smoothstep(0.0, 0.22, vAlong) * (1.0 - smoothstep(0.78, 1.0, vAlong));
  float dist = abs(base.x + wander * anchor);

  /*
   * Яркость: единица, делённая на расстояние до оси. Мерцание в числителе —
   * тоже его.
   *
   * Но мерцание пришлось приручить дважды, и оба раза по одной причине: у него
   * разряд горит непрерывно, у нас — полторы десятых секунды.
   *
   * ПОЛ. У него нижняя граница ноль: фон имеет право погаснуть целиком, через
   * секунду он всё равно вернётся. У нас погасший кадр приходится на каждый
   * десятый кадр удара, и читается он не мерцанием, а провалом отрисовки.
   *
   * СТУПЕНЬ ПО ВРЕМЕНИ. Хэш от непрерывно растущего времени — это белый шум
   * каждый кадр, то есть стробоскоп на шестьдесят герц. Ступень оставляет
   * десяток смен в секунду: за жизнь разряда яркость успевает дрогнуть раз, а
   * не девять. Путь при этом продолжает извиваться каждый кадр — за него
   * отвечает \`beat\` без ступени, и в этом вся живость.
   */
  float flicker = mix(0.038, 0.07, boltHash11(floor(beat * 3.0) + vSeed)) * uThick;

  /*
   * Единица вычитается, и без неё шейдер РИСУЕТ ПРЯМОУГОЛЬНИК.
   *
   * Голое \`1/dist\` не доходит до нуля нигде: у края плоскости оно равно самому
   * \`flicker\`, то есть вся плоскость целиком светится ровным слабым светом. У
   * него это и есть дальнее свечение разряда — плоскости там нет, шейдер залит
   * во весь экран. У нас плоскость короткая и с прямыми краями, и это свечение
   * обводит её видимым коробом. На скриншоте игрока он поймался прямо: светлый
   * прямоугольник вокруг разряда.
   *
   * Вычитание убирает его точно, а не приблизительно: на \`dist == 1\` выражение
   * обращается в ноль по построению, а форма \`1/dist\` у ядра остаётся его.
   */
  float glow = flicker * max(1.0 / max(dist, 0.003) - 1.0, 0.0);

  /*
   * И вторая обводка — от самой плоскости.
   *
   * Жила гуляет поперёк (\`uWander\`), поэтому ноль на \`dist == 1\` не совпадает с
   * краем квада: с той стороны, куда разряд ушёл, край приходится на \`dist\`
   * около четырёх десятых, и там свечение ещё есть. Маска по \`vAcross\` гасит
   * ровно край, где бы жила ни оказалась.
   */
  glow *= 1.0 - smoothstep(0.7, 1.0, abs(vAcross));

  /*
   * Палитра.
   *
   * У него один цвет из HSV на всю жилу. У нас два: ядро выбито в белёсый цвет
   * виспа, ореол — цвет скина или связки. Так разряд остаётся своим при любом
   * скине и при этом читается разрядом: у горячего света ядро всегда белое.
   */
  vec3 tint = mix(vTint, uCore, clamp(glow * 0.55, 0.0, 1.0));

  /*
   * Вся форма — в цвете, прозрачность единица.
   *
   * Так же собран луч: в складывающем режиме кадр получает \`rgb * alpha\`, и
   * разложи спад по обоим — он возведётся в квадрат.
   */
  /*
   * Потолок вдвое ниже прежнего.
   *
   * На трёх ядро выходило впятеро ярче предела экрана, и с блумом это была уже
   * не молния, а вспышка на пол-кадра. Полторы единицы оставляют ядро выбитым в
   * белое — как и положено горячему свету, — но перестают заливать всё вокруг.
   */
  vec3 lit = tint * min(glow, 1.5) * uIntensity * vHeat * uGain;

  gl_FragColor = vec4(lit, 1.0);
}
`,Wt=`// Цифры урона: каждая цифра — отдельная точка со своим тайлом в атласе.
attribute float aSize;
attribute float aAlpha;
attribute float aTile;
attribute vec3 aColor;

varying vec3 vColor;
varying float vAlpha;
varying float vTile;

void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vTile = aTile;
  gl_PointSize = aSize;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Gt=`// Общая «стандартная библиотека» фрагментных шейдеров игры.
// Подклеивается перед телом шейдера в shaders/index.ts, поэтому объявление
// точности живёт здесь — в самих шейдерах его дублировать не нужно.

precision highp float;

float hash12(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amp * noise(p);
    p = p * 2.03 + vec2(17.3, 9.1);
    amp *= 0.5;
  }
  return value;
}

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

// Трёхмерный шум. Нужен для планет: узор берётся от нормали сферы, поэтому
// на сфере нет ни шва по долготе, ни стянутых полюсов.
float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float n000 = hash13(i);
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));

  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z
  );
}

float fbm3(vec3 p) {
  float value = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amp * noise3(p);
    p = p * 2.07 + vec3(11.1, 7.3, 3.7);
    amp *= 0.5;
  }
  return value;
}

`,Kt=`// Тело блуждающего огня: шар плазмы с ровной кромкой (\`render/OrbBodies\`).
// Шум, точность и квантование — lib/common.frag.glsl.
//
// Прежде тело было точечным спрайтом мягкого света. Размер шара растят охват,
// таланты и пир, и вместе с размером рос ВЕСЬ его свет: на прокачке по кадру
// ездило бы расплывшееся пятно без тела и без края. Здесь размер двигает только
// тело, а всё, что светится, держит свою меру:
//
//   кромка    ровная, в пиксель буфера при любом радиусе, и чуть дышит шумом;
//   ореол     постоянной ширины в МИРОВЫХ единицах (\`uHalo\`), а не в долях радиуса;
//   ободок    светлая полоса вдоль кромки — тоже в мировых единицах;
//   плазма    трёхмерный шум на нормали сферы: шар объёмный и катится по ходу;
//   прожилки  тонкие светлые нити по гребням шума;
//   сердце    выбелено, радиус с потолком — крупный шар не белеет целиком.
//
// Порог блума переходят в основном ободок и сердце, а площадь внутри — тёмная
// плазма. Замер на порте шейдера в JS (native 1080p): при радиусе тела 7 → 40
// площадь растёт в 31 раз, а число цветущих пикселей — в 10 (136 → 1313):
// свечение растёт с длиной кромки, а не с площадью шара.
//
// Все числа, кроме замера, — ДОПУЩЕНИЕ, подбираются глазом.

uniform float uTime;
uniform float uGain;
/** Пикселей буфера на мировую единицу — см. render/pixelScale.ts. */
uniform float uPixelScale;
/** Ширина ореола, мировые единицы. */
uniform float uHalo;
/** Глубина плазмы, цвет способности, выбеленное ядро и горячий розовый сердца. */
uniform vec3 uDeep;
uniform vec3 uColor;
uniform vec3 uCore;
uniform vec3 uHot;

varying vec2 vLocal;
varying vec3 vBody;
varying vec4 vTurn;
varying float vReach;

#define TAU 6.28318530718
/** Сила ореола. */
#define HALO_GLOW 0.35
/** Ободок: спад от кромки внутрь (мировые единицы) и сила. */
#define RIM 1.6
#define RIM_GLOW 0.6
/** Край шара светлее середины — объём. */
#define LIMB_GLOW 0.35
/** Прожилки: крутизна гребня (замер на порте: ~11% площади) и сила. */
#define VEIN_SHARP 24.0
#define VEIN_GLOW 0.45
/** На сколько мировых единиц кромка дышит в каждую сторону и не больше какой доли радиуса. */
#define WOBBLE 1.2
#define WOBBLE_SHARE 0.12
/** Сердце: доля радиуса тела, потолок в мировых единицах и сила. */
#define HEART_SHARE 0.3
#define HEART_MAX 6.0
#define HEART_GLOW 1.0

/** Поворот вектора кватернионом: xyz — ось на синус половины угла, w — косинус. */
vec3 turn(vec3 v, vec4 q) {
  vec3 t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}

/** Поворот на плоскости; угол приходит уже свёрнутым в оборот. */
vec2 rotate(vec2 v, float a) {
  float c = cos(a);
  float s = sin(a);
  return vec2(v.x * c - v.y * s, v.x * s + v.y * c);
}

/**
 * Плазма: до трёх октав, и мелкие гаснут на мелком шаре.
 *
 * На шаре в десяток пикселей октава тоньше пикселя не видна, а мерцает рябью,
 * пока шар катится; \`mid\` и \`fine\` снимают её там, где её всё равно не
 * разглядеть. Сумма делится на свой вес: уровень шума не зависит от числа октав.
 */
float plasma(vec3 p, float mid, float fine) {
  float value = 0.5 * noise3(p);
  if (mid > 0.0) value += 0.25 * mid * noise3(p * 2.03 + vec3(11.1, 7.3, 3.7));
  if (fine > 0.0) value += 0.125 * fine * noise3(p * 4.11 + vec3(5.2, 13.7, 1.9));
  return value / (0.5 + 0.25 * mid + 0.125 * fine);
}

void main() {
  float radius = max(vBody.x, 0.5);
  float alpha = vBody.y;
  float seed = vBody.z;
  float r = length(vLocal);
  // Пиксель буфера в мировых единицах: кромка шириной в пиксель при любом размере.
  float pixel = 1.0 / max(uPixelScale, 0.001);
  // Радиус тела в пикселях буфера — по нему гаснут детали, тоньше пикселя.
  float span = radius * uPixelScale;

  /*
   * Кромка дышит: два узора крутятся навстречу и складываются.
   *
   * Углы свёрнуты в оборот: время забега в шум без предела не идёт (см. грабли
   * точности в lightning.frag.glsl), а поворот на полный оборот узор не меняет —
   * шва на свёртке нет. Направление при нуле — сдвиг, а не деление на ноль.
   */
  vec2 dir = vLocal / max(r, 0.0001);
  float spinA = mod(uTime * 0.7 + seed * TAU, TAU);
  float spinB = mod(-uTime * 1.1 + seed * 4.0, TAU);
  float breath = noise(rotate(dir, spinA) * 2.2 + seed * 31.0);
  breath += noise(rotate(dir, spinB) * 3.1 + seed * 17.0) - 1.0;
  float edge = radius + breath * min(WOBBLE, radius * WOBBLE_SHARE);

  float body = 1.0 - smoothstep(edge - pixel, edge + pixel, r);

  // Ореол: спад от кромки наружу в мировых единицах; к краю квада доводится до нуля.
  float outside = max(r - edge, 0.0);
  float fade = 1.0 - smoothstep(vReach * 0.8, vReach, r);
  float halo = exp(-outside / max(uHalo, 0.001)) * fade;
  vec3 lit = uColor * halo * HALO_GLOW * (1.0 - body);

  if (body > 0.0) {
    vec2 q = vLocal / edge;
    float z = sqrt(max(1.0 - dot(q, q), 0.0));
    // Нормаль сферы — в узор шара: узор катится вместе с шаром, а не плывёт по кадру.
    vec3 n = turn(vec3(q, z), vTurn);
    vec3 grain = vec3(seed * 37.0, seed * 17.0, seed * 53.0);

    // Кипение: вторая выборка вращается вокруг оси узора и сбивает первую.
    float boil = mod(uTime * 0.8 + seed * TAU, TAU);
    vec3 m = vec3(rotate(n.xy, boil), n.z);
    float warp = noise3(m * 2.2 + grain.zxy);
    float mid = smoothstep(6.0, 14.0, span);
    float fine = smoothstep(14.0, 32.0, span);
    float flow = plasma(n * 2.4 + warp * 1.5 + grain, mid, fine);

    vec3 inside = mix(uDeep, uColor, smoothstep(0.3, 0.7, flow)) * (0.35 + 0.4 * flow);

    // Прожилки: гребни шума там, где он проходит середину. Основание степени — не
    // ниже нуля: округление шума за единицу дало бы \`pow\` от минуса, а это NaN.
    float ridge = max(1.0 - abs(2.0 * flow - 1.0), 0.0);
    float vein = pow(ridge, VEIN_SHARP) * smoothstep(8.0, 20.0, span);
    inside += mix(uColor, uCore, 0.4) * vein * VEIN_GLOW;

    // Объём: край шара светлее середины, и ободок вдоль самой кромки.
    float limb = (1.0 - z) * (1.0 - z);
    float rim = exp(-max(edge - r, 0.0) / RIM);
    inside += uColor * limb * LIMB_GLOW + mix(uColor, uCore, 0.5) * rim * RIM_GLOW;

    float heartRadius = min(radius * HEART_SHARE, HEART_MAX);
    float heart = exp(-r * r / (heartRadius * heartRadius));
    float flicker = 0.85 + 0.15 * sin(mod(uTime * 11.0 + seed * TAU, TAU));
    inside += mix(uHot, uCore, heart) * heart * HEART_GLOW * flicker;

    lit += inside * body;
  }

  // Ниже заметного — ничего: невидимый хвост ореола не платится пикселями (см. копьё).
  vec3 scaled = lit * alpha * uGain;
  if (max(scaled.r, max(scaled.g, scaled.b)) < 0.025) discard;

  // Вся форма в цвете, прозрачность единица: складывающий режим, см. кольцо.
  gl_FragColor = vec4(scaled, 1.0);
}
`,qt=`// Тело блуждающего огня: один инстанс квада на шар (\`render/OrbBodies\`).
//
// Квад считается в мировых единицах от середины шара и выходит за тело ровно на
// ореол ПОСТОЯННОЙ ширины: крупный шар получает крупный квад, а ореол у него тот
// же, что у мелкого.
attribute vec2 aOffset; // середина шара, мир
attribute vec3 aBody;   // радиус тела (мир), яркость, случайность
attribute vec4 aTurn;   // поворот узора кватернионом: плазма катится по ходу шара

/** Ширина ореола, мировые единицы. */
uniform float uHalo;

varying vec2 vLocal;
varying vec3 vBody;
varying vec4 vTurn;
varying float vReach;

/** На сколько ширин ореола квад выходит за тело: дальше свет ниже полступени. */
#define HALO_SPAN 5.0

void main() {
  vBody = aBody;
  vTurn = aTurn;
  vReach = aBody.x + uHalo * HALO_SPAN;
  // Плоскость 1×1 лежит от −0.5 до 0.5: вдвое — и квад от −reach до reach.
  vLocal = position.xy * 2.0 * vReach;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(aOffset + vLocal, 1.0, 1.0);
}
`,Jt=`// Планета: диск с процедурной поверхностью, вращением и терминатором.
// Точность и шум приходят из lib/common.frag.glsl.

uniform float uTime;
uniform vec3 uColorLow;
uniform vec3 uColorHigh;
uniform vec3 uAtmosphere;
uniform vec2 uLight;
uniform float uSpin;
/** 0 — каменистая поверхность, 1 — газовые полосы. */
uniform float uBands;
/** Доля полярных шапок. */
uniform float uIce;
uniform float uBrightness;
uniform float uCeiling;

varying vec2 vUv;

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  float r2 = dot(uv, uv);
  if (r2 > 1.0) discard;

  // Восстанавливаем нормаль сферы по экранной точке диска.
  float z = sqrt(max(0.0, 1.0 - r2));
  vec3 n = vec3(uv, z);

  // Вращение вокруг оси Y. Узор берём трёхмерным шумом от повёрнутой нормали:
  // никакой долготы через atan, значит и шва на терминаторе быть не может.
  float a = uTime * uSpin;
  float cs = cos(a);
  float sn = sin(a);
  vec3 sp = vec3(n.x * cs + n.z * sn, n.y, -n.x * sn + n.z * cs);

  float lat = sp.y;
  float turbulence = fbm3(sp * 2.4);
  // Газовый гигант: полосы по широте, размытые турбулентностью.
  float bands = sin(lat * 9.0 + turbulence * 3.4) * 0.5 + 0.5;
  float terrain = fbm3(sp * 3.4 + vec3(4.0));
  float surface = mix(terrain, bands, uBands);

  vec3 color = mix(uColorLow, uColorHigh, smoothstep(0.34, 0.72, surface));
  color = mix(color, vec3(0.82, 0.9, 1.0), uIce * smoothstep(0.68, 0.96, abs(lat)));

  // Терминатор: свет падает сбоку, ночная сторона почти чёрная.
  vec3 lightDir = normalize(vec3(uLight, 0.55));
  float diffuse = clamp(dot(n, lightDir), 0.0, 1.0);
  float shade = smoothstep(0.0, 0.6, diffuse);
  color *= 0.05 + 0.95 * shade;

  // Атмосферный ободок — только со стороны света и заметно слабее диска:
  // светящийся контур на тёмной планете читается как цель, а не как фон.
  float rim = pow(1.0 - z, 3.2) * shade;
  color += uAtmosphere * rim * 0.4;

  color *= uBrightness;
  // Потолок фона: планета не должна попадать в bloom — светятся только
  // игровые объекты (см. BACKGROUND_CEILING).
  color = min(color, vec3(uCeiling));

  gl_FragColor = vec4(color, 1.0);
}
`,Yt=`precision mediump float;

// Насколько узко собрано ядро ленты.
//
// Четвёрка — это спад до седьмой части яркости у самой кромки. Меньше — лента
// светится ровно во всю ширину и выглядит нарисованной кистью; больше — ядро
// стягивается в ту же нитку, ради ухода от которой лента и появилась.
#define CORE 4.0

varying vec3 vTint;
varying float vAcross;

/*
 * Мягкое ядро вместо жёсткой линии.
 *
 * В WebGL толщина линии не работает: \`gl_LineWidth\` больше единицы игнорируют
 * почти все драйверы, и разряд рисовался ниткой ровно в один пиксель — всю
 * «жирность» ему давал один блум. Лента даёт настоящую толщину, а спад яркости
 * от середины к кромке — мягкий край: у разряда наконец появляется ядро.
 *
 * Гаснет ПРОЗРАЧНОСТЬЮ, а не цветом: линии складываются с кадром, и при
 * сложении вклад равен цвету, помноженному на прозрачность. Гасить и то и
 * другое значило бы возвести спад в квадрат — ядро стало бы точкой.
 */
void main() {
  float core = exp(-vAcross * vAcross * CORE);
  gl_FragColor = vec4(vTint, core);
}
`,Xt=`// Светящееся кольцо: полоса на окружности плюс свет, затекающий к середине.
// Спектр, точность и квантование — lib/common.frag.glsl.
//
// Одна вещь на двух потребителей, и это не экономия, а язык кадра. Орбите
// спутников нужна ЛИНИЯ — путь, по которому идёт урон; ауре нужен ГРАДИЕНТ,
// уходящий к виспу. Разница между ними — два числа (\`uBand\` и \`uBleed\`), и
// пока это так, у обеих способностей одна и та же природа света: они обе
// очерчивают круг, внутри которого что-то происходит.
//
// Кольцо — не заливка. Всё, что оно рисует, складывается с кадром и держится
// заметно ниже фонового потолка: под ним идёт бой, и различать врагов игрок
// должен ровно так же, как за его пределами.

uniform float uTime;
/** Ядро полосы — почти белый цвет виспа. */
uniform vec3 uInner;
/** Сам круг и затёкший свет — цвет способности. */
uniform vec3 uOuter;
/** Полуширина светящейся полосы в долях радиуса кольца. */
uniform float uBand;
/** Насколько свет затекает внутрь, к виспу. Ноль — не затекает вовсе. */
uniform float uBleed;
/** Сколько волн укладывается от середины до кольца и как быстро они бегут. */
uniform float uWaves;
uniform float uSpeed;
uniform float uIntensity;
uniform float uGain;

varying vec2 vUv;

/**
 * Где в квадах лежит само кольцо.
 *
 * Запас снаружи нужен полосе: она гауссова и не кончается резко. Упрись она в
 * край плоскости — свет обрезался бы прямой линией ровно на границе зоны, то
 * есть там, где точность важнее всего.
 */
#define EDGE 0.78
/*
 * Полный оборот. Объявлен здесь, а не взят «откуда-то»: общая библиотека его не
 * даёт, три.js в префикс ShaderMaterial тоже, а своё \`TAU\` было только у луча.
 * Без этой строки шейдер не собирался вовсе, и кольцо ауры и орбиты спутников
 * молча не рисовались.
 */
#define TAU 6.28318530718

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  float r = length(uv);
  if (r > 1.0) discard;

  // Радиус в долях КОЛЬЦА: единица — сама окружность.
  float rz = r / EDGE;

  /*
   * Полоса на окружности.
   *
   * Гауссова, а не ступенька: ступенька дала бы круг интерфейса, наложенный
   * поверх боя. Волны её НЕ трогают — полоса показывает границу, и мигающая
   * граница перестаёт быть границей.
   */
  float across = (rz - 1.0) / max(uBand, 0.001);
  float band = exp(-across * across);

  /*
   * Свет, затёкший внутрь.
   *
   * Степень, а не линейный спад: у самой окружности света много, а к виспу он
   * должен сойти почти на нет — иначе получается заливка круга, под которой не
   * видно врагов. Наружу свет не течёт вовсе: за кольцом способность не
   * работает, и светиться там нечему.
   */
  float inside = 1.0 - smoothstep(0.98, 1.08, rz);
  float wave = 0.5 + 0.5 * sin(rz * TAU * uWaves - uTime * uSpeed);
  float bleed = pow(clamp(rz, 0.0, 1.0), 2.5) * inside * uBleed * (0.28 + 0.72 * wave);

  float mask = band + bleed;
  // Квад не должен выдавать себя краем.
  mask *= 1.0 - smoothstep(0.9, 1.0, r);

  // Ядро полосы выбелено, всё остальное идёт цветом способности: у горячего
  // света середина всегда белая, и по этому признаку его отличают от краски.
  vec3 tint = mix(uOuter, uInner, clamp(band * 0.75, 0.0, 1.0));

  // Вся форма в цвете, прозрачность единица: в складывающем режиме кадр
  // получает \`rgb * alpha\`, и разложи спад по обоим — он возведётся в квадрат.
  vec3 lit = tint * mask * uIntensity * uGain;

  gl_FragColor = vec4(lit, 1.0);
}
`,Zt=`// Рассечение: прямой разрез пространства — светлая черта, свечение по ней и
// два слоя дыма. Спектр, точность, шум и квантование — lib/common.frag.glsl.
//
// ОБРАЗЕЦ: shadertoy «slash» (斬撃). Его сборка перенесена ДОСЛОВНО и в том же
// порядке: \`slashAnim\`/\`smokeAnim\`/\`smokeSpread\` теми же кривыми, расстояние
// вдоль и поперёк линии, \`lengthFade\`, два слоя дыма с их сдвигами и
// порогами, \`whiteAura = exp(-d · GLOW_SPREAD)\`. Тёмное ядро \`coreLine\` снято
// (пункт 5). Числа образца оставлены как есть, кроме названных ниже.
//
// Что изменено, и без чего он не живёт в нашем кадре:
//
// 1. АЛЬФА. У образца её нет: он пишет по фону (\`col = mix(col, …)\`), а фон
//    берёт из канала. У нас фона в шейдере нет, и та же сборка ведётся в
//    ПРЕМУЛЬТИПЛИЦИРОВАННОМ цвете с накоплением альфы — иначе тёмный слой
//    дыма нечем нарисовать: складывающий режим умеет только светлеть, а этот
//    дым обязан быть темнее того, что под ним.
// 2. ПАЛИТРА. Бело-серый дым и белое свечение образца стали цветами
//    способности: дым — два её оттенка, а свечение идёт ЕЁ ЦВЕТОМ, и
//    выбеливается только сердцевина. Ровным белым
//    оно и не читалось цветом: усиление кадра множит свет почти вдвое, и
//    любой светлый оттенок упирается в потолок каналов, то есть белеет.
// 3. КАДР. Координаты не экранные, а МЕСТНЫЕ и в долях полудлины разреза:
//    один и тот же разрез бывает вдвое длиннее от охвата, и зерно дыма не
//    должно от этого меняться. Дым и свечение ужаты (см. их настройки
//    ниже): у образца весь экран, у нас — кадр, полный боя. Ход
//    берётся от доли жизни, а не от времени, и у каждого разреза свой сдвиг
//    зерна (\`uSeed\`) — иначе соседние выглядят копиями.
// 4. РАЗЪЕЗДА ФОНА НЕТ. У образца половины кадра расходятся вдоль разреза и
//    гнутся у кромки (\`slideOffset\`, \`distort\`). Он был перенесён в общий
//    пост-проход искажений и СНЯТ: у образца разрез один на экран, а у нас
//    их несколько за такт посреди боя, и даже ограниченный окрестностью
//    разъезд резал кадр на куски — поле боя переставало читаться.
// 5. ЧЕРТА ВМЕСТО ТЁМНОГО ЯДРА. У образца разрез — чёрная линия, и читается
//    она на его светлой сетке. У нас поле почти чёрное, и та же черта в нём
//    растворялась. Сначала её обводили светом по обе стороны, но это давало
//    ТРИ линии — свет, тьма, свет: пока кадр разъезжался, выборка у оси
//    уходила на два десятка единиц вбок и прятала эту тонкую структуру, а без
//    разъезда она вылезла как есть. Поэтому ядра нет, а свет стоит на оси.

uniform vec3 uGlow;
uniform vec3 uSmokeLit;
uniform vec3 uSmokeDim;
/** Полудлина и полувысота квада, мировые единицы. */
uniform float uHalfLength;
uniform float uHalfHeight;
/** Доля жизни разреза, 0..1. */
uniform float uProgress;
/** Свой сдвиг зерна у каждого разреза. */
uniform float uSeed;
uniform float uIntensity;
uniform float uGain;

varying vec2 vUv;

/* Настройки образца — как есть. */
#define SLASH_FADE 0.8
/*
 * Дым: почти втрое уже образца (0.16/0.23 против 0.44/0.67), см. пункт 3.
 *
 * У образца дым — половина картинки: он один на экране, и клубы на пол-экрана
 * там и есть эффект. У нас разрез случается раз в такт посреди боя, и даже
 * вдвое более широкий дым (0.32/0.46) заливал врагов, которых он же рассёк.
 *
 * Ужимать его дальше надо С ОГЛЯДКОЙ НА СВЕЧЕНИЕ. Порог \`smoothstep(0.3, …)\`
 * стоит на произведении шума и маски, поэтому видимая полоса дыма — примерно
 * две пятых его размаха, то есть у оси. Если свечение шире этой полосы, дым
 * целиком лежит под ним и не читается: вариант 0.16/0.24 при силе 0.7 так и
 * пропадал. Поэтому сужаются они ПАРОЙ — дым выглядывает из-под света, а после
 * вспышки (\`SLASH_FADE\` раньше \`SMOKE_FADE\`) висит один. Сила прежняя: меньше
 * стал размах, а не плотность.
 */
#define SMOKE_FADE 0.95
#define SMOKE_EXPAND 0.28
#define SMOKE_SIZE1 0.16
#define SMOKE_SIZE2 0.23
#define SMOKE_POWER 1.5
/*
 * Разлёт свечения — в долях ПОЛУДЛИНЫ.
 *
 * У образца 40 в долях экрана при полудлине 0.9, то есть 36 в наших. Было 26,
 * шире образца, и вокруг черты свет заливал поле; 52 — вдвое уже, и вдвое
 * меньше света уходит в блум. Сердцевина (\`heart\`, куб спада) сужается вместе
 * с ним и по-прежнему тоньше черты.
 */
#define GLOW_SPREAD 52.0
/*
 * Черта разреза — ОДНА светлая линия по самой оси, см. пункт 5 шапки.
 *
 * Резкость та же, что была у обводки, и это вся её толщина: черта обязана
 * остаться линией поверх свечения, а не второй его ступенью.
 */
#define LINE_SHARP 110.0
#define LINE_POWER 1.3

/**
 * Броуновский шум образца — с ПОВОРОТОМ между октавами.
 *
 * Общий \`fbm\` из библиотеки складывает октавы без поворота, и у дыма от этого
 * видны оси сетки. Образец крутит их на тридцать градусов, и это как раз тот
 * случай, когда разница видна: дым идёт клубами, а не решёткой.
 */
float fbmRot(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.866, -0.5, 0.5, 0.866);
  for (int i = 0; i < 5; ++i) {
    v += a * noise(p);
    p = rot * p * 2.0 + vec2(100.0);
    a *= 0.5;
  }
  return v;
}

void main() {
  // Местные координаты в долях полудлины: X вдоль разреза, Y поперёк.
  float l = (vUv.x - 0.5) * 2.0;
  float d = ((vUv.y - 0.5) * 2.0 * uHalfHeight) / max(uHalfLength, 0.001);
  float absDist = abs(d);
  vec2 p = vec2(l, d) + vec2(uSeed, -uSeed * 0.7);

  float t = uProgress;
  float slashAnim = smoothstep(0.0, 0.03, t) * (1.0 - smoothstep(0.03, SLASH_FADE, t));
  float smokeAnim = smoothstep(0.0, 0.03, t) * (1.0 - smoothstep(0.2, SMOKE_FADE, t));
  float smokeSpread = 1.0 + smoothstep(0.0, SMOKE_FADE, t) * SMOKE_EXPAND;

  // Разрез сходит на нет к своим концам.
  float lengthFade = smoothstep(1.0, 0.0, abs(l));

  // Ход дыма идёт по времени жизни: у образца он шёл по времени шейдера, но
  // разрез живёт полсекунды, и общее время сдвигало бы зерно рывком на старте.
  float age = t * 2.0;
  vec2 dir = vec2(1.0, 0.0);

  vec3 col = vec3(0.0);
  float alpha = 0.0;

  // Светлый дым.
  float smokeMask1 = smoothstep(SMOKE_SIZE1 * lengthFade * smokeSpread, 0.0, absDist);
  vec2 smokeUv1 = p * 4.0 - dir * age * 0.3 + fbmRot(p * 3.0 - age * 0.2) * 1.5;
  float smokeAlpha1 = smoothstep(0.3, 0.7, fbmRot(smokeUv1) * smokeMask1) * smokeAnim;
  float a1 = clamp(smokeAlpha1 * SMOKE_POWER, 0.0, 1.0);
  col = col * (1.0 - a1) + uSmokeLit * a1;
  alpha = alpha * (1.0 - a1) + a1;

  // Тёмный дым.
  float smokeMask2 = smoothstep(SMOKE_SIZE2 * lengthFade * smokeSpread, 0.0, absDist);
  vec2 smokeUv2 = p * 6.0 + dir * age * 0.2 + fbmRot(p * 5.0 + age * 0.4) * 2.0;
  float smokeAlpha2 = smoothstep(0.4, 0.8, fbmRot(smokeUv2) * smokeMask2) * smokeAnim;
  float a2 = clamp(smokeAlpha2 * SMOKE_POWER, 0.0, 1.0);
  col = col * (1.0 - a2) + uSmokeDim * a2;
  alpha = alpha * (1.0 - a2) + a2;

  /*
   * Свечение вдоль разреза — чистая прибавка света, без своей альфы: так же,
   * как у образца оно ПРИБАВЛЯЛОСЬ к фону, а не закрывало его.
   *
   * Белое у образца, у нас — ЦВЕТ способности, и выбеливается только самая
   * сердцевина (\`heart\`, куб спада — втрое уже самого свечения). Ровным белым
   * оно и не читалось цветом: усиление кадра множит его почти вдвое, и любой
   * светлый оттенок упирается в потолок каналов, то есть становится белым.
   */
  float aura = exp(-absDist * GLOW_SPREAD);
  float heart = aura * aura * aura;
  /*
   * Черта по оси — см. LINE_SHARP.
   *
   * Белого она не добавляет: на оси уже стоит \`heart\`, и выбеленная черта
   * поверх него упёрлась бы в потолок каналов — разрез снова стал бы белым,
   * а не синим. Обводка брала белое потому, что стояла В СТОРОНЕ от сердцевины.
   */
  float line = exp(-absDist * LINE_SHARP);
  vec3 light = uGlow * (aura + line * LINE_POWER) + vec3(heart * 0.45);
  col += light * slashAnim * lengthFade * uIntensity * uGain;

  if (alpha < 0.004 && max(col.r, max(col.g, col.b)) < 0.02) discard;

  gl_FragColor = vec4(col, alpha);
}
`,Qt=`// Копьё зари: одна полоса на четыре состояния — линия перезарядки, прицел
// наводки, её гашение и сам прокол с солнцем. Спектр, точность и квантование
// — lib/common.frag.glsl.
//
// Квад лежит ВДОЛЬ линии: X — от начала квада к кромке кадра, Y — поперёк,
// середина в 0.5. Координаты внутри считаются в МИРОВЫХ единицах
// (\`uLengthWorld\`, \`uHeightWorld\`): квад в двадцать раз длиннее, чем выше, и
// круглое солнце в его долях вышло бы овалом.
//
// Солнце рисуется ЗДЕСЬ, а не спрайтом. Точечный спрайт упирается в предел
// размера точки у видеокарты, и шар в полсотни единиц просто не появлялся.
// Квад пределов не знает: солнце — радиальный спад от \`uOrbX\`, а полоса
// начинается из его середины (\`uBeamStart\`).
//
// Свет — СОЛНЕЧНЫЙ, но без перебора: ядро выбелено, ореол тёплый, и оба
// держатся ниже того, что раздул бы блум в пятно. Луч обязан читаться и с
// выключенным блумом — у него есть тело, а не только свечение.

uniform vec3 uColor;
uniform vec3 uCore;
/** Размер квада в мировых единицах. */
uniform float uLengthWorld;
uniform float uHeightWorld;
/** Откуда вдоль квада начинается полоса, мировые единицы. */
uniform float uBeamStart;
/** Доля нарисованной длины полосы, 0..1: линия растёт вместе с перезарядкой. */
uniform float uLength;
/** Полуширина ядра и ширина ореола за ним, в долях полувысоты квада. */
uniform float uCoreWidth;
uniform float uHalo;
/** Штрихов на всю длину; ноль — сплошная. */
uniform float uDash;
/** Солнце: центр вдоль квада, радиус (мировые единицы) и сила; ноль — нет. */
uniform float uOrbX;
uniform float uOrbRadius;
uniform float uOrbAlpha;
uniform float uTime;
uniform float uIntensity;
uniform float uGain;
/**
 * Растворение, 0..1: ноль — целый, единица — нет ничего.
 *
 * Гашение яркостью всё равно оставляет контур: всякая отсечка гладкого спада
 * — ровная линия у полосы и ровный круг у солнца, и квантование этот контур
 * подчёркивает. Растворение убирает контур как класс: свет уходит не по
 * краям, а по зерну шума — там, где шум ниже порога, пикселя уже нет.
 * Стабильное зерно (в мировых единицах, с медленным дрейфом), чтобы дыры не
 * прыгали от кадра к кадру.
 */
uniform float uErode;

varying vec2 vUv;

/** Жив ли пиксель при текущем растворении: зерно шума против порога. */
float alive(vec2 world) {
  if (uErode <= 0.0) return 1.0;
  float grain = noise(world * 0.07 + vec2(uTime * 0.6, -uTime * 0.4));
  grain = 0.5 * grain + 0.5 * noise(world * 0.19 - vec2(uTime * 0.9, uTime * 0.3));
  // Мягкий порог: у дыры есть кромка в пару пикселей, а не ступень.
  return smoothstep(uErode - 0.12, uErode + 0.04, grain);
}

void main() {
  // Мировые координаты внутри квада: X от начала, Y от оси.
  float wx = vUv.x * uLengthWorld;
  float wy = (vUv.y - 0.5) * uHeightWorld;
  // Поперёк: ноль на оси, единица у края квада.
  float across = abs(vUv.y - 0.5) * 2.0;

  vec3 lit = vec3(0.0);

  /* ---------------------------------------------------------- полоса */
  float span = max(uLengthWorld - uBeamStart, 1.0);
  float along = (wx - uBeamStart) / span;
  if (uIntensity > 0.0 && along >= 0.0 && along <= uLength) {
    // Ядро: ровная полоса с мягкой кромкой. Нулевая ширина — ядра нет.
    float core = 1.0 - smoothstep(uCoreWidth * 0.7, uCoreWidth, across);

    // Ореол: спадает от кромки ядра наружу и гаснет у края квада, чтобы квад
    // не выдавал себя прямой линией.
    float beyond = max(across - uCoreWidth, 0.0);
    float halo = exp(-beyond / max(uHalo, 0.001) * 3.0) * (1.0 - smoothstep(0.85, 1.0, across));
    halo *= step(0.0001, uHalo);

    // Штрихи, если заказаны, бегут к кончику.
    float dash = uDash > 0.0 ? step(0.45, fract(along * uDash - uTime * 0.6)) : 1.0;

    // Кончик гаснет на последней доле нарисованной длины, а не обрывается.
    float tip = 1.0 - smoothstep(max(uLength - 0.06, 0.0), uLength, along);

    // Дрожь света вдоль луча: солнечный свет не ровный.
    float shimmer = 0.85 + 0.15 * noise(vec2(along * 30.0 - uTime * 5.0, vUv.y * 6.0));

    float mask = (core + halo * 0.55) * dash * tip * shimmer * alive(vec2(wx, wy));
    vec3 col = mix(uColor, uCore, clamp(core, 0.0, 1.0));
    lit += col * mask * uIntensity;
  }

  /* ---------------------------------------------------------- солнце */
  if (uOrbRadius > 0.0 && uOrbAlpha > 0.0) {
    float d = length(vec2(wx - uOrbX, wy)) / uOrbRadius;
    // Тело — ровный диск с мягкой кромкой; сердцевина выбелена; за кромкой
    // короткий ореол, чтобы диск не был вырезан из бумаги.
    float disc = 1.0 - smoothstep(0.7, 1.0, d);
    float heart = 1.0 - smoothstep(0.0, 0.7, d);
    // Ореол доводится до нуля к полутора радиусам: экспонента сама нуля не
    // достигает, и её хвост на квантовании ложился плоским пятном.
    float glow = exp(-max(d - 1.0, 0.0) * 4.0) * (1.0 - disc) * (1.0 - smoothstep(1.0, 1.5, d));
    vec3 col = mix(uColor, uCore, heart);
    lit += col * (disc * 1.4 + glow * 0.5) * uOrbAlpha * alive(vec2(wx - uOrbX, wy) * 1.6);
  }

  /*
   * Ниже заметного — ничего.
   *
   * Слабый хвост ореола размазан по всему кваду, и в складывающем режиме за
   * него платится каждый пиксель квада, хотя глаз его не видит. Отсечка
   * убирает эту работу, а заодно и тень прямоугольника квада на тёмном фоне.
   */
  vec3 scaled = lit * uGain;
  if (max(scaled.r, max(scaled.g, scaled.b)) < 0.025) discard;

  // Вся форма в цвете, прозрачность единица: складывающий режим, см. кольцо.
  gl_FragColor = vec4(scaled, 1.0);
}
`,$t=`precision mediump float;

/**
 * Частица номера: мягкий ореол цвета способности и белое горячее ядро.
 *
 * Общий пул частиц рисует квадратные точки, и для пыли и осколков это верно.
 * Номеру нужен СВЕТ: фигура из частиц читается, только когда каждая точка —
 * огонёк с ядром, а не пиксель. Считается здесь, а не текстурой: ядро и ореол
 * держат форму при любом размере точки.
 *
 * Доля белого в ядре приходит через \`aTile\` (у номеров атласа нет, и поле
 * свободно): у метки она мала, у вспышки удара — почти единица.
 */

uniform float uGain;

varying vec3 vColor;
varying float vAlpha;
varying float vTile;

void main() {
  if (vAlpha <= 0.001) discard;

  vec2 p = gl_PointCoord - 0.5;
  // Квадрат расстояния в долях радиуса точки: единица на кромке квада.
  float r2 = dot(p, p) * 4.0;
  if (r2 >= 1.0) discard;

  float halo = pow(1.0 - r2, 2.2);
  float core = exp(-r2 * 16.0);
  vec3 tint = mix(vColor, vec3(1.0), core * vTile);

  /*
   * Слои складываются и делятся на свой пик.
   *
   * Без деления середина вышла бы выше единицы и цвела бы белым пятном поверх
   * самой фигуры. После деления пик равен единице: ядро переходит порог
   * свечения (через \`uGain\`), ореол остаётся под ним и держит силуэт.
   */
  float peak = 0.8 + 0.4 * vTile;
  float shape = (halo * 0.8 + core * 0.4 * vTile) / peak;

  // Форма целиком в цвете, прозрачность единица: слой складывающий, и спад,
  // положенный ещё и в альфу, возвёлся бы в квадрат.
  gl_FragColor = vec4(tint * shape * vAlpha * uGain, 1.0);
}
`,en=`precision mediump float;

/**
 * Частица поля искр: три вида из одного прохода.
 *
 * - свет (0) — мягкий ореол и белое ядро, как у частиц номеров;
 * - пиксель (1) — ровный квадрат, как пыль общего пула;
 * - штрих (2) — эллипс, вытянутый по скорости: быстрая искра читается
 *   движением, а не точкой;
 * - пламя (3) — рваный язык по ходу: горячая белая середина, красный край.
 *
 * Слои делятся на свой пик: ядро переходит порог свечения, ореол держит форму.
 */

uniform float uGain;

varying vec3 vColor;
varying float vAlpha;
varying float vCore;
varying float vShape;
varying vec2 vAxis;
varying vec2 vExtent;
varying float vSeed;
varying float vTime;

void main() {
  if (vAlpha <= 0.002) discard;

  vec2 p = gl_PointCoord - 0.5;
  vec3 color = vColor;
  float shape = 1.0;

  if (vShape < 0.5) {
    float r2 = dot(p, p) * 4.0;
    if (r2 >= 1.0) discard;
    float halo = pow(1.0 - r2, 2.2);
    float core = exp(-r2 * 16.0);
    color = mix(vColor, vec3(1.0), core * vCore);
    shape = (halo * 0.8 + core * 0.4 * vCore) / (0.8 + 0.4 * vCore);
  } else if (vShape > 2.5) {
    /*
     * Язык пламени.
     *
     * Крупный мягкий свет оранжевого цвета читался кругом: ровный диск без
     * середины и без края, и толпа таких — россыпь кругов, а не огонь. Язык —
     * капля по ходу (голова уже хвоста), кромку рвут две бегущие гармоники со
     * своей фазой у каждой искры, середина выбелена жаром, край темнеет в
     * красное. Кромка держится внутри точки: делитель не больше единицы, иначе
     * край резало бы квадратом.
     */
    vec2 side = vec2(-vAxis.y, vAxis.x);
    float along = dot(p, vAxis) / max(vExtent.x, 0.001);
    float across = dot(p, side) / max(vExtent.y, 0.001);
    float taper = mix(1.0, 0.62, clamp(along * 0.5 + 0.5, 0.0, 1.0));
    // Сдвиг нуля: atan(0, 0) не определён, а середина точки попадает всегда.
    float angle = atan(across, along + 0.0001);
    float rag = 0.55 * sin(angle * 3.0 + vSeed * 37.0 - vTime * 9.0);
    rag += 0.45 * sin(angle * 5.0 + vSeed * 91.0 + vTime * 13.0);
    float r = length(vec2(along, across / taper)) / (0.8 + 0.2 * rag);
    if (r >= 1.0) discard;
    float body = pow(1.0 - r, 1.3);
    float heat = exp(-r * r * 7.0);
    vec3 rim = vColor * vec3(1.0, 0.5, 0.32);
    color = mix(rim, vColor, 1.0 - smoothstep(0.25, 0.9, r));
    color = mix(color, vec3(1.0, 0.97, 0.88), heat * vCore);
    shape = body * (0.9 + 0.1 * rag) * 1.3;
  } else if (vShape > 1.5) {
    float along = dot(p, vAxis) / max(vExtent.x, 0.001);
    float across = dot(p, vec2(-vAxis.y, vAxis.x)) / max(vExtent.y, 0.001);
    float r2 = along * along + across * across;
    if (r2 >= 1.0) discard;
    float halo = pow(1.0 - r2, 1.6);
    float core = exp(-across * across * 6.0) * (1.0 - along * along);
    color = mix(vColor, vec3(1.0), core * vCore);
    shape = (halo * 0.75 + core * 0.35 * vCore) / (0.75 + 0.35 * vCore);
  } else {
    // Пиксель тусклее света: пыль не должна перекрикивать искры.
    shape = 0.8;
  }

  // Слой складывающий: форма целиком в цвете, альфа единица (см. mote.frag.glsl).
  gl_FragColor = vec4(color * shape * vAlpha * uGain, 1.0);
}
`,tn=`// Частица поля искр (\`kit/particles/SparkField\`): всё движение считается ЗДЕСЬ.
//
// Процессор пишет частицу один раз, в момент выпуска, и больше её не трогает:
// откуда, скорость, торможение, гравитация, время рождения и жизнь. Положение в
// любой момент — это формула от возраста, поэтому кадр не пересчитывает и не
// перегоняет на видеокарту ни одной старой частицы. Отсюда и сотни тысяч.
//
// \`position\` — x, y и время рождения: у точек three берёт число вершин из
// атрибута \`position\`, и третья его компонента всё равно свободна.

attribute vec3 aVelocity; // vx, vy, жизнь
attribute vec4 aMotion;   // торможение, гравитация (плюс — вниз), вихрь, притяжение к виспу
attribute vec4 aLook;     // размер в начале, размер в конце, белое ядро, степень угасания
attribute vec3 aColorA;
attribute vec3 aColorB;
attribute vec4 aStyle;    // вид (0 свет, 1 пиксель, 2 штрих, 3 пламя), мерцание, случай, выдержка
/**
 * Центр и режим движения: 0 — полёт; 1 — кружение у точки; 2 — кружение у
 * виспа (центр — \`uAttractor\`); 3 — полёт с тягой к точке вместо виспа.
 *
 * При кружении \`position.xy\` — радиус и угол от центра, \`aVelocity.xy\` —
 * скорость угла (рад/с) и радиуса.
 */
attribute vec3 aOrbit;

uniform float uTime;
/** Пикселей буфера на мировую единицу — см. render/pixelScale.ts. */
uniform float uPixelScale;
uniform vec2 uAttractor;
/**
 * Потолок размера точки, пиксели буфера.
 *
 * У видеокарт свой предел \`gl_PointSize\` (на части машин — 255 и меньше), и
 * длинный штрих за ним просто обрезался бы квадратом. Держим запас снизу.
 */
uniform float uMaxPoint;

varying vec3 vColor;
varying float vAlpha;
varying float vCore;
varying float vShape;
/** Направление штриха в координатах точки (ось Y экрана смотрит вниз). */
varying vec2 vAxis;
/** Полудлина и полуширина штриха в долях стороны точки. */
varying vec2 vExtent;
/** Случайность и возраст искры: ими рвётся кромка языка пламени (\`field.frag.glsl\`). */
varying float vSeed;
varying float vTime;

void main() {
  float age = uTime - position.z;
  float life = aVelocity.z;
  // Не родилась (задержка) или отжила — точки нет вовсе, до фрагментов не доходит.
  if (life <= 0.0 || age < 0.0 || age >= life) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    vAlpha = 0.0;
    vColor = vec3(0.0);
    vCore = 0.0;
    vShape = 0.0;
    vAxis = vec2(1.0, 0.0);
    vExtent = vec2(0.5);
    vSeed = 0.0;
    vTime = 0.0;
    return;
  }

  float t = age / life;

  /*
   * Полёт с торможением — точным решением, а не шагами.
   *
   * Скорость гаснет как \`e^(−k·a)\`, путь за возраст \`a\` — \`v·(1 − e^(−k·a))/k\`.
   * Гравитация под тем же торможением даёт \`g·(a − путь)/k\`: при малом \`k\` это
   * обычное падение \`g·a²/2\`, при большом — оседание к предельной скорости.
   */
  float drag = max(aMotion.x, 0.0);
  float ka = drag * age;
  float decay = exp(-ka);
  float travel;
  float sag;
  float fall;
  if (ka < 0.02) {
    /*
     * Слабое торможение — рядом Тейлора, а не делением.
     *
     * Точная формула делит разность почти равных чисел на крошечное \`k\`: при
     * торможении около нуля и включённой гравитации ошибка округления
     * раздувалась в разы, и искры разлетались. Ряд даёт то же самое без деления:
     * путь \`a·(1 − ka/2 + (ka)²/6)\`, провис \`a²·(1/2 − ka/6 + (ka)²/24)\`.
     */
    travel = age * (1.0 - ka * 0.5 + ka * ka / 6.0);
    sag = age * age * (0.5 - ka / 6.0 + ka * ka / 24.0);
    fall = age * (1.0 - ka * 0.5 + ka * ka / 6.0);
  } else {
    travel = (1.0 - decay) / drag;
    sag = (age - travel) / drag;
    fall = (1.0 - decay) / drag;
  }
  float mode = aOrbit.z;
  vec2 pos;
  vec2 vel;
  if (mode > 0.5 && mode < 2.5) {
    // Кружение: торможение гасит и вращение, и дрейф радиуса тем же ходом.
    vec2 center = mode > 1.5 ? uAttractor : aOrbit.xy;
    float r = max(0.0, position.x + aVelocity.y * travel);
    float a = position.y + aVelocity.x * travel;
    vec2 dir = vec2(cos(a), sin(a));
    pos = center + dir * r;
    vel = (vec2(-dir.y, dir.x) * aVelocity.x * r + dir * aVelocity.y) * decay;
  } else {
    pos = position.xy + aVelocity.xy * travel;
    vel = aVelocity.xy * decay;
    float gravity = aMotion.y;
    pos.y -= gravity * sag;
    vel.y -= gravity * fall;
  }

  /*
   * Вихрь: плавное завихрение, растущее с возрастом.
   *
   * Не шум из текстуры, а два синуса со своей фазой у каждой частицы: этого
   * хватает, чтобы искры вились, а не летели по линейке, и стоит это две
   * тригонометрии на вершину.
   */
  float curl = aMotion.z;
  if (curl > 0.0) {
    float s = aStyle.z * 6.2831853;
    vec2 swirl = vec2(
      sin(age * 2.3 + s + position.y * 0.021),
      cos(age * 1.9 + s * 1.3 + position.x * 0.017)
    );
    pos += swirl * curl * t;
  }

  // Притяжение к концу жизни — к виспу или к своей точке (режим 3).
  float attract = aMotion.w;
  if (attract > 0.0) {
    vec2 target = mode > 2.5 ? aOrbit.xy : uAttractor;
    pos = mix(pos, target, clamp(attract * t * t, 0.0, 1.0));
  }

  float size = mix(aLook.x, aLook.y, t);
  vShape = aStyle.x;
  vCore = aLook.z;
  vSeed = aStyle.z;
  vTime = age;
  vColor = mix(aColorA, aColorB, t);

  // Проявление за тридцатую долю секунды — без хлопка точкой — и угасание степенью.
  float rise = min(1.0, age * 30.0);
  float fade = pow(1.0 - t, max(aLook.w, 0.05));
  float flicker = 1.0 - aStyle.y * (0.5 + 0.5 * sin(age * 23.0 + aStyle.z * 61.0));
  vAlpha = rise * fade * flicker;

  float pointWorld = size;
  vAxis = vec2(1.0, 0.0);
  vExtent = vec2(0.5);
  if (vShape > 1.5) {
    // Штрих и пламя: длина — путь за «выдержку» при нынешней скорости, не короче толщины.
    float speed = length(vel);
    float along = max(size, speed * aStyle.w);
    pointWorld = min(along, uMaxPoint / uPixelScale);
    along = min(along, pointWorld);
    vAxis = speed > 0.001 ? vec2(vel.x, -vel.y) / speed : vec2(1.0, 0.0);
    vExtent = vec2(0.5 * along / pointWorld, 0.5 * min(size, pointWorld) / pointWorld);
  }

  gl_PointSize = pointWorld * uPixelScale;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0, 1.0);
}
`,nn=`// Частица фигуры (\`kit/particles/SparkForms\`): дом в фигуре + ход фигуры.
//
// Фигура не стоит отпечатком: частицы могут ТЕЧЬ вдоль неё (поток — луч, по
// которому свет бежит от солнца к острию) и КРУЖИТЬ вокруг её начала (закрутка —
// шар-вихрь, у середины быстрее). Оба движения — формулы от возраста фигуры и
// одного сдвига, без пересчёта частиц на процессоре.
//
// Частица пишется один раз — при создании фигуры: где её дом, по чему бежит
// проявление, её случайность и размер. Всё, что фигура делает дальше, —
// сдвиг, поворот, масштаб, проявление, сужение, волна, растворение, пунктир —
// лежит в ОДНОЙ строке таблицы на фигуру (\`uForms\`, по строке на фигуру и
// столбцу на набор параметров) и меняется процессором раз в кадр. Поэтому
// фигура из тысяч частиц идёт за виспом и врагом, а кадр перегоняет на
// видеокарту восемь чисел на фигуру, а не координаты частиц.
//
// Фрагментный шейдер — общий с полем искр (\`field.frag.glsl\`): свет, пиксель
// и штрих у фигур и у искр одни и те же.

// Дом частицы в мировых единицах (x, y) и порядок проявления 0..1 (z).
// Имя \`position\` — у точек three число вершин берёт из этого атрибута.
attribute vec4 aForm;  // строка фигуры (−1 — нет фигуры), случайность, размер, удаление от оси
attribute vec2 aExtra; // градиент цвета 0..1, вторая случайность

/** Таблица фигур: столбцы — наборы параметров, строки — фигуры. */
uniform sampler2D uForms;
uniform vec2 uFormsSize;
uniform float uPixelScale;
uniform float uMaxPoint;

varying vec3 vColor;
varying float vAlpha;
varying float vCore;
varying float vShape;
varying vec2 vAxis;
varying vec2 vExtent;
/** Случайность и часы частицы: ими рвётся кромка языка пламени (\`field.frag.glsl\`). */
varying float vSeed;
varying float vTime;

#define TAU 6.28318530718

/**
 * Спектр призмы: от жёлтой кромки через зелёный и бирюзу к синему и фиолетовому
 * — тот же порядок, что у ленты луча. Считается косинусами, а не таблицей: три
 * волны со сдвигом дают ровную радугу без ступеней на стыках.
 */
vec3 spectrum(float t) {
  float hue = 0.12 + 0.66 * clamp(t, 0.0, 1.0);
  vec3 wave = cos((vec3(0.0, 0.33, 0.67) - hue) * TAU) * 0.5 + 0.5;
  return mix(vec3(1.0), wave * wave, 0.96);
}

vec4 row(float slot, float column) {
  return texture2D(uForms, vec2((column + 0.5) / uFormsSize.x, (slot + 0.5) / uFormsSize.y));
}

void hide() {
  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  gl_PointSize = 0.0;
  vColor = vec3(0.0);
  vAlpha = 0.0;
  vCore = 0.0;
  vShape = 0.0;
  vAxis = vec2(1.0, 0.0);
  vExtent = vec2(0.5);
  vSeed = 0.0;
  vTime = 0.0;
}

void main() {
  float slot = aForm.x;
  if (slot < 0.0) {
    hide();
    return;
  }

  vec4 place = row(slot, 0.0);  // x, y, угол, масштаб
  vec4 reveal = row(slot, 1.0); // от, до, мягкость кромки, яркость
  if (reveal.w <= 0.0) {
    hide();
    return;
  }
  vec4 band = row(slot, 2.0);   // полоса поперёк, её мягкость, множитель размера, растворение
  vec4 pulse = row(slot, 3.0);  // сила волны, скорость, число волн, острота
  vec4 dash = row(slot, 4.0);   // число штрихов, заполнение, скорость, возраст фигуры
  vec4 colorA = row(slot, 5.0); // цвет начала, белое ядро
  vec4 colorB = row(slot, 6.0); // цвет конца, степень мерцания
  vec4 style = row(slot, 7.0);  // вид, выдержка штриха, дрожь, охват фигуры
  vec4 motion = row(slot, 8.0); // сдвиг потока, длина потока, закрутка, её прибавка у середины
  vec4 facing = row(slot, 9.0); // куда смотрят штрих и язык, радуга: есть, бег, число волн

  float order = position.z;
  float seed = aForm.y;
  float across = aForm.w;
  float age = dash.w;

  /*
   * Поток: дом уезжает вдоль оси и сворачивается по длине фигуры, а порядок
   * проявления едет вместе с ним — поэтому частица за проявленной длиной луча
   * прячется, а перескочившая в начало вырастает из нуля, а не хлопком.
   * Сдвиг копится и сворачивается на процессоре: число не растёт без края.
   */
  vec2 home = position.xy;
  float entry = 1.0;
  if (motion.y > 0.0) {
    home.x = mod(home.x + motion.x, motion.y);
    order = home.x / motion.y;
    entry = smoothstep(0.0, 0.02, order);
  }

  /*
   * Проявление — окно по порядку частиц с мягкими краями. Край не гасит частицу
   * прозрачностью, а растит её из нуля: фигура вырастает, а не проступает.
   * Края smoothstep идут по возрастанию — обратный порядок в GLSL ES не определён.
   */
  float soft = max(reveal.z, 0.0001);
  float shown = smoothstep(reveal.x - soft, reveal.x, order);
  shown *= 1.0 - smoothstep(reveal.y, reveal.y + soft, order);

  // Сужение без сжатия: крайние ряды гаснут, а шаг частиц не меняется — наложения нет.
  float bandSoft = max(band.y, 0.0001);
  shown *= 1.0 - smoothstep(band.x, band.x + bandSoft, across);

  // Растворение по случайности частицы: фигура осыпается зерном, а не тускнеет контуром.
  float keep = band.w <= 0.0 ? 1.0 : smoothstep(band.w, band.w + 0.08, seed);

  float dashMask = 1.0;
  if (dash.x > 0.0) {
    float d = fract(order * dash.x - age * dash.z);
    // Край без \`min\`: при заполнении 1 края совпали бы, а равные края smoothstep не определены.
    dashMask = 1.0 - smoothstep(dash.y, dash.y + 0.06, d);
  }

  // Волна бежит по порядку частиц: треугольник, заострённый степенью.
  float wave = 0.0;
  if (pulse.x > 0.0) {
    float phase = fract(order * pulse.z - age * pulse.y);
    // Не ниже нуля: \`pow\` от минуса не определён, и частица ушла бы в NaN.
    float tri = max(0.0, 1.0 - abs(phase * 2.0 - 1.0));
    wave = pow(tri, max(pulse.w, 0.1)) * pulse.x;
  }

  float visible = shown * keep * dashMask * entry;
  if (visible * reveal.w <= 0.002) {
    hide();
    return;
  }

  // Дрожь: дом чуть гуляет — фигура живая, а не отпечатанная.
  if (style.z > 0.0) {
    vec2 drift = vec2(sin(age * 2.3 + seed * TAU * 7.0), cos(age * 1.9 + aExtra.y * TAU * 5.0));
    home += drift * style.z;
  }

  /*
   * Закрутка: поворот вокруг начала фигуры, у середины быстрее на \`motion.w\` —
   * шар крутится вихрем, а не колесом. Угол от возраста без свёртки: множитель
   * у середины дробный, и свёрнутый угол дал бы рывок; точности хватает на часы.
   */
  if (motion.z != 0.0) {
    float reach = clamp(length(home) / max(style.w, 0.001), 0.0, 1.0);
    float turn = age * motion.z * (1.0 + motion.w * (1.0 - reach));
    float tc = cos(turn);
    float ts = sin(turn);
    home = vec2(home.x * tc - home.y * ts, home.x * ts + home.y * tc);
  }

  float scale = place.w;
  vec2 local = home * scale;
  float c = cos(place.z);
  float s = sin(place.z);
  vec2 world = place.xy + vec2(local.x * c - local.y * s, local.x * s + local.y * c);

  float twinkle = colorB.w;
  float flicker = 1.0 - twinkle * (0.5 + 0.5 * sin(age * 23.0 + seed * 61.0));

  float size = aForm.z * scale * band.z * visible * (1.0 + wave);
  /*
   * Цвет: два тона по градиенту — или спектр, если фигура радужная. У самой оси
   * спектр выбелен: свет входит в призму белым и расходится по цвету к краям.
   */
  vec3 tint = mix(colorA.rgb, colorB.rgb, aExtra.x);
  if (facing.y > 0.5) {
    /*
     * Радуга ПЕРЕЛИВАЕТСЯ: её место в спектре берётся не только от градиента, но
     * и от хода по фигуре со сдвигом во времени. Стоячая радуга читалась
     * крашеными точками; бегущая — разложенным светом, который живёт.
     */
    float slide = order * facing.w - age * facing.z + aExtra.y * 0.12;
    vec3 hue = spectrum(fract(aExtra.x * 0.7 + slide));
    tint = mix(colorA.rgb, hue, smoothstep(0.0, 0.14, aExtra.x));
  }
  vColor = tint * (1.0 + wave);
  vCore = colorA.w;
  vShape = style.x;
  vAlpha = reveal.w * visible * flicker;
  vSeed = seed;
  // Свёрнуто в оборот без шва: кромка языка бежит с целыми частотами (9 и 13),
  // а фрагментный шейдер поля в mediump — возраст фигуры за часы там бы рассыпался.
  vTime = mod(age + aExtra.y * 10.0, TAU);

  float pointWorld = size;
  vAxis = vec2(1.0, 0.0);
  vExtent = vec2(0.5);
  if (vShape > 1.5) {
    // Штрих и язык пламени лежат вдоль фигуры: луч течёт, а не рябит точками. У
    // кольца языки смотрят от середины или по кругу — корона, а не гребёнка.
    vec2 axis = vec2(1.0, 0.0);
    if (facing.x > 0.5) {
      float reach = length(home);
      axis = reach > 0.0001 ? home / reach : axis;
      // По кругу — в сторону закрутки: голова языка идёт вперёд по ходу.
      if (facing.x > 1.5) axis = vec2(-axis.y, axis.x) * (motion.z < 0.0 ? -1.0 : 1.0);
    }
    vec2 turned = vec2(axis.x * c - axis.y * s, axis.x * s + axis.y * c);
    float along = size * max(style.y, 1.0);
    pointWorld = min(along, uMaxPoint / uPixelScale);
    along = min(along, pointWorld);
    vAxis = vec2(turned.x, -turned.y);
    vExtent = vec2(0.5 * along / pointWorld, 0.5 * min(size, pointWorld) / pointWorld);
  }

  gl_PointSize = pointWorld * uPixelScale;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(world, 1.0, 1.0);
}
`,rn=`// Взмах — клинок, выметающий сектор: яркая кромка и гаснущий за ней след.
// Спектр, точность и квантование — lib/common.frag.glsl.
//
// ОБЩИЙ эффект, а не эффект бича. Заведён под будущий меч и сделан так, чтобы
// один и тот же взмах годился и руке, и клинку: всё, чем они отличаются, —
// это раствор, длина следа, внутренний радиус и сужение (см. \`SlashLook\`).
//
// ФОРМА — КОНУС ПО ДУГЕ. У кромки полоса занимает всю длину клинка, к хвосту
// она сужается и подтягивается к внешней дуге: остаётся тонкий росчерк на
// радиусе кончика. Это и есть след — не копия взмаха под ним, а то, что от
// него осталось. Яркость падает вместе с шириной, поэтому «верхушка» (кромка)
// всегда самая светлая, а хвост уходит в цвет способности.
//
// ОБРАЗЕЦ: shadertoy «slash». От него дословно взяты разгон кромки
// (\`speedAdjust\`: atan-кривая, быстро в середине замаха), профиль полосы
// \`1 - |x|^0.8\` и блики \`cos(100·h³)\`, взвешенные ходом. Изменено ровно то, без
// чего он не живёт в нашем кадре:
//
// 1. АЛЬФА. У образца её нет: он смешивает цвет с фоном на каждом шаге. Здесь
//    каждое такое смешивание — множитель прозрачности, фон подмешивает сам
//    кадр в складывающем режиме.
// 2. ПАЛИТРА. Оловянно-зелёный и жёлтый стали цветом способности и её ядром.
// 3. КАДР. Два круга образца заменены полярной полосой с сужением: круги
//    задавали ОДНУ форму, а нам нужен общий взмах с настройками. Раствор — не
//    константа, а раствор сектора способности: рисунок обязан показывать ровно
//    тех, кого бьют. Ход — доля взмаха, а не время шейдера. Квантование и
//    дизер под пиксель-арт — как у всего остального света.
//
// Угол считается через atan(y, x), а не делением образца: у него центр смещён
// от нуля по X, у нас квад центрирован на самой точке взмаха, и деление на
// ноль на оси было бы каждым кадром.

uniform vec3 uColor;
uniform vec3 uCore;
/** Полураствор дуги, радианы: кромка идёт от −uHalf к +uHalf. */
uniform float uHalf;
/** Длина следа за кромкой, радианы. */
uniform float uTrail;
/** Внутренний радиус в долях внешнего: 0 — клин от центра, 0.5 — серп. */
uniform float uInner;
/** Насколько след уже кромки: 0 — ровная полоса, 1 — сходит в нить у дуги. */
uniform float uTaper;
/** Ход взмаха, 0..1. */
uniform float uProgress;
/** Куда идёт кромка: +1 против часовой, −1 по часовой. */
uniform float uSpin;
/** Общий спад к концу: единица — полная сила, ноль — погас. */
uniform float uFade;
uniform float uIntensity;
uniform float uGain;

varying vec2 vUv;

/** Разгон кромки образца: от −1 к 1 за две единицы, быстро в середине. */
#define WEIGHT_SPEED 3.0
/** Насколько кромка светлее хвоста: степень спада яркости по следу. */
#define HEAD_POWER 1.6

float speedAdjust(float n) {
  return atan(WEIGHT_SPEED * (n - 1.0)) / atan(WEIGHT_SPEED);
}

void main() {
  // Кадр: центр — точка взмаха, ось X — прицел, единица — длина клинка.
  vec2 p = (vUv - 0.5) * 2.0;
  float r = length(p);
  if (r > 1.0) discard;

  // Направление хода: по часовой — тот же счёт в зеркале.
  float ang = atan(p.y, p.x) * uSpin;
  if (abs(ang) > uHalf) discard;

  // Время образца идёт от 0 до 2 за весь замах; у нас это доля хода.
  float lead = uHalf * speedAdjust(uProgress * 2.0);

  // Насколько пиксель ОТСТАЁТ от кромки. Впереди неё взмаха ещё нет, дальше
  // следа — уже нет.
  float behind = lead - ang;
  if (behind < 0.0 || behind > uTrail) discard;
  float age = behind / max(uTrail, 0.0001);

  /*
   * Конус: полоса сужается к хвосту и подтягивается к ВНЕШНЕЙ дуге.
   *
   * Сужать её симметрично вокруг середины было бы проще и неверно: хвост
   * повис бы кольцом в воздухе, оторванным и от центра, и от кончика. Клинок
   * же оставляет след ровно там, где прошёл его КОНЧИК, — то есть у внешнего
   * радиуса, и внутренняя кромка полосы к нему и подтягивается.
   */
  float lo = mix(uInner, 1.0 - (1.0 - uInner) * (1.0 - uTaper), age);
  float mid = (lo + 1.0) * 0.5;
  float halfSpan = (1.0 - lo) * 0.5;
  float across = (r - mid) / max(halfSpan, 0.0001);
  if (abs(across) >= 1.0) discard;

  // Профиль полосы образца: ноль на обеих кромках, без хвоста за ними.
  float radial = 1.0 - pow(abs(across), 0.8);

  // Кромка светлее хвоста — и по яркости, и по цвету.
  float head = pow(1.0 - age, HEAD_POWER);

  // Блики образца: кольца от центра, взвешенные ходом.
  float h = r * 0.5;
  float lightval = clamp(cos(100.0 * h * h * h), 0.0, 0.7);
  lightval = 0.5 * head * (lightval + head);

  vec3 col = mix(uColor, uCore, clamp(head, 0.0, 1.0)) + vec3(lightval);

  // Кончик кромки не должен обрываться прямым срезом по началу замаха.
  float start = smoothstep(0.0, 0.12, ang + uHalf);

  float alpha = radial * (0.25 + 0.75 * head) * start * uFade;

  // Вся форма в цвете, прозрачность единица: в складывающем режиме кадр
  // получает \`rgb * alpha\`, и разложи спад по обоим — он возведётся в квадрат.
  vec3 lit = col * alpha * uIntensity * uGain;
  gl_FragColor = vec4(lit, 1.0);
}
`,an=`// Лента разряда: сегмент ломаной, раздутый в четырёхугольник.
//
// Раздувается на процессоре, а не здесь. Шейдеру для этого нужен был бы второй
// конец сегмента — то есть ещё три числа на каждую вершину, вчетверо на
// сегмент. Один корень на сегмент в цикле обхода дешевле.
attribute vec3 aTint;
// Где вершина стоит по ширине ленты: -1 у одной кромки, +1 у другой.
// Считается один раз при создании буфера и больше не меняется никогда.
attribute float aAcross;

varying vec3 vTint;
varying float vAcross;

void main() {
  vTint = aTint;
  vAcross = aAcross;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,on=`precision mediump float;

uniform vec3 uColor;

varying float vAlpha;

void main() {
  if (vAlpha <= 0.0) discard;
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  gl_FragColor = vec4(uColor * vAlpha, vAlpha);
}
`,sn=`precision mediump float;

uniform sampler2D uMap;
/** Размер сетки атласа. 1 — текстура целиком, без тайлов. */
uniform float uGrid;
/**
 * Множитель яркости слоя.
 *
 * Порог bloom высокий: цветёт только то, что заведомо ярче фона. Спрайты
 * способностей рисуются цветом стихии, и в единицу яркости они в этот порог не
 * попадали — эффекты переставали светиться вовсе. Множитель поднимает ядро
 * спрайта над порогом, не трогая ни фон, ни врагов: у каждого слоя он свой.
 */
uniform float uGain;

varying vec3 vColor;
varying float vAlpha;
varying float vTile;
varying float vAngle;

void main() {
  if (vAlpha <= 0.001) discard;

  /*
   * Поворот спрайта.
   *
   * Точки в GL не умеют вращаться: gl_PointCoord всегда смотрит по осям
   * экрана. Поэтому вращаем не спрайт, а выборку из атласа — вокруг центра
   * тайла. Угол приходит уже квантованным (см. PointSprites.setAngle): пиксель
   * должен «щёлкать» по шагам, как в спрайтовой анимации, а не плыть.
   */
  vec2 coord = gl_PointCoord - 0.5;
  if (abs(vAngle) > 0.0001) {
    float c = cos(vAngle);
    float sn = sin(vAngle);
    coord = vec2(coord.x * c - coord.y * sn, coord.x * sn + coord.y * c);
    // За краем тайла ничего нет: угол поворота выносит часть выборки наружу.
    if (abs(coord.x) > 0.5 || abs(coord.y) > 0.5) discard;
  }
  coord += 0.5;

  vec2 tile = vec2(mod(vTile, uGrid), floor(vTile / uGrid));
  vec4 texel = texture2D(uMap, (tile + coord) / uGrid);
  if (texel.a < 0.02) discard;
  gl_FragColor = vec4(texel.rgb * vColor * vAlpha * uGain, texel.a * vAlpha);
}
`,cn=`// Общий вершинный шейдер точечных спрайтов: враги, снаряды, искры.
attribute float aSize;
attribute float aAlpha;
attribute float aTile;
attribute float aAngle;
attribute vec3 aColor;

/**
 * Пикселей буфера на мировую единицу — см. render/pixelScale.ts.
 *
 * gl_PointSize задаётся в ПИКСЕЛЯХ, а размер врага в конфиге — в мировых
 * единицах. Совпадали они только при детализации «высокая»; множитель
 * приводит их друг к другу при любом разрешении буфера.
 */
uniform float uPixelScale;

varying vec3 vColor;
varying float vAlpha;
varying float vTile;
varying float vAngle;

void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vTile = aTile;
  vAngle = aAngle;
  gl_PointSize = aSize * uPixelScale;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ln=`precision mediump float;

uniform sampler2D uMap;
uniform float uGain;

varying vec2 vUv;
varying float vAlpha;
varying vec3 vColor;

void main() {
  if (vAlpha <= 0.001) discard;

  vec4 texel = texture2D(uMap, vUv);
  if (texel.a < 0.02) discard;

  /*
   * Цвет здесь ПОДКРАШИВАЕТ, а не задаёт.
   *
   * У процедурных силуэтов текстура серая, и \`vColor\` был единственным
   * источником цвета врага. Нарисованный спрайт цветной сам, поэтому обычное
   * его состояние — белый множитель, а цвет приезжает только на вспышку
   * попадания, стужу, горение и ауру стихии. Умножение это и даёт: белым
   * ничего не меняется, цветным — окрашивается, и силуэт остаётся собой.
   */
  gl_FragColor = vec4(texel.rgb * vColor * vAlpha * uGain, texel.a * vAlpha);
}
`,un=`precision highp float;

// Задник: «Parallax scrolling fractal galaxy» (CBS, по мотивам Simplicity
// шейдера JoshP) — два слоя фрактала с параллаксом и звёзды на хэше.
//
// Рисует ЕГО МАТЕМАТИКА, дословно: \`field\` в двадцать шесть итераций и
// \`field2\` в восемнадцать с формулой \`abs(p)/dot(p,p) + складка\`, их
// дрожащая сила, дрейф слоёв по синусам, дыхание зума второго слоя, виньетка
// \`v\`, раскладка каналов \`(t³, t², t)\` и звёзды \`pow(hash, 40)\`.
//
// Точность ВЫСОКАЯ: формула двадцать шесть раз делит вектор на его квадрат, и на
// \`mediump\` от узора остаётся шум. Поэтому шейдер живёт без общей библиотеки.
//
// Своё здесь — только то, без чего он не живёт в нашем кадре.
//
// МУЗЫКА. У автора четыре частоты из текстуры спектра. У нас анализ трека уже
// есть и отдаёт удар и энергию (\`AudioManager.updateMusicPulse\`), из них и
// собираются четыре полосы (\`uBands\`, см. \`render/FractalSky\`). Без музыки
// полосы стоят на середине, а не в нуле: у автора тишина гасит галактику почти
// целиком, а задник обязан быть и в меню без звука, и при выключенной реакции.
//
// КАДР. У автора \`uv\` — это экран от -1 до 1. У нас кадр шире видимого (поле
// вокруг под искажения), поэтому единица — это кромка ВИДИМОГО (\`uFrame\`):
// виньетка и крупность узора не зависят от того, сколько поля за кадром. За
// кромкой виньетка у автора уходит в минус — там она зажата нулём.
//
// РИСУНОК. Складка формулы (\`uFold\`, у автора \`(-.5, -.4, -1.5)\`) и точки старта
// слоёв (\`uNear\`, \`uFar\`) вынесены наружу: рисунок меняется ими, а не правкой
// шейдера. Нынешние числа подобраны ЗАМЕРОМ на JS-порте: из пяти вариантов
// взят тот, чья насыщенность ближе всего к авторской (медиана поля 0.43–0.62
// против его 0.43–0.58, нитей 11–18% против 8–28%), — узор другой, а густота
// та же. Складка чуткая: сотые доли дают или кашу из нитей, или гладь.
//
// ПРИЗМА. Поверх палитры по каналам ложится перелив: оттенок гуляет по кругу
// в зависимости от места на небе, яркости нити и времени — как на тонкой
// плёнке. Отсюда «призматический» цвет вместо трёх ровных заливок. Сила
// перелива (\`uPrism\`) и сдвиг его круга (\`uPrismShift\`) — тоже снаружи.
//
// ЦВЕТ. Три вещи, и все три — про то, чтобы это было фоном ИГРЫ, а не экраном
// шейдертоя.
//  - Палитра локации ложится на ЕГО структуру каналов: то, что у автора шло в
//    красный (\`t³\`, горячие нити), идёт в \`uHot\`, зелёный (\`t²\`) — в \`uWarm\`,
//    синий (\`t\`, общий газ) — в \`uCold\`. Чистые красный, зелёный и синий дали
//    бы ровно его картинку; зелёный из неё убран, цвета теперь по локации.
//  - Шадертой пишет цвет экрана, а наш конвейер — линейный, и в экран его
//    переводит общий проход вывода. Без перевода (\`pow 2.2\`) галактика вышла
//    бы вдвое светлее авторской. ЗАМЕР на JS-порте: медиана каналов 0.15–0.4,
//    99-й процентиль выше единицы — на экране это пересвет во весь кадр.
//  - Потолок фона (\`BACKGROUND_CEILING\`): светится в этой игре только игровое.
//    Обрезка не плоская, а мягким плечом: плоская срезала бы яркие нити в
//    ровные пятна, плечо оставляет их форму и только не пускает выше потолка.
//
// ТУМАННОСТЬ ТИХАЯ. Первая версия вышла «диковато»: молочная заливка на весь
// кадр с резкими нитями. Причин было две, и обе сняты.
//  - Палитра СКЛАДЫВАЛАСЬ: в каждый канал экрана шли все три слоя, и синий
//    выходил в 2.2 раза ярче авторского, а все каналы высокие — серо-сиреневая
//    пелена. Теперь каждый канал делится на сумму вкладов палитры в него.
//  - Контраст нитей к газу — около четырёх, и снижение силы его не трогает.
//    Трогает СМЯГЧЕНИЕ (\`uSoft\`, степень меньше единицы до перевода в линейный):
//    ЗАМЕР на JS-порте — при 0.7 и нынешней силе медиана 15, 99-й процентиль
//    41 из 255, контраст 2.7; было 25, 100 и 4.
//
// ЗВЁЗДЫ ОТДЕЛЬНО. Они идут своей дорожкой после туманности: смягчение и тихий
// потолок туманности погасили бы их в пыль, а музыка их не касается вовсе —
// пульсирует только туманность.

uniform float uTime;
/** Сколько кадра по осям в долях половины ВИДИМОГО: кромка видимого = 1. */
uniform vec2 uFrame;
/** Видимая часть, нормированная на длинную сторону: \`iResolution / max\`. */
uniform vec2 uShape;
/** Пикселей буфера по ширине кадра: у автора \`iResolution.x\` в зерне звёзд. */
uniform float uPixels;
/** Сдвиг мира для параллакса, уже умноженный на доли слоёв. */
uniform vec2 uOffsetNear;
uniform vec2 uOffsetFar;
/** Четыре полосы музыки — у автора \`freqs[0..3]\`. */
uniform vec4 uBands;
uniform vec3 uHot;
uniform vec3 uWarm;
uniform vec3 uCold;
/** Сила туманности. */
uniform float uGain;
/** Мягкий потолок туманности — ниже потолка фона: она тихая (см. шапку). */
uniform float uCeiling;
/** Смягчение контраста туманности, степень до перевода в линейный. */
uniform float uSoft;
/** Сила и потолок звёзд: у них своя дорожка, не под туманностью. */
uniform float uStarGain;
uniform float uStarCeiling;
/** Складка формулы — у автора \`(-.5, -.4, -1.5)\`. */
uniform vec3 uFold;
/** Точки старта ближнего и дальнего слоя — у автора \`(1, -1.3, 0)\` и \`(2, -1.3, -1)\`. */
uniform vec3 uNear;
uniform vec3 uFar;
/** Сила призматического перелива, 0..1. */
uniform float uPrism;
/** Сдвиг круга оттенков перелива, доли оборота. */
uniform float uPrismShift;

varying vec2 vUv;

// http://www.fractalforums.com/new-theories-and-research/very-simple-formula-for-fractal-patterns/
float field(in vec3 p, float s) {
  float strength = 7.0 + 0.03 * log(1.e-6 + fract(sin(uTime) * 4373.11));
  float accum = s / 4.0;
  float prev = 0.0;
  float tw = 0.0;
  for (int i = 0; i < 26; ++i) {
    float mag = dot(p, p);
    p = abs(p) / mag + uFold;
    float w = exp(-float(i) / 7.0);
    accum += w * exp(-strength * pow(abs(mag - prev), 2.2));
    tw += w;
    prev = mag;
  }
  return max(0.0, 5.0 * accum / tw - 0.7);
}

// Less iterations for second layer
float field2(in vec3 p, float s) {
  float strength = 7.0 + 0.03 * log(1.e-6 + fract(sin(uTime) * 4373.11));
  float accum = s / 4.0;
  float prev = 0.0;
  float tw = 0.0;
  for (int i = 0; i < 18; ++i) {
    float mag = dot(p, p);
    p = abs(p) / mag + uFold;
    float w = exp(-float(i) / 7.0);
    accum += w * exp(-strength * pow(abs(mag - prev), 2.2));
    tw += w;
    prev = mag;
  }
  return max(0.0, 5.0 * accum / tw - 0.7);
}

/** Круг оттенков: косинусная палитра, три канала со сдвигом на треть оборота. */
vec3 prism(float k) {
  return 0.5 + 0.5 * cos(6.28318 * (k + vec3(0.0, 0.33, 0.67)));
}

vec3 nrand3(vec2 co) {
  vec3 a = fract(cos(co.x * 8.3e-3 + co.y) * vec3(1.3e5, 4.7e5, 2.9e5));
  vec3 b = fract(sin(co.x * 0.3e-3 + co.y) * vec3(8.1e5, 1.0e5, 0.1e5));
  vec3 c = mix(a, b, 0.5);
  return c;
}

void main() {
  vec2 uv = (vUv - 0.5) * 2.0 * uFrame;
  vec2 uvs = uv * uShape;
  vec3 p = vec3(uvs / 4.0, 0.0) + uNear;
  p += 0.2 * vec3(sin(uTime / 16.0), sin(uTime / 12.0), sin(uTime / 128.0));
  p.xy += uOffsetNear;

  float freqs0 = uBands.x;
  float freqs1 = uBands.y;
  float freqs2 = uBands.z;
  float freqs3 = uBands.w;

  float t = field(p, freqs2);
  // За кромкой видимого виньетка автора уходит в минус — зажимаем.
  float v = max(0.0, (1.0 - exp((abs(uv.x) - 1.0) * 6.0)) * (1.0 - exp((abs(uv.y) - 1.0) * 6.0)));

  // Second Layer
  vec3 p2 = vec3(uvs / (4.0 + sin(uTime * 0.11) * 0.2 + 0.2 + sin(uTime * 0.15) * 0.3 + 0.4), 1.5)
    + uFar;
  p2 += 0.25 * vec3(sin(uTime / 16.0), sin(uTime / 12.0), sin(uTime / 128.0));
  p2.xy += uOffsetFar;
  float t2 = field2(p2, freqs3);
  vec3 c2 = mix(0.4, 1.0, v) * vec3(1.3 * t2 * t2 * t2, 1.8 * t2 * t2, t2 * freqs0);

  // Let's add some stars
  vec2 seed = p.xy * 2.0;
  seed = floor(seed * uPixels);
  vec3 rnd = nrand3(seed);
  float starcolor = pow(rnd.y, 40.0);

  // Second Layer
  vec2 seed2 = p2.xy * 2.0;
  seed2 = floor(seed2 * uPixels);
  vec3 rnd2 = nrand3(seed2);
  starcolor += pow(rnd2.y, 40.0);

  vec3 layers = mix(freqs3 - 0.3, 1.0, v) * vec3(1.5 * freqs2 * t * t * t, 1.2 * freqs1 * t * t, freqs3 * t) + c2;

  // --- дальше своё: палитра по его каналам, перелив, перевод в линейный, потолок
  // Каждый канал — доля от суммы вкладов палитры в него: иначе цвета складываются
  // и заливают кадр (см. шапку, «Туманность тихая»).
  vec3 share = max(uHot + uWarm + uCold, vec3(1.0));
  vec3 base = (uHot * layers.r + uWarm * layers.g + uCold * layers.b) / share;

  // Перелив: оттенок по месту на небе, по яркости нити и медленно по времени.
  // Яркость берётся у палитры, цвет — у призмы: так перелив меняет только тон.
  float glow = dot(layers, vec3(0.9, 0.7, 0.5));
  float hue = uPrismShift + dot(uvs, vec2(0.32, 0.21)) + layers.r * 0.35 + uTime * 0.008;
  vec3 iris = prism(hue) * glow;
  vec3 screen = pow(max(mix(base, iris, uPrism), vec3(0.0)), vec3(uSoft));
  vec3 linear = pow(screen, vec3(2.2)) * uGain;
  vec3 nebula = uCeiling * (1.0 - exp(-linear / uCeiling));

  // Звёзды — своей дорожкой: без смягчения, без музыки, под потолком фона.
  float star = pow(starcolor, 2.2) * uStarGain;
  vec3 color = nebula + vec3(uStarCeiling * (1.0 - exp(-star / uStarCeiling)));

  gl_FragColor = vec4(color, 1.0);
}
`,dn=`// Анимированный спрайт: один инстанс на врага, квад вместо точки.
//
// Точками этот слой сделать нельзя, и причина в данных: gl_PointSize задаёт
// КВАДРАТ, а кадры листов не квадратные (378x454 у жала). Квад ещё и вращается
// сам, а не выборкой из текстуры, — значит спрайт не обрезается углами тайла.
attribute vec2 aOffset;
attribute vec2 aSize;
attribute float aAngle;
attribute float aAlpha;
attribute vec3 aColor;
/** Выборка кадра в атласе: начало и размер в долях текстуры. */
attribute vec4 aRect;

varying vec2 vUv;
varying float vAlpha;
varying vec3 vColor;

void main() {
  vUv = aRect.xy + uv * aRect.zw;
  vAlpha = aAlpha;
  vColor = aColor;

  vec2 local = position.xy * aSize;
  float c = cos(aAngle);
  float s = sin(aAngle);
  vec2 turned = vec2(local.x * c - local.y * s, local.x * s + local.y * c);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(turned + aOffset, 0.0, 1.0);
}
`,fn=`// Искры трейла: размер и прозрачность приходят из пула частиц.
attribute float aAlpha;
attribute float aSize;

/** Пикселей буфера на мировую единицу — см. render/pixelScale.ts. */
uniform float uPixelScale;

varying float vAlpha;

void main() {
  vAlpha = aAlpha;
  gl_PointSize = aSize * uPixelScale;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,pn=`precision mediump float;

/**
 * Искра опыта.
 *
 * Опыт до этого рисовался тем же круглым пятном, что и всё остальное: искры
 * попаданий, осколки, следы снарядов. В бою на экране одновременно летит
 * несколько сотен таких пятен, и понять, что вот эти три — опыт, а не мусор от
 * взрыва, было нельзя. Цвет не помогал: он совпадал со цветом виспа.
 *
 * Различает форма. Пятно круглое, а искра опыта — РОМБ с крестовым бликом:
 * силуэт, которого в бою больше ни у кого нет, и который читается даже
 * величиной в семь пикселей. Рисуется он здесь, а не текстурой, ровно поэтому:
 * ромб на семь пикселей в текстуре — это три ступеньки и каша, а тут кромка
 * считается на каждый пиксель и остаётся кромкой при любом размере.
 *
 * Ореол берётся из текстуры: он уже настроен и стоит одну выборку. Своей
 * математики он не просит — мягкое пятно и есть мягкое пятно.
 */

uniform sampler2D uMap;
uniform float uGain;

varying vec3 vColor;
varying float vAlpha;

void main() {
  if (vAlpha <= 0.001) discard;

  vec2 p = gl_PointCoord - 0.5;

  /*
   * Ромб — это манхэттенское расстояние, а не круг.
   *
   * Одна строка вместо поворота квадрата на сорок пять градусов, и она же
   * дешевле: ни синусов, ни матриц. Кромка мягкая на четырнадцать сотых, чтобы
   * при размере в семь пикселей она не превращалась в лестницу.
   */
  float rhomb = abs(p.x) + abs(p.y);
  float core = 1.0 - smoothstep(0.10, 0.24, rhomb);

  /*
   * Крестовый блик: две узкие полосы по осям, каждая гаснет к концу.
   *
   * Он и делает искру «драгоценной»: круглое пятно с бликом читается как
   * подбираемое, без блика — как пепел. Полосы взяты по осям экрана, а не
   * повёрнуты вместе с ромбом: блик — это отражение в глазу, и оно не крутится
   * вместе с предметом.
   */
  float bar = 1.0 - smoothstep(0.015, 0.055, abs(p.x));
  float barFade = 1.0 - smoothstep(0.14, 0.46, abs(p.y));
  float beam = 1.0 - smoothstep(0.015, 0.055, abs(p.y));
  float beamFade = 1.0 - smoothstep(0.14, 0.46, abs(p.x));
  float sparkle = max(bar * barFade, beam * beamFade);

  float halo = texture2D(uMap, gl_PointCoord).a;

  /*
   * Сердце искры белее её самой.
   *
   * Ромб цвета опыта и без этого виден, но выглядит плоской фишкой. Белёсая
   * середина превращает его в огранённый камень: у света есть ядро и есть
   * оттенок вокруг, и это ровно то, чем висп и его магия нарисованы по всей
   * игре.
   */
  vec3 tint = mix(vColor, vec3(1.0), core * 0.55);

  /*
   * Три слоя складываются и делятся на свою сумму в середине.
   *
   * Без деления искра выходит ровно вдвое ярче прежнего круглого пятна: в самой
   * середине все три слоя равны единице, и сумма даёт 2.15. Порог блума 0.72, а
   * яркость слоя 1.5 — то есть непоправленная искра светила бы втрое выше
   * порога и цвела бы белым пятном, съедая собственную форму.
   *
   * После деления пик равен единице, как у прежнего пятна: ядро переходит порог
   * и цветёт, а лучи остаются на 0.35 и до порога не доходят. Ровно так и надо:
   * цветёт сердце, лучи держат силуэт.
   */
  float shape = (core + sparkle * 0.75 + halo * 0.4) / 2.15;

  if (shape < 0.004) discard;

  /*
   * Форма целиком в цвете, прозрачность — единица.
   *
   * Слой складывается со сценой (\`AdditiveBlending\`), а сложение в three
   * умножает цвет на альфу: положив форму ещё и в альфу, мы возвели бы спад в
   * квадрат и получили искру вдвое тусклее задуманной. Тот же порядок у ленты
   * луча и у кольца ауры.
   */
  gl_FragColor = vec4(tint * shape * vAlpha * uGain, 1.0);
}
`,mn=`precision highp float;

// Звёздное гнездо с гравитационной линзой: шейдер «Star Nest» Пабло Романа
// Андриоли (MIT) с добавкой чёрной дыры, приспособленный к нашему кадру.
//
// Рисует ЕГО МАТЕМАТИКА, целиком и без правок: объёмный марш в десять шагов,
// складка тайлов, двенадцать итераций «магической формулы» \`abs(p)/dot(p,p) -
// formuparam\`, тёмная материя, затухание по расстоянию и цветовая развёртка по
// шагу. Отклонение луча к дыре — тоже его, вместе с делением на квадрат
// расстояния.
//
// Точность ВЫСОКАЯ, и это не осторожность. Формула двенадцать раз делит вектор
// на его же скалярный квадрат; на \`mediump\` (десять бит мантиссы) к шестой
// итерации от структуры остаётся шум, а поле выходит равномерной кашей.
//
// Своё здесь только то, без чего он не живёт в нашем кадре, и таких вещей три.
//
// КАДР. У оригинала это весь экран: \`uv\` берётся от разрешения, вертикаль
// сжимается соотношением сторон, и диск дыры получается ровно во вписанной
// окружности — то есть звёздное поле остаётся лишь по четырём углам. У нас квад
// маленький и квадратный, и такой диск съел бы его целиком. Поэтому координаты
// масштабируются: \`uHole\` говорит, какую долю от половины квада занимает
// горизонт, а остальное отводится полю вокруг него.
//
// Вращение мышью выброшено, и это не упрощение: при нулевой мыши его функция
// \`r()\` — тождество (синусы обращаются в 0 и 1, и вектор возвращается как есть).
// Выброшена и \`iSphere\` — она в оригинале объявлена и не вызывается.
//
// НЕПРОЗРАЧНОСТЬ. У оригинала альфы нет: горизонт он заливает нулём, то есть
// чёрным на чёрном. Нам нужно и то, чтобы горизонт ЗАКРЫВАЛ собой звёзды и
// туманность за ним, и то, чтобы поле вокруг него не легло на сцену серым
// квадратом. Поэтому альфа собирается из двух вещей: горизонт непрозрачен
// начисто, а поле проявляется ровно настолько, насколько оно само светится.
//
// ПАЛИТРА. У оригинала развёртка тёплая по своей природе (\`vec3(s, s², s⁴)\`).
// Способность имеет свой цвет, и поле сводится к нему наполовину — чтобы дыра
// сингулярности была узнаваемо её, а не общей звёздной картинкой.

#define ITERATIONS 12
#define FORMUPARAM 0.57

#define VOLSTEPS 10
#define STEPSIZE 0.2

#define ZOOM 1.200
#define TILE 1.0
#define SPEED 0.010

#define BRIGHTNESS 0.0015
#define DARKMATTER 1.00
#define DISTFADING 0.730
#define SATURATION 1.0

#define HOLE_RADIUS 1.2
#define HOLE_INTENSITY 1.0
/** Насколько камера отодвинута назад: у оригинала \`from = vec3(0, 0, -15)\`. */
#define CAM_BACK 15.0

uniform float uTime;
/** Радиус горизонта в долях половины квада. */
uniform float uHole;
/** Цвет способности: к нему сводится поле. */
uniform vec3 uTint;
/** Общая яркость поля. */
uniform float uGain;
/** Закрутка поля к горловине, радианы. */
uniform float uSwirl;
/** Скорость вращения всей картины, радианы в секунду. */
uniform float uSpin;
/**
 * Потолок яркости поля, в линейном свете.
 *
 * Без него шейдер не годится вовсе, и это не вкусовщина. У самой кромки
 * горизонта отклонение луча наибольшее (\`1/intensity\` там около семи десятых),
 * марш попадает в плотную структуру, и ЗАМЕР по всему квадрату дал пик яркости
 * 322 при среднем 0.25 — то есть тысячекратный выброс на узком кольце. На
 * экране это белая клякса поверх горизонта, а после блума — вспышка во весь
 * кадр.
 *
 * Обрезка идёт ПОКАНАЛЬНО и до сведения к цвету: так остаётся его цветовая
 * развёртка по шагу, а ограничивается только величина.
 */
uniform float uCeiling;

varying vec2 vUv;

vec3 iPlane(vec3 ro, vec3 rd, vec3 po, vec3 pd) {
  float d = dot(po - ro, pd) / dot(rd, pd);
  return d * rd + ro;
}

void main() {
  vec2 local = vUv - 0.5;
  // Ноль в середине, единица — на вписанной окружности квада.
  float edge = length(local) * 2.0;
  if (edge > 1.0) discard;

  /*
   * Где горизонт лежит в ЕГО координатах — выводится, а не подставляется.
   *
   * Считать это надо, а не угадывать, и вот откуда берётся число. Камера стоит
   * в \`(0, 0, -CAM_BACK)\` относительно центра дыры, плоскость дыры проходит
   * через сам центр, и луч \`dir = vec3(uv * ZOOM, 1)\` доходит до неё за
   * \`CAM_BACK / dir.z\` — то есть ровно за \`CAM_BACK\`. Отклонение от центра в
   * точке попадания выходит \`CAM_BACK * ZOOM * |uv|\`, и горизонт кончается там,
   * где оно равно \`HOLE_RADIUS\`.
   *
   * Получается \`|uv| = 1.2 / (15 * 1.2) = 0.0667\` — то есть у оригинала дыра
   * занимает по ширине экрана всего тринадцать процентов, а не вписанную
   * окружность, как показалось сперва. Отсюда и масштаб: \`uHole\` доля квада
   * приводится именно к этому радиусу.
   */
  float holeUv = HOLE_RADIUS / (CAM_BACK * ZOOM);

  /*
   * Завихрение: поле закручивается к горловине и вращается целиком.
   *
   * Своё, у оригинала этого нет. Его дыра только отклоняет лучи к себе, и рядом
   * с горизонтом получается звёздная картинка с круглой дыркой — а воронка
   * узнаётся именно закруткой.
   *
   * Хват равен единице НА горловине и сходит к нулю у кромки квада, в квадрате —
   * то есть спираль туго свита у горизонта и распускается к краю. Так же
   * устроен и хват линзы кадра, и это не совпадение: одно движение должно
   * читаться как продолжение другого.
   *
   * Поворот не меняет длины, поэтому горизонт остаётся точной окружностью, а
   * вся математика ниже — его.
   */
  float grip = clamp((1.0 - edge) / max(1.0 - uHole, 0.05), 0.0, 1.0);
  float ang = uSwirl * grip * grip + uTime * uSpin;
  float cs = cos(ang);
  float sn = sin(ang);
  vec2 turned = vec2(local.x * cs - local.y * sn, local.x * sn + local.y * cs);

  vec2 uv = turned * (holeUv * 2.0 / max(uHole, 0.05));

  vec3 dir = vec3(uv * ZOOM, 1.0);
  float time = uTime * SPEED + 0.25;

  vec3 center = vec3(time * 2.0, time, -2.0);
  vec3 from = vec3(0.0, 0.0, -CAM_BACK) + center;

  vec3 nml = normalize(center - from);
  vec3 pos = iPlane(from, dir, center, nml);
  pos = center - pos;
  float intensity = dot(pos, pos);

  /*
   * Горизонт: непрозрачная чернота.
   *
   * У оригинала здесь \`vec4(0.0)\` — чёрное с нулевой альфой, что на его чёрном
   * экране одно и то же. У нас за квадом звёзды и туманность, и ноль в альфе
   * означал бы, что сквозь дыру всё видно.
   */
  if (intensity <= HOLE_RADIUS * HOLE_RADIUS) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  intensity = 1.0 / intensity;
  dir = mix(dir, pos * sqrt(intensity), HOLE_INTENSITY * intensity);

  // --- дальше его объёмный марш, без изменений
  float s = 0.1;
  float fade = 1.0;
  vec3 v = vec3(0.0);

  for (int r = 0; r < VOLSTEPS; r++) {
    vec3 p = from + s * dir * 0.5;
    p = abs(vec3(TILE) - mod(p, vec3(TILE * 2.0)));

    float pa = 0.0;
    float a = 0.0;
    for (int i = 0; i < ITERATIONS; i++) {
      p = abs(p) / dot(p, p) - FORMUPARAM;
      a += abs(length(p) - pa);
      pa = length(p);
    }

    float dm = max(0.0, DARKMATTER - a * a * 0.001);
    a *= a * a;
    if (r > 6) fade *= 1.0 - dm;
    v += fade;
    v += vec3(s, s * s, s * s * s * s) * a * BRIGHTNESS * fade;
    fade *= DISTFADING;
    s += STEPSIZE;
  }

  v = mix(vec3(length(v)), v, SATURATION);
  vec3 lit = min(v * 0.01, vec3(uCeiling));
  // --- конец его части

  float luma = dot(lit, vec3(0.299, 0.587, 0.114));

  /*
   * Поле сводится к цвету способности наполовину.
   *
   * Не заменяется: развёртка по шагу — это глубина, по ней и видно, что поле
   * объёмное, а покраска в один цвет её бы стёрла. Половина оставляет и глубину,
   * и узнаваемость.
   */
  vec3 tinted = mix(lit, vec3(luma) * uTint, 0.55) * uGain;

  /*
   * Проявляется поле ровно настолько, насколько светится.
   *
   * Иначе на сцену ложится серый квадрат: у поля почти везде есть какая-то
   * яркость, и при постоянной альфе она превращается в мутную плёнку поверх
   * боя. Так же гаснет и кромка квада — без неё виден его край.
   */
  float veil = clamp(luma * 3.0, 0.0, 1.0);
  float rim = 1.0 - smoothstep(0.72, 1.0, edge);

  gl_FragColor = vec4(tinted, veil * rim);
}
`,hn=`// Узы: паутинка между связанными — тонкая нить и капли по ней пунктиром.
// Спектр, точность, шум и квантование — lib/common.frag.glsl.
//
// Прежде узы рисовались разрядом (\`ArcLines.strike\` с изломом), и нить
// читалась током: рваная, заново дрожащая каждый кадр. Но узы не бьют — они
// ДЕРЖАТ. Отсюда форма: нить в пиксель-полтора, провисшая под своим весом,
// по ней капли росы пунктиром, и блик, бегущий по нити, пока через неё идёт
// урон. Ореол у нити почти нулевой: светящаяся полоса снова читалась бы лучом.
//
// Всё считается в МИРОВЫХ единицах от начала нити (\`vSpan\`, \`vHalf\`): нить
// бывает от трёх десятков до полутысячи единиц, и шаг капель в долях длины
// растягивался бы вместе с ней.

uniform vec3 uColor;
uniform vec3 uCore;
uniform float uTime;
/** Толщина нити и капель, множитель: связки делают узы заметнее. */
uniform float uWidth;
uniform float uGain;

varying float vAlong;
varying float vAcross;
varying float vSpan;
varying float vHalf;
varying float vSag;
varying float vSeed;
varying float vHeat;

#define PI 3.14159265
/* Полуширина самой нити и её мягкая кромка, мировые единицы. */
#define STRAND 0.35
#define STRAND_SOFT 0.55
/* Ореол: спад наружу и доля. Тихий — нить не должна светиться полосой. */
#define HALO_FALL 2.2
#define HALO_POWER 0.08
/* Капли: шаг, радиус, доля пустых мест (часть ячеек без капли — пунктир живой). */
#define BEAD_STEP 10.0
#define BEAD_RADIUS 0.9
#define BEAD_GAP 0.3
/* Блик переноса: скорость в мировых единицах за секунду и полудлина. */
#define GLINT_SPEED 220.0
#define GLINT_SPAN 10.0
/* Концы нити уходят под тела связанных, а не обрываются торцом. */
#define END_FADE 6.0

void main() {
  float along = vAlong * vSpan;
  float y = vAcross * vHalf;

  /*
   * Провис: полуволна синуса, прибитая к обоим концам, и чуть качается.
   *
   * Расстояние меряется поперёк ХОРДЫ, а не до самой кривой: провис не больше
   * двадцатой доли длины, наклон кривой к хорде не круче одной шестой, и
   * разница выходит в сотые доли единицы — на нити в пиксель её не видно.
   */
  float sway = 0.8 + 0.2 * sin(uTime * 1.2 + vSeed);
  float d = abs(y - vSag * sway * sin(vAlong * PI));

  float strand = 1.0 - smoothstep(STRAND * uWidth, (STRAND + STRAND_SOFT) * uWidth, d);
  float halo = exp(-d / HALO_FALL);
  // Шёлк неровный: яркость гуляет вдоль нити медленным шумом.
  float sheen = 0.55 + 0.45 * noise(vec2(along * 0.07 - uTime * 0.4, vSeed));

  /*
   * Капли: ячейка вдоль нити, капля в середине ячейки, у каждой свой размер.
   *
   * Ячейки считаются от НАЧАЛА нити в мировых единицах: враги двигаются, и у
   * дальнего конца капли уходят под тело и выходят из-под него — это и есть
   * скольжение нити, а не прыжок сетки, как было бы в долях длины.
   */
  float cell = along / BEAD_STEP + vSeed;
  float pick = hash12(vec2(floor(cell), vSeed));
  float size = BEAD_RADIUS * uWidth * mix(0.55, 1.0, pick);
  float bx = (fract(cell) - 0.5) * BEAD_STEP;
  float bead = 1.0 - smoothstep(size * 0.5, size + 0.5, length(vec2(bx, d)));
  bead *= step(BEAD_GAP, pick);
  float twinkle = 0.7 + 0.3 * sin(uTime * 2.3 + pick * 40.0);

  // Блик переноса: пробегает нить от начала к концу и уходит за край.
  float lap = vSpan + GLINT_SPAN * 2.0;
  float head = mod(uTime * GLINT_SPEED + vSeed * 13.0, lap) - GLINT_SPAN;
  // Квадрат умножением, а не \`pow\`: у \`pow\` с отрицательным основанием в GLSL
  // результат не определён, и часть видеокарт отдаёт NaN — нить пропала бы.
  float lag = (along - head) / GLINT_SPAN;
  float glint = exp(-lag * lag) * vHeat;

  vec3 dew = mix(uColor, uCore, 0.55);
  vec3 lit = uColor * (strand * 0.6 * sheen + halo * HALO_POWER) + dew * bead * 0.8 * twinkle;
  // Пока идёт урон, нить чуть разгорается, а блик бежит по ней и по каплям.
  lit *= 1.0 + vHeat * 0.35;
  lit += dew * glint * (strand + bead + halo * 0.25) * 1.3;

  float ends = smoothstep(0.0, END_FADE, along) * smoothstep(0.0, END_FADE, vSpan - along);
  lit *= ends * uGain;

  // Ниже заметного — ничего: невидимый хвост ореола не платится пикселями.
  if (max(lit.r, max(lit.g, lit.b)) < 0.025) discard;

  // Вся форма в цвете, прозрачность единица: складывающий режим.
  gl_FragColor = vec4(lit, 1.0);
}
`;function gn(e){return`${Gt}\n${e}`}var _n=Rt,vn=gn(It),yn=gn(Jt),bn=gn(zt),xn=Ft,Sn=Pt,Cn=Lt,wn=gn(Ut);gn(Xt);var Tn=gn(Qt),En=gn(Zt);gn(rn),gn(hn);var Dn=qt,On=gn(Kt),kn=mn,An=un,jn=an,Mn=Yt,Nn=fn,Pn=on,Fn=cn,In=sn,Ln=dn,Rn=ln,zn=pn,Bn=$t,Vn=tn,Hn=en,Un=nn,Wn=Wt,Gn=Bt,Kn=Ht,qn=Vt,Jn=65536,Yn=Math.PI*2,Xn={glow:0,pixel:1,streak:2,flame:3},Zn=class{object;capacity;geometry=new ge;material;visibility=1;start;velocity;motion;look;colorA;colorB;style;orbit;attributes=[];attractorX=0;attractorY=0;time=0;cursor=0;dirtyStart=0;dirtyCount=0;high=0;rgb=new Float32Array(6);constructor(e=Jn){this.capacity=e,this.start=new Float32Array(e*3),this.velocity=new Float32Array(e*3),this.motion=new Float32Array(e*4),this.look=new Float32Array(e*4),this.colorA=new Float32Array(e*3),this.colorB=new Float32Array(e*3),this.style=new Float32Array(e*4),this.orbit=new Float32Array(e*3);let t=(e,t,n)=>{let r=new P(t,n);r.setUsage(be),this.geometry.setAttribute(e,r),this.attributes.push(r)};t(`position`,this.start,3),t(`aVelocity`,this.velocity,3),t(`aMotion`,this.motion,4),t(`aLook`,this.look,4),t(`aColorA`,this.colorA,3),t(`aColorB`,this.colorB,3),t(`aStyle`,this.style,4),t(`aOrbit`,this.orbit,3),this.geometry.setDrawRange(0,0),this.material=new Ee({vertexShader:Vn,fragmentShader:Hn,transparent:!0,depthTest:!1,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uPixelScale:Nt,uAttractor:{value:new ue},uMaxPoint:{value:192},uGain:{value:R}}}),this.object=new Ae(this.geometry,this.material),this.object.frustumCulled=!1,this.object.renderOrder=29}setVisibility(e){this.visibility=Math.max(0,Math.min(1,e)),this.material.uniforms.uGain.value=R*this.visibility,this.object.visible=this.visibility>0}emit(e){if(this.visibility<=0)return;let t=Math.max(0,Math.floor(e.count??1));if(t===0)return;this.writeRgb(e.color,0),this.writeRgb(e.to??e.color,3);let n=e.intensity??1;if(n!==1)for(let e=0;e<6;e++)this.rgb[e]*=n;let r=Xn[e.kind??`glow`],i=e.endSize??.2,a=e.drag??3,o=e.gravity??0,s=e.curl??0,c=e.attract??0,l=e.core??.6,u=e.fade??1,d=e.twinkle??0,f=e.stretch??.04,p=e.angle??0,m=e.arc??Yn,h=e.shape?Dt(e.shape.layout,t):null,g=Math.cos(e.shape?.angle??0),_=Math.sin(e.shape?.angle??0),v=e.ringFrom??0,y=(e.ringTo??v+Yn)-v,b=e.sizeScale??1,x=e.orbit?.around,S=e.orbit?x===`wisp`?2:1:e.attractTo?3:0,C=x===`wisp`?this.attractorX:x?x.x:e.attractTo?.x??0,w=x===`wisp`?this.attractorY:x?x.y:e.attractTo?.y??0;for(let n=0;n<t;n++){let x=e.even?(n+.5)/t:Math.random(),T=e.x,E=e.y,ee=0,D=0,O=x;if(e.line)T=e.x+(e.line.x-e.x)*x,E=e.y+(e.line.y-e.y)*x;else if(e.ring!==void 0){let t=v+x*y;ee=Math.cos(t),D=Math.sin(t),T=e.x+ee*e.ring,E=e.y+D*e.ring}else if(e.disc!==void 0){let t=v+Math.random()*y,n=Math.sqrt(e.even?x:Math.random());ee=Math.cos(t),D=Math.sin(t),T=e.x+ee*n*e.disc,E=e.y+D*n*e.disc,O=n}else if(h&&e.shape){let r=h[n*2],i=h[n*2+1],a=r*g-i*_,o=r*_+i*g;T=e.x+a*e.shape.radius,E=e.y+o*e.shape.radius;let s=Math.hypot(a,o);s>1e-4&&(ee=a/s,D=o/s),O=t>1?n/(t-1):0}let k=$n(e.speed??0),te,ne;if(e.radial&&(ee!==0||D!==0)){let t=Math.atan2(D,ee)+(e.turn??0)+(Math.random()-.5)*(e.arc??0);te=Math.cos(t)*k,ne=Math.sin(t)*k}else{let e=p+(Math.random()-.5)*m;te=Math.cos(e)*k,ne=Math.sin(e)*k}if(e.line&&e.normal!==void 0){let t=e.line.x-e.x,n=e.line.y-e.y,r=Math.hypot(t,n)||1,i=(Math.random()<.5?-1:1)*$n(e.normal);te+=-n/r*i,ne+=t/r*i}if(te+=e.vx??0,ne+=e.vy??0,e.orbit){let t=T-C,n=E-w;T=Math.hypot(t,n),E=Math.atan2(n,t),te=$n(e.orbit.spin),ne=$n(e.orbit.drift??0)}let re=$n(e.size)*b;this.put(T,E,te,ne,$n(e.life),$n(e.delay??0)+O*(e.delayAlong??0),re,re*i,a,o,s,c,l,u,r,d,f,C,w,S)}}putRaw(e,t,n,r,i,a,o,s,c,l,u,d=0,f=1){this.put(e,t,n,r,i,0,a,a*o,s,c,0,0,l,f,Xn[u],d,.04,0,0,0)}setRawColors(e,t,n,r,i,a){this.rgb[0]=e,this.rgb[1]=t,this.rgb[2]=n,this.rgb[3]=r,this.rgb[4]=i,this.rgb[5]=a}setAttractor(e,t){this.material.uniforms.uAttractor.value.set(e,t),this.attractorX=e,this.attractorY=t}update(e){this.visibility<=0||(this.time+=e,this.material.uniforms.uTime.value=this.time,this.upload())}clear(){for(let e=0;e<this.capacity;e++)this.velocity[e*3+2]=0;this.time=0,this.cursor=0,this.high=0,this.dirtyStart=0,this.dirtyCount=this.capacity,this.material.uniforms.uTime.value=0,this.upload(),this.geometry.setDrawRange(0,0)}dispose(){this.geometry.dispose(),this.material.dispose()}put(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y){if(i<=0||o<=0)return;let b=this.cursor;this.cursor=(this.cursor+1)%this.capacity,this.dirtyCount===0&&(this.dirtyStart=b),this.dirtyCount=Math.min(this.capacity,this.dirtyCount+1),b+1>this.high&&(this.high=b+1);let x=b*3,S=b*4;this.start[x]=e,this.start[x+1]=t,this.start[x+2]=this.time+a,this.velocity[x]=n,this.velocity[x+1]=r,this.velocity[x+2]=i,this.motion[S]=c,this.motion[S+1]=l,this.motion[S+2]=u,this.motion[S+3]=d,this.look[S]=o,this.look[S+1]=s,this.look[S+2]=f,this.look[S+3]=p,this.colorA[x]=this.rgb[0],this.colorA[x+1]=this.rgb[1],this.colorA[x+2]=this.rgb[2],this.colorB[x]=this.rgb[3],this.colorB[x+1]=this.rgb[4],this.colorB[x+2]=this.rgb[5],this.style[S]=m,this.style[S+1]=h,this.style[S+2]=Math.random(),this.style[S+3]=g,this.orbit[x]=_,this.orbit[x+1]=v,this.orbit[x+2]=y}upload(){if(this.dirtyCount===0)return;let e=this.dirtyStart,t=this.dirtyCount,n=this.capacity;for(let r of this.attributes){let i=r.itemSize;r.clearUpdateRanges(),t>=n?r.addUpdateRange(0,n*i):e+t<=n?r.addUpdateRange(e*i,t*i):(r.addUpdateRange(e*i,(n-e)*i),r.addUpdateRange(0,(e+t-n)*i)),r.needsUpdate=!0}this.dirtyCount=0,this.geometry.setDrawRange(0,this.high)}writeRgb(e,t){let n=Qn.get(e);n||(n=new Float32Array([er((e>>16&255)/255),er((e>>8&255)/255),er((e&255)/255)]),Qn.size>512&&Qn.clear(),Qn.set(e,n)),this.rgb[t]=n[0],this.rgb[t+1]=n[1],this.rgb[t+2]=n[2]}},z=class{carry=0;take(e,t){if(e<=0||t<=0)return 0;this.carry+=e*t;let n=Math.floor(this.carry);return this.carry-=n,n}reset(){this.carry=0}},Qn=new Map;function $n(e){return typeof e==`number`?e:e[0]+Math.random()*(e[1]-e[0])}function er(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}var tr=1.1,nr=.6,rr=.4,ir=4,ar=Mt/R/.8;function or(e,t,n){let r=1-Math.exp(-t*n*tr);return r>.001?e*t/r:e*t}var sr=6,cr=class{dying=0;object;capacity;field;visibility=1;setVisibility(e){this.visibility=Math.max(0,Math.min(1,e)),this.field.setVisibility(this.visibility)}attractorX=0;attractorY=0;color=new N;spec={x:0,y:0,count:0,speed:[0,0],life:[0,0],size:1,endSize:rr,color:16777215,intensity:ar,core:0,fade:ir,kind:`pixel`};speedSpread=[0,0];lifeSpread=[0,0];constructor(e=4096){this.capacity=e,this.field=new Zn(e),this.object=this.field.object,this.object.renderOrder=30,this.spec.speed=this.speedSpread,this.spec.life=this.lifeSpread}setAttractor(e,t){this.attractorX=e,this.attractorY=t,this.field.setAttractor(e,t)}burst(e){let t=e.drag??3.2,n=this.spec;n.x=e.x,n.y=e.y,n.count=e.count,n.color=e.color,n.size=e.size,n.drag=t,n.angle=e.angle,n.arc=e.arc,n.vx=e.inheritX,n.vy=e.inheritY,this.speedSpread[0]=e.speed*.35,this.speedSpread[1]=e.speed,this.lifeSpread[0]=e.life*nr,this.lifeSpread[1]=e.life*tr,n.attract=this.attraction(e,t),this.field.emit(n)}hit(e,t,n,r=8,i=90){this.burst({x:e,y:t,color:n,count:r,speed:i,life:.32,size:1,drag:4})}disintegrate(e,t,n,r,i=0,a=0,o=6){this.rawColor(n);let s=r/2;this.dying++;let c=Math.min(1,Math.sqrt(sr/this.dying)),l=Math.max(2,Math.round(o*c)),u=r/l,d=Math.max(1,Math.round(u*.45));for(let n=0;n<l;n++)for(let r=0;r<l;r++){let o=-s+u*(r+.5)+(Math.random()-.5)*u*.8,c=-s+u*(n+.5)+(Math.random()-.5)*u*.8,l=Math.hypot(o,c)||1;if(l>s)continue;let f=55+l*12;this.field.putRaw(e+o,t+c,o/l*f+i*.35,c/l*f+a*.35,.4+Math.random()*.5,d,rr,2.6,0,0,`pixel`,0,ir)}}trail(e,t,n,r=1,i=.32){this.rawColor(n),this.field.putRaw(e,t,(Math.random()-.5)*14,(Math.random()-.5)*14,i,r,rr,5,0,0,`pixel`,0,ir)}update(e){this.field.update(e),this.dying=0}clear(){this.field.clear()}dispose(){this.field.dispose()}attraction(e,t){let n=e.attract??0;if(n<=0)return 0;let r=e.life*1.7000000000000002*.5,i=n*r*r/2,a=e.speed*.675,o=t>.001?a*(1-Math.exp(-t*r))/t:a*r,s=Math.hypot(e.x-this.attractorX,e.y-this.attractorY);return Math.min(1,i/Math.max(1,s+o))}rawColor(e){this.color.setHex(e);let t=this.color.r*ar,n=this.color.g*ar,r=this.color.b*ar;this.field.setRawColors(t,n,r,t,n,r)}},lr=.6;function ur(e){let t=e.r*.2126+e.g*.7152+e.b*.0722;t>lr&&e.multiplyScalar(lr/t)}var dr=class{object;capacity;positions;sizes;alphas;tiles;colors;x;y;vx;vy;life;maxLife;scale;pixelStep=1;geometry;material;texture;color=new N;cursor=0;face=`slim`;sizeScale=1;script=`latin`;mode=`on`;constructor(e=2048){this.capacity=e,this.positions=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e),this.tiles=new Float32Array(e),this.colors=new Float32Array(e*3),this.x=new Float32Array(e),this.y=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.scale=new Float32Array(e),this.geometry=new ge,this.geometry.setAttribute(`position`,new P(this.positions,3)),this.geometry.setAttribute(`aSize`,new P(this.sizes,1)),this.geometry.setAttribute(`aAlpha`,new P(this.alphas,1)),this.geometry.setAttribute(`aTile`,new P(this.tiles,1)),this.geometry.setAttribute(`aColor`,new P(this.colors,3)),this.texture=ve(this.face,this.script),this.material=new Ee({vertexShader:Wn,fragmentShader:Gn,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uMap:{value:this.texture},uGrid:{value:5}}}),this.object=new Ae(this.geometry,this.material),this.object.frustumCulled=!1,this.object.renderOrder=40}spawn(e,t,n,r=16774870,i=1){if(this.mode===`off`)return;let a=this.glyphsFor(n),o=8*i*this.sizeScale,s=this.toPixels(o),c=this.snapUp(o*Ce[this.face]),l=e-(a.length-1)*c/2,u=(Math.random()-.5)*26,d=54+Math.random()*22;this.color.setHex(r),ur(this.color);for(let e=0;e<a.length;e++){let n=this.cursor;this.cursor=(this.cursor+1)%this.capacity,this.x[n]=l+e*c,this.y[n]=t,this.vx[n]=u,this.vy[n]=d,this.life[n]=.75,this.maxLife[n]=.75,this.scale[n]=s,this.tiles[n]=a[e],this.colors[n*3]=this.color.r,this.colors[n*3+1]=this.color.g,this.colors[n*3+2]=this.color.b}}glyphsFor(e){let t=Math.max(1,Math.round(e));if(t<1e3)return String(t).split(``).map(Number);let n=Math.floor(Math.log10(t)/3),r=t/1e3**n;if(r>=999.5&&(r/=1e3,n++),n>4)return this.exponentGlyphs(t);let i=this.headGlyphs(r);return i.push(13+n-1),i}headGlyphs(e){let t=Math.round(e*10);if(t<100){let e=[Math.floor(t/10)],n=t%10;return n>0&&e.push(12,n),e}return String(Math.round(e)).split(``).map(Number)}exponentGlyphs(e){let t=Math.floor(Math.log10(e)),n=e/10**t;Math.round(n*10)>=100&&(n/=10,t++);let r=this.headGlyphs(n);r.push(17);for(let e of String(t))r.push(Number(e));return r}spawnPlayerDamage(e,t,n){this.spawn(e+6,t,n,16734860,1.25);let r=this.cursor;this.cursor=(this.cursor+1)%this.capacity,this.x[r]=e-10,this.y[r]=t,this.vx[r]=0,this.vy[r]=60,this.life[r]=.75,this.maxLife[r]=.75,this.scale[r]=this.toPixels(10*this.sizeScale),this.tiles[r]=10,this.color.setRGB(1,.35,.55),ur(this.color),this.colors[r*3]=this.color.r,this.colors[r*3+1]=this.color.g,this.colors[r*3+2]=this.color.b}snap(e){return Math.round(e/this.pixelStep)*this.pixelStep}toPixels(e){return Math.max(1,Math.round(e/this.pixelStep))}snapUp(e){return Math.max(this.pixelStep,this.snap(e))}setPixelStep(e){this.pixelStep=e>0?e:1}setSizeScale(e){this.sizeScale=Math.max(.4,Math.min(2.5,e))}setFace(e){e!==this.face&&(this.face=e,this.rebuild())}setScript(e){e!==this.script&&(this.script=e,this.rebuild())}rebuild(){let e=ve(this.face,this.script);this.texture.dispose(),this.texture=e,this.material.uniforms.uMap.value=e}update(e){for(let t=0;t<this.capacity;t++){if(this.life[t]<=0){this.alphas[t]=0,this.sizes[t]=0;continue}this.life[t]-=e;let n=Math.exp(-3.4*e);this.vx[t]*=n,this.vy[t]*=n,this.x[t]+=this.vx[t]*e,this.y[t]+=this.vy[t]*e;let r=Math.max(0,this.life[t]/this.maxLife[t]);this.positions[t*3]=this.snap(this.x[t]),this.positions[t*3+1]=this.snap(this.y[t]),this.positions[t*3+2]=2,this.sizes[t]=this.scale[t],this.alphas[t]=Math.min(1,r*3)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0,this.geometry.attributes.aTile.needsUpdate=!0,this.geometry.attributes.aColor.needsUpdate=!0}clear(){this.life.fill(0),this.alphas.fill(0),this.sizes.fill(0),this.geometry.attributes.aAlpha.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.texture.dispose()}},fr=class{object;capacity;offsets;sizes;fills;colors;geometry;material;color=new N;count=0;constructor(e=256){this.capacity=e,this.offsets=new Float32Array(e*2),this.sizes=new Float32Array(e*2),this.fills=new Float32Array(e),this.colors=new Float32Array(e*3);let t=new xe(1,1);this.geometry=new me,this.geometry.index=t.index,this.geometry.setAttribute(`position`,t.attributes.position),this.geometry.setAttribute(`uv`,t.attributes.uv),this.geometry.setAttribute(`aOffset`,new j(this.offsets,2)),this.geometry.setAttribute(`aSize`,new j(this.sizes,2)),this.geometry.setAttribute(`aFill`,new j(this.fills,1)),this.geometry.setAttribute(`aColor`,new j(this.colors,3)),this.geometry.instanceCount=0,this.material=new Ee({vertexShader:Kn,fragmentShader:qn,transparent:!0,depthTest:!1,depthWrite:!1}),this.object=new pe(this.geometry,this.material),this.object.frustumCulled=!1,this.object.renderOrder=32}begin(){this.count=0}add(e,t,n,r,i){if(this.count>=this.capacity)return;let a=this.count++;this.offsets[a*2]=Math.round(e),this.offsets[a*2+1]=Math.round(t),this.sizes[a*2]=Math.max(8,Math.round(n)),this.sizes[a*2+1]=3,this.fills[a]=Math.max(0,Math.min(1,r)),this.color.setHex(i),this.colors[a*3]=this.color.r,this.colors[a*3+1]=this.color.g,this.colors[a*3+2]=this.color.b}end(){if(this.geometry.instanceCount=this.count,this.count===0)return;let e=this.geometry.attributes;e.aOffset.needsUpdate=!0,e.aSize.needsUpdate=!0,e.aFill.needsUpdate=!0,e.aColor.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},pr=[`position`,`aSize`,`aAlpha`,`aColor`,`aTile`,`aAngle`],mr=class{points;capacity;positions;sizes;alphas;colors;tiles;angles;geometry;material;constructor(e){this.capacity=e.capacity,this.positions=new Float32Array(e.capacity*3),this.sizes=new Float32Array(e.capacity),this.alphas=new Float32Array(e.capacity),this.colors=new Float32Array(e.capacity*3),this.tiles=new Float32Array(e.capacity),this.angles=new Float32Array(e.capacity),this.geometry=new ge,this.geometry.setAttribute(`position`,new P(this.positions,3)),this.geometry.setAttribute(`aSize`,new P(this.sizes,1)),this.geometry.setAttribute(`aAlpha`,new P(this.alphas,1)),this.geometry.setAttribute(`aColor`,new P(this.colors,3)),this.geometry.setAttribute(`aTile`,new P(this.tiles,1)),this.geometry.setAttribute(`aAngle`,new P(this.angles,1)),this.material=new Ee({vertexShader:Fn,fragmentShader:e.fragmentShader??In,transparent:!0,depthTest:!1,depthWrite:!1,blending:e.additive?2:1,uniforms:{uMap:{value:e.texture},uGrid:{value:e.grid??1},uGain:{value:e.gain??1},uPixelScale:Nt}}),this.points=new Ae(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=e.renderOrder??20}set(e,t,n,r,i){this.positions[e*3]=t,this.positions[e*3+1]=n,this.positions[e*3+2]=1,this.sizes[e]=r,this.alphas[e]=i}setColor(e,t){this.colors[e*3]=t.r,this.colors[e*3+1]=t.g,this.colors[e*3+2]=t.b}setColorRgb(e,t,n,r){this.colors[e*3]=t,this.colors[e*3+1]=n,this.colors[e*3+2]=r}setTile(e,t){this.tiles[e]=t}setAngle(e,t,n=16){let r=Math.PI*2/n;this.angles[e]=Math.round(t/r)*r}hide(e){this.alphas[e]=0,this.sizes[e]=0}sync(){this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0,this.geometry.attributes.aColor.needsUpdate=!0,this.geometry.attributes.aTile.needsUpdate=!0,this.geometry.attributes.aAngle.needsUpdate=!0}syncRange(e){let t=Math.max(0,Math.min(this.capacity,Math.ceil(e)));if(this.geometry.setDrawRange(0,t),t===0)return;let n=this.geometry.attributes;for(let e of pr){let r=n[e];r.clearUpdateRanges(),r.addUpdateRange(0,t*r.itemSize),r.needsUpdate=!0}}dispose(){this.geometry.dispose(),this.material.dispose()}},B=4096,V=128,hr=1,gr=Math.PI*2,_r=-1,vr=class{object;sprites;texture;used=new Uint8Array(B);hx=new Float32Array(B);hy=new Float32Array(B);fx=new Float32Array(B);fy=new Float32Array(B);tx=new Float32Array(B);ty=new Float32Array(B);ux=new Float32Array(B);uy=new Float32Array(B);rank=new Float32Array(B);seed=new Float32Array(B);size=new Float32Array(B);alphaMul=new Float32Array(B);sizeMul=new Float32Array(B);fromRadius=new Float32Array(B);fromAngle=new Float32Array(B);turn=new Float32Array(B);toRadius=new Float32Array(B);wx=new Float32Array(B);wy=new Float32Array(B);specs=Array(V).fill(null);flyEases=Array(V);generation=new Uint16Array(V);start=new Int32Array(V);count=new Int32Array(V);x=new Float32Array(V);y=new Float32Array(V);radius=new Float32Array(V);stretch=new Float32Array(V);angle=new Float32Array(V);red=new Float32Array(V);green=new Float32Array(V);blue=new Float32Array(V);toRed=new Float32Array(V);toGreen=new Float32Array(V);toBlue=new Float32Array(V);free=new Float32Array(V);total=new Float32Array(V);time=new Float32Array(V);move=new Int32Array(V);moveTime=new Float32Array(V);moveDuration=new Float64Array(V);scale=new Float32Array(V);scaleFrom=new Float32Array(V);follow=new Int32Array(V).fill(_r);stamp=new Float32Array(V);originX=new Float32Array(V);originY=new Float32Array(V);intensity=new Float32Array(V);sizeScale=new Float32Array(V);trailClock=new Float32Array(V);flyFromX=new Float32Array(V);flyFromY=new Float32Array(V);destX=new Float32Array(V);destY=new Float32Array(V);flyTime=new Float32Array(V);flown=new Float32Array(V);flyArc=new Float32Array(V);velX=new Float32Array(V);velY=new Float32Array(V);velDrag=new Float32Array(V);anchorVX=new Float32Array(V);anchorVY=new Float32Array(V);high=0;rgb=new Float32Array(3);field;constructor(e){this.field=e,this.texture=he(),this.sprites=new mr({capacity:B,texture:this.texture,additive:!0,gain:R,renderOrder:29,fragmentShader:Bn}),this.object=this.sprites.points,this.sprites.syncRange(0)}play(e,t){let n=Math.max(1,Math.min(e.count,B)),r=-1;for(let e=0;e<V;e++)if(this.specs[e]===null){r=e;break}if(r<0)return-1;let i=this.claim(n);if(i<0)return-1;this.specs[r]=e,this.generation[r]=this.generation[r]+1&65535,this.start[r]=i,this.count[r]=n,this.x[r]=t.x,this.y[r]=t.y,this.radius[r]=t.radius,this.stretch[r]=t.stretch??1,this.angle[r]=t.angle??0,this.writeRgb(t.color),this.red[r]=this.rgb[0],this.green[r]=this.rgb[1],this.blue[r]=this.rgb[2],this.writeRgb(t.to??t.color),this.toRed[r]=this.rgb[0],this.toGreen[r]=this.rgb[1],this.toBlue[r]=this.rgb[2],this.follow[r]=t.follow??_r,this.stamp[r]=t.stamp??0,this.originX[r]=t.originX??t.x,this.originY[r]=t.originY??t.y,this.intensity[r]=t.intensity??1,this.sizeScale[r]=t.sizeScale??1,this.time[r]=0,this.scale[r]=1,this.scaleFrom[r]=1,this.trailClock[r]=0,this.flyFromX[r]=t.x,this.flyFromY[r]=t.y,this.destX[r]=t.toX??t.x,this.destY[r]=t.toY??t.y,this.flyTime[r]=t.fly??0,this.flown[r]=0,this.flyArc[r]=t.arc??0,this.flyEases[r]=t.flyEase,this.velX[r]=t.vx??0,this.velY[r]=t.vy??0,this.velDrag[r]=t.drag??0,this.anchorVX[r]=0,this.anchorVY[r]=0;let a=0;for(let t of e.moves)yr(t)&&typeof t.time==`number`&&(a+=t.time);this.free[r]=Math.max(0,(t.seconds??hr)-a);let o=0;for(let t of e.moves)yr(t)&&(o+=this.duration(r,t));this.total[r]=o;let s=Dt(e.layout,n),c=e.jitter??0,l=e.sizeJitter??0,u=0;for(let r=0;r<n;r++){let n=i+r;this.hx[n]=s[r*2]+(Math.random()*2-1)*c,this.hy[n]=s[r*2+1]+(Math.random()*2-1)*c,this.ux[n]=this.hx[n],this.uy[n]=this.hy[n],this.seed[n]=Math.random(),this.size[n]=e.size*(1+(Math.random()*2-1)*l),this.alphaMul[n]=1,this.sizeMul[n]=1,this.wx[n]=t.x,this.wy[n]=t.y,u=Math.max(u,Math.hypot(this.hx[n],this.hy[n]))}let d=e.stagger?.by??e.order??`index`;for(let e=0;e<n;e++){let t=i+e;d===`index`?this.rank[t]=n>1?e/(n-1):0:d===`angle`?this.rank[t]=(Math.atan2(this.hy[t],this.hx[t])/gr+1)%1:d===`radius`?this.rank[t]=Math.hypot(this.hx[t],this.hy[t])/(u||1):this.rank[t]=this.seed[t]}i+n>this.high&&(this.high=i+n);let f=r+this.generation[r]*V;return this.begin(r,0)?f:-1}release(e){let t=this.resolve(e);t<0||this.specs[t].moves[this.move[t]].kind===`wait`&&(this.moveDuration[t]=this.moveTime[t])}stop(e){let t=this.resolve(e);t>=0&&this.drop(t)}alive(e){return this.resolve(e)>=0}moveTo(e,t,n){let r=this.resolve(e);r<0||(this.x[r]=t,this.y[r]=n)}update(e,t){for(let n=0;n<V;n++){let r=this.specs[n];if(r===null)continue;this.steer(n,e,t),this.time[n]+=e,this.moveTime[n]+=e,this.angle[n]+=(r.spin??0)*e;let i=!0;for(;this.moveTime[n]>=this.moveDuration[n];){this.pose(n,1),this.finish(n);let e=this.move[n]+1;if(e>=r.moves.length){this.drop(n),i=!1;break}let t=this.moveTime[n]-this.moveDuration[n];if(!this.begin(n,e)){i=!1;break}this.moveTime[n]=t}if(!i)continue;let a=this.moveDuration[n],o=Number.isFinite(a)&&a>0?this.moveTime[n]/a:1;this.pose(n,o),this.draw(n,r,e)}this.sprites.syncRange(this.high)}clear(){for(let e=0;e<V;e++)this.specs[e]!==null&&this.drop(e);this.sprites.syncRange(0)}dispose(){this.sprites.dispose(),this.texture.dispose()}resolve(e){if(e<0)return-1;let t=e%V,n=Math.floor(e/V);return this.specs[t]!==null&&this.generation[t]===n?t:-1}claim(e){let t=0;for(let n=0;n<B;n++)if(t=this.used[n]===1?0:t+1,t===e){let t=n-e+1;return this.used.fill(1,t,n+1),t}return-1}drop(e){let t=this.start[e],n=t+this.count[e];for(let e=t;e<n;e++)this.sprites.hide(e);if(this.used.fill(0,t,n),this.specs[e]=null,this.follow[e]=_r,n>=this.high){let e=t;for(;e>0&&this.used[e-1]===0;)e--;this.high=e}}writeRgb(e){this.rgb[0]=Sr((e>>16&255)/255),this.rgb[1]=Sr((e>>8&255)/255),this.rgb[2]=Sr((e&255)/255)}duration(e,t){return yr(t)?typeof t.time==`number`?t.time:t.time.share*this.free[e]:1/0}steer(e,t,n){let r=this.x[e],i=this.y[e],a=this.follow[e],o=!1;if(a!==_r&&n&&(n.alive[a]===1&&n.stamp[a]===this.stamp[e]?(this.destX[e]=n.x[a],this.destY[e]=n.y[a],o=!0):this.follow[e]=_r),this.flown[e]<this.flyTime[e]){this.flown[e]=Math.min(this.flyTime[e],this.flown[e]+t);let n=wt(this.flyEases[e],this.flown[e]/this.flyTime[e]),r=this.destX[e]-this.flyFromX[e],i=this.destY[e]-this.flyFromY[e],a=this.flyArc[e]*Math.sin(Math.PI*n);this.x[e]=this.flyFromX[e]+r*n-i*a,this.y[e]=this.flyFromY[e]+i*n+r*a}else if(o||this.flyTime[e]>0)this.x[e]=this.destX[e],this.y[e]=this.destY[e];else if(this.velX[e]!==0||this.velY[e]!==0){let n=Math.exp(-this.velDrag[e]*t);this.velX[e]*=n,this.velY[e]*=n,this.x[e]+=this.velX[e]*t,this.y[e]+=this.velY[e]*t}t>0&&(this.anchorVX[e]=(this.x[e]-r)/t,this.anchorVY[e]=(this.y[e]-i)/t)}begin(e,t){let n=this.specs[e],r=n.moves[t];this.move[e]=t,this.moveTime[e]=0,this.moveDuration[e]=this.duration(e,r);let i=this.start[e],a=this.count[e],o=i+a;for(let e=i;e<o;e++)this.fx[e]=this.ux[e],this.fy[e]=this.uy[e];if(r.kind===`release`)return this.letGo(e,n,r),this.drop(e),!1;if(r.kind===`gather`){let t=r.spread??2,n=0,a=0;if(r.from===`origin`){let t=(this.originX[e]-this.x[e])/(this.radius[e]||1),r=(this.originY[e]-this.y[e])/(this.radius[e]||1),i=Math.cos(-this.angle[e]),o=Math.sin(-this.angle[e]);n=t*i-r*o,a=(t*o+r*i)/(this.stretch[e]||1)}let s=this.scale[e];for(let e=i;e<o;e++){if(r.from===`center`)this.fx[e]=(Math.random()-.5)*.04,this.fy[e]=(Math.random()-.5)*.04;else if(r.from===`ring`){let n=Math.hypot(this.hx[e],this.hy[e])>1e-4?Math.atan2(this.hy[e],this.hx[e]):this.seed[e]*gr;this.fx[e]=Math.cos(n)*t,this.fy[e]=Math.sin(n)*t}else if(r.from===`disc`){let n=Math.random()*gr,r=Math.sqrt(Math.random())*t;this.fx[e]=Math.cos(n)*r,this.fy[e]=Math.sin(n)*r}else this.fx[e]=n+(Math.random()-.5)*.1,this.fy[e]=a+(Math.random()-.5)*.1;this.tx[e]=this.hx[e]*s,this.ty[e]=this.hy[e]*s}this.spiral(i,o,r.swirl??0)}else if(r.kind===`morph`){let t=Dt(r.layout,a),s=n.jitter??0,c=this.scale[e];for(let e=0;e<a;e++){let n=i+e;this.hx[n]=t[e*2]+(Math.random()*2-1)*s,this.hy[n]=t[e*2+1]+(Math.random()*2-1)*s,this.tx[n]=this.hx[n]*c,this.ty[n]=this.hy[n]*c}this.spiral(i,o,r.swirl??0)}else r.kind===`scale`&&(this.scaleFrom[e]=this.scale[e]);return!0}spiral(e,t,n){let r=n*gr;for(let n=e;n<t;n++){let e=Math.hypot(this.fx[n],this.fy[n]),t=Math.hypot(this.tx[n],this.ty[n]);if(this.fromRadius[n]=e,this.toRadius[n]=t,e<1e-4&&t<1e-4)this.fromAngle[n]=0,this.turn[n]=r;else if(e<1e-4){let e=Math.atan2(this.ty[n],this.tx[n]);this.fromAngle[n]=e-r,this.turn[n]=r}else if(t<1e-4)this.fromAngle[n]=Math.atan2(this.fy[n],this.fx[n]),this.turn[n]=r;else{let e=Math.atan2(this.fy[n],this.fx[n]),t=Math.atan2(this.ty[n],this.tx[n])-e;t-=gr*Math.round(t/gr),this.fromAngle[n]=e,this.turn[n]=t+r}}}letGo(e,t,n){let r=this.radius[e],i=(n.speed??1)*r,a=(n.spread??.5)*r,o=this.total[e]>0?xr(this.time[e]/this.total[e]):1,s=this.red[e]+(this.toRed[e]-this.red[e])*o,c=this.green[e]+(this.toGreen[e]-this.green[e])*o,l=this.blue[e]+(this.toBlue[e]-this.blue[e])*o;this.field.setRawColors(s,c,l,this.toRed[e],this.toGreen[e],this.toBlue[e]);let u=this.start[e],d=u+this.count[e];for(let r=u;r<d;r++){let o=this.wx[r]-this.x[e],s=this.wy[r]-this.y[e],c=Math.hypot(o,s);if(c>.001)o/=c,s/=c;else{let e=this.seed[r]*gr;o=Math.cos(e),s=Math.sin(e)}let l=Math.random()*gr,u=Math.random()*a;this.field.putRaw(this.wx[r],this.wy[r],o*i+Math.cos(l)*u+this.anchorVX[e],s*i+Math.sin(l)*u+this.anchorVY[e],n.life*(.7+.6*this.seed[r]),this.size[r]*this.sizeMul[r]*this.sizeScale[e],n.endSize??.15,n.drag??2.5,n.gravity??0,t.core??.5,`glow`,t.twinkle??0)}}finish(e){let t=this.specs[e].moves[this.move[e]];t.kind===`scale`&&(this.scale[e]=t.to)}pose(e,t){let n=this.specs[e],r=n.moves[this.move[e]],i=Math.min(.95,Math.max(0,n.stagger?.span??0)),a=this.scale[e],o=this.scaleFrom[e],s=this.moveTime[e],c=this.time[e],l=this.start[e],u=l+this.count[e];for(let e=l;e<u;e++){let n=r.kind===`wait`?1:xr((t-this.rank[e]*i)/(1-i)),l=0,u=0,d=1,f=1;switch(r.kind){case`gather`:case`morph`:{let t=wt(r.ease,n);if((r.swirl??0)===0)l=this.fx[e]+(this.tx[e]-this.fx[e])*t,u=this.fy[e]+(this.ty[e]-this.fy[e])*t;else{let n=this.fromRadius[e]+(this.toRadius[e]-this.fromRadius[e])*t,r=this.fromAngle[e]+this.turn[e]*t;l=Math.cos(r)*n,u=Math.sin(r)*n}break}case`hold`:case`wait`:{let t=br(r,s,this.rank[e]),n=a*(1+(r.pulse??0)*t);l=this.hx[e]*n,u=this.hy[e]*n+(r.bob??0)*t,f=1+((r.pulse??0)*1.5+(r.flare??0))*t,d=Math.min(2,Math.max(0,1+(r.glow??0)*t));let i=r.wobble??0;i>0&&(l+=i*Math.sin(c*3.1+this.seed[e]*40),u+=i*Math.cos(c*2.7+this.seed[e]*55));break}case`scale`:{let t=wt(r.ease,n),i=o+(r.to-o)*t;l=this.hx[e]*i,u=this.hy[e]*i;break}case`scatter`:{let t=wt(r.ease??`out`,n),i=Math.hypot(this.fx[e],this.fy[e]),a,o;if(r.direction===`random`||i<1e-4){let t=this.seed[e]*gr;a=Math.cos(t),o=Math.sin(t)}else r.direction===`tangent`?(a=-this.fy[e]/i,o=this.fx[e]/i):(a=this.fx[e]/i,o=this.fy[e]/i);l=this.fx[e]+a*r.distance*t,u=this.fy[e]+o*r.distance*t;let s=(r.swirl??0)*gr*t;if(s!==0){let e=Math.cos(s),t=Math.sin(s),n=l*e-u*t;u=l*t+u*e,l=n}r.fade&&(d=1-t),f=1-(r.shrink??0)*t;break}case`collapse`:{let t=wt(r.ease??`in`,n);l=this.fx[e]*(1-t),u=this.fy[e]*(1-t);let i=(r.swirl??0)*gr*t;if(i!==0){let e=Math.cos(i),t=Math.sin(i),n=l*e-u*t;u=l*t+u*e,l=n}r.fade&&(d=1-t),f=1-(r.shrink??0)*t;break}case`release`:l=this.fx[e],u=this.fy[e]}this.ux[e]=l,this.uy[e]=u,this.alphaMul[e]=d,this.sizeMul[e]=Math.max(0,f)}}draw(e,t,n){let r=this.radius[e],i=this.stretch[e],a=Math.cos(this.angle[e]),o=Math.sin(this.angle[e]),s=this.time[e],c=this.total[e],l=c>0?xr(s/c):0,u=this.red[e]+(this.toRed[e]-this.red[e])*l,d=this.green[e]+(this.toGreen[e]-this.green[e])*l,f=this.blue[e]+(this.toBlue[e]-this.blue[e])*l,p=t.fadeIn?xr(s/t.fadeIn):1,m=t.twinkle??0,h=t.core??.5,g=this.intensity[e]*p,_=this.sizeScale[e],v=this.start[e],y=v+this.count[e],b=t.trail,x=!1;b&&(this.trailClock[e]+=n,this.trailClock[e]>=b.every&&(this.trailClock[e]%=b.every,x=!0,this.field.setRawColors(u,d,f,this.toRed[e],this.toGreen[e],this.toBlue[e])));for(let t=v;t<y;t++){let n=this.ux[t]*r,c=this.uy[t]*r*i,l=this.x[e]+n*a-c*o,p=this.y[e]+n*o+c*a,v=this.alphaMul[t]*g;m>0&&(v*=1-m*(.5+.5*Math.sin(s*13+this.seed[t]*57)));let y=this.size[t]*this.sizeMul[t]*_;this.sprites.set(t,l,p,y,v),this.sprites.setColorRgb(t,u,d,f),this.sprites.setTile(t,h),x&&b&&v>.05&&Math.random()<(b.chance??1)&&this.field.putRaw(l,p,(Math.random()-.5)*6,(Math.random()-.5)*6,b.life,y*(b.size??.7),b.endSize??.15,4,0,b.core??h,`glow`),this.wx[t]=l,this.wy[t]=p}}};function yr(e){return e.kind!==`wait`&&e.kind!==`release`}function br(e,t,n){if((e.pulse??0)+(e.flare??0)+(e.glow??0)+(e.bob??0)===0)return 0;let r=Math.sin(gr*((e.rate??1)*t-(e.wave??0)*n));if(e.beat!==`peak`)return r;let i=r>0?r:0;return i*i*i*i}function xr(e){return e<0?0:e>1?1:e}function Sr(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}var Cr=Math.PI*2,wr=Math.PI*(3-Math.sqrt(5)),H=Math.sqrt(3)/2,Tr=class{x=[];y=[];along=[];across=[];push(e,t,n,r){this.x.push(e),this.y.push(t),this.along.push(n),this.across.push(r)}finish(e,t){let n=this.x.length,r={count:n,extent:0,x:new Float32Array(n),y:new Float32Array(n),along:new Float32Array(n),across:new Float32Array(n),radius:new Float32Array(n),angle:new Float32Array(n)},i=0;for(let a=0;a<n;a++){let n=(Math.random()-.5)*e*t,o=(Math.random()-.5)*e*t;r.x[a]=this.x[a]+n,r.y[a]=this.y[a]+o,r.along[a]=Mr(this.along[a]),r.across[a]=Mr(this.across[a]),i=Math.max(i,Math.hypot(r.x[a],r.y[a]))}r.extent=i;for(let e=0;e<n;e++){r.radius[e]=i>0?Math.hypot(r.x[e],r.y[e])/i:0;let t=Math.atan2(r.y[e],r.x[e]+1e-6);r.angle[e]=(t<0?t+Cr:t)/Cr}return r}};function Er(e,t){return e<=0?1:Math.max(1,Math.floor(e/(t*H))+1)}function Dr(e,t,n){return(e-(t-1)/2)*n*H}function Or(e,t,n,r=!1){let i=Math.max(.5,t),a=new Tr,o=e=>Math.max(1,Math.round(e/(i*i*H)));if(r)switch(e.kind){case`line`:case`beam`:{let t=Math.max(0,e.length),n=(e.kind===`beam`?Math.max(0,e.width):0)/2,r=o(t*Math.max(i,n*2));for(let e=0;e<r;e++){let e=Math.random(),r=n>0?(Math.random()*2-1)*n:0;a.push(e*t,r,e,n>0?Math.abs(r)/n:0)}return a.finish(0,i)}case`wedge`:{let t=Math.max(0,e.length),n=Math.max(0,e.width),r=Math.max(0,e.rootWidth??n*.2),s=o(t*(r+n)/2);for(let e=0;e<s;e++){let e=Math.sqrt(Math.random()),i=(r+(n-r)*e)/2,o=(Math.random()*2-1)*i;a.push(e*t,o,e,i>0?Math.abs(o)/i:0)}return a.finish(0,i)}case`rect`:{let t=Math.max(0,e.width),n=Math.max(0,e.height),r=o(t*n);for(let e=0;e<r;e++){let e=(Math.random()-.5)*t,r=(Math.random()-.5)*n;a.push(e,r,t>0?(e+t/2)/t:0,n>0?Math.abs(r)/(n/2):0)}return a.finish(0,i)}case`disc`:{let t=Math.max(0,e.radius),n=o(Math.PI*t*t);for(let e=0;e<n;e++){let e=Math.sqrt(Math.random()),n=Math.random()*Cr;a.push(Math.cos(n)*e*t,Math.sin(n)*e*t,e,e)}return a.finish(0,i)}case`cone`:{let t=Math.max(0,e.length),n=Math.max(0,e.spread),r=o(n*t*t);for(let e=0;e<r;e++){let e=Math.sqrt(Math.random()),r=(Math.random()*2-1)*n,i=n>0?Math.abs(r)/n:0;a.push(Math.cos(r)*e*t,Math.sin(r)*e*t,e,i)}return a.finish(0,i)}}switch(e.kind){case`line`:case`beam`:{let t=Math.max(0,e.length),n=Er(e.kind===`beam`?Math.max(0,e.width):0,i),r=Math.max(1e-6,(n-1)/2*i*H),o=Math.max(1,Math.floor(t/i)+1);for(let e=0;e<n;e++){let s=Dr(e,n,i),c=e%2==1?i/2:0;for(let e=0;e<o;e++){let o=e*i+c;o>t||a.push(o,s,t>0?o/t:0,n>1?Math.abs(s)/r:0)}}break}case`wedge`:{let t=Math.max(0,e.length),n=Math.max(0,e.width),r=Math.max(0,e.rootWidth??n*.2),o=Math.max(1,Math.floor(t/i)+1);for(let e=0;e<o;e++){let o=e*i;if(o>t)continue;let s=t>0?o/t:0,c=Er(r+(n-r)*s,i),l=Math.max(1e-6,(c-1)/2*i*H);for(let t=0;t<c;t++){let n=Dr(t,c,i)+(e%2==1?i*H*.5:0);a.push(o,n,s,c>1?Math.abs(n)/l:0)}}break}case`fill`:{let t=Math.max(0,e.radius),n=i*H;for(let r=-t;r<=t;r+=n){let o=Math.round((r+t)/n)%2==1?i/2:0;for(let n=-t;n<=t;n+=i){let i=n+o;if(!Ar(e.shape,i/t,r/t))continue;let s=Math.hypot(i,r);a.push(i,r,(i+t)/(2*t),Math.min(1,s/t))}}break}case`rect`:{let t=Math.max(0,e.width),n=Er(Math.max(0,e.height),i),r=Math.max(1e-6,(n-1)/2*i*H),o=Math.max(1,Math.floor(t/i)+1);for(let e=0;e<n;e++){let s=Dr(e,n,i),c=e%2==1?i/2:0;for(let e=0;e<o;e++){let o=-t/2+e*i+c;o>t/2||a.push(o,s,t>0?(o+t/2)/t:0,n>1?Math.abs(s)/r:0)}}break}case`disc`:{let t=Math.max(0,e.radius),n=Math.max(1,Math.round(Math.PI*t*t/(i*i*H)));for(let e=0;e<n;e++){let r=Math.sqrt((e+.5)/n),i=e*wr;a.push(Math.cos(i)*r*t,Math.sin(i)*r*t,r,r)}break}case`ring`:{let t=Math.max(0,e.radius),n=Math.max(0,e.width??0),r=e.from??0,o=(e.to??r+Cr)-r,s=Math.abs(Math.abs(o)-Cr)<1e-4,c=Er(n,i),l=Math.max(1e-6,(c-1)/2*i*H);for(let e=0;e<c;e++){let n=Dr(e,c,i),u=t+n;if(u<=0)continue;let d=Math.abs(o)*u,f=Math.max(1,Math.round(d/i)),p=s?f:Math.max(1,f),m=s?f:f+1,h=e%2==1?.5:0;for(let e=0;e<m;e++){let t=Math.min(1,(e+(s?h:0))/p),i=r+o*t;a.push(Math.cos(i)*u,Math.sin(i)*u,t,c>1?Math.abs(n)/l:0)}}break}case`cone`:{let t=Math.max(0,e.length),n=Math.max(0,e.spread);for(let e=i*.5;e<=t;e+=i*H){let r=e*n*2,o=Math.max(0,Math.round(r/i));for(let r=0;r<=o;r++){let i=o===0?.5:r/o,s=-n+n*2*i,c=n>0?Math.abs(s)/n:0;a.push(Math.cos(s)*e,Math.sin(s)*e,e/t,c)}}break}case`outline`:{let t=Math.max(0,e.radius),n=Er(Math.max(0,e.width??0),i),r=Math.max(1e-6,(n-1)/2*i*H),o=0;for(let t of e.shape.paths)o+=jr(t.points,t.closed);o*=t;let s=0;for(let c of e.shape.paths){let e=c.points,l=c.closed?e.length/2:e.length/2-1;for(let u=0;u<l;u++){let d=e[u*2]*t,f=e[u*2+1]*t,p=(u+1)%(e.length/2),m=e[p*2]*t,h=e[p*2+1]*t,g=Math.hypot(m-d,h-f);if(g<=1e-6)continue;let _=-(h-f)/g,v=(m-d)/g,y=Math.max(1,Math.round(g/i)),b=!c.closed&&u===l-1?y:y-1;for(let e=0;e<=b;e++){let t=e/y,c=d+(m-d)*t,l=f+(h-f)*t,u=o>0?(s+g*t)/o:0;for(let e=0;e<n;e++){let t=Dr(e,n,i);a.push(c+_*t,l+v*t,u,n>1?Math.abs(t)/r:0)}}s+=g}}break}}return a.finish(n,i)}function kr(e,t){let n=Math.max(.5,t);switch(e.kind){case`line`:return e.length/n+1;case`beam`:return(e.length/n+1)*Er(e.width,n);case`rect`:return(e.width/n+1)*Er(e.height,n);case`disc`:return Math.PI*e.radius*e.radius/(n*n*H);case`ring`:return(Math.abs((e.to??(e.from??0)+Cr)-(e.from??0))*e.radius/n+1)*Er(e.width??0,n);case`cone`:return e.spread*e.length*e.length/(n*n*H)+e.length/n;case`fill`:return Math.PI*e.radius*e.radius/(n*n*H);case`wedge`:{let t=e.width,r=e.rootWidth??t*.2;return(e.length/n+1)*Er((r+t)/2,n)}case`outline`:{let t=0;for(let n of e.shape.paths)t+=jr(n.points,n.closed);return(t*e.radius/n+1)*Er(e.width??0,n)}}}function Ar(e,t,n){let r=!1;for(let i of e.paths){if(!i.closed)continue;let e=i.points,a=e.length/2;for(let i=0,o=a-1;i<a;o=i++){let a=e[i*2],s=e[i*2+1],c=e[o*2],l=e[o*2+1];s>n!=l>n&&t<(c-a)*(n-s)/(l-s)+a&&(r=!r)}}return r}function jr(e,t){let n=e.length/2,r=0,i=t?n:n-1;for(let t=0;t<i;t++){let i=(t+1)%n;r+=Math.hypot(e[i*2]-e[t*2],e[i*2+1]-e[t*2+1])}return r}function Mr(e){return e<0?0:e>1?1:e}var Nr=10,Pr={form:0,radial:1,tangent:2},Fr={glow:0,pixel:1,streak:2,flame:3},Ir=class{x=0;y=0;angle=0;scale=1;from=0;reveal=1;soft=.03;alpha=1;intensity=1;band=1;bandSoft=.15;size=1;erode=0;pulse=0;pulseSpeed=1;pulseWaves=1;pulseSharp=4;dash=0;dashFill=.5;dashSpeed=0;flow=0;swirl=0;swirlInner=0;spectrumWaves=0;spectrumShift=0;age=0;flowOffset=0;period=0;extent=1;spec;slot=-1;start=0;count=0;colorA=new Float32Array(3);colorB=new Float32Array(3);constructor(e){this.spec=e,zr(this.colorA,e.color),zr(this.colorB,e.to??e.color)}get alive(){return this.slot>=0}setColors(e,t=e){zr(this.colorA,e),zr(this.colorB,t)}},Lr=class{object;capacity;maxForms;geometry=new ge;material;homes;params;extras;homeAttribute;paramAttribute;extraAttribute;table;texture;forms;free;high=0;dirty=[];constructor(e=1<<17,t=256){this.capacity=e,this.maxForms=t,this.homes=new Float32Array(e*3),this.params=new Float32Array(e*4).fill(0),this.extras=new Float32Array(e*2);for(let t=0;t<e;t++)this.params[t*4]=-1;this.forms=Array(t).fill(null),this.free=[[0,e]],this.homeAttribute=new P(this.homes,3),this.paramAttribute=new P(this.params,4),this.extraAttribute=new P(this.extras,2);for(let e of[this.homeAttribute,this.paramAttribute,this.extraAttribute])e.setUsage(be);this.geometry.setAttribute(`position`,this.homeAttribute),this.geometry.setAttribute(`aForm`,this.paramAttribute),this.geometry.setAttribute(`aExtra`,this.extraAttribute),this.geometry.setDrawRange(0,0),this.table=new Float32Array(Nr*t*4),this.texture=new de(this.table,Nr,t,_e,fe),this.texture.magFilter=we,this.texture.minFilter=we,this.texture.needsUpdate=!0,this.material=new Ee({vertexShader:Un,fragmentShader:Hn,transparent:!0,depthTest:!1,depthWrite:!1,blending:2,uniforms:{uForms:{value:this.texture},uFormsSize:{value:new ue(Nr,t)},uPixelScale:Nt,uMaxPoint:{value:192},uGain:{value:R}}}),this.object=new Ae(this.geometry,this.material),this.object.frustumCulled=!1,this.object.renderOrder=28}setVisibility(e){let t=Math.max(0,Math.min(1,e));this.material.uniforms.uGain.value=R*t,this.object.visible=t>0}create(e){let t=this.forms.indexOf(null);if(t<0)return null;let n=Math.max(.1,e.size),r=e.spacing??n*.8,i=Math.min(e.max??6e3,this.capacity),a=kr(e.layout,r);if(a>i){let t=e.layout.kind===`line`;r*=t?a/i:Math.sqrt(a/i)}let o=Or(e.layout,r,e.jitter??.15,e.scatter),s=Math.min(o.count,i),c=this.allocate(s);if(c<0)return null;let l=new Ir(e);l.slot=t,l.start=c,l.count=s,l.extent=Math.max(.001,o.extent);let u=e.layout,d=u.kind===`beam`||u.kind===`line`||u.kind===`wedge`;(e.order??`along`)===`along`&&d&&(l.period=Math.max(r,u.length+r)),this.forms[t]=l;let f=Rr(o,e.order??`along`),p=Rr(o,e.gradient??`across`),m=e.sizeJitter??.2;for(let e=0;e<s;e++){let r=c+e;this.homes[r*3]=o.x[e],this.homes[r*3+1]=o.y[e],this.homes[r*3+2]=f?f[e]:Math.random(),this.params[r*4]=t,this.params[r*4+1]=Math.random(),this.params[r*4+2]=n*(1+(Math.random()*2-1)*m),this.params[r*4+3]=o.across[e],this.extras[r*2]=p?p[e]:Math.random(),this.extras[r*2+1]=Math.random()}return this.dirty.push([c,s]),this.high=Math.max(this.high,c+s),l}remove(e){if(!(!e||e.slot<0||this.forms[e.slot]!==e)){for(let t=0;t<e.count;t++)this.params[(e.start+t)*4]=-1;this.dirty.push([e.start,e.count]),this.release(e.start,e.count),this.forms[e.slot]=null,this.table[e.slot*Nr*4+4+3]=0,e.slot=-1}}scatter(e,t,n){if(!e||!e.alive)return;let r=Math.cos(e.angle),i=Math.sin(e.angle),a=n.share??1,o=e.colorA,s=e.colorB,c=e.alpha*e.intensity,l=n.kind??`glow`;for(let u=0;u<e.count;u++){if(a<1&&Math.random()>a)continue;let d=e.start+u,f=this.homes[d*3+2],p=this.homes[d*3],m=this.homes[d*3+1];e.period>0&&e.flow!==0&&(p=(p+e.flowOffset)%e.period,f=p/e.period);let h=this.params[d*4+1],g=this.params[d*4+3];if(f<e.from-e.soft||f>e.reveal+e.soft||g>e.band+e.bandSoft||e.erode>0&&h<e.erode)continue;if(e.swirl!==0){let t=Math.min(1,Math.hypot(p,m)/e.extent),n=e.age*e.swirl*(1+e.swirlInner*(1-t)),r=Math.cos(n),i=Math.sin(n),a=p*r-m*i;m=p*i+m*r,p=a}let _=p*e.scale,v=m*e.scale,y=e.x+_*r-v*i,b=e.y+_*i+v*r,x,S;if(n.from===`along`)x=r,S=i;else if(n.from===`across`){let e=v>=0?1:-1;x=-i*e,S=r*e}else{let e=Math.hypot(_,v)||1;x=(_*r-v*i)/e,S=(_*i+v*r)/e}let C=(Math.random()-.5)*.6,w=Math.cos(C),T=Math.sin(C),E=n.speed[0]+Math.random()*(n.speed[1]-n.speed[0]),ee=n.life[0]+Math.random()*(n.life[1]-n.life[0]),D=this.extras[d*2];t.setRawColors((o[0]+(s[0]-o[0])*D)*c,(o[1]+(s[1]-o[1])*D)*c,(o[2]+(s[2]-o[2])*D)*c,s[0]*c,s[1]*c,s[2]*c),t.putRaw(y,b,(x*w-S*T)*E,(x*T+S*w)*E,ee,this.params[d*4+2]*e.scale*e.size*(n.size??.8),.2,n.drag??3,n.gravity??0,e.spec.core??.6,l)}this.remove(e)}update(e){let t=this.table;for(let n=0;n<this.maxForms;n++){let r=this.forms[n];if(!r)continue;if(r.age+=e,r.period>0&&r.flow!==0){let t=(r.flowOffset+r.flow*e)%r.period;r.flowOffset=t<0?t+r.period:t}let i=r.spec,a=n*Nr*4;t[a++]=r.x,t[a++]=r.y,t[a++]=r.angle,t[a++]=r.scale,t[a++]=r.from,t[a++]=r.reveal,t[a++]=r.soft,t[a++]=Math.max(0,r.alpha*r.intensity),t[a++]=r.band,t[a++]=r.bandSoft,t[a++]=r.size,t[a++]=r.erode,t[a++]=r.pulse,t[a++]=r.pulseSpeed,t[a++]=r.pulseWaves,t[a++]=r.pulseSharp,t[a++]=r.dash,t[a++]=r.dashFill,t[a++]=r.dashSpeed,t[a++]=r.age,t[a++]=r.colorA[0],t[a++]=r.colorA[1],t[a++]=r.colorA[2],t[a++]=i.core??.6,t[a++]=r.colorB[0],t[a++]=r.colorB[1],t[a++]=r.colorB[2],t[a++]=i.twinkle??0,t[a++]=Fr[i.kind??`glow`],t[a++]=i.stretch??1,t[a++]=i.wobble??0,t[a++]=r.extent,t[a++]=r.flowOffset,t[a++]=r.flow===0?0:r.period,t[a++]=r.swirl,t[a++]=r.swirlInner,t[a++]=Pr[i.facing??`form`],t[a++]=+!!i.spectrum,t[a++]=r.spectrumShift,t[a++]=r.spectrumWaves}this.texture.needsUpdate=!0,this.upload()}clear(){for(let e of this.forms)e&&(e.slot=-1);this.forms.fill(null),this.params.fill(0);for(let e=0;e<this.capacity;e++)this.params[e*4]=-1;this.table.fill(0),this.texture.needsUpdate=!0,this.free=[[0,this.capacity]],this.dirty.length=0,this.dirty.push([0,this.capacity]),this.upload(),this.high=0,this.geometry.setDrawRange(0,0)}dispose(){this.geometry.dispose(),this.material.dispose(),this.texture.dispose()}allocate(e){for(let t=0;t<this.free.length;t++){let[n,r]=this.free[t];if(!(r<e))return r===e?this.free.splice(t,1):this.free[t]=[n+e,r-e],n}return-1}release(e,t){this.free.push([e,t]),this.free.sort((e,t)=>e[0]-t[0]);let n=[];for(let e of this.free){let t=n[n.length-1];t&&t[0]+t[1]===e[0]?t[1]+=e[1]:n.push([e[0],e[1]])}this.free=n}upload(){if(this.dirty.length===0){this.geometry.setDrawRange(0,this.high);return}let e=[[this.homeAttribute,3],[this.paramAttribute,4],[this.extraAttribute,2]];for(let[t,n]of e){t.clearUpdateRanges();for(let[e,r]of this.dirty)r>0&&t.addUpdateRange(e*n,r*n);t.needsUpdate=!0}this.dirty.length=0,this.geometry.setDrawRange(0,this.high)}};function Rr(e,t){switch(t){case`along`:return e.along;case`across`:return e.across;case`radius`:return e.radius;case`angle`:return e.angle;case`random`:return null}}function zr(e,t){e[0]=er((t>>16&255)/255),e[1]=er((t>>8&255)/255),e[2]=er((t&255)/255)}gt(),mt(-1,0,1,0),bt(4,.1),_t(5,.42),yt(2.2);var Br=new Map(Ve.map(e=>[e.id,e.base]));function Vr(e,t,n,r){if(!e)return t.get(n);let i=Br.get(n)??0,a=r??i,o=e[n]??0;return o<=0?a:a+(t.get(n)-i)*o}function Hr(e,t,n){return Vr(e,t,n)/100}function U(e,t,n){return Hr(e.scales,t,n)}function Ur(e){return Math.max(e.bounds.x,e.bounds.y)*.5*1.5}function W(e,t,n){let r=e*t;if(r<=e||n<=e)return r;let i=n-e;return e+i*(1-Math.exp(-(r-e)/i))}var Wr=2/60;function Gr(e,t){let n=e/Math.max(.01,t);return n>=.03333333333333333?{interval:n,damage:1}:{interval:Wr,damage:Wr/n}}var Kr=3.6,qr=1.8,Jr=1.3,Yr=.26,Xr=9,Zr=2.4,Qr=4,$r=.8,ei=1.2,ti=.7,ni=3,ri=1.7,ii=1.4,ai=76,oi=145,si=13676799,ci=16765514,li=.45,ui=Math.PI*2,di=.4,fi=1.25,pi=.7,mi=.5,hi=.35,gi=1.6,_i=270,vi=560,yi=3,bi=.06,xi=.84,Si=.55,Ci=1.05,wi=950,Ti=2,Ei=12,Di=.6,Oi=.1,ki=150,Ai=2.5,ji=16,Mi=55,Ni=.25,Pi=.8,Fi=900,Ii=5,Li=2,Ri=6,zi=460,Bi=280,Vi=380,Hi=30,Ui=16,Wi=2.4,Gi=.8,Ki=1.4,qi=2.5,Ji=2600,Yi=.9,Xi=1e3,Zi=.6,Qi=420,$i=220,ea=300,ta=110,na=26,ra=10,ia=3.6,aa=.9,oa=1.3,sa=260,ca=220,la=50,ua=2,da=.55,fa=1.3,pa=1.6,ma=class e{static meta={id:`aura`,kind:`passive`,color:16771496,core:16774870,base:{damage:oi/10,rate:10,area:ai,critChance:2,critDamage:150},scales:{area:1.25,damage:1,attackSpeed:.5,critChance:.25,critDamage:.25}};id=e.meta.id;object=new M;vortexFlow=new z;bandFlow=new z;glintFlow=new z;hazeFlow=new z;crackleFlow=new z;rageFlow=new z;exhaleFlow=new z;wakeFlow=new z;heatSwirlFlow=new z;heatRiseFlow=new z;heatCoreFlow=new z;exhaleSpeed=[0,0];wakeSpeed=[0,0];vortexSpin=[0,0];vortexDrift=[0,0];bandSpin=[0,0];glintSpin=[0,0];hazeSpin=[0,0];sweptSpin=[0,0];breathSpin=[0,0];breathDrift=[0,0];inflowSpin=[0,0];inflowDrift=[0,0];heatSpin=[0,0];exhaleMend=!1;visual=1;burnLeft=Ri;tintHex=e.meta.color;scratch=new N;scratchMix=new N;vortexSpec={x:0,y:0,ring:0,life:[1.8,3],size:[1.2,2.2],endSize:2,color:e.meta.color,to:e.meta.core,drag:0,curl:4,core:.3,twinkle:.4,fade:1.3,intensity:Si,orbit:{around:`wisp`,spin:this.vortexSpin,drift:this.vortexDrift}};bandSpec={x:0,y:0,ring:0,life:[1.3,2.3],size:[1.1,2],endSize:1.8,color:e.meta.color,to:e.meta.color,drag:0,curl:2.5,core:.4,twinkle:.35,fade:1.2,intensity:Di,orbit:{around:`wisp`,spin:this.bandSpin,drift:[-2,2]}};glintSpec={x:0,y:0,ring:0,life:[.5,.9],size:[1.6,2.6],endSize:.4,color:e.meta.core,to:e.meta.color,drag:0,core:.9,twinkle:.25,intensity:.55,kind:`streak`,stretch:.09,orbit:{around:`wisp`,spin:this.glintSpin}};hazeSpec={x:0,y:0,ring:0,life:[2.6,4],size:[7,11],endSize:1.4,color:e.meta.color,to:e.meta.color,drag:0,curl:6,core:0,fade:1.6,intensity:.15,orbit:{around:`wisp`,spin:this.hazeSpin,drift:[.5,3]}};crackleSpec={x:0,y:0,ring:0,radial:!0,turn:Math.PI/2,arc:.6,speed:[80,160],life:[.06,.14],size:[1.4,2.2],endSize:.3,color:e.meta.core,to:si,drag:5,core:.9,kind:`streak`,stretch:.03};rageSpec={x:0,y:0,ring:0,radial:!0,turn:.6,arc:.5,speed:[40,130],life:[.2,.36],size:[1.6,2.8],endSize:.25,color:e.meta.core,to:e.meta.color,drag:2.5,core:.9,kind:`streak`,stretch:.045};burnSpec={x:0,y:0,count:Ii,disc:5,speed:[8,30],gravity:-45,life:[.35,.7],size:[1.6,2.8],endSize:.3,color:e.meta.core,to:e.meta.color,drag:1.5,core:.7,twinkle:.4};sweptSpec={x:0,y:0,disc:6,life:[.8,1.3],size:[1.4,2.4],endSize:1.2,color:e.meta.core,to:e.meta.color,drag:0,curl:3,core:.6,twinkle:.5,fade:1.2,orbit:{around:`wisp`,spin:this.sweptSpin,drift:[2,9]}};exhaleSpec={x:0,y:0,ring:0,radial:!0,arc:.25,speed:this.exhaleSpeed,life:[.08,.16],size:[2.2,3.4],endSize:.4,color:e.meta.core,to:e.meta.color,drag:.3,core:.9,kind:`streak`,stretch:.03};wakeSpec={x:0,y:0,ring:0,radial:!0,arc:1,speed:this.wakeSpeed,life:[.3,.55],size:[2,3.4],endSize:.6,color:e.meta.color,to:e.meta.color,drag:2.5,curl:6,core:.3,twinkle:.35,fade:1.2};exhaleHitSpec={x:0,y:0,count:14,arc:1.1,speed:[80,260],life:[.18,.38],size:[2,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.2,core:.9,kind:`streak`,stretch:.03};breathSpec={x:0,y:0,ring:0,delay:[0,.04],life:[.55,.9],size:[1.8,3.2],endSize:.8,color:e.meta.core,to:e.meta.color,drag:2.2,curl:5,core:.6,twinkle:.2,fade:1.1,orbit:{around:`wisp`,spin:this.breathSpin,drift:this.breathDrift}};inflowSpec={x:0,y:0,ring:0,delay:[.18,.3],life:[.6,.85],size:[1.8,3],endSize:.5,color:e.meta.core,to:e.meta.core,drag:.2,attract:.85,core:1,twinkle:.55,orbit:{around:`wisp`,spin:this.inflowSpin,drift:this.inflowDrift}};heatSwirlSpec={x:0,y:0,ring:0,life:[.8,1.4],size:[1.8,3.2],endSize:.9,color:ci,to:e.meta.color,drag:0,curl:4,core:.8,twinkle:.35,fade:1.1,orbit:{around:`wisp`,spin:this.heatSpin,drift:[1,6]}};heatRiseSpec={x:0,y:0,disc:0,speed:[5,25],gravity:-55,life:[.5,.9],size:[2,3.4],endSize:.25,color:ci,to:e.meta.color,drag:1.2,curl:6,core:.8,twinkle:.4,fade:.8};heatCoreSpec={x:0,y:0,disc:0,speed:[0,10],life:[.3,.5],size:[5,8],endSize:.4,color:e.meta.core,to:ci,drag:2,core:1,intensity:.7};radius=ai;dps=oi;damageScale=1;stormCrown=!1;heatCore=!1;zenith=!1;nadir=!1;mend=!1;mendTimer=0;mendPool=0;pulse=1;sparkTimer=0;boltTimer=0;exhaleTimer=0;exhaleWave=1;exhaleStruck=new Set;constructor(){this.resize(1),this.recolor()}recolor(){let t=this.tintHex;this.vortexSpec.color=this.dimmed(t,.2),this.bandSpec.color=this.dimmed(t,.25),this.bandSpec.to=t,this.hazeSpec.color=this.dimmed(t,.1),this.hazeSpec.to=t,this.glintSpec.to=this.stormCrown?si:t,this.rageSpec.to=this.zenith?e.meta.core:ci,this.burnSpec.to=t,this.sweptSpec.to=t,this.exhaleHitSpec.to=t,this.breathSpec.to=t,this.heatSwirlSpec.to=t,this.heatRiseSpec.to=t}resize(e){this.visual=e,this.glintSpec.sizeScale=e,this.crackleSpec.sizeScale=e,this.rageSpec.sizeScale=e,this.burnSpec.sizeScale=e,this.sweptSpec.sizeScale=e,this.exhaleSpec.sizeScale=e,this.wakeSpec.sizeScale=e,this.exhaleHitSpec.sizeScale=e,this.breathSpec.sizeScale=e,this.inflowSpec.sizeScale=e,this.heatSwirlSpec.sizeScale=e,this.heatRiseSpec.sizeScale=e,this.heatCoreSpec.sizeScale=e}dimmed(e,t){return this.scratch.setHex(e).multiplyScalar(t).getHex()}mods=new F;configure(t){this.mods=t,this.damageScale=t.damage,this.stormCrown=t.has(`stormCrown`),this.heatCore=t.has(`heatCore`),this.zenith=t.has(`zenith`),this.nadir=t.has(`nadir`),this.mend=t.has(`mend`);let n=this.scratch.setHex(e.meta.color);this.stormCrown&&n.lerp(this.scratchMix.setHex(si),li),this.tintHex=n.getHex(),this.recolor(),this.resize(t.visualScale())}update(t){I.loop(`aura`);let n=W(this.radius,U(e.meta,t.stats,`area`)*this.mods.size,Ur(t));this.pulse=this.zenith?1+$r*t.healthShare:this.nadir?1+ei*(1-t.healthShare):1;let r=this.dps*this.damageScale*this.pulse*U(e.meta,t.stats,`attackSpeed`)*t.dt;this.sparkTimer-=t.dt;let i=this.sparkTimer<=0;i&&(this.sparkTimer=.09),t.enemies.queryCircle(t.originX,t.originY,n,(e,a)=>{let o=this.heatCore?1+2*(1-Math.min(1,a/n)):1;t.hit(e,r,!0),o>1&&t.hit(e,r*(o-1),!0,`auraHeart`),i&&Math.random()<.3&&this.burnSparks(t,e,o,a,n)});let a=this.mods.has(`exhale`);if(a&&(this.exhaleTimer-=t.dt,this.exhaleTimer<=0&&(this.exhaleTimer+=Gr(Kr,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate).interval,this.exhaleWave=0,this.exhaleStruck.clear())),this.mend&&(this.mendTimer-=t.dt,this.mendPool+=t.healed,this.mendTimer<=0&&this.mendPool>=Qr&&(this.mendTimer=Zr,this.mendPool=0,this.exhaleWave=0,this.exhaleStruck.clear())),this.exhaleWave===0&&t.dt>0&&this.exhaleStart(t,n,this.mend&&this.mendTimer===Zr),(a||this.mend)&&this.updateExhale(t,n),this.stormCrown&&(this.boltTimer-=t.dt,this.boltTimer<=0)){this.boltTimer+=Gr(ti,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate).interval;let r=n*ri,i=ni;t.enemies.queryCircle(t.originX,t.originY,r,(e,r)=>{if(i<=0||r<n*.6)return;i--;let a=Math.atan2(t.enemies.y[e]-t.originY,t.enemies.x[e]-t.originX);this.crownStrike(t,n,a,e),t.hit(e,this.dps*this.damageScale*this.pulse*ii,!1,`auraCrown`)})}this.heatCore&&this.heatSparks(t,n),this.drawField(t,n)}spinAt(e){let t=1-Math.min(1,Math.max(0,e));return di+1.5*t*t}whirlAt(e){return Math.min(fi,Math.sqrt(ai/Math.max(1,e)))*(1+pi*(this.pulse-1))}drawField(e,t){let n=e.dt,r=e.originX,i=e.originY,a=t/ai,o=Math.min(gi,Math.max(1,Math.sqrt(a))),s=this.whirlAt(t),c=this.pulse-1,l=1+mi*c,u=1+hi*c,d=ui*t,f=Math.min(t*.5,Ei*o);this.burnLeft=Ri;let p=this.vortexSpec;p.x=r,p.y=i,p.sizeScale=this.visual*o,p.intensity=Si*u,this.vortexDrift[0]=t*.015,this.vortexDrift[1]=t*.05;let m=Math.min(vi,_i*a*l);this.swirl(e,p,this.vortexSpin,this.vortexFlow.take(m,n),yi,t*bi,t*xi,`even`,t,s);let h=this.bandSpec;h.x=r,h.y=i,h.sizeScale=this.visual*o,h.intensity=Di*u;let g=Math.min(wi,d*Ci*l);this.swirl(e,h,this.bandSpin,this.bandFlow.take(g,n),Ti,t-f,t,`rim`,t,s);let _=this.glintSpec,v=this.spinAt(1)*s*Ai;_.x=r,_.y=i,_.ring=t-f*Math.random()*.6,this.glintSpin[0]=v*.8,this.glintSpin[1]=v*1.2;let y=Math.min(ki,d*Oi*u);_.count=this.glintFlow.take(y,n),e.sparks.emit(_);let b=this.hazeSpec;if(b.x=r,b.y=i,b.sizeScale=this.visual*o,this.swirl(e,b,this.hazeSpin,this.hazeFlow.take(Math.min(Mi,ji*a),n),1,t*.12,t*.7,`even`,t,s),this.stormCrown){let a=this.crackleSpec;a.x=r,a.y=i,a.ring=t-f*Math.random()*.5,a.turn=Math.random()<.5?Math.PI/2:-Math.PI/2,a.count=this.crackleFlow.take(d*Ni,n),e.sparks.emit(a)}if(c>0){let a=this.rageSpec;a.x=r,a.y=i,a.ring=t-f*Math.random()*.5,a.count=this.rageFlow.take(Math.min(Fi,d*Pi*c),n),e.sparks.emit(a)}}swirl(e,t,n,r,i,a,o,s,c,l){let u=r;for(let r=i;r>0&&u>0;r--){let i=Math.ceil(u/r);u-=i;let d=Math.random(),f=s===`rim`?o-(o-a)*(1-Math.sqrt(1-d)):s===`core`?a+(o-a)*d*Math.sqrt(d):Math.sqrt(a*a+(o*o-a*a)*d),p=this.spinAt(f/c)*l;n[0]=p*.85,n[1]=p*1.15,t.ring=f,t.count=i,e.sparks.emit(t)}}burnSparks(t,n,r,i,a){if(this.burnLeft<=0)return;this.burnLeft--;let o=r>2,s=t.enemies.x[n],c=t.enemies.y[n],l=this.burnSpec;l.x=s,l.y=c,l.color=o?ci:e.meta.core,l.count=o?10:Ii,t.sparks.emit(l);let u=this.sweptSpec,d=this.spinAt(i/a)*this.whirlAt(a);u.x=s,u.y=c,u.color=o?ci:e.meta.core,u.count=o?3:Li,this.sweptSpin[0]=d,this.sweptSpin[1]=d*1.4,t.sparks.emit(u)}crownStrike(t,n,r,i){let a=t.originX+Math.cos(r)*n,o=t.originY+Math.sin(r)*n,s=t.enemies.x[i],c=t.enemies.y[i],l=this.visual;t.bolts.strike(a,o,s,c,{color:si,width:2*l,life:.16}),t.sparks.emit({x:a,y:o,line:{x:s,y:c},count:36,speed:[0,20],normal:[20,80],delayAlong:.06,life:[.1,.22],size:[1.5*l,2.5*l],endSize:.2,color:e.meta.core,to:si,drag:4,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:a,y:o,count:14,speed:[20,90],life:[.12,.25],size:[2.5*l,4*l],endSize:.3,color:si,to:this.tintHex,drag:4,core:.8}),t.sparks.emit({x:s,y:c,count:26,angle:r,arc:2.4,speed:[90,300],life:[.15,.32],size:[2*l,3.2*l],endSize:.2,color:e.meta.core,to:si,drag:4,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:s,y:c,count:6,disc:4,speed:[0,30],life:[.12,.22],size:[6*l,10*l],endSize:.3,color:e.meta.core,to:si,drag:5,core:1})}heatSparks(e,t){let n=e.dt,r=e.originX,i=e.originY,a=t/ai,o=Math.min(pa,a*a),s=this.heatSwirlSpec;s.x=r,s.y=i,this.swirl(e,s,this.heatSpin,this.heatSwirlFlow.take(sa*o,n),ua,t*.02,t*da,`core`,t,this.whirlAt(t)*fa);let c=this.heatRiseSpec;c.x=r,c.y=i,c.disc=t*.35,c.count=this.heatRiseFlow.take(ca*o,n),e.sparks.emit(c);let l=this.heatCoreSpec;l.x=r,l.y=i,l.disc=t*.12,l.count=this.heatCoreFlow.take(la,n),e.sparks.emit(l)}exhaleStart(t,n,r){this.exhaleMend=r;let i=t.originX,a=t.originY,o=n*.72,s=(n*qr-o)/Yr,c=this.visual,l=r?e.meta.core:this.tintHex;if(t.sparks.emit({x:i,y:a,ring:o,radial:!0,arc:r?.2:.06,count:r?Qi:zi,speed:[s*.96,s*1.06],life:[Yr*.95,Yr*1.1],size:[2*c,3.4*c],endSize:.5,color:e.meta.core,to:l,drag:.1,core:r?1:.9,twinkle:r?.6:0,kind:r?`glow`:`streak`,stretch:.025}),t.sparks.emit({x:i,y:a,ring:o,radial:!0,arc:.4,count:r?$i:Bi,speed:[s*.72,s*.92],life:[Yr,Yr*1.3],size:[3*c,5*c],endSize:.7,color:this.dimmed(l,.7),to:this.dimmed(this.tintHex,.35),drag:.6,gravity:r?-40:0,curl:6,core:r?.8:.35,twinkle:r?.5:.2}),r){this.inflow(t,n);return}this.breatheOut(t,n),t.sparks.emit({x:i,y:a,disc:n*.08,count:Hi,speed:[10,50],life:[.18,.32],size:[5*c,8*c],endSize:.4,color:e.meta.core,to:this.tintHex,drag:4,core:1,intensity:.75})}breatheOut(e,t){let n=this.breathSpec,r=this.whirlAt(t)*Wi,i=t*.1,a=t*.9;n.x=e.originX,n.y=e.originY,n.count=Math.round(Vi/Ui),this.breathDrift[0]=t*Gi,this.breathDrift[1]=t*Ki;for(let o=0;o<Ui;o++){let s=(o+Math.random())/Ui,c=Math.sqrt(i*i+(a*a-i*i)*s),l=this.spinAt(c/t)*r;this.breathSpin[0]=l*.8,this.breathSpin[1]=l*1.2,n.ring=c,e.sparks.emit(n)}}inflow(t,n){let r=t.originX,i=t.originY,a=this.visual,o=this.inflowSpec,s=ia*this.whirlAt(n);o.x=r,o.y=i,o.count=Math.round(ea/ra),this.inflowSpin[0]=s*.8,this.inflowSpin[1]=s*1.2,this.inflowDrift[0]=-n*oa,this.inflowDrift[1]=-n*aa;for(let e=0;e<ra;e++)o.ring=n*(1.15+.6*(e+Math.random())/ra),t.sparks.emit(o);t.sparks.emit({x:r,y:i,disc:n*.4,count:ta,delay:[.35,.7],speed:[4,22],gravity:-55,life:[.7,1.1],size:[1.6*a,2.8*a],endSize:.5,color:e.meta.core,to:this.tintHex,drag:1.2,core:.9,twinkle:.8}),t.sparks.emit({x:r,y:i,disc:n*.06,count:na,delay:[.72,.9],speed:[0,20],life:[.25,.4],size:[5*a,8*a],endSize:.4,color:e.meta.core,to:e.meta.core,drag:4,core:1,twinkle:.3})}exhaleFront(t,n,r,i){let a=1-this.exhaleWave*.55,o=this.exhaleMend,s=t.originX,c=t.originY,l=ui*n,u=this.exhaleSpec;this.exhaleSpeed[0]=i*.9,this.exhaleSpeed[1]=i*1.1,u.x=s,u.y=c,u.ring=n+(Math.random()-.5)*r*.9,u.kind=o?`glow`:`streak`,u.twinkle=o?.6:0,u.gravity=o?-40:0,u.to=o?e.meta.core:this.tintHex,u.intensity=a;let d=Math.min(Ji,l*qi)*a;u.count=this.exhaleFlow.take(d,t.dt),t.sparks.emit(u);let f=this.wakeSpec;this.wakeSpeed[0]=i*.04,this.wakeSpeed[1]=i*.16,f.x=s,f.y=c,f.ring=n+(Math.random()-.5)*r,f.color=o?e.meta.core:this.tintHex,f.to=f.color,f.twinkle=o?.75:.35,f.gravity=o?-30:0,f.intensity=Zi*a;let p=Math.min(Xi,l*Yi)*a;f.count=this.wakeFlow.take(p,t.dt),t.sparks.emit(f)}exhaleHit(t,n){let r=this.exhaleHitSpec,i=t.enemies.x[n],a=t.enemies.y[n];r.x=i,r.y=a,r.angle=Math.atan2(a-t.originY,i-t.originX),r.to=this.exhaleMend?e.meta.core:this.tintHex,r.twinkle=this.exhaleMend?.5:0,r.kind=this.exhaleMend?`glow`:`streak`,t.sparks.emit(r)}updateExhale(e,t){if(this.exhaleWave>=1)return;let n=t*qr,r=t*.72,i=r+(n-r)*this.exhaleWave;this.exhaleWave=Math.min(1,this.exhaleWave+e.dt/Yr);let a=r+(n-r)*this.exhaleWave,o=Math.max(Xr,a-i+6),s=this.dps*this.damageScale*this.pulse*Jr;e.enemies.queryCircle(e.originX,e.originY,a+o,(t,n)=>{if(Math.abs(n-a)>o)return;let r=e.enemies.stamp[t];this.exhaleStruck.has(r)||(this.exhaleStruck.add(r),e.hit(t,s,!1,this.mend?`auraMend`:`auraExhale`),e.enemies.knockback(t,e.originX,e.originY,18),this.exhaleHit(e,t))}),this.exhaleFront(e,a,o,(n-r)/Yr)}dispose(){I.stopLoop(`aura`)}},ha=4,ga=5.6,_a=.82,va=.3,ya=2,ba=class{object;positions;heat;spans;geometry;material;time=0;constructor(e){this.positions=new Float32Array(e*12),this.heat=new Float32Array(e*4),this.spans=new Float32Array(e*4);let t=new Float32Array(e*4),n=new Float32Array(e*4),r=new Uint16Array(e*6);for(let i=0;i<e;i++){let e=i*4;t[e]=0,t[e+1]=0,t[e+2]=1,t[e+3]=1,n[e]=1,n[e+1]=-1,n[e+2]=-1,n[e+3]=1;let a=i*6;r[a]=e,r[a+1]=e+1,r[a+2]=e+2,r[a+3]=e,r[a+4]=e+2,r[a+5]=e+3}this.geometry=new ge,this.geometry.setAttribute(`position`,new P(this.positions,3)),this.geometry.setAttribute(`aAlong`,new P(t,1)),this.geometry.setAttribute(`aAcross`,new P(n,1)),this.geometry.setAttribute(`aHeat`,new P(this.heat,1)),this.geometry.setAttribute(`aSpan`,new P(this.spans,1)),this.geometry.setIndex(new P(r,1)),this.geometry.setDrawRange(0,0),this.material=new Ee({vertexShader:xn,fragmentShader:Sn,uniforms:{uTime:{value:0},uCore:{value:new N(16774870).multiplyScalar(R)},uGlow:{value:new N(16771496).multiplyScalar(R)},uRainbow:{value:_a},uSplit:{value:va},uGain:{value:R}},transparent:!0,depthTest:!1,depthWrite:!1,blending:2,side:2}),this.object=new pe(this.geometry,this.material),this.object.frustumCulled=!1,this.object.renderOrder=24}update(e){this.time+=e,this.material.uniforms.uTime.value=this.time}setColors(e,t){this.material.uniforms.uCore.value.setHex(e).multiplyScalar(R),this.material.uniforms.uGlow.value.setHex(t).multiplyScalar(R)}set(e,t,n,r,i,a,o,s){let c=-i,l=r,u=o*ha,d=o*ga,f=t+r*a,p=n+i*a,m=e*12;this.positions[m]=t+c*u,this.positions[m+1]=n+l*u,this.positions[m+2]=ya,this.positions[m+3]=t-c*u,this.positions[m+4]=n-l*u,this.positions[m+5]=ya,this.positions[m+6]=f-c*d,this.positions[m+7]=p-l*d,this.positions[m+8]=ya,this.positions[m+9]=f+c*d,this.positions[m+10]=p+l*d,this.positions[m+11]=ya;let h=e*4;for(let e=0;e<4;e++)this.heat[h+e]=s,this.spans[h+e]=a}commit(e){this.geometry.setDrawRange(0,e*6),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aHeat.needsUpdate=!0,this.geometry.attributes.aSpan.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},G=4,xa=Math.PI/180*24,Sa=.7;function Ca(e,t,n){return Number.isFinite(e)?Math.max(t,Math.min(n,e)):t}var wa=2.2,Ta=Math.PI/2,Ea=1800,Da=3.5,Oa=40,ka=6.5,Aa=2,ja=.3,Ma=50,Na=40,Pa=2.5,Fa=.22,Ia=620,La=1250,Ra=520,za=.16,Ba=.4,Va=.35,Ha=.12,Ua=.16,K=[16769658,11075450,7336152,7325951,9407743,13667583],Wa=16742973,Ga=16734860,Ka={kind:`outline`,shape:_t(4,.34)},qa=.75,Ja=.6,Ya=.9,Xa=9,Za=.8,Qa=70,$a=.3,eo=6,to=.04,no=130,ro=.5,io=.3,ao=.22,oo=.35,so=.5,co=70,lo=26,uo=36,fo=18,po=3,mo=.6,ho=.2,go=74,_o=2.2,vo=45,yo=.16,bo=40,xo=.5,So=24;function Co(e,t,n,r,i,a,o){let s=i/2+So,c=a/2+So,l=o;return n>1e-6?l=Math.min(l,(s-e)/n):n<-1e-6&&(l=Math.min(l,(-s-e)/n)),r>1e-6?l=Math.min(l,(c-t)/r):r<-1e-6&&(l=Math.min(l,(-c-t)/r)),Math.max(0,l)}function wo(e,t=1){let n=Math.floor(Math.random()*K.length);e.color=K[n],e.to=K[(n+t)%K.length]}function To(e,t,n){let r=e[t]+n;if(!(r>0))return e[t]=0,0;let i=Math.floor(r);return e[t]=r-i,i}function Eo(e,t,n,r,i,a,o,s,c,l){let u=o-a,d=Math.min(u,xo),f=Math.ceil(s/c),p=s;for(let o=0;o<c&&p>0;o++){let o=Math.min(p,f);p-=o;let s=a+Math.random()*(u-d),c=i+(Math.random()-.5)*l;t.x=n+Math.cos(s)*c,t.y=r+Math.sin(s)*c,t.line.x=n+Math.cos(s+d)*c,t.line.y=r+Math.sin(s+d)*c,t.angle=s+d/2,t.count=o,e.emit(t)}}var Do=62,Oo=10,ko=Math.PI,Ao=360,jo=4,Mo=740,No=e=>1+(e-1)*.28,Po=.15,Fo=.6,Io=Fo/Po,Lo=.3,Ro=2.5,zo=.25,Bo=.15,Vo=770,Ho=.7,Uo=3,Wo=class e{static meta={id:`beam`,kind:`active`,color:16763215,core:16774870,base:{damage:Vo/10,rate:10,area:Uo,critChance:3,critDamage:150},scales:{damage:1.5,attackSpeed:1,critChance:.5,critDamage:.5,area:0}};id=e.meta.id;object=new M;dps=Vo;charge=null;chargeSeen=null;chargeStamp=null;peakFocus=0;lastAim=NaN;brandTimer=0;brandingNow=!1;burnLeft=null;burnStamp=null;burnDps=null;burnCredit=null;burnTouch=null;width=Uo;ribbon=new ba(G);formPool=null;bodies=Array(G).fill(null);satBodies=Array(Oa).fill(null);satCores=Array(Oa).fill(null);satLive=new Uint8Array(Oa);satDust=new Float32Array(Oa);satSpark=new Float32Array(Oa);satDustSpec={x:0,y:0,line:{x:0,y:0},speed:[0,20],normal:[20,80],vx:0,vy:0,life:[.3,.65],size:[1.6,3],endSize:.25,color:e.meta.color,to:e.meta.core,drag:2.6,curl:6,core:.45,twinkle:.35};satFlareSpec={x:0,y:0,disc:2,arc:.9,speed:[50,180],life:[.1,.24],size:[1.4,2.4],endSize:.2,color:e.meta.color,to:e.meta.core,drag:3,core:.8,kind:`streak`,stretch:.03};actions={fire:(e,t)=>{let n=Math.atan2(t.dirY,t.dirX),r=t.fromDirX!==void 0&&t.fromDirY!==void 0?Math.atan2(t.fromDirY,t.fromDirX):n;this.lance(e,t.x,t.y,n,r,t.share,t.credit,t.slot??0)}};cores=Array(G).fill(null);bows=Array(G).fill(null);mods=new F;shine=1;crackle=0;pulse=!1;pulseArmed=!0;overheat=!1;steadyLight=!1;sweepVel=0;sweepTurn=!1;bowHits=0;sheathCarry=new Float32Array(G);rushCarry=new Float32Array(G);flareCarry=new Float32Array(G);crackleCarry=new Float32Array(G);wakeCarry=new Float32Array(G);sectorCarry=new Float32Array(G);edgeCarry=new Float32Array(G);bowCarry=new Float32Array(G);frameCarry=new Float32Array(3);burnSize=[1.5,2.5];sheathSpec={x:0,y:0,line:{x:0,y:0},speed:[0,24],normal:[20,90],vx:0,vy:0,life:[.35,.8],size:[1.8,3.4],endSize:.25,color:K[0],to:K[1],drag:2.6,curl:8,core:.45,twinkle:.35};rushSpec={x:0,y:0,line:{x:0,y:0},arc:.06,speed:[180,440],life:[.18,.4],size:[1.4,2.4],endSize:.3,color:e.meta.core,to:e.meta.color,drag:1.4,core:.9,kind:`streak`,stretch:.022};flareSpec={x:0,y:0,disc:3,arc:1.1,speed:[60,230],life:[.12,.3],size:[1.6,2.8],endSize:.2,color:K[0],to:K[1],drag:3,core:.8,kind:`streak`,stretch:.03};pulseSpec={x:0,y:0,line:{x:0,y:0},speed:[0,30],normal:[50,150],delayAlong:.14,life:[.25,.5],size:[2.2,3.8],endSize:.2,color:K[0],to:K[2],drag:3.2,core:.8,twinkle:.2};crackleSpec={x:0,y:0,line:{x:0,y:0},speed:[10,60],normal:[80,240],life:[.1,.24],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:Wa,drag:4,curl:14,core:.9,kind:`streak`,stretch:.03};wakeSpec={x:0,y:0,line:{x:0,y:0},arc:.7,speed:[4,24],life:[.25,.55],size:[1.8,3.2],endSize:.3,color:e.meta.color,to:K[4],drag:2,core:.4,twinkle:.2};sectorSpec={x:0,y:0,line:{x:0,y:0},arc:.8,speed:[2,16],life:[.18,.36],size:[1.6,2.8],endSize:.3,color:e.meta.color,to:e.meta.core,drag:3,core:.5};edgeSpec={x:0,y:0,disc:2.5,speed:[4,26],life:[.25,.45],size:[2.6,4.2],endSize:.3,color:e.meta.core,to:e.meta.color,drag:3,core:.85,twinkle:.3};turnSpec={x:0,y:0,line:{x:0,y:0},speed:[0,20],normal:[30,120],delayAlong:.1,life:[.2,.42],size:[2,3.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.4,core:.9};bowSpec={x:0,y:0,line:{x:0,y:0},arc:1,speed:[8,46],life:[.18,.4],size:[1.8,3.2],endSize:.25,color:e.meta.color,to:e.meta.core,drag:2.6,curl:5,core:.6,twinkle:.2};bowHitSpec={x:0,y:0,arc:1.2,speed:[60,180],life:[.12,.28],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.85,kind:`streak`,stretch:.03};brandSpec={x:0,y:0,count:16,shape:{layout:Ka,radius:13,angle:0},radial:!0,turn:Math.PI,arc:.2,speed:[18,30],life:[.26,.34],size:[1.8,2.8],endSize:.5,color:Ga,to:e.meta.core,drag:1,core:.7};burnSpec={x:0,y:0,arc:1.3,speed:[70,220],life:[.14,.34],size:this.burnSize,endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.6,core:.85,kind:`streak`,stretch:.03};emberSpec={x:0,y:0,disc:5,speed:[4,24],gravity:-40,life:[.45,.85],size:[1.8,3.2],endSize:.3,color:e.meta.color,to:Wa,drag:1.6,core:.4,twinkle:.5};killStreakSpec={x:0,y:0,count:Math.round(uo/po),speed:[90,300],life:[.18,.45],size:[1.6,2.8],endSize:.2,color:K[0],to:K[2],drag:3.4,core:.85,kind:`streak`,stretch:.03};killGlowSpec={x:0,y:0,count:fo,disc:6,speed:[15,80],life:[.35,.7],size:[2.5,4.5],endSize:.3,color:e.meta.core,to:e.meta.color,drag:2.2,curl:10,core:.6,twinkle:.4};configure(t){this.mods=t,this.ribbon.setColors(e.meta.core,e.meta.color)}constructor(){this.object.add(this.ribbon.object),this.ribbon.setColors(e.meta.core,e.meta.color)}update(t){I.loop(`beam`),this.reserve(t);let n=Ca(I.musicBeat,0,1),r=this.width,i=r*this.mods.visualScale(),a=Math.hypot(t.bounds.x,t.bounds.y),o=Math.max(1,Math.min(G,1+this.mods.beams)),s=Math.atan2(t.aimY,t.aimX),c=this.mods.has(`sweep`),l=Ta/(2*o),u=c?Math.sin(t.elapsed*wa)*l:0;this.brandTimer-=t.dt;let d=this.mods.has(`brand`)&&this.brandTimer<=0;d&&(this.brandTimer=zo),this.brandingNow=d;let f=this.mods.has(`fan`),p=this.dps*this.mods.damage*U(e.meta,t.stats,`attackSpeed`)*(f?Sa:No(o)/o),m=this.peakFocus;this.peakFocus=0,this.frameLook(t,n,m,c),this.ribbon.update(t.dt);let h=s+u,g=Number.isNaN(this.lastAim)?h:this.lastAim;this.lastAim=h;for(let e=0;e<o;e++){let n=f?o>1?-xa/2+e*xa/(o-1):0:e*Math.PI*2/o,i=h+n,u=Math.cos(i),m=Math.sin(i),_=-m,v=u,y=Co(t.originX,t.originY,u,m,t.bounds.x,t.bounds.y,a);if(this.shed(t,e,i,u,m,y),this.mods.has(`bow`)){let n=Do,r=ko/2;t.enemies.queryCircle(t.originX,t.originY,72,(e,i)=>{if(Math.abs(i-n)>Oo)return;let a=(t.enemies.x[e]-t.originX)*u+(t.enemies.y[e]-t.originY)*m,o=(t.enemies.x[e]-t.originX)*_+(t.enemies.y[e]-t.originY)*v;Math.abs(Math.atan2(o,a))>r||(t.hit(e,Ao*this.mods.damage*t.dt,!0,`beamBow`),this.bowHits>0&&this.bowHit(t,e))}),this.bowSparks(t,e,i,r)}c&&this.sweepSparks(t,e,s+n,l,a,i,u,m,y),t.enemies.querySector(t.originX,t.originY,g+n,i,a,r,e=>{this.ignite(e,t,p),d&&(t.enemies.brand(e,jo,Mo*this.mods.damage),this.markBrand(t,e))})}this.ribbon.commit(0),this.drawForms(t,o,h,f,n,m,i),this.fadeSatellites(),this.burn(t)}ensureForms(t){if(this.formPool===t.forms&&(this.bodies[0]===null||this.bodies[0].alive))return;let n=t.forms;this.removeForms(),this.formPool=n;let r=e.meta.core;for(let t=0;t<G;t++)this.bodies[t]=n.create({layout:{kind:`beam`,length:Ea,width:Uo*Da},size:3,sizeJitter:.4,spacing:2.6,scatter:!0,kind:`pixel`,color:r,spectrum:!0,twinkle:.18,wobble:.6,max:5200}),this.cores[t]=n.create({layout:{kind:`beam`,length:Ea,width:Uo*.9},size:3.6,sizeJitter:.3,spacing:2.6,scatter:!0,kind:`streak`,stretch:2.4,core:.45,color:r,to:e.meta.color,gradient:`across`,max:1500}),this.bows[t]=n.create({layout:{kind:`ring`,radius:Do,width:Oo*1.4,from:-ko/2,to:ko/2},size:5,sizeJitter:.3,spacing:3.4,jitter:.6,facing:`radial`,core:.25,color:r,spectrum:!0,gradient:`across`,order:`angle`,twinkle:.25,wobble:.6,max:900});this.satBodies.fill(null),this.satCores.fill(null)}ensureSatellite(t,n){if(this.satBodies[n]&&this.satCores[n])return!0;let r=e.meta.core;return this.satBodies[n]=t.create({layout:{kind:`beam`,length:Ea,width:Uo*Da*.8},size:3.2,sizeJitter:.4,spacing:ka,scatter:!0,kind:`pixel`,color:r,spectrum:!0,twinkle:.18,wobble:.6,max:800}),this.satCores[n]=t.create({layout:{kind:`beam`,length:Ea,width:Uo*.9},size:3.2,sizeJitter:.3,spacing:ka*.8,scatter:!0,kind:`streak`,stretch:2.4,core:.45,color:r,to:e.meta.color,gradient:`across`,max:450}),this.satBodies[n]!==null&&this.satCores[n]!==null}drawSatellite(e,t,n,r,i){if(!this.ensureSatellite(e.forms,t))return;let a=this.satBodies[t],o=this.satCores[t];if(!a||!o)return;let s=Co(n,r,Math.cos(i),Math.sin(i),e.bounds.x,e.bounds.y,Math.hypot(e.bounds.x,e.bounds.y)),c=Math.min(1,s/Ea),l=this.shine;this.satLive[t]=Aa,a.x=n,a.y=r,a.angle=i,a.reveal=c,a.alpha=1,o.x=n,o.y=r,o.angle=i,o.reveal=c,o.alpha=1,a.intensity=za*l,a.flow=Ia,a.spectrumWaves=Pa,a.spectrumShift=Fa,o.intensity=Ba*l,o.flow=La,this.satelliteSparks(e,t,n,r,i,s)}satelliteSparks(e,t,n,r,i,a){let o=Math.cos(i),s=Math.sin(i),c=To(this.satDust,t,ja*a*e.dt);if(c>0){let t=this.satDustSpec;wo(t),t.x=n,t.y=r,t.line.x=n+o*a,t.line.y=r+s*a,t.vx=o*Ma,t.vy=s*Ma,t.count=c,e.sparks.emit(t)}let l=To(this.satSpark,t,Na*e.dt);if(l>0){let t=this.satFlareSpec;wo(t),t.x=n,t.y=r,t.angle=i,t.count=l,e.sparks.emit(t)}}fadeSatellites(){for(let e=0;e<Oa;e++){if(this.satLive[e]>0&&this.satLive[e]--,this.satLive[e]>0)continue;let t=this.satBodies[e],n=this.satCores[e];t&&(t.alpha=0),n&&(n.alpha=0)}}drawForms(e,t,n,r,i,a,o){this.ensureForms(e);let s=Math.hypot(e.bounds.x,e.bounds.y),c=this.mods.has(`bow`),l=this.steadyLight,u=i*Ha+a*Ua,d=o/Uo;for(let o=0;o<G;o++){let f=this.bodies[o],p=this.cores[o],m=this.bows[o];if(!f||!p||!m)continue;if(o>=t){f.alpha=0,p.alpha=0,m.alpha=0;continue}let h=n+(r?t>1?-xa/2+o*xa/(t-1):0:o*Math.PI*2/t),g=Co(e.originX,e.originY,Math.cos(h),Math.sin(h),e.bounds.x,e.bounds.y,s),_=Math.min(1,g/Ea);f.x=e.originX,f.y=e.originY,f.angle=h,f.reveal=_,f.alpha=1,f.size=d,f.intensity=za+u,f.flow=Ia+Ra*a,f.spectrumWaves=Pa,f.spectrumShift=Fa*(1+a),f.pulse=l?0:.2+i*.35,f.pulseSpeed=1.6,f.pulseWaves=6,f.pulseSharp=4,p.x=e.originX,p.y=e.originY,p.angle=h,p.reveal=_,p.alpha=1,p.size=d,p.intensity=Ba+u,p.flow=La+Ra*a,p.pulse=l?0:.3+i*.5,p.pulseSpeed=3.2,p.pulseWaves=14,p.pulseSharp=3,m.x=e.originX,m.y=e.originY,m.angle=h,m.alpha=+!!c,m.intensity=Va+u,m.spectrumWaves=1,m.spectrumShift=Fa,m.pulse=l?0:.35,m.pulseSpeed=.8,m.pulseWaves=2,m.pulseSharp=3}}removeForms(){let e=this.formPool;if(e)for(let t=0;t<G;t++)e.remove(this.bodies[t]),e.remove(this.cores[t]),e.remove(this.bows[t]),this.bodies[t]=null,this.cores[t]=null,this.bows[t]=null}reserve(e){if(this.charge&&this.charge.length===e.enemies.capacity)return;let t=e.enemies.capacity;this.charge=new Float32Array(t),this.chargeSeen=new Float32Array(t),this.chargeStamp=new Float32Array(t),this.burnLeft=new Float32Array(t),this.burnStamp=new Float32Array(t),this.burnDps=new Float32Array(t),this.burnCredit=Array(t).fill(void 0),this.burnTouch=new Uint8Array(t)}rank=null;ranked=[];ignite(e,t,n,r){let i=this.burnLeft,a=this.burnDps,o=this.burnStamp,s=this.burnCredit,c=this.burnTouch;i[e]<=0||o[e]!==t.enemies.stamp[e]||c[e]===0?(a[e]=n,s[e]=r):(n>a[e]&&(s[e]=r),a[e]+=n),i[e]=Bo,o[e]=t.enemies.stamp[e],c[e]=1}lance(t,n,r,i,a,o,s,c=0){this.reserve(t);let l=Math.hypot(t.bounds.x,t.bounds.y),u=Uo,d=Math.max(1,Math.min(G,1+this.mods.beams)),f=this.mods.has(`fan`),p=f?Sa:No(d)/d,m=this.dps*this.mods.damage*U(e.meta,t.stats,`attackSpeed`)*o*p;for(let e=0;e<d;e++){let o=f?d>1?-xa/2+e*xa/(d-1):0:e*Math.PI*2/d;t.enemies.querySector(n,r,a+o,i+o,l,u,e=>{this.ignite(e,t,m,s),this.brandingNow&&(t.enemies.brand(e,jo,Mo*this.mods.damage),this.markBrand(t,e))});{this.ensureForms(t);let a=c*G+e;a<Oa&&this.drawSatellite(t,a,n,r,i+o)}}return l}burn(e){let t=this.burnLeft,n=this.burnStamp,r=this.burnDps,i=this.burnCredit,a=this.burnTouch;if(!t||!n||!r||!i||!a)return;let o=To(this.frameCarry,0,co*e.dt),s=To(this.frameCarry,1,lo*e.dt);(!this.rank||this.rank.length!==t.length)&&(this.rank=new Float32Array(t.length)),this.ranked.length=0;for(let n=0;n<t.length;n++){if(t[n]<=0)continue;let r=e.enemies.x[n]-e.originX,i=e.enemies.y[n]-e.originY;this.ranked.push({index:n,distance:r*r+i*i})}this.ranked.sort((e,t)=>e.distance-t.distance);for(let e=0;e<this.ranked.length;e++)this.rank[this.ranked[e].index]=e;for(let c=0;c<t.length;c++){if(t[c]<=0)continue;if(!e.enemies.alive[c]||n[c]!==e.enemies.stamp[c]){t[c]=0;continue}t[c]=Math.max(0,t[c]-e.dt);let l=a[c]===1;a[c]=0,e.hit(c,r[c]*this.focusOn(c,e,l)*e.dt*Ho**this.rank[c],!0,i[c]),this.burnSparks(e,c,l,o,s)}}focusOn(e,t,n){let r=this.charge,i=this.chargeSeen,a=this.chargeStamp;a[e]!==t.enemies.stamp[e]&&(a[e]=t.enemies.stamp[e],r[e]=0,i[e]=t.elapsed);let o=t.elapsed-i[e];if(o>0){let a=Math.max(0,o-Lo),s=Math.max(0,r[e]-a*Ro);r[e]=Math.min(Io,s+(n?Math.min(o,t.dt):0)),i[e]=t.elapsed}let s=r[e]/Io;return s>this.peakFocus&&(this.peakFocus=s),1+s*(this.mods.has(`overcharge`)?Fo*2:this.mods.has(`steady`)?0:Fo)}frameLook(e,t,n,r){this.steadyLight=this.mods.has(`steady`),this.overheat=this.mods.has(`overcharge`);let i=this.steadyLight?0:n;this.shine=qa+t*Ja+i*Ya,this.crackle=this.overheat?Math.max(0,(i-oo)/.65):0,this.pulse=this.pulseArmed&&t>=ro,this.pulse?this.pulseArmed=!1:t<io&&(this.pulseArmed=!0);let a=r?Math.cos(e.elapsed*wa):0;this.sweepTurn=a*this.sweepVel<0,this.sweepVel=a,this.sheathSpec.twinkle=this.steadyLight?0:.35,this.sheathSpec.curl=this.steadyLight?2:8,this.bowHits=this.mods.has(`bow`)?To(this.frameCarry,2,bo*e.dt):0}shed(e,t,n,r,i,a){let o=a-Xa;if(o<=0)return;let s=e.dt,c=e.originX+r*Xa,l=e.originY+i*Xa,u=e.originX+r*a,d=e.originY+i*a,f=To(this.sheathCarry,t,Za*o*this.shine*s);if(f>0){let t=this.sheathSpec;wo(t),t.x=c,t.y=l,t.line.x=u,t.line.y=d,t.vx=r*Qa,t.vy=i*Qa,t.count=f,e.sparks.emit(t)}let p=To(this.rushCarry,t,$a*o*this.shine*s);if(p>0){let t=this.rushSpec,a=Math.random()<.5?-1:1,o=-i*eo*a,s=r*eo*a;t.x=c+o,t.y=l+s,t.line.x=u+o,t.line.y=d+s,t.angle=n+to*a,t.count=p,e.sparks.emit(t)}let m=To(this.flareCarry,t,no*this.shine*s);if(m>0){let t=this.flareSpec;wo(t),t.x=c,t.y=l,t.angle=n,t.count=m,e.sparks.emit(t)}if(this.pulse){let t=this.pulseSpec;t.x=c,t.y=l,t.line.x=u,t.line.y=d,t.count=Math.round(ao*o/po);for(let n=0;n<po;n++)wo(t,2),e.sparks.emit(t)}if(this.crackle>0){let n=To(this.crackleCarry,t,so*o*this.crackle*s);if(n>0){let t=this.crackleSpec;t.x=c,t.y=l,t.line.x=u,t.line.y=d,t.count=n,e.sparks.emit(t)}}}bowSparks(t,n,r,i){let a=To(this.bowCarry,n,124*i*2*t.dt);if(a===0)return;let o=this.bowSpec,s=Math.random()<.3;o.color=s?e.meta.core:e.meta.color,o.to=s?e.meta.color:e.meta.core,Eo(t.sparks,o,t.originX,t.originY,Do,r-i,r+i,a,2,Oo*1.4)}bowHit(e,t){let n=e.enemies.x[t],r=e.enemies.y[t],i=this.bowHitSpec;i.x=n,i.y=r,i.angle=Math.atan2(r-e.originY,n-e.originX),i.count=this.bowHits,e.sparks.emit(i)}sweepSparks(e,t,n,r,i,a,o,s,c){let l=e.originX,u=e.originY,d=Math.abs(this.sweepVel),f=To(this.wakeCarry,t,mo*c*d*e.dt);if(f>0){let t=this.wakeSpec;t.x=l+o*c*ho,t.y=u+s*c*ho,t.line.x=l+o*c,t.line.y=u+s*c,t.angle=a-Math.sign(this.sweepVel)*Math.PI*.5,t.to=K[2+Math.floor(Math.random()*(K.length-2))],t.count=f,e.sparks.emit(t)}let p=Math.min(go,i*.35),m=n-r,h=n+r,g=To(this.sectorCarry,t,_o*p*r*2*e.dt);g>0&&Eo(e.sparks,this.sectorSpec,l,u,p,m,h,g,1,4);let _=To(this.edgeCarry,t,vo*e.dt);if(_>0){let t=this.edgeSpec;t.count=_,t.x=l+Math.cos(m)*p,t.y=u+Math.sin(m)*p,e.sparks.emit(t),t.x=l+Math.cos(h)*p,t.y=u+Math.sin(h)*p,e.sparks.emit(t)}if(this.sweepTurn&&c>Xa){let t=this.turnSpec;t.x=l+o*Xa,t.y=u+s*Xa,t.line.x=l+o*c,t.line.y=u+s*c,t.count=Math.round(yo*c),e.sparks.emit(t)}}markBrand(e,t){let n=this.brandSpec;n.x=e.enemies.x[t],n.y=e.enemies.y[t],n.shape.angle=Math.random()*Math.PI,e.sparks.emit(n)}burnSparks(t,n,r,i,a){let o=t.enemies.x[n],s=t.enemies.y[n];if(t.enemies.alive[n]===0){let e=this.killStreakSpec;e.x=o,e.y=s;for(let n=0;n<po;n++)wo(e,2),t.sparks.emit(e);let n=this.killGlowSpec;n.x=o,n.y=s,t.sparks.emit(n);return}let c=this.charge,l=c&&!this.steadyLight?Math.min(1,c[n]/Io):0,u=(r?i:i>>1)+(r&&l>.5?1:0);if(u>0){let n=this.burnSpec;n.x=o,n.y=s,n.angle=Math.atan2(s-t.originY,o-t.originX),n.count=u,this.burnSize[0]=1.5+l*1.3,this.burnSize[1]=2.5+l*2,n.to=this.overheat&&l>.5?Wa:e.meta.color,t.sparks.emit(n)}if(a>0&&Math.random()<l){let e=this.emberSpec;e.x=o,e.y=s,e.count=a,t.sparks.emit(e)}}dispose(){I.stopLoop(`beam`),this.ribbon.dispose(),this.removeForms()}};function Go(e,t){let n=e.length;for(let r=0;r<n;r++){let i=(t+r)%n;if(e[i]<=0)return i}return-1}function Ko(e){let t=0,n=1/0;for(let r=0;r<e.length;r++)e[r]<n&&(n=e[r],t=r);return t}var qo=4,Jo=170,Yo=5,Xo=11,Zo=.85,Qo=.62,$o=.72,es=7027957,ts=Math.PI*2,ns=60,rs=.2,is=120,as=45,os=.22,ss=.09,cs=.12,ls=18,us=.6,ds=16,fs=6,ps=20,ms=10,hs=1.2,gs=.55,_s=18,vs=5,ys=6,bs=[90,330],xs=.8,Ss=14,Cs=14,ws=18,Ts=[180,460],Es=56,Ds=2.8,Os=12,ks=10,As=22,js=[160,520],Ms=6,Ns=5,Ps=[30,120],Fs=.1,Is=136,Ls=.17,Rs=260,zs=9,Bs=class e{static meta={id:`bolts`,kind:`active`,color:12160255,core:15787263,base:{damage:Is,rate:1/Ls,area:zs,speed:Rs,critChance:12,critDamage:160},scales:{critChance:1.5,critDamage:1.5,attackSpeed:1,damage:.5,area:.25,projectileSpeed:1}};id=e.meta.id;color=e.meta.color;object;sprites;texture;capacity=640;x;y;vx;vy;life;interval=Ls;speed=Rs;damage=Is;radius=zs;pierce=1;share;credit;pierceLeft;hitCooldown;returning;shard;spread=.09;timer=0;cursor=0;mods=new F;burstShare=1;trailRate=is;trailCarry;shedCarry;trailEnd={x:0,y:0};trailLife=[os*.7,os];trailSize=[2.2,3.8];shedSize=[1.3,2.2];hitSize=[1.6,3];pathEnd={x:0,y:0};trailSpec={x:0,y:0,line:this.trailEnd,speed:[0,14],life:this.trailLife,size:this.trailSize,endSize:.15,color:e.meta.core,to:e.meta.color,drag:5,core:.7};shedSpec={x:0,y:0,line:this.trailEnd,arc:.8,speed:[20,90],normal:[25,80],life:[.16,.34],size:this.shedSize,endSize:.2,color:e.meta.core,to:es,drag:4,curl:5,core:.8,kind:`streak`,stretch:.05};muzzleSpec={x:0,y:0,disc:3,arc:.45,speed:[140,420],life:[.08,.2],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:6,core:.9,kind:`streak`,stretch:.03};recoilSpec={x:0,y:0,disc:4,arc:hs,speed:[70,280],life:[.18,.42],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.5,curl:6,core:.85,kind:`streak`,stretch:.035};flashSpec={x:0,y:0,disc:4,speed:[0,50],life:[.06,.16],size:[4.5,7.5],endSize:.4,color:e.meta.core,to:e.meta.color,drag:6,core:1};dustSpec={x:0,y:0,disc:6,arc:ts,speed:[20,110],life:[.3,.65],size:[2.5,4.5],endSize:.3,color:e.meta.color,to:es,drag:2.4,curl:14,core:.35,twinkle:.3};hitSpec={x:0,y:0,arc:1.1,speed:bs,life:[.12,.3],size:this.hitSize,endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:.9,kind:`streak`,stretch:.03};pivotSpec={x:0,y:0,ring:3,radial:!0,even:!0,speed:[70,95],life:[.1,.18],size:[1.8,2.8],endSize:.3,color:e.meta.core,to:e.meta.color,drag:5,core:.9};pathSpec={x:0,y:0,line:this.pathEnd,even:!0,speed:[0,16],normal:[4,22],delayAlong:.08,life:[.1,.18],size:[1.6,2.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:5,core:.8};actions={pace:e=>this.pace(e),fire:(e,t)=>this.launch(e,t.x,t.y,t.dirX,t.dirY,t.share,t.credit)};configure(t){this.mods=t;let n=new N(e.meta.color);for(let e=0;e<this.capacity;e++)this.sprites.setColor(e,n)}constructor(){this.texture=Te(32,2.6),this.sprites=new mr({capacity:this.capacity,texture:this.texture,additive:!0,gain:R,renderOrder:25}),this.object=this.sprites.points,this.x=new Float32Array(this.capacity),this.y=new Float32Array(this.capacity),this.vx=new Float32Array(this.capacity),this.vy=new Float32Array(this.capacity),this.life=new Float32Array(this.capacity),this.returning=new Float32Array(this.capacity),this.shard=new Float32Array(this.capacity),this.share=new Float32Array(this.capacity),this.credit=Array(this.capacity).fill(void 0),this.pierceLeft=new Float32Array(this.capacity),this.hitCooldown=new Float32Array(this.capacity),this.trailCarry=new Float32Array(this.capacity),this.shedCarry=new Float32Array(this.capacity);let e=new N(this.color);for(let t=0;t<this.capacity;t++)this.sprites.setColor(t,e)}update(t){if(this.timer-=t.dt,this.timer<=0){let e=this.pace(t);this.timer+=e.interval,this.fire(t,e.damage)}let n=this.radius*this.mods.size,r=this.mods.has(`ricochet`),i=t.bounds.x/2+20,a=t.bounds.y/2+20;this.gauge();let o=this.mods.visualScale();for(let s=0;s<this.capacity;s++){if(this.life[s]<=0){this.sprites.hide(s);continue}this.life[s]-=t.dt;let c=this.x[s],l=this.y[s];this.x[s]+=this.vx[s]*t.dt,this.y[s]+=this.vy[s]*t.dt;let u=Math.abs(this.x[s])>i||Math.abs(this.y[s])>a;if(u&&this.mods.has(`boomerang`)&&this.returning[s]===0){this.returning[s]=1,this.life[s]=Math.max(this.life[s],2);let n=t.originX-this.x[s],r=t.originY-this.y[s],i=Math.hypot(n,r)||1,a=this.speed*U(e.meta,t.stats,`projectileSpeed`);this.vx[s]=n/i*a,this.vy[s]=r/i*a,this.spray(t,s,xs)}else if(u){this.life[s]=0,this.sprites.hide(s);continue}this.hitCooldown[s]>0&&(this.hitCooldown[s]-=t.dt);let d=0,f=this.damage*this.mods.damage*(this.shard[s]===1?$o:1)*this.share[s];if(this.hitCooldown[s]<=0&&this.pierceLeft[s]>0){let e=-1,i=1/0;if(t.enemies.queryCircle(this.x[s],this.y[s],n,(t,n)=>{n>=i||(i=n,e=t)}),e>=0){this.pierceLeft[s]--,d++;let n=this.credit[s]??(this.shard[s]===1?`shrapnel`:void 0);t.hit(e,f,!1,n),this.spray(t,s,1),r&&this.pierceLeft[s]>0&&this.returning[s]===0&&this.bounce(t,s,e)}d>0&&(this.hitCooldown[s]=Fs)}if(this.pierceLeft[s]<=0){let e=this.x[s],n=this.y[s],r=this.vx[s],i=this.vy[s],a=this.shard[s]===1;this.life[s]=0,this.sprites.hide(s),this.mods.has(`shrapnel`)&&!a&&this.burst(t,e,n,r,i,this.share[s],this.credit[s]);continue}this.trail(t,s,c,l,o),this.life[s]<=0&&this.fizzle(t,s),this.sprites.set(s,Math.round(this.x[s]),Math.round(this.y[s]),9*this.mods.visualScale(),1)}this.sprites.sync()}fire(t,n){I.play(`volley`);let r=Math.max(1,Math.min(qo,1+this.mods.shots)),i=Math.atan2(t.aimY,t.aimX),a=this.spread,o=this.speed*U(e.meta,t.stats,`projectileSpeed`);for(let e=0;e<r;e++){let s=i+e*Math.PI*2/r+(Math.random()-.5)*a;this.spawn(t.originX+Math.cos(s)*10,t.originY+Math.sin(s)*10,Math.cos(s)*o,Math.sin(s)*o,2.5,{evict:!0,share:n}),this.muzzle(t,t.originX,t.originY,s,10,1)}}bounce(e,t,n){let r=-1,i=1/0;if(e.enemies.queryCircle(this.x[t],this.y[t],Jo,(e,t)=>{e===n||t>=i||(i=t,r=e)}),r<0)return;let a=e.enemies.x[r]-this.x[t],o=e.enemies.y[r]-this.y[t],s=Math.hypot(a,o)||1,c=Math.hypot(this.vx[t],this.vy[t]);this.vx[t]=a/s*c,this.vy[t]=o/s*c,this.ricochet(e,t,r)}launch(t,n,r,i,a,o,s){let c=this.speed*U(e.meta,t.stats,`projectileSpeed`),l=Math.max(1,Math.min(qo,1+this.mods.shots)),u=Math.atan2(a,i);for(let e=0;e<l;e++){let i=u+e*Math.PI*2/l+(Math.random()-.5)*this.spread;this.spawn(n,r,Math.cos(i)*c,Math.sin(i)*c,2.5,{share:o,credit:s})>=0&&this.muzzle(t,n,r,i,0,gs)}}rateScale(t){return U(e.meta,t.stats,`attackSpeed`)*this.mods.rate}pace(e){return Gr(this.interval,this.rateScale(e))}spawn(e,t,n,r,i,a={}){let o=Go(this.life,this.cursor);return o<0&&a.evict&&(o=Ko(this.life)),o<0?-1:(this.cursor=(o+1)%this.capacity,this.x[o]=e,this.y[o]=t,this.vx[o]=n,this.vy[o]=r,this.life[o]=i,this.pierceLeft[o]=this.pierce+this.mods.count+this.mods.layers*2,this.hitCooldown[o]=0,this.returning[o]=+!!a.shard,this.shard[o]=+!!a.shard,this.share[o]=a.share??1,this.credit[o]=a.credit,o)}burst(t,n,r,i,a,o,s){let c=this.speed*Zo*U(e.meta,t.stats,`projectileSpeed`),l=Math.atan2(a,i);for(let e=0;e<Yo;e++){let t=l+Math.PI+(e-2)*Math.PI/5,i=Math.cos(t),a=Math.sin(t);this.spawn(n+i*Xo,r+a*Xo,i*c,a*c,Qo,{shard:!0,share:o,credit:s})}this.shatter(t,n,r,l)}gauge(){let e=0;for(let t=0;t<this.capacity;t++)this.life[t]>0&&e++;let t=Math.min(1,ns/Math.max(1,e));this.burstShare=rs+.8*t,this.trailRate=as+75*t;let n=ss+.13*t;this.trailLife[0]=n*.7,this.trailLife[1]=n}trail(e,t,n,r,i){let a=this.shard[t]===1?us:1;this.trailEnd.x=this.x[t],this.trailEnd.y=this.y[t],this.trailCarry[t]+=this.trailRate*a*e.dt;let o=Math.floor(this.trailCarry[t]);if(this.trailCarry[t]-=o,o>0){let s=this.trailSpec;s.x=n,s.y=r,s.vx=-this.vx[t]*cs,s.vy=-this.vy[t]*cs,s.count=o,this.trailSize[0]=2.2*a*i,this.trailSize[1]=3.8*a*i,e.sparks.emit(s)}this.shedCarry[t]+=ls*a*this.burstShare*e.dt;let s=Math.floor(this.shedCarry[t]);if(this.shedCarry[t]-=s,s>0){let o=this.shedSpec;o.x=n,o.y=r,o.angle=Math.atan2(this.vy[t],this.vx[t])+Math.PI,o.count=s,this.shedSize[0]=1.3*a*i,this.shedSize[1]=2.2*a*i,e.sparks.emit(o)}}muzzle(e,t,n,r,i,a){let o=a*this.burstShare,s=t+Math.cos(r)*i,c=n+Math.sin(r)*i,l=r+Math.PI,u=this.muzzleSpec;u.x=s,u.y=c,u.angle=r,u.count=Math.round(ds*o),e.sparks.emit(u);let d=this.flashSpec;d.x=s,d.y=c,d.count=Math.round(fs*o),e.sparks.emit(d);let f=this.recoilSpec;f.x=t,f.y=n,f.angle=l,f.count=Math.round(ps*o),e.sparks.emit(f);let p=this.dustSpec;p.x=t,p.y=n,p.angle=l,p.arc=hs*1.4,p.count=Math.round(ms*o),e.sparks.emit(p)}spray(e,t,n){let r=n*this.burstShare,i=this.x[t],a=this.y[t];this.sizeHits(t);let o=this.hitSpec;o.x=i,o.y=a,o.angle=Math.atan2(this.vy[t],this.vx[t]),o.arc=1.1,o.speed=bs,o.count=Math.round(_s*r),e.sparks.emit(o);let s=this.flashSpec;s.x=i,s.y=a,s.count=Math.round(vs*r),e.sparks.emit(s);let c=this.dustSpec;c.x=i,c.y=a,c.arc=ts,c.count=Math.round(ys*r),e.sparks.emit(c)}sizeHits(e){let t=this.mods.visualScale()*(this.shard[e]===1?us:1);this.hitSize[0]=1.6*t,this.hitSize[1]=3*t}ricochet(e,t,n){let r=this.burstShare,i=this.x[t],a=this.y[t],o=this.pivotSpec;o.x=i,o.y=a,o.count=Math.round(Ss*r),e.sparks.emit(o),this.sizeHits(t);let s=this.hitSpec;s.x=i,s.y=a,s.angle=Math.atan2(this.vy[t],this.vx[t]),s.arc=.35,s.speed=Ts,s.count=Math.round(Cs*r),e.sparks.emit(s);let c=this.pathSpec;c.x=i,c.y=a,this.pathEnd.x=e.enemies.x[n],this.pathEnd.y=e.enemies.y[n],c.count=Math.round(ws*r),e.sparks.emit(c)}shatter(e,t,n,r){let i=this.burstShare,a=this.mods.visualScale();this.hitSize[0]=1.8*a,this.hitSize[1]=3.4*a;let o=this.hitSpec;o.x=t,o.y=n,o.angle=r+Math.PI,o.arc=Ds,o.speed=js,o.count=Math.round(Es*i),e.sparks.emit(o),o.angle=r,o.arc=.5,o.speed=bs,o.count=Math.round(Os*i),e.sparks.emit(o);let s=this.flashSpec;s.x=t,s.y=n,s.count=Math.round(ks*i),e.sparks.emit(s);let c=this.dustSpec;c.x=t,c.y=n,c.arc=ts,c.count=Math.round(As*i),e.sparks.emit(c)}fizzle(e,t){let n=this.burstShare;this.sizeHits(t);let r=this.hitSpec;r.x=this.x[t],r.y=this.y[t],r.angle=Math.atan2(this.vy[t],this.vx[t]),r.arc=1.6,r.speed=Ps,r.count=Math.round(Ms*n),e.sparks.emit(r);let i=this.dustSpec;i.x=this.x[t],i.y=this.y[t],i.arc=ts,i.count=Math.round(Ns*n),e.sparks.emit(i)}dispose(){this.sprites.dispose(),this.texture.dispose()}},Vs=78,Hs=8,Us=.22,Ws=.07,Gs=.1,Ks=.5,qs=231,Js=217,Ys=12796415,Xs=5,Zs=15,Qs=4,$s=360,ec=.9,tc=120,nc=2,rc=24,ic=.05,ac=48,oc=.5,sc=6,cc=46,lc=.6,uc=240,dc=1.2,fc=16,pc=6,mc=160,hc=.07,gc=.1,_c=2,vc=.5,yc=10414335,bc=8,xc=.6,Sc=.45,Cc=.02,wc=.1,Tc=.7,Ec=110,Dc=.22,Oc=.3,kc=64,Ac=30,jc=24,Mc=16,Nc=70,Pc=36,Fc=30,Ic=.14,Lc=28,Rc=.6,zc=.25,Bc=24,Vc=8,Hc=40,Uc=24,Wc=110,Gc=60,Kc=40,qc=.28,Jc=140,Yc=.12,Xc=.6,Zc=24,Qc=.3,$c=70,el=44,tl=.14,nl=48,rl=3,il=.12,al={kind:`outline`,shape:{id:`chainSeal`,paths:[{closed:!0,points:sl()}]}},ol={kind:`outline`,shape:gt()};function sl(){let e=[];for(let t=0;t<5;t++){let n=t*2%5/5*Math.PI*2;e.push(Math.cos(n),Math.sin(n))}return e}function cl(e,t,n){let r=1-Math.exp(-t*n);return r>.001?e*t/r:e/n}var ll=class e{static meta={id:`chain`,kind:`passive`,color:12160255,core:16777215,base:{damage:$s,rate:1/ec,area:tc,jumps:nc,critChance:10,critDamage:175},scales:{damage:1.5,critChance:1,critDamage:1,area:.5,attackSpeed:.25}};id=e.meta.id;color=e.meta.color;object=new M;interval=ec;damage=$s;range=tc;jumpRange=80;baseJumps=nc;extraJumps=0;cooldownScale=1;timer=0;pentaTimer=0;pentaDraw=0;pentaPhase=0;relayIndex=-1;relayStamp=0;wires=[];wireDraw=0;wireTouched=new Set;mods=new F;density=1;spark=1;sealCarry=0;crackleSpec={x:0,y:0,line:{x:0,y:0},speed:[0,30],normal:[40,170],delayAlong:Cc,life:[.08,.22],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:5,core:.9,kind:`streak`,stretch:.025};hazeSpec={x:0,y:0,line:{x:0,y:0},speed:[0,12],normal:[4,26],life:[.25,.5],size:[2.5,4.5],endSize:.4,color:e.meta.color,drag:2.5,curl:8,core:.35,twinkle:.6};frostSpec={x:0,y:0,line:{x:0,y:0},speed:[0,14],normal:[6,30],life:[.5,.9],size:[1.6,2.8],endSize:.3,color:yc,to:e.meta.core,drag:2,gravity:30,core:.6,twinkle:.7,kind:`pixel`};streakSpec={x:0,y:0,speed:[120,380],life:[.1,.28],size:[1.6,3],endSize:.2,color:e.meta.core,to:e.meta.color,drag:5,core:.95,kind:`streak`,stretch:.03};coreSpec={x:0,y:0,ring:Qs,even:!0,radial:!0,speed:[110,150],life:[.12,.18],size:[2.2,3.2],endSize:.3,color:e.meta.core,to:e.meta.color,drag:4,core:.8};splashSpec={x:0,y:0,disc:5,radial:!0,speed:[20,70],life:[.18,.35],size:[4,6.5],endSize:.4,color:e.meta.color,drag:3.5,curl:5,core:.3};emberSpec={x:0,y:0,angle:Math.PI/2,arc:2.6,speed:[40,130],life:[.3,.6],size:[1.4,2.4],endSize:.4,color:e.meta.core,to:e.meta.color,drag:2,gravity:240,core:.7,twinkle:.5};sealSpec={x:0,y:0,disc:4,speed:[10,50],life:[.2,.4],size:[2,3.5],endSize:.3,color:e.meta.core,to:Ys,drag:2.5,gravity:-40,curl:6,core:.6,twinkle:.5};actions={fire:(e,t)=>this.strikeFrom(e,t)};configure(e){this.mods=e,this.extraJumps=e.count,this.cooldownScale=1/e.rate}update(t){if(this.mods.has(`pentagram`)&&this.holdPentagram(t),this.mods.has(`wire`)&&this.holdWires(t),this.timer-=t.dt,this.timer>0)return;let n=Gr(this.interval*this.cooldownScale,U(e.meta,t.stats,`attackSpeed`));this.timer+=n.interval,this.mods.has(`pentagram`)&&this.castPentagram(t);let r=this.mods.has(`rod`),i=this.jumps(),a=this.mods.size,o=this.range*a,s=new Set,c=this.mods.has(`fork`)?2:1;this.density=Math.min(1,bc/(i*c))*Math.min(1,n.interval/Sc),this.spark=this.density;let l=this.mods.has(`pentagram`),u=Vs*a,d=this.relayIndex,f=this.mods.has(`chainRelay`)&&d>=0&&t.enemies.alive[d]===1&&t.enemies.stamp[d]===this.relayStamp&&Math.abs(t.enemies.x[d])<=t.bounds.x/2&&Math.abs(t.enemies.y[d])<=t.bounds.y/2;if(f){let e=t.enemies.x[d],n=t.enemies.y[d];t.hit(d,this.damage*this.mods.damage,!1),s.add(d),I.play(`lightning`),t.bolts.strike(e,n-ac,e,n,{color:this.color,width:3*this.mods.visualScale(),life:.15}),this.relaySparks(t,e,n),this.impact(t,e,n,this.color,0)}if(r){let e=this.anchor(t);t.bolts.strike(t.originX,t.originY,e.x,e.y,{color:this.color,width:1.2*this.mods.visualScale(),life:.12,power:.4}),this.leashSparks(t,e.x,e.y)}for(let e=0;e<c;e++){let n=this.anchor(t),i=n.x,a=n.y;if(!r&&f)i=t.enemies.x[d],a=t.enemies.y[d];else if(!r&&l){let n=this.pentaPhase+e*2/5*Math.PI*2;i=t.originX+Math.cos(n)*u,a=t.originY+Math.sin(n)*u}let c=e===0?1:.7;this.spark=this.density*c;let p=o+(l&&!r?u:0),m=this.branch(t,i,a,s,p,+!!f,1,c,e>0?`forkChain`:void 0,e===0&&!l);e===0&&(this.relayIndex=m,this.relayStamp=m>=0?t.enemies.stamp[m]:0)}}jumps(){return this.mods.has(`endless`)?rc:this.baseJumps+this.extraJumps}branch(e,t,n,r,i,a,o,s,c,l,u){let d=this.mods.has(`vein`),f=this.mods.has(`endless`),p=this.jumps(),m=f?ic:.16,h=this.jumpRange*this.mods.size,g=s*o,_=t,v=n,y=-1,b=a;for(let t=a;t<p;t++){let n=t===0?i:h,a=this.findTarget(e,_,v,n,r,d);if(a<0){let n=p-t;this.mods.has(`deadEnd`)&&y>=0&&this.hitDeadEnd(e,y,_,v,n,g,u);break}t===0&&l&&(I.play(`lightning`),this.discharge(e,_,v,e.enemies.x[a],e.enemies.y[a])),r.add(a);let o=e.enemies.x[a],s=e.enemies.y[a];e.hit(a,this.damage*this.mods.damage*Math.max(.1,1-b*m)*g,!1,c);let f=d&&e.enemies.isChilled(a);b+=+!f,y=a,this.drawArc(e,_,v,o,s,f?yc:this.color,t),_=o,v=s}return this.mods.has(`clap`)&&y>=0&&this.clap(e,y,_,v,g,u),y}strikeFrom(e,t){let n=this.mods.has(`fork`)?2:1;this.density=Math.min(1,bc/(this.jumps()*n))*xc;let r=new Set,i=this.range*this.mods.size,a=!1;for(let o=0;o<n;o++){let n=o===0?1:.7;this.spark=this.density*n,this.branch(e,t.x,t.y,r,i,0,t.share,n,t.credit,!1,t.credit)>=0&&(a=!0)}a&&I.play(`chainEcho`)}anchor(e){return this.mods.has(`rod`)?{x:e.focusX,y:e.focusY}:{x:e.originX,y:e.originY}}castPentagram(t){I.play(`lightning`,{volume:1.3}),this.pentaTimer=Us*this.mods.duration;let n=W(Vs,U(e.meta,t.stats,`area`)*this.mods.size,Ur(t)),r=qs*this.mods.damage;this.sealSparks(t,n);for(let e=0;e<5;e++){let i=this.pentaPhase+e/5*Math.PI*2,a=t.originX+Math.cos(i)*n,o=t.originY+Math.sin(i)*n,s=-1,c=1/0;t.enemies.queryCircle(a,o,n*1.25,(e,t)=>{t>=c||(c=t,s=e)}),!(s<0)&&(t.bolts.strike(a,o,t.enemies.x[s],t.enemies.y[s],{color:Ys,width:3*this.mods.visualScale(),life:.2}),t.hit(s,r,!1,`sealChain`),this.sealStrike(t,a,o,t.enemies.x[s],t.enemies.y[s]))}}sealSparks(t,n){let r=this.pentaTimer,i=this.mods.visualScale(),a=e.meta.core;t.sparks.emit({x:t.originX,y:t.originY,count:$c,shape:{layout:al,radius:n,angle:this.pentaPhase},orbit:{around:`wisp`,spin:Ks},life:r,size:[3.2,5.8],sizeScale:i,endSize:.8,color:a,to:Ys,drag:0,core:.85,fade:.5,twinkle:.2}),t.sparks.emit({x:t.originX,y:t.originY,count:el,shape:{layout:al,radius:n,angle:this.pentaPhase},orbit:{around:`wisp`,spin:Ks},delayAlong:tl,life:[.1,.16],size:[6,9],sizeScale:i,endSize:.3,color:a,to:Ys,drag:0,core:1}),t.sparks.emit({x:t.originX,y:t.originY,count:nl,shape:{layout:ol,radius:n},orbit:{around:`wisp`,spin:-.5*rl},life:r,size:[2.6,4.4],sizeScale:i,endSize:.8,color:Ys,to:a,drag:0,core:.55,fade:.5,twinkle:.25}),t.sparks.emit({x:t.originX,y:t.originY,count:$c,shape:{layout:al,radius:n,angle:this.pentaPhase+Ks*r},orbit:{around:`wisp`,spin:Ks,drift:[n*.4,n*1.2]},delay:r,life:[Qc*.6,Qc],size:[2.4,4.2],sizeScale:i,endSize:.2,color:a,to:Ys,drag:3,core:.7})}sealStrike(t,n,r,i,a){let o=Math.hypot(i-n,a-r);t.sparks.emit({x:n,y:r,count:Zc,angle:Math.atan2(a-r,i-n),arc:.8,speed:[160,380],life:[.08,.2],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:Ys,drag:5,core:.95,kind:`streak`,stretch:.03});let s=Math.min(Ec,o*Tc)*Xc;this.crackle(t,n,r,i,a,Ys,0,s),this.impactSparks(t,i,a,Ys,Cc,Xc)}holdPentagram(t){if(this.pentaTimer<=0)return;this.pentaTimer-=t.dt,this.pentaPhase+=t.dt*Ks,this.pentaDraw-=t.dt;let n=this.pentaDraw<=0;n&&(this.pentaDraw=Ws);let r=W(Vs,U(e.meta,t.stats,`area`)*this.mods.size,Ur(t)),i=Js*this.mods.damage*t.dt,a=Math.min(1,this.pentaTimer/(Us*.7));for(let e=0;e<5;e++){let o=this.pentaPhase+e/5*Math.PI*2,s=this.pentaPhase+(e+2)%5/5*Math.PI*2,c=t.originX+Math.cos(o)*r,l=t.originY+Math.sin(o)*r,u=t.originX+Math.cos(s)*r,d=t.originY+Math.sin(s)*r;if(n){t.bolts.strike(c,l,u,d,{color:Ys,width:(a>.5?2.4:1.6)*this.mods.visualScale(),life:Gs,power:.5+a*.6});let e=Math.hypot(u-c,d-l)*Yc*a;this.crackle(t,c,l,u,d,Ys,0,e)}t.enemies.querySegment(c,l,u,d,Hs,e=>{t.hit(e,i*a,!0,`sealChain`)})}this.sealCarry+=Jc*t.dt;let o=Math.floor(this.sealCarry);if(this.sealCarry-=o,o===0)return;let s=this.sealSpec;s.count=o;for(let e=0;e<5;e++){let n=this.pentaPhase+e/5*Math.PI*2;s.x=t.originX+Math.cos(n)*r,s.y=t.originY+Math.sin(n)*r,t.sparks.emit(s)}}hitDeadEnd(t,n,r,i,a,o,s=`chainDeadEnd`){let c=Math.min(sc,a),l=this.damage*this.mods.damage*oc*o*c;t.hit(n,l,!1,s);let u=t.enemies.radius[n]+Lc;this.converge(t,r,i,u,(Bc+c*Vc)*this.spark),t.sparks.emit({x:r,y:i,count:(Hc+c*Uc)*this.spark,delay:Ic,speed:[150,440],life:[.12,.32],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:.95,kind:`streak`,stretch:.03}),t.impacts.pop(r,i,1+c*.3)}clap(t,n,r,i,a,o=`chainClap`){let s=cc*this.mods.size,c=this.damage*this.mods.damage*lc*a;t.enemies.queryCircle(r,i,s,e=>{e!==n&&(t.hit(e,c,!1,o),t.enemies.knockback(e,r,i,uc))}),t.shock.ring(r,i,s,.7,10,.5);let l=this.spark;t.sparks.emit({x:r,y:i,count:Wc*l,ring:s*.15,radial:!0,arc:.3,speed:cl(s*.8,5,qc),life:[qc*.85,qc],size:[2,3.4],endSize:.25,color:e.meta.core,to:this.color,drag:5,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:r,y:i,count:Gc*l,ring:s*.85,radial:!0,speed:[10,50],life:[.3,.55],size:[2.5,4.5],endSize:.3,color:this.color,drag:2.5,curl:12,core:.3,twinkle:.4}),t.sparks.emit({x:r,y:i,count:Kc*l,disc:6,speed:[200,520],life:[.06,.16],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:this.color,drag:6,core:1,kind:`streak`,stretch:.03})}holdWires(e){if(this.wires.length===0)return;this.wireDraw-=e.dt;let t=this.wireDraw<=0;t&&(this.wireDraw=hc),this.wireTouched.clear();let n=this.mods.visualScale(),r=mc*this.mods.damage*e.dt;for(let i=this.wires.length-1;i>=0;i--){let a=this.wires[i];if(a.timer-=e.dt,a.timer<=0){this.wires[i]=this.wires[this.wires.length-1],this.wires.pop();continue}let o=Math.min(1,a.timer/(dc*.5));if(e.enemies.querySegment(a.x1,a.y1,a.x2,a.y2,pc,t=>{this.wireTouched.has(t)||(this.wireTouched.add(t),e.hit(t,r*o,!0,`chainWire`))}),t){e.bolts.strike(a.x1,a.y1,a.x2,a.y2,{color:this.color,width:1.4*n,life:gc,power:.3+o*.4});let t=Math.hypot(a.x2-a.x1,a.y2-a.y1)*il*o;this.crackle(e,a.x1,a.y1,a.x2,a.y2,this.color,0,t)}}}findTarget(e,t,n,r,i,a){let o=-1,s=1/0,c=a?r*_c:r;return e.enemies.queryCircle(t,n,c,(t,n)=>{if(i.has(t))return;let c=a&&e.enemies.isChilled(t);if(a&&!c&&n>r)return;let l=c?n*vc:n;l>=s||(s=l,o=t)}),o}drawArc(e,t,n,r,i,a=this.color,o=0){let s=this.mods.visualScale();e.bolts.strike(t,n,r,i,{color:a,width:3*s,life:.15}),this.mods.has(`wire`)&&(this.wires.length>=fc&&this.wires.shift(),this.wires.push({x1:t,y1:n,x2:r,y2:i,timer:dc*this.mods.duration}));let c=Math.atan2(i-n,r-t);for(let o=0;o<2;o++){if(Math.random()>.55)continue;let o=.25+Math.random()*.5,l=t+(r-t)*o,u=n+(i-n)*o,d=c+(Math.random()<.5?1.1:-1.1),f=10+Math.random()*14;e.bolts.strike(l,u,l+Math.cos(d)*f,u+Math.sin(d)*f,{color:a,width:2*s,life:.1,power:.75})}let l=Math.min(wc,o*Cc),u=Math.hypot(r-t,i-n),d=this.spark,f=Math.min(Ec,u*Tc)*d;this.crackle(e,t,n,r,i,a,l,f);let p=this.hazeSpec;if(p.x=t,p.y=n,p.line.x=r,p.line.y=i,p.color=a,p.delay=l,p.count=u*Dc*d,e.sparks.emit(p),a===yc){let a=this.frostSpec;a.x=t,a.y=n,a.line.x=r,a.line.y=i,a.delay=l,a.count=u*Oc*d,e.sparks.emit(a)}this.impact(e,r,i,a,l+Cc)}crackle(e,t,n,r,i,a,o,s){let c=this.crackleSpec;c.x=t,c.y=n,c.line.x=r,c.line.y=i,c.to=a,c.delay=o,c.count=s,e.sparks.emit(c)}discharge(t,n,r,i,a){let o=e.meta.color,s=e.meta.core,c=this.spark;t.sparks.emit({x:n,y:r,count:Nc*c,ring:9,radial:!0,arc:.6,speed:[140,340],life:[.08,.2],size:[1.5,2.6],endSize:.2,color:s,to:o,drag:6,core:.9,kind:`streak`,stretch:.025}),t.sparks.emit({x:n,y:r,count:Pc*c,angle:Math.atan2(a-r,i-n),arc:.7,speed:[220,460],life:[.08,.18],size:[1.6,2.8],endSize:.2,color:s,to:o,drag:5,core:.95,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:r,count:Fc*c,disc:14,radial:!0,speed:[10,60],life:[.2,.45],size:[2,3.5],endSize:.3,color:o,drag:2.5,curl:10,core:.4,twinkle:.6})}relaySparks(t,n,r){let i=this.spark;t.sparks.emit({x:n,y:r-ac,line:{x:n,y:r},count:40*i,angle:Math.PI/2,arc:.3,speed:[60,200],normal:[10,50],delayAlong:Cc*2,life:[.1,.25],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:this.color,drag:4,core:.9,kind:`streak`,stretch:.03}),this.converge(t,n,r,Lc,36*i)}leashSparks(e,t,n){let r=Math.hypot(t-e.originX,n-e.originY)*zc*this.spark;this.crackle(e,e.originX,e.originY,t,n,this.color,0,r),this.converge(e,t,n,Lc,36*this.spark)}converge(t,n,r,i,a){t.sparks.emit({x:n,y:r,count:a,ring:i,even:!0,radial:!0,turn:Math.PI,arc:.25,speed:cl(i,Rc,Ic),life:Ic,size:[2,3],endSize:.5,color:this.color,to:e.meta.core,drag:Rc,core:.7,fade:.5})}impact(t,n,r,i,a){t.impacts.pop(n,r);let o=Math.random()*Math.PI*2;for(let i=0;i<Xs;i++){let a=o+i/Xs*Math.PI*2+(Math.random()-.5)*.5,s=Zs*(.55+Math.random()*.9);t.bolts.strike(n,r,n+Math.cos(a)*s,r+Math.sin(a)*s,{color:e.meta.core,width:1.8,life:.1,power:.8})}this.impactSparks(t,n,r,i,a,this.spark)}impactSparks(e,t,n,r,i,a){let o=this.streakSpec;o.x=t,o.y=n,o.to=r,o.delay=i,o.count=kc*a,e.sparks.emit(o);let s=this.coreSpec;s.x=t,s.y=n,s.to=r,s.delay=i,s.count=Ac*a,e.sparks.emit(s);let c=this.splashSpec;c.x=t,c.y=n,c.color=r,c.delay=i,c.count=jc*a,e.sparks.emit(c);let l=this.emberSpec;l.x=t,l.y=n,l.to=r,l.delay=i,l.count=Mc*a,e.sparks.emit(l)}dispose(){}},ul=3111935,dl=Math.PI*2,fl=1100,pl=450,ml=70,hl=10,gl=3,_l=.09,vl=260,yl=6,bl=7e3,xl=2.2,Sl=2600,Cl=.5,wl=600,Tl=3.5,El=1,Dl=4e3,Ol=700,kl=320,Al=800,jl=160,Ml=6,Nl=1400,Pl=8,Fl=22,Il=12,Ll=520,Rl=3,zl=.9,Bl=Math.PI/3,Vl=2.2,Hl=260,Ul=.35,Wl=1.3,Gl=6,Kl=.4,ql=.32,Jl=520,Yl=.45,Xl=.55,Zl=1.6,Ql=.4,$l=.35,eu=3,tu=3,nu=.55,ru=129,iu=3.1,au=10,ou=12,su=12,cu=class{anchored;x=0;y=0;radius=0;inbound=0;aim=0;struck=new Set;stand=0;standTick=0;stood=!1;peals=0;kills=0;pealMult=1;share=1;reach=1;credit=void 0;echo=!1;wallSeen=!1;tickSeen=0;inboundSeen=0;pealSeen=0;constructor(e){this.anchored=e}start(e,t,n){this.x=e,this.y=t,this.aim=n,this.radius=su,this.inbound=0,this.struck.clear(),this.stand=0,this.standTick=0,this.stood=!1,this.peals=0,this.kills=0,this.pealMult=1,this.wallSeen=!1,this.tickSeen=0,this.inboundSeen=0,this.pealSeen=0}stop(){this.radius=0,this.peals=0,this.pealMult=1,this.kills=0}},lu=210,uu=class{carry=0;take(e,t){this.carry+=Math.max(0,e)*t;let n=Math.floor(this.carry);return this.carry-=n,n}},du=class e{static meta={id:`nova`,kind:`passive`,color:5431551,core:14481663,base:{damage:ru,rate:1/iu,speed:lu,critChance:8,critDamage:200},scales:{area:1.25,critChance:1,critDamage:1,damage:.5,attackSpeed:.25,projectileSpeed:1}};id=e.meta.id;object=new M;interval=iu;damage=ru;speed=lu;maxRadius=165;waves=0;thickness=16;timer=1;main=new cu(!0);surges=[];spare=[];dim=new N;visual=1;frontFlow=new uu;dustFlow=new uu;sprayFlow=new uu;wallFlow=new uu;humFlow=new uu;towFlow=new uu;chord={x:0,y:0};frontSpeed=[0,0];dustSpeed=[0,0];spraySpeed=[0,0];frontSpec={x:0,y:0,speed:this.frontSpeed,arc:.12,life:[.16,.3],size:0,endSize:.5,color:e.meta.core,to:e.meta.color,drag:.25,core:.9,kind:`streak`,stretch:.035};dustSpec={x:0,y:0,speed:this.dustSpeed,arc:.9,life:[.45,.85],size:0,endSize:.4,color:e.meta.color,to:ul,drag:2.2,curl:8,core:.35,twinkle:.35,fade:1.3};spraySpec={x:0,y:0,speed:this.spraySpeed,arc:.35,life:[.1,.2],size:0,endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,core:1,kind:`streak`,stretch:.05};wallSpec={x:0,y:0,speed:[25,75],arc:.5,life:[.35,.6],size:0,endSize:.4,color:e.meta.core,to:e.meta.color,drag:1.2,curl:5,core:.7,twinkle:.3};humSpec={x:0,y:0,speed:[60,160],arc:.3,life:[.12,.24],size:0,endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,core:.9,kind:`streak`,stretch:.04};towSpec={x:0,y:0,disc:0,speed:[0,20],life:[.45,.8],size:0,endSize:.3,color:ul,to:e.meta.color,drag:1,attract:1,core:.4,twinkle:.3};hitSpec={x:0,y:0,count:Fl,arc:1.3,speed:[90,300],life:[.18,.4],size:0,endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.2,core:.9,kind:`streak`,stretch:.03};flashSpec={x:0,y:0,count:5,disc:5,speed:[5,40],life:[.18,.32],size:0,endSize:.3,color:e.meta.core,to:e.meta.color,drag:4,core:1};slamSpec={x:0,y:0,count:16,arc:.55,speed:[140,380],life:[.25,.45],size:0,endSize:.35,color:e.meta.color,to:ul,drag:4.5,curl:8,core:.4};rimeSpec={x:0,y:0,count:10,disc:8,speed:[4,26],gravity:26,life:[.5,.95],size:0,endSize:.5,color:e.meta.core,to:e.meta.color,drag:1.4,core:.9,twinkle:.75,kind:`pixel`};constructor(){this.resize(1)}mods=new F;configure(e){this.mods=e,this.resize(e.visualScale())}resize(e){this.visual=e,this.frontSpec.size=[2*e,3.2*e],this.dustSpec.size=[2*e,4*e],this.spraySpec.size=[1.6*e,2.6*e],this.wallSpec.size=[2.5*e,4.2*e],this.humSpec.size=[1.8*e,3*e],this.towSpec.size=[2*e,3.5*e],this.hitSpec.size=[2*e,3.4*e],this.flashSpec.size=[6*e,10*e],this.slamSpec.size=[3*e,5*e],this.rimeSpec.size=[1.8*e,3*e]}reach(t){return W(this.maxRadius,U(e.meta,t.stats,`area`)*this.mods.size,Ur(t))}update(t){let n=this.main;n.radius<=0?(this.timer-=t.dt,this.timer<=0&&(this.timer+=Gr(this.interval,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate).interval,n.start(t.originX,t.originY,Math.atan2(t.aimY,t.aimX)),this.waves++,I.play(`nova`),this.blast(t,n,this.spreadOf(t,n),1,0))):this.step(t,n);for(let e=this.surges.length-1;e>=0;e--){let n=this.surges[e];this.step(t,n),n.radius<=0&&(this.surges.splice(e,1),this.spare.push(n))}}spreadOf(e,t){let n=this.reach(e)/this.maxRadius;return t.anchored?n:n*Math.sqrt(t.reach)}step(t,n){n.anchored&&(n.x=t.originX,n.y=t.originY);let r=n.x,i=n.y,a=this.reach(t)*n.reach,o=this.spreadOf(t,n),s=this.mods.has(`cone`),c=s?n.aim-Bl:0,l=s?Bl*2:Math.PI*2;n.stand>0?(n.stand-=t.dt,n.standTick-=t.dt,n.standTick<=0&&(n.standTick+=Ql,n.struck.clear())):(n.radius+=this.speed*U(e.meta,t.stats,`projectileSpeed`)*t.dt*o*(n.inbound===1?-1:1),this.mods.has(`standing`)&&!n.stood&&n.inbound===0&&n.radius>=a*Xl&&(n.stand=Zl,n.standTick=Ql,n.stood=!0));let u=n.stand>0,d=n.inbound===1,f=this.mods.has(`rebound`),p=this.mods.has(`undertow`),m=d&&p&&!f,h=n.anchored?this.thickness:ou;d&&p&&t.enemies.queryCircle(r,i,n.radius,e=>{t.enemies.pull(e,r,i,Jl,t.dt)}),(!d||f)&&t.enemies.queryCircle(r,i,n.radius+h,(e,a)=>{let o=t.enemies.stamp[e];n.struck.has(o)||Math.abs(a-n.radius)>h||s&&!this.inCone(t,n,e)||(n.struck.add(o),t.hit(e,this.damage*this.mods.damage*n.share*(s?Vl:1)*n.pealMult*(u?$l:1),u,this.credit(n,u)),this.mods.has(`slam`)&&(t.enemies.knockback(e,r,i,d?-260:Hl),t.impacts.pop(t.enemies.x[e],t.enemies.y[e],Ul)),this.mods.has(`novaRime`)&&t.enemies.chill(e,Wl*this.mods.duration),t.enemies.alive[e]===0&&n.kills++,this.strikeSparks(t,n,e,d,u))});let g=Math.min(1,Math.max(0,n.radius/a)),_=g<=zl?0:(g-zl)/.09999999999999998,v=(1-_*_*(3-2*_))*(m?Yl:1);this.drawFront(t,n,o,c,l,v,u,d,m),d&&p&&this.drawTow(t,n,v),f||p?(n.radius>=a&&n.inbound===0&&(n.inbound=1,f&&n.struck.clear(),this.wreath(t,n,a,c,l)),n.inbound===1&&n.radius<=su&&(n.inbound=0,this.endWave(t,n))):n.radius>=a&&(this.wreath(t,n,a,c,l),this.endWave(t,n)),this.waveEvents(t,n,o,c,l)}drawFront(t,n,r,i,a,o,s,c,l){let u=n.x,d=n.y,f=n.radius,p=t.dt,m=Math.max(1,f)*a,h=n.anchored?1:Rl/yl;if(s){let e=Math.min(Dl,m*Tl)*o*h,n=this.wallFlow.take(e,p),r=n>>1;this.edge(t,this.wallSpec,u,d,f,i,a,r,Math.PI/2,.5),this.edge(t,this.wallSpec,u,d,f,i,a,n-r,-Math.PI/2,.5);let s=this.humFlow.take(m*El*o*h,p),c=s>>1;this.edge(t,this.humSpec,u,d,f,i,a,c,0,.3),this.edge(t,this.humSpec,u,d,f,i,a,s-c,Math.PI,.3);return}let g=this.speed*U(e.meta,t.stats,`projectileSpeed`)*r,_=c?Math.PI:0,v=this.dimmed(e.meta.core,o),y=this.dimmed(e.meta.color,o),b=this.dimmed(ul,o),x=this.frontSpec;this.frontSpeed[0]=g*.94,this.frontSpeed[1]=g*1.12,x.color=v,x.to=l?b:y;let S=Math.min(bl,m*yl)*o*h;this.edge(t,x,u,d,f,i,a,this.frontFlow.take(S,p),_,.12);let C=this.dustSpec;this.dustSpeed[0]=g*.12,this.dustSpeed[1]=g*.4,C.color=y,C.to=b;let w=Math.min(Sl,m*xl)*o*h;if(this.edge(t,C,u,d,f,i,a,this.dustFlow.take(w,p),_,.9),l)return;let T=this.spraySpec;this.spraySpeed[0]=g*1.35,this.spraySpeed[1]=g*1.9,T.color=v,T.to=y;let E=Math.min(wl,m*Cl)*o*h,ee=this.sprayFlow.take(E,p);this.edge(t,T,u,d,f,i,a,ee,_,.35)}edge(e,t,n,r,i,a,o,s,c,l){if(s<=0)return;if(o>=dl-.001){t.x=n,t.y=r,t.line=void 0,t.ring=i,t.radial=!0,t.turn=c,t.arc=l,t.count=s,e.sparks.emit(t);return}let u=this.chord;t.ring=void 0,t.radial=!1,t.line=u,t.arc=l+o/Pl;let d=Math.random();for(let l=0;l<Pl;l++){let f=Math.floor(s*(l+1)/Pl+d)-Math.floor(s*l/Pl+d);if(f<=0)continue;let p=a+l/Pl*o,m=a+(l+1)/Pl*o;t.x=n+Math.cos(p)*i,t.y=r+Math.sin(p)*i,u.x=n+Math.cos(m)*i,u.y=r+Math.sin(m)*i,t.angle=(p+m)*.5+c,t.count=f,e.sparks.emit(t)}}drawTow(e,t,n){let r=this.towFlow.take(Math.min(Nl,t.radius*Ml),e.dt);if(r===0)return;let i=this.towSpec;i.x=t.x,i.y=t.y,i.disc=t.radius,i.count=r,i.color=this.dimmed(ul,Math.min(1,n*2)),e.sparks.emit(i)}strikeSparks(e,t,n,r,i){let a=e.enemies.x[n],o=e.enemies.y[n],s=Math.atan2(o-t.y,a-t.x),c=r?s+Math.PI:s,l=this.hitSpec;l.x=a,l.y=o,l.angle=c,l.count=i?Il:Fl,e.sparks.emit(l),this.flashSpec.x=a,this.flashSpec.y=o,e.sparks.emit(this.flashSpec),this.mods.has(`slam`)&&(this.slamSpec.x=a,this.slamSpec.y=o,this.slamSpec.angle=c,e.sparks.emit(this.slamSpec)),this.mods.has(`novaRime`)&&(this.rimeSpec.x=a,this.rimeSpec.y=o,e.sparks.emit(this.rimeSpec))}blast(t,n,r,i,a){let o=n.x,s=n.y,c=this.speed*U(e.meta,t.stats,`projectileSpeed`)*r,l=this.mods.has(`cone`),u=l?void 0:hl,d=!l,f=n.aim,p=l?Bl*2:.25,m=this.visual,h=e=>Math.max(1,Math.round(e*i));t.sparks.emit({x:o,y:s,ring:u,radial:d,angle:f,arc:p,count:h(fl),speed:[c*.9,c*2.6],life:[.3,.6],size:[2*m,3.6*m],endSize:.25,color:e.meta.core,to:e.meta.color,drag:2.4,curl:6,core:.9,kind:`streak`,stretch:.035}),t.sparks.emit({x:o,y:s,ring:u,radial:d,angle:f,arc:p,count:h(pl),speed:[c*.8,c],life:[.5,.8],size:[3*m,5.5*m],endSize:.5,color:e.meta.color,to:ul,drag:.35,curl:10,core:.35,twinkle:.25,fade:1.2}),t.sparks.emit({x:o,y:s,disc:9,count:h(ml),speed:[0,50],life:[.14,.28],size:[9*m,16*m],endSize:.3,color:e.meta.core,to:e.meta.color,drag:5,core:1});for(let n=1;n<=a;n++)t.sparks.emit({x:o,y:s,ring:u,radial:d,angle:f,arc:l?p:.1,count:h(vl),delay:n*_l,speed:[c,c*1.25],life:[.35,.55],size:[2.2*m,3.4*m],endSize:.3,color:e.meta.core,to:e.meta.color,drag:.6,core:.9,kind:`streak`,stretch:.04})}waveEvents(t,n,r,i,a){let o=n.x,s=n.y,c=n.radius,l=this.visual,u=n.stand>0,d=n.anchored?1:n.reach;if(u&&(!n.wallSeen||n.standTick>n.tickSeen)){let r=!n.wallSeen,u=Math.round(((r?Ol:kl)>>1)*d),f={x:o,y:s,speed:r?[60,240]:[100,280],life:r?[.25,.5]:[.12,.25],size:[2.2*l,3.6*l],endSize:.2,color:e.meta.core,to:e.meta.color,drag:r?3:4,core:.9,kind:`streak`,stretch:.035};this.edge(t,f,o,s,c,i,a,u,0,.35),this.edge(t,f,o,s,c,i,a,u,Math.PI,.35)}n.wallSeen=u,n.tickSeen=n.standTick;let f=this.mods.has(`rebound`),p=this.mods.has(`undertow`)&&!f,m=p?Yl:1;if(n.inbound===1&&n.inboundSeen===0){let n=this.speed*U(e.meta,t.stats,`projectileSpeed`)*r,u={x:o,y:s,speed:[n*.6,n*1.6],life:[.25,.5],size:[2.2*l,3.6*l],endSize:.25,color:this.dimmed(e.meta.core,m),to:p?ul:e.meta.color,drag:1.6,core:.9,kind:`streak`,stretch:.035},f=Math.round(Al*m*d);this.edge(t,u,o,s,c,i,a,f,Math.PI,.3);let h={x:o,y:s,speed:[0,30],life:[.4,.7],size:[3*l,5*l],endSize:.4,color:this.dimmed(e.meta.color,m),to:ul,drag:2,curl:6,core:.4,twinkle:.4};this.edge(t,h,o,s,c,i,a,f>>2,0,dl)}n.inbound===0&&n.inboundSeen===1&&t.sparks.emit({x:o,y:s,disc:10,count:Math.max(1,Math.round(jl*m*d)),speed:[20,120],life:[.2,.4],size:[3*l,6*l],endSize:.3,color:this.dimmed(e.meta.core,m),to:p?ul:e.meta.color,drag:3.5,core:1}),n.inboundSeen=n.inbound,n.peals>n.pealSeen&&this.blast(t,n,r,n.pealMult*d,gl),n.pealSeen=n.peals}credit(e,t){return e.credit===void 0?t?`novaStanding`:e.inbound===1?`reboundNova`:e.peals>0?`novaPeal`:void 0:e.credit}wreath(e,t,n,r,i){if(!(!this.mods.has(`wreath`)||t.echo))for(let a=0;a<Gl;a++){let o=r+(a+.5)*i/Gl;this.launch(e,t.x+Math.cos(o)*n,t.y+Math.sin(o)*n,Kl*t.pealMult*t.share,ql*t.reach,t.credit??`novaEcho`,!0)}}endWave(e,t){if(this.mods.has(`peal`)&&!t.echo&&t.kills>=eu&&t.peals<tu){t.peals++,t.pealMult*=nu,t.kills=0,t.struck.clear(),t.stood=!1,t.radius=su,t.inbound=0,I.play(`nova`);return}t.stop()}actions={wave:(e,t)=>this.ripple(e,t.x,t.y,t.share,t.reach,t.credit)};ripple(e,t,n,r,i,a){this.launch(e,t,n,r,i,a,!1)}launch(e,t,n,r,i,a,o){if(this.surges.length>=au)return;let s=this.spare.pop()??new cu(!1);s.start(t,n,Math.atan2(e.aimY,e.aimX)),s.share=r,s.reach=i,s.credit=a,s.echo=o,this.surges.push(s),this.rippleBurst(e,t,n,i,this.reach(e)*i)}rippleBurst(t,n,r,i,a){let o=this.visual;t.sparks.emit({x:n,y:r,ring:3,radial:!0,arc:.3,count:Math.round(Ll*i),speed:[a*1.2,a*3.2],life:[.22,.45],size:[1.8*o,3.2*o],endSize:.25,color:e.meta.core,to:e.meta.color,drag:3,core:.9,kind:`streak`,stretch:.035}),t.sparks.emit({x:n,y:r,disc:4,count:6+Math.round(40*i),speed:[0,40],life:[.12,.24],size:[5*o,9*o],endSize:.3,color:e.meta.core,to:e.meta.color,drag:5,core:1})}inCone(e,t,n){let r=Math.atan2(e.enemies.y[n]-t.y,e.enemies.x[n]-t.x)-t.aim;return r-=Math.PI*2*Math.floor((r+Math.PI)/(Math.PI*2)),Math.abs(r)<=Bl}dimmed(e,t){return this.dim.setHex(e).multiplyScalar(Math.max(0,t)).getHex()}dispose(){}};function fu(e,t){return e<t?`${e}_${t}`:`${t}_${e}`}function pu(e,t){return`synergy:${fu(e,t)}`}var mu=class{def;weapon;credit;paceDamage=1;timer=0;turn=0;constructor(e,t,n){this.def=e,this.weapon=t,this.credit=n}get cadence(){return this.def.cadence}barrels(e){let t=this.def.barrels??e;return Math.max(1,Math.min(t,e))}next(e){let t=this.turn%Math.max(1,e);return this.turn=(t+1)%Math.max(1,e),t}share(e){let t=this.def.split??`none`;return t===`barrels`?this.def.share/this.barrels(e):t===`carriers`?this.def.share/Math.max(1,e):this.def.share}volley(e,t){if(this.def.cadence===`stream`)return t;let n=this.weapon.actions?.pace?.(e)??gu;if(this.paceDamage=n.damage,this.timer-=e.dt,this.timer>0)return 0;let r=this.barrels(t),i=n.interval/r,a=0;for(;a<r&&this.timer<=0;)this.timer+=i,a++;return this.timer<0&&(this.timer=0),a}},hu=class{def;actor;credit;cool=0;seen=0;constructor(e,t,n){this.def=e,this.actor=t,this.credit=n}ready(){let e=this.def.count??1;return this.seen+1<e?(this.seen++,!1):this.cool>0?!1:this.def.chance===void 0||Math.random()<=this.def.chance}spend(){this.seen=0,this.cool=this.def.every??0}tick(e){this.cool>0&&(this.cool=Math.max(0,this.cool-e))}},gu={interval:0,damage:1},_u=[],vu={fire:1,impact:2,hit:4,kill:8,time:16},yu=2,bu=160,xu=class{owner;reactions=[];timed=[];carries=new Map;shot={x:0,y:0,dirX:1,dirY:0,share:1,credit:``,source:`nova`};wave={x:0,y:0,share:1,reach:1,credit:``,source:`nova`};mark={enemy:-1,x:0,y:0,share:1,credit:``,source:`nova`};heard=new Map;depth=0;aimX=1;aimY=0;constructor(e){this.owner=e}rebuild(e,t){this.reactions.length=0,this.timed.length=0,this.carries.clear(),this.heard.clear();let n=new Map;for(let t of e)n.set(t.id,t);for(let e of t){for(let t of e.carry??[]){let e=n.get(t.use);if(!n.has(t.by)||!e?.actions?.fire)continue;let r=this.carries.get(t.by)??[];r.push(new mu(t,e,pu(t.by,t.use))),this.carries.set(t.by,r)}for(let t of e.react??[]){let e=n.get(t.by);if(!e||!n.has(t.from))continue;if(t.act!==`buff`){if(!e.actions||t.act===`wave`&&!e.actions.wave||t.act===`mark`&&!e.actions.mark||t.act===`fire`&&!e.actions.fire)continue}else if(!t.buff)continue;let r=new hu(t,e,pu(t.from,t.by));if(t.event===`time`){this.timed.push(r);continue}this.reactions.push(r);let i=this.heard.get(t.from)??0;this.heard.set(t.from,i|vu[t.event])}}}update(e,t){for(let e of this.reactions)e.tick(t);for(let n of this.timed)n.tick(t),n.ready()&&(n.spend(),this.dispatch(e,n,e.originX,e.originY,-1,0,0))}hears(e,t){let n=this.heard.get(e);return n!==void 0&&(n&vu[t])!==0}react(e,t,n,r,i,a=-1,o=0,s=0){if(!this.hears(t,n)||this.depth>=yu)return!1;this.depth++;let c=!1;for(let l of this.reactions){let u=l.def;u.from===t&&u.event===n&&l.ready()&&this.dispatch(e,l,r,i,a,o,s)&&(c=!0)}return this.depth--,c}dispatch(e,t,n,r,i,a,o){let s=t.def,c=-1;if(s.act===`mark`&&(c=this.target(e,i,n,r,s.range??bu,!1),c<0))return!1;if(t.spend(),this.owner?.enter(s.by),s.act===`buff`)s.buff&&e.buffs.grant(s.buff,s.stacks);else if(s.act===`wave`){let i=this.wave;i.x=n,i.y=r,i.share=s.share??1,i.reach=s.reach??1,i.credit=t.credit,i.source=s.by,t.actor.actions?.wave?.(e,i)}else if(s.act===`mark`){let i=this.mark;i.enemy=c,i.x=n,i.y=r,i.share=s.share??1,i.credit=t.credit,i.source=s.by,t.actor.actions?.mark?.(e,i)}else if(this.aim(e,s,n,r,i,a,o),s.aim===`across`){let i=-this.aimY,a=this.aimX;this.fire(e,t,n,r,i,a),this.fire(e,t,n,r,-i,-a)}else this.fire(e,t,n,r,this.aimX,this.aimY);return this.owner?.leave(),!0}fire(e,t,n,r,i,a){let o=this.shot;o.x=n,o.y=r,o.dirX=i,o.dirY=a,o.fromDirX=void 0,o.fromDirY=void 0,o.share=t.def.share??1,o.credit=t.credit,o.source=t.def.by,o.slot=0,t.actor.actions?.fire?.(e,o)}aim(e,t,n,r,i,a,o){let s=t.aim??`event`;if(s===`nearest`){let a=this.target(e,-1,n,r,t.range??bu,!0,i);if(a>=0){this.point(e.enemies.x[a]-n,e.enemies.y[a]-r);return}}if((s===`event`||s===`across`)&&(a!==0||o!==0)){this.point(a,o);return}this.point(n-e.originX,r-e.originY)}point(e,t){let n=Math.hypot(e,t);this.aimX=n>0?e/n:1,this.aimY=n>0?t/n:0}target(e,t,n,r,i,a,o=-1){if(!a&&t>=0&&e.enemies.alive[t]===1)return t;let s=-1,c=1/0;return e.enemies.queryCircle(n,r,i,(n,r)=>{n===o||n===t||r>=c||e.enemies.alive[n]===1&&(c=r,s=n)}),s}carried(e){return this.carries.get(e)??_u}shoot(e,t,n,r,i,a,o,s,c,l=0){let u=this.shot;u.x=r,u.y=i,u.dirX=a,u.dirY=o,u.fromDirX=s,u.fromDirY=c,u.share=t.share(n)*t.paceDamage,u.credit=t.credit,u.source=t.def.by,u.slot=l,this.owner?.enter(t.weapon.id),t.weapon.actions?.fire?.(e,u),this.owner?.leave()}clear(){this.reactions.length=0,this.timed.length=0,this.carries.clear(),this.heard.clear()}},Su=300,Cu={bolts:16765514,beam:16774870,orbs:11562239,breath:16753980,lance:16765562},wu={orbit:.7,spin:1.4,ring:1.3,body:1},Tu={orbit:1.35,spin:.85,ring:1,body:1.3},Eu=430,Du=pu(`chain`,`orbiters`),Ou=.9,ku=.32,Au=2,ju=320,Mu=150,Nu=56,Pu=3,Fu=5,Iu=.35,Lu=1.4,Ru=190,zu=.18,Bu=.32,Vu=2.5,Hu=21,Uu=3,Wu=2.6,Gu=1.4,Ku=.25,qu=2,Ju=150;function Yu(e){let t=e%Wu,n=2.35;if(t<Gu)return 1;if(t<1.65){let e=(t-Gu)/Ku;return 1-e*e*(3-2*e)}if(t<n)return 0;let r=(t-n)/Ku;return r*r*(3-2*r)}var Xu=2.4,Zu=210,Qu=90,$u=.25,ed=1.6,td=1.3,nd=34,rd=190,id=.45,ad=2,od=220,sd=2.5,cd=.75,ld=210,ud=6,dd=13676799,fd={kind:`outline`,shape:bt(4,.15)},pd=Math.PI*2,md=1.2,hd=700,gd=.3,_d=.75,vd=1.5,yd=8,bd=40,xd=.9,Sd=.4,Cd=.08,wd=.6,Td=.25,Ed=.55,Dd=.15,Od=1.1,kd=.2,Ad=1.2,jd=6,Md=.2,Nd=40,Pd=.35,Fd=50,Id=2.5,Ld=1.35,Rd=.6,zd=2,Bd=120,Vd=16,Hd=6,Ud=22,Wd=10,Gd=20,Kd=10,qd=16,Jd=70,Yd=30,Xd=60,Zd=45,Qd=.45,$d=.4,ef=5,tf=4,nf=12,rf=7,af=Math.PI*.72;function of(e,t,n){let r=e[t]+n;if(!(r>0))return e[t]=0,0;let i=Math.floor(r);return e[t]=r-i,i}function sf(e,t,n){return e<t?t:e>n?n:e}function cf(e,t,n,r){return e*r*(1-t+t*n*r*.5)}function lf(e,t,n,r){let i=e*t*n*.5,a=e*(1-t);return 2*r/(a+Math.sqrt(a*a+4*i*r))}var uf=class e{static meta={id:`orbiters`,kind:`passive`,color:9431295,core:15137791,base:{damage:ju,rate:1/Iu,area:Nu,count:Pu,critChance:5,critDamage:150},scales:{attackSpeed:1.5,damage:1,critChance:.5,critDamage:.5,area:0,projectileSpeed:1}};id=e.meta.id;object=new M;sprites;texture;capacity=10;x;y;cooldown;radius;ringOf;ringPlace;ringSize;ringNext;ringRadius=new Float32Array(Au);rings=1;orbit={orbit:1,spin:1,ring:1,body:1};count=Pu;baseRadius=Nu;hitRadius=13;damage=ju;ringDps=Mu;ringThickness=13;spin=1.9;phase=0;phaseStep=0;arcTimer=0;carries=[];aimX=1;aimY=0;mods={chained:!1,lunge:!1,stall:!1,hook:!1,ram:!1,recoil:!1,leash:!1};tint=new N(e.meta.color);bonus=new F;glowScale=1;breath=0;centerX=0;centerY=0;centered=!1;lungeTimer=0;lungeIndex=-1;lungeAge=0;lungeTargetX=0;lungeTargetY=0;lungeCursor=0;lungeStruck=!1;stallHeld=new Uint8Array(Au);stallWasHeld=new Uint8Array(Au);stallInward=new Uint8Array(Au);hookOf;hookStamp;hookTime;hookBack;hookX;hookY;lastShare=1;recoilAge=-1;recoilCooldown=0;recoilFired=!1;lastX;lastY;lastRadius;tracked;ringCharged=new Uint8Array(Au);tailCarry;dustCarry;peelCarry;tetherCarry;smoulderCarry;leashCarry=0;tintHex=e.meta.color;orbitPoint={x:0,y:0};tailSpin=[0,0];tailDrift=[0,0];tailLife=[0,0];tailOrbit={around:`wisp`,spin:this.tailSpin,drift:this.tailDrift};dustSpin=[0,0];dustDrift=[0,0];dustLife=[0,0];dustOrbit={around:`wisp`,spin:this.dustSpin,drift:this.dustDrift};peelSpeed=[0,0];tailSpec={x:0,y:0,line:{x:0,y:0},orbit:this.tailOrbit,life:this.tailLife,size:[2,3.6],endSize:.2,color:e.meta.color,to:e.meta.color,drag:vd,curl:3,core:.55};dustSpec={x:0,y:0,line:{x:0,y:0},orbit:this.dustOrbit,life:this.dustLife,size:[1.4,2.2],endSize:.5,color:e.meta.color,to:e.meta.core,drag:Ad,curl:5,intensity:.6,core:.3,twinkle:.7,kind:`pixel`};peelSpec={x:0,y:0,disc:2,arc:.45,speed:this.peelSpeed,life:[.14,.3],size:[1.3,2.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.85,kind:`streak`,stretch:.03};wakeSpec={x:0,y:0,line:{x:0,y:0},speed:[0,12],life:[.18,.38],size:[1.8,3.2],endSize:.2,color:e.meta.color,to:e.meta.color,drag:2.5,curl:4,core:.6};snapSpec={x:0,y:0,count:Vd,disc:3,arc:.7,speed:[70,210],life:[.14,.32],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.5,core:.85,kind:`streak`,stretch:.028};snapGlowSpec={x:0,y:0,count:Hd,disc:4,arc:1.4,speed:[20,80],life:[.25,.45],size:[2.4,3.8],endSize:.25,color:e.meta.color,to:e.meta.core,drag:3,core:.6};recoilSpec={x:0,y:0,count:Ud,disc:4,arc:.8,speed:[180,420],life:[.15,.4],size:[1.6,3],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.2,core:.9,kind:`streak`,stretch:.03};recoilGlowSpec={x:0,y:0,count:Wd,disc:6,arc:1.3,speed:[40,140],life:[.35,.7],size:[2.2,3.6],endSize:.3,color:e.meta.color,to:e.meta.color,drag:2.2,curl:10,core:.5,twinkle:.3};strikeSpec={x:0,y:0,count:Gd,arc:1.6,speed:[90,260],life:[.12,.3],size:[1.5,2.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03};strikeGlowSpec={x:0,y:0,count:Kd,disc:4,speed:[10,60],life:[.25,.45],size:[2.4,4],endSize:.25,color:e.meta.color,to:e.meta.core,drag:3,core:.6};pushSpec={x:0,y:0,count:qd,arc:.7,speed:[140,320],life:[.12,.28],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03};ramSpec={x:0,y:0,count:Jd,ring:nd*.25,radial:!0,arc:.5,speed:[95,150],life:[.22,.34],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.85,kind:`streak`,stretch:.028};ramDustSpec={x:0,y:0,count:Yd,disc:nd*.7,speed:[20,80],life:[.3,.6],size:[2.2,3.8],endSize:.3,color:e.meta.color,to:e.meta.core,drag:2.4,curl:8,core:.4,twinkle:.3};tetherSpec={x:0,y:0,line:{x:0,y:0},arc:.35,speed:[40,120],life:[.2,.4],size:[1.4,2.4],endSize:.3,color:e.meta.core,to:e.meta.color,drag:2.5,core:.7,kind:`streak`,stretch:.025};smoulderSpec={x:0,y:0,disc:7,speed:[6,30],gravity:-30,life:[.3,.55],size:[1.8,3],endSize:.3,color:e.meta.color,to:e.meta.core,drag:2,core:.5,twinkle:.4};crackleSpec={x:0,y:0,line:{x:0,y:0},count:ef,speed:[0,20],normal:[20,90],life:[.1,.24],size:[1.2,2.2],endSize:.2,color:dd,to:e.meta.core,drag:4,core:.8,kind:`streak`,stretch:.03};zapSpec={x:0,y:0,count:tf,speed:[40,140],life:[.1,.22],size:[1.2,2],endSize:.2,color:dd,to:e.meta.core,drag:4.5,core:.9,kind:`streak`,stretch:.03};muzzleSpec={x:0,y:0,count:nf,arc:.6,speed:[120,300],life:[.08,.2],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:5,core:.9,kind:`streak`,stretch:.03};muzzleGlowSpec={x:0,y:0,count:rf,disc:3,speed:[10,50],life:[.15,.3],size:[2.4,3.8],endSize:.25,color:e.meta.color,to:e.meta.core,drag:3,core:.7};leashSpec={x:0,y:0,line:{x:0,y:0},arc:.4,speed:[20,60],life:[.3,.6],size:[1.4,2.4],endSize:.3,color:e.meta.core,to:e.meta.color,drag:2,core:.5,twinkle:.4};constructor(){this.texture=Te(32,2.1),this.sprites=new mr({capacity:this.capacity,texture:this.texture,additive:!0,gain:R,renderOrder:26}),this.object.add(this.sprites.points),this.x=new Float32Array(this.capacity),this.y=new Float32Array(this.capacity),this.cooldown=new Float32Array(this.capacity),this.radius=new Float32Array(this.capacity),this.ringOf=new Uint8Array(this.capacity),this.ringPlace=new Int32Array(this.capacity),this.ringSize=new Int32Array(this.capacity),this.ringNext=new Int32Array(this.capacity),this.hookOf=new Int32Array(this.capacity),this.hookStamp=new Float32Array(this.capacity),this.hookTime=new Float32Array(this.capacity),this.hookBack=new Float32Array(this.capacity),this.hookX=new Float32Array(this.capacity),this.hookY=new Float32Array(this.capacity),this.hookOf.fill(-1),this.lastX=new Float32Array(this.capacity),this.lastY=new Float32Array(this.capacity),this.lastRadius=new Float32Array(this.capacity),this.tracked=new Uint8Array(this.capacity),this.tailCarry=new Float32Array(this.capacity),this.dustCarry=new Float32Array(this.capacity),this.peelCarry=new Float32Array(this.capacity),this.tetherCarry=new Float32Array(this.capacity),this.smoulderCarry=new Float32Array(this.capacity),this.layoutRings(),this.applyTint()}configure(e){this.bonus=e,this.mods={chained:e.has(`chained`),lunge:e.has(`lunge`),stall:e.has(`stall`),hook:e.has(`hook`),ram:e.has(`ram`),recoil:e.has(`ringRecoil`),leash:e.has(`leash`)},this.orbit=e.has(`tight`)?wu:e.has(`wide`)?Tu:{orbit:1,spin:1,ring:1,body:1},this.rings=Math.max(1,Math.min(Au,1+e.layers));let t=Math.max(1,Math.min(Fu,Pu+e.count));this.count=Math.min(this.capacity,t*this.rings),this.layoutRings();for(let e=this.count;e<this.capacity;e++)this.sprites.hide(e);this.lungeIndex=-1,this.hookOf.fill(-1),this.tracked.fill(0),this.applyTint()}layoutRings(){for(let e=0;e<this.rings;e++){let t=0;for(let n=e;n<this.count;n+=this.rings)t++;let n=0,r=-1,i=-1;for(let a=e;a<this.count;a+=this.rings)this.ringOf[a]=e,this.ringPlace[a]=n++,this.ringSize[a]=t,this.ringNext[a]=a,r<0&&(r=a),i>=0&&(this.ringNext[i]=a),i=a;i>=0&&r>=0&&(this.ringNext[i]=r)}}applyPrismColors(){}applyTint(){this.applyPrismColors();let t=new N(e.meta.color),n=0,r=(e,r)=>{t.lerp(new N(e),r),n++};this.mods.chained&&r(12160255,.35);for(let e of this.carries){let t=Cu[e.def.use];t!==void 0&&r(t,.3)}this.tint=t,this.tintHex=t.getHex(),this.tailSpec.color=this.tintHex,this.wakeSpec.color=this.tintHex,this.peelSpec.to=this.tintHex,this.strikeSpec.to=this.tintHex,this.tetherSpec.to=this.tintHex,this.muzzleSpec.to=this.tintHex,this.snapSpec.to=this.tintHex,this.recoilSpec.to=this.tintHex,this.recoilGlowSpec.color=this.tintHex,this.glowScale=1+n*.2+(this.bonus.weight-n)*.08;for(let e=0;e<this.capacity;e++)this.sprites.setColor(e,this.tint)}update(t){let n=t.synergy.carried(`orbiters`);n!==this.carries&&(this.carries=n,this.applyTint()),this.updateCenter(t),this.updateRecoil(t);let r=this.baseRadius*this.bonus.size*this.orbit.orbit,i=this.hitRadius;this.phaseStep=t.dt*this.spin*this.orbit.spin*U(e.meta,t.stats,`attackSpeed`)*this.bonus.rate,this.phase+=this.phaseStep,this.breath+=t.dt*Ou,this.arcTimer-=t.dt;let a=this.rings,o=this.ringThickness,s=(1+(a-1)*.35)/a,c=this.ringDps*this.bonus.damage*this.orbit.ring*s*t.dt,l=this.recoilAge>=0?1+.6000000000000001*Math.sin(Math.PI*Math.min(1,this.recoilAge/id)):1;for(let e=0;e<a;e++){let n;if(this.mods.stall){let t=this.breath/Ou+e/a*Wu,r=t%Wu;n=Yu(t);let i=r>=Gu&&r<1.65;this.stallInward[e]=+!!i,this.stallHeld[e]=i||r>=2.35?0:1}else n=(1-Math.cos(this.breath+e/a*Math.PI*2))/2;let i=r*(ku+.6799999999999999*n)*l;this.ringRadius[e]=i;let s=this.mods.stall&&this.stallHeld[e]===1,u=s&&n>.5?c*qu:c;if(this.ringCharged[e]=s&&n>.5?1:0,t.enemies.queryCircle(this.centerX,this.centerY,i+o,(e,n)=>{Math.abs(n-i)>o||t.hit(e,u,!0)}),this.mods.stall&&this.stallWasHeld[e]===1&&this.stallHeld[e]===0){for(let t=0;t<this.count;t++)this.ringOf[t]===e&&(this.cooldown[t]=0);this.snapSparks(t,e)}this.stallWasHeld[e]=this.stallHeld[e]}let u=Gr(Iu,U(e.meta,t.stats,`attackSpeed`));this.mods.lunge&&this.updateLunge(t);let d=this.damage*this.bonus.damage*this.orbit.body*u.damage;for(let e=0;e<this.count;e++){let n=this.ringOf[e],r=this.ringRadius[n],a=(n%2==0?this.phase:-this.phase)+this.ringPlace[e]/Math.max(1,this.ringSize[e])*Math.PI*2+n*.6;this.radius[e]=r;let o=this.centerX+Math.cos(a)*r,s=this.centerY+Math.sin(a)*r;this.cooldown[e]>0&&(this.cooldown[e]-=t.dt);let c=this.mods.hook&&this.hookOf[e]>=0?this.updateHook(t,e):!1,l=this.mods.lunge&&this.lungeIndex===e;c||(l?this.placeLunge(e,o,s):this.hookBack[e]>0?this.placeReturn(t.dt,e,o,s):(this.x[e]=o,this.y[e]=s));let f=c||l||this.hookBack[e]>0?Math.atan2(this.y[e]-this.centerY,this.x[e]-this.centerX):a;if(l&&!c&&this.strikeLunge(t,e,d),!c&&!l&&this.cooldown[e]<=0){let r=-1;t.enemies.queryCircle(this.x[e],this.y[e],i,e=>{r<0&&(r=e)}),r>=0&&this.strikeBody(t,e,n,r,d,u.interval)}this.updateMods(t,e,f,n%2==0?1:-1);let p=11*this.glowScale+Math.sin(t.elapsed*6+e)*1.5;this.sprites.set(e,Math.round(this.x[e]),Math.round(this.y[e]),p,1)}this.mods.chained&&this.updateArcs(t),this.updateCarried(t),this.sprites.sync()}updateCenter(e){if(!this.mods.leash){this.centerX=e.originX,this.centerY=e.originY;return}let t=e.originX+(e.focusX-e.originX)*cd,n=e.originY+(e.focusY-e.originY)*cd,r=t-e.originX,i=n-e.originY,a=Math.hypot(r,i);if(a>ld&&(t=e.originX+r/a*ld,n=e.originY+i/a*ld),!this.centered){this.centerX=t,this.centerY=n,this.centered=!0;return}let o=Math.min(1,ud*e.dt);this.centerX+=(t-this.centerX)*o,this.centerY+=(n-this.centerY)*o,this.leashSparks(e)}updateRecoil(e){if(this.recoilCooldown-=e.dt,this.mods.recoil&&e.healthShare<this.lastShare-1e-4&&this.recoilCooldown<=0&&(this.recoilAge=0,this.recoilCooldown=sd,this.recoilFired=!1,e.shock.ring(this.centerX,this.centerY,this.ringRadius[0],.4,14,1),this.recoilSparks(e)),this.lastShare=e.healthShare,!(this.recoilAge<0)){if(!this.recoilFired){this.recoilFired=!0;for(let e=0;e<this.count;e++)this.cooldown[e]=0}this.recoilAge+=e.dt,this.recoilAge>=id&&(this.recoilAge=-1)}}updateLunge(t){if(this.lungeIndex>=0){this.lungeAge+=t.dt,this.lungeAge>=.5&&(this.lungeIndex=-1);return}if(this.lungeTimer-=t.dt*U(e.meta,t.stats,`attackSpeed`),this.lungeTimer>0)return;let n=-1,r=1/0;if(t.enemies.queryCircle(this.centerX,this.centerY,Ru,(e,t)=>{t>=r||(r=t,n=e)}),n<0){this.lungeTimer=0;return}this.lungeTargetX=t.enemies.x[n],this.lungeTargetY=t.enemies.y[n],this.lungeIndex=this.lungeCursor%this.count,this.lungeCursor=this.lungeIndex+1,this.lungeAge=0,this.lungeStruck=!1,this.lungeTimer=Lu,this.lungeSparks(t,this.lungeIndex)}placeLunge(e,t,n){if(this.lungeAge<zu){let r=this.lungeAge/zu,i=1-(1-r)*(1-r);this.x[e]=t+(this.lungeTargetX-t)*i,this.y[e]=n+(this.lungeTargetY-n)*i;return}let r=Math.min(1,(this.lungeAge-zu)/Bu);this.x[e]=this.lungeTargetX+(t-this.lungeTargetX)*r,this.y[e]=this.lungeTargetY+(n-this.lungeTargetY)*r}placeReturn(e,t,n,r){this.hookBack[t]-=e;let i=1-Math.max(0,this.hookBack[t])/$u;this.x[t]=this.hookX[t]+(n-this.hookX[t])*i,this.y[t]=this.hookY[t]+(r-this.hookY[t])*i}strikeLunge(e,t,n){if(this.lungeStruck||this.lungeAge<zu)return;this.lungeStruck=!0;let r=this.x[t],i=this.y[t],a=0;e.enemies.queryCircle(r,i,Hu,t=>{a>=Uu||(a++,e.hit(t,n*Vu,!1,`orbitersLunge`))}),e.impacts.pop(r,i,.35),this.impactSparks(e,r,i)}updateHook(t,n){let r=this.hookOf[n];if(this.hookTime[n]-=t.dt,!t.enemies.alive[r]||t.enemies.stamp[r]!==this.hookStamp[n]||this.hookTime[n]<=0)return this.hookX[n]=this.x[n],this.hookY[n]=this.y[n],this.hookOf[n]=-1,this.hookBack[n]=$u,this.unhookSparks(t,n),!1;this.x[n]=t.enemies.x[r],this.y[n]=t.enemies.y[r];let i=Zu*this.bonus.damage*U(e.meta,t.stats,`attackSpeed`);return t.hit(r,i*t.dt,!0,`orbitersHook`),t.enemies.pull(r,this.centerX,this.centerY,Qu,t.dt),this.hookSparks(t,n),!0}strikeBody(e,t,n,r,i,a){let o=this.x[t],s=this.y[t],c=this.mods.recoil&&this.recoilAge>=0,l=i,u;if(c&&(l*=ad,u=`orbitersRecoil`),this.mods.ram&&(l*=td,u=`orbitersRam`),this.mods.ram?(e.enemies.queryCircle(o,s,nd,t=>{e.hit(t,l,!1,u),e.enemies.knockback(t,this.centerX,this.centerY,rd)}),e.impacts.pop(o,s,.5),e.shock.ring(o,s,nd,.35,10,1),this.ramSparks(e,o,s)):(e.hit(r,l,!1,u),c&&e.enemies.knockback(r,this.centerX,this.centerY,od)),this.strikeSparks(e,t,o,s,c),this.cooldown[t]=this.mods.ram?a*ed:a,this.mods.stall&&this.stallHeld[n]===0){let t=this.stallInward[n]===1?-150:Ju;e.enemies.knockback(r,this.centerX,this.centerY,t)}this.mods.hook&&this.hookOf[t]<0&&(this.hookOf[t]=r,this.hookStamp[t]=e.enemies.stamp[r],this.hookTime[t]=Xu,this.latchSparks(e,r))}updateMods(e,t,n,r){let i=this.x[t],a=this.y[t];this.tail(e,t,n,r);let o=n-r*this.phaseStep;for(let r of this.carries)r.cadence===`stream`&&e.synergy.shoot(e,r,this.count,i,a,Math.cos(n),Math.sin(n),Math.cos(o),Math.sin(o),t)}aimFrom(e,t,n){let r=this.x[n],i=this.y[n];if(t.def.aim===`nearest`){let n=-1,a=1/0;if(e.enemies.queryCircle(r,i,t.def.aimRange??Su,(e,t)=>{t>=a||(a=t,n=e)}),n>=0){let t=e.enemies.x[n]-r,a=e.enemies.y[n]-i,o=Math.hypot(t,a)||1;this.aimX=t/o,this.aimY=a/o;return}}let a=r-this.centerX,o=i-this.centerY,s=Math.hypot(a,o)||1;this.aimX=a/s,this.aimY=o/s}updateCarried(e){if(!(this.count<=0))for(let t of this.carries){if(t.cadence!==`paced`)continue;let n=t.volley(e,this.count);for(let r=0;r<n;r++){let n=t.next(this.count);this.aimFrom(e,t,n);let r=this.aimX,i=this.aimY;e.synergy.shoot(e,t,this.count,this.x[n],this.y[n],r,i),this.muzzle(e,n,r,i)}}}updateArcs(t){let n=Eu*this.bonus.damage*U(e.meta,t.stats,`attackSpeed`)*t.dt,r=this.arcTimer<=0;for(let e=0;e<this.count;e++){let i=this.ringNext[e];i!==e&&t.enemies.querySegment(this.x[e],this.y[e],this.x[i],this.y[i],6,e=>{t.hit(e,n,!0,Du),r&&this.zap(t,e)})}if(!(this.arcTimer>0)){this.arcTimer=.05;for(let e=0;e<this.count;e++){let n=this.ringNext[e];n!==e&&(t.arcs.strike(this.x[e],this.y[e],this.x[n],this.y[n],{color:dd,nodes:4,jitter:7,life:.11,weight:2}),this.crackle(t,e,n))}}}tail(e,t,n,r){let i=this.x[t],a=this.y[t],o=this.lastX[t],s=this.lastY[t],c=this.lastRadius[t],l=this.tracked[t]===1;this.lastX[t]=i,this.lastY[t]=a,this.lastRadius[t]=this.radius[t],this.tracked[t]=1;let u=Math.hypot(i-o,a-s);if(!l||u>Bd||!(e.dt>0))return;let d=this.mods.lunge&&this.lungeIndex===t,f=this.mods.hook&&this.hookOf[t]>=0;if(d||f||this.hookBack[t]>0){let n=d&&this.lungeAge<zu?zd:1,r=of(this.tailCarry,t,u*Rd*n);if(r===0)return;let c=this.wakeSpec;c.x=o,c.y=s,c.line.x=i,c.line.y=a,c.count=r,e.sparks.emit(c);return}let p=this.phaseStep/e.dt,m=r*p,h=sf((this.radius[t]-c)/e.dt,-40,bd),g=pd/Math.max(1,this.ringSize[t]),_=this.ringCharged[this.ringOf[t]]===1,v=`wisp`;this.mods.leash&&(this.orbitPoint.x=this.centerX,this.orbitPoint.y=this.centerY,v=this.orbitPoint);let y=sf(lf(p,.525,vd,Math.min(xd,g*Sd)),Cd,wd),b=of(this.tailCarry,t,Math.min(u*md,hd*e.dt));if(b>0){this.tailSpin[0]=m*gd,this.tailSpin[1]=m*_d,this.tailDrift[0]=h*gd-yd,this.tailDrift[1]=h*_d+yd,this.tailLife[0]=y*.75,this.tailLife[1]=y*1.1,this.tailOrbit.around=v;let t=this.tailSpec;t.x=o,t.y=s,t.line.x=i,t.line.y=a,t.count=b,t.intensity=_?Ld:1,e.sparks.emit(t)}let x=g*Ed,S=sf(lf(p,kd,Ad,x),Dd,Od),C=Math.min(1,x/Math.max(cf(p,kd,Ad,S),.001)),w=of(this.dustCarry,t,u*Td*C);if(w>0){this.dustSpin[0]=m*kd*.5,this.dustSpin[1]=m*kd*1.5,this.dustDrift[0]=h*kd-jd,this.dustDrift[1]=h*kd+jd,this.dustLife[0]=S*.6,this.dustLife[1]=S,this.dustOrbit.around=v;let t=this.dustSpec;t.x=o,t.y=s,t.line.x=i,t.line.y=a,t.count=w,e.sparks.emit(t)}let T=_?Id:1,E=Math.min(u*Md,Nd*e.dt)*T,ee=of(this.peelCarry,t,E);if(ee>0){let o=Math.max(Fd,p*this.radius[t]);this.peelSpeed[0]=o*.55,this.peelSpeed[1]=o*1.1;let s=this.peelSpec;s.x=i,s.y=a,s.angle=n+r*(Math.PI/2-Pd),s.count=ee,e.sparks.emit(s)}}snapSparks(e,t){let n=this.stallInward[t]===1?Math.PI:0;for(let r=0;r<this.count;r++){if(this.ringOf[r]!==t)continue;let i=this.x[r],a=this.y[r],o=Math.atan2(a-this.centerY,i-this.centerX)+n,s=this.snapSpec;s.x=i,s.y=a,s.angle=o,e.sparks.emit(s);let c=this.snapGlowSpec;c.x=i,c.y=a,c.angle=o,e.sparks.emit(c)}}leashSparks(e){let t=this.centerX-e.originX,n=this.centerY-e.originY;this.leashCarry+=$d*Math.hypot(t,n)*e.dt;let r=Math.floor(this.leashCarry);if(this.leashCarry-=r,r===0)return;let i=this.leashSpec;i.x=e.originX,i.y=e.originY,i.line.x=this.centerX,i.line.y=this.centerY,i.angle=Math.atan2(n,t),i.count=r,e.sparks.emit(i)}recoilSparks(e){for(let t=0;t<this.count;t++){let n=this.x[t],r=this.y[t],i=Math.atan2(r-this.centerY,n-this.centerX),a=this.recoilSpec;a.x=n,a.y=r,a.angle=i,e.sparks.emit(a);let o=this.recoilGlowSpec;o.x=n,o.y=r,o.angle=i,e.sparks.emit(o)}}lungeSparks(t,n){let r=this.x[n],i=this.y[n],a=this.lungeTargetX,o=this.lungeTargetY;t.sparks.emit({x:r,y:i,line:{x:a,y:o},count:Math.min(60,10+Math.round(Math.hypot(a-r,o-i)*.25)),speed:[0,16],normal:[4,22],delayAlong:zu*.8,life:[.14,.3],size:[1.4,2.4],endSize:.3,color:e.meta.core,to:this.tintHex,drag:3,core:.7}),t.sparks.emit({x:r,y:i,count:14,angle:Math.atan2(i-o,r-a),arc:.9,speed:[70,190],life:[.1,.24],size:[1.4,2.2],endSize:.2,color:e.meta.core,to:this.tintHex,drag:4.5,core:.9,kind:`streak`,stretch:.03})}impactSparks(t,n,r){t.sparks.emit({x:n,y:r,count:32,shape:{layout:fd,radius:Hu*.4,angle:Math.random()*Math.PI},radial:!0,speed:[60,150],life:[.14,.3],size:[2,3.2],endSize:.2,color:e.meta.core,to:this.tintHex,drag:4,core:.9}),t.sparks.emit({x:n,y:r,count:50,ring:5,radial:!0,arc:.6,speed:[140,340],life:[.12,.28],size:[1.5,2.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:r,count:26,disc:Hu*.6,speed:[10,60],life:[.3,.6],size:[2.2,3.6],endSize:.3,color:this.tintHex,to:e.meta.color,drag:2.4,curl:6,core:.5,twinkle:.3})}strikeSparks(e,t,n,r,i){let a=n-this.lastX[t],o=r-this.lastY[t],s=Math.atan2(r-this.centerY,n-this.centerX),c=this.strikeSpec;c.x=n,c.y=r,c.angle=Math.abs(a)+Math.abs(o)>.001?Math.atan2(o,a):s,e.sparks.emit(c);let l=this.strikeGlowSpec;l.x=n,l.y=r,e.sparks.emit(l),i&&this.push(e,n,r,s)}ramSparks(e,t,n){let r=this.ramSpec;r.x=t,r.y=n,e.sparks.emit(r);let i=this.ramDustSpec;i.x=t,i.y=n,e.sparks.emit(i),this.push(e,t,n,Math.atan2(n-this.centerY,t-this.centerX))}push(e,t,n,r){let i=this.pushSpec;i.x=t,i.y=n,i.angle=r,e.sparks.emit(i)}latchSparks(t,n){t.sparks.emit({x:t.enemies.x[n],y:t.enemies.y[n],count:26,ring:18,radial:!0,turn:af,arc:.4,speed:[40,80],life:[.28,.42],size:[1.8,3],endSize:.3,color:e.meta.core,to:this.tintHex,drag:1.8,core:.8})}hookSparks(e,t){let n=this.x[t],r=this.y[t],i=of(this.tetherCarry,t,Xd*e.dt);if(i>0){let t=this.centerX-n,a=this.centerY-r,o=this.tetherSpec;o.x=n,o.y=r,o.line.x=n+t*Qd,o.line.y=r+a*Qd,o.angle=Math.atan2(a,t),o.count=i,e.sparks.emit(o)}let a=of(this.smoulderCarry,t,Zd*e.dt);if(a>0){let t=this.smoulderSpec;t.x=n,t.y=r,t.count=a,e.sparks.emit(t)}}unhookSparks(t,n){let r=this.x[n],i=this.y[n];t.sparks.emit({x:r,y:i,count:20,disc:5,speed:[30,110],life:[.2,.4],size:[1.8,3.2],endSize:.25,color:e.meta.core,to:this.tintHex,drag:3,core:.8}),t.sparks.emit({x:r,y:i,count:10,angle:Math.atan2(this.centerY-i,this.centerX-r),arc:.8,speed:[80,200],life:[.12,.26],size:[1.4,2.2],endSize:.2,color:e.meta.core,to:this.tintHex,drag:4,core:.9,kind:`streak`,stretch:.03})}zap(e,t){let n=this.zapSpec;n.x=e.enemies.x[t],n.y=e.enemies.y[t],e.sparks.emit(n)}crackle(e,t,n){let r=this.crackleSpec;r.x=this.x[t],r.y=this.y[t],r.line.x=this.x[n],r.line.y=this.y[n],e.sparks.emit(r)}muzzle(e,t,n,r){let i=this.x[t],a=this.y[t],o=this.muzzleSpec;o.x=i,o.y=a,o.angle=Math.atan2(r,n),e.sparks.emit(o);let s=this.muzzleGlowSpec;s.x=i,s.y=a,e.sparks.emit(s)}dispose(){this.sprites.dispose(),this.texture.dispose()}},df=.9,ff=2.2,pf=.35,mf=class{object=new M;material;geometry;quads=[];used=0;constructor(e,t=.45){this.material=new Ee({vertexShader:_n,fragmentShader:kn,transparent:!0,depthTest:!1,depthWrite:!1,blending:1,uniforms:{uTime:{value:0},uHole:{value:t},uTint:{value:new N(16777215)},uGain:{value:1},uCeiling:{value:df},uSwirl:{value:ff},uSpin:{value:pf}}}),this.geometry=new xe(1,1);for(let t=0;t<e;t++){let e=new pe(this.geometry,this.material);e.frustumCulled=!1,e.visible=!1,e.renderOrder=4,this.quads.push(e),this.object.add(e)}}setColors(e,t){this.material.uniforms.uTint.value.setHex(e),this.material.uniforms.uGain.value=t}begin(e){this.material.uniforms.uTime.value=e,this.used=0}well(e,t,n){if(this.used>=this.quads.length)return;let r=this.quads[this.used++],i=n/this.material.uniforms.uHole.value;r.position.set(e,t,0),r.scale.set(i*2,i*2,1),r.visible=!0}end(){for(let e=this.used;e<this.quads.length;e++)this.quads[e].visible=!1}dispose(){this.geometry.dispose(),this.material.dispose()}},q=4,hf=8076799,gf=12576511,_f=Math.PI*2,vf=520,yf=.4,bf=.4,xf=.57,Sf=.62,Cf=1.8,wf=300,Tf=1e3,Ef=300,Df=500,Of=80,kf=220,Af=200,jf=36,Mf=3.5,Nf=.8,Pf=.8,Ff=3500,If=500,Lf=420,Rf=1.5,zf=240,Bf=300,Vf=.55,Hf=22,Uf=1900,Wf=40,Gf=.42,Kf=pu(`nova`,`singularity`),qf=-1.6,Jf=.5,Yf=92,Xf=249,Zf=1.2,Qf=.6,$f=90,ep=40,tp=1.8,np=1.15,rp=2.2,ip=1.6,ap=9,op=2.5,sp=110,cp=.1,lp=5,up=.2,dp=4,fp=.2,pp=1.1,mp=1.35,hp=class{carry=0;take(e,t){this.carry+=Math.max(0,e)*t;let n=Math.floor(this.carry);return this.carry-=n,n}},gp=class e{static meta={id:`singularity`,kind:`active`,color:16727435,core:16765156,base:{damage:Xf/10,rate:10,area:Yf,critChance:2,critDamage:150},scales:{damage:1.5,area:1,attackSpeed:.5,critChance:.25,critDamage:.25}};id=e.meta.id;object=new M;holes=new mf(q);holeGain=R*.5;visual=1;pull=Yf;core=38;pullForce=620;implode=!1;greedy=!1;geyser=!1;geyserTimer=rp;roam=!1;settle=!1;digest=!1;stasis=!1;swirl=!1;roamX=new Float32Array(q);roamY=new Float32Array(q);roamed=new Uint8Array(q);settleX=new Float32Array(q);settleY=new Float32Array(q);settleTime=new Float32Array(q);settled=new Uint8Array(q);held=new Map;frame=0;pulse=null;lastWave=-1;implodePhase=-1;imploded=new Set;dps=Xf;tideShare=.3;sparkTimer=0;wellX=new Float32Array(q);wellY=new Float32Array(q);mods=new F;inflowFlow=new hp;accretionFlow=new hp;implodeFlow=new hp;implodeSwirlFlow=new hp;implodeDustFlow=new hp;trailFlow=new hp;rootFlow=new hp;flowShare=1;implodePace=0;implodeLive=!1;trailX=new Float32Array(q);trailY=new Float32Array(q);trailSeen=new Uint8Array(q);rootedSeen=new Uint8Array(q);scratch=new N;inflowSpeed=[0,0];accretionSpeed=[0,0];preySpeed=[0,0];implodeSpeed=[0,0];swirlSpeed=[0,0];dustSpeed=[0,0];inflowSpec={x:0,y:0,ring:0,radial:!0,turn:Math.PI+yf,arc:.12,speed:this.inflowSpeed,life:[.55,.75],size:0,endSize:.3,color:e.meta.color,to:hf,drag:bf,curl:4,core:.6,fade:1.6,kind:`streak`,stretch:.045};accretionSpec={x:0,y:0,ring:0,radial:!0,turn:-(Math.PI/2+.12),arc:.25,speed:this.accretionSpeed,life:[.25,.45],size:0,endSize:.3,color:e.meta.core,to:e.meta.color,drag:1,core:.9,kind:`streak`,stretch:.04};preySpec={x:0,y:0,count:2,arc:.4,speed:this.preySpeed,life:[.35,.55],size:0,endSize:.3,color:e.meta.color,to:hf,drag:.6,core:.6,fade:1.4,kind:`streak`,stretch:.04};grindSpec={x:0,y:0,count:5,arc:1.2,speed:[40,140],life:[.15,.3],size:0,endSize:.25,color:e.meta.core,to:e.meta.color,drag:3,core:.9,kind:`streak`,stretch:.035};frostSpec={x:0,y:0,count:4,disc:6,speed:[5,20],life:[.4,.7],size:0,endSize:.5,color:gf,to:e.meta.core,drag:2,core:.9,twinkle:.8,kind:`pixel`};implodeSpec={x:0,y:0,ring:0,radial:!0,turn:Math.PI,arc:.1,speed:this.implodeSpeed,life:[.1,.2],size:0,endSize:.4,color:e.meta.core,to:e.meta.color,drag:.2,core:.9,kind:`streak`,stretch:.04};implodeSwirlSpec={x:0,y:0,ring:0,radial:!0,turn:Math.PI+.3,arc:.3,speed:this.swirlSpeed,life:[.15,.28],size:0,endSize:.3,color:e.meta.color,to:hf,drag:1,core:.7,fade:1.5,kind:`streak`,stretch:.04};implodeDustSpec={x:0,y:0,ring:0,radial:!0,arc:1,speed:this.dustSpeed,life:[.25,.45],size:0,endSize:.4,color:e.meta.color,to:hf,drag:3,core:.3,twinkle:.3};trailSpec={x:0,y:0,disc:0,speed:[5,25],life:[.4,.8],size:0,endSize:.4,color:e.meta.color,to:hf,drag:1.5,core:.3,twinkle:.4};rootSpec={x:0,y:0,ring:0,radial:!0,turn:Math.PI,arc:.3,speed:[10,30],life:[.7,1.1],size:0,endSize:.4,color:e.meta.core,to:hf,drag:.6,core:.5,twinkle:.4};actions={wave:(e,t)=>this.gravityPop(e,t)};link(e){let t=e.get(`nova`);this.pulse=t instanceof du?t:null}configure(e){this.mods=e,this.implode=e.has(`implode`),this.greedy=e.has(`greedy`),this.geyser=e.has(`geyser`),this.roam=e.has(`roam`),this.settle=e.has(`settle`),this.digest=e.has(`digest`),this.stasis=e.has(`stasis`),this.swirl=e.has(`swirl`),this.applyColors()}applyColors(){this.holes.setColors(e.meta.color,this.holeGain*this.visual)}constructor(){this.applyColors(),this.resize(1),this.object.add(this.holes.object)}resize(e){this.inflowSpec.size=[2*e,3.4*e],this.accretionSpec.size=[1.8*e,3*e],this.preySpec.size=[1.6*e,2.8*e],this.grindSpec.size=[1.8*e,3*e],this.frostSpec.size=[1.6*e,2.6*e],this.implodeSpec.size=[2.2*e,3.4*e],this.implodeSwirlSpec.size=[1.6*e,2.6*e],this.implodeDustSpec.size=[2*e,3.5*e],this.trailSpec.size=[2*e,3.5*e],this.rootSpec.size=[2*e,3.5*e]}dimmed(e,t){return this.scratch.setHex(e).multiplyScalar(t).getHex()}update(t){I.loop(`singularity`),this.frame++;let n=U(e.meta,t.stats,`area`)*this.mods.size,r=W(this.pull,n,Ur(t)),i=W(this.core,n,r*Jf);this.holes.begin(t.elapsed);let a=this.mods.visualScale();a!==this.visual&&(this.visual=a,this.applyColors(),this.resize(a)),this.sparkTimer-=t.dt;let o=this.sparkTimer<=0;o&&(this.sparkTimer=.06);let s=Math.max(1,Math.min(q,1+this.mods.beams)),c=t.focusX-t.originX,l=t.focusY-t.originY,u=Math.atan2(l,c),d=Math.hypot(c,l),f=this.advanceImplode(t,i);this.flowShare=1/Math.sqrt(s);let p=f<0&&this.implodeLive;this.implodeLive=f>0,f>0&&this.pulse&&(this.implodePace=Math.max(0,this.pulse.reach(t)-i)/Vf);let m=(1+(s-1)*.3)/s,h=this.dps*this.mods.damage*U(e.meta,t.stats,`attackSpeed`)*m,g=h*t.dt,_=!1;this.geyser&&(this.geyserTimer-=t.dt,this.geyserTimer<=0&&(this.geyserTimer+=rp,_=!0));for(let e=0;e<s;e++){let n=u+e/s*Math.PI*2;this.wellX[e]=t.originX+Math.cos(n)*d,this.wellY[e]=t.originY+Math.sin(n)*d,this.roam&&this.roamTo(t,e,r);let a=this.settle?this.settleAt(t,e,r):1;t.lens.well(this.wellX[e],this.wellY[e],r),this.holes.well(this.wellX[e],this.wellY[e],i),this.wellSparks(t,e,r,i),p&&this.implodeLanding(t,this.wellX[e],this.wellY[e],i),f>0&&this.implodeAt(t,this.wellX[e],this.wellY[e],f),_&&this.eruptAt(t,this.wellX[e],this.wellY[e],r,h),this.pullAt(t,this.wellX[e],this.wellY[e],r,i,g*a,o,e>0?`wellConstellation`:void 0)}for(let e=s;e<q;e++)this.roamed[e]=0,this.settled[e]=0;for(let e=s;e<q;e++)this.trailSeen[e]=0,this.rootedSeen[e]=0;this.digest&&this.digestLost(t,r,h),this.holes.end()}roamTo(e,t,n){let r=this.wellX[t],i=this.wellY[t];if(this.roamed[t]===0){this.roamed[t]=1,this.roamX[t]=r,this.roamY[t]=i;return}let a=0,o=0,s=0;e.enemies.queryCircle(this.roamX[t],this.roamY[t],n*op,t=>{a+=e.enemies.x[t],o+=e.enemies.y[t],s++});let c=s>0?a/s:r,l=s>0?o/s:i,u=c-this.roamX[t],d=l-this.roamY[t],f=Math.hypot(u,d);if(f>.001){let n=Math.min(sp*e.dt,f);this.roamX[t]+=u/f*n,this.roamY[t]+=d/f*n}this.wellX[t]=this.roamX[t],this.wellY[t]=this.roamY[t]}settleAt(e,t,n){let r=this.wellX[t],i=this.wellY[t],a=Math.hypot(r-this.settleX[t],i-this.settleY[t]);return this.settled[t]===0||a>n?(this.settled[t]=1,this.settleX[t]=r,this.settleY[t]=i,this.settleTime[t]=0):this.settleTime[t]+=e.dt,this.wellX[t]=this.settleX[t],this.wellY[t]=this.settleY[t],1+Math.min(this.settleTime[t],lp)*cp}holdPrey(e,t){let n=e.enemies.stamp[t],r=this.held.get(n);if(r===void 0){this.held.set(n,{index:t,maxHp:e.enemies.maxHp[t],x:e.enemies.x[t],y:e.enemies.y[t],seen:this.frame});return}r.index=t,r.maxHp=e.enemies.maxHp[t],r.x=e.enemies.x[t],r.y=e.enemies.y[t],r.seen=this.frame}digestLost(e,t,n){for(let[r,i]of this.held){if(i.seen===this.frame||(this.held.delete(r),e.enemies.alive[i.index]!==0&&e.enemies.stamp[i.index]===r))continue;let a=Math.min(i.maxHp*up,n*dp);e.enemies.queryCircle(i.x,i.y,t,t=>e.hit(t,a,!1,`wellDigest`)),e.impacts.pop(i.x,i.y,.8),this.digestSparks(e,i.x,i.y,t)}}digestSparks(t,n,r,i){let a=this.visual;t.sparks.emit({x:n,y:r,count:kf,speed:[120,420],life:[.25,.5],size:[2.5*a,4*a],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,core:.9,kind:`streak`,stretch:.035}),t.sparks.emit({x:n,y:r,ring:6,radial:!0,arc:.2,count:Af,speed:[i*3.4,i*3.9],life:[.4,.55],size:[2.2*a,3.4*a],endSize:.3,color:e.meta.core,to:hf,drag:2.5,core:.8,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:r,disc:6,count:jf,speed:[0,60],life:[.2,.35],size:[7*a,12*a],endSize:.3,color:e.meta.core,to:hf,drag:4,core:1})}advanceImplode(e,t){let n=this.pulse;if(!this.implode||!n)return-1;if(this.implodePhase>=0){if(this.implodePhase+=e.dt/Vf,this.implodePhase>=1)return this.implodePhase=-1,this.imploded.clear(),-1}else{if(n.waves===this.lastWave)return-1;this.lastWave=n.waves,this.implodePhase=0,this.imploded.clear(),I.play(`singularityPulse`,{rate:.55})}let r=Math.max(t,n.reach(e));return r-(r-t)*this.implodePhase}implodeAt(e,t,n,r){let i=1-this.implodePhase*.45;e.shock.ring(t,n,r,Gf*i,Hf,qf),this.implodeSparks(e,t,n,r,i);let a=Hf*.5;e.enemies.queryCircle(t,n,r+a,(i,o)=>{if(Math.abs(o-r)>a)return;e.enemies.pull(i,t,n,Uf,e.dt);let s=e.enemies.stamp[i];this.imploded.has(s)||(this.imploded.add(s),e.hit(i,Wf,!1,Kf))})}gravityPop(t,n){let r=U(e.meta,t.stats,`area`)*this.mods.size,i=W(this.pull*Zf*n.reach,r,Ur(t)),a=this.dps*this.mods.damage*Qf*n.share,o=n.x,s=n.y;t.enemies.queryCircle(o,s,i,(e,r)=>{t.hit(e,a,!1,n.credit),t.enemies.knockback(e,o,s,r/i*-300)}),this.popSparks(t,o,s,i),I.play(`wellPop`,{rate:.7})}popSparks(t,n,r,i){let a=this.visual,o=this.flowShare;t.sparks.emit({x:n,y:r,ring:i,radial:!0,turn:Math.PI,count:Math.round($f*o),speed:[i*2.6,i*3.6],life:[.2,.3],size:[2*a,3.5*a],endSize:.2,color:e.meta.core,to:e.meta.color,drag:1.5,core:.8,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:r,count:Math.round(ep*o),disc:i*.2,radial:!0,delay:.2,speed:[10,70],life:[.25,.5],size:[3*a,5*a],endSize:.3,color:e.meta.color,to:hf,drag:3,core:.6,twinkle:.4})}pullAt(e,t,n,r,i,a,o,s){e.enemies.queryCircle(t,n,r,(c,l)=>{let u=this.pullForce*(.35+l/r*.65);if(this.greedy&&(u*=tp),this.swirl){let a=pp*Math.min(1,Math.max(0,(l-i)/Math.max(1,r-i))),o=e.enemies.x[c],s=e.enemies.y[c],d=t-o,f=n-s,p=Math.cos(a),m=Math.sin(a),h=o+d*p-f*m,g=s+d*m+f*p;e.enemies.pull(c,h,g,u,e.dt)}else e.enemies.pull(c,t,n,u,e.dt);if(Math.random()<.45&&this.preySparks(e,c,t,n,l),l>i){let t=this.tideShare*(this.swirl?mp:1);e.hit(c,a*t,!0,s);return}l<=i&&(e.hit(c,a*(this.greedy?np:1),!0,s),this.stasis&&e.enemies.freeze(c,fp),this.digest&&this.holdPrey(e,c),o&&this.grindSparks(e,c,t,n))})}eruptAt(e,t,n,r,i){let a=i*ip;e.enemies.queryCircle(t,n,r,r=>{e.hit(r,a,!1,`wellGeyser`),e.enemies.knockback(r,t,n,ap)}),this.eruptSparks(e,t,n,r)}eruptSparks(t,n,r,i){let a=this.visual,o=this.flowShare,s=e=>Math.round(e*o);t.sparks.emit({x:n,y:r,ring:i*.25,radial:!0,arc:.3,count:s(Tf),speed:[i*1.6,i*3.8],life:[.35,.7],size:[2.5*a,4*a],endSize:.25,color:e.meta.core,to:e.meta.color,drag:2.4,core:.9,kind:`streak`,stretch:.035}),t.sparks.emit({x:n,y:r,count:s(Ef),angle:Math.PI/2,arc:.9,speed:[120,320],gravity:560,life:[.6,1],size:[2.5*a,4.5*a],endSize:.4,color:e.meta.core,to:e.meta.color,drag:.8,core:.7,twinkle:.3}),t.sparks.emit({x:n,y:r,ring:i*.97,radial:!0,arc:.6,count:s(Df),speed:[30,110],life:[.3,.5],size:[2.5*a,4*a],endSize:.35,color:e.meta.color,to:hf,drag:3,core:.6}),t.sparks.emit({x:n,y:r,disc:i*.2,count:s(Of),speed:[0,60],life:[.18,.32],size:[8*a,13*a],endSize:.3,color:e.meta.core,to:e.meta.color,drag:4,core:1})}wellSparks(t,n,r,i){let a=this.wellX[n],o=this.wellY[n],s=t.dt,c=this.flowShare,l=this.visual,u=this.geyser?1-Math.max(0,this.geyserTimer)/rp:0,d=1+2*u*u,f=this.swirl?Sf:yf,p=r*(.75+Math.random()*.25),m=p*Math.cos(f)/xf*(this.greedy?1.15:1),h=this.inflowSpec;this.inflowSpeed[0]=m*.85,this.inflowSpeed[1]=m*1.1,h.x=a,h.y=o,h.ring=p,h.turn=Math.PI+f;let g=Math.min(3,r/this.pull),_=this.greedy?Cf:1;h.count=this.inflowFlow.take(vf*c*g*d*_,s),t.sparks.emit(h);let v=this.accretionSpec;this.accretionSpeed[0]=i*1.6,this.accretionSpeed[1]=i*2.6,v.x=a,v.y=o,v.ring=i*(1.05+Math.random()*.2);let y=Math.min(3,i/this.core);if(v.count=this.accretionFlow.take(wf*c*y*d,s),t.sparks.emit(v),this.trailSeen[n]===1){let e=Math.hypot(a-this.trailX[n],o-this.trailY[n]);if(e>.5&&e<r){let n=this.trailSpec;n.x=a,n.y=o,n.disc=i*.9,n.count=this.trailFlow.take(e*Rf,1),t.sparks.emit(n)}}if(this.trailX[n]=a,this.trailY[n]=o,this.trailSeen[n]=1,!this.settle)return;let b=Math.min(this.settleTime[n],lp)/lp,x=this.rootSpec;x.x=a,x.y=o,x.ring=i*(1.5+Math.random()*.8),x.count=this.rootFlow.take(zf*b*c,s),t.sparks.emit(x),b>=1&&this.rootedSeen[n]===0&&t.sparks.emit({x:a,y:o,ring:r*.7,radial:!0,turn:Math.PI,arc:.3,count:Math.round(Bf*c),speed:[40,120],life:[.3,.5],size:[2.5*l,4*l],endSize:.3,color:e.meta.core,to:e.meta.color,drag:2,core:.8}),this.rootedSeen[n]=+(b>=1)}implodeSparks(t,n,r,i,a){let o=t.dt,s=_f*i,c=this.flowShare,l=this.implodePace;if(this.implodePhase===0){let a=this.visual;t.sparks.emit({x:n,y:r,ring:i,radial:!0,turn:Math.PI,arc:.6,count:Math.round(If*c),speed:[10,40],life:[.2,.35],size:[3*a,5*a],endSize:.4,color:e.meta.core,to:e.meta.color,drag:2,core:.8})}let u=this.implodeSpec;this.implodeSpeed[0]=l*.9,this.implodeSpeed[1]=l*1.15,u.x=n,u.y=r,u.ring=i,u.color=this.dimmed(e.meta.core,a),u.to=this.dimmed(e.meta.color,a);let d=Math.min(Ff,s*Mf)*c*a;u.count=this.implodeFlow.take(d,o),t.sparks.emit(u);let f=this.implodeSwirlSpec;this.swirlSpeed[0]=l*1.3,this.swirlSpeed[1]=l*1.8,f.x=n,f.y=r,f.ring=i;let p=Math.max(0,1-this.implodePhase);f.count=this.implodeSwirlFlow.take(s*Nf*c*p,o),t.sparks.emit(f);let m=this.implodeDustSpec;this.dustSpeed[1]=l*.2,m.x=n,m.y=r,m.ring=i,m.count=this.implodeDustFlow.take(s*Pf*c*a,o),t.sparks.emit(m)}implodeLanding(t,n,r,i){let a=this.visual,o=this.flowShare;t.sparks.emit({x:n,y:r,ring:i*2.2,radial:!0,turn:Math.PI+yf,arc:.2,count:Math.round(Lf*o),speed:[i*4.5,i*6],life:[.18,.3],size:[2.2*a,3.4*a],endSize:.3,color:e.meta.core,to:e.meta.color,drag:2.5,core:.9,fade:1.4,kind:`streak`,stretch:.04}),t.sparks.emit({x:n,y:r,ring:i*1.05,radial:!0,arc:.3,count:Math.round(Lf*.5*o),speed:[60,200],life:[.15,.3],size:[2*a,3.2*a],endSize:.2,color:e.meta.core,to:hf,drag:3.5,core:.9,kind:`streak`,stretch:.035})}preySparks(e,t,n,r,i){let a=e.enemies.x[t],o=e.enemies.y[t],s=this.preySpec;s.x=a,s.y=o,s.angle=Math.atan2(r-o,n-a)+(this.swirl?Sf:yf),this.preySpeed[0]=i*1.1,this.preySpeed[1]=i*1.6,e.sparks.emit(s)}grindSparks(e,t,n,r){let i=e.enemies.x[t],a=e.enemies.y[t],o=this.grindSpec;o.x=i,o.y=a,o.angle=Math.atan2(a-r,i-n)-Math.PI/2,e.sparks.emit(o),this.stasis&&(this.frostSpec.x=i,this.frostSpec.y=a,e.sparks.emit(this.frostSpec))}dispose(){I.stopLoop(`singularity`),this.holes.dispose()}},_p=240,vp=180,yp=.42,bp=1,xp=2.2,Sp=.5,Cp=.14,wp=.4,Tp=3,Ep=10,Dp=.2,Op=.6,kp=.4,Ap=1.9,jp=1,Mp=.42,Np=2.5,Pp=1.25,Fp=4,Ip=2.5,Lp=.9,Rp=.2,zp=2,Bp=.35,Vp=60,Hp=1.2,Up=4,Wp=.4,Gp=3,Kp=.55,qp=.5,Jp=16730652,Yp=1200,Xp=2e3,Zp=520,Qp=140,$p=.5,em=.7,tm=.3,nm=.35,rm=3,im=1.1,am=3.5,om=1.6,sm=420,cm=90,lm=160,um=600,dm=30,fm=60,pm=Math.PI*.72,mm=900,hm=300,gm=160,_m=16,vm=240,ym=1.15,bm=.4,xm=1.2,Sm=30;function Cm(e,t,n){let r=1-Math.exp(-t*n);return r>.001?e*t/r:e/n}var wm=class e{static meta={id:`breath`,kind:`active`,color:16753980,core:16773328,base:{damage:_p/10,rate:10,area:vp,critChance:3,critDamage:150},scales:{area:1.25,damage:1,attackSpeed:.5,critChance:.25,critDamage:.25}};id=e.meta.id;object=new M;mods=new F;clock=0;stored=0;closest=-1;leapPicks=[];emberLeft=null;emberStamp=null;emberDps=null;coreCarry=0;flameCarry=0;streakCarry=0;cinderCarry=0;hoardCarry=0;galeCarry=0;hearthCarry=0;kindleCarry=null;coreSpeed=[0,0];coreSize=[2,4];flameSpeed=[0,0];flameSize=[3,5.5];cinderSpeed=[0,0];coreSpec={x:0,y:0,speed:this.coreSpeed,life:[tm*.6,tm],size:this.coreSize,endSize:1.5,color:e.meta.core,to:e.meta.color,drag:xp,curl:6,core:.65,fade:1.4};flameSpec={x:0,y:0,speed:this.flameSpeed,life:[Sp*.6,Sp],size:this.flameSize,endSize:1.8,color:e.meta.color,to:Jp,drag:xp,curl:14,core:.55,twinkle:.15,fade:1.2,kind:`flame`,stretch:.014};streakSpec={x:0,y:0,speed:0,life:[nm*.6,nm],size:[1.5,2.6],endSize:.3,color:e.meta.core,to:e.meta.color,drag:rm,core:.9,kind:`streak`,stretch:.025};cinderSpec={x:0,y:0,speed:this.cinderSpeed,life:[im*.55,im],size:[1.8,3.2],endSize:.3,color:e.meta.color,to:Jp,drag:am,gravity:-45,curl:10,core:.45,twinkle:.6};hoardSpec={x:0,y:0,ring:fm,radial:!0,turn:pm,arc:.5,speed:[50,130],life:[.3,.5],size:[2,3.6],endSize:.3,color:e.meta.color,to:e.meta.core,drag:1.5,curl:5,attract:1,core:.6};kindleSpec={x:0,y:0,disc:6,speed:[5,25],life:[.35,.7],size:[2,3.6],endSize:.3,color:e.meta.color,to:Jp,drag:1.2,gravity:-55,curl:6,core:.45,twinkle:.4};galeSpec={x:0,y:0,speed:0,life:[bm*.7,bm],size:[1.2,2],endSize:.5,color:e.meta.core,drag:xm,core:.35,kind:`streak`,stretch:.05};hearthSpec={x:0,y:0,line:{x:0,y:0},speed:[0,30],life:[.6,.9],size:[2,3.4],endSize:.5,color:e.meta.color,to:e.meta.core,drag:2,attract:1,core:.6,twinkle:.3};actions={fire:(e,t)=>this.breatheFrom(e,t.x,t.y,t.dirX,t.dirY,t.share,t.credit),mark:(e,t)=>this.kindleFor(e,t)};configure(e){this.mods=e}update(e){this.clock+=e.dt,this.embers(e);let t=Math.atan2(e.aimY,e.aimX),n=this.reach(e)*this.gustReach();if(this.leapPicks.length=0,this.mods.has(`gust`)&&this.gustBeat(e,t,n),!this.blowing()){this.stream(e,e.originX,e.originY,t,n,Rp,Fp);return}let r=this.perFrame(e)*this.gustPower(),i=this.cone(e,e.originX,e.originY,t,n,r,bp,!0);this.mods.has(`stoke`)&&this.stoke(e,i,t),this.mods.has(`stoke`)&&i===0&&this.hoard(e),this.mods.has(`hearth`)&&i>0&&(e.heal(Hp*Math.min(i,Up)*e.dt),this.warmth(e,t,n,Math.min(i,Up))),this.mods.has(`leap`)&&this.leap(e,t,n),this.mods.has(`gale`)&&this.galeSparks(e,t,n)}breatheFrom(e,t,n,r,i,a,o){if(!this.blowing())return;let s=this.reach(e)*Op*this.gustReach(),c=Math.atan2(i,r),l=this.perFrame(e)*this.gustPower()*a;this.cone(e,t,n,c,s,l,Cp,!1,o)}half(){return yp*(this.mods.has(`jet`)?kp:1)}reach(t){let n=this.mods.has(`jet`)?Ap:1;return vp*U(e.meta,t.stats,`area`)*this.mods.size*n}blowing(){return!this.mods.has(`gust`)||this.clock%jp<Mp}gustPower(){return this.mods.has(`gust`)?Np:1}gustReach(){return this.mods.has(`gust`)?Pp:1}perSecond(t){let n=U(e.meta,t.stats,`attackSpeed`)*this.mods.rate;return _p*this.mods.damage*n}kindleFor(e,t){let n=t.enemy;e.enemies.ignite(n,this.perSecond(e)*wp*t.share,Tp);let r=this.kindleSpec;r.x=e.enemies.x[n],r.y=e.enemies.y[n],r.count=Ep,e.sparks.emit(r)}perFrame(e){return this.perSecond(e)*e.dt}heat(e){return this.mods.has(`heatTip`)?Wp+e*.7000000000000001:1-e*.5}cone(e,t,n,r,i,a,o,s=!1,c){let l=this.half(),u=this.mods.has(`gale`),d=this.mods.has(`kindle`),f=s&&this.mods.has(`leap`);d&&this.reserve(e);let p=this.emberLeft,m=this.emberStamp,h=this.emberDps,g=0,_=1/0;s&&(this.closest=-1),e.enemies.queryCircle(t,n,i,(o,v)=>{let y=Math.atan2(e.enemies.y[o]-n,e.enemies.x[o]-t)-r;if(y-=Math.PI*2*Math.floor((y+Math.PI)/(Math.PI*2)),Math.abs(y)>l)return;let b=Math.min(1,v/i);e.hit(o,a*this.heat(b),!0,c),g++,s&&v<_&&(_=v,this.closest=o),f&&this.leapPicks.push({index:o,distance:v}),u&&e.enemies.knockback(o,t,n,Vp*(1-b)*e.dt),d&&p&&m&&h&&(p[o]=zp*this.mods.duration,m[o]=e.enemies.stamp[o],h[o]=_p*Bp*this.mods.damage)});let v=s&&g===0&&this.mods.has(`stoke`);return this.stream(e,t,n,r,i,v?Rp:o,1),g}stream(t,n,r,i,a,o,s){let c=n+Math.cos(i)*6,l=r+Math.sin(i)*6,u=this.half()*2,d=a/s,f=this.mods.visualScale(),p=this.mods.has(`heatTip`),m=o*(s===1&&this.mods.has(`gust`)?om:1)*t.dt;this.coreCarry+=Yp*m;let h=Math.floor(this.coreCarry);if(this.coreCarry-=h,h>0){let n=Cm(d*$p,xp,tm);this.coreSpeed[0]=n*.5,this.coreSpeed[1]=n,this.coreSize[0]=2*f,this.coreSize[1]=4*f;let r=this.coreSpec;r.x=c,r.y=l,r.angle=i,r.arc=u*.55,r.color=p?Jp:e.meta.core,r.count=h,t.sparks.emit(r)}this.flameCarry+=Xp*m;let g=Math.floor(this.flameCarry);if(this.flameCarry-=g,g>0){let n=Cm(d,xp,Sp);this.flameSpeed[0]=n*.55,this.flameSpeed[1]=n,this.flameSize[0]=3*f,this.flameSize[1]=5.5*f;let r=this.flameSpec;r.x=c,r.y=l,r.angle=i,r.arc=u*.9,r.to=p?e.meta.core:Jp,r.endSize=p?2.4:1.8,r.count=g,t.sparks.emit(r)}this.streakCarry+=Zp*m;let _=Math.floor(this.streakCarry);if(this.streakCarry-=_,_>0){let e=this.streakSpec;e.x=c,e.y=l,e.angle=i,e.arc=u*.8,e.speed=Cm(d,rm,nm),e.count=_,t.sparks.emit(e)}this.cinderCarry+=Qp*m;let v=Math.floor(this.cinderCarry);if(this.cinderCarry-=v,v>0){let e=Cm(d*em,am,im);this.cinderSpeed[0]=e*.3,this.cinderSpeed[1]=e;let n=this.cinderSpec;n.x=c,n.y=l,n.angle=i,n.arc=u,n.count=v,t.sparks.emit(n)}}gustBeat(e,t,n){let r=this.clock%jp,i=Math.max(0,this.clock-e.dt)%jp;r<i?this.puff(e,t,n):i<Mp&&r>=Mp&&this.smoke(e,t,n)}puff(t,n,r){let i=t.originX+Math.cos(n)*6,a=t.originY+Math.sin(n)*6,o=Cm(r,xp,Sp),s=this.mods.visualScale();t.sparks.emit({x:i,y:a,count:sm,angle:n,arc:this.half()*2,speed:[o*.6,o],life:[Sp*.7,Sp],size:[3*s,6*s],endSize:1.8,color:e.meta.core,to:e.meta.color,drag:xp,curl:18,core:.6,fade:1.2,kind:`flame`,stretch:.014}),t.sparks.emit({x:i,y:a,count:cm,ring:8,radial:!0,speed:[60,160],life:[.18,.32],size:[2.5,4],endSize:.3,color:e.meta.core,to:e.meta.color,drag:5,core:.8})}smoke(t,n,r){t.sparks.emit({x:t.originX+Math.cos(n)*6,y:t.originY+Math.sin(n)*6,count:lm,angle:n,arc:this.half()*2,speed:[r*.4,r*1.6],life:[.6,1],size:[2,3.6],endSize:.4,color:e.meta.color,to:Jp,drag:3.2,gravity:-40,curl:14,core:.35,twinkle:.6})}hoard(e){this.hoardCarry+=um*(this.stored/Ip)*e.dt;let t=Math.floor(this.hoardCarry);if(t===0)return;this.hoardCarry-=t;let n=this.hoardSpec;n.x=e.originX,n.y=e.originY,n.ring=dm+Math.random()*30,n.count=t,e.sparks.emit(n)}galeSparks(e,t,n){this.galeCarry+=vm*e.dt;let r=Math.floor(this.galeCarry);if(r===0)return;this.galeCarry-=r;let i=this.galeSpec;i.x=e.originX+Math.cos(t)*6,i.y=e.originY+Math.sin(t)*6,i.angle=t,i.arc=this.half()*2,i.speed=Cm(n*ym,xm,bm),i.count=r,e.sparks.emit(i)}warmth(e,t,n,r){this.hearthCarry+=Sm*r*e.dt;let i=Math.floor(this.hearthCarry);if(i===0)return;this.hearthCarry-=i;let a=this.hearthSpec;a.x=e.originX+Math.cos(t)*n*.2,a.y=e.originY+Math.sin(t)*n*.2,a.line.x=e.originX+Math.cos(t)*n*.8,a.line.y=e.originY+Math.sin(t)*n*.8,a.count=i,e.sparks.emit(a)}stoke(e,t,n){if(t===0){this.stored=Math.min(Ip,this.stored+e.dt);return}if(this.stored<=0||this.closest<0)return;e.hit(this.closest,this.perSecond(e)*this.stored*Lp,!1,`breathStoke`);let r=this.stored/Ip;this.stored=0;let i=e.originX+Math.cos(n)*6,a=e.originY+Math.sin(n)*6;e.impacts.pop(i,a,.6),this.release(e,i,a,n,r)}release(t,n,r,i,a){let o=this.reach(t)*this.gustReach(),s=this.half()*2,c=.3+.7*a,l=Cm(o,xp,Sp),u=this.mods.visualScale();t.sparks.emit({x:n,y:r,count:mm*c,angle:i,arc:s,speed:[l*.5,l],life:[Sp*.6,Sp],size:[3.5*u,7*u],endSize:1.6,color:e.meta.core,to:Jp,drag:xp,curl:20,core:.65,fade:1.1,kind:`flame`,stretch:.014}),t.sparks.emit({x:n,y:r,count:hm*c,angle:i,arc:s,speed:Cm(o,rm,nm),life:[nm*.6,nm],size:[1.8,3],endSize:.2,color:e.meta.core,to:e.meta.color,drag:rm,core:1,kind:`streak`,stretch:.03});let d=t.enemies.x[this.closest],f=t.enemies.y[this.closest];t.sparks.emit({x:d,y:f,count:gm*c,ring:6,radial:!0,speed:[80,240],life:[.25,.5],size:[2.5,4.5],endSize:.5,color:e.meta.core,to:Jp,drag:4,curl:10,core:.7,kind:`flame`,stretch:.012}),t.sparks.emit({x:d,y:f,count:gm/2*c,disc:10,speed:[10,60],life:[.6,1.1],size:[1.8,3],endSize:.3,color:e.meta.color,to:Jp,drag:2,gravity:-60,core:.4,twinkle:.6})}leap(e,t,n){let r=this.leapPicks;if(r.length===0)return;r.sort((e,t)=>t.distance-e.distance);let i=this.perFrame(e)*this.gustPower()*qp,a=Math.min(Gp,r.length);for(let o=0;o<a;o++){let a=r[o].index,s=e.enemies.x[a],c=e.enemies.y[a];this.cone(e,s,c,t,n*Kp,i,Dp,!1,`breathLeap`)}}embers(e){if(!this.mods.has(`kindle`))return;this.reserve(e);let t=this.emberLeft,n=this.emberStamp,r=this.emberDps;if(!(!t||!n||!r)){for(let i=0;i<t.length;i++)if(!(t[i]<=0)){if(!e.enemies.alive[i]||n[i]!==e.enemies.stamp[i]){t[i]=0;continue}e.hit(i,r[i]*e.dt,!0,`breathKindle`),t[i]-=e.dt,this.smoulder(e,i,t[i])}}}smoulder(e,t,n){let r=this.kindleCarry;if(!r)return;r[t]+=_m*Math.min(1,Math.max(0,n)/zp)*e.dt;let i=Math.floor(r[t]);if(i===0)return;r[t]-=i;let a=this.kindleSpec;a.x=e.enemies.x[t],a.y=e.enemies.y[t],a.disc=e.enemies.radius[t]*.6,a.count=i,e.sparks.emit(a)}reserve(e){if(this.emberLeft&&this.emberLeft.length===e.enemies.capacity)return;let t=e.enemies.capacity;this.emberLeft=new Float32Array(t),this.emberStamp=new Float32Array(t),this.emberDps=new Float32Array(t),this.kindleCarry=new Float32Array(t)}dispose(){}},Tm=300,Em=2,Dm=520,Om=240,km=.9,Am=110,jm=2400,Mm=30,Nm=.8,Pm=22,Fm=.45,Im=.5,Lm=2,Rm=900,zm=2400,Bm=3,Vm=26,Hm=.35,Um=260,Wm=.6,Gm=3,Km=4,qm=4,Jm=.45,Ym=8,Xm=.5,Zm=3050614,Qm=16753228,$m=360,eh=60,th=.1,nh=50,rh=130,ih=.6,ah=1.8,oh=120,sh=240,ch=50,lh=12,uh=70,dh=30,fh=70,ph=36,mh=24,hh=24,gh=90,_h=40,vh=110,yh=50,bh=16,xh=.6,Sh=.45,Ch=160,wh=22,Th=18,Eh=.12,Dh=30,Oh=.25,kh=90,Ah=40,jh=.16,Mh=1.8,Nh=60,Ph=40,Fh=2.2,Ih=.3,Lh=70,Rh=[.25,.4];function zh(e){return{phase:`idle`,target:-1,stamp:0,x:0,y:0,timer:e,dragLeft:0,share:1,plowed:new Set,relayLeft:0,latched:!1,slamLeft:0,netIndex:[],netStamp:[],trailCarry:0,shedCarry:0,ropeCarry:0,dustCarry:0,netRopeCarry:0,netDustCarry:0,latchFlow:new z}}var Bh=class e{static meta={id:`harpoon`,kind:`passive`,color:10145984,core:15400952,base:{damage:Tm,rate:1/Em,area:Om,speed:Dm,critChance:10,critDamage:250},scales:{critChance:1.5,critDamage:1.5,damage:1,attackSpeed:.5,area:.25,projectileSpeed:1}};id=e.meta.id;object;sprites;texture;hooks=[zh(1)];mods=new F;trailEnd={x:0,y:0};ropeEnd={x:0,y:0};trailSize=[2,3.6];tautNormal=[0,14];trailSpec={x:0,y:0,line:this.trailEnd,speed:[0,20],life:[.12,.26],size:this.trailSize,endSize:.15,color:e.meta.core,to:e.meta.color,drag:4.5,core:.75};shedSpec={x:0,y:0,line:this.trailEnd,arc:.9,speed:[30,140],normal:[20,90],life:[.16,.36],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:Zm,drag:3.5,curl:6,core:.8,kind:`streak`,stretch:.045};slackSpec={x:0,y:0,line:this.ropeEnd,arc:.3,speed:[20,80],normal:[0,10],life:[.12,.24],size:[1.2,2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,core:.8};tautSpec={x:0,y:0,line:this.ropeEnd,arc:.2,speed:[60,200],normal:this.tautNormal,life:[.14,.3],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,core:.85,kind:`streak`,stretch:.04};dustSpec={x:0,y:0,disc:6,arc:1.8,speed:[15,90],life:[.35,.7],size:[2.5,4.5],endSize:.3,color:e.meta.color,to:Zm,drag:2.4,curl:12,core:.3,twinkle:.25};gritSpec={x:0,y:0,disc:5,arc:1.4,speed:[40,160],life:[.2,.45],size:[1.4,2.4],endSize:.5,color:e.meta.core,to:Zm,drag:4,core:0,kind:`pixel`};constructor(){this.texture=Te(32,2.6),this.sprites=new mr({capacity:Bm,texture:this.texture,additive:!0,gain:R,renderOrder:26}),this.object=this.sprites.points;let t=new N(e.meta.color);for(let e=0;e<Bm;e++)this.sprites.setColor(e,t)}configure(e){this.mods=e}update(t){let n=Gr(Em,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate);this.fit(n.interval);let r=this.mods.visualScale();for(let e=0;e<this.hooks.length;e++){let i=this.hooks[e];if(i.phase===`idle`&&(i.timer-=t.dt,i.timer<=0&&(i.timer+=n.interval,i.relayLeft=Km,this.throwAt(t,i,n.damage))),i.phase===`flying`&&this.fly(t,i),i.phase===`dragging`&&this.drag(t,i),i.phase===`idle`){this.sprites.hide(e);continue}this.sprites.set(e,Math.round(i.x),Math.round(i.y),5*r,1),this.rope(t,i.x,i.y,i.phase===`dragging`?4:1.5,r),this.ropeSparks(t,i,i.x,i.y,i.phase===`dragging`,!1)}for(let e=this.hooks.length;e<Bm;e++)this.sprites.hide(e);this.sprites.sync()}fit(e){let t=Math.max(1,Math.min(Bm,1+this.mods.count));for(;this.hooks.length>t;)this.hooks.pop();for(;this.hooks.length<t;)this.hooks.push(zh(e/(this.hooks.length+1)))}throwAt(e,t,n){let r=this.range(e),i=-1,a=1/0;e.enemies.queryCircle(e.originX,e.originY,r,(n,r)=>{r>=a||this.busy(e,t,n)||(a=r,i=n)}),!(i<0)&&(I.play(`harpoon`),t.phase=`flying`,t.target=i,t.stamp=e.enemies.stamp[i],t.x=e.originX,t.y=e.originY,t.share=n,this.hurl(e,i))}range(t){return Om*U(e.meta,t.stats,`area`)*this.mods.size}busy(e,t,n){for(let r of this.hooks)if(r!==t&&r.phase!==`idle`&&r.target===n&&r.stamp===e.enemies.stamp[n])return!0;return!1}fly(t,n){let r=Dm*U(e.meta,t.stats,`projectileSpeed`),i=this.holds(t,n),a=t.aimX,o=t.aimY;if(i){let e=t.enemies.x[n.target]-n.x,r=t.enemies.y[n.target]-n.y,i=Math.hypot(e,r)||1;if(a=e/i,o=r/i,i<=t.enemies.radius[n.target]+8){this.hook(t,n);return}}let s=n.x,c=n.y;n.x+=a*r*t.dt,n.y+=o*r*t.dt,this.trail(t,n,s,c);let l=Math.abs(n.x)>t.bounds.x/2+20||Math.abs(n.y)>t.bounds.y/2+20;!i&&l&&(n.phase=`idle`,this.snap(t,n.x,n.y))}hook(e,t){let n=this.mods.has(`shove`);if(e.hit(t.target,Tm*(n?Lm:1)*this.mods.damage*t.share),n&&e.enemies.knockback(t.target,e.originX,e.originY,Rm),this.mods.has(`sear`)){let n=Am*Wm*this.mods.damage;e.enemies.ignite(t.target,n,km*this.mods.duration+Gm)}e.impacts.pop(t.x,t.y,.4);let r=t.x-e.originX,i=t.y-e.originY,a=Math.hypot(r,i)||1,{x:o,y:s,target:c}=t;e.synergy.react(e,`harpoon`,`impact`,o,s,c,r/a,i/a),this.sink(e,t,n),t.phase=`dragging`,t.dragLeft=km*this.mods.duration,t.plowed.clear(),t.latched=!1,t.slamLeft=0,this.clearNet(t),this.mods.has(`seine`)&&this.cast(e,t)}cast(e,t){e.enemies.queryCircle(e.originX,e.originY,this.range(e),n=>{n===t.target||t.netIndex.length>=Ym||(t.netIndex.push(n),t.netStamp.push(e.enemies.stamp[n]),e.hit(n,Tm*Xm*this.mods.damage*t.share,!1,`harpoonSeine`),this.netCast(e,n))}),this.netRing(e)}drag(e,t){if(!this.holds(e,t)){this.release(e,t);return}let n=t.target,r=this.mods.has(`shove`),i=t.x,a=t.y;r?e.enemies.knockback(n,e.originX,e.originY,zm*e.dt):e.enemies.pull(n,e.originX,e.originY,jm,e.dt),e.hit(n,Am*this.mods.damage*e.dt,!0),t.x=e.enemies.x[n],t.y=e.enemies.y[n],t.dragLeft-=e.dt,this.trample(e,t,i,a),this.mods.has(`plow`)&&this.plow(e,t,i,a),this.mods.has(`winch`)&&this.winch(e,t),t.netIndex.length>0&&this.haul(e,t),!r&&Math.hypot(t.x-e.originX,t.y-e.originY)<=Mm&&(this.mods.has(`latch`)?this.latch(e,t):(e.hit(n,Tm*Nm*this.mods.damage*t.share),e.impacts.pop(t.x,t.y,.5),this.slam(e,t.x,t.y,1),this.cut(e,t,!1),t.phase=`idle`,this.clearNet(t))),t.phase===`dragging`&&t.dragLeft<=0&&(this.cut(e,t,!0),t.phase=`idle`,this.clearNet(t))}release(e,t){if(this.cut(e,t,!0),t.phase=`idle`,this.clearNet(t),!this.mods.has(`harpoonRelay`)||t.relayLeft<=0)return;t.relayLeft--;let n=t.x,r=t.y;this.throwAt(e,t,t.share),t.phase===`flying`&&this.relay(e,n,r)}plow(e,t,n,r){e.enemies.querySegment(n,r,t.x,t.y,Vm,n=>{n===t.target||t.plowed.has(n)||(t.plowed.add(n),e.hit(n,Tm*Hm*this.mods.damage*t.share,!1,`harpoonPlow`),e.enemies.knockback(n,t.x,t.y,Um),this.ram(e,t,n))})}winch(e,t){e.enemies.querySegment(e.originX,e.originY,t.x,t.y,Pm,n=>{n!==t.target&&(e.enemies.pull(n,e.originX,e.originY,jm*Fm,e.dt),e.hit(n,Am*Im*this.mods.damage*e.dt,!0,`harpoonWinch`))})}haul(e,t){let n=this.mods.visualScale();for(let r=t.netIndex.length-1;r>=0;r--){let i=t.netIndex[r];if(e.enemies.alive[i]!==1||e.enemies.stamp[i]!==t.netStamp[r]){this.dropNet(t,r);continue}e.enemies.pull(i,e.originX,e.originY,jm,e.dt),e.hit(i,Am*Xm*this.mods.damage*e.dt,!0,`harpoonSeine`);let a=e.enemies.x[i],o=e.enemies.y[i];if(Math.hypot(a-e.originX,o-e.originY)<=Mm){let n=Tm*Nm*Xm*this.mods.damage*t.share;e.hit(i,n,!1,`harpoonSeine`),this.slam(e,a,o,Sh),this.dropNet(t,r);continue}this.rope(e,a,o,4,n),this.ropeSparks(e,t,a,o,!0,!0),this.dust(e,t,a,o,Math.atan2(e.originY-o,e.originX-a),1,!0)}}latch(e,t){t.latched||(t.latched=!0,t.dragLeft=qm,t.slamLeft=0,this.clench(e,t)),this.grip(e,t),t.slamLeft-=e.dt,!(t.slamLeft>0)&&(t.slamLeft=Jm,e.hit(t.target,Tm*Nm*this.mods.damage*t.share,!1,`harpoonLatch`),e.impacts.pop(t.x,t.y,.5),this.slam(e,t.x,t.y,xh))}dropNet(e,t){e.netIndex.splice(t,1),e.netStamp.splice(t,1)}clearNet(e){e.netIndex.length=0,e.netStamp.length=0}holds(e,t){return t.target>=0&&e.enemies.alive[t.target]===1&&e.enemies.stamp[t.target]===t.stamp}rope(t,n,r,i,a){t.arcs.strike(t.originX,t.originY,n,r,{color:e.meta.color,nodes:4,jitter:i,life:.05,weight:1,width:1.4*a})}ropeSparks(e,t,n,r,i,a){let o=i&&!a&&this.mods.has(`winch`),s=(i?rh:nh)*(a?ih:1)*(o?ah:1)*e.dt,c;if(a?(t.netRopeCarry+=s,c=Math.floor(t.netRopeCarry),t.netRopeCarry-=c):(t.ropeCarry+=s,c=Math.floor(t.ropeCarry),t.ropeCarry-=c),c===0)return;let l=i?this.tautSpec:this.slackSpec;l.x=e.originX,l.y=e.originY,this.ropeEnd.x=n,this.ropeEnd.y=r;let u=Math.atan2(r-e.originY,n-e.originX);l.angle=i?u+Math.PI:u,i&&(this.tautNormal[1]=o?Pm*2.5:14),l.count=c,e.sparks.emit(l)}trail(e,t,n,r){this.trailEnd.x=t.x,this.trailEnd.y=t.y;let i=e.dt>0?th/e.dt:0;t.trailCarry+=$m*e.dt;let a=Math.floor(t.trailCarry);if(t.trailCarry-=a,a>0){let o=this.mods.visualScale(),s=this.trailSpec;s.x=n,s.y=r,s.vx=(n-t.x)*i,s.vy=(r-t.y)*i,s.count=a,this.trailSize[0]=2*o,this.trailSize[1]=3.6*o,e.sparks.emit(s)}t.shedCarry+=eh*e.dt;let o=Math.floor(t.shedCarry);if(t.shedCarry-=o,o>0){let i=this.shedSpec;i.x=n,i.y=r,i.angle=Math.atan2(r-t.y,n-t.x),i.count=o,e.sparks.emit(i)}}hurl(t,n){let r=t.originX,i=t.originY,a=Math.atan2(t.enemies.y[n]-i,t.enemies.x[n]-r),o=a+Math.PI;t.sparks.emit({x:r,y:i,count:ch,disc:4,angle:a,arc:.35,speed:[160,520],life:[.1,.26],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:r,y:i,count:lh,disc:5,speed:[0,60],life:[.08,.18],size:[5,9],endSize:.4,color:e.meta.core,to:e.meta.color,drag:5,core:1}),t.sparks.emit({x:r,y:i,count:uh,disc:6,angle:o,arc:1.1,speed:[70,300],life:[.2,.45],size:[2,3.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.4,curl:8,core:.85,kind:`streak`,stretch:.035}),t.sparks.emit({x:r,y:i,count:dh,disc:9,angle:o,arc:1.6,speed:[25,140],life:[.45,.9],size:[3,5.5],endSize:.3,color:e.meta.color,to:Zm,drag:2.2,curl:20,core:.35,twinkle:.3})}sink(t,n,r){let i=n.x,a=n.y,o=Math.atan2(a-t.originY,i-t.originX);t.sparks.emit({x:i,y:a,count:fh,angle:o,arc:.5,speed:[150,480],life:[.12,.3],size:[2,3.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:i,y:a,count:ph,ring:6,radial:!0,arc:.4,speed:[60,180],life:[.14,.3],size:[1.8,3],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.85,kind:`streak`,stretch:.03}),t.sparks.emit({x:i,y:a,count:mh,angle:o+Math.PI,arc:.8,speed:[60,220],life:[.14,.3],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:Zm,drag:3.5,core:.8,kind:`streak`,stretch:.035}),t.sparks.emit({x:i,y:a,count:hh,disc:8,speed:[15,80],life:[.4,.8],size:[3,5],endSize:.3,color:e.meta.color,to:Zm,drag:2.2,curl:14,core:.35,twinkle:.3}),r&&t.sparks.emit({x:i,y:a,count:gh,angle:o,arc:.9,speed:[220,620],life:[.2,.42],size:[2.2,4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.2,curl:6,core:.9,kind:`streak`,stretch:.035}),this.mods.has(`sear`)&&t.sparks.emit({x:i,y:a,count:_h,disc:10,speed:[10,50],gravity:-45,life:[.6,1.2],size:[2,4],endSize:.3,color:e.meta.core,to:Qm,drag:1.5,core:.5,twinkle:.5})}netCast(t,n){let r=t.enemies.x[n],i=t.enemies.y[n];t.sparks.emit({x:t.originX,y:t.originY,line:{x:r,y:i},count:wh,even:!0,speed:[0,20],normal:[0,18],delayAlong:Eh,life:[.12,.22],size:[1.8,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.85}),t.sparks.emit({x:r,y:i,count:Th,ring:5,radial:!0,arc:.5,delay:Eh,speed:[50,160],life:[.14,.3],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.85,kind:`streak`,stretch:.03})}netRing(t){let n=.4,r=(this.range(t)-20)*3/(1-Math.exp(-3*n));t.sparks.emit({x:t.originX,y:t.originY,count:Ch,ring:20,even:!0,radial:!0,arc:.05,speed:[r*.92,r],life:[n*.9,n],size:[2,3.2],endSize:.3,color:e.meta.core,to:e.meta.color,drag:3,core:.8,kind:`streak`,stretch:.015})}trample(e,t,n,r){let i=t.x-n,a=t.y-r,o=Math.hypot(i,a);if(o<.001||e.dt<=0)return;let s=Math.min(1,o/e.dt/sh);this.dust(e,t,t.x,t.y,Math.atan2(a,i),s,!1)}dust(e,t,n,r,i,a,o){let s=oh*a*(o?ih:1)*e.dt,c;if(o?(t.netDustCarry+=s,c=Math.floor(t.netDustCarry),t.netDustCarry-=c):(t.dustCarry+=s,c=Math.floor(t.dustCarry),t.dustCarry-=c),c===0)return;let l=i+Math.PI,u=this.dustSpec;u.x=n,u.y=r,u.angle=l,u.count=c,e.sparks.emit(u);let d=this.gritSpec;d.x=n,d.y=r,d.angle=l,d.count=Math.ceil(c*.5),e.sparks.emit(d)}slam(t,n,r,i){t.sparks.emit({x:n,y:r,count:Math.round(vh*i),ring:6,radial:!0,arc:.5,speed:[120,380],life:[.14,.32],size:[2,3.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:r,count:Math.round(yh*i),ring:10,radial:!0,arc:.6,speed:[40,140],life:[.4,.8],size:[3,5.5],endSize:.3,color:e.meta.color,to:Zm,drag:2.2,curl:18,core:.35,twinkle:.3}),t.sparks.emit({x:n,y:r,count:Math.round(bh*i),disc:6,speed:[10,60],life:[.08,.18],size:[6,10],endSize:.4,color:e.meta.core,to:e.meta.color,drag:5,core:1})}cut(e,t,n){n&&this.snap(e,t.x,t.y);for(let n=0;n<t.netIndex.length;n++){let r=t.netIndex[n];e.enemies.alive[r]===1&&e.enemies.stamp[r]===t.netStamp[n]&&this.snap(e,e.enemies.x[r],e.enemies.y[r])}}snap(t,n,r){let i=Math.hypot(n-t.originX,r-t.originY),a=Math.min(kh,Math.round(i*Oh));a!==0&&t.sparks.emit({x:t.originX,y:t.originY,line:{x:n,y:r},count:a,speed:[0,30],normal:[30,120],life:[.2,.45],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.5,curl:8,core:.85,kind:`streak`,stretch:.04})}relay(t,n,r){t.sparks.emit({x:n,y:r,line:{x:t.originX,y:t.originY},count:Ah,even:!0,speed:[0,20],normal:[4,30],delayAlong:jh,life:[.12,.22],size:[2,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9}),t.sparks.emit({x:t.originX,y:t.originY,count:30,ring:8,radial:!0,delay:jh,speed:[60,180],life:[.14,.3],size:[1.8,3],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.85,kind:`streak`,stretch:.03})}ram(t,n,r){let i=t.enemies.x[r],a=t.enemies.y[r];t.sparks.emit({x:i,y:a,count:Dh,angle:Math.atan2(a-n.y,i-n.x),arc:1,speed:[100,340],life:[.14,.32],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03})}latchRadius(e,t){return Math.max(10,Math.min(Nh,e.enemies.radius[t.target]*Mh))}clench(t,n){let r=this.latchRadius(t,n),i=r*1.2000000000000002;t.sparks.emit({x:n.x,y:n.y,count:Ph,ring:r*Fh,even:!0,radial:!0,turn:Math.PI*.8,speed:i*4/(1-Math.exp(-4*Ih)),life:Ih,size:[3.2,5],sizeScale:this.mods.visualScale(),endSize:.5,color:e.meta.core,to:e.meta.color,drag:4,core:.8})}grip(e,t){let n=t.latchFlow.take(Lh,e.dt);if(n===0)return;let r=this.gripSpec;r.x=t.x,r.y=t.y,r.ring=this.latchRadius(e,t),r.count=n,r.sizeScale=this.mods.visualScale(),this.gripCenter.x=t.x,this.gripCenter.y=t.y,e.sparks.emit(r)}gripCenter={x:0,y:0};gripSpec={x:0,y:0,ring:10,orbit:{around:this.gripCenter,spin:[2,2.8]},life:Rh,size:[3,5],endSize:.4,color:e.meta.core,to:e.meta.color,drag:.5,core:.7,twinkle:.15};dispose(){this.sprites.dispose(),this.texture.dispose()}},Vh=64,Hh=1.8,Uh=class{object=new M;geometry=new xe(1,1);material;mesh;constructor(e,t,n=27){this.geometry.translate(.5,0,0),this.material=new Ee({vertexShader:_n,fragmentShader:Tn,uniforms:{uColor:{value:new N(e)},uCore:{value:new N(t)},uLengthWorld:{value:1},uHeightWorld:{value:128},uBeamStart:{value:0},uLength:{value:0},uCoreWidth:{value:0},uHalo:{value:0},uDash:{value:0},uOrbX:{value:0},uOrbRadius:{value:0},uOrbAlpha:{value:0},uTime:{value:0},uIntensity:{value:0},uErode:{value:0},uGain:{value:R}},transparent:!0,depthTest:!1,depthWrite:!1,blending:2}),this.mesh=new pe(this.geometry,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.position.z=1,this.mesh.visible=!1,this.object.add(this.mesh)}set(e,t){let n=e.intensity>0&&e.fraction>0,r=e.orb>0&&e.orbAlpha>0;if(this.mesh.visible=n||r,!this.mesh.visible)return;let i=r?Math.min(e.offset,e.orbOffset-e.orb*Hh):e.offset,a=Math.max(1,e.length-i),o=Math.cos(e.angle),s=Math.sin(e.angle);this.mesh.position.x=e.x+o*i,this.mesh.position.y=e.y+s*i,this.mesh.rotation.z=e.angle,this.mesh.scale.set(a,128,1);let c=this.material.uniforms;c.uLengthWorld.value=a,c.uBeamStart.value=e.offset-i,c.uLength.value=n?e.fraction:0,c.uCoreWidth.value=e.coreWidth/Vh,c.uHalo.value=e.halo/Vh,c.uDash.value=e.dash,c.uOrbX.value=e.orbOffset-i,c.uOrbRadius.value=r?e.orb:0,c.uOrbAlpha.value=r?e.orbAlpha:0,c.uTime.value=t,c.uIntensity.value=n?e.intensity:0,c.uErode.value=e.erode}hide(){this.mesh.visible=!1}dispose(){this.geometry.dispose(),this.material.dispose()}},Wh=25e3,Gh=10,Kh=1.11,qh=.75,Jh=16747069,Yh=260,Xh=60,Zh=115,Qh=Math.PI*.72,$h=240,eg=700,tg=300,ng=1.1,rg=1400,ig=500,ag=.12,og=360,sg=160,cg=900,lg=220,ug=90,dg=18,fg=27,J=36,pg=fg*.55,mg=1800,hg=.55,gg=.16,_g=1.4,vg=.4,yg=620,bg=300,xg=160,Sg=110,Cg=1.8,wg=1.5,Tg=-1.2,Eg=4,Dg=.85,Og=2.5,kg=1/3,Ag=1.5,jg=2,Mg=.5,Ng=.25,Pg=.6,Fg=1.5,Ig=10475775,Lg=5,Rg=.25,zg=.04,Bg=600,Vg=2,Hg=1.2,Ug=6,Wg=1,Gg=.45,Kg=.9,qg=[.5,.25],Jg=.1,Yg=.25,Xg=6e3,Zg=1600,Qg=900,$g=700,e_=600,t_=.3,n_=1.1,r_=2.5,i_=.3,a_=.6;function o_(e,t,n,r,i,a,o){e.x=t,e.y=n,e.angle=r,e.alpha=i,e.reveal=Math.min(1,a),e.erode=o}function s_(){return{x:0,y:0,angle:0,length:0,offset:0,fraction:0,coreWidth:0,halo:0,dash:0,intensity:0,erode:0,orb:0,orbOffset:J,orbAlpha:0}}var c_=class{anchored;x=0;y=0;dirX=1;dirY=0;angle=0;share=1;credit=void 0;look=1;flashLeft=0;echoA=0;echoB=0;emberLeft=0;emberTimer=0;emberX=0;emberY=0;emberAngle=0;decayCarry=0;orbCarry=0;emberCarry=0;pool=null;core=null;halo=null;sun=null;rim=null;state=s_();constructor(e){this.anchored=e}},l_=class{live=0;x=0;y=0;dirX=1;dirY=0;lockX=1;lockY=0;share=0;credit=``;aimCarry=0;pool=null;aimLine=null;aimHaze=null;strike=new c_(!1)},u_=class e{static meta={id:`lance`,kind:`active`,color:16765562,core:16775136,base:{damage:Wh,rate:1/11.18,area:pg,count:Eg,critChance:20,critDamage:200},scales:{critChance:1,critDamage:1}};id=e.meta.id;object;beam=new Uh(e.meta.color,e.meta.core);formPool=null;aimLine=null;aimHaze=null;main=new c_(!0);seats=[];phase=`cooling`;timer=Gh;lockX=1;lockY=0;lockAngle=0;frostTimer=0;rebate=0;mods=new F;onLine=[];chargeCarry=0;aimCarry=0;chargeSpec={x:0,y:0,ring:Zh,radial:!0,turn:Qh,arc:.5,speed:[60,150],life:[.35,.6],size:[3,5],endSize:.3,color:e.meta.color,to:e.meta.core,drag:1.5,curl:6,attract:1,core:.7};aimSpec={x:0,y:0,line:{x:0,y:0},arc:.15,speed:[120,320],life:[.2,.35],size:[2,3],endSize:.2,color:e.meta.core,to:e.meta.color,drag:2,core:.9,kind:`streak`,stretch:.03};decayBeamSpec={x:0,y:0,line:{x:0,y:0},arc:.9,speed:[20,120],normal:[20,110],life:[.3,.7],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:2.4,curl:12,core:.8,kind:`streak`,stretch:.025};decayOrbSpec={x:0,y:0,ring:fg,radial:!0,arc:.6,speed:[40,140],life:[.4,.7],size:[2.5,4],endSize:.25,color:e.meta.core,to:e.meta.color,drag:2.2,core:.7};emberSpec={x:0,y:0,ring:fg*.8,radial:!0,speed:[5,25],gravity:-18,life:[.6,1.1],size:[2.5,4.5],endSize:.3,color:e.meta.color,to:Jh,drag:1.2,core:.5,twinkle:.5,kind:`flame`,stretch:.012};frostSpec={x:0,y:0,count:3,disc:6,speed:[5,25],gravity:-30,life:[.4,.7],size:[2.5,4],endSize:.3,color:Ig,to:15267583,core:.6,twinkle:.4};hitSpec={x:0,y:0,count:26,arc:1.6,speed:[80,300],life:[.2,.45],size:[2,3.5],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.5,core:.9,kind:`streak`,stretch:.03};state=s_();actions={fire:(e,t)=>this.seat(e,t)};constructor(){this.object=this.beam.object}configure(e){this.mods=e}lockAt(){return this.mods.has(`snap`)?Kh*kg:this.mods.has(`lanceVigil`)?Kh*jg:Kh}fireAt(){return this.lockAt()+.06999999999999984}cooldown(){return this.mods.has(`snap`)?Gh*Ag:this.mods.has(`lanceVigil`)?Gh*Mg:Gh}update(e){let t=this.state;t.x=e.originX,t.y=e.originY,t.length=Math.hypot(e.bounds.x,e.bounds.y),t.offset=0,t.erode=0,t.orb=0,t.orbAlpha=0;for(let t of this.seats)t&&(t.live=Math.max(0,t.live-e.dt));this.phase===`cooling`&&(this.timer-=e.dt,this.timer<=0?(this.phase=`aiming`,this.timer=0,I.play(`lanceCharge`),e.wisp.charge(this.fireAt())):(t.fraction=0,t.intensity=0)),this.phase===`aiming`&&(this.timer+=e.dt,this.lockX=e.aimX,this.lockY=e.aimY,this.lockAngle=Math.atan2(e.aimY,e.aimX),this.timer>=this.lockAt()?this.phase=`locked`:this.aim(this.timer)),this.phase===`locked`&&(this.timer+=e.dt,this.timer>=this.fireAt()?(this.thrust(e),this.phase=`cooling`,this.timer=Math.max(Wg,this.cooldown()-this.rebate),this.rebate=0):this.lock()),(this.phase===`aiming`||this.phase===`locked`)&&this.chargeSparks(e),this.mods.has(`hoarfrost`)&&(this.phase===`aiming`||this.phase===`locked`)&&this.frost(e),this.step(e,this.main,this.phase===`cooling`);for(let t of this.seats)t&&(t.live>0&&(t.strike.x=t.x,t.strike.y=t.y),this.step(e,t.strike,this.phase===`cooling`));this.drawForms(e,t);for(let e of this.seats)e&&this.drawSeat(e,t)}seat(e,t){let n=t.slot??0,r=this.seats[n];r||(r=new l_,this.seats[n]=r),r.live=Jg,r.x=t.x,r.y=t.y,r.dirX=t.dirX,r.dirY=t.dirY,this.phase!==`locked`&&(r.lockX=t.dirX,r.lockY=t.dirY),r.share=t.share,r.credit=t.credit,this.ensureSeat(e,r)}step(e,t,n){t.anchored&&(t.x=e.originX,t.y=e.originY);let r=t.state;if(r.x=t.x,r.y=t.y,r.length=Math.hypot(e.bounds.x,e.bounds.y),r.offset=0,r.fraction=0,r.intensity=0,r.erode=0,r.orb=0,r.orbAlpha=0,t.echoA>0&&(t.echoA-=e.dt,t.echoA<=0&&(t.echoA=0,this.echo(e,t,qg[0]))),t.echoB>0&&(t.echoB-=e.dt,t.echoB<=0&&(t.echoB=0,this.echo(e,t,qg[1]))),t.flashLeft>0){t.flashLeft-=e.dt;let n=Math.max(0,t.flashLeft);this.flash(e,t,n>=qh?1:n/qh)}if(t.emberLeft>0){for(t.emberLeft-=e.dt,t.emberTimer+=e.dt;t.emberTimer>=Rg;)t.emberTimer-=Rg,this.sear(e,t);n&&t.flashLeft<=0&&(this.ember(e,t),this.emberSparks(e,t))}}ensureForms(e){if(this.formPool===e.forms&&(this.main.sun===null||this.main.sun.alive))return;let t=e.forms;this.removeForms(),this.formPool=t,this.aimLine=this.createAimLine(t,Xg),this.aimHaze=this.createAimHaze(t,Xg),this.createStrikeForms(t,this.main,!1)}createAimLine(t,n){return t.create({layout:{kind:`line`,length:mg},size:2.4,spacing:2,jitter:.1,core:.9,color:e.meta.core,to:e.meta.color,gradient:`along`,twinkle:.15,max:n})}createAimHaze(t,n){return t.create({layout:{kind:`beam`,length:mg,width:12.2},size:3.4,spacing:4.5,jitter:.35,kind:`flame`,stretch:1.8,core:.5,color:e.meta.color,to:Jh,gradient:`across`,twinkle:.4,wobble:.8,max:n})}createStrikeForms(t,n,r){let i=e.meta.color,a=e.meta.core;n.pool=t,n.core=t.create({layout:{kind:`beam`,length:mg,width:pg*2},size:5,spacing:4,jitter:.25,kind:`streak`,stretch:2.2,core:1,color:a,to:i,gradient:`across`,wobble:.6,max:r?Zg:Xg}),n.halo=t.create({layout:{kind:`beam`,length:mg,width:77.7},size:8,spacing:8.5,jitter:.4,kind:`flame`,stretch:1.8,core:.6,color:i,to:Jh,gradient:`across`,twinkle:.25,wobble:1.5,max:r?Qg:Xg}),n.sun=t.create({layout:{kind:`disc`,radius:fg},size:4.2,spacing:3.4,jitter:.3,core:1,color:a,to:i,gradient:`radius`,order:`radius`,twinkle:.1,wobble:.5}),n.rim=t.create({layout:{kind:`ring`,radius:fg*1.02,width:9},size:6,spacing:5.5,jitter:.35,kind:`flame`,stretch:1.5,facing:`tangent`,core:.7,color:i,to:Jh,gradient:`across`,order:`angle`,twinkle:.2,wobble:.8})}ensureSeat(e,t){let n=t.aimLine,r=t.strike.sun;if(t.pool===e.forms&&n!==null&&n.alive&&r!==null&&r.alive)return;this.removeSeatForms(t);let i=e.forms;t.pool=i,t.aimLine=this.createAimLine(i,$g),t.aimHaze=this.createAimHaze(i,e_),this.createStrikeForms(i,t.strike,!0),t.aimLine&&(t.aimLine.alpha=0),t.aimHaze&&(t.aimHaze.alpha=0),this.hideStrike(t.strike)}drawForms(e,t){this.ensureForms(e);let n=this.aimLine,r=this.aimHaze;n&&r&&this.poseAim(n,r,t.x,t.y,t.angle,this.aiming(t),t),this.drawStrike(this.main)}aiming(e){return e.intensity>0&&e.fraction>0&&this.phase!==`cooling`}poseAim(e,t,n,r,i,a,o){let s=Math.max(0,o.length-o.offset)*o.fraction/mg;o_(e,n,r,i,+!!a,s,0),o_(t,n,r,i,+!!a,s,0);let c=Math.min(1,o.intensity/a_);e.size=Math.max(.2,o.coreWidth/n_),e.intensity=o.intensity*_g,e.pulse=.9*c,e.pulseSpeed=.8+1.6*c,e.pulseWaves=5,e.pulseSharp=6,e.flow=xg+360*c,t.flow=Sg,t.band=(o.coreWidth+o.halo)/6.1,t.intensity=o.intensity*vg}drawSeat(e,t){let n=e.aimLine,r=e.aimHaze;if(n&&r){let i=Math.atan2(e.lockY,e.lockX),a=e.live>0&&this.aiming(t);this.poseAim(n,r,e.x,e.y,i,a,t)}this.drawStrike(e.strike)}drawStrike(e){let t=e.state,n=Math.cos(t.angle),r=Math.sin(t.angle),i=t.intensity>0&&t.fraction>0&&t.offset>0,a=Math.max(0,t.length-t.offset)*t.fraction/mg,o=t.x+n*t.offset,s=t.y+r*t.offset,c=e.core,l=e.halo;c&&l&&(o_(c,o,s,t.angle,+!!i,a,t.erode),o_(l,o,s,t.angle,+!!i,a,t.erode),c.band=t.coreWidth/pg,c.intensity=t.intensity*hg,c.pulse=.5,c.pulseSpeed=3,c.pulseWaves=12,c.pulseSharp=3,c.flow=yg,l.flow=bg,l.band=(t.coreWidth+t.halo)/38.85,l.intensity=t.intensity*gg);let u=e.sun,d=e.rim;if(u&&d){let e=t.orb>0&&t.orbAlpha>0,i=t.x+n*t.orbOffset,a=t.y+r*t.orbOffset,o=e?t.orbAlpha:0;o_(u,i,a,t.angle,o,1,t.erode),o_(d,i,a,t.angle,o,1,t.erode),u.scale=t.orb/fg,d.scale=u.scale,u.pulse=.35,u.pulseSpeed=1.2,u.pulseWaves=2,u.pulseSharp=3,u.swirl=Cg,u.swirlInner=wg,d.swirl=Tg,d.pulse=.8,d.pulseSpeed=.7,d.pulseWaves=3,d.pulseSharp=5}}hideStrike(e){e.core&&(e.core.alpha=0),e.halo&&(e.halo.alpha=0),e.sun&&(e.sun.alpha=0),e.rim&&(e.rim.alpha=0)}removeForms(){let e=this.formPool;e&&(e.remove(this.aimLine),e.remove(this.aimHaze)),this.aimLine=null,this.aimHaze=null,this.removeStrikeForms(this.main)}removeSeatForms(e){let t=e.pool;t&&(t.remove(e.aimLine),t.remove(e.aimHaze)),e.pool=null,e.aimLine=null,e.aimHaze=null,this.removeStrikeForms(e.strike)}removeStrikeForms(e){let t=e.pool;t&&(t.remove(e.core),t.remove(e.halo),t.remove(e.sun),t.remove(e.rim)),e.pool=null,e.core=null,e.halo=null,e.sun=null,e.rim=null}aim(e){let t=this.state,n=this.lockAt(),r=Math.min(1,e/n),i=Math.min(t_,n*.5),a=Math.min(1,e/i),o=a*a*(3-2*a);t.angle=this.lockAngle,t.fraction=1,t.coreWidth=n_*o,t.halo=(r_+2.5*r)*o,t.dash=0,t.intensity=(i_+.3*r)*o}lock(){this.aim(this.lockAt())}frost(e){if(this.frostTimer+=e.dt,!(this.frostTimer<Ng))for(;this.frostTimer>=Ng;){this.frostTimer-=Ng,this.frostLine(e,e.originX,e.originY,this.lockX,this.lockY);for(let t of this.seats)t&&t.live>0&&this.frostLine(e,t.x,t.y,t.lockX,t.lockY)}}frostLine(e,t,n,r,i){let a=this.state.length;e.enemies.querySegment(t,n,t+r*a,n+i*a,pg,t=>{e.enemies.chill(t,Pg),this.frostSpec.x=e.enemies.x[t],this.frostSpec.y=e.enemies.y[t],e.sparks.emit(this.frostSpec)})}sear(e,t){let n=Wh*zg*this.mods.damage*t.share,r=t.credit??`lanceEmber`;e.enemies.queryCircle(t.emberX,t.emberY,fg,t=>{e.hit(t,n,!0,r),e.enemies.ignite(t,Bg,Vg)})}ember(e,t){let n=t.state,r=Math.max(0,t.emberLeft)/Lg;n.angle=t.emberAngle,n.offset=J,n.fraction=0,n.coreWidth=0,n.halo=0,n.dash=0,n.intensity=0,n.erode=1-r,n.orb=fg*(.7+.3*Math.sin(e.elapsed*3)),n.orbAlpha=.5*r}echo(e,t,n){I.play(`lanceShoot`),t.flashLeft=qh*n,this.pierce(e,t,n*t.share,t.credit??`lanceEcho`),this.blast(e,t,n*t.look)}chargeSparks(e){let t=Math.min(1,this.timer/this.lockAt());this.chargeCarry+=(Yh+840*t)*e.dt;let n=Math.floor(this.chargeCarry);if(this.chargeCarry-=n,n>0){let t=this.chargeSpec;t.x=e.originX,t.y=e.originY,t.count=n,t.ring=Xh+Math.random()*55,e.sparks.emit(t)}let r=$h*t,{originX:i,originY:a}=e,{lockX:o,lockY:s}=this;this.aimCarry=this.aimSparks(e,this.aimCarry,r,i,a,o,s);for(let t of this.seats){if(!t||t.live<=0)continue;let n=Math.min(1,Math.max(Yg,t.share)),{x:i,y:a}=t;t.aimCarry=this.aimSparks(e,t.aimCarry,r*n,i,a,t.lockX,t.lockY)}}aimSparks(e,t,n,r,i,a,o){let s=t+n*e.dt,c=Math.floor(s);if(c<=0)return s;let l=this.aimSpec,u=this.state.length*.55;return l.x=r+a*J,l.y=i+o*J,l.line.x=r+a*u,l.line.y=i+o*u,l.angle=Math.atan2(o,a),l.count=c,e.sparks.emit(l),s-c}blast(t,n,r){let i=e.meta.color,a=e.meta.core,o=n.angle+Math.PI,s=n.x,c=n.y,l=Math.hypot(t.bounds.x,t.bounds.y),u=s+n.dirX*J,d=c+n.dirY*J,f={x:s+n.dirX*l,y:c+n.dirY*l},p=e=>Math.round(e*r);t.sparks.emit({x:s,y:c,count:p(eg),disc:dg*.5,angle:o,arc:ng,speed:[160,560],life:[.3,.75],size:[2.5,4.5],endSize:.2,color:a,to:i,drag:3.2,curl:10,core:.9,fade:1.2,kind:`streak`,stretch:.035}),t.sparks.emit({x:s,y:c,count:p(tg),disc:dg,angle:o,arc:ng*1.4,speed:[40,200],life:[.5,1.1],size:[3,6],endSize:.3,color:i,to:Jh,drag:2,curl:26,core:.55,twinkle:.3,kind:`flame`,stretch:.012}),t.sparks.emit({x:u,y:d,line:f,count:p(rg),angle:o,arc:.5,speed:[60,260],normal:[30,190],delayAlong:ag,life:[.35,.9],size:[2,3.5],endSize:.2,color:a,to:i,drag:2.8,curl:14,core:.85,kind:`streak`,stretch:.03}),t.sparks.emit({x:u,y:d,line:f,count:p(ig),speed:[0,30],normal:[10,60],delayAlong:ag*1.6,life:[.8,1.6],size:[2.5,5],endSize:.25,color:i,to:Jh,drag:1.6,gravity:-24,curl:20,core:.5,twinkle:.5,fade:.8,kind:`flame`,stretch:.012}),t.sparks.emit({x:u,y:d,count:p(og),ring:fg*.6,radial:!0,arc:.4,speed:[120,420],life:[.25,.6],size:[2.5,4],endSize:.2,color:a,to:i,drag:3,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:u,y:d,count:p(sg),disc:fg*.8,radial:!0,speed:[20,120],life:[.6,1.2],size:[4,7],endSize:.3,color:i,to:Jh,drag:1.8,curl:30,core:.6,twinkle:.4,kind:`flame`,stretch:.012})}emberSparks(e,t){let n=Math.max(0,t.emberLeft)/Lg;t.emberCarry+=ug*n*e.dt;let r=Math.floor(t.emberCarry);if(t.emberCarry-=r,r===0)return;let i=this.emberSpec;i.x=t.emberX,i.y=t.emberY,i.count=r,e.sparks.emit(i)}flash(e,t,n){let r=t.state,i=1-(1-n)**3,a=1-n;r.angle=t.angle,r.offset=J,r.fraction=1,r.coreWidth=pg*(.35+.65*i),r.halo=24*i,r.dash=0,r.intensity=2.2*(.35+.65*i),r.erode=a,r.orb=fg*(.55+.45*i),r.orbAlpha=.4+.6*i,this.shed(e,t,n)}shed(e,t,n){let r=t.state.length;t.decayCarry+=cg*n*t.look*e.dt;let i=Math.floor(t.decayCarry);if(t.decayCarry-=i,i>0){let n=this.decayBeamSpec;n.x=t.x+t.dirX*J,n.y=t.y+t.dirY*J,n.line.x=t.x+t.dirX*r,n.line.y=t.y+t.dirY*r,n.angle=t.angle+Math.PI,n.count=i,e.sparks.emit(n)}t.orbCarry+=lg*n*t.look*e.dt;let a=Math.floor(t.orbCarry);if(t.orbCarry-=a,a>0){let n=this.decayOrbSpec;n.x=t.x+t.dirX*J,n.y=t.y+t.dirY*J,n.ring=t.state.orb*.8,n.count=a,e.sparks.emit(n)}}pierce(e,t,n,r){let i=Math.hypot(e.bounds.x,e.bounds.y),a=t.x,o=t.y,s=a+t.dirX*i,c=o+t.dirY*i;this.onLine.length=0,e.enemies.querySegment(a,o,s,c,pg,n=>{let r=(e.enemies.x[n]-a)*t.dirX+(e.enemies.y[n]-o)*t.dirY;this.onLine.push({index:n,along:r})}),this.onLine.sort((e,t)=>e.along-t.along);let l=a+t.dirX*J,u=o+t.dirY*J;e.enemies.queryCircle(l,u,fg,e=>{this.onLine.some(t=>t.index===e)||this.onLine.push({index:e,along:0})}),this.onLine.sort((e,t)=>e.along-t.along);let d=this.mods.has(`spearhead`),f=this.mods.has(`impale`),p=d||f?1:Dg,m=Math.min(this.onLine.length,Eg+this.mods.count);d?m=Math.min(this.onLine.length,1):f&&(m=this.onLine.length);let h=d?1:.6,g=this.mods.has(`hoarfrost`),_=r===void 0&&this.mods.has(`quench`),v=0,y=Wh*this.mods.damage*n*(d?Og:1);for(let n=0;n<m;n++){let{index:i}=this.onLine[n];e.hit(i,y,!1,r),_&&e.enemies.alive[i]===0&&v++,g&&e.enemies.freeze(i,Fg),e.impacts.pop(e.enemies.x[i],e.enemies.y[i],h),this.hitSpec.x=e.enemies.x[i],this.hitSpec.y=e.enemies.y[i],this.hitSpec.angle=t.angle,e.sparks.emit(this.hitSpec),y*=p}_&&(this.rebate=Math.min(Ug,v*Hg))}thrust(e){I.play(`lanceShoot`),e.wisp.flash(1.2);let t=this.main;t.x=e.originX,t.y=e.originY,t.dirX=this.lockX,t.dirY=this.lockY,t.angle=this.lockAngle,t.share=1,t.credit=void 0,t.look=1,this.frostTimer=0,this.release(e,t,.75);for(let t of this.seats){if(!t||t.live<=0)continue;let n=t.strike;n.x=t.x,n.y=t.y,n.dirX=t.lockX,n.dirY=t.lockY,n.angle=Math.atan2(t.lockY,t.lockX),n.share=t.share,n.credit=t.credit,n.look=Math.min(1,Math.max(Yg,t.share)),this.release(e,n,.75)}}release(e,t,n){t.flashLeft=n,this.pierce(e,t,t.share,t.credit),this.mods.has(`ember`)&&(t.emberX=t.x+t.dirX*J,t.emberY=t.y+t.dirY*J,t.emberAngle=t.angle,t.emberLeft=Lg,t.emberTimer=0),this.mods.has(`lanceEcho`)&&(t.echoA=Gg,t.echoB=Kg),this.blast(e,t,t.look);let r=t.x+t.dirX*J,i=t.y+t.dirY*J;e.synergy.react(e,`lance`,`impact`,r,i,-1,t.dirX,t.dirY)}dispose(){this.beam.dispose(),this.removeForms();for(let e of this.seats)e&&this.removeSeatForms(e);this.seats.length=0}},d_=1.8,f_=.4,p_=7,m_=class{object;capacity;offsets;bodies;turns;spin;geometry;material;count=0;constructor(e,t,n=24){this.capacity=e,this.offsets=new Float32Array(e*2),this.bodies=new Float32Array(e*3),this.turns=new Float32Array(e*4),this.spin=new Float32Array(e*4);for(let t=0;t<e;t++)this.spin[t*4+3]=1;let r=new xe(1,1);this.geometry=new me,this.geometry.index=r.index,this.geometry.setAttribute(`position`,r.attributes.position),this.geometry.setAttribute(`aOffset`,new j(this.offsets,2)),this.geometry.setAttribute(`aBody`,new j(this.bodies,3)),this.geometry.setAttribute(`aTurn`,new j(this.turns,4)),this.geometry.instanceCount=0,this.material=new Ee({vertexShader:Dn,fragmentShader:On,uniforms:{uTime:{value:0},uGain:{value:R},uPixelScale:Nt,uHalo:{value:d_},uDeep:{value:new N(t.deep)},uColor:{value:new N(t.color)},uCore:{value:new N(t.core)},uHot:{value:new N(t.hot)}},transparent:!0,depthTest:!1,depthWrite:!1,blending:2}),this.object=new pe(this.geometry,this.material),this.object.frustumCulled=!1,this.object.renderOrder=n}begin(e){this.count=0,this.material.uniforms.uTime.value=e}add(e,t,n,r,i,a,o,s){if(this.count>=this.capacity||r<=0||i<=0)return;let c=e*4;this.roll(c,r,a,o,s);let l=this.count++;this.offsets[l*2]=t,this.offsets[l*2+1]=n,this.bodies[l*3]=r,this.bodies[l*3+1]=Math.min(1,i),this.bodies[l*3+2]=e*.618034%1,this.turns[l*4]=-this.spin[c],this.turns[l*4+1]=-this.spin[c+1],this.turns[l*4+2]=-this.spin[c+2],this.turns[l*4+3]=this.spin[c+3]}end(){if(this.geometry.instanceCount=this.count,this.count===0)return;let e=this.geometry.attributes;e.aOffset.needsUpdate=!0,e.aBody.needsUpdate=!0,e.aTurn.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}roll(e,t,n,r,i){let a=Math.hypot(n,r);if(a<=0||i<=0)return;let o=Math.min(p_,a/t*f_)*i*.5,s=Math.sin(o)/a,c=-r*s,l=n*s,u=Math.cos(o),d=this.spin,f=d[e],p=d[e+1],m=d[e+2],h=d[e+3],g=u*f+c*h+l*m,_=u*p+l*h-c*m,v=u*m+c*p-l*f,y=u*h-c*f-l*p,b=Math.sqrt(g*g+_*_+v*v+y*y)||1;d[e]=g/b,d[e+1]=_/b,d[e+2]=v/b,d[e+3]=y/b}},h_=55,g_=2.2,__=140,v_=18,y_=.36,b_=7,x_=6,S_=.3,Y=12,C_=.72,w_=.55,T_=.35,E_=1.2,D_=1.5,O_=2.6,k_=5,A_=260,j_=3,M_=420,N_=1.1,P_=2.5,F_=280,I_=7,L_=.7,R_=16,z_=1.2,B_=.04,V_=2.5,H_=5973448,U_=16751344,W_=110,G_=34,K_=70,q_=.25,J_=1,Y_=40,X_=14,Z_=60,Q_=36,$_=.45,ev=22,tv=6,nv=36,rv=26,iv=12,av=12,ov=40,sv=18,cv=260,lv=140,uv=70,dv=26,fv=3.5,pv=.5,mv=36,hv=14,gv=40,_v=2,vv=.5,yv=20,bv=4,xv=.3,Sv=.35;function Cv(e,t,n){return e*t/(1-Math.exp(-t*n))}var wv=class e{static meta={id:`orbs`,kind:`passive`,color:11562239,core:15787775,base:{damage:h_,rate:1/g_,area:v_,speed:__,count:x_,critChance:6,critDamage:160},scales:{attackSpeed:1.5,damage:1,critChance:.5,critDamage:.5,area:.25,projectileSpeed:1}};id=e.meta.id;object;body;x=new Float32Array(Y);y=new Float32Array(Y);vx=new Float32Array(Y);vy=new Float32Array(Y);life=new Float32Array(Y);hitCooldown=new Float32Array(Y);share=new Float32Array(Y);credit=Array(Y).fill(void 0);grade=new Float32Array(Y);timer=1;cursor=0;mods=new F;cloudCarry=new Float32Array(Y);edgeCarry=new Float32Array(Y);emberCarry=new Float32Array(Y);suctionCarry=new Float32Array(Y);threadCarry=new Float32Array(R_);cloudSize=[3,6];suctionSpeed=[100,140];devourSpeed=[80,100];threadEnd={x:0,y:0};cloudSpec={x:0,y:0,disc:5,speed:[5,30],life:[.35,.7],size:this.cloudSize,endSize:.1,color:e.meta.color,to:H_,drag:2.5,curl:10,core:.5};edgeSpec={x:0,y:0,ring:7,radial:!0,arc:.8,speed:[30,100],life:[.2,.45],size:[1.6,2.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.5,core:.85,kind:`streak`,stretch:.04};emberSpec={x:0,y:0,disc:6,speed:[10,40],gravity:-40,life:[.5,1],size:[2,3.5],endSize:.3,color:U_,to:H_,drag:1.5,core:.4,twinkle:.5};crushSpec={x:0,y:0,ring:15,radial:!0,arc:.5,speed:[70,200],life:[.14,.3],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03};splashSpec={x:0,y:0,count:tv,arc:1.2,speed:[60,220],life:[.12,.28],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:.85,kind:`streak`,stretch:.03};bounceSpec={x:0,y:0,count:nv,ring:8,radial:!0,even:!0,speed:[70,100],life:[.14,.24],size:[2.2,3.4],endSize:.3,color:e.meta.core,to:e.meta.color,drag:3.5,core:.8};streakSpec={x:0,y:0,arc:1.2,speed:[90,300],life:[.14,.32],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03};dustSpec={x:0,y:0,count:iv,disc:8,speed:[15,80],life:[.4,.8],size:[3,5.5],endSize:.3,color:e.meta.color,to:H_,drag:2.2,curl:16,core:.35,twinkle:.3};suctionSpec={x:0,y:0,ring:54,radial:!0,turn:Math.PI*.88,arc:.2,speed:this.suctionSpeed,life:[vv*.8,vv],size:[1.8,3],endSize:.3,color:e.meta.color,to:e.meta.core,drag:_v,core:.6};devourSpec={x:0,y:0,count:yv,ring:20,radial:!0,even:!0,turn:Math.PI,speed:this.devourSpeed,life:xv,size:[2,3.2],endSize:.4,color:e.meta.color,to:e.meta.core,drag:bv,core:.9};threadSpec={x:0,y:0,line:this.threadEnd,arc:.3,speed:[20,80],normal:[0,16],life:[.15,.32],size:[1.5,2.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,curl:4,core:.85};constructor(){this.body=new m_(Y,{deep:H_,color:e.meta.color,core:e.meta.core,hot:U_}),this.object=this.body.object}actions={pace:e=>this.pace(e),fire:(e,t)=>this.launch(e,t.x,t.y,t.dirX,t.dirY,t.share,t.credit)};configure(e){this.mods=e}pace(t){return Gr(g_,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate)}update(t){if(this.timer-=t.dt,this.timer<=0){let e=this.pace(t);this.timer+=e.interval,this.fire(t,e.damage)}let n=v_*U(e.meta,t.stats,`area`)*this.mods.size,r=__*U(e.meta,t.stats,`projectileSpeed`)*P_,i=t.bounds.x/2,a=t.bounds.y/2,o=this.mods.visualScale(),s=this.mods.has(`clump`),c=this.mods.has(`burnout`),l=this.mods.has(`wake`),u=this.mods.has(`quicken`),d=this.mods.has(`feast`),f=0,p=0,m=0;if(s)for(let e=0;e<Y;e++)this.life[e]<=0||(f+=this.x[e],p+=this.y[e],m++);this.body.begin(t.elapsed);for(let e=0;e<Y;e++){if(this.life[e]<=0)continue;if(this.life[e]-=t.dt,this.life[e]<=0){c?this.burnout(t,e,n):this.fizzle(t,e,n);continue}if(s&&m>=2){let n=(f-this.x[e])/(m-1),r=(p-this.y[e])/(m-1),i=Math.hypot(this.vx[e],this.vy[e]);if(i>0){let a=Math.atan2(r-this.y[e],n-this.x[e]),o=Math.atan2(this.vy[e],this.vx[e]),s=a-o;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;let c=D_*t.dt,l=Math.max(-c,Math.min(c,s));this.vx[e]=Math.cos(o+l)*i,this.vy[e]=Math.sin(o+l)*i}}if(this.x[e]+=this.vx[e]*t.dt,this.y[e]+=this.vy[e]*t.dt,l){let r=n*this.grade[e]*j_;t.enemies.queryCircle(this.x[e],this.y[e],r,n=>{t.enemies.pull(n,this.x[e],this.y[e],M_,t.dt)}),this.suction(t,e,r)}if((this.x[e]<-i||this.x[e]>i)&&(this.x[e]=Math.max(-i,Math.min(i,this.x[e])),this.vx[e]=-this.vx[e],this.bounce(t,e,n)),(this.y[e]<-a||this.y[e]>a)&&(this.y[e]=Math.max(-a,Math.min(a,this.y[e])),this.vy[e]=-this.vy[e],this.bounce(t,e,n)),this.hitCooldown[e]>0&&(this.hitCooldown[e]-=t.dt),this.hitCooldown[e]<=0){let i=h_*this.mods.damage*this.share[e]*this.grade[e],a=this.credit[e],o=0,s=0;t.enemies.queryCircle(this.x[e],this.y[e],n*this.grade[e],n=>{o++,t.hit(n,i,!1,a),d&&t.enemies.alive[n]===0&&s++,this.splash(t,e,n)}),s>0&&(this.life[e]=Math.min(b_*this.mods.duration,this.life[e]+s*z_),this.grade[e]=Math.min(V_,this.grade[e]+s*B_),this.devour(t,e,n)),o>0&&(this.hitCooldown[e]=S_,this.crush(t,e,n),u&&Math.hypot(this.vx[e],this.vy[e])<r&&(this.vx[e]*=N_,this.vy[e]*=N_,this.boost(t,e)))}let h=Math.min(1,this.life[e]),g=n*o*this.grade[e],_=this.x[e],v=this.y[e];this.body.add(e,_,v,g*y_,h,this.vx[e],this.vy[e],t.dt),this.trail(t,e,g,h)}this.mods.has(`orbWeave`)&&this.weave(t),this.body.end()}fire(t,n){let r=Math.min(Y,x_+this.mods.count),i=0;for(let e=0;e<Y;e++)this.life[e]>0&&i++;let a=i<r?Go(this.life,this.cursor):-1;if(a<0&&(a=Ko(this.life)),a<0)return;I.play(`orb`),this.life[a]>0&&this.fizzle(t,a,v_);let o=__*U(e.meta,t.stats,`projectileSpeed`);this.cursor=(a+1)%Y,this.x[a]=t.originX,this.y[a]=t.originY,this.vx[a]=t.aimX*o,this.vy[a]=t.aimY*o,this.life[a]=b_*this.mods.duration,this.hitCooldown[a]=0,this.share[a]=n,this.credit[a]=void 0,this.grade[a]=1,this.heave(t,t.originX,t.originY,t.aimX,t.aimY,1)}launch(t,n,r,i,a,o,s){let c=Go(this.life,this.cursor);if(c<0)return;let l=__*U(e.meta,t.stats,`projectileSpeed`);this.cursor=(c+1)%Y,this.x[c]=n,this.y[c]=r,this.vx[c]=i*l,this.vy[c]=a*l,this.life[c]=b_*this.mods.duration,this.hitCooldown[c]=0,this.share[c]=o,this.credit[c]=s,this.grade[c]=1,this.heave(t,n,r,i,a,$_)}bounce(e,t,n){e.synergy.react(e,`orbs`,`impact`,this.x[t],this.y[t])||e.impacts.pop(this.x[t],this.y[t],.45),this.rebound(e,t,n);let r=this.grade[t];this.cleave(t,n),this.grade[t]<r&&this.split(e,t)}cleave(e,t){if(!this.mods.has(`cleave`)||this.grade[e]<=T_)return;let n=Go(this.life,this.cursor);if(n<0)return;let r=Math.hypot(this.vx[e],this.vy[e]),i=Math.atan2(this.vy[e],this.vx[e]),a=t*E_,o=i+w_,s=i-w_;this.life[e]*=.5,this.grade[e]*=C_,this.vx[e]=Math.cos(o)*r,this.vy[e]=Math.sin(o)*r,this.x[n]=this.x[e],this.y[n]=this.y[e],this.life[n]=this.life[e],this.share[n]=this.share[e],this.credit[n]=this.credit[e],this.grade[n]=this.grade[e],this.hitCooldown[n]=0,this.vx[n]=Math.cos(s)*r,this.vy[n]=Math.sin(s)*r,this.x[e]+=Math.cos(o)*a,this.y[e]+=Math.sin(o)*a,this.x[n]+=Math.cos(s)*a,this.y[n]+=Math.sin(s)*a,this.cursor=(n+1)%Y}burnout(e,t,n){let r=this.x[t],i=this.y[t],a=n*this.grade[t]*O_,o=h_*this.mods.damage*this.share[t]*this.grade[t]*k_;e.enemies.queryCircle(r,i,a,t=>{e.hit(t,o,!1,`orbsBurnout`),e.enemies.knockback(t,r,i,A_)}),e.impacts.pop(r,i,1),e.shock.ring(r,i,a,.6,26,140),this.explode(e,t,a)}weave(t){let n=F_*U(e.meta,t.stats,`area`)*this.mods.size,r=h_*this.mods.damage*L_*t.dt,i=0;for(let a=0;a<Y&&i<R_;a++)if(!(this.life[a]<=0))for(let o=a+1;o<Y&&i<R_;o++){if(this.life[o]<=0)continue;let s=this.x[a],c=this.y[a],l=this.x[o],u=this.y[o];Math.hypot(l-s,u-c)>n||(i++,t.arcs.strike(s,c,l,u,{color:e.meta.color,nodes:6,jitter:3,life:.08,weight:1.5}),t.enemies.querySegment(s,c,l,u,I_,e=>{t.hit(e,r,!0,`orbsWeave`)}),this.thread(t,i-1,s,c,l,u))}}trail(e,t,n,r){let i=this.x[t],a=this.y[t];this.cloudCarry[t]+=W_*r*e.dt;let o=Math.floor(this.cloudCarry[t]);if(this.cloudCarry[t]-=o,o>0){let r=this.cloudSpec;r.x=i,r.y=a,r.disc=n*.3,r.vx=-this.vx[t]*q_,r.vy=-this.vy[t]*q_,r.count=o,this.cloudSize[0]=Math.min(5,n*.18),this.cloudSize[1]=Math.min(9,n*.34),e.sparks.emit(r)}this.edgeCarry[t]+=G_*r*e.dt;let s=Math.floor(this.edgeCarry[t]);if(this.edgeCarry[t]-=s,s>0){let r=this.edgeSpec;r.x=i,r.y=a,r.ring=n*.4,r.vx=this.vx[t]*.4,r.vy=this.vy[t]*.4,r.count=s,e.sparks.emit(r)}let c=1-Math.min(1,this.life[t]/J_);if(c<=0)return;this.emberCarry[t]+=K_*c*e.dt;let l=Math.floor(this.emberCarry[t]);if(this.emberCarry[t]-=l,l===0)return;let u=this.emberSpec;u.x=i,u.y=a,u.disc=n*.35,u.count=l,e.sparks.emit(u)}heave(t,n,r,i,a,o){let s=Math.atan2(a,i),c=s+Math.PI;t.sparks.emit({x:n+i*8,y:r+a*8,count:Math.round(Y_*o),disc:5,angle:s,arc:.6,speed:[120,360],life:[.12,.3],size:[2,3.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:r,count:Math.round(X_*o),disc:8,speed:[10,60],life:[.1,.22],size:[6,11],endSize:.4,color:e.meta.core,to:e.meta.color,drag:5,core:1}),t.sparks.emit({x:n,y:r,count:Math.round(Z_*o),disc:6,angle:c,arc:1.3,speed:[60,260],life:[.25,.55],size:[2,3.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,curl:10,core:.85,kind:`streak`,stretch:.035}),t.sparks.emit({x:n,y:r,count:Math.round(Q_*o),disc:10,angle:c,arc:1.8,speed:[20,130],life:[.5,1],size:[3.5,6.5],endSize:.3,color:e.meta.color,to:H_,drag:2,curl:24,core:.35,twinkle:.3})}crush(e,t,n){let r=this.grade[t],i=this.crushSpec;i.x=this.x[t],i.y=this.y[t],i.ring=n*r*.85,i.count=Math.round(ev*Math.min(2,r)),e.sparks.emit(i)}splash(e,t,n){let r=e.enemies.x[n],i=e.enemies.y[n],a=this.splashSpec;a.x=r,a.y=i,a.angle=Math.atan2(i-this.y[t],r-this.x[t]),e.sparks.emit(a)}rebound(e,t,n){let r=this.x[t],i=this.y[t],a=n*this.grade[t],o=this.bounceSpec;o.x=r,o.y=i,o.ring=a*.45,e.sparks.emit(o);let s=this.streakSpec;s.x=r,s.y=i,s.angle=Math.atan2(this.vy[t],this.vx[t]),s.arc=1.2,s.count=rv,e.sparks.emit(s);let c=this.dustSpec;c.x=r,c.y=i,c.disc=a*.4,e.sparks.emit(c)}boost(e,t){let n=this.streakSpec;n.x=this.x[t],n.y=this.y[t],n.angle=Math.atan2(this.vy[t],this.vx[t])+Math.PI,n.arc=.5,n.count=av,e.sparks.emit(n)}split(t,n){let r=(this.cursor+Y-1)%Y;t.sparks.emit({x:this.x[n],y:this.y[n],line:{x:this.x[r],y:this.y[r]},count:ov,even:!0,speed:[0,30],normal:[40,140],life:[.18,.36],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03});let i=this.streakSpec;i.arc=.4,i.count=sv;for(let e=0;e<2;e++){let a=e===0?n:r;i.x=this.x[a],i.y=this.y[a],i.angle=Math.atan2(this.vy[a],this.vx[a]),t.sparks.emit(i)}}explode(t,n,r){let i=this.x[n],a=this.y[n],o=Math.min(1.6,.4+.6*this.grade[n]),s=r/O_,c=Cv(r,fv,pv);t.sparks.emit({x:i,y:a,count:Math.round(dv*o),disc:s*.3,speed:[10,80],life:[.1,.24],size:[8,14],endSize:.5,color:e.meta.core,to:U_,drag:5,core:1}),t.sparks.emit({x:i,y:a,count:Math.round(cv*o),ring:s*.4,radial:!0,arc:.3,speed:[c*.45,c],life:[pv*.6,pv],size:[2.2,4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:fv,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:i,y:a,count:Math.round(lv*o),disc:s*.6,radial:!0,speed:[20,r*1.6],life:[.6,1.1],size:[3.5,6.5],endSize:.3,color:e.meta.color,to:H_,drag:2,curl:22,core:.35,twinkle:.3}),t.sparks.emit({x:i,y:a,count:Math.round(uv*o),disc:r*.5,speed:[10,60],gravity:-50,life:[.8,1.5],size:[2,3.8],endSize:.3,color:U_,to:H_,drag:1.4,core:.5,twinkle:.6})}fizzle(t,n,r){let i=this.x[n],a=this.y[n],o=r*this.grade[n];t.sparks.emit({x:i,y:a,count:mv,ring:o*.35,radial:!0,arc:.8,speed:[20,70],life:[.4,.8],size:[2.5,4.5],endSize:.3,color:e.meta.color,to:H_,drag:2,curl:16,core:.4,twinkle:.3}),t.sparks.emit({x:i,y:a,count:hv,ring:o*.35,radial:!0,arc:.5,speed:[40,120],life:[.15,.3],size:[1.6,2.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.85,kind:`streak`,stretch:.03})}suction(e,t,n){this.suctionCarry[t]+=gv*e.dt;let r=Math.floor(this.suctionCarry[t]);if(this.suctionCarry[t]-=r,r===0)return;let i=Cv(n*.85,_v,vv);this.suctionSpeed[0]=i*.75,this.suctionSpeed[1]=i;let a=this.suctionSpec;a.x=this.x[t],a.y=this.y[t],a.ring=n,a.vx=this.vx[t],a.vy=this.vy[t],a.count=r,e.sparks.emit(a)}devour(e,t,n){let r=n*this.grade[t]*1.2,i=Cv(r*.9,bv,xv);this.devourSpeed[0]=i*.9,this.devourSpeed[1]=i;let a=this.devourSpec;a.x=this.x[t],a.y=this.y[t],a.ring=r,a.vx=this.vx[t],a.vy=this.vy[t],e.sparks.emit(a)}thread(e,t,n,r,i,a){this.threadCarry[t]+=Math.hypot(i-n,a-r)*Sv*e.dt;let o=Math.floor(this.threadCarry[t]);if(this.threadCarry[t]-=o,o===0)return;let s=this.threadSpec;s.x=n,s.y=r,this.threadEnd.x=i,this.threadEnd.y=a,s.angle=Math.atan2(a-r,i-n)+(Math.random()<.5?0:Math.PI),s.count=o,e.sparks.emit(s)}dispose(){this.body.dispose()}},Tv=400,Ev=2.6,Dv=3,Ov=.7,kv=34,Av=260,jv=7,X=12,Mv=1.3,Nv=420,Pv=.14,Fv=.8,Iv=8,Lv=3,Rv=.3,zv=.25,Bv=.25,Vv=4,Hv=2,Uv=1.4,Wv=4,Gv=120,Kv=.35,qv=.7,Jv=.45,Z=16762954,Yv=16756816,Xv=16734760,Zv=.4,Qv=1.9,$v=.4,ey=10,ty=40,ny=14,ry=.65,iy=240,ay=30,oy=18,sy=4,cy=.14,ly=6,uy=.75,dy=420,fy=.18,py=110,my=50,hy=160,gy=2.6,_y=60,vy=200,yy=1.4,by=30,xy=110,Sy=1.5,Cy=60,wy=12,Ty=36,Ey=8,Dy=Dv,Oy=.8,ky=.8,Ay=.7,jy=28,My=8,Ny=.28,Py=4,Fy=70,Iy=20,Ly=.3,Ry=260,zy=24,By=26,Vy=22,Hy=14,Uy=5,Wy=10,Gy=40,Ky=18,qy=14,Jy=36,Yy=24,Xy=50,Zy=30,Qy=90,$y=16,eb=.35,tb=8,nb=42,rb=1.2,ib=24,ab=90,ob=28,sb=.6,cb=90,lb=50,ub=class e{static meta={id:`smite`,kind:`passive`,color:16774048,core:16776688,base:{damage:Tv,rate:1/Ev,area:kv,count:Dv,critChance:12,critDamage:225},scales:{critChance:1.5,critDamage:1.5,area:1,damage:.5,attackSpeed:.25}};id=e.meta.id;object=new M;target=new Int32Array(X).fill(-1);stamp=new Float32Array(X);x=new Float32Array(X);y=new Float32Array(X);delay=new Float32Array(X);share=new Float32Array(X);span=new Float32Array(X);depth=new Uint8Array(X);credits=Array(X).fill(void 0);zoneX=new Float32Array(Iv);zoneY=new Float32Array(Iv);zoneRadius=new Float32Array(Iv);zoneLife=new Float32Array(Iv);zoneDps=new Float32Array(Iv);zoneTick=new Float32Array(Iv);zoneAt=0;timer=1;mods=new F;candidates=[];volley=0;skyCount=0;skyFrom=0;skyTo=0;verdictLeft=0;glinting=new Uint8Array(X);sigilFlow=db(X);moteFlow=db(X);omenFlow=db(X);glintFlow=db(X);haulFlow=db(X);ropeFlow=db(X);emberFlow=db(Iv);rimFlow=db(Iv);sigilCenter={x:0,y:0};sigilDrift=[0,0];glintCenter={x:0,y:0};omenEnd={x:0,y:0};ropeEnd={x:0,y:0};bladeEnd={x:0,y:0};sigilSpec={x:0,y:0,ring:kv,orbit:{around:this.sigilCenter,spin:[1.8,3],drift:this.sigilDrift},life:[.14,.26],size:[1.4,2.6],endSize:.3,color:e.meta.color,to:e.meta.core,drag:1,curl:3,core:.8};moteSpec={x:0,y:0,disc:kv,angle:Math.PI/2,arc:.8,speed:[10,36],life:[.45,.8],size:[1.2,2.2],endSize:.3,color:Z,to:e.meta.color,intensity:.8,drag:1.2,gravity:-40,core:.6,twinkle:.6};omenSpec={x:0,y:0,line:this.omenEnd,angle:Math.PI/2,arc:.15,speed:[70,180],normal:[0,14],life:[.08,.18],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,core:.9,kind:`streak`,stretch:.03};landSpec={x:0,y:0,ring:kv*.3,radial:!0,arc:.4,speed:[50,130],life:[.14,.26],size:[1.6,2.6],endSize:.25,color:e.meta.core,to:e.meta.color,drag:5,core:.9};landFlashSpec={x:0,y:0,count:sy,disc:3,speed:[0,20],life:[.08,.14],size:[5,8],endSize:.4,color:e.meta.core,to:e.meta.color,drag:6,core:1};glintSpec={x:0,y:0,ring:8,orbit:{around:this.glintCenter,spin:[-.9,.9],drift:[-3,3]},life:[.25,.5],size:[1.3,2.4],endSize:.4,color:e.meta.core,to:Z,drag:.5,core:1,twinkle:.9,kind:`pixel`};haulSpec={x:0,y:0,disc:6,arc:.5,speed:[90,220],life:[.12,.24],size:[1.4,2.4],endSize:.2,color:e.meta.color,to:Z,drag:3.5,core:.8,kind:`streak`,stretch:.035};ropeSpec={x:0,y:0,line:this.ropeEnd,arc:.2,speed:[30,90],normal:[0,6],life:[.15,.3],size:[1.2,2],endSize:.3,color:Z,to:e.meta.color,intensity:.7,drag:2,core:.7,kind:`pixel`};bladeSpec={x:0,y:0,count:Vy,line:this.bladeEnd,angle:-Math.PI/2,arc:.08,speed:[180,360],normal:[0,8],delayAlong:.05,life:[.1,.2],size:[2,3.2],endSize:.2,color:e.meta.core,to:Z,drag:3,core:1,kind:`streak`,stretch:.03};shardSpec={x:0,y:0,count:Hy,ring:4,radial:!0,arc:.5,speed:[50,150],delay:.04,life:[.2,.4],size:[1.4,2.4],endSize:.3,color:Z,to:Xv,drag:4,core:.7,twinkle:.4,kind:`pixel`};verdictGlowSpec={x:0,y:0,count:Uy,disc:4,speed:[0,20],life:[.08,.16],size:[6,10],endSize:.4,color:e.meta.core,to:Z,drag:6,core:1};emberSpec={x:0,y:0,disc:kv,angle:Math.PI/2,arc:1,speed:[8,30],life:[.5,1],size:[1.6,3.2],endSize:.3,color:Yv,to:Xv,drag:1.2,gravity:-45,curl:8,core:.35,twinkle:.6};rimSpec={x:0,y:0,ring:kv,speed:[0,12],life:[.25,.5],size:[1.4,2.4],endSize:.4,color:Yv,to:Xv,drag:2,gravity:-10,core:.6,twinkle:.8,kind:`pixel`};actions={mark:(e,t)=>this.markFor(e,t)};configure(e){this.mods=e}update(t){if(this.timer-=t.dt,this.timer<=0){let n=Gr(Ev,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate);this.timer+=n.interval,this.mark(t,n.damage)}let n=this.radius(t);this.burn(t);let r=this.mods.has(`haul`);this.beginVolley(t.dt);for(let e=0;e<X;e++){if(this.delay[e]<=0)continue;let i=this.target[e];i>=0&&(t.enemies.alive[i]===1&&t.enemies.stamp[i]===this.stamp[e]?(this.x[e]=t.enemies.x[i],this.y[e]=t.enemies.y[i],r&&t.enemies.pull(i,t.originX,t.originY,Nv,t.dt)):this.target[e]=-1),this.delay[e]-=t.dt,this.delay[e]<=0&&this.strike(t,e,n)}this.skyline(t),this.markSparks(t,n)}radius(t){return W(kv,U(e.meta,t.stats,`area`)*this.mods.size*(this.mods.has(`dread`)?Uv:1),Ur(t))}mark(t,n){let r=this.mods.has(`rain`),i=this.mods.has(`choir`),a=this.mods.has(`judgement`),o=r?Math.hypot(t.bounds.x,t.bounds.y)/2:Av*U(e.meta,t.stats,`area`);if(this.candidates.length=0,t.enemies.queryCircle(t.originX,t.originY,o,(e,t)=>{this.candidates.push({index:e,distance:t})}),this.candidates.length===0)return;this.candidates.sort((e,t)=>e.distance-t.distance);let s=Dv+this.mods.count,c=a?Math.min(this.candidates.length,X):i?s:Math.min(this.candidates.length,s),l=r?Math.max(1,Math.floor(this.candidates.length/c)):1,u=Ov*(this.mods.has(`dread`)?Hv:1),d=this.mods.has(`nail`),f=0;for(let e=0;e<X&&f<c;e++){if(this.delay[e]>0)continue;let r=i?this.candidates[0]:this.candidates[f*l];this.target[e]=r.index,this.stamp[e]=t.enemies.stamp[r.index],this.x[e]=t.enemies.x[r.index],this.y[e]=t.enemies.y[r.index],this.span[e]=u+(i?f*Pv:0),this.delay[e]=this.span[e],this.share[e]=n*(i?Fv:1)*(a?Jv:1),this.depth[e]=0,this.credits[e]=void 0,d&&t.enemies.freeze(r.index,this.delay[e]),this.telegraph(t,e,t.originX,t.originY),f++}}markFor(e,t){let n=t.enemy,r=-1;for(let e=0;e<X;e++)if(this.delay[e]>0){if(this.target[e]===n)return}else r<0&&(r=e);if(r<0)return;let i=Ov*(this.mods.has(`dread`)?Hv:1);this.target[r]=n,this.stamp[r]=e.enemies.stamp[n],this.x[r]=e.enemies.x[n],this.y[r]=e.enemies.y[n],this.span[r]=i,this.delay[r]=i,this.share[r]=t.share,this.depth[r]=0,this.credits[r]=t.credit,this.mods.has(`nail`)&&e.enemies.freeze(n,i),this.telegraph(e,r,t.x,t.y)}telegraph(e,t,n,r){this.glinting[t]=0,this.cast(e,t,n,r);let i=this.target[t];this.mods.has(`nail`)&&this.depth[t]===0&&i>=0&&e.enemies.isFrozen(i)&&this.nailDown(e,this.x[t],this.y[t],e.enemies.radius[i])}strike(e,t,n){let r=this.x[t],i=this.y[t],a=this.target[t],o=this.depth[t];this.depth[t]=0,this.delay[t]=0,this.target[t]=-1,I.play(`smite`);let s=this.span[t],c=this.glinting[t]===1,l=Tv*this.mods.damage*this.share[t],u=this.credits[t]??(o>0?`smiteCascade`:void 0),d=this.mods.has(`nail`),f=this.mods.has(`verdict`),p=0;e.enemies.queryCircle(r,i,n,t=>{if(e.hit(t,d&&t===a?l*Mv:l,!1,u),e.enemies.alive[t]===0){p++;return}f&&e.enemies.hp[t]<=l*Bv&&(e.hit(t,e.enemies.hp[t]*Vv,!1,`smiteVerdict`),e.enemies.alive[t]===0&&p++,e.enemies.alive[t]===0&&this.execution(e,t))}),p>0&&o<Wv&&this.mods.has(`cascade`)&&this.chain(e,r,i,t,o),this.mods.has(`scorch`)&&this.scorch(e,r,i,n,l);let m=e.originY+e.bounds.y/2;e.impacts.pop(r,i,1),e.shock.ring(r,i,n*.6,.6,24,1.5);let h=this.look(o);this.eruption(e,r,i,m,n,h),c&&a>=0&&this.unpin(e,r,i,h),this.mods.has(`choir`)&&this.chime(e,r,i,n,s,h),this.mods.has(`rain`)&&this.drizzle(e,r,i,m,h),this.skyCount++,this.skyFrom=Math.min(this.skyFrom,r),this.skyTo=Math.max(this.skyTo,r),e.synergy.react(e,`smite`,`impact`,r,i)&&this.pulseRing(e,r,i,n,h)}chain(e,t,n,r,i){let a=-1;for(let e=0;e<X&&a<0;e++)this.delay[e]<=0&&(a=e);if(a<0)return;let o=-1,s=1/0;e.enemies.queryCircle(t,n,Gv,(e,t)=>{if(!(t>=s)){for(let t=0;t<X;t++)if(this.target[t]===e)return;o=e,s=t}}),!(o<0)&&(this.target[a]=o,this.stamp[a]=e.enemies.stamp[o],this.x[a]=e.enemies.x[o],this.y[a]=e.enemies.y[o],this.span[a]=Kv,this.delay[a]=Kv,this.share[a]=this.share[r]*qv,this.depth[a]=i+1,this.credits[a]=this.credits[r],this.telegraph(e,a,t,n),this.chainTrail(e,t,n,a))}scorch(e,t,n,r,i){let a=this.zoneAt;this.zoneAt=(this.zoneAt+1)%Iv,this.zoneX[a]=t,this.zoneY[a]=n,this.zoneRadius[a]=r,this.zoneLife[a]=Lv,this.zoneDps[a]=i*Rv,this.zoneTick[a]=0,this.flare(e,t,n,r)}burn(e){for(let t=0;t<Iv;t++){if(this.zoneLife[t]<=0)continue;this.zoneLife[t]-=e.dt,this.zoneTick[t]-=e.dt;let n=this.zoneX[t],r=this.zoneY[t],i=this.zoneRadius[t];if(this.zoneTick[t]<=0){this.zoneTick[t]+=zv;let a=this.zoneDps[t]*zv;e.enemies.queryCircle(n,r,i,t=>{e.hit(t,a,!0,`smiteScorch`)})}this.smoulder(e,t,n,r,i)}}beginVolley(e){let t=0;for(let n=0;n<X;n++)this.delay[n]>0&&this.delay[n]<=e&&t++;this.volley=t,this.skyCount=0,this.skyFrom=1/0,this.skyTo=-1/0,this.verdictLeft=Wy}look(e){return Math.min(1,Dy/Math.max(1,this.volley))**+Oy*ky**+e*(this.mods.has(`choir`)?Ay:1)}markSparks(t,n){let r=0;for(let e=0;e<X;e++)this.delay[e]>0&&r++;if(r===0)return;let i=Math.min(1,Math.sqrt(Dy/r)),a=this.mods.visualScale(),o=this.mods.has(`nail`),s=this.mods.has(`haul`),c=this.mods.has(`dread`),l=t.dt;for(let r=0;r<X;r++){if(this.delay[r]<=0)continue;let u=this.x[r],d=this.y[r],f=this.span[r],p=f-this.delay[r],m=Math.min(1,Math.max(0,p/f)),h=m*m,g=fb(n,m),_=ty+180*h,v=this.sigilFlow[r].take(_*i,l);if(v>0){let n=this.sigilSpec;n.x=u,n.y=d,n.ring=g,n.count=v,n.sizeScale=a,n.color=c?Z:e.meta.color,n.to=c?Xv:e.meta.core,this.sigilCenter.x=u,this.sigilCenter.y=d,this.sigilDrift[0]=-g*1.6,this.sigilDrift[1]=-g*.8,t.sparks.emit(n)}let y=ny+76*h,b=this.moteFlow[r].take(y*i,l);if(b>0){let e=this.moteSpec;e.x=u,e.y=d,e.disc=g*.85,e.count=b,e.sizeScale=a,t.sparks.emit(e)}if(m>ry){let e=(m-ry)/.35,n=this.omenFlow[r].take(iy*e*e*i,l);if(n>0){let r=this.omenSpec;r.x=u,r.y=d,this.omenEnd.x=u,this.omenEnd.y=d+ay*(.4+.6*e),r.count=n,r.sizeScale=a,t.sparks.emit(r)}}let x=f*Zv;p>=x&&p-l<x&&this.landing(t,u,d,n,i,a);let S=this.target[r];S<0||t.enemies.alive[S]===0||(o&&this.depth[r]===0&&t.enemies.isFrozen(S)&&(this.glinting[r]=1,this.glint(t,r,S,i,a)),s&&this.tow(t,r,i,a))}}landing(e,t,n,r,i,a){let o=this.landSpec;o.x=t,o.y=n,o.ring=r*.3,o.count=Math.max(4,Math.round(oy*i)),o.sizeScale=a,e.sparks.emit(o);let s=this.landFlashSpec;s.x=t,s.y=n,s.sizeScale=a,e.sparks.emit(s)}glint(e,t,n,r,i){let a=this.glintFlow[t].take(Jy*r,e.dt);if(a===0)return;let o=this.glintSpec;o.x=this.x[t],o.y=this.y[t],o.ring=e.enemies.radius[n]+3,o.count=a,o.sizeScale=i,this.glintCenter.x=this.x[t],this.glintCenter.y=this.y[t],e.sparks.emit(o)}tow(e,t,n,r){let i=this.x[t],a=this.y[t],o=e.originX-i,s=e.originY-a,c=Math.hypot(o,s);if(c<=$y)return;let l=Math.atan2(s,o),u=this.haulFlow[t].take(Xy*n,e.dt);if(u>0){let t=this.haulSpec;t.x=i,t.y=a,t.angle=l,t.count=u,t.sizeScale=r,e.sparks.emit(t)}let d=this.ropeFlow[t].take(Zy*n,e.dt);if(d>0){let t=Math.min(c-$y,Qy)/c,n=this.ropeSpec;n.x=i,n.y=a,this.ropeEnd.x=i+o*t,this.ropeEnd.y=a+s*t,n.angle=l,n.count=d,n.sizeScale=r,e.sparks.emit(n)}}cast(t,n,r,i){t.sparks.emit({x:r,y:i,count:ey,disc:4,angle:Math.atan2(this.y[n]-i,this.x[n]-r),arc:.7,speed:[60,170],life:[.1,.22],size:[1.4,2.4],sizeScale:this.mods.visualScale(),endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03})}nailDown(t,n,r,i){let a=this.mods.visualScale();t.sparks.emit({x:n,y:r+Gy,line:{x:n,y:r+i*.3},count:Ky,angle:-Math.PI/2,arc:.1,speed:[220,380],normal:[0,8],delayAlong:.06,life:[.08,.16],size:[1.8,3],sizeScale:a,endSize:.2,color:e.meta.core,to:Z,drag:5,core:1,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:r,ring:i+2,radial:!0,arc:.5,count:qy,speed:[40,120],delay:.06,life:[.12,.26],size:[1.4,2.4],sizeScale:a,endSize:.3,color:Z,to:Yv,drag:5,core:.8,kind:`pixel`})}chainTrail(t,n,r,i){let a=this.x[i],o=this.y[i],s=Math.hypot(a-n,o-r);t.sparks.emit({x:n,y:r,line:{x:a,y:o},count:Math.min(nb,Math.max(tb,Math.round(s*eb))),even:!0,speed:[0,14],normal:[4,20],delayAlong:this.span[i]*Zv,life:[.18,.32],size:[1.8,3],sizeScale:this.mods.visualScale(),endSize:.3,color:e.meta.core,to:Z,drag:3,curl:4,core:.9})}eruption(t,n,r,i,a,o){let s=e.meta.color,c=e.meta.core,l=this.mods.visualScale(),u=Math.PI/2,d=e=>Math.max(1,Math.round(e*o)),f=Math.max(i,r+24),p=f-r,m={x:n,y:f};t.sparks.emit({x:n,y:r,line:m,count:d(Math.min(dy,p*uy)),angle:u,arc:.12,speed:[192,480],normal:[0,26],delayAlong:cy,life:[.25,.5],size:[1.8,3.2],sizeScale:l,endSize:.2,color:c,to:s,drag:2.5,curl:6,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:r,line:m,count:d(Math.min(py,p*fy)),angle:u,arc:.3,speed:[20,90],normal:[3,16],delayAlong:cy,life:[.22,.42],size:[4,7],sizeScale:l,endSize:.4,color:c,to:s,intensity:.6,drag:3,core:.8,fade:1.3}),t.sparks.emit({x:n,y:r,line:{x:n,y:r+Math.min(p,hy)},count:d(my),speed:[0,30],normal:[6,40],delayAlong:cy*1.5,life:[.6,1.2],size:[1.6,2.8],sizeScale:l,endSize:.3,color:s,to:Yv,drag:1.6,gravity:-40,curl:12,core:.4,twinkle:.5,fade:.8}),t.sparks.emit({x:n,y:r,ring:a*.2,even:!0,radial:!0,arc:.25,count:d(Math.min(vy,Math.max(_y,a*gy))),speed:[a*3.6,a*5.4],life:[.24,.34],size:[2,3.2],sizeScale:l,endSize:.25,color:c,to:Z,drag:4,core:.85,kind:`streak`,stretch:.03});let h=Math.min(xy,Math.max(by,a*yy));t.sparks.emit({x:n,y:r,disc:a*.5,radial:!0,count:d(h*(this.mods.has(`dread`)?Sy:1)),speed:[a*.6,a*1.8],life:[.45,.9],size:[3.5,6.5],sizeScale:l,endSize:.3,color:Z,to:Xv,intensity:.45,drag:3.5,gravity:-12,curl:14,core:.25,twinkle:.25}),t.sparks.emit({x:n,y:r,disc:a*.45,count:d(Cy),angle:u,arc:1.4,speed:[20,70],life:[.7,1.4],size:[1.6,3],sizeScale:l,endSize:.3,color:Z,to:Yv,drag:1.4,gravity:-70,curl:10,core:.5,twinkle:.6,fade:.8}),t.sparks.emit({x:n,y:r,disc:5,count:d(wy),speed:[0,40],life:[.08,.2],size:[7,12],sizeScale:l,endSize:.4,color:c,to:s,drag:5,core:1});let g=f-ly;t.sparks.emit({x:n,y:g,disc:jv,count:d(Ty),angle:-u,arc:2.4,speed:[80,260],delay:cy,life:[.15,.35],size:[1.8,3],sizeScale:l,endSize:.2,color:c,to:Z,drag:4,core:.9,kind:`streak`,stretch:.03}),t.sparks.emit({x:n,y:g,disc:4,count:d(Ey),speed:[0,30],delay:cy,life:[.1,.22],size:[8,14],sizeScale:l,endSize:.4,color:c,to:s,drag:5,core:1})}unpin(t,n,r,i){t.sparks.emit({x:n,y:r,ring:6,radial:!0,arc:.6,count:Math.max(6,Math.round(Yy*i)),speed:[60,200],life:[.2,.4],size:[1.6,2.8],sizeScale:this.mods.visualScale(),endSize:.3,color:e.meta.core,to:Z,drag:4,core:1,twinkle:.5,kind:`pixel`})}chime(t,n,r,i,a,o){let s=Ov*(this.mods.has(`dread`)?Hv:1),c=Math.min(Py,Math.max(0,Math.round((a-s)/Pv)));t.sparks.emit({x:n,y:r,count:Math.max(8,Math.round((jy+My*c)*o)),ring:i*(.5+Ny*c),even:!0,radial:!0,speed:[10,30],life:[.35,.55],size:[2.2,3.4],sizeScale:this.mods.visualScale(),endSize:.3,color:e.meta.core,to:Z,drag:2,core:.9})}drizzle(t,n,r,i,a){t.sparks.emit({x:n,y:r+Iy,line:{x:n,y:Math.max(i,r+24)},count:Math.max(8,Math.round(Fy*a)),angle:Math.PI/2,arc:1.2,speed:[30,110],delay:cy*.5,delayAlong:cy,life:[.7,1.1],size:[1.4,2.4],sizeScale:this.mods.visualScale(),endSize:.4,color:e.meta.color,to:Z,intensity:.8,drag:.8,gravity:260,core:.7,twinkle:.3,kind:`streak`,stretch:.05})}skyline(t){if(this.skyCount<2||!this.mods.has(`judgement`))return;let n=t.originY+t.bounds.y/2-ly,r=this.skyFrom-zy,i=this.skyTo+zy;t.sparks.emit({x:r,y:n,line:{x:i,y:n},count:Math.min(Ry,Math.round((i-r)*Ly)),speed:[0,20],normal:[4,26],delay:[cy,.22000000000000003],life:[.3,.6],size:[2,3.6],sizeScale:this.mods.visualScale(),endSize:.3,color:e.meta.core,to:Z,drag:2.5,curl:8,core:.9,twinkle:.3})}execution(e,t){if(this.verdictLeft<=0)return;this.verdictLeft--;let n=e.enemies.x[t],r=e.enemies.y[t],i=this.mods.visualScale(),a=this.bladeSpec;a.x=n,a.y=r+By,this.bladeEnd.x=n,this.bladeEnd.y=r-By*.3,a.sizeScale=i,e.sparks.emit(a);let o=this.shardSpec;o.x=n,o.y=r,o.ring=Math.max(3,e.enemies.radius[t]*.5),o.sizeScale=i,e.sparks.emit(o);let s=this.verdictGlowSpec;s.x=n,s.y=r,s.sizeScale=i,e.sparks.emit(s)}pulseRing(t,n,r,i,a){t.sparks.emit({x:n,y:r,ring:i*.35,even:!0,radial:!0,arc:.2,count:Math.max(10,Math.round(lb*a)),speed:[i*5,i*8],delay:.05,life:[.3,.45],size:[1.8,3],sizeScale:this.mods.visualScale(),endSize:.25,color:Z,to:e.meta.color,drag:3,core:.8,kind:`streak`,stretch:.035})}flare(e,t,n,r){let i=Math.min(ab,Math.max(ib,r*rb));e.sparks.emit({x:t,y:n,ring:r*.9,radial:!0,arc:1,count:Math.max(6,Math.round(i*this.look(0))),speed:[8,40],life:[.5,.9],size:[2,3.5],sizeScale:this.mods.visualScale(),endSize:.3,color:Yv,to:Xv,drag:2,gravity:-20,curl:8,core:.4,twinkle:.5})}smoulder(e,t,n,r,i){let a=.35+.65*Math.max(0,this.zoneLife[t]/Lv),o=this.mods.visualScale(),s=this.emberFlow[t].take(ob*a,e.dt);if(s>0){let t=this.emberSpec;t.x=n,t.y=r,t.disc=i*.95,t.count=s,t.sizeScale=o,e.sparks.emit(t)}let c=Math.min(cb,i*sb),l=this.rimFlow[t].take(c*a,e.dt);if(l>0){let t=this.rimSpec;t.x=n,t.y=r,t.ring=i,t.count=l,t.sizeScale=o,e.sparks.emit(t)}}dispose(){}};function db(e){return Array.from({length:e},()=>new z)}function fb(e,t){return t<$v?e*(Qv-.8999999999999999*wt(`out`,t/$v)):e*(1-.6*wt(`in`,(t-$v)/.6))}var pb=90,mb=2,hb=12,gb=2.4,_b=300,vb=8,yb=vt(),bb=8,xb=2.6,Sb=1.1,Cb=96,wb=3,Tb=.1,Eb=2.4,Db=1.5,Ob=3,kb=12,Ab=.35,jb=.5,Mb=Math.PI/180*50,Nb=1.7,Pb=6031124,Fb=130,Ib=.2,Lb=14,Rb=90,zb=90,Bb=22,Vb=120,Hb=10,Ub=140,Wb=60,Gb=.45,Kb=.6,qb=14,Jb=12,Yb=5,Xb=16,Zb=8,Qb=.7,$b=10,ex=12,tx=class e{static meta={id:`spikes`,kind:`passive`,color:13111342,core:16765136,base:{damage:pb,rate:1/gb,area:vb,speed:_b,count:hb,critChance:7,critDamage:160},scales:{thorns:1,critChance:.5,critDamage:.5,projectileSpeed:.5,damage:.25,attackSpeed:.25,area:.25}};id=e.meta.id;color=e.meta.color;object;formPool=null;heads=Array(Cb).fill(null);capacity=Cb;x;y;vx;vy;life;pierceLeft;hitCooldown;damage;returning;credit;interval=gb;speed=_b;radius=vb;timer=1;cursor=0;mods=new F;echoTimer=0;echoBase=0;echoCount=0;echoSpeed=0;echoDamage=0;trailCarry;shedCarry;trailEnd={x:0,y:0};dropEnd={x:0,y:0};trailSize=[1.5,2.6];jetSpeed=[165,300];trailSpec={x:0,y:0,line:this.trailEnd,speed:[0,10],life:[.1,.18],size:this.trailSize,endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.8,kind:`streak`,stretch:.05};shedSpec={x:0,y:0,line:this.trailEnd,arc:.9,speed:[20,80],normal:[30,90],life:[.18,.38],size:[1.3,2.2],endSize:.2,color:e.meta.core,to:Pb,drag:3.5,curl:5,core:.7,kind:`streak`,stretch:.045};jetSpec={x:0,y:0,arc:.1,speed:this.jetSpeed,life:[.14,.3],size:[1.8,3.2],endSize:.25,color:e.meta.core,to:e.meta.color,drag:2.2,core:.9,kind:`streak`,stretch:.025};hitSpec={x:0,y:0,arc:.6,speed:[120,360],life:[.1,.26],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:.9,kind:`streak`,stretch:.03};dropSpec={x:0,y:0,line:this.dropEnd,arc:.6,speed:[10,60],normal:[40,150],life:[.16,.34],size:[1.8,3],endSize:.25,color:e.meta.color,to:Pb,drag:4,core:.5,kind:`streak`,stretch:.03};homeSpec={x:0,y:0,count:$b,ring:16,radial:!0,turn:Math.PI*.8,arc:.3,speed:[40,100],life:[.16,.28],size:[2,3.2],endSize:.3,color:e.meta.core,to:e.meta.color,drag:2,attract:1,core:.9};dustSpec={x:0,y:0,count:ex,disc:4,speed:[15,70],life:[.3,.6],size:[2.5,4.2],endSize:.3,color:e.meta.color,to:Pb,drag:2.4,curl:12,core:.4,twinkle:.3};constructor(){this.object=new M,this.x=new Float32Array(this.capacity),this.y=new Float32Array(this.capacity),this.vx=new Float32Array(this.capacity),this.vy=new Float32Array(this.capacity),this.life=new Float32Array(this.capacity),this.pierceLeft=new Float32Array(this.capacity),this.hitCooldown=new Float32Array(this.capacity),this.damage=new Float32Array(this.capacity),this.returning=new Uint8Array(this.capacity),this.credit=Array(this.capacity).fill(void 0),this.trailCarry=new Float32Array(this.capacity),this.shedCarry=new Float32Array(this.capacity)}actions={pace:e=>this.pace(e),fire:(e,t)=>this.launch(e,t.x,t.y,t.dirX,t.dirY,t.share,t.credit)};configure(e){this.mods=e}ensureHeads(t){if(this.formPool===t.forms&&(this.heads[0]===null||this.heads[0].alive))return;let n=t.forms;this.removeHeads(),this.formPool=n;for(let t=0;t<this.capacity;t++)this.heads[t]=n.create({layout:{kind:`fill`,shape:yb,radius:bb},size:xb,spacing:Sb,jitter:.25,kind:`pixel`,color:this.color,to:e.meta.core,gradient:`along`,twinkle:.12,max:90})}head(e,t){let n=this.heads[e];n&&(n.x=this.x[e],n.y=this.y[e],n.angle=Math.atan2(this.vy[e],this.vx[e]),n.scale=t,n.alpha=1)}hideHead(e){let t=this.heads[e];t&&(t.alpha=0)}removeHeads(){let e=this.formPool;if(e)for(let t=0;t<this.capacity;t++)e.remove(this.heads[t]),this.heads[t]=null}get pierce(){return wb+this.mods.layers*2}flight(t){let n=this.mods.has(`surge`)?Db:1;return U(e.meta,t.stats,`projectileSpeed`)*n}needleDamage(t,n){return(pb+Vr(e.meta.scales,t.stats,`thorns`)*mb)*this.mods.damage*n*this.flight(t)}pace(t){return Gr(this.interval,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate)}update(t){if(this.ensureHeads(t),this.timer-=t.dt,this.timer<=0){let e=this.pace(t);this.timer+=e.interval,this.fire(t,e.damage)}this.echoTimer>0&&(this.echoTimer-=t.dt,this.echoTimer<=0&&this.ring(t,this.echoBase,this.echoCount,this.echoSpeed,this.echoDamage,.5));let n=this.radius*U(e.meta,t.stats,`area`)*this.mods.size,r=t.bounds.x/2+20,i=t.bounds.y/2+20,a=this.mods.has(`return`),o=this.mods.has(`spiral`),s=Math.cos(Nb*t.dt),c=Math.sin(Nb*t.dt),l=this.mods.visualScale();for(let e=0;e<this.capacity;e++){if(this.life[e]<=0){this.hideHead(e);continue}if(o&&this.returning[e]===0){let t=this.vx[e],n=this.vy[e];this.vx[e]=t*s-n*c,this.vy[e]=t*c+n*s}this.life[e]-=t.dt;let u=this.x[e],d=this.y[e];this.x[e]+=this.vx[e]*t.dt,this.y[e]+=this.vy[e]*t.dt;let f=Math.abs(this.x[e])>r||Math.abs(this.y[e])>i,p=this.life[e]<=0;if(this.returning[e]===1){let n=Math.hypot(this.x[e]-t.originX,this.y[e]-t.originY);if(n<kb||f||p){n<kb?this.homecoming(t,e):f||this.fizzle(t,e),this.life[e]=0,this.hideHead(e);continue}}else if(f||p){if(a){this.returning[e]=1,this.life[e]=Ob,this.pierceLeft[e]=this.pierce;let n=t.originX-this.x[e],r=t.originY-this.y[e],i=Math.hypot(n,r)||1,a=Math.hypot(this.vx[e],this.vy[e]);this.vx[e]=n/i*a,this.vy[e]=r/i*a,this.spray(t,e,Qb)}else{f||this.fizzle(t,e),this.life[e]=0,this.hideHead(e);continue}}if(this.hitCooldown[e]>0&&(this.hitCooldown[e]-=t.dt),this.hitCooldown[e]<=0&&this.pierceLeft[e]>0){let r=-1,i=1/0;t.enemies.queryCircle(this.x[e],this.y[e],n,(e,t)=>{t>=i||(i=t,r=e)}),r>=0&&(this.pierceLeft[e]--,this.hitCooldown[e]=Tb,t.hit(r,this.damage[e],!1,this.credit[e]),this.spray(t,e,1))}if(this.pierceLeft[e]<=0){this.life[e]=0,this.hideHead(e);continue}this.trail(t,e,u,d,l),this.head(e,l)}}fire(e,t){I.play(`spikes`);let n=Math.max(1,Math.min(this.capacity,hb+this.mods.count)),r=this.speed*this.flight(e),i=this.needleDamage(e,t),a=Math.atan2(e.aimY,e.aimX);this.ring(e,a,n,r,i),this.mods.has(`barrage`)&&(this.echoTimer=Ab,this.echoBase=a,this.echoCount=n,this.echoSpeed=r,this.echoDamage=i*jb)}ring(e,t,n,r,i,a=0){let o=this.mods.has(`cone`),s=o?Mb/n:Math.PI*2/n,c=o?t-Mb/2+s/2:t;for(let t=0;t<n;t++){let n=c+(t+a)*s;this.spawn(e.originX+Math.cos(n)*10,e.originY+Math.sin(n)*10,Math.cos(n)*r,Math.sin(n)*r,i,{evict:!0})}this.volley(e,t,c,s,n,a,r)}launch(e,t,n,r,i,a,o){let s=this.speed*this.flight(e),c=Go(this.life,this.cursor)>=0;this.spawn(t,n,r*s,i*s,this.needleDamage(e,a),{credit:o}),c&&this.spit(e,t,n,r,i,s)}spawn(e,t,n,r,i,a={}){let o=Go(this.life,this.cursor);o<0&&a.evict&&(o=Ko(this.life)),!(o<0)&&(this.cursor=(o+1)%this.capacity,this.x[o]=e,this.y[o]=t,this.vx[o]=n,this.vy[o]=r,this.life[o]=Eb,this.pierceLeft[o]=this.pierce,this.hitCooldown[o]=0,this.damage[o]=i,this.returning[o]=0,this.credit[o]=a.credit)}volley(t,n,r,i,a,o,s){let c=t.originX,l=t.originY,u=o===0?1:Kb,d=this.mods.has(`cone`),f=this.mods.has(`spiral`)?Gb:0;t.sparks.emit({x:c,y:l,count:Math.round(Bb*u),disc:7,speed:[10,90],life:[.08,.2],size:[5,9],endSize:.4,color:e.meta.core,to:e.meta.color,drag:5,core:1}),t.sparks.emit({x:c,y:l,count:Math.round(Rb*u*(d?.5:1)),ring:d?void 0:10,disc:d?8:void 0,even:!d,radial:!d,turn:f,angle:n,arc:d?Mb*1.4:.15,speed:[240,290],life:[.2,.32],size:[2.4,3.6],endSize:.35,color:e.meta.core,to:e.meta.color,drag:4.5,core:.8});let p=this.jetSpec,m=Math.min(Hb,Vb/Math.max(1,a));p.count=Math.max(1,Math.round(m*u)),this.jetSpeed[0]=s*.55,this.jetSpeed[1]=s;for(let e=0;e<a;e++){let n=r+(e+o)*i;p.x=c+Math.cos(n)*10,p.y=l+Math.sin(n)*10,p.angle=n+f*.35,t.sparks.emit(p)}if(t.sparks.emit({x:c,y:l,count:Math.round(zb*u*(d?.6:1)),ring:d?void 0:14,disc:d?10:void 0,radial:!d,turn:f,angle:n,arc:d?Mb*1.8:.5,speed:[30,120],life:[.45,.9],size:[3,5.5],endSize:.3,color:e.meta.color,to:Pb,drag:2.2,curl:14,core:.35,twinkle:.3}),!d)return;let h=n+Math.PI;t.sparks.emit({x:c,y:l,count:Math.round(Ub*u),disc:5,angle:h,arc:1.2,speed:[80,320],life:[.2,.5],size:[2,3.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.2,curl:8,core:.85,kind:`streak`,stretch:.035}),t.sparks.emit({x:c,y:l,count:Math.round(Wb*u),disc:9,angle:h,arc:1.6,speed:[30,150],life:[.4,.9],size:[3,5.5],endSize:.3,color:e.meta.color,to:Pb,drag:2,curl:22,core:.35,twinkle:.3})}spit(t,n,r,i,a,o){let s=Math.atan2(a,i);t.sparks.emit({x:n,y:r,count:qb,angle:s,arc:.25,speed:[o*.5,o],life:[.12,.26],size:[1.8,3],endSize:.25,color:e.meta.core,to:e.meta.color,drag:3,core:.9,kind:`streak`,stretch:.025}),t.sparks.emit({x:n,y:r,count:Jb,angle:s+Math.PI,arc:1,speed:[60,200],life:[.16,.34],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:Pb,drag:3.5,core:.8,kind:`streak`,stretch:.035}),t.sparks.emit({x:n,y:r,count:Yb,disc:3,speed:[0,40],life:[.06,.14],size:[4,7],endSize:.4,color:e.meta.core,to:e.meta.color,drag:6,core:1})}trail(e,t,n,r,i){this.trailEnd.x=this.x[t],this.trailEnd.y=this.y[t],this.trailCarry[t]+=Fb*e.dt;let a=Math.floor(this.trailCarry[t]);if(this.trailCarry[t]-=a,a>0){let o=this.trailSpec;o.x=n,o.y=r,o.vx=-this.vx[t]*Ib,o.vy=-this.vy[t]*Ib,o.count=a,this.trailSize[0]=1.5*i,this.trailSize[1]=2.6*i,e.sparks.emit(o)}this.shedCarry[t]+=Lb*e.dt;let o=Math.floor(this.shedCarry[t]);if(this.shedCarry[t]-=o,o>0){let i=this.shedSpec;i.x=n,i.y=r,i.angle=Math.atan2(this.vy[t],this.vx[t])+Math.PI,i.count=o,e.sparks.emit(i)}}spray(e,t,n){let r=this.x[t],i=this.y[t],a=Math.hypot(this.vx[t],this.vy[t])||1,o=this.vx[t]/a,s=this.vy[t]/a,c=Math.atan2(s,o),l=this.hitSpec;l.x=r,l.y=i,l.angle=c,l.count=Math.round(Xb*n),e.sparks.emit(l);let u=this.dropSpec;u.x=r-o*4,u.y=i-s*4,this.dropEnd.x=r+o*4,this.dropEnd.y=i+s*4,u.angle=c,u.count=Math.round(Zb*n),e.sparks.emit(u)}homecoming(e,t){let n=this.homeSpec;n.x=e.originX,n.y=e.originY,e.sparks.emit(n),this.spray(e,t,.35)}fizzle(e,t){let n=this.dustSpec;n.x=this.x[t],n.y=this.y[t],e.sparks.emit(n)}dispose(){this.removeHeads()}},nx=50,rx=7,ix=.78,ax=0,ox=1,sx=2,cx=125,lx=6,ux=78,dx=420,fx=.42,px=90,mx=1.5,hx=.006,gx=1.5,_x=.3,vx=.18,yx=2.2,bx=36,xx=1.35,Sx=24,Cx=12,wx=.5,Tx=12,Ex=16,Dx=.6,Ox=12577023,kx=16767083,Ax=.5,jx=.25,Mx=260,Nx=6,Px=24,Fx=60,Ix=22,Lx=12,Rx=1.5,zx=.9,Bx=44,Vx=26,Hx=.3,Ux=900,Wx=Math.PI*.72;function Gx(e,t,n){let r=e[t]+n;if(!(r>0))return e[t]=0,0;let i=Math.floor(r);return e[t]=r-i,i}function Kx(e){return .5+.5*e}var qx=class e{static meta={id:`swarm`,kind:`active`,color:5111674,core:14745576,base:{damage:cx,rate:1/fx,area:ux,speed:dx,count:lx,critChance:8,critDamage:150},scales:{attackSpeed:1.5,critChance:1,critDamage:1,damage:.5,area:.25,projectileSpeed:1}};id=e.meta.id;object;sprites;texture;capacity=20;count=lx;brood=0;awake=0;nectarPace=0;mods=new F;configure(t){this.mods=t,this.count=Math.min(Tx,6+t.count);for(let e=this.count;e<this.capacity;e++)this.sprites.hide(e);let n=new N(e.meta.color);for(let e=0;e<this.capacity;e++)this.sprites.setColor(e,n)}x;y;angle;state;target;cooldown;moved;carry;lastX;lastY;trailCarry;glitterCarry;dripCarry;pollenCarry;orbitRadius=22;hunt=ux;speed=dx;damage=cx;trailSpec={x:0,y:0,line:{x:0,y:0},speed:[0,14],life:[.22,.42],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3,curl:5,core:.5,twinkle:.25};glitterSpec={x:0,y:0,disc:3,speed:[2,12],gravity:-14,life:[.4,.8],size:[1.4,2.4],endSize:.3,color:e.meta.color,to:e.meta.core,drag:2,core:.6,twinkle:.8};dripSpec={x:0,y:0,disc:2,speed:[2,14],gravity:55,life:[.3,.55],size:[1.6,2.6],endSize:.4,color:kx,to:e.meta.core,drag:1.5,core:.7};pollenSpec={x:0,y:0,disc:Ex*.8,speed:[2,14],gravity:12,life:[.45,.9],size:[1.4,2.6],endSize:.4,color:Ox,to:e.meta.core,drag:2,core:.4,twinkle:.5};biteSpec={x:0,y:0,arc:Rx,speed:[90,280],life:[.12,.3],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03};biteGlowSpec={x:0,y:0,disc:4,speed:[10,70],life:[.25,.5],size:[2.2,3.8],endSize:.25,color:e.meta.color,to:e.meta.core,drag:3,core:.6,twinkle:.3};glintSpec={x:0,y:0,count:8,disc:3,speed:[20,60],gravity:30,life:[.3,.5],size:[1.8,2.8],endSize:.3,color:kx,to:e.meta.core,drag:2.5,core:.8};condenseSpec={x:0,y:0,count:26,ring:18,radial:!0,turn:Wx,arc:.4,speed:[40,80],life:[.3,.5],size:[1.8,3],endSize:.3,color:e.meta.color,to:e.meta.core,drag:1.8,core:.7};dashSpec={x:0,y:0,line:{x:0,y:0},arc:.25,speed:[140,360],normal:[0,40],delayAlong:.06,life:[.12,.3],size:[1.6,2.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.5,core:.9,kind:`streak`,stretch:.035};dashGlowSpec={x:0,y:0,line:{x:0,y:0},speed:[0,16],normal:[15,60],delayAlong:.08,life:[.3,.6],size:[2,3.4],endSize:.25,color:e.meta.color,to:e.meta.core,drag:2.6,curl:6,core:.5,twinkle:.3};pierceSpec={x:0,y:0,count:10,arc:.9,speed:[100,300],life:[.12,.28],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03};tipSpec={x:0,y:0,count:22,disc:4,speed:[20,120],life:[.15,.35],size:[2,3.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:3.5,core:.9};constructor(){this.texture=Te(32,2.4),this.sprites=new mr({capacity:this.capacity,texture:this.texture,additive:!0,gain:R,renderOrder:26}),this.object=this.sprites.points,this.x=new Float32Array(this.capacity),this.y=new Float32Array(this.capacity),this.angle=new Float32Array(this.capacity),this.state=new Uint8Array(this.capacity),this.target=new Int32Array(this.capacity),this.cooldown=new Float32Array(this.capacity),this.moved=new Float32Array(this.capacity),this.carry=new Float32Array(this.capacity),this.lastX=new Float32Array(this.capacity),this.lastY=new Float32Array(this.capacity),this.trailCarry=new Float32Array(this.capacity),this.glitterCarry=new Float32Array(this.capacity),this.dripCarry=new Float32Array(this.capacity),this.pollenCarry=new Float32Array(this.capacity);let t=new N(e.meta.color);for(let e=0;e<this.capacity;e++)this.angle[e]=e/this.count*Math.PI*2,this.target[e]=-1,this.sprites.setColor(e,t)}update(t){let n=U(e.meta,t.stats,`projectileSpeed`);this.nectarPace>0&&(this.nectarPace-=t.dt),this.brood=Math.max(0,this.brood-t.dt*wx);let r=Math.min(this.capacity,this.count+Math.floor(this.brood)),i=this.mods.has(`sentry`),a=i?t.originX:t.focusX,o=i?t.originY:t.focusY,s=i?bx:this.orbitRadius,c=W(this.hunt*(i?xx:1),U(e.meta,t.stats,`area`)*this.mods.size,Ur(t));for(let l=0;l<r;l++){l>=this.awake&&(this.x[l]=a,this.y[l]=o,this.state[l]=ax,this.target[l]=-1,this.cooldown[l]=0,this.carry[l]=0,this.angle[l]=l/r*Math.PI*2),this.angle[l]+=t.dt*2.6,this.cooldown[l]>0&&(this.cooldown[l]-=t.dt);let u=a+Math.cos(this.angle[l])*s,d=o+Math.sin(this.angle[l])*s*.85;if(this.state[l]===ax){this.moveTowards(l,u,d,this.speed*n,t.dt),this.cooldown[l]<=0&&this.acquire(l,t,c,a,o,r);continue}if(this.state[l]===ox){let n=this.target[l];if(n<0||!t.enemies.alive[n]||this.strayed(t,n,c,a,o)){this.state[l]=sx,this.target[l]=-1;continue}if(this.moveTowards(l,t.enemies.x[n],t.enemies.y[n],this.speed,t.dt)){let s=this.mods.has(`pack`)?this.packed(n,l,r):0,c=Math.min(yx,1+vx*s),u=t.enemies.alive[n]===1;this.mods.has(`lance`)?this.lance(t,l,n,c):t.hit(n,this.damage*this.mods.damage*c),this.mods.has(`nectar`)&&(this.carry[l]=Math.min(gx,this.damage*this.mods.damage*hx),this.glint(t,n)),this.mods.has(`brood`)&&u&&t.enemies.alive[n]!==1&&(this.brood=Math.min(Cx,this.brood+1),this.condense(t,n)),i&&t.enemies.knockback(n,a,o,Sx),t.synergy.react(t,`swarm`,`impact`,this.x[l],this.y[l]),this.bite(t,l,n,c,i,a,o),this.state[l]=sx,this.target[l]=-1,this.cooldown[l]=Gr(fx,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate).interval}continue}this.cooldown[l]<=0&&(this.acquire(l,t,c,a,o,r),this.state[l]===ox)||this.moveTowards(l,u,d,this.speed*n,t.dt)&&(this.state[l]=ax,this.carry[l]>0&&this.nectarPace<=0&&this.deliver(t,l,a,o))}for(let e=0;e<r;e++){let n=this.state[e]===ox,r=this.moved[e]>px*t.dt;this.mods.has(`dust`)&&r&&!n&&(t.enemies.queryCircle(this.x[e],this.y[e],Ex,e=>t.enemies.chill(e,Dx*this.mods.duration)),this.pollen(t,e)),this.trail(t,e,n,r);let i=.7+.3*Math.sin(t.elapsed*12+e*1.7);this.sprites.set(e,Math.round(this.x[e]),Math.round(this.y[e]),(n?11:8)*i*this.mods.visualScale(),n?1:.8)}for(let e=r;e<this.awake;e++)this.fade(t,e);this.awake=r;for(let e=r;e<this.capacity;e++)this.sprites.hide(e);this.sprites.sync()}deliver(t,n,r,i){t.heal(this.carry[n]),this.carry[n]=0,this.nectarPace=_x;let a=Math.hypot(t.originX-r,t.originY-i),o=Math.min(Hx,a/Ux);t.sparks.emit({x:r,y:i,line:{x:t.originX,y:t.originY},count:Math.min(60,12+Math.round(a*.2)),speed:[0,14],normal:[4,20],delayAlong:o,life:[.2,.4],size:[1.8,3],endSize:.3,color:kx,to:e.meta.core,drag:3,core:.7}),t.sparks.emit({x:this.x[n],y:this.y[n],count:22,disc:5,speed:[30,90],life:[.45,.7],size:[2,3.4],endSize:.3,color:kx,to:e.meta.color,drag:2,curl:12,attract:1,core:.8}),t.sparks.emit({x:t.originX,y:t.originY,count:18,ring:10,radial:!0,delay:o,speed:[30,80],life:[.2,.4],size:[1.8,2.8],endSize:.3,color:kx,to:e.meta.core,drag:3,core:.8})}lance(t,n,r,i){let a=Math.atan2(t.enemies.y[r]-this.y[n],t.enemies.x[r]-this.x[n]),o=W(nx,U(e.meta,t.stats,`area`)*this.mods.size,Ur(t)),s=this.x[n]+Math.cos(a)*o,c=this.y[n]+Math.sin(a)*o;t.enemies.querySegment(this.x[n],this.y[n],s,c,rx,e=>{t.hit(e,this.damage*this.mods.damage*ix*i,!1,`swarmLance`),this.pierce(t,e,a)}),this.dash(t,n,s,c,a,i),this.x[n]=s,this.y[n]=c}strayed(e,t,n,r,i){let a=e.enemies.x[t]-r,o=e.enemies.y[t]-i;return Math.hypot(a,o)>n*mx}claimed(e,t,n){for(let r=0;r<n;r++)if(r!==t&&this.target[r]===e)return!0;return!1}packed(e,t,n){let r=0;for(let i=0;i<n;i++)i!==t&&this.state[i]===ox&&this.target[i]===e&&r++;return r}acquire(e,t,n,r,i,a){let o=this.mods.has(`pack`),s=-1,c=1/0,l=-1,u=1/0;t.enemies.queryCircle(r,i,n,(t,n)=>{n<c&&(c=n,s=t),!o&&n<u&&!this.claimed(t,e,a)&&(u=n,l=t)});let d=l>=0?l:s;d>=0&&(this.target[e]=d,this.state[e]=ox)}moveTowards(e,t,n,r,i){let a=t-this.x[e],o=n-this.y[e],s=Math.hypot(a,o),c=r*i;return s<=Math.max(c,6)?(this.moved[e]=s,this.x[e]=t,this.y[e]=n,!0):(this.moved[e]=c,this.x[e]+=a/s*c,this.y[e]+=o/s*c,!1)}trail(e,t,n,r){let i=this.x[t],a=this.y[t],o=this.lastX[t],s=this.lastY[t];if(this.lastX[t]=i,this.lastY[t]=a,t>=this.awake){this.hatch(e,i,a);return}if(n||r){let r=Math.hypot(i-o,a-s),c=n?Ax:jx,l=r>Mx?0:Gx(this.trailCarry,t,r*c);if(l>0){let t=this.trailSpec;t.x=o,t.y=s,t.line.x=i,t.line.y=a,t.count=l,e.sparks.emit(t)}}else{let n=Gx(this.glitterCarry,t,Nx*e.dt);if(n>0){let t=this.glitterSpec;t.x=i,t.y=a,t.count=n,e.sparks.emit(t)}}if(this.carry[t]>0){let n=Gx(this.dripCarry,t,Px*e.dt);if(n>0){let t=this.dripSpec;t.x=i,t.y=a,t.count=n,e.sparks.emit(t)}}}pollen(e,t){let n=Gx(this.pollenCarry,t,Fx*e.dt);if(n===0)return;let r=this.pollenSpec;r.x=this.x[t],r.y=this.y[t],r.count=n,e.sparks.emit(r)}bite(e,t,n,r,i,a,o){let s=e.enemies.x[n],c=e.enemies.y[n],l=Kx(r),u=this.biteGlowSpec;if(u.x=s,u.y=c,u.count=Math.round(Lx*l),e.sparks.emit(u),this.mods.has(`lance`))return;let d=i?s-a:s-this.lastX[t],f=i?c-o:c-this.lastY[t];Math.abs(d)+Math.abs(f)<.001&&(d=s-a,f=c-o);let p=this.biteSpec;p.x=s,p.y=c,p.angle=Math.atan2(f,d),p.arc=i?zx:Rx,p.count=Math.round(Ix*l),e.sparks.emit(p)}glint(e,t){let n=this.glintSpec;n.x=e.enemies.x[t],n.y=e.enemies.y[t],e.sparks.emit(n)}condense(e,t){let n=this.condenseSpec;n.x=e.enemies.x[t],n.y=e.enemies.y[t],e.sparks.emit(n)}hatch(t,n,r){t.sparks.emit({x:n,y:r,count:20,ring:12,radial:!0,turn:Wx,arc:.3,speed:[26,50],life:[.24,.34],size:[1.8,3],endSize:.3,color:e.meta.core,to:e.meta.color,drag:2,core:.8}),t.sparks.emit({x:n,y:r,count:14,delay:[.22,.28],speed:[60,170],life:[.12,.26],size:[1.4,2.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03})}fade(t,n){t.sparks.emit({x:this.x[n],y:this.y[n],count:16,disc:4,speed:[8,40],gravity:-26,life:[.4,.8],size:[1.6,2.8],endSize:.3,color:e.meta.color,to:e.meta.core,drag:2,curl:8,core:.5,twinkle:.6})}pierce(e,t,n){let r=this.pierceSpec;r.x=e.enemies.x[t],r.y=e.enemies.y[t],r.angle=n,e.sparks.emit(r)}dash(e,t,n,r,i,a){let o=this.x[t],s=this.y[t],c=Kx(a),l=this.dashSpec;l.x=o,l.y=s,l.line.x=n,l.line.y=r,l.angle=i,l.count=Math.round(Bx*c),e.sparks.emit(l);let u=this.dashGlowSpec;u.x=o,u.y=s,u.line.x=n,u.line.y=r,u.count=Math.round(Vx*c),e.sparks.emit(u);let d=this.tipSpec;d.x=n,d.y=r,e.sparks.emit(d)}dispose(){this.sprites.dispose(),this.texture.dispose()}},Jx=.5,Yx=.2,Xx=170,Zx=1.6,Qx=3,$x=8,eS=12,tS=6,nS=4,rS=90,iS=240,aS=8,oS=.25,sS=.05,cS=.5,lS=.8,uS=.4,dS=.5,fS=3,pS=18,mS=9,hS=44,gS=6,_S=5.2,vS=.75,yS=.4,bS=.7,xS=.45,SS=2.4,CS=.45,wS=.1,TS=.35,ES=1.5,DS=3.4,OS=.8,kS=.2,AS=1.2,jS=.6,MS=.08,NS=2.4,PS=.5,FS=8,IS=140,LS=.6,RS=.3,zS=.35,BS=700,VS=.12,HS=.26,US=10,WS=8,GS=30,KS=48,qS=.25,JS=3,YS=.7,XS=1.8,ZS=6,QS=28,$S=.8,eC=1.5,tC=.8,nC=.5,rC=1.5,iC=1.6,aC=4,oC=520,sC=.12,cC=.45,lC=7,uC=3,dC=.6,fC=.05,pC=9,mC=Yx/Jx,hC=.75,gC=6,_C=.25,vC=3,yC=60,bC=.15,xC=3,SC=16,CC=.16,wC=18,TC=24,EC=30,DC=6,OC=24,kC=12,AC=4,jC=40,MC=150,NC=.35,PC=24,FC=400,IC=180,LC=90,RC=60,zC=.32,BC=2,VC=60,HC=8,UC=.35,WC=1.8,GC=14,KC=.8,qC=.4,JC=.6,YC=18,XC=.15,ZC=12577023,QC=.35,$C=Math.PI*2;function ew(e,t,n){let r=1-Math.exp(-t*n);return r>.001?e*t/r:e/n}function tw(e){return Math.min(cC,Math.max(sC,e/oC))}function nw(e,t){return((Math.imul(Math.min(e,t),73856093)^Math.imul(Math.max(e,t),19349663))>>>0)%997/10}function rw(e,t){let n=Math.imul(t+1,2654435761)^Math.imul(Math.round(e*10)+1,2246822507);return n=Math.imul(n^n>>>15,739982445),n^=n>>>12,(n>>>0)/4294967296}function iw(e){return e<0?0:e>1?1:e}function aw(e){let t=iw(e);return t*t*(3-2*t)}function ow(e){return e-Math.floor(e)}function sw(e,t,n){return e+(t-e)*n}function cw(e,t,n){return Math.floor(e*(t+1)/n)-Math.floor(e*t/n)}function lw(e,t,n){return t>=0&&e.enemies.alive[t]===1&&e.enemies.stamp[t]===n}var uw=class e{static meta={id:`tethers`,kind:`active`,color:13660415,core:16180991,base:{damage:0,rate:0,area:Xx,count:Qx},scales:{area:1}};id=e.meta.id;texture=he();sprites=new mr({capacity:1620,texture:this.texture,additive:!0,gain:R,renderOrder:19,fragmentShader:Bn});object=this.sprites.points;bound=new Int32Array(eS).fill(-1);stamp=new Float32Array(eS);extra=new Int32Array(tS).fill(-1);extraStamp=new Float32Array(tS);extraLeft=new Float32Array(tS);mods=new F;candidates=[];all=[];heirs=[];glint=new Float32Array;stored=new Float32Array;echoed=new Float32Array;flow=0;cutSeen=new Set;rimeAt=0;surge=new Float32Array;cool=new Float32Array;tieAge=new Float32Array;links=new Float64Array(108);linksBefore=new Float64Array(108);linkCount=0;linkCountBefore=0;linkSeen=new Uint8Array(pS);pulseNode=new Int32Array(KS).fill(-1);pulseStamp=new Float32Array(KS);pulseDir=new Int8Array(KS);pulseHops=new Int8Array(KS);pulseU=new Float32Array(KS);pulsePower=new Float32Array(KS);pulseFresh=new Uint8Array(KS);headT=new Float32Array(72);headDir=new Int8Array(72);headPower=new Float32Array(72);headCount=new Uint8Array(pS);gx=0;gy=0;gDirX=1;gDirY=0;gSpan=0;gSag=0;gTaut=0;gSeed=0;clock=0;look=1;beadTone=new N(e.meta.color).lerp(new N(e.meta.core),xS);grainTone=new N(e.meta.color);coreTone=new N(e.meta.core);rimeTone=new N(ZC);edgeFlows=Array.from({length:pS},()=>new z);cinchFlow=new z;cinchTurn=0;budget=yC;ties=DC;shed=FC;bursts=BC;recoil=[0,0];flowSpec={x:0,y:0,arc:.03,speed:0,life:0,size:[1.6,2.6],endSize:.5,color:e.meta.core,to:e.meta.color,drag:dC,core:.9,fade:.4,kind:`streak`,stretch:.025};beadSpec={x:0,y:0,arc:.03,speed:0,life:0,size:[3.2,4.6],endSize:.6,color:e.meta.core,to:e.meta.color,drag:dC,core:.6,fade:.5,twinkle:.3};arriveSpec={x:0,y:0,ring:6,radial:!0,speed:[30,90],life:[.2,.35],size:[2,3.4],endSize:.3,color:e.meta.core,to:e.meta.color,drag:4,core:.7};siphonSpec={x:0,y:0,count:xC,disc:6,speed:[20,70],life:[.5,.8],size:[2,3.2],endSize:.5,color:e.meta.color,to:e.meta.core,drag:2,attract:1,core:.7,twinkle:.3};legacySpec={x:0,y:0,count:kC,arc:.06,speed:0,delay:[0,.04],life:0,size:[1.8,3],endSize:.4,color:e.meta.core,to:e.meta.color,drag:dC,core:.9,fade:.3,kind:`streak`,stretch:.03};snapSpec={x:0,y:0,count:OC,ring:0,radial:!0,speed:[60,200],life:[.15,.35],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.8,kind:`streak`,stretch:.03};severSpec={x:0,y:0,line:{x:0,y:0},arc:.9,speed:0,normal:[10,45],vx:0,vy:0,life:[.3,.6],size:[_S*.5,_S*.9],endSize:.3,color:e.meta.core,to:e.meta.color,drag:3,gravity:40,core:.6,twinkle:.4};unravelSpec={x:0,y:0,line:{x:0,y:0},speed:[0,10],normal:[3,14],life:[.3,.55],size:[_S*.45,_S*.8],endSize:.3,color:e.meta.color,to:e.meta.color,drag:2,gravity:30,core:.4,fade:.8,twinkle:.5};tieSpec={x:0,y:0,count:wC,ring:0,even:!0,radial:!0,turn:Math.PI,arc:.1,speed:0,life:CC,size:[3,4.2],endSize:.5,color:e.meta.color,to:e.meta.core,drag:dC,core:.55,fade:.4};flashSpec={x:0,y:0,count:TC,delay:CC,disc:4,radial:!0,speed:[30,90],life:[.2,.35],size:[2.5,4],endSize:.3,color:e.meta.core,to:e.meta.color,drag:4,core:.8};chainSpec={x:0,y:0,count:EC,delay:CC,speed:[120,300],life:[.1,.25],size:[1.6,2.6],endSize:.2,color:e.meta.core,to:e.meta.color,drag:5,core:.9,kind:`streak`,stretch:.03};ruptureSpec={x:0,y:0,count:IC,ring:6,radial:!0,arc:.2,speed:0,life:[zC*.85,zC],size:[2,3.6],endSize:.25,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.035};ruptureGlowSpec={x:0,y:0,count:LC,disc:0,radial:!0,speed:[20,110],life:[.35,.7],size:[3.5,6],endSize:.3,color:e.meta.color,drag:2.5,curl:18,core:.35,twinkle:.3};shardSpec={x:0,y:0,count:RC,speed:[40,180],life:[.5,1],size:[1.4,2.4],endSize:.4,color:e.meta.core,to:e.meta.color,drag:2,gravity:60,core:.6,twinkle:.6,kind:`pixel`};edgeSpec={x:0,y:0,line:{x:0,y:0},speed:[0,20],normal:[60,180],life:[.08,.2],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:5,core:.95,kind:`streak`,stretch:.03};sliceSpec={x:0,y:0,count:HC,arc:.9,speed:[80,220],life:[.1,.24],size:[1.4,2.4],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:.9,kind:`streak`,stretch:.03};cinchSpec={x:0,y:0,count:1,arc:.1,speed:0,life:qC,size:[1.6,2.6],endSize:.4,color:e.meta.color,to:e.meta.core,drag:dC,core:.6,twinkle:.2,kind:`streak`,stretch:.03};frostSpec={x:0,y:0,count:YC,disc:8,speed:[5,30],life:[.5,.9],size:[1.6,2.8],endSize:.3,color:ZC,to:e.meta.core,drag:2,gravity:25,core:.6,twinkle:.7,kind:`pixel`};hoarSpec={x:0,y:0,line:{x:0,y:0},speed:[0,6],normal:[0,6],life:[.5,1],size:[1.4,2.4],endSize:.4,color:ZC,to:e.meta.core,drag:2,gravity:18,core:.6,twinkle:.8,kind:`pixel`};constructor(){this.sprites.syncRange(0)}configure(e){this.mods=e}update(t){this.ensure(t.enemies.x.length);let n=Xx*U(e.meta,t.stats,`area`)*this.mods.size,r=this.mods.has(`lattice`)?eS:Math.min($x,Qx+this.mods.count);for(let e=0;e<eS;e++){let i=this.bound[e];if(i<0)continue;let a=t.enemies.x[i]-t.originX,o=t.enemies.y[i]-t.originY,s=t.enemies.stamp[i]!==this.stamp[e],c=s||t.enemies.alive[i]!==1;(c||Math.hypot(a,o)>n*Zx||e>=r)&&(this.bound[e]=-1),c&&!s&&this.bequeath(t,i)}for(let e=0;e<tS;e++){let n=this.extra[e];if(n<0)continue;this.extraLeft[e]-=t.dt;let r=t.enemies.stamp[n]!==this.extraStamp[e],i=r||t.enemies.alive[n]!==1;(i||this.extraLeft[e]<=0)&&(this.extra[e]=-1),i&&!r&&this.bequeath(t,n)}this.attach(t,n,r),this.gather(r),this.rime(t),this.transfer(t),this.cut(t),this.cinch(t),this.draw(t)}ensure(e){this.stored.length>=e||(this.stored=new Float32Array(e),this.echoed=new Float32Array(e),this.glint=new Float32Array(e),this.surge=new Float32Array(e),this.cool=new Float32Array(e),this.tieAge=new Float32Array(e).fill(GS))}onKill(e,t){let n=e.enemies.stamp[t],r=!1;for(let e=0;e<eS;e++)this.bound[e]===t&&this.stamp[e]===n&&(this.bound[e]=-1,r=!0);for(let e=0;e<tS;e++)this.extra[e]===t&&this.extraStamp[e]===n&&(this.extra[e]=-1,r=!0);r&&this.bequeath(e,t)}bequeath(e,t){this.ensure(e.enemies.x.length);let n=this.heirs;n.length=0;for(let t=0;t<eS;t++)lw(e,this.bound[t],this.stamp[t])&&n.push(this.bound[t]);for(let t=0;t<tS;t++)lw(e,this.extra[t],this.extraStamp[t])&&n.push(this.extra[t]);let r=e.enemies.taken[t]>0||this.echoed[t]>0;this.pass(e,t,n),this.snap(e,t),r&&this.bequest(e,t,n),this.rupture(e,t)}snap(e,t){let n=this.links,r=e.enemies.stamp[t];for(let i=0;i<this.linkCount;i++){let a=i*gS;if(n[a]===t&&n[a+2]===r)this.sever(e,t,n[a+1]);else if(n[a+1]===t&&n[a+3]===r)this.sever(e,t,n[a]);else continue;n[a+2]=-1,n[a+3]=-1}if(this.shed<OC)return;this.shed-=OC;let i=this.snapSpec;i.x=e.enemies.x[t],i.y=e.enemies.y[t],i.ring=e.enemies.radius[t]*.5,e.sparks.emit(i)}sever(e,t,n){if(!this.shape(e,t,n))return;let r=Math.min(jC,Math.ceil(this.gSpan/mS)*2);if(this.shed<r)return;this.shed-=r;let i=e.enemies,a=this.severSpec,o=a.line;a.angle=Math.atan2(this.gDirY,this.gDirX),a.speed=this.recoil,a.sizeScale=this.look;for(let s=0;s<AC;s++){let c=cw(r,s,AC);if(c===0)continue;let l=(s+.5)/AC;a.count=c,a.x=this.curveX(s/AC),a.y=this.curveY(s/AC),o.x=this.curveX((s+1)/AC),o.y=this.curveY((s+1)/AC),this.recoil[0]=MC*(1-l)*.4,this.recoil[1]=MC*(1-l),a.vx=sw(i.vx[t],i.vx[n],l)*NC,a.vy=sw(i.vy[t],i.vy[n],l)*NC,e.sparks.emit(a)}}bequest(e,t,n){let r=e.enemies.x[t],i=e.enemies.y[t],a=this.legacySpec;a.x=r,a.y=i;for(let o=0;o<n.length;o++){let s=n[o];if(s===t||e.enemies.alive[s]!==1)continue;if(this.shed<kC)return;this.shed-=kC;let c=e.enemies.x[s]-r,l=e.enemies.y[s]-i,u=Math.hypot(c,l),d=tw(u);a.angle=Math.atan2(l,c),a.speed=ew(u,dC,d),a.life=d,e.sparks.emit(a)}}rupture(e,t){if(!this.mods.has(`rupture`)||this.stored[t]<=0)return;let n=this.stored[t];this.stored[t]=0;let r=e.enemies.x[t],i=e.enemies.y[t];e.enemies.queryCircle(r,i,rS*this.mods.size,t=>{e.hit(t,n,!1,`tethersRupture`,`tethers`)}),e.impacts.pop(r,i,.8),this.burst(e,r,i,rS*this.mods.size)}burst(e,t,n,r){if(this.bursts<=0)return;this.bursts--;let i=this.ruptureSpec;i.x=t,i.y=n,i.speed=ew(r-6,4,zC),e.sparks.emit(i);let a=this.ruptureGlowSpec;a.x=t,a.y=n,a.disc=r*.35,e.sparks.emit(a);let o=this.shardSpec;o.x=t,o.y=n,e.sparks.emit(o)}actions={mark:(e,t)=>this.bind(e,t.enemy)};bind(e,t){for(let e=0;e<eS;e++)if(this.bound[e]===t)return;let n=-1,r=1/0;for(let e=0;e<tS;e++){if(this.extra[e]===t){this.extraLeft[e]=nS;return}let i=this.extra[e]<0?-1:this.extraLeft[e];i<r&&(r=i,n=e)}n<0||(this.extra[n]=t,this.extraStamp[n]=e.enemies.stamp[t],this.extraLeft[n]=nS,e.enemies.taken[t]=0,this.forget(t),this.tie(e,t,!0))}forget(e){e>=this.stored.length||(this.stored[e]=0,this.echoed[e]=0,this.glint[e]=0,this.surge[e]=0)}tie(e,t,n){if(t<this.tieAge.length&&(this.tieAge[t]=0),this.ties<=0)return;this.ties--;let r=e.enemies.x[t],i=e.enemies.y[t],a=e.enemies.radius[t]+SC,o=this.tieSpec;o.x=r,o.y=i,o.ring=a,o.speed=ew(a,dC,CC),o.sizeScale=this.look,e.sparks.emit(o);let s=this.flashSpec;if(s.x=r,s.y=i,e.sparks.emit(s),!n)return;let c=this.chainSpec;c.x=r,c.y=i,e.sparks.emit(c)}gather(e){this.all.length=0;for(let t=0;t<e;t++)this.bound[t]>=0&&this.all.push(this.bound[t]);for(let e=0;e<tS;e++)this.extra[e]>=0&&this.all.push(this.extra[e])}transfer(e){this.flow=0;for(let t=0;t<this.all.length;t++)this.pass(e,this.all[t],this.all)}pass(e,t,n){let r=this.mods.has(`lattice`)?Yx:Jx,i=this.mods.has(`tetherEcho`),a=this.mods.has(`rupture`),o=this.mods.has(`siphon`),s=n.includes(t)?n.length-1:n.length,c=.3/Math.max(1,s-1),l=uS/Math.max(1,s),u=e.enemies.taken[t],d=i?this.echoed[t]:0;if(e.enemies.taken[t]=0,this.echoed[t]=0,u+d<=0||s<=0)return;let f=u*r*this.mods.damage,p=d*r*this.mods.damage,m=(u+d)*l;this.glint[t]=1,this.surge[t]=Math.max(this.surge[t],1);for(let r=0;r<n.length;r++){let s=n[r];if(s===t||e.enemies.alive[s]!==1)continue;f>0&&e.hit(s,f,!0,void 0,`tethers`),p>0&&e.hit(s,p,!0,`tethersEcho`,`tethers`),this.glint[s]=1;let l=f+p;this.flow+=l,a&&(this.stored[s]+=l),o&&e.heal(l*sS),i&&m>dS&&(this.echoed[s]+=m),this.arrive(e,t,s,l,p>0,o,c)}}arrive(e,t,n,r,i,a,o){let s=r>=(e.enemies.hp[n]+r)*_C;if(s&&(this.surge[t]=Math.max(this.surge[t],XS)),!s&&Math.random()>=o)return;let c=gC*(s?vC:1),l=c*(i?2:1)+(a?xC:0);if(this.budget<l)return;this.budget-=l;let u=e.enemies.x[n],d=e.enemies.y[n],f=tw(Math.hypot(u-e.enemies.x[t],d-e.enemies.y[t])),p=this.arriveSpec;if(p.x=u,p.y=d,p.ring=e.enemies.radius[n]*.6,p.count=c,p.delay=f,e.sparks.emit(p),i&&(p.delay=f+bC,e.sparks.emit(p)),a){let t=this.siphonSpec;t.x=u,t.y=d,t.delay=f,e.sparks.emit(t)}}cut(e){if(!this.mods.has(`garrote`)||this.all.length<2||this.flow<=0)return;let t=this.all,n=this.flow*oS;this.cutSeen.clear();for(let r=0;r+1<t.length;r++)this.wire(e,t[r],t[r+1],n);t.length>2&&this.wire(e,t[t.length-1],t[0],n)}wire(e,t,n,r){let i=e.enemies.x[t],a=e.enemies.y[t],o=e.enemies.x[n],s=e.enemies.y[n];e.enemies.querySegment(i,a,o,s,aS,t=>{this.cutSeen.has(t)||this.all.includes(t)||(this.cutSeen.add(t),e.hit(t,r,!0,`tethersGarrote`),Math.random()<.2&&this.slice(e,t,o-i,s-a))})}slice(e,t,n,r){if(this.budget<HC)return;this.budget-=HC;let i=this.sliceSpec;i.x=e.enemies.x[t],i.y=e.enemies.y[t],i.angle=Math.atan2(r,n)+(Math.random()<.5?.5:-.5)*Math.PI,e.sparks.emit(i)}cinch(e){if(!this.mods.has(`cinch`)||this.all.length<2)return;let t=this.all,n=0,r=0;for(let i=0;i<t.length;i++)n+=e.enemies.x[t[i]],r+=e.enemies.y[t[i]];n/=t.length,r/=t.length;for(let i=0;i<t.length;i++)e.enemies.pull(t[i],n,r,iS,e.dt);this.cinchSparks(e,n,r)}cinchSparks(e,t,n){let r=this.all,i=this.cinchFlow.take(GC*r.length,e.dt),a=this.cinchSpec;for(let o=0;o<i;o++){this.cinchTurn=(this.cinchTurn+1)%r.length;let i=r[this.cinchTurn],o=e.enemies.x[i],s=e.enemies.y[i];a.x=o,a.y=s,a.angle=Math.atan2(n-s,t-o),a.speed=ew(Math.hypot(t-o,n-s)*KC,dC,qC),e.sparks.emit(a)}}rime(e){if(!this.mods.has(`tetherRime`)||this.all.length===0||e.elapsed<this.rimeAt)return;this.rimeAt=e.elapsed+cS;let t=this.all;for(let n=0;n<t.length;n++){let r=t[n];e.enemies.chill(r,lS);let i=e.enemies.x[r],a=e.enemies.y[r],o=this.frostSpec;o.x=i,o.y=a,o.disc=e.enemies.radius[r]*.7,e.sparks.emit(o)}for(let n=0;n+1<t.length;n++)this.hoar(e,t[n],t[n+1]);t.length>2&&this.hoar(e,t[t.length-1],t[0])}hoar(e,t,n){this.shape(e,t,n)&&this.alongCurve(e,this.hoarSpec,2,Math.round(this.gSpan*XC))}attach(e,t,n){let r=0;for(let e=0;e<n;e++)this.bound[e]<0&&r++;if(r===0||(this.candidates.length=0,e.enemies.queryCircle(e.originX,e.originY,t,t=>{for(let e=0;e<eS;e++)if(this.bound[e]===t)return;for(let e=0;e<tS;e++)if(this.extra[e]===t)return;let n=e.enemies.x[t]-e.focusX,r=e.enemies.y[t]-e.focusY;this.candidates.push({index:t,distance:Math.hypot(n,r)})}),this.candidates.length===0))return;this.candidates.sort((e,t)=>e.distance-t.distance);let i=0;for(let t=0;t<n&&i<this.candidates.length;t++){if(this.bound[t]>=0)continue;let n=this.candidates[i++];this.bound[t]=n.index,this.stamp[t]=e.enemies.stamp[n.index],e.enemies.taken[n.index]=0,this.forget(n.index),this.tie(e,n.index,!1)}}draw(e){let t=this.all;this.clock+=e.dt,this.look=this.mods.visualScale()*(this.mods.has(`lattice`)?hC:1);for(let n=0;n<t.length;n++){let r=t[n];this.glint[r]=Math.max(0,this.glint[r]-e.dt*fS),this.cool[r]=Math.max(0,this.cool[r]-e.dt),this.tieAge[r]=Math.min(GS,this.tieAge[r]+e.dt)}this.relink(e),this.launch(e),this.advance(e);let n=0;for(let t=0;t<this.linkCount;t++)n=this.beads(e,t,n);this.sprites.syncRange(n),this.budget=yC,this.ties=DC,this.shed=FC,this.bursts=BC}relink(e){let t=this.links,n=this.linksBefore;this.links=n,this.linksBefore=t,this.linkCountBefore=this.linkCount;let r=this.all,i=e.enemies,a=r.length;this.linkCount=a<2?0:a===2?1:a,this.linkSeen.fill(0);for(let o=0;o<this.linkCount;o++){let s=r[o],c=r[(o+1)%a],l=Math.min(s,c),u=Math.max(s,c),d=this.tieAge[l]>=this.tieAge[u]?l:u,f=0,p=d;for(let n=0;n<this.linkCountBefore;n++){let r=n*gS;if(t[r]===l&&t[r+1]===u){this.linkSeen[n]=1,f=t[r+4]+e.dt,p=t[r+5];break}}let m=Math.min(this.tieAge[l],this.tieAge[u]);m<f&&(f=m,p=d);let h=o*gS;n[h]=l,n[h+1]=u,n[h+2]=i.stamp[l],n[h+3]=i.stamp[u],n[h+4]=f,n[h+5]=p}for(let n=0;n<this.linkCountBefore;n++){if(this.linkSeen[n]===1)continue;let r=n*gS,i=t[r],a=t[r+1];lw(e,i,t[r+2])&&lw(e,a,t[r+3])&&this.unravel(e,i,a)}}unravel(e,t,n){if(!this.shape(e,t,n))return;let r=Math.min(PC,Math.ceil(this.gSpan/mS));this.shed<r||(this.shed-=r,this.unravelSpec.sizeScale=this.look,this.alongCurve(e,this.unravelSpec,2,r))}launch(e){let t=this.all,n=t.length;for(let r=0;r<n;r++){let i=t[r],a=this.surge[i];if(a<=0||this.cool[i]>0||(this.surge[i]=0,n<2))continue;this.cool[i]=qS;let o=n>2?Math.ceil((n-1)/2):+(r===0),s=n>2?Math.floor((n-1)/2):+(r===1);o>0&&this.spawn(e,i,1,Math.min(JS,o),a),s>0&&this.spawn(e,i,-1,Math.min(JS,s),a)}}spawn(e,t,n,r,i){for(let a=0;a<KS;a++)if(!(this.pulseNode[a]>=0)){this.pulseNode[a]=t,this.pulseStamp[a]=e.enemies.stamp[t],this.pulseDir[a]=n,this.pulseHops[a]=r,this.pulseU[a]=0,this.pulsePower[a]=i,this.pulseFresh[a]=1;return}}advance(e){let t=this.all,n=e.enemies,r=t.length;this.headCount.fill(0);for(let i=0;i<KS;i++){let a=this.pulseNode[i];if(a<0)continue;let o=r<2?-1:t.indexOf(a),s=this.pulseDir[i],c=o+s,l=c>=0&&c<r?s>0?o:c:r>2?r-1:-1;if(o<0||l<0||!lw(e,a,this.pulseStamp[i])){this.pulseNode[i]=-1;continue}let u=t[(c+r)%r],d=tw(Math.hypot(n.x[u]-n.x[a],n.y[u]-n.y[a]));this.pulseFresh[i]===1&&(this.pulseFresh[i]=0,this.flowSparks(e,a,u,d,this.pulsePower[i]));let f=this.pulseU[i]+e.dt/d;if(f>=1){if(this.pulseHops[i]--,this.pulseHops[i]<=0){this.pulseNode[i]=-1;continue}this.pulseNode[i]=u,this.pulseStamp[i]=n.stamp[u],this.pulseU[i]=Math.min(f-1,.5),this.pulsePower[i]*=YS,this.pulseFresh[i]=1;continue}this.pulseU[i]=f;let p=this.headCount[l];if(p>=aC)continue;let m=l*aC+p,h=this.links[l*gS]===a;this.headT[m]=h?f:1-f,this.headDir[m]=h?1:-1,this.headPower[m]=this.pulsePower[i],this.headCount[l]=p+1}}flowSparks(e,t,n,r,i){if(!this.shape(e,t,n))return;let a=i*(this.mods.has(`lattice`)?mC:1),o=-this.gDirX*this.gSag,s=dC,c=(1-Math.exp(-.6*r))/s,l=-Math.log(1-s*c/2)/s,u=-o*s/(r/2-l),d=u*(r-c)/(s*c);for(let t=0;t<2;t++){let n=t===0?this.flowSpec:this.beadSpec;n.count=Math.round((t===0?lC:uC)*a),n.x=this.gx,n.y=this.gy,n.angle=Math.atan2(this.gDirY,this.gDirX),n.speed=this.gSpan/c,n.vy=d,n.gravity=u,n.life=r,n.sizeScale=this.look,e.sparks.emit(n)}}beads(e,t,n){let r=this.links,i=t*gS,a=r[i],o=r[i+1],s=e.enemies;if(s.alive[a]!==1||s.alive[o]!==1||!this.shape(e,a,o))return n;let c=this.gSpan,l=Math.max(mS,c/hS),u=Math.max(this.glint[a],this.glint[o]),d=this.mods.has(`lattice`)?hC:1,f=(1+RS*this.gTaut)*(1+zS*u)*d,p=this.mods.has(`garrote`),m=p?sw(1,WC,u):1,h=this.mods.has(`tetherRime`)?QC:0,g=Math.min(HS,Math.max(VS,c/BS)),_=Math.min(1,r[i+4]/g),v=r[i+5]===a,y=s.radius[a]*PS,b=s.radius[o]*PS,x=this.headCount[t],S=Math.sign(this.gSag)*rC,C=this.sprites.capacity,w=Math.floor(c/l);for(let e=0;e<=w&&n<C;e++)for(let r=0;r<2&&n<C;r++){let i=(e+r*.5)*l;if(i>c)break;let a=aw((i-y)/FS)*aw((c-i-b)/FS);if(a<=0)continue;let o=1,s=0;if(_<1){let e=_*c-(v?i:c-i);if(o=iw(1+e/US),o<=0)continue;let t=e/WS;s=Math.exp(-t*t)}for(let e=0;e<x;e++){let n=t*aC+e,r=(i-this.headT[n]*c)*this.headDir[n],a=r>0?r/ZS:r/QS;s+=Math.exp(-a*a)*this.headPower[n]}let u=Math.min(s,iC),d=r===0,p=rw(this.gSeed,e*2+r),g=sw(ES,DS,ow(p*7.13)),C=1-TS*(.5+.5*Math.sin(this.clock*g+p*$C)),w=jS*Math.sin(i*MS-this.clock*NS+this.gSeed),T=(this.gSag+w-S*u)*Math.sin(i/c*Math.PI),E=this.gx+this.gDirX*i-this.gDirY*T,ee=this.gy+this.gDirY*i+this.gDirX*T,D=(d?sw(bS,1,ow(p*3.71))*_S:SS)*this.look*(1+$S*u),O=(d?vS:CS*m)*f*C*a*o*(1+eC*u),k=d?this.beadTone:this.grainTone,te=d?h:Math.min(1,h*1.5),ne=Math.min(1,u*tC),re=this.rimeTone,ie=this.coreTone,A=(d?yS:wS)+nC*u;this.sprites.set(n,E,ee,D,O),this.sprites.setColorRgb(n,sw(sw(k.r,re.r,te),ie.r,ne),sw(sw(k.g,re.g,te),ie.g,ne),sw(sw(k.b,re.b,te),ie.b,ne)),this.sprites.setTile(n,Math.min(1,A)),n++}return p&&this.flow>0&&this.edge(e,t),n}edge(e,t){let n=this.edgeFlows[t].take(VC,e.dt);n>0&&this.alongCurve(e,this.edgeSpec,2,n)}shape(e,t,n){let r=e.enemies,i=r.x[n]-r.x[t],a=r.y[n]-r.y[t],o=Math.hypot(i,a);if(o<1)return!1;let s=i/o,c=iw((o-IS)/240),l=Math.max(c,this.mods.has(`cinch`)?JC:0),u=this.mods.has(`garrote`)?UC:1,d=nw(t,n),f=OS+kS*Math.sin(this.clock*AS+d);return this.gx=r.x[t],this.gy=r.y[t],this.gDirX=s,this.gDirY=a/o,this.gSpan=o,this.gSag=-s*Math.min(o*fC,pC)*(1-LS*l)*u*f,this.gTaut=l,this.gSeed=d,!0}curveX(e){return this.gx+this.gDirX*this.gSpan*e-this.gDirY*this.gSag*Math.sin(Math.PI*e)}curveY(e){return this.gy+this.gDirY*this.gSpan*e+this.gDirX*this.gSag*Math.sin(Math.PI*e)}alongCurve(e,t,n,r){let i=t.line;for(let a=0;a<n;a++){let o=cw(r,a,n);o!==0&&(t.count=o,t.x=this.curveX(a/n),t.y=this.curveY(a/n),i.x=this.curveX((a+1)/n),i.y=this.curveY((a+1)/n),e.sparks.emit(t))}}dispose(){this.sprites.dispose(),this.texture.dispose()}},dw=95,fw=1,pw=62,mw=.45,hw=1500,gw=4,_w=class e{static meta={id:`vortex`,kind:`active`,color:4841424,core:14680057,base:{damage:dw,rate:1/fw,area:pw,critChance:8,critDamage:180},scales:{damage:1,attackSpeed:1,area:.5,critChance:.5,critDamage:.5}};id=e.meta.id;object=new M;mods=new F;cool=0;span=fw;x=new Float32Array(gw);y=new Float32Array(gw);left=new Float32Array(gw);reach=new Float32Array(gw);cursor=0;configure(e){this.mods=e}update(t){this.cool=Math.max(0,this.cool-t.dt);let n=Gr(fw,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate);this.span=n.interval,(t.taps>0||t.held)&&this.cool<=0&&(this.cast(t,n.damage),this.cool=n.interval),this.drag(t)}cast(t,n){let r=W(pw,U(e.meta,t.stats,`area`)*this.mods.size,Ur(t)),i=dw*this.mods.damage*n,a=t.handX,o=t.handY;t.enemies.queryCircle(a,o,r,e=>t.hit(e,i));let s=this.cursor;this.cursor=(this.cursor+1)%gw,this.x[s]=a,this.y[s]=o,this.reach[s]=r,this.left[s]=mw*this.mods.duration,this.show(t,a,o,r),I.play(`vortex`),t.synergy.react(t,`vortex`,`impact`,a,o,-1,t.aimX,t.aimY)}drag(e){for(let t=0;t<gw;t++){if(this.left[t]<=0)continue;this.left[t]-=e.dt;let n=this.x[t],r=this.y[t];e.enemies.queryCircle(n,r,this.reach[t],t=>{e.enemies.pull(t,n,r,hw,e.dt)})}}show(t,n,r,i){let{color:a,core:o}=e.meta;t.sparks.emit({x:n,y:r,count:120,ring:i,radial:!0,turn:Math.PI*.78,speed:[i*1.7,i*2.6],delay:[0,.16],life:[.26,.42],size:[1.1,2.3],endSize:.3,color:a,to:o,attract:1,attractTo:{x:n,y:r},curl:7,drag:1.6,twinkle:.35,kind:`streak`,stretch:.035}),t.sparks.emit({x:n,y:r,count:34,ring:i,even:!0,life:[.3,.46],size:[1,2],color:a,intensity:.7,orbit:{around:{x:n,y:r},spin:[3.2,4.4],drift:[-i*1.1,-i*1.6]}}),t.sparks.emit({x:n,y:r,count:22,disc:i*.22,speed:[12,46],life:[.16,.3],size:[1.8,3.4],endSize:.2,color:o,core:.85,drag:4})}sweeps(e,t){for(let n=0;n<gw;n++){if(this.left[n]<=0)continue;let r=this.x[n]-e,i=this.y[n]-t;if(r*r+i*i<=this.reach[n]*this.reach[n])return!0}return!1}readiness(){return this.cool<=0||this.span<=0?1:1-this.cool/this.span}dispose(){this.left.fill(0)}},vw=.34,yw=class{object=new M;meshes=[];materials=[];geometry=new xe(1,1);age;life;cursor=0;constructor(e,t,n=28){this.life=t,this.age=new Float32Array(e).fill(t);for(let t=0;t<e;t++){let e=new Ee({vertexShader:_n,fragmentShader:En,uniforms:{uGlow:{value:new N(16777215)},uSmokeLit:{value:new N(16777215)},uSmokeDim:{value:new N(0)},uHalfLength:{value:1},uHalfHeight:{value:1},uProgress:{value:0},uSeed:{value:0},uIntensity:{value:1},uGain:{value:R}},transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,blendEquation:100}),t=new pe(this.geometry,e);t.frustumCulled=!1,t.renderOrder=n,t.position.z=1,t.visible=!1,this.meshes.push(t),this.materials.push(e),this.object.add(t)}}setColors(e,t,n){for(let r of this.materials)r.uniforms.uGlow.value.setHex(e),r.uniforms.uSmokeLit.value.setHex(t),r.uniforms.uSmokeDim.value.setHex(n)}spawn(e,t,n,r,i=1){let a=this.cursor;this.cursor=(a+1)%this.meshes.length;let o=r*vw,s=this.meshes[a];s.position.x=e,s.position.y=t,s.rotation.z=n,s.scale.set(r*2,o*2,1),s.visible=!0;let c=this.materials[a].uniforms;c.uHalfLength.value=r,c.uHalfHeight.value=o,c.uProgress.value=0,c.uSeed.value=Math.random()*40,c.uIntensity.value=i,this.age[a]=0}update(e){for(let t=0;t<this.meshes.length;t++)if(!(this.age[t]>=this.life)){if(this.age[t]+=e,this.age[t]>=this.life){this.meshes[t].visible=!1;continue}this.materials[t].uniforms.uProgress.value=this.age[t]/this.life}}clear(){for(let e=0;e<this.meshes.length;e++)this.age[e]=this.life,this.meshes[e].visible=!1}dispose(){this.geometry.dispose();for(let e of this.materials)e.dispose()}},bw=170,xw=.9,Sw=95,Cw=9,ww=170,Tw=14,Ew=.85,Dw=16,Ow=1.4,kw=5215192,Aw=529446,jw=.75,Mw=3,Nw=12,Pw=3,Fw=2,Iw=.4,Lw=2.5,Rw=64,zw=3,Bw=.75,Vw=6,Hw=4,Uw=.33,Ww=Ew*.9,Gw=2,Kw=.3,qw=.9,Jw=700,Yw=.3,Xw=260,Zw=.08,Qw=36,$w=22,eT=.3,tT=220,nT=.35,rT=64,iT=16,aT=14,oT=.5,sT=260,cT=1,lT={kind:`outline`,shape:bt(4,.2)},uT=[Wo,Bs,gp,qx,uf,ll,ma,du,tx,ub,class e{static meta={id:`whip`,kind:`passive`,color:3112959,core:13625087,base:{damage:bw,rate:1/xw,area:Sw,critChance:10,critDamage:180},scales:{attackSpeed:1.5,area:1,critChance:.5,critDamage:.5,damage:.25}};id=e.meta.id;object;cuts=new yw(Dw,Ew);timer=1;mods=new F;pickIndex=new Int32Array(zw);pickDist=new Float32Array(zw);woundIndex=new Int32Array(Rw);woundStamp=new Float32Array(Rw);woundLeft=new Float32Array(Rw);woundDps=new Float32Array(Rw);scarX=new Float32Array(Vw);scarY=new Float32Array(Vw);scarAngle=new Float32Array(Vw);scarHalf=new Float32Array(Vw);scarWidth=new Float32Array(Vw);scarLeft=new Float32Array(Vw);scarDps=new Float32Array(Vw);scarRedraw=new Float32Array(Vw);scarCursor=0;weaveCount=0;countWeave=()=>{this.weaveCount++};density=1;tempo=1;dripCarry=new Float32Array(Rw);scarCarry=new Float32Array(Vw);shedSpec={x:0,y:0,line:{x:0,y:0},arc:.9,speed:[0,60],normal:[50,230],delayAlong:Zw,life:[.15,.4],size:[1.6,3],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,curl:6,core:.9,kind:`streak`,stretch:.03};mistSpec={x:0,y:0,line:{x:0,y:0},arc:1.2,speed:[0,30],normal:[8,60],delayAlong:Zw*1.4,life:[.35,.8],size:[3,6],endSize:.5,color:e.meta.color,to:kw,drag:2.5,curl:16,core:.25,fade:.8};tipSpec={x:0,y:0,arc:.7,speed:[160,420],delay:Zw,life:[.1,.26],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4.5,core:1,kind:`streak`,stretch:.035};hitSpec={x:0,y:0,arc:1.1,speed:[90,280],life:[.12,.3],size:[1.6,2.8],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:.9,kind:`streak`,stretch:.03};bandSpec={x:0,y:0,line:{x:0,y:0},arc:.8,speed:[20,110],delayAlong:Zw,life:[.2,.45],size:[2,3.6],endSize:.3,color:e.meta.color,to:kw,drag:3.5,core:.6};weaveSpec={x:0,y:0,line:{x:0,y:0},arc:.15,speed:[10,50],normal:[0,8],delayAlong:Zw,life:[.4,.75],size:[1.2,2],endSize:.5,color:e.meta.core,to:e.meta.color,drag:2,core:.7,twinkle:.8,kind:`pixel`};dripSpec={x:0,y:0,disc:5,angle:-Math.PI/2,arc:1.4,speed:[5,30],life:[.4,.7],size:[2,3.4],endSize:.4,color:e.meta.color,to:kw,drag:1.5,gravity:110,core:.5,twinkle:.2};emberSpec={x:0,y:0,line:{x:0,y:0},speed:[0,12],normal:[2,16],life:[.4,.8],size:[2,3.4],endSize:.3,color:e.meta.color,to:kw,drag:1.5,gravity:-22,curl:6,core:.4,twinkle:.6,fade:.8};constructor(){this.cuts.setColors(e.meta.color,kw,Aw),this.object=this.cuts.object}actions={fire:(e,t)=>this.sever(e,t.x,t.y,t.share,t)};configure(e){this.mods=e}update(t){if(this.cuts.update(t.dt),this.bleedTick(t),this.scarTick(t),this.timer-=t.dt,this.timer>0)return;let n=Gr(xw,U(e.meta,t.stats,`attackSpeed`)*this.mods.rate);this.timer+=n.interval,this.tempo=Math.min(1,n.interval/Kw),this.sever(t,t.originX,t.originY,n.damage)}sever(t,n,r,i,a){let o=this.mods.has(`triad`)?zw:1,s=0;if(t.enemies.queryCircle(n,r,ww,(e,t)=>{let n=s<o?s:o-1;if(!(s===o&&t>=this.pickDist[n])){for(;n>0&&this.pickDist[n-1]>t;)this.pickDist[n]=this.pickDist[n-1],this.pickIndex[n]=this.pickIndex[n-1],n--;this.pickDist[n]=t,this.pickIndex[n]=e,s<o&&s++}}),s===0)return;let c=this.mods.has(`swathe`)?Math.hypot(t.bounds.x,t.bounds.y)/2:Sw*U(e.meta,t.stats,`area`)*this.mods.size,l=Cw*(this.mods.has(`broad`)?Pw:1),u=bw*this.mods.damage*i;this.mods.has(`triad`)&&(u*=Bw),this.mods.has(`crux`)&&(u*=jw),this.density=Math.min(1,Gw/(s*(this.mods.has(`crux`)?2:1)))*this.tempo;for(let e=0;e<s;e++){let n=this.pickIndex[e],r=t.enemies.x[n],i=t.enemies.y[n],o=a?Math.atan2(a.dirY,a.dirX):this.aimAt(t,r,i,c,l),s=a?a.credit:e===0?void 0:`whipTriad`;this.cut(t,r,i,o,c,l,u,s),this.mods.has(`crux`)&&(this.cut(t,r,i,o+Math.PI/2,c,l,u,a?.credit??`whipCrux`),this.crossFlare(t,r,i,o)),!(e>0)&&(a||I.play(`whip`),t.impacts.pop(r,i,.5),t.synergy.react(t,`whip`,`impact`,r,i,n,Math.cos(o),Math.sin(o)))}}aimAt(e,t,n,r,i){return this.mods.has(`guided`)?Math.atan2(e.aimY,e.aimX):this.mods.has(`whipWeave`)?this.weave(e,t,n,r,i):this.mods.has(`swathe`)?Math.atan2(n-e.originY,t-e.originX):Math.random()*Math.PI*2}weave(e,t,n,r,i){let a=Math.PI/Nw,o=Math.random()*Math.PI,s=o,c=-1;for(let l=0;l<Nw;l++){let u=o+a*l,d=Math.cos(u),f=Math.sin(u);this.weaveCount=0,e.enemies.querySegment(t-d*r,n-f*r,t+d*r,n+f*r,i,this.countWeave),!(this.weaveCount<=c)&&(c=this.weaveCount,s=u)}return s}cut(e,t,n,r,i,a,o,s){let c=Math.cos(r),l=Math.sin(r),u=Tw*(this.mods.has(`broad`)?Fw:1),d=(t-e.originX)*c+(n-e.originY)*l<0?-1:1;e.enemies.querySegment(t-c*i,n-l*i,t+c*i,n+l*i,a,r=>{e.hit(r,o,!1,s);let a=(e.enemies.x[r]-t)*c+(e.enemies.y[r]-n)*l;e.enemies.knockback(r,t+c*a,n+l*a,u),this.mods.has(`bleed`)&&this.wound(e,r,o);let f=(d*a+i)/(2*i);this.spray(e,r,t+c*a,n+l*a,f)}),this.mods.has(`scar`)&&this.scar(t,n,r,i,a,o),this.draw(t,n,r,i),this.shed(e,t,n,c*d,l*d,i,a)}spray(e,t,n,r,i){let a=e.enemies.x[t],o=e.enemies.y[t],s=this.hitSpec;s.x=a,s.y=o;let c=Math.hypot(a-n,o-r)>1;s.angle=c?Math.atan2(o-r,a-n):0,s.arc=c?1.1:Math.PI*2,s.delay=Zw*Math.min(1,Math.max(0,i)),s.count=$w*this.density,e.sparks.emit(s)}shed(e,t,n,r,i,a,o){let s=this.density,c=a*2,l=t-r*a,u=n-i*a,d=t+r*a,f=n+i*a,p=Math.atan2(i,r),m=this.shedSpec;m.x=l,m.y=u,m.line.x=d,m.line.y=f,m.angle=p,m.count=Math.min(Jw,c*qw)*s,e.sparks.emit(m);let h=this.mistSpec;h.x=l,h.y=u,h.line.x=d,h.line.y=f,h.angle=p,h.count=Math.min(Xw,c*Yw)*s,e.sparks.emit(h);let g=this.tipSpec;if(g.x=d,g.y=f,g.angle=p,g.count=Qw*s,e.sparks.emit(g),this.mods.has(`broad`)){let t=this.bandSpec,n=-i*o,a=r*o;t.count=Math.min(tT,c*eT)*s;for(let r=-1;r<=1;r+=2)t.x=l+n*r,t.y=u+a*r,t.line.x=d+n*r,t.line.y=f+a*r,t.angle=p+r*Math.PI/2,e.sparks.emit(t)}if(this.mods.has(`whipWeave`)){let t=this.weaveSpec;t.x=l,t.y=u,t.line.x=d,t.line.y=f,t.count=c*nT*s/2;for(let n=0;n<2;n++)t.angle=p+n*Math.PI,e.sparks.emit(t)}}crossFlare(t,n,r,i){t.sparks.emit({x:n,y:r,count:rT*this.density,shape:{layout:lT,radius:iT,angle:i},radial:!0,arc:.15,speed:[120,360],life:[.12,.3],size:[1.8,3.2],endSize:.2,color:e.meta.core,to:e.meta.color,drag:4,core:1,kind:`streak`,stretch:.035})}wound(e,t,n){let r=e.enemies.stamp[t],i=-1;for(let e=0;e<Rw;e++)if(!(this.woundLeft[e]<=0)&&this.woundIndex[e]===t&&this.woundStamp[e]===r){i=e;break}if(i<0){let e=1/0;for(let t=0;t<Rw;t++){if(this.woundLeft[t]<=0){i=t;break}this.woundLeft[t]>=e||(e=this.woundLeft[t],i=t)}}this.woundIndex[i]=t,this.woundStamp[i]=r,this.woundLeft[i]=Lw,this.woundDps[i]=n*Iw/Lw}bleedTick(e){for(let t=0;t<Rw;t++){if(this.woundLeft[t]<=0)continue;let n=this.woundIndex[t];if(!e.enemies.alive[n]||e.enemies.stamp[n]!==this.woundStamp[t]){this.woundLeft[t]=0;continue}let r=Math.min(e.dt,this.woundLeft[t]);this.woundLeft[t]-=e.dt,e.hit(n,this.woundDps[t]*r,!0,`whipBleed`),this.drip(e,t,n)}}drip(e,t,n){this.dripCarry[t]+=aT*e.dt;let r=Math.floor(this.dripCarry[t]);if(r===0)return;this.dripCarry[t]-=r;let i=this.dripSpec;i.x=e.enemies.x[n],i.y=e.enemies.y[n],i.disc=e.enemies.radius[n]*.5,i.count=r,e.sparks.emit(i)}scar(e,t,n,r,i,a){let o=this.scarCursor;this.scarCursor=(o+1)%Vw,this.scarX[o]=e,this.scarY[o]=t,this.scarAngle[o]=n,this.scarHalf[o]=r,this.scarWidth[o]=i,this.scarLeft[o]=Hw,this.scarDps[o]=a*Uw,this.scarRedraw[o]=Ww}scarTick(e){for(let t=0;t<Vw;t++){if(this.scarLeft[t]<=0)continue;let n=this.scarX[t],r=this.scarY[t],i=this.scarAngle[t],a=this.scarHalf[t],o=Math.cos(i),s=Math.sin(i),c=this.scarDps[t],l=Math.min(e.dt,this.scarLeft[t]);this.scarLeft[t]-=e.dt,e.enemies.querySegment(n-o*a,r-s*a,n+o*a,r+s*a,this.scarWidth[t],t=>{e.hit(t,c*l,!0,`whipScar`)}),this.smoulder(e,t,n,r,o,s,a),this.scarRedraw[t]-=e.dt,!(this.scarRedraw[t]>0||this.scarLeft[t]<=0)&&(this.scarRedraw[t]+=Ww,this.draw(n,r,i,a))}}smoulder(e,t,n,r,i,a,o){let s=this.scarLeft[t];if(s<=0)return;let c=Math.min(1,s/cT);this.scarCarry[t]+=Math.min(sT,o*2*oT)*c*e.dt;let l=Math.floor(this.scarCarry[t]);if(l===0)return;this.scarCarry[t]-=l;let u=this.emberSpec;u.x=n-i*o,u.y=r-a*o,u.line.x=n+i*o,u.line.y=r+a*o,u.count=l,e.sparks.emit(u)}draw(e,t,n,r){let i=Ow*this.mods.visualScale();if(!this.mods.has(`swathe`)){this.cuts.spawn(e,t,n,r,i);return}let a=Math.cos(n),o=Math.sin(n),s=r/Mw,c=s*2;for(let r=0;r<Mw;r++){let l=(r-1)*c;this.cuts.spawn(e+a*l,t+o*l,n,s,i)}}dispose(){this.cuts.dispose()}},wv,u_,uw,Bh,wm,_w],dT=uT.map(e=>e.meta);function fT(e){let t=uT.find(t=>t.meta.id===e);if(!t)throw Error(`Неизвестная способность: ${e}`);return new t}function pT(e){let t=dT.find(t=>t.id===e);if(!t)throw Error(`Неизвестная способность: ${e}`);return t}var mT=[...{none:[],base:[`vortex`]}.base];function hT(e){return mT.includes(e)}var gT=[];[`swarm`,`beam`,`bolts`,`chain`,`orbiters`,`aura`,`nova`,`singularity`,`spikes`,`smite`,`whip`,`orbs`,`lance`,`tethers`,`harpoon`,`breath`].filter(e=>!hT(e)).map(pT),dT.filter(e=>e.kind===`active`),dT.filter(e=>e.kind===`passive`);var _T=class{probability=0;constant=0;failures=0;constructor(e=0){this.setProbability(e)}setProbability(e){let t=Math.max(0,Math.min(1,e));Math.abs(t-this.probability)<5e-4||(this.probability=t,this.constant=vT(t),this.failures=0)}roll(e){if(this.probability<=0)return!1;if(this.probability>=1)return!0;let t=this.constant*(this.failures+1);return e.next()<t?(this.failures=0,!0):(this.failures++,!1)}reset(){this.failures=0}};function vT(e){let t=0,n=1,r=e;for(let i=0;i<24;i++)r=(t+n)/2,yT(r)>e?n=r:t=r;return r}function yT(e){let t=1,n=0,r=Math.ceil(1/e);for(let i=1;i<=r;i++){let r=Math.min(1,e*i)*t;t-=r,n+=i*r}return 1/n}var bT=`idle`,xT=1.5,ST=2.2;function CT(e){let t=Math.max(1,e),n=t*ST;if(n<=t||120<=t)return n;let r=120-t;return t+r*(1-Math.exp(-(n-t)/r))}function wT(e,t){return 0}function TT(e){return e<0}var ET=`spritesheet.png`,DT=`atlas.json`;function OT(e){let t=CT(e)*xT,n=Math.ceil(t/2)*2;return Math.max(16,Math.min(320,n))}function kT(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function AT(e){if(!e||typeof e!=`object`)return null;let t=e,n=Object.entries(t.frames??{});if(n.length===0)return null;let r=[],i=[];for(let[e,t]of n){let n=t?.frame,a=kT(n?.w,0),o=kT(n?.h,0);a<=0||o<=0||(r.push(e),i.push({x:kT(n?.x,0),y:kT(n?.y,0),w:a,h:o,seconds:kT(t?.duration,125)/1e3}))}if(i.length===0)return null;let a=new Map(r.map((e,t)=>[e,t])),o=[];for(let[e,n]of Object.entries(t.animations??{})){let t=[];for(let e of n??[]){let n=a.get(e);n!==void 0&&t.push(n)}t.length>0&&o.push(MT(e,t,i))}return o.length===0&&o.push(MT(bT,i.map((e,t)=>t),i)),{frames:i,clips:o}}function jT(e,t,n=8){let r=[],i=Math.max(1,Math.floor(n)),a=Math.floor(e/i);for(let e=0;e<i;e++)r.push({x:e*a,y:0,w:a,h:t,seconds:125/1e3});return{frames:r,clips:[MT(bT,r.map((e,t)=>t),r)]}}function MT(e,t,n){let r=0;for(let e of t)r+=n[e]?.seconds??0;return{name:e,frames:t,seconds:r}}function NT(e,t,n){if(e.frames.length===1||e.seconds<=0)return e.frames[0]??0;let r=t%e.seconds;r<0&&(r+=e.seconds);for(let t of e.frames)if(r-=n[t]?.seconds??0,r<0)return t;return e.frames[e.frames.length-1]}var PT=0,FT=class{texture=null;kinds=new Map;has(e){return this.kinds.has(e)}get(e){return this.kinds.get(e)}get map(){return this.texture}get size(){return this.kinds.size}frameAt(e,t,n){let r=NT(e.clips.get(t)??e.idle,n,e.plan.frames);return e.frames[r]??e.frames[0]}async load(e,t){let n=[];for(let[r,i]of Object.entries(e)){let e=i.replace(/\/$/,``),a=await IT(ot(`${e}/${ET}`));if(!a)continue;let o=AT(await LT(ot(`${e}/${DT}`)))??jT(a.naturalWidth,a.naturalHeight);n.push({id:r,image:a,plan:o,cell:OT(t(r))})}if(n.length===0)return;let r=0,i=0;for(let e of n)r=Math.max(r,e.plan.frames.length*e.cell),i+=e.cell+PT;let a=document.createElement(`canvas`);a.width=Math.max(1,r),a.height=Math.max(1,i);let o=a.getContext(`2d`);if(!o)return;o.imageSmoothingEnabled=!0,o.imageSmoothingQuality=`high`;let s=0;for(let e of n){let t=[];for(let n=0;n<e.plan.frames.length;n++){let r=e.plan.frames[n],i=r.w/r.h,c=Math.min(e.cell/r.w,e.cell/r.h),l=Math.max(1,Math.round(r.w*c)),u=Math.max(1,Math.round(r.h*c)),d=n*e.cell+Math.floor((e.cell-l)/2),f=s+Math.floor((e.cell-u)/2);o.drawImage(e.image,r.x,r.y,r.w,r.h,d,f,l,u),t.push({u0:d/a.width,v0:1-(f+u)/a.height,du:l/a.width,dv:u/a.height,aspect:i})}let n=new Map(e.plan.clips.map(e=>[e.name,e])),r=n.get(`idle`)??e.plan.clips[0];this.kinds.set(e.id,{id:e.id,frames:t,clips:n,idle:r,plan:e.plan}),s+=e.cell+PT}let c=new je(a);c.magFilter=we,c.minFilter=we,c.generateMipmaps=!1,c.colorSpace=ye,c.needsUpdate=!0,this.texture?.dispose(),this.texture=c}get bytes(){let e=this.texture?.image;return(e?.width??0)*(e?.height??0)*4}dispose(){this.texture?.dispose(),this.texture=null,this.kinds.clear()}};function IT(e){return new Promise(t=>{let n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=e})}async function LT(e){try{let t=await fetch(e,{cache:`force-cache`});return t.ok?await t.json():null}catch{return null}}var RT=new FT;function zT(){return RT.load(at.enemySprites,BT)}function BT(e){let t=lt[e];return t===void 0?16:L[t].size}var VT=class{object;capacity;offsets;sizes;angles;alphas;colors;rects;geometry;material;count=0;constructor(e){this.capacity=e.capacity,this.offsets=new Float32Array(e.capacity*2),this.sizes=new Float32Array(e.capacity*2),this.angles=new Float32Array(e.capacity),this.alphas=new Float32Array(e.capacity),this.colors=new Float32Array(e.capacity*3),this.rects=new Float32Array(e.capacity*4);let t=new xe(1,1);this.geometry=new me,this.geometry.index=t.index,this.geometry.setAttribute(`position`,t.attributes.position),this.geometry.setAttribute(`uv`,t.attributes.uv),this.geometry.setAttribute(`aOffset`,new j(this.offsets,2)),this.geometry.setAttribute(`aSize`,new j(this.sizes,2)),this.geometry.setAttribute(`aAngle`,new j(this.angles,1)),this.geometry.setAttribute(`aAlpha`,new j(this.alphas,1)),this.geometry.setAttribute(`aColor`,new j(this.colors,3)),this.geometry.setAttribute(`aRect`,new j(this.rects,4)),this.geometry.instanceCount=0,this.material=new Ee({vertexShader:Ln,fragmentShader:Rn,transparent:!0,depthTest:!1,depthWrite:!1,side:2,uniforms:{uMap:{value:e.texture},uGain:{value:e.gain??1}}}),this.object=new pe(this.geometry,this.material),this.object.frustumCulled=!1,this.object.renderOrder=23}begin(){this.count=0}add(e,t,n,r,i,a,o,s=!1){if(this.count>=this.capacity)return;let c=this.count++;this.offsets[c*2]=Math.round(e),this.offsets[c*2+1]=Math.round(t);let l=Math.round(n*o.aspect);this.sizes[c*2]=s?-l:l,this.sizes[c*2+1]=Math.round(n),this.angles[c]=r,this.alphas[c]=i,this.colors[c*3]=a.r,this.colors[c*3+1]=a.g,this.colors[c*3+2]=a.b,this.rects[c*4]=o.u0,this.rects[c*4+1]=o.v0,this.rects[c*4+2]=o.du,this.rects[c*4+3]=o.dv}end(){if(this.geometry.instanceCount=this.count,this.count===0)return;let e=this.geometry.attributes;e.aOffset.needsUpdate=!0,e.aSize.needsUpdate=!0,e.aAngle.needsUpdate=!0,e.aAlpha.needsUpdate=!0,e.aColor.needsUpdate=!0,e.aRect.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},HT=6,UT=class{object;onCollect=null;sprites;texture;capacity;x;y;vx;vy;life;value;delay;phase;cursor=0;color=new N(16771496);constructor(e=512){this.capacity=e,this.texture=Te(32,2.2),this.sprites=new mr({capacity:e,texture:this.texture,additive:!0,gain:Mt,renderOrder:28,fragmentShader:zn}),this.object=this.sprites.points,this.x=new Float32Array(e),this.y=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.life=new Float32Array(e),this.value=new Float32Array(e),this.delay=new Float32Array(e),this.phase=new Float32Array(e);for(let t=0;t<e;t++)this.sprites.setColor(t,this.color)}spawn(e,t,n){if(n<=0)return;let r=Math.max(1,Math.min(HT,Math.round(n/6))),i=n/r;for(let n=0;n<r;n++){let n=this.take(),r=Math.random()*Math.PI*2,a=40+Math.random()*70;this.x[n]=e,this.y[n]=t,this.vx[n]=Math.cos(r)*a,this.vy[n]=Math.sin(r)*a,this.life[n]=6,this.value[n]=i,this.delay[n]=.18+Math.random()*.22,this.phase[n]=Math.random()*Math.PI*2}}update(e,t,n,r){for(let i=0;i<this.capacity;i++){if(this.life[i]<=0){this.sprites.hide(i);continue}if(this.life[i]-=e,this.life[i]<=0){this.collect(i);continue}if(this.delay[i]>0)this.delay[i]-=e,this.vx[i]*=Math.exp(-4*e),this.vy[i]*=Math.exp(-4*e);else{let a=t-this.x[i],o=n-this.y[i],s=Math.hypot(a,o)||1,c=260+900/Math.max(s,12);this.vx[i]+=a/s*c*e,this.vy[i]+=o/s*c*e;let l=Math.exp(-1.6*e);if(this.vx[i]*=l,this.vy[i]*=l,s<9){r.burst({x:this.x[i],y:this.y[i],color:16774870,count:9,speed:65,life:.3,size:1,drag:5}),this.collect(i);continue}}this.x[i]+=this.vx[i]*e,this.y[i]+=this.vy[i]*e;let a=.72+.28*Math.sin(this.phase[i]+this.life[i]*9);this.sprites.set(i,this.x[i],this.y[i],7,.95*a)}this.sprites.sync()}take(){let e=Go(this.life,this.cursor);if(e>=0)return this.cursor=(e+1)%this.capacity,e;let t=this.cursor;return this.cursor=(this.cursor+1)%this.capacity,this.collect(t),t}collect(e){let t=this.value[e];this.life[e]=0,this.value[e]=0,this.sprites.hide(e),t>0&&this.onCollect?.(t)}clear(){this.life.fill(0),this.value.fill(0);for(let e=0;e<this.capacity;e++)this.sprites.hide(e);this.sprites.sync()}dispose(){this.sprites.dispose(),this.texture.dispose()}},WT=[`ember`,`frost`,`storm`,`void`,`light`,`earth`,`water`,`poison`,`chaos`],GT=[{id:`ember`,color:16738859,auraSeconds:5},{id:`frost`,color:8382463,auraSeconds:6},{id:`storm`,color:12160255,auraSeconds:5},{id:`void`,color:16734888,auraSeconds:4},{id:`light`,color:16765514,auraSeconds:7},{id:`earth`,color:11040316,auraSeconds:6},{id:`water`,color:4033535,auraSeconds:5},{id:`poison`,color:8313175,auraSeconds:7},{id:`chaos`,color:16726891,auraSeconds:4}],KT=Object.fromEntries(GT.map((e,t)=>[e.id,t]));function qT(e){return GT[KT[e]]}var JT=.5,YT={ignite:[`ember`],freeze:[`frost`,`earth`],chill:[`frost`,`earth`],push:[`storm`,`earth`],pull:[`void`],heal:[`light`],armor:[`light`,`earth`],spread:[`water`,`chaos`],shred:[`poison`,`light`]},XT=[{id:`ember_frost`,pair:[`ember`,`frost`],color:14280944,effect:{burst:1.2,radius:60,chill:2,ignite:.6}},{id:`ember_storm`,pair:[`ember`,`storm`],color:16748348,effect:{burst:2.4,radius:46,push:26}},{id:`ember_void`,pair:[`ember`,`void`],color:12742735,effect:{burst:1,radius:56,pull:!0,ignite:.8}},{id:`ember_light`,pair:[`ember`,`light`],color:16757575,effect:{burst:.6,radius:40,armor:1,heal:1}},{id:`ember_earth`,pair:[`ember`,`earth`],color:16734750,effect:{burst:1.4,radius:52,chill:1.5,ignite:.5}},{id:`ember_water`,pair:[`ember`,`water`],color:16751723,effect:{burst:.9,radius:66,ignite:1,spread:!0}},{id:`ember_poison`,pair:[`ember`,`poison`],color:13214247,effect:{burst:.8,radius:44,shred:1.5}},{id:`ember_chaos`,pair:[`ember`,`chaos`],color:16730667,effect:{burst:1.6,radius:50,ignite:1.4,spread:!0}},{id:`frost_storm`,pair:[`frost`,`storm`],color:10475519,effect:{burst:1.1,radius:58,shred:1}},{id:`frost_void`,pair:[`frost`,`void`],color:9419007,effect:{burst:1,radius:54,pull:!0,freeze:.8}},{id:`frost_light`,pair:[`frost`,`light`],color:13625855,effect:{burst:.5,radius:38,armor:1.4}},{id:`frost_earth`,pair:[`frost`,`earth`],color:10139844,effect:{burst:.7,radius:60,chill:3}},{id:`frost_water`,pair:[`frost`,`water`],color:7063807,effect:{burst:.6,radius:50,freeze:1.2}},{id:`frost_poison`,pair:[`frost`,`poison`],color:10474672,effect:{burst:.6,radius:44,shred:1.2,chill:2}},{id:`frost_chaos`,pair:[`frost`,`chaos`],color:11066623,effect:{burst:.9,radius:70,freeze:.5}},{id:`storm_void`,pair:[`storm`,`void`],color:13667583,effect:{burst:1.3,radius:72,pull:!0}},{id:`storm_light`,pair:[`storm`,`light`],color:16769164,effect:{burst:1,radius:50,heal:1}},{id:`storm_earth`,pair:[`storm`,`earth`],color:12888171,effect:{burst:1.2,radius:56,freeze:.4}},{id:`storm_water`,pair:[`storm`,`water`],color:7055615,effect:{burst:1.5,radius:68}},{id:`storm_poison`,pair:[`storm`,`poison`],color:11065687,effect:{burst:1,radius:58,shred:1,spread:!0}},{id:`storm_chaos`,pair:[`storm`,`chaos`],color:13912831,effect:{burst:1.4,radius:62,push:20}},{id:`void_light`,pair:[`void`,`light`],color:16754900,effect:{burst:.8,radius:52,pull:!0,heal:1.4}},{id:`void_earth`,pair:[`void`,`earth`],color:11565675,effect:{burst:.9,radius:50,pull:!0,chill:2.5}},{id:`void_water`,pair:[`void`,`water`],color:5935060,effect:{burst:1,radius:64,pull:!0,push:14}},{id:`void_poison`,pair:[`void`,`poison`],color:11041492,effect:{burst:1.1,radius:60,shred:1,spread:!0}},{id:`void_chaos`,pair:[`void`,`chaos`],color:16734863,effect:{burst:1.2,radius:66,pull:!0}},{id:`light_earth`,pair:[`light`,`earth`],color:13940843,effect:{burst:.4,radius:40,armor:1.6}},{id:`light_water`,pair:[`light`,`water`],color:9426175,effect:{burst:.5,radius:60,heal:1.6}},{id:`light_poison`,pair:[`light`,`poison`],color:13951116,effect:{burst:.5,radius:44,shred:1,heal:1.2}},{id:`light_chaos`,pair:[`light`,`chaos`],color:16761963,effect:{burst:.6,radius:48,armor:1,heal:1}},{id:`earth_water`,pair:[`earth`,`water`],color:9411691,effect:{burst:.8,radius:58,chill:3.5}},{id:`earth_poison`,pair:[`earth`,`poison`],color:9414716,effect:{burst:1,radius:54,shred:1.4}},{id:`earth_chaos`,pair:[`earth`,`chaos`],color:12881754,effect:{burst:1.5,radius:48,push:18}},{id:`water_poison`,pair:[`water`,`poison`],color:7062671,effect:{burst:1,radius:66,shred:1,spread:!0}},{id:`water_chaos`,pair:[`water`,`chaos`],color:5945599,effect:{burst:1.1,radius:70,push:24}},{id:`poison_chaos`,pair:[`poison`,`chaos`],color:10277962,effect:{burst:1.2,radius:62,shred:1.2,spread:!0}}],ZT=new Map(XT.map(e=>[e.id,e]));function QT(e,t){let n=YT[t];if(!n)return null;for(let t of n)if(e.pair[0]===t||e.pair[1]===t)return t;return null}function $T(e,t){return WT.indexOf(e)<WT.indexOf(t)?`${e}_${t}`:`${t}_${e}`}function eE(e,t){return e===t?null:ZT.get($T(e,t))??null}function tE(e){let t=[...new Set(e)].sort((e,t)=>WT.indexOf(e)-WT.indexOf(t)),n=[];for(let e=0;e<t.length;e++)for(let r=e+1;r<t.length;r++){let i=eE(t[e],t[r]);i&&n.push(i)}return n}var nE={freeze:{id:`freeze`,color:8382463},shatter:{id:`shatter`,color:16777215,amplify:1.6}};function rE(e,t){return e===t?null:eE(e,t)?.id??null}function iE(e){return 1+(Math.max(1,e)-1)*JT}var aE=.45,oE=2.5,sE=1.3,cE=.65,lE=2.6,uE={storm:{chance:.16,speed:46,life:.28,size:1,drag:4.5,lift:0},void:{chance:.14,speed:10,life:.5,size:1,drag:6,lift:0},light:{chance:.12,speed:16,life:.7,size:1,drag:1.4,lift:.6},earth:{chance:.18,speed:24,life:.45,size:2,drag:5.5,lift:-.8},water:{chance:.16,speed:18,life:.6,size:2,drag:2.2,lift:-.4},poison:{chance:.2,speed:12,life:.8,size:1,drag:1.2,lift:.8},chaos:{chance:.22,speed:70,life:.2,size:1,drag:7,lift:0}},dE=64,fE=96,pE=.55,mE=4,hE=2,gE=3.4,_E=.68,vE=.36,yE=40,bE=60,xE=1.35,SE=1500,CE=3e3;function wE(e){let t=e.r*.2126+e.g*.7152+e.b*.0722;t>_E&&e.multiplyScalar(_E/t)}var TE=new N(1,1,1),EE=4,DE=16,OE=Math.PI*2,kE=class{capacity;object;texture;sprites;glow;glowTexture;quads;sheets;animTime;originX=0;originY=0;color=new N;flashColor=new N;glowColor=new N;tintColor=new N;x;y;vx;vy;hp;maxHp;radius;kind;alive;frozen;spawning;driftX;driftY;aura;auraTimer;auraIcd;burnTimer;burnDps;burnStacks;group;chillTimer;freezeTimer;brandTimer;brandDamage;shredTimer;shredPoints;flash;angle;spin;phase;attackCooldown;summonTimer;shootTimer;juke;owner;ahead;slot;gap;phaseIndex;bossTimer;dodgeTimer;bossState;stateTimer;courseX;courseY;stamp;taken;nextStamp=1;splitOff;orbitDir;orbitRadius;damageAccum;damageTimer;damageCrit;aliveCount=0;live;liveLen=0;freeList;freeTop=0;cellItems;cellStart=new Int32Array(1);gridCols=0;gridRows=0;gridMinX=0;gridMinY=0;gridPad=0;healthScale=1;damageScale=1;mysteryKnown=!1;speedScale=1;armorBonus=0;knockbackResistBonus=0;controlResistBonus=0;bossHealthScale=1;bossDamageScale=1;onKill=null;onSpawn=null;onSummon=null;onShoot=null;numberMode=`on`;onBurn=null;onDamageNumber=null;rng;constructor(e=400,t=null){this.capacity=e,this.rng=t,this.live=new Int32Array(e),this.freeList=new Int32Array(e),this.cellItems=new Int32Array(e),this.refill(),this.x=new Float32Array(e),this.y=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.hp=new Float32Array(e),this.maxHp=new Float32Array(e),this.radius=new Float32Array(e),this.kind=new Uint8Array(e),this.alive=new Uint8Array(e),this.frozen=new Uint8Array(e),this.spawning=new Float32Array(e),this.aura=new Uint8Array(e),this.auraTimer=new Float32Array(e),this.auraIcd=new Float32Array(e),this.burnTimer=new Float32Array(e),this.burnDps=new Float32Array(e),this.burnStacks=new Uint8Array(e),this.group=new Int32Array(e),this.chillTimer=new Float32Array(e),this.freezeTimer=new Float32Array(e),this.shredTimer=new Float32Array(e),this.shredPoints=new Float32Array(e),this.brandTimer=new Float32Array(e),this.brandDamage=new Float32Array(e),this.driftX=new Float32Array(e),this.driftY=new Float32Array(e),this.flash=new Float32Array(e),this.angle=new Float32Array(e),this.spin=new Float32Array(e),this.phase=new Float32Array(e),this.attackCooldown=new Float32Array(e),this.summonTimer=new Float32Array(e),this.shootTimer=new Float32Array(e),this.juke=new Float32Array(e),this.owner=new Int32Array(e),this.ahead=new Int32Array(e),this.slot=new Int32Array(e),this.gap=new Float32Array(e),this.phaseIndex=new Uint8Array(e),this.bossTimer=new Float32Array(e),this.dodgeTimer=new Float32Array(e),this.bossState=new Uint8Array(e),this.stateTimer=new Float32Array(e),this.courseX=new Float32Array(e),this.courseY=new Float32Array(e),this.splitOff=new Uint8Array(e),this.stamp=new Float32Array(e),this.taken=new Float32Array(e),this.orbitDir=new Float32Array(e),this.orbitRadius=new Float32Array(e),this.damageAccum=new Float32Array(e),this.damageTimer=new Float32Array(e),this.damageCrit=new Uint8Array(e),this.texture=Se(),this.sprites=new mr({capacity:e,texture:this.texture,additive:!1,renderOrder:22,grid:5}),this.glowTexture=Te(48,2.8),this.glow=new mr({capacity:e,texture:this.glowTexture,additive:!0,renderOrder:21});let n=RT.map;this.quads=n?new VT({capacity:e,texture:n}):null,this.sheets=L.map(e=>RT.get(e.id)),this.animTime=new Float32Array(e),this.object=new M,this.object.add(this.glow.points,this.sprites.points),this.quads&&this.object.add(this.quads.object)}get count(){return this.aliveCount}get liveSlots(){return this.live}get liveLength(){return this.liveLen}cellX(e){let t=Math.floor((e-this.gridMinX)/dE);return t<0?0:t>=this.gridCols?this.gridCols-1:t}cellY(e){let t=Math.floor((e-this.gridMinY)/dE);return t<0?0:t>=this.gridRows?this.gridRows-1:t}buildGrid(){let e=1/0,t=1/0,n=-1/0,r=-1/0,i=0;for(let a=0;a<this.liveLen;a++){let o=this.live[a];if(!this.alive[o])continue;let s=this.x[o],c=this.y[o];s<e&&(e=s),s>n&&(n=s),c<t&&(t=c),c>r&&(r=c),this.radius[o]>i&&(i=this.radius[o])}if(e>n){this.gridCols=1,this.gridRows=1,this.gridMinX=0,this.gridMinY=0,this.gridPad=0,this.cellStart.length<2&&(this.cellStart=new Int32Array(2)),this.cellStart[0]=0,this.cellStart[1]=0;return}this.gridMinX=e,this.gridMinY=t,this.gridPad=i,this.gridCols=Math.min(fE,Math.floor((n-e)/dE)+1),this.gridRows=Math.min(fE,Math.floor((r-t)/dE)+1);let a=this.gridCols*this.gridRows;this.cellStart.length<a+1&&(this.cellStart=new Int32Array(a+1)),this.cellStart.fill(0,0,a+1);for(let e=0;e<this.liveLen;e++){let t=this.live[e];this.alive[t]&&this.cellStart[this.cellY(this.y[t])*this.gridCols+this.cellX(this.x[t])+1]++}for(let e=0;e<a;e++)this.cellStart[e+1]+=this.cellStart[e];for(let e=0;e<this.liveLen;e++){let t=this.live[e];if(!this.alive[t])continue;let n=this.cellY(this.y[t])*this.gridCols+this.cellX(this.x[t]);this.cellItems[this.cellStart[n]++]=t}for(let e=a;e>0;e--)this.cellStart[e]=this.cellStart[e-1];this.cellStart[0]=0}refill(){for(let e=0;e<this.capacity;e++)this.freeList[e]=this.capacity-1-e;this.freeTop=this.capacity}takeSlot(){return this.freeTop>0?this.freeList[--this.freeTop]:-1}release(e){this.aliveCount--,this.freeTop<this.capacity&&(this.freeList[this.freeTop++]=e)}enter(e){this.liveLen>=this.capacity&&this.compact(),this.live[this.liveLen++]=e,this.aliveCount++}compact(){let e=0;for(let t=0;t<this.liveLen;t++){let n=this.live[t];this.alive[n]&&(this.live[e++]=n)}this.liveLen=e}spawn(e,t,n){if(this.aliveCount>=this.capacity)return-1;let r=this.takeSlot();if(r>=0){let i=r,a=L[e];this.alive[i]=1,this.frozen[i]=0,this.taken[i]=0,this.spawning[i]=pE,this.kind[i]=e,this.onSpawn?.(a),this.x[i]=t,this.y[i]=n,this.vx[i]=0,this.vy[i]=0,this.hp[i]=a.hp*(a.boss?this.bossHealthScale:this.healthScale),this.maxHp[i]=this.hp[i],this.radius[i]=a.radius,this.flash[i]=0,this.driftX[i]=0,this.driftY[i]=0,this.aura[i]=0,this.auraTimer[i]=0,this.auraIcd[i]=0,this.burnTimer[i]=0,this.burnStacks[i]=0,this.group[i]=0,this.chillTimer[i]=0,this.freezeTimer[i]=0,this.shredTimer[i]=0,this.shredPoints[i]=0,this.brandTimer[i]=0,this.brandDamage[i]=0;let o=this.rng?this.rng.next():Math.random();return this.phase[i]=o*Math.PI*2,this.angle[i]=a.boss?0:o*Math.PI*2,this.animTime[i]=this.phase[i],this.spin[i]=a.spin??0,this.attackCooldown[i]=0,this.summonTimer[i]=a.summon?a.summon.interval*.6:0,this.shootTimer[i]=a.shoot?a.shoot.interval*.7:0,this.juke[i]=0,this.owner[i]=-1,this.ahead[i]=-1,this.slot[i]=0,this.gap[i]=0,this.phaseIndex[i]=0,this.bossTimer[i]=a.boss?1.8:0,this.dodgeTimer[i]=a.boss?1.2:0,this.bossState[i]=0,this.stateTimer[i]=0,this.courseX[i]=0,this.courseY[i]=0,this.splitOff[i]=0,this.orbitDir[i]=1,this.stamp[i]=this.nextStamp++,this.orbitRadius[i]=a.orbit?.radius??0,this.damageAccum[i]=0,this.damageTimer[i]=0,this.color.setHex(a.color),this.sprites.setColor(i,this.color),this.sprites.setTile(i,a.tile),this.enter(i),i}return-1}damage(e,t,n=0,r=!1){if(!this.alive[e]||this.spawning[e]>0)return{applied:0,effective:0,killed:!1};let i=L[this.kind[e]].invulnerable,a=this.shredTimer[e]>0?this.shredPoints[e]:0,o=(L[this.kind[e]].armor??0)+this.armorBonus-a,s=t*Ie(o,n),c=Math.min(s,Math.max(0,this.hp[e]));if(i||(this.hp[e]-=s),this.flash[e]=.09,this.damageAccum[e]+=s,r&&(this.damageCrit[e]=1),this.damageTimer[e]<=0&&(this.damageTimer[e]=.26),i)return{applied:0,effective:0,killed:!1,blocked:s};if(this.hp[e]>0)return{applied:s,effective:c,killed:!1};let l=L[this.kind[e]];return this.alive[e]=0,this.release(e),this.sprites.hide(e),this.glow.hide(e),this.flushDamage(e),this.onKill?.(e,l,this.x[e],this.y[e]),{applied:s,effective:c,killed:!0}}auraOf(e){let t=this.aura[e];return t===0?null:GT[t-1].id}isFrozen(e){return this.freezeTimer[e]>0}canApplyElement(e){return!L[this.kind[e]].invulnerable&&this.alive[e]===1&&this.spawning[e]<=0&&this.auraIcd[e]<=0}setAura(e,t){this.aura[e]=KT[t]+1,this.auraTimer[e]=qT(t).auraSeconds,this.auraIcd[e]=cE}isBurning(e){return this.burnTimer[e]>0}isChilled(e){return this.chillTimer[e]>0||this.freezeTimer[e]>0}healthShare(e){return this.maxHp[e]>0?this.hp[e]/this.maxHp[e]:1}consumeAura(e){this.aura[e]=0,this.auraTimer[e]=0,this.auraIcd[e]=cE}ignite(e,t,n){L[this.kind[e]].invulnerable||(this.burnDps[e]=Math.max(this.burnDps[e],t),this.burnTimer[e]=Math.max(this.burnTimer[e],n),this.burnStacks[e]<5&&this.burnStacks[e]++)}statusOf(e){return{burn:this.burnCount(e),chill:this.chillTimer[e]>0,freeze:this.freezeTimer[e]>0,brand:this.brandTimer[e]>0,shred:this.shredTimer[e]>0?Math.round(this.shredPoints[e]):0}}burnCount(e){return this.burnTimer[e]>0?this.burnStacks[e]:0}brand(e,t,n){L[this.kind[e]].invulnerable||(this.brandTimer[e]=Math.max(this.brandTimer[e],t),this.brandDamage[e]=Math.max(this.brandDamage[e],n))}brandedDamage(e){return this.brandTimer[e]>0?this.brandDamage[e]:0}chill(e,t){let n=this.controlTime(e,t);n<=0||(this.chillTimer[e]=Math.max(this.chillTimer[e],n))}freeze(e,t){if(t<=0){this.freezeTimer[e]=0;return}let n=this.controlTime(e,t);n<=0||(this.freezeTimer[e]=Math.max(this.freezeTimer[e],n))}controlTime(e,t){let n=L[this.kind[e]];return n.boss?0:t*(1-Le((n.controlResist??0)+this.controlResistBonus))}shred(e,t,n){L[this.kind[e]].invulnerable||(this.shredTimer[e]<=0&&(this.shredPoints[e]=0),this.shredPoints[e]+=t,this.shredTimer[e]=Math.max(this.shredTimer[e],n))}pull(e,t,n,r,i){let a=t-this.x[e],o=n-this.y[e],s=Math.hypot(a,o)||1,c=L[this.kind[e]];if(c.immovable)return;let l=r*(1-Le((c.knockbackResist??0)+this.knockbackResistBonus))*i;this.driftX[e]+=a/s*l,this.driftY[e]+=o/s*l}knockback(e,t,n,r){let i=L[this.kind[e]];if(i.immovable)return;let a=r*(1-Le((i.knockbackResist??0)+this.knockbackResistBonus));if(Math.abs(a)<=.01)return;let o=this.x[e]-t,s=this.y[e]-n,c=Math.hypot(o,s)||1;this.driftX[e]+=o/c*a*mE,this.driftY[e]+=s/c*a*mE}place(e,t,n){this.x[e]=t,this.y[e]=n}impulse(e,t,n){this.driftX[e]+=t,this.driftY[e]+=n}setHealth(e,t){this.hp[e]=t,this.maxHp[e]=t}kill(e){this.alive[e]&&(this.alive[e]=0,this.release(e),this.sprites.hide(e),this.glow.hide(e))}queryCircle(e,t,n,r){let i=n*n,a=n+this.gridPad,o=this.cellX(e-a),s=this.cellX(e+a),c=this.cellY(t-a),l=this.cellY(t+a);for(let n=c;n<=l;n++){let a=n*this.gridCols;for(let n=o;n<=s;n++){let o=a+n,s=this.cellStart[o+1];for(let n=this.cellStart[o];n<s;n++){let a=this.cellItems[n];if(!this.alive[a]||this.spawning[a]>0)continue;let o=this.x[a]-e,s=this.y[a]-t,c=o*o+s*s;c<=i+this.radius[a]*this.radius[a]&&r(a,Math.sqrt(c))}}}}querySector(e,t,n,r,i,a,o){let s=(r-n)%OE;s>Math.PI?s-=OE:s<-Math.PI&&(s+=OE);let c=s<0?-s:s,l=s<0?r:n,u=i+a+this.gridPad,d=this.cellX(e-u),f=this.cellX(e+u),p=this.cellY(t-u),m=this.cellY(t+u);for(let n=p;n<=m;n++){let r=n*this.gridCols;for(let n=d;n<=f;n++){let s=r+n,u=this.cellStart[s+1];for(let n=this.cellStart[s];n<u;n++){let r=this.cellItems[n];if(!this.alive[r]||this.spawning[r]>0)continue;let s=this.x[r]-e,u=this.y[r]-t,d=Math.hypot(s,u),f=a+this.radius[r];if(d>i+f)continue;if(d<=f){o(r,0);continue}let p=(Math.atan2(u,s)-l)%OE;p>Math.PI?p-=OE:p<=-Math.PI&&(p+=OE);let m=(p<0?-p:p>c?p-c:0)*d,h=d>i?d-i:0,g=Math.hypot(m,h);g<=f&&o(r,g)}}}}querySegment(e,t,n,r,i,a){let o=n-e,s=r-t,c=o*o+s*s||1,l=i+this.gridPad,u=this.cellX(Math.min(e,n)-l),d=this.cellX(Math.max(e,n)+l),f=this.cellY(Math.min(t,r)-l),p=this.cellY(Math.max(t,r)+l);for(let n=f;n<=p;n++){let r=n*this.gridCols;for(let n=u;n<=d;n++){let l=r+n,u=this.cellStart[l+1];for(let n=this.cellStart[l];n<u;n++){let r=this.cellItems[n];if(!this.alive[r]||this.spawning[r]>0)continue;let l=this.x[r]-e,u=this.y[r]-t,d=Math.max(0,Math.min(1,(l*o+u*s)/c)),f=l-o*d,p=u-s*d,m=Math.hypot(f,p);m<=i+this.radius[r]&&a(r,m)}}}}update(e,t,n,r,i){this.originX=t,this.originY=n,this.compact();let a=Math.min(1,Math.sqrt(bE/Math.max(1,this.aliveCount)));for(let o=0;o<this.liveLen;o++){let s=this.live[o];if(!this.alive[s]||this.frozen[s])continue;let c=L[this.kind[s]];if(this.tickElements(s,e),this.spawning[s]>0){this.spawning[s]-=e;let r=t-this.x[s],i=n-this.y[s],a=Math.hypot(r,i)||1;this.x[s]+=r/a*c.speed*this.speedScale*.25*e,this.y[s]+=i/a*c.speed*this.speedScale*.25*e;continue}if(c.movement===`chain`){this.followChain(s,e),this.flash[s]>0&&(this.flash[s]-=e);continue}let l=t-this.x[s],u=n-this.y[s],d=Math.hypot(l,u)||1;if(this.freezeTimer[s]>0){i&&Math.random()<.25*a&&i.trail(this.x[s],this.y[s],8382463,1,.5);continue}this.phase[s]+=e*(1.4+c.wobble*.02);let f=-u/d*Math.sin(this.phase[s])*c.wobble,p=l/d*Math.sin(this.phase[s])*c.wobble,m=c.dash?1+c.dash*Math.sin(this.phase[s]*2.4):1,h=c.charge?1+(c.charge-1)*Math.max(0,Math.min(1,1-d/220)):1,g=this.chillTimer[s]>0?1-aE:1,_=c.speed*this.speedScale*g,v=l/d*_*m*h,y=u/d*_*m*h;if(c.keepDistance){let e=d-c.keepDistance,t=Math.max(-1,Math.min(1,e/40)),n=1-Math.abs(t);v=(l/d*t-u/d*n)*_*m,y=(u/d*t+l/d*n)*_*m}let b=c.orbit;if(b){let e=this.orbitRadius[s]||b.radius,t=Math.max(-1,Math.min(1,(d-e)/30)),n=1-Math.abs(t)*.6;v=(l/d*t-u/d*n*this.orbitDir[s])*_,y=(u/d*t+l/d*n*this.orbitDir[s])*_}if(c.movement===`cross`){v=this.courseX[s]*_,y=this.courseY[s]*_;let e=c.weave;if(e){let t=Math.sin(this.phase[s]*e.speed)*e.amplitude;v+=-this.courseY[s]*t*_,y+=this.courseX[s]*t*_}}if(this.bossState[s]===2)v=l/d*_*gE,y=u/d*_*gE;else if(c.movement===`skirmish`){this.juke[s]-=e,this.juke[s]<=0&&(this.juke[s]=.5+(this.rng?this.rng.next():Math.random())*.7,this.phase[s]=(this.rng?this.rng.next():Math.random())<.5?-1:1);let t=c.keepDistance??120,n=Math.max(-1,Math.min(1,(d-t)/50)),r=this.phase[s]>=0?1:-1;v=(l/d*n-u/d*r)*_,y=(u/d*n+l/d*r)*_}else c.movement===`hover`&&(v=Math.cos(this.phase[s]*.7)*9,y=Math.sin(this.phase[s]*1.1)*7);if(this.vx[s]=v+f,this.vy[s]=y+p,this.x[s]+=this.vx[s]*e,this.y[s]+=this.vy[s]*e,this.driftX[s]!==0||this.driftY[s]!==0){this.x[s]+=this.driftX[s]*e,this.y[s]+=this.driftY[s]*e;let t=Math.exp(-4*e);this.driftX[s]*=t,this.driftY[s]*=t}if(i&&Math.random()<.07*a&&i.trail(this.x[s],this.y[s],c.color,1,.45),i){if(this.burnTimer[s]>0){let e=this.burnStacks[s]/5,t=(c.size>40?3:c.size>20?2:1)+ +(e>.6);Math.random()<(.4+e*.5)*a&&i.burst({x:this.x[s]+(Math.random()-.5)*c.size*.7,y:this.y[s]+(Math.random()-.5)*c.size*.4,color:Math.random()<.35?16765514:16738859,count:t,speed:46,life:.42,size:Math.random()<.3?2:1,drag:1.2,angle:Math.PI*.5,arc:1.5})}this.chillTimer[s]>0&&Math.random()<.14*a&&i.trail(this.x[s],this.y[s],8382463,1,.6);let e=this.aura[s];if(e>0){let t=GT[e-1],n=uE[t.id];n&&Math.random()<n.chance*a&&i.burst({x:this.x[s]+(Math.random()-.5)*this.radius[s]*1.4,y:this.y[s]+n.lift*this.radius[s]*.5,color:t.color,count:1,speed:n.speed,life:n.life,size:n.size,drag:n.drag})}this.shredTimer[s]>0&&Math.random()<.12*a&&i.hit(this.x[s],this.y[s],10475519,1,60)}this.flash[s]>0&&(this.flash[s]-=e),this.attackCooldown[s]>0&&(this.attackCooldown[s]-=e),c.shoot&&(this.shootTimer[s]-=e,this.shootTimer[s]<=0&&(this.shootTimer[s]=c.shoot.interval,this.onShoot?.(c.shoot.kind,c.shoot.count,c.shoot.spread??.3,this.x[s],this.y[s]))),c.summon&&!c.boss&&(this.summonTimer[s]-=e,this.summonTimer[s]<=0&&(this.summonTimer[s]=c.summon.interval,this.onSummon?.(c.summon.kind,c.summon.count,this.x[s],this.y[s]))),c.contactDamage>0&&d<this.radius[s]+9&&this.attackCooldown[s]<=0&&(this.attackCooldown[s]=c.attackInterval??1,c.lifesteal&&(this.hp[s]=Math.min(this.maxHp[s],this.hp[s]+this.maxHp[s]*.12*c.lifesteal)),r({index:s,damage:c.contactDamage*(c.boss?this.bossDamageScale:this.damageScale),x:this.x[s],y:this.y[s]}))}this.buildGrid()}followChain(e,t){let n=this.ahead[e];if(n<0||!this.alive[n])return;let r=L[this.kind[e]],i=this.gap[e]||24,a,o;if(r.id===`beeWing`){let t=this.slot[e]===0?-1:1,r=Math.sin(this.phase[n]*6)*3;a=this.x[n]+t*i,o=this.y[n]-6+r}else{let e=this.vx[n],t=this.vy[n],r=Math.hypot(e,t)||1;a=this.x[n]-e/r*i,o=this.y[n]-t/r*i}let s=Math.hypot(a-this.x[e],o-this.y[e])>i*hE?1-Math.exp(-66*t):1-Math.exp(-22*t),c=this.x[e]+(a-this.x[e])*s,l=this.y[e]+(o-this.y[e])*s;this.vx[e]=(c-this.x[e])/Math.max(t,1e-4),this.vy[e]=(l-this.y[e])/Math.max(t,1e-4),this.x[e]=c,this.y[e]=l}tickElements(e,t){this.auraIcd[e]>0&&(this.auraIcd[e]-=t),this.auraTimer[e]>0&&(this.auraTimer[e]-=t,this.auraTimer[e]<=0&&(this.aura[e]=0)),this.chillTimer[e]>0&&(this.chillTimer[e]-=t),this.freezeTimer[e]>0&&(this.freezeTimer[e]-=t),this.shredTimer[e]>0&&(this.shredTimer[e]-=t),this.brandTimer[e]>0&&(this.brandTimer[e]-=t),this.burnTimer[e]>0&&(this.burnTimer[e]-=t,this.onBurn?.(e,this.burnDps[e]*this.burnStacks[e]*t),this.burnTimer[e]<=0&&(this.burnStacks[e]=0))}tickNumbers(e){for(let t=0;t<this.liveLen;t++){let n=this.live[t];this.alive[n]&&(this.damageTimer[n]<=0||(this.damageTimer[n]-=e,this.damageTimer[n]<=0&&this.flushDamage(n)))}}flushDamage(e){this.damageAccum[e]<=0||(this.onDamageNumber?.(this.x[e],this.y[e],this.damageAccum[e],this.damageCrit[e]===1),this.damageAccum[e]=0,this.damageCrit[e]=0,this.damageTimer[e]=0)}applyStatus(e,t){let n=this.aura[t];if(n>0&&e.lerp(this.tintColor.setHex(GT[n-1].color),.45),this.freezeTimer[t]>0)e.lerp(this.tintColor.setHex(8382463),.45);else if(this.burnTimer[t]>0){let n=this.burnStacks[t]/5;e.lerp(this.tintColor.setHex(16738859),.22+n*.3)}}render(e,t){t?.begin();let n=this.quads;n?.begin();let r=Math.max(.45,Math.min(1,Math.sqrt(yE/Math.max(1,this.aliveCount)))),i=xE+-.40000000000000013*Math.min(1,this.aliveCount/SE),a=1-Math.min(1,Math.max(0,(this.aliveCount-CE)/3e3)),o=a>0,s=0;for(let c=0;c<this.liveLen;c++){let l=this.live[c];if(!this.alive[l])continue;l>=s&&(s=l+1);let u=L[this.kind[l]],d=this.flash[l]>0,f=this.spawning[l]>0?1-Math.max(0,this.spawning[l])/pE:1,p=n?this.sheets[this.kind[l]]:void 0,m=f*f,h=!1;if(p){let e=this.originX-this.x[l],t=this.originY-this.y[l];this.angle[l]=wT(e,t),h=TT(e)}else this.spin[l]===0?!u.boss&&!this.frozen[l]&&Math.hypot(this.vx[l],this.vy[l])>EE&&(this.angle[l]=Math.atan2(this.vy[l],this.vx[l])-Math.PI/2):this.angle[l]+=this.spin[l]*Math.PI*2*e;let g=p?CT(u.size):u.size;p?(this.animTime[l]+=e,this.sprites.hide(l)):(this.sprites.set(l,u.smooth?this.x[l]:Math.round(this.x[l]),u.smooth?this.y[l]:Math.round(this.y[l]),u.size,m),this.sprites.setAngle(l,this.angle[l]));let _=Math.min(1,Math.sqrt(DE/g)),v=d?this.flashColor:this.color;if(v.setHex(p?16777215:u.color),d?p?v.multiplyScalar(1+.45*_):v.lerp(TE,.3+.35*_).multiplyScalar(.95+.2*_):(this.applyStatus(v,l),p||wE(v)),p&&n?n.add(this.x[l],this.y[l],g,this.angle[l],m,v,RT.frameAt(p,bT,this.animTime[l]),h):this.sprites.setColor(l,v),o){let e=vE*_*r*a;this.glow.set(l,u.smooth?this.x[l]:Math.round(this.x[l]),u.smooth?this.y[l]:Math.round(this.y[l]),Math.round(g*i),(d?e*1.25:e)*f);let t=this.aura[l];this.glowColor.setHex(t>0?GT[t-1].color:u.color),this.glowColor.multiplyScalar(1.05+1.05*_),this.glow.setColor(l,this.glowColor)}let y=u.mystery===!0&&!this.mysteryKnown;if(t&&!y&&this.spawning[l]<=0&&(this.hp[l]<this.maxHp[l]||u.boss)){let e=this.hp[l]/this.maxHp[l];t.add(this.x[l],this.y[l]+g*.5+5,g+(u.boss?18:2),e,e>.5?4827242:e>.22?11569716:11024978)}}this.sprites.syncRange(s),this.glow.syncRange(o?s:0),n?.end(),t?.end()}clear(){this.alive.fill(0),this.taken.fill(0),this.aliveCount=0,this.liveLen=0,this.refill();for(let e=0;e<this.capacity;e++)this.sprites.hide(e),this.glow.hide(e);this.sprites.sync(),this.glow.sync(),this.quads?.begin(),this.quads?.end()}dispose(){this.sprites.dispose(),this.glow.dispose(),this.quads?.dispose(),this.texture.dispose(),this.glowTexture.dispose()}},AE=[{id:`damage`,unit:`flat`},{id:`effective`,unit:`flat`},{id:`dps`,unit:`perSecond`},{id:`taken`,unit:`flat`},{id:`healing`,unit:`flat`},{id:`kills`,unit:`flat`},{id:`xp`,unit:`flat`}],jE=6,ME=.5,NE=Math.round(jE/ME),PE=class{entries=new Map;slot=0;totals(){let e=[];for(let t of this.entries.values())e.push({id:t.id,label:t.label,color:t.color,total:t.total});return e}totalsFor(e){let t=[];for(let n of this.entries.values()){let r=n.targets.get(e);!r||r.total<=0||t.push({id:n.id,label:n.label,color:n.color,total:r.total})}return t}record(e,t,n,r,i=!1,a,o=!1,s){let c=this.entries.get(e);c||(c={id:e,label:t,color:n,total:0,hits:0,crits:0,best:0,window:new Float32Array(NE),targets:new Map,parts:new Map},this.entries.set(e,c)),c.total+=r,c.hits+=1,i&&(c.crits+=1),r>c.best&&(c.best=r),c.window[this.slot]+=r;for(let e of s??[]){if(e.amount<=0)continue;let t=c.parts.get(e.id);t||(t={id:e.id,label:e.label,total:0},c.parts.set(e.id,t)),t.total+=e.amount}if(!a)return;let l=c.targets.get(a.id);l||(l={id:a.id,label:a.label,color:a.color,total:0,hits:0,kills:0},c.targets.set(a.id,l)),l.total+=r,l.hits+=1,o&&(l.kills+=1)}advance(){this.slot=(this.slot+1)%NE;for(let e of this.entries.values())e.window[this.slot]=0}rows(e){let t=[...this.entries.values()].map(t=>{let n=t.total;if(e){let e=0;for(let n=0;n<NE;n++)e+=t.window[n];n=e/jE}return{entry:t,value:n}}),n=t.reduce((e,t)=>e+t.value,0),r=t.reduce((e,t)=>Math.max(e,t.value),0),i=Number.isFinite(n)&&n>0,a=Number.isFinite(r)&&r>0;return t.filter(e=>Number.isFinite(e.value)&&e.value>0).sort((e,t)=>t.value-e.value).map(e=>({id:e.entry.id,label:e.entry.label,color:e.entry.color,value:e.value,share:i?e.value/n:0,scale:a?e.value/r:0,hits:e.entry.hits,crits:e.entry.crits,best:e.entry.best,targets:IE(e.entry),parts:FE(e.entry)}))}clear(){this.entries.clear(),this.slot=0}};function FE(e){return[...e.parts.values()].sort((e,t)=>t.total-e.total).map(t=>({id:t.id,label:t.label,value:t.total,share:e.total>0?t.total/e.total:0}))}function IE(e){let t=[...e.targets.values()],n=t.reduce((e,t)=>e+t.total,0);return t.sort((e,t)=>t.total-e.total).map(e=>({id:e.id,label:e.label,color:e.color,value:e.total,share:n>0?e.total/n:0,hits:e.hits,kills:e.kills}))}var LE=class{damage=new PE;effective=new PE;taken=new PE;healing=new PE;kills=new PE;xp=new PE;elapsed=0;slotTimer=0;recordDamage(e,t,n,r,i,a,o,s=!1,c){if(this.damage.record(e,t,n,r,a,o,s,c),i<=0)return;let l=i===r||!c?c:c.map(e=>({...e,amount:e.amount*i/r}));this.effective.record(e,t,n,i,a,o,s,l)}recordTaken(e,t,n,r){this.taken.record(e,t,n,r)}recordHealing(e,t,n,r){this.healing.record(e,t,n,r)}recordKill(e,t,n,r){this.kills.record(e,t,n,1,!1,r,!0)}recordXp(e,t,n,r){this.xp.record(e,t,n,r)}update(e){for(this.elapsed+=e,this.slotTimer+=e;this.slotTimer>=ME;)this.slotTimer-=ME,this.damage.advance(),this.effective.advance(),this.taken.advance(),this.healing.advance(),this.kills.advance(),this.xp.advance()}sourceTotals(){return this.damage.totals()}targetTotals(e){return this.damage.totalsFor(e)}snapshot(e){let t=AE.find(t=>t.id===e)??AE[0],n=this.trackFor(e).rows(t.unit===`perSecond`);return{mode:e,label:`ui.meter.modes.${t.id}`,unit:t.unit,total:n.reduce((e,t)=>e+t.value,0),rows:n,elapsed:this.elapsed}}trackFor(e){return e===`effective`?this.effective:e===`taken`?this.taken:e===`healing`?this.healing:e===`kills`?this.kills:e===`xp`?this.xp:this.damage}reset(){this.damage.clear(),this.effective.clear(),this.taken.clear(),this.healing.clear(),this.kills.clear(),this.xp.clear(),this.elapsed=0,this.slotTimer=0}},RE=2,zE=1800,BE=4e3,VE=class{data=[];log=[];timer=0;lastDamage=0;lastKills=0;lastSparks=0;lastSpawned=0;lastShare=new Map;get samples(){return this.data}get events(){return this.log}mark(e){this.log.length>=BE||this.log.push({...e,t:Math.round(e.t*10)/10})}update(e,t){this.timer-=e,!(this.timer>0)&&(this.timer=RE,this.push(t,RE))}finish(e){let t=this.data[this.data.length-1],n=Math.max(.5,e.time-(t?.t??0));this.push(e,n)}reset(){this.data.length=0,this.log.length=0,this.timer=0,this.lastDamage=0,this.lastKills=0,this.lastSparks=0,this.lastSpawned=0,this.lastShare.clear()}push(e,t){this.data.length>=zE||(this.data.push({t:Math.round(e.time),damage:Math.round(e.damage),dps:Math.round((e.damage-this.lastDamage)/t),kills:e.kills,killRate:Math.round((e.kills-this.lastKills)/t*10)/10,sparks:Math.round(e.sparks),sparksRate:Math.round((e.sparks-this.lastSparks)/t),bought:e.bought,threat:Math.round(e.threat*10)/10,health:e.maxHealth>0?Math.round(e.health/e.maxHealth*100)/100:0,enemies:e.enemies,spawned:e.spawned-this.lastSpawned,spawnRate:Math.round((e.spawned-this.lastSpawned)/t*10)/10,share:this.shareOf(e.sources)}),this.lastDamage=e.damage,this.lastKills=e.kills,this.lastSparks=e.sparks,this.lastSpawned=e.spawned)}shareOf(e){let t={};for(let n of e){let e=n.total-(this.lastShare.get(n.id)??0);this.lastShare.set(n.id,n.total),e>.5&&(t[n.id]=Math.round(e))}return t}};function Q(e,t,n){return Math.ceil(e*t**+Math.max(0,n))}var HE=[{stat:`damage`,kind:`percent`,step:4,base:25,growth:1.18},{stat:`critChance`,kind:`flat`,step:1.5,base:25,growth:1.18},{stat:`critDamage`,kind:`flat`,step:7,base:25,growth:1.18},{stat:`finisher`,kind:`flat`,step:7.5,base:20,growth:1.18},{stat:`armorPen`,kind:`flat`,step:3,base:20,growth:1.18},{stat:`attackSpeed`,kind:`percent`,step:3,base:30,growth:1.2},{stat:`area`,kind:`percent`,step:3.5,base:30,growth:1.2},{stat:`projectileSpeed`,kind:`percent`,step:5,base:15,growth:1.18},{stat:`maxHealth`,kind:`flat`,step:6,base:15,growth:1.16},{stat:`regen`,kind:`flat`,step:.3,base:20,growth:1.18},{stat:`armor`,kind:`flat`,step:4.5,base:20,growth:1.18},{stat:`lifesteal`,kind:`flat`,step:.25,base:25,growth:1.2},{stat:`thorns`,kind:`flat`,step:2.5,base:15,growth:1.18},{stat:`xpGain`,kind:`percent`,step:3.5,base:40,growth:1.22},{stat:`luck`,kind:`flat`,step:2,base:20,growth:1.2}],UE=[0,40,110,250,480],WE={base:30,growth:1.2,damage:.12},GE={base:20,growth:1.6},KE=[150,400],qE={base:120,growth:1.6},JE={rare:1,epic:2,mythic:4,legendary:6},YE={base:30,growth:1.7},XE={base:25,growth:1.45},ZE=[`damage`,`attackSpeed`,`critChance`,`area`,`maxHealth`],QE=class{host;statLevels=new Map;weaponLevels=new Map;showcase=[];showcaseRerolls=0;talentOffers=[];talentRerolls=0;heals=0;talentPity=new Je;constructor(e){this.host=e}reset(){this.statLevels.clear(),this.weaponLevels.clear(),this.showcaseRerolls=0,this.talentOffers=[],this.talentRerolls=0,this.heals=0,this.talentPity.reset();let e=this.host.state;e.sparks=0,e.shards=0,e.sparksTotal=0,e.bought=0,this.rollShowcase()}earnSparks(e){e<=0||(this.host.state.sparks+=e,this.host.state.sparksTotal+=e)}earnShards(e){this.host.state.shards+=e,this.talentOffers.length===0&&this.rollTalents()}get needsWeapon(){return this.host.loadout().length===0}modTable(){let e={};for(let[t,n]of this.weaponLevels)n>0&&(e[t]={damage:1+n*WE.damage});return e}affordable(){let e=this.host.state,t=e.sparks,n=this.host.loadout(),r=0;for(let e of HE)Q(e.base,e.growth,this.statLevels.get(e.stat)??0)<=t&&r++;for(let e of n){let n=this.weaponLevels.get(e)??0;Q(WE.base,WE.growth,n)<=t&&r++}if(n.length<this.host.maxSlots&&this.weaponPrice()<=t&&(r+=this.showcase.length),!this.host.noElements){let n=e.elements;for(let e of n)Q(qE.base,qE.growth,e.rank-1)<=t&&r++;let i=n.length<2?KE[n.length]:void 0;i!==void 0&&i<=t&&(r+=GT.length-n.length)}for(let t of this.talentOffers){let n=Ue(t);n&&JE[n.rarity]<=e.shards&&r++}return r}view(){let e=this.host.state,t=this.host.loadout();return this.pruneTalents(),{sparks:e.sparks,shards:e.shards,weapons:t.map(e=>{let t=this.weaponLevels.get(e)??0;return{id:e,level:t,bonus:Math.round(t*WE.damage*100),price:Q(WE.base,WE.growth,t)}}),showcase:this.showcase.map(e=>({id:e,price:this.weaponPrice()})),showcaseReroll:Q(GE.base,GE.growth,this.showcaseRerolls),slots:t.length,maxSlots:this.host.maxSlots,stats:HE.map(e=>this.statRow(e)),elements:this.host.noElements?[]:GT.map(e=>this.elementRow(e.id)),elementsLocked:this.host.noElements,talents:this.talentOffers.flatMap(e=>{let t=Ue(e);if(!t)return[];let n=JE[t.rarity];return[{id:e,rarity:t.rarity,rank:this.talentRank(e)+1,price:n}]}),talentReroll:Q(YE.base,YE.growth,this.talentRerolls),heal:Q(XE.base,XE.growth,this.heals)}}buy(e){let t=this.host.state;if(!t.alive)return!1;switch(e.kind){case`stat`:{let t=HE.find(t=>t.stat===e.stat);if(!t)return!1;let n=this.statLevels.get(t.stat)??0,r=Q(t.base,t.growth,n);return this.spendSparks(r)?(this.statLevels.set(t.stat,n+1),t.kind===`flat`?this.host.stats.addFlat(t.stat,t.step):this.host.stats.addPercent(t.stat,t.step),this.host.refreshStats(),this.host.bought(e,`stats.${t.stat}.label`,r),!0):!1}case`weapon`:{let t=this.host.loadout();if(!this.showcase.includes(e.id)||t.includes(e.id)||t.length>=this.host.maxSlots)return!1;let n=this.weaponPrice();return this.spendSparks(n)?(this.showcase=this.showcase.filter(t=>t!==e.id),this.host.addWeapon(e.id),this.fillShowcase(),this.host.bought(e,`abilities.${e.id}.name`,n),!0):!1}case`level`:{if(!this.host.loadout().includes(e.id))return!1;let t=this.weaponLevels.get(e.id)??0,n=Q(WE.base,WE.growth,t);return this.spendSparks(n)?(this.weaponLevels.set(e.id,t+1),this.host.refreshMods(),this.host.bought(e,`abilities.${e.id}.name`,n),!0):!1}case`element`:{let t=this.elementRow(e.id);return this.host.noElements||t.price===null||!this.spendSparks(t.price)?!1:(this.host.addElement(e.id),this.host.bought(e,`elements.${e.id}.name`,t.price),!0)}case`talent`:{this.pruneTalents();let n=Ue(e.id);if(!n||!this.talentOffers.includes(e.id))return!1;let r=JE[n.rarity];return t.shards<r?!1:(t.shards-=r,t.bought++,this.talentOffers=this.talentOffers.filter(t=>t!==e.id),this.host.takeTalent(e.id),this.pruneTalents(),this.fillTalents(),this.host.bought(e,`talents.${e.id}.name`,r),!0)}case`rerollWeapons`:{let t=Q(GE.base,GE.growth,this.showcaseRerolls);return this.spendSparks(t)?(this.showcaseRerolls++,this.rollShowcase(),this.host.bought(e,`ui.shop.reroll`,t),!0):!1}case`rerollTalents`:{let t=Q(YE.base,YE.growth,this.talentRerolls);return this.spendSparks(t)?(this.talentRerolls++,this.rollTalents(),this.host.bought(e,`ui.shop.reroll`,t),!0):!1}case`heal`:{if(t.health>=t.maxHealth)return!1;let n=Q(XE.base,XE.growth,this.heals);return this.spendSparks(n)?(this.heals++,this.host.heal(),this.host.bought(e,`ui.shop.heal`,n),!0):!1}}}autobuy(){for(let e=0;e<24;e++){let e=this.view(),t=[];this.needsWeapon&&e.showcase.length>0&&t.push({action:{kind:`weapon`,id:e.showcase[0].id},price:0});for(let n of e.weapons)t.push({action:{kind:`level`,id:n.id},price:n.price});for(let n of e.stats)ZE.includes(n.stat)&&t.push({action:{kind:`stat`,stat:n.stat},price:n.price});for(let n of e.talents)t.push({action:{kind:`talent`,id:n.id},price:n.price,shards:!0});let n=t.filter(t=>t.shards?t.price<=e.shards:t.price<=e.sparks);if(n.length===0||(n.sort((e,t)=>e.price-t.price),!this.buy(n[0].action)))return}}spendSparks(e){let t=this.host.state;return t.sparks<e?!1:(t.sparks-=e,t.bought++,!0)}statRow(e){let t=this.statLevels.get(e.stat)??0;return{stat:e.stat,kind:e.kind,step:e.step,level:t,price:Q(e.base,e.growth,t)}}weaponPrice(){let e=this.host.loadout().length,t=UE[UE.length-1];return UE[e]??t*2}elementRow(e){let t=this.host.state.elements,n=t.find(t=>t.id===e);if(n)return{id:e,rank:n.rank,price:Q(qE.base,qE.growth,n.rank-1),fusions:[]};let r=t.map(e=>e.id),i=new Set(tE(r).map(e=>e.id));return{id:e,rank:0,price:t.length<2?KE[t.length]??null:null,fusions:tE([...r,e]).filter(e=>!i.has(e.id)).map(e=>e.id)}}rollShowcase(){this.showcase=[],this.fillShowcase()}fillShowcase(){let e=new Set(this.host.fullLoadout()),t=this.host.loadout().length===0,n=dT.filter(e=>!t||e.base.damage>0).map(e=>e.id).filter(t=>!e.has(t)&&!this.showcase.includes(t));for(;this.showcase.length<3&&n.length>0;){let[e]=n.splice(this.host.rng.int(0,n.length),1);this.showcase.push(e)}}talentRank(e){return this.host.state.talents.find(t=>t.id===e)?.rank??0}talentPool(){let e=new Set(this.host.state.talents.map(e=>e.id)),t=this.host.fullLoadout(),n=this.host.unlockedTalents;return Ye.filter(r=>n&&!n.has(r.id)||!Pe(r,t)||Ne(r,e)?!1:Be(r,this.talentRank(r.id))>0)}pruneTalents(){if(this.talentOffers.length===0)return;let e=new Set(this.talentPool().map(e=>e.id));this.talentOffers=this.talentOffers.filter(t=>e.has(t))}rollTalents(){let e=this.talentPool(),t=e.filter(e=>Ke(e).length>0),n=e.filter(e=>Ke(e).length===0),r=[],i=new Map;for(let e of t){if(!e.fork||this.talentRank(e.id)>0)continue;let t=i.get(e.fork)??[];t.push(e),i.set(e.fork,t)}let a=[...i.values()].filter(e=>e.length>=2);if(a.length>0){let e=a[this.host.rng.int(0,a.length)];r.push(e[0],e[1])}let o=t.filter(e=>!r.includes(e));for(;r.length<2&&o.length>0;){let e=this.drawTalent(o);if(!e)break;r.push(e)}let s=[...n];for(;r.length<3&&(s.length>0||o.length>0);){let e=this.drawTalent(s.length>0?s:o);if(!e)break;r.push(e)}this.talentOffers=r.map(e=>e.id)}fillTalents(){let e=this.talentPool().filter(e=>!this.talentOffers.includes(e.id));for(;this.talentOffers.length<3&&e.length>0;){let t=this.drawTalent(e);if(!t)break;this.talentOffers.push(t.id)}}drawTalent(e){let t=this.talentPity.roll(this.host.rng,this.host.stats.get(`luck`)),n=qe(this.host.rng,t,e);return n&&e.splice(e.indexOf(n),1),n}},$E=[{id:`lux`,core:16774870,glow:16771496},{id:`azure`,core:14481663,glow:5431551},{id:`verdant`,core:14483428,glow:7077790},{id:`violet`,core:15787263,glow:12160255},{id:`ember`,core:16767392,glow:16747068},{id:`rose`,core:16765156,glow:16727435}],eD=$E[0],tD=eD;function nD(){return tD.glow}function rD(){return tD.core}function iD(e,t,n){let r=n<0?0:n>1?1:n,i=Math.round((e>>16&255)+((t>>16&255)-(e>>16&255))*r),a=Math.round((e>>8&255)+((t>>8&255)-(e>>8&255))*r),o=Math.round((e&255)+((t&255)-(e&255))*r);return i<<16|a<<8|o}function aD(e,t){return iD(e,tD.glow,t)}function oD(e){tD=$E.find(t=>t.id===e)??eD}var sD=8192,cD=1.7,lD=.55,uD=.55,dD=6,fD=3,pD=1.7,mD=48,hD=1.4,gD=.45,_D=.7,vD=3,yD=class{object;visibility=1;positions;tints;geometry;used=0;arcs=[];tint=new N;constructor(){this.positions=new Float32Array(sD*12),this.tints=new Float32Array(sD*12);let e=new Float32Array(sD*4),t=new Uint16Array(sD*6);for(let n=0;n<sD;n++){let r=n*4;e[r]=1,e[r+1]=-1,e[r+2]=-1,e[r+3]=1;let i=n*6;t[i]=r,t[i+1]=r+1,t[i+2]=r+2,t[i+3]=r,t[i+4]=r+2,t[i+5]=r+3}this.geometry=new ge,this.geometry.setAttribute(`position`,new P(this.positions,3)),this.geometry.setAttribute(`aTint`,new P(this.tints,3)),this.geometry.setAttribute(`aAcross`,new P(e,1)),this.geometry.setIndex(new P(t,1));let n=new Ee({vertexShader:jn,fragmentShader:Mn,transparent:!0,depthTest:!1,depthWrite:!1,blending:2,side:2});this.object=new pe(this.geometry,n),this.object.frustumCulled=!1,this.object.renderOrder=30}setVisibility(e){this.visibility=Math.max(0,Math.min(1,e)),this.object.visible=this.visibility>0,this.visibility<=0&&this.clear()}strike(e,t,n,r,i){if(this.visibility<=0)return;let a=Math.max(1,i.nodes??4),o=i.jitter??10,s=i.life??.16,c=Math.max(1,Math.min(4,i.weight??2)),l=i.width??cD,u=-(r-t),d=n-e,f=Math.hypot(u,d)||1;for(let p=0;p<c;p++){let c=o*uD**+p,m=[];for(let i=0;i<=a;i++){let o=i/a,s=i===0||i===a?0:(Math.random()-.5)*2*c;m.push(e+(n-e)*o+u/f*s,t+(r-t)*o+d/f*s)}this.emit(m,i.color,s,p,l)}}bolt(e,t,n,r,i){let a=Math.max(1,i.step??dD),o=i.wobble??fD,s=i.bend??pD,c=i.life??.14,l=Math.max(1,Math.min(4,i.weight??2)),u=Math.max(0,Math.min(4,i.branches??0)),d=i.width??cD,f=this.wander(e,t,n,r,a,o,s);this.emit(f,i.color,c,0,d);for(let e=1;e<l;e++)this.emit(this.shiver(f,hD),i.color,c,e,d);if(u===0)return;let p=Math.hypot(n-e,r-t),m=Math.atan2(r-t,n-e),h=f.length/2;for(let e=0;e<u;e++){let e=2*(1+Math.floor(Math.random()*Math.max(1,(h-2)*.8))),t=f[e],n=f[e+1],r=m+(Math.random()<.5?-1:1)*_D*(.6+Math.random()*.8),l=p*gD*(.5+Math.random()*.7);this.emit(this.wander(t,n,t+Math.cos(r)*l,n+Math.sin(r)*l,a,o,s*.6),i.color,c*.7,1,d)}}wander(e,t,n,r,i,a,o){let s=Math.hypot(n-e,r-t)||1,c=(n-e)/s,l=(r-t)/s,u=-l,d=c,f=Math.max(i,s/mD),p=o*(Math.random()<.5?-1:1),m=[0];for(let e=0;e<s;)e+=f*(.4+Math.random()*1.2),m.push(Math.min(e,s));let h=[0],g=0;for(let e=1;e<m.length;e++){let t=m[e]<s/2?1:-1;g+=p*t+(Math.random()-.5)*2*a,h.push(g)}let _=h[h.length-1],v=[];for(let n=0;n<m.length;n++){let r=h[n]-_*m[n]/s;v.push(e+c*m[n]+u*r,t+l*m[n]+d*r)}return v}shiver(e,t){let n=e.slice();for(let e=2;e+3<n.length;e+=2)n[e]+=(Math.random()-.5)*2*t,n[e+1]+=(Math.random()-.5)*2*t;return n}emit(e,t,n,r,i){this.arcs.push({points:e,color:t,life:n,maxLife:n,weight:r,width:i})}arc(e,t,n,r,i,a){if(this.visibility<=0)return;let o=Math.max(2,a.nodes??8),s=a.jitter??4,c=a.life??.14,l=Math.max(1,Math.min(4,a.weight??2)),u=a.width??cD;for(let d=0;d<l;d++){let l=s*uD**+d,f=[];for(let a=0;a<=o;a++){let s=a/o,c=r+(i-r)*s,u=n+(Math.random()-.5)*2*l;f.push(e+Math.cos(c)*u,t+Math.sin(c)*u)}this.emit(f,a.color,c,d,u)}}update(e){if(!(this.visibility<=0)){this.used=0;for(let t=this.arcs.length-1;t>=0;t--){let n=this.arcs[t];if(n.life-=e,n.life<=0){this.arcs.splice(t,1);continue}let r=R*Math.min(1,n.life/n.maxLife)*uD**(n.weight*.5);this.tint.setHex(n.color).multiplyScalar(r);let i=n.width*.5*(1+n.weight*lD);for(let e=0;e+3<n.points.length&&!(this.used>=sD);e+=2){let t=n.points[e],r=n.points[e+1],a=n.points[e+2],o=n.points[e+3],s=a-t,c=o-r,l=Math.sqrt(s*s+c*c)||1,u=-c/l*i,d=s/l*i,f=this.used*12;this.positions[f]=t+u,this.positions[f+1]=r+d,this.positions[f+2]=vD,this.positions[f+3]=t-u,this.positions[f+4]=r-d,this.positions[f+5]=vD,this.positions[f+6]=a-u,this.positions[f+7]=o-d,this.positions[f+8]=vD,this.positions[f+9]=a+u,this.positions[f+10]=o+d,this.positions[f+11]=vD;for(let e=0;e<4;e++){let t=f+e*3;this.tints[t]=this.tint.r,this.tints[t+1]=this.tint.g,this.tints[t+2]=this.tint.b}this.used++}}this.geometry.setDrawRange(0,this.used*6),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aTint.needsUpdate=!0}}clear(){this.arcs.length=0,this.used=0,this.geometry.setDrawRange(0,0)}dispose(){this.geometry.dispose(),this.object.material.dispose()}},bD=4,xD=2,SD=class{object;capacity;positions;heat;spans;halves;seeds;tints;life;maxLife;power;count=0;geometry;material;visibility=1;tint=new N;time=0;constructor(e=96){this.capacity=e,this.positions=new Float32Array(e*12),this.heat=new Float32Array(e*4),this.spans=new Float32Array(e*4),this.halves=new Float32Array(e*4),this.seeds=new Float32Array(e*4),this.tints=new Float32Array(e*12),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.power=new Float32Array(e);let t=new Float32Array(e*4),n=new Float32Array(e*4),r=new Uint16Array(e*6);for(let i=0;i<e;i++){let e=i*4;t[e]=0,t[e+1]=0,t[e+2]=1,t[e+3]=1,n[e]=1,n[e+1]=-1,n[e+2]=-1,n[e+3]=1;let a=i*6;r[a]=e,r[a+1]=e+1,r[a+2]=e+2,r[a+3]=e,r[a+4]=e+2,r[a+5]=e+3}this.geometry=new ge,this.geometry.setAttribute(`position`,new P(this.positions,3)),this.geometry.setAttribute(`aAlong`,new P(t,1)),this.geometry.setAttribute(`aAcross`,new P(n,1)),this.geometry.setAttribute(`aHeat`,new P(this.heat,1)),this.geometry.setAttribute(`aSpan`,new P(this.spans,1)),this.geometry.setAttribute(`aHalf`,new P(this.halves,1)),this.geometry.setAttribute(`aSeed`,new P(this.seeds,1)),this.geometry.setAttribute(`aTint`,new P(this.tints,3)),this.geometry.setIndex(new P(r,1)),this.geometry.setDrawRange(0,0),this.material=new Ee({vertexShader:Cn,fragmentShader:wn,uniforms:{uTime:{value:0},uCore:{value:new N(16777215)},uSpeed:{value:3.4},uIntensity:{value:1},uSize:{value:1},uThick:{value:2.2},uWander:{value:.6},uGain:{value:R}},transparent:!0,depthTest:!1,depthWrite:!1,blending:2,side:2}),this.object=new pe(this.geometry,this.material),this.object.frustumCulled=!1,this.object.renderOrder=30}setCore(e){this.material.uniforms.uCore.value.setHex(e)}setVisibility(e){this.visibility=Math.max(0,Math.min(1,e)),this.material.uniforms.uGain.value=R*this.visibility,this.object.visible=this.visibility>0,this.visibility<=0&&this.clear()}strike(e,t,n,r,i={}){if(this.visibility<=0)return;let a=this.count;if(a>=this.capacity){a=0;for(let e=1;e<this.count;e++)this.life[e]<this.life[a]&&(a=e)}else this.count++;let o=n-e,s=r-t,c=Math.hypot(o,s);if(c<.001){this.count=Math.max(0,this.count-1);return}let l=o/c,u=s/c,d=(i.width??3)*bD,f=-u*d,p=l*d,m=a*12;this.positions[m]=e+f,this.positions[m+1]=t+p,this.positions[m+2]=xD,this.positions[m+3]=e-f,this.positions[m+4]=t-p,this.positions[m+5]=xD,this.positions[m+6]=n-f,this.positions[m+7]=r-p,this.positions[m+8]=xD,this.positions[m+9]=n+f,this.positions[m+10]=r+p,this.positions[m+11]=xD;let h=Math.random()*97,g=a*4;this.tint.setHex(i.color??12160255);for(let e=0;e<4;e++)this.spans[g+e]=c,this.halves[g+e]=d,this.seeds[g+e]=h,this.heat[g+e]=i.power??1,this.tints[(g+e)*3]=this.tint.r,this.tints[(g+e)*3+1]=this.tint.g,this.tints[(g+e)*3+2]=this.tint.b;this.life[a]=i.life??.15,this.maxLife[a]=this.life[a],this.power[a]=i.power??1}update(e){if(!(this.visibility<=0)){this.time+=e,this.material.uniforms.uTime.value=this.time;for(let t=this.count-1;t>=0;t--){if(this.life[t]-=e,this.life[t]>0){let e=this.life[t]/this.maxLife[t],n=e*e*this.power[t],r=t*4;this.heat[r]=n,this.heat[r+1]=n,this.heat[r+2]=n,this.heat[r+3]=n;continue}let n=this.count-1;t!==n&&this.moveSlot(n,t),this.count--}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aHeat.needsUpdate=!0,this.geometry.attributes.aSpan.needsUpdate=!0,this.geometry.attributes.aHalf.needsUpdate=!0,this.geometry.attributes.aSeed.needsUpdate=!0,this.geometry.attributes.aTint.needsUpdate=!0,this.geometry.setDrawRange(0,this.count*6)}}moveSlot(e,t){let n=e*12,r=t*12;for(let e=0;e<12;e++)this.positions[r+e]=this.positions[n+e];let i=e*4,a=t*4;for(let e=0;e<4;e++)this.heat[a+e]=this.heat[i+e],this.spans[a+e]=this.spans[i+e],this.halves[a+e]=this.halves[i+e],this.seeds[a+e]=this.seeds[i+e],this.tints[(a+e)*3]=this.tints[(i+e)*3],this.tints[(a+e)*3+1]=this.tints[(i+e)*3+1],this.tints[(a+e)*3+2]=this.tints[(i+e)*3+2];this.life[t]=this.life[e],this.maxLife[t]=this.maxLife[e],this.power[t]=this.power[e]}clear(){this.count=0,this.geometry.setDrawRange(0,0)}dispose(){this.geometry.dispose(),this.material.dispose()}},CD=class{count=0;x=new Float32Array(4);y=new Float32Array(4);radius=new Float32Array(4);reset(){this.count=0}well(e,t,n){if(this.count>=4)return;let r=this.count++;this.x[r]=e,this.y[r]=t,this.radius[r]=n}},wD={uniforms:{tDiffuse:{value:null},uCenter:{value:Array.from({length:4},()=>new ue(.5,.5))},uRadius:{value:new Float32Array(4)},uAspect:{value:1},uTwist:{value:0},uPull:{value:0},uReach:{value:.28},uCap:{value:.03}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    #define WELLS 4

    uniform sampler2D tDiffuse;
    uniform vec2 uCenter[WELLS];
    uniform float uRadius[WELLS];
    uniform float uAspect;
    uniform float uTwist;
    uniform float uPull;
    uniform float uReach;
    uniform float uCap;

    varying vec2 vUv;

    void main() {
      vec2 shift = vec2(0.0);

      for (int i = 0; i < WELLS; i++) {
        vec2 offset = vUv - uCenter[i];
        // Расстояние меряем в половинах высоты кадра и правим на ширину:
        // иначе на широком экране колодец растянулся бы в овал.
        vec2 scaled = vec2(offset.x * uAspect, offset.y);
        float dist = length(scaled) * 2.0;

        if (uRadius[i] > 0.0 && dist < uRadius[i]) {
          // Единица в горловине, ноль на кромке. В квадрате — мягкий вход.
          float grip = 1.0 - dist / uRadius[i];
          grip *= grip;

          // Чем шире колодец, тем меньше угол: охват не должен бить дважды.
          float ease = min(1.0, sqrt(uReach / max(uRadius[i], 0.0001)));

          float turn = uTwist * grip * ease;
          float sink = 1.0 + uPull * grip * ease;

          // Поворот и подсос — одно преобразование: выборка уходит по спирали
          // наружу, а значит картинка сползает по спирали внутрь.
          float cosine = cos(turn);
          float sine = sin(turn);
          vec2 turned = vec2(
            scaled.x * cosine - scaled.y * sine,
            scaled.x * sine + scaled.y * cosine
          );
          vec2 warped = turned * sink;

          shift += vec2((warped.x - scaled.x) / uAspect, warped.y - scaled.y);
        }
      }

      // Потолок на итог: четыре колодца, сошедшиеся в одной точке, иначе
      // складывают свои повороты и проворачивают кадр целиком.
      float span = length(shift);
      if (span > uCap) shift *= uCap / span;

      gl_FragColor = texture2D(tDiffuse, vUv + shift);
    }
  `},TD=8,ED=3,DD=220,OD=.13,kD=.85,AD=7,jD=class{x=new Float32Array(TD);y=new Float32Array(TD);radius=new Float32Array(TD);life=new Float32Array(TD);power=new Float32Array(TD);cursor=0;pop(e,t,n=1){let r=-1;for(let e=0;e<TD;e++)if(this.life[e]<=0){r=e;break}r<0&&(r=this.cursor,this.cursor=(this.cursor+1)%TD),this.x[r]=e,this.y[r]=t,this.radius[r]=ED,this.life[r]=OD,this.power[r]=Math.max(0,Math.min(1,n))}update(e,t){for(let n=0;n<TD;n++)if(!(this.life[n]<=0)){if(this.life[n]-=e,this.life[n]<=0){this.life[n]=0;continue}this.radius[n]+=DD*e,t.ring(this.x[n],this.y[n],this.radius[n],kD*this.power[n]*(this.life[n]/OD),AD)}}clear(){this.life.fill(0)}},MD=22,ND=class{count=0;x=new Float32Array(16);y=new Float32Array(16);radius=new Float32Array(16);power=new Float32Array(16);width=new Float32Array(16);push=new Float32Array(16);reset(){this.count=0}ring(e,t,n,r,i=MD,a=1){if(this.count>=16||r<=0)return;let o=this.count++;this.x[o]=e,this.y[o]=t,this.radius[o]=n,this.power[o]=Math.min(1,r),this.width[o]=i,this.push[o]=a}},PD={uniforms:{tDiffuse:{value:null},uCenter:{value:Array.from({length:16},()=>new ue(.5,.5))},uRadius:{value:new Float32Array(16)},uPower:{value:new Float32Array(16)},uPush:{value:new Float32Array(16)},uAspect:{value:1},uWidth:{value:new Float32Array(16)},uStrength:{value:0},uGlow:{value:0},uSpark:{value:new N(0,0,0)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    #define RINGS 16

    // Пик профиля «x * (1 - |x|^0.8)» на отрезке: 0.2132 при x = 0.48. Делением
    // на него профиль приводится к единице в максимуме — иначе смена формы
    // молча ослабила бы все кольца впятеро.
    #define PROFILE_PEAK 0.2132

    uniform sampler2D tDiffuse;
    uniform vec2 uCenter[RINGS];
    uniform float uRadius[RINGS];
    uniform float uPower[RINGS];
    uniform float uPush[RINGS];
    uniform float uAspect;
    uniform float uWidth[RINGS];
    uniform float uStrength;
    uniform float uGlow;
    uniform vec3 uSpark;

    varying vec2 vUv;

    void main() {
      vec2 shift = vec2(0.0);
      float light = 0.0;

      for (int i = 0; i < RINGS; i++) {
        if (uPower[i] > 0.0) {
          vec2 offset = vUv - uCenter[i];
          // Расстояние меряем в половинах высоты кадра и поправляем на ширину:
          // иначе на широком экране кольцо вытянулось бы в овал.
          vec2 scaled = vec2(offset.x * uAspect, offset.y);
          float dist = length(scaled) * 2.0;

          /*
           * Полоса вокруг кромки — профиль образца.
           *
           * «norm» — расстояние до кромки в полуширинах полосы. За единицей
           * полоса кончается совсем, и это не обрыв: «scale» там уже ноль,
           * потому что «1 - 1^0.8» и есть ноль. Шва на краю нет.
           */
          float diff = dist - uRadius[i];
          float norm = abs(diff) / max(uWidth[i], 0.0001);
          float scale = norm < 1.0 ? 1.0 - pow(norm, 0.8) : 0.0;

          /*
           * Сдвиг растёт от кромки, а не ОТ неё же.
           *
           * Знак берётся из самого «diff», а не из «sign»: у кромки множитель
           * уходит в ноль вместе с ним, и переворот стороны получается плавным.
           * Ровно этим профиль образца и отличается от гаусса со знаком.
           */
          float swing = (diff / max(uWidth[i], 0.0001)) * scale / PROFILE_PEAK * uPower[i];

          vec2 dir = dist > 0.0001 ? normalize(scaled) : vec2(0.0);
          // Изгиб при обычном размахе: от него и считается толчок. Знак уже
          // внутри «swing», поэтому «sign» здесь больше не нужен.
          vec2 bend = vec2(dir.x / uAspect, dir.y) * swing * uStrength;
          shift += bend * uPush[i];
          // Свет берёт профиль В КВАДРАТЕ и без знака.
          //
          // Без знака — потому что светить фронт обязан по обе стороны от
          // кромки: знак нужен изгибу, чтобы толкать наружу перед волной и
          // внутрь за ней, а у света стороны нет.
          //
          // В квадрате — потому что светящаяся линия должна быть заметно уже
          // гнущей полосы. Замер: квадрат профиля падает вдвое на 0.22
          // полуширины, а сам изгиб выходит на пик только к 0.48 — то есть свет
          // сидит ровно на кромке, а толкает уже за ней.
          //
          // Пик у квадрата единица, как и у прежнего гаусса в квадрате, поэтому
          // «uGlow» и «uSpark» остались прежними.
          light += scale * scale * uPower[i];
        }
      }

      vec4 core = texture2D(tDiffuse, vUv + shift);

      /*
       * Фронт УСИЛИВАЕТ то, через что проходит, а не рисуется поверх.
       *
       * Множитель, а не своя линия: волна, прошедшая по врагу, показывает
       * врага ярче — и в блум он попадает уже сам. Нарисованная поверх линия
       * светилась бы одинаково и над врагом, и над пустотой, то есть была бы
       * ободком, наклеенным на кадр.
       *
       * Слабая добавка сверху нужна ровно для пустоты: в чёрном поле умножать
       * нечего, а фронт всё же должен быть виден. Отсюда и её величина —
       * настолько мала, чтобы её замечали только там, где больше ничего нет.
       *
       * Считается это ДО перевода в цвет экрана, то есть в линейном свете, где
       * почти чёрный фон стоит около тысячной. Поэтому добавка, на глаз
       * ничтожная, на фоне оказывается кратной ему — и мельче её надо брать
       * именно по этой причине, а не из скромности.
       */
      float glow = min(light, 1.5);
      vec3 lit = core.rgb * (1.0 + glow * uGlow) + glow * uSpark;

      gl_FragColor = vec4(lit, core.a);
    }
  `},FD=Math.PI*2,ID=class{object;spec;sprites;texture;x;y;vx;vy;life;share;pierceLeft;hitCooldown;tag;cursor=0;tint=new N;constructor(e){this.spec=e,this.texture=Te(32,2.4),this.sprites=new mr({capacity:e.capacity,texture:this.texture,additive:!0,gain:e.gain,renderOrder:e.renderOrder}),this.object=this.sprites.points;let t=e.capacity;this.x=new Float32Array(t),this.y=new Float32Array(t),this.vx=new Float32Array(t),this.vy=new Float32Array(t),this.life=new Float32Array(t),this.share=new Float32Array(t),this.pierceLeft=new Float32Array(t),this.hitCooldown=new Float32Array(t),this.tag=new Uint8Array(t),this.setColor(e.color)}setColor(e){this.tint.setHex(e);for(let e=0;e<this.spec.capacity;e++)this.sprites.setColor(e,this.tint)}emit(e){let t=this.spec,n=e.speed??t.speed,r=e.life??t.life,i=e.share??1,a=Math.max(1,Math.floor(e.count)),o=e.jitter??0,s=e.spread>=FD-1e-6,c=a===1?0:s?e.spread/a:e.spread/(a-1),l=s?e.angle:e.angle-e.spread/2,u=0;for(let s=0;s<a;s++){let a=this.claim();if(a<0)break;let d=l+c*s+(o>0?(Math.random()-.5)*o:0);this.x[a]=e.x,this.y[a]=e.y,this.vx[a]=Math.cos(d)*n,this.vy[a]=Math.sin(d)*n,this.life[a]=r,this.share[a]=i,this.pierceLeft[a]=(t.pierce??0)+1,this.hitCooldown[a]=0,this.tag[a]=e.tag??0,u++}return u}claim(){let e=Go(this.life,this.cursor);return e<0&&this.spec.evict&&(e=Ko(this.life)),e<0?-1:(this.cursor=(e+1)%this.spec.capacity,e)}update(e,t,n,r,i,a={}){let o=this.spec,s=o.drag?Math.exp(-o.drag*e):1,c=r.x/2,l=r.y/2;for(let r=0;r<o.capacity;r++){if(this.life[r]<=0){this.sprites.hide(r);continue}this.life[r]-=e,this.hitCooldown[r]>0&&(this.hitCooldown[r]-=e),s!==1&&(this.vx[r]*=s,this.vy[r]*=s),this.x[r]+=this.vx[r]*e,this.y[r]+=this.vy[r]*e,a.onEdge&&(Math.abs(this.x[r])>c||Math.abs(this.y[r])>l)&&a.onEdge(r);let u=!1;if(this.hitCooldown[r]<=0&&this.pierceLeft[r]>0){let e=-1,s=1/0;t.queryCircle(this.x[r],this.y[r],o.radius,(t,n)=>{n>=s||(s=n,e=t)}),e>=0&&(u=!0,this.pierceLeft[r]--,this.hitCooldown[r]=o.hitInterval??0,i(r,e,o.damage*this.share[r],this.tag[r]),n.hit(this.x[r],this.y[r],o.color,3,70),a.onHit?.(r,e))}let d=this.pierceLeft[r]<=0;if(this.life[r]<=0||d){a.onExpire?.(r,d),this.life[r]=0,this.sprites.hide(r);continue}this.draw(r,n,u)}this.sprites.sync()}draw(e,t,n){let r=this.spec,i=r.sizeGone??r.size,a=1;if(r.fadeFrom){let t=Math.min(1,this.life[e]/r.life),n=t>=r.fadeFrom?1:t/r.fadeFrom;a=n*n}r.trailSize&&!n&&Math.random()<.35+a*.65&&t.trail(this.x[e],this.y[e],r.color,r.trailSize,(r.trailLife??.16)*(.4+a*.6)),this.sprites.set(e,Math.round(this.x[e]),Math.round(this.y[e]),Math.max(1,Math.round(i+(r.size-i)*a)),.95*a)}clear(){this.life.fill(0);for(let e=0;e<this.spec.capacity;e++)this.sprites.hide(e);this.sprites.sync()}dispose(){this.sprites.dispose(),this.texture.dispose()}},LD=96,RD=1.6,zD=1,BD=class{object;field;sources=[];talents=[];index=new Map;constructor(){this.field=new ID({capacity:LD,damage:zD,speed:210,life:.9,radius:7,pierce:0,drag:RD,fadeFrom:.5,size:6,sizeGone:2,color:nD(),trailSize:1,trailLife:.16,gain:R,renderOrder:25}),this.object=this.field.object}setColor(e){this.field.setColor(e)}spray(e,t,n,r,i,a=`deathSpray`){this.field.emit({x:e,y:t,angle:Math.random()*Math.PI*2,spread:Math.PI*2,count:n,share:r/zD,tag:this.tagFor(i,a)})}tagFor(e,t){let n=`${e}|${t}`,r=this.index.get(n);if(r!==void 0)return r;let i=this.sources.length;return this.sources.push(e),this.talents.push(t),this.index.set(n,i),i}update(e,t,n,r,i){this.field.update(e,t,n,r,(e,t,n,r)=>{i(t,n,this.sources[r]??`beam`,this.talents[r]??`deathSpray`)})}clear(){this.field.clear()}dispose(){this.field.dispose()}},VD=5,HD=Math.PI*.55,UD=190,WD=10,GD=150,KD=2.4,qD=70,JD=1.1,YD=6,XD=84,ZD=5.5,QD=1.3,$D=13,eO=class{compose(e,t,n,r=0){let i=L[t.kind[e]];t.phaseIndex[e]=0,t.bossState[e]=0,t.stateTimer[e]=0,t.orbitDir[e]=r%2==0?1:-1,i.movement===`cross`&&this.setCourse(e,t,n);let a=i.parts;if(!a)return;let o=e;for(let r=0;r<a.count;r++){let i=n.spawn(a.kind,t.x[e],t.y[e]);if(i<0)break;t.owner[i]=e,t.ahead[i]=o,t.slot[i]=r,t.gap[i]=a.gap,t.setHealth(i,Math.max(1,t.maxHp[e]*a.share)),a.layout===`chain`&&(o=i)}}update(e,t,n){for(let r=0;r<t.capacity;r++){if(!t.alive[r])continue;let i=L[t.kind[r]];if(!i.boss||!i.phases||t.spawning[r]>0)continue;let a=this.advancePhase(r,t,i,n),o=a.rate??1;if(t.bossState[r]!==0){t.stateTimer[r]-=e,t.bossState[r]===1&&this.holdEnvelop(r,e,t,n,i),t.stateTimer[r]<=0&&(t.bossState[r]=0,i.movement===`cross`&&this.setCourse(r,t,n));continue}if(i.movement===`cross`&&this.keepCourse(r,t,n),i.orbit){let e=Math.min(n.halfWidth,n.halfHeight)-i.size*.5-8;t.orbitRadius[r]=Math.max(48,Math.min(i.orbit.radius,e))}if(a.attacks.includes(`dodge`)&&this.tickDodge(r,e,t,n,i,o),t.bossTimer[r]-=e*o,t.bossTimer[r]>0)continue;let s=a.attacks.filter(e=>e!==`dodge`&&this.available(r,t,i,e));if(s.length===0){t.bossTimer[r]=1.5;continue}let c=s[n.rng.int(0,s.length)];t.bossTimer[r]=this.fire(r,c,t,n,i)}}onPartKilled(e,t,n){let r=t.owner[e];if(r<0)return;let i=L[t.kind[r]].parts;i&&(n.particles.burst({x:t.x[e],y:t.y[e],color:L[t.kind[e]].color,count:34,speed:150,life:.6,size:2,drag:2.6}),i.splits&&this.split(e,r,t,n,i.kind))}onBossKilled(e,t){for(let n=0;n<t.capacity;n++)!t.alive[n]||t.owner[n]!==e||t.kill(n)}split(e,t,n,r,i){let a=[];for(let r=0;r<n.capacity;r++)!n.alive[r]||n.owner[r]!==t||L[n.kind[r]].id===i&&n.slot[r]>n.slot[e]&&a.push(r);if(a.length===0)return;a.sort((e,t)=>n.slot[e]-n.slot[t]);let o=L[n.kind[t]].parts?.count??a.length,s=a.length/Math.max(1,o),c=a[0],l=r.spawn(L[n.kind[t]].id,n.x[c],n.y[c]);if(l<0){for(let e of a)n.kill(e);return}n.setHealth(l,Math.max(1,n.maxHp[t]*s)),n.splitOff[l]=1,n.phaseIndex[l]=n.phaseIndex[t],this.setCourse(l,n,r);let u=l;a.forEach((e,t)=>{n.owner[e]=l,n.ahead[e]=u,n.slot[e]=t,u=e})}advancePhase(e,t,n,r){let i=n.phases??[],a=t.maxHp[e]>0?t.hp[e]/t.maxHp[e]:1,o=0;for(let e=0;e<i.length;e++)a<=i[e].from&&(o=e);return o!==t.phaseIndex[e]&&(t.phaseIndex[e]=o,t.bossTimer[e]=.4,r.particles.burst({x:t.x[e],y:t.y[e],color:n.color,count:60,speed:210,life:.7,size:2,drag:2.2})),i[t.phaseIndex[e]]??{from:1,attacks:[]}}available(e,t,n,r){return r===`summon`&&!n.summon?!1:n.parts?.grants!==r||this.partsAlive(e,t)>0}partsAlive(e,t){let n=0;for(let r=0;r<t.capacity;r++)t.alive[r]&&t.owner[r]===e&&n++;return n}tickDodge(e,t,n,r,i,a){let o=i.parts?.grants===`dodge`?this.partsAlive(e,n):1;if(o<=0||(n.dodgeTimer[e]-=t*a*o,n.dodgeTimer[e]>0))return;n.dodgeTimer[e]=KD;let s=i.size*.5+6,c=0,l=0;for(let e=0;e<8&&(c=(r.rng.next()*2-1)*Math.max(10,r.halfWidth-s),l=(r.rng.next()*2-1)*Math.max(10,r.halfHeight-s),!(Math.hypot(c-r.originX,l-r.originY)>=qD));e++);this.puff(n.x[e],n.y[e],i.color,r),n.place(e,c,l),this.puff(c,l,i.color,r)}fire(e,t,n,r,i){let a=n.x[e],o=n.y[e];switch(t){case`fan`:{let t=Math.atan2(r.originY-o,r.originX-a),s=VD+n.phaseIndex[e]*2;for(let e=0;e<s;e++){let c=t+((s===1?.5:e/(s-1))-.5)*HD;this.launch(`thorn`,a,o,c,UD,i,n,r)}return 3.4}case`ring`:for(let e=0;e<WD;e++){let t=e/WD*Math.PI*2+r.rng.next()*.2;this.launch(`thorn`,a,o,t,GD,i,n,r)}return 5.2;case`summon`:{let e=i.summon;if(!e)return 2;for(let t=0;t<e.count;t++){let t=r.rng.next()*Math.PI*2,n=44+r.rng.next()*30;r.spawn(e.kind,a+Math.cos(t)*n,o+Math.sin(t)*n)}return e.interval}case`charge`:return n.bossState[e]=2,n.stateTimer[e]=JD,this.puff(a,o,i.color,r),YD;case`spines`:{let t=0;for(let a=0;a<n.capacity;a++){if(!n.alive[a]||n.owner[a]!==e)continue;let o=n.slot[a]%2==0?1:-1,s=Math.atan2(n.vy[a],n.vx[a]);this.launch(`spine`,n.x[a],n.y[a],s+o*Math.PI*.5,120,i,n,r),t++}return t>0?4.6:2.4}case`envelop`:return n.bossState[e]=1,n.stateTimer[e]=ZD,n.dodgeTimer[e]=0,n.courseX[e]=0,n.courseY[e]=0,this.puff(a,o,i.color,r),n.place(e,r.originX,r.originY-XD),this.puff(n.x[e],n.y[e],i.color,r),$D;default:return 2}}holdEnvelop(e,t,n,r,i){let a=[];for(let t=0;t<n.capacity;t++)n.alive[t]&&n.owner[t]===e&&a.push(t);if(a.length===0)return;let o=r.elapsed*.6;if(a.forEach((e,i)=>{let s=o+i/a.length*Math.PI*2,c=r.originX+Math.cos(s)*XD,l=r.originY+Math.sin(s)*XD,u=1-Math.exp(-6*t);n.place(e,n.x[e]+(c-n.x[e])*u,n.y[e]+(l-n.y[e])*u)}),n.dodgeTimer[e]-=t,!(n.dodgeTimer[e]>0)){n.dodgeTimer[e]=QD;for(let e of a){let t=Math.atan2(r.originY-n.y[e],r.originX-n.x[e]);this.launch(`spine`,n.x[e],n.y[e],t,130,i,n,r)}}}launch(e,t,n,r,i,a,o,s){let c=Math.cos(r),l=Math.sin(r),u=a.radius*.7+8,d=s.spawn(e,t+c*u,n+l*u);d<0||(o.impulse(d,c*i,l*i),s.particles.hit(t+c*u,n+l*u,a.color,3,70))}puff(e,t,n,r){r.particles.burst({x:e,y:t,color:n,count:26,speed:170,life:.45,size:2,drag:3.2})}setCourse(e,t,n){let r=Math.atan2(-t.y[e],-t.x[e])+(n.rng.next()-.5)*.7;t.courseX[e]=Math.cos(r),t.courseY[e]=Math.sin(r)}keepCourse(e,t,n){let r=L[t.kind[e]],i=Math.max(20,n.halfWidth-r.size*.4),a=Math.max(20,n.halfHeight-r.size*.4),o=t.x[e],s=t.y[e],c=o>i||o<-i,l=s>a||s<-a;if(!c&&!l)return;t.place(e,Math.max(-i,Math.min(i,o)),Math.max(-a,Math.min(a,s)));let u=Math.atan2(n.originY-t.y[e],n.originX-t.x[e])+(n.rng.next()-.5)*.8;t.courseX[e]=Math.cos(u),t.courseY[e]=Math.sin(u)}},tO=[{id:`sparks`,stat:`xpGain`,mult:2,seconds:20,color:16765514,icon:`xpGain`},{id:`damage`,stat:`damage`,mult:2,seconds:12,color:16738890,icon:`damage`},{id:`haste`,stat:`attackSpeed`,mult:2,seconds:12,color:8119295,icon:`attackSpeed`},{id:`reach`,stat:`area`,mult:2,seconds:14,color:10320895,icon:`area`},{id:`flood`,spawn:2,mult:2,seconds:20,color:16730749,icon:`difficulty`}],nO={id:`triumph`,stat:`damage`,also:`attackSpeed`,mult:1.8,seconds:30,color:16761418,icon:`damage`},rO=new Map([...tO,nO].map(e=>[e.id,e])),iO=[32,52],aO=4,oO=class{object=new M;slots=[];textures=new Map;loader=new ke;geometry=new xe(1,1);constructor(){this.object.renderOrder=100;for(let e=0;e<aO;e++){let e=new M;e.visible=!1;let t=this.quad(16777215,1);e.add(t),this.object.add(e),this.slots.push({group:e,icon:t})}}quad(e,t){let n=new le({color:e,opacity:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),r=new pe(this.geometry,n);return r.renderOrder=100,r}textureOf(e){let t=this.textures.get(e);if(t)return t;let n=it(e);if(!n)return null;let r=this.loader.load(n);return r.colorSpace=ye,this.textures.set(e,r),r}show(e){for(let t=0;t<this.slots.length;t++){let n=this.slots[t],r=e[t];if(!r){n.group.visible=!1;continue}let i=this.textureOf(r.icon);if(!i){n.group.visible=!1;continue}n.group.visible=!0,n.group.position.set(r.x,r.y,0),n.icon.material.map=i,n.icon.material.color.setHex(r.color),n.icon.material.opacity=r.alpha,n.icon.material.needsUpdate=!0,n.icon.scale.set(r.size,r.size,1)}}clear(){for(let e of this.slots)e.group.visible=!1}dispose(){for(let e of this.slots)e.icon.material.dispose();for(let e of this.textures.values())e.dispose();this.textures.clear(),this.geometry.dispose()}},sO=22,cO=26,lO=70,uO=.42,dO=2.5,fO=2,pO=.24,mO=.34,hO=.42,gO=1.7,_O=new N,vO=.13,yO=16,bO=20,xO=9,SO=.3,CO=.34,wO=class{marks=new oO;drops=[];live=new Map;next=25;frame=[];get object(){return this.marks.object}get spawnRate(){let e=1;for(let t of this.live.keys())e*=rO.get(t)?.spawn??1;return e}update(e){this.fall(e),this.pick(e),this.tick(e),this.apply(e.stats),this.draw(e),this.edge(e)}fall(e){this.next-=e.dt,!(this.next>0)&&(this.next=e.rng.range(iO[0],iO[1]),!(this.drops.length>=fO)&&this.drop(void 0,e.rng,e.bounds,e.sparks))}drop(e,t,n,r){if(this.drops.length>=4)return;let i=Math.min(n.x,n.y)*uO,a=t.range(0,Math.PI*2),o=t.range(lO,Math.max(71,i)),s=e&&rO.get(e)||tO[t.int(0,tO.length)],c=Math.cos(a)*o,l=Math.sin(a)*o;this.drops.push({id:s.id,x:c,y:l,left:8,born:hO,gone:0,taken:!1}),this.summon(r,c,l,s.color)}tick(e){for(let t=this.drops.length-1;t>=0;t--){let n=this.drops[t];if(n.gone>0){n.gone-=e.dt,n.gone<=0&&this.drops.splice(t,1);continue}n.born>0&&(n.born=Math.max(0,n.born-e.dt)),n.left-=e.dt,n.left<=0&&this.lose(e,n)}for(let[t,n]of this.live){let r=n-e.dt;r<=0?this.live.delete(t):this.live.set(t,r)}}pick(e){for(let t of this.drops){if(t.gone>0||!(e.press&&(t.x-e.pointerX)**2+(t.y-e.pointerY)**2<=sO**2)&&!e.swept(t.x,t.y))continue;let n=rO.get(t.id);n&&(this.live.set(t.id,n.seconds),t.taken=!0,t.gone=pO,I.play(`boon`),this.gather(e,t,n.color))}}lose(e,t){t.gone=mO;let n=rO.get(t.id);n&&this.scatter(e,t,n.color)}bestow(e){let t=rO.get(e);t&&this.live.set(e,t.seconds)}apply(e){e.clearSurges();for(let t of this.live.keys()){let n=rO.get(t);n&&(n.stat&&e.surge(n.stat,n.mult),n.also&&e.surge(n.also,n.mult))}}draw(e){this.frame.length=0;for(let t of this.drops){let n=rO.get(t.id);if(!n)continue;if(t.gone>0){this.frame.push(this.leaving(t,n.icon));continue}if(t.born>0){this.frame.push(this.rising(t,n.icon));continue}let r=1+Math.sin(e.elapsed*4.2)*.07,i=t.left<dO?.45+.55*Math.abs(Math.sin(e.elapsed*9)):1;this.frame.push({x:t.x,y:t.y,icon:n.icon,color:16777215,size:cO*r,alpha:i}),_O.setHex(n.color).offsetHSL(Math.sin(e.elapsed*1.7)*vO,0,0),e.sparks.emit({x:t.x,y:t.y,count:2,ring:cO*.9,life:[.5,.9],size:[1,2.2],endSize:.2,color:_O.getHex(),to:16777215,intensity:1.2,twinkle:.6,orbit:{around:{x:t.x,y:t.y},spin:[1.8,2.8],drift:[-6,10]}})}this.marks.show(this.frame)}edge(e){if(this.live.size===0)return;let t=e.bounds.x*.5,n=e.bounds.y*.5,r=0;for(let[i,a]of this.live){let o=rO.get(i);if(!o)continue;let s=Math.min(1,a/o.seconds/CO),c=r*yO;_O.setHex(o.color).offsetHSL(Math.sin(e.elapsed*1.1+r*2)*vO,0,0);let l=_O.getHex();r++;for(let r=0;r<4;r++){let i=r<2,a=r%2==0?1:-1,o=i?-t:a*(t-c),u=i?a*(n-c):-n,d=i?t:o,f=i?u:n,p=i?0:-a,m=i?-a:0,h=-m,g=p;e.sparks.emit({x:o,y:u,line:{x:d,y:f},count:2,life:[.4,.7],size:[1.2,2.6],endSize:.05,color:l,to:16777215,vx:p*bO+h*xO,vy:m*bO+g*xO,attract:SO,attractTo:{x:e.originX,y:e.originY},drag:1.4,intensity:1.05*s,fade:1.9,twinkle:.35,kind:`streak`,stretch:.06})}}}rising(e,t){let n=1-e.born/hO,r=n-1,i=1+2.7*r*r*r+gO*r*r;return{x:e.x,y:e.y,icon:t,color:16777215,size:cO*Math.max(0,i),alpha:Math.min(1,n*1.9)}}leaving(e,t){let n=e.taken?pO:mO,r=1-Math.max(0,e.gone)/n,i=e.taken?1+.35*Math.sin(r*Math.PI)-r*.8:1-r*1.15;return{x:e.x,y:e.y,icon:t,color:16777215,size:cO*i,alpha:Math.max(0,1-r*r)}}summon(e,t,n,r){e.emit({x:t,y:n,count:40,ring:cO*3.4,radial:!0,turn:Math.PI*.86,speed:[cO*1.6,cO*2.6],delay:[0,.14],life:[.34,.5],size:[1,2.2],endSize:.15,color:r,to:16777215,attract:1,attractTo:{x:t,y:n},drag:1.8,intensity:.9,twinkle:.4})}gather(e,t,n){e.sparks.emit({x:t.x,y:t.y,count:54,ring:cO*2.1,radial:!0,turn:Math.PI*.8,speed:[104,156],life:[.18,.32],size:[1.2,2.8],endSize:.1,color:n,to:16777215,attract:1,attractTo:{x:t.x,y:t.y},drag:1.2,core:.7,kind:`streak`,stretch:.03})}scatter(e,t,n){e.sparks.emit({x:t.x,y:t.y,count:26,ring:cO*.5,radial:!0,speed:[40,110],life:[.3,.5],size:[1,2],endSize:.1,color:n,to:1315356,intensity:.8,drag:3.6})}tint(){let e=16777215,t=0;for(let[n,r]of this.live){let i=rO.get(n);if(!i)continue;let a=Math.min(1,r/i.seconds/CO);a<=t||(t=a,e=i.color)}return{color:e,strength:t}}snapshot(){let e=[];for(let[t,n]of this.live){let r=rO.get(t);r&&e.push({id:t,left:Math.max(0,n),share:Math.max(0,n/r.seconds),color:r.color})}return e}clear(e){this.drops.length=0,this.live.clear(),this.next=25,e.clearSurges(),this.marks.clear()}dispose(){this.marks.dispose()}},TO=class{def;stacks=0;left=0;constructor(e){this.def=e}},EO=class{live=new Map;owned=new Map;view=[];touched=new Set;own(e){!Ge.has(e)||this.owned.has(e)||this.owned.set(e,0)}has(e){return this.owned.has(e)}grant(e,t=1){let n=Ge.get(e);if(!n)return;let r=this.live.get(e);r||(r=new TO(n),this.live.set(e,r)),r.stacks=Math.min(n.stacks,r.stacks+Math.max(1,t)),r.left=n.seconds}count(e){return this.live.get(e)?.stacks??0}update(e,t,n=0){for(let[t,r]of this.owned){let i=Ge.get(t);if(!i)continue;let a=r+(i.trigger===`kill`?n:e),o=Math.max(.001,i.every);for(;a>=o;)a-=o,this.grant(t);this.owned.set(t,a)}for(let[t,n]of this.live)if(n.left-=e,!(n.left>0)){if(n.stacks--,n.stacks<=0){this.live.delete(t);continue}n.left=n.def.seconds}this.apply(t)}apply(e){for(let t of this.touched)e.setTemp(t,0,0);this.touched.clear();for(let t of this.live.values()){let n=t.def,r=n.value*t.stacks;ze(n.stat)?this.add(e,n.stat,0,r):this.add(e,n.stat,r,0)}}add(e,t,n,r){if(this.touched.has(t)){e.addTemp(t,n,r);return}this.touched.add(t),e.setTemp(t,n,r)}snapshot(){this.view.length=0;for(let e of this.live.values())this.view.push({id:e.def.id,stacks:e.stacks,left:Math.max(0,e.left),share:Math.max(0,Math.min(1,e.left/e.def.seconds)),color:Re(e.def.stat)});return this.view}clear(e){this.live.clear(),this.owned.clear();for(let t of this.touched)e.setTemp(t,0,0);this.touched.clear(),this.view.length=0}},DO=5,OO=16,kO=.75,AO=8,jO=4,MO=.4;function NO(e){let t=Math.max(0,e)/60,n=Math.floor(t/DO),r=t-n*DO;if(n<1)return 0;let i=n*OO,a=i-OO-(n>=2?AO:0);if(r<kO){let e=r/kO;return a+(i-a)*e*e*(3-2*e)}if(r<=jO)return i;let o=Math.min(1,(r-jO)/MO);return i-AO*o*o*(3-2*o)}var PO=.55;function FO(e){return Math.max(1,e)**+PO}function IO(e){return Math.max(0,e)/60*(OO/DO)}var LO=6,RO=.8,zO=55,BO=.02,VO=42;function HO(e){return VO*(Math.sqrt(1+(Math.max(0,e)/VO)**2)-1)}function UO(e,t){let n=Math.max(0,t-LO)*RO,r=Math.max(0,t-zO);return e+n+r*r*BO}function WO(e){return Number.isFinite(e)?Math.min(e,1e30):1e30}var GO=1.032,KO=1.018,qO=1.025,JO=1.012,YO=.08,XO=210;function ZO(e,t=0){let n=Math.max(0,Math.max(0,e)-Math.max(0,t)),r=HO(t),i=n+r,a=UO(i,r)-i;return{enemyHealth:WO(GO**+Math.max(0,t)*KO**+n),enemyDamage:WO(qO**+(r+a*YO)*JO**+n),spawnRate:Math.min(9,1+i*.055+a*.012),enemySpeed:Math.min(1.9,1+i*.022+a*.004),enemyArmor:Math.min(XO,i*2.4+a*.6),enemyKnockbackResist:i*9,enemyControlResist:i*4.5}}var QO=.5;function $O(e){return ZO(e,e).enemyHealth**+QO}function ek(e,t){return e.xp*25*t}var tk=[{id:`solo`,score:1.7,effects:{maxSlots:1}},{id:`duet`,score:1.25,effects:{maxSlots:2}},{id:`bossRush`,score:1.45,effects:{bossInterval:.5}},{id:`silence`,score:.7,effects:{noBosses:!0}},{id:`noElements`,score:1.3,effects:{noElements:!0}},{id:`swarm`,score:1.35,effects:{spawnRate:1.6,enemyHealth:.65,enemySpeed:1.15}},{id:`glass`,score:1.5,effects:{maxHealth:.35,damage:1.3}},{id:`headStart`,score:1.4,effects:{startThreat:8}},{id:`frugal`,score:1.3,effects:{xpGain:.65}}];function nk(e){return tk.find(t=>t.id===e)}var rk={ids:[],score:1,effects:{enemyHealth:1,enemySpeed:1,spawnRate:1,maxHealth:1,damage:1,xpGain:1,bossInterval:1,bossPack:1}};function ik(e){let t={ids:[],score:1,effects:{...rk.effects}};for(let n of e){let e=nk(n);if(!e)continue;t.ids.push(e.id),t.score*=e.score;let r=e.effects;r.maxSlots!==void 0&&(t.effects.maxSlots=Math.min(t.effects.maxSlots??1/0,r.maxSlots)),r.startThreat!==void 0&&(t.effects.startThreat=(t.effects.startThreat??0)+r.startThreat),t.effects.noBosses=t.effects.noBosses||r.noBosses,t.effects.noElements=t.effects.noElements||r.noElements,t.effects.enemyHealth*=r.enemyHealth??1,t.effects.enemySpeed*=r.enemySpeed??1,t.effects.spawnRate*=r.spawnRate??1,t.effects.maxHealth*=r.maxHealth??1,t.effects.damage*=r.damage??1,t.effects.xpGain*=r.xpGain??1,t.effects.bossInterval*=r.bossInterval??1,t.effects.bossPack*=r.bossPack??1}return t}function ak(e){return Math.round(e.raw*e.challengeScore)}var ok=.75,sk=1.25,ck=.34,lk=46,uk=4,dk=52,fk=.02,pk=2.5,mk=25,hk=1e4;function gk(e,t){e.visible=t>0,e.traverse(e=>{let n=e.material,r=n?.uniforms?.uGain;if(!r)return;let i=n.userData;i.baseGain??=r.value,r.value=i.baseGain*t})}var _k=4,vk=26,yk=12,bk=2.6,xk=1.2,Sk=.45,Ck=.12,wk=4,Tk=6,Ek=.06,Dk=.03,Ok=.6,kk=16727370,Ak=90,jk=.9,Mk=200,Nk=2.5,Pk=.25,Fk=10,Ik=60,Lk=16757850,Rk=6,zk=220,Bk=120,Vk=12575999,Hk=20,Uk=.02,Wk=16,Gk=110,Kk=90,qk=16766346,Jk=.3,Yk=.6,Xk=90,Zk=.5,Qk=2,$k=640,eA=5e4,tA=200,nA=.02,rA=6,iA=44,aA=.3,oA=10354646,sA=60,cA=70,lA=16742954,uA=1.3,dA=.84,fA=1400,pA=640,mA=34,hA=1e5,gA=220,_A=88,vA=4,yA=4,bA=190,xA=3,SA=5,CA=.8,wA=7,TA=.25,EA=[.45,.6,.75,.9],DA=3600,OA=5,kA=30,AA=5,jA=`void`,MA=1.5,NA=1/10,PA=.15,FA=.6,IA=Object.fromEntries(XT.map(e=>[e.id,e])),LA=new Map(dT.map(e=>[e.id,e])),RA=`synergy:`,zA=new Map,BA=L.map(e=>({id:e.id,label:`enemies.${e.id}`,color:e.color})),VA=new Map;function HA(e,t){let n=VA.get(e);n||(n=new Map,VA.set(e,n));let r=n.get(t);if(r)return r;let i={id:e,label:e.startsWith(RA)?`synergies.${e.slice(8)}.name`:`talents.${e}.name`,color:t};return n.set(t,i),i}function UA(e){let t=zA.get(e);if(t)return t;let n=WA(e);return zA.set(e,n),n}function WA(e){if(e===`thorns`)return{id:`thorns`,label:`ui.meter.sources.thorns`,color:16762967};if(e===`spring`)return{id:`spring`,label:`talents.spring.name`,color:oA};if(e in IA){let t=IA[e];return{id:t.id,label:`fusions.${t.id}.name`,color:t.color}}if(e in nE){let t=nE[e];return{id:t.id,label:`specials.${t.id}.name`,color:t.color}}if(KT[e]!==void 0){let t=qT(e);return{id:t.id,label:`elements.${t.id}.name`,color:t.color}}let t=pT(e);return{id:t.id,label:`abilities.${t.id}.name`,color:t.color}}var GA=.08,KA=1,qA=.6,JA=.18,YA=.007,XA=class{object=new M;state;stats=new Fe;meter=new LE;timeline=new VE;enemies;seen=new Set;slain=new Set;slainStamp=0;seenStamp=0;particles;ownsParticles;xpMotes;numbers;bars;rng;abilities=[];loadout=[];initialLoadout;spawnTimer=0;finaleTimer=0;finaleBossOut=!1;bossTimes;bossIndex=0;bossCalled=!1;pace=0;bossCount=0;hordeIndex=0;hordeCalled=!1;modeKind=-1;mode=null;modeShare=0;modeLeft=0;hordeNotice=0;waveCharge=0;waveRadius=-1;waveStruck=new Set;waveHitting=!1;exhale=0;vortex=0;lastBoss=``;threat=ZO(0);invulnerable=0;devFlags={god:!1,spawns:!0,frozen:!1,bosses:!0};devTimeScale=1;lifestealHeat=0;elementTimer=0;crystalArmor=0;crystalTimer=0;spreadElement=null;currentSource=`beam`;lastOriginX=0;lastOriginY=0;startTime;bossSince=-1;autoShop;autoShopTimer=0;scoreCoef=1;worthPerKill=1;critChances=new Map;tickAccum=new Map;hitPart={id:``,label:``,amount:0};hitParts=[this.hitPart];tickTimer=0;splinters=new BD;harvestStacks=0;harvestTimer=0;healedFrame=0;bleedTimer=0;vigilTimer=0;titheCount=0;knellCount=0;echoing=!1;rebirthUsed=!1;springPool=0;springTimer=0;arcs=new yD;sparks=new Zn;shows=new vr(this.sparks);forms=new Lr;buffs=new EO;boons=new wO;swept=(e,t)=>{for(let n of this.abilities)if(n.sweeps?.(e,t))return!0;return!1};lastKills=0;spawnedTotal=0;bossShare=new Map;sourceStack=[];synergies=new xu({enter:e=>{this.sourceStack.push(this.currentSource),this.currentSource=e},leave:()=>{this.currentSource=this.sourceStack.pop()??this.currentSource}});bolts=new SD;lens=new CD;shock=new ND;impacts=new jD;effects=1;bosses=new eO;bossHooks;threatRamp;forcedElements;challenges;unlockedTalents;known;maxSlots;shop;bossesDefeated=0;bossGroup=0;extraMods=[];runFlags=new Set;onPlayerHit=null;onPlayerDeath=null;onWaveCharge=null;onWaveBlast=null;onWispCharge=null;onWispFlash=null;onSparksCollected=null;onKillEffect=null;onBossSpawned=null;onHorde=null;onBossDefeated=null;context;constructor(e){let t=e.startTime??0,n=e.particles;this.rng=new Oe(`${e.seed}-combat`),this.autoShop=e.autoShop??!1,this.threatRamp=e.threatRamp??1,this.forcedElements=e.elements,this.challenges=e.challenges??rk,this.unlockedTalents=e.unlockedTalents?new Set(e.unlockedTalents):null,this.known=new Set(e.knownKinds??[]),this.maxSlots=Math.max(1,Math.min(5,this.challenges.effects.maxSlots??5)),this.enemies=new kE(hk,this.rng),this.enemies.mysteryKnown=this.known.has(jA),this.ownsParticles=n===void 0,this.particles=n??new cr(4096),this.xpMotes=new UT(512),this.numbers=new dr(2048),this.bars=new fr(hk),this.state={health:0,maxHealth:0,sparks:0,shards:0,sparksTotal:0,bought:0,kills:0,power:1,damageDealt:0,score:0,scoreCoef:1,time:Math.min(t,DA),enemyCount:0,alive:!0,finale:!1,won:!1,threat:this.challenges.effects.startThreat??0,enemyHealthScale:1,enemyDamageScale:1,bosses:[],bossesDefeated:0,talents:[],elements:[],activeElement:null,buffs:[],boons:[],horde:null},this.grantElements(e.elements),this.startTime=t,this.bossTimes=QA(this.challenges.effects.bossInterval),this.bossIndex=$A(this.bossTimes,t),this.bossCount=this.bossIndex,this.hordeIndex=ej(t),this.applyChallengeStats(),this.state.maxHealth=Math.round(this.stats.get(`maxHealth`)),this.state.health=this.state.maxHealth,this.enemies.onDamageNumber=(e,t,n,r)=>{let i=r?1.75:n>=30?1.5:1;this.numbers.spawn(e,t+6,n,r?16765514:16773832,i)},this.enemies.onSpawn=e=>{this.seen.has(e.id)||(this.seen.add(e.id),this.seenStamp++)},this.enemies.onKill=(e,t,n,r)=>{this.state.kills++,this.slain.has(t.id)||(this.slain.add(t.id),this.slainStamp++);let i=this.waveHitting?TA:1;t.boss||(this.state.score+=ek(t,this.scoreCoef)*i),this.clearTicks(e),this.particles.disintegrate(n,r,t.color,t.size,0,0,t.size>20?9:7),t.boss||this.xpMotes.spawn(n,r,t.xp*i*this.worthPerKill);let a=this.enemies.brandedDamage(e);if(a>0&&!this.waveHitting&&this.blast(n,r,a,lk,16734860,`beamBrand`),this.runFlags.has(`deathSpray`)&&!this.waveHitting&&this.splinters.spray(n,r,uk,dk,this.currentSource),this.runFlags.has(`knell`)&&!this.waveHitting&&(this.knellCount++,this.knellCount>=Wk&&(this.knellCount=0,this.blast(n,r,Gk,Kk,qk,`knell`),this.shock.ring(n,r,Kk,.5))),this.runFlags.has(`harvest`)&&!this.waveHitting&&(this.harvestStacks=Math.min(mk,this.harvestStacks+1),this.harvestTimer=pk),this.runFlags.has(`tithe`)&&!this.waveHitting&&(this.titheCount++,this.titheCount>=Hk&&(this.titheCount=0,this.healWisp(this.state.maxHealth*Uk))),this.runFlags.has(`pyre`)&&!this.waveHitting&&this.enemies.isBurning(e)&&this.pyre(n,r),this.onKillEffect?.(n,r,t.size),t.splitInto&&this.split(t.splitInto,n,r),this.enemies.owner[e]>=0&&this.bosses.onPartKilled(e,this.enemies,this.bossHooks),t.boss){if(this.bosses.onBossKilled(e,this.enemies),this.enemies.splitOff[e]===1||this.bodyAlive(this.enemies.group[e],e))return;this.bossesDefeated++,this.state.bossesDefeated=this.bossesDefeated,this.state.score+=ek(t,this.scoreCoef),this.shop.earnShards(2),this.boons.bestow(`triumph`),this.queueWave();let n=L[this.enemies.kind[e]].id;this.timeline.mark({t:this.state.time,kind:`bossDown`,id:n,duration:this.bossSince>=0?this.state.time-this.bossSince:void 0,threat:this.state.threat,by:this.bossBreakdown(n)}),this.bossSince=-1,this.bossShare.clear(),this.onBossDefeated?.(),n===jA&&this.winRun()}},this.bossHooks={spawn:(e,t,n)=>this.spawnMinion(e,t,n),particles:this.particles,rng:this.rng,halfWidth:160,halfHeight:90,originX:0,originY:0,elapsed:0},this.enemies.onShoot=(e,t,n,r,i)=>{let a=Math.atan2(this.lastOriginY-i,this.lastOriginX-r);for(let o=0;o<t;o++){let s=a+(t===1?0:(o/(t-1)-.5)*n*2),c=this.spawnMinion(e,r+Math.cos(s)*12,i+Math.sin(s)*12);if(c<0)return;this.enemies.impulse(c,Math.cos(s)*160,Math.sin(s)*160)}},this.enemies.onSummon=(e,t,n,r)=>{let i=lt[e];if(i!==void 0&&!(this.enemies.count>7e3))for(let e=0;e<t;e++){if(this.enemies.count>=1e4)return;let e=this.rng.next()*Math.PI*2,t=46+this.rng.next()*28,a=L[i],o=Math.max(8,this.context.bounds.x/2-a.size*.5-2),s=Math.max(8,this.context.bounds.y/2-a.size*.5-2),c=ij(n+Math.cos(e)*t,-o,o),l=ij(r+Math.sin(e)*t,-s,s);if(this.enemies.spawn(i,c,l)<0)return;this.particles.burst({x:c,y:l,color:a.color,count:14,speed:90,life:.4,size:1,drag:3})}},this.enemies.onBurn=(e,t)=>{let n=this.currentSource;this.currentSource=`ember`,this.strike(e,t/this.stats.mult(`damage`),!0),this.currentSource=n},this.xpMotes.onCollect=e=>{let t=e*this.stats.mult(`xpGain`);this.shop.earnSparks(t),this.meter.recordXp(`motes`,`ui.meter.sources.motes`,16771496,t),this.onSparksCollected?.()},this.object.add(this.enemies.object,this.bars.object,this.xpMotes.object,this.arcs.object,this.shows.object,this.forms.object,this.sparks.object,this.bolts.object,this.splinters.object),this.ownsParticles&&this.object.add(this.particles.object),this.context={dt:0,elapsed:0,bounds:new ue(320,180),originX:0,originY:0,focusX:0,focusY:0,aimX:1,aimY:0,focusSpeed:0,taps:0,held:!1,handX:0,handY:0,enemies:this.enemies,particles:this.particles,arcs:this.arcs,shows:this.shows,sparks:this.sparks,forms:this.forms,synergy:this.synergies,buffs:this.buffs,bolts:this.bolts,lens:this.lens,shock:this.shock,impacts:this.impacts,heal:e=>this.healWisp(e),kills:0,healthShare:1,healed:0,wisp:{charge:e=>this.onWispCharge?.(e),flash:e=>this.onWispFlash?.(e)},stats:this.stats,hit:this.hitEnemy},this.initialLoadout=[...e.loadout??gT],this.shop=new QE(this.shopHost()),this.setLoadout(this.initialLoadout),this.shop.reset()}shopHost(){return{rng:this.rng,stats:this.stats,state:this.state,maxSlots:this.maxSlots,unlockedTalents:this.unlockedTalents,noElements:this.challenges.effects.noElements===!0,loadout:()=>this.loadout,fullLoadout:()=>this.fullLoadout(),addWeapon:e=>this.setLoadout([...this.loadout,e]),takeTalent:e=>this.takeTalent(e),addElement:e=>this.addElement(e),refreshMods:()=>this.configureAbilities(),refreshStats:()=>this.refreshStats(),heal:()=>this.healWisp(this.state.maxHealth),bought:(e,t,n)=>this.onBought(e,t,n)}}blast(e,t,n,r,i,a){this.enemies.queryCircle(e,t,r,e=>{this.hitEnemy(e,n,!1,a)}),this.particles.burst({x:e,y:t,color:i,count:24,speed:165,life:.4,size:2,drag:3.2}),this.arcs.arc(e,t,r*.75,0,Math.PI*2,{color:i,nodes:14,jitter:5,life:.18,weight:2})}healWisp(e){if(e<=0||!this.state.alive)return;let t=this.state.health;this.state.health=Math.min(this.state.maxHealth,this.state.health+e),this.healedFrame+=this.state.health-t,this.meter.recordHealing(`abilities`,`ui.meter.sources.abilities`,7077790,this.state.health-t)}hitEnemy=(e,t,n=!1,r,i)=>{let a=this.currentSource;i&&(this.currentSource=i),n?this.accumulateTick(e,t,r):this.strike(e,t,!1,r),this.currentSource=a};hitSplinter=(e,t,n,r)=>{this.currentSource=n,this.strike(e,t,!1,r)};accumulateTick(e,t,n){let r=this.tickAccum.get(this.currentSource);r||(r=new Map,this.tickAccum.set(this.currentSource,r));let i=n??``,a=r.get(i);if(a||(a=new Float32Array(hk),r.set(i,a)),a[e]+=t,a[e]>=this.enemies.hp[e]){let t=a[e];a[e]=0,this.strike(e,t,!0,n)}}flushTicks(){let e=this.currentSource;for(let[e,t]of this.tickAccum){this.currentSource=e;for(let[e,n]of t){let t=e===``?void 0:e,r=this.enemies.liveSlots;for(let e=0;e<this.enemies.liveLength;e++){let i=r[e],a=n[i];a<=0||(n[i]=0,this.enemies.alive[i]&&this.strike(i,a,!0,t))}}}this.currentSource=e}clearTicks(e){for(let t of this.tickAccum.values())for(let n of t.values())n[e]=0}critRoller(e){let t=this.critChances.get(e);return t||(t=new _T(0),this.critChances.set(e,t)),t}strike(e,t,n,r){let i=1+this.harvestStacks*fk,a=LA.get(this.currentSource),o=a?.scales,s=t*Hr(o,this.stats,`damage`)*i,c=Vr(o,this.stats,`critChance`,a?.base.critChance)/100,l=Math.floor(c),u=this.critRoller(this.currentSource);u.setProbability(c-l),u.roll(this.rng)&&l++;let d=!1;if(l>0){d=!0;let e=Vr(o,this.stats,`critDamage`,a?.base.critDamage);s*=1+(e/100-1)*l}let f=this.stats.get(`finisher`);f>0&&this.enemies.healthShare(e)<=ck&&(s*=1+f/100),this.runFlags.has(`brittle`)&&this.enemies.isChilled(e)&&(s*=uA),s=Me(s);let p=UA(this.currentSource),m=BA[this.enemies.kind[e]],h=this.resolveElement(e);if(h&&h in nE){let e=nE[h].amplify;e&&(s*=e)}this.state.activeElement===`ember`&&this.enemies.ignite(e,39*this.elementScale(`ember`)*this.stats.mult(`damage`),4);let g=this.currentSource===`thorns`?1/0:this.stats.get(`armorPen`),{applied:_,effective:v,killed:y,blocked:b}=this.enemies.damage(e,s,g,d);if(this.state.damageDealt+=_,this.currentSource!==`tethers`&&(this.enemies.taken[e]+=_),y)for(let t of this.abilities)t.onKill?.(this.context,e);let x=this.currentSource;if(this.synergies.hears(x,`hit`)||y&&this.synergies.hears(x,`kill`)){let t=this.enemies.x[e],n=this.enemies.y[e],r=t-this.context.originX,i=n-this.context.originY,a=Math.hypot(r,i)||1,o=x,s=this.context;this.synergies.react(s,o,`hit`,t,n,e,r/a,i/a),y&&this.synergies.react(s,o,`kill`,t,n,e,r/a,i/a)}(_>0||(b??0)>0)&&I.play(`enemyHurt`,{volume:d?1.5:1});let S=r?HA(r,p.color):p,C=this.hitPart;if(C.id=r?p.id:`base`,C.label=r?p.label:`ui.meter.parts.base`,C.amount=_,this.meter.recordDamage(S.id,S.label,S.color,_,v,d,m,y,this.hitParts),y&&this.meter.recordKill(S.id,S.label,S.color,m),this.drainLife(_),this.runFlags.has(`bloodPrice`)&&this.state.alive&&this.bleed(),h&&!y&&!(h in nE)&&this.applyFusion(h,e),this.runFlags.has(`echo`)&&!this.echoing&&!y&&this.rng.bool(Jk)){let n=-1,r=1/0;this.enemies.queryCircle(this.enemies.x[e],this.enemies.y[e],Xk,(t,i)=>{t!==e&&i<r&&(r=i,n=t)}),n>=0&&(this.echoing=!0,this.hitEnemy(n,t*Yk,!1,`echo`),this.echoing=!1)}!n&&!y&&this.enemies.knockback(e,this.lastOriginX,this.lastOriginY,_k)}spring(){if(this.springTimer>0||this.springPool<=0)return;let e=this.state.maxHealth*nA,t=Math.min(rA,Math.floor(this.springPool/e));if(t<1)return;this.springPool-=t*e,this.springTimer=aA;let n=this.lastOriginX,r=this.lastOriginY;this.splinters.spray(n,r,t,iA,`spring`,`spring`),this.particles.burst({x:n,y:r,color:oA,count:8,speed:60,life:.35,size:1.5,drag:2})}pyre(e,t){this.blast(e,t,sA,cA,lA,`pyre`);let n=39*this.elementScale(`ember`)*this.stats.mult(`damage`);this.enemies.queryCircle(e,t,cA,e=>{this.enemies.alive[e]===1&&this.enemies.ignite(e,n,4)})}bleed(){if(this.bleedTimer>0||!this.rng.bool(Ek))return;let e=Math.min(this.state.maxHealth*Dk,this.state.health-1);e<=0||(this.bleedTimer=Ok,this.state.health-=e,this.meter.recordTaken(`bloodPrice`,`talents.bloodPrice.name`,kk,e),this.numbers.spawnPlayerDamage(this.lastOriginX,this.lastOriginY+14,e))}reflect(e,t){let n=this.stats.get(`thorns`);if(n<=0||!this.enemies.alive[e])return;let r=this.currentSource;this.currentSource=`thorns`;let i=n+t*Pk;this.strike(e,i/this.stats.mult(`damage`),!1),this.currentSource=r}resolveElement(e){let t=this.state.activeElement;if(!t||!this.enemies.canApplyElement(e))return null;if(this.enemies.isFrozen(e))return this.enemies.freeze(e,0),this.enemies.consumeAura(e),`shatter`;let n=this.enemies.auraOf(e);if(!n)return this.enemies.setAura(e,t),this.applyElementEffect(e,t),null;if(n===t)return t===`frost`?(this.enemies.freeze(e,sE*this.elementScale(`frost`)),this.enemies.consumeAura(e),`freeze`):(this.enemies.setAura(e,t),this.applyElementEffect(e,t),null);let r=rE(n,t);return r?(this.spreadElement=eE(n,t)?.effect.spread?n:null,this.enemies.consumeAura(e),r):(this.enemies.setAura(e,t),this.applyElementEffect(e,t),null)}applyElementEffect(e,t){let n=this.elementScale(t);switch(this.markElement(e,t),t){case`ember`:this.enemies.ignite(e,39*n*this.stats.mult(`damage`),4);break;case`frost`:this.enemies.chill(e,oE*n);break;case`storm`:this.zap(e,6*n);break;case`void`:this.enemies.pull(e,this.lastOriginX,this.lastOriginY,260*n,.5);break;case`light`:this.enemies.shred(e,24*n,3);break;case`earth`:this.enemies.chill(e,oE*.8*n),this.enemies.knockback(e,this.lastOriginX,this.lastOriginY,-4*n);break;case`water`:this.spill(e,t);break;case`poison`:this.enemies.shred(e,30*n,8);break;case`chaos`:this.rng.next()<.33&&this.zap(e,9*n)}}applyFusion(e,t){let n=IA[e],r=n.effect,i=this.elementScale(this.state.activeElement??`ember`),a=this.enemies.x[t],o=this.enemies.y[t],s=W(r.radius??40,this.stats.mult(`area`),Ur(this.context)),c=r.burst??0;if(this.particles.burst({x:a,y:o,color:aD(n.color,FA),count:c>1?16:10,speed:or(s,2.6,.55),life:.55,size:2,drag:2.6}),r.pull){let e=this.gestureColor(n,`pull`),t=or(s*.8,3,.5);for(let n=0;n<14;n++){let r=n/14*Math.PI*2;this.particles.burst({x:a+Math.cos(r)*s,y:o+Math.sin(r)*s,color:e,count:1,speed:t,life:.5,size:2,drag:3,angle:r+Math.PI,arc:.5})}}if(r.freeze||r.chill){let e=(r.freeze??0)>0;this.particles.burst({x:a,y:o,color:this.gestureColor(n,e?`freeze`:`chill`),count:e?16:10,speed:or(s,e?3.2:2,.4),life:.4,size:1,drag:e?3.2:2})}if(r.ignite&&this.particles.burst({x:a,y:o+4,color:this.gestureColor(n,`ignite`),count:14,speed:or(s*.7,2,.8),life:.8,size:2,drag:2,angle:Math.PI/2,arc:Math.PI*.75}),r.shred&&this.particles.burst({x:a,y:o,color:this.gestureColor(n,`shred`),count:12,speed:or(s*.6,4,.3),life:.3,size:1,drag:4}),r.push&&this.particles.burst({x:a,y:o,color:this.gestureColor(n,`push`),count:10,speed:or(s+r.push*2.4,1.6,.35),life:.35,size:1,drag:1.6}),r.heal||r.armor){let e=this.lastOriginX-a,t=this.lastOriginY-o,i=this.gestureColor(n,r.heal?`heal`:`armor`);for(let n=1;n<=7;n++){let r=n/7;this.particles.trail(a+e*r,o+t*r,iD(i,rD(),r),n===7?2:1,.18+r*.16)}}if(r.spread&&this.spreadElement){let e=aD(n.color,FA),t=aD(qT(this.spreadElement).color,PA);this.enemies.queryCircle(a,o,s,n=>{let r=this.enemies.x[n],i=this.enemies.y[n];for(let n=1;n<=4;n++){let s=n/4;this.particles.trail(a+(r-a)*s,o+(i-o)*s,iD(e,t,s),1,.14+s*.1)}})}c>=1.2&&(this.shock.ring(a,o,s*.6,Math.min(1,c*.4)),this.impacts.pop(a,o,Math.min(1,c*.5)));let l=this.currentSource;if(this.currentSource=e,r.burst){let e=W(r.radius??40,this.stats.mult(`area`),Ur(this.context)),t=r.burst*i*26;this.enemies.queryCircle(a,o,e,e=>{this.strike(e,t,!0),r.push&&this.enemies.knockback(e,a,o,r.push),r.shred&&this.enemies.shred(e,60*r.shred*i,6),r.chill&&this.enemies.chill(e,r.chill*i),r.freeze&&this.enemies.freeze(e,r.freeze*i),r.ignite&&this.enemies.ignite(e,39*r.ignite*i*this.stats.mult(`damage`),4),r.pull&&this.enemies.pull(e,a,o,240*i,.5),r.spread&&this.spreadElement&&this.enemies.canApplyElement(e)&&this.enemies.setAura(e,this.spreadElement)})}r.armor&&(this.crystalArmor=Math.min(84,this.crystalArmor+14*r.armor*i),this.crystalTimer=8),r.heal&&this.healWisp(r.heal*i*2),this.currentSource=l,this.spreadElement=null}gestureColor(e,t){let n=QT(e,t);return aD(n?qT(n).color:e.color,PA)}markElement(e,t){let n=this.enemies.x[e],r=this.enemies.y[e],i=aD(qT(t).color,PA);switch(t){case`ember`:this.particles.burst({x:n,y:r+4,color:i,count:7,speed:90,life:.5,size:2,drag:2.4});break;case`frost`:this.particles.burst({x:n,y:r,color:i,count:8,speed:34,life:.7,size:1,drag:4.5});break;case`storm`:this.particles.hit(n,r,i,6,150);break;case`void`:for(let e=0;e<8;e++){let t=e/8*Math.PI*2;this.particles.burst({x:n+Math.cos(t)*18,y:r+Math.sin(t)*18,color:i,count:1,speed:14,life:.45,size:1,drag:6})}break;case`light`:this.particles.burst({x:n,y:r+2,color:i,count:9,speed:44,life:.85,size:2,drag:1.6});break;case`earth`:this.particles.burst({x:n,y:r-5,color:i,count:8,speed:52,life:.45,size:2,drag:6.5});break;case`water`:this.particles.burst({x:n,y:r,color:i,count:7,speed:70,life:.6,size:2,drag:2.2});break;case`poison`:this.particles.burst({x:n,y:r+3,color:i,count:5,speed:20,life:.95,size:1,drag:1.2});break;case`chaos`:this.particles.hit(n,r,i,10,190)}}spill(e,t){let n=this.enemies.x[e],r=this.enemies.y[e],i=-1,a=1/0;this.enemies.queryCircle(n,r,60,(t,n)=>{t===e||n>=a||this.enemies.canApplyElement(t)&&(a=n,i=t)}),!(i<0)&&(this.enemies.setAura(i,t),this.particles.trail(this.enemies.x[i],this.enemies.y[i],4033535,2,.3))}zap(e,t){let n=this.enemies.x[e],r=this.enemies.y[e],i=-1,a=1/0;this.enemies.queryCircle(n,r,70,(t,n)=>{t===e||n>=a||(a=n,i=t)}),!(i<0)&&(this.strike(i,t,!0),this.particles.trail(this.enemies.x[i],this.enemies.y[i],12160255,2,.35))}elementScale(e){return iE(this.state.elements.find(t=>t.id===e)?.rank??1)}drainLife(e){let t=this.stats.get(`lifesteal`);if(t<=0||this.state.health<=0)return;let n=t/100*e,r=this.state.maxHealth*GA,i=n*Math.exp(-this.lifestealHeat/r),a=Math.min(r*Math.log1p(i/r),this.state.maxHealth-this.state.health);a<=0||(this.lifestealHeat+=a,this.state.health+=a,this.healedFrame+=a,this.meter.recordHealing(`lifesteal`,`ui.meter.sources.lifesteal`,16734888,a))}refreshSkin(){this.configureAbilities(),this.splinters.setColor(nD())}setNumberStyle(e,t,n=`latin`){this.numbers.setSizeScale(e),this.numbers.setFace(t),this.numbers.setScript(n)}setPixelStep(e){this.numbers.setPixelStep(e)}get numbersObject(){return this.numbers.object}boonTint(){return this.boons.tint()}get boonsObject(){return this.boons.object}setNumberMode(e){this.enemies.numberMode=e,this.numbers.mode=e}getLoadout(){return[...this.loadout]}cooldowns(){let e={};for(let t of this.abilities){let n=t.readiness?.();if(n===void 0)continue;let r=pT(t.id),i=r.base.rate*Hr(r.scales,this.stats,`attackSpeed`);i<=0||(e[t.id]={period:1/i,charge:n})}return e}fullLoadout(){return[...mT,...this.loadout]}setLoadout(e,t=!1){let n=e.slice(0,this.maxSlots).filter(e=>!mT.includes(e)),r=[...mT,...n],i=t?new Map:new Map(this.abilities.map(e=>[e.id,e]));for(let e of this.abilities)!t&&r.includes(e.id)||(this.object.remove(e.object),e.dispose(),i.delete(e.id));this.loadout=n,this.abilities=r.map(e=>{let t=i.get(e);if(t)return t;let n=fT(e);return this.object.add(n.object),n}),this.configureAbilities()}configureAbilities(){let e=Ze(this.fullLoadout());this.runFlags.clear();for(let e of this.extraMods)for(let t of e.all?.flags??[])this.runFlags.add(t);for(let t of this.extraMods)$e(e,t);$e(e,this.shop.modTable());for(let t of this.abilities){let n=e.get(t.id);n&&t.configure?.(n)}let t=new Map(this.abilities.map(e=>[e.id,e]));for(let e of this.abilities)e.link?.(t);this.synergies.rebuild(this.abilities,st(this.fullLoadout())),this.setEffects(this.effects)}dev={sparks:e=>{this.shop.earnSparks(e)},shards:(e=1)=>{this.shop.earnShards(Math.max(1,Math.floor(e)))},time:e=>{this.state.time=Math.min(Math.max(0,e),DA),this.updateThreat(),this.hordeIndex=ej(this.state.time),this.bossIndex=$A(this.bossTimes,this.state.time),this.state.time>=DA&&!this.state.finale&&this.beginFinale()},talent:e=>{this.takeTalent(e)},ability:e=>{let t=this.loadout.includes(e)?this.loadout.filter(t=>t!==e):[...this.loadout,e];this.setLoadout(t)},loadout:()=>{this.setLoadout([...this.initialLoadout],!0)},flags:this.devFlags,god:e=>{this.devFlags.god=e??!this.devFlags.god},spawns:e=>{this.devFlags.spawns=e??!this.devFlags.spawns},bosses:e=>{this.devFlags.bosses=e??!this.devFlags.bosses},freeze:e=>{this.devFlags.frozen=e??!this.devFlags.frozen},slow:e=>{this.devTimeScale=Math.max(.02,Math.min(1,e))},timeScale:()=>this.devTimeScale,boss:()=>{this.bossCalled=!0},horde:()=>{this.hordeCalled=!0},crowd:e=>{let t=Math.max(0,Math.min(hk,Math.round(e))),n=lt.mote??0;for(let e=0;e<this.enemies.capacity&&this.enemies.count>t;e++)this.enemies.alive[e]&&this.enemies.kill(e);let r={dt:0,elapsed:this.context.elapsed,bounds:this.context.bounds,originX:this.context.originX,originY:this.context.originY,focusX:this.context.focusX,focusY:this.context.focusY,aimX:1,aimY:0,focusSpeed:0,taps:0,held:!1,pointerX:0,pointerY:0},i=t*2;for(;this.enemies.count<t&&i-->0;)this.spawnAtEdge(r,n)},enemies:()=>this.enemies.count,boon:e=>{this.boons.drop(e,this.rng,this.context.bounds,this.sparks)},wipe:()=>{this.reset(),this.setLoadout([],!0)},clear:()=>{this.stats.reset(),this.buffs.clear(this.stats),this.boons.clear(this.stats),this.state.talents=[],this.state.elements=[],this.state.activeElement=null,this.extraMods=[],this.shop.reset(),this.configureAbilities(),this.xpMotes.clear(),this.waveCharge=0,this.state.maxHealth=Math.round(this.stats.get(`maxHealth`)),this.state.health=Math.min(this.state.health,this.state.maxHealth),this.state.power=this.stats.mult(`damage`)},heal:()=>{this.healWisp(this.state.maxHealth)},sweep:()=>{this.enemies.clear(),this.state.enemyCount=0,this.state.bosses=[]}};update(e){let t=e.dt;if(this.devTimeScale!==1&&(e.dt*=this.devTimeScale),this.ownsParticles&&this.particles.setAttractor(e.originX,e.originY),!this.state.alive){I.stopLoops(),this.ownsParticles&&this.particles.update(e.dt),this.enemies.tickNumbers(e.dt),this.numbers.update(e.dt),this.arcs.update(e.dt),this.shows.update(e.dt,this.enemies),this.forms.update(e.dt),this.synergies.update(this.context,e.dt),this.buffs.update(e.dt,this.stats),this.sparks.setAttractor(e.originX,e.originY),this.sparks.update(e.dt),this.bolts.update(e.dt),this.enemies.render(e.dt,this.bars);return}I.setMuffled(!1),this.lens.reset(),this.shock.reset(),this.state.finale||(this.state.time+=e.dt,this.state.time>=DA&&(this.state.time=DA,this.beginFinale()),this.updateThreat()),this.updateFinale(e),this.waveCharge>0&&(this.waveCharge-=e.dt,this.waveCharge<=0&&(this.waveCharge=0,this.waveBlast())),this.autoShop&&(this.autoShopTimer-=e.dt,this.autoShopTimer<=0&&(this.autoShopTimer=.5,this.shop.autobuy())),this.waveCharge>0&&this.breatheIn(e),this.exhale>0&&this.breatheOut(e),this.waveRadius>=0&&this.updateWave(e),this.context.dt=e.dt,this.context.elapsed=e.elapsed,this.context.bounds.copy(e.bounds),this.context.originX=e.originX,this.context.originY=e.originY,this.context.focusX=e.focusX,this.context.focusY=e.focusY,this.context.aimX=e.aimX,this.context.aimY=e.aimY,this.context.focusSpeed=e.focusSpeed,this.context.taps=e.taps,e.taps=0,this.context.held=e.held,this.context.handX=e.pointerX,this.context.handY=e.pointerY,this.context.kills=this.state.kills,this.context.healthShare=this.state.maxHealth>0?this.state.health/this.state.maxHealth:0,this.context.healed=this.healedFrame,this.runFlags.has(`spring`)&&(this.springPool+=this.healedFrame),this.healedFrame=0,this.bleedTimer>0&&(this.bleedTimer-=e.dt),this.springTimer>0&&(this.springTimer-=e.dt),this.vigilTimer+=e.dt,this.spring(),this.spawn(e);let n=Math.max(0,this.state.kills-this.lastKills);this.lastKills=this.state.kills,this.buffs.update(e.dt,this.stats,n),this.boons.update({dt:e.dt,bounds:e.bounds,elapsed:e.elapsed,originX:e.originX,originY:e.originY,pointerX:e.pointerX,pointerY:e.pointerY,press:this.context.taps>0||e.held,swept:this.swept,sparks:this.sparks,stats:this.stats,rng:this.rng});for(let e of this.abilities)this.currentSource=e.id,e.update(this.context);if(this.effects>0?this.impacts.update(e.dt,this.shock):this.shock.reset(),this.state.elements.length>0&&(this.elementTimer-=e.dt,this.elementTimer<=0||!this.state.activeElement)){this.elementTimer=lE;let e=this.state.elements.findIndex(e=>e.id===this.state.activeElement),t=this.state.elements[(e+1)%this.state.elements.length];this.state.activeElement=t.id}for(this.crystalTimer>0&&(this.crystalTimer-=e.dt,this.crystalTimer<=0&&(this.crystalArmor=0)),this.lifestealHeat*=Math.exp(-e.dt/KA),this.tickTimer+=t;this.tickTimer>=NA;)this.tickTimer-=NA,this.flushTicks();this.invulnerable>0&&(this.invulnerable-=e.dt),this.devFlags.frozen||this.enemies.update(e.dt,e.originX,e.originY,t=>{if(this.enemies.knockback(t.index,e.originX,e.originY,vk),this.reflect(t.index,t.damage),this.finaleLethal(t.index,e)||this.devFlags.god||this.invulnerable>0)return;if(this.invulnerable=Math.max(JA,qA-this.state.threat*YA),this.runFlags.has(`vigil`)&&this.vigilTimer>=Rk){let{originX:t,originY:n}=e;this.vigilTimer=0,this.blast(t,n,zk,Bk,Vk,`vigil`),this.shock.ring(t,n,Bk,.6),this.onPlayerHit?.(0);return}let n=L[this.enemies.kind[t.index]],r=Xe(t.damage,this.state.maxHealth)*(1-Le(this.stats.get(`armor`)+this.crystalArmor));if(this.state.health=Math.max(0,this.state.health-r),this.meter.recordTaken(n.id,`enemies.${n.id}`,n.color,r),this.vigilTimer=0,this.runFlags.has(`rime`)&&this.enemies.queryCircle(e.originX,e.originY,Mk,(e,t)=>{t<Ak?this.enemies.freeze(e,jk):this.enemies.chill(e,Nk)}),this.runFlags.has(`recoil`)){let{originX:t,originY:n}=e;this.splinters.spray(t,n,Fk,Ik,`thorns`,`recoil`),this.particles.burst({x:t,y:n,color:Lk,count:18,speed:170,life:.4,size:2,drag:3})}if(this.particles.burst({x:e.originX,y:e.originY,color:16727435,count:40,speed:190,life:.55,size:2,drag:2.4}),this.numbers.spawnPlayerDamage(e.originX,e.originY+14,r),I.play(`playerHit`),this.onPlayerHit?.(t.damage),this.state.health<=0){if(this.runFlags.has(`rebirth`)&&!this.rebirthUsed){let{originX:t,originY:n}=e;this.rebirthUsed=!0,this.healWisp(this.state.maxHealth*Zk),this.invulnerable=Qk,this.waveHitting=!0,this.enemies.queryCircle(t,n,$k,e=>{if(L[this.enemies.kind[e]].boss||this.enemies.owner[e]>=0)return;let{killed:r}=this.enemies.damage(e,eA);r||this.enemies.knockback(e,t,n,tA)}),this.waveHitting=!1,this.shock.ring(t,n,$k,1,_A,vA),this.onWispFlash?.(1);return}this.state.alive=!1,this.timeline.finish(this.timelineInput()),this.death(e)}},this.particles),this.bossHooks.halfWidth=e.bounds.x/2,this.bossHooks.halfHeight=e.bounds.y/2,this.bossHooks.originX=e.originX,this.bossHooks.originY=e.originY,this.bossHooks.elapsed=e.elapsed,this.bosses.update(e.dt,this.enemies,this.bossHooks);let r=this.stats.get(`regen`);if(r>0&&this.state.health<this.state.maxHealth){let t=this.state.health;this.state.health=Math.min(this.state.maxHealth,this.state.health+r*e.dt),this.healedFrame+=this.state.health-t,this.meter.recordHealing(`regen`,`ui.meter.sources.regen`,7077790,this.state.health-t)}this.meter.update(e.dt),this.state.finale||this.timeline.update(e.dt,this.timelineInput()),this.enemies.tickNumbers(t),this.numbers.update(t),this.arcs.update(e.dt),this.shows.update(e.dt,this.enemies),this.forms.update(e.dt),this.synergies.update(this.context,e.dt),this.sparks.setAttractor(e.originX,e.originY),this.sparks.update(e.dt),this.bolts.update(e.dt);let i=this.currentSource;this.splinters.update(e.dt,this.enemies,this.particles,e.bounds,this.hitSplinter),this.currentSource=i,this.harvestTimer>0&&(this.harvestTimer-=e.dt,this.harvestTimer<=0&&(this.harvestStacks=0)),this.xpMotes.update(e.dt,e.originX,e.originY,this.particles),this.ownsParticles&&this.particles.update(e.dt),this.enemies.render(e.dt,this.bars),this.lastOriginX=e.originX,this.lastOriginY=e.originY,this.state.enemyCount=this.enemies.count,this.state.bosses=this.collectBosses(),this.state.buffs=this.buffs.snapshot(),this.state.boons=this.boons.snapshot()}setEffects(e){this.effects=Math.max(0,Math.min(1,e)),this.sparks.setVisibility(this.effects),this.particles.setVisibility(this.effects),this.forms.setVisibility(this.effects),this.arcs.setVisibility(this.effects),this.bolts.setVisibility(this.effects);for(let e of this.abilities)gk(e.object,this.effects);gk(this.splinters.object,this.effects),this.effects<=0&&this.shock.reset()}reset(){this.stats.reset(),this.applyChallengeStats(),this.meter.reset(),this.enemies.clear(),this.ownsParticles&&this.particles.clear(),this.xpMotes.clear(),this.numbers.clear(),this.arcs.clear(),this.shows.clear(),this.forms.clear(),this.synergies.clear(),this.buffs.clear(this.stats),this.boons.clear(this.stats),this.lastKills=0,this.sparks.clear(),this.bolts.clear(),this.splinters.clear(),this.harvestStacks=0,this.harvestTimer=0,this.springPool=0,this.springTimer=0,this.vigilTimer=0,this.titheCount=0,this.knellCount=0,this.echoing=!1,this.rebirthUsed=!1,this.state.maxHealth=Math.round(this.stats.get(`maxHealth`)),this.state.health=this.state.maxHealth,this.state.kills=0,this.state.won=!1,this.seen.clear(),this.seenStamp++,this.slain.clear(),this.slainStamp++,this.state.power=1,this.state.damageDealt=0,this.state.score=0,this.state.scoreCoef=1,this.scoreCoef=1,this.state.time=Math.min(this.startTime,DA),this.state.enemyCount=0,this.state.alive=!0,this.state.finale=!1,this.finaleTimer=0,this.finaleBossOut=!1,I.fadeMusic(1,.4),this.spawnTimer=0,this.bossIndex=$A(this.bossTimes,this.startTime),this.bossCount=this.bossIndex,this.bossCalled=!1,this.hordeIndex=ej(this.startTime),this.hordeCalled=!1,this.modeKind=-1,this.mode=null,this.modeLeft=0,this.hordeNotice=0,this.state.horde=null,this.waveCharge=0,this.waveRadius=-1,this.exhale=0,this.state.bosses=[],this.state.threat=this.challenges.effects.startThreat??0,this.invulnerable=0,this.autoShopTimer=0;for(let e of this.critChances.values())e.reset();this.state.talents=[],this.state.elements=[],this.state.activeElement=null,this.grantElements(this.forcedElements),this.state.bossesDefeated=0,this.bossesDefeated=0,this.timeline.reset(),this.elementTimer=0,this.crystalArmor=0,this.crystalTimer=0,this.lifestealHeat=0,this.extraMods=[],this.setLoadout(this.initialLoadout,!0),this.shop.reset(),this.configureAbilities()}applyChallengeStats(){let e=this.challenges.effects;e.maxHealth!==1&&this.stats.addPercent(`maxHealth`,(e.maxHealth-1)*100),e.damage!==1&&this.stats.addPercent(`damage`,(e.damage-1)*100),e.xpGain!==1&&this.stats.addPercent(`xpGain`,(e.xpGain-1)*100)}dispose(){for(let e of this.abilities)e.dispose();this.abilities=[],this.enemies.dispose(),this.ownsParticles&&this.particles.dispose(),this.xpMotes.dispose(),this.numbers.dispose(),this.arcs.dispose(),this.shows.dispose(),this.forms.dispose(),this.sparks.dispose(),this.bolts.dispose(),this.splinters.dispose(),this.bars.dispose(),this.boons.dispose()}retire(){this.state.alive&&(this.state.alive=!1,this.timeline.finish(this.timelineInput()),this.onPlayerDeath?.())}winRun(){this.state.alive&&(this.state.won=!0,this.state.alive=!1,this.timeline.finish(this.timelineInput()),this.onPlayerDeath?.())}death(e){this.particles.burst({x:e.originX,y:e.originY,color:16774870,count:340,speed:280,life:1.4,size:2,drag:1.1}),I.play(`death`),this.timeline.mark({t:this.state.time,kind:`death`,killer:this.meter.snapshot(`taken`).rows[0]?.label,threat:this.state.threat}),this.onPlayerDeath?.()}takeTalent(e){let t=Ue(e);if(!t)return;let n=this.state.talents.find(t=>t.id===e);Be(t,n?.rank??0)<=0||(n?n.rank+=1:this.state.talents.push({id:e,rank:1}),this.extraMods.push(t.mods),this.configureAbilities())}addElement(e){let t=this.state.elements.find(t=>t.id===e);t?t.rank+=1:this.state.elements.push({id:e,rank:1}),this.state.activeElement||(this.state.activeElement=e)}refreshStats(){this.state.power=this.stats.mult(`damage`);let e=this.state.maxHealth;this.state.maxHealth=Math.round(this.stats.get(`maxHealth`));let t=Math.max(0,this.state.maxHealth-e);this.state.health=Math.min(this.state.maxHealth,this.state.health+t),this.state.health=Math.max(1,Math.min(this.state.health,this.state.maxHealth))}onBought(e,t,n){let r=`id`in e?e.id:`stat`in e?e.stat:void 0;this.timeline.mark({t:this.state.time,kind:`buy`,id:e.kind,bought:r,label:t,price:n,threat:this.state.threat});let i=e.kind===`weapon`||e.kind===`talent`||e.kind===`element`;I.play(i?`traitTaken`:`perkTaken`)}grantElements(e){if(e?.length){for(let t of e)this.state.elements.push({id:t.id,rank:Math.max(1,t.rank??1)});this.state.activeElement=this.state.elements[0].id}}updateThreat(){let e=NO(this.state.time)*this.threatRamp,t=((this.challenges.effects.startThreat??0)+e)*this.stats.mult(`difficulty`);this.threat=ZO(t,e),this.worthPerKill=FO(this.threat.enemyHealth),this.pace=((this.challenges.effects.startThreat??0)+IO(this.state.time)*this.threatRamp)*this.stats.mult(`difficulty`);let n=this.threat;this.enemies.healthScale=this.threat.enemyHealth*this.challenges.effects.enemyHealth,this.enemies.damageScale=this.threat.enemyDamage,this.enemies.bossHealthScale=n.enemyHealth*this.challenges.effects.enemyHealth*(EA[this.bossCount]??1),this.enemies.bossDamageScale=n.enemyDamage,this.enemies.speedScale=this.threat.enemySpeed*this.challenges.effects.enemySpeed,this.enemies.armorBonus=this.threat.enemyArmor,this.enemies.knockbackResistBonus=this.threat.enemyKnockbackResist,this.enemies.controlResistBonus=this.threat.enemyControlResist,this.state.threat=t,this.scoreCoef=$O(t),this.state.scoreCoef=this.scoreCoef,this.state.enemyHealthScale=this.threat.enemyHealth,this.state.enemyDamageScale=this.threat.enemyDamage}bossBreakdown(e){let t=[],n=0;for(let r of this.meter.targetTotals(e)){let e=r.total-(this.bossShare.get(r.id)??0);e<=0||(t.push({id:r.id,label:r.label,amount:Math.round(e)}),n+=e)}let r=n*.01;return t.filter(e=>e.amount>=r).sort((e,t)=>t.amount-e.amount).slice(0,8)}timelineInput(){return{time:this.state.time,damage:this.state.damageDealt,kills:this.state.kills,sparks:this.state.sparksTotal,bought:this.state.bought,threat:this.state.threat,health:this.state.health,maxHealth:this.state.maxHealth,enemies:this.state.enemyCount,spawned:this.spawnedTotal,sources:this.meter.sourceTotals()}}bodyAlive(e,t){if(e===0)return!1;for(let n=0;n<this.enemies.capacity;n++)if(!(n===t||!this.enemies.alive[n])&&this.enemies.group[n]===e&&this.enemies.splitOff[n]!==1&&L[this.enemies.kind[n]].boss)return!0;return!1}countParts(){let e=new Map,t=this.enemies.liveSlots;for(let n=0;n<this.enemies.liveLength;n++){let r=t[n];if(!this.enemies.alive[r])continue;let i=this.enemies.owner[r];i<0||e.set(i,(e.get(i)??0)+1)}return e}collectBosses(){let e=new Map,t=null,n=this.enemies.liveSlots;for(let r=0;r<this.enemies.liveLength;r++){let i=n[r];if(!this.enemies.alive[i])continue;let a=L[this.enemies.kind[i]];if(!a.boss)continue;t??=this.countParts();let o=t.get(i)??0,s=this.enemies.statusOf(i),c=[];s.burn>0&&c.push({id:`burn`,stacks:s.burn}),s.freeze?c.push({id:`freeze`,stacks:0}):s.chill&&c.push({id:`chill`,stacks:0}),s.brand&&c.push({id:`brand`,stacks:0}),s.shred>0&&c.push({id:`shred`,stacks:s.shred});let l=e.get(a.id);if(l){l.health+=Math.max(0,this.enemies.hp[i]),l.maxHealth+=this.enemies.maxHp[i],l.parts+=o,l.maxParts+=a.parts?.count??0,l.bodies++,l.phase=Math.min(l.phase,this.enemies.phaseIndex[i]+1);for(let e of c){let t=l.statuses.find(t=>t.id===e.id);t?t.stacks=Math.max(t.stacks,e.stacks):l.statuses.push(e)}continue}e.set(a.id,{id:a.id,health:Math.max(0,this.enemies.hp[i]),maxHealth:this.enemies.maxHp[i],color:a.color,phase:this.enemies.phaseIndex[i]+1,phases:a.phases?.length??1,parts:o,maxParts:a.parts?.count??0,mystery:a.mystery===!0&&!this.known.has(a.id),bodies:1,statuses:c})}return[...e.values()]}beginFinale(){this.state.finale=!0,this.state.horde=null,this.modeLeft=0,this.hordeNotice=0,this.finaleTimer=0,this.finaleBossOut=!1,I.play(`endingTime`),I.fadeMusic(0,MA);for(let e=0;e<this.enemies.capacity;e++){if(!this.enemies.alive[e])continue;let t=L[this.enemies.kind[e]];t.id!==jA&&(this.clearTicks(e),this.particles.disintegrate(this.enemies.x[e],this.enemies.y[e],t.color,t.size,0,0,AA),this.enemies.kill(e))}}updateFinale(e){this.state.finale&&(this.finaleTimer+=e.dt,!this.finaleBossOut&&this.finaleTimer>=OA&&this.spawnFinaleBoss(e))}spawnFinaleBoss(e){let t=lt[jA];if(t===void 0)return;let n=L[t],r=n.speed*this.enemies.speedScale,i=RT.get(n.id),a=i?CT(n.size)*RT.frameAt(i,bT,0).aspect:n.size,o=e.originX+e.bounds.x/2+a/2-kA+r*5,s=this.enemies.spawn(t,o,e.originY);s<0||(this.enemies.spawning[s]=0,this.finaleBossOut=!0,this.timeline.mark({t:this.state.time,kind:`boss`,id:jA,label:`enemies.${jA}`,threat:this.state.threat}))}finaleLethal(e,t){if(!this.state.finale)return!1;let n=L[this.enemies.kind[e]];if(n.id!==jA)return!1;if(this.devFlags.god)return!0;let r=this.state.health;return this.state.health=0,this.meter.recordTaken(n.id,`enemies.${n.id}`,n.color,r),this.numbers.spawnPlayerDamage(t.originX,t.originY+14,r),I.play(`playerHit`),this.onPlayerHit?.(r),this.state.alive=!1,this.timeline.finish(this.timelineInput()),this.death(t),!0}spawn(e){if(this.state.finale)return;let t=this.devFlags.bosses&&!this.challenges.effects.noBosses,n=this.bossTimes[this.bossIndex],r=n!==void 0&&this.state.time>=n;if(r&&this.bossIndex++,t&&(r||this.bossCalled)){this.bossCalled=!1;let t=this.pickBoss();this.bossCount++;let n=L[lt[t]].pack??1,r=this.challenges.effects.bossPack??1;for(let i=0;i<r;i++){let r=++this.bossGroup;for(let i=0;i<n;i++)this.spawnAtEdge(e,lt[t],i,r)}I.play(`bossSpawned`),this.bossSince=this.state.time,this.bossShare=new Map(this.meter.targetTotals(t).map(e=>[e.id,e.total])),this.timeline.mark({t:this.state.time,kind:`boss`,id:t,label:`enemies.${t}`,threat:this.state.threat}),this.onBossSpawned?.()}if(this.hordeNotice>0&&(this.hordeNotice-=e.dt,this.hordeNotice<=0&&(this.state.horde=null)),!this.devFlags.spawns||(this.hordes(e),this.spawnTimer-=e.dt,this.spawnTimer>0))return;let i=this.state.time,a=this.mode&&this.modeLeft>0?tt[this.mode]:null;this.spawnTimer=Math.max(Ck,xk/(1+i/60*Sk))/(this.threat.spawnRate*this.challenges.effects.spawnRate*this.boons.spawnRate*(a?.pace??1));let o=this.liveBudget()*(a?.budget??1);if(this.enemies.count>=o)return;let s=a&&this.rng.next()<this.modeShare?this.modeKind:this.pickKind(i);this.spawnAtEdge(e,s)}liveBudget(){return Math.min(hk,Math.round(yk+this.pace*bk))}hordes(e){this.modeLeft>0&&(this.modeLeft-=e.dt);let t=ct[this.hordeIndex];if(!(t!==void 0&&this.state.time>=t.at)&&!this.hordeCalled)return;this.hordeCalled=!1;let n=t??ct[ct.length-1];this.hordeIndex=Math.min(this.hordeIndex+1,ct.length),this.launchHorde(e,n)}launchHorde(e,t){let n=lt[t.kind];if(n!==void 0){if(t.mode&&(this.modeKind=n,this.mode=t.mode,this.modeShare=t.share??tt[t.mode].share,this.modeLeft=t.duration??0),t.shape&&t.size){let r=L[n],i=hk-this.enemies.count,a=Math.min(i,Math.round(this.liveBudget()*(t.size??0))),o=this.rng.next(),s=this.rng.int(0,4),{x:c,y:l}=e.bounds;for(let i=0;i<a;i++){let u=t.shape===`ring`?nj((i+o)/a,c,l,r.size):tj(s,(i+this.rng.next())/a,c,l,r.size,this.rng.next()*r.size*3);this.spawnHordeBody(n,e.originX+u.x,e.originY+u.y)}}this.state.horde={kind:t.kind,event:t.mode??t.shape??`ring`},this.hordeNotice=t.mode?Math.max(wk,t.duration??0):wk,this.onHorde?.()}}spawnHordeBody(e,t,n){this.enemies.spawn(e,t,n)<0||this.particles.burst({x:t,y:n,color:L[e].color,count:Tk,speed:55,life:.5,size:1,drag:3.4})}pickTarget(e,t,n){let r=-1,i=1/0,a=1/0;for(let o=0;o<this.enemies.capacity;o++){if(!this.enemies.alive[o]||this.enemies.spawning[o]>0)continue;let s=this.enemies.x[o]-e,c=this.enemies.y[o]-t,l=L[this.enemies.kind[o]];if(l.invulnerable)continue;let u=Math.hypot(s,c)*(l.boss?ok:1);o===n&&(a=u),u<i&&(i=u,r=o)}return a<=i*sk?n:r}targetAt(e){return e<0||!this.enemies.alive[e]?null:{x:this.enemies.x[e],y:this.enemies.y[e]}}pickBoss(){if(rt.length===1)return rt[0];for(let e=0;e<6;e++){let e=rt[this.rng.int(0,rt.length)];if(e!==this.lastBoss)return this.lastBoss=e,e}return rt[this.rng.int(0,rt.length)]}spawnMinion(e,t,n){let r=lt[e];if(r===void 0||this.enemies.count>=1e4)return-1;this.spawnedTotal++;let i=L[r],a=Math.max(8,this.context.bounds.x/2-i.size*.5-2),o=Math.max(8,this.context.bounds.y/2-i.size*.5-2),s=this.enemies.spawn(r,ij(t,-a,a),ij(n,-o,o));return s<0?-1:(this.particles.burst({x:this.enemies.x[s],y:this.enemies.y[s],color:i.color,count:10,speed:70,life:.4,size:1,drag:3}),s)}spawnAtEdge(e,t,n=0,r=0){let i=L[t],a=rj(this.rng,e.bounds.x,e.bounds.y,i.size),o=e.originX+a.x,s=e.originY+a.y,c=this.enemies.spawn(t,o,s);c<0||(i.boss&&(this.enemies.group[c]=r,this.bossHooks.halfWidth=e.bounds.x/2,this.bossHooks.halfHeight=e.bounds.y/2,this.bossHooks.originX=e.originX,this.bossHooks.originY=e.originY,this.bosses.compose(c,this.enemies,this.bossHooks,n)),this.particles.burst({x:o,y:s,color:i.color,count:i.boss?60:16,speed:i.boss?90:55,life:.5,size:1,drag:3.4}))}pickKind(e){let t=0;for(let n of Qe)t+=ZA(n,e);let n=this.rng.next()*t;for(let t of Qe)if(n-=ZA(t,e),n<=0)return lt[t.kind];return lt.mote}split(e,t,n){let r=lt[e.kind];if(r===void 0)return;let i=L[r];for(let a=0;a<e.count;a++){let o=a/e.count*Math.PI*2+this.rng.next(),s=i.radius*1.6;this.enemies.spawn(r,t+Math.cos(o)*s,n+Math.sin(o)*s)}}queueWave(){this.waveCharge>0||this.waveRadius>=0||(this.waveCharge=dA,this.onWaveCharge?.(dA),I.play(`levelVacuum`),I.duck(1.3399999999999999))}waveBlast(){let e=this.lastOriginX,t=this.lastOriginY;this.onWaveBlast?.(),I.play(`levelBass`),I.play(`levelUp`),this.particles.burst({x:e,y:t,color:16765514,count:320,speed:1150,life:.85,size:1,drag:1.1}),this.particles.burst({x:e,y:t,color:nD(),count:460,speed:720,life:1.3,size:2,drag:.8}),this.particles.burst({x:e,y:t,color:16774870,count:340,speed:380,life:1.8,size:2,drag:.5}),this.healWisp(this.state.maxHealth),this.waveRadius=0,this.waveStruck.clear(),this.exhale=CA}breatheIn(e){this.vortex+=wA*e.dt;let t=bA*(1-(1-this.waveCharge/dA)*.55);for(let n=0;n<yA;n++)for(let r=0;r<xA;r++){let i=this.vortex+Math.PI*2*n/yA+(Math.random()-.5)*.35,a=t*(.85+Math.random()*.3);this.particles.burst({x:e.originX+Math.cos(i)*a,y:e.originY+Math.sin(i)*a,color:r%2==0?nD():16774870,count:1,speed:30,life:.45+Math.random()*.2,size:1,drag:.4,angle:i+Math.PI*.5,arc:.5,attract:520})}}breatheOut(e){this.exhale-=e.dt,this.vortex+=wA*e.dt;let t=Math.max(0,this.exhale/CA);for(let n=0;n<yA;n++)for(let r=0;r<SA;r++){if(Math.random()>t)continue;let i=this.vortex+Math.PI*2*n/yA+(Math.random()-.5)*.3,a=14+Math.random()*22;this.particles.burst({x:e.originX+Math.cos(i)*a,y:e.originY+Math.sin(i)*a,color:r%2==0?nD():16774870,count:1,speed:420+Math.random()*320,life:1.4+Math.random()*.8,size:1,drag:.28,angle:i+Math.PI*.42,arc:.4,attract:45})}}updateWave(e){let t=e.originX,n=e.originY;this.waveRadius+=fA*e.dt,this.waveHitting=!0,this.enemies.queryCircle(t,n,this.waveRadius,e=>{let r=this.enemies.stamp[e];if(this.waveStruck.has(r)||(this.waveStruck.add(r),L[this.enemies.kind[e]].boss||this.enemies.owner[e]>=0))return;let{killed:i}=this.enemies.damage(e,hA);i||this.enemies.knockback(e,t,n,gA)}),this.waveHitting=!1;let r=Math.PI*2/mA,i=Math.max(0,1-this.waveRadius/pA);for(let e=0;e<mA;e++){let a=e*r+this.waveRadius*.01;this.particles.burst({x:t+Math.cos(a)*this.waveRadius,y:n+Math.sin(a)*this.waveRadius,color:e%3==0?16774870:nD(),count:1,speed:140,life:.45+i*.7,size:2,drag:1.4,angle:a,arc:.5})}this.arcs.arc(t,n,this.waveRadius,0,Math.PI*2,{color:16774870,nodes:6,jitter:10,life:.1,weight:2}),this.shock.ring(t,n,this.waveRadius,i*i,_A,vA),this.waveRadius>pA&&(this.waveRadius=-1)}};function ZA(e,t){if(t<e.from)return 0;let n=t-e.from-(e.hold??0);return!e.fade||n<=0?e.weight:e.weight*Math.max(e.floor??0,.5**(n/e.fade))}function QA(e){let t=Math.max(1,Math.round(1/Math.max(.05,e))),n=[],r=0;for(let e of et){for(let i=1;i<=t;i++)n.push(r+(e-r)*i/t);r=e}return n}function $A(e,t){let n=e.findIndex(e=>e>t);return n<0?e.length:n}function ej(e){let t=ct.findIndex(t=>t.at>e);return t<0?ct.length:t}function tj(e,t,n,r,i,a=0){let o=i*.5+2,s=Math.max(8,n/2-o),c=Math.max(8,r/2-o),l=t*2-1,u=Math.min(a,s),d=Math.min(a,c);return e===0?{x:l*s,y:-c+d}:e===1?{x:s-u,y:l*c}:e===2?{x:-l*s,y:c-d}:{x:-s+u,y:-l*c}}function nj(e,t,n,r){let i=r*.5+2,a=Math.max(8,t/2-i)*2,o=Math.max(8,n/2-i)*2,s=[a,o,a,o],c=(e-Math.floor(e))*(a+o)*2;for(let e=0;e<3;e++){if(c<s[e])return tj(e,c/s[e],t,n,r);c-=s[e]}return tj(3,Math.min(1,c/o),t,n,r)}function rj(e,t,n,r){let i=r*.5+2,a=Math.max(8,t/2-i),o=Math.max(8,n/2-i);return e.next()*(a+o)<a?{x:(e.next()*2-1)*a,y:e.next()<.5?-o:o}:{x:e.next()<.5?-a:a,y:(e.next()*2-1)*o}}function ij(e,t,n){return e<t?t:e>n?n:e}var aj=.42;function oj(e,t={}){return uj([e],t)}function sj(e){let t=e.meter.snapshot(`damage`);return t.total<=0?`—`:t.rows.slice(0,3).map(e=>`${cj(e.label)} ${Math.round(e.value/t.total*100)}%`).join(` · `)}function cj(e){let t=e.split(`.`);return t.length>1?t[t.length-2]:e}function lj(e){let t=e.meter.snapshot(`taken`),n=t.rows[0];return!n||t.total<=0?{killer:`—`,killerShare:0}:{killer:n.label,killerShare:Math.round(n.value/t.total*100)}}function uj(e,t={}){let n=t.seconds??120,r=t.cursor??`sweep`,[i,a]=t.bounds??[632,313],o=new ue(i,a),s=t.startTime??0,c=new XA({seed:t.seed??`bench`,loadout:e,startTime:s,threatRamp:t.threatRamp??1,elements:t.elements,autoShop:!0}),l=1/60,u=Math.round(n/l),d=0,f=0,p=0,m=0,h=0,g=-1;for(let e=0;e<u;e++){if(d+=l,r===`sweep`)f=Math.cos(d*.9)*i*aj,p=Math.sin(d*1.37)*a*aj;else{g=c.pickTarget(0,0,g);let e=c.targetAt(g);if(e){let t=e.x-f,n=e.y-p,r=Math.hypot(t,n);r>7?(f+=t/r*7,p+=n/r*7):(f=e.x,p=e.y)}}let e=Math.hypot(f,p)||1;if(c.update({dt:l,elapsed:d,bounds:o,originX:0,originY:0,focusX:f,focusY:p,aimX:f/e,aimY:p/e,focusSpeed:Math.hypot(f-m,p-h)/l,taps:0,held:!1,pointerX:f,pointerY:p}),m=f,h=p,!c.state.alive)break}let _=c.state,v=_.time-s,y={id:e.join(`+`),name:e.map(e=>We(e)).join(` + `),cursor:r,kills:_.kills,killsPerSecond:_.kills/Math.max(1,v),damage:Math.round(_.damageDealt),dps:Math.round(_.damageDealt/Math.max(1,v)),bought:_.bought,survived:Math.round(v),health:Math.round(_.health),remaining:_.enemyCount,threat:Math.round(_.threat*10)/10,sources:sj(c),...lj(c)};return c.dispose(),y}function dj(e={}){let t=e.cursors??[`sweep`,`chase`];return dT.flatMap(n=>t.map(t=>oj(n.id,{...e,cursor:t})))}var fj={class:`h-full w-full overflow-auto bg-void-950 p-8 font-mono text-xs text-white/80`},pj={class:`mb-4 text-white/40`},mj={key:0,"data-testid":`bench-table`,class:`w-full max-w-3xl border-collapse`},hj={class:`py-1`},gj={class:`py-1 text-white/45`},_j={class:`py-1 text-right`},vj={class:`py-1 text-right font-mono text-white/70`},yj={class:`py-1 text-right`},bj={class:`py-1 text-right`},xj={class:`py-1 text-right`},Sj={class:`py-1 text-right`},Cj={class:`py-1 text-right`},wj={class:`py-1 text-right`},Tj={class:`py-1 pl-4 text-white/60`},Ej={class:`py-1 pl-4 text-white/50`},Dj={key:1,class:`text-white/40`},Oj=k({__name:`BenchmarkReport`,setup(e){let t=C([]),n=Number(new URLSearchParams(location.search).get(`benchSeconds`)??90),r=Number(new URLSearchParams(location.search).get(`t`)??0),a=Number(new URLSearchParams(location.search).get(`threatRamp`)??1),o=new URLSearchParams(location.search).get(`cursor`),s=new URLSearchParams(location.search).get(`combo`),l=new URLSearchParams(location.search).get(`elements`),u=l?l.split(`,`).map(e=>{let[t,n]=e.split(`:`);return{id:t,rank:Number(n??1)}}):void 0;return h(()=>{if(s){let e=o===`sweep`?`sweep`:`chase`;t.value=s.split(`;`).map(t=>uj(t.split(`,`),{seconds:n,startTime:r,threatRamp:a,cursor:e,elements:u}));return}t.value=dj({seconds:n,startTime:r,threatRamp:a,elements:u,cursors:o===`sweep`||o===`chase`?[o]:void 0})}),(e,a)=>(c(),y(`div`,fj,[a[1]||=f(`h1`,{class:`mb-1 text-lg text-lux`},`Баланс способностей`,-1),f(`p`,pj,` прогон `+g(b(n))+` с · старт волн с `+g(b(r))+` с · курсор ведёт автомат `,1),t.value.length?(c(),y(`table`,mj,[a[0]||=f(`thead`,{class:`text-white/40`},[f(`tr`,null,[f(`th`,{class:`border-b border-white/10 py-1 text-left`},`способность`),f(`th`,{class:`border-b border-white/10 py-1 text-left`},`курсор`),f(`th`,{class:`border-b border-white/10 py-1 text-right`},`убийств`),f(`th`,{class:`border-b border-white/10 py-1 text-right`},`дпс`),f(`th`,{class:`border-b border-white/10 py-1 text-right`},`уб/с`),f(`th`,{class:`border-b border-white/10 py-1 text-right`},`покупок`),f(`th`,{class:`border-b border-white/10 py-1 text-right`},`прожил`),f(`th`,{class:`border-b border-white/10 py-1 text-right`},`hp`),f(`th`,{class:`border-b border-white/10 py-1 text-right`},`осталось`),f(`th`,{class:`border-b border-white/10 py-1 text-right`},`угроза`),f(`th`,{class:`border-b border-white/10 py-1 text-left`},`чем бил`),f(`th`,{class:`border-b border-white/10 py-1 text-left`},`кто бил`)])],-1),f(`tbody`,null,[(c(!0),y(S,null,i(t.value,e=>(c(),y(`tr`,{key:`${e.id}-${e.cursor}`},[f(`td`,hj,g(e.name),1),f(`td`,gj,g(e.cursor===`sweep`?`вслепую`:`наводит`),1),f(`td`,_j,g(e.kills),1),f(`td`,vj,g(e.dps),1),f(`td`,yj,g(e.killsPerSecond.toFixed(2)),1),f(`td`,bj,g(e.bought),1),f(`td`,xj,g(e.survived)+`с`,1),f(`td`,Sj,g(e.health),1),f(`td`,Cj,g(e.remaining),1),f(`td`,wj,g(e.threat),1),f(`td`,Tj,g(e.sources),1),f(`td`,Ej,g(e.killer)+` `+g(e.killerShare)+`% `,1)]))),128))])])):(c(),y(`p`,Dj,`считаю…`))]))}}),kj={class:`flex items-baseline justify-between font-mono text-[10px] tracking-wider text-white/30 uppercase`},Aj=ut(k({__name:`BootVeil`,props:{percent:{},label:{},done:{type:Boolean}},setup(e){let{t}=x();return(n,r)=>(c(),p(b(ce).div,{initial:{opacity:1},animate:{opacity:+!e.done},transition:{duration:.32,ease:`easeOut`},class:s([`fixed inset-0 z-60 flex flex-col items-center justify-center gap-3 bg-void-950 font-ui`,e.done?`pointer-events-none`:`pointer-events-auto`])},{default:d(()=>[O(b(ce).div,{animate:{opacity:+!e.done},transition:{duration:.18,ease:`easeOut`},class:`w-full max-w-xs space-y-2 px-6`},{default:d(()=>[f(`div`,kj,[f(`span`,null,g(b(t)(e.label)),1),f(`span`,null,g(e.percent)+`%`,1)]),O(b(oe),{size:`xs`,value:e.percent,class:`boot-bar`},null,8,[`value`])]),_:1},8,[`animate`])]),_:1},8,[`animate`,`class`]))}}),[[`__scopeId`,`data-v-2be9862f`]]),jj=re(`cursor`,()=>{let e=C([]),t=C(`default`),n=1;function r(){let n=e.value[e.value.length-1];t.value=n?n.state:`default`}function i(t){let i=n++;return e.value=[...e.value,{id:i,state:t}],r(),()=>{e.value=e.value.filter(e=>e.id!==i),r()}}return{state:t,claim:i}}),Mj=[`src`],Nj=.05,Pj=.06,Fj=ut(k({__name:`GameCursor`,setup(e){let n=jj(),r=dt(),i=C(null),a=C(null),o=!1,s=!1,l=D(()=>nt(n.state)),u=D(()=>({width:`${r.state.cursorSize}px`,height:`${r.state.cursorSize}px`,filter:`hue-rotate(${r.state.cursorHue}deg) saturate(${r.state.cursorSaturation})`}));function d(e){document.documentElement.classList.toggle(`has-cursor`,e)}function p(){let e=i.value;if(!(!e||typeof e.showPopover!=`function`))try{e.matches(`:popover-open`)&&e.hidePopover(),e.showPopover()}catch{}}function m(e){o!==e&&(o=e,i.value?.classList.toggle(`is-shown`,e),d(e))}function g(e){s!==e&&(s=e,a.value?.classList.toggle(`is-pressed`,e))}function v(e){if(e.pointerType===`touch`){m(!1);return}m(!0);let t=i.value;if(!t)return;let n=r.state.cursorSize,a=e.clientX-n*Nj,o=e.clientY-n*Pj;t.style.transform=`translate3d(${a}px, ${o}px, 0)`}function b(){g(!1),m(!1)}let x=`onpointerrawupdate`in window;A(window,x?`pointerrawupdate`:`pointermove`,v,{passive:!0,capture:!0}),A(window,`pointerdown`,e=>{v(e),e.pointerType!==`touch`&&g(!0)},{passive:!0,capture:!0}),A(window,`pointerup`,()=>g(!1),{passive:!0,capture:!0}),A(window,`pointercancel`,()=>g(!1),{passive:!0,capture:!0}),A(document,`pointerleave`,b),A(window,`blur`,b);let S=new MutationObserver(()=>p());return h(()=>{p(),S.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`open`]})}),T(i,e=>{e?.classList.toggle(`is-shown`,o),p()}),_(()=>{S.disconnect(),d(!1)}),(e,n)=>l.value?(c(),y(`div`,{key:0,ref_key:`node`,ref:i,popover:`manual`,class:`game-cursor`},[f(`img`,{ref_key:`art`,ref:a,src:l.value,alt:``,"aria-hidden":`true`,draggable:`false`,class:`game-cursor__art`,style:t(u.value)},null,12,Mj)],512)):w(``,!0)}}),[[`__scopeId`,`data-v-feccf777`]]),Ij=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Lj=e=>e===``,Rj=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),zj=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Bj=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Vj=e=>{let t=Bj(e);return t.charAt(0).toUpperCase()+t.slice(1)},Hj={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},Uj=({name:e,iconNode:t,absoluteStrokeWidth:r,"absolute-stroke-width":i,strokeWidth:a,"stroke-width":o,size:s=Hj.width,color:c=Hj.stroke,...l},{slots:u})=>n(`svg`,{...Hj,...l,width:s,height:s,stroke:c,"stroke-width":Lj(r)||Lj(i)||r===!0||i===!0?Number(a||o||Hj[`stroke-width`])*24/Number(s):a||o||Hj[`stroke-width`],class:Rj(`lucide`,l.class,...e?[`lucide-${zj(Vj(e))}-icon`,`lucide-${zj(e)}`]:[`lucide-icon`]),...!u.default&&!Ij(l)&&{"aria-hidden":`true`}},[...t.map(e=>n(...e)),...u.default?[u.default()]:[]]),Wj=(e,t)=>(r,{slots:i,attrs:a})=>n(Uj,{...a,...r,iconNode:t,name:e},i),Gj=Wj(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),Kj=Wj(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),qj=Wj(`square`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]),Jj=Wj(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Yj={class:`no-drag flex h-full`},Xj=[`title`],Zj=ut(k({__name:`TitleBar`,setup(e){let t=window.desktop??null,n=dt(),r=D(()=>n.state.screenMode),i=C(!1),a=null;h(async()=>{if(!t)return;let e=await t.windowState();i.value=e.maximized,a=t.onWindowChange(e=>{i.value=e.maximized})}),_(()=>a?.());function o(){t?.command(`maximize`)}return(e,n)=>b(t)&&r.value===`windowed`?(c(),y(`header`,{key:0,class:`title-bar flex h-8 shrink-0 items-center justify-between border-b border-white/5 bg-void-950/95 pl-3 select-none`,onDblclick:o},[n[3]||=f(`span`,{class:`text-[11px] tracking-[0.22em] text-ink/45 uppercase`},` Wispbringer `,-1),f(`div`,Yj,[f(`button`,{class:`grid h-full w-11 place-items-center text-ink/55 transition-colors hover:bg-white/8 hover:text-ink`,title:`Свернуть`,onClick:n[0]||=e=>b(t).command(`minimize`)},[O(b(Kj),{size:15})]),f(`button`,{class:`grid h-full w-11 place-items-center text-ink/55 transition-colors hover:bg-white/8 hover:text-ink`,title:i.value?`Восстановить`:`Развернуть`,onClick:n[1]||=e=>b(t).command(`maximize`)},[i.value?(c(),p(b(Gj),{key:0,size:13})):(c(),p(b(qj),{key:1,size:12}))],8,Xj),f(`button`,{class:`grid h-full w-11 place-items-center text-ink/55 transition-colors hover:bg-alarm hover:text-white`,title:`Закрыть`,onClick:n[2]||=e=>b(t).command(`close`)},[O(b(Jj),{size:15})])])],32)):w(``,!0)}}),[[`__scopeId`,`data-v-2e302882`]]),Qj=[{id:`shop`,label:`ui.actions.shop`,devices:[`keys`,`pad`],keys:[`KeyE`,`Space`],pad:[`y`]},{id:`pause`,label:`ui.actions.pause`,devices:[`keys`,`pad`],keys:[`Escape`],pad:[`start`]},{id:`confirm`,label:`ui.actions.confirm`,devices:[`pad`],keys:[],pad:[`a`],vital:!0},{id:`back`,label:`ui.actions.back`,devices:[`pad`],keys:[],pad:[`b`],vital:!0}],$j=new Map(Qj.map(e=>[e.id,e]));function eM(e){return e===`Tab`||e.startsWith(`Meta`)||/^F\d{1,2}$/.test(e)}function tM(e){let t=/^Key([A-Z])$/.exec(e);if(t)return t[1];let n=/^Digit(\d)$/.exec(e);if(n)return n[1];let r=/^Numpad(\d)$/.exec(e);return r?`Num ${r[1]}`:rM[e]??e}function nM(e){return iM[e]??null}var rM={Backquote:"`",Minus:`-`,Equal:`=`,BracketLeft:`[`,BracketRight:`]`,Semicolon:`;`,Quote:`'`,Comma:`,`,Period:`.`,Slash:`/`,Backslash:`\\`},iM={Space:`ui.keys.space`,Escape:`ui.keys.escape`,Enter:`ui.keys.enter`,Backspace:`ui.keys.backspace`,Delete:`ui.keys.delete`,ArrowUp:`ui.keys.up`,ArrowDown:`ui.keys.down`,ArrowLeft:`ui.keys.left`,ArrowRight:`ui.keys.right`,ShiftLeft:`ui.keys.shift`,ShiftRight:`ui.keys.shift`,ControlLeft:`ui.keys.ctrl`,ControlRight:`ui.keys.ctrl`,AltLeft:`ui.keys.alt`,AltRight:`ui.keys.alt`},aM=re(`bindings`,()=>{let t=De(),n=te(`wispbringer:bindings`,{keys:{},pad:{}},localStorage,{mergeDefaults:!0});function r(e){return n.value.keys[e]??$j.get(e)?.keys??[]}function i(e){return n.value.pad[e]??$j.get(e)?.pad??[]}let a=D(()=>Object.keys(n.value.keys).length>0||Object.keys(n.value.pad).length>0),o=D(()=>{let e=new Map;for(let t of Qj)for(let n of r(t.id))e.set(n,t.id);return e}),s=D(()=>{let e=new Map;for(let t of Qj)for(let n of i(t.id))e.set(n,t.id);return e});function c(e,t,r){e===`keys`?n.value.keys[t]=r:n.value.pad[t]=r}function l(e,t,n){return(e===`keys`?r(t):i(t)).filter(e=>e!==n)}function u(e,t,n,r){if(e===`keys`&&eM(r))return`reserved`;let i=e===`keys`?o.value.get(r):s.value.get(r);if(i&&i!==t){let t=l(e,i,r);if(t.length===0&&$j.get(i)?.vital)return`vital`;c(e,i,t)}let a=l(e,t,r);for(;a.length<2;)a.push(``);return a[Math.min(n,1)]=r,c(e,t,a.filter(e=>e!==``).slice(0,2)),`ok`}function d(e,t,n){let a=[...e===`keys`?r(t):i(t)];return a[n]===void 0?`ok`:(a.splice(n,1),a.length===0&&$j.get(t)?.vital?`vital`:(c(e,t,a),`ok`))}function f(){n.value={keys:{},pad:{}}}let p=new Map;function m(t,n){let r=p.get(t);r||(r=new Set,p.set(t,r)),r.add(n);let i=()=>void r?.delete(n);return e()&&E(i),i}function h(e){let t=p.get(e);if(!t||t.size===0)return!1;for(let e of[...t].reverse())if(e()===!0)break;return!0}function g(e){return e instanceof HTMLElement?e.isContentEditable?!0:/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName):!1}function _(e){if(e.code!==`Space`&&e.code!==`Enter`)return!1;let t=document.activeElement;return!(t instanceof HTMLElement)||t===document.body?!1:t.matches(`button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])`)}return A(window,`keydown`,e=>{if(e.repeat||t.capturing||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey||g(e.target)||_(e))return;let n=o.value.get(e.code);n&&h(n)&&e.preventDefault()}),t.onPress(e=>{let t=s.value.get(e);t&&h(t)}),{touched:a,keysFor:r,padFor:i,assign:u,clear:d,reset:f,onAction:m}}),oM=[`button:not([disabled])`,`a[href]`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`, `),sM={up:`up`,down:`down`,left:`left`,right:`right`};function cM(){let e=De(),t=aM();T(()=>e.source,e=>{document.documentElement.dataset.pad=e===`pad`?`on`:``},{immediate:!0});function n(){let e=[...document.querySelectorAll(`dialog[open]`)],t=document.activeElement;return[...(e.find(e=>t!==null&&e.contains(t))??e[e.length-1]??document).querySelectorAll(oM)].filter(e=>{if(e.offsetParent===null)return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0})}function r(e){let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}function i(e){let t=n();if(t.length===0)return;let i=document.activeElement;if(!(i instanceof HTMLElement)||!t.includes(i)){t[0].focus();return}let a=r(i),o=e===`left`||e===`right`,s=e===`right`||e===`down`?1:-1,c=null,l=1/0;for(let e of t){if(e===i)continue;let t=r(e),n=(o?t.x-a.x:t.y-a.y)*s;if(n<=1)continue;let u=n+Math.abs(o?t.y-a.y:t.x-a.x)*3;u<l&&(l=u,c=e)}c?.focus()}function a(){(document.activeElement??document.body).dispatchEvent(new KeyboardEvent(`keydown`,{key:`Escape`,code:`Escape`,bubbles:!0,cancelable:!0})),window.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Escape`,code:`Escape`}))}function o(e){let t=document.activeElement;return!(t instanceof HTMLElement)||t.getAttribute(`role`)!==`slider`?!1:(t.dispatchEvent(new KeyboardEvent(`keydown`,{key:e===`left`?`ArrowLeft`:`ArrowRight`,bubbles:!0,cancelable:!0})),!0)}function s(e){let t=document.activeElement;return!(t instanceof HTMLElement)||t.getAttribute(`role`)!==`switch`?!1:(t.getAttribute(`aria-checked`)===`true`!=(e===`right`)&&t.click(),!0)}let c=0;function l(t,n){window.clearTimeout(c);let r=i=>{c=window.setTimeout(()=>{!e.held.has(t)||!o(n)||r(70)},i)};r(380)}let u=.5,d=!1,f=0,p=ae(()=>{let t=e.source===`pad`?e.aim.x:0,n=Math.min(1,Math.abs(t));if(n<(d?.3:u)){d=!1,f=0;return}let r=t<0?`left`:`right`,i=!d;if(d=!0,i&&s(r))return;let a=performance.now();if(a<f||!o(r))return;let c=(n-u)/.5;f=a+150-120*c},{immediate:!1});T(()=>e.connected,e=>e?p.resume():p.pause(),{immediate:!0}),e.onPress(e=>{let t=sM[e];if(t){if(t===`left`||t===`right`){if(o(t)){l(e,t);return}if(s(t))return}i(t)}}),t.onAction(`confirm`,()=>{let e=document.activeElement;e instanceof HTMLElement?e.click():n()[0]?.focus()}),t.onAction(`back`,a)}var lM={wave:{pattern:[420,40,240,55,150,75,95,95,55,115,30],rumble:[{duration:520,strong:1,weak:1},{duration:380,strong:.45,weak:.22}]},hit:{pattern:[55],rumble:[{duration:150,strong:.9,weak:.45}]},death:{pattern:[140,55,80,55,480,80,260,110,170,150,80],rumble:[{duration:760,strong:1,weak:.55},{duration:560,strong:.4,weak:.14}]},bossIn:{pattern:[70,90,70],rumble:[{duration:150,strong:.95,weak:.5},{duration:90,strong:0,weak:0},{duration:190,strong:.95,weak:.5}]},bossDown:{pattern:[140,50,90,70,50,90,28],rumble:[{duration:300,strong:.9,weak:.8},{duration:320,strong:.32,weak:.16}]},pick:{pattern:[70],rumble:[{duration:180,strong:.75,weak:.95}]},tap:{pattern:[12],rumble:[{duration:45,strong:.12,weak:.6}]}};function uM(e){return lM[e].rumble.reduce((e,t)=>e+t.duration*Math.max(t.strong,t.weak),0)}function dM(e,t){let n=Math.max(0,Math.min(1,t));return e.map((e,t)=>t%2==0?Math.max(1,Math.round(e*n)):e)}function fM(e,t){let n=Math.max(0,Math.min(1,t));return e.map(e=>({duration:e.duration,strong:e.strong*n,weak:e.weak*n}))}var pM=200,mM=0,hM=0,gM=0,_M=e=>new Promise(t=>setTimeout(t,e));function vM(){let e=dt(),t=De(),{vibrate:n,isSupported:r}=ie();function i(){let e=t.pad?.vibrationActuator;return typeof e?.playEffect==`function`?e:null}async function a(t){if(!i())return;let n=fM(lM[t].rumble,e.state.hapticStrength),r=++mM;for(let e of n){if(r!==mM)return;let t=i();if(!t)return;try{await Promise.all([t.playEffect(`dual-rumble`,{startDelay:0,duration:e.duration,strongMagnitude:e.strong,weakMagnitude:e.weak}),_M(e.duration)])}catch{return}}}function o(t){if(e.state.hapticStrength<=0)return;let i=performance.now(),o=uM(t);i-hM<pM&&o<gM||(hM=i,gM=o,e.state.vibrate&&r.value&&n(dM(lM[t].pattern,e.state.hapticStrength)),e.state.padRumble&&a(t))}return{haptic:o}}var yM=[`button:not([disabled])`,`[role="button"]`,`a[href]`,`summary`,`label:has(input:not([disabled]))`].join(`, `),bM=80;function xM(){let{haptic:e}=vM(),t=0,n=n=>{let r=n.target;if(!(r instanceof Element)||!r.closest(yM))return;let i=performance.now();i-t<bM||(t=i,e(`tap`))};A(window,`pointerdown`,n,{capture:!0,passive:!0}),A(window,`click`,n,{capture:!0,passive:!0})}function SM(){let e=dt();a(()=>{let t=document.documentElement;t.style.setProperty(`--ui-opacity`,String(e.state.uiOpacity)),t.style.setProperty(`--ui-blur`,`${e.state.uiBlur}px`),t.classList.toggle(`ui-blurred`,e.state.uiBlur>0)})}async function CM(e,t){let n=e.reduce((e,t)=>e+(t.weight??1),0),r=0;for(let i of e){t({ratio:n>0?r/n:1,label:i.label});try{await i.run()}catch{}r+=i.weight??1}t({ratio:1,label:`ui.boot.ready`})}function wM(){return new Promise(e=>requestAnimationFrame(()=>e()))}function TM(e){return new Promise(t=>{let n=new Image;n.onload=()=>{let e=n.decode?.();e?e.then(t,()=>t()):t()},n.onerror=()=>t(),n.src=e})}async function EM(e){await fetch(e,{cache:`force-cache`})}var DM=.4,OM=re(`launch`,()=>{let e=C(0),t=v(`ui.boot.wait`),n=C(!1),r=C(!1),i=C(!1),a=0;function o(){window.clearTimeout(a),e.value=0,t.value=`ui.boot.wait`,r.value=!1,i.value=!1,n.value=!0}async function s(r,i,a){n.value||o(),await CM(r,n=>{let r=i+n.ratio*(a-i);e.value=Math.max(e.value,Math.round(r*100)),t.value=n.label})}function c(){i.value=!0}function l(){e.value=100,r.value=!0,window.clearTimeout(a),a=window.setTimeout(()=>n.value=!1,380)}return{percent:e,label:t,visible:n,done:r,preloaded:i,begin:o,run:s,loaded:c,finish:l}}),kM={class:`flex h-full flex-col`},AM={class:`relative min-h-0 flex-1`},jM=k({__name:`App`,setup(e){let t=dt();cM(),xM(),SM();let n=OM();T(()=>t.state.screenMode,e=>window.desktop?.setScreenMode(e),{immediate:!0});let r=new URLSearchParams(location.search).get(`bench`)===`1`;return A(window,[`pointerdown`,`keydown`],()=>I.unlock(),{once:!0}),T(()=>[t.state.soundVolume,t.state.effectsVolume,t.state.uiVolume,t.state.musicVolume],([e,t,n,r])=>{I.setVolume(e),I.setEffectsVolume(t),I.setUiVolume(n),I.setMusicVolume(r)},{immediate:!0}),T(()=>t.state.musicReaction,e=>I.setMusicReaction(e),{immediate:!0}),T(()=>t.state.musicTrack,e=>void I.setMusic(e),{immediate:!0}),(e,t)=>{let i=l(`RouterView`);return c(),y(S,null,[f(`div`,kM,[O(Zj),f(`div`,AM,[r?(c(),p(Oj,{key:0})):(c(),p(i,{key:1}))])]),b(n).visible?(c(),p(Aj,{key:0,percent:b(n).percent,label:b(n).label,done:b(n).done},null,8,[`percent`,`label`,`done`])):w(``,!0),O(Fj)],64)}}}),MM=e=>e.startsWith(`/`);function NM(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function PM(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&NM(e.default)}var $=Object.assign;function FM(e,t){let n={};for(let r in t){let i=t[r];n[r]=LM(i)?i.map(e):e(i)}return n}var IM=()=>{},LM=Array.isArray;function RM(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var zM=Symbol(``);function BM(e,t){return $(Error(),{type:e,[zM]:!0},t)}function VM(e,t){return e instanceof Error&&zM in e&&(t==null||!!(e.type&t))}var HM=Symbol(``),UM=Symbol(``),WM=Symbol(``),GM=Symbol(``),KM=Symbol(``);function qM(){return u(WM)}function JM(e){return u(GM)}var YM=typeof document<`u`,XM=/#/g,ZM=/&/g,QM=/\//g,$M=/=/g,eN=/\?/g,tN=/\+/g,nN=/%5B/g,rN=/%5D/g,iN=/%5E/g,aN=/%60/g,oN=/%7B/g,sN=/%7C/g,cN=/%7D/g,lN=/%20/g;function uN(e){return e==null?``:encodeURI(``+e).replace(sN,`|`).replace(nN,`[`).replace(rN,`]`)}function dN(e){return uN(e).replace(oN,`{`).replace(cN,`}`).replace(iN,`^`)}function fN(e){return uN(e).replace(tN,`%2B`).replace(lN,`+`).replace(XM,`%23`).replace(ZM,`%26`).replace(aN,"`").replace(oN,`{`).replace(cN,`}`).replace(iN,`^`)}function pN(e){return fN(e).replace($M,`%3D`)}function mN(e){return uN(e).replace(XM,`%23`).replace(eN,`%3F`)}function hN(e){return mN(e).replace(QM,`%2F`)}function gN(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var _N=/\/$/,vN=e=>e.replace(_N,``);function yN(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=DN(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:gN(o)}}function bN(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function xN(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function SN(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&CN(t.matched[r],n.matched[i])&&wN(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function CN(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wN(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!TN(e[n],t[n]))return!1;return!0}function TN(e,t){return LM(e)?EN(e,t):LM(t)?EN(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function EN(e,t){return LM(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function DN(e,t){if(MM(e))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var ON={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function kN(e){if(!e){if(YM){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),vN(e)}var AN=/^[^#]+#/;function jN(e,t){return e.replace(AN,`#`)+t}function MN(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var NN=()=>history.scrollRestoration===`manual`?{left:window.scrollX,top:window.scrollY}:null;function PN(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=MN(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function FN(e,t){return(history.state?history.state.position-t:-1)+e}var IN=new Map;function LN(e){IN.set(e,NN())}function RN(e){let t=IN.get(e);return IN.delete(e),t}function zN(e){return typeof e==`string`||e&&typeof e==`object`}function BN(e){return typeof e==`string`||typeof e==`symbol`}function VN(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(tN,` `),i=r.indexOf(`=`),a=gN(i<0?r:r.slice(0,i)),o=i<0?null:gN(r.slice(i+1));if(a in t){let e=t[a];LM(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function HN(e){let t=``;for(let n in e){let r=e[n];if(n=pN(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(LM(r)?r.map(e=>e&&fN(e)):[r&&fN(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function UN(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=LM(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function WN(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function GN(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(BM(4,{from:n,to:t})):e instanceof Error?c(e):zN(e)?c(BM(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function KN(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e])){if(NM(s)){let c=(s.__vccOpts||s)[t];c&&a.push(GN(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=PM(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&GN(c,n,r,o,e,i)()}))}}}return a}function qN(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>CN(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>CN(e,s))||i.push(s))}return[n,r,i]}var JN=()=>location.protocol+`//`+location.host;function YN(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),xN(n,``)}return xN(n,e)+r+i}function XN(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=YN(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){let{history:e}=window;e.state&&e.replaceState($({},e.state,{scroll:NN()}),``)}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),{pauseListeners:c,listen:l,destroy:d}}function ZN(e,t,n,r=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:null}}function QN(e){let{history:t,location:n}=window,r={value:YN(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:JN()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,$({},t.state,ZN(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=$({},i.value,t.state,{forward:e,scroll:NN()});a(o.current,o,!0),a(e,$({},ZN(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function $N(e){e=kN(e);let t=QN(e),n=XN(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=$({location:``,base:e,go:r,createHref:jN.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function eP(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),$N(e)}var tP={type:0,value:``},nP=/[a-zA-Z0-9_]/;function rP(e){if(!e)return[[]];if(e===`/`)return[[tP]];if(!MM(e))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:nP.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var iP=`[^/]+?`,aP={sensitive:!1,strict:!1,start:!0,end:!0},oP=/[.+*?^${}()[\]/\\]/g;function sP(e,t){let n=$({},aP,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(oP,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||iP;if(u!==iP){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(LM(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=LM(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function cP(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function lP(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=cP(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(uP(r))return 1;if(uP(i))return-1}return i.length-r.length}function uP(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var dP={strict:!1,end:!0,sensitive:!1};function fP(e,t,n){let r=$(sP(rP(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function pP(e,t){let n=[],r=new Map;t=RM(dP,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=hP(e);s.aliasOf=r&&r.record;let l=RM(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(hP($({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&!MM(u)){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=fP(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!_P(d)&&o(e.name)),xP(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:IM}function o(e){if(BN(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=yP(e,n);n.splice(t,0,e),e.record.name&&!_P(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw BM(1,{location:e});s=i.record.name,a=$(mP(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&mP(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw BM(1,{location:e,currentLocation:t});s=i.record.name,a=$({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:vP(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function mP(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function hP(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gP(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gP(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function _P(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vP(e){return e.reduce((e,t)=>$(e,t.meta),{})}function yP(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;lP(e,t[i])<0?r=i:n=i+1}let i=bP(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function bP(e){let t=e;for(;t=t.parent;)if(xP(t)&&lP(e,t)===0)return t}function xP({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function SP(e){let t=u(WM),n=u(GM),r=D(()=>{let n=b(e.to);return t.resolve(n)}),i=D(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(CN.bind(null,i));if(o>-1)return o;let s=DP(e[t-2]);return t>1&&DP(i)===s&&a[a.length-1].path!==s?a.findIndex(CN.bind(null,e[t-2])):o}),a=D(()=>i.value>-1&&EP(n.params,r.value.params)),o=D(()=>i.value>-1&&i.value===n.matched.length-1&&wN(n.params,r.value.params));function s(n={}){if(TP(n)){let n=t[b(e.replace)?`replace`:`push`](b(e.to)).catch(IM);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:D(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function CP(e){return e.length===1?e[0]:e}var wP=k({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:SP,setup(e,{slots:t}){let r=m(SP(e)),{options:i}=u(WM),a=D(()=>({[OP(e.activeClass,i.linkActiveClass,`router-link-active`)]:r.isActive,[OP(e.exactActiveClass,i.linkExactActiveClass,`router-link-exact-active`)]:r.isExactActive}));return()=>{let i=t.default&&CP(t.default(r));return e.custom?i:n(`a`,{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},i)}}});function TP(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function EP(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!LM(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function DP(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var OP=(e,t,n)=>e??t??n,kP=k({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){let a=u(KM),o=D(()=>e.route||a.value),s=u(UM,0),c=D(()=>{let e=b(s),{matched:t}=o.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),l=D(()=>o.value.matched[c.value]);r(UM,D(()=>c.value+1)),r(HM,l),r(KM,o);let d=C();return T(()=>[d.value,l.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!CN(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=o.value,a=e.name,s=l.value,c=s&&s.components[a];if(!c)return AP(i.default,{Component:c,route:r});let u=s.props[a],f=u?u===!0?r.params:typeof u==`function`?u(r):u:null,p=n(c,$({},f,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[a]=null)},ref:d}));return AP(i.default,{Component:p,route:r})||p}}});function AP(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var jP=kP;function MP(e){let t=pP(e.routes,e),n=e.parseQuery||VN,r=e.stringifyQuery||HN,i=e.history,a=WN(),s=WN(),c=WN(),l=v(ON),u=v(0),d=ON;YM&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let f=FM.bind(null,e=>``+e),p=FM.bind(null,hN),m=FM.bind(null,gN);function h(e,n){let r,i;BN(e)?(r=t.getRecordMatcher(e),i=n):i=e;let a=t.addRoute(i,r);return u.value++,()=>{a(),u.value++}}function g(e){let n=t.getRecordMatcher(e);n&&(t.removeRoute(n),u.value++)}function _(){t.clearRoutes(),u.value++}function y(){return t.getRoutes().map(e=>e.record)}function x(e){return!!t.getRecordMatcher(e)}function S(e,a){if(u.value,typeof e==`string`){a||=e.startsWith(`/`)?ON:l.value;let r=yN(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return $(r,o,{params:m(o.params),redirectedFrom:void 0,href:s})}a=$({},a||(e.path!=null&&e.path.startsWith(`/`)&&!(`name`in e&&e.name)?ON:l.value));let o;if(e.path!=null)o=$({},e,{path:yN(n,e.path,a.path).path});else{let t=$({},e.params);for(let e in t)t[e]??delete t[e];o=$({},e,{params:p(t)}),a.params=p(a.params)}let s=t.resolve(o,a),c=e.hash||``;s.params=f(m(s.params));let d=bN(r,$({},e,{hash:dN(c),path:s.path})),h=i.createHref(d);return $({fullPath:d,hash:c,query:r===HN?UN(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function C(e){return typeof e==`string`?yN(n,e,l.value.path):$({},e)}function w(e,t){if(d!==e)return BM(8,{from:t,to:e})}function T(e){return O(e)}function E(e){return T($(C(e),{replace:!0}))}function D(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=C(i):{path:i},i.params={}),$({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function O(e,t){let n=d=S(e),i=l.value,a=e.state,o=e.force,s=e.replace===!0,c=D(n,i);if(c)return O($(C(c),{state:typeof c==`object`?$({},a,c.state):a,force:o,replace:s}),t||n);let u=n;u.redirectedFrom=t;let f;return!o&&SN(r,i,n)&&(f=BM(16,{to:u,from:i}),de(i,i,!0,!1)),(f?Promise.resolve(f):ne(u,i)).catch(e=>VM(e)?VM(e,2)?e:ue(e):le(e,u,i)).then(e=>{if(e){if(VM(e,2))return O($({replace:s},C(e.to),{state:typeof e.to==`object`?$({},a,e.to.state):a,force:o}),t||u)}else e=ie(u,i,!0,s,a);return re(u,i,e),e})}function k(e,t){let n=w(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=M.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ne(e,t){let n,[r,i,o]=qN(e,t);n=KN(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(GN(r,e,t))});let c=k.bind(null,e,t);return n.push(c),he(n).then(()=>{n=[];for(let r of a.list())n.push(GN(r,e,t));return n.push(c),he(n)}).then(()=>{n=KN(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(GN(r,e,t))});return n.push(c),he(n)}).then(()=>{n=[];for(let r of o)if(r.beforeEnter){if(LM(r.beforeEnter))for(let i of r.beforeEnter)n.push(GN(i,e,t));else n.push(GN(r.beforeEnter,e,t))}return n.push(c),he(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=KN(o,`beforeRouteEnter`,e,t,te),n.push(c),he(n))).then(()=>{n=[];for(let r of s.list())n.push(GN(r,e,t));return n.push(c),he(n)}).catch(e=>VM(e,8)?e:Promise.reject(e))}function re(e,t,n){c.list().forEach(r=>te(()=>r(e,t,n)))}function ie(e,t,n,r,a){let o=w(e,t);if(o)return o;let s=t===ON,c=YM?history.state:{};n&&(r||s?i.replace(e.fullPath,$({scroll:s&&c&&c.scroll},a)):i.push(e.fullPath,a)),l.value=e,de(e,t,n,s),ue()}let A;function ae(){A||=i.listen((e,t,n)=>{if(!me.listening)return;let r=S(e),a=D(r,me.currentRoute.value);if(a){O($(a,{replace:!0,force:!0}),r).catch(IM);return}d=r;let o=l.value;YM&&n.delta&&LN(FN(o.fullPath,n.delta)),ne(r,o).catch(e=>VM(e,12)?e:VM(e,2)?(O($(C(e.to),{force:!0}),r).then(e=>{VM(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(IM),Promise.reject()):(n.delta&&i.go(-n.delta,!1),le(e,r,o))).then(e=>{e||=ie(r,o,!1),e&&(n.delta&&!VM(e,8)?i.go(-n.delta,!1):n.type===`pop`&&VM(e,20)&&i.go(-1,!1)),re(r,o,e)}).catch(IM)})}let oe=WN(),se=WN(),ce;function le(e,t,n){ue(e);let r=se.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function j(){return ce&&l.value!==ON?Promise.resolve():new Promise((e,t)=>{oe.add([e,t])})}function ue(e){return ce||(ce=!e,ae(),oe.list().forEach(([t,n])=>e?n(e):t()),oe.reset()),e}function de(t,n,r,i){let{scrollBehavior:a}=e;if(!YM||!a)return Promise.resolve();let s=!r&&RN(FN(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return o().then(()=>a(t,n,s)).then(e=>t===l.value&&e&&PN(e)).catch(e=>t===l.value&&le(e,t,n))}let fe=e=>i.go(e),pe,M=new Set,me={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:_,hasRoute:x,getRoutes:y,resolve:S,options:e,push:T,replace:E,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:a.add,beforeResolve:s.add,afterEach:c.add,onError:se.add,isReady:j,install(e){e.component(`RouterLink`,wP),e.component(`RouterView`,jP),e.config.globalProperties.$router=me,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>b(l)}),YM&&!pe&&l.value===ON&&(pe=!0,T(i.location).catch(e=>{}));let t={};for(let e in ON)Object.defineProperty(t,e,{get:()=>l.value[e],enumerable:!0});e.provide(WM,me),e.provide(GM,ee(t)),e.provide(KM,l);let n=e.unmount;M.add(e),e.unmount=function(){M.delete(e),M.size<1&&(d=ON,A&&A(),A=null,l.value=ON,pe=!1,ce=!1),n()}}};function he(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return me}var NP=`modulepreload`,PP=function(e){return`/WispbringerDemo/`+e},FP={},IP=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=PP(t,n),t=s(t),t in FP)return;FP[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:NP,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},LP=MP({history:window.location.protocol===`file:`?eP():$N(`/WispbringerDemo/`),routes:[{path:`/`,name:`intro`,component:()=>IP(()=>import(`./IntroView-CkJ8MoRN.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]))},{path:`/menu`,component:()=>IP(()=>import(`./MenuLayout-CiaGyZOo.js`),__vite__mapDeps([8,1,2,9,4,10,3,5,6,11,12])),children:[{path:``,redirect:{name:`play`}},{path:`play`,name:`play`,component:()=>IP(()=>import(`./PlayView-BElE9P94.js`),__vite__mapDeps([13,1,2,5,3,6,14]))},{path:`trials`,name:`trials`,component:()=>IP(()=>import(`./TrialsView-p4Nuj4i4.js`),__vite__mapDeps([15,1,2,16,5,3,17,6,18,14]))},{path:`achievements`,name:`achievements`,component:()=>IP(()=>import(`./AchievementsView-DdfNpEM6.js`),__vite__mapDeps([19,1,2,20,16,21,6,18]))},{path:`collection`,name:`collection`,component:()=>IP(()=>import(`./CollectionView-cY6RjH4X.js`).then(e=>e.n),__vite__mapDeps([22,1,2,20,3,4,23,24,5,6,11,9,18,25])),meta:{ownScroll:!0}},{path:`settings`,name:`settings`,component:()=>IP(()=>import(`./SettingsView-0Ai_Y0To.js`),__vite__mapDeps([26,1,27,2,9,4,20,3,16,23,24,5,17,6,28])),meta:{ownScroll:!0}},{path:`about`,name:`about`,component:()=>IP(()=>import(`./AboutView-BlIQAAx3.js`),__vite__mapDeps([29,1,30]))}]},{path:`/game`,name:`game`,component:()=>IP(()=>import(`./GameView-CR12CuJv.js`),__vite__mapDeps([31,22,1,2,20,3,4,23,24,5,6,11,9,18,25,10,27,16,17,28,21,30,14,32]))},{path:`/:pathMatch(.*)*`,redirect:`/`}]}),RP=!1;LP.beforeEach(e=>{if(RP||e.name!==`intro`)return!0;RP=!0;let t=new URLSearchParams(window.location.search);return t.has(`seed`)||t.has(`play`)?{name:`game`}:!0});var zP=new Set([3,4]);function BP(){window.addEventListener(`contextmenu`,e=>e.preventDefault());let e=e=>{zP.has(e.button)&&e.preventDefault()};window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,e),window.addEventListener(`selectstart`,e=>{e.target?.closest(`input, textarea, [contenteditable]`)||e.preventDefault()}),window.addEventListener(`dragstart`,e=>e.preventDefault())}document.documentElement.lang=He.global.locale.value,BP(),ne(jM).use(se()).use(LP).use(He).mount(`#app`);export{Pn as $,oE as A,ET as B,wD as C,rD as D,nD as E,iE as F,mT as G,jT as H,tE as I,vn as J,pT as K,zT as L,sE as M,XT as N,AE as O,qT as P,yn as Q,DT as R,PD as S,oD as T,dT as U,AT as V,gT as W,_n as X,An as Y,bn as Z,XA as _,OM as a,Ot as at,ak as b,CM as c,aM as d,Nn as et,Qj as f,Wj as g,Jj as h,DM as i,jt as it,WT as j,aE as k,EM as l,nM as m,JM as n,kt as nt,TM as o,tM as p,cr as q,qM as r,At as rt,wM as s,IP as t,Nt as tt,vM as u,tk as v,$E as w,rO as x,ik as y,bT as z};