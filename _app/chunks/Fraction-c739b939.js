import{S as O,i as Q,s as z,M as P,e as p,k as B,c as h,a as v,d as u,m as D,b,g as k,G as g,O as w,P as A,Q as E,q as F,o as N,t as C,h as G,j as M}from"./vendor-c9048cd9.js";const H=a=>({}),j=a=>({});function I(a){let e;return{c(){e=C(a[0])},l(t){e=G(t,a[0])},m(t,o){k(t,e,o)},p(t,o){o&1&&M(e,t[0])},d(t){t&&u(e)}}}function J(a){let e;return{c(){e=C(a[1])},l(t){e=G(t,a[1])},m(t,o){k(t,e,o)},p(t,o){o&2&&M(e,t[1])},d(t){t&&u(e)}}}function K(a){let e,t,o,f,n;const c=a[3].default,_=P(c,a,a[2],null),i=_||I(a),d=a[3].denominator,m=P(d,a,a[2],j),r=m||J(a);return{c(){e=p("span"),t=p("span"),i&&i.c(),o=B(),f=p("span"),r&&r.c(),this.h()},l(s){e=h(s,"SPAN",{class:!0});var l=v(e);t=h(l,"SPAN",{class:!0});var q=v(t);i&&i.l(q),q.forEach(u),o=D(l),f=h(l,"SPAN",{class:!0});var S=v(f);r&&r.l(S),S.forEach(u),l.forEach(u),this.h()},h(){b(t,"class","svelte-tw2qvv"),b(f,"class","svelte-tw2qvv"),b(e,"class","fact svelte-tw2qvv")},m(s,l){k(s,e,l),g(e,t),i&&i.m(t,null),g(e,o),g(e,f),r&&r.m(f,null),n=!0},p(s,[l]){_?_.p&&(!n||l&4)&&w(_,c,s,s[2],n?E(c,s[2],l,null):A(s[2]),null):i&&i.p&&(!n||l&1)&&i.p(s,n?l:-1),m?m.p&&(!n||l&4)&&w(m,d,s,s[2],n?E(d,s[2],l,H):A(s[2]),j):r&&r.p&&(!n||l&2)&&r.p(s,n?l:-1)},i(s){n||(F(i,s),F(r,s),n=!0)},o(s){N(i,s),N(r,s),n=!1},d(s){s&&u(e),i&&i.d(s),r&&r.d(s)}}}function L(a,e,t){let{$$slots:o={},$$scope:f}=e,{numerator:n="",denominator:c=""}=e;return a.$$set=_=>{"numerator"in _&&t(0,n=_.numerator),"denominator"in _&&t(1,c=_.denominator),"$$scope"in _&&t(2,f=_.$$scope)},[n,c,f,o]}class T extends O{constructor(e){super();Q(this,e,L,K,z,{numerator:0,denominator:1})}}export{T as F};
