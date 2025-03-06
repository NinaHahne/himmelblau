import{t as k,a as u,b as I,c as ie}from"../chunks/DDDG8AZ0.js";import{X as ce,Y as T,Z as p,_ as ue,$ as a,a0 as n,m as v,l as r,a1 as s,n as B,a2 as R}from"../chunks/Dal-gf4d.js";import{e as y,s as w}from"../chunks/CxPkL-eH.js";import{i as z}from"../chunks/B1SC6gXO.js";import{s as X,e as de,c as me,i as ge}from"../chunks/sotBqJIZ.js";import{t as Y}from"../chunks/j7gso4gK.js";import{p as O}from"../chunks/D2prJwoy.js";import{o as be}from"../chunks/DVOvOZGG.js";import{b as Z}from"../chunks/Ben8oL5q.js";const fe={Montag:{de:"Montag",en:"Monday"},Dienstag:{de:"Dienstag",en:"Tuesday"},Mittwoch:{de:"Mittwoch",en:"Wednesday"},Donnerstag:{de:"Donnerstag",en:"Thursday"},Freitag:{de:"Freitag",en:"Friday"},Samstag:{de:"Samstag",en:"Saturday"},Sonntag:{de:"Sonntag",en:"Sunday"}};var pe=k("<strong> </strong>"),ve=k("<br>"),he=k("am <!> <br> <strong> </strong> <!>",1),xe=k('<section class="flex h-full flex-col justify-center"><div class="flex flex-col items-center justify-center"><p class="text-center text-deep-moss">Im kleinen <a class="text-stem-green transition-colors duration-300 hover:text-bluebell focus:text-bluebell" href="http://www.stadtteilzeitung-schoeneberg.de/2009/oktober/19.htm" target="_blank">Blumenladen</a> himmelblau <br> gibt es schöne Blumen für <br> Liebeserklärungen, Hochzeiten und <br> auch für die einfachen kleinen Anlässe.</p> <button class="entrance relative m-8 svelte-1ujpd9f"><img alt="Pfingstrosen und Campanula" class="room absolute inset-0 h-full w-full object-cover object-left-top"> <div class="door-frame svelte-1ujpd9f"><img alt="himmelblaue Ladentür" class="door svelte-1ujpd9f"></div></button> <a id="opening_hours" href="#opening_hours_details"><p class="opening-hours text-center text-bluebell">Die himmelblaue Ladentür <br> öffnet sich in dieser Woche <strong class="star relative inline-block origin-[50%_30%] text-coral transition-transform duration-300">*</strong> <br> <!></p></a> <p id="adress" class="m-2 text-center text-deep-moss">Markelstraße 13<br> 12163 Berlin Steglitz</p> <p id="mona" class="m-2 text-center text-deep-moss">Mona Hahne<br> "Frau Himmelblau"</p> <div id="contact" class="text-center text-deep-moss"><a class="text-stem-green transition-colors duration-300 hover:text-bluebell focus:text-bluebell" href="mailto:blumen@himmelblau.de">blumen@himmelblau.de</a></div></div> <div class="relative flex flex-col items-center justify-center"><p id="opening_hours_details" class="mt-4 w-full text-center text-sm text-deep-moss"><strong class="star relative inline-block origin-[50%_30%] text-base text-coral transition-transform duration-300">*</strong> Die Öffnungszeiten<br> des kleinen Blumenladens<br> wechseln manchmal ein wenig,<br> denn es gibt viele Orte<br> und oft auch schöne Feste,<br> die Frau Himmelblau mit<br> himmelblauen & bunten Blumen<br> schmücken darf.<br> <br> Raumdekorationen <br> und besondere Bestellungen<br> für Hochzeiten, Geburtstage,<br> Taufen und Trauerfeiern<br> sind -nach Absprache- an<br> allen Tagen der Woche möglich!</p></div></section>');function He(q,J){ce(J,!0);const K="de";let h=T(null),S=T(O([])),d=T(!1);const L=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];function N(o){const l=[];let i=null;return o.forEach(({day:e,hours:_})=>{const f=fe[e][K];!i||i.hours!==_?(i={hours:_,days:[f]},l.push(i)):i.days.push(f)}),l}const x=o=>{o==="small"?v(d,!1):o==="big"?v(d,!0):v(d,!r(d))};be(async()=>{v(h,O(await me('*[_type == "openingHours"] { day, hours }'))),r(h)&&(r(h).sort((o,l)=>L.indexOf(o.day)-L.indexOf(l.day)),v(S,O(N(r(h)))))});var M=xe(),j=a(M),D=n(a(j),2),W=a(D);X(W,"src",`${Z??""}/images/PfingstrosenCampanula.webp`);var A=n(W,2),Q=a(A);X(Q,"src",`${Z??""}/images/Tuer_Fenster.webp`),s(A),s(D);var m=n(D,2),C=a(m),G=n(a(C),3),U=n(G,4);de(U,17,()=>r(S),ge,(o,l,i)=>{let e=()=>r(l).days,_=()=>r(l).hours;B();var f=he(),E=n(R(f));{var ee=t=>{var c=I();p(()=>w(c,e()[0])),u(t,c)},te=t=>{var c=ie(),ne=R(c);{var oe=g=>{var b=pe(),H=a(b);s(b),p(()=>w(H,`${e()[0]??""} & ${e()[1]??""}`)),u(g,b)},le=g=>{var b=I();p(H=>w(b,`${H??""} & ${e()[e().length-1]??""}`),[()=>e().slice(0,-1).join(", ")]),u(g,b)};z(ne,g=>{e().length===2?g(oe):g(le,!1)},!0)}u(t,c)};z(E,t=>{e().length===1?t(ee):t(te,!1)})}var F=n(E,4),ae=a(F,!0);s(F);var re=n(F,2);{var se=t=>{var c=ve();u(t,c)};z(re,t=>{i<r(S).length-1&&t(se)})}p(()=>w(ae,_())),u(o,f)}),s(C),s(m),B(6),s(j);var P=n(j,2),$=a(P),V=a($);B(29),s($),s(P),s(M),p(()=>{Y(G,"scale-150",r(d)),Y(V,"scale-150",r(d))}),y("mouseenter",m,()=>x("big")),y("mouseleave",m,()=>x("small")),y("focus",m,()=>x("big")),y("blur",m,()=>x("small")),u(q,M),ue()}export{He as component};
