import{S as _1,i as m1,s as b1,t as e,e as B,k as L,h as _,c as N,a as o,d as s,m as O,b as Q,g as p,H as A,j as k,w as Jf,x as Xf,y as Zf,q as yf,o as $f,O as w1,B as rf,V as df,W as cf,G as Mf,T as V,K as Pl,U as W,a1 as l1,P as k1,ag as B1}from"../chunks/vendor-c600a8bd.js";import{M as N1}from"../chunks/Matrix-98cd08ab.js";function f1(f,v,m){const q=f.slice();return q[2]=v[m][0],q[3]=v[m][1],q[8]=v[m][2],q[9]=v[m][3],q}function u1(f){let v=f[2]+"",m,q,z=f[3]+"",C,w,R,E=f[8]+"",M,G,T=f[9]+"",I,j,H;return{c(){m=e(v),q=e(" = "),C=e(z),w=e("*"),R=B("span"),M=e(E),G=e(" + "),I=e(T),j=L(),H=B("br"),this.h()},l(b){m=_(b,v),q=_(b," = "),C=_(b,z),w=_(b,"*"),R=N(b,"SPAN",{class:!0});var S=o(R);M=_(S,E),S.forEach(s),G=_(b," + "),I=_(b,T),j=O(b),H=N(b,"BR",{}),this.h()},h(){Q(R,"class","svelte-dpl67z")},m(b,S){p(b,m,S),p(b,q,S),p(b,C,S),p(b,w,S),p(b,R,S),A(R,M),p(b,G,S),p(b,I,S),p(b,j,S),p(b,H,S)},p(b,S){S&128&&v!==(v=b[2]+"")&&k(m,v),S&128&&z!==(z=b[3]+"")&&k(C,z),S&128&&E!==(E=b[8]+"")&&k(M,E),S&128&&T!==(T=b[9]+"")&&k(I,T)},d(b){b&&s(m),b&&s(q),b&&s(C),b&&s(w),b&&s(R),b&&s(G),b&&s(I),b&&s(j),b&&s(H)}}}function s1(f){let v,m,q,z,C;return{c(){v=B("span"),m=e("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u043C!"),q=B("br"),z=e("\u0421\u043A\u043E\u0440\u043E\u0442\u0456\u0442\u044C \u043A\u043E\u043D\u0433\u0440\u0443\u0435\u043D\u0446\u0456\u044E!"),C=B("br"),this.h()},l(w){v=N(w,"SPAN",{class:!0});var R=o(v);m=_(R,"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u043C!"),q=N(R,"BR",{}),z=_(R,"\u0421\u043A\u043E\u0440\u043E\u0442\u0456\u0442\u044C \u043A\u043E\u043D\u0433\u0440\u0443\u0435\u043D\u0446\u0456\u044E!"),C=N(R,"BR",{}),R.forEach(s),this.h()},h(){Q(v,"class","error svelte-dpl67z")},m(w,R){p(w,v,R),A(v,m),A(v,q),A(v,z),A(v,C)},d(w){w&&s(v)}}}function R1(f){let v,m,q,z,C,w,R,E,M,G,T,I,j,H,b=f[5][f[4]-1]+"",S,r,Y,Z,y,d,c,g,n,ll,a,x,J,h=f[7],D=[];for(let i=0;i<h.length;i+=1)D[i]=u1(f1(f,h,i));w=new N1({props:{matrix:[["k",-1,...Array.from({length:f[4]+1},p1)],["qk","/////",...f[8]],["Pk",1,...f[5]],["Qk",0,...f[6]]],showGrid:!0,showColumn:!0,marks:{yellow:[{r:0,c:f[4]+2}],cyan:[{r:2,c:f[4]+1}],limegreen:Array.from({length:f[4]+1},i1)}}});let F=f[1]!==f[5][f[4]]&&s1();return{c(){v=B("details"),m=B("summary"),q=e("\u0420\u0456\u0432\u043D\u044F\u043D\u043D\u044F"),z=L();for(let i=0;i<D.length;i+=1)D[i].c();C=L(),Jf(w.$$.fragment),R=L(),E=B("br"),M=L(),F&&F.c(),G=e(`
x \u2261 (-1)`),T=B("sup"),I=e(f[4]),j=e("*"),H=B("span"),S=e(b),r=e("*"),Y=e(f[3]),Z=e(" (mod"),y=e(f[1]),d=e(`)
`),c=B("br"),g=e(`
x \u2261 `),n=e(f[0]),ll=e(" (mod"),a=e(f[1]),x=e(")"),this.h()},l(i){v=N(i,"DETAILS",{class:!0});var P=o(v);m=N(P,"SUMMARY",{class:!0});var $=o(m);q=_($,"\u0420\u0456\u0432\u043D\u044F\u043D\u043D\u044F"),$.forEach(s),z=O(P);for(let wl=0;wl<D.length;wl+=1)D[wl].l(P);P.forEach(s),C=O(i),Xf(w.$$.fragment,i),R=O(i),E=N(i,"BR",{}),M=O(i),F&&F.l(i),G=_(i,`
x \u2261 (-1)`),T=N(i,"SUP",{class:!0});var K=o(T);I=_(K,f[4]),K.forEach(s),j=_(i,"*"),H=N(i,"SPAN",{class:!0});var fl=o(H);S=_(fl,b),fl.forEach(s),r=_(i,"*"),Y=_(i,f[3]),Z=_(i," (mod"),y=_(i,f[1]),d=_(i,`)
`),c=N(i,"BR",{}),g=_(i,`
x \u2261 `),n=_(i,f[0]),ll=_(i," (mod"),a=_(i,f[1]),x=_(i,")"),this.h()},h(){Q(m,"class","svelte-dpl67z"),Q(v,"class","svelte-dpl67z"),Q(T,"class","lit1 svelte-dpl67z"),Q(H,"class","lit2 svelte-dpl67z")},m(i,P){p(i,v,P),A(v,m),A(m,q),A(v,z);for(let $=0;$<D.length;$+=1)D[$].m(v,null);p(i,C,P),Zf(w,i,P),p(i,R,P),p(i,E,P),p(i,M,P),F&&F.m(i,P),p(i,G,P),p(i,T,P),A(T,I),p(i,j,P),p(i,H,P),A(H,S),p(i,r,P),p(i,Y,P),p(i,Z,P),p(i,y,P),p(i,d,P),p(i,c,P),p(i,g,P),p(i,n,P),p(i,ll,P),p(i,a,P),p(i,x,P),J=!0},p(i,[P]){if(P&128){h=i[7];let K;for(K=0;K<h.length;K+=1){const fl=f1(i,h,K);D[K]?D[K].p(fl,P):(D[K]=u1(fl),D[K].c(),D[K].m(v,null))}for(;K<D.length;K+=1)D[K].d(1);D.length=h.length}const $={};P&368&&($.matrix=[["k",-1,...Array.from({length:i[4]+1},p1)],["qk","/////",...i[8]],["Pk",1,...i[5]],["Qk",0,...i[6]]]),P&16&&($.marks={yellow:[{r:0,c:i[4]+2}],cyan:[{r:2,c:i[4]+1}],limegreen:Array.from({length:i[4]+1},i1)}),w.$set($),i[1]!==i[5][i[4]]?F||(F=s1(),F.c(),F.m(G.parentNode,G)):F&&(F.d(1),F=null),(!J||P&16)&&k(I,i[4]),(!J||P&48)&&b!==(b=i[5][i[4]-1]+"")&&k(S,b),(!J||P&8)&&k(Y,i[3]),(!J||P&2)&&k(y,i[1]),(!J||P&1)&&k(n,i[0]),(!J||P&2)&&k(a,i[1])},i(i){J||(yf(w.$$.fragment,i),J=!0)},o(i){$f(w.$$.fragment,i),J=!1},d(i){i&&s(v),w1(D,i),i&&s(C),rf(w,i),i&&s(R),i&&s(E),i&&s(M),F&&F.d(i),i&&s(G),i&&s(T),i&&s(j),i&&s(H),i&&s(r),i&&s(Y),i&&s(Z),i&&s(y),i&&s(d),i&&s(c),i&&s(g),i&&s(n),i&&s(ll),i&&s(a),i&&s(x)}}}const p1=(f,v)=>v,i1=(f,v)=>({r:1,c:v+2});function E1(f,v,m){let{a:q=64,b:z=5,m:C=13}=v,w,R,E,M,G,{res:T}=v;return f.$$set=I=>{"a"in I&&m(2,q=I.a),"b"in I&&m(3,z=I.b),"m"in I&&m(1,C=I.m),"res"in I&&m(0,T=I.res)},f.$$.update=()=>{if(f.$$.dirty&511){let I=C,j=q,H,b;m(4,w=-1),m(8,R=[]),m(5,E=[]),m(5,E[-1]=1,E),m(5,E[-2]=0,E),m(6,M=[]),m(6,M[-1]=0,M),m(6,M[-2]=1,M),m(7,G=[]);do m(4,w+=1),H=Math.floor(I/j),b=I-j*H,G.push([I,j,H,b]),R.push(H),E.push(R[w]*E[w-1]+E[w-2]),M.push(R[w]*M[w-1]+M[w-2]),I=j,j=b;while(b>0);for(m(0,T=(-1)**w*E[w-1]*z),m(0,T%=C);T<0;)m(0,T+=C)}},[T,C,q,z,w,E,M,G,R]}class e1 extends _1{constructor(v){super();m1(this,v,E1,R1,b1,{a:2,b:3,m:1,res:0})}}function U1(f){let v,m,q,z,C,w,R,E,M,G,T,I,j,H,b,S,r,Y,Z,y,d,c,g,n,ll,a,x,J,h,D,F=f[1]%f[12]+"",i,P,$,K,fl,wl,Rl,Hf,jl,ul,Dl,sl,Fl,pl,Kl,Ll,Ol,bl,Qf,Vl,Wl,Yl,t,Jl,Gf,Xl,jf,Zl,Df,yl,$l,El,Ff,rl,il,tl,el,ol,_l,nl,hl,gl,Ul,al,Sl,xl,Il,dl,vl,Kf,cl,lf,ff,Al,uf,Tl,sf,pf,ef,_f,mf,ql,bf,zl,vf,Cl,Pf,Ml,wf,kf,Bf,Hl=f[6]*-1*f[7]/f[11]+"",Ql,Nf,Gl,Rf,Ef,Uf,Sf,If,X,Af,Lf,Tf,Of,qf,Vf,zf,Wf,Cf,U,Yf,tf;function v1(l){f[24](l)}let of={a:f[3],b:f[14],m:f[4]};f[5]!==void 0&&(of.res=f[5]),bl=new e1({props:of}),df.push(()=>cf(bl,"res",v1));function P1(l){f[28](l)}let nf={a:f[6],b:f[16],m:f[11]};return f[9]!==void 0&&(nf.res=f[9]),vl=new e1({props:nf}),df.push(()=>cf(vl,"res",P1)),{c(){v=B("h3"),m=e("\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F 1"),q=L(),z=B("input"),C=B("sup"),w=B("input"),R=e(" (mod "),E=B("input"),M=e(`)
`),G=B("br"),T=e(`
\u03C6(`),I=e(f[2]),j=e(") = "),H=e(f[12]),b=e("; \u03B1"),S=B("sup"),r=e(f[12]),Y=e(" \u2261 1(mod"),Z=e(f[2]),y=e(`)
`),d=B("br"),c=L(),g=e(f[0]),n=B("sup"),ll=e(f[1]),a=e("(mod"),x=e(f[2]),J=e(") \u2261 "),h=e(f[0]),D=B("sup"),i=e(F),P=e("(mod"),$=e(f[2]),K=e(") = "),fl=e(f[13]),wl=L(),Rl=B("h3"),Hf=e("\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F 2"),jl=L(),ul=B("input"),Dl=e("x \u2261 "),sl=B("input"),Fl=e(" (mod "),pl=B("input"),Kl=e(`)
`),Ll=B("br"),Ol=L(),Jf(bl.$$.fragment),Vl=L(),Wl=B("br"),Yl=e(`
\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430: `),t=B("span"),Jl=e(f[3]),Gf=e("*"),Xl=e(f[5]),jf=e(" (mod"),Zl=e(f[4]),Df=e(") = "),yl=e(f[17]),$l=L(),El=B("h3"),Ff=e("\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F 3-4"),rl=L(),il=B("input"),tl=e("x + "),el=B("input"),ol=e(" y = "),_l=B("input"),nl=L(),hl=B("br"),gl=L(),Ul=e(f[6]),al=e("x	\u2261 "),Sl=e(f[16]),xl=e(" (mod"),Il=e(f[11]),dl=e(`)
`),Jf(vl.$$.fragment),cl=L(),lf=B("br"),ff=e(`
x = `),Al=e(f[11]),uf=e("t + "),Tl=e(f[9]),sf=L(),pf=B("br"),ef=L(),_f=B("br"),mf=e(`
5(`),ql=e(f[11]),bf=e("t + "),zl=e(f[9]),vf=e(") + "),Cl=e(f[7]),Pf=e("y = "),Ml=e(f[8]),wf=L(),kf=B("br"),Bf=e(`
y = `),Ql=e(Hl),Nf=e("t + "),Gl=e(f[10]),Rf=e(`;
`),Ef=B("br"),Uf=L(),Sf=B("br"),If=e(`
\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430: `),X=B("span"),Af=e(f[6]),Lf=e("*"),Tf=e(f[9]),Of=e(" + "),qf=e(f[7]),Vf=e("*"),zf=e(f[10]),Wf=e(" = "),Cf=e(f[15]),this.h()},l(l){v=N(l,"H3",{});var u=o(v);m=_(u,"\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F 1"),u.forEach(s),q=O(l),z=N(l,"INPUT",{type:!0,class:!0}),C=N(l,"SUP",{});var kl=o(C);w=N(kl,"INPUT",{type:!0,class:!0}),kl.forEach(s),R=_(l," (mod "),E=N(l,"INPUT",{type:!0,class:!0}),M=_(l,`)
`),G=N(l,"BR",{}),T=_(l,`
\u03C6(`),I=_(l,f[2]),j=_(l,") = "),H=_(l,f[12]),b=_(l,"; \u03B1"),S=N(l,"SUP",{});var Bl=o(S);r=_(Bl,f[12]),Bl.forEach(s),Y=_(l," \u2261 1(mod"),Z=_(l,f[2]),y=_(l,`)
`),d=N(l,"BR",{}),c=O(l),g=_(l,f[0]),n=N(l,"SUP",{});var hf=o(n);ll=_(hf,f[1]),hf.forEach(s),a=_(l,"(mod"),x=_(l,f[2]),J=_(l,") \u2261 "),h=_(l,f[0]),D=N(l,"SUP",{});var gf=o(D);i=_(gf,F),gf.forEach(s),P=_(l,"(mod"),$=_(l,f[2]),K=_(l,") = "),fl=_(l,f[13]),wl=O(l),Rl=N(l,"H3",{});var af=o(Rl);Hf=_(af,"\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F 2"),af.forEach(s),jl=O(l),ul=N(l,"INPUT",{type:!0,class:!0}),Dl=_(l,"x \u2261 "),sl=N(l,"INPUT",{type:!0,class:!0}),Fl=_(l," (mod "),pl=N(l,"INPUT",{type:!0,class:!0}),Kl=_(l,`)
`),Ll=N(l,"BR",{}),Ol=O(l),Xf(bl.$$.fragment,l),Vl=O(l),Wl=N(l,"BR",{}),Yl=_(l,`
\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430: `),t=N(l,"SPAN",{class:!0});var Nl=o(t);Jl=_(Nl,f[3]),Gf=_(Nl,"*"),Xl=_(Nl,f[5]),jf=_(Nl," (mod"),Zl=_(Nl,f[4]),Df=_(Nl,") = "),yl=_(Nl,f[17]),Nl.forEach(s),$l=O(l),El=N(l,"H3",{});var xf=o(El);Ff=_(xf,"\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F 3-4"),xf.forEach(s),rl=O(l),il=N(l,"INPUT",{type:!0,class:!0}),tl=_(l,"x + "),el=N(l,"INPUT",{type:!0,class:!0}),ol=_(l," y = "),_l=N(l,"INPUT",{type:!0,class:!0}),nl=O(l),hl=N(l,"BR",{}),gl=O(l),Ul=_(l,f[6]),al=_(l,"x	\u2261 "),Sl=_(l,f[16]),xl=_(l," (mod"),Il=_(l,f[11]),dl=_(l,`)
`),Xf(vl.$$.fragment,l),cl=O(l),lf=N(l,"BR",{}),ff=_(l,`
x = `),Al=_(l,f[11]),uf=_(l,"t + "),Tl=_(l,f[9]),sf=O(l),pf=N(l,"BR",{}),ef=O(l),_f=N(l,"BR",{}),mf=_(l,`
5(`),ql=_(l,f[11]),bf=_(l,"t + "),zl=_(l,f[9]),vf=_(l,") + "),Cl=_(l,f[7]),Pf=_(l,"y = "),Ml=_(l,f[8]),wf=O(l),kf=N(l,"BR",{}),Bf=_(l,`
y = `),Ql=_(l,Hl),Nf=_(l,"t + "),Gl=_(l,f[10]),Rf=_(l,`;
`),Ef=N(l,"BR",{}),Uf=O(l),Sf=N(l,"BR",{}),If=_(l,`
\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430: `),X=N(l,"SPAN",{class:!0});var ml=o(X);Af=_(ml,f[6]),Lf=_(ml,"*"),Tf=_(ml,f[9]),Of=_(ml," + "),qf=_(ml,f[7]),Vf=_(ml,"*"),zf=_(ml,f[10]),Wf=_(ml," = "),Cf=_(ml,f[15]),ml.forEach(s),this.h()},h(){Q(z,"type","number"),Q(z,"class","svelte-4wbsvd"),Q(w,"type","number"),Q(w,"class","svelte-4wbsvd"),Q(E,"type","number"),Q(E,"class","svelte-4wbsvd"),Q(ul,"type","number"),Q(ul,"class","svelte-4wbsvd"),Q(sl,"type","number"),Q(sl,"class","svelte-4wbsvd"),Q(pl,"type","number"),Q(pl,"class","svelte-4wbsvd"),Q(t,"class","svelte-4wbsvd"),Mf(t,"good",f[17]===f[14]%f[4]),Q(il,"type","number"),Q(il,"class","svelte-4wbsvd"),Q(el,"type","number"),Q(el,"class","svelte-4wbsvd"),Q(_l,"type","number"),Q(_l,"class","svelte-4wbsvd"),Q(X,"class","svelte-4wbsvd"),Mf(X,"good",Number.isInteger(f[10])&&f[15]===f[8])},m(l,u){p(l,v,u),A(v,m),p(l,q,u),p(l,z,u),V(z,f[0]),p(l,C,u),A(C,w),V(w,f[1]),p(l,R,u),p(l,E,u),V(E,f[2]),p(l,M,u),p(l,G,u),p(l,T,u),p(l,I,u),p(l,j,u),p(l,H,u),p(l,b,u),p(l,S,u),A(S,r),p(l,Y,u),p(l,Z,u),p(l,y,u),p(l,d,u),p(l,c,u),p(l,g,u),p(l,n,u),A(n,ll),p(l,a,u),p(l,x,u),p(l,J,u),p(l,h,u),p(l,D,u),A(D,i),p(l,P,u),p(l,$,u),p(l,K,u),p(l,fl,u),p(l,wl,u),p(l,Rl,u),A(Rl,Hf),p(l,jl,u),p(l,ul,u),V(ul,f[3]),p(l,Dl,u),p(l,sl,u),V(sl,f[14]),p(l,Fl,u),p(l,pl,u),V(pl,f[4]),p(l,Kl,u),p(l,Ll,u),p(l,Ol,u),Zf(bl,l,u),p(l,Vl,u),p(l,Wl,u),p(l,Yl,u),p(l,t,u),A(t,Jl),A(t,Gf),A(t,Xl),A(t,jf),A(t,Zl),A(t,Df),A(t,yl),p(l,$l,u),p(l,El,u),A(El,Ff),p(l,rl,u),p(l,il,u),V(il,f[6]),p(l,tl,u),p(l,el,u),V(el,f[7]),p(l,ol,u),p(l,_l,u),V(_l,f[8]),p(l,nl,u),p(l,hl,u),p(l,gl,u),p(l,Ul,u),p(l,al,u),p(l,Sl,u),p(l,xl,u),p(l,Il,u),p(l,dl,u),Zf(vl,l,u),p(l,cl,u),p(l,lf,u),p(l,ff,u),p(l,Al,u),p(l,uf,u),p(l,Tl,u),p(l,sf,u),p(l,pf,u),p(l,ef,u),p(l,_f,u),p(l,mf,u),p(l,ql,u),p(l,bf,u),p(l,zl,u),p(l,vf,u),p(l,Cl,u),p(l,Pf,u),p(l,Ml,u),p(l,wf,u),p(l,kf,u),p(l,Bf,u),p(l,Ql,u),p(l,Nf,u),p(l,Gl,u),p(l,Rf,u),p(l,Ef,u),p(l,Uf,u),p(l,Sf,u),p(l,If,u),p(l,X,u),A(X,Af),A(X,Lf),A(X,Tf),A(X,Of),A(X,qf),A(X,Vf),A(X,zf),A(X,Wf),A(X,Cf),U=!0,Yf||(tf=[Pl(z,"input",f[18]),Pl(w,"input",f[19]),Pl(E,"input",f[20]),Pl(ul,"input",f[21]),Pl(sl,"input",f[22]),Pl(pl,"input",f[23]),Pl(il,"input",f[25]),Pl(el,"input",f[26]),Pl(_l,"input",f[27])],Yf=!0)},p(l,[u]){u&1&&W(z.value)!==l[0]&&V(z,l[0]),u&2&&W(w.value)!==l[1]&&V(w,l[1]),u&4&&W(E.value)!==l[2]&&V(E,l[2]),(!U||u&4)&&k(I,l[2]),(!U||u&4096)&&k(H,l[12]),(!U||u&4096)&&k(r,l[12]),(!U||u&4)&&k(Z,l[2]),(!U||u&1)&&k(g,l[0]),(!U||u&2)&&k(ll,l[1]),(!U||u&4)&&k(x,l[2]),(!U||u&1)&&k(h,l[0]),(!U||u&4098)&&F!==(F=l[1]%l[12]+"")&&k(i,F),(!U||u&4)&&k($,l[2]),(!U||u&8192)&&k(fl,l[13]),u&8&&W(ul.value)!==l[3]&&V(ul,l[3]),u&16384&&W(sl.value)!==l[14]&&V(sl,l[14]),u&16&&W(pl.value)!==l[4]&&V(pl,l[4]);const kl={};u&8&&(kl.a=l[3]),u&16384&&(kl.b=l[14]),u&16&&(kl.m=l[4]),!Qf&&u&32&&(Qf=!0,kl.res=l[5],l1(()=>Qf=!1)),bl.$set(kl),(!U||u&8)&&k(Jl,l[3]),(!U||u&32)&&k(Xl,l[5]),(!U||u&16)&&k(Zl,l[4]),(!U||u&131072)&&k(yl,l[17]),u&147472&&Mf(t,"good",l[17]===l[14]%l[4]),u&64&&W(il.value)!==l[6]&&V(il,l[6]),u&128&&W(el.value)!==l[7]&&V(el,l[7]),u&256&&W(_l.value)!==l[8]&&V(_l,l[8]),(!U||u&64)&&k(Ul,l[6]),(!U||u&65536)&&k(Sl,l[16]),(!U||u&2048)&&k(Il,l[11]);const Bl={};u&64&&(Bl.a=l[6]),u&65536&&(Bl.b=l[16]),u&2048&&(Bl.m=l[11]),!Kf&&u&512&&(Kf=!0,Bl.res=l[9],l1(()=>Kf=!1)),vl.$set(Bl),(!U||u&2048)&&k(Al,l[11]),(!U||u&512)&&k(Tl,l[9]),(!U||u&2048)&&k(ql,l[11]),(!U||u&512)&&k(zl,l[9]),(!U||u&128)&&k(Cl,l[7]),(!U||u&256)&&k(Ml,l[8]),(!U||u&2240)&&Hl!==(Hl=l[6]*-1*l[7]/l[11]+"")&&k(Ql,Hl),(!U||u&1024)&&k(Gl,l[10]),(!U||u&64)&&k(Af,l[6]),(!U||u&512)&&k(Tf,l[9]),(!U||u&128)&&k(qf,l[7]),(!U||u&1024)&&k(zf,l[10]),(!U||u&32768)&&k(Cf,l[15]),u&34048&&Mf(X,"good",Number.isInteger(l[10])&&l[15]===l[8])},i(l){U||(yf(bl.$$.fragment,l),yf(vl.$$.fragment,l),U=!0)},o(l){$f(bl.$$.fragment,l),$f(vl.$$.fragment,l),U=!1},d(l){l&&s(v),l&&s(q),l&&s(z),l&&s(C),l&&s(R),l&&s(E),l&&s(M),l&&s(G),l&&s(T),l&&s(I),l&&s(j),l&&s(H),l&&s(b),l&&s(S),l&&s(Y),l&&s(Z),l&&s(y),l&&s(d),l&&s(c),l&&s(g),l&&s(n),l&&s(a),l&&s(x),l&&s(J),l&&s(h),l&&s(D),l&&s(P),l&&s($),l&&s(K),l&&s(fl),l&&s(wl),l&&s(Rl),l&&s(jl),l&&s(ul),l&&s(Dl),l&&s(sl),l&&s(Fl),l&&s(pl),l&&s(Kl),l&&s(Ll),l&&s(Ol),rf(bl,l),l&&s(Vl),l&&s(Wl),l&&s(Yl),l&&s(t),l&&s($l),l&&s(El),l&&s(rl),l&&s(il),l&&s(tl),l&&s(el),l&&s(ol),l&&s(_l),l&&s(nl),l&&s(hl),l&&s(gl),l&&s(Ul),l&&s(al),l&&s(Sl),l&&s(xl),l&&s(Il),l&&s(dl),rf(vl,l),l&&s(cl),l&&s(lf),l&&s(ff),l&&s(Al),l&&s(uf),l&&s(Tl),l&&s(sf),l&&s(pf),l&&s(ef),l&&s(_f),l&&s(mf),l&&s(ql),l&&s(bf),l&&s(zl),l&&s(vf),l&&s(Cl),l&&s(Pf),l&&s(Ml),l&&s(wf),l&&s(kf),l&&s(Bf),l&&s(Ql),l&&s(Nf),l&&s(Gl),l&&s(Rf),l&&s(Ef),l&&s(Uf),l&&s(Sf),l&&s(If),l&&s(X),Yf=!1,k1(tf)}}}function S1(f,v,m){let q,z,C,w,R,E,M=3,G=345,T=8,I,j=64,H=5,b=13,S,r=5,Y=7,Z=11,y;function d(){M=W(this.value),m(0,M)}function c(){G=W(this.value),m(1,G)}function g(){T=W(this.value),m(2,T)}function n(){j=W(this.value),m(3,j)}function ll(){H=W(this.value),m(14,H)}function a(){b=W(this.value),m(4,b)}function x(i){S=i,m(5,S)}function J(){r=W(this.value),m(6,r)}function h(){Y=W(this.value),m(7,Y)}function D(){Z=W(this.value),m(8,Z)}function F(i){y=i,m(9,y)}return f.$$.update=()=>{f.$$.dirty&4&&m(12,q=B1.getFrequency(T).reduce((i,{factor:P})=>i*(P-1)/P,T)),f.$$.dirty&4103&&m(13,I=M**(G%q)%T),f.$$.dirty&56&&m(17,z=j*S%b),f.$$.dirty&128&&m(11,C=Math.abs(Y)),f.$$.dirty&2304&&m(16,w=Z%C),f.$$.dirty&960&&m(10,R=(Z-r*y)/Y),f.$$.dirty&1728&&m(15,E=r*y+Y*R)},[M,G,T,j,b,S,r,Y,Z,y,R,C,q,I,H,E,w,z,d,c,g,n,ll,a,x,J,h,D,F]}class T1 extends _1{constructor(v){super();m1(this,v,S1,U1,b1,{})}}export{T1 as default};
