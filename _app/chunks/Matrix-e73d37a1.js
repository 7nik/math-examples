import{S as L,i as O,s as P,l as G,g as v,e as S,t as U,c as j,a as I,h as V,d as g,b as N,I as f,G as z,ab as B,j as F,a1 as H,L as q,f as d,U as M}from"./vendor-c9048cd9.js";function C(e,n,s){const t=e.slice();return t[8]=n[s],t[10]=s,t}function y(e,n,s){const t=e.slice();return t[11]=n[s],t[13]=s,t}function R(e){let n,s=e[11]+"",t,l,i,a;return{c(){n=S("span"),t=U(s),this.h()},l(r){n=j(r,"SPAN",{class:!0});var h=I(n);t=V(h,s),h.forEach(g),this.h()},h(){N(n,"class","svelte-1rxlfa7"),f(n,"row",e[2]&&!e[10]&&!e[1]||e[2]&&!e[13]&&e[1]),f(n,"column",e[3]&&!e[13]&&!e[1]||e[3]&&!e[10]&&e[1])},m(r,h){v(r,n,h),z(n,t),i||(a=B(l=e[6].call(null,n,{r:e[10],c:e[13],markMap:e[5]})),i=!0)},p(r,h){e=r,h&1&&s!==(s=e[11]+"")&&F(t,s),l&&H(l.update)&&h&32&&l.update.call(null,{r:e[10],c:e[13],markMap:e[5]}),h&6&&f(n,"row",e[2]&&!e[10]&&!e[1]||e[2]&&!e[13]&&e[1]),h&10&&f(n,"column",e[3]&&!e[13]&&!e[1]||e[3]&&!e[10]&&e[1])},d(r){r&&g(n),i=!1,a()}}}function E(e){let n,s=e[8],t=[];for(let l=0;l<s.length;l+=1)t[l]=R(y(e,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();n=G()},l(l){for(let i=0;i<t.length;i+=1)t[i].l(l);n=G()},m(l,i){for(let a=0;a<t.length;a+=1)t[a].m(l,i);v(l,n,i)},p(l,i){if(i&47){s=l[8];let a;for(a=0;a<s.length;a+=1){const r=y(l,s,a);t[a]?t[a].p(r,i):(t[a]=R(r),t[a].c(),t[a].m(n.parentNode,n))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},d(l){q(t,l),l&&g(n)}}}function J(e){let n,s=e[0],t=[];for(let l=0;l<s.length;l+=1)t[l]=E(C(e,s,l));return{c(){n=S("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){n=j(l,"DIV",{style:!0,class:!0});var i=I(n);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(g),this.h()},h(){d(n,"--w",e[1]?e[0].length:e[0][0].length),d(n,"--h",e[1]?e[0][0].length:e[0].length),N(n,"class","svelte-1rxlfa7"),f(n,"colDir",e[1]),f(n,"showGrid",e[4])},m(l,i){v(l,n,i);for(let a=0;a<t.length;a+=1)t[a].m(n,null)},p(l,[i]){if(i&47){s=l[0];let a;for(a=0;a<s.length;a+=1){const r=C(l,s,a);t[a]?t[a].p(r,i):(t[a]=E(r),t[a].c(),t[a].m(n,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}i&3&&d(n,"--w",l[1]?l[0].length:l[0][0].length),i&3&&d(n,"--h",l[1]?l[0][0].length:l[0].length),i&2&&f(n,"colDir",l[1]),i&16&&f(n,"showGrid",l[4])},i:M,o:M,d(l){l&&g(n),q(t,l)}}}function K(e,n,s){let t,{matrix:l=[[]]}=n,{colDir:i=!1}=n,{showRow:a=!1}=n,{showColumn:r=!1}=n,{showGrid:h=!1}=n,{marks:w={}}=n;function A(o,c){function m({r:k,c:b,markMap:u}){var D;const _=(D=u[`${k},${b}`])==null?void 0:D.split(",");if(!_){o.style.background="none";return}_.length===1?o.style.background=_[0]:o.style.background=`linear-gradient(135deg, ${_[0]} 50%, ${_[1]} 50%)`}return m(c),{update:m}}return e.$$set=o=>{"matrix"in o&&s(0,l=o.matrix),"colDir"in o&&s(1,i=o.colDir),"showRow"in o&&s(2,a=o.showRow),"showColumn"in o&&s(3,r=o.showColumn),"showGrid"in o&&s(4,h=o.showGrid),"marks"in o&&s(7,w=o.marks)},e.$$.update=()=>{e.$$.dirty&128&&s(5,t=Object.entries(w).reduce((o,[c,m])=>(m.forEach(({r:k,c:b})=>{const u=`${k},${b}`;o[u]?o[u]+=","+c:o[u]=c}),o),{}))},[l,i,a,r,h,t,A,w]}class T extends L{constructor(n){super();O(this,n,K,J,P,{matrix:0,colDir:1,showRow:2,showColumn:3,showGrid:4,marks:7})}}export{T as M};
