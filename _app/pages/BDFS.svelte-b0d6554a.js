import{S as Ge,i as qe,s as Ae,t as L,e as k,k as W,h as I,c as v,m as C,g as F,V as ue,H as q,d as w,a4 as Pe,j as He,w as je,a as O,x as Me,b as Q,G as a,y as ze,a1 as Je,W as Oe,q as Ke,o as Qe,L as Ne,B as Xe}from"../chunks/vendor-c9048cd9.js";import{G as Ye,g as Ze,c as xe,r as Re,m as X,a as Ue,b as $}from"../chunks/Graph-aaafa524.js";function We(t,n,e){const l=t.slice();return l[20]=n[e],l[22]=e,l}function Ce(t,n,e){const l=t.slice();return l[23]=n[e],l[24]=n,l[22]=e,l}function De(t){let n=t[22]+1+"",e,l,u,s,p,r,_;function E(){t[10].call(u,t[24],t[22])}return{c(){e=L(n),l=L(": "),u=k("input"),s=W(),p=k("br"),this.h()},l(i){e=I(i,n),l=I(i,": "),u=v(i,"INPUT",{}),s=C(i),p=v(i,"BR",{}),this.h()},h(){u.disabled=t[5]},m(i,T){F(i,e,T),F(i,l,T),F(i,u,T),ue(u,t[23]),F(i,s,T),F(i,p,T),r||(_=[q(u,"input",E),q(u,"beforeinput",nt)],r=!0)},p(i,T){t=i,T&32&&(u.disabled=t[5]),T&1&&u.value!==t[23]&&ue(u,t[23])},d(i){i&&w(e),i&&w(l),i&&w(u),i&&w(s),i&&w(p),r=!1,Pe(_)}}}function $e(t){let n;return{c(){n=L("\u0421\u0442\u0435\u043A")},l(e){n=I(e,"\u0421\u0442\u0435\u043A")},m(e,l){F(e,n,l)},d(e){e&&w(n)}}}function et(t){let n;return{c(){n=L("\u0427\u0435\u0440\u0433\u0430")},l(e){n=I(e,"\u0427\u0435\u0440\u0433\u0430")},m(e,l){F(e,n,l)},d(e){e&&w(n)}}}function Se(t){let n;return{c(){n=L("\u043F\u0443\u0441\u0442\u043E")},l(e){n=I(e,"\u043F\u0443\u0441\u0442\u043E")},m(e,l){F(e,n,l)},d(e){e&&w(n)}}}function tt(t){let n;return{c(){n=L(",")},l(e){n=I(e,",")},m(e,l){F(e,n,l)},d(e){e&&w(n)}}}function Fe(t){let n,e=t[20]+"",l,u=t[22]&&tt();return{c(){u&&u.c(),n=W(),l=L(e)},l(s){u&&u.l(s),n=C(s),l=I(s,e)},m(s,p){u&&u.m(s,p),F(s,n,p),F(s,l,p)},p(s,p){p&8&&e!==(e=s[20]+"")&&He(l,e)},d(s){u&&u.d(s),s&&w(n),s&&w(l)}}}function lt(t){let n,e,l,u,s,p,r,_,E,i,T,D,ee,h,te,le,ne,A,V,se,re,ae,d,B,f,m,H,fe,oe,P,ce,_e,he,j,pe,de,be,ge,M,me,ke,Y,z,ve,Z,we,Te,x=t[0],N=[];for(let o=0;o<x.length;o+=1)N[o]=De(Ce(t,x,o));_=new Ye({props:{vertices:t[1],edges:t[8],editable:t[5]?{}:{moveVertex:!0}}});function Le(o,b){return o[4]=="bfs"?et:$e}let ie=Le(t),G=ie(t),J=t[3],R=[];for(let o=0;o<J.length;o+=1)R[o]=Fe(We(t,J,o));let U=null;return J.length||(U=Se()),{c(){n=k("section"),e=k("div"),l=L("\u0420\u0435\u0431\u0440\u0430:"),u=k("br"),s=W();for(let o=0;o<N.length;o+=1)N[o].c();p=W(),r=k("div"),je(_.$$.fragment),E=W(),i=k("center"),G.c(),T=L(`: 
            `);for(let o=0;o<R.length;o+=1)R[o].c();U&&U.c(),D=L("."),ee=W(),h=k("div"),te=L(`\u041C\u0435\u0442\u043E\u0434 \u043F\u043E\u0448\u0443\u043A\u0443: 
        `),le=k("br"),ne=W(),A=k("label"),V=k("input"),se=L(`
            \u0432 \u0448\u0438\u0440\u0438\u043D\u0443`),re=W(),ae=k("br"),d=W(),B=k("label"),f=k("input"),m=L(`
            \u0432 \u0433\u043B\u0438\u0431\u0438\u043D\u0443`),H=W(),fe=k("br"),oe=L(`
        
        \u041F\u043E\u0447\u0430\u0442\u043E\u043A \u043F\u043E\u0448\u0443\u043A\u0443: 
        `),P=k("input"),ce=W(),_e=k("br"),he=W(),j=k("button"),pe=L("\u041F\u043E\u0447\u0430\u0442\u0438 \u043F\u043E\u0448\u0443\u043A"),de=W(),be=k("br"),ge=W(),M=k("button"),me=L("\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u043A\u0440\u043E\u043A"),ke=W(),Y=k("label"),z=k("input"),ve=L(`
            \u0430\u0432\u0442\u043E\u043A\u0440\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F`),this.h()},l(o){n=v(o,"SECTION",{class:!0});var b=O(n);e=v(b,"DIV",{});var y=O(e);l=I(y,"\u0420\u0435\u0431\u0440\u0430:"),u=v(y,"BR",{}),s=C(y);for(let K=0;K<N.length;K+=1)N[K].l(y);y.forEach(w),p=C(b),r=v(b,"DIV",{});var c=O(r);Me(_.$$.fragment,c),E=C(c),i=v(c,"CENTER",{});var S=O(i);G.l(S),T=I(S,`: 
            `);for(let K=0;K<R.length;K+=1)R[K].l(S);U&&U.l(S),D=I(S,"."),S.forEach(w),c.forEach(w),ee=C(b),h=v(b,"DIV",{});var g=O(h);te=I(g,`\u041C\u0435\u0442\u043E\u0434 \u043F\u043E\u0448\u0443\u043A\u0443: 
        `),le=v(g,"BR",{}),ne=C(g),A=v(g,"LABEL",{});var Ee=O(A);V=v(Ee,"INPUT",{type:!0}),se=I(Ee,`
            \u0432 \u0448\u0438\u0440\u0438\u043D\u0443`),Ee.forEach(w),re=C(g),ae=v(g,"BR",{}),d=C(g),B=v(g,"LABEL",{});var Be=O(B);f=v(Be,"INPUT",{type:!0}),m=I(Be,`
            \u0432 \u0433\u043B\u0438\u0431\u0438\u043D\u0443`),Be.forEach(w),H=C(g),fe=v(g,"BR",{}),oe=I(g,`
        
        \u041F\u043E\u0447\u0430\u0442\u043E\u043A \u043F\u043E\u0448\u0443\u043A\u0443: 
        `),P=v(g,"INPUT",{type:!0,min:!0,max:!0}),ce=C(g),_e=v(g,"BR",{}),he=C(g),j=v(g,"BUTTON",{});var Ie=O(j);pe=I(Ie,"\u041F\u043E\u0447\u0430\u0442\u0438 \u043F\u043E\u0448\u0443\u043A"),Ie.forEach(w),de=C(g),be=v(g,"BR",{}),ge=C(g),M=v(g,"BUTTON",{});var Ve=O(M);me=I(Ve,"\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u043A\u0440\u043E\u043A"),Ve.forEach(w),ke=C(g),Y=v(g,"LABEL",{});var ye=O(Y);z=v(ye,"INPUT",{type:!0}),ve=I(ye,`
            \u0430\u0432\u0442\u043E\u043A\u0440\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F`),ye.forEach(w),g.forEach(w),b.forEach(w),this.h()},h(){Q(V,"type","radio"),V.__value="bfs",V.value=V.__value,t[12][0].push(V),Q(f,"type","radio"),f.__value="dfs",f.value=f.__value,t[12][0].push(f),Q(P,"type","number"),Q(P,"min","1"),Q(P,"max","11"),j.disabled=t[5],M.disabled=t[6],Q(z,"type","checkbox"),Q(n,"class","svelte-1kuqf0x")},m(o,b){F(o,n,b),a(n,e),a(e,l),a(e,u),a(e,s);for(let y=0;y<N.length;y+=1)N[y].m(e,null);a(n,p),a(n,r),ze(_,r,null),a(r,E),a(r,i),G.m(i,null),a(i,T);for(let y=0;y<R.length;y+=1)R[y].m(i,null);U&&U.m(i,null),a(i,D),a(n,ee),a(n,h),a(h,te),a(h,le),a(h,ne),a(h,A),a(A,V),V.checked=V.__value===t[4],a(A,se),a(h,re),a(h,ae),a(h,d),a(h,B),a(B,f),f.checked=f.__value===t[4],a(B,m),a(h,H),a(h,fe),a(h,oe),a(h,P),ue(P,t[2]),a(h,ce),a(h,_e),a(h,he),a(h,j),a(j,pe),a(h,de),a(h,be),a(h,ge),a(h,M),a(M,me),a(h,ke),a(h,Y),a(Y,z),z.checked=t[6],a(Y,ve),Z=!0,we||(Te=[q(V,"change",t[11]),q(f,"change",t[13]),q(P,"input",t[14]),q(j,"click",t[9]),q(M,"click",function(){Je(t[7])&&t[7].apply(this,arguments)}),q(z,"change",t[15]),q(z,"change",t[16])],we=!0)},p(o,[b]){if(t=o,b&33){x=t[0];let c;for(c=0;c<x.length;c+=1){const S=Ce(t,x,c);N[c]?N[c].p(S,b):(N[c]=De(S),N[c].c(),N[c].m(e,null))}for(;c<N.length;c+=1)N[c].d(1);N.length=x.length}const y={};if(b&2&&(y.vertices=t[1]),b&256&&(y.edges=t[8]),b&32&&(y.editable=t[5]?{}:{moveVertex:!0}),_.$set(y),ie!==(ie=Le(t))&&(G.d(1),G=ie(t),G&&(G.c(),G.m(i,T))),b&8){J=t[3];let c;for(c=0;c<J.length;c+=1){const S=We(t,J,c);R[c]?R[c].p(S,b):(R[c]=Fe(S),R[c].c(),R[c].m(i,D))}for(;c<R.length;c+=1)R[c].d(1);R.length=J.length,J.length?U&&(U.d(1),U=null):U||(U=Se(),U.c(),U.m(i,D))}b&16&&(V.checked=V.__value===t[4]),b&16&&(f.checked=f.__value===t[4]),b&4&&Oe(P.value)!==t[2]&&ue(P,t[2]),(!Z||b&32)&&(j.disabled=t[5]),(!Z||b&64)&&(M.disabled=t[6]),b&64&&(z.checked=t[6])},i(o){Z||(Ke(_.$$.fragment,o),Z=!0)},o(o){Qe(_.$$.fragment,o),Z=!1},d(o){o&&w(n),Ne(N,o),Xe(_),G.d(),Ne(R,o),U&&U.d(),t[12][0].splice(t[12][0].indexOf(V),1),t[12][0].splice(t[12][0].indexOf(f),1),we=!1,Pe(Te)}}}function nt(t){const{inputType:n,data:e,target:l}=t,{value:u,selectionStart:s,selectionEnd:p}=l;let r="",_=u.slice(0,s!=null?s:0),E=u.slice(p!=null?p:0);if(!n.startsWith("history")){if(n.startsWith("insert"))r=_+e+E;else if(n.startsWith("delete"))if(s!==p)r=_+E;else{switch(n){case"deleteWordBackward":_=_.replace(/(\w+|\W)\s*$/,"");break;case"deleteWordForward":E=E.replace(/^\s*(\w+|\W)/,"");break;case"deleteSoftLineBackward":case"deleteHardLineBackward":_="";break;case"deleteSoftLineForward":case"deleteHardLineForward":E="";break;case"deleteEntireSoftLine":_=E="";break;case"deleteByDrag":case"deleteByCut":case"deleteContent":break;case"deleteContentBackward":_=_.slice(0,-1);break;case"deleteContentForward":E=E.slice(1);break;default:console.warn(`Unknown input deletion type: ${n}`)}r=_+E}r.match(/^[\d\s,]*$/)||t.preventDefault()}}function st(t,n,e){let l,u=["2,4,5,6","3,6,7","7,8","5,9","6,9,10","7,10","8,11","11","10","11",""],{vertices:s}=Ze(),p=7,r=[],_="bfs",E=!1,i=!0,T=d=>{};function D(){return new Promise(d=>{i?setTimeout(d,1e3):e(7,T=d)})}async function ee(){e(1,[s,l]=Re(s,l,50),s,(e(8,l),e(0,u)));let d=[p],B=[];for(e(3,r=await[p]);r.length>0;){e(1,s=X(r[0],"orange",s));for(let f of Ue(r[0],l)){if(B.includes(f))continue;B.push(f),await D(),e(8,l=$(f,"orange",l)),await D();let m=f.v1===r[0]?f.v2:f.v1;d.includes(m)?e(8,l=$(f,"lightpink",l)):(e(8,l=$(f,"green",l)),e(1,s=X(m,"blue",s)),e(3,r=[...r,m]),d.push(m))}await D(),e(1,s=X(r[0],"green",s)),e(3,[,...r]=r,r),r.length>0&&await D()}}async function h(){e(1,[s,l]=Re(s,l,50),s,(e(8,l),e(0,u)));let d=[p],B=[];for(e(3,r=await[p]);r.length>0;){e(1,s=X(r[1],"blue",s)),e(1,s=X(r[0],"orange",s));let f=Ue(r[0],l);if(f=f.filter(m=>!B.includes(m)),f.length>0){let m=f[0];B.push(m),await D(),e(8,l=$(m,"orange",l)),await D();let H=m.v1===r[0]?m.v2:m.v1;d.includes(H)?e(8,l=$(m,"lightpink",l)):(e(8,l=$(m,"green",l)),e(1,s=X(H,"blue",s)),e(3,r=[H,...r]),d.push(H))}else await D(),e(1,s=X(r[0],"green",s)),e(3,[,...r]=r,r)}}async function te(){e(5,E=!0),_==="bfs"?await ee():await h(),e(5,E=!1)}const le=[[]];function ne(d,B){d[B]=this.value,e(0,u)}function A(){_=this.__value,e(4,_)}function V(){_=this.__value,e(4,_)}function se(){p=Oe(this.value),e(2,p)}function re(){i=this.checked,e(6,i)}const ae=()=>i&&T(1);return t.$$.update=()=>{t.$$.dirty&1&&e(8,l=u.flatMap((d,B)=>{var f;return(f=d.match(/\d+/g))==null?void 0:f.map(m=>({v1:B+1,v2:+m}))}).filter(d=>!!d&&d.v1>0&&d.v1<12&&d.v2>0&&d.v2<12).filter(({v1:d,v2:B},f,m)=>f==xe(d,B,m)))},[u,s,p,r,_,E,i,T,l,te,ne,A,le,V,se,re,ae]}class it extends Ge{constructor(n){super();qe(this,n,st,lt,Ae,{})}}export{it as default};
