import{F as Q,S as U,i as z,s as V,e as E,t as O,k as P,c as N,a as S,h as q,d,m as j,b as y,g as A,G as k,H as J,I as D,J as X,K,L as Y,M as Z,N as $,j as x,q as R,o as I,p as ee,O as te,P as se,Q as ae,R as le,T,n as re}from"../chunks/vendor-c9048cd9.js";import{r as F,b as ie}from"../chunks/singletons-b3eaab78.js";const ne=()=>{const e=Q("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},oe={subscribe(e){return ne().page.subscribe(e)}},ue=fe,ce=_e;function fe(e){F&&F.before_navigate(e)}function _e(e){F&&F.after_navigate(e)}function W(e,s,a){const n=e.slice();return n[10]=s[a][0],n[11]=s[a][1],n}function w(e){let s,a,n,u,_,b,o,h,p=Object.entries(e[4]),i=[];for(let l=0;l<p.length;l+=1)i[l]=B(W(e,p,l));return{c(){s=E("ul"),a=E("h2"),n=O("\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438"),u=P();for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){s=N(l,"UL",{class:!0});var c=S(s);a=N(c,"H2",{class:!0});var r=S(a);n=q(r,"\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438"),r.forEach(d),u=j(c);for(let g=0;g<i.length;g+=1)i[g].l(c);c.forEach(d),this.h()},h(){y(a,"class","svelte-lyk1a4"),y(s,"class","svelte-lyk1a4")},m(l,c){A(l,s,c),k(s,a),k(a,n),k(s,u);for(let r=0;r<i.length;r+=1)i[r].m(s,null);b=!0,o||(h=J(s,"click",e[9]),o=!0)},p(l,c){if(c&17){p=Object.entries(l[4]);let r;for(r=0;r<p.length;r+=1){const g=W(l,p,r);i[r]?i[r].p(g,c):(i[r]=B(g),i[r].c(),i[r].m(s,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=p.length}},i(l){b||(X(()=>{_||(_=K(s,T,{x:-350,duration:500,opacity:1},!0)),_.run(1)}),b=!0)},o(l){_||(_=K(s,T,{x:-350,duration:500,opacity:1},!1)),_.run(0),b=!1},d(l){l&&d(s),Y(i,l),l&&_&&_.end(),o=!1,h()}}}function B(e){let s,a,n=e[11]+"",u,_,b;return{c(){s=E("li"),a=E("a"),u=O(n),b=P(),this.h()},l(o){s=N(o,"LI",{class:!0});var h=S(s);a=N(h,"A",{href:!0,class:!0});var p=S(a);u=q(p,n),p.forEach(d),b=j(h),h.forEach(d),this.h()},h(){y(a,"href",_=ie+"/"+e[10]),y(a,"class","svelte-lyk1a4"),D(a,"active",e[10]===e[0]),y(s,"class","svelte-lyk1a4")},m(o,h){A(o,s,h),k(s,a),k(a,u),k(s,b)},p(o,h){h&17&&D(a,"active",o[10]===o[0])},d(o){o&&d(s)}}}function he(e){let s,a,n,u,_,b,o,h,p,i,l,c,r,g;document.title=s=e[3];let f=e[2]&&w(e);const H=e[7].default,v=Z(H,e,e[6],null);return{c(){a=P(),n=E("header"),u=E("span"),_=O("\u2630"),b=P(),o=E("span"),h=O(e[3]),p=P(),f&&f.c(),i=P(),l=E("main"),v&&v.c(),this.h()},l(t){$('[data-svelte="svelte-1uo06u1"]',document.head).forEach(d),a=j(t),n=N(t,"HEADER",{class:!0});var C=S(n);u=N(C,"SPAN",{class:!0});var L=S(u);_=q(L,"\u2630"),L.forEach(d),b=j(C),o=N(C,"SPAN",{class:!0});var M=S(o);h=q(M,e[3]),M.forEach(d),C.forEach(d),p=j(t),f&&f.l(t),i=j(t),l=N(t,"MAIN",{class:!0});var G=S(l);v&&v.l(G),G.forEach(d),this.h()},h(){y(u,"class","menu svelte-lyk1a4"),y(o,"class","svelte-lyk1a4"),y(n,"class","svelte-lyk1a4"),y(l,"class","svelte-lyk1a4"),D(l,"hide",e[1])},m(t,m){A(t,a,m),A(t,n,m),k(n,u),k(u,_),k(n,b),k(n,o),k(o,h),A(t,p,m),f&&f.m(t,m),A(t,i,m),A(t,l,m),v&&v.m(l,null),c=!0,r||(g=J(u,"click",e[8]),r=!0)},p(t,[m]){(!c||m&8)&&s!==(s=t[3])&&(document.title=s),(!c||m&8)&&x(h,t[3]),t[2]?f?(f.p(t,m),m&4&&R(f,1)):(f=w(t),f.c(),R(f,1),f.m(i.parentNode,i)):f&&(re(),I(f,1,1,()=>{f=null}),ee()),v&&v.p&&(!c||m&64)&&te(v,H,t,t[6],c?ae(H,t[6],m,null):se(t[6]),null),m&2&&D(l,"hide",t[1])},i(t){c||(R(f),R(v,t),c=!0)},o(t){I(f),I(v,t),c=!1},d(t){t&&d(a),t&&d(n),t&&d(p),f&&f.d(t),t&&d(i),t&&d(l),v&&v.d(t),r=!1,g()}}}function pe(e,s,a){let n,u,_;le(e,oe,r=>a(5,_=r));let{$$slots:b={},$$scope:o}=s;const h={RealFunc:"\u0427\u0438\u0441\u043B\u043E\u0432\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457",NumSys:"\u0421\u0438\u0441\u0442\u0435\u043C\u0438 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F",NumSysExam:"\u0421\u0438\u0441\u0442\u0435\u043C\u0438 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F \u041A\u0420",Cong:"\u041A\u043E\u043D\u0433\u0440\u0443\u0435\u043D\u0446\u0456\u0457",Caesar:"\u041A\u0440\u0438\u043F\u0442\u043E\u0430\u043D\u0430\u043B\u0456\u0437 \u0448\u0438\u0444\u0440\u0443 \u0426\u0435\u0437\u0430\u0440\u044F",Crypto:"\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0456 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0438 \u0448\u0438\u0444\u0440\u0443\u0432\u0430\u043D\u043D\u044F",Playfair:"\u0428\u0438\u0444\u0440 Playfair",RSA:"RSA",Graph:"\u0413\u0440\u0430\u0444",BDFS:"\u041F\u043E\u0448\u0443\u043A \u0443 \u0433\u0440\u0430\u0444\u0456",Kruskal:"\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u041A\u0440\u0443\u0441\u043A\u0430\u043B\u0430",Prim:"\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u041F\u0440\u0456\u043C\u0430",Dijkstra:"\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0414\u0435\u0439\u043A\u0441\u0442\u0440\u0438"};let p,i=!1;ue(()=>a(1,i=!0)),ce(()=>setTimeout(()=>a(1,i=!1),200));const l=()=>a(2,u=!u),c=()=>a(2,u=!1);return e.$$set=r=>{"$$scope"in r&&a(6,o=r.$$scope)},e.$$.update=()=>{var r;e.$$.dirty&32&&a(0,p=Object.keys(h).find(g=>_.url.pathname.endsWith(g))),e.$$.dirty&1&&a(3,n=`\u0414\u0438\u0441\u043A\u0440\u0435\u0442\u043D\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430 \u2022 ${(r=h[p])!=null?r:"\u0413\u043E\u043B\u043E\u0432\u043D\u0430"}`),e.$$.dirty&32&&a(2,u=_.url.pathname.endsWith("/"))},[p,i,u,n,h,_,o,b,l,c]}class be extends U{constructor(s){super();z(this,s,pe,he,V,{})}}export{be as default};
