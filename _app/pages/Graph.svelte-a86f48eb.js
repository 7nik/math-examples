import{S as Le,i as je,s as x,e as S,t as C,c as T,a as N,g as Y,d as g,b as u,f as w,E as j,T as Z,k as B,l as L,n as U,J as q,_ as X,$ as G,G as ee,F,a0 as ze,a1 as $,a2 as Me,h as O,Y as le,V as W,W as H,a3 as Ie,X as te}from"../chunks/vendor-c0bf6db0.js";function ne(e,l,i){const t=e.slice();return t[17]=l[i].i,t[18]=l[i].x,t[19]=l[i].y,t}function ie(e,l,i){const t=e.slice();return t[22]=l[i],t[24]=i,t}function re(e,l,i){const t=e.slice();return t[25]=l[i].enabled,t[26]=l[i].w,t[28]=i,t}function se(e,l,i){const t=e.slice();return t[22]=l[i],t[24]=i,t}function oe(e,l,i){const t=e.slice();return t[25]=l[i].enabled,t[26]=l[i].w,t[28]=i,t}function ue(e,l,i){const t=e.slice();return t[22]=l[i],t[31]=l,t[17]=i,t}function fe(e,l,i){const t=e.slice();return t[32]=l[i],t[33]=l,t[34]=i,t}function ae(e,l,i){const t=e.slice();return t[35]=l[i],t[17]=i,t}function _e(e){let l,i=e[17]+1+"",t;return{c(){l=S("div"),t=C(i),this.h()},l(n){l=T(n,"DIV",{class:!0});var r=N(l);t=Y(r,i),r.forEach(g),this.h()},h(){u(l,"class","header svelte-1682wjv")},m(n,r){w(n,l,r),j(l,t)},p:Z,d(n){n&&g(l)}}}function Ne(e){let l,i,t,n,r,s,_,f;function c(){e[13].call(i,e[34],e[17])}function h(){e[14].call(n,e[34],e[17])}return{c(){l=S("label"),i=S("input"),t=B(),n=S("input"),s=B(),this.h()},l(v){l=T(v,"LABEL",{class:!0});var d=N(l);i=T(d,"INPUT",{type:!0,class:!0}),t=U(d),n=T(d,"INPUT",{type:!0,min:!0,max:!0,class:!0}),s=U(d),d.forEach(g),this.h()},h(){u(i,"type","checkbox"),u(i,"class","svelte-1682wjv"),u(n,"type","number"),u(n,"min","0"),u(n,"max","100"),n.disabled=r=!e[1][e[34]][e[17]].enabled,u(n,"class","svelte-1682wjv"),u(l,"class","svelte-1682wjv")},m(v,d){w(v,l,d),j(l,i),i.checked=e[1][e[34]][e[17]].enabled,j(l,t),j(l,n),W(n,e[1][e[34]][e[17]].w),j(l,s),_||(f=[F(i,"change",c),F(n,"input",h)],_=!0)},p(v,d){e=v,d[0]&2&&(i.checked=e[1][e[34]][e[17]].enabled),d[0]&2&&r!==(r=!e[1][e[34]][e[17]].enabled)&&(n.disabled=r),d[0]&2&&H(n.value)!==e[1][e[34]][e[17]].w&&W(n,e[1][e[34]][e[17]].w)},d(v){v&&g(l),_=!1,te(f)}}}function Pe(e){let l,i,t,n,r,s,_,f;function c(){e[11].call(i,e[33],e[34])}function h(){e[12].call(n,e[33],e[34])}return{c(){l=S("label"),i=S("input"),t=B(),n=S("input"),s=B(),this.h()},l(v){l=T(v,"LABEL",{class:!0});var d=N(l);i=T(d,"INPUT",{type:!0,class:!0}),t=U(d),n=T(d,"INPUT",{type:!0,min:!0,max:!0,class:!0}),s=U(d),d.forEach(g),this.h()},h(){u(i,"type","checkbox"),u(i,"class","svelte-1682wjv"),u(n,"type","number"),u(n,"min","0"),u(n,"max","100"),n.disabled=r=!e[32].enabled,u(n,"class","svelte-1682wjv"),u(l,"class","svelte-1682wjv")},m(v,d){w(v,l,d),j(l,i),i.checked=e[32].enabled,j(l,t),j(l,n),W(n,e[32].w),j(l,s),_||(f=[F(i,"change",c),F(n,"input",h)],_=!0)},p(v,d){e=v,d[0]&2&&(i.checked=e[32].enabled),d[0]&2&&r!==(r=!e[32].enabled)&&(n.disabled=r),d[0]&2&&H(n.value)!==e[32].w&&W(n,e[32].w)},d(v){v&&g(l),_=!1,te(f)}}}function he(e){let l;function i(r,s){return r[34]>=r[17]?Pe:Ne}let n=i(e)(e);return{c(){n.c(),l=L()},l(r){n.l(r),l=L()},m(r,s){n.m(r,s),w(r,l,s)},p(r,s){n.p(r,s)},d(r){n.d(r),r&&g(l)}}}function ce(e){let l,i=e[17]+1+"",t,n,r,s=e[22],_=[];for(let f=0;f<s.length;f+=1)_[f]=he(fe(e,s,f));return{c(){l=S("div"),t=C(i),n=B();for(let f=0;f<_.length;f+=1)_[f].c();r=L(),this.h()},l(f){l=T(f,"DIV",{class:!0});var c=N(l);t=Y(c,i),c.forEach(g),n=U(f);for(let h=0;h<_.length;h+=1)_[h].l(f);r=L(),this.h()},h(){u(l,"class","header svelte-1682wjv")},m(f,c){w(f,l,c),j(l,t),w(f,n,c);for(let h=0;h<_.length;h+=1)_[h].m(f,c);w(f,r,c)},p(f,c){if(c[0]&2){s=f[22];let h;for(h=0;h<s.length;h+=1){const v=fe(f,s,h);_[h]?_[h].p(v,c):(_[h]=he(v),_[h].c(),_[h].m(r.parentNode,r))}for(;h<_.length;h+=1)_[h].d(1);_.length=s.length}},d(f){f&&g(l),f&&g(n),q(_,f),f&&g(r)}}}function me(e){let l;function i(r,s){return r[24]==r[28]?Se:De}let n=i(e)(e);return{c(){n.c(),l=L()},l(r){n.l(r),l=L()},m(r,s){n.m(r,s),w(r,l,s)},p(r,s){n.p(r,s)},d(r){n.d(r),r&&g(l)}}}function De(e){let l,i,t,n,r;function s(){return e[16](e[24],e[28])}return{c(){l=X("polyline"),this.h()},l(_){l=G(_,"polyline",{points:!0,transform:!0,fill:!0,stroke:!0,"stroke-width":!0,class:!0}),N(l).forEach(g),this.h()},h(){u(l,"points",i=""+(e[2][e[24]].x+","+e[2][e[24]].y+" "+e[2][e[28]].x+","+e[2][e[28]].y)),u(l,"transform","translate("+y+", "+y+") scale("+z+")"),u(l,"fill","none"),u(l,"stroke",e[4](e[24],e[28])),u(l,"stroke-width",t=(e[26]+10)/20/z),u(l,"class","off svelte-1682wjv")},m(_,f){w(_,l,f),n||(r=F(l,"click",s),n=!0)},p(_,f){e=_,f[0]&4&&i!==(i=""+(e[2][e[24]].x+","+e[2][e[24]].y+" "+e[2][e[28]].x+","+e[2][e[28]].y))&&u(l,"points",i),f[0]&2&&t!==(t=(e[26]+10)/20/z)&&u(l,"stroke-width",t)},d(_){_&&g(l),n=!1,r()}}}function Se(e){let l,i,t,n,r,s;function _(){return e[15](e[24],e[28])}return{c(){l=X("circle"),this.h()},l(f){l=G(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0,class:!0}),N(l).forEach(g),this.h()},h(){u(l,"cx",i=y+e[2][e[24]].x*Q),u(l,"cy",t=y+e[2][e[24]].y*Q),u(l,"r","10"),u(l,"fill","none"),u(l,"stroke",e[4](e[24],e[28])),u(l,"stroke-width",n=(e[26]+5)/20),u(l,"class","off svelte-1682wjv")},m(f,c){w(f,l,c),r||(s=F(l,"click",_),r=!0)},p(f,c){e=f,c[0]&4&&i!==(i=y+e[2][e[24]].x*Q)&&u(l,"cx",i),c[0]&4&&t!==(t=y+e[2][e[24]].y*Q)&&u(l,"cy",t),c[0]&2&&n!==(n=(e[26]+5)/20)&&u(l,"stroke-width",n)},d(f){f&&g(l),r=!1,s()}}}function pe(e){let l,i=e[25]&&e[28]>=e[24]&&me(e);return{c(){i&&i.c(),l=L()},l(t){i&&i.l(t),l=L()},m(t,n){i&&i.m(t,n),w(t,l,n)},p(t,n){t[25]&&t[28]>=t[24]?i?i.p(t,n):(i=me(t),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null)},d(t){i&&i.d(t),t&&g(l)}}}function de(e){let l,i=e[22],t=[];for(let n=0;n<i.length;n+=1)t[n]=pe(oe(e,i,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();l=L()},l(n){for(let r=0;r<t.length;r+=1)t[r].l(n);l=L()},m(n,r){for(let s=0;s<t.length;s+=1)t[s].m(n,r);w(n,l,r)},p(n,r){if(r[0]&86){i=n[22];let s;for(s=0;s<i.length;s+=1){const _=oe(n,i,s);t[s]?t[s].p(_,r):(t[s]=pe(_),t[s].c(),t[s].m(l.parentNode,l))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}},d(n){q(t,n),n&&g(l)}}}function ve(e){let l;function i(r,s){return r[24]==r[28]?Ve:Te}let n=i(e)(e);return{c(){n.c(),l=L()},l(r){n.l(r),l=L()},m(r,s){n.m(r,s),w(r,l,s)},p(r,s){n.p(r,s)},d(r){n.d(r),r&&g(l)}}}function Te(e){let l,i=+e[26]+"",t,n,r=+e[26]+"",s,_,f;return{c(){l=X("text"),t=C(i),n=X("text"),s=C(r),this.h()},l(c){l=G(c,"text",{x:!0,y:!0,"font-size":!0,"font-weight":!0,"text-anchor":!0,"alignment-baseline":!0,stroke:!0,fill:!0});var h=N(l);t=Y(h,i),h.forEach(g),n=G(c,"text",{x:!0,y:!0,"font-size":!0,"font-weight":!0,"text-anchor":!0,"alignment-baseline":!0,fill:!0,class:!0});var v=N(n);s=Y(v,r),v.forEach(g),this.h()},h(){u(l,"x",y+e[5](e[24],e[28],"x")*z),u(l,"y",y+e[5](e[24],e[28],"y")*z),u(l,"font-size","7"),u(l,"font-weight","bold"),u(l,"text-anchor","middle"),u(l,"alignment-baseline","middle"),u(l,"stroke",e[4](e[24],e[28])),u(l,"fill","white"),u(n,"x",y+e[5](e[24],e[28],"x")*z),u(n,"y",y+e[5](e[24],e[28],"y")*z),u(n,"font-size","7"),u(n,"font-weight","bold"),u(n,"text-anchor","middle"),u(n,"alignment-baseline","middle"),u(n,"fill","white"),u(n,"class","resizable svelte-1682wjv")},m(c,h){w(c,l,h),j(l,t),w(c,n,h),j(n,s),_||(f=$(e[8].call(null,n,{i1:e[24],i2:e[28]})),_=!0)},p(c,h){e=c,h[0]&2&&i!==(i=+e[26]+"")&&O(t,i),h[0]&2&&r!==(r=+e[26]+"")&&O(s,r)},d(c){c&&g(l),c&&g(n),_=!1,f()}}}function Ve(e){let l,i=+e[26]+"",t,n,r,s,_=+e[26]+"",f,c,h,v,d;return{c(){l=X("text"),t=C(i),s=X("text"),f=C(_),this.h()},l(k){l=G(k,"text",{x:!0,y:!0,"font-size":!0,"font-weight":!0,"text-anchor":!0,"alignment-baseline":!0,stroke:!0,fill:!0});var m=N(l);t=Y(m,i),m.forEach(g),s=G(k,"text",{x:!0,y:!0,"font-size":!0,"font-weight":!0,"text-anchor":!0,"alignment-baseline":!0,fill:!0,class:!0});var E=N(s);f=Y(E,_),E.forEach(g),this.h()},h(){u(l,"x",n=y+e[2][e[24]].x*R),u(l,"y",r=y+e[2][e[24]].y*R),u(l,"font-size","7"),u(l,"font-weight","bold"),u(l,"text-anchor","middle"),u(l,"alignment-baseline","middle"),u(l,"stroke",e[4](e[24],e[28])),u(l,"fill","white"),u(s,"x",c=y+e[2][e[24]].x*R),u(s,"y",h=y+e[2][e[24]].y*R),u(s,"font-size","7"),u(s,"font-weight","bold"),u(s,"text-anchor","middle"),u(s,"alignment-baseline","middle"),u(s,"fill","white"),u(s,"class","resizable svelte-1682wjv")},m(k,m){w(k,l,m),j(l,t),w(k,s,m),j(s,f),v||(d=$(e[8].call(null,s,{i1:e[24],i2:e[28]})),v=!0)},p(k,m){e=k,m[0]&2&&i!==(i=+e[26]+"")&&O(t,i),m[0]&4&&n!==(n=y+e[2][e[24]].x*R)&&u(l,"x",n),m[0]&4&&r!==(r=y+e[2][e[24]].y*R)&&u(l,"y",r),m[0]&2&&_!==(_=+e[26]+"")&&O(f,_),m[0]&4&&c!==(c=y+e[2][e[24]].x*R)&&u(s,"x",c),m[0]&4&&h!==(h=y+e[2][e[24]].y*R)&&u(s,"y",h)},d(k){k&&g(l),k&&g(s),v=!1,d()}}}function be(e){let l,i=e[25]&&e[28]>=e[24]&&ve(e);return{c(){i&&i.c(),l=L()},l(t){i&&i.l(t),l=L()},m(t,n){i&&i.m(t,n),w(t,l,n)},p(t,n){t[25]&&t[28]>=t[24]?i?i.p(t,n):(i=ve(t),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null)},d(t){i&&i.d(t),t&&g(l)}}}function ge(e){let l,i=e[22],t=[];for(let n=0;n<i.length;n+=1)t[n]=be(re(e,i,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();l=L()},l(n){for(let r=0;r<t.length;r+=1)t[r].l(n);l=L()},m(n,r){for(let s=0;s<t.length;s+=1)t[s].m(n,r);w(n,l,r)},p(n,r){if(r[0]&54){i=n[22];let s;for(s=0;s<i.length;s+=1){const _=re(n,i,s);t[s]?t[s].p(_,r):(t[s]=be(_),t[s].c(),t[s].m(l.parentNode,l))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}},d(n){q(t,n),n&&g(l)}}}function ke(e){let l,i;return{c(){l=X("polyline"),this.h()},l(t){l=G(t,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0}),N(l).forEach(g),this.h()},h(){u(l,"points",i=""+(e[3].x1+","+e[3].y1+" "+e[3].x2+","+e[3].y2)),u(l,"fill","none"),u(l,"stroke","grey"),u(l,"stroke-width","5")},m(t,n){w(t,l,n)},p(t,n){n[0]&8&&i!==(i=""+(t[3].x1+","+t[3].y1+" "+t[3].x2+","+t[3].y2))&&u(l,"points",i)},d(t){t&&g(l)}}}function we(e){let l,i,t,n,r,s=e[17]+1+"",_,f,c,h,v;return{c(){l=X("circle"),r=X("text"),_=C(s),this.h()},l(d){l=G(d,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),N(l).forEach(g),r=G(d,"text",{x:!0,y:!0,"font-size":!0,"font-weight":!0,"text-anchor":!0,"alignment-baseline":!0,fill:!0,class:!0});var k=N(r);_=Y(k,s),k.forEach(g),this.h()},h(){u(l,"cx",i=y+e[18]*z),u(l,"cy",t=y+e[19]*z),u(l,"r","6"),u(l,"fill","black"),u(l,"class","grabable svelte-1682wjv"),u(r,"x",f=y+e[18]*z),u(r,"y",c=y+e[19]*z),u(r,"font-size","7"),u(r,"font-weight","bold"),u(r,"text-anchor","middle"),u(r,"alignment-baseline","middle"),u(r,"fill","white"),u(r,"class","svelte-1682wjv")},m(d,k){w(d,l,k),w(d,r,k),j(r,_),h||(v=$(n=e[7].call(null,l,e[17])),h=!0)},p(d,k){e=d,k[0]&4&&i!==(i=y+e[18]*z)&&u(l,"cx",i),k[0]&4&&t!==(t=y+e[19]*z)&&u(l,"cy",t),n&&Me(n.update)&&k[0]&4&&n.update.call(null,e[17]),k[0]&4&&s!==(s=e[17]+1+"")&&O(_,s),k[0]&4&&f!==(f=y+e[18]*z)&&u(r,"x",f),k[0]&4&&c!==(c=y+e[19]*z)&&u(r,"y",c)},d(d){d&&g(l),d&&g(r),h=!1,v()}}}function ye(e){let l,i,t,n,r,s,_=e[1],f=[];for(let m=0;m<_.length;m+=1)f[m]=de(se(e,_,m));let c=e[1],h=[];for(let m=0;m<c.length;m+=1)h[m]=ge(ie(e,c,m));let v=e[3]&&ke(e),d=e[2],k=[];for(let m=0;m<d.length;m+=1)k[m]=we(ne(e,d,m));return{c(){l=X("svg");for(let m=0;m<f.length;m+=1)f[m].c();i=L();for(let m=0;m<h.length;m+=1)h[m].c();t=L(),v&&v.c(),n=L();for(let m=0;m<k.length;m+=1)k[m].c();this.h()},l(m){l=G(m,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,class:!0});var E=N(l);for(let a=0;a<f.length;a+=1)f[a].l(E);i=L();for(let a=0;a<h.length;a+=1)h[a].l(E);t=L(),v&&v.l(E),n=L();for(let a=0;a<k.length;a+=1)k[a].l(E);E.forEach(g),this.h()},h(){u(l,"width","600"),u(l,"height","600"),u(l,"viewBox","-10 -10 220 220"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(l,"class","svelte-1682wjv"),ee(l,"grab",!!e[3])},m(m,E){w(m,l,E);for(let a=0;a<f.length;a+=1)f[a].m(l,null);j(l,i);for(let a=0;a<h.length;a+=1)h[a].m(l,null);j(l,t),v&&v.m(l,null),j(l,n);for(let a=0;a<k.length;a+=1)k[a].m(l,null);r||(s=F(l,"mousedown",ze(e[9])),r=!0)},p(m,E){if(E[0]&86){_=m[1];let a;for(a=0;a<_.length;a+=1){const I=se(m,_,a);f[a]?f[a].p(I,E):(f[a]=de(I),f[a].c(),f[a].m(l,i))}for(;a<f.length;a+=1)f[a].d(1);f.length=_.length}if(E[0]&54){c=m[1];let a;for(a=0;a<c.length;a+=1){const I=ie(m,c,a);h[a]?h[a].p(I,E):(h[a]=ge(I),h[a].c(),h[a].m(l,t))}for(;a<h.length;a+=1)h[a].d(1);h.length=c.length}if(m[3]?v?v.p(m,E):(v=ke(m),v.c(),v.m(l,n)):v&&(v.d(1),v=null),E[0]&4){d=m[2];let a;for(a=0;a<d.length;a+=1){const I=ne(m,d,a);k[a]?k[a].p(I,E):(k[a]=we(I),k[a].c(),k[a].m(l,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=d.length}E[0]&8&&ee(l,"grab",!!m[3])},d(m){m&&g(l),q(f,m),q(h,m),v&&v.d(),q(k,m),r=!1,s()}}}function Ae(e){let l,i,t,n,r,s,_,f,c,h,v=e[0],d,k,m,E={length:e[0]},a=[];for(let o=0;o<E.length;o+=1)a[o]=_e(ae(e,E,o));let I=e[1],M=[];for(let o=0;o<I.length;o+=1)M[o]=ce(ue(e,I,o));let V=ye(e);return{c(){l=C(`\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u0435\u0440\u0448\u0438\u043D: 
`),i=S("input"),t=B(),n=S("br"),r=B(),s=S("div"),_=S("div"),f=B();for(let o=0;o<a.length;o+=1)a[o].c();c=B();for(let o=0;o<M.length;o+=1)M[o].c();h=B(),V.c(),d=L(),this.h()},l(o){l=Y(o,`\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u0435\u0440\u0448\u0438\u043D: 
`),i=T(o,"INPUT",{type:!0,min:!0,max:!0}),t=U(o),n=T(o,"BR",{}),r=U(o),s=T(o,"DIV",{class:!0,style:!0});var p=N(s);_=T(p,"DIV",{class:!0}),N(_).forEach(g),f=U(p);for(let b=0;b<a.length;b+=1)a[b].l(p);c=U(p);for(let b=0;b<M.length;b+=1)M[b].l(p);p.forEach(g),h=U(o),V.l(o),d=L(),this.h()},h(){u(i,"type","number"),u(i,"min","1"),u(i,"max","15"),u(_,"class","svelte-1682wjv"),u(s,"class","matrix svelte-1682wjv"),le(s,"--size",e[0])},m(o,p){w(o,l,p),w(o,i,p),W(i,e[0]),w(o,t,p),w(o,n,p),w(o,r,p),w(o,s,p),j(s,_),j(s,f);for(let b=0;b<a.length;b+=1)a[b].m(s,null);j(s,c);for(let b=0;b<M.length;b+=1)M[b].m(s,null);w(o,h,p),V.m(o,p),w(o,d,p),k||(m=F(i,"input",e[10]),k=!0)},p(o,p){if(p[0]&1&&H(i.value)!==o[0]&&W(i,o[0]),p[0]&1){E={length:o[0]};let b;for(b=0;b<E.length;b+=1){const P=ae(o,E,b);a[b]?a[b].p(P,p):(a[b]=_e(P),a[b].c(),a[b].m(s,c))}for(;b<a.length;b+=1)a[b].d(1);a.length=E.length}if(p[0]&2){I=o[1];let b;for(b=0;b<I.length;b+=1){const P=ue(o,I,b);M[b]?M[b].p(P,p):(M[b]=ce(P),M[b].c(),M[b].m(s,null))}for(;b<M.length;b+=1)M[b].d(1);M.length=I.length}p[0]&1&&le(s,"--size",o[0]),p[0]&1&&x(v,v=o[0])?(V.d(1),V=ye(o),V.c(),V.m(d.parentNode,d)):V.p(o,p)},i:Z,o:Z,d(o){o&&g(l),o&&g(i),o&&g(t),o&&g(n),o&&g(r),o&&g(s),q(a,o),q(M,o),o&&g(h),o&&g(d),V.d(o),k=!1,m()}}}const Ge=!1;let y=100,z=80,Q=90,R=100;function Be(){return{enabled:!Math.round(Math.random()+.1),w:Math.round(Math.random()*100)}}function Ee(e){return Array.from({length:e},Be)}function Ue(e,l,i){let t=6,n=[],r;function s(o,p){return`hsl(${Math.round(360*(o*t-o*(o-1)/2+p-o)/(t*(t+1)/2))}, 100%, 50%)`}function _(o,p,b){return(r[o][b]*(o%2?9:11)+r[p][b]*(o%2?11:9))/20}function f(o,p){i(1,n[o][p].enabled=!1,n)}let c=null;function h(o,p){function b(D){!c||(i(3,c.x2=D.offsetX/30*11-10,c),i(3,c.y2=D.offsetY/30*11-10,c))}function P(D){var J,A;!c||(D.target instanceof SVGCircleElement&&(i(1,n[c.i][p].enabled=!0,n),i(1,n[p][c.i].enabled=!0,n)),i(3,c=null),(J=o.closest("svg"))==null||J.removeEventListener("mouseup",P),(A=o.closest("svg"))==null||A.removeEventListener("mousemove",b))}function K(D){var J,A;i(3,c={i:p,x1:y+r[p].x*z,y1:y+r[p].y*z,x2:y+r[p].x*z,y2:y+r[p].y*z}),(J=o.closest("svg"))==null||J.addEventListener("mouseup",P),(A=o.closest("svg"))==null||A.addEventListener("mousemove",b)}return o.addEventListener("mouseup",P,!0),o.addEventListener("mousedown",K),{destroy(){var D;o.removeEventListener("mousedown",K),o.removeEventListener("mouseup",P,!0),(D=o.closest("svg"))==null||D.removeEventListener("mouseup",P)}}}function v(o,{i1:p,i2:b}){let P,K;function D(A){console.log(A.clientX),i(1,n[p][b].w=Math.max(0,Math.min(100,K+(A.clientX-P)/3)|0),n)}function J(A){K=n[p][b].w,P=A.clientX,window.addEventListener("mousemove",D),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",D)})}return o.addEventListener("mousedown",J),{destroy(){o.removeEventListener("mousedown",J),window.removeEventListener("mousemove",D)}}}function d(o){Ie.call(this,e,o)}function k(){t=H(this.value),i(0,t)}function m(o,p){o[p].enabled=this.checked,i(1,n),i(0,t)}function E(o,p){o[p].w=H(this.value),i(1,n),i(0,t)}function a(o,p){n[o][p].enabled=this.checked,i(1,n),i(0,t)}function I(o,p){n[o][p].w=H(this.value),i(1,n),i(0,t)}const M=(o,p)=>f(o,p),V=(o,p)=>f(o,p);return e.$$.update=()=>{e.$$.dirty[0]&3&&(n.length<t?i(1,n=[...n.map(o=>[...o,...Ee(t-o.length)]),...Array.from({length:t-n.length},()=>Ee(t))]):t<n.length&&i(1,n=n.slice(0,t).map(o=>o.slice(0,t)))),e.$$.dirty[0]&1&&i(2,r=Array.from({length:t},(o,p)=>({i:p,x:Math.cos(p*2*Math.PI/t-Math.PI/2),y:Math.sin(p*2*Math.PI/t-Math.PI/2)})))},[t,n,r,c,s,_,f,h,v,d,k,m,E,a,I,M,V]}class Je extends Le{constructor(l){super();je(this,l,Ue,Ae,x,{},null,[-1,-1])}}export{Je as default,Ge as ssr};