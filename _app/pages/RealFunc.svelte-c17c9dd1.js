import{S as ee,i as fe,s as te,k as U,t as b,l as El,n as q,g as c,f as s,h as N,e as C,c as I,a as Pl,d as r,E as jl,j as Ul,m as ql,o as Cl,x as W,u as a,v as Il,b as Jl,V as Tl,F as ie,W as Vl,w as Wl,J as D,$ as _e,r as zl}from"../chunks/vendor-1449e135.js";import{F as Al}from"../chunks/Fraction-d448b802.js";function Dl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_}function Gl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_}function Hl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function Kl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function Ll(n,i,f){const _=n.slice();return _[11]=i[f].times,_[13]=f,_}function Ml(n,i,f){const _=n.slice();return _[11]=i[f].times,_[13]=f,_}function Ol(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function ue(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){s(f,i,_)},d(f){f&&r(i)}}}function Ql(n){let i,f=n[11]+"",_;return{c(){i=C("sup"),_=b(f)},l(o){i=I(o,"SUP",{});var u=Pl(i);_=c(u,f),u.forEach(r)},m(o,u){s(o,i,u),jl(i,_)},p(o,u){u&2&&f!==(f=o[11]+"")&&N(_,f)},d(o){o&&r(i)}}}function Xl(n){let i,f=n[6]+"",_,o,u=n[13]>0&&ue(),m=n[11]>1&&Ql(n);return{c(){u&&u.c(),i=U(),_=b(f),m&&m.c(),o=El()},l(p){u&&u.l(p),i=q(p),_=c(p,f),m&&m.l(p),o=El()},m(p,k){u&&u.m(p,k),s(p,i,k),s(p,_,k),m&&m.m(p,k),s(p,o,k)},p(p,k){k&2&&f!==(f=p[6]+"")&&N(_,f),p[11]>1?m?m.p(p,k):(m=Ql(p),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},d(p){u&&u.d(p),p&&r(i),p&&r(_),m&&m.d(p),p&&r(o)}}}function ne(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){s(f,i,_)},d(f){f&&r(i)}}}function Yl(n){let i,f=n[11]+"",_,o,u=n[13]>0&&ne();return{c(){u&&u.c(),i=b(`
	(`),_=b(f),o=b(" + 1)")},l(m){u&&u.l(m),i=c(m,`
	(`),_=c(m,f),o=c(m," + 1)")},m(m,p){u&&u.m(m,p),s(m,i,p),s(m,_,p),s(m,o,p)},p(m,p){p&2&&f!==(f=m[11]+"")&&N(_,f)},d(m){u&&u.d(m),m&&r(i),m&&r(_),m&&r(o)}}}function oe(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){s(f,i,_)},d(f){f&&r(i)}}}function Zl(n){let i,f=n[11]+1+"",_,o=n[13]>0&&oe();return{c(){o&&o.c(),i=U(),_=b(f)},l(u){o&&o.l(u),i=q(u),_=c(u,f)},m(u,m){o&&o.m(u,m),s(u,i,m),s(u,_,m)},p(u,m){m&2&&f!==(f=u[11]+1+"")&&N(_,f)},d(u){o&&o.d(u),u&&r(i),u&&r(_)}}}function me(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){s(f,i,_)},d(f){f&&r(i)}}}function re(n){let i=n[6]+"",f,_,o=n[11]+"",u,m,p;return{c(){f=b(i),_=C("sup"),u=b(o),m=b("+1"),p=b(" - 1")},l(k){f=c(k,i),_=I(k,"SUP",{});var B=Pl(_);u=c(B,o),m=c(B,"+1"),B.forEach(r),p=c(k," - 1")},m(k,B){s(k,f,B),s(k,_,B),jl(_,u),jl(_,m),s(k,p,B)},p(k,B){B&2&&i!==(i=k[6]+"")&&N(f,i),B&2&&o!==(o=k[11]+"")&&N(u,o)},d(k){k&&r(f),k&&r(_),k&&r(p)}}}function hl(n){let i,f,_,o=n[13]>0&&me();return f=new Al({props:{denominator:""+(n[6]+" - 1"),$$slots:{default:[re]},$$scope:{ctx:n}}}),{c(){o&&o.c(),i=U(),Ul(f.$$.fragment)},l(u){o&&o.l(u),i=q(u),ql(f.$$.fragment,u)},m(u,m){o&&o.m(u,m),s(u,i,m),Cl(f,u,m),_=!0},p(u,m){const p={};m&2&&(p.denominator=""+(u[6]+" - 1")),m&262146&&(p.$$scope={dirty:m,ctx:u}),f.$set(p)},i(u){_||(W(f.$$.fragment,u),_=!0)},o(u){a(f.$$.fragment,u),_=!1},d(u){o&&o.d(u),u&&r(i),Il(f,u)}}}function se(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){s(f,i,_)},d(f){f&&r(i)}}}function al(n){let i,f=(n[6]**(n[11]+1)-1)/(n[6]-1)+"",_,o=n[13]>0&&se();return{c(){o&&o.c(),i=U(),_=b(f)},l(u){o&&o.l(u),i=q(u),_=c(u,f)},m(u,m){o&&o.m(u,m),s(u,i,m),s(u,_,m)},p(u,m){m&2&&f!==(f=(u[6]**(u[11]+1)-1)/(u[6]-1)+"")&&N(_,f)},d(u){o&&o.d(u),u&&r(i),u&&r(_)}}}function yl(n){let i,f,_;return f=new Al({props:{numerator:""+(n[6]+" - 1"),denominator:n[6].toString()}}),{c(){i=b(`\xA0\xB7 
    `),Ul(f.$$.fragment)},l(o){i=c(o,`\xA0\xB7 
    `),ql(f.$$.fragment,o)},m(o,u){s(o,i,u),Cl(f,o,u),_=!0},p(o,u){const m={};u&2&&(m.numerator=""+(o[6]+" - 1")),u&2&&(m.denominator=o[6].toString()),f.$set(m)},i(o){_||(W(f.$$.fragment,o),_=!0)},o(o){a(f.$$.fragment,o),_=!1},d(o){o&&r(i),Il(f,o)}}}function gl(n){let i,f=n[6]-1+"",_;return{c(){i=b(`\xA0\xB7 
	`),_=b(f)},l(o){i=c(o,`\xA0\xB7 
	`),_=c(o,f)},m(o,u){s(o,i,u),s(o,_,u)},p(o,u){u&2&&f!==(f=o[6]-1+"")&&N(_,f)},d(o){o&&r(i),o&&r(_)}}}function pe(n){let i,f,_,o,u,m,p,k,B,T,J,V,nl,G,H,y=n[2](n[1])+"",g,ol,ml,rl,sl,x,pl,K,L,d=n[3](n[1])+"",ll,bl,cl,kl,vl,el,$l,fl,Bl,M,tl=n[1].reduce(xl,n[0])+"",il,Rl,O,_l=n[4](n[1],n[0])+"",ul,Nl,Fl,P,Sl,wl,Q=n[1],F=[];for(let l=0;l<Q.length;l+=1)F[l]=Xl(Ol(n,Q,l));let X=n[1],S=[];for(let l=0;l<X.length;l+=1)S[l]=Yl(Ml(n,X,l));let Y=n[1],j=[];for(let l=0;l<Y.length;l+=1)j[l]=Zl(Ll(n,Y,l));let z=n[1],v=[];for(let l=0;l<z.length;l+=1)v[l]=hl(Kl(n,z,l));const dl=l=>a(v[l],1,1,()=>{v[l]=null});let Z=n[1],w=[];for(let l=0;l<Z.length;l+=1)w[l]=al(Hl(n,Z,l));let A=n[1],$=[];for(let l=0;l<A.length;l+=1)$[l]=yl(Gl(n,A,l));const le=l=>a($[l],1,1,()=>{$[l]=null});let h=n[1],E=[];for(let l=0;l<h.length;l+=1)E[l]=gl(Dl(n,h,l));return{c(){i=C("input"),f=U(),_=C("br"),o=C("br"),u=U(),m=b(n[0]),p=b(` = 
`);for(let l=0;l<F.length;l+=1)F[l].c();k=U(),B=C("br"),T=C("br"),J=b(`

\u03C4(`),V=b(n[0]),nl=b(`)
= 
`);for(let l=0;l<S.length;l+=1)S[l].c();G=b(`
=
`);for(let l=0;l<j.length;l+=1)j[l].c();H=b(`
=
`),g=b(y),ol=U(),ml=C("br"),rl=C("br"),sl=b(`

\u03C3(`),x=b(n[0]),pl=b(`)
= 
`);for(let l=0;l<v.length;l+=1)v[l].c();K=b(`
=
`);for(let l=0;l<w.length;l+=1)w[l].c();L=b(`
=
`),ll=b(d),bl=U(),cl=C("br"),kl=C("br"),vl=b(`

\u03C6(`),el=b(n[0]),$l=b(`)
= 
`),fl=b(n[0]),Bl=U();for(let l=0;l<$.length;l+=1)$[l].c();M=b(`
=
`),il=b(tl),Rl=U();for(let l=0;l<E.length;l+=1)E[l].c();O=b(`
=
`),ul=b(_l),Nl=U(),Fl=C("br"),this.h()},l(l){i=I(l,"INPUT",{type:!0,min:!0}),f=q(l),_=I(l,"BR",{}),o=I(l,"BR",{}),u=q(l),m=c(l,n[0]),p=c(l,` = 
`);for(let t=0;t<F.length;t+=1)F[t].l(l);k=q(l),B=I(l,"BR",{}),T=I(l,"BR",{}),J=c(l,`

\u03C4(`),V=c(l,n[0]),nl=c(l,`)
= 
`);for(let t=0;t<S.length;t+=1)S[t].l(l);G=c(l,`
=
`);for(let t=0;t<j.length;t+=1)j[t].l(l);H=c(l,`
=
`),g=c(l,y),ol=q(l),ml=I(l,"BR",{}),rl=I(l,"BR",{}),sl=c(l,`

\u03C3(`),x=c(l,n[0]),pl=c(l,`)
= 
`);for(let t=0;t<v.length;t+=1)v[t].l(l);K=c(l,`
=
`);for(let t=0;t<w.length;t+=1)w[t].l(l);L=c(l,`
=
`),ll=c(l,d),bl=q(l),cl=I(l,"BR",{}),kl=I(l,"BR",{}),vl=c(l,`

\u03C6(`),el=c(l,n[0]),$l=c(l,`)
= 
`),fl=c(l,n[0]),Bl=q(l);for(let t=0;t<$.length;t+=1)$[t].l(l);M=c(l,`
=
`),il=c(l,tl),Rl=q(l);for(let t=0;t<E.length;t+=1)E[t].l(l);O=c(l,`
=
`),ul=c(l,_l),Nl=q(l),Fl=I(l,"BR",{}),this.h()},h(){Jl(i,"type","number"),Jl(i,"min","2")},m(l,t){s(l,i,t),Tl(i,n[0]),s(l,f,t),s(l,_,t),s(l,o,t),s(l,u,t),s(l,m,t),s(l,p,t);for(let e=0;e<F.length;e+=1)F[e].m(l,t);s(l,k,t),s(l,B,t),s(l,T,t),s(l,J,t),s(l,V,t),s(l,nl,t);for(let e=0;e<S.length;e+=1)S[e].m(l,t);s(l,G,t);for(let e=0;e<j.length;e+=1)j[e].m(l,t);s(l,H,t),s(l,g,t),s(l,ol,t),s(l,ml,t),s(l,rl,t),s(l,sl,t),s(l,x,t),s(l,pl,t);for(let e=0;e<v.length;e+=1)v[e].m(l,t);s(l,K,t);for(let e=0;e<w.length;e+=1)w[e].m(l,t);s(l,L,t),s(l,ll,t),s(l,bl,t),s(l,cl,t),s(l,kl,t),s(l,vl,t),s(l,el,t),s(l,$l,t),s(l,fl,t),s(l,Bl,t);for(let e=0;e<$.length;e+=1)$[e].m(l,t);s(l,M,t),s(l,il,t),s(l,Rl,t);for(let e=0;e<E.length;e+=1)E[e].m(l,t);s(l,O,t),s(l,ul,t),s(l,Nl,t),s(l,Fl,t),P=!0,Sl||(wl=ie(i,"input",n[5]),Sl=!0)},p(l,[t]){if(t&1&&Vl(i.value)!==l[0]&&Tl(i,l[0]),(!P||t&1)&&N(m,l[0]),t&2){Q=l[1];let e;for(e=0;e<Q.length;e+=1){const R=Ol(l,Q,e);F[e]?F[e].p(R,t):(F[e]=Xl(R),F[e].c(),F[e].m(k.parentNode,k))}for(;e<F.length;e+=1)F[e].d(1);F.length=Q.length}if((!P||t&1)&&N(V,l[0]),t&2){X=l[1];let e;for(e=0;e<X.length;e+=1){const R=Ml(l,X,e);S[e]?S[e].p(R,t):(S[e]=Yl(R),S[e].c(),S[e].m(G.parentNode,G))}for(;e<S.length;e+=1)S[e].d(1);S.length=X.length}if(t&2){Y=l[1];let e;for(e=0;e<Y.length;e+=1){const R=Ll(l,Y,e);j[e]?j[e].p(R,t):(j[e]=Zl(R),j[e].c(),j[e].m(H.parentNode,H))}for(;e<j.length;e+=1)j[e].d(1);j.length=Y.length}if((!P||t&2)&&y!==(y=l[2](l[1])+"")&&N(g,y),(!P||t&1)&&N(x,l[0]),t&2){z=l[1];let e;for(e=0;e<z.length;e+=1){const R=Kl(l,z,e);v[e]?(v[e].p(R,t),W(v[e],1)):(v[e]=hl(R),v[e].c(),W(v[e],1),v[e].m(K.parentNode,K))}for(zl(),e=z.length;e<v.length;e+=1)dl(e);Wl()}if(t&2){Z=l[1];let e;for(e=0;e<Z.length;e+=1){const R=Hl(l,Z,e);w[e]?w[e].p(R,t):(w[e]=al(R),w[e].c(),w[e].m(L.parentNode,L))}for(;e<w.length;e+=1)w[e].d(1);w.length=Z.length}if((!P||t&2)&&d!==(d=l[3](l[1])+"")&&N(ll,d),(!P||t&1)&&N(el,l[0]),(!P||t&1)&&N(fl,l[0]),t&2){A=l[1];let e;for(e=0;e<A.length;e+=1){const R=Gl(l,A,e);$[e]?($[e].p(R,t),W($[e],1)):($[e]=yl(R),$[e].c(),W($[e],1),$[e].m(M.parentNode,M))}for(zl(),e=A.length;e<$.length;e+=1)le(e);Wl()}if((!P||t&3)&&tl!==(tl=l[1].reduce(xl,l[0])+"")&&N(il,tl),t&2){h=l[1];let e;for(e=0;e<h.length;e+=1){const R=Dl(l,h,e);E[e]?E[e].p(R,t):(E[e]=gl(R),E[e].c(),E[e].m(O.parentNode,O))}for(;e<E.length;e+=1)E[e].d(1);E.length=h.length}(!P||t&3)&&_l!==(_l=l[4](l[1],l[0])+"")&&N(ul,_l)},i(l){if(!P){for(let t=0;t<z.length;t+=1)W(v[t]);for(let t=0;t<A.length;t+=1)W($[t]);P=!0}},o(l){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)a(v[t]);$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)a($[t]);P=!1},d(l){l&&r(i),l&&r(f),l&&r(_),l&&r(o),l&&r(u),l&&r(m),l&&r(p),D(F,l),l&&r(k),l&&r(B),l&&r(T),l&&r(J),l&&r(V),l&&r(nl),D(S,l),l&&r(G),D(j,l),l&&r(H),l&&r(g),l&&r(ol),l&&r(ml),l&&r(rl),l&&r(sl),l&&r(x),l&&r(pl),D(v,l),l&&r(K),D(w,l),l&&r(L),l&&r(ll),l&&r(bl),l&&r(cl),l&&r(kl),l&&r(vl),l&&r(el),l&&r($l),l&&r(fl),l&&r(Bl),D($,l),l&&r(M),l&&r(il),l&&r(Rl),D(E,l),l&&r(O),l&&r(ul),l&&r(Nl),l&&r(Fl),Sl=!1,wl()}}}const xl=(n,{factor:i})=>n/i;function be(n,i,f){let _,o=42;const u=B=>B.reduce((T,{times:J})=>T*(J+1),1),m=B=>B.reduce((T,{factor:J,times:V})=>T*(J**(V+1)-1)/(J-1),1),p=(B,T)=>B.reduce((J,{factor:V})=>J*(V-1)/V,T);function k(){o=Vl(this.value),f(0,o)}return n.$$.update=()=>{n.$$.dirty&1&&f(1,_=_e.getFrequency(o))},[o,_,u,m,p,k]}class ve extends ee{constructor(i){super();fe(this,i,be,pe,te,{})}}export{ve as default};
