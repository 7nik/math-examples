import{S as ee,i as fe,s as te,k as C,t as b,l as Pl,m as G,h as c,g as p,j as N,e as E,c as j,a as Yl,d as r,G as ql,w as Zl,x as hl,y as al,q as T,o as a,B as yl,b as Ul,V as El,H as ie,W as gl,p as jl,L as z,ah as _e,n as Cl}from"../chunks/vendor-c9048cd9.js";import{F as xl}from"../chunks/Fraction-c739b939.js";function Gl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_}function Hl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_}function Il(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function Ll(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function Tl(n,i,f){const _=n.slice();return _[11]=i[f].times,_[13]=f,_}function Vl(n,i,f){const _=n.slice();return _[11]=i[f].times,_[13]=f,_}function Wl(n,i,f){const _=n.slice();return _[6]=i[f].factor,_[11]=i[f].times,_[13]=f,_}function ue(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function zl(n){let i,f=n[11]+"",_;return{c(){i=E("sup"),_=b(f)},l(o){i=j(o,"SUP",{});var u=Yl(i);_=c(u,f),u.forEach(r)},m(o,u){p(o,i,u),ql(i,_)},p(o,u){u&2&&f!==(f=o[11]+"")&&N(_,f)},d(o){o&&r(i)}}}function Al(n){let i,f=n[6]+"",_,o,u=n[13]>0&&ue(),m=n[11]>1&&zl(n);return{c(){u&&u.c(),i=C(),_=b(f),m&&m.c(),o=Pl()},l(s){u&&u.l(s),i=G(s),_=c(s,f),m&&m.l(s),o=Pl()},m(s,k){u&&u.m(s,k),p(s,i,k),p(s,_,k),m&&m.m(s,k),p(s,o,k)},p(s,k){k&2&&f!==(f=s[6]+"")&&N(_,f),s[11]>1?m?m.p(s,k):(m=zl(s),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},d(s){u&&u.d(s),s&&r(i),s&&r(_),m&&m.d(s),s&&r(o)}}}function ne(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function Dl(n){let i,f=n[11]+"",_,o,u=n[13]>0&&ne();return{c(){u&&u.c(),i=b(`
	(`),_=b(f),o=b(" + 1)")},l(m){u&&u.l(m),i=c(m,`
	(`),_=c(m,f),o=c(m," + 1)")},m(m,s){u&&u.m(m,s),p(m,i,s),p(m,_,s),p(m,o,s)},p(m,s){s&2&&f!==(f=m[11]+"")&&N(_,f)},d(m){u&&u.d(m),m&&r(i),m&&r(_),m&&r(o)}}}function oe(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function Jl(n){let i,f=n[11]+1+"",_,o=n[13]>0&&oe();return{c(){o&&o.c(),i=C(),_=b(f)},l(u){o&&o.l(u),i=G(u),_=c(u,f)},m(u,m){o&&o.m(u,m),p(u,i,m),p(u,_,m)},p(u,m){m&2&&f!==(f=u[11]+1+"")&&N(_,f)},d(u){o&&o.d(u),u&&r(i),u&&r(_)}}}function me(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function re(n){let i=n[6]+"",f,_,o=n[11]+"",u,m,s;return{c(){f=b(i),_=E("sup"),u=b(o),m=b("+1"),s=b(" - 1")},l(k){f=c(k,i),_=j(k,"SUP",{});var B=Yl(_);u=c(B,o),m=c(B,"+1"),B.forEach(r),s=c(k," - 1")},m(k,B){p(k,f,B),p(k,_,B),ql(_,u),ql(_,m),p(k,s,B)},p(k,B){B&2&&i!==(i=k[6]+"")&&N(f,i),B&2&&o!==(o=k[11]+"")&&N(u,o)},d(k){k&&r(f),k&&r(_),k&&r(s)}}}function Kl(n){let i,f,_,o=n[13]>0&&me();return f=new xl({props:{denominator:n[6]+" - 1",$$slots:{default:[re]},$$scope:{ctx:n}}}),{c(){o&&o.c(),i=C(),Zl(f.$$.fragment)},l(u){o&&o.l(u),i=G(u),hl(f.$$.fragment,u)},m(u,m){o&&o.m(u,m),p(u,i,m),al(f,u,m),_=!0},p(u,m){const s={};m&2&&(s.denominator=u[6]+" - 1"),m&262146&&(s.$$scope={dirty:m,ctx:u}),f.$set(s)},i(u){_||(T(f.$$.fragment,u),_=!0)},o(u){a(f.$$.fragment,u),_=!1},d(u){o&&o.d(u),u&&r(i),yl(f,u)}}}function pe(n){let i;return{c(){i=b("\xA0\xB7")},l(f){i=c(f,"\xA0\xB7")},m(f,_){p(f,i,_)},d(f){f&&r(i)}}}function Ml(n){let i,f=(n[6]**(n[11]+1)-1)/(n[6]-1)+"",_,o=n[13]>0&&pe();return{c(){o&&o.c(),i=C(),_=b(f)},l(u){o&&o.l(u),i=G(u),_=c(u,f)},m(u,m){o&&o.m(u,m),p(u,i,m),p(u,_,m)},p(u,m){m&2&&f!==(f=(u[6]**(u[11]+1)-1)/(u[6]-1)+"")&&N(_,f)},d(u){o&&o.d(u),u&&r(i),u&&r(_)}}}function Ol(n){let i,f,_;return f=new xl({props:{numerator:n[6]+" - 1",denominator:n[6].toString()}}),{c(){i=b(`\xA0\xB7 
    `),Zl(f.$$.fragment)},l(o){i=c(o,`\xA0\xB7 
    `),hl(f.$$.fragment,o)},m(o,u){p(o,i,u),al(f,o,u),_=!0},p(o,u){const m={};u&2&&(m.numerator=o[6]+" - 1"),u&2&&(m.denominator=o[6].toString()),f.$set(m)},i(o){_||(T(f.$$.fragment,o),_=!0)},o(o){a(f.$$.fragment,o),_=!1},d(o){o&&r(i),yl(f,o)}}}function Ql(n){let i,f=n[6]-1+"",_;return{c(){i=b(`\xA0\xB7 
	`),_=b(f)},l(o){i=c(o,`\xA0\xB7 
	`),_=c(o,f)},m(o,u){p(o,i,u),p(o,_,u)},p(o,u){u&2&&f!==(f=o[6]-1+"")&&N(_,f)},d(o){o&&r(i),o&&r(_)}}}function se(n){let i,f,_,o,u,m,s,k,B,I,H,L,nl,A,D,y=n[2](n[1])+"",g,ol,ml,rl,pl,x,sl,J,K,d=n[3](n[1])+"",ll,bl,cl,kl,$l,el,vl,fl,Bl,M,tl=n[1].reduce(Xl,n[0])+"",il,Rl,O,_l=n[4](n[1],n[0])+"",ul,Nl,Sl,U,Fl,wl,Q=n[1],S=[];for(let l=0;l<Q.length;l+=1)S[l]=Al(Wl(n,Q,l));let X=n[1],F=[];for(let l=0;l<X.length;l+=1)F[l]=Dl(Vl(n,X,l));let Y=n[1],q=[];for(let l=0;l<Y.length;l+=1)q[l]=Jl(Tl(n,Y,l));let V=n[1],$=[];for(let l=0;l<V.length;l+=1)$[l]=Kl(Ll(n,V,l));const dl=l=>a($[l],1,1,()=>{$[l]=null});let Z=n[1],w=[];for(let l=0;l<Z.length;l+=1)w[l]=Ml(Il(n,Z,l));let W=n[1],v=[];for(let l=0;l<W.length;l+=1)v[l]=Ol(Hl(n,W,l));const le=l=>a(v[l],1,1,()=>{v[l]=null});let h=n[1],P=[];for(let l=0;l<h.length;l+=1)P[l]=Ql(Gl(n,h,l));return{c(){i=E("input"),f=C(),_=E("br"),o=E("br"),u=C(),m=b(n[0]),s=b(` = 
`);for(let l=0;l<S.length;l+=1)S[l].c();k=C(),B=E("br"),I=E("br"),H=b(`

\u03C4(`),L=b(n[0]),nl=b(`)
= 
`);for(let l=0;l<F.length;l+=1)F[l].c();A=b(`
=
`);for(let l=0;l<q.length;l+=1)q[l].c();D=b(`
=
`),g=b(y),ol=C(),ml=E("br"),rl=E("br"),pl=b(`

\u03C3(`),x=b(n[0]),sl=b(`)
= 
`);for(let l=0;l<$.length;l+=1)$[l].c();J=b(`
=
`);for(let l=0;l<w.length;l+=1)w[l].c();K=b(`
=
`),ll=b(d),bl=C(),cl=E("br"),kl=E("br"),$l=b(`

\u03C6(`),el=b(n[0]),vl=b(`)
= 
`),fl=b(n[0]),Bl=C();for(let l=0;l<v.length;l+=1)v[l].c();M=b(`
=
`),il=b(tl),Rl=C();for(let l=0;l<P.length;l+=1)P[l].c();O=b(`
=
`),ul=b(_l),Nl=C(),Sl=E("br"),this.h()},l(l){i=j(l,"INPUT",{type:!0,min:!0}),f=G(l),_=j(l,"BR",{}),o=j(l,"BR",{}),u=G(l),m=c(l,n[0]),s=c(l,` = 
`);for(let t=0;t<S.length;t+=1)S[t].l(l);k=G(l),B=j(l,"BR",{}),I=j(l,"BR",{}),H=c(l,`

\u03C4(`),L=c(l,n[0]),nl=c(l,`)
= 
`);for(let t=0;t<F.length;t+=1)F[t].l(l);A=c(l,`
=
`);for(let t=0;t<q.length;t+=1)q[t].l(l);D=c(l,`
=
`),g=c(l,y),ol=G(l),ml=j(l,"BR",{}),rl=j(l,"BR",{}),pl=c(l,`

\u03C3(`),x=c(l,n[0]),sl=c(l,`)
= 
`);for(let t=0;t<$.length;t+=1)$[t].l(l);J=c(l,`
=
`);for(let t=0;t<w.length;t+=1)w[t].l(l);K=c(l,`
=
`),ll=c(l,d),bl=G(l),cl=j(l,"BR",{}),kl=j(l,"BR",{}),$l=c(l,`

\u03C6(`),el=c(l,n[0]),vl=c(l,`)
= 
`),fl=c(l,n[0]),Bl=G(l);for(let t=0;t<v.length;t+=1)v[t].l(l);M=c(l,`
=
`),il=c(l,tl),Rl=G(l);for(let t=0;t<P.length;t+=1)P[t].l(l);O=c(l,`
=
`),ul=c(l,_l),Nl=G(l),Sl=j(l,"BR",{}),this.h()},h(){Ul(i,"type","number"),Ul(i,"min","2")},m(l,t){p(l,i,t),El(i,n[0]),p(l,f,t),p(l,_,t),p(l,o,t),p(l,u,t),p(l,m,t),p(l,s,t);for(let e=0;e<S.length;e+=1)S[e].m(l,t);p(l,k,t),p(l,B,t),p(l,I,t),p(l,H,t),p(l,L,t),p(l,nl,t);for(let e=0;e<F.length;e+=1)F[e].m(l,t);p(l,A,t);for(let e=0;e<q.length;e+=1)q[e].m(l,t);p(l,D,t),p(l,g,t),p(l,ol,t),p(l,ml,t),p(l,rl,t),p(l,pl,t),p(l,x,t),p(l,sl,t);for(let e=0;e<$.length;e+=1)$[e].m(l,t);p(l,J,t);for(let e=0;e<w.length;e+=1)w[e].m(l,t);p(l,K,t),p(l,ll,t),p(l,bl,t),p(l,cl,t),p(l,kl,t),p(l,$l,t),p(l,el,t),p(l,vl,t),p(l,fl,t),p(l,Bl,t);for(let e=0;e<v.length;e+=1)v[e].m(l,t);p(l,M,t),p(l,il,t),p(l,Rl,t);for(let e=0;e<P.length;e+=1)P[e].m(l,t);p(l,O,t),p(l,ul,t),p(l,Nl,t),p(l,Sl,t),U=!0,Fl||(wl=ie(i,"input",n[5]),Fl=!0)},p(l,[t]){if(t&1&&gl(i.value)!==l[0]&&El(i,l[0]),(!U||t&1)&&N(m,l[0]),t&2){Q=l[1];let e;for(e=0;e<Q.length;e+=1){const R=Wl(l,Q,e);S[e]?S[e].p(R,t):(S[e]=Al(R),S[e].c(),S[e].m(k.parentNode,k))}for(;e<S.length;e+=1)S[e].d(1);S.length=Q.length}if((!U||t&1)&&N(L,l[0]),t&2){X=l[1];let e;for(e=0;e<X.length;e+=1){const R=Vl(l,X,e);F[e]?F[e].p(R,t):(F[e]=Dl(R),F[e].c(),F[e].m(A.parentNode,A))}for(;e<F.length;e+=1)F[e].d(1);F.length=X.length}if(t&2){Y=l[1];let e;for(e=0;e<Y.length;e+=1){const R=Tl(l,Y,e);q[e]?q[e].p(R,t):(q[e]=Jl(R),q[e].c(),q[e].m(D.parentNode,D))}for(;e<q.length;e+=1)q[e].d(1);q.length=Y.length}if((!U||t&2)&&y!==(y=l[2](l[1])+"")&&N(g,y),(!U||t&1)&&N(x,l[0]),t&2){V=l[1];let e;for(e=0;e<V.length;e+=1){const R=Ll(l,V,e);$[e]?($[e].p(R,t),T($[e],1)):($[e]=Kl(R),$[e].c(),T($[e],1),$[e].m(J.parentNode,J))}for(Cl(),e=V.length;e<$.length;e+=1)dl(e);jl()}if(t&2){Z=l[1];let e;for(e=0;e<Z.length;e+=1){const R=Il(l,Z,e);w[e]?w[e].p(R,t):(w[e]=Ml(R),w[e].c(),w[e].m(K.parentNode,K))}for(;e<w.length;e+=1)w[e].d(1);w.length=Z.length}if((!U||t&2)&&d!==(d=l[3](l[1])+"")&&N(ll,d),(!U||t&1)&&N(el,l[0]),(!U||t&1)&&N(fl,l[0]),t&2){W=l[1];let e;for(e=0;e<W.length;e+=1){const R=Hl(l,W,e);v[e]?(v[e].p(R,t),T(v[e],1)):(v[e]=Ol(R),v[e].c(),T(v[e],1),v[e].m(M.parentNode,M))}for(Cl(),e=W.length;e<v.length;e+=1)le(e);jl()}if((!U||t&3)&&tl!==(tl=l[1].reduce(Xl,l[0])+"")&&N(il,tl),t&2){h=l[1];let e;for(e=0;e<h.length;e+=1){const R=Gl(l,h,e);P[e]?P[e].p(R,t):(P[e]=Ql(R),P[e].c(),P[e].m(O.parentNode,O))}for(;e<P.length;e+=1)P[e].d(1);P.length=h.length}(!U||t&3)&&_l!==(_l=l[4](l[1],l[0])+"")&&N(ul,_l)},i(l){if(!U){for(let t=0;t<V.length;t+=1)T($[t]);for(let t=0;t<W.length;t+=1)T(v[t]);U=!0}},o(l){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)a($[t]);v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)a(v[t]);U=!1},d(l){l&&r(i),l&&r(f),l&&r(_),l&&r(o),l&&r(u),l&&r(m),l&&r(s),z(S,l),l&&r(k),l&&r(B),l&&r(I),l&&r(H),l&&r(L),l&&r(nl),z(F,l),l&&r(A),z(q,l),l&&r(D),l&&r(g),l&&r(ol),l&&r(ml),l&&r(rl),l&&r(pl),l&&r(x),l&&r(sl),z($,l),l&&r(J),z(w,l),l&&r(K),l&&r(ll),l&&r(bl),l&&r(cl),l&&r(kl),l&&r($l),l&&r(el),l&&r(vl),l&&r(fl),l&&r(Bl),z(v,l),l&&r(M),l&&r(il),l&&r(Rl),z(P,l),l&&r(O),l&&r(ul),l&&r(Nl),l&&r(Sl),Fl=!1,wl()}}}const Xl=(n,{factor:i})=>n/i;function be(n,i,f){let _,o=42;const u=B=>B.reduce((I,{times:H})=>I*(H+1),1),m=B=>B.reduce((I,{factor:H,times:L})=>I*(H**(L+1)-1)/(H-1),1),s=(B,I)=>B.reduce((H,{factor:L})=>H*(L-1)/L,I);function k(){o=gl(this.value),f(0,o)}return n.$$.update=()=>{n.$$.dirty&1&&f(1,_=_e.getFrequency(o))},[o,_,u,m,s,k]}class $e extends ee{constructor(i){super();fe(this,i,be,se,te,{})}}export{$e as default};
