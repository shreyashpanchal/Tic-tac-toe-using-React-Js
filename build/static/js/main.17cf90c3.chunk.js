(this.webpackJsonpstartsup=this.webpackJsonpstartsup||[]).push([[0],{12:function(e,n,r){},14:function(e,n,r){"use strict";r.r(n);var t=r(1),c=r(7),i=r.n(c),u=r(2),s=r(3),a=(r(12),r(0)),d={display:"flex",width:"300px",flexWrap:"wrap",alignItem:"center"},l={height:"100px",width:"100px",fontSize:"28px",border:"none",background:"white"},b=function(){var e=Object(t.useState)(0),n=Object(s.a)(e,2),r=n[0],c=n[1],i=Object(t.useState)(""),b=Object(s.a)(i,2),o=b[0],O=b[1],j=Object(t.useState)([]),f=Object(s.a)(j,2),T=f[0],H=f[1],M=Object(t.useRef)(),p=Object(t.useRef)(),L=Object(t.useState)(0),h=Object(s.a)(L,2),x=h[0],X=h[1],v=Object(t.useState)(0),y=Object(s.a)(v,2),m=y[0],w=y[1],g=Object(t.useRef)(),D=Object(t.useRef)(),k=Object(t.useRef)(),S=Object(t.useRef)(),C=Object(t.useRef)(),P=Object(t.useRef)(),R=Object(t.useRef)(),W=function(){var e=[];if(e.push(M.current.innerHTML),e.push(p.current.innerHTML),e.push(g.current.innerHTML),e.push(D.current.innerHTML),e.push(k.current.innerHTML),e.push(S.current.innerHTML),e.push(C.current.innerHTML),e.push(P.current.innerHTML),e.push(R.current.innerHTML),"X"===e[0]&&"X"===e[1]&&"X"===e[2]||"X"===e[4]&&"X"===e[3]&&"X"===e[5]||"X"===e[4]&&"X"===e[2]&&"X"===e[6]||"X"===e[6]&&"X"===e[7]&&"X"===e[8]||"X"===e[6]&&"X"===e[3]&&"X"===e[0]||"X"===e[4]&&"X"===e[1]&&"X"===e[7]||"X"===e[8]&&"X"===e[2]&&"X"===e[5]||"X"===e[4]&&"X"===e[0]&&"X"===e[8]){if(r%2===0){O((function(){return"Player 1 Wins"}));var n=new Date,t=n.getHours(),c=n.getMinutes(),i=n.getSeconds(),s={winner:"Player 1 Wins",times:"".concat(t,":").concat(c,":").concat(i)};H((function(e){return[].concat(Object(u.a)(e),[s])})),X((function(e){return e+1}))}else{O((function(){return"Player 2 Wins"}));var a=new Date,d=a.getHours(),l=a.getMinutes(),b=a.getSeconds(),o={winner:"Player 2 Wins",times:"".concat(d,":").concat(l,":").concat(b)};H((function(e){return[].concat(Object(u.a)(e),[o])})),w((function(e){return e+1})),M.current.disabled=!0,p.current.disabled=!0,g.current.disabled=!0,D.current.disabled=!0,k.current.disabled=!0,S.current.disabled=!0,C.current.disabled=!0,R.current.disabled=!0,P.current.disabled=!0}setTimeout((function(){M.current.innerHTML="",p.current.innerHTML="",g.current.innerHTML="",D.current.innerHTML="",k.current.innerHTML="",S.current.innerHTML="",C.current.innerHTML="",P.current.innerHTML="",R.current.innerHTML="",M.current.disabled=!1,p.current.disabled=!1,g.current.disabled=!1,D.current.disabled=!1,k.current.disabled=!1,S.current.disabled=!1,C.current.disabled=!1,R.current.disabled=!1,P.current.disabled=!1,O((function(){return""}))}),1200)}else if("O"===e[0]&&"O"===e[1]&&"O"===e[2]||"O"===e[4]&&"O"===e[3]&&"O"===e[5]||"O"===e[4]&&"O"===e[2]&&"O"===e[6]||"O"===e[6]&&"O"===e[7]&&"O"===e[8]||"O"===e[6]&&"O"===e[3]&&"O"===e[0]||"O"===e[4]&&"O"===e[1]&&"O"===e[7]||"O"===e[8]&&"O"===e[2]&&"O"===e[5]||"O"===e[4]&&"O"===e[0]&&"O"===e[8]){if(r%2===0){O((function(){return"Player 1 Wins"}));var j=new Date,f=j.getHours(),T=j.getMinutes(),L=j.getSeconds(),h={winner:"player 1 Wins",times:"".concat(f,":").concat(T,":").concat(L)};H((function(e){return[].concat(Object(u.a)(e),[h])})),X((function(e){return e+1}))}else{O((function(){return"Player 2 Wins"}));var x=new Date,v=x.getHours(),y=x.getMinutes(),m=x.getSeconds(),W={winner:"Player 2 Wins",times:"".concat(v,":").concat(y,":").concat(m)};H((function(e){return[].concat(Object(u.a)(e),[W])})),w((function(e){return e+1})),M.current.disabled=!0,p.current.disabled=!0,g.current.disabled=!0,D.current.disabled=!0,k.current.disabled=!0,S.current.disabled=!0,C.current.disabled=!0,R.current.disabled=!0,P.current.disabled=!0}setTimeout((function(){M.current.innerHTML="",p.current.innerHTML="",g.current.innerHTML="",D.current.innerHTML="",k.current.innerHTML="",S.current.innerHTML="",C.current.innerHTML="",P.current.innerHTML="",R.current.innerHTML="",M.current.disabled=!1,p.current.disabled=!1,g.current.disabled=!1,D.current.disabled=!1,k.current.disabled=!1,S.current.disabled=!1,C.current.disabled=!1,R.current.disabled=!1,P.current.disabled=!1,O((function(){return""}))}),1200)}else{var N,I;for(I=0,N=0;N<9;N++)""===e[N]&&++I;if(0===I){O((function(){return"Draw"}));var J=new Date,z=J.getHours(),A=J.getMinutes(),B=J.getSeconds(),E={winner:"Match Draw",times:"".concat(z,":").concat(A,":").concat(B)};H((function(e){return[].concat(Object(u.a)(e),[E])})),setTimeout((function(){M.current.innerHTML="",p.current.innerHTML="",g.current.innerHTML="",D.current.innerHTML="",k.current.innerHTML="",S.current.innerHTML="",C.current.innerHTML="",P.current.innerHTML="",R.current.innerHTML="",M.current.disabled=!1,p.current.disabled=!1,g.current.disabled=!1,D.current.disabled=!1,k.current.disabled=!1,S.current.disabled=!1,C.current.disabled=!1,R.current.disabled=!1,P.current.disabled=!1,O((function(){return""}))}),1200)}}};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{style:{textAlign:"center",color:"white",marginTop:"10px"},children:"Tic Tac Toe"}),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsxs)("div",{className:"history",children:[Object(a.jsx)("h2",{children:"History"}),T.map((function(e,n){return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{id:"o1",children:e.times}),Object(a.jsx)("div",{id:"o2",children:e.winner})]},n)}))]}),Object(a.jsxs)("div",{className:"wrap",children:[Object(a.jsxs)("div",{className:"score",children:[Object(a.jsxs)("div",{className:"p1",children:[Object(a.jsx)("h4",{children:"Player 1 "}),Object(a.jsx)("p",{children:x})]}),Object(a.jsxs)("div",{className:"p2",children:[Object(a.jsx)("h4",{children:"Player 2 "}),Object(a.jsx)("p",{children:m})]})]}),Object(a.jsxs)("div",{style:d,children:[Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),M.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),M.current.disabled=!0},ref:M}),Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),p.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),p.current.disabled=!0},ref:p}),Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),g.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),g.current.disabled=!0},ref:g}),Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),D.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),D.current.disabled=!0},ref:D}),Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),k.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),k.current.disabled=!0},ref:k}),Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),S.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),S.current.disabled=!0},ref:S}),Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),C.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),C.current.disabled=!0},ref:C}),Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),P.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),P.current.disabled=!0},ref:P}),Object(a.jsx)("button",{style:l,onClick:function(e){e.preventDefault(),R.current.innerHTML=r%2===0?"X":"O",c((function(e){return e+1})),W(),R.current.disabled=!0},ref:R})]}),Object(a.jsx)("h1",{id:"pok",children:o})]}),Object(a.jsx)("div",{className:"empty"})]})]})};i.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.17cf90c3.chunk.js.map