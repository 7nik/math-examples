import{S as ee,i as te,s as le,t as T,h as B,g as E,j as A,d as g,l as Q,R as W,e as N,w as ne,k as D,c as I,a as C,x as se,m as P,b as w,G as X,y as ue,H as p,K as G,q as H,o as F,B as fe,T as q,U as L,n as re,p as ae,O as oe,P as me}from"./vendor-a50c646c.js";import{c as _e}from"./Graph-95f5c01f.js";function Y(n){let t,e=n[0].weight+"",s;return{c(){t=T("= "),s=T(e)},l(f){t=B(f,"= "),s=B(f,e)},m(f,o){E(f,t,o),E(f,s,o)},p(f,o){o&1&&e!==(e=f[0].weight+"")&&A(s,e)},d(f){f&&g(t),f&&g(s)}}}function ce(n){let t,e=n[0].v1+"",s,f,o=n[0].v2+"",v,l,u,i=n[0].weight&&Y(n);return{c(){t=T("("),s=T(e),f=T(", "),v=T(o),l=T(") "),i&&i.c(),u=Q()},l(r){t=B(r,"("),s=B(r,e),f=B(r,", "),v=B(r,o),l=B(r,") "),i&&i.l(r),u=Q()},m(r,m){E(r,t,m),E(r,s,m),E(r,f,m),E(r,v,m),E(r,l,m),i&&i.m(r,m),E(r,u,m)},p(r,[m]){m&1&&e!==(e=r[0].v1+"")&&A(s,e),m&1&&o!==(o=r[0].v2+"")&&A(v,o),r[0].weight?i?i.p(r,m):(i=Y(r),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null)},i:W,o:W,d(r){r&&g(t),r&&g(s),r&&g(f),r&&g(v),r&&g(l),i&&i.d(r),r&&g(u)}}}function de(n,t,e){let{edge:s}=t;return n.$$set=f=>{"edge"in f&&e(0,s=f.edge)},[s]}class he extends ee{constructor(t){super();te(this,t,de,ce,le,{edge:0})}}function Z(n,t,e){const s=n.slice();return s[13]=t[e],s}function x(n){let t,e,s,f,o,v;e=new he({props:{edge:n[13]}});function l(){return n[9](n[13])}return{c(){t=N("div"),ne(e.$$.fragment),s=D(),this.h()},l(u){t=I(u,"DIV",{class:!0});var i=C(t);se(e.$$.fragment,i),s=P(i),i.forEach(g),this.h()},h(){w(t,"class","svelte-rgoatv"),X(t,"removable",!n[2])},m(u,i){E(u,t,i),ue(e,t,null),p(t,s),f=!0,o||(v=G(t,"click",l),o=!0)},p(u,i){n=u;const r={};i&1&&(r.edge=n[13]),e.$set(r),i&4&&X(t,"removable",!n[2])},i(u){f||(H(e.$$.fragment,u),f=!0)},o(u){F(e.$$.fragment,u),f=!1},d(u){u&&g(t),fe(e),o=!1,v()}}}function $(n){let t,e,s,f,o,v;return{c(){t=T(`\u0412\u0430\u0433\u0430:
            `),e=N("input"),s=D(),f=N("br"),this.h()},l(l){t=B(l,`\u0412\u0430\u0433\u0430:
            `),e=I(l,"INPUT",{type:!0,min:!0,max:!0}),s=P(l),f=I(l,"BR",{}),this.h()},h(){w(e,"type","number"),w(e,"min","1"),w(e,"max",n[1])},m(l,u){E(l,t,u),E(l,e,u),q(e,n[6]),E(l,s,u),E(l,f,u),o||(v=G(e,"input",n[12]),o=!0)},p(l,u){u&2&&w(e,"max",l[1]),u&64&&L(e.value)!==l[6]&&q(e,l[6])},d(l){l&&g(t),l&&g(e),l&&g(s),l&&g(f),o=!1,v()}}}function ve(n){let t,e,s,f,o,v,l,u,i,r,m,O,S,j,y,c,U,R,K,J,V=n[0],d=[];for(let a=0;a<V.length;a+=1)d[a]=x(Z(n,V,a));const ie=a=>F(d[a],1,1,()=>{d[a]=null});let b=n[3]&&$(n);return{c(){t=N("div"),e=N("div"),s=T("\u0420\u0435\u0431\u0440\u0430:"),f=N("br"),o=D();for(let a=0;a<d.length;a+=1)d[a].c();v=D(),l=N("div"),u=T(`\u0412\u0435\u0440\u0448\u0438\u043D\u0438:
        `),i=N("input"),r=D(),m=N("input"),O=D(),S=N("br"),j=D(),b&&b.c(),y=D(),c=N("button"),U=T("\u0414\u043E\u0434\u0430\u0442\u0438 \u0440\u0435\u0431\u0440\u043E"),this.h()},l(a){t=I(a,"DIV",{class:!0});var h=C(t);e=I(h,"DIV",{});var _=C(e);s=B(_,"\u0420\u0435\u0431\u0440\u0430:"),f=I(_,"BR",{}),o=P(_);for(let z=0;z<d.length;z+=1)d[z].l(_);_.forEach(g),v=P(h),l=I(h,"DIV",{});var k=C(l);u=B(k,`\u0412\u0435\u0440\u0448\u0438\u043D\u0438:
        `),i=I(k,"INPUT",{type:!0,min:!0,max:!0}),r=P(k),m=I(k,"INPUT",{type:!0,min:!0,max:!0}),O=P(k),S=I(k,"BR",{}),j=P(k),b&&b.l(k),y=P(k),c=I(k,"BUTTON",{});var M=C(c);U=B(M,"\u0414\u043E\u0434\u0430\u0442\u0438 \u0440\u0435\u0431\u0440\u043E"),M.forEach(g),k.forEach(g),h.forEach(g),this.h()},h(){w(i,"type","number"),w(i,"min","1"),w(i,"max",n[1]),w(m,"type","number"),w(m,"min","1"),w(m,"max",n[1]),c.disabled=n[2],w(t,"class","edges-box svelte-rgoatv")},m(a,h){E(a,t,h),p(t,e),p(e,s),p(e,f),p(e,o);for(let _=0;_<d.length;_+=1)d[_].m(e,null);p(t,v),p(t,l),p(l,u),p(l,i),q(i,n[4]),p(l,r),p(l,m),q(m,n[5]),p(l,O),p(l,S),p(l,j),b&&b.m(l,null),p(l,y),p(l,c),p(c,U),R=!0,K||(J=[G(i,"input",n[10]),G(m,"input",n[11]),G(c,"click",n[7])],K=!0)},p(a,[h]){if(h&261){V=a[0];let _;for(_=0;_<V.length;_+=1){const k=Z(a,V,_);d[_]?(d[_].p(k,h),H(d[_],1)):(d[_]=x(k),d[_].c(),H(d[_],1),d[_].m(e,null))}for(re(),_=V.length;_<d.length;_+=1)ie(_);ae()}(!R||h&2)&&w(i,"max",a[1]),h&16&&L(i.value)!==a[4]&&q(i,a[4]),(!R||h&2)&&w(m,"max",a[1]),h&32&&L(m.value)!==a[5]&&q(m,a[5]),a[3]?b?b.p(a,h):(b=$(a),b.c(),b.m(l,y)):b&&(b.d(1),b=null),(!R||h&4)&&(c.disabled=a[2])},i(a){if(!R){for(let h=0;h<V.length;h+=1)H(d[h]);R=!0}},o(a){d=d.filter(Boolean);for(let h=0;h<d.length;h+=1)F(d[h]);R=!1},d(a){a&&g(t),oe(d,a),b&&b.d(),K=!1,me(J)}}}function ge(n,t,e){let{edges:s=[]}=t,{vertexNumber:f=11}=t,{locked:o=!1}=t,{weighted:v=!0}=t,l=1,u=2,i=10;function r(){if(l>0&&l<=f&&u>0&&u<=f&&i){const c=_e(l,u,s);c>=0&&s.splice(c,1);const U={v1:l,v2:u};v&&(U.weight=i),e(0,s=[...s,U])}}function m(c){o||e(0,s=s.filter(U=>U!==c))}const O=c=>m(c);function S(){l=L(this.value),e(4,l)}function j(){u=L(this.value),e(5,u)}function y(){i=L(this.value),e(6,i)}return n.$$set=c=>{"edges"in c&&e(0,s=c.edges),"vertexNumber"in c&&e(1,f=c.vertexNumber),"locked"in c&&e(2,o=c.locked),"weighted"in c&&e(3,v=c.weighted)},[s,f,o,v,l,u,i,r,m,O,S,j,y]}class ke extends ee{constructor(t){super();te(this,t,ge,ve,le,{edges:0,vertexNumber:1,locked:2,weighted:3})}}export{ke as E,he as a};