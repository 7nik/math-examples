import{S as ee,i as fe,s as te,k as j,t as b,l as wl,m as C,h as c,g as p,j as N,e as E,c as T,a as Yl,d as r,H as Ul,w as Zl,x as hl,y as al,q as O,o as a,B as yl,b as Pl,T as El,K as ie,U as gl,p as Tl,O as D,ag as _e,n as jl}from"../chunks/vendor-c600a8bd.js";import{F as xl}from"../chunks/Fraction-52c953be.js";function Cl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_}function Hl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_}function Il(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function Kl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function Ol(n,i,f){const _=n.slice();return _[11]=i[f].times,_[13]=f,_}function zl(n,i,f){const _=n.slice();return _[11]=i[f].times,_[13]=f,_}function Al(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function ue(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function Dl(n){let i,f=n[11]+"",_;return{c(){i=E("sup"),_=b(f)},l(o){i=T(o,"SUP",{});var u=Yl(i);_=c(u,f),u.forEach(r)},m(o,u){p(o,i,u),Ul(i,_)},p(o,u){u&2&&f!==(f=o[11]+"")&&N(_,f)},d(o){o&&r(i)}}}function Gl(n){let i,f=n[6]+"",_,o,u=n[13]>0&&ue(),m=n[11]>1&&Dl(n);return{c(){u&&u.c(),i=j(),_=b(f),m&&m.c(),o=wl()},l(s){u&&u.l(s),i=C(s),_=c(s,f),m&&m.l(s),o=wl()},m(s,k){u&&u.m(s,k),p(s,i,k),p(s,_,k),m&&m.m(s,k),p(s,o,k)},p(s,k){k&2&&f!==(f=s[6]+"")&&N(_,f),s[11]>1?m?m.p(s,k):(m=Dl(s),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},d(s){u&&u.d(s),s&&r(i),s&&r(_),m&&m.d(s),s&&r(o)}}}function ne(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function Jl(n){let i,f=n[11]+"",_,o,u=n[13]>0&&ne();return{c(){u&&u.c(),i=b(`
	(`),_=b(f),o=b(" + 1)")},l(m){u&&u.l(m),i=c(m,`
	(`),_=c(m,f),o=c(m," + 1)")},m(m,s){u&&u.m(m,s),p(m,i,s),p(m,_,s),p(m,o,s)},p(m,s){s&2&&f!==(f=m[11]+"")&&N(_,f)},d(m){u&&u.d(m),m&&r(i),m&&r(_),m&&r(o)}}}function oe(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function Ll(n){let i,f=n[11]+1+"",_,o=n[13]>0&&oe();return{c(){o&&o.c(),i=j(),_=b(f)},l(u){o&&o.l(u),i=C(u),_=c(u,f)},m(u,m){o&&o.m(u,m),p(u,i,m),p(u,_,m)},p(u,m){m&2&&f!==(f=u[11]+1+"")&&N(_,f)},d(u){o&&o.d(u),u&&r(i),u&&r(_)}}}function me(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function re(n){let i=n[6]+"",f,_,o=n[11]+"",u,m,s;return{c(){f=b(i),_=E("sup"),u=b(o),m=b("+1"),s=b(" - 1")},l(k){f=c(k,i),_=T(k,"SUP",{});var B=Yl(_);u=c(B,o),m=c(B,"+1"),B.forEach(r),s=c(k," - 1")},m(k,B){p(k,f,B),p(k,_,B),Ul(_,u),Ul(_,m),p(k,s,B)},p(k,B){B&2&&i!==(i=k[6]+"")&&N(f,i),B&2&&o!==(o=k[11]+"")&&N(u,o)},d(k){k&&r(f),k&&r(_),k&&r(s)}}}function Ml(n){let i,f,_,o=n[13]>0&&me();return f=new xl({props:{denominator:n[6]+" - 1",$$slots:{default:[re]},$$scope:{ctx:n}}}),{c(){o&&o.c(),i=j(),Zl(f.$$.fragment)},l(u){o&&o.l(u),i=C(u),hl(f.$$.fragment,u)},m(u,m){o&&o.m(u,m),p(u,i,m),al(f,u,m),_=!0},p(u,m){const s={};m&2&&(s.denominator=u[6]+" - 1"),m&262146&&(s.$$scope={dirty:m,ctx:u}),f.$set(s)},i(u){_||(O(f.$$.fragment,u),_=!0)},o(u){a(f.$$.fragment,u),_=!1},d(u){o&&o.d(u),u&&r(i),yl(f,u)}}}function pe(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function Ql(n){let i,f=(n[6]**(n[11]+1)-1)/(n[6]-1)+"",_,o=n[13]>0&&pe();return{c(){o&&o.c(),i=j(),_=b(f)},l(u){o&&o.l(u),i=C(u),_=c(u,f)},m(u,m){o&&o.m(u,m),p(u,i,m),p(u,_,m)},p(u,m){m&2&&f!==(f=(u[6]**(u[11]+1)-1)/(u[6]-1)+"")&&N(_,f)},d(u){o&&o.d(u),u&&r(i),u&&r(_)}}}function Vl(n){let i,f,_;return f=new xl({props:{numerator:n[6]+" - 1",denominator:n[6].toString()}}),{c(){i=b(`\xA0\xB7 
    `),Zl(f.$$.fragment)},l(o){i=c(o,`\xA0\xB7 
    `),hl(f.$$.fragment,o)},m(o,u){p(o,i,u),al(f,o,u),_=!0},p(o,u){const m={};u&2&&(m.numerator=o[6]+" - 1"),u&2&&(m.denominator=o[6].toString()),f.$set(m)},i(o){_||(O(f.$$.fragment,o),_=!0)},o(o){a(f.$$.fragment,o),_=!1},d(o){o&&r(i),yl(f,o)}}}function Wl(n){let i,f=n[6]-1+"",_;return{c(){i=b(`\xA0\xB7 
	`),_=b(f)},l(o){i=c(o,`\xA0\xB7 
	`),_=c(o,f)},m(o,u){p(o,i,u),p(o,_,u)},p(o,u){u&2&&f!==(f=o[6]-1+"")&&N(_,f)},d(o){o&&r(i),o&&r(_)}}}function se(n){let i,f,_,o,u,m,s,k,B,I,H,K,nl,G,J,y=n[2](n[1])+"",g,ol,ml,rl,pl,x,sl,L,M,d=n[3](n[1])+"",ll,bl,cl,kl,$l,el,vl,fl,Bl,Q,tl=n[1].reduce(Xl,n[0])+"",il,Rl,V,_l=n[4](n[1],n[0])+"",ul,Nl,Sl,P,Fl,ql,W=n[1],S=[];for(let l=0;l<W.length;l+=1)S[l]=Gl(Al(n,W,l));let X=n[1],F=[];for(let l=0;l<X.length;l+=1)F[l]=Jl(zl(n,X,l));let Y=n[1],U=[];for(let l=0;l<Y.length;l+=1)U[l]=Ll(Ol(n,Y,l));let z=n[1],$=[];for(let l=0;l<z.length;l+=1)$[l]=Ml(Kl(n,z,l));const dl=l=>a($[l],1,1,()=>{$[l]=null});let Z=n[1],q=[];for(let l=0;l<Z.length;l+=1)q[l]=Ql(Il(n,Z,l));let A=n[1],v=[];for(let l=0;l<A.length;l+=1)v[l]=Vl(Hl(n,A,l));const le=l=>a(v[l],1,1,()=>{v[l]=null});let h=n[1],w=[];for(let l=0;l<h.length;l+=1)w[l]=Wl(Cl(n,h,l));return{c(){i=E("input"),f=j(),_=E("br"),o=E("br"),u=j(),m=b(n[0]),s=b(` = 
`);for(let l=0;l<S.length;l+=1)S[l].c();k=j(),B=E("br"),I=E("br"),H=b(`

\u03C4(`),K=b(n[0]),nl=b(`)
= 
`);for(let l=0;l<F.length;l+=1)F[l].c();G=b(`
=
`);for(let l=0;l<U.length;l+=1)U[l].c();J=b(`
=
`),g=b(y),ol=j(),ml=E("br"),rl=E("br"),pl=b(`

\u03C3(`),x=b(n[0]),sl=b(`)
= 
`);for(let l=0;l<$.length;l+=1)$[l].c();L=b(`
=
`);for(let l=0;l<q.length;l+=1)q[l].c();M=b(`
=
`),ll=b(d),bl=j(),cl=E("br"),kl=E("br"),$l=b(`

\u03C6(`),el=b(n[0]),vl=b(`)
= 
`),fl=b(n[0]),Bl=j();for(let l=0;l<v.length;l+=1)v[l].c();Q=b(`
=
`),il=b(tl),Rl=j();for(let l=0;l<w.length;l+=1)w[l].c();V=b(`
=
`),ul=b(_l),Nl=j(),Sl=E("br"),this.h()},l(l){i=T(l,"INPUT",{type:!0,min:!0}),f=C(l),_=T(l,"BR",{}),o=T(l,"BR",{}),u=C(l),m=c(l,n[0]),s=c(l,` = 
`);for(let t=0;t<S.length;t+=1)S[t].l(l);k=C(l),B=T(l,"BR",{}),I=T(l,"BR",{}),H=c(l,`

\u03C4(`),K=c(l,n[0]),nl=c(l,`)
= 
`);for(let t=0;t<F.length;t+=1)F[t].l(l);G=c(l,`
=
`);for(let t=0;t<U.length;t+=1)U[t].l(l);J=c(l,`
=
`),g=c(l,y),ol=C(l),ml=T(l,"BR",{}),rl=T(l,"BR",{}),pl=c(l,`

\u03C3(`),x=c(l,n[0]),sl=c(l,`)
= 
`);for(let t=0;t<$.length;t+=1)$[t].l(l);L=c(l,`
=
`);for(let t=0;t<q.length;t+=1)q[t].l(l);M=c(l,`
=
`),ll=c(l,d),bl=C(l),cl=T(l,"BR",{}),kl=T(l,"BR",{}),$l=c(l,`

\u03C6(`),el=c(l,n[0]),vl=c(l,`)
= 
`),fl=c(l,n[0]),Bl=C(l);for(let t=0;t<v.length;t+=1)v[t].l(l);Q=c(l,`
=
`),il=c(l,tl),Rl=C(l);for(let t=0;t<w.length;t+=1)w[t].l(l);V=c(l,`
=
`),ul=c(l,_l),Nl=C(l),Sl=T(l,"BR",{}),this.h()},h(){Pl(i,"type","number"),Pl(i,"min","2")},m(l,t){p(l,i,t),El(i,n[0]),p(l,f,t),p(l,_,t),p(l,o,t),p(l,u,t),p(l,m,t),p(l,s,t);for(let e=0;e<S.length;e+=1)S[e].m(l,t);p(l,k,t),p(l,B,t),p(l,I,t),p(l,H,t),p(l,K,t),p(l,nl,t);for(let e=0;e<F.length;e+=1)F[e].m(l,t);p(l,G,t);for(let e=0;e<U.length;e+=1)U[e].m(l,t);p(l,J,t),p(l,g,t),p(l,ol,t),p(l,ml,t),p(l,rl,t),p(l,pl,t),p(l,x,t),p(l,sl,t);for(let e=0;e<$.length;e+=1)$[e].m(l,t);p(l,L,t);for(let e=0;e<q.length;e+=1)q[e].m(l,t);p(l,M,t),p(l,ll,t),p(l,bl,t),p(l,cl,t),p(l,kl,t),p(l,$l,t),p(l,el,t),p(l,vl,t),p(l,fl,t),p(l,Bl,t);for(let e=0;e<v.length;e+=1)v[e].m(l,t);p(l,Q,t),p(l,il,t),p(l,Rl,t);for(let e=0;e<w.length;e+=1)w[e].m(l,t);p(l,V,t),p(l,ul,t),p(l,Nl,t),p(l,Sl,t),P=!0,Fl||(ql=ie(i,"input",n[5]),Fl=!0)},p(l,[t]){if(t&1&&gl(i.value)!==l[0]&&El(i,l[0]),(!P||t&1)&&N(m,l[0]),t&2){W=l[1];let e;for(e=0;e<W.length;e+=1){const R=Al(l,W,e);S[e]?S[e].p(R,t):(S[e]=Gl(R),S[e].c(),S[e].m(k.parentNode,k))}for(;e<S.length;e+=1)S[e].d(1);S.length=W.length}if((!P||t&1)&&N(K,l[0]),t&2){X=l[1];let e;for(e=0;e<X.length;e+=1){const R=zl(l,X,e);F[e]?F[e].p(R,t):(F[e]=Jl(R),F[e].c(),F[e].m(G.parentNode,G))}for(;e<F.length;e+=1)F[e].d(1);F.length=X.length}if(t&2){Y=l[1];let e;for(e=0;e<Y.length;e+=1){const R=Ol(l,Y,e);U[e]?U[e].p(R,t):(U[e]=Ll(R),U[e].c(),U[e].m(J.parentNode,J))}for(;e<U.length;e+=1)U[e].d(1);U.length=Y.length}if((!P||t&2)&&y!==(y=l[2](l[1])+"")&&N(g,y),(!P||t&1)&&N(x,l[0]),t&2){z=l[1];let e;for(e=0;e<z.length;e+=1){const R=Kl(l,z,e);$[e]?($[e].p(R,t),O($[e],1)):($[e]=Ml(R),$[e].c(),O($[e],1),$[e].m(L.parentNode,L))}for(jl(),e=z.length;e<$.length;e+=1)dl(e);Tl()}if(t&2){Z=l[1];let e;for(e=0;e<Z.length;e+=1){const R=Il(l,Z,e);q[e]?q[e].p(R,t):(q[e]=Ql(R),q[e].c(),q[e].m(M.parentNode,M))}for(;e<q.length;e+=1)q[e].d(1);q.length=Z.length}if((!P||t&2)&&d!==(d=l[3](l[1])+"")&&N(ll,d),(!P||t&1)&&N(el,l[0]),(!P||t&1)&&N(fl,l[0]),t&2){A=l[1];let e;for(e=0;e<A.length;e+=1){const R=Hl(l,A,e);v[e]?(v[e].p(R,t),O(v[e],1)):(v[e]=Vl(R),v[e].c(),O(v[e],1),v[e].m(Q.parentNode,Q))}for(jl(),e=A.length;e<v.length;e+=1)le(e);Tl()}if((!P||t&3)&&tl!==(tl=l[1].reduce(Xl,l[0])+"")&&N(il,tl),t&2){h=l[1];let e;for(e=0;e<h.length;e+=1){const R=Cl(l,h,e);w[e]?w[e].p(R,t):(w[e]=Wl(R),w[e].c(),w[e].m(V.parentNode,V))}for(;e<w.length;e+=1)w[e].d(1);w.length=h.length}(!P||t&3)&&_l!==(_l=l[4](l[1],l[0])+"")&&N(ul,_l)},i(l){if(!P){for(let t=0;t<z.length;t+=1)O($[t]);for(let t=0;t<A.length;t+=1)O(v[t]);P=!0}},o(l){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)a($[t]);v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)a(v[t]);P=!1},d(l){l&&r(i),l&&r(f),l&&r(_),l&&r(o),l&&r(u),l&&r(m),l&&r(s),D(S,l),l&&r(k),l&&r(B),l&&r(I),l&&r(H),l&&r(K),l&&r(nl),D(F,l),l&&r(G),D(U,l),l&&r(J),l&&r(g),l&&r(ol),l&&r(ml),l&&r(rl),l&&r(pl),l&&r(x),l&&r(sl),D($,l),l&&r(L),D(q,l),l&&r(M),l&&r(ll),l&&r(bl),l&&r(cl),l&&r(kl),l&&r($l),l&&r(el),l&&r(vl),l&&r(fl),l&&r(Bl),D(v,l),l&&r(Q),l&&r(il),l&&r(Rl),D(w,l),l&&r(V),l&&r(ul),l&&r(Nl),l&&r(Sl),Fl=!1,ql()}}}const Xl=(n,{factor:i})=>n/i;function be(n,i,f){let _,o=42;const u=B=>B.reduce((I,{times:H})=>I*(H+1),1),m=B=>B.reduce((I,{factor:H,times:K})=>I*(H**(K+1)-1)/(H-1),1),s=(B,I)=>B.reduce((H,{factor:K})=>H*(K-1)/K,I);function k(){o=gl(this.value),f(0,o)}return n.$$.update=()=>{n.$$.dirty&1&&f(1,_=_e.getFrequency(o))},[o,_,u,m,s,k]}class $e extends ee{constructor(i){super();fe(this,i,be,se,te,{})}}export{$e as default};
