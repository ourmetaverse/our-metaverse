"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[464],{33766:function(Re,W,n){var X=n(42122),a=n.n(X),Y=n(59400),M=n.n(Y),me=n(67294),h=n(17788),J=n(90018),D=n(4998),Q=n(85893),m,l=function(q){return(0,Q.jsx)(h.Z,a()({footer:null,className:(0,J.iv)(m||(m=M()([`
        top: 20%;
        .ant-modal-close {
          right: -46px;
          top: -46px;
          `,` {
            right: 0;
          }
        }
        .ant-modal-body {
          border: 2px solid #1443ff;
          border-radius: 10px;
        }
        .ant-modal-close-x {
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
          border: 1px solid #979797;
          color: #979797;
          &:hover {
            color: #1443ff;
            border: 1px solid #1443ff;
          }
        }
      `])),D.ai)},q))};W.Z=l},10175:function(Re,W,n){n.r(W),n.d(W,{default:function(){return Ye}});var X=n(59400),a=n.n(X),Y=n(42122),M=n.n(Y),me=n(17061),h=n.n(me),J=n(17156),D=n.n(J),Q=n(27424),m=n.n(Q),l=n(67294),_=n(45093),q=n(96074),P=n(12304),ce=n(17788);function Ze(u){var E=u.title,B=u.body,v=u.type;v==="error"&&ce.Z.error({title:E,content:B}),v==="success"&&ce.Z.success({title:E,content:B})}var ve=Ze,ke=n(35553),b=n(40964),r=n(90018),ee=n(4998),e=n(85893),pe,fe,he,ge,xe,Me,be,We="etherscan.io";function ne(u){var E=u.disabled,B=u.max,v=B===void 0?1:B,j=u.maxPerAddr,U=j===void 0?1:j,w=u.type,g=w===void 0?"common":w,te=u.name,I=u.defaultNumber,ae=I===void 0?1:I,L=u.onMintAmountChanged,ue=(0,l.useState)(ae),R=m()(ue,2),s=R[0],O=R[1],d=(0,l.useState)(!1),K=m()(d,2),S=K[0],$=K[1],Z=(0,P.useModel)("user"),H=Z.signer,k=Z.contract,G=(0,P.useIntl)(),C=G.formatMessage,re=function(c){var p;return c.code==="INSUFFICIENT_FUNDS"?C({id:"insufficient_funds"}):((p=c.data)===null||p===void 0?void 0:p.message)||c.message},N=function(c){O(c),L&&L(c)},A=b.jk;return g==="book"?A=b.XL:g==="movie"&&(A=b.E),(0,l.useEffect)(function(){s>v&&N(Math.max(v,1))},[v,s]),(0,e.jsxs)("div",{className:(0,r.iv)(pe||(pe=a()([`
        width: 243px;
        height: 328px;
        opacity: `,`;
        border: `,` solid #184cff;
        margin-bottom: 32px;
        &:hover {
          opacity: 1;
        }
        `,` {
          opacity: 1;
        }
      `])),g==="common"?"0.9":"0.5",g==="common"?"3px":"2px",ee.ai),children:[(0,e.jsx)("div",{className:(0,r.iv)(fe||(fe=a()([`
          font-size: 24px;
          margin-top: 24px;
        `]))),children:te}),(0,e.jsxs)("div",{className:(0,r.iv)(he||(he=a()([`
          font-size: 16px;
          opacity: 0.5;
          margin-top: 8px;
        `]))),children:[A,"ETH/NFT",(0,e.jsx)("br",{}),U===1?"ONLY 1":"MAX ".concat(U,"/Wallet")]}),(0,e.jsxs)("div",{className:(0,r.iv)(ge||(ge=a()([`
          width: 184px;
          height: 74px;
          line-height: 74px;
          border: 2px solid #184cff;
          margin: 18px auto;
          display: flex;
          flex-direction: row;
          .plus,
          .minus {
            font-size: 24px;
            height: 100%;
            width: 55px;
            line-height: 65px;
            opacity: 0.8;
            user-select: none;
            &:hover {
              opacity: 1;
            }
          }
          .minus {
            cursor: `,`;
          }
          .plus {
            cursor: `,`;
          }
        `])),s<=1?"not-allowed":"pointer",s>=v?"not-allowed":"pointer"),children:[(0,e.jsx)("div",{className:"minus",onClick:function(){s<=0||N(s-1)},children:"-"}),(0,e.jsx)("div",{className:(0,r.iv)(xe||(xe=a()([`
            width: 74px;
            background-color: #4f60a0;
            font-size: 40px;
          `]))),children:s}),(0,e.jsx)("div",{className:"plus",onClick:function(){s>=v||N(s+1)},children:"+"})]}),(0,e.jsxs)("div",{className:(0,r.iv)(Me||(Me=a()([`
          font-size: 16px;
          opacity: 0.5;
          margin-top: 8px;
          margin-bottom: 8px;
        `]))),children:["Total ",A*s,"ETH"]}),(0,e.jsx)(_.ZP,{disabled:E||s<=0,loading:S,type:"primary",className:(0,r.iv)(be||(be=a()([`
          overflow: hidden;
          &::after {
            background: #fff;
            content: '';
            height: 155px;
            left: -75px;
            opacity: 0.2;
            position: absolute;
            top: -50px;
            transform: rotate(35deg);
            width: 50px;
            z-index: 1;
          }
          &:hover {
            ::after {
              left: 120%;
              transition: all 1500ms cubic-bezier(0.19, 1, 0.22, 1);
            }
          }
        `]))),onClick:D()(h()().mark(function F(){var c,p,T,V;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(S||u.disabled||!k||!H)){t.next=2;break}return t.abrupt("return");case 2:if($(!0),t.prev=3,c=k.connect(H),p=ke.fi(String(s*A)),g!=="book"){t.next=12;break}return t.next=9,c.buyBookToken({value:p});case 9:T=t.sent,t.next=21;break;case 12:if(g!=="movie"){t.next=18;break}return t.next=15,c.buyMovieToken({value:p});case 15:T=t.sent,t.next=21;break;case 18:return t.next=20,c.mint(s,{value:p});case 20:T=t.sent;case 21:return t.next=23,T.wait();case 23:V=t.sent,ve({type:"success",title:C({id:"mint_succeed"}),body:(0,e.jsxs)("div",{children:[(0,e.jsx)("a",{href:"https://".concat(We,"/tx/").concat(V.transactionHash),target:"_blank",rel:"noreferrer",children:C({id:"view_on_etherscan"})}),(0,e.jsx)(q.Z,{type:"vertical"}),(0,e.jsx)("a",{href:"https://opensea.io/account",target:"_blank",rel:"noreferrer",children:C({id:"view_on_opensea"})})]})}),u.onMinted&&u.onMinted(),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(3),ve({type:"error",title:C({id:"mint_failed"}),body:re(t.t0)});case 31:$(!1);case 32:case"end":return t.stop()}},F,null,[[3,28]])})),style:u.style,children:S?C({id:"minting"}):"MINT"})]})}var ze=n(33766),z=n(8997),Ue=n(17909),we=n(75081),Ee=n(42075),Ke=n(10418),$e=n(57434),He=n(59727),Ge=n(29236),je,Ce,Fe,ye,Be,Ae,De,Ve=function(){var E=(0,Ue.F)(),B=E.pc,v=(0,P.useIntl)(),j=v.formatMessage,U=v.locale,w=(0,l.useState)(!1),g=m()(w,2),te=g[0],I=g[1],ae=(0,l.useState)(!1),L=m()(ae,2),ue=L[0],R=L[1],s=(0,P.useModel)("user"),O=s.address,d=s.contract,K=(0,l.useState)(0),S=m()(K,2),$=S[0],Z=S[1],H=(0,l.useState)(),k=m()(H,2),G=k[0],C=k[1],re=(0,l.useState)(!1),N=m()(re,2),A=N[0],F=N[1],c=(0,l.useState)(),p=m()(c,2),T=p[0],V=p[1],Te=(0,l.useState)(),t=m()(Te,2),Je=t[0],en=t[1],Qe=(0,l.useState)({common:3,book:0,movie:0}),Pe=m()(Qe,2),se=Pe[0],_e=Pe[1],ie=function(o){_e(o),o.common===1&&o.book===1&&o.movie===1&&((0,z.c)("\u4E00\u751F\u4E8C\uFF0C\u4E8C\u751F\u4E09\uFF0C\u4E09\u751F\u4E07\u7269..."),F(!0))};function qe(){return oe.apply(this,arguments)}function oe(){return oe=D()(h()().mark(function i(){var o;return h()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!d){f.next=8;break}return f.t0=parseInt,f.next=4,d.totalSupply();case 4:f.t1=f.sent,o=(0,f.t0)(f.t1),Z(o),d.on("Minted",D()(h()().mark(function y(){var Le;return h()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.t0=parseInt,x.next=3,d.totalSupply();case 3:x.t1=x.sent,Le=(0,x.t0)(x.t1),Z(Le);case 6:case"end":return x.stop()}},y)})));case 8:case"end":return f.stop()}},i)})),oe.apply(this,arguments)}var Ie=function(){var i=D()(h()().mark(function o(){var de;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!(d&&O)){y.next=5;break}return y.next=3,d.numberMinted(O);case 3:de=y.sent,C(parseInt(de));case 5:case"end":return y.stop()}},o)}));return function(){return i.apply(this,arguments)}}();if((0,l.useEffect)(function(){d&&(qe(),d.ownerOf(1).then(function(i){I(b.iF.toLowerCase()!==i.toLowerCase())}),d.ownerOf(0).then(function(i){R(b.iF.toLowerCase()!==i.toLowerCase())}))},[d]),(0,l.useEffect)(function(){Ie()},[d,O]),console.log("get contract",d),!d)return(0,e.jsxs)("div",{children:[U==="zh-CN"?(0,e.jsx)("div",{className:(0,r.iv)(je||(je=a()([`
              margin-bottom: 16px;
            `]))),children:(0,e.jsxs)("a",{className:(0,r.iv)(Ce||(Ce=a()([`
                color: white;
                opacity: 0.7;
                &:hover {
                  color: white;
                  opacity: 1;
                }
              `]))),target:"_blank",href:"https://www.yuque.com/docs/share/c893e308-681a-48d2-ba65-bd00649550b4?# ",children:[" ","\u300A\u5199\u7ED9\u6CA1\u6709\u4EE5\u592A\u574A\u94B1\u5305\u7684\u79D1\u5E7B\u7231\u597D\u8005\u4EEC\uFF0C\u70B9\u6211\u5F00\u542F Web3 \u7684\u5927\u95E8\u300B"]})}):null,(0,e.jsx)("div",{className:(0,r.iv)(Fe||(Fe=a()([`
            margin: 0 auto;
            display: flex;
            justify-content: center;
          `]))),children:(0,e.jsx)(Ge.Z,{})})]});if(G===void 0||O===void 0)return(0,e.jsx)(we.Z,{});var le=Math.max(b.gi-G,0);return(0,e.jsxs)("div",{className:(0,r.iv)(ye||(ye=a()([`
        text-align: center;
      `]))),children:[(0,e.jsxs)("div",{className:(0,r.iv)(Be||(Be=a()([`
          font-size: 20px;
          text-align: center;
          margin-bottom: 16px;
        `]))),children:[j({id:"mint_progress"}),"\uFF1A",$," / ",b.ei,(0,e.jsx)("br",{}),j({id:"mint_available_count"},{count:le})]}),(0,e.jsxs)(Ee.Z,{direction:B?"horizontal":"vertical",children:[(0,e.jsx)(ne,{type:"common",disabled:le<=0,onMinted:function(){Ie(),(0,He.Z)({zIndex:9e3})},name:j({id:"mint_tip"}),max:le,maxPerAddr:b.gi,defaultNumber:3,onMintAmountChanged:function(o){(0,z.c)("\u4E00\u751F\u4E8C..."),ie(M()(M()({},se),{},{common:o}))}}),(0,e.jsx)(ne,{type:"book",disabled:te,onMinted:function(){I(!0)},defaultNumber:0,name:j({id:"mint_book_token"}),onMintAmountChanged:function(o){(0,z.c)("...\u4E8C\u751F\u4E09..."),ie(M()(M()({},se),{},{book:o}))}}),(0,e.jsx)(ne,{type:"movie",disabled:ue,name:j({id:"mint_movie_token"}),defaultNumber:0,onMinted:function(){R(!0)},onMintAmountChanged:function(o){(0,z.c)("...\u4E09\u751F\u4E07\u7269..."),ie(M()(M()({},se),{},{movie:o}))}})]}),(0,e.jsx)(ze.Z,{visible:A,onCancel:function(){F(!1)},children:Je?(0,e.jsxs)("div",{className:(0,r.iv)(Ae||(Ae=a()([`
              text-align: center;
            `]))),children:["\u{1F389}\u{1F389}\u{1F389} \u606D\u559C\u4F60\u627E\u5230\u4E86\u6B63\u786E\u7684\u94A5\u5319 \u{1F389}\u{1F389}\u{1F389} \u4F46\u662F\u6D3B\u52A8\u5DF2\u7ECF\u7ED3\u675F\u4E86\uFF0C\u611F\u8C22\u53C2\u4E0E\u3002",(0,e.jsx)("img",{className:(0,r.iv)(De||(De=a()([`
                margin: 16px auto;
                display: block;
              `]))),src:"/xiaoyuan.png",alt:""})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h2",{children:"\u5B87\u5B99\u5965\u79D8\u7684\u5927\u95E8\u5DF2\u7ECF\u627E\u5230\uFF01"}),(0,e.jsx)("h6",{children:"\u4F1F\u5927\u7684\u5192\u9669\u5BB6\uFF0C\u53BB\u5BFB\u627E\u5C5E\u4E8E\u4F60\u81EA\u5DF1\u7684\u94A5\u5319\u5427\uFF01"}),(0,e.jsx)("h6",{children:"\u94A5\u5319\u7531\u4E24\u4E2A\u788E\u7247\u7EC4\u6210\uFF0C\u53BB\u627E\u5230\u5B83\u4EEC\uFF01\u53BB\u5BFB\u627E\u5408\u6210\u7684\u65B9\u6CD5\uFF01\u5BC6\u7801\u548C\u7B54\u6848\u5C31\u9690\u85CF\u5728\u5143\u5B87\u5B99\u4E2D\uFF01"}),(0,e.jsx)("h6",{children:"\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684 NFT \u7F16\u53F7\u5C06\u6307\u5F15\u4F60\u8D70\u5411\u901A\u5F80\u7EC8\u6781\u4E4B\u5730\u7684\u866B\u6D1E\uFF01"}),(0,e.jsx)("br",{}),(0,e.jsxs)(Ee.Z,{children:[(0,e.jsx)(Ke.Z,{style:{width:200},placeholder:"\u4F60\u7684\u94A5\u5319",value:T,onChange:V}),(0,e.jsx)(_.ZP,{type:"primary",onClick:function(){$e.ZP.warning("\u6D3B\u52A8\u5DF2\u7ED3\u675F")},children:"\u5F00\u542F\u5B87\u5B99\u4E4B\u95E8"})]})]})})]})},Xe=Ve,Oe,Se,Ne,Ye=function(){var u=(0,P.useIntl)(),E=u.formatMessage;return(0,e.jsx)("div",{className:(0,r.iv)(Oe||(Oe=a()([`
        text-align: center;
        min-height: 600px;
        padding-top: 120px;
        padding-bottom: 80px;
        background: linear-gradient(to bottom, #000000, #112a94 30%, #1a41e4);
        `,` {
          padding-top: 80px;
        }
      `])),ee.ai),children:(0,e.jsxs)("div",{className:(0,r.iv)(Se||(Se=a()([`
          max-width: 1072px;
          margin: 0 auto;
          background: rgba(0, 0, 0, 50%);
          border-radius: 10px;
          padding: 57px 116px 47px 116px;
          margin-top: 32px;
          `,` {
            margin: 16px;
            padding: 64px 8px;
          }
        `])),ee.ai),children:[(0,e.jsx)(Xe,{}),(0,e.jsx)("div",{className:(0,r.iv)(Ne||(Ne=a()([`
            font-size: 20px;
            margin-top: 18px;
          `]))),children:E({id:"mint_slogan"})})]})})}}}]);
