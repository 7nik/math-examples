import{S as ee,i as fe,s as te,k as U,t as b,l as El,n as q,g as c,f as r,h as N,e as C,c as I,a as Pl,d as s,E as jl,j as Ul,m as ql,o as Cl,x as W,u as a,v as Il,b as Jl,V as Tl,F as ie,W as Vl,w as Wl,J as A,Z as _e,r as Zl}from"../chunks/vendor-f2376ecb.js";import{F as zl}from"../chunks/Fraction-1f981ca2.js";function Al(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[8]=f,_}function Dl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[8]=f,_}function Gl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[10]=i[f].times,_[8]=f,_}function Hl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[10]=i[f].times,_[8]=f,_}function Kl(n,i,f){const _=n.slice();return _[10]=i[f].times,_[8]=f,_}function Ll(n,i,f){const _=n.slice();return _[10]=i[f].times,_[8]=f,_}function Ml(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[10]=i[f].times,_[8]=f,_}function ue(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){r(f,i,_)},d(f){f&&s(i)}}}function Ol(n){let i,f=n[10]+"",_;return{c(){i=C("sup"),_=b(f)},l(o){i=I(o,"SUP",{});var u=Pl(i);_=c(u,f),u.forEach(s)},m(o,u){r(o,i,u),jl(i,_)},p(o,u){u&2&&f!==(f=o[10]+"")&&N(_,f)},d(o){o&&s(i)}}}function Ql(n){let i,f=n[6]+"",_,o,u=n[8]>0&&ue(),m=n[10]>1&&Ol(n);return{c(){u&&u.c(),i=U(),_=b(f),m&&m.c(),o=El()},l(p){u&&u.l(p),i=q(p),_=c(p,f),m&&m.l(p),o=El()},m(p,k){u&&u.m(p,k),r(p,i,k),r(p,_,k),m&&m.m(p,k),r(p,o,k)},p(p,k){k&2&&f!==(f=p[6]+"")&&N(_,f),p[10]>1?m?m.p(p,k):(m=Ol(p),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},d(p){u&&u.d(p),p&&s(i),p&&s(_),m&&m.d(p),p&&s(o)}}}function ne(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){r(f,i,_)},d(f){f&&s(i)}}}function Xl(n){let i,f=n[10]+"",_,o,u=n[8]>0&&ne();return{c(){u&&u.c(),i=b(`
	(`),_=b(f),o=b(" + 1)")},l(m){u&&u.l(m),i=c(m,`
	(`),_=c(m,f),o=c(m," + 1)")},m(m,p){u&&u.m(m,p),r(m,i,p),r(m,_,p),r(m,o,p)},p(m,p){p&2&&f!==(f=m[10]+"")&&N(_,f)},d(m){u&&u.d(m),m&&s(i),m&&s(_),m&&s(o)}}}function oe(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){r(f,i,_)},d(f){f&&s(i)}}}function Yl(n){let i,f=n[10]+1+"",_,o=n[8]>0&&oe();return{c(){o&&o.c(),i=U(),_=b(f)},l(u){o&&o.l(u),i=q(u),_=c(u,f)},m(u,m){o&&o.m(u,m),r(u,i,m),r(u,_,m)},p(u,m){m&2&&f!==(f=u[10]+1+"")&&N(_,f)},d(u){o&&o.d(u),u&&s(i),u&&s(_)}}}function me(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){r(f,i,_)},d(f){f&&s(i)}}}function se(n){let i=n[6]+"",f,_,o=n[10]+"",u,m,p;return{c(){f=b(i),_=C("sup"),u=b(o),m=b("+1"),p=b(" - 1")},l(k){f=c(k,i),_=I(k,"SUP",{});var B=Pl(_);u=c(B,o),m=c(B,"+1"),B.forEach(s),p=c(k," - 1")},m(k,B){r(k,f,B),r(k,_,B),jl(_,u),jl(_,m),r(k,p,B)},p(k,B){B&2&&i!==(i=k[6]+"")&&N(f,i),B&2&&o!==(o=k[10]+"")&&N(u,o)},d(k){k&&s(f),k&&s(_),k&&s(p)}}}function hl(n){let i,f,_,o=n[8]>0&&me();return f=new zl({props:{denominator:""+(n[6]+" - 1"),$$slots:{default:[se]},$$scope:{ctx:n}}}),{c(){o&&o.c(),i=U(),Ul(f.$$.fragment)},l(u){o&&o.l(u),i=q(u),ql(f.$$.fragment,u)},m(u,m){o&&o.m(u,m),r(u,i,m),Cl(f,u,m),_=!0},p(u,m){const p={};m&2&&(p.denominator=""+(u[6]+" - 1")),m&65538&&(p.$$scope={dirty:m,ctx:u}),f.$set(p)},i(u){_||(W(f.$$.fragment,u),_=!0)},o(u){a(f.$$.fragment,u),_=!1},d(u){o&&o.d(u),u&&s(i),Il(f,u)}}}function re(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){r(f,i,_)},d(f){f&&s(i)}}}function al(n){let i,f=(n[6]**(n[10]+1)-1)/(n[6]-1)+"",_,o=n[8]>0&&re();return{c(){o&&o.c(),i=U(),_=b(f)},l(u){o&&o.l(u),i=q(u),_=c(u,f)},m(u,m){o&&o.m(u,m),r(u,i,m),r(u,_,m)},p(u,m){m&2&&f!==(f=(u[6]**(u[10]+1)-1)/(u[6]-1)+"")&&N(_,f)},d(u){o&&o.d(u),u&&s(i),u&&s(_)}}}function yl(n){let i,f,_;return f=new zl({props:{numerator:""+(n[6]+" - 1"),denominator:n[6]}}),{c(){i=b(`\xA0\xB7 
    `),Ul(f.$$.fragment)},l(o){i=c(o,`\xA0\xB7 
    `),ql(f.$$.fragment,o)},m(o,u){r(o,i,u),Cl(f,o,u),_=!0},p(o,u){const m={};u&2&&(m.numerator=""+(o[6]+" - 1")),u&2&&(m.denominator=o[6]),f.$set(m)},i(o){_||(W(f.$$.fragment,o),_=!0)},o(o){a(f.$$.fragment,o),_=!1},d(o){o&&s(i),Il(f,o)}}}function gl(n){let i,f=n[6]-1+"",_;return{c(){i=b(`\xA0\xB7 
	`),_=b(f)},l(o){i=c(o,`\xA0\xB7 
	`),_=c(o,f)},m(o,u){r(o,i,u),r(o,_,u)},p(o,u){u&2&&f!==(f=o[6]-1+"")&&N(_,f)},d(o){o&&s(i),o&&s(_)}}}function pe(n){let i,f,_,o,u,m,p,k,B,T,J,V,y,D,G,g=n[2](n[1])+"",x,ol,ml,sl,rl,d,pl,H,K,ll=n[3](n[1])+"",el,bl,cl,kl,vl,fl,$l,tl,Bl,L,il=n[1].reduce(xl,n[0])+"",_l,Rl,M,ul=n[4](n[1],n[0])+"",nl,Nl,Fl,P,Sl,wl,O=n[1],F=[];for(let l=0;l<O.length;l+=1)F[l]=Ql(Ml(n,O,l));let Q=n[1],S=[];for(let l=0;l<Q.length;l+=1)S[l]=Xl(Ll(n,Q,l));let X=n[1],j=[];for(let l=0;l<X.length;l+=1)j[l]=Yl(Kl(n,X,l));let Z=n[1],v=[];for(let l=0;l<Z.length;l+=1)v[l]=hl(Hl(n,Z,l));const dl=l=>a(v[l],1,1,()=>{v[l]=null});let Y=n[1],w=[];for(let l=0;l<Y.length;l+=1)w[l]=al(Gl(n,Y,l));let z=n[1],$=[];for(let l=0;l<z.length;l+=1)$[l]=yl(Dl(n,z,l));const le=l=>a($[l],1,1,()=>{$[l]=null});let h=n[1],E=[];for(let l=0;l<h.length;l+=1)E[l]=gl(Al(n,h,l));return{c(){i=C("input"),f=U(),_=C("br"),o=C("br"),u=U(),m=b(n[0]),p=b(` = 
`);for(let l=0;l<F.length;l+=1)F[l].c();k=U(),B=C("br"),T=C("br"),J=b(`

\u03C4(`),V=b(n[0]),y=b(`)
= 
`);for(let l=0;l<S.length;l+=1)S[l].c();D=b(`
=
`);for(let l=0;l<j.length;l+=1)j[l].c();G=b(`
=
`),x=b(g),ol=U(),ml=C("br"),sl=C("br"),rl=b(`

\u03C3(`),d=b(n[0]),pl=b(`)
= 
`);for(let l=0;l<v.length;l+=1)v[l].c();H=b(`
=
`);for(let l=0;l<w.length;l+=1)w[l].c();K=b(`
=
`),el=b(ll),bl=U(),cl=C("br"),kl=C("br"),vl=b(`

\u03C6(`),fl=b(n[0]),$l=b(`)
= 
`),tl=b(n[0]),Bl=U();for(let l=0;l<$.length;l+=1)$[l].c();L=b(`
=
`),_l=b(il),Rl=U();for(let l=0;l<E.length;l+=1)E[l].c();M=b(`
=
`),nl=b(ul),Nl=U(),Fl=C("br"),this.h()},l(l){i=I(l,"INPUT",{type:!0,min:!0}),f=q(l),_=I(l,"BR",{}),o=I(l,"BR",{}),u=q(l),m=c(l,n[0]),p=c(l,` = 
`);for(let t=0;t<F.length;t+=1)F[t].l(l);k=q(l),B=I(l,"BR",{}),T=I(l,"BR",{}),J=c(l,`

\u03C4(`),V=c(l,n[0]),y=c(l,`)
= 
`);for(let t=0;t<S.length;t+=1)S[t].l(l);D=c(l,`
=
`);for(let t=0;t<j.length;t+=1)j[t].l(l);G=c(l,`
=
`),x=c(l,g),ol=q(l),ml=I(l,"BR",{}),sl=I(l,"BR",{}),rl=c(l,`

\u03C3(`),d=c(l,n[0]),pl=c(l,`)
= 
`);for(let t=0;t<v.length;t+=1)v[t].l(l);H=c(l,`
=
`);for(let t=0;t<w.length;t+=1)w[t].l(l);K=c(l,`
=
`),el=c(l,ll),bl=q(l),cl=I(l,"BR",{}),kl=I(l,"BR",{}),vl=c(l,`

\u03C6(`),fl=c(l,n[0]),$l=c(l,`)
= 
`),tl=c(l,n[0]),Bl=q(l);for(let t=0;t<$.length;t+=1)$[t].l(l);L=c(l,`
=
`),_l=c(l,il),Rl=q(l);for(let t=0;t<E.length;t+=1)E[t].l(l);M=c(l,`
=
`),nl=c(l,ul),Nl=q(l),Fl=I(l,"BR",{}),this.h()},h(){Jl(i,"type","number"),Jl(i,"min","2")},m(l,t){r(l,i,t),Tl(i,n[0]),r(l,f,t),r(l,_,t),r(l,o,t),r(l,u,t),r(l,m,t),r(l,p,t);for(let e=0;e<F.length;e+=1)F[e].m(l,t);r(l,k,t),r(l,B,t),r(l,T,t),r(l,J,t),r(l,V,t),r(l,y,t);for(let e=0;e<S.length;e+=1)S[e].m(l,t);r(l,D,t);for(let e=0;e<j.length;e+=1)j[e].m(l,t);r(l,G,t),r(l,x,t),r(l,ol,t),r(l,ml,t),r(l,sl,t),r(l,rl,t),r(l,d,t),r(l,pl,t);for(let e=0;e<v.length;e+=1)v[e].m(l,t);r(l,H,t);for(let e=0;e<w.length;e+=1)w[e].m(l,t);r(l,K,t),r(l,el,t),r(l,bl,t),r(l,cl,t),r(l,kl,t),r(l,vl,t),r(l,fl,t),r(l,$l,t),r(l,tl,t),r(l,Bl,t);for(let e=0;e<$.length;e+=1)$[e].m(l,t);r(l,L,t),r(l,_l,t),r(l,Rl,t);for(let e=0;e<E.length;e+=1)E[e].m(l,t);r(l,M,t),r(l,nl,t),r(l,Nl,t),r(l,Fl,t),P=!0,Sl||(wl=ie(i,"input",n[5]),Sl=!0)},p(l,[t]){if(t&1&&Vl(i.value)!==l[0]&&Tl(i,l[0]),(!P||t&1)&&N(m,l[0]),t&2){O=l[1];let e;for(e=0;e<O.length;e+=1){const R=Ml(l,O,e);F[e]?F[e].p(R,t):(F[e]=Ql(R),F[e].c(),F[e].m(k.parentNode,k))}for(;e<F.length;e+=1)F[e].d(1);F.length=O.length}if((!P||t&1)&&N(V,l[0]),t&2){Q=l[1];let e;for(e=0;e<Q.length;e+=1){const R=Ll(l,Q,e);S[e]?S[e].p(R,t):(S[e]=Xl(R),S[e].c(),S[e].m(D.parentNode,D))}for(;e<S.length;e+=1)S[e].d(1);S.length=Q.length}if(t&2){X=l[1];let e;for(e=0;e<X.length;e+=1){const R=Kl(l,X,e);j[e]?j[e].p(R,t):(j[e]=Yl(R),j[e].c(),j[e].m(G.parentNode,G))}for(;e<j.length;e+=1)j[e].d(1);j.length=X.length}if((!P||t&2)&&g!==(g=l[2](l[1])+"")&&N(x,g),(!P||t&1)&&N(d,l[0]),t&2){Z=l[1];let e;for(e=0;e<Z.length;e+=1){const R=Hl(l,Z,e);v[e]?(v[e].p(R,t),W(v[e],1)):(v[e]=hl(R),v[e].c(),W(v[e],1),v[e].m(H.parentNode,H))}for(Zl(),e=Z.length;e<v.length;e+=1)dl(e);Wl()}if(t&2){Y=l[1];let e;for(e=0;e<Y.length;e+=1){const R=Gl(l,Y,e);w[e]?w[e].p(R,t):(w[e]=al(R),w[e].c(),w[e].m(K.parentNode,K))}for(;e<w.length;e+=1)w[e].d(1);w.length=Y.length}if((!P||t&2)&&ll!==(ll=l[3](l[1])+"")&&N(el,ll),(!P||t&1)&&N(fl,l[0]),(!P||t&1)&&N(tl,l[0]),t&2){z=l[1];let e;for(e=0;e<z.length;e+=1){const R=Dl(l,z,e);$[e]?($[e].p(R,t),W($[e],1)):($[e]=yl(R),$[e].c(),W($[e],1),$[e].m(L.parentNode,L))}for(Zl(),e=z.length;e<$.length;e+=1)le(e);Wl()}if((!P||t&3)&&il!==(il=l[1].reduce(xl,l[0])+"")&&N(_l,il),t&2){h=l[1];let e;for(e=0;e<h.length;e+=1){const R=Al(l,h,e);E[e]?E[e].p(R,t):(E[e]=gl(R),E[e].c(),E[e].m(M.parentNode,M))}for(;e<E.length;e+=1)E[e].d(1);E.length=h.length}(!P||t&3)&&ul!==(ul=l[4](l[1],l[0])+"")&&N(nl,ul)},i(l){if(!P){for(let t=0;t<Z.length;t+=1)W(v[t]);for(let t=0;t<z.length;t+=1)W($[t]);P=!0}},o(l){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)a(v[t]);$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)a($[t]);P=!1},d(l){l&&s(i),l&&s(f),l&&s(_),l&&s(o),l&&s(u),l&&s(m),l&&s(p),A(F,l),l&&s(k),l&&s(B),l&&s(T),l&&s(J),l&&s(V),l&&s(y),A(S,l),l&&s(D),A(j,l),l&&s(G),l&&s(x),l&&s(ol),l&&s(ml),l&&s(sl),l&&s(rl),l&&s(d),l&&s(pl),A(v,l),l&&s(H),A(w,l),l&&s(K),l&&s(el),l&&s(bl),l&&s(cl),l&&s(kl),l&&s(vl),l&&s(fl),l&&s($l),l&&s(tl),l&&s(Bl),A($,l),l&&s(L),l&&s(_l),l&&s(Rl),A(E,l),l&&s(M),l&&s(nl),l&&s(Nl),l&&s(Fl),Sl=!1,wl()}}}const xl=(n,{factor:i})=>n/i;function be(n,i,f){let _,o=42;const u=B=>B.reduce((T,{times:J})=>T*(J+1),1),m=B=>B.reduce((T,{factor:J,times:V})=>T*(J**(V+1)-1)/(J-1),1),p=(B,T)=>B.reduce((J,{factor:V,times:y})=>J*(V-1)/V,T);function k(){o=Vl(this.value),f(0,o)}return n.$$.update=()=>{n.$$.dirty&1&&f(1,_=_e.getFrequency(o))},[o,_,u,m,p,k]}class ve extends ee{constructor(i){super();fe(this,i,be,pe,te,{})}}export{ve as default};
