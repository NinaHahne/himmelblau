import{a7 as b,J as E,a8 as A,t as D,a9 as P,D as W,aa as Y,w as j,ab as S,ac as q,ad as B,ae as C,af as T,c as w,s as k,a as $,f as y,ag as J,ah as X,ai as z,aj as F,ak as G,al as K,am as Q,e as U,h as L,X as Z,y as x,_ as rr}from"./Dal-gf4d.js";import{d as tr}from"./DwWD-aDw.js";const ar=["touchstart","touchmove"];function er(r){return ar.includes(r)}function nr(r){var t=A,e=D;b(null),E(null);try{return r()}finally{b(t),E(e)}}const I=new Set,N=new Set;function ir(r,t,e,o={}){function i(a){if(o.capture||p.call(t,a),!a.cancelBubble)return nr(()=>e==null?void 0:e.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?W(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function fr(r,t,e,o,i){var a={capture:o,passive:i},u=ir(r,t,e,a);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(r,u,a)})}function cr(r){for(var t=0;t<r.length;t++)I.add(r[t]);for(var e of N)e(r)}function p(r){var O;var t=this,e=t.ownerDocument,o=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],a=i[0]||r.target,u=0,_=r.__root;if(_){var l=i.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(a=i[u]||r.target,a!==t){Y(r,"currentTarget",{configurable:!0,get(){return a||e}});var m=A,f=D;b(null),E(null);try{for(var n,s=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+o];if(d!==void 0&&!a.disabled)if(j(d)){var[H,...M]=d;H.apply(a,[r,...M])}else d.call(a,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||c===t||c===null)break;a=c}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,b(m),E(f)}}}function lr(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e+"")}function sr(r,t){return V(r,t)}function dr(r,t){S(),t.intro=t.intro??!1;const e=t.target,o=L,i=y;try{for(var a=q(e);a&&(a.nodeType!==8||a.data!==B);)a=C(a);if(!a)throw T;w(!0),k(a),$();const u=V(r,{...t,anchor:a});if(y===null||y.nodeType!==8||y.data!==J)throw X(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&z(),S(),F(e),w(!1),sr(r,t);throw u}finally{w(o),k(i)}}const v=new Map;function V(r,{target:t,anchor:e,props:o={},events:i,context:a,intro:u=!0}){S();var _=new Set,l=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!_.has(s)){_.add(s);var c=er(s);t.addEventListener(s,p,{passive:c});var d=v.get(s);d===void 0?(document.addEventListener(s,p,{passive:c}),v.set(s,1)):v.set(s,d+1)}}};l(G(I)),N.add(l);var h=void 0,m=K(()=>{var f=e??t.appendChild(Q());return U(()=>{if(a){Z({});var n=x;n.c=a}i&&(o.$$events=i),L&&tr(f,null),h=r(f,o)||{},L&&(D.nodes_end=y),a&&rr()}),()=>{var c;for(var n of _){t.removeEventListener(n,p);var s=v.get(n);--s===0?(document.removeEventListener(n,p),v.delete(n)):v.set(n,s)}N.delete(l),f!==e&&((c=f.parentNode)==null||c.removeChild(f))}});return R.set(h,m),h}let R=new WeakMap;function _r(r,t){const e=R.get(r);return e?(R.delete(r),e(t)):Promise.resolve()}export{cr as d,fr as e,dr as h,sr as m,lr as s,_r as u};
