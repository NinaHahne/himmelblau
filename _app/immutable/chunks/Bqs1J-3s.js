import{h as v,m as S,o as k,E as w,H as T,p,s as A,q as E,t as y,v as b,w as g,x as P,U as L}from"./DAyCiLTT.js";function N(m,u,d=!1){v&&S();var s=m,a=null,o=null,t=L,e=d?w:0,f=!1;const n=(h,l=!0)=>{f=!0,i(l,h)},i=(h,l)=>{if(t===(t=h))return;let r=!1;if(v){const c=s.data===T;!!t===c&&(s=p(),A(s),E(!1),r=!0)}t?(a?y(a):l&&(a=b(()=>l(s))),o&&g(o,()=>{o=null})):(o?y(o):l&&(o=b(()=>l(s))),a&&g(a,()=>{a=null})),r&&E(!0)};k(()=>{f=!1,u(n),f||i(null,null)},e),v&&(s=P)}const I="modulepreload",q=function(m,u){return new URL(m,u).href},R={},U=function(u,d,s){let a=Promise.resolve();if(d&&d.length>0){const t=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),f=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));a=Promise.allSettled(d.map(n=>{if(n=q(n,s),n in R)return;R[n]=!0;const i=n.endsWith(".css"),h=i?'[rel="stylesheet"]':"";if(!!s)for(let c=t.length-1;c>=0;c--){const _=t[c];if(_.href===n&&(!i||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${h}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":I,i||(r.as="script"),r.crossOrigin="",r.href=n,f&&r.setAttribute("nonce",f),document.head.appendChild(r),i)return new Promise((c,_)=>{r.addEventListener("load",c),r.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(t){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t}return a.then(t=>{for(const e of t||[])e.status==="rejected"&&o(e.reason);return u().catch(o)})};export{U as _,N as i};
