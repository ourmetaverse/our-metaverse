(self.webpackChunk=self.webpackChunk||[]).push([[814,79],{3584:function(S,u,e){"use strict";var v=e(59400),r=e.n(v),A=e(67294),f=e(90018),y=e(4998),I=e(85893),D,m=function(i){var n=i.width,l=n===void 0?180:n,L=i.primary,b=i.left;return(0,I.jsx)("div",{className:(0,f.iv)(D||(D=r()([`
        width: `,`px;
        background: url(`,`)
          no-repeat;
        height: 20px;
        margin: 0 `,`;
        margin-top: 16px;
        margin-bottom: 32px;
        `,` {
          margin-bottom: 32px;
        }
      `])),l,L?"/blueprimaryline.png":"/blueline.png",b?"":"auto",y.ai)})};u.Z=m},33766:function(S,u,e){"use strict";var v=e(42122),r=e.n(v),A=e(59400),f=e.n(A),y=e(67294),I=e(17788),D=e(90018),m=e(4998),c=e(85893),i,n=function(L){return(0,c.jsx)(I.Z,r()({footer:null,className:(0,D.iv)(i||(i=f()([`
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
      `])),m.ai)},L))};u.Z=n},56104:function(S,u,e){"use strict";e.r(u);var v=e(59400),r=e.n(v),A=e(17061),f=e.n(A),y=e(17156),I=e.n(y),D=e(27424),m=e.n(D),c=e(3584),i=e(33766),n=e(4998),l=e(90018),L=e(91478),b=e(17909),O=e(57434),w=e(42075),ue=e(75081),me=e(24383),q=e(71230),h=e(15746),ve=e(37356),ee=e(38018),W=e(67294),x=e(12304),ne=e(11238),ce=e(71542),s=e(85893),te,U,ae,N,$,G,z,F,H,K,j=10;u.default=function(){var he=(0,W.useState)(1),J=m()(he,2),t=J[0],p=J[1],re=(0,x.useLocation)(),Z=(0,x.useIntl)(),pe=Z.formatMessage,se=(0,W.useState)(),Q=m()(se,2),C=Q[0],oe=Q[1],X=(0,L.Z)(I()(f()().mark(function _(){var g;return f()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,ne.ZP)("https://server-pink-rho.vercel.app/api/images",{params:{start:(t-1)*j}});case 2:return g=P.sent,P.abrupt("return",g);case 4:case"end":return P.stop()}},_)})),{onError:function(g){O.ZP.error(g.message)},refreshDeps:[t]}),V=X.data,ie=V===void 0?{}:V,ge=X.loading,Y=ie.images,E=Y===void 0?[]:Y,le=ie.total,B=le===void 0?1200:le,T=(0,b.F)(),k=T.pc;(0,W.useEffect)(function(){var _=(0,ee.parse)(re.search).token;if(_!==void 0&&typeof _=="string")if(!k)x.history.push("/nfts/token?token=".concat(_));else{var g=parseInt(_);oe(g),p(Math.floor(g/j)+1)}},[re.search,k]);var de=E.map(function(_,g){var d=(t-1)*j+g;return(0,s.jsxs)("div",{className:(0,l.iv)(te||(te=r()([`
          margin-bottom: 24px;
          margin-right: 24px;
          `,` {
            margin-right: 0;
          }
        `])),n.ai),children:[(0,s.jsx)("img",{className:(0,l.iv)(U||(U=r()([`
            width: 220px;
            height: 220px;
            box-shadow: 0px 2px 30px #3e3e3e;
            cursor: pointer;
            `,` {
              width: `,`px;
              height: `,`px;
            }
          `])),n.ai,document.body.clientWidth/2-24,document.body.clientWidth/2-24),src:_,alt:"",onClick:function(){k?x.history.push("nfts?token=".concat(d)):x.history.push("nfts/token?token=".concat(d))}}),(0,s.jsxs)("div",{className:(0,l.iv)(ae||(ae=r()([`
            text-align: center;
            font-size: 24px;
            margin-top: 8px;
          `]))),children:["#",d]})]},d)});return(0,s.jsxs)("div",{className:(0,l.iv)(N||(N=r()([`
        padding-top: 120px;
        background: linear-gradient(`,`, #000);
        `,` {
          padding: 120px 16px;
        }
      `])),n.lr,n.ai),children:[(0,s.jsxs)("div",{className:(0,l.iv)($||($=r()([`
          max-width: `,`;
          margin: 0 auto;
        `])),n.kk),children:[(0,s.jsxs)("div",{className:(0,l.iv)(G||(G=r()([`
            font-size: 50px;
          `]))),children:[(0,s.jsx)("div",{children:pe({id:"nft_gallery"})}),(0,s.jsx)(c.Z,{left:!0})]}),(0,s.jsx)(w.Z,{className:(0,l.iv)(z||(z=r()([`
            justify-content: space-between;
          `]))),wrap:!0,children:ge?(0,s.jsx)("div",{style:{height:587},children:(0,s.jsx)(ue.Z,{})}):de}),(0,s.jsx)("div",{className:(0,l.iv)(F||(F=r()([`
            margin-top: 24px;
          `]))),children:(0,s.jsx)(me.Z,{showSizeChanger:!1,current:t,pageSize:j,showQuickJumper:!0,onChange:p,total:B})})]}),(0,s.jsx)(i.Z,{visible:C!==void 0,styles:{content:{padding:0}},width:"1000px",onCancel:function(){x.history.push("nfts"),oe(void 0)},footer:!1,children:(0,s.jsxs)(q.Z,{gutter:60,className:(0,l.iv)(H||(H=r()([`
            padding: 70px;
          `]))),children:[C!==void 0&&C<B?(0,s.jsx)(h.Z,{span:12,children:(0,s.jsx)(ve.Z,{className:(0,l.iv)(K||(K=r()([`
                  box-shadow: 0px 2px 30px #1443ff;
                  border-radius: 10px;
                `]))),width:400,height:400,src:E.length?E[C%j]:"/blindbox2.gif",alt:""})}):null,(0,s.jsx)(h.Z,{span:12,children:(0,s.jsx)("div",{children:C!==void 0?(0,s.jsx)(ce.default,{token:C}):null})})]})})]})}},71542:function(S,u,e){"use strict";e.r(u),e.d(u,{default:function(){return he}});var v=e(59400),r=e.n(v),A=e(17061),f=e.n(A),y=e(17156),I=e.n(y),D=e(27424),m=e.n(D),c=e(67294),i=e(90018),n=e(85893),l,L=function(t){var p=t.type;return(0,n.jsxs)("div",{className:(0,i.iv)(l||(l=r()([`
        display: inline-block;
        height: 60px;
        width: 60px;
        .ourm-icon-image-hover {
          display: none;
        }
        .ourm-icon-image {
          display: block;
        }
        &:hover {
          .ourm-icon-image {
            display: none;
          }
          .ourm-icon-image-hover {
            display: block;
          }
        }
      `]))),children:[(0,n.jsx)("img",{className:"ourm-icon-image",src:"/".concat(p,".png"),alt:""}),(0,n.jsx)("img",{className:"ourm-icon-image-hover",src:"/".concat(p,"-hover.png"),alt:""})]})},b=L,O=e(40964),w=e(4998),ue=e(17909),me=e(91478),q=e(56518),h=e(57434),ve=e(37356),ee=e(42075),W=e(45093),x=e(78205),ne=e(38289),ce=e(87192),s=e(35553),te=e(38018),U=e(12304),ae=e(11238),N,$,G,z,F,H,K=q.Z.Option,j={ipfs:{reg:/^\w{46}(\/.*)?$/,placeholder:"CID like QmP1vMSaw3rG2coQaBfgqBhax1t8qyyng1Z91cjcH8MvBc"},ethereum:{reg:/^0x[0-9a-fA-F]{40}$/,placeholder:"Address like 0xEcd0D12E21805803f70de03B72B1C162dB0898d9"},custom:{reg:/^.{1, 128}$/,placeholder:"Custom text length less then 128"}},he=function(J){var t=J.token,p=(0,te.parse)(location.search).token;t===void 0&&p!==void 0&&typeof p=="string"&&(t=parseInt(p));var re=(0,ue.F)(),Z=re.pc,pe=(0,c.useState)(0),se=m()(pe,2),Q=se[0],C=se[1],oe=(0,c.useState)([]),X=m()(oe,2),V=X[0],ie=X[1],ge=(0,c.useState)(""),Y=m()(ge,2),E=Y[0],le=Y[1],B=(0,U.useModel)("user"),T=B.contract,k=B.ConnectTip,de=B.address,_=B.contractWithSigner,g=(0,U.useIntl)(),d=g.formatMessage,P=(0,c.useState)(),Ee=m()(P,2),fe=Ee[0],Oe=Ee[1],Me=(0,c.useState)("ethereum"),xe=m()(Me,2),_e=xe[0],De=xe[1],je=(0,me.Z)(I()(f()().mark(function o(){var a,M,Pe;return f()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(!(t===void 0||Z)){R.next=2;break}return R.abrupt("return","");case 2:return R.next=4,(0,ae.ZP)("https://api.our-metaverse.xyz/api/images",{params:{start:t,len:1}});case 4:return a=R.sent,M=a.images,Pe=M===void 0?[]:M,R.abrupt("return",Pe[0]);case 8:case"end":return R.stop()}},o)})),{onError:function(a){h.ZP.error(a.message)},refreshDeps:[t]}),Ce=je.data;return(0,c.useEffect)(function(){Z&&p&&U.history.push("/nfts?token=".concat(p)),T&&(T.getRewardBalanceWithToken(t).then(function(o){C(Number(o))}).catch(function(o){var a;h.ZP.error(((a=o.data)===null||a===void 0?void 0:a.message)||o.message)}),T.ownerOf(t).then(function(o){Oe(o)}).catch(function(o){Oe(d({id:"not_mint_yet"}))}),T.getGrantsWithToken(t).then(ie).catch(function(o){var a;h.ZP.error(((a=o.data)===null||a===void 0?void 0:a.message)||o.message)}))},[T,t,Z]),!T||!_?(0,n.jsx)("div",{className:(0,i.iv)(N||(N=r()([`
          `,` {
            margin: 16px;
            margin-top: 100px;
          }
        `])),w.ai),children:(0,n.jsx)(k,{})}):t&&t>=O.ei?(0,n.jsx)("div",{children:d({id:"empty_token_tip"},{token:t})}):(0,n.jsxs)("div",{className:(0,i.iv)($||($=r()([`
        `,` {
          padding: 120px 16px;
        }
      `])),w.ai),children:[(0,n.jsx)("div",{className:(0,i.iv)(G||(G=r()([`
          font-size: 24px;
          opacity: 0.5;
          margin-top: -10px;
        `]))),children:"OurMetaverse"}),(0,n.jsxs)("div",{className:(0,i.iv)(z||(z=r()([`
          font-size: 50px;
          color: white;
        `]))),children:["# ",t]}),Z?null:(0,n.jsx)(ve.Z,{className:(0,i.iv)(F||(F=r()([`
            width: 100%;
          `]))),src:Ce||"/blindbox2.gif"}),(0,n.jsx)(ee.Z,{className:(0,i.iv)(H||(H=r()([`
          margin-bottom: 12px;
        `]))),children:(0,n.jsx)("a",{target:"_blank",title:"OpenSea",href:"https://opensea.io/assets/0xecd0d12e21805803f70de03b72b1c162db0898d9/".concat(t),children:(0,n.jsx)(b,{type:"opensea"})})}),(0,n.jsx)(ee.Z,{children:Q>0&&de===fe?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(W.ZP,{onClick:function(){_.receiveRewardBalanceWithToken(t).then(function(){h.ZP.success(d({id:"withdraw_succeed"}))}).catch(function(a){var M;h.ZP.error(((M=a.data)===null||M===void 0?void 0:M.message)||a.message)})},children:[d({id:"available_reward"}),"\uFF1A",Q/O.yg," ETH"," ",d({id:"withdraw_now"})]})}):null}),(0,n.jsx)(x.Z,{header:(0,n.jsx)("div",{children:d({id:"grant_list"})}),footer:de===fe?(0,n.jsxs)(ne.Z.Group,{compact:!0,children:[(0,n.jsx)(ne.Z,{placeholder:j[_e].placeholder,addonBefore:(0,n.jsxs)(q.Z,{onChange:De,value:_e,className:"select-before",children:[(0,n.jsx)(K,{value:"ethereum",children:"Ethereum"}),(0,n.jsx)(K,{value:"ipfs",children:"ipfs://"}),(0,n.jsx)(K,{value:"custom",children:"Custom"})]}),style:{width:"calc(100% - 67px)"},value:E,onChange:function(a){le(a.target.value)}}),(0,n.jsx)(W.ZP,{type:"primary",onClick:function(){if(!E){h.ZP.error(d({id:"grant_required"}));return}if(!j[_e].reg.test(E)){h.ZP.error(d({id:"grant_validate"}));return}if(E.length>O.JH){h.ZP.error(d({id:"grant_limit"},{grantLimitLength:O.JH}));return}var a=O.$g;t===0?a=O.E:t===1&&(a=O.XL);var M=s.fi(String(V.length*a));_.grant(t,_e==="ipfs"?"ipfs://".concat(E):E,{value:M})},children:d({id:"add_grant"})})]}):null,bordered:!0,dataSource:V,renderItem:function(a){return(0,n.jsxs)(x.Z.Item,{children:[(0,n.jsx)(ce.Z.Text,{mark:!0,children:"[GRANT]"})," ",a]})}})]})}},15746:function(S,u,e){"use strict";var v=e(21584);u.Z=v.Z},71230:function(S,u,e){"use strict";var v=e(92820);u.Z=v.Z},24654:function(){}}]);
